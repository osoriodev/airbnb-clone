'use client';

import Container from "../Container";
import Logo from "./Logo";
import Nav from "./Nav";
import User from "./User";

const Header = () => {
  return (
    <header className="w-full py-4 fixed bg-white shadow-sm">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <Logo />
          <Nav />
          <User />
        </div>
      </Container>
    </header>
  )
}

export default Header;
