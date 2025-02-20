import { useCallback, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../../contexts/GlobalContextProvider";
import useScreenSize from "../../hooks/useScreenSize";
import { Link } from "react-router-dom";
import falavinhaLogo from "../../assets/image/falavinha-logo.svg";
import Logo from "./Logo";

export default function SideMenu({ menuList }) {
  const { toggleSidebar, setToggleSidebar, setToggleBurger } =
    useContext(GlobalContext);
  const {
    screenSize: { width },
  } = useScreenSize();

  const handleCloseSidebar = useCallback(() => {
    setToggleSidebar(false);
    setToggleBurger(false);
  }, [setToggleSidebar, setToggleBurger]);

  useEffect(() => {
    if (width < 768) {
      handleCloseSidebar();
    }
  }, [width, handleCloseSidebar]);

  return (
    <>
      <aside
        className={`fixed top-0 bottom-0 left-0 w-[300px] z-[1000] rounded-[10px] overflow-hidden
         bg-app_bg_dark shadow-bx-2 transition-transform duration-500 ease-in-out
         ${toggleSidebar ? "translate-x-0" : "-translate-x-[110%]"}`}
      >
        <div className="flex items-start justify-between gap-4 p-5 min-h-[70px] mb-16 relative">
          <Logo logoImg={falavinhaLogo} imageSize="w-full h-[25px]" />
          <div
            className="flex flex-col justify-around w-[25px] h-[25px] gap-[6px]"
            onClick={handleCloseSidebar}
          >
            <span className="w-full h-[3px] rounded-sm bg-light_color transform rotate-45 translate-y-[8px]" />
            <span className="w-full h-[3px] rounded-sm bg-light_color transform -rotate-45 -translate-y-[8px]" />
          </div>
        </div>

        <ul className="flex flex-col gap-5 px-5">
          {menuList.map((item, index) => (
            <li
              key={index}
              className="flex flex-col gap-2 text-xl font-normal text-light_color font-gilroyLight"
            >
              <span className="block overflow-hidden overflow-ellipsis whitespace-nowrap">
                {item.menu}
              </span>

              {item.submenu && (
                <ul className="flex flex-col gap-2 pl-2">
                  {item.submenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={`text-sm list-styleInside pl-2 h-[30px] leading-[30px] rounded-[5px]
                      overflow-hidden overflow-ellipsis whitespace-nowrap
                      ${
                        subItem.path === window.location.pathname
                          ? "bg-admin_background font-bold"
                          : "font-light"
                      }`}
                    >
                      <Link to={subItem.path} onClick={handleCloseSidebar}>
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
      <span
        className={`fixed top-0 left-0 z-50 block w-full h-full lg:hidden 
        bg-[rgba(0,0,0,0.3)] backdrop-blur-[4px] transition-all duration-500 ease-in-out 
        ${
          toggleSidebar
            ? "opacity-1 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleCloseSidebar}
      />
    </>
  );
}

SideMenu.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
