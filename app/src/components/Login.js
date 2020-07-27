import React from 'react'


const initialLoginForm = {
    username: '',
    password: '',
}

const initialLoginError = {
    username: '', 
    password: '',
}

export default function Login() {

    return (
        <div>
            <form>
                <label>username
                    <input 
                    name='username'
                    type='text'
                    />
                </label>
                <label>password
                    <input 
                    name='password'
                    type='text'
                    />
                </label>
            </form>
        </div>
    )
} 