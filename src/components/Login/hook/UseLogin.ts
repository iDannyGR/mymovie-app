import { useFormik } from 'formik';
import LoginValidationSchema from '@/models/validation/Login.validation.js';
import { loginRequest } from '@/api/auth'
export const useLogin = () => {

  type authData = {
    email: string;
    password: string;
  };

  const validateUser = useFormik({
  initialValues: {
    email: '',
    password: ''
  },
  validationSchema: LoginValidationSchema,
  onSubmit: async values => {
   const {email, password}:authData = values;
   const response = await loginRequest(email, password);
   console.log(response.status);
  }
});

return validateUser
}

// e: React.FormEvent<HTMLElement>
