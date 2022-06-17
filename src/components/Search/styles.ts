import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        top: 155px;
        left: 221px;
        width: 50.4rem;
        height: 40px;
        background: #fbfbfb 0% 0% no-repeat padding-box;
        box-shadow: 0px 2px 4px #00000029;
        opacity: 1;
        border-radius: 20px 0 0 20px;
        font-size: 18px;
        padding: 15px;
        border-style: none;
        font-weight: 500;
        color: #505050;

        @media (max-width: 808px) {
            width: 30rem;
        }

        @media (max-width: 500px) {
            width: 20rem;
        }
    }

    button {
        height: 40px;
        background: #fbfbfb 0% 0% no-repeat padding-box;
        box-shadow: 0px 2px 0px 0px #00000029;
        opacity: 1;
        border-style: none;
        padding: 17px;
        border-radius: 0 20px 20px 0;
        text-align: center;
        justify-content: center;
        font-size: 15px;
        cursor: pointer;
    }
`;
