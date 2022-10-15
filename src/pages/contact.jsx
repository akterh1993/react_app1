import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contacts = () => {

  const navigate= useNavigate();

  return (
    <div>
      <h1>This is Contact Page</h1>
      <button onClick={()=>{navigate("/")}}>Go To Homepage</button>
    </div>
  );
}

export default Contacts
