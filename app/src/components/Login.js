import React from 'react'
import { Input, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
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


    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <Input 
                    name='username'
                    placeholder='USERNAME'
                    type='text'
                    inputProps={{ 'aria-label': 'description' }}
                />
                 <Input 
                    name='password'
                    placeholder='PASSWORD   '
                    type='password'
                    inputProps={{ 'aria-label': 'description' }}
                />
            </form>
        </div>
    )
}
