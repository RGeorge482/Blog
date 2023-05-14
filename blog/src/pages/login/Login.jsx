import './Login.css';
import {Link} from "react-router-dom"

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />   
        
      </form>     
      </div>
  )
}