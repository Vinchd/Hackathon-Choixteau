import PropTypes from "prop-types";

function Card({ chateau }) {
  let src = "/assets/no-image.png";
  chateau.data.preview
    ? (src = chateau.data.preview.source)
    : (src = "/assets/no-image.png");

  return (
    <>
      <img
        className="h-full w-full object-cover rounded"
        src={src}
        alt="image chateau"
      />
    </>
  );
}

Card.propTypes = {
  chateau: PropTypes.shape().isRequired,
};

export default Card;
