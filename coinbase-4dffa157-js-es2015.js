(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coinbase-4dffa157-js"],{

/***/ "./node_modules/bnc-onboard/dist/esm/coinbase-4dffa157.js":
/*!****************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/coinbase-4dffa157.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-9ad8443b.js */ "./node_modules/bnc-onboard/dist/esm/validation-9ad8443b.js");
/* harmony import */ var _content_1bb71708_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-1bb71708.js */ "./node_modules/bnc-onboard/dist/esm/content-1bb71708.js");



function coinbase() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var preferred = options.preferred;
  Object(_validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_0__["v"])({
    name: 'preferred',
    value: preferred,
    type: 'boolean',
    optional: true
  });
  return {
    name: 'Coinbase',
    iconSrc: 'https://cdn-images-1.medium.com/max/1200/1*7ywNS48PnonfsvvMu1tTsA.png',
    wallet: function wallet(helpers) {
      var getProviderName, createLegacyProviderInterface, provider;
      return regeneratorRuntime.async(function wallet$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              getProviderName = helpers.getProviderName, createLegacyProviderInterface = helpers.createLegacyProviderInterface;
              provider = window.web3 && window.web3.currentProvider;
              return _context.abrupt("return", {
                provider: provider,
                "interface": provider && getProviderName(provider) === 'Coinbase' ? createLegacyProviderInterface(provider) : null
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    link: 'https://go.cb-w.com/',
    installMessage: _content_1bb71708_js__WEBPACK_IMPORTED_MODULE_1__["m"],
    mobile: true,
    preferred: preferred
  };
}

/* harmony default export */ __webpack_exports__["default"] = (coinbase);

/***/ })

}]);
//# sourceMappingURL=coinbase-4dffa157-js-es2015.js.map