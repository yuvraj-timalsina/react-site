import reactLogo from "../assets/react.svg"

function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={reactLogo} alt="React Logo" className="nav-icon" />
            </a>
            <h3 className="nav-logo-text">React Facts</h3>
            <div
                className="toggler"
            >
                <p className="toggler-light">Light</p>
                <div
                    className="toggler-slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler-slider-circle"></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>
        </nav>
    )
}

export default Navbar