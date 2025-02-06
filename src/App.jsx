import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/UI/Loader";
import UseKeepOnTop from "./hooks/useKeepOnTop";
import useIdleRedirect from "./hooks/useIdleRedirect";
import PagesImport from "./utils/PagesImport";

const routeConfig = [
  { path: "/", component: "Home" },
  { path: "/solucoes", component: "Solucoes" },
  { path: "/business-intelligence", component: "BusinessIntelligence" },
  { path: "/tributario", component: "Tributario" },
  { path: "/contabilidade", component: "Contabilidade" },
  { path: "/consultoriaRH", component: "ConsultoriaRH" },
  { path: "/cigam", component: "Cigam" },
  { path: "/consultoria-empresarial", component: "ConsultoriaEmpresarial" },
  { path: "/holding", component: "Holding" },
  { path: "/treinamentos", component: "Treinamentos" },
  { path: "/cursos", component: "Cursos" },
  { path: "/modulos-cigam", component: "ModulosCigam" },
  { path: "/dashboard-contabilidade", component: "DashboardContabilidade" },
  { path: "/dashboard-financeiro", component: "DashboardFinanceiro" },
  { path: "/dashboard-rh", component: "DashboardRH" },
  { path: "/dashboard-gestao-estoque", component: "DashboardGestaoEstoque" },
  { path: "/dashboard-tributario", component: "DashboardTributario" },
  { path: "/questionario-rh", component: "QuestionarioRH" },
  { path: "/resultado-rh", component: "ResultadoRH" },
  { path: "/questionario-cigam", component: "QuestionarioCigam" },
  { path: "/resultado-cigam", component: "ResultadoCigam" },
  { path: "/questionario-tributario", component: "QuestionarioTributario" },
  { path: "/resultado-tributario", component: "ResultadoTributario" },
  { path: "/questionario-empresarial", component: "QuestionarioEmpresarial" },
  { path: "/resultado-empresarial", component: "ResultadoEmpresarial" },
  { path: "/questionario-holding", component: "QuestionarioHolding" },
  { path: "/resultado-holding", component: "ResultadoHolding" },
  { path: "/login", component: "Login" },
  { path: "/consulta-cnpj", component: "ConsultaCNPJ" },
  { path: "/questionario-consultoria", component: "QuestionarioConsultoria" },
  { path: "/resultado-consultoria", component: "ResultadoConsultoria" },

  { path: "*", component: "NotFound" },
];

function App() {
  const pages = PagesImport();
  const RedirectHomepage = () => useIdleRedirect("/");

  return (
    <AnimatePresence>
      <Router>
        <UseKeepOnTop />
        {/* <RedirectHomepage /> */}
        <Suspense fallback={<Loader />}>
          <Routes>
            {routeConfig.map(({ path, component }) => {
              const Component = pages[component];
              return Component ? (
                <Route key={path} path={path} element={<Component />} />
              ) : null;
            })}
          </Routes>
        </Suspense>
      </Router>
    </AnimatePresence>
  );
}

export default App;
