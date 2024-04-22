import { userActionTypes } from "./UserActionTypes";

// initial state for user auth
const initialState = {
    accessToken: "",
    refreshToken: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
};

// user reducer
export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionTypes.SET_ACCESS_TOKEN: {
            // get access token
            const { accessToken } = action.payload;

            console.log("access token from reducer", accessToken);

            // set access token to the user state
            return {
                ...state,
                accessToken: accessToken,
            };
        }

        case userActionTypes.SET_REFRESH_TOKEN: {
            // get refresh token
            const { refreshToken } = action.payload;
            // set refresh token to the user state
            return {
                ...state,
                refreshToken: refreshToken,
            };
        }

        default: {
            return state;
        }
    }
};
