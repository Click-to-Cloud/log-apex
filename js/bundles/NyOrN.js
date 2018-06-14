var pageComponent =
webpackJsonppageComponent([3],{

/***/ 300:
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

var _step_6Soy = __webpack_require__(301);

var _step_6Soy2 = _interopRequireDefault(_step_6Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NyOrN = function (_Component) {
  _inherits(NyOrN, _Component);

  function NyOrN() {
    _classCallCheck(this, NyOrN);

    return _possibleConstructorReturn(this, (NyOrN.__proto__ || Object.getPrototypeOf(NyOrN)).apply(this, arguments));
  }

  return NyOrN;
}(_metalComponent2.default);

;

_metalSoy2.default.register(NyOrN, _step_6Soy2.default);

exports.default = NyOrN;

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.NyOrN = undefined;

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

  // This file was automatically generated from step_6.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace NyOrN.
   * @public
   */

  goog.module('NyOrN.incrementaldom');

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
    var param640 = function param640() {
      ie_open('h2');
      var dyn42 = opt_data.page.title;
      if (typeof dyn42 == 'function') dyn42();else if (dyn42 != null) itext(dyn42);
      ie_close('h2');
      ie_open('p');
      itext('You can create your own appenders. All appenders should implement the interface ');
      ie_open('code');
      itext('Log.Appender');
      ie_close('code');
      itext('. To make things simple, most of the time you can directly extend ');
      ie_open('code');
      itext('Log.DefaultAppender');
      ie_close('code');
      itext(' to create a custom appender.');
      ie_close('p');
      $templateAlias2({ code: 'public class CustomAppender extends Log.DefaultAppender {\n    public override void append(Log.Context ctx) {\n        String message = ctx.message;\n        String pattern = (String)this.options.get(\'pattern\');\n        // Custom code\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Then you can add it to the configuration file.');
      ie_close('p');
      $templateAlias2({ code: '[\n    {\n        "patterns": [ ".*" ],\n        "level": "Debug",\n        "appenders": [\n            {\n                "name": "CustomAppender",\n                "options": {\n                    "pattern": "YOUR PATTERN"\n                }\n            }\n        ]\n    }\n]', mode: 'JSON' }, null, opt_ijData);
      ie_open('p');
      itext('You can set options to your custom appender like this.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param640 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'NyOrN.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var NyOrN = function (_Component) {
  _inherits(NyOrN, _Component);

  function NyOrN() {
    _classCallCheck(this, NyOrN);

    return _possibleConstructorReturn(this, (NyOrN.__proto__ || Object.getPrototypeOf(NyOrN)).apply(this, arguments));
  }

  return NyOrN;
}(_metalComponent2.default);

_metalSoy2.default.register(NyOrN, templates);
exports.NyOrN = NyOrN;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[300]);