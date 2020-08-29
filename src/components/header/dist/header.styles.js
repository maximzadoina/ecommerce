"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.OptionLink = exports.OptionsContainer = exports.LogoContainer = exports.HeaderContainer = void 0;
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
exports.HeaderContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"], ["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"])));
exports.LogoContainer = styled_components_1["default"](react_router_dom_1.Link)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n"], ["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n"])));
exports.OptionsContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"], ["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"])));
exports.OptionLink = styled_components_1["default"](react_router_dom_1.Link)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 10px 15px;\n  cursor: pointer;\n"], ["\n  padding: 10px 15px;\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
