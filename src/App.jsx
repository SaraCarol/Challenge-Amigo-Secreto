/* eslint-disable no-unused-vars */
import './App.css'
import InputNombres from './Components/InputNombres';
import ListaNombres from './Components/ListaNombres';
import ControlesSorteo from './Components/ControlesSorteo';
import { Container, Typography } from "@mui/material";
import React, { useState } from "react";

function App() {
  const [nombres, setNombres] = useState([]);
  const [resultado, setResultado] = useState(null);
  console.log('array: ' + nombres)
  const agregarNombre = (nombre) => {
    if (nombre && !nombres.includes(nombre)) {
      setNombres([...nombres, nombre]);
    }
  };

  const eliminarNombre = (nombreEliminar) => {
    setNombres(nombres.filter((nombre) => nombre !== nombreEliminar));
  };
    
  const sortear = () => {
    if (nombres.length > 0) {
      const randomIndex = Math.floor(Math.random() * nombres.length);
      setResultado(nombres[randomIndex]);
    }
  };
    
  const resetear = () => {
    setNombres([]);
    setResultado(null);
  };

  const reiniciarSorteo = () => {
    setResultado(null);
  };


  return (
    <Container>
        <InputNombres agregarNombre={agregarNombre}/>
        <ListaNombres nombres={nombres} eliminarNombre={eliminarNombre} />
        <ControlesSorteo
          sortear={sortear}
          reiniciarSorteo={reiniciarSorteo}
          resetearLista={resetear}
          resultado={resultado}
      />
    </Container>
    
  )
}

export default App
