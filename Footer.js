import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <>
    
  <body>
  <div className="container-fluid flex-grow-1 flex-shrink-0">
    <div className="px-lg-5">
      <div className="row py-5">
        <div className="col-lg-12 mx-auto text-white text-center">
          
          
          <p className="lead">Snippet by <a href="https://bootstrapious.com/snippets" className="text-white">
                        <u>Edzorb Law</u></a>
          </p>
        </div>
      </div>
    </div>
  </div>
  


  
  <footer className="bg-white">
    <div className="container py-5">
      <div className="row py-4">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" className="mb-3"/>
          <p className="font-italic text-muted">In Edzorbs system you will thrive because where there is a structure, & according to the structure, one knows if you study like this, you make headway that will be recognised in the form of RESULTS.</p>
          <ul className="list-inline mt-4">
            <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa fa-facebook"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fa fa-vimeo"></i></a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Shop</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#" className="text-muted">Stores</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Our Blog</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#" className="text-muted">Login</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Register</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Wishlist</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Our Products</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
          <p className="text-muted mb-4">Don't Waste Time. JOIN NOW.</p>
          <div className="p-1 rounded border">
            <div className="input-group">
              <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0" />
              <div className="input-group-append">
                <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="bg-light py-4">
      <div className="container text-center">
        <p className="text-muted mb-0 py-2">© 2019 Edzorb Law All rights reserved.</p>
      </div>
    </div>
  </footer>
  </body>


    </>
  );
}
