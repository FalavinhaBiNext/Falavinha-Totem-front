import PropTypes from "prop-types";

export default function InputAdminOne(props) {
  const {
    label,
    name,
    type,
    placeholder,
    value,
    onChange,
    onBlur,
    labelStyle,
    readOnly,
    inputStyle,
  } = props;

  return (
    <label className="w-full">
      {label && (
        <span
          className={`${labelStyle} block text-base sm:text-xl leading-5 text-light_color gilroyLight mb-1`}
        >
          {label}
        </span>
      )}
      <input
        className={`${inputStyle} w-[inherit] h-[45px] px-[10px] py-[10px] border-[1px] border-[#003335]
        rounded-[10px] focus:outline-none focus:border-[#003335] bg-gray_color transition-all 
        duration-200 ease-in-out text-dark_color text-base font-semibold
        placeholder:text-gray_color_dark placeholder:font-semibold`}
        type={type || "text"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        readOnly={readOnly}
      />
    </label>
  );
}

InputAdminOne.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  labelStyle: PropTypes.string,
  inputStyle: PropTypes.string,
  readOnly: PropTypes.bool,
};
