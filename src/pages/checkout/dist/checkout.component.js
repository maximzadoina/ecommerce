"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var reselect_1 = require("reselect");
var cart_selectors_1 = require("../../redux/cart/cart.selectors");
var stripe_button_component_1 = require("../../components/stripe-button/stripe-button.component");
var checkout_item_component_1 = require("../../components/checkout-item/checkout-item.component");
require("./checkout.styles.scss");
var CheckoutPage = function (_a) {
    var cartItems = _a.cartItems, total = _a.total;
    return (react_1["default"].createElement("div", { className: "checkout-page" },
        react_1["default"].createElement("div", { className: "checkout-header" },
            react_1["default"].createElement("div", { className: "header-block" },
                react_1["default"].createElement("span", null, "Product")),
            react_1["default"].createElement("div", { className: "header-block" },
                react_1["default"].createElement("span", null, "Description")),
            react_1["default"].createElement("div", { className: "header-block" },
                react_1["default"].createElement("span", null, "Quantity")),
            react_1["default"].createElement("div", { className: "header-block" },
                react_1["default"].createElement("span", null, "Price")),
            react_1["default"].createElement("div", { className: "header-block" },
                react_1["default"].createElement("span", null, "Remove"))),
        cartItems.map(function (cartItem) { return (react_1["default"].createElement(checkout_item_component_1["default"], { key: cartItem.id, cartItem: cartItem })); }),
        react_1["default"].createElement("div", { className: "total" },
            "TOTAL: $",
            total),
        react_1["default"].createElement("div", { className: "test-warning" },
            "*Please use the following test credit card for payments*",
            react_1["default"].createElement("br", null),
            "4242 4242 4242 4242 - Exp: 01/21 - CVV: 123"),
        react_1["default"].createElement(stripe_button_component_1["default"], { price: total })));
};
var mapStateToProps = reselect_1.createStructuredSelector({
    cartItems: cart_selectors_1.selectCartItems,
    total: cart_selectors_1.selectCartTotal
});
exports["default"] = react_redux_1.connect(mapStateToProps, null)(CheckoutPage);
