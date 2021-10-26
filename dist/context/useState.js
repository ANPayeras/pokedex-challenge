"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _useReducer3 = _interopRequireDefault(require("./useReducer"));

var _useContext = _interopRequireDefault(require("./useContext"));

var _axios = _interopRequireDefault(require("axios"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PokedexState = function PokedexState(props) {
  var initialState = {
    pokemonsAPI: [],
    pokemonsWithData: [],
    allPokemons: [],
    showDetail: false,
    pokemonDetail: {},
    pokemonsSearch: [],
    searching: false
  };

  var _useReducer = (0, _react.useReducer)(_useReducer3.default, initialState),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var getPokemons = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(page) {
      var next, _yield$axios$get, data, prev, _yield$axios$get2, _data, _yield$axios$get3, _data2, res;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(page === 'next')) {
                _context.next = 12;
                break;
              }

              next = state.pokemonsAPI.next;

              if (!(next === null)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              _context.next = 7;
              return _axios.default.get("".concat(next));

            case 7:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              dispatch({
                type: 'getData',
                payload: data
              });
              _context.next = 32;
              break;

            case 12:
              if (!(page === 'prev')) {
                _context.next = 23;
                break;
              }

              prev = state.pokemonsAPI.previous;

              if (!(prev === null)) {
                _context.next = 16;
                break;
              }

              return _context.abrupt("return");

            case 16:
              _context.next = 18;
              return _axios.default.get("".concat(prev));

            case 18:
              _yield$axios$get2 = _context.sent;
              _data = _yield$axios$get2.data;
              dispatch({
                type: 'getData',
                payload: _data
              });
              _context.next = 32;
              break;

            case 23:
              _context.next = 25;
              return _axios.default.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');

            case 25:
              _yield$axios$get3 = _context.sent;
              _data2 = _yield$axios$get3.data;
              _context.next = 29;
              return _axios.default.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(_data2.count, "&offset=0"));

            case 29:
              res = _context.sent;
              getAll(res.data.results);
              dispatch({
                type: 'getData',
                payload: _data2
              });

            case 32:
              _context.next = 37;
              break;

            case 34:
              _context.prev = 34;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 37:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 34]]);
    }));

    return function getPokemons(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getPokemonsWithData = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var pokemons, pokemonsLength, arr, i, _yield$axios$get4, data;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              pokemons = state.pokemonsAPI.results;

              if (pokemons) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return");

            case 3:
              pokemonsLength = state.pokemonsAPI.results.length;
              arr = [];
              i = 0;

            case 6:
              if (!(i < pokemonsLength)) {
                _context2.next = 15;
                break;
              }

              _context2.next = 9;
              return _axios.default.get("https://pokeapi.co/api/v2/pokemon/".concat(pokemons[i].name));

            case 9:
              _yield$axios$get4 = _context2.sent;
              data = _yield$axios$get4.data;
              arr.push(data);

            case 12:
              i++;
              _context2.next = 6;
              break;

            case 15:
              console.log(arr);
              dispatch({
                type: 'getPokemonsWithData',
                payload: arr
              });

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getPokemonsWithData() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getAll = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(allPokemons) {
      var pokemonsLength, arr, i, _yield$axios$get5, data;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              pokemonsLength = allPokemons.length;
              arr = [];
              i = 0;

            case 3:
              if (!(i < pokemonsLength)) {
                _context3.next = 12;
                break;
              }

              _context3.next = 6;
              return _axios.default.get("https://pokeapi.co/api/v2/pokemon/".concat(allPokemons[i].name));

            case 6:
              _yield$axios$get5 = _context3.sent;
              data = _yield$axios$get5.data;
              arr.push(data);

            case 9:
              i++;
              _context3.next = 3;
              break;

            case 12:
              dispatch({
                type: 'getAll',
                payload: arr
              });

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getAll(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var searchPokemons = function searchPokemons(value) {
    var filteredPokemons = state.pokemonsWithData.filter(function (pokemon) {
      return pokemon.name.includes(value);
    });
    var searching = false;
    if (value) searching = true;else searching = false;
    var obj = {
      filteredPokemons: filteredPokemons,
      searching: searching
    };
    dispatch({
      type: 'searchedPokemons',
      payload: obj
    });
  };

  var showDetailFunc = function showDetailFunc(pokemon) {
    dispatch({
      type: 'showDetail',
      payload: pokemon
    });
  };

  var closeDetail = function closeDetail() {
    dispatch({
      type: 'closeDetail'
    });
  };

  return /*#__PURE__*/_react.default.createElement(_useContext.default.Provider, {
    value: {
      pokemonsAPI: state.pokemonsAPI,
      pokemonsWithData: state.pokemonsWithData,
      allPokemons: state.allPokemons,
      showDetail: state.showDetail,
      pokemonDetail: state.pokemonDetail,
      pokemonsSearch: state.pokemonsSearch,
      searching: state.searching,
      getPokemons: getPokemons,
      getPokemonsWithData: getPokemonsWithData,
      showDetailFunc: showDetailFunc,
      closeDetail: closeDetail,
      searchPokemons: searchPokemons
    }
  }, props.children);
};

var _default = PokedexState;
exports.default = _default;