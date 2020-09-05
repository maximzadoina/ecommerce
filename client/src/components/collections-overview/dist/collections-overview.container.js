"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var reselect_1 = require("reselect");
var redux_1 = require("redux");
var shop_selectors_1 = require("../../redux/shop/shop.selectors");
var with_spinner_component_1 = require("../with-spinner/with-spinner.component");
var collections_overview_component_1 = require("./collections-overview.component");
var mapStateToProps = reselect_1.createStructuredSelector({
    isLoading: shop_selectors_1.selectIsCollectionFetching
});
var CollectionsOverviewContainer = redux_1.compose(react_redux_1.connect(mapStateToProps), with_spinner_component_1["default"])(collections_overview_component_1["default"]);
exports["default"] = CollectionsOverviewContainer;
