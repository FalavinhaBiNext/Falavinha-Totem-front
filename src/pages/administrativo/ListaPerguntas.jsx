import AdminCollectedDataActions from "../../components/adminUI/AdminCollectedDataActions";
import AdminPageTitle from "../../components/adminUI/AdminPageTitle";

export default function ListaPerguntas() {
  const questions = [
    {
      id: 1,
      category: "Consultoria Empresarial",
      question: "Sua empresa tem missão, visão e valores formalizados?",
    },
    {
      id: 2,
      category: "Consultoria Empresarial",
      question:
        "Os objetivos estratégicos são definidos e revisados regularmente?",
    },
    {
      id: 3,
      category: "BI",
      question: "A empresa possui um planejamento estratégico documentado?",
    },
    {
      id: 4,
      category: "Consultoria Empresarial",
      question: "Os indicadores de desempenho são monitorados com frequeência?",
    },
    {
      id: 5,
      category: "BI",
      question:
        "Há analises regulares sobre o mercado e a concorrência para ajustar estratégias?",
    },
  ];

  return (
    <>
      <AdminPageTitle title="Perguntas" />
      <AdminCollectedDataActions subtitle={"Consultoria Empresarial ou BI"}>
        <ul className="flex flex-col gap-6">
          {questions.map(({ question, id, category }) => (
            <li
              className="flex flex-wrap border-b-[1.5px] gap-x-2 border-special_border"
              key={id}
            >
              <span>ID: {id} -</span>
              <h4>{category}:</h4>
              <p className="text-base text-light_color">{question}</p>
            </li>
          ))}
        </ul>
      </AdminCollectedDataActions>
    </>
  );
}
