import { ReactNode, useEffect, useRef } from "react";

import { Container } from "./styles";
interface props {
  isOpen: boolean;
}
export function MenuBurger({ isOpen }: props) {
  const menu = useRef(null as unknown as HTMLDivElement);
  useEffect(() => {
    if (isOpen) {
      addCloseClass();
      return;
    }
    removeCloseClss();
  }, [isOpen]);

  const addCloseClass = () => {
    const lines = menu.current.querySelectorAll("span");
    for (let index = 0; index < lines.length; index++) {
      lines[index].classList.add(`closed${index + 1}`);
    }
  };
  const removeCloseClss = () => {
    const lines = menu.current.querySelectorAll("span");
    for (let index = 0; index < lines.length; index++) {
      lines[index].classList.remove(`closed${index + 1}`);
    }
  };
  return (
    <Container ref={menu}>
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
    </Container>
  );
}
