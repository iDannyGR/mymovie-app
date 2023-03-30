import { useFormik } from 'formik';
import LoginValidationSchema from '@/models/validation/Login.validation.js';
import { loginRequest } from '@/api/auth'
import {  authStore } from '@/store/authStore'

export const useLogin = () => {

  const setState = authStore((state) => state.setToken);

  const validateUser = useFormik({
  initialValues: {
    email: '',
    password: ''
  },
  validationSchema: LoginValidationSchema,
  onSubmit: async values => {
   
   const { email, password } = values;
   const { token, status } = await loginRequest(email, password); 

   status === 200 ? setState(token, email) : console.log('data error')
  }
});

return validateUser
}

// e: React.FormEvent<HTMLElement>
