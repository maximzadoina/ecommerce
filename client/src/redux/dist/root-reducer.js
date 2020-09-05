"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var redux_persist_1 = require("redux-persist");
var storage_1 = require("redux-persist/lib/storage");
var directory_reducer_1 = require("./directory/directory.reducer");
var user_reducer_1 = require("./user/user.reducer");
var cart_reducer_1 = require("./cart/cart.reducer");
var shop_reducer_1 = require("./shop/shop.reducer");
var persistConfig = {
    key: "root",
    storage: storage_1["default"],
    whitelist: ["cart"]
};
var rootReducer = redux_1.combineReducers({
    user: user_reducer_1["default"],
    cart: cart_reducer_1["default"],
    directory: directory_reducer_1["default"],
    shop: shop_reducer_1["default"]
});
exports["default"] = redux_persist_1.persistReducer(persistConfig, rootReducer);
