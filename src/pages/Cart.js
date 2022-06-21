import React from "react";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Cart = () => {
	return (
		<div>
			<Navbar />
			<Announcements />
			<div className="p-2 ">
				<div className="text-center">
					<h1 className="text-4xl font-thin">YOUR BAG</h1>
				</div>
				<div className="flex p-2 items-center justify-between">
					<button className="font-semibold border-4 border-slate-800 p-2 ">
						{" "}
						CONTINUE SHIPPING
					</button>
					<div className="space-x-2">
						<span className="underline decoration-2">
							Shopping Bag(2)
						</span>
						<span className="underline decoration-2">
							Your Wishlist(0)
						</span>
					</div>
					<button className="font-semibold text-white bg-slate-900 py-3 px-3 ">
						CHECKOUT NOW
					</button>
				</div>
				<div className="flex">
					<div className="p-2 w-full">
						<div className=" border-b-2 flex gap-4">
							<div className="w-28 flex justify-center items-center h-40">
								<img
									className="w-full object-cover"
									src="./images/t-shirt.png"
								/>
							</div>
							<div className="flex w-full justify-between">
								<div className="flex space-y-3 flex-col justify-center">
									<div>
										<span className="font-semibold">Product:</span>
										<span>JESSIE THUNDER SHOES</span>
									</div>
									<div>
										<span className="font-semibold">ID:</span>
										<span>91563248</span>
									</div>
									<span className="p-2 bg-black rounded-full w-fit"></span>
									<div>
										<span className="font-semibold">SIZE:</span>
										<span>37.5</span>
									</div>
								</div>
								<div className="flex flex-col space-y-3 items-center justify-center">
									<div className="flex items-center space-x-1">
										<button className="text-2xl py-1 px-3 rounded-lg focus:border-slate-700 focus:border font-bold">
											-
										</button>
										<span className="text-2xl flex items-center py-1 px-3   font-thin">
											3
										</span>
										<button className="text-2xl py-1 px-3 rounded-lg focus:border-slate-700 focus:border font-bold">
											+
										</button>
									</div>
									<h2 className="text-4xl  font-thin"> $ 20</h2>
								</div>
							</div>
						</div>
						<div className=" border-b-2 flex gap-4">
							<div className="w-28 flex justify-center items-center h-40">
								<img
									className="w-full object-cover"
									src="./images/pngShopingImg.png"
								/>
							</div>
							<div className="flex w-full justify-between">
								<div className="flex space-y-3 flex-col justify-center">
									<div>
										<span className="font-semibold">Product:</span>
										<span>JESSIE THUNDER SHOES</span>
									</div>
									<div>
										<span className="font-semibold">ID:</span>
										<span>91563248</span>
									</div>
									<span className="p-2 bg-black rounded-full w-fit"></span>
									<div>
										<span className="font-semibold">SIZE:</span>
										<span>37.5</span>
									</div>
								</div>
								<div className="flex flex-col space-y-3 items-center justify-center">
									<div className="flex items-center space-x-1">
										<button className="text-2xl py-1 px-3 rounded-lg focus:border-slate-700 focus:border font-bold">
											-
										</button>
										<span className="text-2xl flex items-center py-1 px-3   font-thin">
											7
										</span>
										<button className="text-2xl py-1 px-3 rounded-lg focus:border-slate-700 focus:border font-bold">
											+
										</button>
									</div>
									<h2 className="text-4xl  font-thin"> $ 150</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="p-2 border-2 m-2 w-1/3">
						<h1 className="mb-8 mt-2 text-2xl font-thin">
							ORDER SUMMARY
						</h1>
						<div className="space-y-4 mb-6">
							<div className="flex  justify-between">
								<span>Subtotal</span>
								<span>$ 80</span>
							</div>
							<div className="flex  justify-between">
								<span>Estimated Shipping</span>
								<span>$ 5.80</span>
							</div>
							<div className="flex  justify-between">
								<span>Shipping Discount</span>
								<span>$ -5.80</span>
							</div>
							<div className="flex text-lg font-bold justify-between">
								<span>Total</span>
								<span>$ 80</span>
							</div>
						</div>
						<button className="py-2 w-full text-white bg-slate-900">
							ORDER NOW
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Cart;
