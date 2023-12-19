import fotoDefault from 'C:/Users/Santino/Desktop/mapa_graduado/src/assets/fotodefault.png';
import "./perfilGraduado.css"
import { useState } from 'react';
import { Mapa } from '../map/map';
import "leaflet/dist/leaflet.css";


export default function PerfilGraduado(){

    const [nombre, setNombre]=useState("Cristian Martinez");
    const [carrera, setCarrera]= useState ("Ingeniera Electronica");
    const [numero, setNumero]=useState ("34356556");
    const [ciudad, setCiudad]=useState ('Victoria');
    const [latitud, setLatitud]=useState (51.505);
    const [longitud, setLongitud]=useState (-0.09);
    const [mail,setMail]=useState('graduado@gmail.com');


    async function recibirDatos(){

    await fetch('https://localhost:7073/graduado/listarJson')
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
        <div className="contPerfil">
          <div className='perfil'>
            <div className='perfilImage'>
              <div className='itemPerfil'>
                <img src={fotoDefault} className="fotoGraduado"></img>
              </div>
              <div className='itemPerfil'>
                <label><b>Email</b></label> <br/>
                <label>{mail}</label> <br/>
              </div>
              <div className='itemPerfil'>
                <label><b>Celular</b></label> <br/>
                <label>{numero}</label> <br/>
              </div>      
              <div className='itemPerfil'>
                <label><b>Ubicacion</b></label> <br/>
                <label>{ciudad}</label> <br/>
              </div>      
            </div>
            <div className='perfilContent'>
              <div className='itemPerfil'>
                <h2>{nombre}</h2>
              </div>
            
            <div className='itemPerfil'>
              <b>Carrera/s finalizada/s</b> 
              <p>{carrera}</p>
            </div>
            <div className='itemPerfil'>
              <b>Edad</b> 
              <p>29</p>
            </div>
            <Mapa lat={latitud} lon={longitud} ciudad={ciudad} nombre={nombre} className='mapa'/>
            <button type="button" className="btn btn-primary" onClick={recibirDatos}>cargar</button>
            </div>      
          </div>     
       </div>
  )
}