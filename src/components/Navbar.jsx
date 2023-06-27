import reactLogo from "../assets/react.svg";

function Navbar() {
    return (
            <nav className="nav">
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo}     alt="React Logo" className="nav-icon"/>
                </a>
                <h3 className="nav-logo-text">React Facts</h3>
                <h4 className="nav-title">React Course - Static Site</h4>
            </nav>
    );
}

export default Navbar;