import { useState } from "react"
import { getToken } from '../Api/api.auth.ts'
import { useNavigate } from "react-router"
export default function LoginPage() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    agentCode: "",
    password: ""
  })
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [target.name]: target.value
    })
  }
  const handleClick = async () => {    
    const res = await getToken(user)
    localStorage.setItem("token", res.token)
    navigate("/dashboard")
  }

  return (
    <div className="pageLogin">
      <h1>walcom to login page</h1>
      <input className="input_agentCode" type="text" name="agentCode" placeholder="agentCode" onChange={(e) => setUser({ ...user, agentCode: e.target.value })} />
      <input className="input_password" type="text" name="password" placeholder="password" onChange={handleChange} />
      <button className="button_Login" onClick={handleClick}>Login</button>
    </div>
  )
}
