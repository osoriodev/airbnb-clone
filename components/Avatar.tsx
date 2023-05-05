'use client';

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      width={24}
      height={24}
      src="/img/placeholder.jpg"
      alt="Avatar"
    />
  )
}

export default Avatar;
