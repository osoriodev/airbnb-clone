'use client';

import Container from "@/components/Container";
import ListingCard from "@/components/listings/ListingCard";

import { SafeListing, SafeUser } from "../types";

interface FavoritesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
  currentUser
}) => {
  return (
    <main>
      <Container>
        <h1 className="text-3xl font-bold">Favorites</h1>
        <p className="mt-2 text-neutral-500">
          List of places you have favorited!
        </p>
        <div className="grid grid-cols-cards gap-5 mt-10">
          {listings.map(item => (
            <ListingCard
              key={item.id}
              data={item}
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </main>
  )
}

export default FavoritesClient;
