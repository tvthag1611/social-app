import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/authService";
import { Input, Button, Form, message } from "antd";

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
      if (register.status === 201) {
        message.success("Đăng kí thành công");
        navigate("/login");
      }
    },
  });

  return (
    <div>
      <div>
        <Form onSubmitCapture={handleSubmit} layout="vertical">
          <h1>Đăng ký</h1>
          <Form.Item label="Fullname">
            <Input
              type="text"
              name="fullname"
              placeholder="Full name"
              onChange={handleChange}
              value={values.fullname}
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={values.email}
            />
          </Form.Item>
          <Form.Item label="Password">
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
            />
          </Form.Item>
          <div>
            Bạn đã có tài khoản chưa, <Link to="/login">Đăng nhập</Link>
          </div>
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
