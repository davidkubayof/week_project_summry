import './App.css'
import { Route, Routes } from 'react-router'
import LoginPage from './Pages/LoginPage'
import DashboardPage from './Pages/DashboardPage'
import ProtectedRoute from './Components/ProtectedRoute'

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
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  )
}

export default App
