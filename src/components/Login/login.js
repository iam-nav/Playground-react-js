import React from 'react'
import '../Login/login.css'

function Login() {
    return (
        <div className="content">
            <h1 className="header">Login</h1>
            <div className="login-card">
            <input type="text" placeholder="username" className="input"></input><br />
            <input type="password" placeholder="password" className="input"></input><br />
            <button className="btn">Login</button>
            </div>
        </div>
    )
}

export default Login
