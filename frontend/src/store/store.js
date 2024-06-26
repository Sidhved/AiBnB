import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { UserReducer } from "./UserReducer/UserReducer";

const reducers = combineReducers({
    UserReducer,
});

export const store = configureStore({
    reducer: reducers,
});
