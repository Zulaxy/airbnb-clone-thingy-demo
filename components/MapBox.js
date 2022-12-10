import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

import { MapPinIcon } from "@heroicons/react/24/solid";

const MapBox = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  // with this we tranform the raw data of each search result to an object that contains only longitude and latitude. That is needed for the getCenter
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // console.log(coordinates);

  const center = getCenter(coordinates);

  // console.log(center);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 10,
  });

  console.log(selectedLocation);

  return (
    <Map
      mapStyle="mapbox://styles/zulaxy/clbgvx4el007r14rrnm2t4ud8"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewState)}
      // onViewPortChange={(nextViewPort) => setViewport(nextViewPort)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <MapPinIcon
              onClick={() => setSelectedLocation(result)}
              className="h-6 text-red-500 cursor-pointer animate-bounce"
            />
          </Marker>
          {/* the popup when pin is clicked */}
          {selectedLocation.long === result.long && (
            <Popup
              closeOnClick={false}
              // onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          )}
        </div>
      ))}
    </Map>
  );
};

export default MapBox;
