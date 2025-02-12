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

  return {
    AdminLogin,
    AdminLayout,
    AdminManager,
    ConsultaCNPJPage,
    QuestionarioConsultoriaPage,
    ResultadoConsultoriaPage,
  };
}
