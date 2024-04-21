import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Utilities/Navbar";
import { useSelector } from "react-redux";

function Profile() {

  const navigate = useNavigate();


  return (
    <div className="relative ">
      <div className={`h-[100vh] w-full bg-black relative overflow-x-hidden`}>
        <div className="z-40 absolute">
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default Profile