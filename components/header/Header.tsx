'use client';

import { User } from "@prisma/client";

import Container from "../Container";
import Logo from "./Logo";
import Nav from "./Nav";
import Menu from "./Menu";

interface HeaderProps {
  currentUser?: User | null
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  return (
    <header className="w-full py-4 fixed bg-white shadow-sm">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <Logo />
          <Nav />
          <Menu currentUser={currentUser} />
        </div>
      </Container>
    </header>
  )
}

export default Header;
