var pageComponent =
webpackJsonppageComponent([10],{

/***/ 172:
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

var _indexSoy = __webpack_require__(261);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pageIndex = function (_Component) {
  _inherits(pageIndex, _Component);

  function pageIndex() {
    _classCallCheck(this, pageIndex);

    return _possibleConstructorReturn(this, (pageIndex.__proto__ || Object.getPrototypeOf(pageIndex)).apply(this, arguments));
  }

  return pageIndex;
}(_metalComponent2.default);

;

_metalSoy2.default.register(pageIndex, _indexSoy2.default);

exports.default = pageIndex;

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.pageIndex = undefined;

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
   * @fileoverview Templates in namespace pageIndex.
   * @public
   */

  goog.module('pageIndex.incrementaldom');

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

  var $templateAlias2 = _metalSoy2.default.getTemplate('Footer.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('main.incrementaldom', 'render');

  /**
   * @param {{
   *    site: (?),
   *    year: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param234 = function param234() {
      $header(opt_data, null, opt_ijData);
      $why(null, null, opt_ijData);
      $features(null, null, opt_ijData);
      $how(null, null, opt_ijData);
      $highlights(null, null, opt_ijData);
      $templateAlias2(opt_data, null, opt_ijData);
    };
    $templateAlias1(soy.$$assignDefaults({ content: param234 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'pageIndex.render';
  }

  /**
   * @param {{
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $header(opt_data, opt_ignored, opt_ijData) {
    ie_open('header', null, null, 'class', 'header');
    ie_open('div', null, null, 'class', 'container');
    ie_open('h1', null, null, 'class', 'header-title');
    var dyn22 = opt_data.site.title;
    if (typeof dyn22 == 'function') dyn22();else if (dyn22 != null) itext(dyn22);
    ie_close('h1');
    ie_open('h2', null, null, 'class', 'header-subtitle');
    var dyn23 = opt_data.site.index.description;
    if (typeof dyn23 == 'function') dyn23();else if (dyn23 != null) itext(dyn23);
    ie_close('h2');
    ie_open('div', null, null, 'class', 'btn-group');
    ie_open('a', null, null, 'href', '/log-apex/tutorials/getting_started/step_1.html', 'class', 'btn btn-accent btn-sm');
    itext('Get Started');
    ie_close('a');
    ie_open('a', null, null, 'href', 'https://github.com/Click-to-Cloud/Log.apex/', 'class', 'btn btn-success btn-sm');
    itext('GitHub');
    ie_close('a');
    ie_open('a', null, null, 'href', '/', 'onclick', 'location.assign(\'/\')', 'class', 'btn btn-default btn-sm');
    itext('Not Interested');
    ie_close('a');
    ie_close('div');
    ie_close('div');
    ie_close('header');
  }
  exports.header = $header;
  if (goog.DEBUG) {
    $header.soyTemplateName = 'pageIndex.header';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $why(opt_data, opt_ignored, opt_ijData) {
    ie_open('article', null, null, 'class', 'about');
    ie_open('div', null, null, 'class', 'container');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-md-12 col-md-offset-2');
    ie_open('h3', null, null, 'class', 'about-title');
    itext('Why Log.apex?');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'about-description');
    itext('Log.apex gives you fine control over logging behaviors. You can switch on/off specific logging, apply sync/async logging and even provide your custom logging implementation.');
    ie_close('p');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_close('article');
  }
  exports.why = $why;
  if (goog.DEBUG) {
    $why.soyTemplateName = 'pageIndex.why';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $features(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'features');
    ie_open('div', null, null, 'class', 'container');
    ie_open('div', null, null, 'class', 'row');
    ie_open('section', null, null, 'class', 'feature col-md-4 col-md-offset-2');
    ie_open('h3', null, null, 'class', 'feature-title');
    itext('Easy to Use');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'feature-description');
    itext('Log.apex is easy to use and configure.');
    ie_close('p');
    ie_close('section');
    ie_open('section', null, null, 'class', 'feature col-md-4');
    ie_open('h3', null, null, 'class', 'feature-title');
    itext('Async Logging');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'feature-description');
    itext('Log.apex supports async logging to avoid performance penalty.');
    ie_close('p');
    ie_close('section');
    ie_open('section', null, null, 'class', 'feature col-md-4');
    ie_open('h3', null, null, 'class', 'feature-title');
    itext('Customization');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'feature-description');
    itext('Log.apex allows easy customization and extension.');
    ie_close('p');
    ie_close('section');
    ie_close('div');
    ie_close('div');
    ie_close('div');
  }
  exports.features = $features;
  if (goog.DEBUG) {
    $features.soyTemplateName = 'pageIndex.features';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $how(opt_data, opt_ignored, opt_ijData) {
    ie_open('article', null, null, 'class', 'about');
    ie_open('div', null, null, 'class', 'container');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-md-12 col-md-offset-2');
    ie_open('h3', null, null, 'class', 'about-title');
    itext('Simple and Easy');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'about-description');
    itext('It takes only a few lines to use Log.apex.');
    ie_close('p');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_close('article');
  }
  exports.how = $how;
  if (goog.DEBUG) {
    $how.soyTemplateName = 'pageIndex.how';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $highlights(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'highlights');
    ie_open('div', null, null, 'class', 'container');
    ie_open('section', null, null, 'class', 'highlight row');
    ie_open('div', null, null, 'class', 'col-md-6 col-md-offset-2');
    ie_open('h4', null, null, 'class', 'highlight-title');
    itext('Simple API');
    ie_close('h4');
    ie_open('p', null, null, 'class', 'highlight-description');
    itext('Log.apex offers simple API to use.');
    ie_close('p');
    ie_close('div');
    ie_open('div', null, null, 'class', 'col-md-5 col-md-offset-1');
    ie_open('img', null, null, 'class', 'highlight-image', 'src', '/log-apex/images/highlight_1.png', 'alt', 'Simple API', 'height', '200');
    ie_close('img');
    ie_close('div');
    ie_close('section');
    ie_open('section', null, null, 'class', 'highlight row');
    ie_open('div', null, null, 'class', 'col-md-6 col-md-push-9');
    ie_open('h4', null, null, 'class', 'highlight-title');
    itext('Configuration');
    ie_close('h4');
    ie_open('p', null, null, 'class', 'highlight-description');
    itext('Log.apex has fine control over loggers.');
    ie_close('p');
    ie_close('div');
    ie_open('div', null, null, 'class', 'col-md-5 col-md-offset-2 col-md-pull-6');
    ie_open('img', null, null, 'class', 'highlight-image', 'src', '/log-apex/images/highlight_2.png', 'alt', 'Configuration', 'height', '200');
    ie_close('img');
    ie_close('div');
    ie_close('section');
    ie_open('section', null, null, 'class', 'highlight row');
    ie_open('div', null, null, 'class', 'col-md-6 col-md-offset-2');
    ie_open('h4', null, null, 'class', 'highlight-title');
    itext('Customization');
    ie_close('h4');
    ie_open('p', null, null, 'class', 'highlight-description');
    itext('Log.apex allows you to create custom logging implementation.');
    ie_close('p');
    ie_close('div');
    ie_open('div', null, null, 'class', 'col-md-5 col-md-offset-1');
    ie_open('img', null, null, 'class', 'highlight-image', 'src', '/log-apex/images/highlight_3.png', 'alt', 'Customization', 'height', '200');
    ie_close('img');
    ie_close('div');
    ie_close('section');
    ie_close('div');
    ie_close('div');
  }
  exports.highlights = $highlights;
  if (goog.DEBUG) {
    $highlights.soyTemplateName = 'pageIndex.highlights';
  }

  exports.render.params = ["site"];
  exports.render.types = { "site": "?" };
  exports.header.params = ["site"];
  exports.header.types = { "site": "?" };
  exports.why.params = [];
  exports.why.types = {};
  exports.features.params = [];
  exports.features.types = {};
  exports.how.params = [];
  exports.how.types = {};
  exports.highlights.params = [];
  exports.highlights.types = {};
  exports.templates = templates = exports;
  return exports;
});

var pageIndex = function (_Component) {
  _inherits(pageIndex, _Component);

  function pageIndex() {
    _classCallCheck(this, pageIndex);

    return _possibleConstructorReturn(this, (pageIndex.__proto__ || Object.getPrototypeOf(pageIndex)).apply(this, arguments));
  }

  return pageIndex;
}(_metalComponent2.default);

_metalSoy2.default.register(pageIndex, templates);
exports.pageIndex = pageIndex;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[172]);