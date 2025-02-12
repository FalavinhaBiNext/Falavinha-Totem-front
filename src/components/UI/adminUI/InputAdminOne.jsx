import React from "react";
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
  } = props;

  return (
    <label className="w-full">
      <span
        className={`${labelStyle} block text-lg sm:text-xl text-light_color gilroyLight`}
      >
        {label}
      </span>
      <input
        className="w-[inherit] h-[45px] px-[10px] py-[10px] border-[1px] border-gray_color
        rounded-xl focus:outline-none focus:border-primary_color bg-gray_color transition-all 
        duration-200 ease-in-out text-dark_color font-semibold text-base 
        placeholder:text-gray_color_dark placeholder:font-normal"
        type={type || "text"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
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
};
