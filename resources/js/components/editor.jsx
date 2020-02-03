import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import TimeAgo from 'react-timeago';
import spanishStrings from 'react-timeago/lib/language-strings/es';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
const formatter = buildFormatter(spanishStrings);

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

        this.state = {
            uuid: this.props.uuid,
            title: this.props.title,
            body: this.props.body,
            anonymous: this.props.anonymous,
            published: this.props.published,
            lastSaved: this.props.lastSaved,
            lastSavedTime: this.props.lastSavedTime,
            errors: [],
        };
    }

    componentDidMount(){
        axios
            .get("/api/historia/"+this.state.uuid)
            .then(response => {
                this.setState({
                    title: response.data.title,
                    body: response.data.story.body,
                    anonymous: response.data.anonymous,
                    published: response.data.published,
                })
            })
            .catch(error => {
                if (error.response) {
                    this.setState({
                        errors: error.response.data.errors
                    });
                }
            });
    }

    handleSave(){
        this.handleRequest('guardar','Último guardado: ')
    }

    handlePublish() {
        this.setState({
            published: this.handleRequest('publicar'),
        })
    }

    handleRequest(url, msg='') {
        let res = false;
        const story = {
            title: this.state.title,
            body: this.state.body,
            anonymous: this.state.anonymous,
            published: this.state.published,
            uuid: this.state.uuid,
            action: url === 'publicar' // true if url = publicar; false if url = guardar
        };
        axios
            .post('/api/historia/'+url, story)
            .then(response => {
                res = true; // set to true fot the return value
                this.setState({
                    lastSaved: msg,
                    lastSavedTime: new Date(response.data.msg),
                    errors:[]
                });
            })
            .catch(error => {
                if (error.response) {
                    this.setState({
                        errors: error.response.data.errors
                    });
                }
            });
        return res;
    }

    handleInputChange(e) {
        this.setState({
            [event.target.name]: e.target.value,
            lastSaved: 'Hay cambios sin guardar',
            lastSavedTime: null,
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
            return (
                <div className="alert alert-danger" role="alert">
                    {this.state.errors[field][0]}
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div>{this.state.published? 'Publicada':''}</div>
                <div>
                    {this.state.lastSaved}
                    <TimeAgo date={this.state.lastSavedTime} formatter={formatter} />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-switch">
                        <input
                            checked={this.state.anonymous ? "checked" : ""}
                            onChange={this.toggleSwitch}
                            type="checkbox"
                            className="custom-control-input"
                            id="anonymousSwitch"
                        />
                        <label
                            className="custom-control-label"
                            htmlFor="anonymousSwitch"
                        >
                            Anonymous
                        </label>
                    </div>
                    <button
                        onClick={this.handleSave}
                        className="btn btn-secondary btn-sm"
                    >
                        Guardar
                    </button>
                    <button
                        onClick={this.handlePublish}
                        className="btn btn-success btn-sm"
                    >
                        Guardar y Publicar
                    </button>
                </div>
                <div className="form-group">
                    <label htmlFor="titulo">Título</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        id="exampleInputEmail1"
                        aria-describedby="tituloHelp"
                        placeholder="Título de tu historia"
                        onChange={this.handleInputChange}
                        value={this.state.title}
                    />
                    <small id="tituloHelp" className="form-text text-muted">
                        Este será el título de tu escrito, no es obligatorio
                        pero se recomienda poner uno.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="body">Tu historia</label>
                    <textarea
                        className="form-control"
                        id="body"
                        rows="3"
                        name="body"
                        onChange={this.handleInputChange}
                        value={this.state.body}
                    />
                    {this.renderErrorFor("body")}
                </div>
            </div>
        );
    }
}

Editor.defaultProps = {
    uuid: _.last((new URL(window.location.href)+'').split("/")),
    title: "",
    body: "",
    anonymous: false,
    published: false,
    lastSaved: '',
    lastSavedTime: null
};

Editor.propTypes = {
    uuid: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    anonymous: PropTypes.bool,
    published: PropTypes.bool,
    lastSaved: PropTypes.string,
    lastSavedTime: PropTypes.string,
};

export default Editor;
