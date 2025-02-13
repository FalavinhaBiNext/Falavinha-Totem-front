import { useState } from "react";
import AdminPageTitle from "../../components/adminUI/AdminPageTitle";
import AdminButton from "../../components/adminUI/AdminButton";

const testData = [
  {
    name: "Estratégia",
    description: "Description-1",
  },
  {
    name: "Finanças",
    description: "Description-2",
  },
  {
    name: "Recursos Humanos",
    description: "Description-3",
  },
  {
    name: "Operações",
    description: "Description-4",
  },
  {
    name: "Marketing",
    description: "Description-5",
  },
  {
    name: "Tecnologia",
    description: "Description-6",
  },
];

export default function QuestionarioConsultoria() {
  const [page, setPage] = useState(0);

  const fieldsPage = 1;
  const start = page * fieldsPage;
  const end = start + fieldsPage;
  const sliced = testData.slice(start, end);

  const nextPage = () => {
    if (end < testData.length) setPage(page + 1);
  };

  const prevPage = () => {
    if (start > 0) setPage(page - 1);
  };

  return (
    <>
      <AdminPageTitle title="Consultoria Empresarial" />
      <div>
        <ul className="flex flex-wrap justify-center gap-y-2 sm:gap-y-0 gap-x-6 sm:justify-between sm:flex-nowrap">
          {testData.map(({ name }, index) => (
            <li
              className={`text-base text-light_color transition-all duration-300 ease-in-out  ${
                index === page
                  ? "opacity-100 font-extrabold"
                  : "opacity-50 font-medium"
              }`}
              key={index}
            >
              {name}
            </li>
          ))}
        </ul>

        <ul className="min-h-[40vh] flex flex-col gap-4 items-center justify-center">
          {sliced.map(({ description }, index) => (
            <li key={index} className="text-lg uppercase text-light_color">
              {description}
            </li>
          ))}
        </ul>

        <div className="flex flex-col-reverse justify-center gap-4 mt-10 sm:flex-row">
          {page > 0 && (
            <AdminButton
              type="button"
              onClick={prevPage}
              title="Anterior"
              className="md:max-w-[470px] max-w-none"
            />
          )}
          {end < testData?.length && (
            <AdminButton
              type="button"
              onClick={nextPage}
              title="Próximo"
              className="md:max-w-[470px] max-w-none"
            />
          )}
        </div>
      </div>
    </>
  );
}
