"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var cart_actions_1 = require("../../redux/cart/cart.actions");
var collection_item_styles_1 = require("./collection-item.styles");
var CollectionItem = function (_a) {
    var item = _a.item, addItem = _a.addItem;
    var name = item.name, price = item.price, imageUrl = item.imageUrl;
    return (react_1["default"].createElement(collection_item_styles_1.CollectionItemContainer, null,
        react_1["default"].createElement(collection_item_styles_1.BackgroundImage, { className: 'image', imageUrl: imageUrl }),
        react_1["default"].createElement(collection_item_styles_1.CollectionFooterContainer, null,
            react_1["default"].createElement(collection_item_styles_1.NameContainer, null, name),
            react_1["default"].createElement(collection_item_styles_1.PriceContainer, null, price)),
        react_1["default"].createElement(collection_item_styles_1.AddButton, { onClick: function () { return addItem(item); }, inverted: true }, "Add to cart")));
};
var mapDispatchToProps = function (dispatch) { return ({
    addItem: function (item) { return dispatch(cart_actions_1.addItem(item)); }
}); };
exports["default"] = react_redux_1.connect(null, mapDispatchToProps)(CollectionItem);
