import styled from "styled-components";

export const Container = styled.div`
  figure {
    img {
      top: 86px;
      left: 75px;
      width: 145px;
      height: 145px;
      opacity: 1;
      border-radius: 10px 0 0 10px;
    }
  }
  .btnBack {
    position: absolute;
    left: 0;
    background: blue;
  }
`;

export const ButtonContainer = styled.div`
  margin: 20px;

  button {
    cursor: pointer;
    border-radius: 10px;

    padding: 10px;
    font-size: 13px;
    font-weight: 600;
    background-color: #009ca3;
  }
`;

export const ContainerInfoRestaurant = styled.div`
  margin: 20px;
  display: flex;

  div {
    flex: 1;
    margin: 20px;
    display: flex;
    flex-direction: column;

    strong {
      margin-bottom: 0.25rem;

      font-weight: 500;
      font-size: 1.5rem;
    }

    p {
      margin-bottom: 0.175rem;

      font-size: 1rem;
    }

    span {
      font-size: 0.75rem;

      > time {
        margin-left: 0.25rem;

        font-weight: 600;
      }
    }
  }
`;
