import { userActionTypes } from "./UserActionTypes";

const initialState = {
    auth_token: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionTypes.SET_AUTH_TOKEN: {
            const { token } = action.payload;

            return {
                ...state,
                auth_token: token,
            };
        }

        default: {
            return state;
        }
    }
};
