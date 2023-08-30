import { Button, Input } from "antd";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PassWord = () => {
  const navigate = useNavigate();
  //   const { handleLogin } = useContext(AuthContext);

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      //   try {
      //     const response = await AuthService.login(values);
      //     if (response.status === 200) {
      //       localStorage.setItem("accessToken", response?.data?.accessToken);
      //       await handleLogin(values);
      //       alert("Đăng nhập thành công");
      //       navigate("/");
      //     }
      //   } catch (error) {
      //     alert(error.response.data.message);
      //   }
      console.log(values);
    },
  });
  return (
    <div>
      <div className="flex justify-center items-center w-full h-screen bg-gray-100">
        <div className="w-[400px] bg-white rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <h1 className="font-bold text-xl text-center mb-4">
              Thay đổi mật khẩu
            </h1>
            <Input
              type="password"
              name="Current Password"
              placeholder="Current Password"
              className="mb-4"
              onChange={handleChange}
              value={values.currentPassword}
            />
            <Input
              type="password"
              name="New Password"
              placeholder="New Password"
              className="mb-4"
              onChange={handleChange}
              value={values.newPassword}
            />
            <Input
              type="password"
              name="Confirm Password"
              placeholder="Confirm Password"
              className="mb-4"
              onChange={handleChange}
              value={values.confirmPassword}
            />

            <Button type="submit">Save</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PassWord;
