// import Navbar from "./Navbar"
import Search from "../UI/Search";
import FilterBtns from "../UI/FilterBtns";
import { Link } from "react-router-dom";
// import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      {/* <Navbar /> */}
      <div className="header-details-container">
        <div className="header-content">
          <div className="header-text">
            <h1 className="hero-heading font-bold">
              Discover Awesome Articles Here
            </h1>
            <h2>
              All the articles and contents are updated daily and are kept up to
              date ensuring that you get the most out of our contents
            </h2>
          </div>
          <div className="header-social-icons items-center gap-8">
            {/* <BsTwitterX size={35}className="twitter-icon" /> */}
            <Link to="https://www.youtube.com/@codnify" target="_blank">
              <FaYoutube size={55} className="youtube-icon" />
            </Link>
          </div>
        </div>
        <div className="filter-section flex  justify-between">
          <Search />
          <FilterBtns />
        </div>
      </div>
    </header>
  );
}

export default Header
