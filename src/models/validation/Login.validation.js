import * as yup from 'yup';

const LoginValidationSchema = yup.object({
  email: yup.string().email('It should be a valid email').required('Required'),
  password: yup.string().min(6, 'Min. 6 characters').required('Required')
});

export default LoginValidationSchema;
