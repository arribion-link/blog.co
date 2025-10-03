import React from 'react'
import { FaBlog } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <FaBlog size={13} />
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
      <div>
        <img src="" alt="" />
        <FaRegBell />
        <li>
          <a href="">Contact</a>
        </li>
      </div>
    </nav>
  );
}

export default Navbar
