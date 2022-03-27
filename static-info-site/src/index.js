import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import reactLogo from "../src/images/react-logo.png"

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <img className="nav-logo" src={reactLogo} width="40px" />
                <ul className="nav-items">
                    <li>Videos</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Body() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
            <li>Spice up my resume with an in demand skill</li>
                <li>learn javascript by proxy</li>
                <li>can finally complete project that requires react to function</li>
                <li>money</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <small className="footerText">© 2022 Dervan development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))