import { createSlice, configureStore } from "@reduxjs/toolkit"
import users from "../data/users";
import userData from "./data/users"

const usersSlice = createSlice({

    name: "users",

    initialState: {
        values: userData,
    },

    reducers: {
        login: (state, action) => {
            state.users.get(action.payload)
        },
    },
});

const { login } = usersSlice.actions;

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
    }
});

export { login }