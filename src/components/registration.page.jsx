import React, {Component} from "react";
import auth from "./auth";
import RegistrationForm from "./registration.form";

class RegistrationPage extends Component{
    state = {
        login: '',
        password: ''
    };

    constructor(props) {
        super(props);
    }

    registerUser(data) {
        auth.register(data, (e) => {debugger
            this.props.history.push("/documents");
            console.log('successfully registered')
        });
    }

    render(){
        return (
            <div className={'container'}>
                <h3>Registration</h3>
                <RegistrationForm
                    registerUser = {(e) => this.registerUser(e)}
                />
            </div>
        );
    }
}

export default RegistrationPage
