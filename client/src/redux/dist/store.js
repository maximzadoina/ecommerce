"use strict";
exports.__esModule = true;
exports.persistor = exports.store = void 0;
var redux_1 = require("redux");
var redux_persist_1 = require("redux-persist");
var redux_logger_1 = require("redux-logger");
var redux_saga_1 = require("redux-saga");
var root_saga_1 = require("./root-saga");
var root_reducer_1 = require("./root-reducer");
var sagaMiddleware = redux_saga_1["default"]();
var middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
    middlewares.push(redux_logger_1["default"]);
}
exports.store = redux_1.createStore(root_reducer_1["default"], redux_1.applyMiddleware.apply(void 0, middlewares));
sagaMiddleware.run(root_saga_1["default"]);
exports.persistor = redux_persist_1.persistStore(exports.store);
exports["default"] = { store: exports.store, persistor: exports.persistor };
