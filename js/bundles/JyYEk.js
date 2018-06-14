var pageComponent =
webpackJsonppageComponent([14],{

/***/ 304:
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

var _rulesSoy = __webpack_require__(305);

var _rulesSoy2 = _interopRequireDefault(_rulesSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JyYEk = function (_Component) {
  _inherits(JyYEk, _Component);

  function JyYEk() {
    _classCallCheck(this, JyYEk);

    return _possibleConstructorReturn(this, (JyYEk.__proto__ || Object.getPrototypeOf(JyYEk)).apply(this, arguments));
  }

  return JyYEk;
}(_metalComponent2.default);

;

_metalSoy2.default.register(JyYEk, _rulesSoy2.default);

exports.default = JyYEk;

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.JyYEk = undefined;

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

  // This file was automatically generated from rules.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace JyYEk.
   * @public
   */

  goog.module('JyYEk.incrementaldom');

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
    var param458 = function param458() {
      ie_open('h6');
      var dyn35 = opt_data.page.description;
      if (typeof dyn35 == 'function') dyn35();else if (dyn35 != null) itext(dyn35);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Configuration');
      ie_close('h2');
      ie_open('p');
      itext('A configuration file is a JSON file that contains an array of configuration rules.');
      ie_close('p');
      $templateAlias2({ code: '[\n    {\n        ...\n    },\n    {\n        ...\n    }\n]', mode: 'JSON' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Configuration Rule');
      ie_close('h2');
      ie_open('p');
      itext('A configuration rule specifies how the loggers should behave.');
      ie_close('p');
      $templateAlias2({ code: '{\n    "patterns": [ "test" ],\n    "level": "Debug",\n    "appenders": [\n        {\n            "name": "Log.DefaultAppender"\n        }\n    ]\n}', mode: 'JSON' }, null, opt_ijData);
      ie_open('p');
      itext('It has following fields.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Field');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('patterns');
      ie_close('td');
      ie_open('td');
      itext('An array of regular expressions to match the names of the loggers');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('level');
      ie_close('td');
      ie_open('td');
      itext('The starting level to enable logging');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('appenders');
      ie_close('td');
      ie_open('td');
      itext('An array of appender configurations');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Appender Configuration');
      ie_close('h2');
      ie_open('p');
      itext('An appender configuration is used to configure each appender, which outputs the logging information.');
      ie_close('p');
      $templateAlias2({ code: '{\n    "name": "Log.DefaultAppender",\n    "options": {\n        "prefixPattern": "..."\n    }\n}', mode: 'JSON' }, null, opt_ijData);
      ie_open('p');
      itext('It has following fields.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Field');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('name');
      ie_close('td');
      ie_open('td');
      itext('The class name of the appender');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('options');
      ie_close('td');
      ie_open('td');
      itext('The JSON object(map) to hold the option values');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param458 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'JyYEk.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var JyYEk = function (_Component) {
  _inherits(JyYEk, _Component);

  function JyYEk() {
    _classCallCheck(this, JyYEk);

    return _possibleConstructorReturn(this, (JyYEk.__proto__ || Object.getPrototypeOf(JyYEk)).apply(this, arguments));
  }

  return JyYEk;
}(_metalComponent2.default);

_metalSoy2.default.register(JyYEk, templates);
exports.JyYEk = JyYEk;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[304]);