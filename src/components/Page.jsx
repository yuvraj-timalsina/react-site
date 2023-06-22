import reactLogo from "../assets/react.svg";

function Page() {
    return (
            <>
               <header>
                   <nav>
                       <a href="https://react.dev" target="_blank" rel="noreferrer">
                           <img src={reactLogo} className="logo react" alt="React logo" width="45" />
                       </a>
                   </nav>
               </header>
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