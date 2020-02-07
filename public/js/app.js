(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./resources/js/Editor/editorComponent.js":
/*!************************************************!*\
  !*** ./resources/js/Editor/editorComponent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 //import "./editorComponent.css";

var EditorComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EditorComponent, _React$Component);

  function EditorComponent(props) {
    var _this;

    _classCallCheck(this, EditorComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditorComponent).call(this, props)); // html conversion reference
    // https://reactrocket.com/post/draft-js-persisting-content/

    var editorBody;

    if (_this.props.body === '') {
      editorBody = draft_js__WEBPACK_IMPORTED_MODULE_1__["EditorState"].createEmpty();
    } else {
      editorBody = draft_js__WEBPACK_IMPORTED_MODULE_1__["EditorState"].createWithContent(Object(draft_js__WEBPACK_IMPORTED_MODULE_1__["convertFromRaw"])(JSON.parse(_this.props.body)));
    }

    _this.state = {
      editorState: editorBody,
      isFocused: false
    };

    _this.focus = function () {
      _this.refs.editor.focus();

      _this.setState({
        isFocused: true
      });
    };

    _this.blur = function () {
      _this.setState({
        isFocused: false
      });
    };

    _this.onChange = function (editorState) {
      _this.setState({
        editorState: editorState
      });

      _this.props.onChange(editorState);
    };

    _this.handleKeyCommand = function (command) {
      return _this._handleKeyCommand(command);
    };

    _this.onTab = function (e) {
      return _this._onTab(e);
    };

    _this.toggleBlockType = function (type) {
      return _this._toggleBlockType(type);
    };

    _this.toggleInlineStyle = function (style) {
      return _this._toggleInlineStyle(style);
    };

    return _this;
  }

  _createClass(EditorComponent, [{
    key: "_handleKeyCommand",
    value: function _handleKeyCommand(command) {
      var editorState = this.state.editorState;
      var newState = draft_js__WEBPACK_IMPORTED_MODULE_1__["RichUtils"].handleKeyCommand(editorState, command);

      if (newState) {
        this.onChange(newState);
        return true;
      }

      return false;
    }
  }, {
    key: "_onTab",
    value: function _onTab(e) {
      var maxDepth = 4;
      this.onChange(draft_js__WEBPACK_IMPORTED_MODULE_1__["RichUtils"].onTab(e, this.state.editorState, maxDepth));
    }
  }, {
    key: "_toggleBlockType",
    value: function _toggleBlockType(blockType) {
      this.onChange(draft_js__WEBPACK_IMPORTED_MODULE_1__["RichUtils"].toggleBlockType(this.state.editorState, blockType));
    }
  }, {
    key: "_toggleInlineStyle",
    value: function _toggleInlineStyle(inlineStyle) {
      this.onChange(draft_js__WEBPACK_IMPORTED_MODULE_1__["RichUtils"].toggleInlineStyle(this.state.editorState, inlineStyle));
    }
  }, {
    key: "render",
    value: function render() {
      var editorState = this.state.editorState; // If the user changes block type before entering any text, we can
      // either style the placeholder or hide it. Let's just hide it now.

      var className = "RichEditor-editor";
      var contentState = editorState.getCurrentContent();

      if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== "unstyled") {
          className += " RichEditor-hidePlaceholder";
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "RichEditor-root"
      }, this.state.isFocused ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InlineStyleControls, {
        editorState: editorState,
        onToggle: this.toggleInlineStyle
      }) : "", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: className,
        onBlur: this.blur,
        onClick: this.focus
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_1__["Editor"], {
        blockStyleFn: getBlockStyle,
        customStyleMap: styleMap,
        editorState: editorState,
        handleKeyCommand: this.handleKeyCommand,
        onChange: this.onChange // onTab={this.onTab}
        ,
        placeholder: this.state.isFocused ? "" : "Escribe tu historia...",
        ref: "editor",
        spellCheck: true
      })));
    }
  }]);

  return EditorComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); // Custom overrides for "code" style.


var styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 20,
    padding: 10
  }
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case "blockquote":
      return "RichEditor-blockquote";

    default:
      return null;
  }
}

var StyleButton =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(StyleButton, _React$Component2);

  function StyleButton() {
    var _this2;

    _classCallCheck(this, StyleButton);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(StyleButton).call(this));

    _this2.onToggle = function (e) {
      e.preventDefault();

      _this2.props.onToggle(_this2.props.style);
    };

    return _this2;
  }

  _createClass(StyleButton, [{
    key: "render",
    value: function render() {
      var className = "RichEditor-styleButton";

      if (this.props.active) {
        className += " RichEditor-activeButton";
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: className,
        onMouseDown: this.onToggle
      }, this.props.label);
    }
  }]);

  return StyleButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var BLOCK_TYPES = [{
  label: "Bold",
  style: "BOLD"
}, {
  label: "Italic",
  style: "ITALIC"
}, {
  label: "Underline",
  style: "UNDERLINE"
}, // { label: "Heading", style: "header-two" },
// { label: "H3", style: "header-three" },
// { label: "H4", style: "header-four" },
// { label: "H5", style: "header-five" },
// { label: "H6", style: "header-six" },
{
  label: "Quote",
  style: "blockquote"
} // { label: "List", style: "unordered-list-item" }
// { label: "OL", style: "ordered-list-item" },
// { label: "Code Block", style: "code-block" }
];

var BlockStyleControls = function BlockStyleControls(props) {
  var editorState = props.editorState;
  var selection = editorState.getSelection();
  var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "RichEditor-controls"
  }, BLOCK_TYPES.map(function (type) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyleButton, {
      key: type.label,
      active: type.style === blockType,
      label: type.label,
      onToggle: props.onToggle,
      style: type.style
    });
  }));
};

var INLINE_STYLES = [{
  label: "Bold",
  style: "BOLD"
}, {
  label: "Italic",
  style: "ITALIC"
}, {
  label: "Underline",
  style: "UNDERLINE"
} // { label: "Monospace", style: "CODE" }
];

var InlineStyleControls = function InlineStyleControls(props) {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "RichEditor-controls"
  }, INLINE_STYLES.map(function (type) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyleButton, {
      key: type.label,
      active: currentStyle.has(type.style),
      label: type.label,
      onToggle: props.onToggle,
      style: type.style
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EditorComponent);

/***/ }),

