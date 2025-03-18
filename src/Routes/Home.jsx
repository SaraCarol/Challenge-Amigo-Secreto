/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
/*import NameInput from "./components/NameInput";
import NameList from "./components/NameList";
import Controls from "./components/Controls";
import WinnerDisplay from "./components/WinnerDisplay";
import styles from "./Home.module.css";*/

const Home = () => {
    const [nombres, setNombres] = useState([]);
    const [resultado, setResultado] = useState(null);

    const agregarNombre = (nombre) => {
        if (nombre && !nombres.includes(nombre)) {
            setNombres([...nombres, nombre]);
        }
    };

    const eliminarNombres = (nombre) => {
        setNombres(nombres.filter((nombre) => nombre !== nombre));
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

    return (
        <Box className={styles.background}>
            <Container maxWidth="sm" className={styles.container}>
                <Typography variant="h2" className={styles.title}>
                    Amigo Secreto
                </Typography>
                <NameInput addName={addName} />
                <NameList names={names} removeName={removeName} />
                <WinnerDisplay winner={winner} />
                <Controls drawWinner={drawWinner} resetGame={resetGame} />
            </Container>
        </Box>
    );
};

export default Home;