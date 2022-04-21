import { Router } from "./services/routes/routes";
import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";
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
