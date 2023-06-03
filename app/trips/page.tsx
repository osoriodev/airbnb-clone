import Empty from "@/components/Empty";
import TripsClient from "./TripsClient";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";

const TripsPage = async () => {
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

  const reservations = await getReservations({
    userId: currentUser.id
  });

  if (reservations.length === 0) {
    return (
      <main>
        <Empty
          title="No trips found"
          subtitle="Looks like you haven't reserved any trips"
        />
      </main>
    )
  }

  return (
    <TripsClient
      reservations={reservations}
      currentUser={currentUser}
    />
  )
}

export default TripsPage;
