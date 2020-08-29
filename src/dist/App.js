"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var reselect_1 = require("reselect");
require("./App.scss");
var homepage_component_1 = require("./pages/homepage/homepage.component");
var shop_component_1 = require("./pages/shop/shop.component");
var sign_in_and_sing_up_component_1 = require("./pages/sign-in-and-sign-up/sign-in-and-sing-up.component");
var checkout_component_1 = require("./pages/checkout/checkout.component");
var header_component_1 = require("./components/header/header.component");
var firebase_utils_1 = require("./firebase/firebase.utils");
var user_actions_1 = require("./redux/user/user.actions");
var user_selectors_1 = require("./redux/user/user.selectors");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        var setCurrentUser = this.props.setCurrentUser;
        this.unsubscribeFromAuth = firebase_utils_1.auth.onAuthStateChanged(function (userAuth) { return __awaiter(_this, void 0, void 0, function () {
            var userRef;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!userAuth) return [3 /*break*/, 2];
                        return [4 /*yield*/, firebase_utils_1.createUserProfileDocument(userAuth, null)];
                    case 1:
                        userRef = _a.sent();
                        userRef === null || userRef === void 0 ? void 0 : userRef.onSnapshot(function (snapShot) {
                            setCurrentUser(__assign({ id: snapShot.id }, snapShot.data()));
                        });
                        _a.label = 2;
                    case 2:
                        setCurrentUser(userAuth);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    App.prototype.componentWillUnmount = function () {
        this.unsubscribeFromAuth();
    };
    App.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(header_component_1["default"], null),
            react_1["default"].createElement(react_router_dom_1.Switch, null,
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/", component: homepage_component_1["default"] }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/shop", component: shop_component_1["default"] }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/signin", render: function () { return _this.props.currentUser ? (react_1["default"].createElement(react_router_dom_1.Redirect, { to: "/" })) : (react_1["default"].createElement(sign_in_and_sing_up_component_1["default"], null)); } }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/checkout", component: checkout_component_1["default"] }))));
    };
    return App;
}(react_1["default"].Component));
var mapStateToProps = reselect_1.createStructuredSelector({
    currentUser: user_selectors_1.selectCurrentUser
});
var mapDispatchToProps = function (dispatch) { return ({
    setCurrentUser: function (user) { return dispatch(user_actions_1.setCurrentUser(user)); }
}); };
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);