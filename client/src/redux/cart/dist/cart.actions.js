"use strict";
exports.__esModule = true;
exports.clearCart = exports.clearItemFromCart = exports.removeItem = exports.addItem = exports.toggleCartHidden = void 0;
var cart_types_1 = require("./cart.types");
exports.toggleCartHidden = function () { return ({
    type: cart_types_1.CartActionTypes.TOGGLE_CART_HIDDEN
}); };
exports.addItem = function (item) { return ({
    type: cart_types_1.CartActionTypes.ADD_ITEM,
    payload: item
}); };
exports.removeItem = function (item) { return ({
    type: cart_types_1.CartActionTypes.REMOVE_ITEM,
    payload: item
}); };
exports.clearItemFromCart = function (item) { return ({
    type: cart_types_1.CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
}); };
exports.clearCart = function () { return ({
    type: cart_types_1.CartActionTypes.CLEAR_CART
}); };
