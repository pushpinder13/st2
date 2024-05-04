import React from 'react';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';

const Login =()=> {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You are logged in... WELCOME TO ... !!");
   console.log("button clicked")
  
    navigate('/')
  };

    return (
        <section className='w2'> 
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="control">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="control">
            <label htmlFor="psw">Password</label>
            <input type="password" id="psw" required />
          </div>
          <span><input type="checkbox" /> Remember me</span>
          <div className="control">
            <button type="submit" className="btn"  >Login</button>
          </div>
        </form>
        <p className='ss'><a href="#">Forget password ?</a></p>
      </div>
      </section>
    );
  
}

export default Login;
