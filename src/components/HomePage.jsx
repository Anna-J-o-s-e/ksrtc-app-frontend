import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <br /><br />
<center><h1>KERALA STATE ROAD TRANSPORT CORPORATION</h1>
<br />
<h5>WELCOMES YOU !!!!!</h5>
<br /><br />
<Link to="/login"><button className="btn btn-success">LOGIN</button></Link>
</center><br /><br />
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div class="carousel-item active">
      <img src="https://wallpapercave.com/wp/wp7570176.jpg"height="500px" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.aanavandi.com/blog/wp-content/uploads/2015/05/ksrtc-villege-photos-wynad-0030.jpg"height="500px" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://img.onmanorama.com/content/dam/mm/en/travel/images/2022/9/5/ksrtc-travel.jpg"height="500px" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


    </div>
  )
}

export default HomePage