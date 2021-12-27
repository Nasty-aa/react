import React from "react";
import {Link, useHistory} from 'react-router-dom';
import {TextField, Button} from '@mui/material';
import {useState} from 'react';
import {auth} from '../services/firebase';

function SignupOrLogin({title, buttonTitle, linktoLogin, text}) {
    const {push} = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            if(buttonTitle === 'Зарегистрироваться')
            {
                await auth.createUserWithEmailAndPassword(email, password);
            } else {
                await auth.signInWithEmailAndPassword(email, password);
            }
            push('/Profile');
        } catch (error) {
            setError(error.message);
        }
    }

    return(
        <div>
            {error && <p>{error.toString()}</p>}
            <form onSubmit={handleSubmit} className="signUp_form">
                <h2 className="signUp_form_h2">{title}</h2>
                    <TextField 
                        placeholder="Email"
                        name="email"
                        type="email"
                        onChange={handleEmailChange}
                        value={email}
                        /> 
                    <TextField 
                        placeholder="Password"
                        name="password"
                        type="password"
                        onChange={handlePassChange}
                        value={password}
                        /> 
                    <Button type="submit">{buttonTitle}</Button>
            </form>
            <h4 className="signUp_form_h4">
                {text} <Link to="/login" className="header_links_a">{linktoLogin}</Link>
            </h4>
        </div>
    )
}

export default SignupOrLogin;