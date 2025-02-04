"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Footer = function Footer() {
  return /*#__PURE__*/_react["default"].createElement("footer", {
    className: "bg-black text-white py-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container mx-auto px-8 md:px16 lg:px-24"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col md:flex-row md:space-x-12 item-center md-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-1 md-4 md:md-0"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-2xl font-bold md-2"
  }, "Lahiru Kappagoda"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-400"
  }, "Full-Stack Developer based in the Sri Lanka, specializating in web and softwaredevelopment")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-1 w-full"
  }, /*#__PURE__*/_react["default"].createElement("form", {
    className: "flex item-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "email",
    placeholder: "Enter Email",
    className: "w-full p-2 rounded-l-lg bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400"
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "bg-gradient-to-r from-green-400 to-blue-500 tect-white px-4 py-2 rounded-r-lg"
  }, "Subscribe")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-400"
  }, "\xA9 ", new Date().getFullYear()), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex space-x-4 my-4 md:my-0"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "text-gray-400 hover:text-white"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaFacebook, null)), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "text-gray-400 hover:text-white"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaLinkedin, null)), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "text-gray-400 hover:text-white"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaGithub, null))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "text-gray-400 hover:text-white"
  }, "Privecy"), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "text-gray-400 hover:text-white"
  }, "Terms of Services")))));
};
var _default = exports["default"] = Footer;