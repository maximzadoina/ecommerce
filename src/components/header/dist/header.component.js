"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var reselect_1 = require("reselect");
var cart_icon_component_1 = require("../cart-icon/cart-icon.component");
var cart_dropdown_component_1 = require("../cart-dropdown/cart-dropdown.component");
var crown_svg_1 = require("../../assets/crown.svg");
var cart_selectors_1 = require("../../redux/cart/cart.selectors");
var user_selectors_1 = require("../../redux/user/user.selectors");
var firebase_utils_1 = require("../../firebase/firebase.utils");
var header_styles_1 = require("./header.styles");
var Header = function (_a) {
    var currentUser = _a.currentUser, hidden = _a.hidden;
    return (react_1["default"].createElement(header_styles_1.HeaderContainer, null,
        react_1["default"].createElement(header_styles_1.LogoContainer, { to: "/" },
            react_1["default"].createElement(crown_svg_1.ReactComponent, { className: "logo" })),
        react_1["default"].createElement(header_styles_1.OptionsContainer, null,
            react_1["default"].createElement(header_styles_1.OptionLink, { to: "/shop" }, "SHOP"),
            react_1["default"].createElement(header_styles_1.OptionLink, { to: "/contact" }, "CONTACT"),
            currentUser ? (react_1["default"].createElement(header_styles_1.OptionLink, { as: 'div', onClick: function () { return firebase_utils_1.auth.signOut(); } }, "SIGN OUT")) : (react_1["default"].createElement(header_styles_1.OptionLink, { to: "/signin" }, "SING IN")),
            react_1["default"].createElement(cart_icon_component_1["default"], null)),
        hidden ? null : react_1["default"].createElement(cart_dropdown_component_1["default"], null)));
};
var mapStateToProps = reselect_1.createStructuredSelector({
    currentUser: user_selectors_1.selectCurrentUser,
    hidden: cart_selectors_1.selectCartHidden
});
exports["default"] = react_redux_1.connect(mapStateToProps)(Header);
