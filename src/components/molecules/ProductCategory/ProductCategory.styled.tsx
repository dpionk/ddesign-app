import styled from "styled-components";

export const ProductCategoryButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  transform: translate(-50%, -50%) scale(1);
  top: 50%;
  left: 50%;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 1;

  button {
    width: 80%;
  }
`;

export const ProductCategoryImageStyled = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  &:hover {
    opacity: 0.6;
  }
`;

export const ProductCategoryWrapper = styled.div`
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &:hover ${ProductCategoryButtonWrapper} {
    opacity: 1;
    transition: all 0.3s ease;
    transform: translate(-50%, -50%) scale(1);
  }

  &:hover img {
  opacity: 0.6;
  }
`;
