import { Link } from "react-router-dom";
import AdminHeader from "../../components/UI/adminUI/AdminHeader";
import AdminLayout from "../../components/UI/adminUI/AdminLayout";
import AdminFooter from "../../components/UI/adminUI/AdminFooter";
import SideMenu from "../../components/UI/adminUI/SideMenu";
import { GlobalContext } from "../../context/GlobalContextProvider";
import AdminPageTitle from "../../components/UI/adminUI/AdminPageTitle";
import HomeIcon from "../../assets/icon/home.svg";
import cheklistIcon from "../../assets/icon/checklist.svg";
import settingsIcon from "../../assets/icon/settings.svg";
import lookingGlassIcon from "../../assets/icon/looking-glass.svg";
import { ArrowDownIcon } from "../../assets/icon";
import InputAdminOne from "../../components/UI/adminUI/InputAdminOne";
import { useState } from "react";

export default function Admin() {
  const [toggleInput, setToggleInput] = useState(false);
  // const { } = useContext(GlobalContext);

  const menuLinks = [
    {
      icon: HomeIcon,
      link: "/",
      label: "Acessar APP totem",
    },
    {
      icon: cheklistIcon,
      link: "#",
      label: `Questionário Consultoria Empresarial`,
    },
    {
      icon: cheklistIcon,
      link: "#",
      label: `Apresentação Personalizada`,
    },
    {
      icon: settingsIcon,
      link: "#",
      label: `Questionário business intelligence`,
    },
    {
      icon: lookingGlassIcon,
      link: "#",
      label: `Consultar CNPJ`,
    },
  ];

  const listingStyle = `flex items-center gap-2 min-h-[130px] py-[20px] px-[30px] rounded-[10px] 
  shadow-bx-3 border-[1px] border-special_border bg-[#0f4856]`;

  return (
    <>
      <AdminHeader />
      <AdminLayout>
        <div className="flex flex-col justify-start h-full sm:gap-40 gap-14 md:pt-32 pt-[140px] pb-10 mb-[100px]">
          <AdminPageTitle title="Bem vindo (a) Alamogordo" />
          <ul className="grid gap-6 text-white grid-cols-adminGrid">
            {menuLinks.map(({ icon, link, label }, index) => (
              <li key={index} className={listingStyle}>
                <img
                  src={icon}
                  alt="home"
                  className="w-[35px] min-w-[30px] h-[35px]"
                />
                <Link
                  to={link}
                  className="text-xl capitalize sm:text-2xl font-gilroyThin"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className={`relative z-50`}>
              <div className={listingStyle}>
                <img
                  src={settingsIcon}
                  alt="home"
                  className="w-[35px] min-w-[30px] h-[35px]"
                />
                <p className="text-xl capitalize sm:text-2xl font-gilroyThin">
                  Apresentação Personalizada
                </p>

                <span
                  className={`cursor-pointer transition-transform duration-300 ease-in-out
                   ${toggleInput ? "rotate-180" : "rotate-0"}
                  `}
                  onClick={() => setToggleInput(!toggleInput)}
                >
                  <ArrowDownIcon />
                </span>
              </div>

              <form
                className={`absolute bottom-0 flex sm:flex-row flex-col items-end gap-3 bg-app_bg mx-auto right-0
                p-4 rounded-[10px] w-full left-0 h-[130px] transition-all duration-500 ease-in-out z-[-10]
              ${
                toggleInput
                  ? "opacity-100 pointer-events-auto translate-y-[100px]"
                  : "opacity-0 pointer-events-none translate-y-[50px]"
              }
              `}
                style={{ maxWidth: "calc(100% - 20px)" }}
              >
                <InputAdminOne label="Nome da Empresa" name="company" />
                <button
                  className="w-full h-[45px] max-w-none sm:max-w-[120px] px-[10px] py-[10px] border-[1px] border-gray_color_dark 
                  text-light_color gilroyLight shadow-bx-1 rounded-xl 
                  focus:outline-none focus:border-primary_color bg-gray_color_dark transition-all 
                  duration-200 ease-in-out"
                  type="button"
                  onClick={() => setToggleInput(false)}
                >
                  Ativar
                </button>
              </form>
            </li>
          </ul>
        </div>
      </AdminLayout>
      <SideMenu />
      <AdminFooter />
    </>
  );
}
