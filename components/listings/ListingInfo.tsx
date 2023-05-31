'use client';

import dynamic from "next/dynamic";

import useCountries from "@/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";

const Map = dynamic(() => import('../Map'), {
  ssr: false
});

interface ListingInfoProps {
  user: SafeUser;
  desc: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category: {
    label: string;
    icon: IconType;
    desc: string;
  } | undefined
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  desc,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <p className="text-xl font-semibold">
            Hosted by {user.name}
          </p>
          <Avatar src={user.image} />
        </div>
        <div className="flex items-center gap-4 font-light text-neutral-500">
          <p>{guestCount} guests</p>
          <p>{roomCount} rooms</p>
          <p>{bathroomCount} bathrooms</p>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          label={category.label}
          icon={category.icon}
          desc={category.desc}
        />
      )}
      <hr />
      <p className="text-lg font-light text-neutral-500">{desc}</p>
      <hr />
      <Map center={coordinates} />
    </div>
  )
}

export default ListingInfo;
