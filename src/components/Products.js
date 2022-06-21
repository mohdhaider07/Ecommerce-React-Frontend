import React from "react";
import Product from "./Product";
import { products } from "../data";

const Products = () => {
	return (
		<div className="p-2 flex justify-center flex-wrap">
			{products.map((item) => (
				<Product key={item.id} item={item} />
			))}
		</div>
	);
};

export default Products;
