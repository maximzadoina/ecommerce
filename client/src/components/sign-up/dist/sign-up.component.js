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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var form_input_component_1 = require("../form-input/form-input.component");
var custom_button_component_1 = require("../custom-button/custom-button.component");
var user_actions_1 = require("../../redux/user/user.actions");
require("./sign-up.styles.scss");
var SignUp = function (_a) {
    var signUpStart = _a.signUpStart;
    var _b = react_1.useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }), userCredentials = _b[0], setCredentials = _b[1];
    var displayName = userCredentials.displayName, email = userCredentials.email, password = userCredentials.password, confirmPassword = userCredentials.confirmPassword;
    var handleSubmit = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            event.preventDefault();
            if (password !== confirmPassword) {
                alert("passwords don't match");
                return [2 /*return*/];
            }
            signUpStart({ displayName: displayName, email: email, password: password });
            return [2 /*return*/];
        });
    }); };
    var handleChangeDisplayName = function (event) {
        setCredentials(__assign(__assign({}, userCredentials), { displayName: event.target.value }));
    };
    var handleChangeEmail = function (event) {
        setCredentials(__assign(__assign({}, userCredentials), { email: event.target.value }));
    };
    var handleChangePassword = function (event) {
        setCredentials(__assign(__assign({}, userCredentials), { password: event.target.value }));
    };
    var handleChangeConfirmPassword = function (event) {
        setCredentials(__assign(__assign({}, userCredentials), { confirmPassword: event.target.value }));
    };
    return (react_1["default"].createElement("div", { className: "sign-up" },
        react_1["default"].createElement("h2", { className: "title" }, "I do not have a account"),
        react_1["default"].createElement("span", null, "Sign up with your email and password"),
        react_1["default"].createElement("form", { className: "sign-up-form", onSubmit: handleSubmit },
            react_1["default"].createElement(form_input_component_1["default"], { type: "text", name: "displayName", value: displayName, handleChange: handleChangeDisplayName, label: "Display Name", required: true }),
            react_1["default"].createElement(form_input_component_1["default"], { type: "email", name: "email", value: email, handleChange: handleChangeEmail, label: "Email", required: true }),
            react_1["default"].createElement(form_input_component_1["default"], { type: "password", name: "password", value: password, handleChange: handleChangePassword, label: "Password", required: true }),
            react_1["default"].createElement(form_input_component_1["default"], { type: "password", name: "confirmPassword", value: confirmPassword, handleChange: handleChangeConfirmPassword, label: "Confirm Password", required: true }),
            react_1["default"].createElement(custom_button_component_1["default"], { type: "submit" }, "SIGN UP"))));
};
var mapDispatchToProps = function (dispatch) { return ({
    signUpStart: function (userCredentials) { return dispatch(user_actions_1.signUpStart(userCredentials)); }
}); };
exports["default"] = react_redux_1.connect(null, mapDispatchToProps)(SignUp);
