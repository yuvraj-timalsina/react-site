import reactLogo from "../assets/react.svg";

function Header() {
    return (
        <header>
            <nav className="nav">
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo" alt="React Logo"/>
                </a>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;