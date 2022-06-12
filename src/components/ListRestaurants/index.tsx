import { Container } from "./styles";
import { useSelector } from "react-redux";
import {
  fetchAsyncRestaurant,
  getAllRestaurants,
} from "../../services/store/modules/restaurant/restaurant.slice";

import { CardRestaurant } from "../CardRestaurant";

export const ListRestaurants = () => {
  const restaurants = useSelector(getAllRestaurants);

  return (
    <Container>
      {restaurants.restaurants.map((item: any) => {
        return (
          <CardRestaurant
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            adress={item.address}
          />
        );
      })}
    </Container>
  );
};
