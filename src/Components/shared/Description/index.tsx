import { Container } from "./styles";
interface props {
  txt: string;
}
export function Description({ txt }: props) {
  return (
    <Container>
      <div>{txt}</div>
    </Container>
  );
}
