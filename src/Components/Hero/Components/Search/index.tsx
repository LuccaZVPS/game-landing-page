import { Container } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
export function Search() {
  return (
    <Container>
      <input placeholder="Search..." type="text" />
      <button>
        <AiOutlineSearch />
      </button>
    </Container>
  );
}
