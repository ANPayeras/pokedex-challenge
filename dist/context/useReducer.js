"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = function _default(state, action) {
  var payload = action.payload,
      type = action.type;

  switch (type) {
    case 'getData':
      return _objectSpread(_objectSpread({}, state), {}, {
        pokemonsAPI: payload
      });

    case 'getPokemonsWithData':
      return _objectSpread(_objectSpread({}, state), {}, {
        pokemonsWithData: payload
      });

    case 'getAll':
      return _objectSpread(_objectSpread({}, state), {}, {
        pokemonsWithData: [].concat((0, _toConsumableArray2.default)(state.pokemonsWithData), (0, _toConsumableArray2.default)(payload.slice(20)))
      });

    case 'showDetail':
      return _objectSpread(_objectSpread({}, state), {}, {
        showDetail: !state.showDetail,
        pokemonDetail: payload
      });

    case 'closeDetail':
      return _objectSpread(_objectSpread({}, state), {}, {
        showDetail: false
      });

    case 'searchedPokemons':
      return _objectSpread(_objectSpread({}, state), {}, {
        pokemonsSearch: payload.filteredPokemons,
        searching: payload.searching
      });

    default:
      return state;
  }
};

exports.default = _default;