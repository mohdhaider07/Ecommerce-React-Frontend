import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { data } from "../data";
const Slider = () => {
	const [index, setIndex] = useState(0);

	const handleClick = (value) => {
		if (value === "right") {
			console.log("right");
			setIndex((index + 1) % 3);
		} else if (value === "left") {
			console.log("left");
			setIndex((3 + index - 1) % 3);
		}
	};

	console.log("index", index);
	return (
		<div className="relative   h-screen  overflow-hidden">
			<div
				onClick={() => handleClick("left")}
				className="ml-4 cursor-pointer z-40 px-2 py-2 flex items-center absolute left-0 top-0 bottom-0 my-auto h-fit bg-white opacity-50 rounded-full"
			>
				<LeftOutlined />
			</div>

			<div
				style={{ transform: ` translateX(-${index * 100}vw)` }}
				className={`slider_wraper `}
			>
				{data.map((item) => (
					<div
						style={{ backgroundColor: item.color }}
						key={item.id}
						className="h-screen min-w-full flex bg-green-100 text-centre"
					>
						<div className="w-1/2 overflow-hidden">
							<img
								className="w-full "
								src={item.img}
								alt="shoping img"
							></img>
						</div>
						<div className="w-1/2 m-2 flex flex-col justify-center">
							<h1 className="text-7xl">{item.title}</h1>
							<p className="text-slate-800 text-lg tracking-wider">
								{item.details}
							</p>
							<button className="w-fit p-2 text-xl border-2  border-slate-900">
								Shop Now &#x2192;
							</button>
						</div>
					</div>
				))}
			</div>

			<div
				onClick={() => handleClick("right")}
				className="mr-4 cursor-pointer flex items-center px-2 py-2 absolute right-0 top-0 bottom-0 my-auto h-fit  bg-white opacity-50 rounded-full"
			>
				<RightOutlined />
			</div>
		</div>
	);
};

export default Slider;
