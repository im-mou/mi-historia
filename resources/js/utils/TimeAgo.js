import React from "react";
import TIMEAGO from "react-timeago";
import spanishStrings from "react-timeago/lib/language-strings/es";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
const formatter = buildFormatter(spanishStrings);

const TimeAgo = function (props) {
    return (<TIMEAGO
        {...props}
        formatter={formatter}
    />)
}

export default TimeAgo;