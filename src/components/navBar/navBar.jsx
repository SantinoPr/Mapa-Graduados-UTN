import './navBar.css';
import '../registro/registro.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link} from 'react-router-dom';

function NavBar()  {


  return (
    <div className='container'> 
      <nav className="nav p-3 justify-content-end nav-underline">
        <Link className="nav-link active" id="navItem" aria-current="page" to="/">Inicio</Link>
        <Link className="nav-link" id="navItem" aria-current="page" to="/registro">Registro</Link>
        <Link className="nav-link" id="navItem" to="/perfilGraduado" >perfil</Link>
        <Link className="nav-link" id="navItem" to="/sobreElMapa" >Graduados</Link>
    </nav>
  </div>
  )
}

export default NavBar