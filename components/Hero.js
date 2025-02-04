"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _framerMotion = require("framer-motion");
var _imagePpl = _interopRequireDefault(require("../assets/image-ppl.JPG"));
var _KMLPKKappagoda = _interopRequireDefault(require("../assets/K.M.L.P.K.Kappagoda2.pdf"));
var _fa = require("react-icons/fa");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Define motion variants
var textVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: 'easeOut'
    }
  }
};
var imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
};
var iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 10
  }
};
var Hero = function Hero() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: " bg-black text-white py-16",
    id: "home"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: " container mx-auto px-8 mt:px-16 lg:px-24 "
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-20 flex flex-col md:flex-row items-center md:space-x-36"
  }, /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    className: "flex-1 text-center md:text-left mb-8 md:mb-0",
    variants: textVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: {
      once: true
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col gap-3"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "text-lg font-normal text-gray-300 mb-16"
  }, "WELCOME TO MY WORLD"), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-4xl font-bold"
  }, "Hi, I'm", ' ', /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
  }, "LAHIRU KAPPAGODA")), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-3xl font-semibold mt-5"
  }, "Full-Stack Developer"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-5 text-gray-300 text-xl"
  }, "I am a passionate full-stack developer specializing in building modern and responsive web applications. I create seamless user experiences across the frontend and backend."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "text-lg font-normal text-gray-300 mb-5"
  }, "FIND ME IN"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center md:justify-start gap-6"
  }, /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    whileHover: iconVariants.hover,
    className: "p-3 border-2 border-green-400 rounded-full hover:bg-gray-800 hover:border-white"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.facebook.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaFacebookF, {
    className: "text-1xl text-green-400 hover:text-white"
  }))), /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    whileHover: iconVariants.hover,
    className: "p-3 border-2 border-green-400 rounded-full hover:bg-gray-800 hover:border-white"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://github.com/yourgithub",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaGithub, {
    className: "text-1xl text-green-400 hover:text-white"
  }))), /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    whileHover: iconVariants.hover,
    className: "p-3 border-2 border-green-400 rounded-full hover:bg-gray-800 hover:border-white"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.linkedin.com/in/yourlinkedin",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaLinkedinIn, {
    className: "text-1xl text-green-400 hover:text-white"
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-8 space-x-4"
  }, /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.a, {
    href: _KMLPKKappagoda["default"],
    download: true,
    whileHover: {
      scale: 1.1,
      rotate: 5
    },
    className: "bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 px-4 py-2 rounded-full"
  }, "Download CV")))), /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    className: " mx-auto mb-8 w-72 rounded-full object-cover transform transition-transform duration-300 hover:scale-105",
    variants: imageVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: {
      once: true
    }
  }, /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.img, {
    src: _imagePpl["default"],
    alt: "Lahiru Kappagoda",
    className: "w-80 h-80 md:w-100 rounded-full object-cover transform transition-transform duration-300 hover:scale-105",
    whileHover: {
      scale: 1.05,
      rotate: 5
    }
  })))));
};
var _default = exports["default"] = Hero;