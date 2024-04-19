import axios from "axios";
import { baseUrl } from "./baseUrl";
import { userActionTypes } from "../store/UserReducer/UserActionTypes";

// Object for handling auth queries
export const authQueries = {
    // register user
    registerUser: async (
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        phone,
        dispatch
    ) => {
        // user data to be sent
        const userData = {
            email: email,
            password: password,
            password2: confirmPassword,
            first_name: firstName,
            last_name: lastName,
            phone: phone,
        };

        try {
            // post the request body to the register endpoint
            const response = await axios.post(
                `${baseUrl}/auth/register/`,
                userData
            );
            // unpack access token and refresh token
            const { access, refresh } = response.data.data.token;
            // set access and refresh token to the user auth store
            dispatch({
                type: userActionTypes.SET_ACCESS_TOKEN,
                payload: { accessToken: access },
            });
            dispatch({
                type: userActionTypes.SET_REFRESH_TOKEN,
                payload: { refreshToken: refresh },
            });

            // return true to indicate that user has registered succesfully
            return true;

        } catch (error) {
            return error;
        }
    },
};
