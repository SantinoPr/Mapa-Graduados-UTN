import "./map.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
function map() {
  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Localidad
        </label>
        <input id="country" className="form-control" type="text" placeholder="Localidad" aria-label="default input example"
        ></input>
        <div id="emailHelp" className="form-text">
          Ingrese la localidad a buscar
        </div>
      </div>
      <input id="btnSearch" className="btn btn-primary" type="button" value="Buscar" onClick={obtenerLatitudLongitud(document.getElementById('country'))}></input>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
async function geoCodificar(ciudad) {
  this.ciudad = ciudad;
  const apiUrl =
    "https://nominatim.openstreetmap.org/search?q=" + ciudad + "&format=json&limit=1";
     await fetch(apiUrl)
     .then((response) => response.json())
     .then((data) => {
      this.longitud = data[0].lon;
      this.latitud = data[0].lat;
      const latlon = this.latitud + " " + this.longitud;
      console.log(latlon);
      return latlon;
    })
    .catch((err) => console.log(err));
}
async function obtenerLatitudLongitud(country) {
  try {
    let map =L.map('.map')
    let codificar = await geoCodificar(country.value);
    let campos = codificar.split(" ");
    const latitud=campos[0];
    const longitud=campos[1];
    L.marker([latitud, longitud]).addTo(map)
       .bindPopup('holi')
       .openPopup(); 
  } catch (error) {
    console.error("Error", error);
  }
}

export default map;
