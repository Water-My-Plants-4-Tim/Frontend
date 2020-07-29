import React, { useState, setState } from 'react'
import { Input, makeStyles, Button } from '@material-ui/core'
import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'

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

const Login = props => {

    const classes = useStyles();
    const [credentials, setCredentials] = useState({username: '', password: ''});
    
   
    const handleChange = e => {
        setCredentials({
            credentials: {
                ...credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const login = e => {
        e.preventDefault();

            axios.post('https://cors-anywhere.herokuapp.com/https://elton-watermyplants.herokuapp.com/login', `grant_type=password&username=${credentials.username}&password=${credentials.password}`, {
            headers: {
                // btoa is converting our client id/client secret into base64
                Authorization: `Basic ${btoa('OAUTHCLIENTID:OAUTHCLIENTSECRET')}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            })
            .then(res => {
                console.log("Login -> res.data", res.data.payload)

                localStorage.setItem('token', res.data.access_token);
                props.history.push('/');
            })
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
                    onChange={handleChange}
                    value={credentials.username}

                />
                 <Input 
                    name='password'
                    placeholder='PASSWORD   '
                    type='password'
                    inputProps={{ 'aria-label': 'description' }}
                    className={classes.textField}
                    onChange={handleChange}
                    value={credentials.username}


                />
                <Button type='submit'>Log In</Button>
            </form>
        </div>
    )
} 
export default Login