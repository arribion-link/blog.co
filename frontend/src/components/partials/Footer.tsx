import { FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date();
  const jeff = {
    color: "dodgerblue"
  }
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Blogs</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

        {/* ABOUT IS SAME IN SERVICES */}
        {/* <li>
          <Link to="/">About</Link>
        </li> */}


      </ul>

      <div className="logo">
        <FaBlog size={25} />
      </div>

      <div className="footer-copyright-container">
        <p>
          {" "}
          &copy; <span>{year.getFullYear()} </span>{" "}
          <span style={jeff}>Jeff Arribion @codnify.</span>
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
