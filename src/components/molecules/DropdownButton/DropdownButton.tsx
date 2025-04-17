import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { DropdownButtonWrapper, DropdownStyled } from "./DropdownButton.styled";
import ButtonWithIcon from "@components/molecules/ButtonWithIcon";

type TDropdownButtonProps = {
  text: string;
};

const DropdownButton = ({ text }: TDropdownButtonProps) => {
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <>
      <ButtonWithIcon
        text={text}
        icon={<IoIosArrowDown />}
        onClick={() => {}}
      />
      {showDropdown && (
        <DropdownStyled>
          {/* <div>name</div>
            <div>price</div> */}
        </DropdownStyled>
      )}
    </>
  );
};
export default DropdownButton;
