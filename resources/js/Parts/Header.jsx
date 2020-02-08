import React from "react";
const PageHeader = function(props) {
    return (
        <div>
            <div className="page-header">
                <span className="ms-fontSize-24">
                    {props.title}
                    <br />
                    <small className="ms-fontSize-16">
                        {props.subtitle}
                    </small>
                </span>
            </div>
        </div>
    );
};
export default PageHeader;
