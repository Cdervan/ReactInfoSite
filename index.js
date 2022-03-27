function Page() {
    return (
        <div>
            <img src="./react-logo.png" width="100"></img>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <img className="nav-logo" src="./react-logo.png" width="40px" />
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
