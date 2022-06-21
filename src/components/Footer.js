import React from "react";
import {
	FacebookFilled,
	InstagramOutlined,
	TwitterOutlined,
	SkypeOutlined,
	MailOutlined,
	CompassOutlined,
	PhoneFilled,
} from "@ant-design/icons";
const Footer = () => {
	return (
		<div className="p-2 flex ">
			<div className="p-2 flex-1">
				<h1 className="mb-2 text-4xl font-bold">LOGO.</h1>
				<p className="">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Varius duis at consectetur lorem. Fermentum leo vel orci porta
				</p>
				<div className="flex items-center space-x-4">
					<span className="hover:p-4 transition-all duration-500 p-3 text-xl flex bg-blue-700 text-white rounded-full">
						<FacebookFilled />
					</span>
					<span className="hover:p-4 transition-all duration-500 p-3 text-xl flex bg-pink-700 text-white rounded-full">
						<InstagramOutlined />
					</span>
					<span className="hover:p-4 transition-all duration-500 p-3 text-xl flex bg-blue-400 text-white rounded-full">
						{" "}
						<TwitterOutlined />
					</span>
					<span className="hover:p-4 transition-all duration-500 p-3 text-xl  flex bg-blue-400 text-white rounded-full">
						{" "}
						<SkypeOutlined />
					</span>
				</div>
			</div>
			<div className=" p-2 flex-1">
				<h3 className="text-xl font-semibold">Useful Links</h3>
				<ui className=" list-none justify-between flex flex-wrap">
					<li className="list-none  w-1/2">Home</li>
					<li className="list-none  w-1/2">Men Shoes</li>
					<li className="list-none  w-1/2">T-shirts</li>
					<li className="list-none  w-1/2">Home</li>
					<li className="list-none  w-1/2">Men Shoes</li>
					<li className="list-none  w-1/2">Men Shoes</li>
					<li className="list-none  w-1/2">T-shirts</li>
					<li className="list-none  w-1/2">Home</li>
					<li className="list-none  w-1/2">Men Shoes</li>
					<li className="list-none  w-1/2">Men Shoes</li>
					<li className="list-none  w-1/2">T-shirts</li>
					<li className="list-none  w-1/2">Home</li>
					<li className="list-none  w-1/2">Men Shoes</li>
				</ui>
			</div>
			<div className="p-2 flex-1">
				<h3 className="text-xl font-semibold">Contact</h3>
				<div className="flex space-x-2">
					<span>
						<CompassOutlined />
					</span>
					<p className="mb-0">
						Vestibulum lorem sed risus ultricies tristique. Sed adipiscing
						diam donec adipiscing.
					</p>
				</div>
				<div className="flex space-x-2">
					<span>
						<PhoneFilled />
					</span>
					<p className="mb-0">+91-56897-52689</p>
				</div>
				<div className="flex space-x-2">
					<span>
						<MailOutlined />
					</span>
					<p className="mb-0">haiderahmed12786@gmail.com</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
