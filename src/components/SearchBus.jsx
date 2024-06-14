import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchBus = () => {

    const [data, searchData] = useState(
        {
            "route": ""
        }
    )
    const [result, setResult] = useState([])
    const inputHandler = (event) => {
        searchData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then((Response) => {
            setResult(Response.data)
        }).catch()
    }
    return (
        <div>
            <NavBar />
            <br /><br />
            <center><h1>SEARCH BUSES</h1></center>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col ol-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center>
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <label htmlFor="" className="form-label">Route</label>
                                    <input type="text" className="form-control" value={data.route} name='route' onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-warning" onClick={readValue}>Search</button>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
                <br /><br />
<div className="row">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Bus Name</th>
      <th scope="col">Route</th>
      <th scope="col">Bus No</th>
      <th scope="col">Driver Name</th>
    </tr>
  </thead>
  <tbody>
    {
        result.map(
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

export default SearchBus