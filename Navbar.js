import React from 'react';
import './Navbar.css';



export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
      
  <div className="container-fluid bg-light">
    <div className="icon1"><i className="fa-solid fa-scale-unbalanced-flip icon_1"></i></div>
    <a className="navbar-brand mx-5" href="#">EdsorbLaw. <br/>  <div className="learn">True Learning</div></a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-4">
          <a className="nav-link"  href="#">Premium+</a>
        </li>
        <li className="nav-item mx-5">
          <a className="nav-link" href="#">Blogs</a>
        </li>
        
        <li className="nav-item mx-4">
          
          <a className="nav-link" href="#">Podcast</a>
        </li>

      <li>
      <a className='icon1' href="#">
       <i className="fab fa-google-play icon_1"></i>    </a>
      </li>

      <li>
      <a className='icon2' href="#">
       <i className="fab fa-app-store icon_2"></i>    </a>
      </li>        
      </ul>

      <div className="box-1 bg">
  <div className="btn btn-one">
    <span>Login</span>
  </div>  
</div>

<div className="box-1">
  <div className="btn btn-one">
    <span>SignUp</span>
  </div>
  </div>

      
    </div>
  </div>
</nav>
      </>
  )
}
