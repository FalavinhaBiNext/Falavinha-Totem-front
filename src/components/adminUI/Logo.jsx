import { useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../../contexts/GlobalContextProvider";
import { Link } from "react-router-dom";

export default function Logo(props) {
  const { whereTo, logoImg, imageSize } = props;

  const { adminLogo, setToggleSidebar } = useContext(GlobalContext);

  const handleLogout = () => {
    localStorage.removeItem("surveyAnswers");
    setToggleSidebar(false);
  };

  return (
    <Link
      to={whereTo || "/"}
      className="left-auto flex h-auto w-max"
      title="Página inicial"
      onClick={handleLogout}
    >
      <figure className={imageSize || "lg:w-[45px] w-[35px]"}>
        <img
          className="object-cover w-[inherit] h-[inherit]"
          src={logoImg || adminLogo}
          alt="Logo"
        />
      </figure>
    </Link>
  );
}

Logo.propTypes = {
  whereTo: PropTypes.string,
  logoImg: PropTypes.string,
  imageSize: PropTypes.string,
};
