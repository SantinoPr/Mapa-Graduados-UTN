import fotoDefault from 'C:/Users/Santino/Desktop/mapa_graduado/src/assets/fotodefault.png';
import "./perfilGraduado.css"
import { useState } from 'react';
import { Mapa } from '../map/map';
import "leaflet/dist/leaflet.css";


export default function PerfilGraduado(){

    const [nombre, setNombre]=useState("Cristian");
    const [carrera, setCarrera]= useState ("Ingeniera Electronica");
    const [numero, setNumero]=useState ("3435");
    const [ciudad, setCiudad]=useState ('wakanda');
    const [latitud, setLatitud]=useState (51.505);
    const [longitud, setLongitud]=useState (-0.09);


    async function recibirDatos(){

    await fetch('https://localhost:7073/graduado/listar'/*,{
       method:'GET',
       mode: 'cors',
       headers:{"Content-type" : 'multipart/form-data'}
       }*/)
      .then(response=>(response.json())
      .then(data=>{
        setNombre(data.nombre);
        setCarrera(data.carrera);
        setNumero(data.numero);
        setCiudad(data.ciudad);
        setLatitud(data.latitud);
        setLongitud(data.longitud);
        console.log(data)
      }))
      .catch(err=>console.log(err));

     }

    return(
        <div className="container">
            <div className='itemPerfil'>
                <img src={fotoDefault} className="fotoGraduado"></img>
                <p>{nombre}</p>
            </div>
            <div className='itemPerfil'>
              <b>Carrera/s finalizada/s</b> 
              <p>{carrera}</p>
            </div>
            <div className='itemPerfil'>
              <b>Numero</b> 
              <p>{numero}</p>
            </div>
            <Mapa lat={latitud} lon={longitud} ciudad={ciudad} nombre={nombre}/>
            <button type="button" className="btn btn-primary" onClick={recibirDatos}>cargar</button>
           
       </div>
  )
}