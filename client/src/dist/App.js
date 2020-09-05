"use strict";
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
var user_selectors_1 = require("./redux/user/user.selectors");
var user_actions_1 = require("./redux/user/user.actions");
var App = function (_a) {
    var checkUserSession = _a.checkUserSession, currentUser = _a.currentUser;
    react_1.useEffect(function () {
        checkUserSession();
    }, [checkUserSession]);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(header_component_1["default"], null),
        react_1["default"].createElement(react_router_dom_1.Switch, null,
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/", component: homepage_component_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/shop", component: shop_component_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/signin", render: function () { return currentUser ? (react_1["default"].createElement(react_router_dom_1.Redirect, { to: "/" })) : (react_1["default"].createElement(sign_in_and_sing_up_component_1["default"], null)); } }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/checkout", component: checkout_component_1["default"] }))));
};
var mapStateToProps = reselect_1.createStructuredSelector({
    currentUser: user_selectors_1.selectCurrentUser
});
var mapDispatchToProps = function (dispatch) { return ({
    checkUserSession: function () { return dispatch(user_actions_1.checkUserSession()); }
}); };
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
