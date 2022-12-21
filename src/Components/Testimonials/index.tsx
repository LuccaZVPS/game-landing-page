import { Description } from "../shared/Description";
import { Heading } from "../shared/Heading";
import { Testimonial } from "./Components/Testimonial";
import { Container } from "./styles";
import img from "./Assets/img1.png";
import img2 from "./Assets/img2.png";

export function Testimonials() {
  return (
    <Container id="testimonials">
      <Description txt="Testimonials" color="#F68E5F" />
      <Heading>What our Customers are saying</Heading>
      <div className="testimonial-container">
        <Testimonial
          name="Charles Boyle"
          profission="Graphic Designer"
          stars={5}
          txt="One of my hobbies is gaming and when im hiking this works great. Medley is so good."
          imgUrl={img}
        />
        <Testimonial
          name="Mary Smith"
          profission="3D Animator"
          stars={5}
          txt="My neighbor has one of these. She works as a gardener and she says is really awesome."
          imgUrl={img2}
        />
      </div>
    </Container>
  );
}
