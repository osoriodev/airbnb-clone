'use client';

import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

import Container from "@/components/Container";
import ListingCard from "@/components/listings/ListingCard";

import { SafeReservation, SafeUser } from "../types";

interface TripsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
  currentUser
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback((id: string) => {
    setDeletingId(id);

    axios.delete(`/api/reservations/${id}`)
    .then(() => {
      toast.success('Reservation canceled');
      router.refresh();
    })
    .catch(error => {
      toast.error(error?.response?.data?.error);
    })
    .finally(() => {
      setDeletingId('');
    })
  }, [router]);

  return (
    <main>
      <Container>
        <h1 className="text-3xl font-bold">Trips</h1>
        <p className="mt-2 text-neutral-500">
          Where you've been and where you're going
        </p>
        <div className="grid grid-cols-cards mt-10">
          {reservations.map(item => (
            <ListingCard
              key={item.id}
              data={item.listing}
              reservation={item}
              actionId={item.id}
              onAction={onCancel}
              disabled={deletingId === item.id}
              actionLabel="Cancel reservation"
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </main>
  )
}

export default TripsClient;
