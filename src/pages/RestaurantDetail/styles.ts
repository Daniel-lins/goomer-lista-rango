import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  max-width: 1366px;
  padding: 0 4.7rem;

  display: flex;
  flex-direction: column;

  > div {
    margin: 1.5rem 0 1rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const WrapperCards = styled.div`
  padding: 1.5rem 0;
  display: grid;
  grid-gap: 1.5rem 1.857rem;
  grid-template-columns: repeat(2, 1fr);
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

export const MenuWithoutItemsWrapper = styled.div`
  padding: 0.5rem;
  margin-top: 2rem;

  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 1.5rem;
  }
`;
