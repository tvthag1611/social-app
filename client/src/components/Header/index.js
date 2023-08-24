import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-4">
            <h1 className="mr-auto text-2xl">Social Media App</h1>
            <nav>
                <Link to="#" className="ml-4">
                    Home
                </Link>
                <Link to="#" className="ml-4">
                    Noti
                </Link>
                <Link to="#" className="ml-4">
                    Message
                </Link>
                <Link to="#" className="ml-4">
                    Me
                </Link>
            </nav>
        </header>
    );
}
