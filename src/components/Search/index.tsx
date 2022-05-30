import { Container } from "./styles";
import { HiSearch } from "react-icons/hi";
interface SearchProps {
  labelText?: string;
  searchValue: string;
  setSearchValue: (param: string) => void;
}
export const Search = ({ searchValue, setSearchValue }: any) => {
  return (
    <Container>
      <input
        type="text"
        placeholder="Buscar estabelecimento"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button>
        <HiSearch />{" "}
      </button>
    </Container>
  );
};
