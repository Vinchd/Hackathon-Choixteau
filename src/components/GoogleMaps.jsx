import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "80%",
  height: "400px",
  margin: "0 auto",
};

function GoogleMaps({ lat, lon }) {
  const center = {
    lat: 48,
    lng: 2,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyAGVHYpyI9ZcYeRgcpK8LuglwX3N73BY3Q">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(GoogleMaps);
