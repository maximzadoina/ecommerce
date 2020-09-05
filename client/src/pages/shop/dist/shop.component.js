"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var shop_actions_1 = require("../../redux/shop/shop.actions");
var collections_overview_container_1 = require("../../components/collections-overview/collections-overview.container");
var collection_container_1 = require("../collection/collection.container");
var ShopPage = function (_a) {
    var match = _a.match, fetchCollectionsStart = _a.fetchCollectionsStart;
    react_1.useEffect(function () {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);
    return (react_1["default"].createElement("div", { className: "shop-page" },
        react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "" + match.path, component: collections_overview_container_1["default"] }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: match.path + "/:collectionId", component: collection_container_1["default"] })));
};
var mapDispatchToProps = function (dispatch) { return ({
    fetchCollectionsStart: function () { return dispatch(shop_actions_1.fetchCollectionsStart()); }
}); };
exports["default"] = react_redux_1.connect(null, mapDispatchToProps)(ShopPage);
