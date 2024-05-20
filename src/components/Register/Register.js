import React,{useState} from 'react'
import styles from '../Login/login.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Register() {

  let navigate = useNavigate();
 
  function handleClick(){
    navigate('/login')
  }
    const [credentials, setCredentials] = useState({ name: "", email: "",age:"", gender: "",password:"" });
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch("https://project-we-hear-backend-6m4y0wyvw-ayushii06s-projects.vercel.app/api/v1/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, age: credentials.age, gender: credentials.gender,password: credentials.password }),

        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
          navigate("/login")
        }
        else {
            alert(json.error, "Invalid Credentials")
        }
  }
  return (
    
    <>
      <h1 className="login-heading">Hi, Register here!</h1>
         <div className="flex column container login-container">
       
        <form >
           <div className="form-group">
            <label>Name</label>
                <input type="text" id="name" className='form-control' value={credentials.name} onChange={onChange} name="name" placeholder="Enter your name"/>
            </div>
            <div className="form-group">
            <label>Email</label>
                <input type="email" id="email" className='form-control' value={credentials.email} onChange={onChange} name="email" placeholder="Enter your email"/>
            </div>
            <div className="form-group">
            <label>Age</label>
                <input type="number" id="name" className='form-control' value={credentials.age} onChange={onChange} name="age" placeholder="Enter your age"/>
            </div>
            
            <div className="form-group">
            <label>Gender</label>
                <input type="string" id="name" className='form-control' value={credentials.gender} onChange={onChange} name="gender" placeholder="Enter your gender"/>
            </div>
            <div className="form-group">
            <label>Password</label>
                <input type="password" id="name" className='form-control' value={credentials.password} onChange={onChange} name="password" placeholder="Enter your password"/>
            </div>
          
        </form>

      
    </div>
    <div className="footer">
    <button onClick={handleSubmit} className="text-center btns font-bold" to="/login" role="button">Submit</button> 
    <p style={{margin:"6vh auto 14vh",
    fontSize: "22px"}} className="text-center font-light">Already have an account?<span className='login-link font-bold' onClick={handleClick}>Log In</span></p>
    </div>

    </>
  )
}

export default Register