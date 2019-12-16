(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/bnc-onboard/dist/esm/balance-04736b1e.js":
/*!***************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/balance-04736b1e.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-9ad8443b.js */ "./node_modules/bnc-onboard/dist/esm/validation-9ad8443b.js");


function balance(options) {
  Object(_validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_0__["v"])({
    name: 'balance options',
    value: options,
    type: 'object'
  });
  var minimumBalance = options.minimumBalance;
  Object(_validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_0__["v"])({
    name: 'minimumBalance',
    value: minimumBalance,
    type: 'string'
  });
  return function (StateAndHelpers) {
    var balance = StateAndHelpers.balance,
        BigNumber = StateAndHelpers.BigNumber; // if balance is less than minimum

    if (BigNumber(balance).lt(BigNumber(minimumBalance || 0))) {
      return {
        heading: 'Get Some ETH',
        description: "Your current account has less than the necessary minimum balance of ".concat(BigNumber(minimumBalance).div(BigNumber('1000000000000000000')).toString(10), " ETH."),
        eventCode: 'nsfFail',
        icon: "\n        <svg height=\"18\" viewBox=\"0 0 429 695\" width=\"18\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"m0 394 213 126.228516 214-126.228516-214 301z\"/><path d=\"m0 353.962264 213.5-353.962264 213.5 353.962264-213.5 126.037736z\"/></g></svg>\n        "
      };
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (balance);

/***/ })

}]);