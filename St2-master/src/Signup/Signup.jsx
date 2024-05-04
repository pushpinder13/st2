import React, { useState } from 'react';
import './Signup.css';
import main from './pics2/main.jpg';
import { Link } from 'react-router-dom';

function Signup() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);
  const [isLostPasswordFormVisible, setLostPasswordFormVisible] = useState(false);

  const toggleForm = (formType) => {
    setLoginFormVisible(formType === 'login');
    setLostPasswordFormVisible(formType === 'lostPassword');
  };

  return (
    <div className='zz'>
      <img className="bgimge" src={main} alt="pic" />
      <div className="login-page">
        <div className="box">
          <div className="form">
            <div className={isLoginFormVisible ? 'login-form' : 'login-form form-hidden'}>
              <h3>Sign Up</h3>
              <div className="form-group">
                <input type="text" placeholder="Name*" className="form-control" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address*" className="form-control" required />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password*" className="form-control" required />
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
              </div>
              <Link to='/'>
                <button type="button" className="submit-btn">Sign Up</button>
              </Link>
              <p><Link to='/login' className="register-btn" onClick={() => toggleForm('login')}>Log in</Link> | <a href="#" className="lost-pass-btn" onClick={() => toggleForm('lostPassword')}>Lost Your Password ?</a></p>
            </div>
            <div className={isLostPasswordFormVisible ? 'lost-password-form' : 'lost-password-form form-hidden'}>
              <h3>Lost Your Password ?</h3>
              <h5>You will receive a link to create a new password via email.</h5>
              <div className="form-group">
                <input type="text" placeholder="Email Address*" className="form-control" required/>
              </div>
              <button type="button" className="submit-btn">Reset</button>
              <p><Link to='/login' className="login-btn" onClick={() => toggleForm('login')}>Log in</Link> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
