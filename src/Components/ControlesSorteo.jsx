/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Container, Typography, Box } from "@mui/material";

const ControlesSorteo = ({sortear, reiniciarSorteo, resetearLista, resultado}) => {

    return (
        <Container alignItems="center" className="controles-container">
            <Typography variant="h6">
                {resultado ? `El amigo sorteado es: ${resultado}` : "¡Haz un sorteo!"}
            </Typography>
            <Box className="box-botones">
                <Button variant="contained" onClick={sortear}>
                    Sortear
                </Button>
                <Button variant="outlined" onClick={reiniciarSorteo}>
                    Reiniciar Sorteo
                </Button>
                <Button variant="outlined" color="error" onClick={resetearLista}>
                    Reiniciar Lista
                </Button>
            </Box>
            
        </Container>
    );
};

export default ControlesSorteo;