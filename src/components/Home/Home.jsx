import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Homepage!</h1>
      <p>This is the homepage of our application at W3GC.</p>
      <div className="button-container">
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/privacy">
          <button>Privacy Policy</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
