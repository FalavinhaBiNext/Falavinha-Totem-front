import React from "react";
import PropTypes from "prop-types";
import InputAdminOne from "./InputAdminOne";

export default function LoginForm({ inputsData }) {
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log("Login");
  };

  return (
    <form
      className="flex flex-col w-full gap-3 px-6 sm:max-w-[572px] max-w-none mx-auto"
      onSubmit={handleSubmitLogin}
    >
      {inputsData.map((input) => (
        <InputAdminOne key={input.name} {...input} />
      ))}
      <button
        className="w-full h-[45px] px-[10px] py-[10px] border-[1px] border-gray_color_dark uppercase text-light_color gilroyLight shadow-bx-1 mt-[10px] rounded-xl focus:outline-none focus:border-primary_color bg-gray_color_dark transition-all duration-200 ease-in-out"
        type="submit"
      >
        Entrar
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  inputsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
