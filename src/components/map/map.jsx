/* eslint-disable react/prop-types */
import "leaflet/dist/leaflet.css";
import "./map.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {  useState } from "react";


export default function Map({datosMapa}) {

  const [marker, setMarker]=useState(null);
  const [city, setCity]=useState('');
  const [state, setState]=useState('');
  const [country, setCountry]=useState('');

  let latitud=0;
  let longitud=0;

    function data(){
      if(longitud!='' && latitud!=''){
        return {
          'Pais' : country,
          'Provincia' : state,
          'ciudad' : city,
          'latitud' : latitud,
          'longitud' : longitud
        }
      }
      else{
        console.log("No se cargaron los datos")
      }
    }

    async function ObtenerLatitudLongitud() {
      try {

         const apiUrl = `https://nominatim.openstreetmap.org/search?city=${city}&state=${state}&country=${country}&format=json&limit=1`;
         await fetch(apiUrl)
         .then((response) =>{
          if(!response.ok){
            throw new Error('La solicitud no pudo efectuarse')
          }                   
          return response.json()
         })
         .then((data) => {
          latitud=data[0].lat;
          longitud=data[0].lon;
          const latlon = latitud + " " + longitud;
          console.log(latlon);
          
        })
        .catch((err) => console.log(err));     
        
        
         setMarker(
           <Marker position={[latitud, longitud]}>
              <Popup>
                Hola <br /> Nueva Graduado
              </Popup>
           </Marker>
      )
      
    } catch (error) {
      console.error("Error", error);
    }
  }
  return (
    <div className="containerMap">
      <div className="mb-3">
        <div className="inputLoca">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Localidad
          </label>
          <input id="country" className="form-control" type="text"placeholder="Pais" value={country} aria-label="default input example"
           onChange={(e) => setCountry(e.target.value)}  
          ></input>
           <input id="country" className="form-control" type="text"placeholder="Provincia/Estado" value={state} aria-label="default input example"
           onChange={(e) => setState(e.target.value)}  
           ></input>
           <input id="country" className="form-control" type="text"placeholder="Ciudad" value={city} aria-label="default input example"
           onChange={(e) => setCity(e.target.value)}  
           ></input>
      </div>
     </div>
    <input id="btnVer" className="btn btn-primary" type="button" value="Ver en el mapa" onClick={async ()=>{await ObtenerLatitudLongitud(); datosMapa(data())}}></input>
      <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true} className="map">
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://maps.geoapify.com/v1/tile/dark-matter/{z}/{x}/{y}.png?apiKey=d790f1ab243243a5958f067d64699d86"
     />    
        {marker}
      </MapContainer>
    </div>
  );
  }


export function Mapa(props){
  return(
    <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true} className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://maps.geoapify.com/v1/tile/dark-matter/{z}/{x}/{y}.png?apiKey=d790f1ab243243a5958f067d64699d86"
        />
        <Marker position={[props.lat, props.lon]}>
          <Popup >
            {props.ciudad} <br /> {props.nombre}
          </Popup>
        </Marker>
      </MapContainer>
  )
}