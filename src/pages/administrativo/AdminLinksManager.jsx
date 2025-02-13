import { useContext, useState } from "react";
import PropTypes from "prop-types";
import AdminPageTitle from "../../components/adminUI/AdminPageTitle";
import { Link } from "react-router-dom";
import pages from "../../routes/routePaths";
import { ArrowDownIcon } from "../../assets/icon";
import settingsIcon from "../../assets/icon/settings.svg";
import InputAdminOne from "../../components/adminUI/InputAdminOne";
import HomeIcon from "../../assets/icon/home.svg";
import checklistIcon from "../../assets/icon/checklist.svg";
import lookingGlassIcon from "../../assets/icon/looking-glass.svg";
import { GlobalContext } from "../../context/GlobalContextProvider";

const menuLinks = [
  {
    icon: HomeIcon,
    link: pages.home,
    label: "Acessar APP totem",
  },
  {
    icon: checklistIcon,
    link: pages.questionarioConsultoria,
    label: `Questionário Consultoria Empresarial`,
  },
  {
    icon: checklistIcon,
    link: pages.questionarioBusinessIntelligence,
    label: `Questionário business intelligence`,
  },
  {
    icon: settingsIcon,
    label: `Apresentação Personalizada`,
    hasDropdown: true,
  },
  {
    icon: lookingGlassIcon,
    link: pages.consultaCnpj,
    label: `Consultar CNPJ`,
  },
];

export default function AdminLinksManager() {
  const { userName } = useContext(GlobalContext);
  const [toggleInput, setToggleInput] = useState(false);
  const listingStyle = `sm:min-h-[130px] min-h-[120px] rounded-[10px] shadow-bx-3 border-[1px] 
  border-special_border bg-[#0f4856] relative`;
  const formStyle = `absolute bottom-0 flex flex-col justify-end gap-3 
  bg-app_bg mx-auto right-0 p-4 rounded-[10px] w-full left-0
  transition-all duration-500 ease-in-out top-0 overflow-hidden z-50`;
  const submitButtonStyle = `w-full h-[45px] max-w-none sm:max-w-[120px] px-[10px] py-[10px] 
  border-[1px] border-gray_color_dark text-light_color gilroyLight shadow-bx-1 rounded-xl 
  focus:outline-none focus:border-primary_color bg-gray_color_dark transition-all duration-200 ease-in-out`;

  return (
    <>
      <AdminPageTitle title={`Bem vindo (a) ${userName}`} />
      <ul className="grid grid-cols-1 gap-6 text-light_color sm:grid-cols-adminGrid">
        {menuLinks.map((item, index) => (
          <li
            key={index}
            className={!item.hasDropdown ? listingStyle : "relative"}
          >
            {item.hasDropdown ? (
              <>
                <div
                  className={`${listingStyle} flex items-center gap-4 py-[20px] px-[30px] z-[100] cursor-pointer`}
                  onClick={() => setToggleInput(!toggleInput)}
                >
                  <IconImage iconElement={item.icon} />

                  <p className="text-xl capitalize sm:text-2xl font-gilroyThin">
                    {item.label}
                  </p>
                  <span
                    className={`ml-auto  transition-transform duration-300 ease-in-out ${
                      toggleInput ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ArrowDownIcon />
                  </span>
                </div>

                <form
                  className={`${formStyle} ${
                    toggleInput
                      ? "sm:h-[280px] h-[320px] opacity-100 visible"
                      : "h-0 opacity-0 invisible"
                  }`}
                  style={{ maxWidth: "calc(100% - 20px)" }}
                >
                  <div className="flex flex-col items-end w-full gap-3 md:flex-row">
                    <InputAdminOne
                      label="Nome da Empresa"
                      name="company"
                      labelStyle="mb-1"
                    />
                    <button
                      className={submitButtonStyle}
                      type="button"
                      onClick={() => setToggleInput(false)}
                    >
                      Ativar
                    </button>
                  </div>

                  <small className="text-xs tracking-wider font-gilroyLight">
                    *Ao clicar em “Ativar” o nome da empresa ficará visível em
                    todas as páginas do APP.
                  </small>
                </form>
              </>
            ) : (
              <Link
                to={item.link}
                className="flex items-center text-xl capitalize sm:text-2xl font-gilroyThin 
                min-h-[inherit] gap-4 py-[20px] px-[30px]"
              >
                <IconImage iconElement={item.icon} />
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

const IconImage = ({ iconElement }) => {
  return (
    <img
      src={iconElement}
      alt="Ícone"
      className="w-[35px] min-w-[35px] h-[35px] object-cover"
      title="Ícone"
    />
  );
};

IconImage.propTypes = {
  iconElement: PropTypes.string,
};
