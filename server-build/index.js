/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/style-loader/dist/cjs.js):\\nTypeError: this.getOptions is not a function\\n    at Object.loader (C:\\\\Users\\\\ANGEL\\\\Desktop\\\\pokedex-challenge\\\\node_modules\\\\style-loader\\\\dist\\\\index.js:19:24)\");\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Home */ \"./src/components/Home.jsx\");\n/* harmony import */ var _components_PokemonDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PokemonDetail */ \"./src/components/PokemonDetail.jsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SearchBar */ \"./src/components/SearchBar.jsx\");\n\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"app\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PokemonDetail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/Home.jsx":
/*!*********************************!*\
  !*** ./src/components/Home.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_useContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/useContext */ \"./src/context/useContext.jsx\");\n/* harmony import */ var _PokemonsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PokemonsCard */ \"./src/components/PokemonsCard.jsx\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Home = function Home() {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context_useContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n      pokemonsAPI = _useContext.pokemonsAPI,\n      pokemonsWithData = _useContext.pokemonsWithData,\n      getPokemons = _useContext.getPokemons,\n      getPokemonsWithData = _useContext.getPokemonsWithData,\n      pokemonsSearch = _useContext.pokemonsSearch,\n      searching = _useContext.searching;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    prev: 0,\n    next: 1\n  }),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      pagination = _useState2[0],\n      setPagination = _useState2[1];\n\n  var prev = pagination.prev,\n      next = pagination.next;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    getPokemons();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    getPokemonsWithData();\n  }, [pokemonsAPI]);\n\n  var changePage = function changePage(e) {\n    var direction = e.target.name;\n\n    if (!searching) {\n      getPokemons(direction);\n    } else {\n      if (direction === 'next') {\n        next < Math.ceil(pokemonsSearch.length / 20) && setPagination(_objectSpread(_objectSpread({}, pagination), {}, {\n          prev: prev + 20,\n          next: next + 1\n        }));\n      } else {\n        prev !== 0 && setPagination(_objectSpread(_objectSpread({}, pagination), {}, {\n          prev: prev - 20,\n          next: next - 1\n        }));\n      }\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"pokemonsContainer\"\n  }, !pokemonsSearch.length && searching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"h1\", null, \"No se encontraron Pokemons\"), pokemonsSearch && searching && pokemonsSearch.slice(prev, next * 20).map(function (e) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PokemonsCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      pokemons: e,\n      key: e.id\n    });\n  }), !searching && (pokemonsWithData === null || pokemonsWithData === void 0 ? void 0 : pokemonsWithData.slice(0, 20).map(function (e) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PokemonsCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      pokemons: e,\n      key: e.id\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"btnContainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"button\", {\n    name: \"prev\",\n    disabled: pokemonsSearch.length < 20 && searching ? true : false,\n    onClick: changePage\n  }, \"Anterior\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"button\", {\n    name: \"next\",\n    disabled: pokemonsSearch.length < 20 && searching ? true : false,\n    onClick: changePage\n  }, \"Siguiente\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/components/Home.jsx?");

/***/ }),

