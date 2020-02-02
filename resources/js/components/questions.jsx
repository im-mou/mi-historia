import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class Questions extends React.Component {
    constructor(props) {
        super(props);

        this.handleSave = this.handleSave.bind(this);
        this.handlePublish = this.handlePublish.bind(this);
        this.handleRequest = this.handleRequest.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleSwitch = this.toggleSwitch.bind(this);

        this.state = {
            uuid: this.props.uuid,
            anonymous: this.props.anonymous,
            published: this.props.published,
            lastSaved: this.props.lastSaved,
            questionsList: this.props.questionsList,
            indexes: this.props.indexes,
            errors: []
        };
    }

    componentDidMount() {
        axios
            .get("/api/respuestas/"+this.state.uuid)
            .then(response => {
                let newQuestions = [];
                let indexes = [];

                if(response.data.post.answers.length) {
                    response.data.post.answers.map(q => {
                        newQuestions["question_" + q.pivot.question_id] = q.pivot.body;
                        indexes.push({ key: "question_" + q.pivot.question_id, id: q.pivot.question_id });
                    });
                } else {
                    response.data.questions.map(q => {
                        newQuestions["question_" + q.id] = '';
                        indexes.push({ key: "question_" + q.id, id: q.id });
                    });
                }

                this.setState({
                    questionsList: response.data.questions,
                    ...newQuestions,
                    indexes: indexes,
                    anonymous: response.data.post.anonymous,
                    published: response.data.post.published,
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
        this.handleRequest('guardar','Último guardado: ')
    }

    handlePublish() {
        this.setState({
            published: true,
        },()=>{
            this.handleRequest('publicar')
        })
    }

    handleRequest(url, msg='') {

        let answerList = this.state.indexes.map(el => {
            return { question_id: el.id, body: this.state[el.key] };
        });

        const _answers = {
            uuid: this.state.uuid,
            anonymous: this.state.anonymous,
            published: this.state.published,
            answers: answerList,
        };
        axios
            .post('/api/respuestas/'+url, _answers)
            .then(response => {
                this.setState({
                    lastSaved: msg+response.data.msg,
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
    }

    handleInputChange(e) {
        this.setState({
            [event.target.name]: e.target.value,
            lastSaved: "Hay cambios sin guardar"
        });
    }

    toggleSwitch(e) {
        this.setState({
            anonymous: !this.state.anonymous
        });
    }

    render() {
        return (
            <div>
                <span>{this.state.lastSaved}</span>
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
                    {this.state.questionsList.map((q, i) => (
                        <div className="form-group" key={i}>
                            <label htmlFor={`body_${q.id}`}>{q.body}</label>
                            <textarea
                                className="form-control"
                                id={`body_${q.id}`}
                                rows="3"
                                name={`question_${q.id}`}
                                onChange={this.handleInputChange}
                                value={this.state["question_" + q.id]}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

Questions.defaultProps = {
    uuid: _.last((new URL(window.location.href)+'').split("/")),
    anonymous: false,
    published: false,
    lastSaved: '',
    questionsList: [],
    indexes: [],
};

Questions.propTypes = {
    uuid: PropTypes.string,
    anonymous: PropTypes.bool,
    published: PropTypes.bool,
    lastSaved: PropTypes.string,
    questionsList: PropTypes.array,
    indexes: PropTypes.array,
};

export default Questions;