/***/ "./resources/js/PostControles/index.js":
/*!*********************************************!*\
  !*** ./resources/js/PostControles/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react */ "./node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var _components_include_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/include/alert */ "./resources/js/components/include/alert.jsx");
/* harmony import */ var react_timeago__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-timeago */ "./node_modules/react-timeago/lib/index.js");
/* harmony import */ var react_timeago__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_timeago__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_timeago_lib_language_strings_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-timeago/lib/language-strings/es */ "./node_modules/react-timeago/lib/language-strings/es.js");
/* harmony import */ var react_timeago_lib_language_strings_es__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_timeago_lib_language_strings_es__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_timeago_lib_formatters_buildFormatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-timeago/lib/formatters/buildFormatter */ "./node_modules/react-timeago/lib/formatters/buildFormatter.js");
/* harmony import */ var react_timeago_lib_formatters_buildFormatter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_timeago_lib_formatters_buildFormatter__WEBPACK_IMPORTED_MODULE_5__);






var formatter = react_timeago_lib_formatters_buildFormatter__WEBPACK_IMPORTED_MODULE_5___default()(react_timeago_lib_language_strings_es__WEBPACK_IMPORTED_MODULE_4___default.a);
var stackTokens = {
  childrenGap: 10
};
var SettingsIcon = {
  iconName: "Settings"
};

var PostControles = function PostControles(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "controlBar-alert"
  }, props.parentState.published ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_include_alert__WEBPACK_IMPORTED_MODULE_2__["SuccessAlert"], {
    isMultiline: true
  }, props.successText) : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    horizontal: true,
    minHeight: "50",
    horizontalAlign: "space-between"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    horizontalAlign: "start",
    verticalAlign: "bottom",
    tokens: stackTokens
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Toggle"], {
    label: " ",
    onText: "Anonymous",
    offText: "Anonymous",
    checked: !!props.parentState.anonymous,
    onChange: props.toggleSwitch
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    horizontal: true,
    horizontalAlign: "end",
    verticalAlign: "center",
    tokens: stackTokens
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    variant: "small",
    styles: {
      root: {
        color: "#666666"
      }
    }
  }, props.parentState.lastSaved, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_timeago__WEBPACK_IMPORTED_MODULE_3___default.a, {
    date: props.parentState.lastSavedTime,
    formatter: formatter
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["DefaultButton"], {
    text: "Guardar",
    onClick: props.handleSave,
    allowDisabledFocus: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["PrimaryButton"], {
    text: "Guardar y Publicar",
    onClick: props.handlePublish,
    allowDisabledFocus: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["CommandButton"], {
    iconProps: SettingsIcon,
    menuProps: props.menuProps
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PostControles);

/***/ }),

/***/ "./resources/js/Shimmers/index.js":
/*!****************************************!*\
  !*** ./resources/js/Shimmers/index.js ***!
  \****************************************/
/*! exports provided: StoryShimmer, UserDataShimmer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryShimmer", function() { return StoryShimmer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataShimmer", function() { return UserDataShimmer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react */ "./node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var office_ui_fabric_react_lib_Fabric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! office-ui-fabric-react/lib/Fabric */ "./node_modules/office-ui-fabric-react/lib/Fabric.js");
/* harmony import */ var office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react/lib/Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");




var shimmerStyle = Object(office_ui_fabric_react_lib_Styling__WEBPACK_IMPORTED_MODULE_3__["mergeStyles"])({
  padding: 2,
  selectors: {
    "& > .ms-Shimmer-container": {
      margin: "10px 0"
    }
  }
});
var StoryShimmer = function StoryShimmer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react_lib_Fabric__WEBPACK_IMPORTED_MODULE_2__["Fabric"], {
    className: shimmerStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Shimmer"], {
    shimmerElements: [{
      type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["ShimmerElementType"].line,
      width: "15%"
    }, {
      type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["ShimmerElementType"].gap,
      width: "51%"
    }, {
      type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["ShimmerElementType"].line,
      height: 24,
      width: "10%"
    }, {
      type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["ShimmerElementType"].gap,
      width: "1%"
    }, {
      type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["ShimmerElementType"].line,
      height: 24,
      width: "18%"
    }, {
      type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["ShimmerElementType"].gap,
      width: "1%"
    }, {
      type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["ShimmerElementType"].line,
      height: 24,
      width: "5%"
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Shimmer"], {
    shimmerElements: [{
      type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["ShimmerElementType"].line,
      height: 45
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Shimmer"], {
    shimmerElements: [{
      type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["ShimmerElementType"].line,
      height: 200
    }]
  }));
};
var UserDataShimmer = function UserDataShimmer() {
  var line = {
    type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["ShimmerElementType"].line,
    height: 30,
    width: "45%"
  };
  var gap = {
    type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["ShimmerElementType"].gap,
    width: "5%"
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react_lib_Fabric__WEBPACK_IMPORTED_MODULE_2__["Fabric"], {
    className: shimmerStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Shimmer"], {
    shimmerElements: [line, gap, line]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Shimmer"], {
    shimmerElements: [line, gap, line]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Shimmer"], {
    shimmerElements: [line, gap, line]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Shimmer"], {
    shimmerElements: [line, gap, line]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Shimmer"], {
    shimmerElements: [{
      type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["ShimmerElementType"].line,
      height: 30,
      width: "20%"
    }, {
      type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["ShimmerElementType"].gap,
      width: "80%"
    }]
  }));
};

/***/ }),

