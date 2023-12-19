import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link, Navigate, redirect, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'universal-cookie';

export default function Login(props){

    const [mail, setMail]=useState('');
    const [password, setPassword]=useState('');

    const cookies=new Cookies();

    const Log= async()=>{
      const data={
        "password" : password,
        "mail" : mail
      };
      await fetch('https://localhost:7073/graduado/login',{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          "Content-Type":"application/json"},
        body: JSON.stringify(data)
      })
      .then(response=>{
        if(response.ok){
          console.log("hola", response.json())
          let request =response[0];
          cookies.set('dni', request.Dni, {path:'/'})
          cookies.set('nombre', request.Nombre, {path:'/'})
          cookies.set('numero', request.Numero, {path:'/'})
          cookies.set('mail', request.Mail, {path:'/'})
          cookies.set('carrera', request.Carrera, {path:'/'})
          cookies.set('pais', request.Pais, {path:'/'})
          cookies.set('provincia', request.Provincia, {path:'/'})
          cookies.set('ciudad', request.Ciudad, {path:'/'})
          cookies.set('latitud', request.Latitud, {path:'/'})
          cookies.set('longiutd', request.Longitud, {path:'/'})
          alert("Bienvenido: "+request.Nombre)
          redirect("/login");
        }
        else{
          console.log(response.json())
        }
      })
      .then(data=>console.log(data))
      .catch(error=>console.log(error))
                    
    }

    return(
        <div className='cont'>
            <div className='login'>
               <h2>Sign in</h2>
               <div className='inputs'>
                <div className="form-floating mb-3">
                  <input className="form-control" type="email" id='itemLogin'  name="mail" placeholder="Email" aria-label="default input example" onChange={(e)=>{setMail(e.target.value)}}/>     
                </div>
                <div className="form-floating">
                  <input type="password" className="form-control" id='itemLogin' placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>                  
                </div>
              </div>
              <div>
                <b>Has olvidado tu contraseña ?</b>
                <p>No tienes una cuenta ? Registrate <a href=''><Link to="/registro">aqui</Link></a></p>
              </div>
              <div className='btnDiv'>
                <button className='btn' onClick={Log}>Iniciar Sesion</button>
              </div>
              
            </div>
            
        </div>
    )
}