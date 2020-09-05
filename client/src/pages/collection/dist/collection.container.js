"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var reselect_1 = require("reselect");
var shop_selectors_1 = require("../../redux/shop/shop.selectors");
var with_spinner_component_1 = require("../../components/with-spinner/with-spinner.component");
var collection_component_1 = require("./collection.component");
var mapStateToProps = reselect_1.createStructuredSelector({
    isLoading: function (state) { return !shop_selectors_1.selectIsCollectionsLoaded(state); }
});
var CollectionPageContainer = redux_1.compose(react_redux_1.connect(mapStateToProps), with_spinner_component_1["default"])(collection_component_1["default"]);
exports["default"] = CollectionPageContainer;
