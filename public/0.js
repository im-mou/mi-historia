(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/editor/editorComponent.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/editor/editorComponent.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".RichEditor-root {\n  /* background: #fff; */\n  /* border: 1px solid #ddd; */\n  border-left: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  font-family: 'Georgia', serif;\n  font-size: 14px;\n  padding: 10px 15px;\n}\n\n.RichEditor-editor {\n  cursor: text;\n  font-size: 18px;\n  color: #304e60;\n}\n\n.RichEditor-editor .public-DraftEditor-content {\n  margin: 0 -15px -15px;\n  padding: 15px;\n}\n\n.RichEditor-editor .public-DraftEditorPlaceholder-root {\n  padding: 10px 0;\n  color: #bbbbbb\n}\n\n.RichEditor-editor .public-DraftEditor-content {\n  min-height: 100px;\n  margin-top: 10px;\n}\n\n.RichEditor-hidePlaceholder .public-DraftEditorPlaceholder-root {\n  display: none;\n}\n\n.RichEditor-editor .RichEditor-blockquote {\n  border-left: 5px solid #eee;\n  color: #666;\n  font-family: 'Hoefler Text', 'Georgia', serif;\n  font-style: italic;\n  margin: 16px 0;\n  padding: 10px 20px;\n}\n\n.RichEditor-editor .public-DraftStyleDefault-pre {\n  background-color: rgba(0, 0, 0, 0.05);\n  font-family: 'Inconsolata', 'Menlo', 'Consolas', monospace;\n  font-size: 16px;\n  padding: 20px;\n}\n\n.RichEditor-controls {\n  border-bottom: 1px solid #ddd;\n  font-family: 'Helvetica', sans-serif;\n  font-size: 14px;\n  padding-bottom: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.RichEditor-styleButton {\n  color: #999;\n  cursor: pointer;\n  margin-right: 16px;\n  padding: 2px 0;\n  display: inline-block;\n}\n\n.RichEditor-activeButton {\n  color: #5890ff;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/editor/editorComponent.css":
/*!*************************************************!*\
  !*** ./resources/js/editor/editorComponent.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/postcss-loader/src??ref--6-2!./editorComponent.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/editor/editorComponent.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/editor/editorComponent.js":
/*!************************************************!*\
  !*** ./resources/js/editor/editorComponent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editorComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editorComponent.css */ "./resources/js/editor/editorComponent.css");
/* harmony import */ var _editorComponent_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editorComponent_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var EditorComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EditorComponent, _React$Component);

  function EditorComponent(props) {
    var _this;

    _classCallCheck(this, EditorComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditorComponent).call(this, props));
    console.log(_this.props.body);
    var editorBody = "";

    if (_this.props.body) {
      editorBody = draft_js__WEBPACK_IMPORTED_MODULE_1__["EditorState"].createWithContent(convertFromRaw(JSON.parse(_this.props.body)));
    } else {
      editorBody = draft_js__WEBPACK_IMPORTED_MODULE_1__["EditorState"].createEmpty();
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

/***/ })

}]);