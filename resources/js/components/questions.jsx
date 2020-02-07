import React from "react";
import PropTypes from "prop-types";
import { QUESTION_MESSAGES } from "../Utils/Constants";
import { ErrorAlert } from "./include/alert";
import PostControles from "../PostControles";
import Api from "../Utils/Api";
import { Stack, TextField } from "office-ui-fabric-react";

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

class Questions extends React.Component {
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
            loading: this.props.loading,
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
        this.getQuestions(this.props.uuid);
    }

    handleSave() {
        this.handleRequest("guardar", "Último guardado: ");
    }

    handlePublish() {
        this.setState({ published: true }, () => {
            this.handleRequest("publicar");
        });
    }

    async handleRequest(url, msg = "") {
        let answerList = this.state.indexes.map(el => {
            return { question_id: el.id, body: this.state[el.key] };
        });

        const code = {
            uuid: this.state.uuid,
            anonymous: this.state.anonymous,
            published: this.state.published,
            answers: answerList
        };

        try {
            const response = await Api.saveAnswers({ url, code });
            this.setState({
                lastSaved: msg + response.msg,
                errors: []
            });
        } catch (error) {
            if (error.response) {
                this.setState({
                    errors: error.response.data.errors
                });
            }
        }
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

    async getQuestions(postId) {
        this.updateQuestionsData(await Api.getQuestions(postId));
    }

    async saveQuestions() {
        this.saveQuestionsData(await Api.saveQuestions());
    }

    updateQuestionsData({ questions, post }) {
        const { questionStateEls, indexes } = this.generateQuestionStateEls({
            questions,
            post
        });

        this.setState({
            loading: false,
            questionsList: questions,
            ...questionStateEls,
            indexes: indexes,
            anonymous: post.anonymous,
            published: post.published
        });
    }

    generateQuestionStateEls({ questions, post }) {
        let questionStateEls = [];
        let indexes = [];

        if (post.answers.length) {
            post.answers.map(q => {
                questionStateEls["question_" + q.pivot.question_id] =
                    q.pivot.body;
                indexes.push({
                    key: "question_" + q.pivot.question_id,
                    id: q.pivot.question_id
                });
            });
        } else {
            questions.map(q => {
                questionStateEls["question_" + q.id] = "";
                indexes.push({ key: "question_" + q.id, id: q.id });
            });
        }

        return { questionStateEls, indexes };
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
                {this.renderErrorFor("uuid")}
                {this.renderErrorFor("anonymous")}
                {this.renderErrorFor("published")}
                {this.renderErrorFor("answers")}
                <PostControles
                    parentState={this.state}
                    menuProps={menuProps}
                    toggleSwitch={this.toggleSwitch}
                    handleSave={this.handleSave}
                    handlePublish={this.handlePublish}
                    successText={QUESTION_MESSAGES.SAVE.SUCCESS}
                />
                <Stack>
                    {this.state.questionsList.map((q, i) => (
                        <TextField
                            key={i}
                            multiline
                            rows={4}
                            styles={{
                                root: { paddingTop: 10, paddingBottom: 10 },
                                field: {fontSize:18, fontFamily:'Georgia'}
                            }}
                            label={q.body}
                            name={`question_${q.id}`}
                            onChange={this.handleInputChange}
                            value={this.state["question_" + q.id]}
                            placeholder="Escribe aqui tu respuesta..."
                        />
                    ))}
                </Stack>
            </>
        );
    }
}

Questions.defaultProps = {
    loading: true,
    uuid: _.last((new URL(window.location.href) + "").split("/")),
    anonymous: false,
    published: false,
    lastSaved: "",
    questionsList: [],
    indexes: []
};

Questions.propTypes = {
    loading: PropTypes.bool,
    uuid: PropTypes.string,
    anonymous: PropTypes.bool,
    published: PropTypes.bool,
    lastSaved: PropTypes.string,
    questionsList: PropTypes.array,
    indexes: PropTypes.array
};

export default Questions;
