import { Description } from "../shared/Description";
import { Heading } from "../shared/Heading";
import { Container } from "./styles";
import controllerImg from "./Assets/controller.png";
import chairImg from "./Assets/chair.png";
import rocketImg from "./Assets/rocket.png";

import { Box } from "./components/Box";
export function Info() {
  return (
    <Container>
      <Description txt="What we do" color="#F68E5F" />
      <Heading>
        Meeting the needs of players <br /> across the world
      </Heading>
      <div className="cards-container">
        <Box
          color="background: linear-gradient(267.28deg, #fc61ff 24%, #ed82ff 73.95%);"
          title="Video Game Suppliers"
          text="List of carefully selected, verified, high quality suppliers in different regions worldwide"
          urlImg={controllerImg}
        />
        <Box
          color="background: linear-gradient(267.28deg, #7B61FF 24%, #AA82FF 73.95%);"
          title="Wholesome Marketplace"
          text="Find wholesome prices and suppliers of video games, console and game accessories "
          urlImg={chairImg}
        />
        <Box
          color="background: linear-gradient(267.28deg, #61FFD9 24%, #82E8FF 73.95%);"
          title="Future Releases"
          text="Release dates and information on upcoming or recently released video games."
          urlImg={rocketImg}
        />
      </div>
    </Container>
  );
}
