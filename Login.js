import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {

const navigate = useNavigate();

function handleClick (){
    
navigate("/dashboard")
}

    return (
<div className="auth-form-container">
<h2>Login</h2>
<form className="login-form">
    <label htmlFor="email">Email</label>
    <input type="email" id="email"/>
    <label htmlFor="password">Password</label>
    <input type="password" id="password"/>
    
    <button className="link-btn" onClick={handleClick}>Submit</button>
</form>
</div>
    );
}

export default Login;