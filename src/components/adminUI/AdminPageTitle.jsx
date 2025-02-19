import PropTypes from "prop-types";

export default function AdminPageTitle({ title }) {
  return (
    <h2 className="mt-8 mb-10 text-2xl font-normal text-center uppercase sm:text-4xl sm:mb-12 text-light_color">
      {title}
    </h2>
  );
}

AdminPageTitle.propTypes = {
  title: PropTypes.string,
};
