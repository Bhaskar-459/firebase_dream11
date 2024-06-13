import React from 'react'
import { Link } from 'react-router-dom'
import poster from '../../poster.png'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'


const AdminLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    // Perform your login logic here
    // On successful login, call onLogin
    console.log("Login successful");
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Navigate to="/admin/matches" />;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5 d-none d-md-block">
          <img 
            src={poster} 
            alt="login form" 
            className="img-fluid" 
            style={{ borderRadius: '1rem 0 0 1rem' }} 
          />
        </div>
        <div className="col-md-6 col-lg-7 d-flex align-items-center">
          <div className="card-body p-4 p-lg-5 text-black">
            <form>
              <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Admin Login In</h5>

              <div className="form-outline mb-4">
                <input type="email" id="form2Example17" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="form2Example17">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="form2Example27" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="form2Example27">Password</label>
              </div>

              <div className="pt-1 mb-4">
                <button className="btn btn-dark btn-lg btn-block" type="button" onClick={handleLoginClick}>Login</button>
              </div>
              <Link className="small text-muted" to="/">User</Link>
            </form>
          </div>
        </div>
      </div>
      </div>
  )
}

export default AdminLogin