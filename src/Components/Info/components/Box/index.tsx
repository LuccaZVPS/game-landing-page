import { ReactNode } from "react";

import { Container } from "./styles";

interface BoxProps {
  title: string;
  text: string;
  urlImg: string;
  color: string;
}

export function Box({ title, text, urlImg, color }: BoxProps) {
  return (
    <Container color={color}>
      <img src={urlImg} alt="" />
      <div>
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </Container>
  );
}
