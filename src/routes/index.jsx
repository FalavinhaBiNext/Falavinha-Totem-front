import { Suspense } from "react";
import { Routes, Route, useLocation, Outlet, Navigate } from "react-router-dom";
import Loader from "../components/UI/Loader";
import UseKeepOnTop from "../hooks/useKeepOnTop";
import PublicRoutes from "./publicRoutes";
import PrivateRoutes from "./privateRoutes";
import routePaths from "./routePaths";

export default function RoutesManager() {
  const {
    DashboardContabilidade,
    DashboardFinanceiro,
    DashboardRH,
    DashboardGestaoEstoque,
    DashboardTributario,
    QuestionarioRH,
    QuestionarioCigam,
    QuestionarioTributario,
    QuestionarioEmpresarial,
    QuestionarioHolding,
    ResultadoRH,
    ResultadoCigam,
    ResultadoTributario,
    ResultadoEmpresarial,
    ResultadoHolding,
    Home,
    Solucoes,
    BusinessIntelligence,
    Tributario,
    Contabilidade,
    ConsultoriaRH,
    Cigam,
    ConsultoriaEmpresarial,
    Holding,
    Treinamentos,
    Cursos,
    ModulosCigam,
    NotFound,
  } = PublicRoutes();

  const {
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
    ReenvioEmailFalavinhaPage,
    RespostasLeadsPage,
  } = PrivateRoutes();

  const isAuthenticated = () => {
    const token = true; // Replace with actual authentication check
    return !!token;
  };

  const ProtectedRoutes = () => {
    const location = useLocation();
    return isAuthenticated() ? (
      <Outlet />
    ) : (
      <Navigate to={routePaths.adminlogin} replace state={{ from: location }} />
    );
  };

  const privateRoutes = [
    { path: routePaths.adminManager, element: <AdminManager /> },
    { path: routePaths.consultaCnpj, element: <ConsultaCNPJPage /> },
    {
      path: routePaths.questionarioConsultoria,
      element: <QuestionarioConsultoriaPage />,
    },
    {
      path: routePaths.resultadoConsultoria,
      element: <ResultadoConsultoriaPage />,
    },
    { path: routePaths.cadastroPergunta, element: <CadastroPeguntaPage /> },
    { path: routePaths.leadsCadastrados, element: <LeadsCadastradosPage /> },
    { path: routePaths.listaPerguntas, element: <ListaPerguntasPage /> },
    {
      path: routePaths.questionarioBusinessIntelligence,
      element: <QuestionarioBusinessIntelligencePage />,
    },
    {
      path: routePaths.reenvioEmailFalavinha,
      element: <ReenvioEmailFalavinhaPage />,
    },
    { path: routePaths.reenvioEmailLead, element: <ReenvioEmailLeadPage /> },
    { path: routePaths.respostasLeads, element: <RespostasLeadsPage /> },
  ];

  const publicRoutes = [
    { path: routePaths.adminlogin, element: <AdminLogin /> },
    { path: routePaths.home, element: <Home /> },
    { path: routePaths.solucoes, element: <Solucoes /> },
    {
      path: routePaths.bisinessIntelligence,
      element: <BusinessIntelligence />,
    },
    { path: routePaths.tributario, element: <Tributario /> },
    { path: routePaths.contabilidade, element: <Contabilidade /> },
    { path: routePaths.consultoriRh, element: <ConsultoriaRH /> },
    { path: routePaths.cigam, element: <Cigam /> },
    {
      path: routePaths.consultoriaEmpresarial,
      element: <ConsultoriaEmpresarial />,
    },
    { path: routePaths.holding, element: <Holding /> },
    { path: routePaths.treinamentos, element: <Treinamentos /> },
    { path: routePaths.cursos, element: <Cursos /> },
    { path: routePaths.modulosCigam, element: <ModulosCigam /> },
    { path: routePaths.dashboardGestor, element: <DashboardContabilidade /> },
    { path: routePaths.dashboardFinanceiro, element: <DashboardFinanceiro /> },
    { path: routePaths.dashboardRH, element: <DashboardRH /> },
    {
      path: routePaths.dashboardGestaoEstoque,
      element: <DashboardGestaoEstoque />,
    },
    { path: routePaths.dashboardTributario, element: <DashboardTributario /> },
    { path: routePaths.questionarioRH, element: <QuestionarioRH /> },
    { path: "/resultado-rh", element: <ResultadoRH /> },
    { path: routePaths.questionarioCigam, element: <QuestionarioCigam /> },
    { path: "/resultado-cigam", element: <ResultadoCigam /> },
    {
      path: routePaths.questionarioTributario,
      element: <QuestionarioTributario />,
    },
    { path: "/resultado-tributario", element: <ResultadoTributario /> },
    {
      path: routePaths.questionarioEmpresarial,
      element: <QuestionarioEmpresarial />,
    },
    { path: "/resultado-empresarial", element: <ResultadoEmpresarial /> },
    { path: routePaths.questionarioHolding, element: <QuestionarioHolding /> },
    { path: "/resultado-holding", element: <ResultadoHolding /> },
    { path: "*", element: <NotFound /> },
  ];

  return (
    <>
      <UseKeepOnTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route element={<ProtectedRoutes />}>
            <Route
              path="admin"
              element={
                <AdminLayout>
                  <Outlet />
                </AdminLayout>
              }
            >
              {privateRoutes.map(({ path, element }) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <Suspense fallback={<Loader />}>
                      <>{element}</>{" "}
                    </Suspense>
                  }
                />
              ))}
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
