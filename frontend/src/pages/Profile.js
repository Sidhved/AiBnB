import React from 'react'
import { useSelector } from 'react-redux'
import ShowcaseContainer from '../components/Utilities/ShowcaseContainer';

function Profile() {
  // Get user acess and refresh token
  const {accessToken, refreshToken} = useSelector((state) => state.UserReducer);

  return (
    <div className='h-[100vh] bg-black'>
      <ShowcaseContainer>

      </ShowcaseContainer>
    </div>

  )
}

export default Profile