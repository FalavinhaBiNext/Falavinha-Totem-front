import { lazy } from "react";

const importPage = (page) => lazy(() => import(`../pages/${page}`));

export default function PublicRoutes() {
  return {
    DashboardContabilidade: importPage("dashboards/DashboardContabilidade"),
    DashboardFinanceiro: importPage("dashboards/DashboardFinanceiro"),
    DashboardRH: importPage("dashboards/DashboardRH"),
    DashboardGestaoEstoque: importPage("dashboards/DashboardGestaoEstoque"),
    DashboardTributario: importPage("dashboards/DashboardTributario"),
    QuestionarioRH: importPage("simulacoes/QuestionarioRH"),
    QuestionarioCigam: importPage("simulacoes/QuestionarioCigam"),
    QuestionarioTributario: importPage("simulacoes/QuestionarioTributario"),
    QuestionarioEmpresarial: importPage("simulacoes/QuestionarioEmpresarial"),
    QuestionarioHolding: importPage("simulacoes/QuestionarioHolding"),
    ResultadoRH: importPage("resultados/ResultadoRH"),
    ResultadoCigam: importPage("resultados/ResultadoCigam"),
    ResultadoTributario: importPage("resultados/ResultadoTributario"),
    ResultadoEmpresarial: importPage("resultados/ResultadoEmpresarial"),
    ResultadoHolding: importPage("resultados/ResultadoHolding"),
    Home: importPage("comum/Home"),
    Solucoes: importPage("comum/Solucoes"),
    BusinessIntelligence: importPage("comum/BusinessIntelligence"),
    Tributario: importPage("comum/Tributario"),
    Contabilidade: importPage("comum/Contabilidade"),
    ConsultoriaRH: importPage("comum/ConsultoriaRH"),
    Cigam: importPage("comum/Cigam"),
    ConsultoriaEmpresarial: importPage("comum/ConsultoriaEmpresarial"),
    Holding: importPage("comum/Holding"),
    Treinamentos: importPage("comum/Treinamentos"),
    Cursos: importPage("comum/Cursos"),
    ModulosCigam: importPage("comum/ModulosCigam"),
    NotFound: importPage("comum/NotFound"),
  };
}