/***/ "./resources/js/Utils/Api.js":
/*!***********************************!*\
  !*** ./resources/js/Utils/Api.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function getPosts(_x) {
  return _getPosts.apply(this, arguments);
}

function _getPosts() {
  _getPosts = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(query) {
    var _ref3, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/searchUser?query=".concat(query));

          case 2:
            _ref3 = _context.sent;
            data = _ref3.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPosts.apply(this, arguments);
}

function getQuestions(_x2) {
  return _getQuestions.apply(this, arguments);
}

function _getQuestions() {
  _getQuestions = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(postId) {
    var _ref4, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/respuestas/".concat(postId));

          case 2:
            _ref4 = _context2.sent;
            data = _ref4.data;
            return _context2.abrupt("return", data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getQuestions.apply(this, arguments);
}

function saveAnswers(_x3) {
  return _saveAnswers.apply(this, arguments);
}

function _saveAnswers() {
  _saveAnswers = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref) {
    var url, code, _ref5, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = _ref.url, code = _ref.code;
            _context3.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_1___default()({
              url: "/api/respuestas/".concat(url),
              method: 'post',
              data: code
            });

          case 3:
            _ref5 = _context3.sent;
            data = _ref5.data;
            return _context3.abrupt("return", data);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _saveAnswers.apply(this, arguments);
}

function getUserData() {
  return _getUserData.apply(this, arguments);
}

function _getUserData() {
  _getUserData = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    var _ref6, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/mis-datos");

          case 2:
            _ref6 = _context4.sent;
            data = _ref6.data;
            return _context4.abrupt("return", data);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getUserData.apply(this, arguments);
}

function saveUserData(_x4) {
  return _saveUserData.apply(this, arguments);
}

function _saveUserData() {
  _saveUserData = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(_ref2) {
    var code, _ref7, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            code = _ref2.code;
            _context5.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_1___default()({
              url: "/api/mis-datos/guardar",
              method: 'post',
              data: code
            });

          case 3:
            _ref7 = _context5.sent;
            data = _ref7.data;
            return _context5.abrupt("return", data);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _saveUserData.apply(this, arguments);
}

var Api = {
  getPosts: getPosts,
  getQuestions: getQuestions,
  saveAnswers: saveAnswers,
  getUserData: getUserData,
  saveUserData: saveUserData
};
/* harmony default export */ __webpack_exports__["default"] = (Api);

/***/ }),

/***/ "./resources/js/Utils/Constants.js":
/*!*****************************************!*\
  !*** ./resources/js/Utils/Constants.js ***!
  \*****************************************/
/*! exports provided: POST_TYPES, STORY_MESSAGES, QUESTION_MESSAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_TYPES", function() { return POST_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORY_MESSAGES", function() { return STORY_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_MESSAGES", function() { return QUESTION_MESSAGES; });
var POST_TYPES = {
  STORY: "story",
  QUESTION: "question"
};
var STORY_MESSAGES = {
  SAVE: {
    SUCCESS: "Tu historia ha sido enviada para una revisión antes de ser publicada! Muchas gracias por compartir. Siempre estamos aquí para escuharte."
  }
};
var QUESTION_MESSAGES = {
  SAVE: {
    SUCCESS: "Tus respuestas han sido enviadas para una revisión antes de ser publicadas! Muchas gracias por compartir. Siempre estamos aquí para escuharte."
  }
};

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

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
//require('./components/Example');


__webpack_require__(/*! ./react-habitat */ "./resources/js/react-habitat.js");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.


try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

 */

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
// load microsoft fabric ui custom theme

__webpack_require__(/*! ./utils/muf-theme.js */ "./resources/js/utils/muf-theme.js");

/***/ }),

/***/ "./resources/js/components/backend/questions.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/components/backend/questions.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var BackendQuestions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BackendQuestions, _React$Component);

  function BackendQuestions(props) {
    var _this;

    _classCallCheck(this, BackendQuestions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BackendQuestions).call(this, props));
    _this.handleSave = _this.handleSave.bind(_assertThisInitialized(_this));
    _this.handleEdit = _this.handleEdit.bind(_assertThisInitialized(_this));
    _this.handleCancleEdit = _this.handleCancleEdit.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.deleteQuestion = _this.deleteQuestion.bind(_assertThisInitialized(_this));
    _this.editQuestion = _this.editQuestion.bind(_assertThisInitialized(_this));
    _this.state = {
      questionsList: _this.props.questionsList,
      question: _this.props.question,
      editedBody: _this.props.editedBody,
      editMode: _this.props.editMode,
      editSelectedQuestion: _this.props.editSelectedQuestion,
      errors: []
    };
    return _this;
  }

  _createClass(BackendQuestions, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/preguntas").then(function (response) {
        console.log(response);

        _this2.setState({
          questionsList: response.data
        });
      })["catch"](function (error) {
        _this2.setState({
          errors: error.response.data.errors
        });
      });
    }
  }, {
    key: "handleSave",
    value: function handleSave(e) {
      var _this3 = this;

      e.preventDefault();
      var question = {
        body: this.state.question
      };
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/backend/questions/add", question).then(function (response) {
        _this3.setState({
          question: "",
          questionsList: [].concat(_toConsumableArray(_this3.state.questionsList), [_objectSpread({}, question, {
            id: response.data.result
          })])
        });
      });
    }
  }, {
    key: "handleEdit",
    value: function handleEdit() {
      var _this4 = this;

      var question = {
        id: this.state.editSelectedQuestion.id,
        body: this.state.editedBody
      };
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/backend/questions/edit", question).then(function (response) {
        if (response.data) {
          var newQuestions = _this4.state.questionsList.filter(function (q) {
            if (q.id === _this4.state.editSelectedQuestion.id) {
              q.body = _this4.state.editedBody;
            }

            return q;
          });

          _this4.setState({
            questionsList: newQuestions
          });

          _this4.handleCancleEdit();
        }
      });
    }
  }, {
    key: "handleCancleEdit",
    value: function handleCancleEdit() {
      this.setState({
        editedBody: "",
        editMode: false,
        editSelectedQuestion: {}
      });
    }
  }, {
    key: "deleteQuestion",
    value: function deleteQuestion(id) {
      var _this5 = this;

      var question = {
        id: id
      };
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/backend/questions/delete", question).then(function (response) {
        if (response.data) {
          var newQuestions = _this5.state.questionsList.filter(function (q) {
            return q.id !== question.id;
          });

          _this5.setState({
            questionsList: newQuestions
          });
        }
      });
    }
  }, {
    key: "editQuestion",
    value: function editQuestion(question) {
      if (this.state.editSelectedQuestion.id === question.id) return;
      this.setState({
        editMode: true,
        editSelectedQuestion: question,
        editedBody: question.body
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(e) {
      this.setState(_defineProperty({}, event.target.name, e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, this.state.questionsList.length === 0 ? "No hay preguntas" : this.state.questionsList.map(function (question) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "list-group-item d-flex justify-content-between align-items-center",
          key: question.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "qitem_".concat(question.id)
        }, question.body), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "right"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: function onClick() {
            return _this6.deleteQuestion(question.id);
          },
          className: "btn btn-sm btn-light"
        }, "Delete"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: function onClick() {
            return _this6.editQuestion(question);
          },
          className: "btn btn-sm btn-light"
        }, "Edit")));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-footer"
      }, !this.state.editMode ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "Escribe nueva pregunta",
        onChange: this.handleInputChange,
        value: this.state.question,
        name: "question"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group-append"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleSave,
        className: "btn btn-success",
        type: "submit"
      }, "A\xF1adir")))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        id: "editedBodyHelp",
        className: "form-text text-muted"
      }, this.state.editSelectedQuestion.body), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "Edita tu pregunta",
        onChange: this.handleInputChange,
        value: this.state.editedBody,
        name: "editedBody",
        "aria-describedby": "editedBodyHelp"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group-append"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleCancleEdit,
        className: "btn btn-secondary"
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleEdit,
        className: "btn btn-success"
      }, "Guardar"))))));
    }
  }]);

  return BackendQuestions;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BackendQuestions.defaultProps = {
  question: "",
  editedBody: "",
  editSelectedQuestion: {},
  editMode: false,
  questionsList: []
};
BackendQuestions.propTypes = {
  question: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  editedBody: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  editSelectedQuestion: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  editMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  questionsList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (BackendQuestions);

/***/ }),

