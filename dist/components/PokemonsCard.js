"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useContext2 = _interopRequireDefault(require("../context/useContext"));

var PokemonCard = function PokemonCard(_ref) {
  var pokemons = _ref.pokemons;

  var _useContext = (0, _react.useContext)(_useContext2.default),
      showDetailFunc = _useContext.showDetailFunc;

  var showPokemonDetail = function showPokemonDetail(pokemon) {
    showDetailFunc(pokemon);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "pokemonCard",
    onClick: function onClick() {
      return showPokemonDetail(pokemons);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pokemonCard1"
  }, /*#__PURE__*/React.createElement("img", {
    src: pokemons.sprites.front_default,
    alt: pokemons.id
  })), /*#__PURE__*/React.createElement("div", {
    className: "pokemonCard2"
  }, /*#__PURE__*/React.createElement("h5", null, pokemons.name[0].toUpperCase() + pokemons.name.substring(1)), /*#__PURE__*/React.createElement("h5", null, "#", pokemons.id < 10 ? '00' + pokemons.id : pokemons.id > 9 && pokemons.id < 100 ? '0' + pokemons.id : pokemons.id > 99 && pokemons.id)));
};

var _default = PokemonCard;
exports.default = _default;