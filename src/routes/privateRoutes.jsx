import { lazy } from "react";

export default function privateRoutes() {
  // PÁGINAS ADMINISTRATIVO
  const AdminLogin = lazy(() => import("../pages/administrativo/Login"));
  const AdminLayout = lazy(() => import("../layouts/AdminLayout"));
  const AdminManager = lazy(() =>
    import("../pages/administrativo/AdminLinksManager")
  );
  const ConsultaCNPJPage = lazy(() =>
    import("../pages/administrativo/ConsultaCNPJ")
  );
  const QuestionarioConsultoriaPage = lazy(() =>
    import("../pages/administrativo/QuestionarioConsultoria")
  );
  const ResultadoConsultoriaPage = lazy(() =>
    import("../pages/administrativo/ResultadoConsultoria")
  );
  const CadastroPeguntaPage = lazy(() =>
    import("../pages/administrativo/CadastroPergunta")
  );
  const LeadsCadastradosPage = lazy(() =>
    import("../pages/administrativo/LeadsCadastrados")
  );
  const ListaPerguntasPage = lazy(() =>
    import("../pages/administrativo/ListaPerguntas")
  );
  const QuestionarioBusinessIntelligencePage = lazy(() =>
    import("../pages/administrativo/QuestionarioBusinessIntelligence")
  );
  const ReenvioEmailLeadPage = lazy(() =>
    import("../pages/administrativo/ReenvioEmailLead")
  );
  const RespostasLeadsPage = lazy(() =>
    import("../pages/administrativo/RespostasLeads")
  );
  const PropostaLeadPage = lazy(() =>
    import("../pages/administrativo/PropostaLead")
  );
  const PerfilPage = lazy(() => import("../pages/administrativo/Perfil"));

  return {
    AdminLogin,
    AdminLayout,
    AdminManager,
    ConsultaCNPJPage,
    QuestionarioConsultoriaPage,
    ResultadoConsultoriaPage,
    CadastroPeguntaPage,
    LeadsCadastradosPage,
    ListaPerguntasPage,
    QuestionarioBusinessIntelligencePage,
    ReenvioEmailLeadPage,
    RespostasLeadsPage,
    PropostaLeadPage,
    PerfilPage,
  };
}
