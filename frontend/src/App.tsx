import './App.css'
import { Route, Routes } from 'react-router'
import LoginPage from './Pages/LoginPage'
import DashboardPage from './Pages/DashboardPage'
import ProtectedRoute from './Components/ProtectedRoute'
import NewReportPage from './Pages/NewReportPage'
import MyReportsPage from './Pages/MyReportsPage'
import UploadCSVPage from './Pages/UploadCSVPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/newReportPage" element={<NewReportPage />} />
          <Route path="/myReportsPage" element={<MyReportsPage />} />
          <Route path="/uploadCSVPage" element={<UploadCSVPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
