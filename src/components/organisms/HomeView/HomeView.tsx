import { Link } from "react-router-dom";
import PageTitle from "@components/atoms/PageTitle";
import { HomeViewImageStyled, HomeViewWrapper } from "./HomeView.styled";
import Button from "@components/atoms/Button";

const HomeView = () => {
  return (
    <HomeViewWrapper>
      <HomeViewImageStyled src="https://media-public.canva.com/wpXhw/MAD-xswpXhw/1/s2.jpg" />
      <div>
        <PageTitle>
          <div>Your</div>
          <div>Home,</div>
          <div>Designed</div>
        </PageTitle>
        <Link to="/categories">
        <Button text="Search our products" />
        </Link>
      </div>
    </HomeViewWrapper>
  );
};
export default HomeView;
