import React, { useState } from 'react'
import '../Login/login.css'
import { Link, useNavigate} from 'react-router-dom'

const Login=()=> {
  let navigate = useNavigate();
  function handleClick(){
    navigate('/input')
  }
  
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("https://project-we-hear-backend-ntwanh40h-ayushii06s-projects.vercel.app/api/v1/user/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: credentials.email, password: credentials.password }),

      });
      const json = await response.json();
      
      console.log(json)
      if (json.success) {
          localStorage.setItem('token', json.token)
          localStorage.setItem('name', json.user.name)
          localStorage.setItem('email', json.user.email)
          localStorage.setItem('age', json.user.age)
          localStorage.setItem('gender', json.user.gender)
          navigate("/")
      }
      else {
          alert("Invalid Credentials")
      }

  }
  
  return (
    <>
   
   <h1 className="login-heading">Hi, Login Here</h1>
  
    <div className="flex column container login-container">
       
        <form action="post" onSubmit={handleSubmit}>
           <div style={{width: "30vw",margin:"16px auto"}} className="form-group">
                <input type="email" id="email" value={credentials.email} onChange={onChange} name="email" placeholder="Enter your email"/>
                </div>
                <div style={{width: "30vw",margin:"16px auto"}} className="form-group">
                <input type="password" id="password" value={credentials.password} onChange={onChange} name="password" placeholder="Enter your password"/>
            </div>
          
        </form>

        
    </div>
    <div className="footer">
    <div onClick={handleSubmit} className="text-center btns font-bold" to="/register" role="button">Verify</div>
    <p style={{margin:"6vh auto 14vh",
    fontSize: "22px"}} className="text-center font-light">Don't have an account yet ?<span className='login-link font-bold' onClick={handleClick}>Register here</span></p>
        </div>
    </>
  )
}

export default Login