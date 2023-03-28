import { useFormik } from 'formik';
import LoginValidationSchema from '../../../models/validation/Login.validation.js';
import { InferType } from 'yup';

const loginData = (values) => {
    console.log(values);
}

export const Formik = useFormik({
  initialValues: {
    email: '',
    password: ''
  },
  onSubmit: loginData,
  validationSchema: LoginValidationSchema
});
