var pageComponent =
webpackJsonppageComponent([13],{

/***/ 286:
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

var _indexSoy = __webpack_require__(287);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var xTylE = function (_Component) {
  _inherits(xTylE, _Component);

  function xTylE() {
    _classCallCheck(this, xTylE);

    return _possibleConstructorReturn(this, (xTylE.__proto__ || Object.getPrototypeOf(xTylE)).apply(this, arguments));
  }

  return xTylE;
}(_metalComponent2.default);

;

_metalSoy2.default.register(xTylE, _indexSoy2.default);

exports.default = xTylE;

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.xTylE = undefined;

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

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace xTylE.
   * @public
   */

  goog.module('xTylE.incrementaldom');

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
    var param484 = function param484() {
      ie_open('h6');
      var dyn36 = opt_data.page.description;
      if (typeof dyn36 == 'function') dyn36();else if (dyn36 != null) itext(dyn36);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Loggers');
      ie_close('h2');
      ie_open('p');
      itext('Log.apex use logger objects to print logging information.');
      ie_close('p');
      $templateAlias2({ code: 'private static final Log logger = Log.getLogger(MyClass.class);\n\nlogger.debug(\'Debug message\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Logger Creation');
      ie_close('h2');
      ie_open('p');
      itext('We have two ways to create loggers.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Create By Class We can pass in a class to create a logger.');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'private static final Log logger = Log.getLogger(MyClass.class);', mode: 'javascript' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('Create By Name We can pass in a name to create a logger.');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'private static final Log logger = Log.getLogger(\'MyClass\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Methods are below:');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('Log getLogger(Type)');
      ie_close('td');
      ie_open('td');
      itext('Get the logger from the type');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Log getLogger(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the logger from the name');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Log Levels');
      ie_close('h2');
      ie_open('p');
      itext('We support these logging levels in Log.apex.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Level');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('None');
      ie_close('td');
      ie_open('td');
      itext('No log');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Error');
      ie_close('td');
      ie_open('td');
      itext('Error log');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Warn');
      ie_close('td');
      ie_open('td');
      itext('Warning log');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Info');
      ie_close('td');
      ie_open('td');
      itext('Info log');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Debug');
      ie_close('td');
      ie_open('td');
      itext('Debug log');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Trace');
      ie_close('td');
      ie_open('td');
      itext('Trace log');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Print Logs');
      ie_close('h2');
      ie_open('p');
      itext('We can print logs in the following ways:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Simple message We output a simple message using the logger.');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'logger.debug(\'Debug message\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('Parameterized message We show a parameterized message, with parameters passed in.');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'logger.debug(\'Debug {0}\', \'message\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Users should avoid concatenating strings in the logging method. Instead, use the parameterized messages, as the actual interpolation of the message is only triggered when the logging is enabled. So this will avoid unnecessary performance penalty.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Controlled logging We can even check if the logging is enabled before we do the logging.');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'if(logger.isDebugEnabled()) {\n    logger.debug(\'Debug {0}\', getComplexResult());\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('This will help avoid complicated computation for the parameter values if the logging is actually disabled.');
      ie_close('p');
      ie_open('p');
      itext('Available methods are below:');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('Boolean isTraceEnabled()');
      ie_close('td');
      ie_open('td');
      itext('Check if Trace is enabled');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void trace(String)');
      ie_close('td');
      ie_open('td');
      itext('Print the Trace log');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void trace(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Print the Trace log with one parameter');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void trace(String, Object, Object)');
      ie_close('td');
      ie_open('td');
      itext('Print the Trace log with two parameters');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void trace(String, Object, Object, Object)');
      ie_close('td');
      ie_open('td');
      itext('Print the Trace log with three parameters');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void trace(String, List<Object>)');
      ie_close('td');
      ie_open('td');
      itext('Print the Trace log with parameters');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Boolean isDebugEnabled()');
      ie_close('td');
      ie_open('td');
      itext('Check if Debug is enabled');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void debug(String)');
      ie_close('td');
      ie_open('td');
      itext('Print the Debug log');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void debug(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Print the Debug log with one parameter');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void debug(String, Object, Object)');
      ie_close('td');
      ie_open('td');
      itext('Print the Debug log with two parameters');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void debug(String, Object, Object, Object)');
      ie_close('td');
      ie_open('td');
      itext('Print the Debug log with three parameters');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void debug(String, List<Object>)');
      ie_close('td');
      ie_open('td');
      itext('Print the Debug log with parameters');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Boolean isInfoEnabled()');
      ie_close('td');
      ie_open('td');
      itext('Check if Info is enabled');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void info(String)');
      ie_close('td');
      ie_open('td');
      itext('Print the Info log');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void info(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Print the Info log with one parameter');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void info(String, Object, Object)');
      ie_close('td');
      ie_open('td');
      itext('Print the Info log with two parameters');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void info(String, Object, Object, Object)');
      ie_close('td');
      ie_open('td');
      itext('Print the Info log with three parameters');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void info(String, List<Object>)');
      ie_close('td');
      ie_open('td');
      itext('Print the Info log with parameters');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Boolean isWarnEnabled()');
      ie_close('td');
      ie_open('td');
      itext('Check if Warn is enabled');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void warn(String)');
      ie_close('td');
      ie_open('td');
      itext('Print the Warn log');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void warn(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Print the Warn log with one parameter');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void warn(String, Object, Object)');
      ie_close('td');
      ie_open('td');
      itext('Print the Warn log with two parameters');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void warn(String, Object, Object, Object)');
      ie_close('td');
      ie_open('td');
      itext('Print the Warn log with three parameters');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void warn(String, List<Object>)');
      ie_close('td');
      ie_open('td');
      itext('Print the Warn log with parameters');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Boolean isErrorEnabled()');
      ie_close('td');
      ie_open('td');
      itext('Check if Error is enabled');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void error(Exception)');
      ie_close('td');
      ie_open('td');
      itext('Print the Error log');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void error(String, Exception)');
      ie_close('td');
      ie_open('td');
      itext('Print the Error log');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void error(String, Object, Exception)');
      ie_close('td');
      ie_open('td');
      itext('Print the Error log with one parameter');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void error(String, Object, Object, Exception)');
      ie_close('td');
      ie_open('td');
      itext('Print the Error log with two parameters');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void error(String, Object, Object, Object, Exception)');
      ie_close('td');
      ie_open('td');
      itext('Print the Error log with three parameters');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void error(String, List<Object>, Exception)');
      ie_close('td');
      ie_open('td');
      itext('Print the Error log with parameters');
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
    $templateAlias1(soy.$$assignDefaults({ content: param484 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'xTylE.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var xTylE = function (_Component) {
  _inherits(xTylE, _Component);

  function xTylE() {
    _classCallCheck(this, xTylE);

    return _possibleConstructorReturn(this, (xTylE.__proto__ || Object.getPrototypeOf(xTylE)).apply(this, arguments));
  }

  return xTylE;
}(_metalComponent2.default);

_metalSoy2.default.register(xTylE, templates);
exports.xTylE = xTylE;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[286]);