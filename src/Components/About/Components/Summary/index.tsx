import controller from "../../../../Assets/controller.png";
import { Container } from "./styles";

interface SummaryProps {
  title: string;
  txt: string;
}

export function Summary({ title, txt }: SummaryProps) {
  return (
    <Container>
      <div className="summary-img">
        <img src={controller} alt="" />
      </div>
      <div className="summary-content">
        <h3>{title}</h3>
        <p> {txt}</p>
      </div>
    </Container>
  );
}
