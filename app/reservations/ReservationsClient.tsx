'use client';

import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

import { SafeReservation, SafeUser } from "../types";

import Container from "@/components/Container";
import ListingCard from "@/components/listings/ListingCard";

interface ReservationsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
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
    .catch(() => {
      toast.error('Something went wrong');
    })
    .finally(() => {
      setDeletingId('');
    })
  }, [router]);

  return (
    <main className="pt-28 pb-8">
      <Container>
        <h1 className="text-3xl font-bold">Reservations</h1>
        <p className="mt-2 text-neutral-500">
          Bookings on your properties
        </p>
        <div className="grid grid-cols-cards gap-5 mt-10">
          {reservations.map(item => (
            <ListingCard
              key={item.id}
              data={item.listing}
              reservation={item}
              actionId={item.id}
              onAction={onCancel}
              disabled={deletingId === item.id}
              actionLabel="Cancel guest reservation"
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </main>
  )
}

export default ReservationsClient;
