import {useState} from "react"
import Main from "./components/Main.jsx"
import Navbar from "./components/Navbar.jsx"
function App() {
  const [darkMode, setDarkMode] = useState(true)
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  )
}

export default App
