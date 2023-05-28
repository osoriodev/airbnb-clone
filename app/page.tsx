import Container from "@/components/Container";
import Empty from "@/components/Empty";
import ListingCard from "@/components/listings/ListingCard";

import getListings from "./actions/getListings";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <main>
        <h1 className="sr-only">Listings</h1>
        <Empty showReset />
      </main>
    )
  }

  return (
    <main className="pt-52 pb-20">
      <h1 className="sr-only">Listings</h1>
      <Container>
        <div className="grid grid-cols-cards gap-5 pt-2">
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              data={listing}
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </main>
  )
}
