import PropTypes from "prop-types";
import AdminHeader from "../components/adminUI/AdminHeader";
import SideMenu from "../components/adminUI/SideMenu";
import AdminFooter from "../components/adminUI/AdminFooter";
import { GlobalContext } from "../context/GlobalContextProvider";
import { useContext } from "react";
import useScreenSize from "../hooks/useScreenSize";
import backgroundLarge from "../assets/image/administrativo-large.png";
import backgroundSmall from "../assets/image/administrativo-small.png";
import pages from "../routes/routePaths";
import Breadcrumb from "../components/UI/Breadcrumb";
import { useLocation } from "react-router-dom";

export default function AdminLayout({ children }) {
  const { setToggleDropdown, hendleGetPageLocation } =
    useContext(GlobalContext);
  const location = useLocation();

  const {
    screenSize: { width },
  } = useScreenSize();

  const menuList = [
    {
      menu: "Consultoria Empresarial",
      submenu: [
        { label: "Cadastrar pergunta", path: pages.cadastroPergunta },
        { label: "Listar perguntas", path: pages.listaPerguntas },
      ],
    },
    {
      menu: "Relatórios",
      submenu: [
        { label: "Leads cadastrados - SDR", path: pages.leadsCadastrados },
        { label: "Listar perguntas", path: pages.listaPerguntas },
      ],
    },
    {
      menu: "Consultar CNPJ",
      submenu: [{ label: "Consultar CNPJ", path: pages.consultaCnpj }],
    },
    {
      menu: "Email",
      submenu: [
        { label: "Reenviar para Falavinha", path: pages.reenvioEmailFalavinha },
        { label: "Reenviar para lead", path: pages.reenvioEmailLead },
      ],
    },
  ];

  return (
    <>
      <AdminHeader menuList={menuList} />
      <main
        className="relative z-10 min-h-[80vh] font-gilroyThin min-[992px]:p-base_container px-10"
        onClick={() => setToggleDropdown(false)}
      >
        <h1 className="h-0 opacity-0">Página do administrador</h1>
        {hendleGetPageLocation(location, "gerenciamento") && (
          <Breadcrumb
            styleProps="absolute top-[80px] lg:top-[60px] lg:h-[50px] h-[40px] w-full 
          left-0 right-0 min-[992px]:p-base_container px-2 z-50 border-b border-primary_color"
          >
            Inicial
          </Breadcrumb>
        )}
        <div className="relative flex flex-col justify-start h-full sm:gap-32 gap-12 lg:pt-36 pt-[160px] pb-10 mb-[100px]">
          {children}
        </div>
      </main>
      <span
        className="fixed top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${
            width > 768 ? backgroundLarge : backgroundSmall
          })`,
        }}
      />
      <SideMenu menuList={menuList} />
      <AdminFooter />
    </>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
