// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import StripeCheckout from "react-stripe-checkout";

// const Pay = () => {
// 	const [stripeToken, setStripeToken] = useState(null);
// 	const KEY =
// 		"pk_test_51LDWPVSCERtStmUqVrM9t8FK5z2wShPOWn7dAmvA7xTw8PyLXIHzCWu4c5nwavS5aocIq5YenVlBjgaFFA6hpj1p00zHkayFK3";

// 	const onToken = (token) => {
// 		setStripeToken(token);
// 		console.log(token);
// 	};
// 	useEffect(() => {
// 		stripeToken && makerequest();
// 	}, [stripeToken]);

// 	const makerequest = async () => {
// 		console.log("inside function");
// 		try {
// 			const res = await axios.post(
// 				"http://localhost:5000/api/checkout/payment",
// 				{
// 					tokenId: stripeToken.id,
// 					amount: 2000,
// 				}
// 			);
// 			console.log(res);
// 			console.log(res.data);
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};
// 	return (
// 		<div className="flex items-center h-screen justify-center">
// 			<StripeCheckout
// 				name="My Shop"
// 				image="../images/t-shirt.png"
// 				billingAddress
// 				shippingAddress
// 				description=" Your Total  $ 70"
// 				amount={2000}
// 				token={onToken}
// 				stripeKey={KEY}
// 			>
// 				<button className="p-4 bg-black text-white">pay Now</button>
// 			</StripeCheckout>
// 		</div>
// 	);
// };

// export default Pay;
