import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class BackendQuestions extends React.Component {
    constructor(props) {
        super(props);

        this.handleSave = this.handleSave.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCancleEdit = this.handleCancleEdit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.deleteQuestion = this.deleteQuestion.bind(this);
        this.editQuestion = this.editQuestion.bind(this);

        this.state = {
            questionsList: this.props.questionsList,
            question: this.props.question,
            editedBody: this.props.editedBody,
            editMode: this.props.editMode,
            editSelectedQuestion: this.props.editSelectedQuestion,
            errors: []
        };
    }

    componentDidMount() {
        axios
            .get("/api/preguntas")
            .then(response => {
                console.log(response)
                this.setState({
                    questionsList: response.data
                });
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                });
            });
    }

    handleSave(e) {
        e.preventDefault();
        const question = {
            body: this.state.question
        };
        axios.post("/api/backend/questions/add", question).then(response => {
            this.setState({
                question: "",
                questionsList: [
                    ...this.state.questionsList,
                    { ...question, id: response.data.result }
                ]
            });
        });
    }

    handleEdit() {
        const question = {
            id:this.state.editSelectedQuestion.id,
            body: this.state.editedBody
        };
        axios.post("/api/backend/questions/edit", question).then(response => {
            if(response.data){
                let newQuestions = this.state.questionsList.filter(q => {
                    if(q.id === this.state.editSelectedQuestion.id){
                        q.body = this.state.editedBody
                    }
                    return q;
                })

                this.setState({
                    questionsList: newQuestions
                });

                this.handleCancleEdit()
            }
        });
    }
    
    handleCancleEdit() {
        this.setState({
            editedBody: "",
            editMode: false,
            editSelectedQuestion: {},
        });
    }

    deleteQuestion(id) {
        const question = {
            id: id
        };
        axios.post("/api/backend/questions/delete", question).then(response => {
            if (response.data) {
                let newQuestions = this.state.questionsList.filter(q => {
                    return q.id !== question.id;
                });
                this.setState({
                    questionsList: newQuestions
                });
            }
        });
    }

    editQuestion(question) {

        if(this.state.editSelectedQuestion.id === question.id)
            return;

        this.setState({
            editMode: true,
            editSelectedQuestion:question,
            editedBody:question.body
        });
    }

    handleInputChange(e) {
        this.setState({
            [event.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="card-body">
                    {this.state.questionsList.length === 0
                        ? "No hay preguntas"
                        : this.state.questionsList.map(question => (
                              <li
                                  className="list-group-item d-flex justify-content-between align-items-center"
                                  key={question.id}
                              >
                                  <span className={`qitem_${question.id}`}>{question.body}</span>
                                  <div className="right">
                                    <button
                                        onClick={() =>
                                            this.deleteQuestion(question.id)
                                        }
                                        className="btn btn-sm btn-light"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() =>
                                            this.editQuestion(question)
                                        }
                                        className="btn btn-sm btn-light"
                                    >
                                        Edit
                                    </button>
                                  </div>
                              </li>
                          ))}
                </div>
                <div className="card-footer">
                    {!this.state.editMode ?
                    <form>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Escribe nueva pregunta"
                                onChange={this.handleInputChange}
                                value={this.state.question}
                                name="question"
                            />
                            <div className="input-group-append">
                                <button
                                    onClick={this.handleSave}
                                    className="btn btn-success"
                                    type="submit"
                                >
                                    Añadir
                                </button>
                            </div>
                        </div>
                    </form>
                    :
                    <>
                    <div>
                        <small id="editedBodyHelp" className="form-text text-muted">
                        {this.state.editSelectedQuestion.body}
                        </small>
                        <br/>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Edita tu pregunta"
                            onChange={this.handleInputChange}
                            value={this.state.editedBody}
                            name="editedBody"
                            aria-describedby="editedBodyHelp"
                        />
                        <div className="input-group-append">
                            <button
                                onClick={this.handleCancleEdit}
                                className="btn btn-secondary"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={this.handleEdit}
                                className="btn btn-success"
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                    </>
                    }
    
                </div>
            </div>
        );
    }
}

BackendQuestions.defaultProps = {
    question: "",
    editedBody:"",
    editSelectedQuestion:{},
    editMode:false,
    questionsList: []
};

BackendQuestions.propTypes = {
    question: PropTypes.string,
    editedBody: PropTypes.string,
    editSelectedQuestion: PropTypes.object,
    editMode: PropTypes.bool,
    questionsList: PropTypes.array
};

export default BackendQuestions;
