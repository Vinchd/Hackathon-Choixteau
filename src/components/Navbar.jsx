import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-row bg-nav justify-between items-center">
      <div className="m-4">
        <Link to="/">
          <img src=".\public\assets\logo_choiteau.png" alt="logo du site" />
        </Link>
      </div>
      <div className="flex flex-row justify-end text-tertiary mr-4 font-bold text-xl">
        <Link to="/team">
          <p className="m-4">Team</p>
        </Link>
        <Link to="/contact">
          <p className="m-4">Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
