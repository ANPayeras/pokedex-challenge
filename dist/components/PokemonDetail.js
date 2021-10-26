"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useContext2 = _interopRequireDefault(require("../context/useContext"));

var PokemonDetail = function PokemonDetail() {
  var _useContext = (0, _react.useContext)(_useContext2.default),
      showDetail = _useContext.showDetail,
      pokemonDetail = _useContext.pokemonDetail,
      closeDetail = _useContext.closeDetail;

  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(!showDetail ? 'pokemonDetailHide' : 'pokemonDetailShow')
  }, showDetail && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "detailContainer1"
  }, /*#__PURE__*/React.createElement("img", {
    src: pokemonDetail.sprites.front_default,
    alt: pokemonDetail.id
  }), /*#__PURE__*/React.createElement("h1", null, pokemonDetail.name[0].toUpperCase() + pokemonDetail.name.substring(1)), /*#__PURE__*/React.createElement("span", null, "#", pokemonDetail.id < 10 ? '00' + pokemonDetail.id : pokemonDetail.id > 9 && pokemonDetail.id < 100 ? '0' + pokemonDetail.id : pokemonDetail.id > 99 && pokemonDetail.id)), /*#__PURE__*/React.createElement("div", {
    className: "detailContainer2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Height"), /*#__PURE__*/React.createElement("span", null, pokemonDetail.height < 10 && 0, String(pokemonDetail.height).substring(0, String(pokemonDetail.height).length - 1), ".", String(pokemonDetail.height).slice(String(pokemonDetail.height).length - 1), "m")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Weight"), /*#__PURE__*/React.createElement("span", null, String(pokemonDetail.weight).substring(0, String(pokemonDetail.weight).length - 1), ".", String(pokemonDetail.weight).slice(String(pokemonDetail.weight).length - 1), "kg"))), /*#__PURE__*/React.createElement("div", {
    className: "detailContainer3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Types"), pokemonDetail.types.map(function (e) {
    return /*#__PURE__*/React.createElement("span", null, e.type.name[0].toUpperCase() + e.type.name.substring(1));
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Abilities"), pokemonDetail.abilities.map(function (e) {
    return /*#__PURE__*/React.createElement("span", null, e.ability.name);
  }))), /*#__PURE__*/React.createElement("button", {
    className: "returnDetail",
    onClick: closeDetail
  }, "Volver")));
};

var _default = PokemonDetail;
exports.default = _default;