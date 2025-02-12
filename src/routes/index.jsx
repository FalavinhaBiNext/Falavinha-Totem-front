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
  } = PrivateRoutes();

  const isAuthenticated = () => {
    const token = true; // Replace with actual authentication check
    return !!token;
  };

  const ProtectedRoutes = () => {
    const location = useLocation();
    const isAuth = isAuthenticated();

    return isAuth ? (
      <Outlet />
    ) : (
      <Navigate to={routePaths.adminlogin} replace state={{ from: location }} />
    );
  };

  return (
    <>
      <UseKeepOnTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public routes */}
          {[
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
            {
              path: routePaths.dashboardGestor,
              element: <DashboardContabilidade />,
            },
            {
              path: routePaths.dashboardFinanceiro,
              element: <DashboardFinanceiro />,
            },
            { path: routePaths.dashboardRH, element: <DashboardRH /> },
            {
              path: routePaths.dashboardGestaoEstoque,
              element: <DashboardGestaoEstoque />,
            },
            {
              path: routePaths.dashboardTributario,
              element: <DashboardTributario />,
            },
            { path: routePaths.questionarioRH, element: <QuestionarioRH /> },
            { path: "/resultado-rh", element: <ResultadoRH /> },
            {
              path: routePaths.questionarioCigam,
              element: <QuestionarioCigam />,
            },
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
            {
              path: "/resultado-empresarial",
              element: <ResultadoEmpresarial />,
            },
            {
              path: routePaths.questionarioHolding,
              element: <QuestionarioHolding />,
            },
            { path: "/resultado-holding", element: <ResultadoHolding /> },
            { path: "*", element: <NotFound /> },
            { path: routePaths.adminlogin, element: <AdminLogin /> },
          ].map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          {/* Private routes */}
          <Route element={<ProtectedRoutes />}>
            <Route
              path="admin"
              element={
                <Suspense fallback={<Loader />}>
                  <AdminLayout>
                    <Outlet />
                  </AdminLayout>
                </Suspense>
              }
            >
              <Route
                path={routePaths.adminManager}
                element={<AdminManager />}
              />
              <Route
                path={routePaths.consultaCnpj}
                element={<ConsultaCNPJPage />}
              />
              <Route
                path={routePaths.questionarioConsultoria}
                element={<QuestionarioConsultoriaPage />}
              />
              <Route
                path={routePaths.resultadoConsultoria}
                element={<ResultadoConsultoriaPage />}
              />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
