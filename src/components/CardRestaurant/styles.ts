import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 6.75rem;
  box-shadow: 0px 2px 4px #00000029;
  margin: 20px;

  cursor: pointer;
  figure {
    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;

      object-fit: cover;

      /* top: 241px;
      left: 490px;
      width: 100px;
      height: 100px;
      border-radius: 4px 0px 0px 4px; */
    }
  }

  .NameAdress {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 20px;
    letter-spacing: 0px;
    max-width: 250px;

    font-size: 12px;
    font-weight: 400;

    h3 {
      font-weight: 600;
    }

    /* font: normal normal medium 16px/19px Montserrat; */
    color: #404040;
    opacity: 1;
  }
  .openClose {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: #2b0d61;
    right: 0;
    top: 0;
    text-align: center;
    border-radius: 50%;
    color: #fff;
    font-size: 16px;
    padding: 10px;
    transform: translate(50px, -40px);
  }
`;
