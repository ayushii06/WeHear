import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Home/Home.css'
import logo from '../../assets/bg.jpg'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import wellness from '../../assets/wellness.png'

const Home = () => {
  let navigate = useNavigate();
  function handleClick(){
    navigate('/login')
  }
// const productInitial=[]
//   const [products,setProducts]=useState(productInitial)

//   let tokens = localStorage.getItem('token')

//   const handleResponse = async()=>{
//   const response = await fetch("http://localhost:5050/api/v1/product/getSearch", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({token :tokens}),

//         });
//         const json = await response.json();
//         const data = await json.data;
//         console.log(data)
//         setProducts(data)
//         console.log(products)
       
//   }

  
//   useEffect(()=>{
//     handleResponse()
   
//   },[])
  return (
    <>
    <div className='home-container'>
      <div className="home-content">
      <img className="" src={wellness} style={{width:'50vw'}} />
      <p className="text-center welcome-heading font-bold">WeHear<p className='appname font-bold'>Your Mental Wellness Companion</p></p>
      </div>
      <p className="about-heading font-light">Welcome to WeManage,a comprehensive mental health app designed to support you on your journey to improved well-being. Whether you're seeking tools for self-care, resources for support, or guidance from professionals,we're here to help you every step of the way.</p> 
   </div>
  
    <div style={{margin:" 0vh auto"}} className="btn-container">
    <Link  className="text-center btns font-bold" to="/input" role="button">Key Features</Link> 
    <div className="card">
      <div className="card-container">
        <p className="title font-bold">Interactive Assessment Tools</p>
        <p className="content font-bold">"Assess your mental well-being with our user-friendly screening tools and receive personalized insights and recommendations."</p>
      </div>
      <div className="card-container">
        <p className="title font-bold">Resources and Support</p>
        <p className="content font-bold">"Access a wealth of resources, including educational materials, coping strategies, and community support networks, to help you navigate life's challenges."</p>
      </div>
      <div className="card-container">
        <p className="title font-bold">Professional Guidance</p>
        <p className="content font-bold">"Connect with licensed therapists, counselors, and mental health professionals for personalized support and guidance."</p>
      </div>
    </div> 
    <div className="sign-up-header">Ready to prioritize your mental well-being? Sign up for free and start your journey with WeHear today</div>
  
    <Link  className="text-center btns font-bold" to="/register" role="button">Sign Up</Link> 
    <p style={{margin:"6vh auto 14vh",
    fontSize: "22px"}} className="text-center font-light">Already have an account?<span className='login-link font-bold' onClick={handleClick}>Log In</span></p>
    </div>
   
    </>
  )
}

export default Home