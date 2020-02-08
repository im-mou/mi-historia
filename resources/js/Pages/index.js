import React, { Suspense, lazy } from "react";

import Header from "../Parts/Header";
import { StoryShimmer, SettingsShimmer, Spinner } from "../Shimmers";

const HomePage = lazy(() => import("../HomePage"));
const Editor = lazy(() => import("../Editor"));
const Settings = lazy(() => import("../Settings"));
import Interview from "../Interview";

export const homepage = () => {
    return (
        <>
            <Suspense fallback={<Spinner />}>
                <Header
                    title="Cuéntanos tu experiencia"
                    subtitle="Puedes escoger cualquiera de las siguientes opciones"
                />
                <HomePage />
            </Suspense>
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
            <Suspense fallback={<StoryShimmer />}>
                <Editor />
            </Suspense>
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
            <Suspense fallback={<SettingsShimmer />}>
                <Settings />
            </Suspense>
        </>
    );
};
