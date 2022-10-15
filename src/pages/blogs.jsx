import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const navigate= useNavigate();
  return (
    <div>
      <h1>This is Blog Page</h1>
      <button onClick={()=>{navigate("/")}}>Go To Homepage</button>
    </div>
  )
}

export default Blogs
