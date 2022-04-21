import { Container } from "./styles";
import { useSelector } from "react-redux";
import {
  fetchAsyncRestaurant,
  getAllRestaurants,
} from "../../services/store/modules/restaurant/restaurant.slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { CardRestaurant } from "../CardRestaurant";
export const ListRestaurants = () => {
  const restaurants = useSelector(getAllRestaurants);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncRestaurant());
  }, [dispatch]);
  return (
    <Container>
      {console.log(restaurants.restaurants)}
      {restaurants.restaurants.map((item: any) => {
        return (
          <CardRestaurant
            key={item.id}
            image={item.image}
            name={item.name}
            adress={item.address}
          />
        );
      })}
    </Container>
  );
};
