(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ "./resources/js/Editor/index.js":
/*!**************************************!*\
  !*** ./resources/js/Editor/index.js ***!
  \**************************************/
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
/* harmony import */ var _uifabric_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uifabric/icons */ "./node_modules/@uifabric/icons/lib/index.js");
/* harmony import */ var _Parts_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Parts/Alert */ "./resources/js/Parts/Alert.jsx");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! draftjs-to-html */ "./node_modules/draftjs-to-html/lib/draftjs-to-html.js");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utils_Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Utils/Constants */ "./resources/js/Utils/Constants.js");
/* harmony import */ var _PostControles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PostControles */ "./resources/js/PostControles/index.js");
/* harmony import */ var _editorComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editorComponent */ "./resources/js/Editor/editorComponent.js");
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
Object(_uifabric_icons__WEBPACK_IMPORTED_MODULE_3__["initializeIcons"])();

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
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/historia/" + this.state.uuid).then(function (response) {
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
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/historia/" + url, story).then(function (response) {
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
      var raw = Object(draft_js__WEBPACK_IMPORTED_MODULE_5__["convertToRaw"])(editorState.getCurrentContent());
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
          html: draftjs_to_html__WEBPACK_IMPORTED_MODULE_6___default()(raw),
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
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Parts_Alert__WEBPACK_IMPORTED_MODULE_4__["ErrorAlert"], null, this.state.errors[field][0]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostControles__WEBPACK_IMPORTED_MODULE_8__["default"], {
        parentState: this.state,
        menuProps: menuProps,
        toggleSwitch: this.toggleSwitch,
        handleSave: this.handleSave,
        handlePublish: this.handlePublish,
        successText: _Utils_Constants__WEBPACK_IMPORTED_MODULE_7__["STORY_MESSAGES"].SAVE.SUCCESS
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "big-input-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control big-input",
        name: "title",
        autoComplete: "off",
        "aria-describedby": "tituloHelp",
        placeholder: "T\xEDtulo de tu escrito",
        onChange: this.handleInputChange,
        value: this.state.title
      }), this.renderErrorFor("title")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editorComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onChange: this.handleEditorChange,
        body: this.state.body
      }), this.renderErrorFor("body"));
    }
  }]);

  return Editor;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

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
  uuid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  anonymous: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  published: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  lastSaved: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  lastSavedTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  dataLoaded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ })

}]);