(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fortmatic-1b00cae4-js"],{

/***/ "./node_modules/bnc-onboard/dist/esm/fortmatic-1b00cae4.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/fortmatic-1b00cae4.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_e6e64de4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities-e6e64de4.js */ "./node_modules/bnc-onboard/dist/esm/utilities-e6e64de4.js");
/* harmony import */ var _validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation-9ad8443b.js */ "./node_modules/bnc-onboard/dist/esm/validation-9ad8443b.js");




var fortmaticIcon = "\n  <svg \n    height=\"40\" \n    viewBox=\"0 0 40 40\" \n    width=\"40\" \n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <path d=\"m2744.99995 1155h9.99997 10.00008v9.98139h-10.00008-9.99997-9.99998v9.9814.64001 9.28323.05815 9.9234h-9.99997v-9.9234-.05815-9.28323-.64001-9.9814-9.98139h9.99997zm9.99961 29.88552h-9.94167v-9.92324h19.93595v10.27235c0 2.55359-1.01622 5.00299-2.82437 6.80909-1.80867 1.8061-4.26182 2.82181-6.82018 2.82335h-.34973z\" \n      fill=\"#617bff\" \n      fill-rule=\"evenodd\" \n      transform=\"translate(-2725 -1155)\"/>\n  </svg>\n";

function fortmatic(options) {
  Object(_validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_3__["v"])({
    name: 'Fortmatic options',
    value: options,
    type: 'object'
  });
  var apiKey = options.apiKey,
      networkId = options.networkId,
      preferred = options.preferred;
  Object(_validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_3__["v"])({
    name: 'apiKey',
    value: apiKey,
    type: 'string'
  });
  Object(_validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_3__["v"])({
    name: 'networkId',
    value: networkId,
    type: 'number'
  });
  Object(_validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_3__["v"])({
    name: 'preferred',
    value: preferred,
    type: 'boolean',
    optional: true
  });
  var instance;
  var provider;
  return {
    name: 'Fortmatic',
    svg: fortmaticIcon,
    wallet: function wallet(helpers) {
      var _ref, Fortmatic, BigNumber;

      return regeneratorRuntime.async(function wallet$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (instance) {
                _context.next = 7;
                break;
              }

              _context.next = 3;
              return regeneratorRuntime.awrap(__webpack_require__.e(/*! import() | fortmatic */ "fortmatic").then(__webpack_require__.t.bind(null, /*! fortmatic */ "./node_modules/fortmatic/lib/fortmatic.js", 7)));

            case 3:
              _ref = _context.sent;
              Fortmatic = _ref["default"];
              instance = new Fortmatic(apiKey, networkId === 1 ? undefined : Object(_utilities_e6e64de4_js__WEBPACK_IMPORTED_MODULE_2__["n"])(networkId));
              provider = instance.getProvider();

            case 7:
              BigNumber = helpers.BigNumber;
              return _context.abrupt("return", {
                provider: provider,
                instance: instance,
                "interface": {
                  name: 'Fortmatic',
                  connect: instance.user.login,
                  address: {
                    get: function get() {
                      return Promise.resolve(provider.account);
                    }
                  },
                  network: {
                    get: function get() {
                      return Promise.resolve(networkId);
                    }
                  },
                  balance: {
                    get: function get() {
                      return provider.account && instance.user.getBalances().then(function (res) {
                        return res[0] ? BigNumber(res[0].crypto_amount).times(BigNumber('1000000000000000000')).toString(10) : null;
                      });
                    }
                  }
                }
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    desktop: true,
    mobile: true,
    preferred: preferred
  };
}

/* harmony default export */ __webpack_exports__["default"] = (fortmatic);

/***/ })

}]);
//# sourceMappingURL=fortmatic-1b00cae4-js-es2015.js.map