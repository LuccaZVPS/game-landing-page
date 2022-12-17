import { useEffect, useRef, useState } from "react";
import { Logo } from "../Logo";
import { MenuBurger } from "../MenuBurger";
import { Nav } from "../Nav";
import { Search } from "../Search";
import { Container } from "./styles";

export function Header() {
  const [open, setOpen] = useState(false);
  const nav = useRef(null as unknown as HTMLDivElement);
  useEffect(() => {
    if (open) {
      nav.current.classList.add("closed", "open");

      return;
    }
    nav.current.classList.replace("open", "closed");
  }, [open]);
  return (
    <Container>
      <Logo />
      <div className="right" ref={nav}>
        <Nav />
        <Search />
      </div>
      <div
        className="header-menu"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <MenuBurger isOpen={open} />
      </div>
    </Container>
  );
}
