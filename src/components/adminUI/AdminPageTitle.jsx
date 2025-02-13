import PropTypes from "prop-types";

export default function AdminPageTitle({ title }) {
  return (
    <h2 className="text-2xl font-normal text-center uppercase text-light_color">
      {title}
    </h2>
  );
}

AdminPageTitle.propTypes = {
  title: PropTypes.string,
};
