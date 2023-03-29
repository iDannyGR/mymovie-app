import { useFormik } from 'formik';
import LoginValidationSchema from '@/models/validation/Login.validation.js';
// import { loginRequest } from '@/api/auth'
export const useLogin = () => {

  const validateUser = useFormik({
  initialValues: {
    email: '',
    password: ''
  },
  validationSchema: LoginValidationSchema,
  onSubmit: values =>{
     console.log(values)
  } ,
});

return validateUser
}

// e: React.FormEvent<HTMLElement>
