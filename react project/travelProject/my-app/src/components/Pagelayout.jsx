import React from "react";
import "./pagelayout.css"
function Pagelayout(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-dark">
  <div className="container-fluid  bg-dark mb-5 p-4 ">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-5 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="#">company</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">company </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Travel Portal</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Api Partners</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Career </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Portfolio </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Contact Us </a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>



        </>
    )
}

export default  Pagelayout;