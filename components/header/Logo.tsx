'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";

const Logo = () => {
  const router = useRouter();

  return (
    <button
      className="block"
      onClick={() => router.push('/')}
    >
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
