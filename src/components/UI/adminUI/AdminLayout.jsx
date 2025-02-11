import { useContext } from "react";
import PropTypes from "prop-types";
import useScreenSize from "../../../hooks/useScreenSize";
import backgroundLarge from "../../../assets/image/administrativo-large.png";
import backgroundSmall from "../../../assets/image/administrativo-small.png";
import { GlobalContext } from "../../../context/GlobalContextProvider";

export default function AdminLayout({ children }) {
  const { setToggleDropdown } = useContext(GlobalContext);
  const {
    screenSize: { width },
  } = useScreenSize();

  return (
    <>
      <main
        className="relative z-10 min-h-[80vh] font-gilroyThin min-[992px]:p-base_container px-10"
        onClick={() => setToggleDropdown(false)}
      >
        <h1 className="h-0 opacity-0">Página do administrador</h1>
        {children}
      </main>
      <span
        className="fixed top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `${
            width > 768 ? `url(${backgroundLarge})` : `url(${backgroundSmall})`
          }`,
        }}
      />
    </>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
