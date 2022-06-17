import { Container } from "./styles";
import { HiSearch } from "react-icons/hi";
interface SearchProps {
  labelText?: string;
  searchValue: string;
  setSearchValue: (param: string) => void;
}
export const Search = ({
  searchValue,
  setSearchValue,
  labelText,
}: SearchProps) => {
  return (
    <Container>
      <input
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder={labelText ?? "Buscar estabelecimento"}
      />
      <button>
        <HiSearch />{" "}
      </button>
    </Container>
  );
};
