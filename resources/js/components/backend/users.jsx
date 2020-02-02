import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class BackendUsers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usersList: this.props.usersList,
            errors: []
        };

        this.toggleSwitch = this.toggleSwitch.bind(this);
    }

    componentDidMount() {
        axios
            .post("/api/backend/users")
            .then(response => {
                this.setState({
                    usersList: response.data
                });
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                });
            });
    }

    toggleSwitch(id, active) {
        let newUsers = this.state.usersList.filter(user => {
            if (user.id === id) {
                user.active = Number(!user.active);
            }
            return user;
        });
        const user = {
            active: !active,
            id: id
        };
        axios.post("/api/backend/users/toggleactive", user).then(response => {
            if (response.data.result) {
                this.setState({
                    usersList: newUsers
                });
            }
        });
    }

    render() {
        return (
            <table className="table table-striped table-hover table-sm">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>last Login</th>
                        <th>Login IP</th>
                        <th>Admin</th>
                        <th>Active</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.usersList.map((u, i) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.last_login_at}</td>
                            <td>{u.last_login_ip}</td>
                            <td>{
                                this.state.usersList[i].admin
                                    ? "Yes"
                                    : "No"
                            }
                            </td>
                            <td>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    disabled={!i?'disabled':''}
                                    checked={
                                        this.state.usersList[i].active
                                            ? "checked"
                                            : ""
                                    }
                                    onChange={() =>
                                        this.toggleSwitch(
                                            u.id,
                                            this.state.usersList[i].active
                                        )
                                    }
                                />
                            </td>
                            <td>{u.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

BackendUsers.defaultProps = {
    usersList: []
};

BackendUsers.propTypes = {
    usersList: PropTypes.array
};

export default BackendUsers;
