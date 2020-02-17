import React from "react";
import {
    DefaultButton,
    PrimaryButton,
    Stack,
    Toggle,
    Text,
    CommandButton
} from "office-ui-fabric-react";
import { SuccessAlert } from "../Parts/Alert";

import TimeAgo from "../Utils/TimeAgo";

const stackTokens = { childrenGap: 10 };
const SettingsIcon = { iconName: "Settings" };

const PostControles = function(props) {
    return (
        <>
            <div className="controlBar-alert">
                {props.parentState.published ? (
                    <SuccessAlert isMultiline={true}>
                        {props.successText}
                    </SuccessAlert>
                ) : (
                    ""
                )}
            </div>
            <Stack horizontal minHeight="50" horizontalAlign="space-between">
                <Stack
                    horizontalAlign="start"
                    verticalAlign="bottom"
                    tokens={stackTokens}
                >
                    <Toggle
                        label=" "
                        onText="Anonymous"
                        offText="Anonymous"
                        checked={!!props.parentState.anonymous}
                        onChange={props.toggleSwitch}
                    />
                </Stack>
                <Stack
                    horizontal
                    horizontalAlign="end"
                    verticalAlign="center"
                    tokens={stackTokens}
                >
                    <Text
                        variant="small"
                        styles={{ root: { color: "#666666" } }}
                    >
                        {props.parentState.lastSaved}
                        <TimeAgo date={props.parentState.lastSavedTime} />
                    </Text>
                    <DefaultButton
                        text="Guardar"
                        onClick={props.handleSave}
                        allowDisabledFocus
                    />
                    <PrimaryButton
                        text="Guardar y Publicar"
                        onClick={props.handlePublish}
                        allowDisabledFocus
                    />
                    <CommandButton
                        iconProps={SettingsIcon}
                        menuProps={props.menuProps}
                    />
                </Stack>
            </Stack>
        </>
    );
};
export default PostControles;
