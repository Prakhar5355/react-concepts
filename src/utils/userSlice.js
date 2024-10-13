// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        { name: "Default Name", email: "default@example.com" }
    ]
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeEmail: (state, action) => {
            const { email, index } = action.payload;
            state.users[index].email = email;
        },
        changeName: (state, action) => {
            const { name, index } = action.payload;
            state.users[index].name = name;
        },
        addUser: (state, action) => {
            state.users.push(action.payload);
        }
    }
});

export const { changeEmail, changeName, addUser } = userSlice.actions;

export default userSlice.reducer;
