import { Suspense } from "react";
import { Routes, Route, useLocation, Outlet, Navigate } from "react-router-dom";
import Loader from "../components/UI/Loader";
import UseKeepOnTop from "../hooks/useKeepOnTop";
import PublicRoutes from "./publicRoutes";
import PrivateRoutes from "./privateRoutes";

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
      <Navigate to="/login" replace state={{ from: location }} />
    );
  };

  return (
    <>
      <UseKeepOnTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public routes */}
          {[
            { path: "/", element: <Home /> },
            { path: "/solucoes", element: <Solucoes /> },
            {
              path: "/business-intelligence",
              element: <BusinessIntelligence />,
            },
            { path: "/tributario", element: <Tributario /> },
            { path: "/contabilidade", element: <Contabilidade /> },
            { path: "/consultoriaRH", element: <ConsultoriaRH /> },
            { path: "/cigam", element: <Cigam /> },
            {
              path: "/consultoria-empresarial",
              element: <ConsultoriaEmpresarial />,
            },
            { path: "/holding", element: <Holding /> },
            { path: "/treinamentos", element: <Treinamentos /> },
            { path: "/cursos", element: <Cursos /> },
            { path: "/modulos-cigam", element: <ModulosCigam /> },
            {
              path: "/dashboard-contabilidade",
              element: <DashboardContabilidade />,
            },
            { path: "/dashboard-financeiro", element: <DashboardFinanceiro /> },
            { path: "/dashboard-rh", element: <DashboardRH /> },
            {
              path: "/dashboard-gestao-estoque",
              element: <DashboardGestaoEstoque />,
            },
            { path: "/dashboard-tributario", element: <DashboardTributario /> },
            { path: "/questionario-rh", element: <QuestionarioRH /> },
            { path: "/resultado-rh", element: <ResultadoRH /> },
            { path: "/questionario-cigam", element: <QuestionarioCigam /> },
            { path: "/resultado-cigam", element: <ResultadoCigam /> },
            {
              path: "/questionario-tributario",
              element: <QuestionarioTributario />,
            },
            { path: "/resultado-tributario", element: <ResultadoTributario /> },
            {
              path: "/questionario-empresarial",
              element: <QuestionarioEmpresarial />,
            },
            {
              path: "/resultado-empresarial",
              element: <ResultadoEmpresarial />,
            },
            { path: "/questionario-holding", element: <QuestionarioHolding /> },
            { path: "/resultado-holding", element: <ResultadoHolding /> },
            { path: "*", element: <NotFound /> },
            { path: "/login", element: <AdminLogin /> },
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
              <Route path="gerenciamento" element={<AdminManager />} />
              <Route path="consulta-cnpj" element={<ConsultaCNPJPage />} />
              <Route
                path="questionario-consultoria"
                element={<QuestionarioConsultoriaPage />}
              />
              <Route
                path="resultado-consultoria"
                element={<ResultadoConsultoriaPage />}
              />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
