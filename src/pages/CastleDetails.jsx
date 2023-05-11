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
            <h2>{castles.name}</h2>
            <img src={castles.preview.source} alt={castles.name} />
            <h2>Decription</h2> 
            <p>{castles.wikipedia_extracts.text}</p>
            <h2>Carte interactive</h2>
            
            <h2>Liens utiles</h2>
            <ul>
                <li><a href ={castles.url}>Booking</a></li>
                <li><a href ={castles.wikipedia}>Wikipedia</a></li>
            </ul>
        </div>
    );
}

export default CastleDetails;
