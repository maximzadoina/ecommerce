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
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var firebase_utils_1 = require("../../firebase/firebase.utils");
var shop_actions_1 = require("../../redux/shop/shop.actions");
var with_spinner_component_1 = require("../../components/with-spinner/with-spinner.component");
var collections_overview_component_1 = require("../../components/collections-overview/collections-overview.component");
var collection_component_1 = require("../collection/collection.component");
var CollectionsOverviewWithSpinner = with_spinner_component_1["default"](collections_overview_component_1["default"]);
var CollectionPageWithSpinner = with_spinner_component_1["default"](collection_component_1["default"]);
var ShopPage = /** @class */ (function (_super) {
    __extends(ShopPage, _super);
    function ShopPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loading: true
        };
        return _this;
    }
    ShopPage.prototype.componentDidMount = function () {
        var _this = this;
        var updateCollections = this.props.updateCollections;
        var collectionRef = firebase_utils_1.firestore.collection('collections');
        collectionRef.get().then(function (snapshot) {
            var collectionsMap = firebase_utils_1.convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            _this.setState({ loading: false });
        });
    };
    ShopPage.prototype.render = function () {
        var match = this.props.match;
        var loading = this.state.loading;
        return (react_1["default"].createElement("div", { className: "shop-page" },
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "" + match.path, render: function (props) { return react_1["default"].createElement(CollectionsOverviewWithSpinner, __assign({ isLoading: loading }, props)); } }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: match.path + "/:collectionId", render: function (props) { return (react_1["default"].createElement(CollectionPageWithSpinner, __assign({ isLoading: loading }, props))); } })));
    };
    return ShopPage;
}(react_1["default"].Component));
var mapDispatchToProps = function (dispatch) { return ({
    updateCollections: function (collectionsMap) {
        return dispatch(shop_actions_1.updateCollections(collectionsMap));
    }
}); };
exports["default"] = react_redux_1.connect(null, mapDispatchToProps)(ShopPage);
