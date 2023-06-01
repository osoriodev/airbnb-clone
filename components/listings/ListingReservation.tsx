'use client';

import { Range } from "react-date-range";

import CalendarInput from "../inputs/CalendarInput";
import Button from "../Button";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[]
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates
}) => {
  return (
    <div className="mb-10 order-first md:order-last md:col-span-3">
      <div className="border-[1px] border-neutral-200 rounded-xl overflow-hidden bg-white">
        <div className="flex items-center gap-1 p-4">
          <p className="text-2xl font-semibold">${price}</p>
          <p className="font-light text-neutral-600">night</p>
        </div>
        <hr />
        <CalendarInput
          value={dateRange}
          onChange={(value) => onChangeDate(value.selection)}
          disabledDates={disabledDates}
        />
        <hr />
        <div className="p-4">
          <Button
            label="Reserve"
            onClick={onSubmit}
            disabled={disabled}
          />
        </div>
        <div className="flex items-center justify-between p-4 text-lg font-semibold">
          <p>Total</p>
          <p>${totalPrice}</p>
        </div>
      </div>
    </div>
  )
}

export default ListingReservation;
