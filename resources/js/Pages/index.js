import React, { Suspense, lazy } from "react";

import Header from "../Parts/Header";
import {
    StoryShimmer,
    SettingsShimmer,
    Spinner,
    MyPostsShimmer
} from "../Shimmers";

const HomePage = lazy(() => import("../HomePage"));
const Editor = lazy(() => import("../Editor"));
const Settings = lazy(() => import("../Settings"));
import Interview from "../Interview";
import MyPosts from "../MyPosts";

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

export const myPosts = () => {
    return (
        <>
            <Header
                title="Mi Historias"
                subtitle="Aquí tienes tus historia bro"
            />
            <Suspense fallback={<MyPostsShimmer />}>
                <MyPosts />
            </Suspense>
        </>
    );
};
