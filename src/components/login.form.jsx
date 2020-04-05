import React from 'react';
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form';

function LoginForm (props) {
    const { register, handleSubmit, errors } = useForm() ;

        return (
            <form id={'login-form'} onSubmit={handleSubmit((e) => props.authenticate(e))}>
                <div className="form-group">
                    <label htmlFor="login">Login</label>
                    <input name={'login'} type="input" className="form-control" id="login"
                           aria-describedby="loginHelp" placeholder="Enter login"
                           ref={register({required: "Login Required",  pattern: /^[A-Za-z]+$/i})}
                    />
                    <small id="loginError" className="form-text text-danger">
                        {errors.login && errors.login.message}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input name={'password'} type="password" className="form-control" id="password"
                           placeholder="Password"
                           ref={register({required: "Password Required",  pattern: /^[A-Za-z0-9]+$/i})}
                    />
                    <small id="loginError" className="form-text text-danger">
                        {errors.password && errors.password.message}
                    </small>
                </div>
                <button
                    className={'btn btn-lg  btn-primary mr-4'}
                    type={'submit'}
                >
                    Login
                </button>
                <Link  className={'btn btn-lg btn-light'} to={"/register"}>

                    Register User
                </Link>

            </form>
        );
}

export default LoginForm;