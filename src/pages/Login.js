import React from "react";

const Login = () => {
	return (
		<div
			id="loginPage"
			className="h-screen w-screen flex justify-center items-center"
		>
			<div className="bg-white p-4">
				<h1 className="text-xl mb-4 font-thin">SIGN IN</h1>
				<div className="space-y-4 mb-4 flex flex-col">
					<div className="flex flex-1 items-center space-x-2">
						<input
							className="p-2 flex-1 border focus:outline-none"
							type="text"
							placeHolder="username"
						/>
					</div>
					<div className="flex flex-1 items-center space-x-2">
						<input
							className="p-2 flex-1 border focus:outline-none"
							type="password"
							placeHolder="password"
						/>
					</div>
				</div>

				<button className="py-2 px-6 text-white bg-teal-500">CREATE</button>
				<p className="underline mt-2 mb-1 text-xs font-thin">
					DO NOT YOU REMEMBER THE PASSWORD
				</p>
				<p className="underline text-xs font-thin">CREATE A NEW ACCOUNT</p>
			</div>
		</div>
	);
};

export default Login;