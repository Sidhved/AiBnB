import React from 'react'
import { useSelector } from 'react-redux'
import ShowcaseContainer from '../components/Utilities/ShowcaseContainer';

function Profile() {
  // Get user acess and refresh token
  const {accessToken, refreshToken} = useSelector((state) => state.UserReducer);

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