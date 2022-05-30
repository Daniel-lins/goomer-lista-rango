import react, { useState, useEffect } from "react";
import { ListRestaurants } from "../../components/ListRestaurants";
import { Theme } from "../../components/Theme";
import { Container, ContainerFilteredCard } from "./styles";
import { searchRestaurants } from "../../functions/SearchRestaurants";
import {
  fetchAsyncRestaurant,
  getAllRestaurants,
} from "../../services/store/modules/restaurant/restaurant.slice";
import { CardRestaurant } from "../../components/CardRestaurant";
import { Search } from "../../components/Search";
import { useSelector } from "react-redux";
import { IRestaurant } from "../../interfaces/restaurant";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState<IRestaurant[]>(
    []
  );

  const data = useSelector(getAllRestaurants);

  useEffect(() => {
    setFilteredRestaurants(
      searchRestaurants({ searchValue, allItems: data.restaurants })
    );
  }, [searchValue]);
  return (
    <Theme>
      <Container>
        <h1>Bem-vindo ao Lista Rango</h1>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        {filteredRestaurants.length ? (
          <ContainerFilteredCard>
            {filteredRestaurants.map((item: any) => (
              <CardRestaurant
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                adress={item.address}
              />
            ))}
          </ContainerFilteredCard>
        ) : (
          <ListRestaurants />
        )}
      </Container>
    </Theme>
  );
};
