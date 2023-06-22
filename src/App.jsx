import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
          <h1>Fun facts about React</h1>
          <ul>
              <li>Released in 2013</li>
              <li>Created by Jordan Walke</li>
              <li>Over 100K stars in GitHub</li>
              <li>Maintained by Facebook</li>
              <li>Powers thousands of Enterprise apps & Mobile Apps</li>
          </ul>
      </div>
    </>
  )
}

export default App
