import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthContext/AuthProvider.js";
import routes from "./routers/config.js";
import NotAuthRoute from "./routers/NotAuthRoute";
import PrivateRoute from "./routers/PrivateRoute";
import Header from "./components/Header";

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <div className="app">
                    <Header />
                    <Routes>
                        {routes.map((route, index) => {
                            const { path, component, isPrivate, notAuth } =
                                route;
                            return (
                                <Route
                                    key={index}
                                    path={path}
                                    element={
                                        isPrivate ? (
                                            <PrivateRoute
                                                component={component}
                                            />
                                        ) : notAuth ? (
                                            <NotAuthRoute
                                                component={component}
                                            />
                                        ) : (
                                            component
                                        )
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
