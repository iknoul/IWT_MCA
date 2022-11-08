import React from 'react';
import {NavLink,Link} from 'react-router-dom';

const Navbar = () => {
  return (
    /*Main Heading*/
    <>
         
          <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 text-left">
              <div className="text-dark text-center fw-bold p-2 logo">

                  <h2 className="p-2 text-center">Students Mangement System (SMS)</h2>
                  <small className="p-2 text-center">Department of Computer Science</small>
              </div>
          </div>
        
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                  <NavLink to='/' className="navbar-brand" ></NavLink>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav d-flex">
                          <li className="nav-item">
                              <NavLink to='/' className="nav-link" aria-current="page" >Home</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink to='/Attendance' className="nav-link" >Attendance</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink to='/Assignment' className="nav-link" >Assignment</NavLink>
                          </li>
                      </ul>
                      <form className="d-flex">
        <input className="form-control ms-4" type="text" placeholder="Search"/>
        <button className="btn btn-primary" type="button">Search</button>
      </form>
                  </div>
              </div>
          </nav></>
  )
}

export default Navbar