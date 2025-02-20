import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContextProvider";

export default function MenuBurger() {
  const {
    toggleBurger: isOpen,
    setToggleBurger,
    setToggleSidebar,
    setToggleDropdown,
  } = useContext(GlobalContext);
  const handleToggleSidebar = () => {
    setToggleBurger(true);
    setToggleSidebar(true);
    setToggleDropdown(false);
  };

  const barsStyle =
    "w-6 h-[3px] rounded-sm bg-light_color duration-300 ease-in-out";

  return (
    <button
      className="flex flex-col items-center justify-center gap-[5px] h-fit w-auto 
      rounded-[5px] cursor-pointer lg:hidden focus:outline-none bg-primary_color py-[6px] px-[8px] shadow-bx-3
      border-[1px] border-special_border"
      onClick={handleToggleSidebar}
    >
      <span
        className={`${barsStyle} ${
          isOpen && "transform rotate-45 translate-y-[10px]"
        } transition-transform`}
      />
      <span
        className={`${barsStyle} transition-opacity ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`${barsStyle} ${
          isOpen && "transform -rotate-45 -translate-y-[9px]"
        } transition-transform`}
      />
    </button>
  );
}
