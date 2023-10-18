import {Marker} from "react-leaflet";

export default function marker (posicion) {
  return (
    <Marker position={[posicion.lat, posicion.lng]}></Marker>
  );
}
