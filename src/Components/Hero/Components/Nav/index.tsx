import { Container } from "./styles";

export function Nav() {
  return (
    <Container>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        {" "}
        <a href="#store">Store</a>
      </li>
      <li>
        {" "}
        <a href="#about">About</a>
      </li>
      <li>
        {" "}
        <a href="#testimonials">Testimonials</a>
      </li>
    </Container>
  );
}
