import styled from "styled-components";

export const ProductCategoriesListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 60vh;
  justify-content: center;
  grid-gap: 8px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 0.3fr);
  }
`;