/***/ "./resources/js/components/backend/users.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/backend/users.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var BackendUsers =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BackendUsers, _React$Component);

  function BackendUsers(props) {
    var _this;

    _classCallCheck(this, BackendUsers);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BackendUsers).call(this, props));
    _this.state = {
      usersList: _this.props.usersList,
      errors: []
    };
    _this.toggleSwitch = _this.toggleSwitch.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BackendUsers, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/backend/users").then(function (response) {
        _this2.setState({
          usersList: response.data
        });
      })["catch"](function (error) {
        _this2.setState({
          errors: error.response.data.errors
        });
      });
    }
  }, {
    key: "toggleSwitch",
    value: function toggleSwitch(id, active) {
      var _this3 = this;

      var newUsers = this.state.usersList.filter(function (user) {
        if (user.id === id) {
          user.active = Number(!user.active);
        }

        return user;
      });
      var user = {
        active: !active,
        id: id
      };
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/backend/users/toggleactive", user).then(function (response) {
        if (response.data.result) {
          _this3.setState({
            usersList: newUsers
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "table table-striped table-hover table-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "id"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Email Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "last Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Login IP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Admin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Active"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Created"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, this.state.usersList.map(function (u, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: u.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, u.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, u.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, u.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, u.last_login_at), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, u.last_login_ip), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _this4.state.usersList[i].admin ? "Yes" : "No"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "form-check-input",
          type: "checkbox",
          disabled: !i ? 'disabled' : '',
          checked: _this4.state.usersList[i].active ? "checked" : "",
          onChange: function onChange() {
            return _this4.toggleSwitch(u.id, _this4.state.usersList[i].active);
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, u.created_at));
      })));
    }
  }]);

  return BackendUsers;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BackendUsers.defaultProps = {
  usersList: []
};
BackendUsers.propTypes = {
  usersList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (BackendUsers);

/***/ }),

/***/ "./resources/js/components/editor.jsx":
/*!********************************************!*\
  !*** ./resources/js/components/editor.jsx ***!
  \********************************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Shimmers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shimmers */ "./resources/js/Shimmers/index.js");
/* harmony import */ var _uifabric_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uifabric/icons */ "./node_modules/@uifabric/icons/lib/index.js");
/* harmony import */ var _include_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./include/alert */ "./resources/js/components/include/alert.jsx");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! draftjs-to-html */ "./node_modules/draftjs-to-html/lib/draftjs-to-html.js");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Utils/Constants */ "./resources/js/Utils/Constants.js");
/* harmony import */ var _PostControles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../PostControles */ "./resources/js/PostControles/index.js");
/* harmony import */ var _Editor_editorComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Editor/editorComponent */ "./resources/js/Editor/editorComponent.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var menuProps = {
  items: [{
    key: "removePost",
    text: "Eliminar Historia",
    iconProps: {
      iconName: "Delete"
    }
  }],
  directionalHintFixed: true
};
Object(_uifabric_icons__WEBPACK_IMPORTED_MODULE_5__["initializeIcons"])();

