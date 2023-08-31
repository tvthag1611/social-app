import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./index.css";

const { Header } = Layout;

export default function AppHeader() {
    const menuItems = [
        { key: "1", name: "Home", link: "/" },
        { key: "2", name: "Noti", link: "#" },
        { key: "3", name: "Message", link: "#" },
        { key: "4", name: "Me", link: "#" },
    ];

    const location = useLocation();

    return (
        <Header className="app-header">
            <h1>Social Media App</h1>
            <Menu
                className="menu"
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                selectedKeys={[location.pathname]}
            >
                {menuItems.map((item) => (
                    <Menu.Item key={item.key}>
                        <Link to={item.link}>{item.name}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </Header>
    );
}
