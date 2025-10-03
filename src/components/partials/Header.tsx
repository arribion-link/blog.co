import Navbar from "./Navbar"
import Search from "../UI/Search";
import FilterBtns from "../UI/FilterBtns";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
const Header = () => {
  return (
      <header>
          <Navbar />
          <div className="header-details">
            <div>
                <div>
                    <h1>Discover Awesome Articles Here</h1>
                    <p>
                    All the articles and contents are updated
                    daily and are kept up to date ensuring
                    that you get the most out of our contents
                    </p>
                </div>
                <div>
                    <BsTwitterX size={20}/>
                    <FaYoutube size={20}/>
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
