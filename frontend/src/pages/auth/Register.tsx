// import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <section className="login-section min-h-full">
      <div className="form-container">
        <form action="" method="post">
          <div className="form-group">
            <label htmlFor="username"></label>
            <input type="text" placeholder="Name..." />
          </div>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input type="email" placeholder="Email..." />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input type="password" placeholder="Password..." />
          </div>
          <button type="submit">Register</button>
          <hr />
          Already have an account. <Link to="/auth/login">Sign in</Link>
        </form>
      </div>
    </section>
  );
}

export default Register
