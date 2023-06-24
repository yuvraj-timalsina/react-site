import reactLogo from "../assets/react.svg";
import Header from "./Header.jsx";

function Page() {
    return (
            <>
              <Header/>
                <h1>Fun facts about React</h1>
                <ol>
                    <li>Released in 2013</li>
                    <li>Created by Jordan Walke</li>
                    <li>Over 100K stars in GitHub</li>
                    <li>Maintained by Facebook</li>
                    <li>Powers thousands of Enterprise apps & Mobile Apps</li>
                </ol>
                <footer>
                    <small>© 2023 Yv. All rights reserved.</small>
                </footer>
            </>
    );
}

export default Page;