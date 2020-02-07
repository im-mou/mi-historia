import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { StoryShimmer } from "../Shimmers";

import { initializeIcons } from "@uifabric/icons";
import { ErrorAlert } from "./include/alert";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import { STORY_MESSAGES } from "../Utils/Constants";

import PostControles from "../PostControles";
import EditorComponent from "../Editor/editorComponent";
const menuProps = {
    items: [
        {
            key: "removePost",
            text: "Eliminar Historia",
            iconProps: { iconName: "Delete" }
        }
    ],
    directionalHintFixed: true
};
initializeIcons();

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.handleSave = this.handleSave.bind(this);
        this.handlePublish = this.handlePublish.bind(this);
        this.handleRequest = this.handleRequest.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.getBodydata = this.getBodydata.bind(this);

        this.state = {
            uuid: this.props.uuid,
            title: this.props.title,
            body: this.props.body,
            anonymous: this.props.anonymous,
            published: this.props.published,
            lastSaved: this.props.lastSaved,
            lastSavedTime: this.props.lastSavedTime,
            errors: [],
            dataLoaded: this.props.dataLoaded
        };
    }

    componentDidMount() {
        let body = "";
        let title = "";

        axios
            .get("/api/historia/" + this.state.uuid)
            .then(response => {
                if (response.data.story !== null) {
                    body = response.data.story.bodyjson;
                }
                if (response.data.title !== null) {
                    title = response.data.title;
                }

                this.setState({
                    title: title,
                    body: body,
                    anonymous: response.data.anonymous,
                    published: response.data.published,
                    dataLoaded: true
                });
            })
            .catch(error => {
                if (error.response) {
                    this.setState({
                        errors: error.response.data.errors
                    });
                }
            });
    }

    handleSave() {
        this.handleRequest("guardar", "Último guardado: ");
    }

    handlePublish() {
        this.handleRequest("publicar");
    }

    handleRequest(url, msg = "") {
        let bodyData = this.getBodydata(this.state.body);

        const story = {
            title: this.state.title,
            body: bodyData.html,
            bodyjson: bodyData.json,
            anonymous: this.state.anonymous,
            published: this.state.published,
            uuid: this.state.uuid,
            action: url === "publicar" // true if url = publicar; false if url = guardar
        };
        axios
            .post("/api/historia/" + url, story)
            .then(response => {
                this.setState({
                    lastSaved: msg,
                    lastSavedTime: new Date(response.data.msg),
                    errors: [],
                    published: url === "publicar" ? true : this.state.published
                });
            })
            .catch(error => {
                if (error.response) {
                    this.setState({
                        errors: error.response.data.errors
                    });
                }
            });
    }

    handleInputChange(e) {
        let updateErrors = this.state.errors;
        updateErrors[event.target.name] = "";
        this.setState({
            [event.target.name]: e.target.value,
            lastSaved: "Hay cambios sin guardar",
            lastSavedTime: null,
            errors: updateErrors
        });
    }

    getBodydata(editorState) {
        let empty = false;
        let dataObject = {};
        const raw = convertToRaw(editorState.getCurrentContent());
        const rawJSON = JSON.stringify(raw);
        let EditorsJSONBlocks = JSON.parse(rawJSON);

        empty = EditorsJSONBlocks.blocks.map(block => {
            return block.text.trim() === "";
        });

        const unique = _.uniq(empty);

        if (unique.length === 1 && unique[0]) {
            dataObject = { html: "", json: "" };
        } else {
            dataObject = { html: draftToHtml(raw), json: rawJSON };
        }

        return dataObject;
    }
    handleEditorChange(editorState) {
        let updateErrors = this.state.errors;
        updateErrors["body"] = "";
        this.setState({
            body: editorState,
            lastSaved: "Hay cambios sin guardar",
            lastSavedTime: null,
            errors: updateErrors
        });
    }

    toggleSwitch(e) {
        this.setState({
            anonymous: !this.state.anonymous
        });
    }

    hasErrorFor(field) {
        return !!this.state.errors[field];
    }

    renderErrorFor(field) {
        if (this.hasErrorFor(field)) {
            return <ErrorAlert>{this.state.errors[field][0]}</ErrorAlert>;
        }
    }

    render() {
        return (
            <>
                {!this.state.dataLoaded ? (
                    <StoryShimmer />
                ) : (
                    <>
                        <PostControles
                            parentState={this.state}
                            menuProps={menuProps}
                            toggleSwitch={this.toggleSwitch}
                            handleSave={this.handleSave}
                            handlePublish={this.handlePublish}
                            successText={STORY_MESSAGES.SAVE.SUCCESS}
                        />

                        <div className="big-input-container">
                            <input
                                type="text"
                                className="form-control big-input"
                                name="title"
                                autoComplete="off"
                                aria-describedby="tituloHelp"
                                placeholder="Título de tu escrito"
                                onChange={this.handleInputChange}
                                value={this.state.title}
                            />
                            {this.renderErrorFor("title")}
                        </div>
                        <EditorComponent
                            onChange={this.handleEditorChange}
                            body={this.state.body}
                        />
                        {this.renderErrorFor("body")}
                    </>
                )}
            </>
        );
    }
}

async function getPost(uid) {
    const { data } = await axios.get(`/api/historia/${uid}`);
    return data;
}

Editor.defaultProps = {
    uuid: _.last((new URL(window.location.href) + "").split("/")),
    title: "",
    body: "",
    anonymous: false,
    published: false,
    lastSaved: "",
    lastSavedTime: null,
    dataLoaded: false
};

Editor.propTypes = {
    uuid: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    anonymous: PropTypes.bool,
    published: PropTypes.bool,
    lastSaved: PropTypes.string,
    lastSavedTime: PropTypes.string,
    dataLoaded: PropTypes.bool
};

export default Editor;
