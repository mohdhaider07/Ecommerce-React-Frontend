import React from "react";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";

const ProductsList = () => {
	return (
		<div>
			<Navbar />
			<Announcements />
			<div className="m-4 mt-12">
				<h1 className="text-5xl  font-semibold">Dresses</h1>
				<div className="flex justify-between">
					<div className="flex space-x-4">
						<span className="text-xl font-medium">Filter Products:</span>
						<select className="p-2 px-4 focus:outline-none border">
							<option disabled selected>
								Color
							</option>
							<option>Black</option>
							<option>Red</option>
							<option>Blue</option>
							<option>Yellow</option>
						</select>
						<select className="p-2 px-4 focus:outline-none border">
							<option disabled selected>
								Size
							</option>
							<option>XS</option>
							<option>S</option>
							<option>M</option>
							<option>L</option>
							<option>XL</option>
						</select>
					</div>
					<div className="flex items-center space-x-4">
						<span className="text-xl font-medium">Filter Products:</span>
						<select className="p-2 px-4 focus:outline-none border">
							<option disabled selected>
								Newest
							</option>
							<option>Price (asc)</option>
							<option>Price (desc)</option>
						</select>
					</div>
				</div>
			</div>
			<Products />
			<NewsLetter />
			<Footer />
		</div>
	);
};

export default ProductsList;
