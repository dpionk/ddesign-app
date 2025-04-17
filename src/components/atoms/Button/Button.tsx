import { ReactNode } from "react";
import { ButtonStyled } from "./Button.styled";

type TButtonProps = {
  text: string;
  onClick: () => void;
  children?: ReactNode;
};

const Button = ({ text, onClick, children }: TButtonProps) => {
  const upperCaseText = text.toUpperCase();
  return (
    <ButtonStyled onClick={onClick}>
      {upperCaseText}
      {children}
    </ButtonStyled>
  );
};
export default Button;
