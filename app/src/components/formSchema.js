import * as yup from 'yup'

const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Userame is Required"),
  password: yup
    .string()
    .min(3, "Password must be at least 3 characters long")
    .required("Please enter a password"),
})

export default formSchema