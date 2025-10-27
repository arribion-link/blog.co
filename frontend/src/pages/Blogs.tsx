// import React, { useEffect, useState } from 'react'
import { SpinnerDotted } from 'spinners-react';
// import { XlviLoader } from "react-awesome-loaders";

const Blogs = () => {
  // const loaderColor = {
  //   color: "red"
  // }
  // const [blog, setBlog] = useState();
  // const [text, setText] = useState();

  // useEffect(() => {
    
  // })

  return (
    <section>
     
      {/* spinners-react */}
      <div className='flex justify-center'>

      <SpinnerDotted
        size={60}
        thickness={99}
        speed={100}
        color="dodgerblue"
      />
    
      </div>
      {/* respinner
      <BounceLoading gap={5} style={loaderColor}/> */}
    </section>
  );
}

export default Blogs
