import LoginPage from "../pages/login/index.js";
import PassWord from "../pages/password/index.js";
import RegisterPage from "../pages/register/index.js";
import ProfilePage from "../pages/profile/index.js";

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
  },
  {
    path: "/profile",
    component: <ProfilePage />,
    // isPrivate: true,
    notAuth: true,
  }
];
export default routes;
