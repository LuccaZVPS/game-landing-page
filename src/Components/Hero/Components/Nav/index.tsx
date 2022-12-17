import { Container } from "./styles";

export function Nav() {
  return (
    <Container>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        {" "}
        <a href="#about">About</a>
      </li>
      <li>
        {" "}
        <a href="#privacy">Privacy Policy</a>
      </li>
      <li>
        {" "}
        <a href="#shop">Our Shop</a>
      </li>
    </Container>
  );
}
