import LoginPage from "../pages/login/index.js";
import PassWord from "../pages/password/index.js";
import RegisterPage from "../pages/register/index.js";

export const routes = [
  {
    path: "/",
    component: <div>Home</div>,
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
