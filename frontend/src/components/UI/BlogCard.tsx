import { FiEye } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
const BlogCard = () => {
  return (
    <div className="max-w-xs">
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1759434192802-249e5a5f78d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="rounded-xl blue"
        />
      </div>
      <div>
        <h2>What is Virtual reality and what is it important.</h2>
        <p></p>
        <hr />
        <div className="flex justify-between p-2">
          <div className="flex items-center gap-4">
            <SlCalender />
            <span>34th/05/2025</span>
          </div>
          <div className="flex items-center gap-4">
            <FiEye />
            <span>2k</span>
          </div>
        </div>
        <button className="w-full">Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
