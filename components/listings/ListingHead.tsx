'use client';

import Image from "next/image";

import { SafeUser } from "@/app/types";
import useCountries from "@/hooks/useCountries";

import Like from "../Like";

interface ListingHeadProps {
  id: string;
  title: string;
  locationValue: string;
  imageSrc: string;
  currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  id,
  title,
  locationValue,
  imageSrc,
  currentUser
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-neutral-500">
          {`${location?.label}, ${location?.region}`}
        </p>
      </div>
      <div className="w-full h-[68vh] relative rounded-xl overflow-hidden">
        <Image
          className="w-full object-cover"
          src={imageSrc}
          alt="Place"
          fill
        />
        <div className="absolute top-5 right-5">
          <Like
            listingId={id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </>
  )
}

export default ListingHead;
