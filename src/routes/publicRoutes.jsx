import { lazy } from "react";

export default function PublicRoutes() {
  const DashboardContabilidade = lazy(() =>
    import("../pages/dashboards/DashboardContabilidade")
  );
  const DashboardFinanceiro = lazy(() =>
    import("../pages/dashboards/DashboardFinanceiro")
  );
  const DashboardRH = lazy(() => import("../pages/dashboards/DashboardRH"));
  const DashboardGestaoEstoque = lazy(() =>
    import("../pages/dashboards/DashboardGestaoEstoque")
  );
  const DashboardTributario = lazy(() =>
    import("../pages/dashboards/DashboardTributario")
  );
  const QuestionarioRH = lazy(() =>
    import("../pages/simulacoes/QuestionarioRH")
  );
  const QuestionarioCigam = lazy(() =>
    import("../pages/simulacoes/QuestionarioCigam")
  );
  const QuestionarioTributario = lazy(() =>
    import("../pages/simulacoes/QuestionarioTributario")
  );
  const QuestionarioEmpresarial = lazy(() =>
    import("../pages/simulacoes/QuestionarioEmpresarial")
  );
  const QuestionarioHolding = lazy(() =>
    import("../pages/simulacoes/QuestionarioHolding")
  );
  const ResultadoRH = lazy(() => import("../pages/resultados/ResultadoRH"));
  const ResultadoCigam = lazy(() =>
    import("../pages/resultados/ResultadoCigam")
  );
  const ResultadoTributario = lazy(() =>
    import("../pages/resultados/ResultadoTributario")
  );
  const ResultadoEmpresarial = lazy(() =>
    import("../pages/resultados/ResultadoEmpresarial")
  );
  const ResultadoHolding = lazy(() =>
    import("../pages/resultados/ResultadoHolding")
  );
  const Home = lazy(() => import("../pages/comum/Home"));
  const Solucoes = lazy(() => import("../pages/comum/Solucoes"));
  const BusinessIntelligence = lazy(() =>
    import("../pages/comum/BusinessIntelligence")
  );
  const Tributario = lazy(() => import("../pages/comum/Tributario"));
  const Contabilidade = lazy(() => import("../pages/comum/Contabilidade"));
  const ConsultoriaRH = lazy(() => import("../pages/comum/ConsultoriaRH"));
  const Cigam = lazy(() => import("../pages/comum/Cigam"));
  const ConsultoriaEmpresarial = lazy(() =>
    import("../pages/comum/ConsultoriaEmpresarial")
  );
  const Holding = lazy(() => import("../pages/comum/Holding"));
  const Treinamentos = lazy(() => import("../pages/comum/Treinamentos"));
  const Cursos = lazy(() => import("../pages/comum/Cursos"));
  const ModulosCigam = lazy(() => import("../pages/comum/ModulosCigam"));
  const NotFound = lazy(() => import("../pages/comum/NotFound"));

  return {
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
  };
}
