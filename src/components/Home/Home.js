import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Home/Home.css'
import logo from '../../assets/bg.jpg'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'

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
      <p className="text-center welcome-heading font-bold">WeManage<p className='appname font-bold'>Your Personalized AI Timetable Assistant</p></p>
      <p className="about-heading font-light">Welcome to WeManage, your ultimate solution for creating personalized timetables that fit seamlessly into your busy schedule. With WeManage, you can say goodbye to the hassle of manually planning your day and hello to optimized productivity and efficiency.</p> 
    <Link className="text-center btns font-bold" to="/register" role="button">Get Started</Link>  
    </div>
    <div className="flex-container">
      <img src={logo}></img>
      <div className="flex-container col">
      <p className="head-home">Unlock Your Potentials</p>
      <p className="subhead">Prioritise Your <span>Time</span></p>
      </div>
    </div>
    <div className="btn-container">
    <Link className="text-center btns font-bold" to="/input" role="button">Key Features</Link> 
    <div className="card">
      <div className="card-container">
        <p className="title font-bold">Personalized Timetable Generation</p>
        <p className="content font-bold">Let Us do the heavy lifting for you by creating a timetable that aligns perfectly with your schedule and priorities.</p>
      </div>
      <div className="card-container">
        <p className="title font-bold">Customizable Preferences</p>
        <p className="content font-bold">Tailor your timetable to your liking, from preferred study times to designated break periods and leisure activities.</p>
      </div>
      <div className="card-container">
        <p className="title font-bold">Community Forum</p>
        <p className="content font-bold"> Connect with like-minded individuals, share study tips, seek advice, and collaborate on academic projects in our vibrant online community.</p>
      </div>
    </div> 
    <div className="sign-up-header">Sign up now and take control of your time like never before. 
Say hello to efficiency, productivity, and peace of mind with us - your personalized timetable assistant.</div>
  
    <Link className="text-center btns font-bold" to="/register" role="button">Sign Up</Link> 
    <p style={{margin:"6vh auto 14vh",
    fontSize: "22px"}} className="text-center font-light">Already have an account?<span className='login-link font-bold' onClick={handleClick}>Log In</span></p>
    </div>
    <Footer/>
    </>
  )
}

export default Home