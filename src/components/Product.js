import React from "react";
import {
	SearchOutlined,
	HeartOutlined,
	ShoppingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import uniqid from "uniqid";
const Product = ({ item }) => {
	const dispatch = useDispatch();
	const addToCart = () => {
		const id = uniqid.time();
		dispatch(
			addProduct({
				...item,
				quantity: 1,
				color: item.color[0],
				size: item.size[0],
				id,
			})
		);
		toast.success("Added to cart");
	};

	return (
		<>
			<div className="relative bg-teal-50 flex justify-center items-center min-w-[20.1rem] m-2 h-[22rem]">
				<div className="bg-white h-44 w-44 rounded-full z-10"></div>
				<img
					className="z-40 absolute top-0 object-contain  bottom-0 my-auto h-[70%]"
					src={item.img}
				/>

				<div className="flex space-x-1 absolute  z-50 top-0 bottom-0 w-full h-full opacity-0 hover:opacity-100 transition-all duration-1000  justify-center items-center">
					<Link
						className="hover:text-black text-black"
						to={`/product/${item._id}`}
					>
						{" "}
						<span className="p-2 overflow-hidden text-2xl flex  transition-all duration-500 items-center hover:bg-teal-500 hover:text-white bg-white rounded-full">
							{" "}
							<SearchOutlined />
						</span>
					</Link>
					<span
						onClick={addToCart}
						className="p-2 cursor-pointer text-2xl flex transition-all duration-500 items-center  hover:bg-rose-500 hover:text-white bg-white rounded-full"
					>
						{" "}
						<ShoppingOutlined />
					</span>
				</div>
			</div>
		</>
	);
};

export default Product;
