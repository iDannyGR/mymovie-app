import React from 'react';
import userLogo from '@/assets/img/user.svg';
import { useLogin } from './hook/UseLogin';

const LoginForm = () => {

 const { handleSubmit, handleBlur, handleChange, errors, touched, values } = useLogin();

   return (
     <div className="z-50 flex flex-col h-[100vh] w-full items-center justify-center">
       <h1 className="font-extrabold text-3xl mb-20 text-blue-900"> Please Login !!</h1>
       <img src={userLogo} alt="" className="h-32 mb-10" />
       <form onSubmit={handleSubmit}>
         <label className="font-semibold mt-6">Username or Email</label>
         <input
           className="flex items-center h-12 px-4 w-64 mt-2 mb-7 rounded border shadow-lg border-blue-900 focus:outline-none focus:ring-2"
           type="text"
           value={values.email}
           name="email"
           onChange={handleChange}
           onBlur={handleBlur}
           aria-required
         />
         {touched.email && errors.email ? <p className="text-red-500 m-0">{errors.email}</p> : null}
         <label className="font-semibold mt-63 mt-3">Password</label>
         <input
           className="flex items-center h-12 px-4 w-64 mt-2 mb-7 rounded border shadow-lg border-blue-900 focus:outline-none focus:ring-2"
           type="password"
           value={values.password}
           name="password"
           onChange={handleChange}
           aria-required
         />
         {touched.password && errors.password ? (
           <p className="text-red-500 m-0">{errors.password}</p>
         ) : null}
         <button
           className="flex items-center justify-center h-12 px-6 w-64 shadow-md shadow-slate-700 bg-blue-800 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"
           type="submit"
         >
           Login
         </button>
       </form>
  </div>
   );
};

export default LoginForm;




