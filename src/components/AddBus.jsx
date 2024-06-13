import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddBus = () => {

    const [data, setdata] = useState(
        {
            "busName": "",
            "route": "",
            "busNo": "",
            "drivername": ""

        }
    )
    const inputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/add", data).then((response) => {
            console.log(data)
            if (response.data.status == "success") {
                alert("Added Successfully")
            } else {
                alert("Error")
            }
        }).catch()
    }
    return (
        <div>
            <NavBar />


            <br /><br />
            <center><h1>ADD BUSES</h1></center>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Bus Name</label>
                                <input type="text" className="form-control" value={data.busName} name='busName' onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Route</label>
                                <input type="text" className="form-control" value={data.route} name='route' onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Bus No.</label>
                                <input type="text" className="form-control" value={data.busNo} name='busNo' onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Driver Name</label>
                                <input type="text" className="form-control" value={data.drivername} name='drivername' onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-warning" onClick={readValue}>Add Bus</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddBus