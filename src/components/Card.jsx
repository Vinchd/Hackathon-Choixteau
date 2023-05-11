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

export default Card;
