import { useState, ReactElement } from "react";

import { Container, AccordionWtrapper, Content, Icon } from "./styles";
import chevron from "../../assets/icons/chevron.svg";
interface AccordionProps {
    category: string;
    children?: ReactElement;
}

export const Accordion = ({ category, children }: AccordionProps) => {
    const [isActive, setIsActive] = useState(false);

    function handleActive() {
        setIsActive(!isActive);
    }
    return (
        <Container>
            <AccordionWtrapper onClick={handleActive}>
                <p>{category}</p>

                <Icon src={chevron} alt="icon-chevron" isActive={isActive} />
            </AccordionWtrapper>

            <Content isActive={isActive}>{children}</Content>
        </Container>
    );
};
