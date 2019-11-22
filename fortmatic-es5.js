(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fortmatic"], {
        /***/ "./node_modules/fortmatic/lib/fortmatic.js": 
        /*!*************************************************!*\
          !*** ./node_modules/fortmatic/lib/fortmatic.js ***!
          \*************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = function (e) { var t = {}; function r(n) { if (t[n])
                return t[n].exports; var o = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports; } return r.m = e, r.c = t, r.d = function (e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }); }, r.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, r.t = function (e, t) { if (1 & t && (e = r(e)), 8 & t)
                return e; if (4 & t && "object" == typeof e && e && e.__esModule)
                return e; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                for (var o in e)
                    r.d(n, o, function (t) { return e[t]; }.bind(null, o)); return n; }, r.n = function (e) { var t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return r.d(t, "a", t), t; }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, r.p = "", r(r.s = 3); }([function (e, t) { e.exports = function (e) { return e && e.__esModule ? e : { default: e }; }; }, function (e, t) { e.exports = function (e, t) { if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function"); }; }, function (e, t, r) {
                    "use strict";
                    function n() { return Math.floor(9e4 * Math.random()) + 1e4; }
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.sendAsyncWrapper = function (e, t) { var r = this; return new Promise(function (o, a) { r.sendAsync({ jsonrpc: "2.0", id: n(), method: e, params: t || [] }, function (e, t) { e ? a(e) : o(t.result); }); }); }, t.sendFortmaticAsyncWrapper = function (e) { var t = this; return new Promise(function (r, n) { t.getProvider().sendFortmaticAsync(e, function (e, t) { e ? n(e) : r(t ? t.result : {}); }); }); }, t.randomId = n, t.findExistingResponse = function (e, t) { for (var r = 0; r < e.length; r++)
                        if (e[r].id === t)
                            return e[r]; return null; };
                }, function (e, t, r) { e.exports = r(4); }, function (e, t, r) {
                    "use strict";
                    var n, o = r(0), a = o(r(1)), i = o(r(5)), s = r(2), c = "fm_composeSend", u = "fm_logout", l = "fm_get_balances", f = "fm_get_transactions", d = "fm_is_logged_in", h = "fm_accountSettings", p = "fm_deposit";
                    e.exports = function e(t, r, o) { var v = this; if ((0, a.default)(this, e), this.fortmaticClient = "https://x2.fortmatic.com", !t)
                        throw new Error("Please provide a Fortmatic API key that you acquired from the developer dashboard."); this.apiKey = t, this.options = o, this.ethNetwork = r, this.transactions = { send: function (e, t) { var r = new y(c, e); v.getProvider().sendFortmaticAsync(r, t); } }, this.getProvider = function () { return n || (n = new i.default(v.fortmaticClient, { API_KEY: t, ETH_NETWORK: r })), n; }, this.user = { login: function () { return v.getProvider().enable(); }, logout: function () { v.getProvider().account = null, v.getProvider().network = null; var e = new y(u); return s.sendFortmaticAsyncWrapper.call(v, e); }, getBalances: function () { var e = new y(l); return s.sendFortmaticAsyncWrapper.call(v, e); }, getTransactions: function () { var e = new y(f); return s.sendFortmaticAsyncWrapper.call(v, e); }, isLoggedIn: function () { var e = new y(d); return s.sendFortmaticAsyncWrapper.call(v, e); }, settings: function () { var e = new y(h); return s.sendFortmaticAsyncWrapper.call(v, e); }, deposit: function () { var e = new y(p); return s.sendFortmaticAsyncWrapper.call(v, e); } }; };
                    var y = function e(t, r) { if ((0, a.default)(this, e), !t || t !== c && t !== u && t !== l && t !== f && t !== d && t !== h && t !== p)
                        throw new Error("Invalid FmRequestPayload parameters. Please specify a valid method"); this.id = (0, s.randomId)(), this.method = t, this.params = r ? [{ to: r.to, value: r.amount }] : [{}]; };
                }, function (e, t, r) {
                    "use strict";
                    var n = r(0);
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
                    var o = n(r(6)), a = n(r(9)), i = n(r(1)), s = n(r(10)), c = n(r(11)), u = r(2), l = "FORTMATIC_HANDLE_REQUEST", f = "FORTMATIC_HANDLE_FORTMATIC_REQUEST", d = "FORTMATIC_HANDLE_RESPONSE", h = "FORTMATIC_OVERLAY_READY", p = "FORTMATIC_SHOW_OVERLAY", y = "FORTMATIC_HIDE_OVERLAY", v = "FORTMATIC_USER_DENIED", m = "FORTMATIC_USER_LOGOUT", g = "FORTMATIC_UNAUTHORIZED_API_KEY", w = function () { function e(t, r) { if ((0, i.default)(this, e), this.fortmaticClient = t, this.requests = {}, this.queue = [], this.account = null, this.network = null, this.isFortmatic = !0, this.overlayReady = !1, this.isLoggedIn = !1, !r.API_KEY)
                        throw new Error("Please provide a Fortmatic API key that you acquired from the developer dashboard."); this.options = { API_KEY: r.API_KEY, ETH_NETWORK: r.ETH_NETWORK, DOMAIN_ORIGIN: window.location ? window.location.origin : "" }, this.overlay = this.createOverlay(), this.listenMessage(); } return (0, s.default)(e, [{ key: "createOverlay", value: function () { var e = this; return new Promise(function (t, r) { var n = function () { if (0 === document.getElementsByClassName("fortmatic-iframe").length) {
                                var r = document.createElement("style");
                                r.innerHTML = c.default.css, r.type = "text/css", document.head.appendChild(r);
                                var n = document.createElement("iframe");
                                n.className = "fortmatic-iframe", n.src = "".concat(e.fortmaticClient, "/send?params=").concat(btoa(JSON.stringify(e.options))), document.body.appendChild(n);
                                var o = document.createElement("img");
                                o.src = "https://static.fortmatic.com/assets/trans.gif", document.body.appendChild(o), t({ iframe: n });
                            }
                            else
                                console.error("Fortmatic: Duplicate instances found."); }; ["loaded", "interactive", "complete"].indexOf(document.readyState) > -1 ? n() : window.addEventListener("load", n.bind(e), !1); }); } }, { key: "showOverlay", value: function () { var e = (0, a.default)(o.default.mark(function e() { return o.default.wrap(function (e) { for (;;)
                                switch (e.prev = e.next) {
                                    case 0: return e.next = 2, this.overlay;
                                    case 2: e.sent.iframe.style.display = "block";
                                    case 4:
                                    case "end": return e.stop();
                                } }, e, this); })); return function () { return e.apply(this, arguments); }; }() }, { key: "hideOverlay", value: function () { var e = (0, a.default)(o.default.mark(function e() { return o.default.wrap(function (e) { for (;;)
                                switch (e.prev = e.next) {
                                    case 0: return e.next = 2, this.overlay;
                                    case 2: e.sent.iframe.style.display = "none";
                                    case 4:
                                    case "end": return e.stop();
                                } }, e, this); })); return function () { return e.apply(this, arguments); }; }() }, { key: "sendAsync", value: function (e, t) { e.length > 0 ? this.enqueue({ payload: { id: (0, u.randomId)(), batch: e.map(function (e) { return e.id = (0, u.randomId)(), e; }), method: "eth_batchRequest" }, cb: t }) : this.enqueue({ payload: e, cb: t }); } }, { key: "sendFortmaticAsync", value: function (e, t) { this.enqueue({ payload: e, cb: t, isNative: !0 }); } }, { key: "send", value: function (e, t) { if ("string" == typeof e)
                                return u.sendAsyncWrapper.call(this, e, t); if (!t) {
                                console.warn("Non-async web3 methods will be deprecated in web3 > 1.0, and are not supported by the Fortmatic provider. An async method to be used instead."), this.sendAsync(e, t || function () { });
                                var r = {};
                                switch (e.method) {
                                    case "eth_accounts":
                                        r = this.account ? [this.account] : [];
                                        break;
                                    case "eth_coinbase":
                                        r = this.account;
                                        break;
                                    case "net_version":
                                        r = this.network || (this.options.API_KEY.startsWith("pk_live") ? 1 : 4);
                                        break;
                                    case "eth_uninstallFilter":
                                        r = !0;
                                        break;
                                    default: r = {};
                                }
                                return { id: e.id, jsonrpc: e.jsonrpc, result: r };
                            } this.sendAsync(e, t); } }, { key: "enqueue", value: function (e) { this.queue.push(e), this.overlayReady && this.dequeue(); } }, { key: "dequeue", value: function () { var e = (0, a.default)(o.default.mark(function e() { var t, r, n, a = this; return o.default.wrap(function (e) { for (;;)
                                switch (e.prev = e.next) {
                                    case 0:
                                        if (0 !== this.queue.length) {
                                            e.next = 2;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (!(t = this.queue.shift())) {
                                            e.next = 11;
                                            break;
                                        }
                                        return r = t.payload, n = t.cb, r.id = (0, u.randomId)(), e.next = 9, this.postMessage(t.isNative ? f : l, t.payload);
                                    case 9: r.batch && r.batch.length > 0 ? (r.batch.forEach(function (e) { a.requests[e.id] = { parentId: r.id, payload: e, cb: function (e, t) { var n = a.requests[r.id].batchResponse; if (e && e.response && !(0, u.findExistingResponse)(n, e.response.id))
                                            throw n.push({ jsonrpc: "2.0", id: e.response.id, error: { code: e.response.code, message: e.response.message } }), a.requests[r.id].cb(null, n), e.response; if (t && t.result && !(0, u.findExistingResponse)(n, t.id))
                                            return n.push(t); throw new Error("Fortmatic: unexpected callback behavior"); } }; }), this.requests[r.id] = { payload: r, cb: n, batchResponse: [] }) : this.requests[r.id] = { payload: r, cb: n }, this.dequeue();
                                    case 11:
                                    case "end": return e.stop();
                                } }, e, this); })); return function () { return e.apply(this, arguments); }; }() }, { key: "postMessage", value: function () { var e = (0, a.default)(o.default.mark(function e(t, r) { var n; return o.default.wrap(function (e) { for (;;)
                                switch (e.prev = e.next) {
                                    case 0: return e.next = 2, this.overlay;
                                    case 2: (n = e.sent).iframe.contentWindow && n.iframe.contentWindow.postMessage({ msgType: t, payload: r }, "*");
                                    case 4:
                                    case "end": return e.stop();
                                } }, e, this); })); return function (t, r) { return e.apply(this, arguments); }; }() }, { key: "enable", value: function () { return u.sendAsyncWrapper.call(this, "eth_accounts"); } }, { key: "listenMessage", value: function () { var e = this; window.addEventListener("message", function (t) { if (t.origin === e.fortmaticClient) {
                                var r = t.data.response ? t.data.response.id : null;
                                switch (t.data.msgType) {
                                    case h:
                                        e.overlayReady = !0, e.dequeue();
                                        break;
                                    case d:
                                        try {
                                            e.requests[r].cb(null, t.data.response);
                                            var n = e.requests[r].parentId;
                                            n && e.requests[n].payload.batch.length === e.requests[n].batchResponse.length && e.requests[n].cb(null, e.requests[n].batchResponse), "eth_accounts" === e.requests[r].payload.method ? e.account = t.data.response.result[0] : "eth_coinbase" === e.requests[r].payload.method ? e.account = t.data.response.result : "net_version" === e.requests[r].payload.method && (e.network = t.data.response.result);
                                        }
                                        catch (e) { }
                                        e.isLoggedIn = !0, e.dequeue();
                                        break;
                                    case y:
                                        e.hideOverlay();
                                        break;
                                    case p:
                                        e.showOverlay();
                                        break;
                                    case m:
                                        e.account = null, e.network = null, e.isLoggedIn = !1;
                                        break;
                                    case g: throw e.overlayReady = !1, new Error("Given API key is not authorized to access the resource.");
                                    case v:
                                        if (r) {
                                            var o = t.data.response && t.data.response.message ? t.data.response.message : "Fortmatic: Modal was closed without executing action!", a = t.data.response && t.data.response.code ? t.data.response.code : 1;
                                            e.requests[r].cb({ message: o, code: a, response: t.data.response });
                                        }
                                        else
                                            e.queue.forEach(function (e) { return e.cb({ message: "Fortmatic: Modal was closed without executing action!", code: 1 }); });
                                        e.dequeue();
                                }
                            } }); } }]), e; }();
                    t.default = w;
                }, function (e, t, r) { e.exports = r(7); }, function (e, t, r) { var n = function () { return this || "object" == typeof self && self; }() || Function("return this")(), o = n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0, a = o && n.regeneratorRuntime; if (n.regeneratorRuntime = void 0, e.exports = r(8), o)
                    n.regeneratorRuntime = a;
                else
                    try {
                        delete n.regeneratorRuntime;
                    }
                    catch (e) {
                        n.regeneratorRuntime = void 0;
                    } }, function (e, t) { !function (t) {
                    "use strict";
                    var r, n = Object.prototype, o = n.hasOwnProperty, a = "function" == typeof Symbol ? Symbol : {}, i = a.iterator || "@@iterator", s = a.asyncIterator || "@@asyncIterator", c = a.toStringTag || "@@toStringTag", u = "object" == typeof e, l = t.regeneratorRuntime;
                    if (l)
                        u && (e.exports = l);
                    else {
                        (l = t.regeneratorRuntime = u ? e.exports : {}).wrap = b;
                        var f = "suspendedStart", d = "suspendedYield", h = "executing", p = "completed", y = {}, v = {};
                        v[i] = function () { return this; };
                        var m = Object.getPrototypeOf, g = m && m(m(I([])));
                        g && g !== n && o.call(g, i) && (v = g);
                        var w = O.prototype = E.prototype = Object.create(v);
                        x.prototype = w.constructor = O, O.constructor = x, O[c] = x.displayName = "GeneratorFunction", l.isGeneratorFunction = function (e) { var t = "function" == typeof e && e.constructor; return !!t && (t === x || "GeneratorFunction" === (t.displayName || t.name)); }, l.mark = function (e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, O) : (e.__proto__ = O, c in e || (e[c] = "GeneratorFunction")), e.prototype = Object.create(w), e; }, l.awrap = function (e) { return { __await: e }; }, A(k.prototype), k.prototype[s] = function () { return this; }, l.AsyncIterator = k, l.async = function (e, t, r, n) { var o = new k(b(e, t, r, n)); return l.isGeneratorFunction(t) ? o : o.next().then(function (e) { return e.done ? e.value : o.next(); }); }, A(w), w[c] = "Generator", w[i] = function () { return this; }, w.toString = function () { return "[object Generator]"; }, l.keys = function (e) { var t = []; for (var r in e)
                            t.push(r); return t.reverse(), function r() { for (; t.length;) {
                            var n = t.pop();
                            if (n in e)
                                return r.value = n, r.done = !1, r;
                        } return r.done = !0, r; }; }, l.values = I, P.prototype = { constructor: P, reset: function (e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(T), !e)
                                for (var t in this)
                                    "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = r); }, stop: function () { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type)
                                throw e.arg; return this.rval; }, dispatchException: function (e) { if (this.done)
                                throw e; var t = this; function n(n, o) { return s.type = "throw", s.arg = e, t.next = n, o && (t.method = "next", t.arg = r), !!o; } for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var i = this.tryEntries[a], s = i.completion;
                                if ("root" === i.tryLoc)
                                    return n("end");
                                if (i.tryLoc <= this.prev) {
                                    var c = o.call(i, "catchLoc"), u = o.call(i, "finallyLoc");
                                    if (c && u) {
                                        if (this.prev < i.catchLoc)
                                            return n(i.catchLoc, !0);
                                        if (this.prev < i.finallyLoc)
                                            return n(i.finallyLoc);
                                    }
                                    else if (c) {
                                        if (this.prev < i.catchLoc)
                                            return n(i.catchLoc, !0);
                                    }
                                    else {
                                        if (!u)
                                            throw new Error("try statement without catch or finally");
                                        if (this.prev < i.finallyLoc)
                                            return n(i.finallyLoc);
                                    }
                                }
                            } }, abrupt: function (e, t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var n = this.tryEntries[r];
                                if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                    var a = n;
                                    break;
                                }
                            } a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null); var i = a ? a.completion : {}; return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i); }, complete: function (e, t) { if ("throw" === e.type)
                                throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y; }, finish: function (e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.finallyLoc === e)
                                    return this.complete(r.completion, r.afterLoc), T(r), y;
                            } }, catch: function (e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.tryLoc === e) {
                                    var n = r.completion;
                                    if ("throw" === n.type) {
                                        var o = n.arg;
                                        T(r);
                                    }
                                    return o;
                                }
                            } throw new Error("illegal catch attempt"); }, delegateYield: function (e, t, n) { return this.delegate = { iterator: I(e), resultName: t, nextLoc: n }, "next" === this.method && (this.arg = r), y; } };
                    }
                    function b(e, t, r, n) { var o = t && t.prototype instanceof E ? t : E, a = Object.create(o.prototype), i = new P(n || []); return a._invoke = function (e, t, r) { var n = f; return function (o, a) { if (n === h)
                        throw new Error("Generator is already running"); if (n === p) {
                        if ("throw" === o)
                            throw a;
                        return F();
                    } for (r.method = o, r.arg = a;;) {
                        var i = r.delegate;
                        if (i) {
                            var s = R(i, r);
                            if (s) {
                                if (s === y)
                                    continue;
                                return s;
                            }
                        }
                        if ("next" === r.method)
                            r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (n === f)
                                throw n = p, r.arg;
                            r.dispatchException(r.arg);
                        }
                        else
                            "return" === r.method && r.abrupt("return", r.arg);
                        n = h;
                        var c = _(e, t, r);
                        if ("normal" === c.type) {
                            if (n = r.done ? p : d, c.arg === y)
                                continue;
                            return { value: c.arg, done: r.done };
                        }
                        "throw" === c.type && (n = p, r.method = "throw", r.arg = c.arg);
                    } }; }(e, r, i), a; }
                    function _(e, t, r) { try {
                        return { type: "normal", arg: e.call(t, r) };
                    }
                    catch (e) {
                        return { type: "throw", arg: e };
                    } }
                    function E() { }
                    function x() { }
                    function O() { }
                    function A(e) { ["next", "throw", "return"].forEach(function (t) { e[t] = function (e) { return this._invoke(t, e); }; }); }
                    function k(e) { var t; this._invoke = function (r, n) { function a() { return new Promise(function (t, a) { !function t(r, n, a, i) { var s = _(e[r], e, n); if ("throw" !== s.type) {
                        var c = s.arg, u = c.value;
                        return u && "object" == typeof u && o.call(u, "__await") ? Promise.resolve(u.__await).then(function (e) { t("next", e, a, i); }, function (e) { t("throw", e, a, i); }) : Promise.resolve(u).then(function (e) { c.value = e, a(c); }, function (e) { return t("throw", e, a, i); });
                    } i(s.arg); }(r, n, t, a); }); } return t = t ? t.then(a, a) : a(); }; }
                    function R(e, t) { var n = e.iterator[t.method]; if (n === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = r, R(e, t), "throw" === t.method))
                                return y;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
                        }
                        return y;
                    } var o = _(n, e.iterator, t.arg); if ("throw" === o.type)
                        return t.method = "throw", t.arg = o.arg, t.delegate = null, y; var a = o.arg; return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = r), t.delegate = null, y) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, y); }
                    function L(e) { var t = { tryLoc: e[0] }; 1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t); }
                    function T(e) { var t = e.completion || {}; t.type = "normal", delete t.arg, e.completion = t; }
                    function P(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(L, this), this.reset(!0); }
                    function I(e) { if (e) {
                        var t = e[i];
                        if (t)
                            return t.call(e);
                        if ("function" == typeof e.next)
                            return e;
                        if (!isNaN(e.length)) {
                            var n = -1, a = function t() { for (; ++n < e.length;)
                                if (o.call(e, n))
                                    return t.value = e[n], t.done = !1, t; return t.value = r, t.done = !0, t; };
                            return a.next = a;
                        }
                    } return { next: F }; }
                    function F() { return { value: r, done: !0 }; }
                }(function () { return this || "object" == typeof self && self; }() || Function("return this")()); }, function (e, t) { function r(e, t, r, n, o, a, i) { try {
                    var s = e[a](i), c = s.value;
                }
                catch (e) {
                    return void r(e);
                } s.done ? t(c) : Promise.resolve(c).then(n, o); } e.exports = function (e) { return function () { var t = this, n = arguments; return new Promise(function (o, a) { var i = e.apply(t, n); function s(e) { r(i, o, a, s, c, "next", e); } function c(e) { r(i, o, a, s, c, "throw", e); } s(void 0); }); }; }; }, function (e, t) { function r(e, t) { for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                } } e.exports = function (e, t, n) { return t && r(e.prototype, t), n && r(e, n), e; }; }, function (e, t, r) {
                    "use strict";
                    t.css = "\n  .fortmatic-iframe {\n    display: none;\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    border: none;\n    border-radius: 0;\n    z-index: 2147483647;\n  }\n";
                }]);
            /***/ 
        })
    }]);
//# sourceMappingURL=fortmatic-es2015.js.map
//# sourceMappingURL=fortmatic-es5.js.map
//# sourceMappingURL=fortmatic-es5.js.map