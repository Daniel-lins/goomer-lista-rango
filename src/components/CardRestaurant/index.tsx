import { useState, useEffect } from "react";
import { Container, Tag } from "./styles";
import { useNavigate } from "react-router-dom";
import { checkIfRestaurantIsOpen } from "../../functions/checkIfRestaurantIsOpen";
import { IRestaurant } from "../../interfaces/restaurant";

export const CardRestaurant = ({ restaurant }: IRestaurant) => {
    let navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const HandleNavigate = () => {
        navigate(`/restaurant/${restaurant.id}`);
    };

    const numberOfHours = restaurant.hours?.length || 0;

    useEffect(() => {
        let interval: NodeJS.Timeout;

        function handleIsOpen() {
            setIsOpen(
                numberOfHours > 0
                    ? checkIfRestaurantIsOpen({
                          hours: restaurant.hours,
                      })
                    : false
            );

            interval = setInterval(
                () => {
                    setIsOpen(
                        numberOfHours > 0
                            ? checkIfRestaurantIsOpen({
                                  hours: restaurant.hours,
                              })
                            : false
                    );
                },
                1000 * 30 // Thirty seconds
            );
        }

        handleIsOpen();

        return () => {
            clearInterval(interval);
        };
    }, [restaurant.hours, numberOfHours]);

    return (
        <Container onClick={HandleNavigate}>
            <figure>
                <img src={restaurant.image} alt={restaurant.name} />
            </figure>
            <div className="NameAdress">
                <h3>{restaurant.name} </h3>
                <p>{restaurant.address} </p>
            </div>
            <Tag className="openClose" isOpen={isOpen}>
                <p>{isOpen ? "Aberto agora" : "Fechado"}</p>
            </Tag>
        </Container>
    );
};
