import { lazy } from "react";

// import { lazy } from "react";

// const pageImports = (category, pages) =>
//   pages.reduce(
//     (acc, page) => ({
//       ...acc,
//       [page]: lazy(() => import(`../pages/${category}/${page}`)),
//     }),
//     {}
//   );
// const comumPages = pageImports("comum", [
//   "Home",
//   "Solucoes",
//   "BusinessIntelligence",
//   "Tributario",
//   "Contabilidade",
//   "ConsultoriaRH",
//   "Cigam",
//   "ConsultoriaEmpresarial",
//   "Holding",
//   "Treinamentos",
//   "Cursos",
//   "ModulosCigam",
//   "NotFound",
//   "TestPage",
// ]);
// const dashboardPages = pageImports("dashboards", [
//   "DashboardContabilidade",
//   "DashboardFinanceiro",
//   "DashboardRH",
//   "DashboardGestaoEstoque",
//   "DashboardTributario",
// ]);
// const simulacoesPages = pageImports("simulacoes", [
//   "QuestionarioRH",
//   "QuestionarioCigam",
//   "QuestionarioTributario",
//   "QuestionarioEmpresarial",
//   "QuestionarioHolding",
// ]);
// const resultadosPages = pageImports("resultados", [
//   "ResultadoRH",
//   "ResultadoCigam",
//   "ResultadoTributario",
//   "ResultadoEmpresarial",
//   "ResultadoHolding",
// ]);
// const adminPages = pageImports("administrativo", [
//   "Login",
//   "Admin",
//   "ConsultaCNPJ",
//   "QuestionarioConsultoria",
//   "ResultadoConsultoria",
// ]);

// export default function PagesImport() {
//   return {
//     ...dashboardPages,
//     ...simulacoesPages,
//     ...resultadosPages,
//     ...comumPages,
//     ...adminPages,
//   };
// }
