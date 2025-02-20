import { useState } from "react";
import PropTypes from "prop-types";
import chevron from "../../assets/icon/chevron-down.svg";
import { CloseIcon } from "../../assets/icons";

export default function CustomSelect(props) {
  const { options, style, placeholder, selectedOption, setSelectedOption } =
    props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClearSelection = () => {
    setSelectedOption(null);
    setIsOpen(false);
  };

  const selectStyle = `flex items-center bg-gray_color w-full px-[10px] py-[10px] text-left border rounded-[10px] justify-between focus:outline-none focus:ring-2 focus:primary_color text-sm xs:text-base transition-all duration-300 ease-in-out h-[45px] font-semibold border-[1px] border-gray_color ${style} ${
    selectedOption?.label ? "text-dark_color" : "text-gray_color_dark"
  }`;
  return (
    <div className="relative">
      <button className={selectStyle} onClick={() => setIsOpen(!isOpen)}>
        <span className="truncate xs:max-w-[400px] max-w-[230px">
          {selectedOption?.label || placeholder}
        </span>
        <img
          src={chevron}
          alt="chevron"
          title="chevron"
          className={`${
            isOpen && "rotate-180"
          } w-5 h-5 ml-2 transition-[transform] duration-400 ease-in-out`}
        />
      </button>
      {isOpen && (
        <ul className="absolute w-full mt-2 bg-light_color border border-primary_color shadow-bx-1 rounded-[10px] overflow-hidden z-50">
          {selectedOption && (
            <li
              onClick={handleClearSelection}
              className="flex items-center justify-between px-4 py-2 text-base font-bold cursor-pointer text-black_color hover:bg-gray-100 font-gilroyBold"
            >
              Limpar
              <span className="block w-5 h-5">
                <CloseIcon />
              </span>
            </li>
          )}
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 text-sm font-semibold transition-all duration-200 ease-in-out cursor-pointer xs:text-base hover:text-light_color hover:bg-primary_color focus:bg-primary_color"
            >
              <span className="truncate xs:max-w-[400px] max-w-[230px]">
                {option.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  style: PropTypes.string,
  placeholder: PropTypes.string,
  selectedOption: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
  }),
  setSelectedOption: PropTypes.func,
};
