import React from "react";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Product = () => {
	return (
		<div>
			<Navbar />
			<Announcements />
			<div className="p-2 flex">
				<div className="flex m-4 flex-1">
					<img
						className="w-full  object-cover "
						src="../images/pngShopingImg.png"
					/>
				</div>
				<div className=" m-4 flex-1">
					<div>
						<h1 className="text-3xl font-thin">Denim Jumpsuit</h1>
						<p className="w-[80%] mb-4 tracking-wider">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation
							ullamco laboris nisi ut aliquip ex ea
						</p>
						<h2 className="text-4xl  font-thin"> $ 20</h2>
					</div>
					<div className="flex mt-8 items-center w-[55%]  justify-between">
						<div className="flex items-center space-x-1">
							<span className="text-2xl mr-2 font-thin">Color</span>
							<span className="p-4  bg-red-500 rounded-full"></span>
							<span className="p-4 bg-slate-500 rounded-full"></span>
							<span className="p-4 bg-cyan-500 rounded-full"></span>
						</div>
						<div className="flex justify-center items-center space-x-1">
							<span className="text-2xl mr-2 font-thin">Size</span>
							<select className="text-centre py-1 focus:outline-none focus:border-teal-400 px-2 border">
								<option>XS</option>
								<option>S</option>
								<option>MD</option>
								<option>L</option>
								<option>XL</option>
							</select>
						</div>
					</div>
					<div className=" mt-12 flex items-center w-[55%]  justify-between">
						<div className="flex items-center space-x-1">
							<button className="text-2xl py-1 px-3 rounded-lg focus:border-slate-700 focus:border font-bold">
								-
							</button>
							<span className="text-2xl flex items-center py-1 px-3  border border-teal-400 rounded-lg mx-2 font-thin">
								1
							</span>
							<button className="text-2xl py-1 px-3 rounded-lg focus:border-slate-700 focus:border font-bold">
								+
							</button>
						</div>
						<div className="flex justify-center items-center space-x-1">
							<Link style={{ textDecoration: "none" }} to="/cart">
								<button className="p-3 border-2 border-teal-400">
									ADD TO CARD
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<NewsLetter />
			<Footer />
		</div>
	);
};

export default Product;
