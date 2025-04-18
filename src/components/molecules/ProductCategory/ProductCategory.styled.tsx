import styled from "styled-components";

export const ProductCategoryButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 1;

  button {
    width: 80%;
  }
`;

export const ProductCategoryWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  &:hover {
    cursor: pointer;
  }
  &:hover ${ProductCategoryButtonWrapper} {
    opacity: 1;
  }

  &:hover img {
    opacity: 0.6;
    transform: scale(1.05);
  }
`;

export const ProductCategoryImageStyled = styled.img`
  height: 100%;
  display: block;
  transition: all 0.3s ease;
`;
