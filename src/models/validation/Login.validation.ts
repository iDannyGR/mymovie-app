import * as yup from 'yup';

const LoginValidationSchema = yup.object({
  email: yup.string().email('It should be a valid email').required('field required'),
  password: yup.string().min(6, 'Min. 6 characters').required('field required')
});

export default LoginValidationSchema;
