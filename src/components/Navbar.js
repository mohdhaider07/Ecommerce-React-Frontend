import React from "react";
import { SearchOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userRedux";
const Navbar = () => {
	const dispatch = useDispatch();
	const quantity = useSelector((state) => state.cart.quantity);
	const user = useSelector((state) => state.user.currentUser);
	// console.log(quantity);

	return (
		<div className="h-12 ">
			<div className="py-1 px-4 flex justify-between items-center">
				<div className="w-1/3 flex  items-center space-x-6">
					<span className="text-md">EN</span>
					<div className="border flex items-centre">
						<input className="focus:outline-none" type="text" />
						<span className=" text-gray-400 -mt-1">
							<SearchOutlined />
						</span>
					</div>
				</div>
				<div className="w-1/3 text-center">
					<Link className="text-black" to="/">
						<h1 className="m-0 font-bold text-2xl">LOGO.</h1>
					</Link>
				</div>
				<div className="w-1/3 flex justify-end items-center space-x-6">
					{!user ? (
						<>
							<Link
								className="cursor-pointer text-slate-900"
								to="/register"
							>
								<span>REGISTER</span>
							</Link>
							<Link
								className="cursor-pointer text-slate-900"
								to="/login"
							>
								<span>SIGN IN</span>
							</Link>
						</>
					) : (
						<span
							onClick={() => dispatch(logout())}
							className="text-rose-500 cursor-pointer"
						>
							LOGOUT
						</span>
					)}
					<Link to="/cart">
						<div className="-mt-2 cursor-pointer">
							<Badge
								size="small"
								style={{
									backgroundColor: "#1363DF",
									position: "absolute",
									top: 10,
									right: 4,
								}}
								className=""
								count={quantity}
							>
								<span className="text-xl">
									{" "}
									<ShoppingOutlined />
								</span>
							</Badge>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
