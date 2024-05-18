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
        <div className="user-left-container">
            <div className="account-name">
                <img src={user} alt="" height="52px" width="52px"/>
                <div>
                    <h5>Hello,</h5>
                    <h3>{names}</h3>
                </div>
            </div>
            <div className="user-section">
                <div className="content">
                    <img src={file} alt=""/>
                    <h5>MY ORDERS</h5>
                    <img src={arrow} className="arrow" alt=""/>
                </div>

                <div className="not-flex">
                <div className="content">
                    <img src={account} alt=""/>
                    <h5>ACCOUNT SETTINGS</h5>
                    
                </div>
                <div className="down-content">
                    <h5>Profile Information</h5>
                    <h5>Manage Addresses</h5>
                </div>
            </div>

                <div className="content">
                    <img src={payment}alt=""/>
                    <h5>PAYMENTS</h5>
                </div>

                <div className="content" onClick={handleClick}>
                    <img src={logout} alt=""/>
                    <h5>Logout</h5>
                </div>
            </div>
        </div>
        <div className="right-container">
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
                    <h5 id="verify"><a href="./verify.html">Verify Email</a></h5>
                </div>
                <input type="email" value={email}/>
            </div>

            <div className="main-heading">
                <div className="upper-heading">
                    <h4 className='bold-black'>Mobile Number</h4>
                    <h5>Edit</h5>
                </div>
                <input type="number"/>
            </div>

        </div>
    </div>
    </>
  )
}

export default User