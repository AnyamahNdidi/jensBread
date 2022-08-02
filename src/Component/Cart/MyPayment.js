import React from "react";

import { usePaystackPayment } from "react-paystack";
import { useSelector } from "react-redux";
import axios from "axios";

const MyPayment = ({datasubmit}) => {
	const cartData = useSelector((state) => state.myReducer.cart);
	const cartDataQuantity = useSelector((state) => state.myReducer.quantity);
	const cartTotalPrice = useSelector((state) => state.myReducer.totalPrice);

	const config = {
		reference: new Date().getTime().toString(),
		email: "jen'sbread123@gmail.com",
		amount: `${cartTotalPrice * 100}`,
		publicKey: "pk_test_23d13fb294f558953fdcdc971aa6ece27ff088e2",
	};

	

	// you can call this function anything
	const onClose = () => {
		// implementation for  whatever you want to do when the Paystack dialog closed.
		console.log("closed");
	};
	const initializePayment = usePaystackPayment(config);
	return (
		<div>
			<button
				onClick={() =>
				{
									
					initializePayment(datasubmit,onClose);
					
					
				}}>
				Proceed To Payment
			</button>
		</div>
	);
};

export default MyPayment;