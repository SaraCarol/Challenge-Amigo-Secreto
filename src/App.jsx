/* eslint-disable no-unused-vars */
import './App.css'
import InputNombres from './Components/InputNombres';
import ListaNombres from './Components/ListaNombres';
import ControlesSorteo from './Components/ControlesSorteo';
import { Container, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import imagenSuperior from "./assets/amigo-secreto.png";


function App() {
  const [nombres, setNombres] = useState([]);
  const [resultado, setResultado] = useState(null);
  
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
    <Container maxWidth={false} className="app-container">
      <Box className="header">
        <img src={imagenSuperior} alt="Amigo Secreto" className="header-image" />
        <Typography variant="h3" align="center" className="header-title">
          Amigo Secreto
        </Typography>
      </Box>

      <Box className="content">
        <Typography variant="h3" align="center" gutterBottom>
          Digite el nombre de sus amigos
        </Typography>
          <InputNombres agregarNombre={agregarNombre}/>
          <ListaNombres nombres={nombres} eliminarNombre={eliminarNombre} />
          <ControlesSorteo
            sortear={sortear}
            reiniciarSorteo={reiniciarSorteo}
            resetearLista={resetear}
            resultado={resultado}
        />
      </Box>
    </Container>
    
  )
}

export default App
