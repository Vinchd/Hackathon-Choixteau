import Card from "../components/Card";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Homepage({ castleTableDetails, setIndexCastle }) {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="flex flex-col justify-center items-center my-[50px] mt-[80px] max-w-[1150px] 2xl:max-w-[1440px]">
      <img
        src="/assets/pngegg3.png"
        className="h-[180px] 2xl:h-[240px] translate-y-[-50px] relative md:right-[300px]"
      />
      <h2 className="castll translate-y-[-50px] relative md:bottom-[90px] font-caveat max-sm:text-xl text-3xl text-center">
        Prêts pour un voyage princier à l&apos;aveugle ?<br /> Laissez le
        Choîxteau vous surprendre !
      </h2>

      <input
        onClick={refreshPage}
        type="button"
        value="Reload"
        className="h-10 w-20 translate-y-[-25px] basicButton font-bold"
      />
      <div className="flex flex-wrap justify-center gap-4 w-[90%]">
        {castleTableDetails.map((chateau, index) => (
          <Link
            key={index}
            to="/castledetails"
            className="h-[180px] w-[165px] md:w-[220px] 2xl:w-[300px] 2xl:h-[244px] anim"
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

Homepage.propTypes = {
  castleTableDetails: PropTypes.array,
  setIndexCastle: PropTypes.func,
};

export default Homepage;
