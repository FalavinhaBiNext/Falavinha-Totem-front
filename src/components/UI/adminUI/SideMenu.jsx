import { useCallback, useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalContextProvider";
import useScreenSize from "../../../hooks/useScreenSize";

export default function SideMenu() {
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
        className={`fixed top-0 bottom-0 left-0 w-[280px] z-[1000] 
         bg-app_bg_dark shadow-bx-2 transition-transform duration-500 ease-in-out 
         ${toggleSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h1>SideMenu</h1>
      </aside>
      <span
        className={`fixed top-0 left-0 z-50 block w-full h-full lg:hidden bg-[rgba(0,0,0,0.3)] backdrop-blur-[4px] transition-all duration-500 ease-in-out ${
          toggleSidebar
            ? "opacity-1 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleCloseSidebar}
      />
    </>
  );
}
