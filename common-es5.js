(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
        /***/ "./node_modules/bnc-onboard/dist/esm/content-1bb71708.js": 
        /*!***************************************************************!*\
          !*** ./node_modules/bnc-onboard/dist/esm/content-1bb71708.js ***!
          \***************************************************************/
        /*! exports provided: e, m */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function () { return extensionInstallMessage; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function () { return mobileWalletInstallMessage; });
            var extensionInstallMessage = function extensionInstallMessage(helpers) {
                var currentWallet = helpers.currentWallet, selectedWallet = helpers.selectedWallet;
                if (currentWallet) {
                    return "\n    <p style=\"font-size: 0.889rem; font-family: Helvetica Neue; margin: 0.889rem 0;\">\n    We have detected that you already have\n    <b>".concat(currentWallet, "</b>\n    installed. If you would prefer to use\n    <b>").concat(selectedWallet, "</b>\n    instead, then click below to install.\n    </p>\n    <p style=\"font-size: 0.889rem; font-family: Helvetica Neue; margin: 0.889rem 0;\">\n    <b>Tip:</b>\n    If you already have ").concat(selectedWallet, " installed, check your\n    browser extension settings to make sure that you have it enabled\n    and that you have disabled any other browser extension wallets.\n    <span\n      class=\"bn-onboard-clickable\"\n      style=\"color: #4a90e2; font-size: 0.889rem; font-family: Helvetica Neue;\"\n      onclick=\"window.location.reload();\">\n      Then refresh the page.\n    </span>\n    </p>\n    ");
                }
                else {
                    return "\n    <p style=\"font-size: 0.889rem; font-family: Helvetica Neue; margin: 0.889rem 0;\">\n    You'll need to install <b>".concat(selectedWallet, "</b> to continue. Install\n    the extension and then\n    <span\n    class=\"bn-clickable\"\n      style=\"color: #4a90e2; font-size: 0.889rem; font-family: Helvetica Neue;\"\n      onclick={window.location.reload();}>\n      refresh the page.\n    </span>\n    </p>\n    ");
                }
            };
            var mobileWalletInstallMessage = function mobileWalletInstallMessage(helpers) {
                var selectedWallet = helpers.selectedWallet;
                return "\n  <p style=\"font-size: 0.889rem;\">\n    You'll need to install <b>".concat(selectedWallet, "</b> to continue. Click below to install and then load this Dapp with <b>").concat(selectedWallet, "</b>.\n  </p>\n  ");
            };
            /***/ 
        })
    }]);
//# sourceMappingURL=common-es2015.js.map
//# sourceMappingURL=common-es5.js.map
//# sourceMappingURL=common-es5.js.map