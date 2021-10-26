"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _axios = _interopRequireDefault(require("axios"));

var _react = _interopRequireWildcard(require("react"));

var _useContext2 = _interopRequireDefault(require("../context/useContext"));

var _PokemonsCard = _interopRequireDefault(require("./PokemonsCard"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Home = function Home() {
  var _useContext = (0, _react.useContext)(_useContext2.default),
      pokemonsAPI = _useContext.pokemonsAPI,
      pokemonsWithData = _useContext.pokemonsWithData,
      getPokemons = _useContext.getPokemons,
      getPokemonsWithData = _useContext.getPokemonsWithData,
      pokemonsSearch = _useContext.pokemonsSearch,
      searching = _useContext.searching;

  var _useState = (0, _react.useState)({
    prev: 0,
    next: 1
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      pagination = _useState2[0],
      setPagination = _useState2[1];

  var prev = pagination.prev,
      next = pagination.next;
  console.log(pokemonsAPI);
  console.log(pokemonsWithData);
  console.log(pokemonsSearch);
  (0, _react.useEffect)(function () {
    getPokemons();
  }, []);
  (0, _react.useEffect)(function () {
    getPokemonsWithData();
  }, [pokemonsAPI]);

  var changePage = function changePage(e) {
    var direction = e.target.name;

    if (!searching) {
      getPokemons(direction);
    } else {
      if (direction === 'next') {
        next < Math.ceil(pokemonsSearch.length / 20) && setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
          prev: prev + 20,
          next: next + 1
        }));
      } else {
        prev !== 0 && setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
          prev: prev - 20,
          next: next - 1
        }));
      }
    }
  };

  console.log(pagination);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pokemonsContainer"
  }, !pokemonsSearch.length && searching && /*#__PURE__*/_react.default.createElement("h1", null, "No se encontraron Pokemons"), pokemonsSearch && searching && pokemonsSearch.slice(prev, next * 20).map(function (e) {
    return /*#__PURE__*/_react.default.createElement(_PokemonsCard.default, {
      pokemons: e,
      key: e.id
    });
  }), !searching && (pokemonsWithData === null || pokemonsWithData === void 0 ? void 0 : pokemonsWithData.slice(0, 20).map(function (e) {
    return /*#__PURE__*/_react.default.createElement(_PokemonsCard.default, {
      pokemons: e,
      key: e.id
    });
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "btnContainer"
  }, /*#__PURE__*/_react.default.createElement("button", {
    name: "prev",
    disabled: pokemonsSearch.length < 20 && searching ? true : false,
    onClick: changePage
  }, "Anterior"), /*#__PURE__*/_react.default.createElement("button", {
    name: "next",
    disabled: pokemonsSearch.length < 20 && searching ? true : false,
    onClick: changePage
  }, "Siguiente")));
};

var _default = Home;
exports.default = _default;