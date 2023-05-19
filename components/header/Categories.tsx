'use client';

import { usePathname, useSearchParams } from "next/navigation";

import Container from "../Container";
import Category from "../Category";

import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill
} from "react-icons/gi";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { MdOutlineVilla } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    desc: 'This property is close to the beach!'
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    desc: 'This property has windmills!'
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    desc: 'This property is modern!'
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    desc: 'This property is in the countryside!'
  },
  {
    label: 'Pools',
    icon: TbPool,
    desc: 'This property has a pool!'
  },
  {
    label: 'Islands',
    icon: GiIsland,
    desc: 'This property is on an island!'
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    desc: 'This property is close to a lake!'
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    desc: 'This property has skiing activities!'
  },
  {
    label: 'Castles',
    icon: GiCastle,
    desc: 'This property is in a castle!'
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    desc: 'This property has camping activities!'
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    desc: 'This property is in an arctic environment!'
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    desc: 'This property is in a cave!'
  },
  {
    label: 'Desert',
    icon: GiCactus,
    desc: 'This property is in the desert!'
  },
  {
    label: 'Barns',
    icon: GiBarn,
    desc: 'This property is in the barn!'
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    desc: 'This property is luxurious!'
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <div className="pt-4 border-t-[1px]">
      <Container>
        <div className="flex items-center justify-between overflow-x-auto">
          {categories.map((item, i) => (
            <Category
              key={i}
              label={item.label}
              icon={item.icon}
              selected={category === item.label}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Categories;
