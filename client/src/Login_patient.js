import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { Redirect, useHistory } from 'react-router-dom';
import Nav from './Nav'
function Login_patient() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;
    const type = localStorage.getItem('type');
    // console.log(type);

    useEffect(() => {

        const token = localStorage.getItem('token');
        console.log(token);
        if (token != null) {
            history.push('/patient_dashboard');
        }
    }, []);





    function Handle(data) {

        if (email.length === 0 || password.length === 0) {
            alert('Fill all the details CORRECTLY..')
        }
        else {

            let data1 = { email: email, password: password };

            Axios.post('http://localhost:3001/login/patient', data1).then((resp) => {
                console.log(resp.data.result);
                if (!resp.data.auth) { setLoginStatus(false); alert('Invalid details'); }
                else {

                    setLoginStatus(true);
                    const id = resp.data.result[0].pid;
                    console.log("id", id);
                    //     const id=resp.data.id;
                    // console.log("id in login pat",id);
                    localStorage.setItem("type", "patient");
                    localStorage.setItem("id", id);
                    localStorage.setItem("token", resp.data.token);
                    localStorage.setItem("user", email);

                    userAuthenticated();
                    history.push('/patient_dashboard');
                }

            })


        }

        data.preventDefault();
    }

    const userAuthenticated = () => {
        Axios.get("http://localhost:3001/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {

        });
    }
    function EmailHandler(e) {
        let email = e.target.value;

        setEmail(email);

    }
    function PasswordHandler(e) {
        let p = e.target.value;

        setPassword(p);

    }



    return (
        <div className="auth-wrapper">

            <div className="auth-inner">
                <Nav type={type} />
                <form onSubmit={Handle}>
                    <h3>Sign In</h3>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type='email' className="form-control" placeholder='Enter email id..' value={email} onChange={EmailHandler} />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type='password' className="form-control" placeholder='Enter password..' value={password} onChange={PasswordHandler} />
                    </div>
                    <button className="btn btn-primary">Login</button>

                </form>
            </div>
        </div>
    )
}

export default Login_patient;
