import React from "react";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";

const Categories = () => {
	return (
		<div className="flex p-2">
			{categories.map((item) => (
				<CategoryItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default Categories;
