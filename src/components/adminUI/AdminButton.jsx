import PropTypes from "prop-types";

export default function AdminButton(props) {
  const { type, onClick, title } = props;

  const buttonStyle = `font-gilroyLight px-4 py-2 text-base font-normal 
  rounded-[5px] shadow-bx-3 text-light_color min-w-[250px] border-special_border
  h-[50px] w-fit mx-auto bg-gradient-to-r from-[#00b0a7] to-[#00736e]
  `;

  return (
    <button className={buttonStyle} type={type} onClick={onClick}>
      {title}
    </button>
  );
}

AdminButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};
