import "./map.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
function Map() {

  const [marker, setMarker]=useState(null);
  const [country, setCountry]=useState(null);

 

    async function geoCodificar(ciudad) {
      const apiUrl = "https://nominatim.openstreetmap.org/search?q=" + ciudad + "&format=json&limit=1";
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

    async function ObtenerLatitudLongitud() {
    try {
      let codificar = geoCodificar(country.value);
      let campos = codificar.split(" ");
      const latitud=campos[0];
      const longitud=campos[1];
      
      setMarker(
        <Marker position={[latitud, longitud]}>
            <Popup>
              UwU <br /> Easily customizable.
            </Popup>
      </Marker>
      )
      
    } catch (error) {
      console.error("Error", error);
    }
  }



  return (
    <div className="container">
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Localidad
      </label>
      <input id="country" className="form-control" type="text"placeholder="Localidad" value={country} aria-label="default input example"
       onChange={(e) => setCountry(e.target.value)} // Actualiza el estado con el valor del input
      ></input>
      <div id="emailHelp" className="form-text">
        Ingrese la localidad a buscar
      </div>
    </div>
    <input id="btnSearch" className="btn btn-primary" type="button" value="Buscar" onClick={ObtenerLatitudLongitud} ></input>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} id="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {marker}
      </MapContainer>
    </div>
  );
  }

/*async function ObtenerLatitudLongitud(country) {
  try {
    let codificar = await geoCodificar(country.value);
    let campos = codificar.split(" ");
    const latitud=campos[0];
    const longitud=campos[1];
    return(
    <Marker position={[latitud, longitud]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
    </Marker>
    )
  } catch (error) {
    console.error("Error", error);
  }
}*/

export default Map;
