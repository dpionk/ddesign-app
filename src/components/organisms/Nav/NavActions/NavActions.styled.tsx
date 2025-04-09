import styled from "styled-components";

export const NavActionsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const IconButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: var(--tertiary-color);

  &:hover {
    color: var(--primary-color);
  }
`;
