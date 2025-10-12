// import Navbar from "./Navbar"
import Search from "../UI/Search";
import FilterBtns from "../UI/FilterBtns";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
const Header = () => {
  return (
      <header>
          {/* <Navbar /> */}
          <div className="header-details-container">
            <div className="header-content">
                <div className="header-text">
                    <h1 className="to-blue-600 font-bold">Discover Awesome Articles Here</h1>
                    <h2>
                    All the articles and contents are updated
                    daily and are kept up to date ensuring
                    that you get the most out of our contents
                    </h2>
                </div>
                <div className="header-social-icons">
                    <BsTwitterX size={25}className="twitter-icon" />
                    <FaYoutube size={25} className="youtube-icon"/>
                </div>
              </div>
              <div className="filter-section">
                <Search />
                <FilterBtns/>
              </div>
          </div>
      
    </header>
  )
}

export default Header
