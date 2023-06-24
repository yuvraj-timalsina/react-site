import reactLogo from "../assets/react.svg";

function Header() {
    return (
        <div>
            <header>
                <nav>
                    <a href="https://react.dev" target="_blank" rel="noreferrer">
                        <img src={reactLogo} className="logo react" alt="React logo" width="45" />
                    </a>
                </nav>
            </header>
        </div>
    );
}

export default Header;