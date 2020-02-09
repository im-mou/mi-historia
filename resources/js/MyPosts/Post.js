import React from "react";
import {
    DocumentCard,
    DocumentCardActions,
    DocumentCardActivity,
    DocumentCardLocation,
    DocumentCardTitle
} from "office-ui-fabric-react/lib/DocumentCard";

const Post = (props) => {
    return (
        <DocumentCard>
            <DocumentCardLocation
                location="Marketing Documents"
                locationHref="http://microsoft.com"
                ariaLabel="Location, Marketing Documents"
            />
            <DocumentCardTitle title={props.title} />
            <DocumentCardActivity
                activity="Created Feb 23, 2016"
                people={[
                    {
                        name: "Annie Lindqvist",
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
                views={432}
            />
        </DocumentCard>
    );
};
export default Post;