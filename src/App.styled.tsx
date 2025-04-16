import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  height: 100%;
  --background-color: #f1f1f1;
  --border-color: #9a876f;
  --primary-color: #473c38;
  --secondary-color: #735e59;
  --tertiary-color: #878a8b;
  }

  body {
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  }

  * {
  text-decoration: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`;
