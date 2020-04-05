import React, {Component} from "react";
import auth from "./auth";
import LoginForm from './login.form'

class LandingPage extends Component{
    state = {
        login: '',
        password: ''
    };

    authenticate(data) {
        auth.login(data, e => {
            this.props.history.push('/')
        });
    }

    render(){
        return (
            <div className={'container'}>
                <h3>Landing Page</h3>
                <LoginForm authenticate = {e => this.authenticate(e)} action={'login'} />
            </div>
        );
    }
}

export default LandingPage
