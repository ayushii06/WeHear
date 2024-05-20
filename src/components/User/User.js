import React from 'react'
import user from "../../assets/user-icon/user.svg"
import arrow from "../../assets/user-icon/arrow.svg"
import file from "../../assets/user-icon/file.svg" 
import account from "../../assets/user-icon/account.svg"
import '../User/User.css'
import logout from "../../assets/user-icon/logout.svg"
import payment from "../../assets/user-icon/payments.svg" 
import { useEffect } from 'react'
import {  useState } from 'react'
import { useNavigate } from 'react-router-dom'


function User(props) {
  let navigate=useNavigate();
  const userInitial = []
//   const [data, setData] = useState(userInitial)

  let names = localStorage.getItem('name')
  let email = localStorage.getItem('email')
  //GET ALL NOTES
 
   function handleClick(){
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    navigate('/')
   }

  return (
    <>
        <div className="user-container">
        
       
            <div className="main-heading">
                <div className="upper-heading">
                    <h4 className='bold-black'>Personal Information</h4>
                    <h5>Edit</h5>
                </div>
                <input type="text" value={names}/>
            </div>

            <div className="main-heading">
                <div className="upper-heading">
                    <h4 className='bold-black'>Email Address</h4>
                    <h5>Edit</h5>
                </div>
                <input type="email" value={email}/>
            </div>

        </div>
   
    </>
  )
}

export default User