/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";

const ControlesSorteo = ({sortear, reiniciarSorteo, resetearLista, resultado}) => {

    return (
        <Stack spacing={2} alignItems="center">
            <Typography variant="h6">
                {resultado ? `El amigo sorteado es: ${resultado}` : "¡Haz un sorteo!"}
            </Typography>
            <Button variant="contained" onClick={sortear}>
                Sortear
            </Button>
            <Button variant="outlined" onClick={reiniciarSorteo}>
                Reiniciar Sorteo
            </Button>
            <Button variant="outlined" color="error" onClick={resetearLista}>
                Reiniciar Lista
        </Button>
        </Stack>
    );
};

export default ControlesSorteo;