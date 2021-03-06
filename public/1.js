(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/Settings/index.js":
/*!****************************************!*\
  !*** ./resources/js/Settings/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utils_spanishCityNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/spanishCityNames */ "./resources/js/Utils/spanishCityNames.js");
/* harmony import */ var _Utils_countryNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/countryNames */ "./resources/js/Utils/countryNames.js");
/* harmony import */ var _Parts_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Parts/Alert */ "./resources/js/Parts/Alert.jsx");
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react */ "./node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var _Utils_Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Utils/Api */ "./resources/js/Utils/Api.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var elementsStyles = {
  root: {
    height: 70
  }
};
var innerStackTokens = {
  childrenGap: 20
};

var Settings =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Settings, _React$Component);

  function Settings(props) {
    var _this;

    _classCallCheck(this, Settings);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Settings).call(this, props));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.hasErrorFor = _this.hasErrorFor.bind(_assertThisInitialized(_this));
    _this.renderErrorFor = _this.renderErrorFor.bind(_assertThisInitialized(_this));
    _this.updateErrors = _this.updateErrors.bind(_assertThisInitialized(_this));
    _this.state = {
      name: _this.props.name,
      surname: _this.props.surname,
      nationality: _Utils_countryNames__WEBPACK_IMPORTED_MODULE_4__["default"][0],
      city: _Utils_spanishCityNames__WEBPACK_IMPORTED_MODULE_3__["default"][0],
      arrival_year: _this.props.arrival_year,
      age_year: _this.props.age_year,
      feedback: _this.props.feedback,
      dataLoaded: _this.props.dataLoaded,
      errors: []
    };
    return _this;
  }

  _createClass(Settings, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getUserData();
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var code;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                code = {
                  name: this.state.name,
                  surname: this.state.surname,
                  nationality: this.state.nationality.key,
                  city: this.state.city.key,
                  arrival_year: this.state.arrival_year,
                  age_year: this.state.age_year
                };
                this.saveData(_Utils_Api__WEBPACK_IMPORTED_MODULE_7__["default"].saveUserData, {
                  code: code
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit() {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "saveData",
    value: function () {
      var _saveData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(apiMethod) {
        var _len,
            args,
            _key,
            response,
            _args2 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                for (_len = _args2.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = _args2[_key];
                }

                _context2.next = 4;
                return apiMethod.apply(void 0, args);

              case 4:
                response = _context2.sent;
                this.setState({
                  feedback: response.msg,
                  errors: []
                });
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);

                if (_context2.t0.response) {
                  this.updateErrors(_context2.t0.response.data);
                }

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function saveData(_x) {
        return _saveData.apply(this, arguments);
      }

      return saveData;
    }()
  }, {
    key: "getUserData",
    value: function () {
      var _getUserData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = this;
                _context3.next = 3;
                return _Utils_Api__WEBPACK_IMPORTED_MODULE_7__["default"].getUserData();

              case 3:
                _context3.t1 = _context3.sent;

                _context3.t2 = function (error) {
                  if (error.response) {
                    _this2.updateErrors(error.response.data);
                  }
                };

                _context3.t0.updateUserState.call(_context3.t0, _context3.t1)["catch"](_context3.t2);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getUserData() {
        return _getUserData.apply(this, arguments);
      }

      return getUserData;
    }()
  }, {
    key: "updateUserState",
    value: function () {
      var _updateUserState = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // function dedicated to update state.
                if (data) {
                  this.setState({
                    name: data.name,
                    surname: data.surname,
                    nationality: {
                      key: data.nationality,
                      text: data.nationality
                    },
                    city: {
                      key: data.city,
                      text: data.city
                    },
                    arrival_year: data.arrival_year,
                    age_year: data.age_year
                  });
                }

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateUserState(_x2) {
        return _updateUserState.apply(this, arguments);
      }

      return updateUserState;
    }()
  }, {
    key: "updateErrors",
    value: function updateErrors(data) {
      this.setState({
        errors: data.errors,
        feedback: ""
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event, data) {
      this.setState(_defineProperty({}, event.target.title, data));
    }
  }, {
    key: "hasErrorFor",
    value: function hasErrorFor(field) {
      return !!this.state.errors[field];
    }
  }, {
    key: "renderErrorFor",
    value: function renderErrorFor(field) {
      if (this.hasErrorFor(field)) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Parts_Alert__WEBPACK_IMPORTED_MODULE_5__["ErrorAlert"], null, this.state.errors[field][0]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, this.state.feedback ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Parts_Alert__WEBPACK_IMPORTED_MODULE_5__["SuccessAlert"], {
        styles: {
          root: {
            marginBottom: 10
          }
        }
      }, this.state.feedback) : "", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
        horizontal: true,
        tokens: innerStackTokens
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__["Stack"].Item, {
        grow: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
        label: "Nombre",
        title: "name",
        placeholder: "Escribe tu nombre",
        value: this.state.name,
        onChange: this.handleInputChange,
        styles: elementsStyles
      }), this.renderErrorFor("name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
        label: "Tu ciudad",
        title: "city",
        selectedKey: this.state.city ? this.state.city.key : undefined,
        onChange: this.handleInputChange,
        placeholder: "Escoje tu ciudad",
        options: _Utils_spanishCityNames__WEBPACK_IMPORTED_MODULE_3__["default"],
        styles: elementsStyles
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
        label: "A\xF1o de nacimiento",
        title: "age_year",
        placeholder: "ej.: 1994",
        value: this.state.age_year,
        onChange: this.handleInputChange,
        styles: elementsStyles
      }), this.renderErrorFor("age_year")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__["Stack"].Item, {
        grow: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
        label: "Apellido",
        title: "surname",
        placeholder: "Escribe tu apellido",
        value: this.state.surname,
        onChange: this.handleInputChange,
        styles: elementsStyles
      }), this.renderErrorFor("surname"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
        label: "Nacionalidad",
        title: "nationality",
        selectedKey: this.state.nationality ? this.state.nationality.key : undefined,
        onChange: this.handleInputChange,
        placeholder: "Escoje tu pa\xEDs de origen",
        options: _Utils_countryNames__WEBPACK_IMPORTED_MODULE_4__["default"],
        styles: elementsStyles
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
        label: "A\xF1o de llegada a Barcelona",
        title: "arrival_year",
        placeholder: "ej.: 2005",
        value: this.state.arrival_year,
        onChange: this.handleInputChange,
        styles: elementsStyles
      }), this.renderErrorFor("arrival_year"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
        horizontal: true,
        horizontalAlign: "space-between",
        styles: {
          root: {
            paddingTop: 20
          }
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__["Stack"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__["PrimaryButton"], {
        text: "Guardar y Publicar",
        onClick: this.handleSubmit,
        allowDisabledFocus: true
      }))));
    }
  }]);

  return Settings;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Settings.defaultProps = {
  name: "",
  surname: "",
  nationality: {},
  city: {},
  arrival_year: "",
  age_year: "",
  feedback: "",
  dataLoaded: false
};
Settings.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  surname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  nationality: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  city: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  arrival_year: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  age_year: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  feedback: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  dataLoaded: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./resources/js/Utils/countryNames.js":
/*!********************************************!*\
  !*** ./resources/js/Utils/countryNames.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var countryNames = [{
  key: "España",
  text: "España"
}, {
  key: "Pakistán",
  text: "Pakistán"
}, {
  key: "India",
  text: "India"
}, {
  key: "Bangladesh",
  text: "Bangladesh"
}, {
  key: "Afganistán",
  text: "Afganistán"
}, {
  key: "Albania",
  text: "Albania"
}, {
  key: "Alemania",
  text: "Alemania"
}, {
  key: "Andorra",
  text: "Andorra"
}, {
  key: "Angola",
  text: "Angola"
}, {
  key: "Anguilla",
  text: "Anguilla"
}, {
  key: "Antártida",
  text: "Antártida"
}, {
  key: "Antigua y Barbuda",
  text: "Antigua y Barbuda"
}, {
  key: "Antillas Holandesas",
  text: "Antillas Holandesas"
}, {
  key: "Arabia Saudita",
  text: "Arabia Saudita"
}, {
  key: "Argelia",
  text: "Argelia"
}, {
  key: "Argentina",
  text: "Argentina"
}, {
  key: "Armenia",
  text: "Armenia"
}, {
  key: "Aruba",
  text: "Aruba"
}, {
  key: "Australia",
  text: "Australia"
}, {
  key: "Austria",
  text: "Austria"
}, {
  key: "Azerbaiján",
  text: "Azerbaiján"
}, {
  key: "Bahamas",
  text: "Bahamas"
}, {
  key: "Bahrain",
  text: "Bahrain"
}, {
  key: "Barbados",
  text: "Barbados"
}, {
  key: "Bélgica",
  text: "Bélgica"
}, {
  key: "Belice",
  text: "Belice"
}, {
  key: "Benin",
  text: "Benin"
}, {
  key: "Bhutan",
  text: "Bhutan"
}, {
  key: "Bielorusia",
  text: "Bielorusia"
}, {
  key: "Bolivia",
  text: "Bolivia"
}, {
  key: "Bosnia Herzegovina",
  text: "Bosnia Herzegovina"
}, {
  key: "Botswana",
  text: "Botswana"
}, {
  key: "Brasil",
  text: "Brasil"
}, {
  key: "Brunei",
  text: "Brunei"
}, {
  key: "Bulgaria",
  text: "Bulgaria"
}, {
  key: "Burkina Faso",
  text: "Burkina Faso"
}, {
  key: "Burundi",
  text: "Burundi"
}, {
  key: "Cabo Verde",
  text: "Cabo Verde"
}, {
  key: "Camboya",
  text: "Camboya"
}, {
  key: "Camerún",
  text: "Camerún"
}, {
  key: "Canadá",
  text: "Canadá"
}, {
  key: "Chad",
  text: "Chad"
}, {
  key: "Chile",
  text: "Chile"
}, {
  key: "China",
  text: "China"
}, {
  key: "Chipre",
  text: "Chipre"
}, {
  key: "Colombia",
  text: "Colombia"
}, {
  key: "Comoros",
  text: "Comoros"
}, {
  key: "Congo",
  text: "Congo"
}, {
  key: "Corea del Norte",
  text: "Corea del Norte"
}, {
  key: "Corea del Sur",
  text: "Corea del Sur"
}, {
  key: "Costa de Marfil",
  text: "Costa de Marfil"
}, {
  key: "Costa Rica",
  text: "Costa Rica"
}, {
  key: "Croacia",
  text: "Croacia"
}, {
  key: "Cuba",
  text: "Cuba"
}, {
  key: "Darussalam",
  text: "Darussalam"
}, {
  key: "Dinamarca",
  text: "Dinamarca"
}, {
  key: "Djibouti",
  text: "Djibouti"
}, {
  key: "Dominica",
  text: "Dominica"
}, {
  key: "Ecuador",
  text: "Ecuador"
}, {
  key: "Egipto",
  text: "Egipto"
}, {
  key: "El Salvador",
  text: "El Salvador"
}, {
  key: "Em. Arabes Un.",
  text: "Em. Arabes Un."
}, {
  key: "Eritrea",
  text: "Eritrea"
}, {
  key: "Eslovaquia",
  text: "Eslovaquia"
}, {
  key: "Eslovenia",
  text: "Eslovenia"
}, {
  key: "Estados Unidos",
  text: "Estados Unidos"
}, {
  key: "Estonia",
  text: "Estonia"
}, {
  key: "Etiopía",
  text: "Etiopía"
}, {
  key: "Fiji",
  text: "Fiji"
}, {
  key: "Filipinas",
  text: "Filipinas"
}, {
  key: "Finlandia",
  text: "Finlandia"
}, {
  key: "Francia",
  text: "Francia"
}, {
  key: "Gabón",
  text: "Gabón"
}, {
  key: "Gambia",
  text: "Gambia"
}, {
  key: "Georgia",
  text: "Georgia"
}, {
  key: "Ghana",
  text: "Ghana"
}, {
  key: "Gibraltar",
  text: "Gibraltar"
}, {
  key: "Grecia",
  text: "Grecia"
}, {
  key: "Grenada",
  text: "Grenada"
}, {
  key: "Groenlandia",
  text: "Groenlandia"
}, {
  key: "Guadalupe",
  text: "Guadalupe"
}, {
  key: "Guam",
  text: "Guam"
}, {
  key: "Guatemala",
  text: "Guatemala"
}, {
  key: "Guayana Francesa",
  text: "Guayana Francesa"
}, {
  key: "Guinea",
  text: "Guinea"
}, {
  key: "Guinea Ecuatorial",
  text: "Guinea Ecuatorial"
}, {
  key: "Guinea-Bissau",
  text: "Guinea-Bissau"
}, {
  key: "Guyana",
  text: "Guyana"
}, {
  key: "Haití",
  text: "Haití"
}, {
  key: "Holanda",
  text: "Holanda"
}, {
  key: "Honduras",
  text: "Honduras"
}, {
  key: "Hong Kong",
  text: "Hong Kong"
}, {
  key: "Hungría",
  text: "Hungría"
}, {
  key: "Indonesia",
  text: "Indonesia"
}, {
  key: "Irak",
  text: "Irak"
}, {
  key: "Irán",
  text: "Irán"
}, {
  key: "Irlanda",
  text: "Irlanda"
}, {
  key: "Islandia",
  text: "Islandia"
}, {
  key: "Islas Cayman",
  text: "Islas Cayman"
}, {
  key: "Islas Cook",
  text: "Islas Cook"
}, {
  key: "Islas Faroe",
  text: "Islas Faroe"
}, {
  key: "Islas Marianas del Norte",
  text: "Islas Marianas del Norte"
}, {
  key: "Islas Marshall",
  text: "Islas Marshall"
}, {
  key: "Islas Solomon",
  text: "Islas Solomon"
}, {
  key: "Islas Turcas y Caicos",
  text: "Islas Turcas y Caicos"
}, {
  key: "Islas Vírgenes",
  text: "Islas Vírgenes"
}, {
  key: "Islas Wallis y Futuna",
  text: "Islas Wallis y Futuna"
}, {
  key: "Israel",
  text: "Israel"
}, {
  key: "Italia",
  text: "Italia"
}, {
  key: "Jamaica",
  text: "Jamaica"
}, {
  key: "Japón",
  text: "Japón"
}, {
  key: "Jordania",
  text: "Jordania"
}, {
  key: "Kazajstán",
  text: "Kazajstán"
}, {
  key: "Kenya",
  text: "Kenya"
}, {
  key: "Kirguistán",
  text: "Kirguistán"
}, {
  key: "Kiribati",
  text: "Kiribati"
}, {
  key: "Kuwait",
  text: "Kuwait"
}, {
  key: "Laos",
  text: "Laos"
}, {
  key: "Lesotho",
  text: "Lesotho"
}, {
  key: "Letonia",
  text: "Letonia"
}, {
  key: "Líbano",
  text: "Líbano"
}, {
  key: "Liberia",
  text: "Liberia"
}, {
  key: "Libia",
  text: "Libia"
}, {
  key: "Liechtenstein",
  text: "Liechtenstein"
}, {
  key: "Lituania",
  text: "Lituania"
}, {
  key: "Luxemburgo",
  text: "Luxemburgo"
}, {
  key: "Macao",
  text: "Macao"
}, {
  key: "Macedonia",
  text: "Macedonia"
}, {
  key: "Madagascar",
  text: "Madagascar"
}, {
  key: "Malasia",
  text: "Malasia"
}, {
  key: "Malawi",
  text: "Malawi"
}, {
  key: "Mali",
  text: "Mali"
}, {
  key: "Malta",
  text: "Malta"
}, {
  key: "Marruecos",
  text: "Marruecos"
}, {
  key: "Martinica",
  text: "Martinica"
}, {
  key: "Mauricio",
  text: "Mauricio"
}, {
  key: "Mauritania",
  text: "Mauritania"
}, {
  key: "Mayotte",
  text: "Mayotte"
}, {
  key: "México",
  text: "México"
}, {
  key: "Micronesia",
  text: "Micronesia"
}, {
  key: "Moldova",
  text: "Moldova"
}, {
  key: "Mónaco",
  text: "Mónaco"
}, {
  key: "Mongolia",
  text: "Mongolia"
}, {
  key: "Montserrat",
  text: "Montserrat"
}, {
  key: "Mozambique",
  text: "Mozambique"
}, {
  key: "Myanmar",
  text: "Myanmar"
}, {
  key: "Namibia",
  text: "Namibia"
}, {
  key: "Nauru",
  text: "Nauru"
}, {
  key: "Nepal",
  text: "Nepal"
}, {
  key: "Nicaragua",
  text: "Nicaragua"
}, {
  key: "Níger",
  text: "Níger"
}, {
  key: "Nigeria",
  text: "Nigeria"
}, {
  key: "Noruega",
  text: "Noruega"
}, {
  key: "Nueva Caledonia",
  text: "Nueva Caledonia"
}, {
  key: "Nueva Zelandia",
  text: "Nueva Zelandia"
}, {
  key: "Omán",
  text: "Omán"
}, {
  key: "Panamá",
  text: "Panamá"
}, {
  key: "Papua Nueva Guinea",
  text: "Papua Nueva Guinea"
}, {
  key: "Paraguay",
  text: "Paraguay"
}, {
  key: "Perú",
  text: "Perú"
}, {
  key: "Pitcairn",
  text: "Pitcairn"
}, {
  key: "Polinesia Francesa",
  text: "Polinesia Francesa"
}, {
  key: "Polonia",
  text: "Polonia"
}, {
  key: "Portugal",
  text: "Portugal"
}, {
  key: "Puerto Rico",
  text: "Puerto Rico"
}, {
  key: "Qatar",
  text: "Qatar"
}, {
  key: "RD Congo",
  text: "RD Congo"
}, {
  key: "Reino Unido",
  text: "Reino Unido"
}, {
  key: "República Centroafricana",
  text: "República Centroafricana"
}, {
  key: "República Checa",
  text: "República Checa"
}, {
  key: "República Dominicana",
  text: "República Dominicana"
}, {
  key: "Reunión",
  text: "Reunión"
}, {
  key: "Rumania",
  text: "Rumania"
}, {
  key: "Rusia",
  text: "Rusia"
}, {
  key: "Rwanda",
  text: "Rwanda"
}, {
  key: "Sahara Occidental",
  text: "Sahara Occidental"
}, {
  key: "Saint Pierre y Miquelon",
  text: "Saint Pierre y Miquelon"
}, {
  key: "Samoa",
  text: "Samoa"
}, {
  key: "Samoa Americana",
  text: "Samoa Americana"
}, {
  key: "San Cristóbal y Nevis",
  text: "San Cristóbal y Nevis"
}, {
  key: "San Marino",
  text: "San Marino"
}, {
  key: "Santa Elena",
  text: "Santa Elena"
}, {
  key: "Santa Lucía",
  text: "Santa Lucía"
}, {
  key: "Sao Tomé y Príncipe",
  text: "Sao Tomé y Príncipe"
}, {
  key: "Senegal",
  text: "Senegal"
}, {
  key: "Serbia y Montenegro",
  text: "Serbia y Montenegro"
}, {
  key: "Seychelles",
  text: "Seychelles"
}, {
  key: "Sierra Leona",
  text: "Sierra Leona"
}, {
  key: "Singapur",
  text: "Singapur"
}, {
  key: "Siria",
  text: "Siria"
}, {
  key: "Somalia",
  text: "Somalia"
}, {
  key: "Sri Lanka",
  text: "Sri Lanka"
}, {
  key: "Sudáfrica",
  text: "Sudáfrica"
}, {
  key: "Sudán",
  text: "Sudán"
}, {
  key: "Suecia",
  text: "Suecia"
}, {
  key: "Suiza",
  text: "Suiza"
}, {
  key: "Suriname",
  text: "Suriname"
}, {
  key: "Swazilandia",
  text: "Swazilandia"
}, {
  key: "Taiwán",
  text: "Taiwán"
}, {
  key: "Uruguay",
  text: "Uruguay"
}];
/* harmony default export */ __webpack_exports__["default"] = (countryNames);

