import react, { useEffect } from "react";
import { getAllMenus } from "../../services/store/modules/restaurant/menu.slice";
import { useDispatch, useSelector } from "react-redux";
import { Container, ImageWrapper, Content } from "./styles";
import defaultDish from "../../assets/images/default-dish.png";
import { IMenu } from "../../interfaces/menu";

interface MenuCardProps {
  product: IMenu;
}

export const MenuCard = ({ product }: MenuCardProps) => {
  return (
    <Container>
      <ImageWrapper>
        {" "}
        <img
          src={product.image ?? defaultDish}
          alt={`${product.name} foto`}
        />{" "}
      </ImageWrapper>
      <Content>
        <strong>{product.name}</strong>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      </Content>
    </Container>
  );
};
