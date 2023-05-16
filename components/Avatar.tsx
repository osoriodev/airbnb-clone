'use client';

import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      width={24}
      height={24}
      src={src || "/img/placeholder.jpg"}
      alt="Avatar"
    />
  )
}

export default Avatar;
