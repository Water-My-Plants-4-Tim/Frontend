import React, { useState, useEffect } from 'react'


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

                <label> Name&nbsp;
                    <input
                        // value={values.name}
                        // onChange={onInputChange}
                        name='name'
                        type='text'
                    />
                </label>
                <label>Username
                    <input 
                    name='username'
                    type='text'
                    /> 
                </label>
                <label>Email
                    <input 
                    name='email'
                    type='email'
                    />
                </label>

                <label>Phonenumber
                    <input
                        // value={values.email}
                        // onChange={onInputChange}
                        name='phonenumber'
                        type='text'
                    />
                </label>

                <label>Password
                    <input
                        type='text'
                        name='password'
                        // value={values.password}
                        // onChange={onInputChange}
                    />
                </label>
            </div>
        </form>
    )
}
