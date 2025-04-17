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
  // &:hover {
  //   transform: scale(1.05);
  //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  // }

  &:hover img {
    // height: 100%;
    opacity: 0.6;
  }

  &:hover ${ProductInListInfo} {
    opacity: 1;
  }
`;

export const ProductInListImageStyled = styled.img`
  object-fit: cover;
  &:hover {
    opacity: 0.6;
  }
`;
