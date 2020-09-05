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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var with_spinner_styles_1 = require("./with-spinner.styles");
var WithSpinner = function (WrappedComponent) { return function (_a) {
    var isLoading = _a.isLoading, otherProps = __rest(_a, ["isLoading"]);
    return isLoading ? (react_1["default"].createElement(with_spinner_styles_1.SpinnerOverlay, null,
        react_1["default"].createElement(with_spinner_styles_1.SpinnerContainer, null))) : (react_1["default"].createElement(WrappedComponent, __assign({}, otherProps)));
}; };
exports["default"] = WithSpinner;
