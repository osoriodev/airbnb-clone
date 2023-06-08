'use client';

import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from "date-fns";
import Image from "next/image";

import { SafeListing, SafeReservation, SafeUser } from "@/app/types";

import useCountries from "@/hooks/useCountries";

import Like from "../Like";
import Button from "../Button";

interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(() => {
    if (disabled) return;

    onAction?.(actionId);
  }, [disabled, onAction, actionId]);

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) return null;

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, 'PP')} - ${format(end, 'PP')}`
  }, [reservation]);

  return (
    <article className="flex flex-col gap-2">
      <div className="w-full relative rounded-xl aspect-square overflow-hidden">
        <Image
          fill
          src={data.imageSrc}
          alt="Listing"
          className="w-full h-full object-cover transition hover:scale-105 cursor-pointer"
          onClick={() => router.push(`/listings/${data.id}`)}
        />
        <div className="absolute top-3 right-3">
          <Like
            listingId={data.id}
            currentUser={currentUser}
          />
        </div>
      </div>
      <h2>
        <button
          className="font-semibold text-lg hover:underline"
          onClick={() => router.push(`/listings/${data.id}`)}
        >
          {location?.label}, {location?.region}
        </button>
      </h2>
      <p className="font-light text-neutral-500">
        {reservationDate || data.category}
      </p>
      <p>
        <span className="font-semibold">${price}</span>
        {!reservation && (
          <span className="font-light"> night</span>
        )}
      </p>
      {onAction && actionLabel && (
        <Button
          label={actionLabel}
          onClick={handleCancel}
          disabled={disabled}
          small
        />
      )}
    </article>
  )
}

export default ListingCard;