var Editor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Editor, _React$Component);

  function Editor(props) {
    var _this;

    _classCallCheck(this, Editor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Editor).call(this, props));
    _this.handleSave = _this.handleSave.bind(_assertThisInitialized(_this));
    _this.handlePublish = _this.handlePublish.bind(_assertThisInitialized(_this));
    _this.handleRequest = _this.handleRequest.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.toggleSwitch = _this.toggleSwitch.bind(_assertThisInitialized(_this));
    _this.hasErrorFor = _this.hasErrorFor.bind(_assertThisInitialized(_this));
    _this.renderErrorFor = _this.renderErrorFor.bind(_assertThisInitialized(_this));
    _this.handleEditorChange = _this.handleEditorChange.bind(_assertThisInitialized(_this));
    _this.getBodydata = _this.getBodydata.bind(_assertThisInitialized(_this));
    _this.state = {
      uuid: _this.props.uuid,
      title: _this.props.title,
      body: _this.props.body,
      anonymous: _this.props.anonymous,
      published: _this.props.published,
      lastSaved: _this.props.lastSaved,
      lastSavedTime: _this.props.lastSavedTime,
      errors: [],
      dataLoaded: _this.props.dataLoaded
    };
    return _this;
  }

  _createClass(Editor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var body = "";
      var title = "";
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/historia/" + this.state.uuid).then(function (response) {
        if (response.data.story !== null) {
          body = response.data.story.bodyjson;
        }

        if (response.data.title !== null) {
          title = response.data.title;
        }

        _this2.setState({
          title: title,
          body: body,
          anonymous: response.data.anonymous,
          published: response.data.published,
          dataLoaded: true
        });
      })["catch"](function (error) {
        if (error.response) {
          _this2.setState({
            errors: error.response.data.errors
          });
        }
      });
    }
  }, {
    key: "handleSave",
    value: function handleSave() {
      this.handleRequest("guardar", "Último guardado: ");
    }
  }, {
    key: "handlePublish",
    value: function handlePublish() {
      this.handleRequest("publicar");
    }
  }, {
    key: "handleRequest",
    value: function handleRequest(url) {
      var _this3 = this;

      var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var bodyData = this.getBodydata(this.state.body);
      var story = {
        title: this.state.title,
        body: bodyData.html,
        bodyjson: bodyData.json,
        anonymous: this.state.anonymous,
        published: this.state.published,
        uuid: this.state.uuid,
        action: url === "publicar" // true if url = publicar; false if url = guardar

      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/api/historia/" + url, story).then(function (response) {
        _this3.setState({
          lastSaved: msg,
          lastSavedTime: new Date(response.data.msg),
          errors: [],
          published: url === "publicar" ? true : _this3.state.published
        });
      })["catch"](function (error) {
        if (error.response) {
          _this3.setState({
            errors: error.response.data.errors
          });
        }
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(e) {
      var _this$setState;

      var updateErrors = this.state.errors;
      updateErrors[event.target.name] = "";
      this.setState((_this$setState = {}, _defineProperty(_this$setState, event.target.name, e.target.value), _defineProperty(_this$setState, "lastSaved", "Hay cambios sin guardar"), _defineProperty(_this$setState, "lastSavedTime", null), _defineProperty(_this$setState, "errors", updateErrors), _this$setState));
    }
  }, {
    key: "getBodydata",
    value: function getBodydata(editorState) {
      var empty = false;
      var dataObject = {};
      var raw = Object(draft_js__WEBPACK_IMPORTED_MODULE_7__["convertToRaw"])(editorState.getCurrentContent());
      var rawJSON = JSON.stringify(raw);
      var EditorsJSONBlocks = JSON.parse(rawJSON);
      empty = EditorsJSONBlocks.blocks.map(function (block) {
        return block.text.trim() === "";
      });

      var unique = _.uniq(empty);

      if (unique.length === 1 && unique[0]) {
        dataObject = {
          html: "",
          json: ""
        };
      } else {
        dataObject = {
          html: draftjs_to_html__WEBPACK_IMPORTED_MODULE_8___default()(raw),
          json: rawJSON
        };
      }

      return dataObject;
    }
  }, {
    key: "handleEditorChange",
    value: function handleEditorChange(editorState) {
      var updateErrors = this.state.errors;
      updateErrors["body"] = "";
      this.setState({
        body: editorState,
        lastSaved: "Hay cambios sin guardar",
        lastSavedTime: null,
        errors: updateErrors
      });
    }
  }, {
    key: "toggleSwitch",
    value: function toggleSwitch(e) {
      this.setState({
        anonymous: !this.state.anonymous
      });
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
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_include_alert__WEBPACK_IMPORTED_MODULE_6__["ErrorAlert"], null, this.state.errors[field][0]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !this.state.dataLoaded ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shimmers__WEBPACK_IMPORTED_MODULE_4__["StoryShimmer"], null) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostControles__WEBPACK_IMPORTED_MODULE_10__["default"], {
        parentState: this.state,
        menuProps: menuProps,
        toggleSwitch: this.toggleSwitch,
        handleSave: this.handleSave,
        handlePublish: this.handlePublish,
        successText: _Utils_Constants__WEBPACK_IMPORTED_MODULE_9__["STORY_MESSAGES"].SAVE.SUCCESS
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "big-input-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        className: "form-control big-input",
        name: "title",
        autoComplete: "off",
        "aria-describedby": "tituloHelp",
        placeholder: "T\xEDtulo de tu escrito",
        onChange: this.handleInputChange,
        value: this.state.title
      }), this.renderErrorFor("title")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Editor_editorComponent__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onChange: this.handleEditorChange,
        body: this.state.body
      }), this.renderErrorFor("body")));
    }
  }]);

  return Editor;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

function getPost(_x) {
  return _getPost.apply(this, arguments);
}

function _getPost() {
  _getPost = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(uid) {
    var _ref, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/historia/".concat(uid));

          case 2:
            _ref = _context.sent;
            data = _ref.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPost.apply(this, arguments);
}

Editor.defaultProps = {
  uuid: _.last((new URL(window.location.href) + "").split("/")),
  title: "",
  body: "",
  anonymous: false,
  published: false,
  lastSaved: "",
  lastSavedTime: null,
  dataLoaded: false
};
Editor.propTypes = {
  uuid: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  body: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  anonymous: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  published: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  lastSaved: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  lastSavedTime: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  dataLoaded: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),

/***/ "./resources/js/components/include/alert.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/include/alert.jsx ***!
  \***************************************************/
/*! exports provided: DefaultAlert, SuccessAlert, ErrorAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultAlert", function() { return DefaultAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessAlert", function() { return SuccessAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorAlert", function() { return ErrorAlert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react */ "./node_modules/office-ui-fabric-react/lib/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var DefaultAlert = function DefaultAlert(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["MessageBar"], props, props.children);
};
var SuccessAlert = function SuccessAlert(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["MessageBar"], _extends({}, props, {
    messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["MessageBarType"].success,
    isMultiline: false
  }), props.children);
};
var ErrorAlert = function ErrorAlert(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["MessageBar"], _extends({}, props, {
    messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["MessageBarType"].error,
    isMultiline: false,
    dismissButtonAriaLabel: "Close"
  }), props.children);
};

