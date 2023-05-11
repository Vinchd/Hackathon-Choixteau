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
    <div className="max-lg:w-[95%] h-[80%] w-[80%] max-w-[1280px]">
      <h2 className="max-md:pt-12 text-center font-montserrat text-[1.6rem] font-bold mt-[1rem]">
        {castle.data.name}
      </h2>
      <div className="p-[3rem]">
        <div className="grid max-md:grid-cols-1 grid-cols-2 gap-[32px]">
          <div className="max-md:row-start-1 max-md:row-end-2">
            <img
              className="max-h-[300px] max-w-[90%] border-[2px] border-primary drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.25)]"
              src={src}
              alt={castle.data.name}
            />
          </div>
          <div className="max-md:row-start-2 max-md:row-end-3 row-start-2 row-end-3">
            <ul className="pt-[0.8rem]">
              <li>
                <span className="font-semibold">Pays :</span>{" "}
                {castle.data.address.country}
              </li>
              <li>
                <span className="font-semibold">Région :</span>{" "}
                {castle.data.address.state}
              </li>
              <li>
                <span className="font-semibold">Ville :</span>{" "}
                {castle.data.address.village}
              </li>
              <li>
                <span className="font-semibold">Code Postal :</span>{" "}
                {castle.data.address.postcode}
              </li>
            </ul>
          </div>
          <div className="max-md:row-start-4 max-md:row-end-5 row-start-3 row-end-4 ">
            <h2 className="mt-4 font-bold mb-4">En avant pour l'aventure !</h2>
            <div className="flex gap-8">
              <button className="p-2 rounded basicButton cursor-pointer flex">
                <a href={castle.data.url} rel="noreferrer" target="_blank">
                  Booking
                </a>
              </button>
              <button className="p-2 rounded basicButton cursor-pointer flex">
                <a
                  href={castle.data.wikipedia}
                  rel="noreferrer"
                  target="_blank"
                >
                  Wikipedia
                </a>
              </button>
            </div>
          </div>
          <div>
            <h2 className="max-md:pt-[1.2rem] max-md:row-start-3 max-md:row-end-4 font-bold">
              Description
            </h2>
            <p>{text}</p>
          </div>
          <div className="pt-[1.2rem] max-md:row-start-5 max-md:row-end-6 row-start-2 row-end-4">
            <GoogleMaps lon={lon} lat={lat} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CastleDetails;
