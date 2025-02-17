import PropTypes from "prop-types";
import AdminPageTitle from "../../components/adminUI/AdminPageTitle";
import AdminButton from "../../components/adminUI/AdminButton";
import lupa from "../../assets/icon/looking-glass.svg";
import { useState } from "react";
import { LoadingBtn } from "../../assets/icons";

export default function ConsultaCNPJ() {
  const [cnpjData, setCnpjData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSetCnpjData = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsLoading(false);
    setCnpjData({
      name: "Tutuzinho do doce",
      type: "Eireli",
      email: "tutuzinho@doce.com.br",
      activity: "Doces",
      address: "Rua do doce",
      number: "123",
      neighborhood: "Bairro do doce",
      zipcode: "3454545",
      state: "Paraná",
      phone: "(41) 9123-4567",
      openingDate: "12/12/2022",
      status: "Aberta",
      size: "Pequeno",
    });
  };

  const handleSaveData = () => {
    setCnpjData({
      name: "Tutuzinho do doce",
      type: "Eireli",
      email: "tutuzinho@doce.com.br",
      activity: "Doces",
      address: "Rua do doce",
      number: "123",
      neighborhood: "Bairro do doce",
      zipcode: "3454545",
      state: "PR",
      phone: "(41) 9123-4567",
      openingDate: "12/12/2022",
      status: "Aberta",
      size: "Pequeno",
    });
  };

  return (
    <>
      <AdminPageTitle title="Consultar CNPJ" />
      <form className="flex flex-col justify-center max-w-[768px] mx-auto w-full">
        <div
          className={`flex flex-col  xs:flex-row max-w-[480px] w-full mx-auto gap-4 mb-8`}
        >
          <input
            className="w-full h-[45px] px-[10px] py-[10px] border-[1px] border-gray_color
            rounded-[10px] focus:outline-none focus:border-primary_color bg-gray_color
            transition-all duration-200 ease-in-out text-dark_color font-semibold text-base
            placeholder:text-gray_color_dark placeholder:font-semibold"
            type="text"
            placeholder="Digite o CNPJ"
            name="cnpj"
          />
          <button
            className={`font-gilroyLight px-4 py-2 text-base font-normal rounded-[10px]
            shadow-bx-3 text-light_color w-full xs:w-[70px] border-special_border
            h-[45px] bg-gradient-to-r from-[#00b0a7] to-[#00736e] flex items-center justify-center
            ${
              isLoading
                ? "opacity-30 cursor-not-allowed"
                : "cursor-pointer opacity-100"
            }`}
            type="button"
            onClick={handleSetCnpjData}
            disabled={isLoading}
          >
            {isLoading ? (
              <LoadingBtn width="w-7" height="h-7" />
            ) : (
              <img src={lupa} alt="Ícone de busca" className="w-[35px]" />
            )}
          </button>
        </div>

        <div className="flex flex-col w-full gap-3 mb-10 sm:gap-6">
          <DataInput
            value={cnpjData.name}
            label="Nome da Empresa"
            name="name"
          />
          <div className="grid grid-cols-1 gap-4 xs:grid-cols-2">
            <DataInput value={cnpjData.type} label="Tipo" name="type" />
            <DataInput value={cnpjData.email} label="Email" name="email" />
          </div>
          <DataInput
            value={cnpjData.activity}
            label="Atividade Principal"
            name="activity"
          />

          <div className="flex flex-col gap-4 xs:flex-row">
            <DataInput
              value={cnpjData.address}
              label="Logradouro"
              name="address"
              styleProps="w-full"
            />
            <DataInput
              value={cnpjData.number}
              label="Número"
              name="number"
              styleProps="xs:w-[120px] w-full"
            />
          </div>

          <div className="flex flex-col gap-4 xs:flex-row">
            <DataInput
              value={cnpjData.neighborhood}
              label="Bairro"
              name="neighborhood"
              styleProps="w-full"
            />
            <DataInput
              value={cnpjData.zipcode}
              label="Minicípio"
              name="zipcode"
              styleProps="w-full"
            />
            <DataInput
              value={cnpjData.state}
              label="UF"
              name="state"
              styleProps="xs:w-[240px] w-full"
            />
          </div>
          <div className="grid grid-cols-1 gap-y-3 xs:gap-y-6 gap-x-4 xs:grid-cols-2">
            <DataInput value={cnpjData.phone} label="Telefone" name="phone" />
            <DataInput
              value={cnpjData.openingDate}
              label="Abertura"
              name="openingDate"
            />
            <DataInput value={cnpjData.status} label="Situação" name="status" />
            <DataInput value={cnpjData.size} label="Porte" name="size" />
          </div>
        </div>

        <AdminButton
          title="Salvar Empresa"
          type="button"
          onClick={handleSaveData}
          customStyle={{ margin: " auto" }}
        />
      </form>
    </>
  );
}

const DataInput = ({
  label,
  name,
  type = "text",
  value,
  labelStyle = "",
  styleProps = "",
}) => (
  <label className={`w-full ${styleProps}`}>
    <span
      className={`${labelStyle} block text-base sm:text-xl text-light_color gilroyLight`}
    >
      {label}
    </span>
    <input
      className="w-full h-[45px] px-[10px] py-[10px] border-[1px] border-[#003335] rounded-[10px] focus:outline-none focus:border-[#003335] bg-primary_color text-light_color font-semibold text-base tracking-wider"
      type={type}
      name={name}
      value={value}
      readOnly
    />
  </label>
);

DataInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  labelStyle: PropTypes.string,
  styleProps: PropTypes.string,
};
