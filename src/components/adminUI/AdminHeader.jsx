import Logo from "./Logo";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import MenuBurger from "./MenuBurger";
import avatar from "../../assets/image/avatar.png";
import DropdownAvatar from "./DropdownAvatar";
import { ArrowDownIcon } from "../../assets/icon";
import pages from "../../routes/routePaths";
import useScrollEvent from "../../hooks/useScrollEvent";

export default function AdminHeader({ menuList, isElementVisible }) {
  const { isScrolling } = useScrollEvent();

  const listingStyle = `toggle-menu flex gap-1 items-center min-h-[inherit]
  relative cursor-pointer text-md font-gilroyLight font-semibold`;

  return (
    <header
      className={`fixed w-full min-h-[60px] z-50 flex items-center justify-between 
      bg-primary_color transition-all duration-200 ease-in-out lg:p-base_container px-5
        ${
          isElementVisible
            ? isScrolling
              ? "shadow-bx-1"
              : "shadow-none"
            : "lg:shadow-bx-1 shadow-none"
        }`}
    >
      <div className="flex items-center justify-between w-full min-h-[inherit]">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <MenuBurger />
          <Logo imageSize="w-[35px]" whereTo={pages.adminManager} />
        </div>

        {/* NAV */}
        <nav className="hidden lg:flex min-h-[inherit]">
          <ul className="flex items-center justify-center h-auto gap-6 px-0 pt-0 min-h-[inherit]">
            {menuList.map((item, index) => (
              <li
                key={index}
                className={`${listingStyle} text-light_color 
                }`}
              >
                {item.menu}
                {item.submenu && <ArrowDownIcon />}
                {item.submenu && (
                  <ul
                    className="flex flex-col shadow-bx-3 transition-all duration-300 ease-in-out
                  w-max absolute top-[61px] bg-primary_color rounded-[10px] border-[1px]
                  border-special_border p-[5px] gap-2"
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="flex items-center transition-all duration-200 ease-in-out
                      cursor-pointer font-normal text-md h-[30px] w-full min-h-[inherit]
                      rounded-[5px] hover:bg-app_bg_dark focus:bg-app_bg_dark"
                      >
                        <NavLink
                          to={subItem.path}
                          className={({ isActive }) =>
                            `px-2 min-h-[inherit] rounded-[inherit] h-[inherit] flex items-center w-[inherit] ${
                              isActive ? "bg-app_bg_dark" : ""
                            }`
                          }
                        >
                          {subItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* AVATAR */}
        <DropdownAvatar avatar={avatar} />
      </div>

      {/* FAKE MOBILE HEADER */}
      <span
        className={`bg-primary_color h-[135px] rotate-[-2deg] w-[200%] fixed
        left-[-10px] right-[-10px] top-[-75px] lg:hidden block z-[-1] pointer-events-none 
         ${
           isElementVisible
             ? isScrolling
               ? "shadow-bx-1"
               : "shadow-none"
             : "shadow-bx-1"
         }
        `}
      />
    </header>
  );
}

AdminHeader.propTypes = {
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      menu: PropTypes.string.isRequired,
      submenu: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string })),
    })
  ).isRequired,
  isElementVisible: PropTypes.bool,
};
