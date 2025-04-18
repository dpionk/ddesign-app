import styled from "styled-components";

export const ProductInListInfo = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%) scale(1);
  top: 50%;
  left: 50%;
  opacity: 0;
`;

export const ProductInListWrapper = styled.div`
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover ${ProductInListInfo} {
    opacity: 1;
  }

  &:hover img {
    transition: all 0.3s ease;
    opacity: 0.6;
    transform: scale(1.05);
  }
`;
