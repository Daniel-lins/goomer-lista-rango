import { useEffect, useState, useCallback, useMemo } from "react";
import { AiFillLock } from "react-icons/ai";
import { getAllMenus } from "../../services/store/modules/restaurant/menu.slice";
import { useDispatch, useSelector } from "react-redux";
import { Container, ImageWrapper, Content, PromotionTag } from "./styles";
import award from "../../assets/icons/award.svg";
import { colors } from "../../styles/colors";
import defaultDish from "../../assets/images/default-dish.png";
import { IMenu } from "../../interfaces/menu";
import { activePromotion } from "../../functions/activePromotion";
import { formatCurrency } from "../../functions/formatCurrency";
import { Modal } from "../Modal";
import { ModalProductContent } from "../../components/Modal/components/ModalProductContent";

interface MenuCardProps {
  product: IMenu;
}

export const MenuCard = ({ product }: MenuCardProps) => {
  const [isBlocked, setIsBlocked] = useState(false);
  const [isModalOpen, setModalVisibility] = useState(false);

  const promotion = useMemo(
    () =>
      activePromotion({
        sales: product.sales,
      }),
    [product]
  );

  const toggleModal = useCallback(() => {
    if (isBlocked) {
      return;
    }
    setModalVisibility(!isModalOpen);
  }, [isModalOpen, isBlocked]);

  useEffect(() => {
    if (!product.price) {
      setIsBlocked(true);
    }
  }, [setIsBlocked, product.price]);

  const renderPrice = useCallback(() => {
    if (promotion && product.price) {
      return (
        <>
          <p>{formatCurrency(promotion.price)}</p>

          <span>{formatCurrency(product.price)}</span>
        </>
      );
    }

    if (product.price) {
      return <p>{formatCurrency(product.price)}</p>;
    }

    return (
      <>
        <AiFillLock color={colors.green[500]} size="1rem" />

        <p>Produto sem valor</p>
      </>
    );
  }, [product.price, promotion]);

  return (
    <>
      <Container onClick={toggleModal} disabled={isBlocked}>
        <ImageWrapper>
          {" "}
          <img
            src={product.image ?? defaultDish}
            alt={`${product.name} foto`}
          />{" "}
        </ImageWrapper>
        <Content>
          <strong>{product.name}</strong>

          {!!promotion && (
            <PromotionTag>
              <img src={award} alt="Promotion tag" />

              <small>{promotion.description}</small>
            </PromotionTag>
          )}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <div>{renderPrice()}</div>
        </Content>
      </Container>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} closeModal={toggleModal}>
          <ModalProductContent
            product={{ ...product, activePromotion: promotion }}
          />
        </Modal>
      )}
    </>
  );
};
