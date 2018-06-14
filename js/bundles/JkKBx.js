var pageComponent =
webpackJsonppageComponent([5],{

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

var _step_4Soy = __webpack_require__(297);

var _step_4Soy2 = _interopRequireDefault(_step_4Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JkKBx = function (_Component) {
  _inherits(JkKBx, _Component);

  function JkKBx() {
    _classCallCheck(this, JkKBx);

    return _possibleConstructorReturn(this, (JkKBx.__proto__ || Object.getPrototypeOf(JkKBx)).apply(this, arguments));
  }

  return JkKBx;
}(_metalComponent2.default);

;

_metalSoy2.default.register(JkKBx, _step_4Soy2.default);

exports.default = JkKBx;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.JkKBx = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from step_4.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace JkKBx.
   * @public
   */

  goog.module('JkKBx.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param593 = function param593() {
      ie_open('h2');
      var dyn40 = opt_data.page.title;
      if (typeof dyn40 == 'function') dyn40();else if (dyn40 != null) itext(dyn40);
      ie_close('h2');
      ie_open('p');
      itext('We can configure the logging behavior by creating a static resource named \'logging\', with the content to be a json file.');
      ie_close('p');
      $templateAlias2({ code: '[\n    {\n        "patterns": [ "test" ],\n        "level": "Debug",\n        "appenders": [\n            {\n                "name": "Log.DefaultAppender"\n            }\n        ]\n    }\n]', mode: 'JSON' }, null, opt_ijData);
      ie_open('p');
      itext('This will control the logger named \'test\', created below.');
      ie_close('p');
      $templateAlias2({ code: 'private static final Log logger = Log.getLogger(\'test\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Patterns here support regular expressions, and you can set multiple patterns as well.');
      ie_close('p');
      ie_open('p');
      itext('And the config will enable the \'test\' logger to print any information with level no less than \'Debug\'(Debug, Info, Warn, Error). Besides, it specifies the appender, which is used to append the log information to somewhere. Here we used the default appender, which uses ');
      ie_open('code');
      itext('System.debug');
      ie_close('code');
      itext(' as the logging output.');
      ie_close('p');
      ie_open('p');
      ie_open('code');
      itext('Log.DefaultAppender');
      ie_close('code');
      itext(' is the name of the appender class. If you want to use your custom appender, please set the appender name here.');
      ie_close('p');
      ie_open('p');
      itext('You can also load configuration files with other names.');
      ie_close('p');
      $templateAlias2({ code: 'Log.configureFromFile(\'otherLogging\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Just make sure to put this code before you create any loggers.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param593 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'JkKBx.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var JkKBx = function (_Component) {
  _inherits(JkKBx, _Component);

  function JkKBx() {
    _classCallCheck(this, JkKBx);

    return _possibleConstructorReturn(this, (JkKBx.__proto__ || Object.getPrototypeOf(JkKBx)).apply(this, arguments));
  }

  return JkKBx;
}(_metalComponent2.default);

_metalSoy2.default.register(JkKBx, templates);
exports.JkKBx = JkKBx;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[296]);