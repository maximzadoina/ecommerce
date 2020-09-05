"use strict";
exports.__esModule = true;
exports.selectIsCollectionsLoaded = exports.selectIsCollectionFetching = exports.selectCollection = exports.selectCollectionsForPreview = exports.selectCollections = void 0;
var reselect_1 = require("reselect");
var selectShop = function (state) { return state.shop; };
exports.selectCollections = reselect_1.createSelector([selectShop], function (shop) { return shop.collections; });
exports.selectCollectionsForPreview = reselect_1.createSelector([exports.selectCollections], function (collections) {
    return collections ? Object.keys(collections).map(function (key) { return collections[key]; }) : [];
});
exports.selectCollection = function (collectionUrlParam) {
    return reselect_1.createSelector([exports.selectCollections], function (collections) { return (collections ? collections[collectionUrlParam] : null); });
};
exports.selectIsCollectionFetching = reselect_1.createSelector([selectShop], function (shop) { return shop.isFetching; });
exports.selectIsCollectionsLoaded = reselect_1.createSelector([selectShop], function (shop) { return !!shop.collections; });
