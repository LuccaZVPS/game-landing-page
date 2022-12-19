import { Game } from "./Components/Game";
import { fakeData, IGame } from "./fakeData";
import { Container } from "./styles";
import { useEffect, useRef, useState } from "react";
export function Games() {
  const filters = useRef(null as unknown as HTMLDivElement);
  const [data, setData] = useState<IGame[]>(fakeData);
  useEffect(() => {
    filters.current.querySelectorAll("div").forEach((div) => {
      div.addEventListener("click", (e) => {
        clear();
        div.classList.add("clicked");
        const target = e.currentTarget as HTMLDivElement;
        setData(
          fakeData.filter(
            (g) =>
              g.tags.includes(target.innerHTML) || target.innerHTML == "ALL"
          )
        );
      });
    });
  });

  const clear = () => {
    filters.current
      .querySelectorAll("div")
      .forEach((item) => item.classList.remove("clicked"));
  };
  return (
    <Container>
      <div className="games-content">
        <h2>Newly Released Games</h2>
        <div className="filters" ref={filters}>
          <div className="clicked">ALL</div>
          <div>PS5</div>
          <div>PS4</div>
          <div>X-Box</div>
        </div>
        <div className="games-grid">
          {data.map((game) => (
            <Game
              key={game.id}
              img={game.img}
              name={game.name}
              orders={game.orders}
              tags={game.tags}
              studio={game.studio}
              stars={game.stars}
              id={game.id}
            />
          ))}
        </div>
      </div>
      <div className="games-background"></div>
    </Container>
  );
}