/***/ }),

/***/ "./resources/js/components/include/header.jsx":
/*!****************************************************!*\
  !*** ./resources/js/components/include/header.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var PageHeader = function PageHeader(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ms-fontSize-24"
  }, props.title, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "ms-fontSize-16"
  }, props.subtitle))));
};

/* harmony default export */ __webpack_exports__["default"] = (PageHeader);

/***/ }),

/***/ "./resources/js/components/pages/contarHistoria.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/components/pages/contarHistoria.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! office-ui-fabric-react */ "./node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var _include_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../include/header */ "./resources/js/components/include/header.jsx");



var stackTokens = {
  childrenGap: 20
};

var ContarHistoria = function ContarHistoria() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_include_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Cu\xE9ntanos tu experiencia",
    subtitle: "Puedes escoger cualquiera de las siguientes opciones"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    className: "component",
    horizontal: true,
    horizontalAlign: "center",
    verticalAlign: "center",
    tokens: stackTokens
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["CompoundButton"], {
    className: "ms-depth-4",
    href: "/contar-mi-historia",
    secondaryText: "Redactar un escrito para contar tus experiencias"
  }, "Quiero contar mi historia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_1__["CompoundButton"], {
    className: "ms-depth-4",
    href: "/responder-a-preguntas",
    secondaryText: "Participar en la entrevista y reponder a pregutas"
  }, "Quiero responder a preguntas")));
};

/* harmony default export */ __webpack_exports__["default"] = (ContarHistoria);

/***/ }),

/***/ "./resources/js/components/pages/miHistoria.jsx":
/*!******************************************************!*\
  !*** ./resources/js/components/pages/miHistoria.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _include_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../include/header */ "./resources/js/components/include/header.jsx");



var MiHistoria = function MiHistoria() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_include_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Mi Historia",
    subtitle: "Comparte tus experiencias con tu comunidad."
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MiHistoria);

/***/ }),

/***/ "./resources/js/components/pages/misDatos.jsx":
/*!****************************************************!*\
  !*** ./resources/js/components/pages/misDatos.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _include_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../include/header */ "./resources/js/components/include/header.jsx");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings */ "./resources/js/components/settings.jsx");




var MisDatos = function MisDatos() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_include_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Mis Datos",
    subtitle: "Rellena el siguiente formulario con tu informaci\xF3n"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settings__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (MisDatos);

/***/ }),

/***/ "./resources/js/components/questions.jsx":
/*!***********************************************!*\
  !*** ./resources/js/components/questions.jsx ***!
  \***********************************************/
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
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/Constants */ "./resources/js/Utils/Constants.js");
/* harmony import */ var _include_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./include/alert */ "./resources/js/components/include/alert.jsx");
/* harmony import */ var _PostControles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PostControles */ "./resources/js/PostControles/index.js");
/* harmony import */ var _Utils_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Utils/Api */ "./resources/js/Utils/Api.js");
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react */ "./node_modules/office-ui-fabric-react/lib/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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








var menuProps = {
  items: [{
    key: "removePost",
    text: "Eliminar Historia",
    iconProps: {
      iconName: "Delete"
    }
  }],
  directionalHintFixed: true
};

