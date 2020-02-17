import React from "react";
import {
    DocumentCard,
    DocumentCardActions,
    DocumentCardActivity,
    DocumentCardLocation,
    DocumentCardTitle,
    DocumentCardStatus
} from "office-ui-fabric-react/lib/DocumentCard";
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
import TimeAgo from "../Utils/TimeAgo";
import { POST_TYPES } from "../Utils/Constants";

const Post = props => {
    return (
        <DocumentCard>
            <DocumentCardLocation location={getPostType(props.type)} />
            <DocumentCardTitle title={props.title} />
            <DocumentCardActivity
                activity={<TimeAgo date={"Creado hace: " + props.created_at} />}
                people={[
                    {
                        name: "Annie Lindqvist"
                    }
                ]}
            />
            <DocumentCardActions
                actions={[
                    {
                        iconProps: { iconName: "Edit" },
                        ariaLabel: "edit action"
                    },
                    {
                        iconProps: { iconName: "PublishContent" },
                        ariaLabel: "publish action"
                    },
                    {
                        iconProps: { iconName: "Delete" },
                        ariaLabel: "delete action"
                    }
                ]}

            />
        </DocumentCard>
    );
};

const getPostType = function(type) {
    let res = "";
    switch (type) {
        case POST_TYPES.STORY.key:
            res = POST_TYPES.STORY.text;
            break;
        case POST_TYPES.INTERVIEW.key:
            res = POST_TYPES.INTERVIEW.text;
            break;
    }
    return res;
};

export default Post;
