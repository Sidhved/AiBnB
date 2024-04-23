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
        <div className="h-[100vh] bg-black">
            <ShowcaseContainer>
                {/* Navbar */}
                <Navbar />

                {/* Main */}
                <div className="flex flex-row space-x-3">
                    <div className="flex flex-1">
                      {/* Profile Image */}
                      <div>
                      </div>

                      {/* User Information */}
                      <div className="ml-5">
                        <LargeHeading>User Details:</LargeHeading>
                        <div class="grid grid-cols-4 gap-4">
                          <div>
                            <p class="text-4xl text-gray-900 dark:text-white">First Name: {profileData.first_name}</p>
                          </div>
                          
                          <div>09</div>
                      </div>
                      </div>


                    </div>

                    <div></div>
                </div>
            </ShowcaseContainer>
        </div>
    );
}

export default Profile;
