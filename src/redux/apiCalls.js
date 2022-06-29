import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import axios from "axios";
import { toast } from "react-toastify";
export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const { data } = await axios.post(
			"http://localhost:5000/api/auth/login",
			user
		);
		console.log(data);
		dispatch(loginSuccess(data));
	} catch (err) {
		toast.error(err.response.data);
		console.log(err);
		dispatch(loginFailure());
	}
};
export const createUser = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const { data } = await axios.post(
			"http://localhost:5000/api/auth/register",
			user
		);
		toast.success("account created");
		dispatch(loginSuccess(data));
	} catch (err) {
		toast.error(err.response.data);
		console.log(err);
		dispatch(loginFailure());
	}
};
