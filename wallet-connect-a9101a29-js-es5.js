(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-connect-a9101a29-js"], {
        /***/ "./node_modules/bnc-onboard/dist/esm/wallet-connect-a9101a29.js": 
        /*!**********************************************************************!*\
          !*** ./node_modules/bnc-onboard/dist/esm/wallet-connect-a9101a29.js ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-9ad8443b.js */ "./node_modules/bnc-onboard/dist/esm/validation-9ad8443b.js");
            var walletConnectIcon = "\n  <svg \n    height=\"25\" \n    viewBox=\"0 0 40 25\" \n    width=\"40\" \n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n  <path d=\"m8.19180572 4.83416816c6.52149658-6.38508884 17.09493158-6.38508884 23.61642788 0l.7848727.76845565c.3260748.31925442.3260748.83686816 0 1.15612272l-2.6848927 2.62873374c-.1630375.15962734-.4273733.15962734-.5904108 0l-1.0800779-1.05748639c-4.5495589-4.45439756-11.9258514-4.45439756-16.4754105 0l-1.1566741 1.13248068c-.1630376.15962721-.4273735.15962721-.5904108 0l-2.68489263-2.62873375c-.32607483-.31925456-.32607483-.83686829 0-1.15612272zm29.16903948 5.43649934 2.3895596 2.3395862c.3260732.319253.3260751.8368636.0000041 1.1561187l-10.7746894 10.5494845c-.3260726.3192568-.8547443.3192604-1.1808214.0000083-.0000013-.0000013-.0000029-.0000029-.0000042-.0000043l-7.6472191-7.4872762c-.0815187-.0798136-.2136867-.0798136-.2952053 0-.0000006.0000005-.000001.000001-.0000015.0000014l-7.6470562 7.4872708c-.3260715.3192576-.8547434.319263-1.1808215.0000116-.0000019-.0000018-.0000039-.0000037-.0000059-.0000058l-10.7749893-10.5496247c-.32607469-.3192544-.32607469-.8368682 0-1.1561226l2.38956395-2.3395823c.3260747-.31925446.85474652-.31925446 1.18082136 0l7.64733029 7.4873809c.0815188.0798136.2136866.0798136.2952054 0 .0000012-.0000012.0000023-.0000023.0000035-.0000032l7.6469471-7.4873777c.3260673-.31926181.8547392-.31927378 1.1808214-.0000267.0000046.0000045.0000091.000009.0000135.0000135l7.6473203 7.4873909c.0815186.0798135.2136866.0798135.2952053 0l7.6471967-7.4872433c.3260748-.31925458.8547465-.31925458 1.1808213 0z\" \n        fill=\"#3b99fc\"/>\n  </svg>\n";
            function walletConnect(options) {
                Object(_validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_0__["v"])({
                    name: 'WalletConnect Options',
                    value: options,
                    type: 'object'
                });
                var infuraKey = options.infuraKey, preferred = options.preferred;
                Object(_validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_0__["v"])({
                    name: 'infuraKey',
                    value: infuraKey,
                    type: 'string'
                });
                Object(_validation_9ad8443b_js__WEBPACK_IMPORTED_MODULE_0__["v"])({
                    name: 'preferred',
                    value: preferred,
                    type: 'boolean',
                    optional: true
                });
                var provider;
                return {
                    name: 'WalletConnect',
                    svg: walletConnectIcon,
                    wallet: function wallet() {
                        var _ref, WalletConnectProvider, _provider;
                        return regeneratorRuntime.async(function wallet$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        _context.next = 2;
                                        return regeneratorRuntime.awrap(__webpack_require__.e(/*! import() | walletconnect-web3-provider */ "walletconnect-web3-provider").then(__webpack_require__.t.bind(null, /*! @walletconnect/web3-provider */ "./node_modules/@walletconnect/web3-provider/lib/index.js", 7)));
                                    case 2:
                                        _ref = _context.sent;
                                        WalletConnectProvider = _ref["default"];
                                        _provider = new WalletConnectProvider({
                                            infuraId: infuraKey
                                        });
                                        _provider.autoRefreshOnNetworkChange = false;
                                        return _context.abrupt("return", {
                                            provider: provider,
                                            "interface": {
                                                name: 'WalletConnect',
                                                connect: function connect() {
                                                    return new Promise(function (resolve, reject) {
                                                        provider.enable().then(resolve)["catch"](function () {
                                                            return reject({
                                                                message: 'This dapp needs access to your account information.'
                                                            });
                                                        });
                                                    });
                                                },
                                                disconnect: function disconnect() {
                                                    return provider.close();
                                                },
                                                address: {
                                                    onChange: function onChange(func) {
                                                        provider.send('eth_accounts').then(function (accounts) {
                                                            return func(accounts[0]);
                                                        });
                                                        provider.on('accountsChanged', function (accounts) {
                                                            return func(accounts[0]);
                                                        });
                                                    }
                                                },
                                                network: {
                                                    onChange: function onChange(func) {
                                                        provider.send('eth_chainId').then(func);
                                                        provider.on('chainChanged', func);
                                                    }
                                                },
                                                balance: {
                                                    get: function get() {
                                                        return new Promise(function (resolve) {
                                                            if (!provider.wc._accounts[0]) {
                                                                resolve(null);
                                                                return;
                                                            }
                                                        });
                                                    }
                                                }
                                            }
                                        });
                                    case 7:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        });
                    },
                    desktop: true,
                    preferred: preferred
                };
            }
            /* harmony default export */ __webpack_exports__["default"] = (walletConnect);
            /***/ 
        })
    }]);
//# sourceMappingURL=wallet-connect-a9101a29-js-es2015.js.map
//# sourceMappingURL=wallet-connect-a9101a29-js-es5.js.map
//# sourceMappingURL=wallet-connect-a9101a29-js-es5.js.map