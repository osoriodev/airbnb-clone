'use client';

import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { categories } from "@/components/header/Categories";

import Container from "@/components/Container";
import ListingHead from "@/components/listings/ListingHead";
import ListingInfo from "@/components/listings/ListingInfo";
import ListingReservation from "@/components/listings/ListingReservation";

import useLoginModal from "@/hooks/useLoginModal";

import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import { toast } from "react-hot-toast";
import { Range } from "react-date-range";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
}

interface ListingClientProps {
  reservations?: SafeReservation[];
  listing: SafeListing & {
    user: SafeUser
  };
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  reservations = [],
  currentUser
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];

    reservations.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate)
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  const onCreateReservation = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    setIsLoading(true);

    axios.post('/api/reservations', {
      totalPrice,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      listingId: listing.id
    })
    .then(() => {
      toast.success('Listing reserved!');
      setDateRange(initialDateRange);
      router.push('/trips');
    })
    .catch(() => {
      toast.error('Something went wrong');
    })
    .finally(() => {
      setIsLoading(false);
    })
  }, [currentUser, loginModal, totalPrice, dateRange, listing.id, router]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );

      if (dayCount && listing.price) {
        setTotalPrice(dayCount * listing.price);
      } else {
        setTotalPrice(listing.price);
      }
    }
  }, [dateRange, listing.price]);

  const category = useMemo(() => {
    return categories.find(item => item.label === listing.category);
  }, [listing.category]);

  return (
    <main className="pt-32 pb-12">
      <Container>
        <div className="max-w-screen-lg mx-auto flex flex-col gap-6">
          <ListingHead
            id={listing.id}
            title={listing.title}
            locationValue={listing.locationValue}
            imageSrc={listing.imageSrc}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <ListingInfo
              user={listing.user}
              desc={listing.description}
              guestCount={listing.guestCount}
              roomCount={listing.roomCount}
              bathroomCount={listing.bathroomCount}
              category={category}
              locationValue={listing.locationValue}
            />
            <ListingReservation
              price={listing.price}
              dateRange={dateRange}
              totalPrice={totalPrice}
              onChangeDate={(value) => setDateRange(value)}
              onSubmit={onCreateReservation}
              disabled={isLoading}
              disabledDates={disabledDates}
            />
          </div>
        </div>
      </Container>
    </main>
  )
}

export default ListingClient;
