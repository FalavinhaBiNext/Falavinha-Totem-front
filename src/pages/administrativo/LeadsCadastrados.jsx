import AdminCollectedDataActions from "../../components/adminUI/AdminCollectedDataActions";
import AdminPageTitle from "../../components/adminUI/AdminPageTitle";

export default function LeadsCadastrados() {
  const sdrName = "Antônio Souza";

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
      <AdminPageTitle title="Leads cadastrados" />
      <AdminCollectedDataActions subtitle={`Lead Cadastrado por ${sdrName}`}>
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
