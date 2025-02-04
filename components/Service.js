"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactSlick = _interopRequireDefault(require("react-slick"));
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var services = [{
  id: 1,
  title: "Custom Software & Web Development",
  description: "We create custom software and web applications to suit your business needs.",
  fullDescription: "From small business websites to large-scale enterprise solutions, our team ensures high performance, security, and great user experiences.",
  icon: "🌐"
}, {
  id: 2,
  title: "Mobile App Development",
  description: "We develop mobile apps that are user-friendly and optimized for performance.",
  fullDescription: "We build cross-platform and native mobile applications with seamless UI and best-in-class user experience.",
  icon: "📱"
}, {
  id: 3,
  title: "API Development & Integration",
  description: "We design and integrate APIs for seamless system connectivity.",
  fullDescription: "Our API solutions enhance data exchange, automation, and connectivity between different software applications.",
  icon: "🔧"
}, {
  id: 4,
  title: "Software Maintenance & Support",
  description: "Continuous software maintenance is crucial for improving performance and security.",
  fullDescription: "We offer long-term support, including bug fixes, optimizations, and feature enhancements.",
  icon: "⚙️"
}];
var sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [{
    breakpoint: 780,
    settings: {
      slidesToShow: 1
    }
  }]
};
var Services = function Services() {
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    expandedService = _useState2[0],
    setExpandedService = _useState2[1];
  var toggleReadMore = function toggleReadMore(id) {
    setExpandedService(expandedService === id ? null : id);
  };
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "bg-gray-950 text-white py-20",
    id: "services"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container mt-10 mx-auto px-8 md:px-16"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-4xl font-bold text-center mb-12"
  }, "Our Services"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-20"
  }, /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], sliderSettings, services.map(function (service) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: service.id,
      className: "p-4"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "bg-gray-800 px-10 py-8 rounded-lg min-h-[300px] hover:shadow-xl transform \r transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
    }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "text-5xl text-center mb-4 text-gradient bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
    }, service.icon), /*#__PURE__*/_react["default"].createElement("h3", {
      className: "text-2xl font-bold text-center text-transparent bg-clip-text \r bg-gradient-to-r from-green-400 to-blue-500"
    }, service.title), /*#__PURE__*/_react["default"].createElement("p", {
      className: "mt-4 text-gray-300 text-center"
    }, expandedService === service.id ? service.fullDescription : service.description)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "text-center mt-4"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return toggleReadMore(service.id);
      },
      className: "text-blue-400 hover:underline"
    }, expandedService === service.id ? "Read Less" : "Read More"))));
  })))));
};
var _default = exports["default"] = Services;