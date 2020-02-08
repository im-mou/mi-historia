import React from "react";
import PropTypes from "prop-types";

import { UserDataShimmer } from "../Shimmers";

import cityname from "../Utils/spanishCityNames";
import countryname from "../Utils/countryNames";

import { SuccessAlert, ErrorAlert } from "../Parts/Alert";
import {
    PrimaryButton,
    Stack,
    TextField,
    Dropdown
} from "office-ui-fabric-react";

import Api from "../Utils/Api";

const elementsStyles = { root: { height: 70 } };
const innerStackTokens = { childrenGap: 20 };

class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);
        this.updateErrors = this.updateErrors.bind(this);

        this.state = {
            name: this.props.name,
            surname: this.props.surname,
            nationality: countryname[0],
            city: cityname[0],
            arrival_year: this.props.arrival_year,
            age_year: this.props.age_year,
            feedback: this.props.feedback,
            dataLoaded: this.props.dataLoaded,
            errors: []
        };
    }

    componentDidMount() {
        this.getUserData();
    }

    async handleSubmit() {
        let code = {
            name: this.state.name,
            surname: this.state.surname,
            nationality: this.state.nationality.key,
            city: this.state.city.key,
            arrival_year: this.state.arrival_year,
            age_year: this.state.age_year
        };
        this.saveData(Api.saveUserData, { code });
    }

    async saveData(apiMethod, ...args) {
        try {
            const response = await apiMethod(...args);
            this.setState({
                feedback: response.msg,
                errors: []
            });
        } catch (error) {
            if (error.response) {
                this.updateErrors(error.response.data);
            }
        }
    }

    async getUserData() {
        // function to fetch data from api and catch error
        this.updateUserState(await Api.getUserData()).catch(error => {
            if (error.response) {
                this.updateErrors(error.response.data);
            }
        });
    }

    async updateUserState(data) {
        // function dedicated to update state.
        if (data) {
            this.setState({
                name: data.name,
                surname: data.surname,
                nationality: {
                    key: data.nationality,
                    text: data.nationality
                },
                city: {
                    key: data.city,
                    text: data.city
                },
                arrival_year: data.arrival_year,
                age_year: data.age_year
            });
        }
    }

    updateErrors(data) {
        this.setState({
            errors: data.errors,
            feedback: ""
        });
    }

    handleInputChange(event, data) {
        this.setState({
            [event.target.title]: data
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
                {this.state.feedback ? (
                    <SuccessAlert styles={{ root: { marginBottom: 10 } }}>
                        {this.state.feedback}
                    </SuccessAlert>
                ) : (
                    ""
                )}

                {/* show shimmer is data is not loaded */}
                {this.state.dataLoaded ? (
                    <UserDataShimmer />
                ) : (
                    <>
                        <Stack horizontal tokens={innerStackTokens}>
                            <Stack.Item grow>
                                <TextField
                                    label="Nombre"
                                    title="name"
                                    placeholder="Escribe tu nombre"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    styles={elementsStyles}
                                />
                                {this.renderErrorFor("name")}

                                <Dropdown
                                    label="Tu ciudad"
                                    title="city"
                                    selectedKey={
                                        this.state.city
                                            ? this.state.city.key
                                            : undefined
                                    }
                                    onChange={this.handleInputChange}
                                    placeholder="Escoje tu ciudad"
                                    options={cityname}
                                    styles={elementsStyles}
                                />

                                <TextField
                                    label="Año de nacimiento"
                                    title="age_year"
                                    placeholder="ej.: 1994"
                                    value={this.state.age_year}
                                    onChange={this.handleInputChange}
                                    styles={elementsStyles}
                                />
                                {this.renderErrorFor("age_year")}
                            </Stack.Item>
                            <Stack.Item grow>
                                <TextField
                                    label="Apellido"
                                    title="surname"
                                    placeholder="Escribe tu apellido"
                                    value={this.state.surname}
                                    onChange={this.handleInputChange}
                                    styles={elementsStyles}
                                />
                                {this.renderErrorFor("surname")}

                                <Dropdown
                                    label="Nacionalidad"
                                    title="nationality"
                                    selectedKey={
                                        this.state.nationality
                                            ? this.state.nationality.key
                                            : undefined
                                    }
                                    onChange={this.handleInputChange}
                                    placeholder="Escoje tu país de origen"
                                    options={countryname}
                                    styles={elementsStyles}
                                />

                                <TextField
                                    label="Año de llegada a Barcelona"
                                    title="arrival_year"
                                    placeholder="ej.: 2005"
                                    value={this.state.arrival_year}
                                    onChange={this.handleInputChange}
                                    styles={elementsStyles}
                                />
                                {this.renderErrorFor("arrival_year")}
                            </Stack.Item>
                        </Stack>
                        <Stack
                            horizontal
                            horizontalAlign="space-between"
                            styles={{ root: { paddingTop: 20 } }}
                        >
                            <Stack.Item>
                                <PrimaryButton
                                    text="Guardar y Publicar"
                                    onClick={this.handleSubmit}
                                    allowDisabledFocus
                                />
                            </Stack.Item>
                        </Stack>
                    </>
                )}
            </>
        );
    }
}

Settings.defaultProps = {
    name: "",
    surname: "",
    nationality: {},
    city: {},
    arrival_year: "",
    age_year: "",
    feedback: "",
    dataLoaded: false
};

Settings.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    nationality: PropTypes.object,
    city: PropTypes.object,
    arrival_year: PropTypes.string,
    age_year: PropTypes.string,
    feedback: PropTypes.string,
    dataLoaded: PropTypes.bool
};

export default Settings;
