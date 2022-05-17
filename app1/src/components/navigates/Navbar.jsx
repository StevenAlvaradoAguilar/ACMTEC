import React from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/Logo.png";

const navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/'>
                  <img src={logo} alt="" width='50'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to='/information'>Information</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to='/monitoring'>Monitoring</Link>
                        </li>
                        <li className="nav-item">
                          <Link className ="nav-link" to='/about'>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default navbar