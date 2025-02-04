"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _imagePpl = _interopRequireDefault(require("../assets/image-ppl.JPG"));
var _ = _interopRequireDefault(require("../assets/8.png"));
var _2 = _interopRequireDefault(require("../assets/11.png"));
var _3 = _interopRequireDefault(require("../assets/6.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var projects = [{
  id: 1,
  name: "Health And Wellness App",
  technologies: "React Native, Firebase, Expo, JavaScript, Redux, Figma ",
  image: _["default"],
  github: "https://github.com/LKappagoda00/Firebase-Fitness-Master"
}, {
  id: 2,
  name: "Smart Tech Hub Management System",
  technologies: "JavaScript, React, Node.js, Express.js, MongoDB, Postman API, HTML, CSS ",
  image: _2["default"],
  github: "https://github.com/LKappagoda00/New-Gen-Computer-shop-Management-System"
}, {
  id: 3,
  name: "Hospital Management System",
  technologies: "TypeScript, React, Node.js, MongoDB, Postman API, HTML, CSS   ",
  image: _3["default"],
  github: ""
}];
var Projects = function Projects() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-black text-white py-20",
    id: "projects"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-10 container mx-auto px-8 md:px-16 lg:px-24"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-4xl font-bold text-center mb-12"
  }, "Projects"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-8 "
  }, projects.map(function (project) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: project.id,
      className: "bg-gray-800 p-6 rounded-lg hover:shadow-lg\r transform transition-transform duration-300 hover:scale-105"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: project.image,
      alt: project.name,
      className: "rounded-lg mb-4\r w-full h-48 object-cover"
    }), /*#__PURE__*/_react["default"].createElement("h3", {
      className: "text-2xl font-bold mb-2"
    }, project.name), /*#__PURE__*/_react["default"].createElement("p", {
      className: "text-gray-400 mb-4"
    }, project.technologies), /*#__PURE__*/_react["default"].createElement("div", {
      className: " mt-"
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: project.github,
      className: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hidden md:inline-block \r transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "GitHub")));
  }))));
};
var _default = exports["default"] = Projects;