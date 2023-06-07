'use client';

import useSearchModal from "@/hooks/useSearchModal";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  const searchModal = useSearchModal();

  return (
    <button
      className="
        flex
        items-center
        justify-between
        sm:py-2
        border-[1px]
        rounded-full
        text-sm
        font-semibold
        shadow-sm
        hover:shadow-md
        transition
      "
      onClick={searchModal.onOpen}
    >
      <span className="hidden sm:block px-6">Anywhere</span>
      <span className="hidden sm:block flex-1 px-6 border-x-[1px] text-center">Any Week</span>
      <span className="flex items-center gap-3 sm:pl-6 sm:pr-2 font-normal text-gray-600">
        <span className="hidden sm:block">Add Guests</span>
        <span className="p-2 rounded-full bg-red-500 text-white">
          <BiSearch />
        </span>
      </span>
    </button>
  )
}

export default Search;
