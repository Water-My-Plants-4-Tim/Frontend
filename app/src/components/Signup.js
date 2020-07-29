import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './formSchema'
import { Input, makeStyles, Button, FormHelperText, Typography, Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textField: {
        width: '40ch',
        display: 'flex',

    }
}));

const initialSignupForm = {
    username: "",
    password: "",
}
const initialError = {
    username: "",
    password: "",
}


const initialSignup = [];
const initialDisabled = true;


export default function Signup() {

    const classes = useStyles();

    const { location, push } = useHistory(); 

    const [data, setData] = useState(initialSignup)
    const [signup, setSignup] = useState(initialSignupForm)
    const [error, setError] = useState(initialError)
    const [disabled, setDisabled] = useState(initialDisabled)

    const postData = newData => {
        console.log(newData, 'testing new data')
        axios.post('https://cors-anywhere.herokuapp.com/https://elton-watermyplants.herokuapp.com/createnewuser', newData)
            .then(res => {
                console.log(res.data, 'res test')
                setData([...data, res.data])
                setSignup(initialSignupForm)
                push('/login')
                
            })
            .catch(err => {
                console.dir(err)
                setSignup(initialSignupForm)
            })
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

    const handleChange = e => {
        validateInput(e.target.name, e.target.value)
        setSignup({
            ...signup,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        const newSignup = {
            username: signup.username.trim(),
            password: signup.password.trim()
        }
        console.log(newSignup, 'test')
        postData(newSignup)
    }

    useEffect(() => {
        formSchema.isValid(signup).then(valid => {
            setDisabled(!valid)
        })
    }, [signup])

    return (
        <div className={classes.root}>
            <form onSubmit={submit}>            
                <h4>Information</h4>

                <div className='error'>
                    <div>{error.username}</div>
                    <div>{error.password}</div>
                </div>

            <label>Username
                <Input
                    className={classes.textField}
                    placeholder='USERNAME'
                    name='username'
                    type='text'
                    onChange={handleChange}
                />
            </label>

            <label>Password
                <Input
                    type='password'
                    placeholder='PASSWORD'
                    name='password'
                    className={classes.textField}
                    onChange={handleChange}
                />
            </label>
            <Button disabled={disabled} type="submit">Sign Up</Button>
            </form>
        <Typography>Already have an account?</Typography>
        <Link href='/login'>Log In</Link>
        </div>
    )
}

// random text for push