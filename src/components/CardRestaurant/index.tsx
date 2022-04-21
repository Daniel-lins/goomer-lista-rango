import { Container } from "./styles";

export const CardRestaurant = ({ image, name, adress }: any) => {
  return (
    <Container>
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
