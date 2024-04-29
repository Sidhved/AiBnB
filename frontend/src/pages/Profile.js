import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ShowcaseContainer from "../components/Utilities/ShowcaseContainer";
import { authQueries } from "../api/authQueries";
import Navbar from "../components/Utilities/Navbar";
import LargeHeading from "../components/Texts/LargeHeading";

function Profile() {
  // HOOKS
  const dispatch = useDispatch();

  // Get user acess and refresh token
  const { accessToken, profileData } = useSelector(
    (state) => state.UserReducer
  );

  // function to fetch profile data
  const fetchProfileData = async () => {
    // invoke a api call to get profile data
    await authQueries.getProfile(accessToken, profileData, dispatch);
  };

  // Get user information on load
  useEffect(() => {
    fetchProfileData();
  }, []);

  // Check if profileData is null
  if (!profileData) {
    return <LargeHeading>Loading...</LargeHeading>;  // Or any other fallback UI
  }
  return (
    <div className="min-h-screen bg-black">
      <ShowcaseContainer>
        {/* Navbar */}
        <Navbar />

        {/* Main */}
        <div className="flex flex-col items-center justify-center h-full">
          <div className="max-w-4xl mx-auto p-6 bg-black rounded-lg border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">User Details:</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-lg md:text-xl font-medium dark:text-white">First Name: <span className="font-normal dark:text-white">{profileData.first_name}</span></p>
                <p className="text-lg md:text-xl font-medium mt-2 dark:text-white">Phone: <span className="font-normal dark:text-white">{profileData.phone}</span></p>
              </div>
              <div>
                <p className="text-lg md:text-xl font-medium dark:text-white">Last Name: <span className="font-normal dark:text-white">{profileData.last_name}</span></p>
                <p className="text-lg md:text-xl font-medium mt-2 dark:text-white">Email: <span className="font-normal dark:text-white">{profileData.email}</span></p>
              </div>
            </div>
          </div>
        </div>
      </ShowcaseContainer>
    </div>
  );
}

export default Profile;
