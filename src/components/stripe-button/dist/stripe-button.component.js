"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_stripe_checkout_1 = require("react-stripe-checkout");
var StripeCheckoutButton = function (_a) {
    var price = _a.price;
    var priceForStripe = price * 100;
    var publishableKey = 'pk_test_51HJGrLLdC9C411NAmKjejWfBum12b3xw9bsFdt2n10zL8qcGjGIgaKoreC8ZvK2xrdbUvvxqyP7Y1d4LNCr5jx2q00RFgaEqTu';
    var onToken = function (token) {
        console.log(token);
        alert('Paymen Successful');
    };
    return (react_1["default"].createElement(react_stripe_checkout_1["default"], { label: 'Pay Now', name: 'Ecommerce', billingAddress: true, shippingAddress: true, image: 'https://svgshare.com/i/CUz.svg', description: "Your total is $" + price, amount: priceForStripe, panelLabel: 'Pay Now', token: onToken, stripeKey: publishableKey }));
};
exports["default"] = StripeCheckoutButton;
