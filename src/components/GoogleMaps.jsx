import React from "react";
import PropTypes from "prop-types";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px",
  margin: "0 auto",
};

function GoogleMaps({ lat, lon }) {
  const center = {
    lat: lat,
    lng: lon,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyAGVHYpyI9ZcYeRgcpK8LuglwX3N73BY3Q">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={center} />
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

GoogleMaps.propTypes = {
  lat: PropTypes.number,
  lon: PropTypes.number,
};

export default React.memo(GoogleMaps);