var Questions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Questions, _React$Component);

  function Questions(props) {
    var _this;

    _classCallCheck(this, Questions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Questions).call(this, props));
    _this.handleSave = _this.handleSave.bind(_assertThisInitialized(_this));
    _this.handlePublish = _this.handlePublish.bind(_assertThisInitialized(_this));
    _this.handleRequest = _this.handleRequest.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.toggleSwitch = _this.toggleSwitch.bind(_assertThisInitialized(_this));
    _this.hasErrorFor = _this.hasErrorFor.bind(_assertThisInitialized(_this));
    _this.renderErrorFor = _this.renderErrorFor.bind(_assertThisInitialized(_this));
    _this.state = {
      loading: _this.props.loading,
      uuid: _this.props.uuid,
      anonymous: _this.props.anonymous,
      published: _this.props.published,
      lastSaved: _this.props.lastSaved,
      questionsList: _this.props.questionsList,
      indexes: _this.props.indexes,
      errors: []
    };
    return _this;
  }

  _createClass(Questions, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getQuestions(this.props.uuid);
    }
  }, {
    key: "handleSave",
    value: function handleSave() {
      this.handleRequest("guardar", "Último guardado: ");
    }
  }, {
    key: "handlePublish",
    value: function handlePublish() {
      var _this2 = this;

      this.setState({
        published: true
      }, function () {
        _this2.handleRequest("publicar");
      });
    }
  }, {
    key: "handleRequest",
    value: function () {
      var _handleRequest = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
        var _this3 = this;

        var msg,
            answerList,
            code,
            response,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                msg = _args.length > 1 && _args[1] !== undefined ? _args[1] : "";
                answerList = this.state.indexes.map(function (el) {
                  return {
                    question_id: el.id,
                    body: _this3.state[el.key]
                  };
                });
                code = {
                  uuid: this.state.uuid,
                  anonymous: this.state.anonymous,
                  published: this.state.published,
                  answers: answerList
                };
                _context.prev = 3;
                _context.next = 6;
                return _Utils_Api__WEBPACK_IMPORTED_MODULE_6__["default"].saveAnswers({
                  url: url,
                  code: code
                });

              case 6:
                response = _context.sent;
                this.setState({
                  lastSaved: msg + response.msg,
                  errors: []
                });
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);

                if (_context.t0.response) {
                  this.setState({
                    errors: _context.t0.response.data.errors
                  });
                }

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 10]]);
      }));

      function handleRequest(_x) {
        return _handleRequest.apply(this, arguments);
      }

      return handleRequest;
    }()
  }, {
    key: "handleInputChange",
    value: function handleInputChange(e) {
      var _this$setState;

      this.setState((_this$setState = {}, _defineProperty(_this$setState, event.target.name, e.target.value), _defineProperty(_this$setState, "lastSaved", "Hay cambios sin guardar"), _this$setState));
    }
  }, {
    key: "toggleSwitch",
    value: function toggleSwitch(e) {
      this.setState({
        anonymous: !this.state.anonymous
      });
    }
  }, {
    key: "getQuestions",
    value: function () {
      var _getQuestions = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(postId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = this;
                _context2.next = 3;
                return _Utils_Api__WEBPACK_IMPORTED_MODULE_6__["default"].getQuestions(postId);

              case 3:
                _context2.t1 = _context2.sent;

                _context2.t0.updateQuestionsData.call(_context2.t0, _context2.t1);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getQuestions(_x2) {
        return _getQuestions.apply(this, arguments);
      }

      return getQuestions;
    }()
  }, {
    key: "saveQuestions",
    value: function () {
      var _saveQuestions = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = this;
                _context3.next = 3;
                return _Utils_Api__WEBPACK_IMPORTED_MODULE_6__["default"].saveQuestions();

              case 3:
                _context3.t1 = _context3.sent;

                _context3.t0.saveQuestionsData.call(_context3.t0, _context3.t1);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function saveQuestions() {
        return _saveQuestions.apply(this, arguments);
      }

      return saveQuestions;
    }()
  }, {
    key: "updateQuestionsData",
    value: function updateQuestionsData(_ref) {
      var questions = _ref.questions,
          post = _ref.post;

      var _this$generateQuestio = this.generateQuestionStateEls({
        questions: questions,
        post: post
      }),
          questionStateEls = _this$generateQuestio.questionStateEls,
          indexes = _this$generateQuestio.indexes;

      this.setState(_objectSpread({
        loading: false,
        questionsList: questions
      }, questionStateEls, {
        indexes: indexes,
        anonymous: post.anonymous,
        published: post.published
      }));
    }
  }, {
    key: "generateQuestionStateEls",
    value: function generateQuestionStateEls(_ref2) {
      var questions = _ref2.questions,
          post = _ref2.post;
      var questionStateEls = [];
      var indexes = [];

      if (post.answers.length) {
        post.answers.map(function (q) {
          questionStateEls["question_" + q.pivot.question_id] = q.pivot.body;
          indexes.push({
            key: "question_" + q.pivot.question_id,
            id: q.pivot.question_id
          });
        });
      } else {
        questions.map(function (q) {
          questionStateEls["question_" + q.id] = "";
          indexes.push({
            key: "question_" + q.id,
            id: q.id
          });
        });
      }

      return {
        questionStateEls: questionStateEls,
        indexes: indexes
      };
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
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_include_alert__WEBPACK_IMPORTED_MODULE_4__["ErrorAlert"], null, this.state.errors[field][0]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, this.renderErrorFor("uuid"), this.renderErrorFor("anonymous"), this.renderErrorFor("published"), this.renderErrorFor("answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostControles__WEBPACK_IMPORTED_MODULE_5__["default"], {
        parentState: this.state,
        menuProps: menuProps,
        toggleSwitch: this.toggleSwitch,
        handleSave: this.handleSave,
        handlePublish: this.handlePublish,
        successText: _Utils_Constants__WEBPACK_IMPORTED_MODULE_3__["QUESTION_MESSAGES"].SAVE.SUCCESS
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__["Stack"], null, this.state.questionsList.map(function (q, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
          key: i,
          multiline: true,
          rows: 4,
          styles: {
            root: {
              paddingTop: 10,
              paddingBottom: 10
            },
            field: {
              fontSize: 18,
              fontFamily: 'Georgia'
            }
          },
          label: q.body,
          name: "question_".concat(q.id),
          onChange: _this4.handleInputChange,
          value: _this4.state["question_" + q.id],
          placeholder: "Escribe aqui tu respuesta..."
        });
      })));
    }
  }]);

  return Questions;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Questions.defaultProps = {
  loading: true,
  uuid: _.last((new URL(window.location.href) + "").split("/")),
  anonymous: false,
  published: false,
  lastSaved: "",
  questionsList: [],
  indexes: []
};
Questions.propTypes = {
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  uuid: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  anonymous: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  published: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  lastSaved: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  questionsList: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  indexes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Questions);

/***/ }),

