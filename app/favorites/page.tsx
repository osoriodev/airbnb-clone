import Empty from "@/components/Empty";
import FavoritesClient from "./FavoritesClient";

import getCurrentUser from "../actions/getCurrentUser";
import getFavorites from "../actions/getFavorites";

const FavoritesPage = async () => {
  const favorites = await getFavorites();
  const currentUser = await getCurrentUser();

  if (favorites.length === 0) {
    return (
      <main>
        <Empty
          title="No favorites found"
          subtitle="Looks like you have no favorite listings"
        />
      </main>
    )
  }

  return (
    <FavoritesClient
      listings={favorites}
      currentUser={currentUser}
    />
  )
}

export default FavoritesPage;
