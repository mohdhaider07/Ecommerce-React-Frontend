import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { emailToVerify, emailVerified } from "../redux/emailRedux";
const RegisterEmail = () => {
	const [email, setEmail] = useState("haiderahmed12@ganma");
	const [otp, setOtp] = useState(null);
	const [loading, setLoading] = useState(false);
	const user = useSelector((state) => state.email);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		// e.preventdefault();
		// handleClick();
		// return false;
		return false;
	};

	const handleClick = async (e) => {
		try {
			setLoading(true);
			const { data } = await axios.post(
				"http://localhost:5000/api/verify/email",
				{ email }
			);
			dispatch(emailToVerify(data));
			setLoading(false);
			console.log(data);
		} catch (err) {
			toast.error(
				err.response && err.response.data && err.response.data.message
					? err.response.data.message
					: err.message
			);
			setLoading(false);
			console.log(err);
		}
	};
	const verifyOtp = async () => {
		try {
			setLoading(true);
			const { data } = await axios.post(
				"http://localhost:5000/api/verify/otp",
				{ email: user.currentEmail, otp }
			);
			setLoading(false);
			dispatch(emailVerified(user));
			toast.success(data.message);
		} catch (err) {
			toast.error(
				err.response && err.response.data
					? err.response.data.message
					: err.message
			);
			setLoading(false);
			console.log(err);
		}
	};

	console.log(user.currentEmail);
	return (
		<>
			{!user.currentEmail ? (
				<div className="h-screen w-screen flex justify-center bg-red-400 items-center">
					<form
						// onSubmit={handleSubmit}
						className=" relative p-4 flex flex-col  space-y-2 rounded-sm h-40 w-80   bg-white"
					>
						<label>Enter you Gmail</label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="border-2 p-2 focus:outline-none "
							placeholder="email"
							type="email"
						/>
						<button
							onClick={handleSubmit}
							disabled={!email}
							// type="submit"
							className="absolute rounded-sm text-white py-2 px-4 bg-teal-400 right-4 bottom-4 "
						>
							{loading ? "Loading.." : "Next"}
						</button>
					</form>
				</div>
			) : (
				<div className="h-screen w-screen flex justify-center bg-red-400 items-center">
					<div className=" relative p-4 flex flex-col  space-y-2 rounded-sm h-40 w-80   bg-white">
						<label>Otp sent to {user.currentEmail}</label>
						<input
							onChange={(e) => setOtp(e.target.value)}
							className="border-2 p-2 focus:outline-none "
							placeholder="otp"
							type="number"
						/>
						<button
							disabled={!otp}
							onClick={verifyOtp}
							className="absolute rounded-sm text-white py-2 px-4 bg-teal-500 right-4 bottom-4 "
						>
							{loading ? "Loading.." : "Verify"}
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default RegisterEmail;
