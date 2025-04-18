import styled from "styled-components";

export const PageTitleStyled = styled.h1`
  font-family: "Red Hat Display", sans-serif;
  font-size: 3rem;
  font-weight: 500;
  color: var(--primary-color);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;
