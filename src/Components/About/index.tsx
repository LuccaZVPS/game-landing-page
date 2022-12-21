import { Container } from "./styles";
import img from "../../Assets/hero4.png";
import { Heading } from "../shared/Heading";
import { Summary } from "./Components/Summary";
export function About() {
  return (
    <Container id="about">
      <div className="left">
        <img src={img} alt="" />
      </div>
      <div className="right">
        <Heading>We Are the Best Game Distributors for all Gamers</Heading>
        <div className="summary-container">
          <Summary
            title="Title Goes Here"
            txt="Find wholesome prices and suppliers of video games, console and game accessories"
          />
          <Summary
            title="Title Goes Here"
            txt="Find wholesome prices and suppliers of video games, console and game accessories"
          />
          <Summary
            title="Title Goes Here"
            txt="Find wholesome prices and suppliers of video games, console and game accessories"
          />
          <Summary
            title="Title Goes Here"
            txt="Find wholesome prices and suppliers of video games, console and game accessories"
          />
        </div>
      </div>
    </Container>
  );
}
