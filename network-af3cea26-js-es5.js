(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["network-af3cea26-js"], {
        /***/ "./node_modules/bnc-onboard/dist/esm/network-af3cea26.js": 
        /*!***************************************************************!*\
          !*** ./node_modules/bnc-onboard/dist/esm/network-af3cea26.js ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
            /* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
            /* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _utilities_e6e64de4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities-e6e64de4.js */ "./node_modules/bnc-onboard/dist/esm/utilities-e6e64de4.js");
            /* harmony import */ var _validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation-9ad8443b.js */ "./node_modules/bnc-onboard/dist/esm/validation-9ad8443b.js");
            function network(options) {
                Object(_validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_3__["v"])({
                    name: 'network options',
                    value: options,
                    type: 'object'
                });
                var networkId = options.networkId;
                Object(_validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_3__["v"])({
                    name: 'networkId',
                    value: networkId,
                    type: 'number'
                });
                return function (stateAndHelpers) {
                    var network = stateAndHelpers.network, walletSelect = stateAndHelpers.walletSelect, exit = stateAndHelpers.exit;
                    if (network != networkId) {
                        return {
                            heading: 'You Must Change Networks',
                            description: "We've detected that you need to switch your wallet's network from <b>".concat(Object(_utilities_e6e64de4_js__WEBPACK_IMPORTED_MODULE_2__["n"])(network), "</b> to <b>").concat(Object(_utilities_e6e64de4_js__WEBPACK_IMPORTED_MODULE_2__["n"])(networkId), " network</b> for this Dapp. <br><br> <i style=\"font-size: inherit; font-family: inherit;\">*Some wallets may not support changing networks. If you can not change networks in your wallet you may consider switching to a different wallet.</i>"),
                            eventCode: 'networkFail',
                            button: {
                                onclick: function onclick() {
                                    exit();
                                    walletSelect();
                                },
                                text: 'Switch Wallet'
                            },
                            icon: "\n        <svg height=\"18\" viewBox=\"0 0 18 18\" width=\"18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m13.375 28c-1.86075 0-3.375-1.51425-3.375-3.375s1.51425-3.375 3.375-3.375 3.375 1.51425 3.375 3.375-1.51425 3.375-3.375 3.375zm0-4.5c-.619875 0-1.125.504-1.125 1.125s.505125 1.125 1.125 1.125 1.125-.504 1.125-1.125-.505125-1.125-1.125-1.125zm0-6.75c-1.86075 0-3.375-1.51425-3.375-3.375s1.51425-3.375 3.375-3.375 3.375 1.51425 3.375 3.375-1.51425 3.375-3.375 3.375zm0-4.5c-.619875 0-1.125.505125-1.125 1.125s.505125 1.125 1.125 1.125 1.125-.505125 1.125-1.125-.505125-1.125-1.125-1.125zm11.25 4.5c-1.86075 0-3.375-1.51425-3.375-3.375s1.51425-3.375 3.375-3.375 3.375 1.51425 3.375 3.375-1.51425 3.375-3.375 3.375zm0-4.5c-.621 0-1.125.505125-1.125 1.125s.504 1.125 1.125 1.125 1.125-.505125 1.125-1.125-.504-1.125-1.125-1.125zm-11.25 10.117125h-.014625c-.615375-.007875-1.110375-.50175-1.110375-1.117125 0-1.35675.898875-3.375 3.375-3.375h6.75c.50625-.0135 1.125-.219375 1.125-1.125v-1.125c0-.621.502875-1.125 1.125-1.125s1.125.504 1.125 1.125v1.125c0 2.476125-2.01825 3.375-3.375 3.375h-6.75c-.905625 0-1.1115.61875-1.125 1.1385-.01575.610875-.51525 1.103625-1.125 1.103625zm0 1.132875c-.621 0-1.125-.502875-1.125-1.125v-6.75c0-.621.504-1.125 1.125-1.125s1.125.504 1.125 1.125v6.75c0 .622125-.504 1.125-1.125 1.125z\" fill=\"currentColor\" transform=\"translate(-10 -10)\"/></svg>\n        "
                        };
                    }
                };
            }
            /* harmony default export */ __webpack_exports__["default"] = (network);
            /***/ 
        })
    }]);
//# sourceMappingURL=network-af3cea26-js-es2015.js.map
//# sourceMappingURL=network-af3cea26-js-es5.js.map
//# sourceMappingURL=network-af3cea26-js-es5.js.map