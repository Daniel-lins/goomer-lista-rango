import { ThemeType } from "./ThemeType";
import { Container, Pages } from "./styles";
import { Header } from "../Header";

export const Theme = ({ children }: ThemeType) => {
  return (
    <Container>
      <Header />
      <Pages>{children}</Pages>
    </Container>
  );
};
