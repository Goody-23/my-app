import React from 'react';
import LoaderImg from "../../images/loader.png";
import "./Loader.css";

const Loader = () => {
  return (
    <div>
      <div className='loader flex flex-c'>
        <img src= {LoaderImg} alt = "loader" />
      </div>
    </div>
  )
}

export default Loader