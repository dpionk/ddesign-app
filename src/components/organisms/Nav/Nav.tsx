import { Link } from "react-router-dom";
import { NavStyled } from "./Nav.styled";
import NavActions from "./NavActions";
import NavTitle from "./NavTitle";

const Nav = () => {
  return (
    <NavStyled>
      <Link to="/">
        <NavTitle>DDESIGNS</NavTitle>
      </Link>
      <NavActions />
    </NavStyled>
  );
};
export default Nav;
