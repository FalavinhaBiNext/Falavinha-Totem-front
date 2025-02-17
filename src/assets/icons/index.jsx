import PropTypes from "prop-types";

export function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#000"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

export function LoadingBtn({ color, width, height }) {
  return (
    <svg
      className={`${width || "w-5"} ${height || "h-5"} animate-spin`}
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-0"
        cx="12"
        cy="12"
        r="10"
        stroke={color || "#fff"}
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill={color || "#fff"}
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

LoadingBtn.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
