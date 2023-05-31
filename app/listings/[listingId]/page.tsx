import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";

import Empty from "@/components/Empty";

import ListingClient from "./ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <main>
        <h1 className="sr-only">Invalid listing</h1>
        <Empty />
      </main>
    )
  }

  return (
    <ListingClient
      listing={listing}
      currentUser={currentUser}
    />
  )
}

export default ListingPage;
