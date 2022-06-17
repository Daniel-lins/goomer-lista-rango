import { useEffect, useState, useCallback } from "react";
import {
  Container,
  WrapperCards,
  Content,
  MenuWithoutItemsWrapper,
} from "./styles";

import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { fetchAsyncRestaurantDetail } from "../../services/store/modules/restaurant/restaurant.slice";
import { getAllMenus } from "../../services/store/modules/restaurant/menu.slice";
import { fetchAsyncMenu } from "../../services/store/modules/restaurant/menu.slice";

import { searchProducts } from "../../functions/searchProducts";
import { separateGroupsFromMenu } from "../../functions/separateGroupsFromMenu";

import { CardInfo } from "../../components/CardInfo";
import { Accordion } from "../../components/Accordion";
import { MenuCard } from "../../components/MenuCard";
import { Search } from "../../components/Search";
import { IMenu } from "../../interfaces/menu";
import { Loading } from "../../components/Loading";

export const RestaurantDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const menuData = useSelector(getAllMenus);
  const MenuRestaurant = menuData.restaurants;
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] =
    useState<IMenu[]>(MenuRestaurant);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    dispatch(fetchAsyncRestaurantDetail(id));
    dispatch(fetchAsyncMenu(id));
  }, [dispatch, id]);
  console.log(menuData);
  useEffect(() => {
    setFilteredProducts(
      searchProducts({ searchValue, allProducts: MenuRestaurant })
    );
  }, [MenuRestaurant, searchValue]);

  useEffect(() => {
    setTimeout(function () {
      setLoad(false);
    }, 300);
  }, []);

  const renderContent = useCallback(() => {
    if (load) {
      return <Loading />;
    }

    if (filteredProducts?.length === 0) {
      return (
        <MenuWithoutItemsWrapper>
          <p>Produto não encontrado 😔</p>
        </MenuWithoutItemsWrapper>
      );
    }

    const { nameOfGroups, arrayOfProducts } =
      separateGroupsFromMenu(filteredProducts);
    console.log(MenuRestaurant);
    return (
      <Content>
        {nameOfGroups.map((category, index) => (
          <Accordion key={category} category={category}>
            <WrapperCards>
              {arrayOfProducts[index].map((product) => (
                <MenuCard key={product.name} product={product} />
              ))}
            </WrapperCards>
          </Accordion>
        ))}
      </Content>
    );
  }, [load, filteredProducts]);

  return (
    <Container>
      <CardInfo />
      <Search
        labelText="Buscar no cardápio"
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />

      {renderContent()}
    </Container>
  );
};
