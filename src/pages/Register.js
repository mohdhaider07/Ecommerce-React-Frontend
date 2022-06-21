import React from "react";

const Register = () => {
	return (
		<div
			id="registerPage"
			className="h-screen w-screen flex justify-center items-center"
		>
			<div className="bg-white p-4">
				<h1 className="text-xl mb-4 font-thin">CREATE AN ACCOUNT</h1>
				<div className="space-y-4 mb-4 flex flex-col">
					<div className="flex flex-1 items-center space-x-2">
						<input
							className="p-2 flex-1 border focus:outline-none"
							type="text"
							placeHolder="name"
						/>
						<input
							className="p-2 flex-1 border focus:outline-none"
							type="text"
							placeHolder="last name"
						/>
					</div>
					<div className="flex flex-1 items-center space-x-2">
						<input
							className="p-2 flex-1 border focus:outline-none"
							type="text"
							placeHolder="username"
						/>
						<input
							className="p-2 flex-1 border focus:outline-none"
							type="email"
							placeHolder="email"
						/>
					</div>
					<div className="flex items-center space-x-2">
						<input
							className="p-2 flex-1 border focus:outline-none"
							type="password"
							placeHolder="password"
						/>
						<input
							className="p-2 flex-1 border focus:outline-none"
							type="password"
							placeHolder="confirm password"
						/>
					</div>
				</div>
				<p className="w-full">
					{" "}
					By creating an account. I consent to the processing of my
					personal data in accordance with the
					<br />
					<span className="font-bold"> PRIVACY POLICY</span>
				</p>
				<button className="py-2 px-20 text-white bg-teal-500">
					CREATE
				</button>
			</div>
		</div>
	);
};

export default Register;
