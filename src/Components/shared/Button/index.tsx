import { ReactNode } from "react";

import { Container } from "./styles";

interface ButtonProps {
  txt: string;
}

export function Button({ txt }: ButtonProps) {
  return <Container>{txt}</Container>;
}
