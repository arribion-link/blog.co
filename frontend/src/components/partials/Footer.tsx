import { FaBlog } from "react-icons/fa";
const Footer = () => {
  const year = new Date();
  const jeff = {
    color: "dodgerblue"
  }
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
