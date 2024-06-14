import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
{/* body-tertiary */}
<nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">KSRTC</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/add">Add Bus</Link>
        <Link className="nav-link" to="/search">Search Bus</Link>
        <Link className="nav-link" to="/delete">Delete Bus</Link>
        <Link className="nav-link" to="/view">View Buses</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar