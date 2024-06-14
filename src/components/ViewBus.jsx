import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewBus = () => {

const [data,changedata]=useState([])
const fetchData=()=>{
    axios.post("http://localhost:8080/view",data).then((response)=>{
        changedata(response.data)
        console.log(response.data)
    }).catch()
}

useEffect(()=>{
    fetchData()
},[])
  return (
    <div>
        <NavBar/>
 <br /><br />
            <center><h1>ADD BUSES</h1></center>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                    <table class="table">
  <thead>
    <tr>
      <th scope="col">Bus Name</th>
      <th scope="col">Route</th>
      <th scope="col">Bus No.</th>
      <th scope="col">Driver Name</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map(
            (value,index)=>{
                return  <tr>
                <td>{value.busName}</td>
                <td>{value.route}</td>
                <td>{value.busNo}</td>
                <td>{value.drivername}</td>
              </tr>
            }
        )
    }
   
    
  </tbody>
</table>

                    </div>
                </div>
            </div>

    </div>
  )
}

export default ViewBus