import { Link, useNavigate } from "react-router-dom";
import MainHeader from "../../components/Header";
import HeroApp from "../../components/Hero";
import FooterApp from "../../components/Footer";
import MainButton from "../../components/UI/MainButton";
import routes from "../../routes";
import VideoPlayer from "../../components/UI/VideoPlayer";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <MainHeader />

      <HeroApp>
        <VideoPlayer />
      </HeroApp>

      <FooterApp>
        <MainButton
          onClick={() => navigate(routes.servicos)}
          className={"md:max-w-[470px] max-w-none uppercase"}
        >
          Conheça nossos serviços
        </MainButton>
        <Link
          to="/login"
          className="flex justify-center pt-2 mx-auto text-light_color"
        >
          Login
        </Link>
      </FooterApp>
    </>
  );
}

export default HomePage;
