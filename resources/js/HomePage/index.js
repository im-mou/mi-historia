import React from "react";
import { CompoundButton, Stack } from "office-ui-fabric-react";

const stackTokens = { childrenGap: 20 };

const HomePage = function() {
    return (
        <Stack
            className="component"
            horizontal
            horizontalAlign="center"
            verticalAlign="center"
            tokens={stackTokens}
        >
            <CompoundButton
                className="ms-depth-4"
                href="/contar-mi-historia"
                secondaryText="Redactar un escrito para contar tus experiencias"
            >
                Quiero contar mi historia
            </CompoundButton>
            <CompoundButton
                className="ms-depth-4"
                href="/responder-a-preguntas"
                secondaryText="Participar en la entrevista y reponder a pregutas"
            >
                Quiero responder a preguntas
            </CompoundButton>
        </Stack>
    );
};

export default HomePage;
