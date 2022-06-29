import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
	name: "email",
	initialState: {
		currentEmail: null,
		isVerified: false,
	},
	reducers: {
		emailToVerify: (state, action) => {
			state.currentEmail = action.payload.email;
		},
		emailVerified: (state, action) => {
			console.log(state.currentEmail, " ", action.payload.currentEmail);
			if (
				JSON.stringify(state.currentEmail) ===
				JSON.stringify(action.payload.currentEmail)
			) {
				state.isVerified = true;
			}
		},
	},
});

export const { emailToVerify, emailVerified } = emailSlice.actions;
export default emailSlice.reducer;
