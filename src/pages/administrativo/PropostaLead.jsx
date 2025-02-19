import { useState } from "react";
import PropTypes from "prop-types";
import AdminPageTitle from "../../components/adminUI/AdminPageTitle";
import CustomSelect from "../../components/UI/CustomSelect";
import InputAdminOne from "../../components/adminUI/InputAdminOne";
import AdminButton from "../../components/adminUI/AdminButton";

export default function PropostaLead() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedLead, setSelectedLead] = useState(null);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [proposalData, setProposalData] = useState({});

  const leads = [
    { value: 1, label: "Pedro Silva" },
    { value: 2, label: "Maria Moreira" },
    { value: 3, label: "João Souza" },
    { value: 4, label: "José Mendes" },
  ];
  const proposals = [
    { value: 1, label: "Consultoria Empresarial" },
    { value: 2, label: "Consultoria RH" },
    { value: 3, label: "Consultoria Cigam" },
    { value: 4, label: "Consultoria Tributaria" },
    { value: 5, label: "Consultoria Empresarial" },
    { value: 6, label: "Consultoria Holding" },
  ];

  const handleSubmitProposal = (e) => {
    e.preventDefault();
    setProposalData({
      lead: selectedLead,
      proposal: selectedProposal,
      file: selectedFile,
    });
    console.log(proposalData, "Form submitted!");
  };

  return (
    <>
      <AdminPageTitle title="Proposta" />
      <form
        className="relative flex flex-col w-full gap-6 mb-5 md:gap-8"
        onSubmit={handleSubmitProposal}
      >
        <div className="grid grid-cols-1 gap-6 xs:grid-cols-adminGrid md:gap-8">
          <CustomSelect
            options={leads}
            placeholder="Nome do Lead Cadastrado"
            selectedOption={selectedLead}
            setSelectedOption={setSelectedLead}
          />
          <CustomSelect
            options={proposals}
            placeholder="Serviço da Proposta"
            selectedOption={selectedProposal}
            setSelectedOption={setSelectedProposal}
          />
          <UploadFiles
            setSelectedFile={setSelectedFile}
            selectedFile={selectedFile}
          />
          <InputAdminOne
            placeholder="Email do Lead"
            type="email"
            inputStyle="bg-primary_color text-light_color 
            placeholder:text-light_color placeholder:opacity-60"
          />
        </div>
        <AdminButton
          title="Enviar Proposta"
          type="submit"
          customStyle={{ margin: "auto" }}
        />
      </form>
    </>
  );
}

const UploadFiles = ({ setSelectedFile, selectedFile }) => {
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="flex flex-col gap-6 xs:gap-4 xs:flex-row">
      <InputAdminOne
        placeholder="Anexar Arquivo da Proposta"
        readOnly
        value={selectedFile?.name || ""}
      />
      <label
        htmlFor="file-upload"
        className="cursor-pointer relative h-[45px] px-5 py-[10px] border-[1px] 
        border-gray_color rounded-[10px] focus:outline-none focus:border-primary_color 
        bg-gray_color transition-all duration-200 ease-in-out text-dark_color 
        text-base font-semibold xs:w-max w-full text-center"
      >
        Upload
        <input
          type="file"
          id="file-upload"
          className="absolute inset-0 w-0 h-[inherit] opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

UploadFiles.propTypes = {
  setSelectedFile: PropTypes.func.isRequired,
  selectedFile: PropTypes.object,
};
