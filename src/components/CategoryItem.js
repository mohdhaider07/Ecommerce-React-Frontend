import React from "react";
import { Link } from "react-router-dom";
const CategoryItem = ({ item }) => {
	return (
		<>
			<div className="flex-1 relative p-2 text-white" key={item.id}>
				<img className="w-full" src={item.img} alt={item.img}></img>
				<div className="absolute text-center top-0 bottom-0 mx-auto h-fit w-fit left-0 right-0 my-auto">
					<h1 className="text-3xl font-semibold text-white ">
						{item.title}
					</h1>
					<Link to={`/products/${item.cat}`}>
						<button className="p-2 bg-white font-semibold text-bold text-slate-900 cursor-pointer">
							SHOP NOW
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default CategoryItem;
