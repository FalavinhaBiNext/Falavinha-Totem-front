import PropTypes from "prop-types";
import AdminButton from "./AdminButton";

export default function AdminCollectedDataActions({ children, subtitle }) {
  return (
    <>
      {subtitle && (
        <h3 className="mx-auto mb-1 text-2xl text-center text-light_color">
          {subtitle}
        </h3>
      )}
      <div
        className="bg-primary_color sm:p-20 p-10 rounded-[10px] 
        w-full border-[1px] border-dark_color min-h-[300px]"
      >
        {children}
      </div>
      <div className="flex flex-col gap-4 mt-4 xs:flex-row">
        <AdminButton
          title="Download"
          onClick={() => console.log("teste")}
          style="xs:w-max w-full"
        />
        <AdminButton
          title="Enviar Email"
          onClick={() => console.log("teste")}
          style="xs:w-max w-full"
        />
      </div>
    </>
  );
}

AdminCollectedDataActions.propTypes = {
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
};
