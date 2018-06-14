var pageComponent =
webpackJsonppageComponent([19],{

/***/ 294:
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

var _defaultAppenderSoy = __webpack_require__(295);

var _defaultAppenderSoy2 = _interopRequireDefault(_defaultAppenderSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MlXmu = function (_Component) {
  _inherits(MlXmu, _Component);

  function MlXmu() {
    _classCallCheck(this, MlXmu);

    return _possibleConstructorReturn(this, (MlXmu.__proto__ || Object.getPrototypeOf(MlXmu)).apply(this, arguments));
  }

  return MlXmu;
}(_metalComponent2.default);

;

_metalSoy2.default.register(MlXmu, _defaultAppenderSoy2.default);

exports.default = MlXmu;

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.MlXmu = undefined;

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

  // This file was automatically generated from defaultAppender.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace MlXmu.
   * @public
   */

  goog.module('MlXmu.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param373 = function param373() {
      ie_open('h6');
      var dyn30 = opt_data.page.description;
      if (typeof dyn30 == 'function') dyn30();else if (dyn30 != null) itext(dyn30);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Default Appender');
      ie_close('h2');
      ie_open('p');
      itext('Log.apex has a default appender, ');
      ie_open('code');
      itext('Log.DefaultAppender');
      ie_close('code');
      itext(', which outputs logging information to');
      ie_open('code');
      itext('System.debug');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The default appender outputs messages with current class name, current method name, current line number and current column number.');
      ie_close('p');
      $templateAlias2({ code: '11:18:39.50 (103576326)|USER_DEBUG|[984]|DEBUG|AnonymousBlock.(unknown method) Line 2 Column 1 - debug message', mode: 'text' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Options');
      ie_close('h2');
      ie_open('p');
      itext('We can customize how the prefix message looks like:');
      ie_close('p');
      $templateAlias2({ code: '[\n    {\n        "patterns": [ "test" ],\n        "level": "Debug",\n        "appenders": [\n            {\n                "name": "Log.DefaultAppender",\n                "options": {\n                    "prefixPattern": "%t - %m - %l - %c - "\n                }\n            }\n        ]\n    }\n]', mode: 'JSON' }, null, opt_ijData);
      ie_open('p');
      itext('And debug like this:');
      ie_close('p');
      $templateAlias2({ code: 'logger.debug(\'message\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('The output will be like \'CurrentClassName - CurrentMethodName - CurrentLineNumber - CurrentColumnNumber - message\'.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param373 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'MlXmu.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var MlXmu = function (_Component) {
  _inherits(MlXmu, _Component);

  function MlXmu() {
    _classCallCheck(this, MlXmu);

    return _possibleConstructorReturn(this, (MlXmu.__proto__ || Object.getPrototypeOf(MlXmu)).apply(this, arguments));
  }

  return MlXmu;
}(_metalComponent2.default);

_metalSoy2.default.register(MlXmu, templates);
exports.MlXmu = MlXmu;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[294]);