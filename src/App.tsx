import { Router } from "./services/routes/routes";

import GlobalStyle from "./styles/global";

import { Header } from "./components/Header";
const App = () => {
  return (
    <>
      {" "}
      <Header />
      <GlobalStyle />
      <Router />{" "}
    </>
  );
};

export default App;
