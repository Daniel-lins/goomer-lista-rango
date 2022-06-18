import styled from "styled-components";
import { colors } from "../../styles/colors";

interface TagProps {
    isOpen?: boolean;
}

export const Container = styled.div<TagProps>`
    display: flex;
    width: 100%;
    height: 6.75rem;
    box-shadow: 0px 2px 4px #00000029;
    margin: 2rem;

    cursor: pointer;
    figure {
        img {
            width: 100%;
            height: 100%;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;

            object-fit: cover;
        }
    }

    .NameAdress {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin: 20px;
        letter-spacing: 0px;
        max-width: 260px;

        font-size: 12px;
        font-weight: 400;

        h3 {
            font-weight: 600;
        }

        color: #404040;
        opacity: 1;
    }
`;

export const Tag = styled.span<TagProps>`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: 0px 1px 2px ${colors.gray[900]};
    transform: translate(20px, -30px);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: ${({ isOpen }) =>
        isOpen ? colors.purple[500] : colors.purple[100]};

    p {
        font-weight: 700;
        font-size: 0.5rem;
        color: ${colors.white};
    }
    @media (max-width: 769px) {
        position: absolute;
        right: 20px;
    }
`;
