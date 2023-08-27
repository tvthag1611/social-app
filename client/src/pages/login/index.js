// import { useFormik } from "formik";
// import { useContext } from "react";
// import AuthContext from "../../contexts/AuthContext/AuthContext";
// import { Link, useNavigate } from "react-router-dom";
// import AuthService from "../../services/authService";
// import { Input, Button, Form, message } from "antd";

// const authService = new AuthService();

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const { handleLogin } = useContext(AuthContext);

//   const { handleSubmit, handleChange, values } = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     onSubmit: async (values) => {
//       try {
//         const response = await authService.login(values);
//         if (response.status === 200) {
//           localStorage.setItem("accessToken", response?.data?.accessToken);
//           await handleLogin(values);
//           message.success("Đăng nhập thành công");
//           navigate("/");
//         }
//       } catch (error) {
//         message.error(error.response.data.message || "Error");
//       }
//     },
//   });

//   return (
//     <div className="flex justify-center items-center w-full h-screen bg-gray-100">
//       <div className="w-[400px] bg-white rounded-lg p-6">
//         <Form onSubmitCapture={handleSubmit} layout="vertical">
//           <h1 className="font-bold text-xl text-center mb-4">Đăng nhập</h1>
//           <Form.Item label="Email">
//             <Input
//               type="text"
//               name="email"
//               placeholder="Email"
//               className="mb-4"
//               onChange={handleChange}
//               value={values.email}
//             />
//           </Form.Item>
//           <Form.Item label="Password">
//             <Input
//               type="password"
//               name="password"
//               placeholder="Password"
//               className="mb-4"
//               onChange={handleChange}
//               value={values.password}
//             />
//           </Form.Item>
//           <div>
//             Nếu bạn chưa có tài khoản, <Link to="/register">Đăng kí</Link>
//           </div>
//           <Button type="primary" htmlType="submit">
//             Login
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const index = () => {
  return (
    <div className='login-page'>
      <div className='login-container'>
        <h1>LOGIN</h1>

        <form className='login-form'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='text'
            placeholder='Enter your email'
          />
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            placeholder='Enter your password'
          />
          <button type='submit'>Login</button>

          <Link to='/register'>Register now</Link>
        </form>
      </div>
    </div>
  );
};

export default index;
