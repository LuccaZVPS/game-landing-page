import { IGame } from "../../fakeData";
import { Container } from "./styles";
import { AiFillStar } from "react-icons/ai";
import { useEffect } from "react";
export function Game({ img, name, orders, stars, studio, tags }: IGame) {
  return (
    <Container>
      <img src={img} alt="" />
      <div className="txt">
        <h3>{name}</h3>
        <h4>{studio}</h4>
        <div className="tags">
          {tags.map((tag, number: number) => (
            <div key={number}>
              {tag}
              {tags.length - 1 > number && ", "}
            </div>
          ))}
        </div>
        <div className="game-bottom">
          <div className="stars">
            <AiFillStar />
            {stars}
          </div>
          <div className="orders">{orders} Orders</div>
          <div className="button">
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </Container>
  );
}
