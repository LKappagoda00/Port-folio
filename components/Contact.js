"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _emailjsCom = _interopRequireDefault(require("emailjs-com"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Contact = function Contact() {
  var _useState = (0, _react.useState)({
      name: '',
      email: '',
      message: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0, _react.useState)({
      name: '',
      email: '',
      message: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, name, value)));
  };
  var validate = function validate() {
    var newErrors = {
      name: '',
      email: '',
      message: ''
    };
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.values(newErrors).every(function (error) {
      return error === '';
    });
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      // Send email using EmailJS
      _emailjsCom["default"].sendForm('service_lahiru',
      // Replace with your EmailJS service ID
      'template_2j5g5gt',
      // Replace with your EmailJS template ID
      e.target, 'zN6trY5KCl71NY37_' // Replace with your EmailJS user ID
      ).then(function (result) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, function (error) {
        alert('Failed to send message. Please try again later.');
      });
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-black text-white py-20",
    id: "contact"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-10 container mx-auto px-8 md:px-16 lg:px-24"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-4xl font-bold text-center md-12"
  }, "Contact"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col md:flex-row items-center md:space-x-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-1 mt-10"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "mt-2 text-2xl font-bold text-transparent bg-clip-text\r bg-gradient-to-r from-green-400 to-blue-500"
  }, "Let's Talk"), /*#__PURE__*/_react["default"].createElement("p", null, "I'm open to discussing web development projects or partnership opportunities."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "md-4 mt-8"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaEnvelope, {
    className: "inline-block text-green-400 mr-2"
  }), /*#__PURE__*/_react["default"].createElement("a", {
    href: "mailto:lahirupandukakappagoda@gmail.com",
    className: "hover:underline"
  }, "lahirupandukakappagoda@gmail.com")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "md-4 mt-8"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaPhone, {
    className: "inline-block text-green-400 mr-2"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "+94752072010")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-4 mt-8"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaMapMarkedAlt, {
    className: "inline-block text-green-400 mr-2"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Kappagoda Niwasa, Alkegama, Makehelwala."))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-1 w-full mt-12"
  }, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-4"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "name",
    className: "block mb-2"
  }, "Your Name"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "name",
    value: formData.name,
    onChange: handleChange,
    className: "w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400",
    placeholder: "Enter Your Name"
  }), errors.name && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-red-500 text-sm"
  }, errors.name)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "email",
    className: "block mb-2"
  }, "Your Email"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "email",
    name: "email",
    value: formData.email,
    onChange: handleChange,
    className: "w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400",
    placeholder: "Enter Your email"
  }), errors.email && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-red-500 text-sm"
  }, errors.email)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "message",
    className: "block mb-2"
  }, "Your Message"), /*#__PURE__*/_react["default"].createElement("textarea", {
    name: "message",
    value: formData.message,
    onChange: handleChange,
    className: "w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400",
    rows: "5",
    placeholder: "Enter Your Message"
  }), errors.message && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-red-500 text-sm"
  }, errors.message)), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
  }, "Send"))))));
};
var _default = exports["default"] = Contact;