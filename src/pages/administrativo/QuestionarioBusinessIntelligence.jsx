import { useContext } from "react";
import AdminPageTitle from "../../components/adminUI/AdminPageTitle";
import InputAdminOne from "../../components/adminUI/InputAdminOne";
import AdminButton from "../../components/adminUI/AdminButton";
import { GlobalContext } from "../../contexts/GlobalContextProvider";

export default function QuestionarioBusinessIntelligence() {
  const { contextAdminLeadsData } = useContext(GlobalContext);
  const { biQuestionsData, setBiQuestionsData, handleSubmitLeadsData } =
    contextAdminLeadsData();
  const inputsData = [
    {
      name: "question-1",
      label: "Sua empresa tem missão, visão e valores formalizados?",
      type: "text",
      value: biQuestionsData.question1,
      onChange: (e) =>
        setBiQuestionsData({ ...biQuestionsData, question1: e.target.value }),
      onBlur: (e) =>
        setBiQuestionsData({ ...biQuestionsData, question1: e.target.value }),
    },
    {
      name: "question-2",
      label:
        "Os objetivos estratégicos são definidos e revisados regularmente?",
      type: "text",
      value: biQuestionsData.question2,
      onChange: (e) =>
        setBiQuestionsData({ ...biQuestionsData, question2: e.target.value }),
      onBlur: (e) =>
        setBiQuestionsData({ ...biQuestionsData, question2: e.target.value }),
    },
    {
      name: "question-3",
      label: "A empresa possui um planejamento estratégico documentado?",
      type: "text",
      value: biQuestionsData.question3,
      onChange: (e) =>
        setBiQuestionsData({ ...biQuestionsData, question3: e.target.value }),
      onBlur: (e) =>
        setBiQuestionsData({ ...biQuestionsData, question3: e.target.value }),
    },
    {
      name: "question-4",
      label: "Os indicadores de desempenho são monitorados com frequeência?",
      type: "text",
      value: biQuestionsData.question4,
      onChange: (e) =>
        setBiQuestionsData({ ...biQuestionsData, question4: e.target.value }),
      onBlur: (e) =>
        setBiQuestionsData({ ...biQuestionsData, question4: e.target.value }),
    },
    {
      name: "question-5",
      label:
        "Há analises regulares sobre o mercado e a concorrência para ajustar estratégias?",
      type: "text",
      value: biQuestionsData.question5,
      onChange: (e) =>
        setBiQuestionsData({ ...biQuestionsData, question5: e.target.value }),
      onBlur: (e) =>
        setBiQuestionsData({ ...biQuestionsData, question5: e.target.value }),
    },
  ];

  return (
    <>
      <AdminPageTitle title="Business intelligence" />

      <form className="flex flex-col gap-5 justify-center max-w-[768px] mx-auto w-full">
        {inputsData.map((input) => (
          <InputAdminOne key={input.name} {...input} />
        ))}
        <AdminButton
          onClick={() => handleSubmitLeadsData()}
          title="Próximo"
          type="button"
          customStyle={{ margin: "auto", marginTop: "20px" }}
        />
      </form>
    </>
  );
}
