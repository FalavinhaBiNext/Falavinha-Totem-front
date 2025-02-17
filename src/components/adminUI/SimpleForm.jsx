import React from "react";
import InputAdminOne from "./InputAdminOne";

export default function SimpleForm() {
  const inputsData = [
    {
      name: "name",
      label: "Nome",
      type: "text",
      placeholder: "",
      value: "",
      onChange: (e) => console.log(e.target.value),
      onBlur: (e) => console.log(e.target.value),
      labelStyle: "mb-1",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "",
      value: "",
      onChange: (e) => console.log(e.target.value),
      onBlur: (e) => console.log(e.target.value),
      labelStyle: "mb-1",
    },
    {
      name: "phone",
      label: "Telefone",
      type: "tel",
      placeholder: "",
      value: "",
      onChange: (e) => console.log(e.target.value),
      onBlur: (e) => console.log(e.target.value),
      labelStyle: "mb-1",
    },
    {
      name: "company_name",
      label: "Nome da empresa",
      type: "text",
      placeholder: "",
      value: "",
      onChange: (e) => console.log(e.target.value),
      onBlur: (e) => console.log(e.target.value),
      labelStyle: "mb-1",
    },
  ];

  return (
    <form className="grid w-full pt-2 pb-10 gap-x-6 gap-y-2 grid-cols-adminGrid bg-primary_color">
      {inputsData.map((input) => (
        <InputAdminOne key={input.name} {...input} labelStyle="mb-0" />
      ))}
    </form>
  );
}
