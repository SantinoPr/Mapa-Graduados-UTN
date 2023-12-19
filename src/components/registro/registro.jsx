import './registro.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState } from 'react';
import Map from '../map/map';

export function Registro(){
  
  const [nombre, setNombre]=useState(null);
  const [numero, setNumero]=useState(null);
  const [mail, setMail]=useState(null);
  const [carrera, setcarrera]=useState(null);
  const [dni, setDni]=useState(null);
  //const [cargo, setCargo]=useState(false);
  const [mapaData, setMapaData]=useState('');
  const [cargo, setCargo]=useState('');
  const [password, setPassword]=useState('');

  const [image,setImage]= useState(null);
  const verImagen=(e)=>{   
    const file =e.target.files[0];
    if(file){
        //creo un objeto en base a la url que obtengo
        const imageUrl=URL.createObjectURL(file)
        setImage(imageUrl)
    }
 }

 
 async function datosMapa(data){
   setMapaData(data)  
   alert("Datos enviados con exito");
   console.log(data);
}
async function datosEgresado(){

  let formData=new FormData();

  const data= {
    "dni" : dni,
    "nombre" : nombre,
    "mail" : mail,
    "numero" : numero,
    "carrera" : carrera,
    "password" : password
  };
  const datos=Object.assign(data, mapaData)//uno dos objetos json en un solo 

  formData.append('imagen',image);
  formData.append('datos',JSON.stringify(datos));


  await fetch('https://localhost:7073/graduado/addgraduado',{
    method:'POST',
    mode: 'cors',
    body: formData
  })
  console.log(datos);
  return datos;
}


const Si =()=>{
  setCargo(
   <div>
    <p>Que puesto hostenta actualmente ?</p>
    <input type='text' id='item' placeholder='Puesto' className="form-control"></input>
  </div>
  )
}

return( 
  
  <div className="container">    
    <div className='registro'>     
      <div className="items_registro">
        {/*<form action='https://localhost:7073/graduado/guardar2' method="post" encType='multipart/form-data'>*/}     
          <h2>Registro</h2>
          <div className='flex'>
            <input id='item' className="form-control" type="text" name="nombre" placeholder="Nombre y Apellido" aria-label="default input example" onChange={(e)=>{setNombre(e.target.value)}}></input>
            <input id='item' className="form-control" type="text"  name="numero" placeholder="Numero" aria-label="default input example" onChange={(e)=>{setNumero(e.target.value)}}></input>
          </div>   
          <div className='flex'>
            <input id='item' className="form-control" type="email"  name="mail"placeholder="Email" aria-label="default input example" onChange={(e)=>{setMail(e.target.value)}}></input>
            <input id='item' className="form-control" type="text"  name="dni" placeholder="Dni" aria-label="default input example" onChange={(e)=>{setDni(e.target.value)}}></input>
          </div>  

          <div className='flex'>
            <input id='item' className="form-control" type="password"  name="password "placeholder="Contrasenia" aria-label="default input example" onChange={(e)=>{setPassword(e.target.value)}}></input>
            <input id='item' className="form-control" type="password" placeholder="Confirmar contrasenia" aria-label="default input example"></input>
          </div>       
          <select id='item' className='form-control' aria-label="Default select example"  name="carrera" value={carrera} onChange={(e)=>{setcarrera(e.target.value); console.log({carrera})}}>
              <option defaultValue>Seleccione una carrera</option>
              <option value="Ing.Industrial">Ing.Industrial</option>
              <option value="Ing.Civil">Ing.Civil</option>
              <option value="Ing.Electronica">Ing.Electronica</option>
              <option value="Ing.Electromecanica">Ing.Electromecanica</option>
              <option value="Tec.Universitaria en Programacion">Tec.Universitaria en Programacion</option>
          </select><br></br>
          <label>Se encuentra ejerciendo su cargo?</label>
          <div id='item'className="form-check">
              <input className="form-check-input" type="radio" id="flexRadioDefault1" onChange={Si} ></input>
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Si
              </label>
          </div>
          <div id='item' className="form-check">
              <input className="form-check-input" type="radio" id="flexRadioDefault2" onChange={()=>setCargo(null)}></input>
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                No
              </label>
          </div>
          {cargo}
          {/*
            <div className="items_localidades">
              <select name="country" className="countries" id="countryId">
                  <option value="">Select Country</option>
              </select>
              <select name="state" className="states" id="stateId">
                  <option value="">Select State</option>
              </select>
              <select name="city" className="cities" id="cityId">
                  <option value="">Select City</option>
              </select>
</div> */}
           <div className='files'>
            <div  className="input-group mb-3">
              <input  type="file" className="form-control" name="imagen" id='item' accept='image/*'
              onChange={verImagen}></input>             
             </div>           
             <img src={image} className="img-thumbnail" alt="..."></img>
          </div>         
          <Map datosMapa={datosMapa}/>
          <button type="submit" className="btn btn-primary" onClick={datosEgresado}>Continuar</button>
         {/*</form>*/}
      </div>
    </div>        
  </div>
  )
}




