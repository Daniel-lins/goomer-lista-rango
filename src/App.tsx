import { Router } from "./routes";
import GlobalStyle from "./styles/global";
export const App = () => {
  return (
    <>
      {" "}
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
