import PageTitle from "@components/atoms/PageTitle";
import styled from "styled-components";

export const ProductViewWrapper = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  grid-template-rows: 80vh;
  grid-gap: 16px;
`;

export const ProductViewInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${PageTitle} {
    margin-top: 0;
  }

  button {
    max-width: 300px;
  }
`;
