import "./Login.css"
import Leaderboard from "../deckedit/components/Leaderboard"
import LoginForm from "./components/LoginForm"
function Login() {
  return (
    <div className="content">
      <LoginForm />
      <Leaderboard />
    </div>
  )
}

export default Login