import './App.css'
import { Route, Routes } from 'react-router'
import LoginPage from './Pages/LoginPage'

function App() {
  return (
    <>
      {/* <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  )
}

export default App
