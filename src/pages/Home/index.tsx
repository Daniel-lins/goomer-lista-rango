import react, { useState, useEffect } from "react";
import { ListRestaurants } from "../../components/ListRestaurants";
import { Theme } from "../../components/Theme";
import {
  Container,
  ContainerFilteredCard,
  NoItemsToRender,
  Content,
} from "./styles";
import { searchRestaurants } from "../../functions/SearchRestaurants";
import {
  fetchAsyncRestaurant,
  getAllRestaurants,
} from "../../services/store/modules/restaurant/restaurant.slice";
import { CardRestaurant } from "../../components/CardRestaurant";
import { Search } from "../../components/Search";
import { Loading } from "../../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { IRestaurant } from "../../interfaces/restaurant";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState<IRestaurant[]>(
    []
  );
  const [load, setLoad] = useState(true);
  const data = useSelector(getAllRestaurants);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchAsyncRestaurant());
    } finally {
      setLoad(false);
    }
  }, [dispatch]);

  useEffect(() => {
    setFilteredRestaurants(
      searchRestaurants({ searchValue, allItems: data.restaurants })
    );
  }, [searchValue, data]);

  const renderContent = () => {
    if (load) {
      return <Loading />;
    }

    if (filteredRestaurants.length > 0) {
      return (
        <Content>
          {filteredRestaurants.map((item: any) => (
            <CardRestaurant key={item.id} restaurant={item} />
          ))}
          <>{console.log(filteredRestaurants)}</>
        </Content>
      );
    }

    return (
      <NoItemsToRender>
        <p>Nada para listar.</p>
      </NoItemsToRender>
    );
  };
  console.log(filteredRestaurants);
  return (
    <Theme>
      <Container>
        <h1>Bem-vindo ao Lista Rango</h1>

        <Search searchValue={searchValue} setSearchValue={setSearchValue} />

        {renderContent()}
      </Container>
    </Theme>
  );
};
