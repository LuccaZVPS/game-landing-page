import demonSouls from "./Assets/demonsouls.jpg";
import elden from "./Assets/elden.jpg";
import dl2 from "./Assets/dl2.jpg";
import godfall from "./Assets/godfall.jpg";
import horizon2 from "./Assets/horizon2.jpg";
import farcry6 from "./Assets/farcry6.jpg";
import metro from "./Assets/metro.jpg";

export interface IGame {
  img: string;
  name: string;
  studio: string;
  tags: string[];
  stars: number;
  orders: number;
  id: number;
}
export const fakeData: IGame[] = [
  {
    img: demonSouls,
    name: "Demons Souls",
    studio: "Activision",
    stars: 4.5,
    orders: 80,
    tags: ["PS5", "PS4", "X-Box"],
    id: 1,
  },
  {
    img: elden,
    name: "Elden Ring",
    studio: "From Software",
    stars: 4.5,
    orders: 80,
    tags: ["PS5", "PS4", "X-Box"],
    id: 2,
  },
  {
    img: dl2,
    name: "Dying Light 2",
    studio: "Activision",
    stars: 4.5,
    orders: 80,
    tags: ["PS5", "X-Box"],
    id: 3,
  },
  {
    img: godfall,
    name: "GODFALL",
    studio: "Activision",
    stars: 4.5,
    orders: 80,
    tags: ["PS5", "PS4"],
    id: 4,
  },
  {
    img: horizon2,
    name: "Horizon: Forbidden West",
    studio: "Activision",
    stars: 4.5,
    orders: 80,
    tags: ["PS5", "PS4"],
    id: 5,
  },
  {
    img: metro,
    name: "Metro Exodus",
    studio: "Activision",
    stars: 4.5,
    orders: 80,
    tags: ["PS5", "PS4"],
    id: 6,
  },
  {
    img: demonSouls,
    name: "Demons Souls",
    studio: "Activision",
    stars: 4.5,
    orders: 80,
    tags: ["PS4", "X-Box"],
    id: 7,
  },
  {
    img: farcry6,
    name: "Far Cry 6",
    studio: "Activision",
    stars: 4.5,
    orders: 80,
    tags: ["PS5"],
    id: 8,
  },
];
