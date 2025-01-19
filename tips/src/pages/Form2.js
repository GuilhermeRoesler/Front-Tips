import React from 'react'

const Form2 = () => {
    return (
        <main id="Form2">
            <section className="container">
                <i></i>
                <i></i>
                <i></i>
                <div className="login">
                    <h2>Login</h2>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" value="Sign in" />
                    <div className="links">
                        <a href="/form2">Forget Password</a>
                        <a href="/form2">Signup</a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Form2;