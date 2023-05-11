function Card({ chateau }) {
  return (
    <>
      <img
        className="h-full w-full object-cover rounded"
        src={chateau}
        alt="image chateau"
      />
    </>
  );
}

export default Card;
