import { FaBlog } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>

      <div className="logo">
        <FaBlog  size={25}/>
      </div>

      <div className="footer-copyright-container">
        <p>
          {" "}
          &copy; <span>2025</span>.All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
