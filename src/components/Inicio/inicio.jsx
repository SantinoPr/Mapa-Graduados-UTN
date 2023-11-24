import { useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Inicio(){

  const[puntos, setPuntos]=useState('');
  const [data, setData]=useState('');

  async function listar(){
    await fetch('https://localhost:7073/graduado/listarGraduados')
          .then(response=>(response.json()))
          .then(data=>{
            setData(data);
            console.log(data)
          })
          .catch(err=> console.log(err))
  }
  const Markers = ()=>{
     
    let array=[];
    data.forEach(element => {
      let parseData=JSON.parse(element)
      array.push(
        <Marker position={[parseData.latitud, parseData.longitud]}>
        <Popup>
         { parseData.nombre} <br /> {parseData.ciudad}
        </Popup>
      </Marker>
      )
    });
    setPuntos(array);
  }
 
    
  
    return(
      <div className="container">

        <button type='button' onClick={listar} >Solicitar</button>

        <button type='button' onClick={Markers}>Mostrar</button>
        <div className="mapita">
         <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="map">
          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
           {puntos}
         </MapContainer>
        </div>    
      </div>
      
      
    )
}