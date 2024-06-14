import axios from 'axios'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const LogIn = () => {

const [data,setData]=useState(
    {
        "email":"ann@gmail.com",
        "password":"ann"
 
     }
)
const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/signin",data).then((response)=>{
        console.log(data)
        if (response.data.status=="success") {
            sessionStorage.setItem("token",response.data.token)
            sessionStorage.setItem("userId",response.data.userId)
            navigate("/dashboard")
        } else {
            alert(response.data.status)
        }
    }).catch(
        (error)=>{
            console.log(error)
            alert(error)
        }
    )
}
let navigate=useNavigate()
    
  return (
    <div>

<center><h1>SIGN-IN</h1></center>
        <br /><br />

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <label htmlFor="" className="form-label">Email Id</label>
        <input type="email" name="email" onChange={inputHandler} value={data.email} id="" className="form-control" />
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

       <label htmlFor="" className="form-label">Password</label>
        <input type="password" name="password" onChange={inputHandler} value={data.password} id="" className="form-control" />
    </div>
    <center>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <button className="btn btn-success" onClick={readValue}>Sign-In</button>
    </div><br />
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
       <Link to="/signup"><button className="btn btn-success">Sign-Up</button></Link> 
    </div><br />
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
         <Link to="/"> <button className="btn btn-success">Back To Home</button></Link>
    </div>
    </center>
</div>

        </div>
    </div>
</div>


    </div>
  )
}

export default LogIn