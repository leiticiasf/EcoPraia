import './App.css';
import React from 'react';
import Home from './componentes/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Entrar from "./componentes/Entrar";
import Formulario from "./Formulario/Formulario";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <>

<Router>
      {}
      <Routes>
         {}
        <Route path="/entrar" element={<Entrar />} />
        {}
        <Route path="/" element={<Home />} />
        {}
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
        </Router>

          </>
  );  
}

export default App;
