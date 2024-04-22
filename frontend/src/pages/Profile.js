import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ShowcaseContainer from "../components/Utilities/ShowcaseContainer";
import { authQueries } from "../api/authQueries";
import Navbar from "../components/Utilities/Navbar";

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
                      <div>
                        
                      </div>


                    </div>

                    <div></div>
                </div>
            </ShowcaseContainer>
        </div>
    );
}

export default Profile;
