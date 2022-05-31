import React, { useEffect } from "react";
import { Container } from "./styles";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncRestaurantDetail,
  removeSelectedRestaurant,
  getselectRestaurant,
} from "../../services/store/modules/restaurant/restaurant.slice";

import { CardInfo } from "../../components/CardInfo";
import { Accordion } from "../../components/Accordion";

export const RestaurantDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getselectRestaurant);
  useEffect(() => {
    dispatch(fetchAsyncRestaurantDetail(id));
    return () => {
      dispatch(removeSelectedRestaurant());
    };
  }, [dispatch, id]);
  return (
    <Container>
      <CardInfo />
      <Accordion />
    </Container>
  );
};
