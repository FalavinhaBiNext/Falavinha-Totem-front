import PropTypes from "prop-types";

export default function AdminButton(props) {
  const { type, onClick, title, disabled, customStyle, style } = props;

  const buttonStyle = `font-gilroyLight px-8 py-2 md:text-lg text-base font-normal 
  rounded-[10px] shadow-bx-3 text-light_color border-special_border
  h-[45px] w-fit bg-gradient-to-r from-[#00b0a7] to-[#00736e] ${style}
  ${disabled ? "cursor-not-allowed opacity-30" : "cursor-pointer opacity-100"}`;

  return (
    <button
      className={buttonStyle}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={customStyle}
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
  customStyle: PropTypes.object,
  style: PropTypes.string,
};
