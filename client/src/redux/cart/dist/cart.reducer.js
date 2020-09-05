"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var cart_types_1 = require("./cart.types");
var cart_utils_1 = require("./cart.utils");
var INITIAL_STATE = {
    hidden: true,
    cartItems: []
};
var cartReducer = function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case cart_types_1.CartActionTypes.TOGGLE_CART_HIDDEN:
            return __assign(__assign({}, state), { hidden: !state.hidden });
        case cart_types_1.CartActionTypes.ADD_ITEM:
            return __assign(__assign({}, state), { cartItems: cart_utils_1.addItemToCart(state.cartItems, action.payload) });
        case cart_types_1.CartActionTypes.REMOVE_ITEM:
            {
                return __assign(__assign({}, state), { cartItems: cart_utils_1.removeItemFromCart(state.cartItems, action.payload) });
            }
        case cart_types_1.CartActionTypes.CLEAR_ITEM_FROM_CART:
            return __assign(__assign({}, state), { cartItems: cart_utils_1.clearItemFromCart(state.cartItems, action.payload) });
        case cart_types_1.CartActionTypes.CLEAR_CART:
            return __assign(__assign({}, state), { cartItems: [] });
        default:
            return state;
    }
};
exports["default"] = cartReducer;
