import Card from "../components/Card";
import { Link } from "react-router-dom";

function Homepage({ castleTableDetails, setIndexCastle }) {
  return (
    <div className="flex flex-col justify-center items-center my-[50px] mt-[80px] max-w-[1150px]">
      <h2 className="castll translate-y-[-50px]">
        Phrase en cours de construction
      </h2>
      <input
        type="button"
        value="Reload"
        className="h-10 w-20 translate-y-[-25px] basicButton font-bold"
      />
      <div className="flex flex-wrap justify-center gap-4 w-[90%]">
        {castleTableDetails.map((chateau, index) => (
          <Link
            key={index}
            to="/castledetails"
            className="h-[180px] w-[165px] md:w-[220px]"
            onClick={() => {
              setIndexCastle(index);
            }}
          >
            <Card chateau={chateau} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
