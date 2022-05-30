import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export const CardRestaurant = ({ image, name, adress, id }: any) => {
  let navigate = useNavigate();

  const HandleNavigate = () => {
    navigate(`/restaurant/${id}`);
  };
  return (
    <Container onClick={HandleNavigate}>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="NameAdress">
        <h3>{name} </h3>
        <p>{adress} </p>
      </div>
      <div className="openClose">Aberto agora</div>
    </Container>
  );
};
