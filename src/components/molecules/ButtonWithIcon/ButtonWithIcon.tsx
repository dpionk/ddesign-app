import { ReactNode } from "react";
import Button from "@components/atoms/Button";
import { ButtonWithIconWrapper } from "./ButtonWithIcon.styled";

type TButtonWithIconProps = {
  text: string;
  onClick: () => void;
  icon: ReactNode;
};

const ButtonWithIcon = ({ text, onClick, icon }: TButtonWithIconProps) => {
  return (
    <ButtonWithIconWrapper>
      <Button text={text} onClick={onClick}>
        {icon}
      </Button>
    </ButtonWithIconWrapper>
  );
};
export default ButtonWithIcon;
