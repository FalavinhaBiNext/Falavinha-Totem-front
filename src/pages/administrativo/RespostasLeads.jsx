import { useState } from "react";
import AdminCollectedDataActions from "../../components/adminUI/AdminCollectedDataActions";
import AdminPageTitle from "../../components/adminUI/AdminPageTitle";
import CustomSelect from "../../components/UI/CustomSelect";

export default function RespostasLeads() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 1, label: "Camilla Santos" },
    { value: 2, label: "Vanessa Cardoso" },
    { value: 3, label: "Paulo Gomes" },
    { value: 4, label: "Rodolfo Silva" },
  ];

  const questions = [
    {
      id: 1,
      lead: "Pedro Silva",
    },
    {
      id: 2,
      lead: "Maria Moreira",
    },
    {
      id: 3,
      lead: "João Souza",
    },
    {
      id: 4,
      lead: "José Mendes",
    },
  ];

  return (
    <>
      <AdminPageTitle title="Respostas por Lead" />
      <div className="relative mb-5 sm:max-w-[350px] max-w-none">
        <CustomSelect
          options={options}
          placeholder="Nome do lead cadastrado"
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>

      <AdminCollectedDataActions>
        <ul className="flex flex-col gap-6 min-h-[250px]">
          {questions.map(({ lead, id }) => (
            <li
              className="flex flex-wrap border-b-[1.5px] gap-x-2 border-special_border"
              key={id}
            >
              <span>ID: {id} -</span>
              <p className="text-base text-light_color">{lead}</p>
            </li>
          ))}
        </ul>
      </AdminCollectedDataActions>
    </>
  );
}
