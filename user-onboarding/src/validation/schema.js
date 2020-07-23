import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Email is Required"),
    password: yup
      .string()
      .min(3, 'Password must be at least 3 characters')
      .required('Password is required'),
    terms: yup
      .bool()
      .oneOf([true], "You must agree with the terms of services")
  })
  
  export default formSchema
  

