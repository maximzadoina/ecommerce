"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
exports.signInWithGoogle = exports.googleProvider = exports.firestore = exports.auth = exports.getCurrentUser = exports.convertCollectionsSnapshotToMap = exports.addCollectionAndDocuments = exports.createUserProfileDocument = void 0;
var app_1 = require("firebase/app");
require("firebase/firestore");
require("firebase/auth");
var config = {
    apiKey: "AIzaSyDBnHVOPYwQ4fVmo7905M9Lzk9sfNfDSGc",
    authDomain: "ecommerce-9ec9e.firebaseapp.com",
    databaseURL: "https://ecommerce-9ec9e.firebaseio.com",
    projectId: "ecommerce-9ec9e",
    storageBucket: "ecommerce-9ec9e.appspot.com",
    messagingSenderId: "229924887249",
    appId: "1:229924887249:web:c752fa56d7dae0a57443f0",
    measurementId: "G-8WJ873CSPQ"
};
app_1["default"].initializeApp(config);
exports.createUserProfileDocument = function (userAuth, additionalData) { return __awaiter(void 0, void 0, void 0, function () {
    var userRef, snapShot, displayName, email, createdAt, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!userAuth)
                    return [2 /*return*/];
                userRef = exports.firestore.doc("users/" + userAuth.uid);
                return [4 /*yield*/, userRef.get()];
            case 1:
                snapShot = _a.sent();
                if (!!snapShot.exists) return [3 /*break*/, 5];
                displayName = userAuth.displayName, email = userAuth.email;
                createdAt = new Date();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                console.log(email + "a");
                return [4 /*yield*/, userRef.set(__assign({ displayName: displayName,
                        email: email,
                        createdAt: createdAt }, additionalData))];
            case 3:
                _a.sent();
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                console.log("error creating user", error_1.message);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/, userRef];
        }
    });
}); };
exports.addCollectionAndDocuments = function (collectionKey, objectsToAdd) { return __awaiter(void 0, void 0, void 0, function () {
    var collectionRef, batch;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                collectionRef = exports.firestore.collection(collectionKey);
                batch = exports.firestore.batch();
                objectsToAdd.forEach(function (obj) {
                    var newDocRef = collectionRef.doc();
                    batch.set(newDocRef, obj);
                });
                return [4 /*yield*/, batch.commit()];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.convertCollectionsSnapshotToMap = function (collections) {
    var transformetCollection = collections.docs.map(function (doc) {
        var _a = doc.data(), title = _a.title, items = _a.items;
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title: title,
            items: items
        };
    });
    return transformetCollection.reduce(function (accumulator, collection) {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};
exports.getCurrentUser = function () {
    return new Promise(function (resolve, reject) {
        var unsubscribe = exports.auth.onAuthStateChanged(function (userAuth) {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};
exports.auth = app_1["default"].auth();
exports.firestore = app_1["default"].firestore();
exports.googleProvider = new app_1["default"].auth.GoogleAuthProvider();
exports.googleProvider.setCustomParameters({ prompt: "select_account" });
exports.signInWithGoogle = function () { return exports.auth.signInWithPopup(exports.googleProvider); };
exports["default"] = app_1["default"];
