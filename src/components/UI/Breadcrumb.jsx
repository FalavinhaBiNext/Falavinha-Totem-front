import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import route from "../../routes/routePaths";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const Breadcrumb = ({ children, styleProps, onClick }) => {
  return (
    <div className={styleProps} onClick={onClick}>
      <Link
        to={route.adminManager}
        className="flex items-center gap-1 font-semibold text-md font-gilroyLight text-light_color h-[inherit]"
        title="Volar à página inicial"
      >
        <HomeRoundedIcon style={{ marginBottom: "4px" }} />
        {children}
      </Link>
    </div>
  );
};

Breadcrumb.propTypes = {
  children: PropTypes.string.isRequired,
  styleProps: PropTypes.string,
  onClick: PropTypes.func,
};

export default Breadcrumb;
