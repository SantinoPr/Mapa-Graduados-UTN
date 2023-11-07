import {Registro} from './components/registro/registro';
import NavBar from './components/navBar/navBar';
import PerfilGraduado from './components/perfilGraduado/perfilGraduado'
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/perfilGraduado" element={<PerfilGraduado />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
