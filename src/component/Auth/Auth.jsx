import React, { useState } from "react";
import axios from "axios";
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignUp ? "/api/auth/signup" : "/api/auth/signin";
    try {
      const res = await axios.post(url, formData);
      console.log(res.data); 
      alert(isSignUp ? "Sign Up Successful" : "Sign In Successful");
    } catch (error) {
      console.error(error.response.data.message);
      alert(error.response.data.message);
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="auth-input"
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="auth-input"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="auth-input"
            onChange={handleChange}
            required
          />
          <button type="submit" className="auth-button">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="auth-toggle">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <span onClick={toggleForm} className="auth-toggle-link">
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};
export default Auth;