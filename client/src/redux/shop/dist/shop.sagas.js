"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.shopSagas = exports.fetchCollectionStart = exports.fetchCollectionsAsync = void 0;
var effects_1 = require("redux-saga/effects");
var firebase_utils_1 = require("../../firebase/firebase.utils");
var shop_types_1 = require("./shop.types");
var shop_actions_1 = require("./shop.actions");
function fetchCollectionsAsync() {
    var collectionRef, snapshot, collectionsMap, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, console.log("I am fired")];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 6, , 8]);
                collectionRef = firebase_utils_1.firestore.collection("collections");
                return [4 /*yield*/, collectionRef.get()];
            case 3:
                snapshot = _a.sent();
                return [4 /*yield*/, effects_1.call(firebase_utils_1.convertCollectionsSnapshotToMap, snapshot)];
            case 4:
                collectionsMap = _a.sent();
                return [4 /*yield*/, effects_1.put(shop_actions_1.fetchCollectionsSuccess(collectionsMap))];
            case 5:
                _a.sent();
                return [3 /*break*/, 8];
            case 6:
                error_1 = _a.sent();
                return [4 /*yield*/, effects_1.put(shop_actions_1.fetchCollectionsFailure(error_1.message))];
            case 7:
                _a.sent();
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}
exports.fetchCollectionsAsync = fetchCollectionsAsync;
function fetchCollectionStart() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeLatest(shop_types_1.ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.fetchCollectionStart = fetchCollectionStart;
function shopSagas() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.all([effects_1.call(fetchCollectionStart)])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.shopSagas = shopSagas;
