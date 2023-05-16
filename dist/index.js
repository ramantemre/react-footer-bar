"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.map.js");
var _react = _interopRequireDefault(require("react"));
var _footerModule = _interopRequireDefault(require("./footer.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Footer = function Footer(props) {
  var className = props.className,
    style = props.style,
    backGroundStyle = props.backGroundStyle,
    _props$textArray = props.textArray,
    textArray = _props$textArray === void 0 ? ["Please add some text"] : _props$textArray,
    textStyle = props.textStyle,
    _props$enableAnimatio = props.enableAnimation,
    enableAnimation = _props$enableAnimatio === void 0 ? false : _props$enableAnimatio;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: enableAnimation ? _footerModule.default["enable-animation"] : "",
    style: {
      marginBlock: "0.25rem"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _footerModule.default.marquee,
    style: backGroundStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _footerModule.default.marquee__content
  }, textArray.map(function (text, idx) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: idx,
      style: textStyle
    }, text);
  })), /*#__PURE__*/_react.default.createElement("div", {
    "aria-hidden": "true",
    className: _footerModule.default.marquee__content
  }, textArray.map(function (text, idx) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: idx,
      style: textStyle
    }, text);
  })))));
};
var _default = Footer;
exports.default = _default;