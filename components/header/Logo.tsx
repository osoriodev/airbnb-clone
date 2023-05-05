'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <button className="hidden md:block">
      <Image
        width={100}
        height={31.25}
        src="/img/logo.png"
        alt="Airbnb"
      />
    </button>
  )
}

export default Logo;
