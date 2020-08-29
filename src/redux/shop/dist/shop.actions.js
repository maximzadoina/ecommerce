"use strict";
exports.__esModule = true;
exports.updateCollections = void 0;
var shop_types_1 = require("./shop.types");
exports.updateCollections = function (collectionsMap) { return ({
    type: shop_types_1.ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
}); };
