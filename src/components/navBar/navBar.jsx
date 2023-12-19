import './navBar.css';
import '../registro/registro.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link} from 'react-router-dom';
import fotoDefault from 'C:/Users/Santino/Desktop/mapa_graduado/src/assets/fotodefault.png';
import imgNavBar from '../../assets/imgNavBar.png';

function NavBar()  {


  return (
    <div className='containerNavBar'>
     <div className='navBar'>
      <nav className="navbar">
      <div className="container-fluid" id='itemsNavBar'>
        <a className="navbar-brand">
        <div className='imageNavContainer'>
          <img src={imgNavBar} className='imageNav'></img>
          <div>
            <b className='pText'>MAPA DE GRADUADOS</b><br/>
            <p className='pText'>UTN Frpa</p>
          </div>
               
        </div>
        </a>
        <form className="d-flex" role="search">
           <Link className="nav-link active" id="navItem" aria-current="page" to="/">Inicio</Link>    
           <Link className="nav-link" id="navItem" to="/sobreElMapa" >Graduados</Link>
           <Link className="nav-link" id="navItem" aria-current="page" to="/registro">Registro</Link>
           <Link className="nav-link" id="navItem" aria-current="page" to="/login">Log in</Link>
           <Link className="nav-link" id="navItem" to="/perfilGraduado" ><img src={fotoDefault} className='image'></img></Link>
        </form>
       </div>
        
        <div>

        </div>   
       
       </nav>
    </div>   
  </div>
  )
}

export default NavBar