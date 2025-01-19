import React from 'react'

const Form1 = () => {
    return (
        <main id="Form1">
            <section className="login-box">
                <div className="login-header">
                    <span>Login</span>
                </div>
                <div className="input-box">
                    <input type="text" name="" id="user" className="input-field" required />
                    <label htmlFor="user" className="label">Username</label>
                </div>
                <div className="input-box">
                    <input type="password" name="" id="pass" className="input-field" required />
                    <label htmlFor="pass" className="label">Password</label>
                </div>
                <div className="remember-forgot">
                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember"> Remember me</label>
                    </div>
                    <div className="forgot">
                        <a href="/form1">Forgot password?</a>
                    </div>
                </div>
                <div className="input-box">
                    <input type="submit" value="Login" className="input-submit" />
                </div>
                <div className="register">
                    <span>Don't have an account?
                        <a href="/form1"> Register</a>
                    </span>
                </div>
            </section>
        </main>
    )
}

export default Form1;