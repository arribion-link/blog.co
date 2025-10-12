import { Link } from "react-router-dom";
import { FaBlog } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
           <FaBlog size={33} />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
      <div className='nav-right-container'>
        <div>
         <img src="" alt="profile" />
        </div>
        <FaRegBell size={20} />
        <li>
          <Link to='../../pages/auth/Login.tsx'>Login</Link>
        </li>
      </div>
    </nav>
  );
}

export default Navbar
