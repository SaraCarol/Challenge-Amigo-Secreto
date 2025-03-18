import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
/*import styles from "./inputNombre.module.css";*/

const InputNombres = ({agregarNombre}) => {
    const [nombre, setNombre] = useState("");
    const [error, setError] = useState("");

    const handleChange = (event) => {
        setNombre(event.target.value);
        setError("");
    };

    const handleSubmit = () => {
        const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/;
        if (!nombre.trim()) {
            setError("El campo no puede estar vacío");
            return;
        }
        if (!nameRegex.test(nombre)) {
            setError("Solo se permiten letras");
            return;
        }
        agregarNombre(nombre.trim());
        setNombre("");

    };

    return (
        <Box className="input-container">
            <TextField
                label="Nombre"
                variant="outlined"
                value={nombre}
                onChange={handleChange}
                error={!!error}
                helperText={error}
                placeholder="Digite un nombre"
                fullWidth
                InputLabelProps={{
                    shrink: true, 
                }}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Agregar
            </Button>
        </Box>
    );
};

export default InputNombres;
