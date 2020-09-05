"use strict";
exports.__esModule = true;
exports.signUpFailure = exports.signUpSuccess = exports.signUpStart = exports.signOutFailure = exports.signOutSuccess = exports.signOutStart = exports.checkUserSession = exports.emailSignInStart = exports.signInFailure = exports.signInSuccess = exports.googleSignInStart = void 0;
var user_types_1 = require("./user.types");
exports.googleSignInStart = function () { return ({
    type: user_types_1.UserActionTypes.GOOGLE_SIGN_IN_START
}); };
exports.signInSuccess = function (user) { return ({
    type: user_types_1.UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
}); };
exports.signInFailure = function (error) { return ({
    type: user_types_1.UserActionTypes.SIGN_IN_FAILURE,
    payload: error
}); };
exports.emailSignInStart = function (emailAndPassowrd) { return ({
    type: user_types_1.UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassowrd
}); };
exports.checkUserSession = function () { return ({
    type: user_types_1.UserActionTypes.CHECK_USER_SESSION
}); };
exports.signOutStart = function () { return ({
    type: user_types_1.UserActionTypes.SIGN_OUT_START
}); };
exports.signOutSuccess = function () { return ({
    type: user_types_1.UserActionTypes.SIGN_OUT_SUCCESS
}); };
exports.signOutFailure = function (error) { return ({
    type: user_types_1.UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
}); };
exports.signUpStart = function (userCredentials) { return ({
    type: user_types_1.UserActionTypes.SIGN_UP_START,
    payload: userCredentials
}); };
exports.signUpSuccess = function (_a) {
    var user = _a.user, additionalData = _a.additionalData;
    return ({
        type: user_types_1.UserActionTypes.SIGN_UP_SUCCESS,
        payload: { user: user, additionalData: additionalData }
    });
};
exports.signUpFailure = function (error) { return ({
    type: user_types_1.UserActionTypes.SIGN_UP_FAILURE,
    payload: error
}); };
