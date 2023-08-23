import { useFormik } from "formik";
import { useContext } from "react";
import Button from "../../components/Button/index.js";
import Input from "../../components/login/Input/index.js";
import AuthContext from "../../contexts/AuthContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/authService";

const authService = new AuthService();

const LoginPage = () => {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await authService.login(values);
        if (response.status === 200) {
          localStorage.setItem("accessToken", response?.data?.accessToken);
          await handleLogin(values);
          alert("Đăng nhập thành công");
          navigate("/");
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100">
      <div className="w-[400px] bg-white rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <h1 className="font-bold text-xl text-center mb-4">Đăng nhập</h1>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            className="mb-4"
            onChange={handleChange}
            value={values.email}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            className="mb-4"
            onChange={handleChange}
            value={values.password}
          />
          <div className="mb-4">
            Nếu bạn chưa có tài khoản,{" "}
            <Link to="/register" className="text-blue-500">
              Đăng kí
            </Link>
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
