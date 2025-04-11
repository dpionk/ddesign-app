import { ButtonStyled } from "./Button.styled";

type TButtonProps = {
  text: string;
};

const Button = ({ text }: TButtonProps) => {
  const upperCaseText = text.toUpperCase();
  return (
    <ButtonStyled>
      {upperCaseText}
    </ButtonStyled>
  );
};
export default Button;
