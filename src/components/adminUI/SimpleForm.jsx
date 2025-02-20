import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContextProvider";
import useScrollEvent from "../../hooks/useScrollEvent";
import InputAdminOne from "./InputAdminOne";

export default function SimpleForm() {
  const { isScrolling } = useScrollEvent();
  const { contextAdminLeadsData } = useContext(GlobalContext);
  const { adminLeadData, setAdminLeadData } = contextAdminLeadsData();

  const inputsData = [
    {
      name: "name",
      label: "Nome",
      type: "text",
      value: adminLeadData.leadName,
      onChange: (e) =>
        setAdminLeadData({ ...adminLeadData, leadName: e.target.value }),
      onBlur: (e) =>
        setAdminLeadData({ ...adminLeadData, leadName: e.target.value }),
      labelStyle: "mb-1",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      value: adminLeadData.leadEmail,
      onChange: (e) =>
        setAdminLeadData({ ...adminLeadData, leadEmail: e.target.value }),
      onBlur: (e) =>
        setAdminLeadData({ ...adminLeadData, leadEmail: e.target.value }),
      labelStyle: "mb-1",
    },
    {
      name: "phone",
      label: "Telefone",
      type: "tel",
      value: adminLeadData.leadPhoneNumber,
      onChange: (e) =>
        setAdminLeadData({ ...adminLeadData, leadPhoneNumber: e.target.value }),
      onBlur: (e) =>
        setAdminLeadData({ ...adminLeadData, leadPhoneNumber: e.target.value }),
      labelStyle: "mb-1",
    },
    {
      name: "company_name",
      label: "Nome da Empresa",
      type: "text",
      value: adminLeadData.leadCompanyName,
      onChange: (e) =>
        setAdminLeadData({ ...adminLeadData, leadCompanyName: e.target.value }),
      onBlur: (e) =>
        setAdminLeadData({ ...adminLeadData, leadCompanyName: e.target.value }),
      labelStyle: "mb-1",
    },
  ];

  return (
    <div
      className={`w-full bg-primary_color transition-all duration-200 ease-in-out relative
      ${isScrolling ? "lg:shadow-none" : "shadow-bx-1"}`}
    >
      <form className="mx-auto grid pt-5 pb-10 gap-x-6 gap-y-2 grid-cols-standard3 max-w-[760px] px-5">
        {inputsData.map((input) => (
          <InputAdminOne
            key={input.name}
            {...input}
            inputStyles="mb-0 border-[1px] border-light_color"
          />
        ))}
      </form>
    </div>
  );
}
