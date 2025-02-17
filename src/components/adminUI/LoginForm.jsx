import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import InputAdminOne from "./InputAdminOne";
import { motion } from "framer-motion";
import routes from "../../routes/routePaths";
import AdminButton from "./AdminButton";

export default function LoginForm({ inputsData }) {
  const navigate = useNavigate();
  // const handleSubmitLogin = (e) => {
  //   e.preventDefault();
  //   console.log("Login");
  // };

  return (
    <motion.form
      className="flex flex-col w-full gap-3 px-5 sm:max-w-[572px] max-w-none mx-auto"
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      // onSubmit={handleSubmitLogin}
    >
      {inputsData?.map((input) => (
        <InputAdminOne key={input.name} {...input} />
      ))}
      <button
        onClick={() => navigate(routes.adminManager)}
        className="mx-auto xs:w-[200px] w-full h-[45px] px-[10px] py-[10px] border-[1px] border-gray_color_dark uppercase text-light_color gilroyLight shadow-bx-1 mt-[10px] rounded-xl focus:outline-none focus:border-primary_color bg-gray_color_dark transition-all duration-200 ease-in-out"
        type="button"
      >
        Entrar
      </button>
    </motion.form>
  );
}

LoginForm.propTypes = {
  inputsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
