import React from "react";
import Header from "../include/header";
import Settings from "../settings";

const MisDatos = function() {
    return (
        <>
            <Header
                title="Mis Datos"
                subtitle="Rellena el siguiente formulario con tu información"
            />
            <Settings />
        </>
    );
};

export default MisDatos;
