import { Theme } from "../../components/Theme";
import { useSelector } from "react-redux";
import {
  fetchAsyncRestaurant,
  getAllRestaurants,
} from "../../services/store/modules/restaurant/restaurant.slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export const Home = () => {
  const restaurants = useSelector(getAllRestaurants);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncRestaurant());
    {
      // console.log(restaurants);
    }
  }, [dispatch]);
  return (
    <Theme>
      <div>{restaurants.restaurants[0].name}</div>
      Home
    </Theme>
  );
};
