import { Fragment, useState, useEffect } from "react";
import AdminButton from "../../components/adminUI/AdminButton";
import { surveyConsultoria } from "../../services/db";
import AdminPageTitle from "../../components/adminUI/AdminPageTitle";

export default function QuestionarioConsultoria() {
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState(() => {
    const storedAnswers = localStorage.getItem("surveyAnswers");
    return storedAnswers ? JSON.parse(storedAnswers) : {};
  });
  const [allAnswered, setAllAnswered] = useState(true);

  useEffect(() => {
    localStorage.setItem("surveyAnswers", JSON.stringify(answers));
  }, [answers]);

  const currentSection = surveyConsultoria[page];

  const nextPage = () =>
    setPage(Math.min(page + 1, surveyConsultoria.length - 1));
  const prevPage = () => setPage(Math.max(page - 1, 0));
  const handleRadioChange = (questionId, value) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: value }));
  };

  const handleShowAnswers = () => {
    localStorage.removeItem("surveyAnswers");
    setAnswers({});
    console.log(answers, "Form submitted!");
  };

  useEffect(() => {
    const allQuestionsAnswered = currentSection.enquiries.every(
      (enquiry) => answers[enquiry.id] !== undefined
    );
    setAllAnswered(!allQuestionsAnswered);
  }, [answers, currentSection]);

  const radioLabelStyle = `flex gap-2 text-base text-light_color p-[5px] items-center
    h-[inherit] font-gilroyLight cursor-pointer before:content-[''] before:bg-transparent
    before:rounded-full before:border-[2px] before:border-[#b4b4b4] before:inline-block
    before:w-[18px] before:h-[18px] before:min-w-[18px] before:relative before:top-0 before:mt-0
    before:align-top before:text-center before:transition before:ease-in-out duration-300`;
  return (
    <>
      <AdminPageTitle title="Consultoria empresarial" />

      <ul className="flex flex-wrap justify-center gap-y-2 sm:gap-y-0 gap-x-6 sm:justify-between sm:flex-nowrap">
        {surveyConsultoria.map(({ name, id }, index) => (
          <li
            className={`text-base text-light_color transition-all duration-200 ease-in-out pb-[2px]
       border-b-[2px] ${
         index === page
           ? "opacity-100 font-extrabold border-light_color"
           : "opacity-50 font-medium border-transparent"
       }`}
            key={id}
          >
            {name}
          </li>
        ))}
      </ul>
      {currentSection && (
        <ul className="min-h-[40vh] mt-10 sm:mt-16">
          {currentSection.enquiries.map(({ label, options, id }) => (
            <li key={id} className="flex flex-col gap-1 mb-6 sm:gap-2 sm:mb-8">
              <p className="text-sm font-normal sm:text-base text-light_color font-gilroyLight">
                {label}
              </p>
              <div className="flex gap-8">
                {options.map((option) => (
                  <Fragment key={option.value}>
                    <input
                      type="radio"
                      name={`question-${id}`}
                      id={`option-${id}-${option.value}`}
                      value={option.value}
                      checked={answers[id] === option.value}
                      onChange={() => handleRadioChange(id, option.value)}
                    />
                    <label
                      className={`${radioLabelStyle} radio-label radio-label--admin`}
                      htmlFor={`option-${id}-${option.value}`}
                    >
                      {option.label}
                    </label>
                  </Fragment>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-row items-center justify-center gap-4 mt-10">
        {page > 0 && (
          <AdminButton
            onClick={prevPage}
            title={`${
              page < surveyConsultoria.length - 1 ? "Anterior" : "Voltar"
            }`}
          />
        )}
        <AdminButton
          onClick={
            page === surveyConsultoria.length - 1 ? handleShowAnswers : nextPage
          }
          disabled={allAnswered}
          title={page === surveyConsultoria.length - 1 ? "Enviar" : "Próximo"}
        />
      </div>
    </>
  );
}
