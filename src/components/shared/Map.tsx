'use client'
import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import { useTranslations } from "next-intl";

const coords: [number, number] = [41.052821, 68.941117];

const customIcon = L.icon({
  iconUrl: "/icons/map-pin.svg",
  iconSize: [20, 30],
  iconAnchor: [12, 30],
});

function MarkerWithPopup() {
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  }, []);

  return (
    <Marker ref={markerRef} position={coords} icon={customIcon}>
      {/* <Popup>{address}</Popup> */}
    </Marker>
  );
}

export default function Map() {
  // const t = useTranslations("Map");
  // const [address, setAddress] = useState(t("loading"));
  const [address, setAddress] = useState("loading");

  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${coords[0]}&lon=${coords[1]}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        setAddress(data.display_name || 'manzil topilmadi');
      })
      .catch(() => {
        setAddress('yuklashda xatolik');
      });
  }, []);

  const handleOpenGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coords[0]},${coords[1]}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative">
      <MapContainer
        center={coords}
        zoom={15}
        scrollWheelZoom={false}
        className="h-[400px] w-full z-0"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MarkerWithPopup />
      </MapContainer>

      {/* Google Maps tugmasi */}
      <button
        onClick={handleOpenGoogleMaps}
        className="absolute bottom-4 right-4 border  bg-bg px-4 py-2 rounded-md shadow cursor-pointer transition z-1000 capitalize"
      >
        {"Xaritada ko'rsatish"}
      </button>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import Map, { Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
// import "maplibre-gl/dist/maplibre-gl.css";

// const coords: [number, number] = [41.052821, 68.941117];

// export default function MapLibreComponent() {
//   const [address, setAddress] = useState("loading");
//   const [popupOpen, setPopupOpen] = useState(true);

//   useEffect(() => {
//     fetch(
//       `https://nominatim.openstreetmap.org/reverse?lat=${coords[0]}&lon=${coords[1]}&format=json`
//     )
//       .then((res) => res.json())
//       .then((data) => setAddress(data.display_name || "manzil topilmadi"))
//       .catch(() => setAddress("yuklashda xatolik"));
//   }, []);

//   const handleOpenGoogleMaps = () => {
//     const url = `https://www.google.com/maps/dir/?api=1&destination=${coords[0]},${coords[1]}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="relative">
//       <Map
//         initialViewState={{
//           longitude: coords[1],
//           latitude: coords[0],
//           zoom: 15,
//         }}
//         style={{ width: "100%", height: "400px" }}
//         // mapStyle="https://demotiles.maplibre.org/style.json"
//         // mapStyle={{
//         //   version: 8,
//         //   sources: {
//         //     "osm-tiles": {
//         //       type: "raster",
//         //       tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
//         //       tileSize: 256,
//         //     },
//         //   },
//         //   layers: [
//         //     {
//         //       id: "osm-layer",
//         //       type: "raster",
//         //       source: "osm-tiles",
//         //     },
//         //   ],
//         // }}
//         scrollZoom={false}
//       >
//         <NavigationControl position="top-left" />

//         <Marker longitude={coords[1]} latitude={coords[0]} anchor="bottom">
//           <img
//             src="/icons/map-pin.svg"
//             alt="marker"
//             className="w-5 h-7 cursor-pointer"
//             onClick={() => setPopupOpen(true)}
//           />
//         </Marker>

//         {popupOpen && (
//           <Popup
//             longitude={coords[1]}
//             latitude={coords[0]}
//             anchor="top"
//             onClose={() => setPopupOpen(false)}
//           >
//             <div>{address}</div>
//           </Popup>
//         )}
//       </Map>

//       <button
//         onClick={handleOpenGoogleMaps}
//         className="absolute bottom-4 right-4 border bg-bg px-4 py-2 rounded-md shadow cursor-pointer capitalize"
//       >
//         Xaritada ko'rsatish
//       </button>
//     </div>
//   );
// }
