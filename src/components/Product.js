import React from "react";
import {
	SearchOutlined,
	HeartOutlined,
	ShoppingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
	return (
		<>
			<Link to={`/product/${item.id}`}>
				<div className="relative bg-teal-50 flex justify-center items-center min-w-[20.1rem] m-2 h-[22rem]">
					<div className="bg-white h-44 w-44 rounded-full z-10"></div>
					<img
						className="z-40 absolute top-0  bottom-0 my-auto h-[70%]"
						src={item.img}
					/>

					<div className="flex space-x-1 absolute z-50 top-0 bottom-0 w-full h-full bg-gray-50 opacity-0 transition-all duration-1000 hover:opacity-80 justify-center items-center">
						<span className="p-2 text-xl flex  transition-all duration-500 items-center hover:p-3 bg-white rounded-full">
							{" "}
							<SearchOutlined />
						</span>
						<span className="p-2 text-xl flex transition-all duration-500 items-center hover:p-3 bg-white rounded-full">
							{" "}
							<HeartOutlined />
						</span>
						<span className="p-2 text-xl flex transition-all duration-500 items-center hover:p-3 bg-white rounded-full">
							{" "}
							<ShoppingOutlined />
						</span>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Product;
