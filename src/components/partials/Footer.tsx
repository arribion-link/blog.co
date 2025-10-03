import { FaBlog } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
      </ul>

      <div className="logo">
        <FaBlog />
      </div>

      <div>
        <p> &copy; <span>2025</span>.All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
