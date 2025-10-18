import { Link } from "react-router-dom"
const Login = () => {
  return (
    <section className="login-section min-h-full">
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
          <button type='submit'>Login</button>
          <hr />
          Don't have an account? <Link to="/auth/register">Create</Link>
        </form>
      </div>
    </section>
  )
}

export default Login
