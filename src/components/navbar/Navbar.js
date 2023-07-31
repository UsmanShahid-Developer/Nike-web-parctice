import React from 'react'
import logo1 from "../../assetes/brand_logo.png"
import "./Navbar.css"

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-">
  <div class="container">
    <a class="navbar-brand" href="#">
        <img src={logo1}/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
     

      <ul class="navbar-nav ms-auto ulstyle">
        <li class="nav-item">
          <a class="nav-link text-dark fs-5" aria-current="page" href="#">MENU</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark fs-5" href="#">LOCATION</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark fs-5" href="#">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark fs-5" href="#">CONTACT</a>
        </li>
        <button className='btn btn-danger btn1'>LOGIN</button>
      </ul>      
    </div>
  </div>
</nav>
    </div>
  )
}
