import ReactDOM from "react-dom/client";
import { Wrapper } from "./Components/Wrapper";
import { GlobalStyle } from "./Styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Wrapper />
    <GlobalStyle />
  </>
);
