import { useFormik } from "formik";
import { useContext } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import AuthContext from "../../contexts/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const login = await handleLogin(values);
      if (login) {
        alert("Đăng nhập thành công");
        navigate("/");
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
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
