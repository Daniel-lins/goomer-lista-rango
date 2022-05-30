import { Container, ButtonContainer, ContainerInfoRestaurant } from "./styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

import {
  fetchAsyncRestaurantDetail,
  removeSelectedRestaurant,
  getselectRestaurant,
} from "../../services/store/modules/restaurant/restaurant.slice";

import { formatRestaurantSchedules } from "../../functions/formatRestaurantSchedules";

export const CardInfo = () => {
  let navigate = useNavigate();
  const data = useSelector(getselectRestaurant);

  const handleBackButton = () => {
    navigate("/");
  };

  return (
    <Container>
      <ButtonContainer>
        <button onClick={handleBackButton}> VOLTAR</button>
      </ButtonContainer>
      <ContainerInfoRestaurant>
        <figure>
          <img src={data.image} alt={data.name} />
        </figure>

        <div>
          <strong>{data.name}</strong>

          <p>{data.address}</p>

          {data.hours &&
            formatRestaurantSchedules(data.hours).map((schedule) => (
              <span key={`${schedule.day}:${JSON.stringify(schedule.hour)}`}>
                {schedule.day}:
                <time>
                  {schedule.hour.from} às {schedule.hour.to}
                </time>
              </span>
            ))}
        </div>
      </ContainerInfoRestaurant>
    </Container>
  );
};
