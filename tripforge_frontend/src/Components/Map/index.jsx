import React from "react";
import GoogleMapReact from "google-map-react";

export default function Map() {
  const coordinates = { lat: 20, lng: 78 };
  const apiKey = "AIzaSyB71R_KQJRoRR4Ear6QPuKA5VbpTZgdfdE";
  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        // margin={[50, 50, 50, 50]}
        // options={""}
        // onChange={null}
        // onChildClick={null}
      ></GoogleMapReact>
    </div>
  );
}
