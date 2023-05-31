'use client';

import { IconType } from "react-icons";

interface ListingCategoryProps {
  label: string;
  icon: IconType;
  desc: string;
}

const ListingCategory: React.FC<ListingCategoryProps> = ({
  label,
  icon: Icon,
  desc
}) => {
  return (
    <div className="flex items-center gap-4">
      <Icon size={32} />
      <div className="flex flex-col">
        <p className="text-lg font-semibold">{label}</p>
        <p className="font-light text-neutral-500">{desc}</p>
      </div>
    </div>
  )
}

export default ListingCategory;
