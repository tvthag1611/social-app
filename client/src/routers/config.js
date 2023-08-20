import LoginPage from "../pages/login/index.js";

export const routes = [
  {
    path: "/",
    component: <div>Home</div>,
    isPrivate: true,
  },
  {
    path: "/login",
    component: <LoginPage />,
    isPrivate: false,
  },
  {
    path: "/register",
    component: <div>Register</div>,
    isPrivate: false,
  },
];
export default routes;
