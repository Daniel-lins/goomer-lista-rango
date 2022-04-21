import { ListRestaurants } from "../../components/ListRestaurants";
import { Theme } from "../../components/Theme";
import { Container } from "./styles";

export const Home = () => {
  return (
    <Theme>
      <Container>
        <h1>Bem-vindo ao Lista Rango</h1>
        <ListRestaurants />
      </Container>
    </Theme>
  );
};
