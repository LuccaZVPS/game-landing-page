import logo from "../../Assets/logo.png";
import { Container } from "./styles";

export function Logo() {
  return (
    <Container>
      <img src={logo} alt="" />
      <div>Medley</div>
    </Container>
  );
}
