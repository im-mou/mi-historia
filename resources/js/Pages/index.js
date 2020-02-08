import React from "react";
import Header from "../Parts/Header";

import HomePage from "../HomePage";
import Editor from "../Editor";
import Interview from "../Interview";
import Settings from "../Settings";

export const homepage = () => {
    return (
        <>
            <Header
                title="Cuéntanos tu experiencia"
                subtitle="Puedes escoger cualquiera de las siguientes opciones"
            />
            <HomePage />
        </>
    );
};

export const story = () => {
    return (
        <>
            <Header
                title="Mi Historia"
                subtitle="Comparte tus experiencias con tu comunidad."
            />
            <Editor />
        </>
    );
};

export const interview = () => {
    return <Interview />;
};

export const settings = () => {
    return (
        <>
            <Header
                title="Mi Datos"
                subtitle="Aquí puedes modificar tu información"
            />
            <Settings />
        </>
    );
};
