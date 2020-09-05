"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var collection_item_component_1 = require("../../components/collection-item/collection-item.component");
var shop_selectors_1 = require("../../redux/shop/shop.selectors");
require("./collection.styles.scss");
var CollectionPage = function (_a) {
    var collection = _a.collection;
    var title = collection.title, items = collection.items;
    return (react_1["default"].createElement("div", { className: "collection-page" },
        react_1["default"].createElement("h2", { className: "title" }, title),
        react_1["default"].createElement("div", { className: "items" }, items.map(function (item) { return (react_1["default"].createElement(collection_item_component_1["default"], { key: item.id, item: item })); }))));
};
var mapStateToProps = function (state, ownProps) { return ({
    collection: shop_selectors_1.selectCollection(ownProps.match.params.collectionId)(state)
}); };
exports["default"] = react_redux_1.connect(mapStateToProps)(CollectionPage);
