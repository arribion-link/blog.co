import React from 'react'

const Login = () => {
  return (
    <section>
      <div className="form-container">
        <form action="" method="post">
          <div className="form-group">
            <label htmlFor="email"></label>
            <input type="email" placeholder="Email..." />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input type="password" placeholder="Password..." />
            </div>
            <button type='submit'>Register</button>
        </form>
      </div>
    </section>
  )
}

export default Login