/***/ "./src/components/PokemonDetail.jsx":
/*!******************************************!*\
  !*** ./src/components/PokemonDetail.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_useContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/useContext */ \"./src/context/useContext.jsx\");\n\n\n\nvar PokemonDetail = function PokemonDetail() {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_useContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n      showDetail = _useContext.showDetail,\n      pokemonDetail = _useContext.pokemonDetail,\n      closeDetail = _useContext.closeDetail;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"\".concat(!showDetail ? 'pokemonDetailHide' : 'pokemonDetailShow')\n  }, showDetail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"detailContainer1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: pokemonDetail.sprites.front_default,\n    alt: pokemonDetail.id\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, pokemonDetail.name[0].toUpperCase() + pokemonDetail.name.substring(1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"#\", pokemonDetail.id < 10 ? '00' + pokemonDetail.id : pokemonDetail.id > 9 && pokemonDetail.id < 100 ? '0' + pokemonDetail.id : pokemonDetail.id > 99 && pokemonDetail.id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"detailContainer2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Height\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, pokemonDetail.height < 10 && 0, String(pokemonDetail.height).substring(0, String(pokemonDetail.height).length - 1), \".\", String(pokemonDetail.height).slice(String(pokemonDetail.height).length - 1), \"m\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Weight\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, String(pokemonDetail.weight).substring(0, String(pokemonDetail.weight).length - 1), \".\", String(pokemonDetail.weight).slice(String(pokemonDetail.weight).length - 1), \"kg\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"detailContainer3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Types\"), pokemonDetail.types.map(function (e) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, e.type.name[0].toUpperCase() + e.type.name.substring(1));\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Abilities\"), pokemonDetail.abilities.map(function (e) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, e.ability.name);\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"returnDetail\",\n    onClick: closeDetail\n  }, \"Volver\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PokemonDetail);\n\n//# sourceURL=webpack:///./src/components/PokemonDetail.jsx?");

/***/ }),

/***/ "./src/components/PokemonsCard.jsx":
/*!*****************************************!*\
  !*** ./src/components/PokemonsCard.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_useContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/useContext */ \"./src/context/useContext.jsx\");\n\n\n\nvar PokemonCard = function PokemonCard(_ref) {\n  var pokemons = _ref.pokemons;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_useContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n      showDetailFunc = _useContext.showDetailFunc;\n\n  var showPokemonDetail = function showPokemonDetail(pokemon) {\n    showDetailFunc(pokemon);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pokemonCard\",\n    onClick: function onClick() {\n      return showPokemonDetail(pokemons);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pokemonCard1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: pokemons.sprites.front_default,\n    alt: pokemons.id\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pokemonCard2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, pokemons.name[0].toUpperCase() + pokemons.name.substring(1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"#\", pokemons.id < 10 ? '00' + pokemons.id : pokemons.id > 9 && pokemons.id < 100 ? '0' + pokemons.id : pokemons.id > 99 && pokemons.id)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PokemonCard);\n\n//# sourceURL=webpack:///./src/components/PokemonsCard.jsx?");

/***/ }),

/***/ "./src/components/SearchBar.jsx":
/*!**************************************!*\
  !*** ./src/components/SearchBar.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_useContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/useContext */ \"./src/context/useContext.jsx\");\n\n\n\nvar SearchBar = function SearchBar() {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_useContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n      searchPokemons = _useContext.searchPokemons;\n\n  var onChange = function onChange(e) {\n    searchPokemons(e.target.value);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"searchBarContainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Buscar Pokemon\",\n    onChange: onChange\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\n\n//# sourceURL=webpack:///./src/components/SearchBar.jsx?");

/***/ }),

/***/ "./src/context/useContext.jsx":
/*!************************************!*\
  !*** ./src/context/useContext.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar pokedexContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (pokedexContext);\n\n//# sourceURL=webpack:///./src/context/useContext.jsx?");

/***/ }),

/***/ "./src/context/useReducer.jsx":
/*!************************************!*\
  !*** ./src/context/useReducer.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (state, action) {\n  var payload = action.payload,\n      type = action.type;\n\n  switch (type) {\n    case 'getData':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        pokemonsAPI: payload\n      });\n\n    case 'getPokemonsWithData':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        pokemonsWithData: payload\n      });\n\n    case 'getAll':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        pokemonsWithData: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state.pokemonsWithData), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(payload.slice(20)))\n      });\n\n    case 'showDetail':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showDetail: !state.showDetail,\n        pokemonDetail: payload\n      });\n\n    case 'closeDetail':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showDetail: false\n      });\n\n    case 'searchedPokemons':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        pokemonsSearch: payload.filteredPokemons,\n        searching: payload.searching\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/context/useReducer.jsx?");

/***/ }),

