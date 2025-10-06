import { Link } from "react-router-dom";
import { FaBlog } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <FaBlog size={33} />
      </div>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Blogs</a>
        </li>
        <li>
          <a href="">Services</a>
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
