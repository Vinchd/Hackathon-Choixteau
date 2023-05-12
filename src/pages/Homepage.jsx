import Card from "../components/Card";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Homepage({ castleTableDetails, setIndexCastle }) {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="flex flex-col justify-center items-center my-[50px] mt-[80px] md:my-[20px] md:mt-0 max-w-[1150px] 2xl:max-w-[1440px]">
      <img
        src="/assets/pngegg3.png"
        className="h-[100px] 2xl:h-[140px] translate-y-[-50px] md:translate-y-[20px] relative md:right-[300px]"
      />
      <h2 className="castll translate-y-[-50px] md:translate-y-0 relative md:bottom-[60px] font-caveat max-sm:text-xl text-3xl text-center">
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
