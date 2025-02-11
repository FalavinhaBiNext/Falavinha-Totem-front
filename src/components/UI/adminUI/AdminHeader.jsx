import Logo from "./Logo";
import MenuBurger from "./MenuBurger";
import avatar from "../../../assets/image/avatar.png";
import useScreenSize from "../../../hooks/useScreenSize";
import DropdownAvatar from "./DropdownAvatar";
import { ArrowDownIcon } from "../../../assets/icon";

export default function AdminHeader() {
  const {
    screenSize: { width },
  } = useScreenSize();

  const menuList = [
    {
      menu: "Consultoria Empresarial",
      submenu: [{ label: "Cadastrar pergunta" }, { label: "Listar perguntas" }],
    },
    {
      menu: "Relatórios",
      submenu: [
        { label: "Leads cadastrados - SDR" },
        { label: "Listar perguntas" },
      ],
    },
    {
      menu: "Consultar CNPJ",
      submenu: [{ label: "Consultar CNPJ" }],
    },
    {
      menu: "Email",
      submenu: [
        { label: "Reenviar para Falavinha" },
        { label: "Reenviar para lead" },
      ],
    },
  ];

  const listingStyle = `toggle-menu flex gap-1 items-center min-h-[inherit] 
  relative cursor-pointer text-md text-light_color font-gilroyLight font-semibold`;

  return (
    <header
      className="fixed w-full min-h-[60px] 
      lg:shadow-bx-1 shadow-none lg:bg-primary_color
      bg-transparent h-fit flex items-center justify-between z-50
      min-[992px]:p-base_container px-5"
    >
      {/* LOGO */}
      <div className="flex items-center gap-3">
        <MenuBurger />
        <Logo imageSize="w-[35px]" />
      </div>

      {/* NAV */}
      <nav className="hidden lg:flex min-h-[inherit]">
        <ul className="flex items-center justify-center h-auto gap-6 px-0 pt-0 min-h-[inherit]">
          {menuList.map((item, index) => (
            <li key={index} className={listingStyle}>
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
                      cursor-pointer font-normal text-md min-h-[inherit] text-light_color 
                      hover:bg-app_bg px-2 rounded-[5px] h-[30px] w-full font-gilroyLight"
                    >
                      {subItem.label}
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

      {/* FAKE MOBILE HEADER */}
      <span
        className="shadow-bx-1 bg-primary_color h-[140px] rotate-[-2deg] w-[200%] fixed 
        left-[-10px] right-[-10px] top-[-75px] lg:hidden block z-[-1] pointer-events-none"
      />
    </header>
  );
}
