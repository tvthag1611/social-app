import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header-right">Socail Media App</h1>
        <div className="header-left">
            <ul className="header-left-name">
                <li>Home</li>
                <li>Not:</li>
                <li>Message</li>
                <li>Me</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header