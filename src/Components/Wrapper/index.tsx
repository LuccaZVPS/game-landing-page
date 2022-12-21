import { About } from "../About";
import { Footer } from "../Footer";
import { Games } from "../Games";
import { Hero } from "../Hero";
import { Testimonials } from "../Testimonials";
import { Container } from "./styles";

export function Wrapper() {
  return (
    <Container>
      <Hero />
      <Games />
      <About />
      <Testimonials />
      <Footer />
    </Container>
  );
}
