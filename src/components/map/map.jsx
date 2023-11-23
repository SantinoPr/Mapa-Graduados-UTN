/* eslint-disable react/prop-types */
import "./map.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {  useState } from "react";


export default function Map({datosMapa}) {

  const [marker, setMarker]=useState(null);
  const [country, setCountry]=useState('');

  let latitud=0;
  let longitud=0;

    function data(){
      if(longitud!='' && latitud!=''){
        return {
          'ciudad' : country,
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

         const apiUrl = "https://nominatim.openstreetmap.org/search?q="+country+"&format=json&limit=1";
         await fetch(apiUrl)
         .then((response) =>{
          if(!response.ok){
            throw new Error('La solicitud no pude efectuarse')
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
       onChange={(e) => setCountry(e.target.value)}  
      ></input> Actualiza el estado con el valor del input 
      <div id="emailHelp" className="form-text">
        Ingrese la localidad a buscar
      </div>
    </div>
    <input id="btnSearch" className="btn btn-primary" type="button" value="Buscar" onClick={async ()=>{await ObtenerLatitudLongitud(); datosMapa(data())}}></input>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="map">
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


export function Mapa(props){
  return(
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[props.lat, props.lon]}>
          <Popup>
            {props.ciudad} <br /> {props.nombre}
          </Popup>
        </Marker>
      </MapContainer>
  )
}