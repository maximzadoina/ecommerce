"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.PreviewContainer = exports.TitleContainer = exports.CollectionPreviewContainer = void 0;
var styled_components_1 = require("styled-components");
exports.CollectionPreviewContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n"])));
exports.TitleContainer = styled_components_1["default"].h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 28px;\n  margin-bottom: 25px;\n  cursor: pointer;\n  &:hover {\n    color: grey;\n  }\n"], ["\n  font-size: 28px;\n  margin-bottom: 25px;\n  cursor: pointer;\n  &:hover {\n    color: grey;\n  }\n"])));
exports.PreviewContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  justify-content: space-between;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
