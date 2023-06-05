import Empty from "@/components/Empty";
import PropertiesClient from "./PropertiesClient";

import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <main>
        <Empty
          title="Unauthorized"
          subtitle="Please login"
        />
      </main>
    )
  }

  const listings = await getListings({
    userId: currentUser.id
  });

  if (listings.length === 0) {
    return (
      <main>
        <Empty
          title="No properties found"
          subtitle="Looks like you have no properties"
        />
      </main>
    )
  }

  return (
    <PropertiesClient
      listings={listings}
      currentUser={currentUser}
    />
  )
}

export default PropertiesPage;
