import { useState } from "react"
import { getToken } from "../Api/api.auth"
import { useNavigate } from "react-router"

export default function LoginPage() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    agentCode: "",
    password: ""
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setUser(prev => ({
      ...prev,
      [name]: value
    }))
    setError("") // מנקה שגיאה כשמתחילים להקליד
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setLoading(true)

      const res = await getToken(user)

      localStorage.setItem("token", res.token)

      navigate("/dashboard")

    } catch (err: any) {
      console.log("adjpdoajfpioj");
      
      console.error(err);
      
      if (err.status === 401) {
        setError("סיסמה או משתמש לא נכונים")
      } else {
        setError("שגיאה בשרת")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pageLogin">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="agentCode"
          placeholder="Agent Code"
          value={user.agentCode}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />

        <button disabled={loading}>
          {loading ? "מתחבר..." : "Login"}
        </button>

      </form>

      {error && <p>{error}</p>}
    </div>
  )
}