"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("./App.css");
var _Hero = _interopRequireDefault(require("./components/Hero"));
var _Navbar = _interopRequireDefault(require("./components/Navbar"));
var _About = _interopRequireDefault(require("./components/About"));
var _Service = _interopRequireDefault(require("./components/Service"));
var _Projects = _interopRequireDefault(require("./components/Projects"));
var _Contact = _interopRequireDefault(require("./components/Contact"));
var _Footer = _interopRequireDefault(require("./components/Footer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Navbar["default"], null), /*#__PURE__*/React.createElement(_Hero["default"], null), /*#__PURE__*/React.createElement(_About["default"], null), /*#__PURE__*/React.createElement(_Service["default"], null), /*#__PURE__*/React.createElement(_Projects["default"], null), /*#__PURE__*/React.createElement(_Contact["default"], null), /*#__PURE__*/React.createElement(_Footer["default"], null));
}
var _default = exports["default"] = App;