import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import poster from '../../../poster.png'; // Adjust the path according to your project structure

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    // Perform your login logic here
    // On successful login, call onLogin
    console.log("Login successful");
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Navigate to="/matches" />;
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
              <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

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

              <Link className="small text-muted" to="#!">Forgot password?</Link>
              <p className="mb pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <Link to="#!" style={{ color: '#393f81' }}>Register here</Link></p>
              <p className="mb pb-lg-2" > <Link to="/admin" style={{ color: '#393f81' }}>Admin</Link></p>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

