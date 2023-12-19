import 'leaflet/dist/leaflet.css'; // sass
import { useState } from "react";
import { Link} from 'react-router-dom';
import MyIcon from  'C:/Users/Santino/Desktop/mapa_graduado/src/assets/graduado.png';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import './inicio.css';

export default function Inicio(){

  const darkStyle = {
    backgroundColor: 'rgb(12, 12, 12)',
    color: '#fff', // color del texto
  };
  const[puntos, setPuntos]=useState('');
  const [data, setData]=useState('');


  const myIcon=new L.icon({
    iconUrl: MyIcon,
    popupAnchor:  [-0, -0],
    iconSize: [32,45],     
});

  async function listar(){
    await fetch('https://localhost:7073/graduado/listarGraduados')
          .then(response=>(response.json()))
          .then(data=>{
            setData(data);
            console.log(data)
          })
          .catch(err=> console.log(err))
  }
  async function GetAllGraduados(){
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
        <Marker position={[parseData.latitud, parseData.longitud]} icon={myIcon} >
        <Popup closeButton={false} closeOnClick={true} minWidth={200}>
          <div className='preview'>
            <a>
              <Link to="/perfilGraduado">
                <img src={MyIcon} height='200px' width='200px'/> 
              </Link>    
            </a>     
            <p>{parseData.nombre}</p> <br /> {parseData.ciudad}
          </div>
          
        </Popup>
      </Marker>
      )
    });
    setPuntos(array);
  }
 
    
  
    return(
      <div className="containerInicio">
        <div className='Inicio'>
          
          <div >
          <input type='button' onClick={listar}></input>
          <input type='button' onClick={Markers}></input>
           <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true} className="mapita"  style={darkStyle}>
            <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://maps.geoapify.com/v1/tile/dark-matter/{z}/{x}/{y}.png?apiKey=d790f1ab243243a5958f067d64699d86"            
            />
             <MarkerClusterGroup>
               {puntos}
            </MarkerClusterGroup>          
          </MapContainer>
        </div>    
      </div>    
    </div>
      
      
    )
}