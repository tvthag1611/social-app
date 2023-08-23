import { useFormik } from "formik";
import Button from "../../components/Button/index.js";
import Input from "../../components/login/Input/index.js";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/authService";

const authService = new AuthService();

const RegisterPage = () => {
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const register = await authService.register({
        fullname: values.fullname || "",
        email: values.email || "",
        password: values.password || "",
      });
      if (register.status === 200) {
        alert("Đăng kí thành công");
        navigate("/login");
      }
    },
  });

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100">
      <div className="w-[400px] bg-white rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <h1 className="font-bold text-xl text-center mb-4">Đăng ký</h1>
          <Input
            type="text"
            name="fullname"
            placeholder="Full name"
            className="mb-4"
            onChange={handleChange}
            value={values.fullname}
          />
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
            Bạn đã có tài khoản chưa,{" "}
            <Link to="/login" className="text-blue-500">
              Đăng nhập
            </Link>
          </div>
          <Button type="submit">Sign up</Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