/***/ }),

/***/ "./resources/js/Utils/spanishCityNames.js":
/*!************************************************!*\
  !*** ./resources/js/Utils/spanishCityNames.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var spanishCityNames = [{
  key: "Barcelona",
  text: "Barcelona"
}, {
  key: "L’Hospitalet de Llobregat",
  text: "L’Hospitalet de Llobregat"
}, {
  key: "Badalona",
  text: "Badalona"
}, {
  key: "Cornellà",
  text: "Cornellà"
}, {
  key: "Sabadell",
  text: "Sabadell"
}, {
  key: "Terrassa",
  text: "Terrassa"
}, {
  key: "Vilanova i la Geltrú",
  text: "Vilanova i la Geltrú"
}, {
  key: "Ávila",
  text: "Ávila"
}, {
  key: "A Coruña",
  text: "A Coruña"
}, {
  key: "Albacete",
  text: "Albacete"
}, {
  key: "Alcalá de Guadaira",
  text: "Alcalá de Guadaira"
}, {
  key: "Alcalá de Henares",
  text: "Alcalá de Henares"
}, {
  key: "Alcoy",
  text: "Alcoy"
}, {
  key: "Alcántara",
  text: "Alcántara"
}, {
  key: "Alcázar de San Juan",
  text: "Alcázar de San Juan"
}, {
  key: "Algeciras",
  text: "Algeciras"
}, {
  key: "Alicante",
  text: "Alicante"
}, {
  key: "Almadén",
  text: "Almadén"
}, {
  key: "Almendralejo",
  text: "Almendralejo"
}, {
  key: "Almería",
  text: "Almería"
}, {
  key: "Alzira",
  text: "Alzira"
}, {
  key: "Andújar",
  text: "Andújar"
}, {
  key: "Antequera",
  text: "Antequera"
}, {
  key: "Aranjuez",
  text: "Aranjuez"
}, {
  key: "Arcos de la Frontera",
  text: "Arcos de la Frontera"
}, {
  key: "Arucas",
  text: "Arucas"
}, {
  key: "Astorga",
  text: "Astorga"
}, {
  key: "Avilés",
  text: "Avilés"
}, {
  key: "Badajoz",
  text: "Badajoz"
}, {
  key: "Barakaldo",
  text: "Barakaldo"
}, {
  key: "Baza",
  text: "Baza"
}, {
  key: "Bilbao",
  text: "Bilbao"
}, {
  key: "Bujalance",
  text: "Bujalance"
}, {
  key: "Burgos",
  text: "Burgos"
}, {
  key: "Cabañaquinta",
  text: "Cabañaquinta"
}, {
  key: "Cabra",
  text: "Cabra"
}, {
  key: "Calahorra",
  text: "Calahorra"
}, {
  key: "Cangas de Narcea",
  text: "Cangas de Narcea"
}, {
  key: "Caravaca",
  text: "Caravaca"
}, {
  key: "Carballo",
  text: "Carballo"
}, {
  key: "Carmona",
  text: "Carmona"
}, {
  key: "Cartagena",
  text: "Cartagena"
}, {
  key: "Castellón de la Plana",
  text: "Castellón de la Plana"
}, {
  key: "Chiclana de la Frontera",
  text: "Chiclana de la Frontera"
}, {
  key: "Cieza",
  text: "Cieza"
}, {
  key: "Ciudad Real",
  text: "Ciudad Real"
}, {
  key: "Ciudad Rodrigo",
  text: "Ciudad Rodrigo"
}, {
  key: "Covadonga",
  text: "Covadonga"
}, {
  key: "Coín",
  text: "Coín"
}, {
  key: "Cuenca",
  text: "Cuenca"
}, {
  key: "Cáceres",
  text: "Cáceres"
}, {
  key: "Cádiz",
  text: "Cádiz"
}, {
  key: "Córdoba",
  text: "Córdoba"
}, {
  key: "Don Benito",
  text: "Don Benito"
}, {
  key: "Donostia–San Sebastián",
  text: "Donostia–San Sebastián"
}, {
  key: "Dos Hermanas",
  text: "Dos Hermanas"
}, {
  key: "Ecija",
  text: "Ecija"
}, {
  key: "Eibar",
  text: "Eibar"
}, {
  key: "El Escorial",
  text: "El Escorial"
}, {
  key: "El Puerto de Santa María",
  text: "El Puerto de Santa María"
}, {
  key: "Elche",
  text: "Elche"
}, {
  key: "Elda",
  text: "Elda"
}, {
  key: "Ferrol",
  text: "Ferrol"
}, {
  key: "Funes",
  text: "Funes"
}, {
  key: "Gandía",
  text: "Gandía"
}, {
  key: "Getafe",
  text: "Getafe"
}, {
  key: "Getxo",
  text: "Getxo"
}, {
  key: "Gijón",
  text: "Gijón"
}, {
  key: "Girona",
  text: "Girona"
}, {
  key: "Granada",
  text: "Granada"
}, {
  key: "Granollers",
  text: "Granollers"
}, {
  key: "Guadalajara",
  text: "Guadalajara"
}, {
  key: "Guadalupe",
  text: "Guadalupe"
}, {
  key: "Guadix",
  text: "Guadix"
}, {
  key: "Guernica",
  text: "Guernica"
}, {
  key: "Hellín",
  text: "Hellín"
}, {
  key: "Huelva",
  text: "Huelva"
}, {
  key: "Huesca",
  text: "Huesca"
}, {
  key: "Irun",
  text: "Irun"
}, {
  key: "Jaca",
  text: "Jaca"
}, {
  key: "Jaén",
  text: "Jaén"
}, {
  key: "Jerez de la Frontera",
  text: "Jerez de la Frontera"
}, {
  key: "Jumilla",
  text: "Jumilla"
}, {
  key: "La Línea",
  text: "La Línea"
}, {
  key: "La Orotava",
  text: "La Orotava"
}, {
  key: "Las Palmas",
  text: "Las Palmas"
}, {
  key: "Lebrija",
  text: "Lebrija"
}, {
  key: "León",
  text: "León"
}, {
  key: "Linares",
  text: "Linares"
}, {
  key: "Lleida",
  text: "Lleida"
}, {
  key: "Llívia",
  text: "Llívia"
}, {
  key: "Logroño",
  text: "Logroño"
}, {
  key: "Lora del Río",
  text: "Lora del Río"
}, {
  key: "Lorca",
  text: "Lorca"
}, {
  key: "Luarca",
  text: "Luarca"
}, {
  key: "Lucena",
  text: "Lucena"
}, {
  key: "Lugo",
  text: "Lugo"
}, {
  key: "Madrid",
  text: "Madrid"
}, {
  key: "Manresa",
  text: "Manresa"
}, {
  key: "Marchena",
  text: "Marchena"
}, {
  key: "Martos",
  text: "Martos"
}, {
  key: "Mataró",
  text: "Mataró"
}, {
  key: "Maó",
  text: "Maó"
}, {
  key: "Melilla",
  text: "Melilla"
}, {
  key: "Mieres",
  text: "Mieres"
}, {
  key: "Miranda de Ebro",
  text: "Miranda de Ebro"
}, {
  key: "Mondoñedo",
  text: "Mondoñedo"
}, {
  key: "Monforte de Lemos",
  text: "Monforte de Lemos"
}, {
  key: "Montilla",
  text: "Montilla"
}, {
  key: "Morón de la Frontera",
  text: "Morón de la Frontera"
}, {
  key: "Motril",
  text: "Motril"
}, {
  key: "Murcia",
  text: "Murcia"
}, {
  key: "Málaga",
  text: "Málaga"
}, {
  key: "Mérida",
  text: "Mérida"
}, {
  key: "Orihuela",
  text: "Orihuela"
}, {
  key: "Ortigueira",
  text: "Ortigueira"
}, {
  key: "Osuna",
  text: "Osuna"
}, {
  key: "Ourense",
  text: "Ourense"
}, {
  key: "Oviedo",
  text: "Oviedo"
}, {
  key: "Palencia",
  text: "Palencia"
}, {
  key: "Palma",
  text: "Palma"
}, {
  key: "Pamplona",
  text: "Pamplona"
}, {
  key: "Peñarroya-Pueblonuevo",
  text: "Peñarroya-Pueblonuevo"
}, {
  key: "Plasencia",
  text: "Plasencia"
}, {
  key: "Pola de Siero",
  text: "Pola de Siero"
}, {
  key: "Ponferrada",
  text: "Ponferrada"
}, {
  key: "Pontevedra",
  text: "Pontevedra"
}, {
  key: "Portugalete",
  text: "Portugalete"
}, {
  key: "Priego de Córdoba",
  text: "Priego de Córdoba"
}, {
  key: "Puente-Genil",
  text: "Puente-Genil"
}, {
  key: "Puerto Real",
  text: "Puerto Real"
}, {
  key: "Puertollano",
  text: "Puertollano"
}, {
  key: "Requena",
  text: "Requena"
}, {
  key: "Reus",
  text: "Reus"
}, {
  key: "Ribeira",
  text: "Ribeira"
}, {
  key: "Roncesvalles",
  text: "Roncesvalles"
}, {
  key: "Ronda",
  text: "Ronda"
}, {
  key: "Sagunto",
  text: "Sagunto"
}, {
  key: "Salamanca",
  text: "Salamanca"
}, {
  key: "San Fernando",
  text: "San Fernando"
}, {
  key: "San Ildefonso",
  text: "San Ildefonso"
}, {
  key: "San Martín del Rey Aurelio",
  text: "San Martín del Rey Aurelio"
}, {
  key: "Sanlúcar de Barrameda",
  text: "Sanlúcar de Barrameda"
}, {
  key: "Santa Coloma de Gramenet",
  text: "Santa Coloma de Gramenet"
}, {
  key: "Santa Cruz de Tenerife",
  text: "Santa Cruz de Tenerife"
}, {
  key: "Santander",
  text: "Santander"
}, {
  key: "Santiago de Compostela",
  text: "Santiago de Compostela"
}, {
  key: "Santurtzi",
  text: "Santurtzi"
}, {
  key: "Segovia",
  text: "Segovia"
}, {
  key: "Sestao",
  text: "Sestao"
}, {
  key: "Sevilla",
  text: "Sevilla"
}, {
  key: "Simancas",
  text: "Simancas"
}, {
  key: "Soria",
  text: "Soria"
}, {
  key: "Sueca",
  text: "Sueca"
}, {
  key: "Talavera de la Reina",
  text: "Talavera de la Reina"
}, {
  key: "Tarragona",
  text: "Tarragona"
}, {
  key: "Telde",
  text: "Telde"
}, {
  key: "Teruel",
  text: "Teruel"
}, {
  key: "Tineo",
  text: "Tineo"
}, {
  key: "Toledo",
  text: "Toledo"
}, {
  key: "Tomelloso",
  text: "Tomelloso"
}, {
  key: "Toro",
  text: "Toro"
}, {
  key: "Torrelavega",
  text: "Torrelavega"
}, {
  key: "Torrent",
  text: "Torrent"
}, {
  key: "Tortosa",
  text: "Tortosa"
}, {
  key: "Trujillo",
  text: "Trujillo"
}, {
  key: "Úbeda",
  text: "Úbeda"
}, {
  key: "Utrera",
  text: "Utrera"
}, {
  key: "Valdepeñas",
  text: "Valdepeñas"
}, {
  key: "Valencia",
  text: "Valencia"
}, {
  key: "Valladolid",
  text: "Valladolid"
}, {
  key: "Vic",
  text: "Vic"
}, {
  key: "Vigo",
  text: "Vigo"
}, {
  key: "Vilagarcía de Arousa",
  text: "Vilagarcía de Arousa"
}, {
  key: "Vilalba",
  text: "Vilalba"
}, {
  key: "Villanueva de la Serena",
  text: "Villanueva de la Serena"
}, {
  key: "Villarreal",
  text: "Villarreal"
}, {
  key: "Villarrobledo",
  text: "Villarrobledo"
}, {
  key: "Villaviciosa",
  text: "Villaviciosa"
}, {
  key: "Villena",
  text: "Villena"
}, {
  key: "Vitoria-Gasteiz",
  text: "Vitoria-Gasteiz"
}, {
  key: "Yecla",
  text: "Yecla"
}, {
  key: "Zamora",
  text: "Zamora"
}, {
  key: "Zaragoza",
  text: "Zaragoza"
}];
/* harmony default export */ __webpack_exports__["default"] = (spanishCityNames);

/***/ })

}]);