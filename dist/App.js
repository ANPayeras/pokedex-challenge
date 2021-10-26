"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Home = _interopRequireDefault(require("./components/Home"));

var _PokemonDetail = _interopRequireDefault(require("./components/PokemonDetail"));

var _SearchBar = _interopRequireDefault(require("./components/SearchBar"));

// import './App.css';
function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement(_SearchBar.default, null), /*#__PURE__*/_react.default.createElement(_Home.default, null), /*#__PURE__*/_react.default.createElement(_PokemonDetail.default, null));
}

var _default = App;
exports.default = _default;