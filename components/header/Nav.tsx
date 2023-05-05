'use client';

import { BiSearch } from "react-icons/bi";

const Nav = () => {
  return (
    <div className="w-full md:w-auto py-2 border-[1px] rounded-full shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <button className="text-sm font-semibold px-6">Anywhere</button>
        <button className="hidden sm:block flex-1 px-6 border-x-[1px] text-sm font-semibold text-center">Any Week</button>
        <button className="flex items-center gap-3 pl-6 pr-2 text-sm text-gray-600">
          <span className="hidden sm:block">Add Guests</span>
          <span className="p-2 rounded-full bg-red-500 text-white">
            <BiSearch />
          </span>
        </button>
      </div>
    </div>
  )
}

export default Nav;
