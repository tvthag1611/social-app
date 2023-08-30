import { useFormik } from "formik";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/authService";
import { Input, Button, Form, message, Card, Row } from "antd";
import "./login.css";

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
          message.success("Đăng nhập thành công");
          navigate("/");
        }
      } catch (error) {
        message.error(error.response.data.message || "Error");
      }
    },
  });

  return (
    <Row justify="center" align="middle" className="login-container">
      <Card className="login-wrapper">
        <Form onSubmitCapture={handleSubmit} layout="vertical">
          <h1 className="">Đăng nhập</h1>
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
            Nếu bạn chưa có tài khoản, <Link to="/register">Đăng kí</Link>
          </div>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form>
      </Card>
    </Row>
  );
};

export default LoginPage;
