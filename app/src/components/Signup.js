import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'

const initialSignupForm = {
    name: '',
    email: '',
    password: '',
}
const initialError = {
    name: '',
    email: '',
    password: '',
}


const initialSignup = [];
const initialDisabled = true;


export default function Signup() {

    const [data, setData] = useState(initialSignup)
    const [signup, setSignup] = useState(initialSignupForm)
    const [error, setError] = useState(initialError)
    const [disabled, setDisabled] = useState(initialDisabled)

    useEffect(() => {
        const postData = newData => {
            axios.post('', newData)
            .then(res => {
                setData([...data, res.data])
                setSignup(initialSignupForm)
            })
            .catch(err => {
                setSignup(initialSignupForm)
            })
        }
    })

    // cosnt inputChange = (name, value) => {
    //     yup
    //     .reach(formChema, name)
    //     .validate(value)
    //     .then(valid => {
    //         setError({
    //             ...error,
    //             [name]: "",
    //         })
    //     })
    //     .catch(err => {
    //         setError({
    //             ...error,
    //             [name]: err.errors[0]
    //         })
    //     })
    //     setSignup({
    //         ...signup,
    //         [name]: value
    //     })
    // }
    
    const submit = () => {
        const newSignup = {
            name: signup.name.trim(),
            email: signup.email.trim(),
            password: signup.password.trim()
        }
        postData(newData)
    }


    return (
        <div className ="App">
            <header><h2>Signup Now!</h2></header>
            <form>
                <input />
            </form>
        </div>
    )
}
