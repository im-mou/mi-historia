import React from "react";
import { MessageBar, MessageBarType } from "office-ui-fabric-react";
export const DefaultAlert = props => <MessageBar {...props}>{props.children}</MessageBar>;
export const SuccessAlert = props => (
    <MessageBar {...props} messageBarType={MessageBarType.success} isMultiline={false}>
        {props.children}
    </MessageBar>
);
export const ErrorAlert = props => (
    <MessageBar
        {...props}
        messageBarType={MessageBarType.error}
        isMultiline={false}
        dismissButtonAriaLabel="Close"
    >
        {props.children}
    </MessageBar>
);
