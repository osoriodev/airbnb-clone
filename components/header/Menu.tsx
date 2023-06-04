'use client';

import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useCallback, useState } from "react";

import { SafeUser } from "@/app/types";

import useLoginModal from "@/hooks/useLoginModal";
import useRegModal from "@/hooks/useRegModal";
import useRentModal from "@/hooks/useRentModal";

import Avatar from "../Avatar";
import Item from "./Item";

import { AiOutlineMenu } from "react-icons/ai";

interface MenuProps {
  currentUser?: SafeUser | null
}

const Menu: React.FC<MenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const regModal = useRegModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <button
          className="hidden md:block px-4 py-3 rounded-full text-sm font-semibold hover:bg-neutral-100 transition"
          onClick={onRent}
        >
          Airbnb your home
        </button>
        <button
          className="flex items-center p-2 md:py-1 border-[1px] border-neutral-200 rounded-full hover:shadow-md transition"
          onClick={toggleOpen}
        >
          <AiOutlineMenu />
          <span className="hidden md:block ml-3">
            <Avatar src={currentUser?.image} />
          </span>
        </button>
      </div>
      {isOpen && (
        <div className="w-[40vw] md:w-3/4 absolute right-0 top-12 rounded-xl text-sm bg-white shadow-md overflow-hidden">
          <div className="flex flex-col">
            {currentUser ? (
              <>
                <Item
                  onClick={() => router.push('/trips')}
                  label="My trips"
                />
                <Item
                  onClick={() => router.push('/favorites')}
                  label="My favorites"
                />
                <Item
                  onClick={() => router.push('/reservations')}
                  label="Reservations"
                />
                <Item onClick={() => {}} label="My properties" />
                <Item onClick={rentModal.onOpen} label="Airbnb my home" />
                <hr />
                <Item onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <Item onClick={loginModal.onOpen} label="Login" />
                <Item onClick={regModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu;
