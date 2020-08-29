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
var shop_types_1 = require("./shop.types");
var INITIAL_STATE = {
    collections: null
};
var shopReducer = function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case shop_types_1.ShopActionTypes.UPDATE_COLLECTIONS:
            return __assign(__assign({}, state), { collections: action.payload });
        default:
            return state;
    }
};
exports["default"] = shopReducer;
