"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Navbar = function Navbar() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var toggleMenu = function toggleMenu() {
    return setIsOpen(!isOpen);
  };
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: "bg-black sticky top-0 text-white px-8 md:px-16 lg:px-24 border-b-[1px] border-b-gray-600 z-50"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container py-5 flex justify-between items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-2xl font-bold"
  }, "Lahiru Kappagoda"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "hidden md:flex space-x-6"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#home",
    className: "hover:text-gray-400"
  }, "Home"), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#about",
    className: "hover:text-gray-400"
  }, "About Me"), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#services",
    className: "hover:text-gray-400"
  }, "Services"), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#projects",
    className: "hover:text-gray-400"
  }, "Projects"), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#contact",
    className: "hover:text-gray-400"
  }, "Contact")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "md:hidden flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: toggleMenu,
    className: "text-white"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    className: "h-6 w-6"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 6h16M4 12h16M4 18h16"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "hidden md:inline"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
  }, "Contact Me"))), isOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: "md:hidden bg-black text-white px-4 py-3"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#home",
    className: "block hover:text-gray-400",
    onClick: toggleMenu
  }, "Home"), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#about",
    className: "block hover:text-gray-400",
    onClick: toggleMenu
  }, "About Me"), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#services",
    className: "block hover:text-gray-400",
    onClick: toggleMenu
  }, "Services"), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#projects",
    className: "block hover:text-gray-400",
    onClick: toggleMenu
  }, "Projects"), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#contact",
    className: "block hover:text-gray-400",
    onClick: toggleMenu
  }, "Contact"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
  }, "Contact Me"))));
};
var _default = exports["default"] = Navbar;