import Card from "../components/Card";
import { Link } from "react-router-dom";

const fakedata = [
  {
    nom: "chateau de toto",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/SchlossSaintGermainenLayeStich.jpg/400px-SchlossSaintGermainenLayeStich.jpg",
  },
  {
    nom: "chateau de jeanmi",
    img: "https://www.familinparis.fr/wp-content/uploads/Chateaux/Fontainebleau/le-chateau-de-fontainebleau-FLD.jpg",
  },
  {
    nom: "chateau de phiphi",
    img: "https://mf-prod.com/langeais/wp-content/uploads/sites/9/2022/07/Chateau-de-Langeais-dans-lIndre-et-Loire.jpg",
  },
  {
    nom: "chateau de claude",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/France_Loir-et-Cher_Chambord_Chateau_03.jpg/1200px-France_Loir-et-Cher_Chambord_Chateau_03.jpg",
  },
  {
    nom: "chateau de chantal",
    img: "https://www.chateau-amboise.com/wp-content/uploads/2022/08/amboise-castle.jpg",
  },
  {
    nom: "chateau de bernadette",
    img: "https://www.familinparis.fr/wp-content/uploads/Chateaux/Fontainebleau/le-chateau-de-fontainebleau-FLD.jpg",
  },
];

function Homepage() {
  return (
    <div className="flex flex-col justify-center items-center my-[50px] mt-[80px]">
      <h2 className="text-2xl translate-y-[-50px]">
        Phrase en cours de construction
      </h2>
      <input
        type="button"
        value="Reload"
        className="h-10 w-20 translate-y-[-25px] basicButton font-bold"
      />
      <div className="flex flex-wrap justify-center gap-4 w-[90%]">
        {fakedata.map((chateau, index) => (
          <Link
            key={index}
            to="/castledetails"
            className="h-[180px] w-[165px] md:w-[220px]"
          >
            <Card chateau={chateau.img} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
