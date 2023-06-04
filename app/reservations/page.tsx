import Empty from "@/components/Empty";
import ReservationsClient from "./ReservationsClient";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";

const ReservationsPage = async () => {
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
    authorId: currentUser.id
  });

  if (reservations.length === 0) {
    return (
      <main>
        <Empty
          title="No reservations found"
          subtitle="Looks like you have no reservations on your properties"
        />
      </main>
    )
  }

  return (
    <ReservationsClient
      reservations={reservations}
      currentUser={currentUser}
    />
  )
}

export default ReservationsPage;
