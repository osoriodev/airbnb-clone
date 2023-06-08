'use client';

import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

import Container from "@/components/Container";
import ListingCard from "@/components/listings/ListingCard";

import { SafeListing, SafeUser } from "../types";

interface PropertiesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
  listings,
  currentUser
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback((id: string) => {
    setDeletingId(id);

    axios.delete(`/api/listings/${id}`)
    .then(() => {
      toast.success('Listing deleted');
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
    <main className="pt-28 pb-8">
      <Container>
        <h1 className="text-3xl font-bold">Properties</h1>
        <p className="mt-2 text-neutral-500">
          List of your properties
        </p>
        <div className="grid grid-cols-cards gap-5 mt-10">
          {listings.map(item => (
            <ListingCard
              key={item.id}
              data={item}
              actionId={item.id}
              onAction={onCancel}
              disabled={deletingId === item.id}
              actionLabel="Delete property"
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </main>
  )
}

export default PropertiesClient;
