import styled from "styled-components";

export const HomeViewWrapper = styled.div`
  margin-top: 32px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;

  @media (max-width: 768px) {
    text-align: center;
    justify-items: center;
  }
`;

export const HomeViewImageStyled = styled.img`
  aspect-ratio: 1 / 1;
  height: auto;
  width: 100%;
  max-width: 500px;
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;
