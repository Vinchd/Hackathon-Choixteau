import { Link } from "react-router-dom";

function NotFound() {
    return(
        <div className="flex">
            <div className="flex flex-col">
                <p className="text-[7rem] font-extralight text-center">Oups, 404 !</p>
                <img src="/assets/sad-knights2.png" alt="sad knight" className="w-[80%]" />
            </div>
            <div className="flex flex-col justify-center items-center text-[1.1rem]">
                <p className="mb-[2rem]">Il n'y a rien à voir par <em>ici</em> !</p>
                <p>Pour retourner à la page d'accueil,</p>
                <p className="mb-[1.2rem]">c'est par là :</p>
                <button className="p-2 rounded basicButton cursor-pointer flex"><Link to="/">Accueil</Link></button>
            </div>
        </div>
    )
}

export default NotFound;
