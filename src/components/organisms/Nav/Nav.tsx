import { NavStyled } from "./Nav.styled";
import NavActions from "./NavActions";
import NavTitle from "./NavTitle";

const Nav = () => {
    return (
        <NavStyled>
        <NavTitle>DDESIGNS</NavTitle>
        <NavActions/>
        </NavStyled>
    );
    }
export default Nav;