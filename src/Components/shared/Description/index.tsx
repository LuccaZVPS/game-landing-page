import { Container } from "./styles";
interface props {
  txt: string;
  color: string;
}

export function Description({ txt, color }: props) {
  return (
    <Container color={color}>
      <div>{txt}</div>
    </Container>
  );
}
