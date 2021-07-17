import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (


        <div>
                 <div className="container-fluid nav_bg">
<div className="row">
    <div className="col-10 mx-auto">

  
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">

    <Link className="navbar-brand" to="/">Welcome</Link>

    <button className="navbar-toggler" 
    type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">

      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" 
    id="navbarSupportedContent">

    <ul class="navbar-nav ms-auto mt-2 mt-lg-0">

        <li className="nav-item">

          <Link className="nav-link active" 
          aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/service">Service</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contect">Contect</Link>
        </li>
     
     
      </ul>
    
    </div>
  </div>
</nav>
        </div>
        </div>
</div>

</div>
    )
}
