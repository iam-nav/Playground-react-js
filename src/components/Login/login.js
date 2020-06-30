import React from 'react'
import '../Login/login.css'

function Login() {
    return (
        <div className="content">
            <h1 className="header">Login</h1>
            <div className="login-card">
            <input type="text"  className="input1"></input><br />
            <label className="User_label">Username</label>
            <input type="password"  className="input2"></input><br />
            <label className="label" >Password</label>
            <button className="btn">Login</button>
            </div>
        </div>
    )
}

export default Login