/***/ "./resources/js/components/settings.jsx":
/*!**********************************************!*\
  !*** ./resources/js/components/settings.jsx ***!
  \**********************************************/
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
/* harmony import */ var _Shimmers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shimmers */ "./resources/js/Shimmers/index.js");
/* harmony import */ var _Utils_spanishCityNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/spanishCityNames */ "./resources/js/Utils/spanishCityNames.js");
/* harmony import */ var _Utils_countryNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utils/countryNames */ "./resources/js/Utils/countryNames.js");
/* harmony import */ var _include_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./include/alert */ "./resources/js/components/include/alert.jsx");
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react */ "./node_modules/office-ui-fabric-react/lib/index.js");
/* harmony import */ var _Utils_Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Utils/Api */ "./resources/js/Utils/Api.js");


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
      nationality: _Utils_countryNames__WEBPACK_IMPORTED_MODULE_5__["default"][0],
      city: _Utils_spanishCityNames__WEBPACK_IMPORTED_MODULE_4__["default"][0],
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
                this.saveData(_Utils_Api__WEBPACK_IMPORTED_MODULE_8__["default"].saveUserData, {
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
                return _Utils_Api__WEBPACK_IMPORTED_MODULE_8__["default"].getUserData();

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
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_include_alert__WEBPACK_IMPORTED_MODULE_6__["ErrorAlert"], null, this.state.errors[field][0]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, this.state.feedback ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_include_alert__WEBPACK_IMPORTED_MODULE_6__["SuccessAlert"], {
        styles: {
          root: {
            marginBottom: 10
          }
        }
      }, this.state.feedback) : "", !this.state.dataLoaded ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shimmers__WEBPACK_IMPORTED_MODULE_3__["UserDataShimmer"], null) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
        horizontal: true,
        tokens: innerStackTokens
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__["Stack"].Item, {
        grow: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
        label: "Nombre",
        title: "name",
        placeholder: "Escribe tu nombre",
        value: this.state.name,
        onChange: this.handleInputChange,
        styles: elementsStyles
      }), this.renderErrorFor("name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], {
        label: "Tu ciudad",
        title: "city",
        selectedKey: this.state.city ? this.state.city.key : undefined,
        onChange: this.handleInputChange,
        placeholder: "Escoje tu ciudad",
        options: _Utils_spanishCityNames__WEBPACK_IMPORTED_MODULE_4__["default"],
        styles: elementsStyles
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
        label: "A\xF1o de nacimiento",
        title: "age_year",
        placeholder: "ej.: 1994",
        value: this.state.age_year,
        onChange: this.handleInputChange,
        styles: elementsStyles
      }), this.renderErrorFor("age_year")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__["Stack"].Item, {
        grow: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
        label: "Apellido",
        title: "surname",
        placeholder: "Escribe tu apellido",
        value: this.state.surname,
        onChange: this.handleInputChange,
        styles: elementsStyles
      }), this.renderErrorFor("surname"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], {
        label: "Nacionalidad",
        title: "nationality",
        selectedKey: this.state.nationality ? this.state.nationality.key : undefined,
        onChange: this.handleInputChange,
        placeholder: "Escoje tu pa\xEDs de origen",
        options: _Utils_countryNames__WEBPACK_IMPORTED_MODULE_5__["default"],
        styles: elementsStyles
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
        label: "A\xF1o de llegada a Barcelona",
        title: "arrival_year",
        placeholder: "ej.: 2005",
        value: this.state.arrival_year,
        onChange: this.handleInputChange,
        styles: elementsStyles
      }), this.renderErrorFor("arrival_year"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
        horizontal: true,
        horizontalAlign: "space-between",
        styles: {
          root: {
            paddingTop: 20
          }
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__["Stack"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__["PrimaryButton"], {
        text: "Guardar y Publicar",
        onClick: this.handleSubmit,
        allowDisabledFocus: true
      })))));
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

/***/ "./resources/js/react-habitat.js":
/*!***************************************!*\
  !*** ./resources/js/react-habitat.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_habitat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-habitat */ "./node_modules/react-habitat/lib/index.js");
/* harmony import */ var react_habitat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_habitat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/editor */ "./resources/js/components/editor.jsx");
/* harmony import */ var _components_backend_questions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/backend/questions */ "./resources/js/components/backend/questions.jsx");
/* harmony import */ var _components_backend_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/backend/users */ "./resources/js/components/backend/users.jsx");
/* harmony import */ var _components_questions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/questions */ "./resources/js/components/questions.jsx");
/* harmony import */ var _components_pages_contarHistoria__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/contarHistoria */ "./resources/js/components/pages/contarHistoria.jsx");
/* harmony import */ var _components_pages_miHistoria__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/miHistoria */ "./resources/js/components/pages/miHistoria.jsx");
/* harmony import */ var _components_pages_misDatos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/misDatos */ "./resources/js/components/pages/misDatos.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // React Habitat requires Object.assign pollyfill for old IE support










var App =
/*#__PURE__*/
function (_ReactHabitat$Bootstr) {
  _inherits(App, _ReactHabitat$Bootstr);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this)); // Create a new container

    var containerBuilder = new react_habitat__WEBPACK_IMPORTED_MODULE_1___default.a.ContainerBuilder(); //Register our components that we want to expose to the DOM

    containerBuilder.register(_components_editor__WEBPACK_IMPORTED_MODULE_2__["default"]).as('editor');
    containerBuilder.register(_components_backend_questions__WEBPACK_IMPORTED_MODULE_3__["default"]).as('backend_questions');
    containerBuilder.register(_components_backend_users__WEBPACK_IMPORTED_MODULE_4__["default"]).as('users');
    containerBuilder.register(_components_questions__WEBPACK_IMPORTED_MODULE_5__["default"]).as('questions');
    containerBuilder.register(_components_pages_contarHistoria__WEBPACK_IMPORTED_MODULE_6__["default"]).as('contar-historia');
    containerBuilder.register(_components_pages_miHistoria__WEBPACK_IMPORTED_MODULE_7__["default"]).as('mi-historia');
    containerBuilder.register(_components_pages_misDatos__WEBPACK_IMPORTED_MODULE_8__["default"]).as('mis-datos'); // Set the DOM container

    _this.setContainer(containerBuilder.build());

    return _this;
  }

  return App;
}(react_habitat__WEBPACK_IMPORTED_MODULE_1___default.a.Bootstrapper); // Create a single instance of our app


var instance = new App(); // Bind the update method onto the window for the dynamic demo
// Alternatively we could have imported this file into another
// eg
//
// import App from './App';
//
// App.update();
//

window.updateHabitat = instance.update.bind(instance); // Export the instance

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./resources/js/utils/muf-theme.js":
/*!*****************************************!*\
  !*** ./resources/js/utils/muf-theme.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! office-ui-fabric-react */ "./node_modules/office-ui-fabric-react/lib/index.js");

Object(office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_0__["loadTheme"])({
  palette: {
    themePrimary: "#304e60",
    themeLighterAlt: "#f4f7f9",
    themeLighter: "#d3dfe6",
    themeLight: "#b0c4d0",
    themeTertiary: "#708ea0",
    themeSecondary: "#416074",
    themeDarkAlt: "#2c4657",
    themeDark: "#253c4a",
    themeDarker: "#1b2c36",
    neutralLighterAlt: "#eee8db",
    neutralLighter: "#eae4d8",
    neutralLight: "#e1dbcf",
    neutralQuaternaryAlt: "#d1ccc1",
    neutralQuaternary: "#c8c3b8",
    neutralTertiaryAlt: "#c0bbb1",
    neutralTertiary: "#c2c2c2",
    neutralSecondary: "#858585",
    neutralPrimaryAlt: "#4b4b4b",
    neutralPrimary: "#333333",
    neutralDark: "#272727",
    black: "#1d1d1d",
    white: "#f5efe1"
  }
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Applications/MAMP/htdocs/mihistoria/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/mihistoria/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);