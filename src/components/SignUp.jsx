import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const [data, setData] = useState(
        {
            "name": "",
            "email": "",
            "phone": "",
            "gender": "",
            "password": "",
            "confirmpassword": ""

        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        if (data.password==data.confirmpassword) {
            axios.post("http://localhost:8080/signup", data).then((response) => {
                console . log(data) 
                if(response.data.status == "success") {
                alert("successfully signed up")
            } else {
                alert("Error")
            }
    
        }).catch () 
        } else {
            alert("Password Incorrect")
        }
       
    }
return (
    <div>

        <center><h1>SIGN-UP</h1></center>
        <br /><br />

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" value={data.name} name='name' onChange={(inputHandler)} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="email" name="email" onChange={inputHandler} value={data.email} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Mobile No.</label>
                            <input type="text" className="form-control" value={data.phone} name='phone' onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Gender</label>
                            <select className="form-control" value={data.gender} name='gender' onChange={inputHandler}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="password" onChange={inputHandler} value={data.password} id="" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="password" name="confirmpassword" id=""  className="form-control" value={data.confirmpassword} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <button className="btn btn-success" onClick={readValue}>Register</button>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                           <Link to="/login"><button className="btn btn-success">Back To Login</button></Link> 
                        </div>
                    </div>


                </div>
            </div>
        </div>


    </div>
)
}

export default SignUp