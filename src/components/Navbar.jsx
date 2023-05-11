import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-row bg-primary justify-between items-center w-full">
      <div className="m-4">
        <Link
          to="/"
          className="flex flex-row justify-center items-center text-secondary text-2xl font-bold gap-5"
        >
          <img src="\assets\logo_choiteau.png" width="48" alt="logo du site" />
          <p>CHOÎTEAU</p>
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
