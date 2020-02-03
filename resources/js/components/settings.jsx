import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import cityname from '../utils/spanishCityNames';
import countryname from '../utils/countryNames';

class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);

        this.state = {
            name: this.props.name,
            surname: this.props.surname,
            nationality: this.props.nationality,
            city: this.props.city,
            arrival_year: this.props.arrival_year,
            age_year: this.props.age_year,
            feedback: this.props.feedback,
            errors: []
        };
    }

    componentDidMount() {
        axios
            .get("/api/mis-datos")
            .then(response => {
                if (response.data) {
                    this.setState({
                        name: response.data.name,
                        surname: response.data.surname,
                        nationality: response.data.nationality,
                        city: response.data.city,
                        arrival_year: response.data.arrival_year,
                        age_year: response.data.age_year,
                    });
                }
            })
            .catch(error => {
                if (error.response) {
                    this.setState({
                        errors: error.response.data.errors
                    });
                }
            });

    }

    handleSubmit() {
        let datos = {
            name: this.state.name,
            surname: this.state.surname,
            nationality: this.state.nationality,
            city: this.state.city,
            arrival_year: this.state.arrival_year,
            age_year: this.state.age_year,
        }
        axios
            .post('/api/mis-datos/guardar', datos)
            .then(response => {
                this.setState({
                    feedback: response.data.msg,
                    errors: []
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
        });
    }

    hasErrorFor(field) {
        return !!this.state.errors[field];
    }

    renderErrorFor(field) {
        if (this.hasErrorFor(field)) {
            return (
                <div className="text-danger">
                    {this.state.errors[field][0]}
                </div>
            );
        }
    }

    render() {
        Option = function (value, i) {
            return <option key={i}>{value}</option>;
        };
        return (
            <div className="card">
                <div className="card-header">
                    Mis Datos
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="nametextField">Nombre</label>
                                <input value={this.state.name} name="name" onChange={this.handleInputChange} type="text" className="form-control" placeholder="First name" id="nametextField" />
                                {this.renderErrorFor("name")}
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="lastNametextField">Apellido</label>
                                <input value={this.state.surname} name="surname" onChange={this.handleInputChange} type="text" className="form-control" placeholder="Last name" id="lastNametextField" />
                                {this.renderErrorFor("surname")}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="CiudadFormControlSelect1">Tu ciudad</label>
                                <select name="city" value={this.state.city} onChange={this.handleInputChange} className="form-control" id="CiudadFormControlSelect1">
                                    {cityname.map(Option)}
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="NacionalidadFormControlSelect1">Nacionalidad</label>
                                <select name="nationality" value={this.state.nationality} onChange={this.handleInputChange} className="form-control" id="NacionalidadFormControlSelect1">
                                    {countryname.map(Option)}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="arrival_yeartextField">Año de llegada a Barcelona</label>
                            <input value={this.state.arrival_year} name="arrival_year" onChange={this.handleInputChange} type="text" className="form-control" placeholder="ej.: 2005" id="arrival_yeartextField" />
                            {this.renderErrorFor("arrival_year")}
                        </div>
                        <div className="col">
                            <label htmlFor="age_yeartextField">Año de nacimiento</label>
                            <input value={this.state.age_year} name="age_year" onChange={this.handleInputChange} type="text" className="form-control" placeholder="ej.: 1994" id="age_yeartextField" />
                            {this.renderErrorFor("age_year")}
                        </div>
                    </div>
                </div>

                <div className="card-footer">
                    <button type="button" onClick={this.handleSubmit} className="btn btn-primary mb-2">Guardar cambios</button>
                    <div className="text-secondary">{this.state.feedback}</div>
                </div>
            </div>
        );
    }
}

Settings.defaultProps = {
    name: '',
    surname: '',
    nationality: countryname[0],
    city: cityname[0],
    arrival_year: '',
    age_year: '',
    feedback: '',
};

Settings.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    nationality: PropTypes.string,
    city: PropTypes.string,
    arrival_year: PropTypes.string,
    age_year: PropTypes.string,
    feedback: PropTypes.string,
};

export default Settings;
