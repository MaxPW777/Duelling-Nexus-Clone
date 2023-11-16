import React from 'react'

function LoginForm() {
    return (
        <form>
            <div className='formText'>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div className='formText'>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm