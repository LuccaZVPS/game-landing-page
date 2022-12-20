import { Description } from "../shared/Description";
import { Header } from "./Components/Header";
import { Container } from "./styles";
export function Hero() {
  return (
    <Container>
      <div className="hero-content">
        <Header />
        <div className="hero-content-text">
          <Description txt="GAMEWORLD DISTRIBUTORS" />
          <h1>
            Connecting Players & <br /> Games in an Immersive environment
          </h1>
          <button>Become a Member for Free!</button>
        </div>
      </div>
      <div className="hero-background"></div>
    </Container>
  );
}
