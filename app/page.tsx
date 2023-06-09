export const dynamic = 'force-dynamic';

import Container from "@/components/Container";
import Empty from "@/components/Empty";
import ListingCard from "@/components/listings/ListingCard";

import getListings, { IListingsParams } from "./actions/getListings";
import getCurrentUser from "./actions/getCurrentUser";

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <main>
        <Empty showReset />
      </main>
    )
  }

  return (
    <main className="pt-52 pb-8">
      <h1 className="sr-only">Listings</h1>
      <Container>
        <div className="grid grid-cols-cards gap-5">
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

export default Home;
