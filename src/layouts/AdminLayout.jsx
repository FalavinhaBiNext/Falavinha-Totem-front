import PropTypes from "prop-types";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import AdminHeader from "../components/adminUI/AdminHeader";
import SideMenu from "../components/adminUI/SideMenu";
import AdminFooter from "../components/adminUI/AdminFooter";
import { GlobalContext } from "../contexts/GlobalContextProvider";
import useScreenSize from "../hooks/useScreenSize";
import backgroundLarge from "../assets/image/administrativo-large.png";
import backgroundSmall from "../assets/image/administrativo-small.png";
import pages from "../routes/routePaths";
import SimpleForm from "../components/adminUI/SimpleForm";

export default function AdminLayout({ children }) {
  const { setToggleDropdown } = useContext(GlobalContext);
  const location = useLocation();

  const {
    screenSize: { width },
  } = useScreenSize();

  const checkPageLocation = () => {
    if (
      location.pathname.split("/")[2] === "questionario-consultoria" ||
      location.pathname.split("/")[2] === "questionario-business-intelligence"
    ) {
      return true;
    } else {
      return false;
    }
  };

  const isElementVisible = checkPageLocation();

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
        { label: "Respostas por lead", path: pages.respostasLeads },
      ],
    },
    {
      menu: "Consultar CNPJ",
      submenu: [{ label: "Consultar CNPJ", path: pages.consultaCnpj }],
    },
    {
      menu: "Email",
      submenu: [
        { label: "Reenviar para lead", path: pages.reenvioEmailLead },
        { label: "Proposta para lead", path: pages.propostaLead },
      ],
    },
  ];

  return (
    <>
      <AdminHeader menuList={menuList} isElementVisible={isElementVisible} />
      <main
        className={`relative z-10 font-gilroyThin lg:pt-[60px] ${
          isElementVisible ? "pt-[60px]" : "pt-[95px]"
        }`}
        onClick={() => setToggleDropdown(false)}
      >
        <h1 className="h-0 opacity-0">Página do administrador</h1>
        {isElementVisible && <SimpleForm />}

        {/* conteúdo da página será exibido aqui */}
        <div className="relative flex flex-col justify-start h-full pb-10 mb-[100px] lg:p-base_container px-10">
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
