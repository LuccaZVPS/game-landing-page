import { About } from "../About";
import { Footer } from "../Footer";
import { Games } from "../Games";
import { Hero } from "../Hero";
import { Info } from "../Info";
import { Testimonials } from "../Testimonials";
import { Container } from "./styles";

export function Wrapper() {
  return (
    <Container>
      <Hero />
      <Games />
      <Info />
      <About />
      <Testimonials />
      <Footer />
    </Container>
  );
}
