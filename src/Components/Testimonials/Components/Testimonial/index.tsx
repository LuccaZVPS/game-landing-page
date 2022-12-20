import { AiFillStar } from "react-icons/ai";
import { Container } from "./styles";
interface TestimonialProps {
  stars: number;
  txt: string;
  name: string;
  profission: string;
  imgUrl: string;
}

export function Testimonial({
  name,
  profission,
  stars,
  txt,
  imgUrl,
}: TestimonialProps) {
  return (
    <Container>
      <div className="testimonial-left">
        <div className="testimonial-stars">
          {[...Array(stars)].map((e, i) => (
            <div key={i}>
              <AiFillStar />
            </div>
          ))}
        </div>
        <p className="testimonial-text">{txt}</p>
        <div className="testimonial-content">
          <h3>{name}</h3>
          <p>{profission}</p>
        </div>
      </div>
      <div className="testimonial-right">
        <img src={imgUrl} alt="" />
      </div>
    </Container>
  );
}
