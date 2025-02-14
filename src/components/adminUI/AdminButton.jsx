import PropTypes from "prop-types";

export default function AdminButton(props) {
  const { type, onClick, title, disabled } = props;

  const buttonStyle = `font-gilroyLight px-4 py-2 text-base font-normal 
  rounded-[5px] shadow-bx-3 text-light_color min-w-[250px] border-special_border
  h-[50px] w-fit bg-gradient-to-r from-[#00b0a7] to-[#00736e]
  ${disabled ? "cursor-not-allowed opacity-30" : "cursor-pointer opacity-100"}`;

  return (
    <button
      className={buttonStyle}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

AdminButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  disabled: PropTypes.bool,
};
