"use strict";
exports.__esModule = true;
exports.fetchCollectionsStartAsync = exports.fetchCollectionsFailure = exports.fetchCollectionsSuccess = exports.fetchCollectionsStart = void 0;
var shop_types_1 = require("./shop.types");
var firebase_utils_1 = require("../../firebase/firebase.utils");
exports.fetchCollectionsStart = function () { return ({
    type: shop_types_1.ShopActionTypes.FETCH_COLLECTIONS_START
}); };
exports.fetchCollectionsSuccess = function (collectionsMap) { return ({
    type: shop_types_1.ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
}); };
exports.fetchCollectionsFailure = function (errorMessage) { return ({
    type: shop_types_1.ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
}); };
exports.fetchCollectionsStartAsync = function () {
    return function (dispatch) {
        var collectionRef = firebase_utils_1.firestore.collection("collections");
        dispatch(exports.fetchCollectionsStart());
        collectionRef.get().then(function (snapshot) {
            var collectionsMap = firebase_utils_1.convertCollectionsSnapshotToMap(snapshot);
            dispatch(exports.fetchCollectionsSuccess(collectionsMap));
        })["catch"](function (error) { return dispatch(exports.fetchCollectionsFailure(error.message)); });
    };
};
