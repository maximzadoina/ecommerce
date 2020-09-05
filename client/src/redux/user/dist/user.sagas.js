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
exports.userSagas = exports.onSignUpSuccess = exports.onSignUpStart = exports.onSignOutStart = exports.onCheckUserSession = exports.onEmailSignInStart = exports.onGoogleSignInStart = exports.signInAfterSignUp = exports.signUp = exports.signOut = exports.isUserAuthenticated = exports.signInWithEmail = exports.signInWithGoogle = exports.getSnapshotFromUserAuth = void 0;
var effects_1 = require("redux-saga/effects");
var user_types_1 = require("./user.types");
var firebase_utils_1 = require("../../firebase/firebase.utils");
var user_actions_1 = require("./user.actions");
function getSnapshotFromUserAuth(userAuth, additionalData) {
    var userRef, userSnapshot, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 6]);
                return [4 /*yield*/, effects_1.call(firebase_utils_1.createUserProfileDocument, userAuth, additionalData)];
            case 1:
                userRef = _a.sent();
                return [4 /*yield*/, userRef.get()];
            case 2:
                userSnapshot = _a.sent();
                return [4 /*yield*/, effects_1.put(user_actions_1.signInSuccess(__assign({ id: userSnapshot.id }, userSnapshot.data())))];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4:
                error_1 = _a.sent();
                return [4 /*yield*/, effects_1.put(user_actions_1.signInFailure(error_1))];
            case 5:
                _a.sent();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}
exports.getSnapshotFromUserAuth = getSnapshotFromUserAuth;
function signInWithGoogle() {
    var user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, firebase_utils_1.auth.signInWithPopup(firebase_utils_1.googleProvider)];
            case 1:
                user = (_a.sent()).user;
                return [4 /*yield*/, getSnapshotFromUserAuth(user, null)];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                error_2 = _a.sent();
                return [4 /*yield*/, effects_1.put(user_actions_1.signInFailure(error_2))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
exports.signInWithGoogle = signInWithGoogle;
function signInWithEmail(_a) {
    var user, error_3;
    var _b = _a.payload, email = _b.email, password = _b.password;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 5]);
                return [4 /*yield*/, firebase_utils_1.auth.signInWithEmailAndPassword(email, password)];
            case 1:
                user = (_c.sent()).user;
                return [4 /*yield*/, getSnapshotFromUserAuth(user, null)];
            case 2:
                _c.sent();
                return [3 /*break*/, 5];
            case 3:
                error_3 = _c.sent();
                return [4 /*yield*/, effects_1.put(user_actions_1.signInFailure(error_3))];
            case 4:
                _c.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
exports.signInWithEmail = signInWithEmail;
function isUserAuthenticated() {
    var userAuth, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, firebase_utils_1.getCurrentUser()];
            case 1:
                userAuth = _a.sent();
                if (!userAuth)
                    return [2 /*return*/];
                return [4 /*yield*/, getSnapshotFromUserAuth(userAuth, null)];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                error_4 = _a.sent();
                return [4 /*yield*/, effects_1.put(user_actions_1.signInFailure(error_4))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
exports.isUserAuthenticated = isUserAuthenticated;
function signOut() {
    var error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, firebase_utils_1.auth.signOut()];
            case 1:
                _a.sent();
                return [4 /*yield*/, effects_1.put(user_actions_1.signOutSuccess())];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                error_5 = _a.sent();
                return [4 /*yield*/, effects_1.put(user_actions_1.signOutFailure(error_5))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
exports.signOut = signOut;
function signUp(_a) {
    var user, error_6;
    var _b = _a.payload, email = _b.email, password = _b.password, displayName = _b.displayName;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 5]);
                return [4 /*yield*/, firebase_utils_1.auth.createUserWithEmailAndPassword(email, password)];
            case 1:
                user = (_c.sent()).user;
                return [4 /*yield*/, effects_1.put(user_actions_1.signUpSuccess({ user: user, additionalData: { displayName: displayName } }))];
            case 2:
                _c.sent();
                return [3 /*break*/, 5];
            case 3:
                error_6 = _c.sent();
                return [4 /*yield*/, effects_1.put(user_actions_1.signUpFailure(error_6))];
            case 4:
                _c.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
exports.signUp = signUp;
function signInAfterSignUp(_a) {
    var _b = _a.payload, user = _b.user, additionalData = _b.additionalData;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, getSnapshotFromUserAuth(user, additionalData)];
            case 1:
                _c.sent();
                return [2 /*return*/];
        }
    });
}
exports.signInAfterSignUp = signInAfterSignUp;
function onGoogleSignInStart() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeLatest(user_types_1.UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.onGoogleSignInStart = onGoogleSignInStart;
function onEmailSignInStart() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeLatest(user_types_1.UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.onEmailSignInStart = onEmailSignInStart;
function onCheckUserSession() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeLatest(user_types_1.UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.onCheckUserSession = onCheckUserSession;
function onSignOutStart() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeLatest(user_types_1.UserActionTypes.SIGN_OUT_START, signOut)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.onSignOutStart = onSignOutStart;
function onSignUpStart() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeLatest(user_types_1.UserActionTypes.SIGN_UP_START, signUp)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.onSignUpStart = onSignUpStart;
function onSignUpSuccess() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeLatest(user_types_1.UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.onSignUpSuccess = onSignUpSuccess;
function userSagas() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.all([
                    effects_1.call(onGoogleSignInStart),
                    effects_1.call(onEmailSignInStart),
                    effects_1.call(onCheckUserSession),
                    effects_1.call(onSignOutStart),
                    effects_1.call(onSignUpStart),
                    effects_1.call(onSignUpSuccess)
                ])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.userSagas = userSagas;
