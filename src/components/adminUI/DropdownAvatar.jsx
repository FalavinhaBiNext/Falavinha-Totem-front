import { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import pages from "../../routes/routePaths";
import { GlobalContext } from "../../context/GlobalContextProvider";

const getFirstName = (name) => name?.split(" ")[0] || "";

const DropdownAvatar = ({ avatar }) => {
  const { toggleDropdown, setToggleDropdown, userName } =
    useContext(GlobalContext);

  const listingStyle = `transition-all duration-200 ease-in-out cursor-pointer 
  text-light_color hover:bg-app_bg_dark px-2 rounded-[5px] h-[30px] flex items-center`;
  return (
    <div className="w-[166px] relative flex flex-row-reverse items-center">
      <figure
        className="relative z-20 flex items-center justify-center shadow-bx-3 min-w-10 
        w-10 h-10 overflow-hidden rounded-full border-[2.5px] border-light_color 
        bg-light_color cursor-pointer"
        onClick={() => setToggleDropdown(!toggleDropdown)}
      >
        <img
          className="w-[inherit] h-[inherit] object-cover rounded-full mt-[-5px]"
          src={avatar}
          alt="Avatar"
        />
      </figure>
      <div
        className="absolute border-[1px] border-special_border w-full py-[6px] text-center 
         bg-gradient-to-r from-[#00b0a7] to-[#00736e] shadow-bx-3 right-4 cursor-default
        px-5 max-w-[150px] z-10 rounded-2xl text-sm text-light_color 
         h-[30px] flex items-center pr-5"
        title={userName}
      >
        <span className="block overflow-hidden overflow-ellipsis whitespace-nowrap">
          {userName}
        </span>
      </div>
      <ul
        className={`w-[166px] h-[100px] absolute right-0 top-2 bg-primary_color shadow-bx-3 
        rounded-[10px] px-[5px] py-[5px] flex flex-col gap-1 justify-end 
        overflow-hidden transition-all duration-300 ease-in-out border-[1px] border-special_border ${
          toggleDropdown
            ? "translate-y-[15px] opacity-100"
            : "translate-y-[-15px] opacity-0"
        }`}
      >
        <li className={listingStyle} onClick={() => setToggleDropdown(false)}>
          <Link
            to="#"
            className="h-[inherit] leading-[30px] w-full"
            onClick={() => setToggleDropdown(false)}
          >
            Acessar perfil
          </Link>
        </li>
        <li className={listingStyle}>
          <Link
            to={pages.home}
            className="h-[inherit] leading-[30px] w-full"
            onClick={() => setToggleDropdown(false)}
          >
            Sair
          </Link>
        </li>
      </ul>
    </div>
  );
};

DropdownAvatar.propTypes = {
  avatar: PropTypes.string,
};

export default DropdownAvatar;
