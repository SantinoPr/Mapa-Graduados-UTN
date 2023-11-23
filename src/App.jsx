import {Registro} from './components/registro/registro';
import SobreElMapa from './components/sobreElMapa/sobreElMapa';
import NavBar from './components/navBar/navBar';
import PerfilGraduado from './components/perfilGraduado/perfilGraduado'
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './components/Inicio/inicio';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/perfilGraduado" element={<PerfilGraduado />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/sobreElMapa" element={<SobreElMapa />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
