import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IconButton, NavActionsStyled } from "./NavActions.styled";

const NavActions = () => {
  return (
    <NavActionsStyled>
      <IconButton>
        <CiShoppingCart size="24" />
      </IconButton>
      <IconButton>
        <CiUser size="24" />
      </IconButton>
    </NavActionsStyled>
  );
};
export default NavActions;
