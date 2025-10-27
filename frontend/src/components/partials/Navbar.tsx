import { Link } from "react-router-dom";
import { FaBlog } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className=" logo hover:text-blue-500 ease-in-out 1s ">
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
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className="nav-right-container">
        <div className="profile-pic-container">
          <img src="" alt="" className="profile-picture" />
        </div>
        <FaRegBell size={20} />
        <li>
          <Link to="/auth/login">Login</Link>
        </li>
      </div>
    </nav>
  );
}

export default Navbar
