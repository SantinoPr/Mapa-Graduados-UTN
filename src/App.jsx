import "leaflet/dist/leaflet.css";
import {Registro} from './components/registro/registro';
import SobreElMapa from './components/sobreElMapa/sobreElMapa';
import NavBar from './components/navBar/navBar';
import PerfilGraduado from './components/perfilGraduado/perfilGraduado'
import Login from './components/login/login';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './components/Inicio/inicio';

function App() {
  return (
    <div className="tema">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/perfilGraduado" element={<PerfilGraduado />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/sobreElMapa" element={<SobreElMapa />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
    
  
  )
}

export default App
