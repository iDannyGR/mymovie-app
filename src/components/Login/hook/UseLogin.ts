import { useFormik } from 'formik';
import LoginValidationSchema from '@/models/validation/Login.validation.js';
import { loginRequest } from '@/api/auth';
import {  authStore } from '@/store/authStore';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {

  const setState = authStore((state) => state.setToken);
   const navigate = useNavigate()

  const { handleSubmit, handleBlur, handleChange, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginValidationSchema,
    onSubmit: async (values) => {
      const { email, password } = values;
      const { token, status } = await loginRequest(email, password);
      if (status === 200) {
        setState(token, email);
        navigate('home');
      }
    }
  });

return { handleSubmit, handleBlur, handleChange, errors, touched };
}

// e: React.FormEvent<HTMLElement>
