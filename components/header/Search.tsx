'use client';

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { differenceInDays } from "date-fns";

import useSearchModal from "@/hooks/useSearchModal";
import useCountries from "@/hooks/useCountries";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get('locationValue');
  const startDate = params?.get('startDate');
  const endDate = params?.get('endDate');
  const guestCount = params?.get('guestCount');

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return 'Anywhere';
  }, [locationValue, getByValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} days`;
    }

    return 'Any Week';
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} guests`;
    }

    return 'Add Guests';
  }, [guestCount]);

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
      <span className="hidden sm:block px-6">{locationLabel}</span>
      <span className="hidden sm:block flex-1 px-6 border-x-[1px] text-center">{durationLabel}</span>
      <span className="flex items-center gap-3 sm:pl-6 sm:pr-2 font-normal text-gray-600">
        <span className="hidden sm:block">{guestLabel}</span>
        <span className="p-2 rounded-full bg-red-500 text-white">
          <BiSearch />
        </span>
      </span>
    </button>
  )
}

export default Search;
