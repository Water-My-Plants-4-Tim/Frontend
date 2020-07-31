import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Input, makeStyles, Button } from '@material-ui/core'
import axios from 'axios'
import formSchema from './formSchema'
import * as yup from 'yup'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'solid',
        margin: '275px',
    },
    textField: {
        width: '40ch',
        display: 'flex',

    }
}));

const initialLoginForm = {
    username: '',
    password: '',
}

const initialLoginError = {
    username: '',
    password: '',
}

const initialLogin = []
const initialDisabled = true;

export default function Login() {

    const classes = useStyles();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [data, setData] = useState(initialLogin)
    const [login, setLogin] = useState(initialLoginForm)
    const [error, setError] = useState(initialLoginError)
    const [disabled, setDisabled] = useState(initialDisabled)
    const { push } = useHistory()



    // const loginData = e => {
    //     e.preventDefault();

    //     axiosWithAuth()
    //         .post('https://water-my-pants.herokuapp.com/auth/login', {
    //             username: state.credentials.username,
    //             password: state.credentials.password
    //         })
    //         .then(res => {
    //             console.log('res test', res)
    //             console.log("Login -> res.data", res.data.payload)
    //             localStorage.setItem('token', res.data.payload)
    //             push('/protected')
    //         })
    //         .catch(err => console.log(err))
    // }



    const state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    
    const validateInput = (name, value) => {
        yup
            .reach(formSchema, name)
            .validate(value)
            .then(valid => {
                setError({
                    ...error,
                    [name]: "",
                })
            })
            .catch(err => {
                console.log(err)
                setError({
                    ...error,
                    [name]: err.errors[0]
                })
            })

    }

    // const info = (props) => {
    //     const [credentials, setCredentials] = useState({ username: '', password: '' });
    //     const login = e => {
    //         console.log('testing', e)
    //         e.preventDefault();
    //         axios.post('https://elton-watermyplants.herokuapp.com/login', `grant_type=password&username=${credentials.username}&password=${credentials.password}`, {
    //             headers: {
    //                 // btoa is converting our client id/client secret into base64
    //                 Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
    //                 'Content-Type': 'application/x-www-form-urlencoded'
    //             }
    //         })
    //             .then(res => {
    //                 localStorage.setItem('token', res.data.token);
    //                 props.history.push('/');
    //             })
    //     }
    // }

    const handleChange = e => {
        validateInput(e.target.name, e.target.value)
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
        console.log(login, 'login test')
    }




    const submit = (e) => {
        e.preventDefault()
        const logging = {
            username: login.username.trim(),
            password: login.password.trim()
        }
        axiosWithAuth()
            .post('/api/auth/login', logging)
            .then(res => {
                console.log('res test', res)

                console.log("Login -> res.data", res.data.payload)
                localStorage.setItem('token', res.data.token)
                push('/protected')
            })
            .catch(err => console.log(err))

        console.log(logging, 'logging in')
    }

    // https://cors-anywhere.herokuapp.com/



    useEffect(() => {
        formSchema.isValid(login).then(valid => {
            setDisabled(!valid)
        })
    }, [login])

    return (
        <div>
            <h3>Login Page</h3>
            <form
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={submit}
            >
                <label>Username
                <Input
                        name='username'
                        placeholder='USERNAME'
                        type='text'
                        // inputProps={{ 'aria-label': 'description' }}
                        className={classes.textField}
                        onChange={handleChange}
                    />
                </label>
                <label>Password
                 <Input
                        name='password'
                        placeholder='PASSWORD   '
                        type='password'
                        // inputProps={{ 'aria-label': 'description' }}
                        className={classes.textField}
                        onChange={handleChange}
                    />
                </label>
                <Button type='submit'>Log In</Button>
            </form>
        </div>
    )
}
// export default Login