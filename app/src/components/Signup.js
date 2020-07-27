import React, { useState, useEffect } from 'react'
import { Input, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

// const initialSignupForm = {
//     name: '',
//     email: '',
//     password: '',
// }
// const initialError = {
//     name: '',
//     email: '',
//     password: '',
// }


// const initialSignup = [];
// const initialDisabled = true;


export default function Signup() {

    const classes = useStyles();


    // const [data, setData] = useState(initialSignup)
    // const [signup, setSignup] = useState(initialSignupForm)
    // const [error, setError] = useState(initialError)
    // const [disabled, setDisabled] = useState(initialDisabled)

    // useEffect(() => {
    //     const postData = newData => {
    //         axios.post('', newData)
    //         .then(res => {
    //             setData([...data, res.data])
    //             setSignup(initialSignupForm)
    //         })
    //         .catch(err => {
    //             setSignup(initialSignupForm)
    //         })
    //     }
    // })

    // // cosnt inputChange = (name, value) => {
    // //     yup
    // //     .reach(formChema, name)
    // //     .validate(value)
    // //     .then(valid => {
    // //         setError({
    // //             ...error,
    // //             [name]: "",
    // //         })
    // //     })
    // //     .catch(err => {
    // //         setError({
    // //             ...error,
    // //             [name]: err.errors[0]
    // //         })
    // //     })
    // //     setSignup({
    // //         ...signup,
    // //         [name]: value
    // //     })
    // // }

    // const submit = () => {
    //     const newSignup = {
    //         name: signup.name.trim(),
    //         email: signup.email.trim(),
    //         password: signup.password.trim()
    //     }
    //     postData(newData)
    // }


    return (
        <form>
            <div className='form-group inputs'>
                <h4>Information</h4>

                    <Input
                        // value={values.name}
                        // onChange={onInputChange}
                        placeholder='NAME'
                        type='text'
                    />
                    <Input 
                        placeholder='USERNAME'
                        type='text'
                    /> 
                    <Input 
                        placeholder='EMAIL'
                        type='email'
                    />

                    <Input
                        // value={values.email}
                        // onChange={onInputChange}
                        placeholder='PHONENUMBER'
                        type='text'
                    />

                    <Input
                        type='password'
                        placeholder='PASSWORD'
                        // value={values.password}
                        // onChange={onInputChange}
                    />
            </div>
        </form>
    )
}
