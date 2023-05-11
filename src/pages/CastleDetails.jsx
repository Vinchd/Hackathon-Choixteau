import { useState, useEffect } from "react";
import axios from "axios";

function CastleDetails() {

    const [castles, setCastles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
const API = "https://api.opentripmap.com/0.1/en/places/xid/H636300?apikey=5ae2e3f221c38a28845f05b6f85b1a4179864a9e8c9917017478344e"

useEffect(() => {
    axios.get(API)
    .then((res) => {setCastles(res.data);
    setIsLoading(false)})
    .catch((err) => console.error(err))
}, [])

if(isLoading) {
    return (
        <div>
            Chargement
        </div>
    )
}

    return(
        <div>
            <h2 className="text-center font-montserrat text-[1.6rem] font-bold mt-[1rem]">{castles.name}</h2>
            <div className="p-[3rem]">
            <div className="pl-[2rem] grid grid-cols-2 grid-row-3">
                <img className="border-[2px] border-primary drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.25)]" src={castles.preview.source} alt={castles.name} />
                <div className="row-start-2 row-end-3">
                    <ul className="pt-[0.8rem]"> 
                        <li>Pays : {castles.address.country}</li>
                        <li>Région : {castles.address.state}</li>
                        <li>Ville : {castles.address.village}</li>
                        <li>Code Postal : {castles.address.postcode}</li>
                    </ul>
                </div>
                <div className="row-start-3 row-end-4">
                    <h2 className="pt-[1.2rem] font-bold">En avant pour l'aventure !</h2>
                    <ul>
                        <li className="hover:text-secondary"><a href ={castles.url}>Booking</a></li>
                        <li><a href ={castles.wikipedia}>Wikipedia</a></li>
                    </ul>
                </div>
                <div className="pt-[20px]">
                    <h2 className="font-bold">Decription</h2> 
                    <p>{castles.wikipedia_extracts.text}</p>
                </div>
                <div className="row-start-2 row-end-4">
                    <h2 className="font-bold">Carte interactive</h2>
                </div>
                </div>
            </div>
        </div>
    );
}

export default CastleDetails;
