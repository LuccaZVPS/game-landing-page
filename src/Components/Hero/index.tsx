import { Description } from "../shared/Description";
import { Header } from "./Components/Header";
import { Container } from "./styles";
import { Button } from "../shared/Button";
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-content">
        <Header />
        <div className="hero-content-text">
          <Description txt="GAMEWORLD DISTRIBUTORS" color="#FFFFFF" />
          <h1>
            Connecting Players & <br /> Games in an Immersive environment
          </h1>
          <Button txt="Become a Member for Free!" />
        </div>
      </div>
      <div className="hero-background"></div>
    </Container>
  );
}
