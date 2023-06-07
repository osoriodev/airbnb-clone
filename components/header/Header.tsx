'use client';

import { SafeUser } from "@/app/types";

import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";

interface HeaderProps {
  currentUser?: SafeUser | null
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  return (
    <header className="w-full fixed bg-white shadow-sm">
      <Container>
        <div className="flex items-center justify-between gap-4 py-4">
          <Logo />
          <Search />
          <Menu currentUser={currentUser} />
        </div>
      </Container>
      <Categories />
    </header>
  )
}

export default Header;
