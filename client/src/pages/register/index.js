import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";
import Input from "../../components/login/Input";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/authService";

const authService = new AuthService();

const formikConfig = {
    initialValues: {
        fullname: "",
        password: "",
        confirmPassword: "",
    },
    validationSchema: Yup.object({
        fullname: Yup.string().required("Full name is required"),
        password: Yup.string().required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm password is required"),
    }),
    onSubmit: async (values) => {
        // const register = await authService.register({
        //     fullname: values.fullname || "",
        //     password: values.password || "",
        // });
        // if (register.status === 200) {
        //     alert("Đăng kí thành công");
        // }
        alert("Registered!");
    },
};

const RegisterPage = () => {
    const { handleSubmit, handleChange, values, errors, touched } =
        useFormik(formikConfig);

    return (
        <div className="flex justify-center items-center w-full h-screen bg-gray-100">
            <div className="w-[400px] bg-white rounded-lg p-6">
                <form onSubmit={handleSubmit}>
                    <h1 className="font-bold text-xl text-center mb-4">
                        Social Media App
                    </h1>
                    <Input
                        type="text"
                        name="fullname"
                        placeholder="Username ..."
                        className="mb-4"
                        onChange={handleChange}
                        value={values.fullname}
                        error={errors.fullname && touched.fullname}
                        helperText={touched.fullname && errors.fullname}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password ..."
                        className="mb-4"
                        onChange={handleChange}
                        value={values.password}
                        error={errors.password && touched.password}
                        helperText={touched.password && errors.password}
                    />
                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password ..."
                        className="mb-4"
                        onChange={handleChange}
                        value={values.confirmPassword}
                        error={
                            errors.confirmPassword && touched.confirmPassword
                        }
                        helperText={
                            touched.confirmPassword && errors.confirmPassword
                        }
                    />
                    <div className="flex justify-center">
                        <Button
                            type="submit"
                            className="w-30 text-black border-2 bg-transparent hover:text-black hover:bg-transparent hover:border-black"
                        >
                            Register
                        </Button>
                    </div>
                    <div className="mb-4 mt-4 flex justify-center">
                        <Link to="/login" className="text-blue-500 ">
                            Back to login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
