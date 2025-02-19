import PropTypes from "prop-types";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import AdminHeader from "../components/adminUI/AdminHeader";
import SideMenu from "../components/adminUI/SideMenu";
import AdminFooter from "../components/adminUI/AdminFooter";
import { GlobalContext } from "../context/GlobalContextProvider";
import useScreenSize from "../hooks/useScreenSize";
import backgroundLarge from "../assets/image/administrativo-large.png";
import backgroundSmall from "../assets/image/administrativo-small.png";
import pages from "../routes/routePaths";
import Breadcrumb from "../components/UI/Breadcrumb";
import SimpleForm from "../components/adminUI/SimpleForm";

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
      <AdminHeader menuList={menuList} />
      <main
        className="relative z-10 min-h-[80vh] font-gilroyThin lg:pt-[115px] pt-[135px]"
        onClick={() => setToggleDropdown(false)}
      >
        <h1 className="h-0 opacity-0">Página do administrador</h1>
        {/* breadcrumb será exibido aqui */}
        {hendleGetPageLocation(location, "gerenciamento") && (
          <Breadcrumb
            styleProps="absolute top-[80px] lg:top-[60px] h-[55px] w-full 
          left-0 right-0 lg:p-base_container px-5 z-50 border-b border-primary_color"
          >
            Inicial
          </Breadcrumb>
        )}
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
