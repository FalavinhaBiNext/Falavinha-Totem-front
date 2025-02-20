import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
export default function FooterApp({ children }) {
  const { pathname } = useLocation();

  return (
    <footer className="min-[992px]:p-base_container px-5 z-[500] min-h-[100px] mt-auto mx-auto items-center flex flex-col w-full">
      <div className="w-full footer__element">{children}</div>

      {pathname !== "/" && (
        <span className="block w-full p-3 mt-auto text-sm text-center sm:text-base text-light_color font-gilroyLight sm:p-4">
          © {new Date().getFullYear()} | Falavinha Next - Todos os direitos
          reservados
        </span>
      )}
    </footer>
  );
}

FooterApp.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