/***/ "./src/context/useState.jsx":
/*!**********************************!*\
  !*** ./src/context/useState.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _useReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useReducer */ \"./src/context/useReducer.jsx\");\n/* harmony import */ var _useContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useContext */ \"./src/context/useContext.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nvar PokedexState = function PokedexState(props) {\n  var initialState = {\n    pokemonsAPI: [],\n    pokemonsWithData: [],\n    allPokemons: [],\n    showDetail: false,\n    pokemonDetail: {},\n    pokemonsSearch: [],\n    searching: false\n  };\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useReducer\"])(_useReducer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], initialState),\n      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  var getPokemons = /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(page) {\n      var next, _yield$axios$get, data, prev, _yield$axios$get2, _data, _yield$axios$get3, _data2, res;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n\n              if (!(page === 'next')) {\n                _context.next = 12;\n                break;\n              }\n\n              next = state.pokemonsAPI.next;\n\n              if (!(next === null)) {\n                _context.next = 5;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 5:\n              _context.next = 7;\n              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"\".concat(next));\n\n            case 7:\n              _yield$axios$get = _context.sent;\n              data = _yield$axios$get.data;\n              dispatch({\n                type: 'getData',\n                payload: data\n              });\n              _context.next = 32;\n              break;\n\n            case 12:\n              if (!(page === 'prev')) {\n                _context.next = 23;\n                break;\n              }\n\n              prev = state.pokemonsAPI.previous;\n\n              if (!(prev === null)) {\n                _context.next = 16;\n                break;\n              }\n\n              return _context.abrupt(\"return\");\n\n            case 16:\n              _context.next = 18;\n              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"\".concat(prev));\n\n            case 18:\n              _yield$axios$get2 = _context.sent;\n              _data = _yield$axios$get2.data;\n              dispatch({\n                type: 'getData',\n                payload: _data\n              });\n              _context.next = 32;\n              break;\n\n            case 23:\n              _context.next = 25;\n              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');\n\n            case 25:\n              _yield$axios$get3 = _context.sent;\n              _data2 = _yield$axios$get3.data;\n              _context.next = 29;\n              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"https://pokeapi.co/api/v2/pokemon?limit=\".concat(_data2.count, \"&offset=0\"));\n\n            case 29:\n              res = _context.sent;\n              getAll(res.data.results);\n              dispatch({\n                type: 'getData',\n                payload: _data2\n              });\n\n            case 32:\n              _context.next = 37;\n              break;\n\n            case 34:\n              _context.prev = 34;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 37:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 34]]);\n    }));\n\n    return function getPokemons(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var getPokemonsWithData = /*#__PURE__*/function () {\n    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {\n      var pokemons, pokemonsLength, arr, i, _yield$axios$get4, data;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              pokemons = state.pokemonsAPI.results;\n\n              if (pokemons) {\n                _context2.next = 3;\n                break;\n              }\n\n              return _context2.abrupt(\"return\");\n\n            case 3:\n              pokemonsLength = state.pokemonsAPI.results.length;\n              arr = [];\n              i = 0;\n\n            case 6:\n              if (!(i < pokemonsLength)) {\n                _context2.next = 15;\n                break;\n              }\n\n              _context2.next = 9;\n              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"https://pokeapi.co/api/v2/pokemon/\".concat(pokemons[i].name));\n\n            case 9:\n              _yield$axios$get4 = _context2.sent;\n              data = _yield$axios$get4.data;\n              arr.push(data);\n\n            case 12:\n              i++;\n              _context2.next = 6;\n              break;\n\n            case 15:\n              console.log(arr);\n              dispatch({\n                type: 'getPokemonsWithData',\n                payload: arr\n              });\n\n            case 17:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function getPokemonsWithData() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var getAll = /*#__PURE__*/function () {\n    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(allPokemons) {\n      var pokemonsLength, arr, i, _yield$axios$get5, data;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              pokemonsLength = allPokemons.length;\n              arr = [];\n              i = 0;\n\n            case 3:\n              if (!(i < pokemonsLength)) {\n                _context3.next = 12;\n                break;\n              }\n\n              _context3.next = 6;\n              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"https://pokeapi.co/api/v2/pokemon/\".concat(allPokemons[i].name));\n\n            case 6:\n              _yield$axios$get5 = _context3.sent;\n              data = _yield$axios$get5.data;\n              arr.push(data);\n\n            case 9:\n              i++;\n              _context3.next = 3;\n              break;\n\n            case 12:\n              dispatch({\n                type: 'getAll',\n                payload: arr\n              });\n\n            case 13:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function getAll(_x2) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var searchPokemons = function searchPokemons(value) {\n    var filteredPokemons = state.pokemonsWithData.filter(function (pokemon) {\n      return pokemon.name.includes(value);\n    });\n    var searching = false;\n    if (value) searching = true;else searching = false;\n    var obj = {\n      filteredPokemons: filteredPokemons,\n      searching: searching\n    };\n    dispatch({\n      type: 'searchedPokemons',\n      payload: obj\n    });\n  };\n\n  var showDetailFunc = function showDetailFunc(pokemon) {\n    dispatch({\n      type: 'showDetail',\n      payload: pokemon\n    });\n  };\n\n  var closeDetail = function closeDetail() {\n    dispatch({\n      type: 'closeDetail'\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_useContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Provider, {\n    value: {\n      pokemonsAPI: state.pokemonsAPI,\n      pokemonsWithData: state.pokemonsWithData,\n      allPokemons: state.allPokemons,\n      showDetail: state.showDetail,\n      pokemonDetail: state.pokemonDetail,\n      pokemonsSearch: state.pokemonsSearch,\n      searching: state.searching,\n      getPokemons: getPokemons,\n      getPokemonsWithData: getPokemonsWithData,\n      showDetailFunc: showDetailFunc,\n      closeDetail: closeDetail,\n      searchPokemons: searchPokemons\n    }\n  }, props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PokedexState);\n\n//# sourceURL=webpack:///./src/context/useState.jsx?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../App */ \"./src/App.js\");\n/* harmony import */ var _context_useState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/useState */ \"./src/context/useState.jsx\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n/*  */\n\n\n\nvar PORT = process.env.PORT || 3000;\n/*  */\n\n/* app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')));\r\n\r\napp.get('/ssr', async (req, res) => {\r\n\r\n    const root = (\r\n        <html>\r\n            <body>\r\n                <div id=\"root\">\r\n                    <PokedexState>\r\n                        <App />\r\n                    </PokedexState>\r\n                </div>\r\n                <script src=\"/static/bundle.js\"></script>\r\n            </body>\r\n        </html>\r\n    );\r\n    const html = ReactDom.renderToString(root);\r\n\r\n    res.send(html);\r\n});\r\n\r\napp.listen(3000, () => {\r\n    console.log('server started: http://localhost:3000')\r\n}); */\n\n/*  */\n\napp.get('/', function (req, res) {\n  var app = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_context_useState__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_6___default.a.readFile(indexFile, 'utf8', function (err, data) {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('./build'));\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ 0:
/*!******************************************************************!*\
  !*** multi regenerator-runtime/runtime.js ./src/server/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! regenerator-runtime/runtime.js */\"regenerator-runtime/runtime.js\");\nmodule.exports = __webpack_require__(/*! ./src/server/index.js */\"./src/server/index.js\");\n\n\n//# sourceURL=webpack:///multi_regenerator-runtime/runtime.js_./src/server/index.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/toConsumableArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/toConsumableArray%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime/runtime\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime/runtime%22?");

/***/ }),

/***/ "regenerator-runtime/runtime.js":
/*!*************************************************!*\
  !*** external "regenerator-runtime/runtime.js" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime/runtime.js\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime/runtime.js%22?");

/***/ })

/******/ });