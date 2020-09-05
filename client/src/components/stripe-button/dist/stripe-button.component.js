"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_stripe_checkout_1 = require("react-stripe-checkout");
var axios_1 = require("axios");
var StripeCheckoutButton = function (_a) {
    var price = _a.price;
    var priceForStripe = price * 100;
    var publishableKey = 'pk_test_51HJGrLLdC9C411NAmKjejWfBum12b3xw9bsFdt2n10zL8qcGjGIgaKoreC8ZvK2xrdbUvvxqyP7Y1d4LNCr5jx2q00RFgaEqTu';
    var onToken = function (token) {
        axios_1["default"]({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        })
            .then(function (response) {
            alert('succesful payment');
        })["catch"](function (error) {
            console.log('Payment Error: ', error);
            alert('There was an issue with your payment! Please make sure you use the provided credit card.');
        });
    };
    return (react_1["default"].createElement(react_stripe_checkout_1["default"], { label: 'Pay Now', name: 'Ecommerce', billingAddress: true, shippingAddress: true, image: 'https://svgshare.com/i/CUz.svg', description: "Your total is $" + price, amount: priceForStripe, panelLabel: 'Pay Now', token: onToken, stripeKey: publishableKey }));
};
exports["default"] = StripeCheckoutButton;
