import React from "react";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ListaNombres = ({ nombres, eliminarNombre }) => {
    return (
        <List>
            {nombres.map((nombre, index) => (
                <ListItem
                    key={index}
                    secondaryAction={
                        <IconButton
                            edge="end"
                            onClick={() => eliminarNombre(nombre)}
                            >
                                <DeleteIcon />
                        </IconButton>
                    }
                >
                    <ListItemText primary={nombre} />
                </ListItem>
            ))}
        </List>
    );
};

export default ListaNombres;