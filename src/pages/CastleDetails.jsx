import { useState, useEffect } from "react";
import GoogleMaps from "../components/GoogleMaps";

function CastleDetails({ castle }) {
  console.log(castle);
  let src;
  castle.data.preview
    ? (src = castle.data.preview.source)
    : (src = "/assets/no-image.png");

  let text;
  castle.data.wikipedia_extracts
    ? (text = castle.data.wikipedia_extracts.text)
    : (text = "No description");

  let lon = 2;
  let lat = 48;

  lon = castle.data.point.lon;
  lat = castle.data.point.lat;

  return (
    <div className="h-[80%] w-[80%] max-w-[1280px]">
      <h2 className="text-center font-montserrat text-[1.6rem] font-bold mt-[1rem]">
        {castle.data.name}
      </h2>
      <div className="p-[3rem]">
        <div className="grid grid-cols-2 grid-row-3">
          <div className="">
            <img
              className="max-h-[300px] max-w-[90%] border-[2px] border-primary drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.25)]"
              src={src}
              alt={castle.data.name}
            />
          </div>
          <div className="row-start-2 row-end-3">
            <ul className="pt-[0.8rem]">
              <li>Pays : {castle.data.address.country}</li>
              <li>Région : {castle.data.address.state}</li>
              <li>Ville : {castle.data.address.village}</li>
              <li>Code Postal : {castle.data.address.postcode}</li>
            </ul>
          </div>
          <div className="row-start-3 row-end-4 flex flex-col justify-end">
            <h2 className="pt-[1.2rem] font-bold">
              En avant pour l'aventure !
            </h2>
            <ul>
              <li className="hover:text-secondary">
                <a href={castle.data.url}>Booking</a>
              </li>
              <li className="hover:text-secondary">
                <a href={castle.data.wikipedia}>Wikipedia</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Description</h2>
            <p>{text}</p>
          </div>
          <div className="row-start-2 row-end-4">
            <GoogleMaps lon={lon} lat={lat} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CastleDetails;
