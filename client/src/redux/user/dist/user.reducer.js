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
var user_types_1 = require("./user.types");
var INITIAL_STATE = {
    currentUser: null,
    error: null
};
var userReducer = function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case user_types_1.UserActionTypes.SIGN_IN_SUCCESS:
            return __assign(__assign({}, state), { currentUser: action.payload, error: null });
        case user_types_1.UserActionTypes.SIGN_OUT_SUCCESS:
            return __assign(__assign({}, state), { currentUser: null, error: null });
        case user_types_1.UserActionTypes.SIGN_IN_FAILURE:
        case user_types_1.UserActionTypes.SIGN_OUT_FAILURE:
        case user_types_1.UserActionTypes.SIGN_UP_FAILURE:
            return __assign(__assign({}, state), { error: action.payload });
        default:
            return state;
    }
};
exports["default"] = userReducer;
