'use client';

import { SafeUser } from "@/app/types";

import useFavorite from "@/hooks/useFavorite";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const Like: React.FC<LikeProps> = ({ listingId, currentUser }) => {
  const { isFavorite, toggleFavorite } = useFavorite({
    listingId,
    currentUser
  });

  return (
    <button
      className="block relative hover:opacity-80 transition"
      onClick={toggleFavorite}
      aria-label={isFavorite ? 'Unmark as favorite' : 'Mark as favorite'}
    >
      <AiOutlineHeart
        size={28}
        className="absolute -top-[2px] -right-[2px] fill-white"
      />
      <AiFillHeart
        size={24}
        className={isFavorite ? 'fill-rose-500' : 'fill-neutral-500/70'}
      />
    </button>
  )
}

export default Like;
