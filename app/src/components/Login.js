import React from 'react'
import { Input, makeStyles, Button } from '@material-ui/core'
import axiosWithAuth from '../utils/axiosWithAuth'

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

const initialLoginForm = {
    username: '',
    password: '',
}

const initialLoginError = {
    username: '', 
    password: '',
}

export default function Login() {

    const classes = useStyles();

    const login = e => {
        e.preventDefault();
        // axiosWithAuth();
        //     .post('/api/login', {
        //         username: state.credentials.username,
        //         password: state.credentials.password
        //     })
        //     .then(res => {
        //         console.log("Login -> res.data", res.data.payload)
        //         localStorage.setItem('token', res.data.payload)
        //         push('/protected')
        //     })
        //     .catch(err => console.log(err))
    }

    const state = {
        credentials: {
          username: '',
          password: ''
        }
    }

    return (
        <div>
            <form 
                className={classes.root} 
                noValidate 
                autoComplete="off"
                onSubmit={login}
            >
                <Input 
                    name='username'
                    placeholder='USERNAME'
                    type='text'
                    inputProps={{ 'aria-label': 'description' }}
                    className={classes.textField}
                />
                 <Input 
                    name='password'
                    placeholder='PASSWORD   '
                    type='password'
                    inputProps={{ 'aria-label': 'description' }}
                    className={classes.textField}

                />
                <Button>Log In</Button>
            </form>
        </div>
    )
} 