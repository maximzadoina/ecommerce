"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.PriceContainer = exports.NameContainer = exports.CollectionFooterContainer = exports.BackgroundImage = exports.AddButton = exports.CollectionItemContainer = void 0;
var styled_components_1 = require("styled-components");
var custom_button_component_1 = require("../custom-button/custom-button.component");
exports.CollectionItemContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n"], ["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n"])));
exports.AddButton = styled_components_1["default"](custom_button_component_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n"], ["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n"])));
exports.BackgroundImage = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ", ";\n"], ["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ", ";\n"])), function (_a) {
    var imageUrl = _a.imageUrl;
    return "url(" + imageUrl + ")";
});
exports.CollectionFooterContainer = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"], ["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"])));
exports.NameContainer = styled_components_1["default"].span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 90%;\n  margin-bottom: 15px;\n"], ["\n  width: 90%;\n  margin-bottom: 15px;\n"])));
exports.PriceContainer = styled_components_1["default"].span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 10%;\n  text-align: right;\n"], ["\n  width: 10%;\n  text-align: right;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
