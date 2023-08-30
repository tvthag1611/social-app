import LoginPage from "../pages/login/index.js";
import PassWord from "../pages/password/index.js";
import RegisterPage from "../pages/register/index.js";
import HomePage from "../pages/home/Home.js";

export const routes = [
  {
    path: "/",
    component: <HomePage />,
    isPrivate: true,
  },
  {
    path: "/login",
    component: <LoginPage />,
    notAuth: true,
  },
  {
    path: "/register",
    component: <RegisterPage />,
    notAuth: true,
  }
];
export default routes;
