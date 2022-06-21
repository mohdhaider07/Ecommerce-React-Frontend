import React from "react";
import { SearchOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { Link } from "react-router-dom";
const Navbar = () => {
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
					<Link className="text-slate-900" to="/register">
						<span>REGISTER</span>
					</Link>
					<Link className="text-slate-900" to="/login">
						<span>SIGN IN</span>
					</Link>

					<div className="-mt-2 cursor-pointer">
						<Badge size="small" count={5}>
							<ShoppingOutlined />
						</Badge>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
