var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portis-web3"], {
        /***/ "./node_modules/@portis/web3/umd/index.js": 
        /*!************************************************!*\
          !*** ./node_modules/@portis/web3/umd/index.js ***!
          \************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            !function (e, t) { true ? module.exports = t() : undefined; }(this, function () {
                return function (e) { var t = {}; function r(n) { if (t[n])
                    return t[n].exports; var i = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports; } return r.m = e, r.c = t, r.d = function (e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }); }, r.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, r.t = function (e, t) { if (1 & t && (e = r(e)), 8 & t)
                    return e; if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                    for (var i in e)
                        r.d(n, i, function (t) { return e[t]; }.bind(null, i)); return n; }, r.n = function (e) { var t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return r.d(t, "a", t), t; }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, r.p = "", r(r.s = 242); }([function (e, t) { "function" == typeof Object.create ? e.exports = function (e, t) { e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }); } : e.exports = function (e, t) { e.super_ = t; var r = function () { }; r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e; }; }, function (e, t, r) { var n = r(7), i = n.Buffer; function o(e, t) { for (var r in e)
                        t[r] = e[r]; } function a(e, t, r) { return i(e, t, r); } i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (o(n, t), t.Buffer = a), o(i, a), a.from = function (e, t, r) { if ("number" == typeof e)
                        throw new TypeError("Argument must not be a number"); return i(e, t, r); }, a.alloc = function (e, t, r) { if ("number" != typeof e)
                        throw new TypeError("Argument must be a number"); var n = i(e); return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n; }, a.allocUnsafe = function (e) { if ("number" != typeof e)
                        throw new TypeError("Argument must be a number"); return i(e); }, a.allocUnsafeSlow = function (e) { if ("number" != typeof e)
                        throw new TypeError("Argument must be a number"); return n.SlowBuffer(e); }; }, function (e, t, r) { (function (e) { !function (e, t) {
                        "use strict";
                        function n(e, t) { if (!e)
                            throw new Error(t || "Assertion failed"); }
                        function i(e, t) { e.super_ = t; var r = function () { }; r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e; }
                        function o(e, t, r) { if (o.isBN(e))
                            return e; this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (r = t, t = 10), this._init(e || 0, t || 10, r || "be")); }
                        var a;
                        "object" == typeof e ? e.exports = o : t.BN = o, o.BN = o, o.wordSize = 26;
                        try {
                            a = r(130).Buffer;
                        }
                        catch (e) { }
                        function s(e, t, r) { for (var n = 0, i = Math.min(e.length, r), o = t; o < i; o++) {
                            var a = e.charCodeAt(o) - 48;
                            n <<= 4, n |= a >= 49 && a <= 54 ? a - 49 + 10 : a >= 17 && a <= 22 ? a - 17 + 10 : 15 & a;
                        } return n; }
                        function f(e, t, r, n) { for (var i = 0, o = Math.min(e.length, r), a = t; a < o; a++) {
                            var s = e.charCodeAt(a) - 48;
                            i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s;
                        } return i; }
                        o.isBN = function (e) { return e instanceof o || null !== e && "object" == typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words); }, o.max = function (e, t) { return e.cmp(t) > 0 ? e : t; }, o.min = function (e, t) { return e.cmp(t) < 0 ? e : t; }, o.prototype._init = function (e, t, r) { if ("number" == typeof e)
                            return this._initNumber(e, t, r); if ("object" == typeof e)
                            return this._initArray(e, t, r); "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36); var i = 0; "-" === (e = e.toString().replace(/\s+/g, ""))[0] && i++, 16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i), "-" === e[0] && (this.negative = 1), this.strip(), "le" === r && this._initArray(this.toArray(), t, r); }, o.prototype._initNumber = function (e, t, r) { e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (n(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r); }, o.prototype._initArray = function (e, t, r) { if (n("number" == typeof e.length), e.length <= 0)
                            return this.words = [0], this.length = 1, this; this.length = Math.ceil(e.length / 3), this.words = new Array(this.length); for (var i = 0; i < this.length; i++)
                            this.words[i] = 0; var o, a, s = 0; if ("be" === r)
                            for (i = e.length - 1, o = 0; i >= 0; i -= 3)
                                a = e[i] | e[i - 1] << 8 | e[i - 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                        else if ("le" === r)
                            for (i = 0, o = 0; i < e.length; i += 3)
                                a = e[i] | e[i + 1] << 8 | e[i + 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++); return this.strip(); }, o.prototype._parseHex = function (e, t) { this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length); for (var r = 0; r < this.length; r++)
                            this.words[r] = 0; var n, i, o = 0; for (r = e.length - 6, n = 0; r >= t; r -= 6)
                            i = s(e, r, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, n++); r + 6 !== t && (i = s(e, t, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303), this.strip(); }, o.prototype._parseBase = function (e, t, r) { this.words = [0], this.length = 1; for (var n = 0, i = 1; i <= 67108863; i *= t)
                            n++; n--, i = i / t | 0; for (var o = e.length - r, a = o % n, s = Math.min(o, o - a) + r, c = 0, u = r; u < s; u += n)
                            c = f(e, u, u + n, t), this.imuln(i), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c); if (0 !== a) {
                            var d = 1;
                            for (c = f(e, u, e.length, t), u = 0; u < a; u++)
                                d *= t;
                            this.imuln(d), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                        } }, o.prototype.copy = function (e) { e.words = new Array(this.length); for (var t = 0; t < this.length; t++)
                            e.words[t] = this.words[t]; e.length = this.length, e.negative = this.negative, e.red = this.red; }, o.prototype.clone = function () { var e = new o(null); return this.copy(e), e; }, o.prototype._expand = function (e) { for (; this.length < e;)
                            this.words[this.length++] = 0; return this; }, o.prototype.strip = function () { for (; this.length > 1 && 0 === this.words[this.length - 1];)
                            this.length--; return this._normSign(); }, o.prototype._normSign = function () { return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this; }, o.prototype.inspect = function () { return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"; };
                        var c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], u = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], d = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                        function h(e, t, r) { r.negative = t.negative ^ e.negative; var n = e.length + t.length | 0; r.length = n, n = n - 1 | 0; var i = 0 | e.words[0], o = 0 | t.words[0], a = i * o, s = 67108863 & a, f = a / 67108864 | 0; r.words[0] = s; for (var c = 1; c < n; c++) {
                            for (var u = f >>> 26, d = 67108863 & f, h = Math.min(c, t.length - 1), l = Math.max(0, c - e.length + 1); l <= h; l++) {
                                var p = c - l | 0;
                                u += (a = (i = 0 | e.words[p]) * (o = 0 | t.words[l]) + d) / 67108864 | 0, d = 67108863 & a;
                            }
                            r.words[c] = 0 | d, f = 0 | u;
                        } return 0 !== f ? r.words[c] = 0 | f : r.length--, r.strip(); }
                        o.prototype.toString = function (e, t) { var r; if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
                            r = "";
                            for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                                var s = this.words[a], f = (16777215 & (s << i | o)).toString(16);
                                r = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? c[6 - f.length] + f + r : f + r, (i += 2) >= 26 && (i -= 26, a--);
                            }
                            for (0 !== o && (r = o.toString(16) + r); r.length % t != 0;)
                                r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r;
                        } if (e === (0 | e) && e >= 2 && e <= 36) {
                            var h = u[e], l = d[e];
                            r = "";
                            var p = this.clone();
                            for (p.negative = 0; !p.isZero();) {
                                var b = p.modn(l).toString(e);
                                r = (p = p.idivn(l)).isZero() ? b + r : c[h - b.length] + b + r;
                            }
                            for (this.isZero() && (r = "0" + r); r.length % t != 0;)
                                r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r;
                        } n(!1, "Base should be between 2 and 36"); }, o.prototype.toNumber = function () { var e = this.words[0]; return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e; }, o.prototype.toJSON = function () { return this.toString(16); }, o.prototype.toBuffer = function (e, t) { return n(void 0 !== a), this.toArrayLike(a, e, t); }, o.prototype.toArray = function (e, t) { return this.toArrayLike(Array, e, t); }, o.prototype.toArrayLike = function (e, t, r) { var i = this.byteLength(), o = r || Math.max(1, i); n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip(); var a, s, f = "le" === t, c = new e(o), u = this.clone(); if (f) {
                            for (s = 0; !u.isZero(); s++)
                                a = u.andln(255), u.iushrn(8), c[s] = a;
                            for (; s < o; s++)
                                c[s] = 0;
                        }
                        else {
                            for (s = 0; s < o - i; s++)
                                c[s] = 0;
                            for (s = 0; !u.isZero(); s++)
                                a = u.andln(255), u.iushrn(8), c[o - s - 1] = a;
                        } return c; }, Math.clz32 ? o.prototype._countBits = function (e) { return 32 - Math.clz32(e); } : o.prototype._countBits = function (e) { var t = e, r = 0; return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t; }, o.prototype._zeroBits = function (e) { if (0 === e)
                            return 26; var t = e, r = 0; return 0 == (8191 & t) && (r += 13, t >>>= 13), 0 == (127 & t) && (r += 7, t >>>= 7), 0 == (15 & t) && (r += 4, t >>>= 4), 0 == (3 & t) && (r += 2, t >>>= 2), 0 == (1 & t) && r++, r; }, o.prototype.bitLength = function () { var e = this.words[this.length - 1], t = this._countBits(e); return 26 * (this.length - 1) + t; }, o.prototype.zeroBits = function () { if (this.isZero())
                            return 0; for (var e = 0, t = 0; t < this.length; t++) {
                            var r = this._zeroBits(this.words[t]);
                            if (e += r, 26 !== r)
                                break;
                        } return e; }, o.prototype.byteLength = function () { return Math.ceil(this.bitLength() / 8); }, o.prototype.toTwos = function (e) { return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone(); }, o.prototype.fromTwos = function (e) { return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone(); }, o.prototype.isNeg = function () { return 0 !== this.negative; }, o.prototype.neg = function () { return this.clone().ineg(); }, o.prototype.ineg = function () { return this.isZero() || (this.negative ^= 1), this; }, o.prototype.iuor = function (e) { for (; this.length < e.length;)
                            this.words[this.length++] = 0; for (var t = 0; t < e.length; t++)
                            this.words[t] = this.words[t] | e.words[t]; return this.strip(); }, o.prototype.ior = function (e) { return n(0 == (this.negative | e.negative)), this.iuor(e); }, o.prototype.or = function (e) { return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this); }, o.prototype.uor = function (e) { return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this); }, o.prototype.iuand = function (e) { var t; t = this.length > e.length ? e : this; for (var r = 0; r < t.length; r++)
                            this.words[r] = this.words[r] & e.words[r]; return this.length = t.length, this.strip(); }, o.prototype.iand = function (e) { return n(0 == (this.negative | e.negative)), this.iuand(e); }, o.prototype.and = function (e) { return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this); }, o.prototype.uand = function (e) { return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this); }, o.prototype.iuxor = function (e) { var t, r; this.length > e.length ? (t = this, r = e) : (t = e, r = this); for (var n = 0; n < r.length; n++)
                            this.words[n] = t.words[n] ^ r.words[n]; if (this !== t)
                            for (; n < t.length; n++)
                                this.words[n] = t.words[n]; return this.length = t.length, this.strip(); }, o.prototype.ixor = function (e) { return n(0 == (this.negative | e.negative)), this.iuxor(e); }, o.prototype.xor = function (e) { return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this); }, o.prototype.uxor = function (e) { return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this); }, o.prototype.inotn = function (e) { n("number" == typeof e && e >= 0); var t = 0 | Math.ceil(e / 26), r = e % 26; this._expand(t), r > 0 && t--; for (var i = 0; i < t; i++)
                            this.words[i] = 67108863 & ~this.words[i]; return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip(); }, o.prototype.notn = function (e) { return this.clone().inotn(e); }, o.prototype.setn = function (e, t) { n("number" == typeof e && e >= 0); var r = e / 26 | 0, i = e % 26; return this._expand(r + 1), this.words[r] = t ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip(); }, o.prototype.iadd = function (e) { var t, r, n; if (0 !== this.negative && 0 === e.negative)
                            return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign(); if (0 === this.negative && 0 !== e.negative)
                            return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign(); this.length > e.length ? (r = this, n = e) : (r = e, n = this); for (var i = 0, o = 0; o < n.length; o++)
                            t = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26; for (; 0 !== i && o < r.length; o++)
                            t = (0 | r.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26; if (this.length = r.length, 0 !== i)
                            this.words[this.length] = i, this.length++;
                        else if (r !== this)
                            for (; o < r.length; o++)
                                this.words[o] = r.words[o]; return this; }, o.prototype.add = function (e) { var t; return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this); }, o.prototype.isub = function (e) { if (0 !== e.negative) {
                            e.negative = 0;
                            var t = this.iadd(e);
                            return e.negative = 1, t._normSign();
                        } if (0 !== this.negative)
                            return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign(); var r, n, i = this.cmp(e); if (0 === i)
                            return this.negative = 0, this.length = 1, this.words[0] = 0, this; i > 0 ? (r = this, n = e) : (r = e, n = this); for (var o = 0, a = 0; a < n.length; a++)
                            o = (t = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & t; for (; 0 !== o && a < r.length; a++)
                            o = (t = (0 | r.words[a]) + o) >> 26, this.words[a] = 67108863 & t; if (0 === o && a < r.length && r !== this)
                            for (; a < r.length; a++)
                                this.words[a] = r.words[a]; return this.length = Math.max(this.length, a), r !== this && (this.negative = 1), this.strip(); }, o.prototype.sub = function (e) { return this.clone().isub(e); };
                        var l = function (e, t, r) { var n, i, o, a = e.words, s = t.words, f = r.words, c = 0, u = 0 | a[0], d = 8191 & u, h = u >>> 13, l = 0 | a[1], p = 8191 & l, b = l >>> 13, g = 0 | a[2], v = 8191 & g, y = g >>> 13, m = 0 | a[3], _ = 8191 & m, w = m >>> 13, E = 0 | a[4], A = 8191 & E, S = E >>> 13, x = 0 | a[5], M = 8191 & x, I = x >>> 13, k = 0 | a[6], T = 8191 & k, L = k >>> 13, P = 0 | a[7], B = 8191 & P, R = P >>> 13, C = 0 | a[8], N = 8191 & C, O = C >>> 13, j = 0 | a[9], D = 8191 & j, U = j >>> 13, z = 0 | s[0], q = 8191 & z, F = z >>> 13, H = 0 | s[1], K = 8191 & H, V = H >>> 13, Y = 0 | s[2], G = 8191 & Y, W = Y >>> 13, Z = 0 | s[3], J = 8191 & Z, X = Z >>> 13, $ = 0 | s[4], Q = 8191 & $, ee = $ >>> 13, te = 0 | s[5], re = 8191 & te, ne = te >>> 13, ie = 0 | s[6], oe = 8191 & ie, ae = ie >>> 13, se = 0 | s[7], fe = 8191 & se, ce = se >>> 13, ue = 0 | s[8], de = 8191 & ue, he = ue >>> 13, le = 0 | s[9], pe = 8191 & le, be = le >>> 13; r.negative = e.negative ^ t.negative, r.length = 19; var ge = (c + (n = Math.imul(d, q)) | 0) + ((8191 & (i = (i = Math.imul(d, F)) + Math.imul(h, q) | 0)) << 13) | 0; c = ((o = Math.imul(h, F)) + (i >>> 13) | 0) + (ge >>> 26) | 0, ge &= 67108863, n = Math.imul(p, q), i = (i = Math.imul(p, F)) + Math.imul(b, q) | 0, o = Math.imul(b, F); var ve = (c + (n = n + Math.imul(d, K) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, V) | 0) + Math.imul(h, K) | 0)) << 13) | 0; c = ((o = o + Math.imul(h, V) | 0) + (i >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, n = Math.imul(v, q), i = (i = Math.imul(v, F)) + Math.imul(y, q) | 0, o = Math.imul(y, F), n = n + Math.imul(p, K) | 0, i = (i = i + Math.imul(p, V) | 0) + Math.imul(b, K) | 0, o = o + Math.imul(b, V) | 0; var ye = (c + (n = n + Math.imul(d, G) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, W) | 0) + Math.imul(h, G) | 0)) << 13) | 0; c = ((o = o + Math.imul(h, W) | 0) + (i >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, n = Math.imul(_, q), i = (i = Math.imul(_, F)) + Math.imul(w, q) | 0, o = Math.imul(w, F), n = n + Math.imul(v, K) | 0, i = (i = i + Math.imul(v, V) | 0) + Math.imul(y, K) | 0, o = o + Math.imul(y, V) | 0, n = n + Math.imul(p, G) | 0, i = (i = i + Math.imul(p, W) | 0) + Math.imul(b, G) | 0, o = o + Math.imul(b, W) | 0; var me = (c + (n = n + Math.imul(d, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, X) | 0) + Math.imul(h, J) | 0)) << 13) | 0; c = ((o = o + Math.imul(h, X) | 0) + (i >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, n = Math.imul(A, q), i = (i = Math.imul(A, F)) + Math.imul(S, q) | 0, o = Math.imul(S, F), n = n + Math.imul(_, K) | 0, i = (i = i + Math.imul(_, V) | 0) + Math.imul(w, K) | 0, o = o + Math.imul(w, V) | 0, n = n + Math.imul(v, G) | 0, i = (i = i + Math.imul(v, W) | 0) + Math.imul(y, G) | 0, o = o + Math.imul(y, W) | 0, n = n + Math.imul(p, J) | 0, i = (i = i + Math.imul(p, X) | 0) + Math.imul(b, J) | 0, o = o + Math.imul(b, X) | 0; var _e = (c + (n = n + Math.imul(d, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, ee) | 0) + Math.imul(h, Q) | 0)) << 13) | 0; c = ((o = o + Math.imul(h, ee) | 0) + (i >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, n = Math.imul(M, q), i = (i = Math.imul(M, F)) + Math.imul(I, q) | 0, o = Math.imul(I, F), n = n + Math.imul(A, K) | 0, i = (i = i + Math.imul(A, V) | 0) + Math.imul(S, K) | 0, o = o + Math.imul(S, V) | 0, n = n + Math.imul(_, G) | 0, i = (i = i + Math.imul(_, W) | 0) + Math.imul(w, G) | 0, o = o + Math.imul(w, W) | 0, n = n + Math.imul(v, J) | 0, i = (i = i + Math.imul(v, X) | 0) + Math.imul(y, J) | 0, o = o + Math.imul(y, X) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, ee) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, ee) | 0; var we = (c + (n = n + Math.imul(d, re) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, ne) | 0) + Math.imul(h, re) | 0)) << 13) | 0; c = ((o = o + Math.imul(h, ne) | 0) + (i >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, n = Math.imul(T, q), i = (i = Math.imul(T, F)) + Math.imul(L, q) | 0, o = Math.imul(L, F), n = n + Math.imul(M, K) | 0, i = (i = i + Math.imul(M, V) | 0) + Math.imul(I, K) | 0, o = o + Math.imul(I, V) | 0, n = n + Math.imul(A, G) | 0, i = (i = i + Math.imul(A, W) | 0) + Math.imul(S, G) | 0, o = o + Math.imul(S, W) | 0, n = n + Math.imul(_, J) | 0, i = (i = i + Math.imul(_, X) | 0) + Math.imul(w, J) | 0, o = o + Math.imul(w, X) | 0, n = n + Math.imul(v, Q) | 0, i = (i = i + Math.imul(v, ee) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, ee) | 0, n = n + Math.imul(p, re) | 0, i = (i = i + Math.imul(p, ne) | 0) + Math.imul(b, re) | 0, o = o + Math.imul(b, ne) | 0; var Ee = (c + (n = n + Math.imul(d, oe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, ae) | 0) + Math.imul(h, oe) | 0)) << 13) | 0; c = ((o = o + Math.imul(h, ae) | 0) + (i >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, n = Math.imul(B, q), i = (i = Math.imul(B, F)) + Math.imul(R, q) | 0, o = Math.imul(R, F), n = n + Math.imul(T, K) | 0, i = (i = i + Math.imul(T, V) | 0) + Math.imul(L, K) | 0, o = o + Math.imul(L, V) | 0, n = n + Math.imul(M, G) | 0, i = (i = i + Math.imul(M, W) | 0) + Math.imul(I, G) | 0, o = o + Math.imul(I, W) | 0, n = n + Math.imul(A, J) | 0, i = (i = i + Math.imul(A, X) | 0) + Math.imul(S, J) | 0, o = o + Math.imul(S, X) | 0, n = n + Math.imul(_, Q) | 0, i = (i = i + Math.imul(_, ee) | 0) + Math.imul(w, Q) | 0, o = o + Math.imul(w, ee) | 0, n = n + Math.imul(v, re) | 0, i = (i = i + Math.imul(v, ne) | 0) + Math.imul(y, re) | 0, o = o + Math.imul(y, ne) | 0, n = n + Math.imul(p, oe) | 0, i = (i = i + Math.imul(p, ae) | 0) + Math.imul(b, oe) | 0, o = o + Math.imul(b, ae) | 0; var Ae = (c + (n = n + Math.imul(d, fe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, ce) | 0) + Math.imul(h, fe) | 0)) << 13) | 0; c = ((o = o + Math.imul(h, ce) | 0) + (i >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, n = Math.imul(N, q), i = (i = Math.imul(N, F)) + Math.imul(O, q) | 0, o = Math.imul(O, F), n = n + Math.imul(B, K) | 0, i = (i = i + Math.imul(B, V) | 0) + Math.imul(R, K) | 0, o = o + Math.imul(R, V) | 0, n = n + Math.imul(T, G) | 0, i = (i = i + Math.imul(T, W) | 0) + Math.imul(L, G) | 0, o = o + Math.imul(L, W) | 0, n = n + Math.imul(M, J) | 0, i = (i = i + Math.imul(M, X) | 0) + Math.imul(I, J) | 0, o = o + Math.imul(I, X) | 0, n = n + Math.imul(A, Q) | 0, i = (i = i + Math.imul(A, ee) | 0) + Math.imul(S, Q) | 0, o = o + Math.imul(S, ee) | 0, n = n + Math.imul(_, re) | 0, i = (i = i + Math.imul(_, ne) | 0) + Math.imul(w, re) | 0, o = o + Math.imul(w, ne) | 0, n = n + Math.imul(v, oe) | 0, i = (i = i + Math.imul(v, ae) | 0) + Math.imul(y, oe) | 0, o = o + Math.imul(y, ae) | 0, n = n + Math.imul(p, fe) | 0, i = (i = i + Math.imul(p, ce) | 0) + Math.imul(b, fe) | 0, o = o + Math.imul(b, ce) | 0; var Se = (c + (n = n + Math.imul(d, de) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, he) | 0) + Math.imul(h, de) | 0)) << 13) | 0; c = ((o = o + Math.imul(h, he) | 0) + (i >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, n = Math.imul(D, q), i = (i = Math.imul(D, F)) + Math.imul(U, q) | 0, o = Math.imul(U, F), n = n + Math.imul(N, K) | 0, i = (i = i + Math.imul(N, V) | 0) + Math.imul(O, K) | 0, o = o + Math.imul(O, V) | 0, n = n + Math.imul(B, G) | 0, i = (i = i + Math.imul(B, W) | 0) + Math.imul(R, G) | 0, o = o + Math.imul(R, W) | 0, n = n + Math.imul(T, J) | 0, i = (i = i + Math.imul(T, X) | 0) + Math.imul(L, J) | 0, o = o + Math.imul(L, X) | 0, n = n + Math.imul(M, Q) | 0, i = (i = i + Math.imul(M, ee) | 0) + Math.imul(I, Q) | 0, o = o + Math.imul(I, ee) | 0, n = n + Math.imul(A, re) | 0, i = (i = i + Math.imul(A, ne) | 0) + Math.imul(S, re) | 0, o = o + Math.imul(S, ne) | 0, n = n + Math.imul(_, oe) | 0, i = (i = i + Math.imul(_, ae) | 0) + Math.imul(w, oe) | 0, o = o + Math.imul(w, ae) | 0, n = n + Math.imul(v, fe) | 0, i = (i = i + Math.imul(v, ce) | 0) + Math.imul(y, fe) | 0, o = o + Math.imul(y, ce) | 0, n = n + Math.imul(p, de) | 0, i = (i = i + Math.imul(p, he) | 0) + Math.imul(b, de) | 0, o = o + Math.imul(b, he) | 0; var xe = (c + (n = n + Math.imul(d, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, be) | 0) + Math.imul(h, pe) | 0)) << 13) | 0; c = ((o = o + Math.imul(h, be) | 0) + (i >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, n = Math.imul(D, K), i = (i = Math.imul(D, V)) + Math.imul(U, K) | 0, o = Math.imul(U, V), n = n + Math.imul(N, G) | 0, i = (i = i + Math.imul(N, W) | 0) + Math.imul(O, G) | 0, o = o + Math.imul(O, W) | 0, n = n + Math.imul(B, J) | 0, i = (i = i + Math.imul(B, X) | 0) + Math.imul(R, J) | 0, o = o + Math.imul(R, X) | 0, n = n + Math.imul(T, Q) | 0, i = (i = i + Math.imul(T, ee) | 0) + Math.imul(L, Q) | 0, o = o + Math.imul(L, ee) | 0, n = n + Math.imul(M, re) | 0, i = (i = i + Math.imul(M, ne) | 0) + Math.imul(I, re) | 0, o = o + Math.imul(I, ne) | 0, n = n + Math.imul(A, oe) | 0, i = (i = i + Math.imul(A, ae) | 0) + Math.imul(S, oe) | 0, o = o + Math.imul(S, ae) | 0, n = n + Math.imul(_, fe) | 0, i = (i = i + Math.imul(_, ce) | 0) + Math.imul(w, fe) | 0, o = o + Math.imul(w, ce) | 0, n = n + Math.imul(v, de) | 0, i = (i = i + Math.imul(v, he) | 0) + Math.imul(y, de) | 0, o = o + Math.imul(y, he) | 0; var Me = (c + (n = n + Math.imul(p, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, be) | 0) + Math.imul(b, pe) | 0)) << 13) | 0; c = ((o = o + Math.imul(b, be) | 0) + (i >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, n = Math.imul(D, G), i = (i = Math.imul(D, W)) + Math.imul(U, G) | 0, o = Math.imul(U, W), n = n + Math.imul(N, J) | 0, i = (i = i + Math.imul(N, X) | 0) + Math.imul(O, J) | 0, o = o + Math.imul(O, X) | 0, n = n + Math.imul(B, Q) | 0, i = (i = i + Math.imul(B, ee) | 0) + Math.imul(R, Q) | 0, o = o + Math.imul(R, ee) | 0, n = n + Math.imul(T, re) | 0, i = (i = i + Math.imul(T, ne) | 0) + Math.imul(L, re) | 0, o = o + Math.imul(L, ne) | 0, n = n + Math.imul(M, oe) | 0, i = (i = i + Math.imul(M, ae) | 0) + Math.imul(I, oe) | 0, o = o + Math.imul(I, ae) | 0, n = n + Math.imul(A, fe) | 0, i = (i = i + Math.imul(A, ce) | 0) + Math.imul(S, fe) | 0, o = o + Math.imul(S, ce) | 0, n = n + Math.imul(_, de) | 0, i = (i = i + Math.imul(_, he) | 0) + Math.imul(w, de) | 0, o = o + Math.imul(w, he) | 0; var Ie = (c + (n = n + Math.imul(v, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(v, be) | 0) + Math.imul(y, pe) | 0)) << 13) | 0; c = ((o = o + Math.imul(y, be) | 0) + (i >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, n = Math.imul(D, J), i = (i = Math.imul(D, X)) + Math.imul(U, J) | 0, o = Math.imul(U, X), n = n + Math.imul(N, Q) | 0, i = (i = i + Math.imul(N, ee) | 0) + Math.imul(O, Q) | 0, o = o + Math.imul(O, ee) | 0, n = n + Math.imul(B, re) | 0, i = (i = i + Math.imul(B, ne) | 0) + Math.imul(R, re) | 0, o = o + Math.imul(R, ne) | 0, n = n + Math.imul(T, oe) | 0, i = (i = i + Math.imul(T, ae) | 0) + Math.imul(L, oe) | 0, o = o + Math.imul(L, ae) | 0, n = n + Math.imul(M, fe) | 0, i = (i = i + Math.imul(M, ce) | 0) + Math.imul(I, fe) | 0, o = o + Math.imul(I, ce) | 0, n = n + Math.imul(A, de) | 0, i = (i = i + Math.imul(A, he) | 0) + Math.imul(S, de) | 0, o = o + Math.imul(S, he) | 0; var ke = (c + (n = n + Math.imul(_, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, be) | 0) + Math.imul(w, pe) | 0)) << 13) | 0; c = ((o = o + Math.imul(w, be) | 0) + (i >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, n = Math.imul(D, Q), i = (i = Math.imul(D, ee)) + Math.imul(U, Q) | 0, o = Math.imul(U, ee), n = n + Math.imul(N, re) | 0, i = (i = i + Math.imul(N, ne) | 0) + Math.imul(O, re) | 0, o = o + Math.imul(O, ne) | 0, n = n + Math.imul(B, oe) | 0, i = (i = i + Math.imul(B, ae) | 0) + Math.imul(R, oe) | 0, o = o + Math.imul(R, ae) | 0, n = n + Math.imul(T, fe) | 0, i = (i = i + Math.imul(T, ce) | 0) + Math.imul(L, fe) | 0, o = o + Math.imul(L, ce) | 0, n = n + Math.imul(M, de) | 0, i = (i = i + Math.imul(M, he) | 0) + Math.imul(I, de) | 0, o = o + Math.imul(I, he) | 0; var Te = (c + (n = n + Math.imul(A, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, be) | 0) + Math.imul(S, pe) | 0)) << 13) | 0; c = ((o = o + Math.imul(S, be) | 0) + (i >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, n = Math.imul(D, re), i = (i = Math.imul(D, ne)) + Math.imul(U, re) | 0, o = Math.imul(U, ne), n = n + Math.imul(N, oe) | 0, i = (i = i + Math.imul(N, ae) | 0) + Math.imul(O, oe) | 0, o = o + Math.imul(O, ae) | 0, n = n + Math.imul(B, fe) | 0, i = (i = i + Math.imul(B, ce) | 0) + Math.imul(R, fe) | 0, o = o + Math.imul(R, ce) | 0, n = n + Math.imul(T, de) | 0, i = (i = i + Math.imul(T, he) | 0) + Math.imul(L, de) | 0, o = o + Math.imul(L, he) | 0; var Le = (c + (n = n + Math.imul(M, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(M, be) | 0) + Math.imul(I, pe) | 0)) << 13) | 0; c = ((o = o + Math.imul(I, be) | 0) + (i >>> 13) | 0) + (Le >>> 26) | 0, Le &= 67108863, n = Math.imul(D, oe), i = (i = Math.imul(D, ae)) + Math.imul(U, oe) | 0, o = Math.imul(U, ae), n = n + Math.imul(N, fe) | 0, i = (i = i + Math.imul(N, ce) | 0) + Math.imul(O, fe) | 0, o = o + Math.imul(O, ce) | 0, n = n + Math.imul(B, de) | 0, i = (i = i + Math.imul(B, he) | 0) + Math.imul(R, de) | 0, o = o + Math.imul(R, he) | 0; var Pe = (c + (n = n + Math.imul(T, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(T, be) | 0) + Math.imul(L, pe) | 0)) << 13) | 0; c = ((o = o + Math.imul(L, be) | 0) + (i >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, n = Math.imul(D, fe), i = (i = Math.imul(D, ce)) + Math.imul(U, fe) | 0, o = Math.imul(U, ce), n = n + Math.imul(N, de) | 0, i = (i = i + Math.imul(N, he) | 0) + Math.imul(O, de) | 0, o = o + Math.imul(O, he) | 0; var Be = (c + (n = n + Math.imul(B, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(B, be) | 0) + Math.imul(R, pe) | 0)) << 13) | 0; c = ((o = o + Math.imul(R, be) | 0) + (i >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, n = Math.imul(D, de), i = (i = Math.imul(D, he)) + Math.imul(U, de) | 0, o = Math.imul(U, he); var Re = (c + (n = n + Math.imul(N, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(N, be) | 0) + Math.imul(O, pe) | 0)) << 13) | 0; c = ((o = o + Math.imul(O, be) | 0) + (i >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863; var Ce = (c + (n = Math.imul(D, pe)) | 0) + ((8191 & (i = (i = Math.imul(D, be)) + Math.imul(U, pe) | 0)) << 13) | 0; return c = ((o = Math.imul(U, be)) + (i >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, f[0] = ge, f[1] = ve, f[2] = ye, f[3] = me, f[4] = _e, f[5] = we, f[6] = Ee, f[7] = Ae, f[8] = Se, f[9] = xe, f[10] = Me, f[11] = Ie, f[12] = ke, f[13] = Te, f[14] = Le, f[15] = Pe, f[16] = Be, f[17] = Re, f[18] = Ce, 0 !== c && (f[19] = c, r.length++), r; };
                        function p(e, t, r) { return (new b).mulp(e, t, r); }
                        function b(e, t) { this.x = e, this.y = t; }
                        Math.imul || (l = h), o.prototype.mulTo = function (e, t) { var r = this.length + e.length; return 10 === this.length && 10 === e.length ? l(this, e, t) : r < 63 ? h(this, e, t) : r < 1024 ? function (e, t, r) { r.negative = t.negative ^ e.negative, r.length = e.length + t.length; for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                            var a = i;
                            i = 0;
                            for (var s = 67108863 & n, f = Math.min(o, t.length - 1), c = Math.max(0, o - e.length + 1); c <= f; c++) {
                                var u = o - c, d = (0 | e.words[u]) * (0 | t.words[c]), h = 67108863 & d;
                                s = 67108863 & (h = h + s | 0), i += (a = (a = a + (d / 67108864 | 0) | 0) + (h >>> 26) | 0) >>> 26, a &= 67108863;
                            }
                            r.words[o] = s, n = a, a = i;
                        } return 0 !== n ? r.words[o] = n : r.length--, r.strip(); }(this, e, t) : p(this, e, t); }, b.prototype.makeRBT = function (e) { for (var t = new Array(e), r = o.prototype._countBits(e) - 1, n = 0; n < e; n++)
                            t[n] = this.revBin(n, r, e); return t; }, b.prototype.revBin = function (e, t, r) { if (0 === e || e === r - 1)
                            return e; for (var n = 0, i = 0; i < t; i++)
                            n |= (1 & e) << t - i - 1, e >>= 1; return n; }, b.prototype.permute = function (e, t, r, n, i, o) { for (var a = 0; a < o; a++)
                            n[a] = t[e[a]], i[a] = r[e[a]]; }, b.prototype.transform = function (e, t, r, n, i, o) { this.permute(o, e, t, r, n, i); for (var a = 1; a < i; a <<= 1)
                            for (var s = a << 1, f = Math.cos(2 * Math.PI / s), c = Math.sin(2 * Math.PI / s), u = 0; u < i; u += s)
                                for (var d = f, h = c, l = 0; l < a; l++) {
                                    var p = r[u + l], b = n[u + l], g = r[u + l + a], v = n[u + l + a], y = d * g - h * v;
                                    v = d * v + h * g, g = y, r[u + l] = p + g, n[u + l] = b + v, r[u + l + a] = p - g, n[u + l + a] = b - v, l !== s && (y = f * d - c * h, h = f * h + c * d, d = y);
                                } }, b.prototype.guessLen13b = function (e, t) { var r = 1 | Math.max(t, e), n = 1 & r, i = 0; for (r = r / 2 | 0; r; r >>>= 1)
                            i++; return 1 << i + 1 + n; }, b.prototype.conjugate = function (e, t, r) { if (!(r <= 1))
                            for (var n = 0; n < r / 2; n++) {
                                var i = e[n];
                                e[n] = e[r - n - 1], e[r - n - 1] = i, i = t[n], t[n] = -t[r - n - 1], t[r - n - 1] = -i;
                            } }, b.prototype.normalize13b = function (e, t) { for (var r = 0, n = 0; n < t / 2; n++) {
                            var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
                            e[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0;
                        } return e; }, b.prototype.convert13b = function (e, t, r, i) { for (var o = 0, a = 0; a < t; a++)
                            o += 0 | e[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13; for (a = 2 * t; a < i; ++a)
                            r[a] = 0; n(0 === o), n(0 == (-8192 & o)); }, b.prototype.stub = function (e) { for (var t = new Array(e), r = 0; r < e; r++)
                            t[r] = 0; return t; }, b.prototype.mulp = function (e, t, r) { var n = 2 * this.guessLen13b(e.length, t.length), i = this.makeRBT(n), o = this.stub(n), a = new Array(n), s = new Array(n), f = new Array(n), c = new Array(n), u = new Array(n), d = new Array(n), h = r.words; h.length = n, this.convert13b(e.words, e.length, a, n), this.convert13b(t.words, t.length, c, n), this.transform(a, o, s, f, n, i), this.transform(c, o, u, d, n, i); for (var l = 0; l < n; l++) {
                            var p = s[l] * u[l] - f[l] * d[l];
                            f[l] = s[l] * d[l] + f[l] * u[l], s[l] = p;
                        } return this.conjugate(s, f, n), this.transform(s, f, h, o, n, i), this.conjugate(h, o, n), this.normalize13b(h, n), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r.strip(); }, o.prototype.mul = function (e) { var t = new o(null); return t.words = new Array(this.length + e.length), this.mulTo(e, t); }, o.prototype.mulf = function (e) { var t = new o(null); return t.words = new Array(this.length + e.length), p(this, e, t); }, o.prototype.imul = function (e) { return this.clone().mulTo(e, this); }, o.prototype.imuln = function (e) { n("number" == typeof e), n(e < 67108864); for (var t = 0, r = 0; r < this.length; r++) {
                            var i = (0 | this.words[r]) * e, o = (67108863 & i) + (67108863 & t);
                            t >>= 26, t += i / 67108864 | 0, t += o >>> 26, this.words[r] = 67108863 & o;
                        } return 0 !== t && (this.words[r] = t, this.length++), this; }, o.prototype.muln = function (e) { return this.clone().imuln(e); }, o.prototype.sqr = function () { return this.mul(this); }, o.prototype.isqr = function () { return this.imul(this.clone()); }, o.prototype.pow = function (e) { var t = function (e) { for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
                            var n = r / 26 | 0, i = r % 26;
                            t[r] = (e.words[n] & 1 << i) >>> i;
                        } return t; }(e); if (0 === t.length)
                            return new o(1); for (var r = this, n = 0; n < t.length && 0 === t[n]; n++, r = r.sqr())
                            ; if (++n < t.length)
                            for (var i = r.sqr(); n < t.length; n++, i = i.sqr())
                                0 !== t[n] && (r = r.mul(i)); return r; }, o.prototype.iushln = function (e) { n("number" == typeof e && e >= 0); var t, r = e % 26, i = (e - r) / 26, o = 67108863 >>> 26 - r << 26 - r; if (0 !== r) {
                            var a = 0;
                            for (t = 0; t < this.length; t++) {
                                var s = this.words[t] & o, f = (0 | this.words[t]) - s << r;
                                this.words[t] = f | a, a = s >>> 26 - r;
                            }
                            a && (this.words[t] = a, this.length++);
                        } if (0 !== i) {
                            for (t = this.length - 1; t >= 0; t--)
                                this.words[t + i] = this.words[t];
                            for (t = 0; t < i; t++)
                                this.words[t] = 0;
                            this.length += i;
                        } return this.strip(); }, o.prototype.ishln = function (e) { return n(0 === this.negative), this.iushln(e); }, o.prototype.iushrn = function (e, t, r) { var i; n("number" == typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0; var o = e % 26, a = Math.min((e - o) / 26, this.length), s = 67108863 ^ 67108863 >>> o << o, f = r; if (i -= a, i = Math.max(0, i), f) {
                            for (var c = 0; c < a; c++)
                                f.words[c] = this.words[c];
                            f.length = a;
                        } if (0 === a)
                            ;
                        else if (this.length > a)
                            for (this.length -= a, c = 0; c < this.length; c++)
                                this.words[c] = this.words[c + a];
                        else
                            this.words[0] = 0, this.length = 1; var u = 0; for (c = this.length - 1; c >= 0 && (0 !== u || c >= i); c--) {
                            var d = 0 | this.words[c];
                            this.words[c] = u << 26 - o | d >>> o, u = d & s;
                        } return f && 0 !== u && (f.words[f.length++] = u), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip(); }, o.prototype.ishrn = function (e, t, r) { return n(0 === this.negative), this.iushrn(e, t, r); }, o.prototype.shln = function (e) { return this.clone().ishln(e); }, o.prototype.ushln = function (e) { return this.clone().iushln(e); }, o.prototype.shrn = function (e) { return this.clone().ishrn(e); }, o.prototype.ushrn = function (e) { return this.clone().iushrn(e); }, o.prototype.testn = function (e) { n("number" == typeof e && e >= 0); var t = e % 26, r = (e - t) / 26, i = 1 << t; return !(this.length <= r) && !!(this.words[r] & i); }, o.prototype.imaskn = function (e) { n("number" == typeof e && e >= 0); var t = e % 26, r = (e - t) / 26; if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r)
                            return this; if (0 !== t && r++, this.length = Math.min(r, this.length), 0 !== t) {
                            var i = 67108863 ^ 67108863 >>> t << t;
                            this.words[this.length - 1] &= i;
                        } return this.strip(); }, o.prototype.maskn = function (e) { return this.clone().imaskn(e); }, o.prototype.iaddn = function (e) { return n("number" == typeof e), n(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e); }, o.prototype._iaddn = function (e) { this.words[0] += e; for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
                            this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++; return this.length = Math.max(this.length, t + 1), this; }, o.prototype.isubn = function (e) { if (n("number" == typeof e), n(e < 67108864), e < 0)
                            return this.iaddn(-e); if (0 !== this.negative)
                            return this.negative = 0, this.iaddn(e), this.negative = 1, this; if (this.words[0] -= e, 1 === this.length && this.words[0] < 0)
                            this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var t = 0; t < this.length && this.words[t] < 0; t++)
                                this.words[t] += 67108864, this.words[t + 1] -= 1; return this.strip(); }, o.prototype.addn = function (e) { return this.clone().iaddn(e); }, o.prototype.subn = function (e) { return this.clone().isubn(e); }, o.prototype.iabs = function () { return this.negative = 0, this; }, o.prototype.abs = function () { return this.clone().iabs(); }, o.prototype._ishlnsubmul = function (e, t, r) { var i, o, a = e.length + r; this._expand(a); var s = 0; for (i = 0; i < e.length; i++) {
                            o = (0 | this.words[i + r]) + s;
                            var f = (0 | e.words[i]) * t;
                            s = ((o -= 67108863 & f) >> 26) - (f / 67108864 | 0), this.words[i + r] = 67108863 & o;
                        } for (; i < this.length - r; i++)
                            s = (o = (0 | this.words[i + r]) + s) >> 26, this.words[i + r] = 67108863 & o; if (0 === s)
                            return this.strip(); for (n(-1 === s), s = 0, i = 0; i < this.length; i++)
                            s = (o = -(0 | this.words[i]) + s) >> 26, this.words[i] = 67108863 & o; return this.negative = 1, this.strip(); }, o.prototype._wordDiv = function (e, t) { var r = (this.length, e.length), n = this.clone(), i = e, a = 0 | i.words[i.length - 1]; 0 !== (r = 26 - this._countBits(a)) && (i = i.ushln(r), n.iushln(r), a = 0 | i.words[i.length - 1]); var s, f = n.length - i.length; if ("mod" !== t) {
                            (s = new o(null)).length = f + 1, s.words = new Array(s.length);
                            for (var c = 0; c < s.length; c++)
                                s.words[c] = 0;
                        } var u = n.clone()._ishlnsubmul(i, 1, f); 0 === u.negative && (n = u, s && (s.words[f] = 1)); for (var d = f - 1; d >= 0; d--) {
                            var h = 67108864 * (0 | n.words[i.length + d]) + (0 | n.words[i.length + d - 1]);
                            for (h = Math.min(h / a | 0, 67108863), n._ishlnsubmul(i, h, d); 0 !== n.negative;)
                                h--, n.negative = 0, n._ishlnsubmul(i, 1, d), n.isZero() || (n.negative ^= 1);
                            s && (s.words[d] = h);
                        } return s && s.strip(), n.strip(), "div" !== t && 0 !== r && n.iushrn(r), { div: s || null, mod: n }; }, o.prototype.divmod = function (e, t, r) { return n(!e.isZero()), this.isZero() ? { div: new o(0), mod: new o(0) } : 0 !== this.negative && 0 === e.negative ? (s = this.neg().divmod(e, t), "mod" !== t && (i = s.div.neg()), "div" !== t && (a = s.mod.neg(), r && 0 !== a.negative && a.iadd(e)), { div: i, mod: a }) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t), "mod" !== t && (i = s.div.neg()), { div: i, mod: s.mod }) : 0 != (this.negative & e.negative) ? (s = this.neg().divmod(e.neg(), t), "div" !== t && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(e)), { div: s.div, mod: a }) : e.length > this.length || this.cmp(e) < 0 ? { div: new o(0), mod: this } : 1 === e.length ? "div" === t ? { div: this.divn(e.words[0]), mod: null } : "mod" === t ? { div: null, mod: new o(this.modn(e.words[0])) } : { div: this.divn(e.words[0]), mod: new o(this.modn(e.words[0])) } : this._wordDiv(e, t); var i, a, s; }, o.prototype.div = function (e) { return this.divmod(e, "div", !1).div; }, o.prototype.mod = function (e) { return this.divmod(e, "mod", !1).mod; }, o.prototype.umod = function (e) { return this.divmod(e, "mod", !0).mod; }, o.prototype.divRound = function (e) { var t = this.divmod(e); if (t.mod.isZero())
                            return t.div; var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod, n = e.ushrn(1), i = e.andln(1), o = r.cmp(n); return o < 0 || 1 === i && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1); }, o.prototype.modn = function (e) { n(e <= 67108863); for (var t = (1 << 26) % e, r = 0, i = this.length - 1; i >= 0; i--)
                            r = (t * r + (0 | this.words[i])) % e; return r; }, o.prototype.idivn = function (e) { n(e <= 67108863); for (var t = 0, r = this.length - 1; r >= 0; r--) {
                            var i = (0 | this.words[r]) + 67108864 * t;
                            this.words[r] = i / e | 0, t = i % e;
                        } return this.strip(); }, o.prototype.divn = function (e) { return this.clone().idivn(e); }, o.prototype.egcd = function (e) { n(0 === e.negative), n(!e.isZero()); var t = this, r = e.clone(); t = 0 !== t.negative ? t.umod(e) : t.clone(); for (var i = new o(1), a = new o(0), s = new o(0), f = new o(1), c = 0; t.isEven() && r.isEven();)
                            t.iushrn(1), r.iushrn(1), ++c; for (var u = r.clone(), d = t.clone(); !t.isZero();) {
                            for (var h = 0, l = 1; 0 == (t.words[0] & l) && h < 26; ++h, l <<= 1)
                                ;
                            if (h > 0)
                                for (t.iushrn(h); h-- > 0;)
                                    (i.isOdd() || a.isOdd()) && (i.iadd(u), a.isub(d)), i.iushrn(1), a.iushrn(1);
                            for (var p = 0, b = 1; 0 == (r.words[0] & b) && p < 26; ++p, b <<= 1)
                                ;
                            if (p > 0)
                                for (r.iushrn(p); p-- > 0;)
                                    (s.isOdd() || f.isOdd()) && (s.iadd(u), f.isub(d)), s.iushrn(1), f.iushrn(1);
                            t.cmp(r) >= 0 ? (t.isub(r), i.isub(s), a.isub(f)) : (r.isub(t), s.isub(i), f.isub(a));
                        } return { a: s, b: f, gcd: r.iushln(c) }; }, o.prototype._invmp = function (e) { n(0 === e.negative), n(!e.isZero()); var t = this, r = e.clone(); t = 0 !== t.negative ? t.umod(e) : t.clone(); for (var i, a = new o(1), s = new o(0), f = r.clone(); t.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                            for (var c = 0, u = 1; 0 == (t.words[0] & u) && c < 26; ++c, u <<= 1)
                                ;
                            if (c > 0)
                                for (t.iushrn(c); c-- > 0;)
                                    a.isOdd() && a.iadd(f), a.iushrn(1);
                            for (var d = 0, h = 1; 0 == (r.words[0] & h) && d < 26; ++d, h <<= 1)
                                ;
                            if (d > 0)
                                for (r.iushrn(d); d-- > 0;)
                                    s.isOdd() && s.iadd(f), s.iushrn(1);
                            t.cmp(r) >= 0 ? (t.isub(r), a.isub(s)) : (r.isub(t), s.isub(a));
                        } return (i = 0 === t.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(e), i; }, o.prototype.gcd = function (e) { if (this.isZero())
                            return e.abs(); if (e.isZero())
                            return this.abs(); var t = this.clone(), r = e.clone(); t.negative = 0, r.negative = 0; for (var n = 0; t.isEven() && r.isEven(); n++)
                            t.iushrn(1), r.iushrn(1); for (;;) {
                            for (; t.isEven();)
                                t.iushrn(1);
                            for (; r.isEven();)
                                r.iushrn(1);
                            var i = t.cmp(r);
                            if (i < 0) {
                                var o = t;
                                t = r, r = o;
                            }
                            else if (0 === i || 0 === r.cmpn(1))
                                break;
                            t.isub(r);
                        } return r.iushln(n); }, o.prototype.invm = function (e) { return this.egcd(e).a.umod(e); }, o.prototype.isEven = function () { return 0 == (1 & this.words[0]); }, o.prototype.isOdd = function () { return 1 == (1 & this.words[0]); }, o.prototype.andln = function (e) { return this.words[0] & e; }, o.prototype.bincn = function (e) { n("number" == typeof e); var t = e % 26, r = (e - t) / 26, i = 1 << t; if (this.length <= r)
                            return this._expand(r + 1), this.words[r] |= i, this; for (var o = i, a = r; 0 !== o && a < this.length; a++) {
                            var s = 0 | this.words[a];
                            o = (s += o) >>> 26, s &= 67108863, this.words[a] = s;
                        } return 0 !== o && (this.words[a] = o, this.length++), this; }, o.prototype.isZero = function () { return 1 === this.length && 0 === this.words[0]; }, o.prototype.cmpn = function (e) { var t, r = e < 0; if (0 !== this.negative && !r)
                            return -1; if (0 === this.negative && r)
                            return 1; if (this.strip(), this.length > 1)
                            t = 1;
                        else {
                            r && (e = -e), n(e <= 67108863, "Number is too big");
                            var i = 0 | this.words[0];
                            t = i === e ? 0 : i < e ? -1 : 1;
                        } return 0 !== this.negative ? 0 | -t : t; }, o.prototype.cmp = function (e) { if (0 !== this.negative && 0 === e.negative)
                            return -1; if (0 === this.negative && 0 !== e.negative)
                            return 1; var t = this.ucmp(e); return 0 !== this.negative ? 0 | -t : t; }, o.prototype.ucmp = function (e) { if (this.length > e.length)
                            return 1; if (this.length < e.length)
                            return -1; for (var t = 0, r = this.length - 1; r >= 0; r--) {
                            var n = 0 | this.words[r], i = 0 | e.words[r];
                            if (n !== i) {
                                n < i ? t = -1 : n > i && (t = 1);
                                break;
                            }
                        } return t; }, o.prototype.gtn = function (e) { return 1 === this.cmpn(e); }, o.prototype.gt = function (e) { return 1 === this.cmp(e); }, o.prototype.gten = function (e) { return this.cmpn(e) >= 0; }, o.prototype.gte = function (e) { return this.cmp(e) >= 0; }, o.prototype.ltn = function (e) { return -1 === this.cmpn(e); }, o.prototype.lt = function (e) { return -1 === this.cmp(e); }, o.prototype.lten = function (e) { return this.cmpn(e) <= 0; }, o.prototype.lte = function (e) { return this.cmp(e) <= 0; }, o.prototype.eqn = function (e) { return 0 === this.cmpn(e); }, o.prototype.eq = function (e) { return 0 === this.cmp(e); }, o.red = function (e) { return new E(e); }, o.prototype.toRed = function (e) { return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e); }, o.prototype.fromRed = function () { return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this); }, o.prototype._forceRed = function (e) { return this.red = e, this; }, o.prototype.forceRed = function (e) { return n(!this.red, "Already a number in reduction context"), this._forceRed(e); }, o.prototype.redAdd = function (e) { return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e); }, o.prototype.redIAdd = function (e) { return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e); }, o.prototype.redSub = function (e) { return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e); }, o.prototype.redISub = function (e) { return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e); }, o.prototype.redShl = function (e) { return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e); }, o.prototype.redMul = function (e) { return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e); }, o.prototype.redIMul = function (e) { return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e); }, o.prototype.redSqr = function () { return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this); }, o.prototype.redISqr = function () { return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this); }, o.prototype.redSqrt = function () { return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this); }, o.prototype.redInvm = function () { return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this); }, o.prototype.redNeg = function () { return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this); }, o.prototype.redPow = function (e) { return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e); };
                        var g = { k256: null, p224: null, p192: null, p25519: null };
                        function v(e, t) { this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp(); }
                        function y() { v.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"); }
                        function m() { v.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"); }
                        function _() { v.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"); }
                        function w() { v.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"); }
                        function E(e) { if ("string" == typeof e) {
                            var t = o._prime(e);
                            this.m = t.p, this.prime = t;
                        }
                        else
                            n(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null; }
                        function A(e) { E.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv); }
                        v.prototype._tmp = function () { var e = new o(null); return e.words = new Array(Math.ceil(this.n / 13)), e; }, v.prototype.ireduce = function (e) { var t, r = e; do {
                            this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength();
                        } while (t > this.n); var n = t < this.n ? -1 : r.ucmp(this.p); return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : r.strip(), r; }, v.prototype.split = function (e, t) { e.iushrn(this.n, 0, t); }, v.prototype.imulK = function (e) { return e.imul(this.k); }, i(y, v), y.prototype.split = function (e, t) { for (var r = Math.min(e.length, 9), n = 0; n < r; n++)
                            t.words[n] = e.words[n]; if (t.length = r, e.length <= 9)
                            return e.words[0] = 0, void (e.length = 1); var i = e.words[9]; for (t.words[t.length++] = 4194303 & i, n = 10; n < e.length; n++) {
                            var o = 0 | e.words[n];
                            e.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o;
                        } i >>>= 22, e.words[n - 10] = i, 0 === i && e.length > 10 ? e.length -= 10 : e.length -= 9; }, y.prototype.imulK = function (e) { e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2; for (var t = 0, r = 0; r < e.length; r++) {
                            var n = 0 | e.words[r];
                            t += 977 * n, e.words[r] = 67108863 & t, t = 64 * n + (t / 67108864 | 0);
                        } return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e; }, i(m, v), i(_, v), i(w, v), w.prototype.imulK = function (e) { for (var t = 0, r = 0; r < e.length; r++) {
                            var n = 19 * (0 | e.words[r]) + t, i = 67108863 & n;
                            n >>>= 26, e.words[r] = i, t = n;
                        } return 0 !== t && (e.words[e.length++] = t), e; }, o._prime = function (e) { if (g[e])
                            return g[e]; var t; if ("k256" === e)
                            t = new y;
                        else if ("p224" === e)
                            t = new m;
                        else if ("p192" === e)
                            t = new _;
                        else {
                            if ("p25519" !== e)
                                throw new Error("Unknown prime " + e);
                            t = new w;
                        } return g[e] = t, t; }, E.prototype._verify1 = function (e) { n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers"); }, E.prototype._verify2 = function (e, t) { n(0 == (e.negative | t.negative), "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers"); }, E.prototype.imod = function (e) { return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this); }, E.prototype.neg = function (e) { return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this); }, E.prototype.add = function (e, t) { this._verify2(e, t); var r = e.add(t); return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this); }, E.prototype.iadd = function (e, t) { this._verify2(e, t); var r = e.iadd(t); return r.cmp(this.m) >= 0 && r.isub(this.m), r; }, E.prototype.sub = function (e, t) { this._verify2(e, t); var r = e.sub(t); return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this); }, E.prototype.isub = function (e, t) { this._verify2(e, t); var r = e.isub(t); return r.cmpn(0) < 0 && r.iadd(this.m), r; }, E.prototype.shl = function (e, t) { return this._verify1(e), this.imod(e.ushln(t)); }, E.prototype.imul = function (e, t) { return this._verify2(e, t), this.imod(e.imul(t)); }, E.prototype.mul = function (e, t) { return this._verify2(e, t), this.imod(e.mul(t)); }, E.prototype.isqr = function (e) { return this.imul(e, e.clone()); }, E.prototype.sqr = function (e) { return this.mul(e, e); }, E.prototype.sqrt = function (e) { if (e.isZero())
                            return e.clone(); var t = this.m.andln(3); if (n(t % 2 == 1), 3 === t) {
                            var r = this.m.add(new o(1)).iushrn(2);
                            return this.pow(e, r);
                        } for (var i = this.m.subn(1), a = 0; !i.isZero() && 0 === i.andln(1);)
                            a++, i.iushrn(1); n(!i.isZero()); var s = new o(1).toRed(this), f = s.redNeg(), c = this.m.subn(1).iushrn(1), u = this.m.bitLength(); for (u = new o(2 * u * u).toRed(this); 0 !== this.pow(u, c).cmp(f);)
                            u.redIAdd(f); for (var d = this.pow(u, i), h = this.pow(e, i.addn(1).iushrn(1)), l = this.pow(e, i), p = a; 0 !== l.cmp(s);) {
                            for (var b = l, g = 0; 0 !== b.cmp(s); g++)
                                b = b.redSqr();
                            n(g < p);
                            var v = this.pow(d, new o(1).iushln(p - g - 1));
                            h = h.redMul(v), d = v.redSqr(), l = l.redMul(d), p = g;
                        } return h; }, E.prototype.invm = function (e) { var t = e._invmp(this.m); return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t); }, E.prototype.pow = function (e, t) { if (t.isZero())
                            return new o(1).toRed(this); if (0 === t.cmpn(1))
                            return e.clone(); var r = new Array(16); r[0] = new o(1).toRed(this), r[1] = e; for (var n = 2; n < r.length; n++)
                            r[n] = this.mul(r[n - 1], e); var i = r[0], a = 0, s = 0, f = t.bitLength() % 26; for (0 === f && (f = 26), n = t.length - 1; n >= 0; n--) {
                            for (var c = t.words[n], u = f - 1; u >= 0; u--) {
                                var d = c >> u & 1;
                                i !== r[0] && (i = this.sqr(i)), 0 !== d || 0 !== a ? (a <<= 1, a |= d, (4 === ++s || 0 === n && 0 === u) && (i = this.mul(i, r[a]), s = 0, a = 0)) : s = 0;
                            }
                            f = 26;
                        } return i; }, E.prototype.convertTo = function (e) { var t = e.umod(this.m); return t === e ? t.clone() : t; }, E.prototype.convertFrom = function (e) { var t = e.clone(); return t.red = null, t; }, o.mont = function (e) { return new A(e); }, i(A, E), A.prototype.convertTo = function (e) { return this.imod(e.ushln(this.shift)); }, A.prototype.convertFrom = function (e) { var t = this.imod(e.mul(this.rinv)); return t.red = null, t; }, A.prototype.imul = function (e, t) { if (e.isZero() || t.isZero())
                            return e.words[0] = 0, e.length = 1, e; var r = e.imul(t), n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), i = r.isub(n).iushrn(this.shift), o = i; return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this); }, A.prototype.mul = function (e, t) { if (e.isZero() || t.isZero())
                            return new o(0)._forceRed(this); var r = e.mul(t), n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), i = r.isub(n).iushrn(this.shift), a = i; return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this); }, A.prototype.invm = function (e) { return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this); };
                    }(e, this); }).call(this, r(23)(e)); }, function (e, t, r) {
                        "use strict";
                        var n = t;
                        n.version = r(131).version, n.utils = r(132), n.rand = r(133), n.curve = r(24), n.curves = r(139), n.ec = r(147), n.eddsa = r(151);
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(85), i = r(221), o = Object.prototype.toString;
                        function a(e) { return "[object Array]" === o.call(e); }
                        function s(e) { return null !== e && "object" == typeof e; }
                        function f(e) { return "[object Function]" === o.call(e); }
                        function c(e, t) { if (null != e)
                            if ("object" != typeof e && (e = [e]), a(e))
                                for (var r = 0, n = e.length; r < n; r++)
                                    t.call(null, e[r], r, e);
                            else
                                for (var i in e)
                                    Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e); }
                        e.exports = { isArray: a, isArrayBuffer: function (e) { return "[object ArrayBuffer]" === o.call(e); }, isBuffer: i, isFormData: function (e) { return "undefined" != typeof FormData && e instanceof FormData; }, isArrayBufferView: function (e) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer; }, isString: function (e) { return "string" == typeof e; }, isNumber: function (e) { return "number" == typeof e; }, isObject: s, isUndefined: function (e) { return void 0 === e; }, isDate: function (e) { return "[object Date]" === o.call(e); }, isFile: function (e) { return "[object File]" === o.call(e); }, isBlob: function (e) { return "[object Blob]" === o.call(e); }, isFunction: f, isStream: function (e) { return s(e) && f(e.pipe); }, isURLSearchParams: function (e) { return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams; }, isStandardBrowserEnv: function () { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document; }, forEach: c, merge: function e() { var t = {}; function r(r, n) { "object" == typeof t[n] && "object" == typeof r ? t[n] = e(t[n], r) : t[n] = r; } for (var n = 0, i = arguments.length; n < i; n++)
                                c(arguments[n], r); return t; }, extend: function (e, t, r) { return c(t, function (t, i) { e[i] = r && "function" == typeof t ? n(t, r) : t; }), e; }, trim: function (e) { return e.replace(/^\s*/, "").replace(/\s*$/, ""); } };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(11), i = r(0);
                        function o(e, t) { return 55296 == (64512 & e.charCodeAt(t)) && (!(t < 0 || t + 1 >= e.length) && 56320 == (64512 & e.charCodeAt(t + 1))); }
                        function a(e) { return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0; }
                        function s(e) { return 1 === e.length ? "0" + e : e; }
                        function f(e) { return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e; }
                        t.inherits = i, t.toArray = function (e, t) { if (Array.isArray(e))
                            return e.slice(); if (!e)
                            return []; var r = []; if ("string" == typeof e)
                            if (t) {
                                if ("hex" === t)
                                    for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), i = 0; i < e.length; i += 2)
                                        r.push(parseInt(e[i] + e[i + 1], 16));
                            }
                            else
                                for (var n = 0, i = 0; i < e.length; i++) {
                                    var a = e.charCodeAt(i);
                                    a < 128 ? r[n++] = a : a < 2048 ? (r[n++] = a >> 6 | 192, r[n++] = 63 & a | 128) : o(e, i) ? (a = 65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++i)), r[n++] = a >> 18 | 240, r[n++] = a >> 12 & 63 | 128, r[n++] = a >> 6 & 63 | 128, r[n++] = 63 & a | 128) : (r[n++] = a >> 12 | 224, r[n++] = a >> 6 & 63 | 128, r[n++] = 63 & a | 128);
                                }
                        else
                            for (i = 0; i < e.length; i++)
                                r[i] = 0 | e[i]; return r; }, t.toHex = function (e) { for (var t = "", r = 0; r < e.length; r++)
                            t += s(e[r].toString(16)); return t; }, t.htonl = a, t.toHex32 = function (e, t) { for (var r = "", n = 0; n < e.length; n++) {
                            var i = e[n];
                            "little" === t && (i = a(i)), r += f(i.toString(16));
                        } return r; }, t.zero2 = s, t.zero8 = f, t.join32 = function (e, t, r, i) { var o = r - t; n(o % 4 == 0); for (var a = new Array(o / 4), s = 0, f = t; s < a.length; s++, f += 4) {
                            var c;
                            c = "big" === i ? e[f] << 24 | e[f + 1] << 16 | e[f + 2] << 8 | e[f + 3] : e[f + 3] << 24 | e[f + 2] << 16 | e[f + 1] << 8 | e[f], a[s] = c >>> 0;
                        } return a; }, t.split32 = function (e, t) { for (var r = new Array(4 * e.length), n = 0, i = 0; n < e.length; n++, i += 4) {
                            var o = e[n];
                            "big" === t ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o);
                        } return r; }, t.rotr32 = function (e, t) { return e >>> t | e << 32 - t; }, t.rotl32 = function (e, t) { return e << t | e >>> 32 - t; }, t.sum32 = function (e, t) { return e + t >>> 0; }, t.sum32_3 = function (e, t, r) { return e + t + r >>> 0; }, t.sum32_4 = function (e, t, r, n) { return e + t + r + n >>> 0; }, t.sum32_5 = function (e, t, r, n, i) { return e + t + r + n + i >>> 0; }, t.sum64 = function (e, t, r, n) { var i = e[t], o = n + e[t + 1] >>> 0, a = (o < n ? 1 : 0) + r + i; e[t] = a >>> 0, e[t + 1] = o; }, t.sum64_hi = function (e, t, r, n) { return (t + n >>> 0 < t ? 1 : 0) + e + r >>> 0; }, t.sum64_lo = function (e, t, r, n) { return t + n >>> 0; }, t.sum64_4_hi = function (e, t, r, n, i, o, a, s) { var f = 0, c = t; return f += (c = c + n >>> 0) < t ? 1 : 0, f += (c = c + o >>> 0) < o ? 1 : 0, e + r + i + a + (f += (c = c + s >>> 0) < s ? 1 : 0) >>> 0; }, t.sum64_4_lo = function (e, t, r, n, i, o, a, s) { return t + n + o + s >>> 0; }, t.sum64_5_hi = function (e, t, r, n, i, o, a, s, f, c) { var u = 0, d = t; return u += (d = d + n >>> 0) < t ? 1 : 0, u += (d = d + o >>> 0) < o ? 1 : 0, u += (d = d + s >>> 0) < s ? 1 : 0, e + r + i + a + f + (u += (d = d + c >>> 0) < c ? 1 : 0) >>> 0; }, t.sum64_5_lo = function (e, t, r, n, i, o, a, s, f, c) { return t + n + o + s + c >>> 0; }, t.rotr64_hi = function (e, t, r) { return (t << 32 - r | e >>> r) >>> 0; }, t.rotr64_lo = function (e, t, r) { return (e << 32 - r | t >>> r) >>> 0; }, t.shr64_hi = function (e, t, r) { return e >>> r; }, t.shr64_lo = function (e, t, r) { return (e << 32 - r | t >>> r) >>> 0; };
                    }, function (e, t) { var r, n, i = e.exports = {}; function o() { throw new Error("setTimeout has not been defined"); } function a() { throw new Error("clearTimeout has not been defined"); } function s(e) { if (r === setTimeout)
                        return setTimeout(e, 0); if ((r === o || !r) && setTimeout)
                        return r = setTimeout, setTimeout(e, 0); try {
                        return r(e, 0);
                    }
                    catch (t) {
                        try {
                            return r.call(null, e, 0);
                        }
                        catch (t) {
                            return r.call(this, e, 0);
                        }
                    } } !function () { try {
                        r = "function" == typeof setTimeout ? setTimeout : o;
                    }
                    catch (e) {
                        r = o;
                    } try {
                        n = "function" == typeof clearTimeout ? clearTimeout : a;
                    }
                    catch (e) {
                        n = a;
                    } }(); var f, c = [], u = !1, d = -1; function h() { u && f && (u = !1, f.length ? c = f.concat(c) : d = -1, c.length && l()); } function l() { if (!u) {
                        var e = s(h);
                        u = !0;
                        for (var t = c.length; t;) {
                            for (f = c, c = []; ++d < t;)
                                f && f[d].run();
                            d = -1, t = c.length;
                        }
                        f = null, u = !1, function (e) { if (n === clearTimeout)
                            return clearTimeout(e); if ((n === a || !n) && clearTimeout)
                            return n = clearTimeout, clearTimeout(e); try {
                            n(e);
                        }
                        catch (t) {
                            try {
                                return n.call(null, e);
                            }
                            catch (t) {
                                return n.call(this, e);
                            }
                        } }(e);
                    } } function p(e, t) { this.fun = e, this.array = t; } function b() { } i.nextTick = function (e) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
                        for (var r = 1; r < arguments.length; r++)
                            t[r - 1] = arguments[r]; c.push(new p(e, t)), 1 !== c.length || u || s(l); }, p.prototype.run = function () { this.fun.apply(null, this.array); }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = b, i.addListener = b, i.once = b, i.off = b, i.removeListener = b, i.removeAllListeners = b, i.emit = b, i.prependListener = b, i.prependOnceListener = b, i.listeners = function (e) { return []; }, i.binding = function (e) { throw new Error("process.binding is not supported"); }, i.cwd = function () { return "/"; }, i.chdir = function (e) { throw new Error("process.chdir is not supported"); }, i.umask = function () { return 0; }; }, function (e, t, r) {
                        "use strict";
                        (function (e) {
                            /*!
                             * The buffer module from node.js, for the browser.
                             *
                             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
                             * @license  MIT
                             */
                            var n = r(100), i = r(101), o = r(102);
                            function a() { return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823; }
                            function s(e, t) { if (a() < t)
                                throw new RangeError("Invalid typed array length"); return f.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = f.prototype : (null === e && (e = new f(t)), e.length = t), e; }
                            function f(e, t, r) { if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f))
                                return new f(e, t, r); if ("number" == typeof e) {
                                if ("string" == typeof t)
                                    throw new Error("If encoding is specified then the first argument must be a string");
                                return d(this, e);
                            } return c(this, e, t, r); }
                            function c(e, t, r, n) { if ("number" == typeof t)
                                throw new TypeError('"value" argument must not be a number'); return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, r, n) { if (t.byteLength, r < 0 || t.byteLength < r)
                                throw new RangeError("'offset' is out of bounds"); if (t.byteLength < r + (n || 0))
                                throw new RangeError("'length' is out of bounds"); t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n); f.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = f.prototype : e = h(e, t); return e; }(e, t, r, n) : "string" == typeof t ? function (e, t, r) { "string" == typeof r && "" !== r || (r = "utf8"); if (!f.isEncoding(r))
                                throw new TypeError('"encoding" must be a valid string encoding'); var n = 0 | p(t, r), i = (e = s(e, n)).write(t, r); i !== n && (e = e.slice(0, i)); return e; }(e, t, r) : function (e, t) { if (f.isBuffer(t)) {
                                var r = 0 | l(t.length);
                                return 0 === (e = s(e, r)).length ? e : (t.copy(e, 0, 0, r), e);
                            } if (t) {
                                if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t)
                                    return "number" != typeof t.length || (n = t.length) != n ? s(e, 0) : h(e, t);
                                if ("Buffer" === t.type && o(t.data))
                                    return h(e, t.data);
                            } var n; throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."); }(e, t); }
                            function u(e) { if ("number" != typeof e)
                                throw new TypeError('"size" argument must be a number'); if (e < 0)
                                throw new RangeError('"size" argument must not be negative'); }
                            function d(e, t) { if (u(t), e = s(e, t < 0 ? 0 : 0 | l(t)), !f.TYPED_ARRAY_SUPPORT)
                                for (var r = 0; r < t; ++r)
                                    e[r] = 0; return e; }
                            function h(e, t) { var r = t.length < 0 ? 0 : 0 | l(t.length); e = s(e, r); for (var n = 0; n < r; n += 1)
                                e[n] = 255 & t[n]; return e; }
                            function l(e) { if (e >= a())
                                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes"); return 0 | e; }
                            function p(e, t) { if (f.isBuffer(e))
                                return e.length; if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
                                return e.byteLength; "string" != typeof e && (e = "" + e); var r = e.length; if (0 === r)
                                return 0; for (var n = !1;;)
                                switch (t) {
                                    case "ascii":
                                    case "latin1":
                                    case "binary": return r;
                                    case "utf8":
                                    case "utf-8":
                                    case void 0: return z(e).length;
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le": return 2 * r;
                                    case "hex": return r >>> 1;
                                    case "base64": return q(e).length;
                                    default:
                                        if (n)
                                            return z(e).length;
                                        t = ("" + t).toLowerCase(), n = !0;
                                } }
                            function b(e, t, r) { var n = e[t]; e[t] = e[r], e[r] = n; }
                            function g(e, t, r, n, i) { if (0 === e.length)
                                return -1; if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                                if (i)
                                    return -1;
                                r = e.length - 1;
                            }
                            else if (r < 0) {
                                if (!i)
                                    return -1;
                                r = 0;
                            } if ("string" == typeof t && (t = f.from(t, n)), f.isBuffer(t))
                                return 0 === t.length ? -1 : v(e, t, r, n, i); if ("number" == typeof t)
                                return t &= 255, f.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : v(e, [t], r, n, i); throw new TypeError("val must be string, number or Buffer"); }
                            function v(e, t, r, n, i) { var o, a = 1, s = e.length, f = t.length; if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                                if (e.length < 2 || t.length < 2)
                                    return -1;
                                a = 2, s /= 2, f /= 2, r /= 2;
                            } function c(e, t) { return 1 === a ? e[t] : e.readUInt16BE(t * a); } if (i) {
                                var u = -1;
                                for (o = r; o < s; o++)
                                    if (c(e, o) === c(t, -1 === u ? 0 : o - u)) {
                                        if (-1 === u && (u = o), o - u + 1 === f)
                                            return u * a;
                                    }
                                    else
                                        -1 !== u && (o -= o - u), u = -1;
                            }
                            else
                                for (r + f > s && (r = s - f), o = r; o >= 0; o--) {
                                    for (var d = !0, h = 0; h < f; h++)
                                        if (c(e, o + h) !== c(t, h)) {
                                            d = !1;
                                            break;
                                        }
                                    if (d)
                                        return o;
                                } return -1; }
                            function y(e, t, r, n) { r = Number(r) || 0; var i = e.length - r; n ? (n = Number(n)) > i && (n = i) : n = i; var o = t.length; if (o % 2 != 0)
                                throw new TypeError("Invalid hex string"); n > o / 2 && (n = o / 2); for (var a = 0; a < n; ++a) {
                                var s = parseInt(t.substr(2 * a, 2), 16);
                                if (isNaN(s))
                                    return a;
                                e[r + a] = s;
                            } return a; }
                            function m(e, t, r, n) { return F(z(t, e.length - r), e, r, n); }
                            function _(e, t, r, n) { return F(function (e) { for (var t = [], r = 0; r < e.length; ++r)
                                t.push(255 & e.charCodeAt(r)); return t; }(t), e, r, n); }
                            function w(e, t, r, n) { return _(e, t, r, n); }
                            function E(e, t, r, n) { return F(q(t), e, r, n); }
                            function A(e, t, r, n) { return F(function (e, t) { for (var r, n, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a)
                                r = e.charCodeAt(a), n = r >> 8, i = r % 256, o.push(i), o.push(n); return o; }(t, e.length - r), e, r, n); }
                            function S(e, t, r) { return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r)); }
                            function x(e, t, r) { r = Math.min(e.length, r); for (var n = [], i = t; i < r;) {
                                var o, a, s, f, c = e[i], u = null, d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                                if (i + d <= r)
                                    switch (d) {
                                        case 1:
                                            c < 128 && (u = c);
                                            break;
                                        case 2:
                                            128 == (192 & (o = e[i + 1])) && (f = (31 & c) << 6 | 63 & o) > 127 && (u = f);
                                            break;
                                        case 3:
                                            o = e[i + 1], a = e[i + 2], 128 == (192 & o) && 128 == (192 & a) && (f = (15 & c) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (f < 55296 || f > 57343) && (u = f);
                                            break;
                                        case 4: o = e[i + 1], a = e[i + 2], s = e[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (f = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && f < 1114112 && (u = f);
                                    }
                                null === u ? (u = 65533, d = 1) : u > 65535 && (u -= 65536, n.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), n.push(u), i += d;
                            } return function (e) { var t = e.length; if (t <= M)
                                return String.fromCharCode.apply(String, e); var r = "", n = 0; for (; n < t;)
                                r += String.fromCharCode.apply(String, e.slice(n, n += M)); return r; }(n); }
                            t.Buffer = f, t.SlowBuffer = function (e) { +e != e && (e = 0); return f.alloc(+e); }, t.INSPECT_MAX_BYTES = 50, f.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () { try {
                                var e = new Uint8Array(1);
                                return e.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42; } }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
                            }
                            catch (e) {
                                return !1;
                            } }(), t.kMaxLength = a(), f.poolSize = 8192, f._augment = function (e) { return e.__proto__ = f.prototype, e; }, f.from = function (e, t, r) { return c(null, e, t, r); }, f.TYPED_ARRAY_SUPPORT && (f.prototype.__proto__ = Uint8Array.prototype, f.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && f[Symbol.species] === f && Object.defineProperty(f, Symbol.species, { value: null, configurable: !0 })), f.alloc = function (e, t, r) { return function (e, t, r, n) { return u(t), t <= 0 ? s(e, t) : void 0 !== r ? "string" == typeof n ? s(e, t).fill(r, n) : s(e, t).fill(r) : s(e, t); }(null, e, t, r); }, f.allocUnsafe = function (e) { return d(null, e); }, f.allocUnsafeSlow = function (e) { return d(null, e); }, f.isBuffer = function (e) { return !(null == e || !e._isBuffer); }, f.compare = function (e, t) { if (!f.isBuffer(e) || !f.isBuffer(t))
                                throw new TypeError("Arguments must be Buffers"); if (e === t)
                                return 0; for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
                                if (e[i] !== t[i]) {
                                    r = e[i], n = t[i];
                                    break;
                                } return r < n ? -1 : n < r ? 1 : 0; }, f.isEncoding = function (e) { switch (String(e).toLowerCase()) {
                                case "hex":
                                case "utf8":
                                case "utf-8":
                                case "ascii":
                                case "latin1":
                                case "binary":
                                case "base64":
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le": return !0;
                                default: return !1;
                            } }, f.concat = function (e, t) { if (!o(e))
                                throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === e.length)
                                return f.alloc(0); var r; if (void 0 === t)
                                for (t = 0, r = 0; r < e.length; ++r)
                                    t += e[r].length; var n = f.allocUnsafe(t), i = 0; for (r = 0; r < e.length; ++r) {
                                var a = e[r];
                                if (!f.isBuffer(a))
                                    throw new TypeError('"list" argument must be an Array of Buffers');
                                a.copy(n, i), i += a.length;
                            } return n; }, f.byteLength = p, f.prototype._isBuffer = !0, f.prototype.swap16 = function () { var e = this.length; if (e % 2 != 0)
                                throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var t = 0; t < e; t += 2)
                                b(this, t, t + 1); return this; }, f.prototype.swap32 = function () { var e = this.length; if (e % 4 != 0)
                                throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var t = 0; t < e; t += 4)
                                b(this, t, t + 3), b(this, t + 1, t + 2); return this; }, f.prototype.swap64 = function () { var e = this.length; if (e % 8 != 0)
                                throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var t = 0; t < e; t += 8)
                                b(this, t, t + 7), b(this, t + 1, t + 6), b(this, t + 2, t + 5), b(this, t + 3, t + 4); return this; }, f.prototype.toString = function () { var e = 0 | this.length; return 0 === e ? "" : 0 === arguments.length ? x(this, 0, e) : function (e, t, r) { var n = !1; if ((void 0 === t || t < 0) && (t = 0), t > this.length)
                                return ""; if ((void 0 === r || r > this.length) && (r = this.length), r <= 0)
                                return ""; if ((r >>>= 0) <= (t >>>= 0))
                                return ""; for (e || (e = "utf8");;)
                                switch (e) {
                                    case "hex": return T(this, t, r);
                                    case "utf8":
                                    case "utf-8": return x(this, t, r);
                                    case "ascii": return I(this, t, r);
                                    case "latin1":
                                    case "binary": return k(this, t, r);
                                    case "base64": return S(this, t, r);
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le": return L(this, t, r);
                                    default:
                                        if (n)
                                            throw new TypeError("Unknown encoding: " + e);
                                        e = (e + "").toLowerCase(), n = !0;
                                } }.apply(this, arguments); }, f.prototype.equals = function (e) { if (!f.isBuffer(e))
                                throw new TypeError("Argument must be a Buffer"); return this === e || 0 === f.compare(this, e); }, f.prototype.inspect = function () { var e = "", r = t.INSPECT_MAX_BYTES; return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (e += " ... ")), "<Buffer " + e + ">"; }, f.prototype.compare = function (e, t, r, n, i) { if (!f.isBuffer(e))
                                throw new TypeError("Argument must be a Buffer"); if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length)
                                throw new RangeError("out of range index"); if (n >= i && t >= r)
                                return 0; if (n >= i)
                                return -1; if (t >= r)
                                return 1; if (this === e)
                                return 0; for (var o = (i >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (t >>>= 0), s = Math.min(o, a), c = this.slice(n, i), u = e.slice(t, r), d = 0; d < s; ++d)
                                if (c[d] !== u[d]) {
                                    o = c[d], a = u[d];
                                    break;
                                } return o < a ? -1 : a < o ? 1 : 0; }, f.prototype.includes = function (e, t, r) { return -1 !== this.indexOf(e, t, r); }, f.prototype.indexOf = function (e, t, r) { return g(this, e, t, r, !0); }, f.prototype.lastIndexOf = function (e, t, r) { return g(this, e, t, r, !1); }, f.prototype.write = function (e, t, r, n) { if (void 0 === t)
                                n = "utf8", r = this.length, t = 0;
                            else if (void 0 === r && "string" == typeof t)
                                n = t, r = this.length, t = 0;
                            else {
                                if (!isFinite(t))
                                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
                            } var i = this.length - t; if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length)
                                throw new RangeError("Attempt to write outside buffer bounds"); n || (n = "utf8"); for (var o = !1;;)
                                switch (n) {
                                    case "hex": return y(this, e, t, r);
                                    case "utf8":
                                    case "utf-8": return m(this, e, t, r);
                                    case "ascii": return _(this, e, t, r);
                                    case "latin1":
                                    case "binary": return w(this, e, t, r);
                                    case "base64": return E(this, e, t, r);
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le": return A(this, e, t, r);
                                    default:
                                        if (o)
                                            throw new TypeError("Unknown encoding: " + n);
                                        n = ("" + n).toLowerCase(), o = !0;
                                } }, f.prototype.toJSON = function () { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) }; };
                            var M = 4096;
                            function I(e, t, r) { var n = ""; r = Math.min(e.length, r); for (var i = t; i < r; ++i)
                                n += String.fromCharCode(127 & e[i]); return n; }
                            function k(e, t, r) { var n = ""; r = Math.min(e.length, r); for (var i = t; i < r; ++i)
                                n += String.fromCharCode(e[i]); return n; }
                            function T(e, t, r) { var n = e.length; (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n); for (var i = "", o = t; o < r; ++o)
                                i += U(e[o]); return i; }
                            function L(e, t, r) { for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2)
                                i += String.fromCharCode(n[o] + 256 * n[o + 1]); return i; }
                            function P(e, t, r) { if (e % 1 != 0 || e < 0)
                                throw new RangeError("offset is not uint"); if (e + t > r)
                                throw new RangeError("Trying to access beyond buffer length"); }
                            function B(e, t, r, n, i, o) { if (!f.isBuffer(e))
                                throw new TypeError('"buffer" argument must be a Buffer instance'); if (t > i || t < o)
                                throw new RangeError('"value" argument is out of bounds'); if (r + n > e.length)
                                throw new RangeError("Index out of range"); }
                            function R(e, t, r, n) { t < 0 && (t = 65535 + t + 1); for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i)
                                e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i); }
                            function C(e, t, r, n) { t < 0 && (t = 4294967295 + t + 1); for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i)
                                e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255; }
                            function N(e, t, r, n, i, o) { if (r + n > e.length)
                                throw new RangeError("Index out of range"); if (r < 0)
                                throw new RangeError("Index out of range"); }
                            function O(e, t, r, n, o) { return o || N(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4; }
                            function j(e, t, r, n, o) { return o || N(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8; }
                            f.prototype.slice = function (e, t) { var r, n = this.length; if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), f.TYPED_ARRAY_SUPPORT)
                                (r = this.subarray(e, t)).__proto__ = f.prototype;
                            else {
                                var i = t - e;
                                r = new f(i, void 0);
                                for (var o = 0; o < i; ++o)
                                    r[o] = this[o + e];
                            } return r; }, f.prototype.readUIntLE = function (e, t, r) { e |= 0, t |= 0, r || P(e, t, this.length); for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);)
                                n += this[e + o] * i; return n; }, f.prototype.readUIntBE = function (e, t, r) { e |= 0, t |= 0, r || P(e, t, this.length); for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);)
                                n += this[e + --t] * i; return n; }, f.prototype.readUInt8 = function (e, t) { return t || P(e, 1, this.length), this[e]; }, f.prototype.readUInt16LE = function (e, t) { return t || P(e, 2, this.length), this[e] | this[e + 1] << 8; }, f.prototype.readUInt16BE = function (e, t) { return t || P(e, 2, this.length), this[e] << 8 | this[e + 1]; }, f.prototype.readUInt32LE = function (e, t) { return t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]; }, f.prototype.readUInt32BE = function (e, t) { return t || P(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]); }, f.prototype.readIntLE = function (e, t, r) { e |= 0, t |= 0, r || P(e, t, this.length); for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);)
                                n += this[e + o] * i; return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n; }, f.prototype.readIntBE = function (e, t, r) { e |= 0, t |= 0, r || P(e, t, this.length); for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);)
                                o += this[e + --n] * i; return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o; }, f.prototype.readInt8 = function (e, t) { return t || P(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]; }, f.prototype.readInt16LE = function (e, t) { t || P(e, 2, this.length); var r = this[e] | this[e + 1] << 8; return 32768 & r ? 4294901760 | r : r; }, f.prototype.readInt16BE = function (e, t) { t || P(e, 2, this.length); var r = this[e + 1] | this[e] << 8; return 32768 & r ? 4294901760 | r : r; }, f.prototype.readInt32LE = function (e, t) { return t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24; }, f.prototype.readInt32BE = function (e, t) { return t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]; }, f.prototype.readFloatLE = function (e, t) { return t || P(e, 4, this.length), i.read(this, e, !0, 23, 4); }, f.prototype.readFloatBE = function (e, t) { return t || P(e, 4, this.length), i.read(this, e, !1, 23, 4); }, f.prototype.readDoubleLE = function (e, t) { return t || P(e, 8, this.length), i.read(this, e, !0, 52, 8); }, f.prototype.readDoubleBE = function (e, t) { return t || P(e, 8, this.length), i.read(this, e, !1, 52, 8); }, f.prototype.writeUIntLE = function (e, t, r, n) { (e = +e, t |= 0, r |= 0, n) || B(this, e, t, r, Math.pow(2, 8 * r) - 1, 0); var i = 1, o = 0; for (this[t] = 255 & e; ++o < r && (i *= 256);)
                                this[t + o] = e / i & 255; return t + r; }, f.prototype.writeUIntBE = function (e, t, r, n) { (e = +e, t |= 0, r |= 0, n) || B(this, e, t, r, Math.pow(2, 8 * r) - 1, 0); var i = r - 1, o = 1; for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);)
                                this[t + i] = e / o & 255; return t + r; }, f.prototype.writeUInt8 = function (e, t, r) { return e = +e, t |= 0, r || B(this, e, t, 1, 255, 0), f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1; }, f.prototype.writeUInt16LE = function (e, t, r) { return e = +e, t |= 0, r || B(this, e, t, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2; }, f.prototype.writeUInt16BE = function (e, t, r) { return e = +e, t |= 0, r || B(this, e, t, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2; }, f.prototype.writeUInt32LE = function (e, t, r) { return e = +e, t |= 0, r || B(this, e, t, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : C(this, e, t, !0), t + 4; }, f.prototype.writeUInt32BE = function (e, t, r) { return e = +e, t |= 0, r || B(this, e, t, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : C(this, e, t, !1), t + 4; }, f.prototype.writeIntLE = function (e, t, r, n) { if (e = +e, t |= 0, !n) {
                                var i = Math.pow(2, 8 * r - 1);
                                B(this, e, t, r, i - 1, -i);
                            } var o = 0, a = 1, s = 0; for (this[t] = 255 & e; ++o < r && (a *= 256);)
                                e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255; return t + r; }, f.prototype.writeIntBE = function (e, t, r, n) { if (e = +e, t |= 0, !n) {
                                var i = Math.pow(2, 8 * r - 1);
                                B(this, e, t, r, i - 1, -i);
                            } var o = r - 1, a = 1, s = 0; for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);)
                                e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255; return t + r; }, f.prototype.writeInt8 = function (e, t, r) { return e = +e, t |= 0, r || B(this, e, t, 1, 127, -128), f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1; }, f.prototype.writeInt16LE = function (e, t, r) { return e = +e, t |= 0, r || B(this, e, t, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2; }, f.prototype.writeInt16BE = function (e, t, r) { return e = +e, t |= 0, r || B(this, e, t, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2; }, f.prototype.writeInt32LE = function (e, t, r) { return e = +e, t |= 0, r || B(this, e, t, 4, 2147483647, -2147483648), f.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : C(this, e, t, !0), t + 4; }, f.prototype.writeInt32BE = function (e, t, r) { return e = +e, t |= 0, r || B(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), f.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : C(this, e, t, !1), t + 4; }, f.prototype.writeFloatLE = function (e, t, r) { return O(this, e, t, !0, r); }, f.prototype.writeFloatBE = function (e, t, r) { return O(this, e, t, !1, r); }, f.prototype.writeDoubleLE = function (e, t, r) { return j(this, e, t, !0, r); }, f.prototype.writeDoubleBE = function (e, t, r) { return j(this, e, t, !1, r); }, f.prototype.copy = function (e, t, r, n) { if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r)
                                return 0; if (0 === e.length || 0 === this.length)
                                return 0; if (t < 0)
                                throw new RangeError("targetStart out of bounds"); if (r < 0 || r >= this.length)
                                throw new RangeError("sourceStart out of bounds"); if (n < 0)
                                throw new RangeError("sourceEnd out of bounds"); n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r); var i, o = n - r; if (this === e && r < t && t < n)
                                for (i = o - 1; i >= 0; --i)
                                    e[i + t] = this[i + r];
                            else if (o < 1e3 || !f.TYPED_ARRAY_SUPPORT)
                                for (i = 0; i < o; ++i)
                                    e[i + t] = this[i + r];
                            else
                                Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t); return o; }, f.prototype.fill = function (e, t, r, n) { if ("string" == typeof e) {
                                if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
                                    var i = e.charCodeAt(0);
                                    i < 256 && (e = i);
                                }
                                if (void 0 !== n && "string" != typeof n)
                                    throw new TypeError("encoding must be a string");
                                if ("string" == typeof n && !f.isEncoding(n))
                                    throw new TypeError("Unknown encoding: " + n);
                            }
                            else
                                "number" == typeof e && (e &= 255); if (t < 0 || this.length < t || this.length < r)
                                throw new RangeError("Out of range index"); if (r <= t)
                                return this; var o; if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                                for (o = t; o < r; ++o)
                                    this[o] = e;
                            else {
                                var a = f.isBuffer(e) ? e : z(new f(e, n).toString()), s = a.length;
                                for (o = 0; o < r - t; ++o)
                                    this[o + t] = a[o % s];
                            } return this; };
                            var D = /[^+\/0-9A-Za-z-_]/g;
                            function U(e) { return e < 16 ? "0" + e.toString(16) : e.toString(16); }
                            function z(e, t) { var r; t = t || 1 / 0; for (var n = e.length, i = null, o = [], a = 0; a < n; ++a) {
                                if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                                    if (!i) {
                                        if (r > 56319) {
                                            (t -= 3) > -1 && o.push(239, 191, 189);
                                            continue;
                                        }
                                        if (a + 1 === n) {
                                            (t -= 3) > -1 && o.push(239, 191, 189);
                                            continue;
                                        }
                                        i = r;
                                        continue;
                                    }
                                    if (r < 56320) {
                                        (t -= 3) > -1 && o.push(239, 191, 189), i = r;
                                        continue;
                                    }
                                    r = 65536 + (i - 55296 << 10 | r - 56320);
                                }
                                else
                                    i && (t -= 3) > -1 && o.push(239, 191, 189);
                                if (i = null, r < 128) {
                                    if ((t -= 1) < 0)
                                        break;
                                    o.push(r);
                                }
                                else if (r < 2048) {
                                    if ((t -= 2) < 0)
                                        break;
                                    o.push(r >> 6 | 192, 63 & r | 128);
                                }
                                else if (r < 65536) {
                                    if ((t -= 3) < 0)
                                        break;
                                    o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
                                }
                                else {
                                    if (!(r < 1114112))
                                        throw new Error("Invalid code point");
                                    if ((t -= 4) < 0)
                                        break;
                                    o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
                                }
                            } return o; }
                            function q(e) { return n.toByteArray(function (e) { if ((e = function (e) { return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, ""); }(e).replace(D, "")).length < 2)
                                return ""; for (; e.length % 4 != 0;)
                                e += "="; return e; }(e)); }
                            function F(e, t, r, n) { for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
                                t[i + r] = e[i]; return i; }
                        }).call(this, r(8));
                    }, function (e, t) { var r; r = function () { return this; }(); try {
                        r = r || new Function("return this")();
                    }
                    catch (e) {
                        "object" == typeof window && (r = window);
                    } e.exports = r; }, function (e, t, r) { (function (e) { var n = Object.getOwnPropertyDescriptors || function (e) { for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++)
                        r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]); return r; }, i = /%[sdj%]/g; t.format = function (e) { if (!v(e)) {
                        for (var t = [], r = 0; r < arguments.length; r++)
                            t.push(s(arguments[r]));
                        return t.join(" ");
                    } r = 1; for (var n = arguments, o = n.length, a = String(e).replace(i, function (e) { if ("%%" === e)
                        return "%"; if (r >= o)
                        return e; switch (e) {
                        case "%s": return String(n[r++]);
                        case "%d": return Number(n[r++]);
                        case "%j": try {
                            return JSON.stringify(n[r++]);
                        }
                        catch (e) {
                            return "[Circular]";
                        }
                        default: return e;
                    } }), f = n[r]; r < o; f = n[++r])
                        b(f) || !_(f) ? a += " " + f : a += " " + s(f); return a; }, t.deprecate = function (r, n) { if (void 0 !== e && !0 === e.noDeprecation)
                        return r; if (void 0 === e)
                        return function () { return t.deprecate(r, n).apply(this, arguments); }; var i = !1; return function () { if (!i) {
                        if (e.throwDeprecation)
                            throw new Error(n);
                        e.traceDeprecation ? console.trace(n) : console.error(n), i = !0;
                    } return r.apply(this, arguments); }; }; var o, a = {}; function s(e, r) { var n = { seen: [], stylize: c }; return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), p(r) ? n.showHidden = r : r && t._extend(n, r), y(n.showHidden) && (n.showHidden = !1), y(n.depth) && (n.depth = 2), y(n.colors) && (n.colors = !1), y(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = f), u(n, e, n.depth); } function f(e, t) { var r = s.styles[t]; return r ? "[" + s.colors[r][0] + "m" + e + "[" + s.colors[r][1] + "m" : e; } function c(e, t) { return e; } function u(e, r, n) { if (e.customInspect && r && A(r.inspect) && r.inspect !== t.inspect && (!r.constructor || r.constructor.prototype !== r)) {
                        var i = r.inspect(n, e);
                        return v(i) || (i = u(e, i, n)), i;
                    } var o = function (e, t) { if (y(t))
                        return e.stylize("undefined", "undefined"); if (v(t)) {
                        var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return e.stylize(r, "string");
                    } if (g(t))
                        return e.stylize("" + t, "number"); if (p(t))
                        return e.stylize("" + t, "boolean"); if (b(t))
                        return e.stylize("null", "null"); }(e, r); if (o)
                        return o; var a = Object.keys(r), s = function (e) { var t = {}; return e.forEach(function (e, r) { t[e] = !0; }), t; }(a); if (e.showHidden && (a = Object.getOwnPropertyNames(r)), E(r) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
                        return d(r); if (0 === a.length) {
                        if (A(r)) {
                            var f = r.name ? ": " + r.name : "";
                            return e.stylize("[Function" + f + "]", "special");
                        }
                        if (m(r))
                            return e.stylize(RegExp.prototype.toString.call(r), "regexp");
                        if (w(r))
                            return e.stylize(Date.prototype.toString.call(r), "date");
                        if (E(r))
                            return d(r);
                    } var c, _ = "", S = !1, x = ["{", "}"]; (l(r) && (S = !0, x = ["[", "]"]), A(r)) && (_ = " [Function" + (r.name ? ": " + r.name : "") + "]"); return m(r) && (_ = " " + RegExp.prototype.toString.call(r)), w(r) && (_ = " " + Date.prototype.toUTCString.call(r)), E(r) && (_ = " " + d(r)), 0 !== a.length || S && 0 != r.length ? n < 0 ? m(r) ? e.stylize(RegExp.prototype.toString.call(r), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(r), c = S ? function (e, t, r, n, i) { for (var o = [], a = 0, s = t.length; a < s; ++a)
                        I(t, String(a)) ? o.push(h(e, t, r, n, String(a), !0)) : o.push(""); return i.forEach(function (i) { i.match(/^\d+$/) || o.push(h(e, t, r, n, i, !0)); }), o; }(e, r, n, s, a) : a.map(function (t) { return h(e, r, n, s, t, S); }), e.seen.pop(), function (e, t, r) { if (e.reduce(function (e, t) { return 0, t.indexOf("\n") >= 0 && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1; }, 0) > 60)
                        return r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1]; return r[0] + t + " " + e.join(", ") + " " + r[1]; }(c, _, x)) : x[0] + _ + x[1]; } function d(e) { return "[" + Error.prototype.toString.call(e) + "]"; } function h(e, t, r, n, i, o) { var a, s, f; if ((f = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }).get ? s = f.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : f.set && (s = e.stylize("[Setter]", "special")), I(n, i) || (a = "[" + i + "]"), s || (e.seen.indexOf(f.value) < 0 ? (s = b(r) ? u(e, f.value, null) : u(e, f.value, r - 1)).indexOf("\n") > -1 && (s = o ? s.split("\n").map(function (e) { return "  " + e; }).join("\n").substr(2) : "\n" + s.split("\n").map(function (e) { return "   " + e; }).join("\n")) : s = e.stylize("[Circular]", "special")), y(a)) {
                        if (o && i.match(/^\d+$/))
                            return s;
                        (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"));
                    } return a + ": " + s; } function l(e) { return Array.isArray(e); } function p(e) { return "boolean" == typeof e; } function b(e) { return null === e; } function g(e) { return "number" == typeof e; } function v(e) { return "string" == typeof e; } function y(e) { return void 0 === e; } function m(e) { return _(e) && "[object RegExp]" === S(e); } function _(e) { return "object" == typeof e && null !== e; } function w(e) { return _(e) && "[object Date]" === S(e); } function E(e) { return _(e) && ("[object Error]" === S(e) || e instanceof Error); } function A(e) { return "function" == typeof e; } function S(e) { return Object.prototype.toString.call(e); } function x(e) { return e < 10 ? "0" + e.toString(10) : e.toString(10); } t.debuglog = function (r) { if (y(o) && (o = e.env.NODE_DEBUG || ""), r = r.toUpperCase(), !a[r])
                        if (new RegExp("\\b" + r + "\\b", "i").test(o)) {
                            var n = e.pid;
                            a[r] = function () { var e = t.format.apply(t, arguments); console.error("%s %d: %s", r, n, e); };
                        }
                        else
                            a[r] = function () { }; return a[r]; }, t.inspect = s, s.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, s.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, t.isArray = l, t.isBoolean = p, t.isNull = b, t.isNullOrUndefined = function (e) { return null == e; }, t.isNumber = g, t.isString = v, t.isSymbol = function (e) { return "symbol" == typeof e; }, t.isUndefined = y, t.isRegExp = m, t.isObject = _, t.isDate = w, t.isError = E, t.isFunction = A, t.isPrimitive = function (e) { return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e; }, t.isBuffer = r(97); var M = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; function I(e, t) { return Object.prototype.hasOwnProperty.call(e, t); } t.log = function () { var e, r; console.log("%s - %s", (e = new Date, r = [x(e.getHours()), x(e.getMinutes()), x(e.getSeconds())].join(":"), [e.getDate(), M[e.getMonth()], r].join(" ")), t.format.apply(t, arguments)); }, t.inherits = r(0), t._extend = function (e, t) { if (!t || !_(t))
                        return e; for (var r = Object.keys(t), n = r.length; n--;)
                        e[r[n]] = t[r[n]]; return e; }; var k = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0; function T(e, t) { if (!e) {
                        var r = new Error("Promise was rejected with a falsy value");
                        r.reason = e, e = r;
                    } return t(e); } t.promisify = function (e) { if ("function" != typeof e)
                        throw new TypeError('The "original" argument must be of type Function'); if (k && e[k]) {
                        var t;
                        if ("function" != typeof (t = e[k]))
                            throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                        return Object.defineProperty(t, k, { value: t, enumerable: !1, writable: !1, configurable: !0 }), t;
                    } function t() { for (var t, r, n = new Promise(function (e, n) { t = e, r = n; }), i = [], o = 0; o < arguments.length; o++)
                        i.push(arguments[o]); i.push(function (e, n) { e ? r(e) : t(n); }); try {
                        e.apply(this, i);
                    }
                    catch (e) {
                        r(e);
                    } return n; } return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), k && Object.defineProperty(t, k, { value: t, enumerable: !1, writable: !1, configurable: !0 }), Object.defineProperties(t, n(e)); }, t.promisify.custom = k, t.callbackify = function (t) { if ("function" != typeof t)
                        throw new TypeError('The "original" argument must be of type Function'); function r() { for (var r = [], n = 0; n < arguments.length; n++)
                        r.push(arguments[n]); var i = r.pop(); if ("function" != typeof i)
                        throw new TypeError("The last argument must be of type Function"); var o = this, a = function () { return i.apply(o, arguments); }; t.apply(this, r).then(function (t) { e.nextTick(a, null, t); }, function (t) { e.nextTick(T, t, a); }); } return Object.setPrototypeOf(r, Object.getPrototypeOf(t)), Object.defineProperties(r, n(t)), r; }; }).call(this, r(6)); }, function (e, t, r) {
                        "use strict";
                        var n = r(21), i = Object.keys || function (e) { var t = []; for (var r in e)
                            t.push(r); return t; };
                        e.exports = d;
                        var o = r(16);
                        o.inherits = r(0);
                        var a = r(52), s = r(29);
                        o.inherits(d, a);
                        for (var f = i(s.prototype), c = 0; c < f.length; c++) {
                            var u = f[c];
                            d.prototype[u] || (d.prototype[u] = s.prototype[u]);
                        }
                        function d(e) { if (!(this instanceof d))
                            return new d(e); a.call(this, e), s.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", h); }
                        function h() { this.allowHalfOpen || this._writableState.ended || n.nextTick(l, this); }
                        function l(e) { e.end(); }
                        Object.defineProperty(d.prototype, "writableHighWaterMark", { enumerable: !1, get: function () { return this._writableState.highWaterMark; } }), Object.defineProperty(d.prototype, "destroyed", { get: function () { return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed); }, set: function (e) { void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e); } }), d.prototype._destroy = function (e, t) { this.push(null), this.end(), n.nextTick(t, e); };
                    }, function (e, t) { function r(e, t) { if (!e)
                        throw new Error(t || "Assertion failed"); } e.exports = r, r.equal = function (e, t, r) { if (e != t)
                        throw new Error(r || "Assertion failed: " + e + " != " + t); }; }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.isAsync = void 0;
                        var n, i = r(182), o = (n = i) && n.__esModule ? n : { default: n };
                        var a = "function" == typeof Symbol;
                        function s(e) { return a && "AsyncFunction" === e[Symbol.toStringTag]; }
                        t.default = function (e) { return s(e) ? (0, o.default)(e) : e; }, t.isAsync = s;
                    }, function (e, t, r) {
                        "use strict";
                        var n, i = "object" == typeof Reflect ? Reflect : null, o = i && "function" == typeof i.apply ? i.apply : function (e, t, r) { return Function.prototype.apply.call(e, t, r); };
                        n = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function (e) { return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)); } : function (e) { return Object.getOwnPropertyNames(e); };
                        var a = Number.isNaN || function (e) { return e != e; };
                        function s() { s.init.call(this); }
                        e.exports = s, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
                        var f = 10;
                        function c(e) { return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners; }
                        function u(e, t, r, n) { var i, o, a, s; if ("function" != typeof r)
                            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r); if (void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), a = o[t]), void 0 === a)
                            a = o[t] = r, ++e._eventsCount;
                        else if ("function" == typeof a ? a = o[t] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), (i = c(e)) > 0 && a.length > i && !a.warned) {
                            a.warned = !0;
                            var f = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                            f.name = "MaxListenersExceededWarning", f.emitter = e, f.type = t, f.count = a.length, s = f, console && console.warn && console.warn(s);
                        } return e; }
                        function d(e, t, r) { var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, i = function () { for (var e = [], t = 0; t < arguments.length; t++)
                            e.push(arguments[t]); this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, o(this.listener, this.target, e)); }.bind(n); return i.listener = r, n.wrapFn = i, i; }
                        function h(e, t, r) { var n = e._events; if (void 0 === n)
                            return []; var i = n[t]; return void 0 === i ? [] : "function" == typeof i ? r ? [i.listener || i] : [i] : r ? function (e) { for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                            t[r] = e[r].listener || e[r]; return t; }(i) : p(i, i.length); }
                        function l(e) { var t = this._events; if (void 0 !== t) {
                            var r = t[e];
                            if ("function" == typeof r)
                                return 1;
                            if (void 0 !== r)
                                return r.length;
                        } return 0; }
                        function p(e, t) { for (var r = new Array(t), n = 0; n < t; ++n)
                            r[n] = e[n]; return r; }
                        Object.defineProperty(s, "defaultMaxListeners", { enumerable: !0, get: function () { return f; }, set: function (e) { if ("number" != typeof e || e < 0 || a(e))
                                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + "."); f = e; } }), s.init = function () { void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0; }, s.prototype.setMaxListeners = function (e) { if ("number" != typeof e || e < 0 || a(e))
                            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + "."); return this._maxListeners = e, this; }, s.prototype.getMaxListeners = function () { return c(this); }, s.prototype.emit = function (e) { for (var t = [], r = 1; r < arguments.length; r++)
                            t.push(arguments[r]); var n = "error" === e, i = this._events; if (void 0 !== i)
                            n = n && void 0 === i.error;
                        else if (!n)
                            return !1; if (n) {
                            var a;
                            if (t.length > 0 && (a = t[0]), a instanceof Error)
                                throw a;
                            var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
                            throw s.context = a, s;
                        } var f = i[e]; if (void 0 === f)
                            return !1; if ("function" == typeof f)
                            o(f, this, t);
                        else {
                            var c = f.length, u = p(f, c);
                            for (r = 0; r < c; ++r)
                                o(u[r], this, t);
                        } return !0; }, s.prototype.addListener = function (e, t) { return u(this, e, t, !1); }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function (e, t) { return u(this, e, t, !0); }, s.prototype.once = function (e, t) { if ("function" != typeof t)
                            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t); return this.on(e, d(this, e, t)), this; }, s.prototype.prependOnceListener = function (e, t) { if ("function" != typeof t)
                            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t); return this.prependListener(e, d(this, e, t)), this; }, s.prototype.removeListener = function (e, t) { var r, n, i, o, a; if ("function" != typeof t)
                            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t); if (void 0 === (n = this._events))
                            return this; if (void 0 === (r = n[e]))
                            return this; if (r === t || r.listener === t)
                            0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));
                        else if ("function" != typeof r) {
                            for (i = -1, o = r.length - 1; o >= 0; o--)
                                if (r[o] === t || r[o].listener === t) {
                                    a = r[o].listener, i = o;
                                    break;
                                }
                            if (i < 0)
                                return this;
                            0 === i ? r.shift() : function (e, t) { for (; t + 1 < e.length; t++)
                                e[t] = e[t + 1]; e.pop(); }(r, i), 1 === r.length && (n[e] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", e, a || t);
                        } return this; }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function (e) { var t, r, n; if (void 0 === (r = this._events))
                            return this; if (void 0 === r.removeListener)
                            return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this; if (0 === arguments.length) {
                            var i, o = Object.keys(r);
                            for (n = 0; n < o.length; ++n)
                                "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
                            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
                        } if ("function" == typeof (t = r[e]))
                            this.removeListener(e, t);
                        else if (void 0 !== t)
                            for (n = t.length - 1; n >= 0; n--)
                                this.removeListener(e, t[n]); return this; }, s.prototype.listeners = function (e) { return h(this, e, !0); }, s.prototype.rawListeners = function (e) { return h(this, e, !1); }, s.listenerCount = function (e, t) { return "function" == typeof e.listenerCount ? e.listenerCount(t) : l.call(e, t); }, s.prototype.listenerCount = l, s.prototype.eventNames = function () { return this._eventsCount > 0 ? n(this._events) : []; };
                    }, function (e, t, r) {
                        "use strict";
                        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, i = r(51), o = r(56), a = r(65), s = r(66), f = r(2), c = r(31), u = r(1).Buffer;
                        Object.assign(t, r(67)), t.MAX_INTEGER = new f("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), t.TWO_POW256 = new f("10000000000000000000000000000000000000000000000000000000000000000", 16), t.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", t.SHA3_NULL_S = t.KECCAK256_NULL_S, t.KECCAK256_NULL = u.from(t.KECCAK256_NULL_S, "hex"), t.SHA3_NULL = t.KECCAK256_NULL, t.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", t.SHA3_RLP_ARRAY_S = t.KECCAK256_RLP_ARRAY_S, t.KECCAK256_RLP_ARRAY = u.from(t.KECCAK256_RLP_ARRAY_S, "hex"), t.SHA3_RLP_ARRAY = t.KECCAK256_RLP_ARRAY, t.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", t.SHA3_RLP_S = t.KECCAK256_RLP_S, t.KECCAK256_RLP = u.from(t.KECCAK256_RLP_S, "hex"), t.SHA3_RLP = t.KECCAK256_RLP, t.BN = f, t.rlp = s, t.secp256k1 = o, t.zeros = function (e) { return u.allocUnsafe(e).fill(0); }, t.zeroAddress = function () { var e = t.zeros(20); return t.bufferToHex(e); }, t.setLengthLeft = t.setLength = function (e, r, n) { var i = t.zeros(r); return e = t.toBuffer(e), n ? e.length < r ? (e.copy(i), i) : e.slice(0, r) : e.length < r ? (e.copy(i, r - e.length), i) : e.slice(-r); }, t.setLengthRight = function (e, r) { return t.setLength(e, r, !0); }, t.unpad = t.stripZeros = function (e) { for (var r = (e = t.stripHexPrefix(e))[0]; e.length > 0 && "0" === r.toString();)
                            r = (e = e.slice(1))[0]; return e; }, t.toBuffer = function (e) { if (!u.isBuffer(e))
                            if (Array.isArray(e))
                                e = u.from(e);
                            else if ("string" == typeof e)
                                e = t.isHexString(e) ? u.from(t.padToEven(t.stripHexPrefix(e)), "hex") : u.from(e);
                            else if ("number" == typeof e)
                                e = t.intToBuffer(e);
                            else if (null == e)
                                e = u.allocUnsafe(0);
                            else if (f.isBN(e))
                                e = e.toArrayLike(u);
                            else {
                                if (!e.toArray)
                                    throw new Error("invalid type");
                                e = u.from(e.toArray());
                            } return e; }, t.bufferToInt = function (e) { return new f(t.toBuffer(e)).toNumber(); }, t.bufferToHex = function (e) { return "0x" + (e = t.toBuffer(e)).toString("hex"); }, t.fromSigned = function (e) { return new f(e).fromTwos(256); }, t.toUnsigned = function (e) { return u.from(e.toTwos(256).toArray()); }, t.keccak = function (e, r) { return e = t.toBuffer(e), r || (r = 256), i("keccak" + r).update(e).digest(); }, t.keccak256 = function (e) { return t.keccak(e); }, t.sha3 = t.keccak, t.sha256 = function (e) { return e = t.toBuffer(e), c("sha256").update(e).digest(); }, t.ripemd160 = function (e, r) { e = t.toBuffer(e); var n = c("rmd160").update(e).digest(); return !0 === r ? t.setLength(n, 32) : n; }, t.rlphash = function (e) { return t.keccak(s.encode(e)); }, t.isValidPrivate = function (e) { return o.privateKeyVerify(e); }, t.isValidPublic = function (e, t) { return 64 === e.length ? o.publicKeyVerify(u.concat([u.from([4]), e])) : !!t && o.publicKeyVerify(e); }, t.pubToAddress = t.publicToAddress = function (e, r) { return e = t.toBuffer(e), r && 64 !== e.length && (e = o.publicKeyConvert(e, !1).slice(1)), a(64 === e.length), t.keccak(e).slice(-20); };
                        var d = t.privateToPublic = function (e) { return e = t.toBuffer(e), o.publicKeyCreate(e, !1).slice(1); };
                        t.importPublic = function (e) { return 64 !== (e = t.toBuffer(e)).length && (e = o.publicKeyConvert(e, !1).slice(1)), e; }, t.ecsign = function (e, t) { var r = o.sign(e, t), n = {}; return n.r = r.signature.slice(0, 32), n.s = r.signature.slice(32, 64), n.v = r.recovery + 27, n; }, t.hashPersonalMessage = function (e) { var r = t.toBuffer("Ethereum Signed Message:\n" + e.length.toString()); return t.keccak(u.concat([r, e])); }, t.ecrecover = function (e, r, n, i) { var a = u.concat([t.setLength(n, 32), t.setLength(i, 32)], 64), s = r - 27; if (0 !== s && 1 !== s)
                            throw new Error("Invalid signature v value"); var f = o.recover(e, a, s); return o.publicKeyConvert(f, !1).slice(1); }, t.toRpcSig = function (e, r, n) { if (27 !== e && 28 !== e)
                            throw new Error("Invalid recovery id"); return t.bufferToHex(u.concat([t.setLengthLeft(r, 32), t.setLengthLeft(n, 32), t.toBuffer(e - 27)])); }, t.fromRpcSig = function (e) { if (65 !== (e = t.toBuffer(e)).length)
                            throw new Error("Invalid signature length"); var r = e[64]; return r < 27 && (r += 27), { v: r, r: e.slice(0, 32), s: e.slice(32, 64) }; }, t.privateToAddress = function (e) { return t.publicToAddress(d(e)); }, t.isValidAddress = function (e) { return /^0x[0-9a-fA-F]{40}$/.test(e); }, t.isZeroAddress = function (e) { return t.zeroAddress() === t.addHexPrefix(e); }, t.toChecksumAddress = function (e) { e = t.stripHexPrefix(e).toLowerCase(); for (var r = t.keccak(e).toString("hex"), n = "0x", i = 0; i < e.length; i++)
                            parseInt(r[i], 16) >= 8 ? n += e[i].toUpperCase() : n += e[i]; return n; }, t.isValidChecksumAddress = function (e) { return t.isValidAddress(e) && t.toChecksumAddress(e) === e; }, t.generateAddress = function (e, r) { return e = t.toBuffer(e), r = (r = new f(r)).isZero() ? null : u.from(r.toArray()), t.rlphash([e, r]).slice(-20); }, t.isPrecompiled = function (e) { var r = t.unpad(e); return 1 === r.length && r[0] >= 1 && r[0] <= 8; }, t.addHexPrefix = function (e) { return "string" != typeof e ? e : t.isHexPrefixed(e) ? e : "0x" + e; }, t.isValidSignature = function (e, t, r, n) { var i = new f("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16), o = new f("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16); return 32 === t.length && 32 === r.length && ((27 === e || 28 === e) && (t = new f(t), r = new f(r), !(t.isZero() || t.gt(o) || r.isZero() || r.gt(o)) && (!1 !== n || 1 !== new f(r).cmp(i)))); }, t.baToJSON = function (e) { if (u.isBuffer(e))
                            return "0x" + e.toString("hex"); if (e instanceof Array) {
                            for (var r = [], n = 0; n < e.length; n++)
                                r.push(t.baToJSON(e[n]));
                            return r;
                        } }, t.defineProperties = function (e, r, i) { if (e.raw = [], e._fields = [], e.toJSON = function (r) { if (r) {
                            var n = {};
                            return e._fields.forEach(function (t) { n[t] = "0x" + e[t].toString("hex"); }), n;
                        } return t.baToJSON(this.raw); }, e.serialize = function () { return s.encode(e.raw); }, r.forEach(function (r, n) { function i() { return e.raw[n]; } function o(i) { "00" !== (i = t.toBuffer(i)).toString("hex") || r.allowZero || (i = u.allocUnsafe(0)), r.allowLess && r.length ? (i = t.stripZeros(i), a(r.length >= i.length, "The field " + r.name + " must not have more " + r.length + " bytes")) : r.allowZero && 0 === i.length || !r.length || a(r.length === i.length, "The field " + r.name + " must have byte length of " + r.length), e.raw[n] = i; } e._fields.push(r.name), Object.defineProperty(e, r.name, { enumerable: !0, configurable: !0, get: i, set: o }), r.default && (e[r.name] = r.default), r.alias && Object.defineProperty(e, r.alias, { enumerable: !1, configurable: !0, set: o, get: i }); }), i)
                            if ("string" == typeof i && (i = u.from(t.stripHexPrefix(i), "hex")), u.isBuffer(i) && (i = s.decode(i)), Array.isArray(i)) {
                                if (i.length > e._fields.length)
                                    throw new Error("wrong number of fields in data");
                                i.forEach(function (r, n) { e[e._fields[n]] = t.toBuffer(r); });
                            }
                            else {
                                if ("object" !== (void 0 === i ? "undefined" : n(i)))
                                    throw new Error("invalid data");
                                var o = Object.keys(i);
                                r.forEach(function (t) { -1 !== o.indexOf(t.name) && (e[t.name] = i[t.name]), -1 !== o.indexOf(t.alias) && (e[t.alias] = i[t.alias]); });
                            } };
                    }, function (e, t, r) { var n = r(1).Buffer; function i(e, t) { this._block = n.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0; } i.prototype.update = function (e, t) { "string" == typeof e && (t = t || "utf8", e = n.from(e, t)); for (var r = this._block, i = this._blockSize, o = e.length, a = this._len, s = 0; s < o;) {
                        for (var f = a % i, c = Math.min(o - s, i - f), u = 0; u < c; u++)
                            r[f + u] = e[s + u];
                        s += c, (a += c) % i == 0 && this._update(r);
                    } return this._len += o, this; }, i.prototype.digest = function (e) { var t = this._len % this._blockSize; this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0)); var r = 8 * this._len; if (r <= 4294967295)
                        this._block.writeUInt32BE(r, this._blockSize - 4);
                    else {
                        var n = (4294967295 & r) >>> 0, i = (r - n) / 4294967296;
                        this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4);
                    } this._update(this._block); var o = this._hash(); return e ? o.toString(e) : o; }, i.prototype._update = function () { throw new Error("_update must be implemented by subclass"); }, e.exports = i; }, function (e, t, r) { (function (e) { function r(e) { return Object.prototype.toString.call(e); } t.isArray = function (e) { return Array.isArray ? Array.isArray(e) : "[object Array]" === r(e); }, t.isBoolean = function (e) { return "boolean" == typeof e; }, t.isNull = function (e) { return null === e; }, t.isNullOrUndefined = function (e) { return null == e; }, t.isNumber = function (e) { return "number" == typeof e; }, t.isString = function (e) { return "string" == typeof e; }, t.isSymbol = function (e) { return "symbol" == typeof e; }, t.isUndefined = function (e) { return void 0 === e; }, t.isRegExp = function (e) { return "[object RegExp]" === r(e); }, t.isObject = function (e) { return "object" == typeof e && null !== e; }, t.isDate = function (e) { return "[object Date]" === r(e); }, t.isError = function (e) { return "[object Error]" === r(e) || e instanceof Error; }, t.isFunction = function (e) { return "function" == typeof e; }, t.isPrimitive = function (e) { return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e; }, t.isBuffer = e.isBuffer; }).call(this, r(7).Buffer); }, function (e, t, r) {
                        "use strict";
                        var n = r(5), i = r(11);
                        function o() { this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32; }
                        t.BlockHash = o, o.prototype.update = function (e, t) { if (e = n.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
                            var r = (e = this.pending).length % this._delta8;
                            this.pending = e.slice(e.length - r, e.length), 0 === this.pending.length && (this.pending = null), e = n.join32(e, 0, e.length - r, this.endian);
                            for (var i = 0; i < e.length; i += this._delta32)
                                this._update(e, i, i + this._delta32);
                        } return this; }, o.prototype.digest = function (e) { return this.update(this._pad()), i(null === this.pending), this._digest(e); }, o.prototype._pad = function () { var e = this.pendingTotal, t = this._delta8, r = t - (e + this.padLength) % t, n = new Array(r + this.padLength); n[0] = 128; for (var i = 1; i < r; i++)
                            n[i] = 0; if (e <<= 3, "big" === this.endian) {
                            for (var o = 8; o < this.padLength; o++)
                                n[i++] = 0;
                            n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = e >>> 24 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 8 & 255, n[i++] = 255 & e;
                        }
                        else
                            for (n[i++] = 255 & e, n[i++] = e >>> 8 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, o = 8; o < this.padLength; o++)
                                n[i++] = 0; return n; };
                    }, function (e, t) { e.exports = function () { }; }, function (e, t) { function r(e) { return e.sort(function (e, t) { return "latest" === e || "earliest" === t ? 1 : "latest" === t || "earliest" === e ? -1 : n(e) - n(t); }); } function n(e) { return null == e ? e : Number.parseInt(e, 16); } function i(e) { if (null == e)
                        return e; var t = e.toString(16); return t.length % 2 && (t = "0" + t), "0x" + t; } function o() { return Math.floor(16 * Math.random()).toString(16); } e.exports = { minBlockRef: function () {
                            var e = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                e[_i] = arguments[_i];
                            }
                            return r(e)[0];
                        }, maxBlockRef: function () {
                            var e = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                e[_i] = arguments[_i];
                            }
                            var t = r(e);
                            return t[t.length - 1];
                        }, sortBlockRefs: r, bnToHex: function (e) { return "0x" + e.toString(16); }, blockRefIsNumber: function (e) { return e && !["earliest", "latest", "pending"].includes(e); }, hexToInt: n, incrementHexInt: function (e) { if (null == e)
                            return e; return i(n(e) + 1); }, intToHex: i, unsafeRandomBytes: function (e) { var t = "0x"; for (var r_1 = 0; r_1 < e; r_1++)
                            t += o(), t += o(); return t; } }; }, function (e, t, r) { e.exports = i; var n = r(13).EventEmitter; function i() { n.call(this); } r(0)(i, n), i.Readable = r(28), i.Writable = r(110), i.Duplex = r(111), i.Transform = r(112), i.PassThrough = r(113), i.Stream = i, i.prototype.pipe = function (e, t) { var r = this; function i(t) { e.writable && !1 === e.write(t) && r.pause && r.pause(); } function o() { r.readable && r.resume && r.resume(); } r.on("data", i), e.on("drain", o), e._isStdio || t && !1 === t.end || (r.on("end", s), r.on("close", f)); var a = !1; function s() { a || (a = !0, e.end()); } function f() { a || (a = !0, "function" == typeof e.destroy && e.destroy()); } function c(e) { if (u(), 0 === n.listenerCount(this, "error"))
                        throw e; } function u() { r.removeListener("data", i), e.removeListener("drain", o), r.removeListener("end", s), r.removeListener("close", f), r.removeListener("error", c), e.removeListener("error", c), r.removeListener("end", u), r.removeListener("close", u), e.removeListener("close", u); } return r.on("error", c), e.on("error", c), r.on("end", u), r.on("close", u), e.on("close", u), e.emit("pipe", r), e; }; }, function (e, t, r) {
                        "use strict";
                        (function (t) { !t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = { nextTick: function (e, r, n, i) { if ("function" != typeof e)
                                throw new TypeError('"callback" argument must be a function'); var o, a, s = arguments.length; switch (s) {
                                case 0:
                                case 1: return t.nextTick(e);
                                case 2: return t.nextTick(function () { e.call(null, r); });
                                case 3: return t.nextTick(function () { e.call(null, r, n); });
                                case 4: return t.nextTick(function () { e.call(null, r, n, i); });
                                default:
                                    for (o = new Array(s - 1), a = 0; a < o.length;)
                                        o[a++] = arguments[a];
                                    return t.nextTick(function () { e.apply(null, o); });
                            } } } : e.exports = t; }).call(this, r(6));
                    }, function (e, t, r) { (function (e) { var n = void 0 !== e && e || "undefined" != typeof self && self || window, i = Function.prototype.apply; function o(e, t) { this._id = e, this._clearFn = t; } t.setTimeout = function () { return new o(i.call(setTimeout, n, arguments), clearTimeout); }, t.setInterval = function () { return new o(i.call(setInterval, n, arguments), clearInterval); }, t.clearTimeout = t.clearInterval = function (e) { e && e.close(); }, o.prototype.unref = o.prototype.ref = function () { }, o.prototype.close = function () { this._clearFn.call(n, this._id); }, t.enroll = function (e, t) { clearTimeout(e._idleTimeoutId), e._idleTimeout = t; }, t.unenroll = function (e) { clearTimeout(e._idleTimeoutId), e._idleTimeout = -1; }, t._unrefActive = t.active = function (e) { clearTimeout(e._idleTimeoutId); var t = e._idleTimeout; t >= 0 && (e._idleTimeoutId = setTimeout(function () { e._onTimeout && e._onTimeout(); }, t)); }, r(107), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate; }).call(this, r(8)); }, function (e, t) { e.exports = function (e) { return e.webpackPolyfill || (e.deprecate = function () { }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function () { return e.l; } }), Object.defineProperty(e, "id", { enumerable: !0, get: function () { return e.i; } }), e.webpackPolyfill = 1), e; }; }, function (e, t, r) {
                        "use strict";
                        var n = t;
                        n.base = r(135), n.short = r(136), n.mont = r(137), n.edwards = r(138);
                    }, function (e, t, r) { var n = r(160), i = r(75); e.exports = function (e) { return null != e && i(e.length) && !n(e); }; }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t) { t |= 0; for (var r = Math.max(e.length - t, 0), n = Array(r), i = 0; i < r; i++)
                            n[i] = e[t + i]; return n; }, e.exports = t.default;
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(40);
                        function i() { }
                        e.exports = i, i.prototype.setEngine = function (e) { var t = this; t.engine || (t.engine = e, e.on("block", function (e) { t.currentBlock = e; }), e.on("start", function () { t.start(); }), e.on("stop", function () { t.stop(); })); }, i.prototype.handleRequest = function (e, t, r) { throw new Error("Subproviders should override `handleRequest`."); }, i.prototype.emitPayload = function (e, t) { this.engine.sendAsync(n(e), t); }, i.prototype.stop = function () { }, i.prototype.start = function () { };
                    }, function (e, t, r) { (t = e.exports = r(52)).Stream = t, t.Readable = t, t.Writable = r(29), t.Duplex = r(10), t.Transform = r(55), t.PassThrough = r(109); }, function (e, t, r) {
                        "use strict";
                        (function (t, n, i) { var o = r(21); function a(e) { var t = this; this.next = null, this.entry = null, this.finish = function () { !function (e, t, r) { var n = e.entry; e.entry = null; for (; n;) {
                            var i = n.callback;
                            t.pendingcb--, i(r), n = n.next;
                        } t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e; }(t, e); }; } e.exports = y; var s, f = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? n : o.nextTick; y.WritableState = v; var c = r(16); c.inherits = r(0); var u = { deprecate: r(108) }, d = r(53), h = r(1).Buffer, l = i.Uint8Array || function () { }; var p, b = r(54); function g() { } function v(e, t) { s = s || r(10), e = e || {}; var n = t instanceof s; this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.writableObjectMode); var i = e.highWaterMark, c = e.writableHighWaterMark, u = this.objectMode ? 16 : 16384; this.highWaterMark = i || 0 === i ? i : n && (c || 0 === c) ? c : u, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1; var d = !1 === e.decodeStrings; this.decodeStrings = !d, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) { !function (e, t) { var r = e._writableState, n = r.sync, i = r.writecb; if (function (e) { e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0; }(r), t)
                            !function (e, t, r, n, i) { --t.pendingcb, r ? (o.nextTick(i, n), o.nextTick(S, e, t), e._writableState.errorEmitted = !0, e.emit("error", n)) : (i(n), e._writableState.errorEmitted = !0, e.emit("error", n), S(e, t)); }(e, r, n, t, i);
                        else {
                            var a = E(r);
                            a || r.corked || r.bufferProcessing || !r.bufferedRequest || w(e, r), n ? f(_, e, r, a, i) : _(e, r, a, i);
                        } }(t, e); }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new a(this); } function y(e) { if (s = s || r(10), !(p.call(y, this) || this instanceof s))
                            return new y(e); this._writableState = new v(e, this), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), d.call(this); } function m(e, t, r, n, i, o, a) { t.writelen = n, t.writecb = a, t.writing = !0, t.sync = !0, r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1; } function _(e, t, r, n) { r || function (e, t) { 0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain")); }(e, t), t.pendingcb--, n(), S(e, t); } function w(e, t) { t.bufferProcessing = !0; var r = t.bufferedRequest; if (e._writev && r && r.next) {
                            var n = t.bufferedRequestCount, i = new Array(n), o = t.corkedRequestsFree;
                            o.entry = r;
                            for (var s = 0, f = !0; r;)
                                i[s] = r, r.isBuf || (f = !1), r = r.next, s += 1;
                            i.allBuffers = f, m(e, t, !0, t.length, i, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new a(t), t.bufferedRequestCount = 0;
                        }
                        else {
                            for (; r;) {
                                var c = r.chunk, u = r.encoding, d = r.callback;
                                if (m(e, t, !1, t.objectMode ? 1 : c.length, c, u, d), r = r.next, t.bufferedRequestCount--, t.writing)
                                    break;
                            }
                            null === r && (t.lastBufferedRequest = null);
                        } t.bufferedRequest = r, t.bufferProcessing = !1; } function E(e) { return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing; } function A(e, t) { e._final(function (r) { t.pendingcb--, r && e.emit("error", r), t.prefinished = !0, e.emit("prefinish"), S(e, t); }); } function S(e, t) { var r = E(t); return r && (!function (e, t) { t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, o.nextTick(A, e, t)) : (t.prefinished = !0, e.emit("prefinish"))); }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), r; } c.inherits(y, d), v.prototype.getBuffer = function () { for (var e = this.bufferedRequest, t = []; e;)
                            t.push(e), e = e.next; return t; }, function () { try {
                            Object.defineProperty(v.prototype, "buffer", { get: u.deprecate(function () { return this.getBuffer(); }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
                        }
                        catch (e) { } }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (p = Function.prototype[Symbol.hasInstance], Object.defineProperty(y, Symbol.hasInstance, { value: function (e) { return !!p.call(this, e) || this === y && (e && e._writableState instanceof v); } })) : p = function (e) { return e instanceof this; }, y.prototype.pipe = function () { this.emit("error", new Error("Cannot pipe, not readable")); }, y.prototype.write = function (e, t, r) { var n, i = this._writableState, a = !1, s = !i.objectMode && (n = e, h.isBuffer(n) || n instanceof l); return s && !h.isBuffer(e) && (e = function (e) { return h.from(e); }(e)), "function" == typeof t && (r = t, t = null), s ? t = "buffer" : t || (t = i.defaultEncoding), "function" != typeof r && (r = g), i.ended ? function (e, t) { var r = new Error("write after end"); e.emit("error", r), o.nextTick(t, r); }(this, r) : (s || function (e, t, r, n) { var i = !0, a = !1; return null === r ? a = new TypeError("May not write null values to stream") : "string" == typeof r || void 0 === r || t.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")), a && (e.emit("error", a), o.nextTick(n, a), i = !1), i; }(this, i, e, r)) && (i.pendingcb++, a = function (e, t, r, n, i, o) { if (!r) {
                            var a = function (e, t, r) { e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = h.from(t, r)); return t; }(t, n, i);
                            n !== a && (r = !0, i = "buffer", n = a);
                        } var s = t.objectMode ? 1 : n.length; t.length += s; var f = t.length < t.highWaterMark; f || (t.needDrain = !0); if (t.writing || t.corked) {
                            var c = t.lastBufferedRequest;
                            t.lastBufferedRequest = { chunk: n, encoding: i, isBuf: r, callback: o, next: null }, c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
                        }
                        else
                            m(e, t, !1, s, n, i, o); return f; }(this, i, s, e, t, r)), a; }, y.prototype.cork = function () { this._writableState.corked++; }, y.prototype.uncork = function () { var e = this._writableState; e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || w(this, e)); }, y.prototype.setDefaultEncoding = function (e) { if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                            throw new TypeError("Unknown encoding: " + e); return this._writableState.defaultEncoding = e, this; }, Object.defineProperty(y.prototype, "writableHighWaterMark", { enumerable: !1, get: function () { return this._writableState.highWaterMark; } }), y.prototype._write = function (e, t, r) { r(new Error("_write() is not implemented")); }, y.prototype._writev = null, y.prototype.end = function (e, t, r) { var n = this._writableState; "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || n.finished || function (e, t, r) { t.ending = !0, S(e, t), r && (t.finished ? o.nextTick(r) : e.once("finish", r)); t.ended = !0, e.writable = !1; }(this, n, r); }, Object.defineProperty(y.prototype, "destroyed", { get: function () { return void 0 !== this._writableState && this._writableState.destroyed; }, set: function (e) { this._writableState && (this._writableState.destroyed = e); } }), y.prototype.destroy = b.destroy, y.prototype._undestroy = b.undestroy, y.prototype._destroy = function (e, t) { this.end(), t(e); }; }).call(this, r(6), r(22).setImmediate, r(8));
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(1).Buffer, i = n.isEncoding || function (e) { switch ((e = "" + e) && e.toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                            case "raw": return !0;
                            default: return !1;
                        } };
                        function o(e) { var t; switch ((this.encoding = function (e) { var t = function (e) { if (!e)
                            return "utf8"; for (var t;;)
                            switch (e) {
                                case "utf8":
                                case "utf-8": return "utf8";
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le": return "utf16le";
                                case "latin1":
                                case "binary": return "latin1";
                                case "base64":
                                case "ascii":
                                case "hex": return e;
                                default:
                                    if (t)
                                        return;
                                    e = ("" + e).toLowerCase(), t = !0;
                            } }(e); if ("string" != typeof t && (n.isEncoding === i || !i(e)))
                            throw new Error("Unknown encoding: " + e); return t || e; }(e), this.encoding)) {
                            case "utf16le":
                                this.text = f, this.end = c, t = 4;
                                break;
                            case "utf8":
                                this.fillLast = s, t = 4;
                                break;
                            case "base64":
                                this.text = u, this.end = d, t = 3;
                                break;
                            default: return this.write = h, void (this.end = l);
                        } this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t); }
                        function a(e) { return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2; }
                        function s(e) { var t = this.lastTotal - this.lastNeed, r = function (e, t, r) { if (128 != (192 & t[0]))
                            return e.lastNeed = 0, "�"; if (e.lastNeed > 1 && t.length > 1) {
                            if (128 != (192 & t[1]))
                                return e.lastNeed = 1, "�";
                            if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                                return e.lastNeed = 2, "�";
                        } }(this, e); return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void (this.lastNeed -= e.length)); }
                        function f(e, t) { if ((e.length - t) % 2 == 0) {
                            var r = e.toString("utf16le", t);
                            if (r) {
                                var n = r.charCodeAt(r.length - 1);
                                if (n >= 55296 && n <= 56319)
                                    return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1);
                            }
                            return r;
                        } return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1); }
                        function c(e) { var t = e && e.length ? this.write(e) : ""; if (this.lastNeed) {
                            var r = this.lastTotal - this.lastNeed;
                            return t + this.lastChar.toString("utf16le", 0, r);
                        } return t; }
                        function u(e, t) { var r = (e.length - t) % 3; return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r)); }
                        function d(e) { var t = e && e.length ? this.write(e) : ""; return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t; }
                        function h(e) { return e.toString(this.encoding); }
                        function l(e) { return e && e.length ? this.write(e) : ""; }
                        t.StringDecoder = o, o.prototype.write = function (e) { if (0 === e.length)
                            return ""; var t, r; if (this.lastNeed) {
                            if (void 0 === (t = this.fillLast(e)))
                                return "";
                            r = this.lastNeed, this.lastNeed = 0;
                        }
                        else
                            r = 0; return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""; }, o.prototype.end = function (e) { var t = e && e.length ? this.write(e) : ""; return this.lastNeed ? t + "�" : t; }, o.prototype.text = function (e, t) { var r = function (e, t, r) { var n = t.length - 1; if (n < r)
                            return 0; var i = a(t[n]); if (i >= 0)
                            return i > 0 && (e.lastNeed = i - 1), i; if (--n < r || -2 === i)
                            return 0; if ((i = a(t[n])) >= 0)
                            return i > 0 && (e.lastNeed = i - 2), i; if (--n < r || -2 === i)
                            return 0; if ((i = a(t[n])) >= 0)
                            return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i; return 0; }(this, e, t); if (!this.lastNeed)
                            return e.toString("utf8", t); this.lastTotal = r; var n = e.length - (r - this.lastNeed); return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n); }, o.prototype.fillLast = function (e) { if (this.lastNeed <= e.length)
                            return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal); e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length; };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(0), i = r(122), o = r(123), a = r(124), s = r(129);
                        function f(e) { s.call(this, "digest"), this._hash = e; }
                        n(f, s), f.prototype._update = function (e) { this._hash.update(e); }, f.prototype._final = function () { return this._hash.digest(); }, e.exports = function (e) { return "md5" === (e = e.toLowerCase()) ? new i : "rmd160" === e || "ripemd160" === e ? new o : new f(a(e)); };
                    }, function (e, t, r) { var n = t; n.utils = r(5), n.common = r(17), n.sha = r(140), n.ripemd = r(144), n.hmac = r(145), n.sha1 = n.sha.sha1, n.sha256 = n.sha.sha256, n.sha224 = n.sha.sha224, n.sha384 = n.sha.sha384, n.sha512 = n.sha.sha512, n.ripemd160 = n.ripemd.ripemd160; }, function (e, t, r) {
                        "use strict";
                        var n = function (e, t) { return (function () {
                            var _this = this;
                            var r = t.promiseModule, n = new Array(arguments.length);
                            for (var e_1 = 0; e_1 < arguments.length; e_1++)
                                n[e_1] = arguments[e_1];
                            return new r(function (r, i) { t.errorFirst ? n.push(function (e, n) { if (t.multiArgs) {
                                var t_1 = new Array(arguments.length - 1);
                                for (var e_2 = 1; e_2 < arguments.length; e_2++)
                                    t_1[e_2 - 1] = arguments[e_2];
                                e ? (t_1.unshift(e), i(t_1)) : r(t_1);
                            }
                            else
                                e ? i(e) : r(n); }) : n.push(function (e) { if (t.multiArgs) {
                                var e_3 = new Array(arguments.length - 1);
                                for (var t_2 = 0; t_2 < arguments.length; t_2++)
                                    e_3[t_2] = arguments[t_2];
                                r(e_3);
                            }
                            else
                                r(e); }), e.apply(_this, n); });
                        }); };
                        e.exports = (function (e, t) { t = Object.assign({ exclude: [/.+(Sync|Stream)$/], errorFirst: !0, promiseModule: Promise }, t); var r = function (e) { var r = function (t) { return "string" == typeof t ? e === t : t.test(e); }; return t.include ? t.include.some(r) : !t.exclude.some(r); }; var i; i = "function" == typeof e ? function () { return t.excludeMain ? e.apply(this, arguments) : n(e, t).apply(this, arguments); } : Object.create(Object.getPrototypeOf(e)); for (var o in e) {
                            var a = e[o];
                            i[o] = "function" == typeof a && r(o) ? n(a, t) : a;
                        } return i; });
                    }, function (e, t) { e.exports = function () { for (var e = {}, t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n)
                            r.call(n, i) && (e[i] = n[i]);
                    } return e; }; var r = Object.prototype.hasOwnProperty; }, function (e, t, r) { var n = r(9), i = r(13); var o = "object" == typeof Reflect ? Reflect : null, a = o && "function" == typeof o.apply ? o.apply : function (e, t, r) { return Function.prototype.apply.call(e, t, r); }; function s() { i.call(this); } function f(e, t, r) { try {
                        a(e, t, r);
                    }
                    catch (e) {
                        setTimeout(function () { throw e; });
                    } } e.exports = s, n.inherits(s, i), s.prototype.emit = function (e) { for (var t = [], r = 1; r < arguments.length; r++)
                        t.push(arguments[r]); var n = "error" === e, i = this._events; if (void 0 !== i)
                        n = n && void 0 === i.error;
                    else if (!n)
                        return !1; if (n) {
                        var o;
                        if (t.length > 0 && (o = t[0]), o instanceof Error)
                            throw o;
                        var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                        throw a.context = o, a;
                    } var s = i[e]; if (void 0 === s)
                        return !1; if ("function" == typeof s)
                        f(s, this, t);
                    else {
                        var c = s.length, u = function (e, t) { for (var r = new Array(t), n = 0; n < t; ++n)
                            r[n] = e[n]; return r; }(s, c);
                        for (r = 0; r < c; ++r)
                            f(u[r], this, t);
                    } return !0; }; }, function (e, t, r) { var n = r(71), i = r(161), o = r(162), a = "[object Null]", s = "[object Undefined]", f = n ? n.toStringTag : void 0; e.exports = function (e) { return null == e ? void 0 === e ? s : a : f && f in Object(e) ? i(e) : o(e); }; }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) { return function () { if (null !== e) {
                            var t = e;
                            e = null, t.apply(this, arguments);
                        } }; }, e.exports = t.default;
                    }, function (e, t) { e.exports = function (e) { return null != e && "object" == typeof e; }; }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) { return function () { if (null === e)
                            throw new Error("Callback was already called."); var t = e; e = null, t.apply(this, arguments); }; }, e.exports = t.default;
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(193), i = r(34);
                        e.exports = function (e) { return i({ id: n(), jsonrpc: "2.0", params: [] }, e); };
                    }, function (e, t, r) {
                        "use strict";
                        var n = function () { function e(e, t) { for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        } } return function (t, r, n) { return r && e(t.prototype, r), n && e(t, n), t; }; }();
                        var i = r(27), o = function (e) { function t(e) { !function (e, t) { if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function"); }(this, t); var r = function (e, t) { if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t; }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); if (!e)
                            throw new Error("JsonRpcEngineMiddlewareSubprovider - no constructorFn specified"); return r._constructorFn = e, r; } return function (e, t) { if ("function" != typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }(t, i), n(t, [{ key: "setEngine", value: function (e) { if (this.middleware)
                                    throw new Error("JsonRpcEngineMiddlewareSubprovider - subprovider added to engine twice"); var t = e._blockTracker, r = this._constructorFn({ engine: e, provider: e, blockTracker: t }); if (!r)
                                    throw new Error("JsonRpcEngineMiddlewareSubprovider - _constructorFn did not return middleware"); if ("function" != typeof r)
                                    throw new Error("JsonRpcEngineMiddlewareSubprovider - specified middleware is not a function"); this.middleware = r; } }, { key: "handleRequest", value: function (e, t, r) { var n = { id: e.id }; this.middleware(e, n, function (e) { t(function (t, r, i) { t ? (delete n.result, n.error = { message: t.message || t }) : n.result = r, e ? e(i) : i(); }); }, function (e) { if (e)
                                    return r(e); r(null, n.result); }); } }]), t; }();
                        e.exports = o;
                    }, function (e, t, r) { var n = r(196); e.exports = function (e) { return function (t, r, i, o) { var a = null; var s = e(t, r, function () {
                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_j) {
                            switch (_j.label) {
                                case 0:
                                    a = new Promise(function (e) { i(function (t) { return e(t); }); });
                                    return [4 /*yield*/, a];
                                case 1: return [2 /*return*/, void (_j.sent())];
                            }
                        }); });
                    }); n(s)(function (e) { a ? n(a)(function (t, r) { if (t)
                        return console.error(t), o(t); r(e); }) : o(e); }); }; }; }, function (e, t, r) { var n = r(35); e.exports = /** @class */ (function (_super) {
                        __extends(class_1, _super);
                        function class_1() {
                            var _this = this;
                            _this = _super.call(this) || this, _this.updates = [];
                            return _this;
                        }
                        class_1.prototype.initialize = function () {
                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_j) {
                                return [2 /*return*/];
                            }); });
                        };
                        class_1.prototype.update = function () {
                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_j) {
                                throw new Error("BaseFilter - no update method specified");
                            }); });
                        };
                        class_1.prototype.addResults = function (e) {
                            var _this = this;
                            this.updates = this.updates.concat(e), e.forEach(function (e) { return _this.emit("update", e); });
                        };
                        class_1.prototype.addInitialResults = function (e) { };
                        class_1.prototype.getChangesAndClear = function () { var e = this.updates; return this.updates = [], e; };
                        return class_1;
                    }(n)); }, function (e, t) { function r(e) { return null == e ? e : Number.parseInt(e, 16); } function n(e) { if (null == e)
                        return e; return "0x" + e.toString(16); } e.exports = function (_j) {
                        var e = _j.provider, t = _j.fromBlock, i = _j.toBlock;
                        return __awaiter(this, void 0, void 0, function () { var o, a, s; return __generator(this, function (_k) {
                            switch (_k.label) {
                                case 0:
                                    t || (t = i);
                                    o = r(t), a = r(i), s = Array(a - o + 1).fill().map(function (e, t) { return o + t; }).map(n);
                                    return [4 /*yield*/, Promise.all(s.map(function (t) { return (function (e, t, r) { return new Promise(function (n, i) { e.sendAsync({ id: 1, jsonrpc: "2.0", method: t, params: r }, function (e, t) { if (e)
                                            return i(e); n(t.result); }); }); })(e, "eth_getBlockByNumber", [t, !1]); }))];
                                case 1: return [2 /*return*/, _k.sent()];
                            }
                        }); });
                    }; }, function (e, t, r) { e.exports = r(220); }, function (e, t, r) {
                        "use strict";
                        (function (t) { var n = r(4), i = r(223), o = { "Content-Type": "application/x-www-form-urlencoded" }; function a(e, t) { !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t); } var s, f = { adapter: ("undefined" != typeof XMLHttpRequest ? s = r(86) : void 0 !== t && (s = r(86)), s), transformRequest: [function (e, t) { return i(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e; }], transformResponse: [function (e) { if ("string" == typeof e)
                                    try {
                                        e = JSON.parse(e);
                                    }
                                    catch (e) { } return e; }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function (e) { return e >= 200 && e < 300; } }; f.headers = { common: { Accept: "application/json, text/plain, */*" } }, n.forEach(["delete", "get", "head"], function (e) { f.headers[e] = {}; }), n.forEach(["post", "put", "patch"], function (e) { f.headers[e] = n.merge(o); }), e.exports = f; }).call(this, r(6));
                    }, function (e, t) { e.exports = { dispatchNodeURL: "https://dispatch.pokt.network", dispatchPath: "/v1/dispatch", reportPath: "/v1/report", relayPath: "/v1/relay/" }; }, function (e, t, r) {
                        "use strict";
                        var n = r(41), i = r(194), o = function (e) { function t(e) { return function (e, t) { if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function"); }(this, t), function (e, t) { if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t; }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, function (t) { var r = t.blockTracker; return i(Object.assign({ blockTracker: r }, e)); })); } return function (e, t) { if ("function" != typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }(t, n), t; }();
                        e.exports = o;
                    }, function (e, t, r) {
                        "use strict";
                        (function (t) { var n = r(9).inherits, i = r(215), o = r(14), a = r(27), s = r(80).blockTagForPayload; function f(e) { this.nonceCache = {}; } e.exports = f, n(f, a), f.prototype.handleRequest = function (e, r, n) { var a = this; switch (e.method) {
                            case "eth_getTransactionCount":
                                var f = s(e), c = e.params[0].toLowerCase(), u = a.nonceCache[c];
                                return void ("pending" === f ? u ? n(null, u) : r(function (e, t, r) { if (e)
                                    return r(); void 0 === a.nonceCache[c] && (a.nonceCache[c] = t), r(); }) : r());
                            case "eth_sendRawTransaction": return void r(function (r, n, s) { if (r)
                                return s(); var f = e.params[0], c = (o.stripHexPrefix(f), t.from(o.stripHexPrefix(f), "hex"), new i(t.from(o.stripHexPrefix(f), "hex"))), u = "0x" + c.getSenderAddress().toString("hex").toLowerCase(), d = o.bufferToInt(c.nonce), h = (++d).toString(16); h.length % 2 && (h = "0" + h), h = "0x" + h, a.nonceCache[u] = h, s(); });
                            case "evm_revert": return a.nonceCache = {}, void r();
                            default: return void r();
                        } }; }).call(this, r(7).Buffer);
                    }, function (e, t, r) { var n = r(84), i = n.Wallet, o = n.Relay, a = r(241); e.exports = { Pocket: a, Wallet: i, Relay: o }; }, function (e, t, r) {
                        "use strict";
                        e.exports = r(98)(r(115));
                    }, function (e, t, r) {
                        "use strict";
                        (function (t, n) { var i = r(21); e.exports = m; var o, a = r(103); m.ReadableState = y; r(13).EventEmitter; var s = function (e, t) { return e.listeners(t).length; }, f = r(53), c = r(1).Buffer, u = t.Uint8Array || function () { }; var d = r(16); d.inherits = r(0); var h = r(104), l = void 0; l = h && h.debuglog ? h.debuglog("stream") : function () { }; var p, b = r(105), g = r(54); d.inherits(m, f); var v = ["error", "close", "destroy", "pause", "resume"]; function y(e, t) { e = e || {}; var n = t instanceof (o = o || r(10)); this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode); var i = e.highWaterMark, a = e.readableHighWaterMark, s = this.objectMode ? 16 : 16384; this.highWaterMark = i || 0 === i ? i : n && (a || 0 === a) ? a : s, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new b, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (p || (p = r(30).StringDecoder), this.decoder = new p(e.encoding), this.encoding = e.encoding); } function m(e) { if (o = o || r(10), !(this instanceof m))
                            return new m(e); this._readableState = new y(e, this), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), f.call(this); } function _(e, t, r, n, i) { var o, a = e._readableState; null === t ? (a.reading = !1, function (e, t) { if (t.ended)
                            return; if (t.decoder) {
                            var r = t.decoder.end();
                            r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length);
                        } t.ended = !0, S(e); }(e, a)) : (i || (o = function (e, t) { var r; n = t, c.isBuffer(n) || n instanceof u || "string" == typeof t || void 0 === t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk")); var n; return r; }(a, t)), o ? e.emit("error", o) : a.objectMode || t && t.length > 0 ? ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === c.prototype || (t = function (e) { return c.from(e); }(t)), n ? a.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : w(e, a, t, !0) : a.ended ? e.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1, a.decoder && !r ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? w(e, a, t, !1) : M(e, a)) : w(e, a, t, !1))) : n || (a.reading = !1)); return function (e) { return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length); }(a); } function w(e, t, r, n) { t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && S(e)), M(e, t); } Object.defineProperty(m.prototype, "destroyed", { get: function () { return void 0 !== this._readableState && this._readableState.destroyed; }, set: function (e) { this._readableState && (this._readableState.destroyed = e); } }), m.prototype.destroy = g.destroy, m.prototype._undestroy = g.undestroy, m.prototype._destroy = function (e, t) { this.push(null), t(e); }, m.prototype.push = function (e, t) { var r, n = this._readableState; return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = c.from(e, t), t = ""), r = !0), _(this, e, t, !1, r); }, m.prototype.unshift = function (e) { return _(this, e, null, !0, !1); }, m.prototype.isPaused = function () { return !1 === this._readableState.flowing; }, m.prototype.setEncoding = function (e) { return p || (p = r(30).StringDecoder), this._readableState.decoder = new p(e), this._readableState.encoding = e, this; }; var E = 8388608; function A(e, t) { return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function (e) { return e >= E ? e = E : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e; }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0)); } function S(e) { var t = e._readableState; t.needReadable = !1, t.emittedReadable || (l("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? i.nextTick(x, e) : x(e)); } function x(e) { l("emit readable"), e.emit("readable"), L(e); } function M(e, t) { t.readingMore || (t.readingMore = !0, i.nextTick(I, e, t)); } function I(e, t) { for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (l("maybeReadMore read 0"), e.read(0), r !== t.length);)
                            r = t.length; t.readingMore = !1; } function k(e) { l("readable nexttick read 0"), e.read(0); } function T(e, t) { t.reading || (l("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), L(e), t.flowing && !t.reading && e.read(0); } function L(e) { var t = e._readableState; for (l("flow", t.flowing); t.flowing && null !== e.read();)
                            ; } function P(e, t) { return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : r = function (e, t, r) { var n; e < t.head.data.length ? (n = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : r ? function (e, t) { var r = t.head, n = 1, i = r.data; e -= i.length; for (; r = r.next;) {
                            var o = r.data, a = e > o.length ? o.length : e;
                            if (a === o.length ? i += o : i += o.slice(0, e), 0 === (e -= a)) {
                                a === o.length ? (++n, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = o.slice(a));
                                break;
                            }
                            ++n;
                        } return t.length -= n, i; }(e, t) : function (e, t) { var r = c.allocUnsafe(e), n = t.head, i = 1; n.data.copy(r), e -= n.data.length; for (; n = n.next;) {
                            var o = n.data, a = e > o.length ? o.length : e;
                            if (o.copy(r, r.length - e, 0, a), 0 === (e -= a)) {
                                a === o.length ? (++i, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = o.slice(a));
                                break;
                            }
                            ++i;
                        } return t.length -= i, r; }(e, t); return n; }(e, t.buffer, t.decoder), r); var r; } function B(e) { var t = e._readableState; if (t.length > 0)
                            throw new Error('"endReadable()" called on non-empty stream'); t.endEmitted || (t.ended = !0, i.nextTick(R, t, e)); } function R(e, t) { e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end")); } function C(e, t) { for (var r = 0, n = e.length; r < n; r++)
                            if (e[r] === t)
                                return r; return -1; } m.prototype.read = function (e) { l("read", e), e = parseInt(e, 10); var t = this._readableState, r = e; if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
                            return l("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? B(this) : S(this), null; if (0 === (e = A(e, t)) && t.ended)
                            return 0 === t.length && B(this), null; var n, i = t.needReadable; return l("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && l("length less than watermark", i = !0), t.ended || t.reading ? l("reading or ended", i = !1) : i && (l("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = A(r, t))), null === (n = e > 0 ? P(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && B(this)), null !== n && this.emit("data", n), n; }, m.prototype._read = function (e) { this.emit("error", new Error("_read() is not implemented")); }, m.prototype.pipe = function (e, t) { var r = this, o = this._readableState; switch (o.pipesCount) {
                            case 0:
                                o.pipes = e;
                                break;
                            case 1:
                                o.pipes = [o.pipes, e];
                                break;
                            default: o.pipes.push(e);
                        } o.pipesCount += 1, l("pipe count=%d opts=%j", o.pipesCount, t); var f = (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? u : m; function c(t, n) { l("onunpipe"), t === r && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, l("cleanup"), e.removeListener("close", v), e.removeListener("finish", y), e.removeListener("drain", d), e.removeListener("error", g), e.removeListener("unpipe", c), r.removeListener("end", u), r.removeListener("end", m), r.removeListener("data", b), h = !0, !o.awaitDrain || e._writableState && !e._writableState.needDrain || d()); } function u() { l("onend"), e.end(); } o.endEmitted ? i.nextTick(f) : r.once("end", f), e.on("unpipe", c); var d = function (e) { return function () { var t = e._readableState; l("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && s(e, "data") && (t.flowing = !0, L(e)); }; }(r); e.on("drain", d); var h = !1; var p = !1; function b(t) { l("ondata"), p = !1, !1 !== e.write(t) || p || ((1 === o.pipesCount && o.pipes === e || o.pipesCount > 1 && -1 !== C(o.pipes, e)) && !h && (l("false write response, pause", r._readableState.awaitDrain), r._readableState.awaitDrain++, p = !0), r.pause()); } function g(t) { l("onerror", t), m(), e.removeListener("error", g), 0 === s(e, "error") && e.emit("error", t); } function v() { e.removeListener("finish", y), m(); } function y() { l("onfinish"), e.removeListener("close", v), m(); } function m() { l("unpipe"), r.unpipe(e); } return r.on("data", b), function (e, t, r) { if ("function" == typeof e.prependListener)
                            return e.prependListener(t, r); e._events && e._events[t] ? a(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r); }(e, "error", g), e.once("close", v), e.once("finish", y), e.emit("pipe", r), o.flowing || (l("pipe resume"), r.resume()), e; }, m.prototype.unpipe = function (e) { var t = this._readableState, r = { hasUnpiped: !1 }; if (0 === t.pipesCount)
                            return this; if (1 === t.pipesCount)
                            return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r), this); if (!e) {
                            var n = t.pipes, i = t.pipesCount;
                            t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                            for (var o = 0; o < i; o++)
                                n[o].emit("unpipe", this, r);
                            return this;
                        } var a = C(t.pipes, e); return -1 === a ? this : (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r), this); }, m.prototype.on = function (e, t) { var r = f.prototype.on.call(this, e, t); if ("data" === e)
                            !1 !== this._readableState.flowing && this.resume();
                        else if ("readable" === e) {
                            var n = this._readableState;
                            n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && S(this) : i.nextTick(k, this));
                        } return r; }, m.prototype.addListener = m.prototype.on, m.prototype.resume = function () { var e = this._readableState; return e.flowing || (l("resume"), e.flowing = !0, function (e, t) { t.resumeScheduled || (t.resumeScheduled = !0, i.nextTick(T, e, t)); }(this, e)), this; }, m.prototype.pause = function () { return l("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (l("pause"), this._readableState.flowing = !1, this.emit("pause")), this; }, m.prototype.wrap = function (e) { var t = this, r = this._readableState, n = !1; for (var i in e.on("end", function () { if (l("wrapped end"), r.decoder && !r.ended) {
                            var e = r.decoder.end();
                            e && e.length && t.push(e);
                        } t.push(null); }), e.on("data", function (i) { (l("wrapped data"), r.decoder && (i = r.decoder.write(i)), r.objectMode && null == i) || (r.objectMode || i && i.length) && (t.push(i) || (n = !0, e.pause())); }), e)
                            void 0 === this[i] && "function" == typeof e[i] && (this[i] = function (t) { return function () { return e[t].apply(e, arguments); }; }(i)); for (var o = 0; o < v.length; o++)
                            e.on(v[o], this.emit.bind(this, v[o])); return this._read = function (t) { l("wrapped _read", t), n && (n = !1, e.resume()); }, this; }, Object.defineProperty(m.prototype, "readableHighWaterMark", { enumerable: !1, get: function () { return this._readableState.highWaterMark; } }), m._fromList = P; }).call(this, r(8), r(6));
                    }, function (e, t, r) { e.exports = r(13).EventEmitter; }, function (e, t, r) {
                        "use strict";
                        var n = r(21);
                        function i(e, t) { e.emit("error", t); }
                        e.exports = { destroy: function (e, t) { var r = this, o = this._readableState && this._readableState.destroyed, a = this._writableState && this._writableState.destroyed; return o || a ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || n.nextTick(i, this, e), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function (e) { !t && e ? (n.nextTick(i, r, e), r._writableState && (r._writableState.errorEmitted = !0)) : t && t(e); }), this); }, undestroy: function () { this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1); } };
                    }, function (e, t, r) {
                        "use strict";
                        e.exports = a;
                        var n = r(10), i = r(16);
                        function o(e, t) { var r = this._transformState; r.transforming = !1; var n = r.writecb; if (!n)
                            return this.emit("error", new Error("write callback called multiple times")); r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e); var i = this._readableState; i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark); }
                        function a(e) { if (!(this instanceof a))
                            return new a(e); n.call(this, e), this._transformState = { afterTransform: o.bind(this), needTransform: !1, transforming: !1, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", s); }
                        function s() { var e = this; "function" == typeof this._flush ? this._flush(function (t, r) { f(e, t, r); }) : f(this, null, null); }
                        function f(e, t, r) { if (t)
                            return e.emit("error", t); if (null != r && e.push(r), e._writableState.length)
                            throw new Error("Calling transform done when ws.length != 0"); if (e._transformState.transforming)
                            throw new Error("Calling transform done when still transforming"); return e.push(null); }
                        i.inherits = r(0), i.inherits(a, n), a.prototype.push = function (e, t) { return this._transformState.needTransform = !1, n.prototype.push.call(this, e, t); }, a.prototype._transform = function (e, t, r) { throw new Error("_transform() is not implemented"); }, a.prototype._write = function (e, t, r) { var n = this._transformState; if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                            var i = this._readableState;
                            (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
                        } }, a.prototype._read = function (e) { var t = this._transformState; null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0; }, a.prototype._destroy = function (e, t) { var r = this; n.prototype._destroy.call(this, e, function (e) { t(e), r.emit("close"); }); };
                    }, function (e, t, r) {
                        "use strict";
                        e.exports = r(117)(r(121));
                    }, function (e) { e.exports = { COMPRESSED_TYPE_INVALID: "compressed should be a boolean", EC_PRIVATE_KEY_TYPE_INVALID: "private key should be a Buffer", EC_PRIVATE_KEY_LENGTH_INVALID: "private key length is invalid", EC_PRIVATE_KEY_RANGE_INVALID: "private key range is invalid", EC_PRIVATE_KEY_TWEAK_ADD_FAIL: "tweak out of range or resulting private key is invalid", EC_PRIVATE_KEY_TWEAK_MUL_FAIL: "tweak out of range", EC_PRIVATE_KEY_EXPORT_DER_FAIL: "couldn't export to DER format", EC_PRIVATE_KEY_IMPORT_DER_FAIL: "couldn't import from DER format", EC_PUBLIC_KEYS_TYPE_INVALID: "public keys should be an Array", EC_PUBLIC_KEYS_LENGTH_INVALID: "public keys Array should have at least 1 element", EC_PUBLIC_KEY_TYPE_INVALID: "public key should be a Buffer", EC_PUBLIC_KEY_LENGTH_INVALID: "public key length is invalid", EC_PUBLIC_KEY_PARSE_FAIL: "the public key could not be parsed or is invalid", EC_PUBLIC_KEY_CREATE_FAIL: "private was invalid, try again", EC_PUBLIC_KEY_TWEAK_ADD_FAIL: "tweak out of range or resulting public key is invalid", EC_PUBLIC_KEY_TWEAK_MUL_FAIL: "tweak out of range", EC_PUBLIC_KEY_COMBINE_FAIL: "the sum of the public keys is not valid", ECDH_FAIL: "scalar was invalid (zero or overflow)", ECDSA_SIGNATURE_TYPE_INVALID: "signature should be a Buffer", ECDSA_SIGNATURE_LENGTH_INVALID: "signature length is invalid", ECDSA_SIGNATURE_PARSE_FAIL: "couldn't parse signature", ECDSA_SIGNATURE_PARSE_DER_FAIL: "couldn't parse DER signature", ECDSA_SIGNATURE_SERIALIZE_DER_FAIL: "couldn't serialize signature to DER format", ECDSA_SIGN_FAIL: "nonce generation function failed or private key is invalid", ECDSA_RECOVER_FAIL: "couldn't recover public key from signature", MSG32_TYPE_INVALID: "message should be a Buffer", MSG32_LENGTH_INVALID: "message length is invalid", OPTIONS_TYPE_INVALID: "options should be an Object", OPTIONS_DATA_TYPE_INVALID: "options.data should be a Buffer", OPTIONS_DATA_LENGTH_INVALID: "options.data length is invalid", OPTIONS_NONCEFN_TYPE_INVALID: "options.noncefn should be a Function", RECOVERY_ID_TYPE_INVALID: "recovery should be a Number", RECOVERY_ID_VALUE_INVALID: "recovery should have value between -1 and 4", TWEAK_TYPE_INVALID: "tweak should be a Buffer", TWEAK_LENGTH_INVALID: "tweak length is invalid" }; }, function (e, t, r) {
                        "use strict";
                        var n = r(1).Buffer, i = r(20).Transform;
                        function o(e) { i.call(this), this._block = n.allocUnsafe(e), this._blockSize = e, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1; }
                        r(0)(o, i), o.prototype._transform = function (e, t, r) { var n = null; try {
                            this.update(e, t);
                        }
                        catch (e) {
                            n = e;
                        } r(n); }, o.prototype._flush = function (e) { var t = null; try {
                            this.push(this.digest());
                        }
                        catch (e) {
                            t = e;
                        } e(t); }, o.prototype.update = function (e, t) { if (function (e, t) { if (!n.isBuffer(e) && "string" != typeof e)
                            throw new TypeError(t + " must be a string or a buffer"); }(e, "Data"), this._finalized)
                            throw new Error("Digest already called"); n.isBuffer(e) || (e = n.from(e, t)); for (var r = this._block, i = 0; this._blockOffset + e.length - i >= this._blockSize;) {
                            for (var o = this._blockOffset; o < this._blockSize;)
                                r[o++] = e[i++];
                            this._update(), this._blockOffset = 0;
                        } for (; i < e.length;)
                            r[this._blockOffset++] = e[i++]; for (var a = 0, s = 8 * e.length; s > 0; ++a)
                            this._length[a] += s, (s = this._length[a] / 4294967296 | 0) > 0 && (this._length[a] -= 4294967296 * s); return this; }, o.prototype._update = function () { throw new Error("_update is not implemented"); }, o.prototype.digest = function (e) { if (this._finalized)
                            throw new Error("Digest already called"); this._finalized = !0; var t = this._digest(); void 0 !== e && (t = t.toString(e)), this._block.fill(0), this._blockOffset = 0; for (var r = 0; r < 4; ++r)
                            this._length[r] = 0; return t; }, o.prototype._digest = function () { throw new Error("_digest is not implemented"); }, e.exports = o;
                    }, function (e, t, r) { var n = r(0), i = r(15), o = r(1).Buffer, a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], s = new Array(64); function f() { this.init(), this._w = s, i.call(this, 64, 56); } function c(e, t, r) { return r ^ e & (t ^ r); } function u(e, t, r) { return e & t | r & (e | t); } function d(e) { return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10); } function h(e) { return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7); } function l(e) { return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3; } n(f, i), f.prototype.init = function () { return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this; }, f.prototype._update = function (e) { for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, f = 0 | this._e, p = 0 | this._f, b = 0 | this._g, g = 0 | this._h, v = 0; v < 16; ++v)
                        r[v] = e.readInt32BE(4 * v); for (; v < 64; ++v)
                        r[v] = 0 | (((t = r[v - 2]) >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10) + r[v - 7] + l(r[v - 15]) + r[v - 16]; for (var y = 0; y < 64; ++y) {
                        var m = g + h(f) + c(f, p, b) + a[y] + r[y] | 0, _ = d(n) + u(n, i, o) | 0;
                        g = b, b = p, p = f, f = s + m | 0, s = o, o = i, i = n, n = m + _ | 0;
                    } this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = f + this._e | 0, this._f = p + this._f | 0, this._g = b + this._g | 0, this._h = g + this._h | 0; }, f.prototype._hash = function () { var e = o.allocUnsafe(32); return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e; }, e.exports = f; }, function (e, t, r) { var n = r(0), i = r(15), o = r(1).Buffer, a = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591], s = new Array(160); function f() { this.init(), this._w = s, i.call(this, 128, 112); } function c(e, t, r) { return r ^ e & (t ^ r); } function u(e, t, r) { return e & t | r & (e | t); } function d(e, t) { return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25); } function h(e, t) { return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23); } function l(e, t) { return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7; } function p(e, t) { return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25); } function b(e, t) { return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6; } function g(e, t) { return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26); } function v(e, t) { return e >>> 0 < t >>> 0 ? 1 : 0; } n(f, i), f.prototype.init = function () { return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this; }, f.prototype._update = function (e) { for (var t = this._w, r = 0 | this._ah, n = 0 | this._bh, i = 0 | this._ch, o = 0 | this._dh, s = 0 | this._eh, f = 0 | this._fh, y = 0 | this._gh, m = 0 | this._hh, _ = 0 | this._al, w = 0 | this._bl, E = 0 | this._cl, A = 0 | this._dl, S = 0 | this._el, x = 0 | this._fl, M = 0 | this._gl, I = 0 | this._hl, k = 0; k < 32; k += 2)
                        t[k] = e.readInt32BE(4 * k), t[k + 1] = e.readInt32BE(4 * k + 4); for (; k < 160; k += 2) {
                        var T = t[k - 30], L = t[k - 30 + 1], P = l(T, L), B = p(L, T), R = b(T = t[k - 4], L = t[k - 4 + 1]), C = g(L, T), N = t[k - 14], O = t[k - 14 + 1], j = t[k - 32], D = t[k - 32 + 1], U = B + O | 0, z = P + N + v(U, B) | 0;
                        z = (z = z + R + v(U = U + C | 0, C) | 0) + j + v(U = U + D | 0, D) | 0, t[k] = z, t[k + 1] = U;
                    } for (var q = 0; q < 160; q += 2) {
                        z = t[q], U = t[q + 1];
                        var F = u(r, n, i), H = u(_, w, E), K = d(r, _), V = d(_, r), Y = h(s, S), G = h(S, s), W = a[q], Z = a[q + 1], J = c(s, f, y), X = c(S, x, M), $ = I + G | 0, Q = m + Y + v($, I) | 0;
                        Q = (Q = (Q = Q + J + v($ = $ + X | 0, X) | 0) + W + v($ = $ + Z | 0, Z) | 0) + z + v($ = $ + U | 0, U) | 0;
                        var ee = V + H | 0, te = K + F + v(ee, V) | 0;
                        m = y, I = M, y = f, M = x, f = s, x = S, s = o + Q + v(S = A + $ | 0, A) | 0, o = i, A = E, i = n, E = w, n = r, w = _, r = Q + te + v(_ = $ + ee | 0, $) | 0;
                    } this._al = this._al + _ | 0, this._bl = this._bl + w | 0, this._cl = this._cl + E | 0, this._dl = this._dl + A | 0, this._el = this._el + S | 0, this._fl = this._fl + x | 0, this._gl = this._gl + M | 0, this._hl = this._hl + I | 0, this._ah = this._ah + r + v(this._al, _) | 0, this._bh = this._bh + n + v(this._bl, w) | 0, this._ch = this._ch + i + v(this._cl, E) | 0, this._dh = this._dh + o + v(this._dl, A) | 0, this._eh = this._eh + s + v(this._el, S) | 0, this._fh = this._fh + f + v(this._fl, x) | 0, this._gh = this._gh + y + v(this._gl, M) | 0, this._hh = this._hh + m + v(this._hl, I) | 0; }, f.prototype._hash = function () { var e = o.allocUnsafe(64); function t(t, r, n) { e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4); } return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), e; }, e.exports = f; }, function (e, t, r) {
                        "use strict";
                        var n = t;
                        function i(e) { return 1 === e.length ? "0" + e : e; }
                        function o(e) { for (var t = "", r = 0; r < e.length; r++)
                            t += i(e[r].toString(16)); return t; }
                        n.toArray = function (e, t) { if (Array.isArray(e))
                            return e.slice(); if (!e)
                            return []; var r = []; if ("string" != typeof e) {
                            for (var n = 0; n < e.length; n++)
                                r[n] = 0 | e[n];
                            return r;
                        } if ("hex" === t)
                            for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), n = 0; n < e.length; n += 2)
                                r.push(parseInt(e[n] + e[n + 1], 16));
                        else
                            for (n = 0; n < e.length; n++) {
                                var i = e.charCodeAt(n), o = i >> 8, a = 255 & i;
                                o ? r.push(o, a) : r.push(a);
                            } return r; }, n.zero2 = i, n.toHex = o, n.encode = function (e, t) { return "hex" === t ? o(e) : e; };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(5).rotr32;
                        function i(e, t, r) { return e & t ^ ~e & r; }
                        function o(e, t, r) { return e & t ^ e & r ^ t & r; }
                        function a(e, t, r) { return e ^ t ^ r; }
                        t.ft_1 = function (e, t, r, n) { return 0 === e ? i(t, r, n) : 1 === e || 3 === e ? a(t, r, n) : 2 === e ? o(t, r, n) : void 0; }, t.ch32 = i, t.maj32 = o, t.p32 = a, t.s0_256 = function (e) { return n(e, 2) ^ n(e, 13) ^ n(e, 22); }, t.s1_256 = function (e) { return n(e, 6) ^ n(e, 11) ^ n(e, 25); }, t.g0_256 = function (e) { return n(e, 7) ^ n(e, 18) ^ e >>> 3; }, t.g1_256 = function (e) { return n(e, 17) ^ n(e, 19) ^ e >>> 10; };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(5), i = r(17), o = r(62), a = r(11), s = n.sum32, f = n.sum32_4, c = n.sum32_5, u = o.ch32, d = o.maj32, h = o.s0_256, l = o.s1_256, p = o.g0_256, b = o.g1_256, g = i.BlockHash, v = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
                        function y() { if (!(this instanceof y))
                            return new y; g.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = v, this.W = new Array(64); }
                        n.inherits(y, g), e.exports = y, y.blockSize = 512, y.outSize = 256, y.hmacStrength = 192, y.padLength = 64, y.prototype._update = function (e, t) { for (var r = this.W, n = 0; n < 16; n++)
                            r[n] = e[t + n]; for (; n < r.length; n++)
                            r[n] = f(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]); var i = this.h[0], o = this.h[1], g = this.h[2], v = this.h[3], y = this.h[4], m = this.h[5], _ = this.h[6], w = this.h[7]; for (a(this.k.length === r.length), n = 0; n < r.length; n++) {
                            var E = c(w, l(y), u(y, m, _), this.k[n], r[n]), A = s(h(i), d(i, o, g));
                            w = _, _ = m, m = y, y = s(v, E), v = g, g = o, o = i, i = s(E, A);
                        } this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], g), this.h[3] = s(this.h[3], v), this.h[4] = s(this.h[4], y), this.h[5] = s(this.h[5], m), this.h[6] = s(this.h[6], _), this.h[7] = s(this.h[7], w); }, y.prototype._digest = function (e) { return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big"); };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(5), i = r(17), o = r(11), a = n.rotr64_hi, s = n.rotr64_lo, f = n.shr64_hi, c = n.shr64_lo, u = n.sum64, d = n.sum64_hi, h = n.sum64_lo, l = n.sum64_4_hi, p = n.sum64_4_lo, b = n.sum64_5_hi, g = n.sum64_5_lo, v = i.BlockHash, y = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
                        function m() { if (!(this instanceof m))
                            return new m; v.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = y, this.W = new Array(160); }
                        function _(e, t, r, n, i) { var o = e & r ^ ~e & i; return o < 0 && (o += 4294967296), o; }
                        function w(e, t, r, n, i, o) { var a = t & n ^ ~t & o; return a < 0 && (a += 4294967296), a; }
                        function E(e, t, r, n, i) { var o = e & r ^ e & i ^ r & i; return o < 0 && (o += 4294967296), o; }
                        function A(e, t, r, n, i, o) { var a = t & n ^ t & o ^ n & o; return a < 0 && (a += 4294967296), a; }
                        function S(e, t) { var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7); return r < 0 && (r += 4294967296), r; }
                        function x(e, t) { var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7); return r < 0 && (r += 4294967296), r; }
                        function M(e, t) { var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9); return r < 0 && (r += 4294967296), r; }
                        function I(e, t) { var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9); return r < 0 && (r += 4294967296), r; }
                        function k(e, t) { var r = a(e, t, 1) ^ a(e, t, 8) ^ f(e, t, 7); return r < 0 && (r += 4294967296), r; }
                        function T(e, t) { var r = s(e, t, 1) ^ s(e, t, 8) ^ c(e, t, 7); return r < 0 && (r += 4294967296), r; }
                        function L(e, t) { var r = a(e, t, 19) ^ a(t, e, 29) ^ f(e, t, 6); return r < 0 && (r += 4294967296), r; }
                        function P(e, t) { var r = s(e, t, 19) ^ s(t, e, 29) ^ c(e, t, 6); return r < 0 && (r += 4294967296), r; }
                        n.inherits(m, v), e.exports = m, m.blockSize = 1024, m.outSize = 512, m.hmacStrength = 192, m.padLength = 128, m.prototype._prepareBlock = function (e, t) { for (var r = this.W, n = 0; n < 32; n++)
                            r[n] = e[t + n]; for (; n < r.length; n += 2) {
                            var i = L(r[n - 4], r[n - 3]), o = P(r[n - 4], r[n - 3]), a = r[n - 14], s = r[n - 13], f = k(r[n - 30], r[n - 29]), c = T(r[n - 30], r[n - 29]), u = r[n - 32], d = r[n - 31];
                            r[n] = l(i, o, a, s, f, c, u, d), r[n + 1] = p(i, o, a, s, f, c, u, d);
                        } }, m.prototype._update = function (e, t) { this._prepareBlock(e, t); var r = this.W, n = this.h[0], i = this.h[1], a = this.h[2], s = this.h[3], f = this.h[4], c = this.h[5], l = this.h[6], p = this.h[7], v = this.h[8], y = this.h[9], m = this.h[10], k = this.h[11], T = this.h[12], L = this.h[13], P = this.h[14], B = this.h[15]; o(this.k.length === r.length); for (var R = 0; R < r.length; R += 2) {
                            var C = P, N = B, O = M(v, y), j = I(v, y), D = _(v, y, m, k, T), U = w(v, y, m, k, T, L), z = this.k[R], q = this.k[R + 1], F = r[R], H = r[R + 1], K = b(C, N, O, j, D, U, z, q, F, H), V = g(C, N, O, j, D, U, z, q, F, H);
                            C = S(n, i), N = x(n, i), O = E(n, i, a, s, f), j = A(n, i, a, s, f, c);
                            var Y = d(C, N, O, j), G = h(C, N, O, j);
                            P = T, B = L, T = m, L = k, m = v, k = y, v = d(l, p, K, V), y = h(p, p, K, V), l = f, p = c, f = a, c = s, a = n, s = i, n = d(K, V, Y, G), i = h(K, V, Y, G);
                        } u(this.h, 0, n, i), u(this.h, 2, a, s), u(this.h, 4, f, c), u(this.h, 6, l, p), u(this.h, 8, v, y), u(this.h, 10, m, k), u(this.h, 12, T, L), u(this.h, 14, P, B); }, m.prototype._digest = function (e) { return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big"); };
                    }, function (e, t, r) {
                        "use strict";
                        (function (t) {
                            /*!
                             * The buffer module from node.js, for the browser.
                             *
                             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
                             * @license  MIT
                             */
                            function n(e, t) { if (e === t)
                                return 0; for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
                                if (e[i] !== t[i]) {
                                    r = e[i], n = t[i];
                                    break;
                                } return r < n ? -1 : n < r ? 1 : 0; }
                            function i(e) { return t.Buffer && "function" == typeof t.Buffer.isBuffer ? t.Buffer.isBuffer(e) : !(null == e || !e._isBuffer); }
                            var o = r(9), a = Object.prototype.hasOwnProperty, s = Array.prototype.slice, f = "foo" === function () { }.name;
                            function c(e) { return Object.prototype.toString.call(e); }
                            function u(e) { return !i(e) && ("function" == typeof t.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer)))); }
                            var d = e.exports = v, h = /\s*function\s+([^\(\s]*)\s*/;
                            function l(e) { if (o.isFunction(e)) {
                                if (f)
                                    return e.name;
                                var t = e.toString().match(h);
                                return t && t[1];
                            } }
                            function p(e, t) { return "string" == typeof e ? e.length < t ? e : e.slice(0, t) : e; }
                            function b(e) { if (f || !o.isFunction(e))
                                return o.inspect(e); var t = l(e); return "[Function" + (t ? ": " + t : "") + "]"; }
                            function g(e, t, r, n, i) { throw new d.AssertionError({ message: r, actual: e, expected: t, operator: n, stackStartFunction: i }); }
                            function v(e, t) { e || g(e, !0, t, "==", d.ok); }
                            function y(e, t, r, a) { if (e === t)
                                return !0; if (i(e) && i(t))
                                return 0 === n(e, t); if (o.isDate(e) && o.isDate(t))
                                return e.getTime() === t.getTime(); if (o.isRegExp(e) && o.isRegExp(t))
                                return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase; if (null !== e && "object" == typeof e || null !== t && "object" == typeof t) {
                                if (u(e) && u(t) && c(e) === c(t) && !(e instanceof Float32Array || e instanceof Float64Array))
                                    return 0 === n(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
                                if (i(e) !== i(t))
                                    return !1;
                                var f = (a = a || { actual: [], expected: [] }).actual.indexOf(e);
                                return -1 !== f && f === a.expected.indexOf(t) || (a.actual.push(e), a.expected.push(t), function (e, t, r, n) { if (null == e || null == t)
                                    return !1; if (o.isPrimitive(e) || o.isPrimitive(t))
                                    return e === t; if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t))
                                    return !1; var i = m(e), a = m(t); if (i && !a || !i && a)
                                    return !1; if (i)
                                    return e = s.call(e), t = s.call(t), y(e, t, r); var f, c, u = E(e), d = E(t); if (u.length !== d.length)
                                    return !1; for (u.sort(), d.sort(), c = u.length - 1; c >= 0; c--)
                                    if (u[c] !== d[c])
                                        return !1; for (c = u.length - 1; c >= 0; c--)
                                    if (f = u[c], !y(e[f], t[f], r, n))
                                        return !1; return !0; }(e, t, r, a));
                            } return r ? e === t : e == t; }
                            function m(e) { return "[object Arguments]" == Object.prototype.toString.call(e); }
                            function _(e, t) { if (!e || !t)
                                return !1; if ("[object RegExp]" == Object.prototype.toString.call(t))
                                return t.test(e); try {
                                if (e instanceof t)
                                    return !0;
                            }
                            catch (e) { } return !Error.isPrototypeOf(t) && !0 === t.call({}, e); }
                            function w(e, t, r, n) { var i; if ("function" != typeof t)
                                throw new TypeError('"block" argument must be a function'); "string" == typeof r && (n = r, r = null), i = function (e) { var t; try {
                                e();
                            }
                            catch (e) {
                                t = e;
                            } return t; }(t), n = (r && r.name ? " (" + r.name + ")." : ".") + (n ? " " + n : "."), e && !i && g(i, r, "Missing expected exception" + n); var a = "string" == typeof n, s = !e && i && !r; if ((!e && o.isError(i) && a && _(i, r) || s) && g(i, r, "Got unwanted exception" + n), e && i && r && !_(i, r) || !e && i)
                                throw i; }
                            d.AssertionError = function (e) { var t; this.name = "AssertionError", this.actual = e.actual, this.expected = e.expected, this.operator = e.operator, e.message ? (this.message = e.message, this.generatedMessage = !1) : (this.message = p(b((t = this).actual), 128) + " " + t.operator + " " + p(b(t.expected), 128), this.generatedMessage = !0); var r = e.stackStartFunction || g; if (Error.captureStackTrace)
                                Error.captureStackTrace(this, r);
                            else {
                                var n = new Error;
                                if (n.stack) {
                                    var i = n.stack, o = l(r), a = i.indexOf("\n" + o);
                                    if (a >= 0) {
                                        var s = i.indexOf("\n", a + 1);
                                        i = i.substring(s + 1);
                                    }
                                    this.stack = i;
                                }
                            } }, o.inherits(d.AssertionError, Error), d.fail = g, d.ok = v, d.equal = function (e, t, r) { e != t && g(e, t, r, "==", d.equal); }, d.notEqual = function (e, t, r) { e == t && g(e, t, r, "!=", d.notEqual); }, d.deepEqual = function (e, t, r) { y(e, t, !1) || g(e, t, r, "deepEqual", d.deepEqual); }, d.deepStrictEqual = function (e, t, r) { y(e, t, !0) || g(e, t, r, "deepStrictEqual", d.deepStrictEqual); }, d.notDeepEqual = function (e, t, r) { y(e, t, !1) && g(e, t, r, "notDeepEqual", d.notDeepEqual); }, d.notDeepStrictEqual = function e(t, r, n) { y(t, r, !0) && g(t, r, n, "notDeepStrictEqual", e); }, d.strictEqual = function (e, t, r) { e !== t && g(e, t, r, "===", d.strictEqual); }, d.notStrictEqual = function (e, t, r) { e === t && g(e, t, r, "!==", d.notStrictEqual); }, d.throws = function (e, t, r) { w(!0, e, t, r); }, d.doesNotThrow = function (e, t, r) { w(!1, e, t, r); }, d.ifError = function (e) { if (e)
                                throw e; };
                            var E = Object.keys || function (e) { var t = []; for (var r in e)
                                a.call(e, r) && t.push(r); return t; };
                        }).call(this, r(8));
                    }, function (e, t, r) {
                        "use strict";
                        (function (e) { Object.defineProperty(t, "__esModule", { value: !0 }); var n = r(2); function i(e, t) { if ("00" === e.slice(0, 2))
                            throw new Error("invalid RLP: extra zeros"); return parseInt(e, t); } function o(t, r) { if (t < 56)
                            return e.from([t + r]); var n = s(t), i = s(r + 55 + n.length / 2); return e.from(i + n, "hex"); } function a(e) { return "0x" === e.slice(0, 2); } function s(e) { if (e < 0)
                            throw new Error("Invalid integer as argument, must be unsigned!"); var t = e.toString(16); return t.length % 2 ? "0" + t : t; } function f(t) { if (!e.isBuffer(t)) {
                            if ("string" == typeof t)
                                return a(t) ? e.from((i = "string" != typeof (o = t) ? o : a(o) ? o.slice(2) : o).length % 2 ? "0" + i : i, "hex") : e.from(t);
                            if ("number" == typeof t)
                                return t ? (r = s(t), e.from(r, "hex")) : e.from([]);
                            if (null == t)
                                return e.from([]);
                            if (t instanceof Uint8Array)
                                return e.from(t);
                            if (n.isBN(t))
                                return e.from(t.toArray());
                            throw new Error("invalid type");
                        } var r, i, o; return t; } t.encode = function t(r) { if (Array.isArray(r)) {
                            for (var n = [], i = 0; i < r.length; i++)
                                n.push(t(r[i]));
                            var a = e.concat(n);
                            return e.concat([o(a.length, 192), a]);
                        } var s = f(r); return 1 === s.length && s[0] < 128 ? s : e.concat([o(s.length, 128), s]); }, t.decode = function (t, r) { if (void 0 === r && (r = !1), !t || 0 === t.length)
                            return e.from([]); var n = function t(r) { var n, o, a, s, f, c = [], u = r[0]; if (u <= 127)
                            return { data: r.slice(0, 1), remainder: r.slice(1) }; if (u <= 183) {
                            if (n = u - 127, a = 128 === u ? e.from([]) : r.slice(1, n), 2 === n && a[0] < 128)
                                throw new Error("invalid rlp encoding: byte must be less 0x80");
                            return { data: a, remainder: r.slice(n) };
                        } if (u <= 191) {
                            if (o = u - 182, n = i(r.slice(1, o).toString("hex"), 16), (a = r.slice(o, n + o)).length < n)
                                throw new Error("invalid RLP");
                            return { data: a, remainder: r.slice(n + o) };
                        } if (u <= 247) {
                            for (n = u - 191, s = r.slice(1, n); s.length;)
                                f = t(s), c.push(f.data), s = f.remainder;
                            return { data: c, remainder: r.slice(n) };
                        } o = u - 246, n = i(r.slice(1, o).toString("hex"), 16); var d = o + n; if (d > r.length)
                            throw new Error("invalid rlp: total length is larger than the data"); if (0 === (s = r.slice(o, d)).length)
                            throw new Error("invalid rlp, List has a invalid length"); for (; s.length;)
                            f = t(s), c.push(f.data), s = f.remainder; return { data: c, remainder: r.slice(d) }; }(f(t)); if (r)
                            return n; if (0 !== n.remainder.length)
                            throw new Error("invalid remainder"); return n.data; }, t.getLength = function (t) { if (!t || 0 === t.length)
                            return e.from([]); var r = f(t), n = r[0]; if (n <= 127)
                            return r.length; if (n <= 183)
                            return n - 127; if (n <= 191)
                            return n - 182; if (n <= 247)
                            return n - 191; var o = n - 246; return o + i(r.slice(1, o).toString("hex"), 16); }; }).call(this, r(7).Buffer);
                    }, function (e, t, r) {
                        "use strict";
                        (function (t) { var n = r(68), i = r(154); function o(e) { var t = e; if ("string" != typeof t)
                            throw new Error("[ethjs-util] while padding to even, value must be string, is currently " + typeof t + ", while padToEven."); return t.length % 2 && (t = "0" + t), t; } function a(e) { return "0x" + e.toString(16); } e.exports = { arrayContainsArray: function (e, t, r) { if (!0 !== Array.isArray(e))
                                throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '" + typeof e + "'"); if (!0 !== Array.isArray(t))
                                throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '" + typeof t + "'"); return t[Boolean(r) ? "some" : "every"](function (t) { return e.indexOf(t) >= 0; }); }, intToBuffer: function (e) { var r = a(e); return new t(o(r.slice(2)), "hex"); }, getBinarySize: function (e) { if ("string" != typeof e)
                                throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" + typeof e + "'."); return t.byteLength(e, "utf8"); }, isHexPrefixed: n, stripHexPrefix: i, padToEven: o, intToHex: a, fromAscii: function (e) { for (var t = "", r = 0; r < e.length; r++) {
                                var n = e.charCodeAt(r).toString(16);
                                t += n.length < 2 ? "0" + n : n;
                            } return "0x" + t; }, fromUtf8: function (e) { return "0x" + o(new t(e, "utf8").toString("hex")).replace(/^0+|0+$/g, ""); }, toAscii: function (e) { var t = "", r = 0, n = e.length; for ("0x" === e.substring(0, 2) && (r = 2); r < n; r += 2) {
                                var i = parseInt(e.substr(r, 2), 16);
                                t += String.fromCharCode(i);
                            } return t; }, toUtf8: function (e) { return new t(o(i(e).replace(/^0+|0+$/g, "")), "hex").toString("utf8"); }, getKeys: function (e, t, r) { if (!Array.isArray(e))
                                throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '" + typeof e + "'"); if ("string" != typeof t)
                                throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '" + typeof t + "'."); for (var n = [], i = 0; i < e.length; i++) {
                                var o = e[i][t];
                                if (r && !o)
                                    o = "";
                                else if ("string" != typeof o)
                                    throw new Error("invalid abi");
                                n.push(o);
                            } return n; }, isHexString: function (e, t) { return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/) || t && e.length !== 2 + 2 * t); } }; }).call(this, r(7).Buffer);
                    }, function (e, t) { e.exports = function (e) { if ("string" != typeof e)
                        throw new Error("[is-hex-prefixed] value must be type 'string', is currently type " + typeof e + ", while checking isHexPrefixed."); return "0x" === e.slice(0, 2); }; }, function (e, t, r) { var n = r(34), i = r(157)(); function o(e) { this.currentProvider = e; } function a(e) { return function () { var t = [].slice.call(arguments), r = t.pop(); this.sendAsync({ method: e, params: t }, r); }; } function s(e, t) { return function () { var r = [].slice.call(arguments), n = r.pop(); r.length < e && r.push("latest"), this.sendAsync({ method: t, params: r }, n); }; } e.exports = o, o.prototype.getBalance = s(2, "eth_getBalance"), o.prototype.getCode = s(2, "eth_getCode"), o.prototype.getTransactionCount = s(2, "eth_getTransactionCount"), o.prototype.getStorageAt = s(3, "eth_getStorageAt"), o.prototype.call = s(2, "eth_call"), o.prototype.protocolVersion = a("eth_protocolVersion"), o.prototype.syncing = a("eth_syncing"), o.prototype.coinbase = a("eth_coinbase"), o.prototype.mining = a("eth_mining"), o.prototype.hashrate = a("eth_hashrate"), o.prototype.gasPrice = a("eth_gasPrice"), o.prototype.accounts = a("eth_accounts"), o.prototype.blockNumber = a("eth_blockNumber"), o.prototype.getBlockTransactionCountByHash = a("eth_getBlockTransactionCountByHash"), o.prototype.getBlockTransactionCountByNumber = a("eth_getBlockTransactionCountByNumber"), o.prototype.getUncleCountByBlockHash = a("eth_getUncleCountByBlockHash"), o.prototype.getUncleCountByBlockNumber = a("eth_getUncleCountByBlockNumber"), o.prototype.sign = a("eth_sign"), o.prototype.sendTransaction = a("eth_sendTransaction"), o.prototype.sendRawTransaction = a("eth_sendRawTransaction"), o.prototype.estimateGas = a("eth_estimateGas"), o.prototype.getBlockByHash = a("eth_getBlockByHash"), o.prototype.getBlockByNumber = a("eth_getBlockByNumber"), o.prototype.getTransactionByHash = a("eth_getTransactionByHash"), o.prototype.getTransactionByBlockHashAndIndex = a("eth_getTransactionByBlockHashAndIndex"), o.prototype.getTransactionByBlockNumberAndIndex = a("eth_getTransactionByBlockNumberAndIndex"), o.prototype.getTransactionReceipt = a("eth_getTransactionReceipt"), o.prototype.getUncleByBlockHashAndIndex = a("eth_getUncleByBlockHashAndIndex"), o.prototype.getUncleByBlockNumberAndIndex = a("eth_getUncleByBlockNumberAndIndex"), o.prototype.getCompilers = a("eth_getCompilers"), o.prototype.compileLLL = a("eth_compileLLL"), o.prototype.compileSolidity = a("eth_compileSolidity"), o.prototype.compileSerpent = a("eth_compileSerpent"), o.prototype.newFilter = a("eth_newFilter"), o.prototype.newBlockFilter = a("eth_newBlockFilter"), o.prototype.newPendingTransactionFilter = a("eth_newPendingTransactionFilter"), o.prototype.uninstallFilter = a("eth_uninstallFilter"), o.prototype.getFilterChanges = a("eth_getFilterChanges"), o.prototype.getFilterLogs = a("eth_getFilterLogs"), o.prototype.getLogs = a("eth_getLogs"), o.prototype.getWork = a("eth_getWork"), o.prototype.submitWork = a("eth_submitWork"), o.prototype.submitHashrate = a("eth_submitHashrate"), o.prototype.sendAsync = function (e, t) { var r; this.currentProvider.sendAsync((r = e, n({ id: i(), jsonrpc: "2.0", params: [] }, r)), function (e, r) { if (!e && r.error && (e = new Error("EthQuery - RPC Error - " + r.error.message)), e)
                        return t(e); t(null, r.result); }); }; }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t, r) { ((0, n.default)(e) ? h : l)(e, (0, u.default)(t), r); };
                        var n = d(r(25)), i = d(r(76)), o = d(r(163)), a = d(r(79)), s = d(r(18)), f = d(r(37)), c = d(r(39)), u = d(r(12));
                        function d(e) { return e && e.__esModule ? e : { default: e }; }
                        function h(e, t, r) { r = (0, f.default)(r || s.default); var n = 0, o = 0, a = e.length; function u(e, t) { e ? r(e) : ++o !== a && t !== i.default || r(null); } for (0 === a && r(null); n < a; n++)
                            t(e[n], n, (0, c.default)(u)); }
                        var l = (0, a.default)(o.default, 1 / 0);
                        e.exports = t.default;
                    }, function (e, t, r) { var n = r(72).Symbol; e.exports = n; }, function (e, t, r) { var n = r(73), i = "object" == typeof self && self && self.Object === Object && self, o = n || i || Function("return this")(); e.exports = o; }, function (e, t, r) { (function (t) { var r = "object" == typeof t && t && t.Object === Object && t; e.exports = r; }).call(this, r(8)); }, function (e, t) { e.exports = function (e) { var t = typeof e; return null != e && ("object" == t || "function" == t); }; }, function (e, t) { var r = 9007199254740991; e.exports = function (e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r; }; }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = {}, e.exports = t.default;
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) { return function (t, r, f) { if (f = (0, i.default)(f || n.default), e <= 0 || !t)
                            return f(null); var c = (0, o.default)(t), u = !1, d = 0, h = !1; function l(e, t) { if (d -= 1, e)
                            u = !0, f(e);
                        else {
                            if (t === s.default || u && d <= 0)
                                return u = !0, f(null);
                            h || p();
                        } } function p() { for (h = !0; d < e && !u;) {
                            var t = c();
                            if (null === t)
                                return u = !0, void (d <= 0 && f(null));
                            d += 1, r(t.value, t.key, (0, a.default)(l));
                        } h = !1; } p(); }; };
                        var n = f(r(18)), i = f(r(37)), o = f(r(164)), a = f(r(39)), s = f(r(76));
                        function f(e) { return e && e.__esModule ? e : { default: e }; }
                        e.exports = t.default;
                    }, function (e, t) { var r = Array.isArray; e.exports = r; }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t) { return function (r, n, i) { return e(r, t, n, i); }; }, e.exports = t.default;
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(81);
                        function i(e) { return "never" !== s(e); }
                        function o(e) { var t = a(e); return t >= e.params.length ? e.params : "eth_getBlockByNumber" === e.method ? e.params.slice(1) : e.params.slice(0, t); }
                        function a(e) { switch (e.method) {
                            case "eth_getStorageAt": return 2;
                            case "eth_getBalance":
                            case "eth_getCode":
                            case "eth_getTransactionCount":
                            case "eth_call":
                            case "eth_estimateGas": return 1;
                            case "eth_getBlockByNumber": return 0;
                            default: return;
                        } }
                        function s(e) { switch (e.method) {
                            case "web3_clientVersion":
                            case "web3_sha3":
                            case "eth_protocolVersion":
                            case "eth_getBlockTransactionCountByHash":
                            case "eth_getUncleCountByBlockHash":
                            case "eth_getCode":
                            case "eth_getBlockByHash":
                            case "eth_getTransactionByHash":
                            case "eth_getTransactionByBlockHashAndIndex":
                            case "eth_getTransactionReceipt":
                            case "eth_getUncleByBlockHashAndIndex":
                            case "eth_getCompilers":
                            case "eth_compileLLL":
                            case "eth_compileSolidity":
                            case "eth_compileSerpent":
                            case "shh_version": return "perma";
                            case "eth_getBlockByNumber":
                            case "eth_getBlockTransactionCountByNumber":
                            case "eth_getUncleCountByBlockNumber":
                            case "eth_getTransactionByBlockNumberAndIndex":
                            case "eth_getUncleByBlockNumberAndIndex": return "fork";
                            case "eth_gasPrice":
                            case "eth_getBalance":
                            case "eth_getStorageAt":
                            case "eth_getTransactionCount":
                            case "eth_call":
                            case "eth_estimateGas":
                            case "eth_getFilterLogs":
                            case "eth_getLogs":
                            case "eth_blockNumber": return "block";
                            case "net_version":
                            case "net_peerCount":
                            case "net_listening":
                            case "eth_syncing":
                            case "eth_sign":
                            case "eth_coinbase":
                            case "eth_mining":
                            case "eth_hashrate":
                            case "eth_accounts":
                            case "eth_sendTransaction":
                            case "eth_sendRawTransaction":
                            case "eth_newFilter":
                            case "eth_newBlockFilter":
                            case "eth_newPendingTransactionFilter":
                            case "eth_uninstallFilter":
                            case "eth_getFilterChanges":
                            case "eth_getWork":
                            case "eth_submitWork":
                            case "eth_submitHashrate":
                            case "db_putString":
                            case "db_getString":
                            case "db_putHex":
                            case "db_getHex":
                            case "shh_post":
                            case "shh_newIdentity":
                            case "shh_hasIdentity":
                            case "shh_newGroup":
                            case "shh_addToGroup":
                            case "shh_newFilter":
                            case "shh_uninstallFilter":
                            case "shh_getFilterChanges":
                            case "shh_getMessages": return "never";
                        } }
                        e.exports = { cacheIdentifierForPayload: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (!i(e))
                                return null; var r = t.includeBlockRef ? e.params : o(e); return e.method + ":" + n(r); }, canCache: i, blockTagForPayload: function (e) { var t = a(e); if (t >= e.params.length)
                                return null; return e.params[t]; }, paramsWithoutBlockTag: o, blockTagParamIndex: a, cacheTypeForPayload: s };
                    }, function (e, t, r) { var n = "undefined" != typeof JSON ? JSON : r(190); e.exports = function (e, t) { t || (t = {}), "function" == typeof t && (t = { cmp: t }); var r = t.space || ""; "number" == typeof r && (r = Array(r + 1).join(" ")); var a, s = "boolean" == typeof t.cycles && t.cycles, f = t.replacer || function (e, t) { return t; }, c = t.cmp && (a = t.cmp, function (e) { return function (t, r) { var n = { key: t, value: e[t] }, i = { key: r, value: e[r] }; return a(n, i); }; }), u = []; return function e(t, a, d, h) { var l = r ? "\n" + new Array(h + 1).join(r) : "", p = r ? ": " : ":"; if (d && d.toJSON && "function" == typeof d.toJSON && (d = d.toJSON()), void 0 !== (d = f.call(t, a, d))) {
                        if ("object" != typeof d || null === d)
                            return n.stringify(d);
                        if (i(d)) {
                            for (var b = [], g = 0; g < d.length; g++) {
                                var v = e(d, g, d[g], h + 1) || n.stringify(null);
                                b.push(l + r + v);
                            }
                            return "[" + b.join(",") + l + "]";
                        }
                        if (-1 !== u.indexOf(d)) {
                            if (s)
                                return n.stringify("__cycle__");
                            throw new TypeError("Converting circular structure to JSON");
                        }
                        u.push(d);
                        var y = o(d).sort(c && c(d));
                        for (b = [], g = 0; g < y.length; g++) {
                            var m = e(d, a = y[g], d[a], h + 1);
                            if (m) {
                                var _ = n.stringify(a) + p + m;
                                b.push(l + r + _);
                            }
                        }
                        return u.splice(u.indexOf(d), 1), "{" + b.join(",") + l + "}";
                    } }({ "": e }, "", e, 0); }; var i = Array.isArray || function (e) { return "[object Array]" === {}.toString.call(e); }, o = Object.keys || function (e) { var t = Object.prototype.hasOwnProperty || function () { return !0; }, r = []; for (var n in e)
                        t.call(e, n) && r.push(n); return r; }; }, function (e, t, r) { var n = r(199).Mutex, i = r(42), o = r(83), a = r(201), s = r(203), f = r(204), _j = r(19), c = _j.intToHex, u = _j.hexToInt; function d(e) {
                        var _this = this;
                        return h(function () {
                            var t = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                t[_i] = arguments[_i];
                            }
                            return __awaiter(_this, void 0, void 0, function () { var r; return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0: return [4 /*yield*/, e.apply(void 0, t)];
                                    case 1:
                                        r = _j.sent();
                                        return [2 /*return*/, c(r.id)];
                                }
                            }); });
                        });
                    } function h(e) {
                        var _this = this;
                        return i(function (t, r) { return __awaiter(_this, void 0, void 0, function () { var n; return __generator(this, function (_j) {
                            switch (_j.label) {
                                case 0: return [4 /*yield*/, e.apply(null, t.params)];
                                case 1:
                                    n = _j.sent();
                                    r.result = n;
                                    return [2 /*return*/];
                            }
                        }); }); });
                    } function l(e, t) { var r = []; for (var t_3 in e)
                        r.push(e[t_3]); return r; } e.exports = function (_j) {
                        var _this = this;
                        var e = _j.blockTracker, t = _j.provider;
                        var r = 0, i = {};
                        var p = new n, b = function (_j) {
                            var _this = this;
                            var e = _j.mutex;
                            return function (t) { return function (r, n, i, o) { return __awaiter(_this, void 0, void 0, function () { var a; return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0: return [4 /*yield*/, e.acquire()];
                                    case 1:
                                        a = _j.sent();
                                        a(), t(r, n, i, o);
                                        return [2 /*return*/];
                                }
                            }); }); }; };
                        }({ mutex: p }), g = o({ eth_newFilter: b(d(y)), eth_newBlockFilter: b(d(m)), eth_newPendingTransactionFilter: b(d(_)), eth_uninstallFilter: b(h(A)), eth_getFilterChanges: b(h(w)), eth_getFilterLogs: b(h(E)) }), v = function (_j) {
                            var e = _j.oldBlock, t = _j.newBlock;
                            return __awaiter(_this, void 0, void 0, function () {
                                var r, e_4;
                                var _this = this;
                                return __generator(this, function (_k) {
                                    switch (_k.label) {
                                        case 0:
                                            if (0 === i.length)
                                                return [2 /*return*/];
                                            return [4 /*yield*/, p.acquire()];
                                        case 1:
                                            r = _k.sent();
                                            _k.label = 2;
                                        case 2:
                                            _k.trys.push([2, 4, , 5]);
                                            return [4 /*yield*/, Promise.all(l(i).map(function (r) { return __awaiter(_this, void 0, void 0, function () { var e_5; return __generator(this, function (_j) {
                                                    switch (_j.label) {
                                                        case 0:
                                                            _j.trys.push([0, 2, , 3]);
                                                            return [4 /*yield*/, r.update({ oldBlock: e, newBlock: t })];
                                                        case 1:
                                                            _j.sent();
                                                            return [3 /*break*/, 3];
                                                        case 2:
                                                            e_5 = _j.sent();
                                                            console.error(e_5);
                                                            return [3 /*break*/, 3];
                                                        case 3: return [2 /*return*/];
                                                    }
                                                }); }); }))];
                                        case 3:
                                            _k.sent();
                                            return [3 /*break*/, 5];
                                        case 4:
                                            e_4 = _k.sent();
                                            console.error(e_4);
                                            return [3 /*break*/, 5];
                                        case 5:
                                            r();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        };
                        return g.newLogFilter = y, g.newBlockFilter = m, g.newPendingTransactionFilter = _, g.uninstallFilter = A, g.getFilterChanges = w, g.getFilterLogs = E, g.destroy = (function () { !function () {
                            return __awaiter(this, void 0, void 0, function () { var e; return __generator(this, function (_j) {
                                e = l(i).length;
                                i = {}, x({ prevFilterCount: e, newFilterCount: 0 });
                                return [2 /*return*/];
                            }); });
                        }(); }), g;
                        function y(e) {
                            return __awaiter(this, void 0, void 0, function () { var r; return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0:
                                        r = new a({ provider: t, params: e });
                                        return [4 /*yield*/, S(r)];
                                    case 1:
                                        _j.sent();
                                        return [2 /*return*/, r];
                                }
                            }); });
                        }
                        function m() {
                            return __awaiter(this, void 0, void 0, function () { var e; return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0:
                                        e = new s({ provider: t });
                                        return [4 /*yield*/, S(e)];
                                    case 1:
                                        _j.sent();
                                        return [2 /*return*/, e];
                                }
                            }); });
                        }
                        function _() {
                            return __awaiter(this, void 0, void 0, function () { var e; return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0:
                                        e = new f({ provider: t });
                                        return [4 /*yield*/, S(e)];
                                    case 1:
                                        _j.sent();
                                        return [2 /*return*/, e];
                                }
                            }); });
                        }
                        function w(e) {
                            return __awaiter(this, void 0, void 0, function () { var t, r, n; return __generator(this, function (_j) {
                                t = u(e), r = i[t];
                                if (!r)
                                    throw new Error("No filter for index \"" + t + "\"");
                                n = r.getChangesAndClear();
                                return [2 /*return*/, n];
                            }); });
                        }
                        function E(e) {
                            return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_j) {
                                t = u(e), r = i[t];
                                if (!r)
                                    throw new Error("No filter for index \"" + t + "\"");
                                return [2 /*return*/, ("log" === r.type ? results = r.getAllResults() : results = [], results)];
                            }); });
                        }
                        function A(e) {
                            return __awaiter(this, void 0, void 0, function () { var t, r, n, _j; return __generator(this, function (_k) {
                                switch (_k.label) {
                                    case 0:
                                        t = u(e), r = i[t], n = Boolean(r);
                                        _j = n;
                                        if (!_j) return [3 /*break*/, 2];
                                        return [4 /*yield*/, function (e) {
                                                return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_j) {
                                                    t = l(i).length;
                                                    delete i[e];
                                                    r = l(i).length;
                                                    x({ prevFilterCount: t, newFilterCount: r });
                                                    return [2 /*return*/];
                                                }); });
                                            }(t)];
                                    case 1:
                                        _j = (_k.sent());
                                        _k.label = 2;
                                    case 2: return [2 /*return*/, (_j, n)];
                                }
                            }); });
                        }
                        function S(t) {
                            return __awaiter(this, void 0, void 0, function () { var n, o, a; return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0:
                                        n = l(i).length;
                                        return [4 /*yield*/, e.getLatestBlock()];
                                    case 1:
                                        o = _j.sent();
                                        return [4 /*yield*/, t.initialize({ currentBlock: o })];
                                    case 2:
                                        _j.sent(), i[++r] = t, t.id = r, t.idHex = c(r);
                                        a = l(i).length;
                                        return [2 /*return*/, (x({ prevFilterCount: n, newFilterCount: a }), r)];
                                }
                            }); });
                        }
                        function x(_j) {
                            var t = _j.prevFilterCount, r = _j.newFilterCount;
                            0 === t && r > 0 ? e.on("sync", v) : t > 0 && 0 === r && e.removeListener("sync", v);
                        }
                    }; }, function (e, t, r) { e.exports = r(200); }, function (e, t, r) { e.exports = Object.assign(e.exports, r(218), r(219), r(90), r(238), r(239), r(240)); }, function (e, t, r) {
                        "use strict";
                        e.exports = function (e, t) { return function () { for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
                            r[n] = arguments[n]; return e.apply(t, r); }; };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(4), i = r(224), o = r(226), a = r(227), s = r(228), f = r(87), c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || r(229);
                        e.exports = function (e) { return new Promise(function (t, u) { var d = e.data, h = e.headers; n.isFormData(d) && delete h["Content-Type"]; var l = new XMLHttpRequest, p = "onreadystatechange", b = !1; if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in l || s(e.url) || (l = new window.XDomainRequest, p = "onload", b = !0, l.onprogress = function () { }, l.ontimeout = function () { }), e.auth) {
                            var g = e.auth.username || "", v = e.auth.password || "";
                            h.Authorization = "Basic " + c(g + ":" + v);
                        } if (l.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), l.timeout = e.timeout, l[p] = function () { if (l && (4 === l.readyState || b) && (0 !== l.status || l.responseURL && 0 === l.responseURL.indexOf("file:"))) {
                            var r = "getAllResponseHeaders" in l ? a(l.getAllResponseHeaders()) : null, n = { data: e.responseType && "text" !== e.responseType ? l.response : l.responseText, status: 1223 === l.status ? 204 : l.status, statusText: 1223 === l.status ? "No Content" : l.statusText, headers: r, config: e, request: l };
                            i(t, u, n), l = null;
                        } }, l.onerror = function () { u(f("Network Error", e, null, l)), l = null; }, l.ontimeout = function () { u(f("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", l)), l = null; }, n.isStandardBrowserEnv()) {
                            var y = r(230), m = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? y.read(e.xsrfCookieName) : void 0;
                            m && (h[e.xsrfHeaderName] = m);
                        } if ("setRequestHeader" in l && n.forEach(h, function (e, t) { void 0 === d && "content-type" === t.toLowerCase() ? delete h[t] : l.setRequestHeader(t, e); }), e.withCredentials && (l.withCredentials = !0), e.responseType)
                            try {
                                l.responseType = e.responseType;
                            }
                            catch (t) {
                                if ("json" !== e.responseType)
                                    throw t;
                            } "function" == typeof e.onDownloadProgress && l.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && l.upload && l.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) { l && (l.abort(), u(e), l = null); }), void 0 === d && (d = null), l.send(d); }); };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(225);
                        e.exports = function (e, t, r, i, o) { var a = new Error(e); return n(a, t, r, i, o); };
                    }, function (e, t, r) {
                        "use strict";
                        e.exports = function (e) { return !(!e || !e.__CANCEL__); };
                    }, function (e, t, r) {
                        "use strict";
                        function n(e) { this.message = e; }
                        n.prototype.toString = function () { return "Cancel" + (this.message ? ": " + this.message : ""); }, n.prototype.__CANCEL__ = !0, e.exports = n;
                    }, function (e, t, r) { var n = r(45), i = r(47), o = "https://", a = "http://"; e.exports = { Node: /** @class */ (function () {
                            function class_2(e, t, r) {
                                this.network = e, this.netID = t;
                                var n = r.split(":");
                                this.ip = n[0], this.port = n[1], r.includes(o) || r.includes(a) ? this.ipPort = r : "443" === this.port || 443 === this.port ? this.ipPort = o + r : this.ipPort = a + r;
                            }
                            class_2.prototype.isValid = function () { for (var e in this)
                                if (!this.hasOwnProperty(e) || "" == this[e])
                                    return !1; return !0; };
                            class_2.prototype.isEqual = function (e, t) { return this.netID == e.toString() && this.network == t.toString(); };
                            class_2.prototype.sendRelay = function (e, t) {
                                return __awaiter(this, void 0, void 0, function () { var a_1, r, o, e_6; return __generator(this, function (_j) {
                                    switch (_j.label) {
                                        case 0:
                                            _j.trys.push([0, 2, , 3]);
                                            a_1 = n.create({ baseURL: this.ipPort, timeout: e.configuration.requestTimeOut, headers: { "Content-Type": "application/json" } });
                                            return [4 /*yield*/, a_1.post(i.relayPath, e.toJSON())];
                                        case 1:
                                            r = _j.sent();
                                            if (200 == r.status && null != r.data) {
                                                o = r.data;
                                                return [2 /*return*/, t ? void t(o, null) : o];
                                            }
                                            return [2 /*return*/, t ? void t(null, new Error("Failed to send relay with error: " + r.data)) : new Error("Failed to send relay with error: " + r.data)];
                                        case 2:
                                            e_6 = _j.sent();
                                            return [2 /*return*/, t ? void t(null, new Error("Failed to send relay with error: " + e_6)) : new Error("Failed to send relay with error: " + e_6)];
                                        case 3: return [2 /*return*/];
                                    }
                                }); });
                            };
                            return class_2;
                        }()) }; }, function (e, t, r) {
                        "use strict";
                        var n = r(13).EventEmitter, i = r(9).inherits, o = r(14), a = r(155), s = r(158), f = r(186), c = r(189), u = (r(80), r(40));
                        function d(e) { n.call(this), this.setMaxListeners(30), e = e || {}; var t = { sendAsync: this._handleAsync.bind(this) }, r = e.blockTrackerProvider || t; this._blockTracker = e.blockTracker || new a({ provider: r, pollingInterval: e.pollingInterval || 4e3, setSkipCacheFlag: !0 }), this._ready = new c, this.currentBlock = null, this._providers = []; }
                        e.exports = d, i(d, n), Object.defineProperty(d, "name", { value: "HttpProvider" }), d.prototype.start = function () { var e = this, t = (arguments.length > 0 && void 0 !== arguments[0] && arguments[0], this); t._ready.go(), t._blockTracker.on("latest", function (r) { t._getBlockByNumber(r, function (r, n) { if (r)
                            e.emit("error", r);
                        else if (n) {
                            var i, a = (i = n, { number: o.toBuffer(i.number), hash: o.toBuffer(i.hash), parentHash: o.toBuffer(i.parentHash), nonce: o.toBuffer(i.nonce), mixHash: o.toBuffer(i.mixHash), sha3Uncles: o.toBuffer(i.sha3Uncles), logsBloom: o.toBuffer(i.logsBloom), transactionsRoot: o.toBuffer(i.transactionsRoot), stateRoot: o.toBuffer(i.stateRoot), receiptsRoot: o.toBuffer(i.receiptRoot || i.receiptsRoot), miner: o.toBuffer(i.miner), difficulty: o.toBuffer(i.difficulty), totalDifficulty: o.toBuffer(i.totalDifficulty), size: o.toBuffer(i.size), extraData: o.toBuffer(i.extraData), gasLimit: o.toBuffer(i.gasLimit), gasUsed: o.toBuffer(i.gasUsed), timestamp: o.toBuffer(i.timestamp), transactions: i.transactions });
                            t._setCurrentBlock(a), t.emit("rawBlock", n), t.emit("latest", n);
                        } }); }), t._blockTracker.on("sync", t.emit.bind(t, "sync")), t._blockTracker.on("error", t.emit.bind(t, "error")), t._running = !0, t.emit("start"); }, d.prototype.stop = function () { this._blockTracker.removeAllListeners(), this._running = !1, this.emit("stop"); }, d.prototype.isRunning = function () { return this._running; }, d.prototype.addProvider = function (e, t) { "number" == typeof t ? this._providers.splice(t, 0, e) : this._providers.push(e), e.setEngine(this); }, d.prototype.removeProvider = function (e) { var t = this._providers.indexOf(e); if (t < 0)
                            throw new Error("Provider not found."); this._providers.splice(t, 1); }, d.prototype.send = function (e) { throw new Error("Web3ProviderEngine does not support synchronous requests."); }, d.prototype.sendAsync = function (e, t) { var r = this; r._ready.await(function () { Array.isArray(e) ? s(e, r._handleAsync.bind(r), t) : r._handleAsync(e, t); }); }, d.prototype._getBlockByNumber = function (e, t) { var r = u({ method: "eth_getBlockByNumber", params: [e, !1], skipCache: !0 }); this._handleAsync(r, function (e, r) { return e ? t(e) : t(null, r.result); }); }, d.prototype._handleAsync = function (e, t) { var r = this, n = -1, i = null, o = null, a = []; function s(r, n) { o = r, i = n, f(a, function (e, t) { e ? e(o, i, t) : t(); }, function () { var r = { id: e.id, jsonrpc: e.jsonrpc, result: i }; null != o ? (r.error = { message: o.stack || o.message || o, code: -32e3 }, t(o, r)) : t(null, r); }); } !function t(i) { n += 1; a.unshift(i); if (n >= r._providers.length)
                            s(new Error('Request for method "' + e.method + '" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'));
                        else
                            try {
                                var o = r._providers[n];
                                o.handleRequest(e, t, s);
                            }
                            catch (e) {
                                s(e);
                            } }(); }, d.prototype._setCurrentBlock = function (e) { this.currentBlock = e, this.emit("block", e); };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(9).inherits, i = r(27);
                        function o(e) { e = e || {}, this.staticResponses = e; }
                        e.exports = o, n(o, i), o.prototype.handleRequest = function (e, t, r) { var n = this.staticResponses[e.method]; "function" == typeof n ? n(e, t, r) : void 0 !== n ? setTimeout(function () { return r(null, n); }) : t(); };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(41), i = r(82), o = function (e) { function t() { return function (e, t) { if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function"); }(this, t), function (e, t) { if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t; }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, function (e) { var t = e.blockTracker, r = e.provider; e.engine; return i({ blockTracker: t, provider: r }); })); } return function (e, t) { if ("function" != typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }(t, n), t; }();
                        e.exports = o;
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(206), i = r(207), o = r(9).inherits, a = r(14), s = r(209), f = r(34), c = r(213), u = r(27), d = r(214), h = /^[0-9A-Fa-f]+$/g;
                        function l(e) { this.nonceLock = c(1), e.getAccounts && (this.getAccounts = e.getAccounts), e.processTransaction && (this.processTransaction = e.processTransaction), e.processMessage && (this.processMessage = e.processMessage), e.processPersonalMessage && (this.processPersonalMessage = e.processPersonalMessage), e.processTypedMessage && (this.processTypedMessage = e.processTypedMessage), e.processTypedMessageV3 && (this.processTypedMessageV3 = e.processTypedMessageV3), this.approveTransaction = e.approveTransaction || this.autoApprove, this.approveMessage = e.approveMessage || this.autoApprove, this.approvePersonalMessage = e.approvePersonalMessage || this.autoApprove, this.approveTypedMessage = e.approveTypedMessage || this.autoApprove, this.approveTypedMessageV3 = e.approveTypedMessageV3 || this.autoApprove, e.signTransaction && (this.signTransaction = e.signTransaction || y("signTransaction")), e.signMessage && (this.signMessage = e.signMessage || y("signMessage")), e.signPersonalMessage && (this.signPersonalMessage = e.signPersonalMessage || y("signPersonalMessage")), e.signTypedMessage && (this.signTypedMessage = e.signTypedMessage || y("signTypedMessage")), e.signTypedMessageV3 && (this.signTypedMessageV3 = e.signTypedMessageV3 || y("signTypedMessageV3")), e.recoverPersonalSignature && (this.recoverPersonalSignature = e.recoverPersonalSignature), e.publishTransaction && (this.publishTransaction = e.publishTransaction), this.estimateGas = e.estimateGas || this.estimateGas, this.getGasPrice = e.getGasPrice || this.getGasPrice; }
                        function p(e) { return e.toLowerCase(); }
                        function b(e) { var t = a.addHexPrefix(e); return a.isValidAddress(t); }
                        function g(e) { var t = a.addHexPrefix(e); return !a.isValidAddress(t) && v(e); }
                        function v(e) { return "string" == typeof e && ("0x" === e.slice(0, 2) && e.slice(2).match(h)); }
                        function y(e) { return function (t, r) { r(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "' + e + '" fn in constructor options')); }; }
                        e.exports = l, o(l, u), l.prototype.handleRequest = function (e, t, r) { var i = this; i._parityRequests = {}, i._parityRequestCount = 0; var o, a = void 0, s = void 0, c = void 0, u = void 0, d = void 0; switch (e.method) {
                            case "eth_coinbase": return void i.getAccounts(function (e, t) { if (e)
                                return r(e); var n = t[0] || null; r(null, n); });
                            case "eth_accounts": return void i.getAccounts(function (e, t) { if (e)
                                return r(e); r(null, t); });
                            case "eth_sendTransaction": return a = e.params[0], void n([function (e) { return i.validateTransaction(a, e); }, function (e) { return i.processTransaction(a, e); }], r);
                            case "eth_signTransaction": return a = e.params[0], void n([function (e) { return i.validateTransaction(a, e); }, function (e) { return i.processSignTransaction(a, e); }], r);
                            case "eth_sign": return g(e.params[1]) && b(e.params[0]) ? (d = e.params[0], u = e.params[1]) : (u = e.params[0], d = e.params[1]), c = e.params[2] || {}, s = f(c, { from: d, data: u }), void n([function (e) { return i.validateMessage(s, e); }, function (e) { return i.processMessage(s, e); }], r);
                            case "personal_sign": return function () { var t = e.params[0]; if (g(e.params[1]) && b(t)) {
                                "[message, address]. This was previously handled incorrectly, ", "and has been corrected automatically. ", "Please switch this param order for smooth behavior in the future.", console.warn("The eth_personalSign method requires params ordered [message, address]. This was previously handled incorrectly, and has been corrected automatically. Please switch this param order for smooth behavior in the future."), d = e.params[0], u = e.params[1];
                            }
                            else
                                u = e.params[0], d = e.params[1]; c = e.params[2] || {}, s = f(c, { from: d, data: u }), n([function (e) { return i.validatePersonalMessage(s, e); }, function (e) { return i.processPersonalMessage(s, e); }], r); }();
                            case "personal_ecRecover": return function () { u = e.params[0]; var t = e.params[1]; c = e.params[2] || {}, s = f(c, { sig: t, data: u }), i.recoverPersonalSignature(s, r); }();
                            case "eth_signTypedData": return !b(e.params[1]) && b(e.params[0]) ? (d = e.params[0], u = e.params[1]) : (u = e.params[0], d = e.params[1]), c = e.params[2] || {}, s = f(c, { from: d, data: u }), void n([function (e) { return i.validateTypedMessage(s, e); }, function (e) { return i.processTypedMessage(s, e); }], r);
                            case "eth_signTypedData_v3": return !b(e.params[1]) && b(e.params[0]) ? (d = e.params[0], u = e.params[1]) : (u = e.params[0], d = e.params[1]), c = e.params[2] || {}, s = f(c, { from: d, data: u }), void n([function (e) { return i.validateTypedMessageV3(s, e); }, function (e) { return i.processTypedMessageV3(s, e); }], r);
                            case "parity_postTransaction": return a = e.params[0], void i.parityPostTransaction(a, r);
                            case "parity_postSign": return d = e.params[0], u = e.params[1], void i.parityPostSign(d, u, r);
                            case "parity_checkRequest": return o = e.params[0], void i.parityCheckRequest(o, r);
                            case "parity_defaultAccount": return void i.getAccounts(function (e, t) { if (e)
                                return r(e); var n = t[0] || null; r(null, n); });
                            default: return void t();
                        } }, l.prototype.getAccounts = function (e) { e(null, []); }, l.prototype.processTransaction = function (e, t) { var r = this; n([function (t) { return r.approveTransaction(e, t); }, function (e, t) { return r.checkApproval("transaction", e, t); }, function (t) { return r.finalizeAndSubmitTx(e, t); }], t); }, l.prototype.processSignTransaction = function (e, t) { var r = this; n([function (t) { return r.approveTransaction(e, t); }, function (e, t) { return r.checkApproval("transaction", e, t); }, function (t) { return r.finalizeTx(e, t); }], t); }, l.prototype.processMessage = function (e, t) { var r = this; n([function (t) { return r.approveMessage(e, t); }, function (e, t) { return r.checkApproval("message", e, t); }, function (t) { return r.signMessage(e, t); }], t); }, l.prototype.processPersonalMessage = function (e, t) { var r = this; n([function (t) { return r.approvePersonalMessage(e, t); }, function (e, t) { return r.checkApproval("message", e, t); }, function (t) { return r.signPersonalMessage(e, t); }], t); }, l.prototype.processTypedMessage = function (e, t) { var r = this; n([function (t) { return r.approveTypedMessage(e, t); }, function (e, t) { return r.checkApproval("message", e, t); }, function (t) { return r.signTypedMessage(e, t); }], t); }, l.prototype.processTypedMessageV3 = function (e, t) { var r = this; n([function (t) { return r.approveTypedMessageV3(e, t); }, function (e, t) { return r.checkApproval("message", e, t); }, function (t) { return r.signTypedMessageV3(e, t); }], t); }, l.prototype.autoApprove = function (e, t) { t(null, !0); }, l.prototype.checkApproval = function (e, t, r) { r(t ? null : new Error("User denied " + e + " signature.")); }, l.prototype.parityPostTransaction = function (e, t) { var r = this, n = "0x" + r._parityRequestCount.toString(16); r._parityRequestCount++, r.emitPayload({ method: "eth_sendTransaction", params: [e] }, function (e, t) { if (e)
                            r._parityRequests[n] = { error: e };
                        else {
                            var i = t.result;
                            r._parityRequests[n] = i;
                        } }), t(null, n); }, l.prototype.parityPostSign = function (e, t, r) { var n = this, i = "0x" + n._parityRequestCount.toString(16); n._parityRequestCount++, n.emitPayload({ method: "eth_sign", params: [e, t] }, function (e, t) { if (e)
                            n._parityRequests[i] = { error: e };
                        else {
                            var r = t.result;
                            n._parityRequests[i] = r;
                        } }), r(null, i); }, l.prototype.parityCheckRequest = function (e, t) { var r = this._parityRequests[e] || null; return r ? r.error ? t(r.error) : void t(null, r) : t(null, null); }, l.prototype.recoverPersonalSignature = function (e, t) { var r = void 0; try {
                            r = s.recoverPersonalSignature(e);
                        }
                        catch (e) {
                            return t(e);
                        } t(null, r); }, l.prototype.validateTransaction = function (e, t) { if (void 0 === e.from)
                            return t(new Error("Undefined address - from address required to sign transaction.")); this.validateSender(e.from, function (r, n) { return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign transaction for this address: "' + e.from + '"')); }); }, l.prototype.validateMessage = function (e, t) { if (void 0 === e.from)
                            return t(new Error("Undefined address - from address required to sign message.")); this.validateSender(e.from, function (r, n) { return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign message for this address: "' + e.from + '"')); }); }, l.prototype.validatePersonalMessage = function (e, t) { return void 0 === e.from ? t(new Error("Undefined address - from address required to sign personal message.")) : void 0 === e.data ? t(new Error("Undefined message - message required to sign personal message.")) : v(e.data) ? void this.validateSender(e.from, function (r, n) { return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign message for this address: "' + e.from + '"')); }) : t(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex.")); }, l.prototype.validateTypedMessage = function (e, t) { return void 0 === e.from ? t(new Error("Undefined address - from address required to sign typed data.")) : void 0 === e.data ? t(new Error("Undefined data - message required to sign typed data.")) : void this.validateSender(e.from, function (r, n) { return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign message for this address: "' + e.from + '"')); }); }, l.prototype.validateTypedMessageV3 = function (e, t) { return void 0 === e.from ? t(new Error("Undefined address - from address required to sign typed data.")) : void 0 === e.data ? t(new Error("Undefined data - message required to sign typed data.")) : void this.validateSender(e.from, function (r, n) { return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign message for this address: "' + e.from + '"')); }); }, l.prototype.validateSender = function (e, t) { if (!e)
                            return t(null, !1); this.getAccounts(function (r, n) { if (r)
                            return t(r); var i = -1 !== n.map(p).indexOf(e.toLowerCase()); t(null, i); }); }, l.prototype.finalizeAndSubmitTx = function (e, t) { var r = this; r.nonceLock.take(function () { n([r.fillInTxExtras.bind(r, e), r.signTransaction.bind(r), r.publishTransaction.bind(r)], function (e, n) { if (r.nonceLock.leave(), e)
                            return t(e); t(null, n); }); }); }, l.prototype.finalizeTx = function (e, t) { var r = this; r.nonceLock.take(function () { n([r.fillInTxExtras.bind(r, e), r.signTransaction.bind(r)], function (n, i) { if (r.nonceLock.leave(), n)
                            return t(n); t(null, { raw: i, tx: e }); }); }); }, l.prototype.publishTransaction = function (e, t) { this.emitPayload({ method: "eth_sendRawTransaction", params: [e] }, function (e, r) { if (e)
                            return t(e); t(null, r.result); }); }, l.prototype.estimateGas = function (e, t) { d(this.engine, e, t); }, l.prototype.getGasPrice = function (e) { this.emitPayload({ method: "eth_gasPrice", params: [] }, function (t, r) { if (t)
                            return e(t); e(null, r.result); }); }, l.prototype.fillInTxExtras = function (e, t) { var r = e.from, n = {}; void 0 === e.gasPrice && (n.gasPrice = this.getGasPrice.bind(this)), void 0 === e.nonce && (n.nonce = this.emitPayload.bind(this, { method: "eth_getTransactionCount", params: [r, "pending"] })), void 0 === e.gas && (n.gas = this.estimateGas.bind(this, function (e) { return { from: e.from, to: e.to, value: e.value, data: e.data, gas: e.gas, gasPrice: e.gasPrice, nonce: e.nonce }; }(e))), i(n, function (r, n) { if (r)
                            return t(r); var i = {}; n.gasPrice && (i.gasPrice = n.gasPrice), n.nonce && (i.nonce = n.nonce.result), n.gas && (i.gas = n.gas), t(null, f(e, i)); }); };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(41), i = r(217), o = function (e) { function t() { return function (e, t) { if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function"); }(this, t), function (e, t) { if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t; }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, function (e) { var t = e.blockTracker, r = e.provider, n = e.engine, o = i({ blockTracker: t, provider: r }), a = o.events, s = o.middleware; return a.on("notification", function (e) { return n.emit("data", null, e); }), s; })); } return function (e, t) { if ("function" != typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }(t, n), t; }();
                        e.exports = o;
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = t.ERR_NOT_IN_IFRAME = t.ERR_CONNECTION_TIMEOUT = t.ERR_CONNECTION_DESTROYED = void 0;
                        t.ERR_CONNECTION_DESTROYED = "ConnectionDestroyed";
                        t.ERR_CONNECTION_TIMEOUT = "ConnectionTimeout";
                        t.ERR_NOT_IN_IFRAME = "NotInIframe";
                        var n, i = { "http:": "80", "https:": "443" }, o = /^(https?:)?\/\/([^\/:]+)(:(\d+))?/, a = { ERR_CONNECTION_DESTROYED: "ConnectionDestroyed", ERR_CONNECTION_TIMEOUT: "ConnectionTimeout", ERR_NOT_IN_IFRAME: "NotInIframe", Promise: function () { try {
                                return window ? window.Promise : null;
                            }
                            catch (e) {
                                return null;
                            } }(), debug: !1 }, s = (n = 0, function () { return ++n; }), f = function () { if (a.debug) {
                            for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                                r[n] = arguments[n];
                            (e = console).log.apply(e, ["[Penpal]"].concat(r));
                        } }, c = function (e) { var t = []; return e(function () { t.forEach(function (e) { e(); }); }), { then: function (e) { t.push(e); } }; }, u = function (e) { return { name: e.name, message: e.message, stack: e.stack }; }, d = function (e, t, r, n) { var i = t.localName, o = t.local, c = t.remote, u = t.remoteOrigin, d = !1; f("".concat(i, ": Connecting call sender")); var h = function (e) { return function () { for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                            r[n] = arguments[n]; if (f("".concat(i, ": Sending ").concat(e, "() call")), d) {
                            var h = new Error("Unable to send ".concat(e, "() call due ") + "to destroyed connection");
                            throw h.code = "ConnectionDestroyed", h;
                        } return new a.Promise(function (t, n) { var a = s(); o.addEventListener("message", function r(s) { if (s.source === c && s.origin === u && "reply" === s.data.penpal && s.data.id === a) {
                            f("".concat(i, ": Received ").concat(e, "() reply")), o.removeEventListener("message", r);
                            var d = s.data.returnValue;
                            s.data.returnValueIsError && (h = d, l = new Error, Object.keys(h).forEach(function (e) { return l[e] = h[e]; }), d = l), ("fulfilled" === s.data.resolution ? t : n)(d);
                        } var h, l; }), c.postMessage({ penpal: "call", id: a, methodName: e, args: r }, u); }); }; }; n.then(function () { d = !0; }), r.reduce(function (e, t) { return e[t] = h(t), e; }, e); }, h = function (e, t, r) { var n = e.localName, i = e.local, o = e.remote, s = e.remoteOrigin, c = !1; f("".concat(n, ": Connecting call receiver")); var d = function (e) { if (e.source === o && e.origin === s && "call" === e.data.penpal) {
                            var r = e.data, i = r.methodName, d = r.args, h = r.id;
                            if (f("".concat(n, ": Received ").concat(i, "() call")), i in t) {
                                var l = function (e) { return function (t) { if (f("".concat(n, ": Sending ").concat(i, "() reply")), c)
                                    f("".concat(n, ": Unable to send ").concat(i, "() reply due to destroyed connection"));
                                else {
                                    var r = { penpal: "reply", id: h, resolution: e, returnValue: t };
                                    "rejected" === e && t instanceof Error && (r.returnValue = u(t), r.returnValueIsError = !0);
                                    try {
                                        o.postMessage(r, s);
                                    }
                                    catch (e) {
                                        throw "DataCloneError" === e.name && o.postMessage({ penpal: "reply", id: h, resolution: "rejected", returnValue: u(e), returnValueIsError: !0 }, s), e;
                                    }
                                } }; };
                                new a.Promise(function (e) { return e(t[i].apply(t, d)); }).then(l("fulfilled"), l("rejected"));
                            }
                        } }; i.addEventListener("message", d), r.then(function () { c = !0, i.removeEventListener("message", d); }); };
                        a.connectToChild = function (e) { var t, r = e.url, n = e.appendTo, s = e.methods, u = void 0 === s ? {} : s, l = e.timeout, p = new c(function (e) { t = e; }), b = window, g = document.createElement("iframe"); (n || document.body).appendChild(g), p.then(function () { g.parentNode && g.parentNode.removeChild(g); }); var v = g.contentWindow || g.contentDocument.parentWindow, y = function (e) { var t, r, n, a = document.location, s = o.exec(e); s ? (t = s[1] ? s[1] : a.protocol, r = s[2], n = s[4]) : (t = a.protocol, r = a.hostname, n = a.port); var f = n && n !== i[t] ? ":".concat(n) : ""; return "".concat(t, "//").concat(r).concat(f); }(r); return { promise: new a.Promise(function (e, n) { var i; void 0 !== l && (i = setTimeout(function () { var e = new Error("Connection to child timed out after ".concat(l, "ms")); e.code = "ConnectionTimeout", n(e), t(); }, l)); var o, a, s = {}, m = function (t) { if (t.source === v && t.origin === y && "handshake" === t.data.penpal) {
                                f("Parent: Received handshake, sending reply"), t.source.postMessage({ penpal: "handshake-reply", methodNames: Object.keys(u) }, t.origin);
                                var r = { localName: "Parent", local: b, remote: v, remoteOrigin: t.origin };
                                a && a();
                                var n = new c(function (e) { p.then(e), a = e; });
                                h(r, u, n), o && o.forEach(function (e) { delete s[e]; }), o = t.data.methodNames, d(s, r, o, p), clearTimeout(i), e(s);
                            } }; b.addEventListener("message", m), p.then(function () { b.removeEventListener("message", m); var e = new Error("Connection destroyed"); e.code = "ConnectionDestroyed", n(e); }), f("Parent: Loading iframe"), g.src = r; }), iframe: g, destroy: t }; }, a.connectToParent = function () { var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = t.parentOrigin, n = void 0 === r ? "*" : r, i = t.methods, o = void 0 === i ? {} : i, s = t.timeout; if (window === window.top) {
                            var u = new Error("connectToParent() must be called within an iframe");
                            throw u.code = "NotInIframe", u;
                        } var l = new c(function (t) { e = t; }), p = window, b = p.parent; return { promise: new a.Promise(function (t, r) { var i; void 0 !== s && (i = setTimeout(function () { var t = new Error("Connection to parent timed out after ".concat(s, "ms")); t.code = "ConnectionTimeout", r(t), e(); }, s)); var a = function e(r) { if (("*" === n || n === r.origin) && r.source === b && "handshake-reply" === r.data.penpal) {
                                f("Child: Received handshake reply"), p.removeEventListener("message", e);
                                var a = { localName: "Child", local: p, remote: b, remoteOrigin: r.origin }, s = {};
                                h(a, o, l), d(s, a, r.data.methodNames, l), clearTimeout(i), t(s);
                            } }; p.addEventListener("message", a), l.then(function () { p.removeEventListener("message", a); var e = new Error("Connection destroyed"); e.code = "ConnectionDestroyed", r(e); }), f("Child: Sending handshake"), b.postMessage({ penpal: "handshake", methodNames: Object.keys(o) }, n); }), destroy: e }; };
                        var l = a;
                        t.default = l;
                    }, function (e, t) { e.exports = function (e) { return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8; }; }, function (e, t, r) {
                        "use strict";
                        var n = r(99), i = r(114);
                        e.exports = function (e) { var t = n(e), r = i(e); return function (e, n) { switch ("string" == typeof e ? e.toLowerCase() : e) {
                            case "keccak224": return new t(1152, 448, null, 224, n);
                            case "keccak256": return new t(1088, 512, null, 256, n);
                            case "keccak384": return new t(832, 768, null, 384, n);
                            case "keccak512": return new t(576, 1024, null, 512, n);
                            case "sha3-224": return new t(1152, 448, 6, 224, n);
                            case "sha3-256": return new t(1088, 512, 6, 256, n);
                            case "sha3-384": return new t(832, 768, 6, 384, n);
                            case "sha3-512": return new t(576, 1024, 6, 512, n);
                            case "shake128": return new r(1344, 256, 31, n);
                            case "shake256": return new r(1088, 512, 31, n);
                            default: throw new Error("Invald algorithm: " + e);
                        } }; };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(1).Buffer, i = r(20).Transform, o = r(0);
                        e.exports = function (e) { function t(t, r, n, o, a) { i.call(this, a), this._rate = t, this._capacity = r, this._delimitedSuffix = n, this._hashBitLength = o, this._options = a, this._state = new e, this._state.initialize(t, r), this._finalized = !1; } return o(t, i), t.prototype._transform = function (e, t, r) { var n = null; try {
                            this.update(e, t);
                        }
                        catch (e) {
                            n = e;
                        } r(n); }, t.prototype._flush = function (e) { var t = null; try {
                            this.push(this.digest());
                        }
                        catch (e) {
                            t = e;
                        } e(t); }, t.prototype.update = function (e, t) { if (!n.isBuffer(e) && "string" != typeof e)
                            throw new TypeError("Data must be a string or a buffer"); if (this._finalized)
                            throw new Error("Digest already called"); return n.isBuffer(e) || (e = n.from(e, t)), this._state.absorb(e), this; }, t.prototype.digest = function (e) { if (this._finalized)
                            throw new Error("Digest already called"); this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix); var t = this._state.squeeze(this._hashBitLength / 8); return void 0 !== e && (t = t.toString(e)), this._resetState(), t; }, t.prototype._resetState = function () { return this._state.initialize(this._rate, this._capacity), this; }, t.prototype._clone = function () { var e = new t(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options); return this._state.copy(e._state), e._finalized = this._finalized, e; }, t; };
                    }, function (e, t, r) {
                        "use strict";
                        t.byteLength = function (e) { var t = c(e), r = t[0], n = t[1]; return 3 * (r + n) / 4 - n; }, t.toByteArray = function (e) { for (var t, r = c(e), n = r[0], a = r[1], s = new o(function (e, t, r) { return 3 * (t + r) / 4 - r; }(0, n, a)), f = 0, u = a > 0 ? n - 4 : n, d = 0; d < u; d += 4)
                            t = i[e.charCodeAt(d)] << 18 | i[e.charCodeAt(d + 1)] << 12 | i[e.charCodeAt(d + 2)] << 6 | i[e.charCodeAt(d + 3)], s[f++] = t >> 16 & 255, s[f++] = t >> 8 & 255, s[f++] = 255 & t; 2 === a && (t = i[e.charCodeAt(d)] << 2 | i[e.charCodeAt(d + 1)] >> 4, s[f++] = 255 & t); 1 === a && (t = i[e.charCodeAt(d)] << 10 | i[e.charCodeAt(d + 1)] << 4 | i[e.charCodeAt(d + 2)] >> 2, s[f++] = t >> 8 & 255, s[f++] = 255 & t); return s; }, t.fromByteArray = function (e) { for (var t, r = e.length, i = r % 3, o = [], a = 0, s = r - i; a < s; a += 16383)
                            o.push(u(e, a, a + 16383 > s ? s : a + 16383)); 1 === i ? (t = e[r - 1], o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "=")); return o.join(""); };
                        for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, f = a.length; s < f; ++s)
                            n[s] = a[s], i[a.charCodeAt(s)] = s;
                        function c(e) { var t = e.length; if (t % 4 > 0)
                            throw new Error("Invalid string. Length must be a multiple of 4"); var r = e.indexOf("="); return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]; }
                        function u(e, t, r) { for (var i, o, a = [], s = t; s < r; s += 3)
                            i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]); return a.join(""); }
                        i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63;
                    }, function (e, t) { t.read = function (e, t, r, n, i) { var o, a, s = 8 * i - n - 1, f = (1 << s) - 1, c = f >> 1, u = -7, d = r ? i - 1 : 0, h = r ? -1 : 1, l = e[t + d]; for (d += h, o = l & (1 << -u) - 1, l >>= -u, u += s; u > 0; o = 256 * o + e[t + d], d += h, u -= 8)
                        ; for (a = o & (1 << -u) - 1, o >>= -u, u += n; u > 0; a = 256 * a + e[t + d], d += h, u -= 8)
                        ; if (0 === o)
                        o = 1 - c;
                    else {
                        if (o === f)
                            return a ? NaN : 1 / 0 * (l ? -1 : 1);
                        a += Math.pow(2, n), o -= c;
                    } return (l ? -1 : 1) * a * Math.pow(2, o - n); }, t.write = function (e, t, r, n, i, o) { var a, s, f, c = 8 * o - i - 1, u = (1 << c) - 1, d = u >> 1, h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, l = n ? 0 : o - 1, p = n ? 1 : -1, b = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0; for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (f = Math.pow(2, -a)) < 1 && (a--, f *= 2), (t += a + d >= 1 ? h / f : h * Math.pow(2, 1 - d)) * f >= 2 && (a++, f /= 2), a + d >= u ? (s = 0, a = u) : a + d >= 1 ? (s = (t * f - 1) * Math.pow(2, i), a += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, i), a = 0)); i >= 8; e[r + l] = 255 & s, l += p, s /= 256, i -= 8)
                        ; for (a = a << i | s, c += i; c > 0; e[r + l] = 255 & a, l += p, a /= 256, c -= 8)
                        ; e[r + l - p] |= 128 * b; }; }, function (e, t) { var r = {}.toString; e.exports = Array.isArray || function (e) { return "[object Array]" == r.call(e); }; }, function (e, t) { var r = {}.toString; e.exports = Array.isArray || function (e) { return "[object Array]" == r.call(e); }; }, function (e, t) { }, function (e, t, r) {
                        "use strict";
                        var n = r(1).Buffer, i = r(106);
                        e.exports = function () { function e() { !function (e, t) { if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function"); }(this, e), this.head = null, this.tail = null, this.length = 0; } return e.prototype.push = function (e) { var t = { data: e, next: null }; this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length; }, e.prototype.unshift = function (e) { var t = { data: e, next: this.head }; 0 === this.length && (this.tail = t), this.head = t, ++this.length; }, e.prototype.shift = function () { if (0 !== this.length) {
                            var e = this.head.data;
                            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
                        } }, e.prototype.clear = function () { this.head = this.tail = null, this.length = 0; }, e.prototype.join = function (e) { if (0 === this.length)
                            return ""; for (var t = this.head, r = "" + t.data; t = t.next;)
                            r += e + t.data; return r; }, e.prototype.concat = function (e) { if (0 === this.length)
                            return n.alloc(0); if (1 === this.length)
                            return this.head.data; for (var t, r, i, o = n.allocUnsafe(e >>> 0), a = this.head, s = 0; a;)
                            t = a.data, r = o, i = s, t.copy(r, i), s += a.data.length, a = a.next; return o; }, e; }(), i && i.inspect && i.inspect.custom && (e.exports.prototype[i.inspect.custom] = function () { var e = i.inspect({ length: this.length }); return this.constructor.name + " " + e; });
                    }, function (e, t) { }, function (e, t, r) { (function (e, t) { !function (e, r) {
                        "use strict";
                        if (!e.setImmediate) {
                            var n, i, o, a, s, f = 1, c = {}, u = !1, d = e.document, h = Object.getPrototypeOf && Object.getPrototypeOf(e);
                            h = h && h.setTimeout ? h : e, "[object process]" === {}.toString.call(e.process) ? n = function (e) { t.nextTick(function () { p(e); }); } : !function () { if (e.postMessage && !e.importScripts) {
                                var t = !0, r = e.onmessage;
                                return e.onmessage = function () { t = !1; }, e.postMessage("", "*"), e.onmessage = r, t;
                            } }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function (e) { p(e.data); }, n = function (e) { o.port2.postMessage(e); }) : d && "onreadystatechange" in d.createElement("script") ? (i = d.documentElement, n = function (e) { var t = d.createElement("script"); t.onreadystatechange = function () { p(e), t.onreadystatechange = null, i.removeChild(t), t = null; }, i.appendChild(t); }) : n = function (e) { setTimeout(p, 0, e); } : (a = "setImmediate$" + Math.random() + "$", s = function (t) { t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && p(+t.data.slice(a.length)); }, e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s), n = function (t) { e.postMessage(a + t, "*"); }), h.setImmediate = function (e) { "function" != typeof e && (e = new Function("" + e)); for (var t = new Array(arguments.length - 1), r = 0; r < t.length; r++)
                                t[r] = arguments[r + 1]; var i = { callback: e, args: t }; return c[f] = i, n(f), f++; }, h.clearImmediate = l;
                        }
                        function l(e) { delete c[e]; }
                        function p(e) { if (u)
                            setTimeout(p, 0, e);
                        else {
                            var t = c[e];
                            if (t) {
                                u = !0;
                                try {
                                    !function (e) { var t = e.callback, n = e.args; switch (n.length) {
                                        case 0:
                                            t();
                                            break;
                                        case 1:
                                            t(n[0]);
                                            break;
                                        case 2:
                                            t(n[0], n[1]);
                                            break;
                                        case 3:
                                            t(n[0], n[1], n[2]);
                                            break;
                                        default: t.apply(r, n);
                                    } }(t);
                                }
                                finally {
                                    l(e), u = !1;
                                }
                            }
                        } }
                    }("undefined" == typeof self ? void 0 === e ? this : e : self); }).call(this, r(8), r(6)); }, function (e, t, r) { (function (t) { function r(e) { try {
                        if (!t.localStorage)
                            return !1;
                    }
                    catch (e) {
                        return !1;
                    } var r = t.localStorage[e]; return null != r && "true" === String(r).toLowerCase(); } e.exports = function (e, t) { if (r("noDeprecation"))
                        return e; var n = !1; return function () { if (!n) {
                        if (r("throwDeprecation"))
                            throw new Error(t);
                        r("traceDeprecation") ? console.trace(t) : console.warn(t), n = !0;
                    } return e.apply(this, arguments); }; }; }).call(this, r(8)); }, function (e, t, r) {
                        "use strict";
                        e.exports = o;
                        var n = r(55), i = r(16);
                        function o(e) { if (!(this instanceof o))
                            return new o(e); n.call(this, e); }
                        i.inherits = r(0), i.inherits(o, n), o.prototype._transform = function (e, t, r) { r(null, e); };
                    }, function (e, t, r) { e.exports = r(29); }, function (e, t, r) { e.exports = r(10); }, function (e, t, r) { e.exports = r(28).Transform; }, function (e, t, r) { e.exports = r(28).PassThrough; }, function (e, t, r) {
                        "use strict";
                        var n = r(1).Buffer, i = r(20).Transform, o = r(0);
                        e.exports = function (e) { function t(t, r, n, o) { i.call(this, o), this._rate = t, this._capacity = r, this._delimitedSuffix = n, this._options = o, this._state = new e, this._state.initialize(t, r), this._finalized = !1; } return o(t, i), t.prototype._transform = function (e, t, r) { var n = null; try {
                            this.update(e, t);
                        }
                        catch (e) {
                            n = e;
                        } r(n); }, t.prototype._flush = function () { }, t.prototype._read = function (e) { this.push(this.squeeze(e)); }, t.prototype.update = function (e, t) { if (!n.isBuffer(e) && "string" != typeof e)
                            throw new TypeError("Data must be a string or a buffer"); if (this._finalized)
                            throw new Error("Squeeze already called"); return n.isBuffer(e) || (e = n.from(e, t)), this._state.absorb(e), this; }, t.prototype.squeeze = function (e, t) { this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix)); var r = this._state.squeeze(e); return void 0 !== t && (r = r.toString(t)), r; }, t.prototype._resetState = function () { return this._state.initialize(this._rate, this._capacity), this; }, t.prototype._clone = function () { var e = new t(this._rate, this._capacity, this._delimitedSuffix, this._options); return this._state.copy(e._state), e._finalized = this._finalized, e; }, t; };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(1).Buffer, i = r(116);
                        function o() { this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.blockSize = null, this.count = 0, this.squeezing = !1; }
                        o.prototype.initialize = function (e, t) { for (var r = 0; r < 50; ++r)
                            this.state[r] = 0; this.blockSize = e / 8, this.count = 0, this.squeezing = !1; }, o.prototype.absorb = function (e) { for (var t = 0; t < e.length; ++t)
                            this.state[~~(this.count / 4)] ^= e[t] << this.count % 4 * 8, this.count += 1, this.count === this.blockSize && (i.p1600(this.state), this.count = 0); }, o.prototype.absorbLastFewBits = function (e) { this.state[~~(this.count / 4)] ^= e << this.count % 4 * 8, 0 != (128 & e) && this.count === this.blockSize - 1 && i.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << (this.blockSize - 1) % 4 * 8, i.p1600(this.state), this.count = 0, this.squeezing = !0; }, o.prototype.squeeze = function (e) { this.squeezing || this.absorbLastFewBits(1); for (var t = n.alloc(e), r = 0; r < e; ++r)
                            t[r] = this.state[~~(this.count / 4)] >>> this.count % 4 * 8 & 255, this.count += 1, this.count === this.blockSize && (i.p1600(this.state), this.count = 0); return t; }, o.prototype.copy = function (e) { for (var t = 0; t < 50; ++t)
                            e.state[t] = this.state[t]; e.blockSize = this.blockSize, e.count = this.count, e.squeezing = this.squeezing; }, e.exports = o;
                    }, function (e, t, r) {
                        "use strict";
                        var n = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
                        t.p1600 = function (e) { for (var t = 0; t < 24; ++t) {
                            var r = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], s = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], f = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], c = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], u = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], d = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48], h = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49], l = d ^ (o << 1 | a >>> 31), p = h ^ (a << 1 | o >>> 31), b = e[0] ^ l, g = e[1] ^ p, v = e[10] ^ l, y = e[11] ^ p, m = e[20] ^ l, _ = e[21] ^ p, w = e[30] ^ l, E = e[31] ^ p, A = e[40] ^ l, S = e[41] ^ p;
                            l = r ^ (s << 1 | f >>> 31), p = i ^ (f << 1 | s >>> 31);
                            var x = e[2] ^ l, M = e[3] ^ p, I = e[12] ^ l, k = e[13] ^ p, T = e[22] ^ l, L = e[23] ^ p, P = e[32] ^ l, B = e[33] ^ p, R = e[42] ^ l, C = e[43] ^ p;
                            l = o ^ (c << 1 | u >>> 31), p = a ^ (u << 1 | c >>> 31);
                            var N = e[4] ^ l, O = e[5] ^ p, j = e[14] ^ l, D = e[15] ^ p, U = e[24] ^ l, z = e[25] ^ p, q = e[34] ^ l, F = e[35] ^ p, H = e[44] ^ l, K = e[45] ^ p;
                            l = s ^ (d << 1 | h >>> 31), p = f ^ (h << 1 | d >>> 31);
                            var V = e[6] ^ l, Y = e[7] ^ p, G = e[16] ^ l, W = e[17] ^ p, Z = e[26] ^ l, J = e[27] ^ p, X = e[36] ^ l, $ = e[37] ^ p, Q = e[46] ^ l, ee = e[47] ^ p;
                            l = c ^ (r << 1 | i >>> 31), p = u ^ (i << 1 | r >>> 31);
                            var te = e[8] ^ l, re = e[9] ^ p, ne = e[18] ^ l, ie = e[19] ^ p, oe = e[28] ^ l, ae = e[29] ^ p, se = e[38] ^ l, fe = e[39] ^ p, ce = e[48] ^ l, ue = e[49] ^ p, de = b, he = g, le = y << 4 | v >>> 28, pe = v << 4 | y >>> 28, be = m << 3 | _ >>> 29, ge = _ << 3 | m >>> 29, ve = E << 9 | w >>> 23, ye = w << 9 | E >>> 23, me = A << 18 | S >>> 14, _e = S << 18 | A >>> 14, we = x << 1 | M >>> 31, Ee = M << 1 | x >>> 31, Ae = k << 12 | I >>> 20, Se = I << 12 | k >>> 20, xe = T << 10 | L >>> 22, Me = L << 10 | T >>> 22, Ie = B << 13 | P >>> 19, ke = P << 13 | B >>> 19, Te = R << 2 | C >>> 30, Le = C << 2 | R >>> 30, Pe = O << 30 | N >>> 2, Be = N << 30 | O >>> 2, Re = j << 6 | D >>> 26, Ce = D << 6 | j >>> 26, Ne = z << 11 | U >>> 21, Oe = U << 11 | z >>> 21, je = q << 15 | F >>> 17, De = F << 15 | q >>> 17, Ue = K << 29 | H >>> 3, ze = H << 29 | K >>> 3, qe = V << 28 | Y >>> 4, Fe = Y << 28 | V >>> 4, He = W << 23 | G >>> 9, Ke = G << 23 | W >>> 9, Ve = Z << 25 | J >>> 7, Ye = J << 25 | Z >>> 7, Ge = X << 21 | $ >>> 11, We = $ << 21 | X >>> 11, Ze = ee << 24 | Q >>> 8, Je = Q << 24 | ee >>> 8, Xe = te << 27 | re >>> 5, $e = re << 27 | te >>> 5, Qe = ne << 20 | ie >>> 12, et = ie << 20 | ne >>> 12, tt = ae << 7 | oe >>> 25, rt = oe << 7 | ae >>> 25, nt = se << 8 | fe >>> 24, it = fe << 8 | se >>> 24, ot = ce << 14 | ue >>> 18, at = ue << 14 | ce >>> 18;
                            e[0] = de ^ ~Ae & Ne, e[1] = he ^ ~Se & Oe, e[10] = qe ^ ~Qe & be, e[11] = Fe ^ ~et & ge, e[20] = we ^ ~Re & Ve, e[21] = Ee ^ ~Ce & Ye, e[30] = Xe ^ ~le & xe, e[31] = $e ^ ~pe & Me, e[40] = Pe ^ ~He & tt, e[41] = Be ^ ~Ke & rt, e[2] = Ae ^ ~Ne & Ge, e[3] = Se ^ ~Oe & We, e[12] = Qe ^ ~be & Ie, e[13] = et ^ ~ge & ke, e[22] = Re ^ ~Ve & nt, e[23] = Ce ^ ~Ye & it, e[32] = le ^ ~xe & je, e[33] = pe ^ ~Me & De, e[42] = He ^ ~tt & ve, e[43] = Ke ^ ~rt & ye, e[4] = Ne ^ ~Ge & ot, e[5] = Oe ^ ~We & at, e[14] = be ^ ~Ie & Ue, e[15] = ge ^ ~ke & ze, e[24] = Ve ^ ~nt & me, e[25] = Ye ^ ~it & _e, e[34] = xe ^ ~je & Ze, e[35] = Me ^ ~De & Je, e[44] = tt ^ ~ve & Te, e[45] = rt ^ ~ye & Le, e[6] = Ge ^ ~ot & de, e[7] = We ^ ~at & he, e[16] = Ie ^ ~Ue & qe, e[17] = ke ^ ~ze & Fe, e[26] = nt ^ ~me & we, e[27] = it ^ ~_e & Ee, e[36] = je ^ ~Ze & Xe, e[37] = De ^ ~Je & $e, e[46] = ve ^ ~Te & Pe, e[47] = ye ^ ~Le & Be, e[8] = ot ^ ~de & Ae, e[9] = at ^ ~he & Se, e[18] = Ue ^ ~qe & Qe, e[19] = ze ^ ~Fe & et, e[28] = me ^ ~we & Re, e[29] = _e ^ ~Ee & Ce, e[38] = Ze ^ ~Xe & le, e[39] = Je ^ ~$e & pe, e[48] = Te ^ ~Pe & He, e[49] = Le ^ ~Be & Ke, e[0] ^= n[2 * t], e[1] ^= n[2 * t + 1];
                        } };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(118), i = r(119), o = r(57);
                        function a(e, t) { return void 0 === e ? t : (n.isBoolean(e, o.COMPRESSED_TYPE_INVALID), e); }
                        e.exports = function (e) { return { privateKeyVerify: function (t) { return n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), 32 === t.length && e.privateKeyVerify(t); }, privateKeyExport: function (t, r) { n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), r = a(r, !0); var s = e.privateKeyExport(t, r); return i.privateKeyExport(t, s, r); }, privateKeyImport: function (t) { if (n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), (t = i.privateKeyImport(t)) && 32 === t.length && e.privateKeyVerify(t))
                                return t; throw new Error(o.EC_PRIVATE_KEY_IMPORT_DER_FAIL); }, privateKeyNegate: function (t) { return n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), e.privateKeyNegate(t); }, privateKeyModInverse: function (t) { return n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), e.privateKeyModInverse(t); }, privateKeyTweakAdd: function (t, r) { return n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), n.isBuffer(r, o.TWEAK_TYPE_INVALID), n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID), e.privateKeyTweakAdd(t, r); }, privateKeyTweakMul: function (t, r) { return n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), n.isBuffer(r, o.TWEAK_TYPE_INVALID), n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID), e.privateKeyTweakMul(t, r); }, publicKeyCreate: function (t, r) { return n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), r = a(r, !0), e.publicKeyCreate(t, r); }, publicKeyConvert: function (t, r) { return n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), r = a(r, !0), e.publicKeyConvert(t, r); }, publicKeyVerify: function (t) { return n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), e.publicKeyVerify(t); }, publicKeyTweakAdd: function (t, r, i) { return n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), n.isBuffer(r, o.TWEAK_TYPE_INVALID), n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID), i = a(i, !0), e.publicKeyTweakAdd(t, r, i); }, publicKeyTweakMul: function (t, r, i) { return n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), n.isBuffer(r, o.TWEAK_TYPE_INVALID), n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID), i = a(i, !0), e.publicKeyTweakMul(t, r, i); }, publicKeyCombine: function (t, r) { n.isArray(t, o.EC_PUBLIC_KEYS_TYPE_INVALID), n.isLengthGTZero(t, o.EC_PUBLIC_KEYS_LENGTH_INVALID); for (var i = 0; i < t.length; ++i)
                                n.isBuffer(t[i], o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(t[i], 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID); return r = a(r, !0), e.publicKeyCombine(t, r); }, signatureNormalize: function (t) { return n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isBufferLength(t, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID), e.signatureNormalize(t); }, signatureExport: function (t) { n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isBufferLength(t, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID); var r = e.signatureExport(t); return i.signatureExport(r); }, signatureImport: function (t) { n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isLengthGTZero(t, o.ECDSA_SIGNATURE_LENGTH_INVALID); var r = i.signatureImport(t); if (r)
                                return e.signatureImport(r); throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL); }, signatureImportLax: function (t) { n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isLengthGTZero(t, o.ECDSA_SIGNATURE_LENGTH_INVALID); var r = i.signatureImportLax(t); if (r)
                                return e.signatureImport(r); throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL); }, sign: function (t, r, i) { n.isBuffer(t, o.MSG32_TYPE_INVALID), n.isBufferLength(t, 32, o.MSG32_LENGTH_INVALID), n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID); var a = null, s = null; return void 0 !== i && (n.isObject(i, o.OPTIONS_TYPE_INVALID), void 0 !== i.data && (n.isBuffer(i.data, o.OPTIONS_DATA_TYPE_INVALID), n.isBufferLength(i.data, 32, o.OPTIONS_DATA_LENGTH_INVALID), a = i.data), void 0 !== i.noncefn && (n.isFunction(i.noncefn, o.OPTIONS_NONCEFN_TYPE_INVALID), s = i.noncefn)), e.sign(t, r, s, a); }, verify: function (t, r, i) { return n.isBuffer(t, o.MSG32_TYPE_INVALID), n.isBufferLength(t, 32, o.MSG32_LENGTH_INVALID), n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID), n.isBuffer(i, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(i, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), e.verify(t, r, i); }, recover: function (t, r, i, s) { return n.isBuffer(t, o.MSG32_TYPE_INVALID), n.isBufferLength(t, 32, o.MSG32_LENGTH_INVALID), n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID), n.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID), n.isNumber(i, o.RECOVERY_ID_TYPE_INVALID), n.isNumberInInterval(i, -1, 4, o.RECOVERY_ID_VALUE_INVALID), s = a(s, !0), e.recover(t, r, i, s); }, ecdh: function (t, r) { return n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), e.ecdh(t, r); }, ecdhUnsafe: function (t, r, i) { return n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID), n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID), n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID), n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID), i = a(i, !0), e.ecdhUnsafe(t, r, i); } }; };
                    }, function (e, t, r) {
                        "use strict";
                        (function (e) { var r = Object.prototype.toString; t.isArray = function (e, t) { if (!Array.isArray(e))
                            throw TypeError(t); }, t.isBoolean = function (e, t) { if ("[object Boolean]" !== r.call(e))
                            throw TypeError(t); }, t.isBuffer = function (t, r) { if (!e.isBuffer(t))
                            throw TypeError(r); }, t.isFunction = function (e, t) { if ("[object Function]" !== r.call(e))
                            throw TypeError(t); }, t.isNumber = function (e, t) { if ("[object Number]" !== r.call(e))
                            throw TypeError(t); }, t.isObject = function (e, t) { if ("[object Object]" !== r.call(e))
                            throw TypeError(t); }, t.isBufferLength = function (e, t, r) { if (e.length !== t)
                            throw RangeError(r); }, t.isBufferLength2 = function (e, t, r, n) { if (e.length !== t && e.length !== r)
                            throw RangeError(n); }, t.isLengthGTZero = function (e, t) { if (0 === e.length)
                            throw RangeError(t); }, t.isNumberInInterval = function (e, t, r, n) { if (e <= t || e >= r)
                            throw RangeError(n); }; }).call(this, r(7).Buffer);
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(1).Buffer, i = r(120), o = n.from([48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), a = n.from([48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                        t.privateKeyExport = function (e, t, r) { var i = n.from(r ? o : a); return e.copy(i, r ? 8 : 9), t.copy(i, r ? 181 : 214), i; }, t.privateKeyImport = function (e) { var t = e.length, r = 0; if (!(t < r + 1 || 48 !== e[r]) && !(t < (r += 1) + 1) && 128 & e[r]) {
                            var n = 127 & e[r];
                            if (r += 1, !(n < 1 || n > 2 || t < r + n)) {
                                var i = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0);
                                if (!(t < (r += n) + i || t < r + 3 || 2 !== e[r] || 1 !== e[r + 1] || 1 !== e[r + 2] || t < (r += 3) + 2 || 4 !== e[r] || e[r + 1] > 32 || t < r + 2 + e[r + 1]))
                                    return e.slice(r + 2, r + 2 + e[r + 1]);
                            }
                        } }, t.signatureExport = function (e) { for (var t = n.concat([n.from([0]), e.r]), r = 33, o = 0; r > 1 && 0 === t[o] && !(128 & t[o + 1]); --r, ++o)
                            ; for (var a = n.concat([n.from([0]), e.s]), s = 33, f = 0; s > 1 && 0 === a[f] && !(128 & a[f + 1]); --s, ++f)
                            ; return i.encode(t.slice(o), a.slice(f)); }, t.signatureImport = function (e) { var t = n.alloc(32, 0), r = n.alloc(32, 0); try {
                            var o = i.decode(e);
                            if (33 === o.r.length && 0 === o.r[0] && (o.r = o.r.slice(1)), o.r.length > 32)
                                throw new Error("R length is too long");
                            if (33 === o.s.length && 0 === o.s[0] && (o.s = o.s.slice(1)), o.s.length > 32)
                                throw new Error("S length is too long");
                        }
                        catch (e) {
                            return;
                        } return o.r.copy(t, 32 - o.r.length), o.s.copy(r, 32 - o.s.length), { r: t, s: r }; }, t.signatureImportLax = function (e) { var t = n.alloc(32, 0), r = n.alloc(32, 0), i = e.length, o = 0; if (48 === e[o++]) {
                            var a = e[o++];
                            if (!(128 & a && (o += a - 128) > i) && 2 === e[o++]) {
                                var s = e[o++];
                                if (128 & s) {
                                    if (o + (a = s - 128) > i)
                                        return;
                                    for (; a > 0 && 0 === e[o]; o += 1, a -= 1)
                                        ;
                                    for (s = 0; a > 0; o += 1, a -= 1)
                                        s = (s << 8) + e[o];
                                }
                                if (!(s > i - o)) {
                                    var f = o;
                                    if (o += s, 2 === e[o++]) {
                                        var c = e[o++];
                                        if (128 & c) {
                                            if (o + (a = c - 128) > i)
                                                return;
                                            for (; a > 0 && 0 === e[o]; o += 1, a -= 1)
                                                ;
                                            for (c = 0; a > 0; o += 1, a -= 1)
                                                c = (c << 8) + e[o];
                                        }
                                        if (!(c > i - o)) {
                                            var u = o;
                                            for (o += c; s > 0 && 0 === e[f]; s -= 1, f += 1)
                                                ;
                                            if (!(s > 32)) {
                                                var d = e.slice(f, f + s);
                                                for (d.copy(t, 32 - d.length); c > 0 && 0 === e[u]; c -= 1, u += 1)
                                                    ;
                                                if (!(c > 32)) {
                                                    var h = e.slice(u, u + c);
                                                    return h.copy(r, 32 - h.length), { r: t, s: r };
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } };
                    }, function (e, t, r) { var n = r(1).Buffer; e.exports = { check: function (e) { if (e.length < 8)
                            return !1; if (e.length > 72)
                            return !1; if (48 !== e[0])
                            return !1; if (e[1] !== e.length - 2)
                            return !1; if (2 !== e[2])
                            return !1; var t = e[3]; if (0 === t)
                            return !1; if (5 + t >= e.length)
                            return !1; if (2 !== e[4 + t])
                            return !1; var r = e[5 + t]; return !(0 === r || 6 + t + r !== e.length || 128 & e[4] || t > 1 && 0 === e[4] && !(128 & e[5]) || 128 & e[t + 6] || r > 1 && 0 === e[t + 6] && !(128 & e[t + 7])); }, decode: function (e) { if (e.length < 8)
                            throw new Error("DER sequence length is too short"); if (e.length > 72)
                            throw new Error("DER sequence length is too long"); if (48 !== e[0])
                            throw new Error("Expected DER sequence"); if (e[1] !== e.length - 2)
                            throw new Error("DER sequence length is invalid"); if (2 !== e[2])
                            throw new Error("Expected DER integer"); var t = e[3]; if (0 === t)
                            throw new Error("R length is zero"); if (5 + t >= e.length)
                            throw new Error("R length is too long"); if (2 !== e[4 + t])
                            throw new Error("Expected DER integer (2)"); var r = e[5 + t]; if (0 === r)
                            throw new Error("S length is zero"); if (6 + t + r !== e.length)
                            throw new Error("S length is invalid"); if (128 & e[4])
                            throw new Error("R value is negative"); if (t > 1 && 0 === e[4] && !(128 & e[5]))
                            throw new Error("R value excessively padded"); if (128 & e[t + 6])
                            throw new Error("S value is negative"); if (r > 1 && 0 === e[t + 6] && !(128 & e[t + 7]))
                            throw new Error("S value excessively padded"); return { r: e.slice(4, 4 + t), s: e.slice(6 + t) }; }, encode: function (e, t) { var r = e.length, i = t.length; if (0 === r)
                            throw new Error("R length is zero"); if (0 === i)
                            throw new Error("S length is zero"); if (r > 33)
                            throw new Error("R length is too long"); if (i > 33)
                            throw new Error("S length is too long"); if (128 & e[0])
                            throw new Error("R value is negative"); if (128 & t[0])
                            throw new Error("S value is negative"); if (r > 1 && 0 === e[0] && !(128 & e[1]))
                            throw new Error("R value excessively padded"); if (i > 1 && 0 === t[0] && !(128 & t[1]))
                            throw new Error("S value excessively padded"); var o = n.allocUnsafe(6 + r + i); return o[0] = 48, o[1] = o.length - 2, o[2] = 2, o[3] = e.length, e.copy(o, 4), o[4 + r] = 2, o[5 + r] = t.length, t.copy(o, 6 + r), o; } }; }, function (e, t, r) {
                        "use strict";
                        var n = r(1).Buffer, i = r(31), o = r(2), a = r(3).ec, s = r(57), f = new a("secp256k1"), c = f.curve;
                        function u(e) { var t = e[0]; switch (t) {
                            case 2:
                            case 3: return 33 !== e.length ? null : function (e, t) { var r = new o(t); if (r.cmp(c.p) >= 0)
                                return null; var n = (r = r.toRed(c.red)).redSqr().redIMul(r).redIAdd(c.b).redSqrt(); return 3 === e !== n.isOdd() && (n = n.redNeg()), f.keyPair({ pub: { x: r, y: n } }); }(t, e.slice(1, 33));
                            case 4:
                            case 6:
                            case 7: return 65 !== e.length ? null : function (e, t, r) { var n = new o(t), i = new o(r); if (n.cmp(c.p) >= 0 || i.cmp(c.p) >= 0)
                                return null; if (n = n.toRed(c.red), i = i.toRed(c.red), (6 === e || 7 === e) && i.isOdd() !== (7 === e))
                                return null; var a = n.redSqr().redIMul(n); return i.redSqr().redISub(a.redIAdd(c.b)).isZero() ? f.keyPair({ pub: { x: n, y: i } }) : null; }(t, e.slice(1, 33), e.slice(33, 65));
                            default: return null;
                        } }
                        t.privateKeyVerify = function (e) { var t = new o(e); return t.cmp(c.n) < 0 && !t.isZero(); }, t.privateKeyExport = function (e, t) { var r = new o(e); if (r.cmp(c.n) >= 0 || r.isZero())
                            throw new Error(s.EC_PRIVATE_KEY_EXPORT_DER_FAIL); return n.from(f.keyFromPrivate(e).getPublic(t, !0)); }, t.privateKeyNegate = function (e) { var t = new o(e); return t.isZero() ? n.alloc(32) : c.n.sub(t).umod(c.n).toArrayLike(n, "be", 32); }, t.privateKeyModInverse = function (e) { var t = new o(e); if (t.cmp(c.n) >= 0 || t.isZero())
                            throw new Error(s.EC_PRIVATE_KEY_RANGE_INVALID); return t.invm(c.n).toArrayLike(n, "be", 32); }, t.privateKeyTweakAdd = function (e, t) { var r = new o(t); if (r.cmp(c.n) >= 0)
                            throw new Error(s.EC_PRIVATE_KEY_TWEAK_ADD_FAIL); if (r.iadd(new o(e)), r.cmp(c.n) >= 0 && r.isub(c.n), r.isZero())
                            throw new Error(s.EC_PRIVATE_KEY_TWEAK_ADD_FAIL); return r.toArrayLike(n, "be", 32); }, t.privateKeyTweakMul = function (e, t) { var r = new o(t); if (r.cmp(c.n) >= 0 || r.isZero())
                            throw new Error(s.EC_PRIVATE_KEY_TWEAK_MUL_FAIL); return r.imul(new o(e)), r.cmp(c.n) && (r = r.umod(c.n)), r.toArrayLike(n, "be", 32); }, t.publicKeyCreate = function (e, t) { var r = new o(e); if (r.cmp(c.n) >= 0 || r.isZero())
                            throw new Error(s.EC_PUBLIC_KEY_CREATE_FAIL); return n.from(f.keyFromPrivate(e).getPublic(t, !0)); }, t.publicKeyConvert = function (e, t) { var r = u(e); if (null === r)
                            throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL); return n.from(r.getPublic(t, !0)); }, t.publicKeyVerify = function (e) { return null !== u(e); }, t.publicKeyTweakAdd = function (e, t, r) { var i = u(e); if (null === i)
                            throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL); if ((t = new o(t)).cmp(c.n) >= 0)
                            throw new Error(s.EC_PUBLIC_KEY_TWEAK_ADD_FAIL); var a = c.g.mul(t).add(i.pub); if (a.isInfinity())
                            throw new Error(s.EC_PUBLIC_KEY_TWEAK_ADD_FAIL); return n.from(a.encode(!0, r)); }, t.publicKeyTweakMul = function (e, t, r) { var i = u(e); if (null === i)
                            throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL); if ((t = new o(t)).cmp(c.n) >= 0 || t.isZero())
                            throw new Error(s.EC_PUBLIC_KEY_TWEAK_MUL_FAIL); return n.from(i.pub.mul(t).encode(!0, r)); }, t.publicKeyCombine = function (e, t) { for (var r = new Array(e.length), i = 0; i < e.length; ++i)
                            if (r[i] = u(e[i]), null === r[i])
                                throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL); for (var o = r[0].pub, a = 1; a < r.length; ++a)
                            o = o.add(r[a].pub); if (o.isInfinity())
                            throw new Error(s.EC_PUBLIC_KEY_COMBINE_FAIL); return n.from(o.encode(!0, t)); }, t.signatureNormalize = function (e) { var t = new o(e.slice(0, 32)), r = new o(e.slice(32, 64)); if (t.cmp(c.n) >= 0 || r.cmp(c.n) >= 0)
                            throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL); var i = n.from(e); return 1 === r.cmp(f.nh) && c.n.sub(r).toArrayLike(n, "be", 32).copy(i, 32), i; }, t.signatureExport = function (e) { var t = e.slice(0, 32), r = e.slice(32, 64); if (new o(t).cmp(c.n) >= 0 || new o(r).cmp(c.n) >= 0)
                            throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL); return { r: t, s: r }; }, t.signatureImport = function (e) { var t = new o(e.r); t.cmp(c.n) >= 0 && (t = new o(0)); var r = new o(e.s); return r.cmp(c.n) >= 0 && (r = new o(0)), n.concat([t.toArrayLike(n, "be", 32), r.toArrayLike(n, "be", 32)]); }, t.sign = function (e, t, r, i) { if ("function" == typeof r) {
                            var a = r;
                            r = function (r) { var f = a(e, t, null, i, r); if (!n.isBuffer(f) || 32 !== f.length)
                                throw new Error(s.ECDSA_SIGN_FAIL); return new o(f); };
                        } var u = new o(t); if (u.cmp(c.n) >= 0 || u.isZero())
                            throw new Error(s.ECDSA_SIGN_FAIL); var d = f.sign(e, t, { canonical: !0, k: r, pers: i }); return { signature: n.concat([d.r.toArrayLike(n, "be", 32), d.s.toArrayLike(n, "be", 32)]), recovery: d.recoveryParam }; }, t.verify = function (e, t, r) { var n = { r: t.slice(0, 32), s: t.slice(32, 64) }, i = new o(n.r), a = new o(n.s); if (i.cmp(c.n) >= 0 || a.cmp(c.n) >= 0)
                            throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL); if (1 === a.cmp(f.nh) || i.isZero() || a.isZero())
                            return !1; var d = u(r); if (null === d)
                            throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL); return f.verify(e, n, { x: d.pub.x, y: d.pub.y }); }, t.recover = function (e, t, r, i) { var a = { r: t.slice(0, 32), s: t.slice(32, 64) }, u = new o(a.r), d = new o(a.s); if (u.cmp(c.n) >= 0 || d.cmp(c.n) >= 0)
                            throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL); try {
                            if (u.isZero() || d.isZero())
                                throw new Error;
                            var h = f.recoverPubKey(e, a, r);
                            return n.from(h.encode(!0, i));
                        }
                        catch (e) {
                            throw new Error(s.ECDSA_RECOVER_FAIL);
                        } }, t.ecdh = function (e, r) { var n = t.ecdhUnsafe(e, r, !0); return i("sha256").update(n).digest(); }, t.ecdhUnsafe = function (e, t, r) { var i = u(e); if (null === i)
                            throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL); var a = new o(t); if (a.cmp(c.n) >= 0 || a.isZero())
                            throw new Error(s.ECDH_FAIL); return n.from(i.pub.mul(a).encode(!0, r)); };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(0), i = r(58), o = r(1).Buffer, a = new Array(16);
                        function s() { i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878; }
                        function f(e, t) { return e << t | e >>> 32 - t; }
                        function c(e, t, r, n, i, o, a) { return f(e + (t & r | ~t & n) + i + o | 0, a) + t | 0; }
                        function u(e, t, r, n, i, o, a) { return f(e + (t & n | r & ~n) + i + o | 0, a) + t | 0; }
                        function d(e, t, r, n, i, o, a) { return f(e + (t ^ r ^ n) + i + o | 0, a) + t | 0; }
                        function h(e, t, r, n, i, o, a) { return f(e + (r ^ (t | ~n)) + i + o | 0, a) + t | 0; }
                        n(s, i), s.prototype._update = function () { for (var e = a, t = 0; t < 16; ++t)
                            e[t] = this._block.readInt32LE(4 * t); var r = this._a, n = this._b, i = this._c, o = this._d; r = c(r, n, i, o, e[0], 3614090360, 7), o = c(o, r, n, i, e[1], 3905402710, 12), i = c(i, o, r, n, e[2], 606105819, 17), n = c(n, i, o, r, e[3], 3250441966, 22), r = c(r, n, i, o, e[4], 4118548399, 7), o = c(o, r, n, i, e[5], 1200080426, 12), i = c(i, o, r, n, e[6], 2821735955, 17), n = c(n, i, o, r, e[7], 4249261313, 22), r = c(r, n, i, o, e[8], 1770035416, 7), o = c(o, r, n, i, e[9], 2336552879, 12), i = c(i, o, r, n, e[10], 4294925233, 17), n = c(n, i, o, r, e[11], 2304563134, 22), r = c(r, n, i, o, e[12], 1804603682, 7), o = c(o, r, n, i, e[13], 4254626195, 12), i = c(i, o, r, n, e[14], 2792965006, 17), r = u(r, n = c(n, i, o, r, e[15], 1236535329, 22), i, o, e[1], 4129170786, 5), o = u(o, r, n, i, e[6], 3225465664, 9), i = u(i, o, r, n, e[11], 643717713, 14), n = u(n, i, o, r, e[0], 3921069994, 20), r = u(r, n, i, o, e[5], 3593408605, 5), o = u(o, r, n, i, e[10], 38016083, 9), i = u(i, o, r, n, e[15], 3634488961, 14), n = u(n, i, o, r, e[4], 3889429448, 20), r = u(r, n, i, o, e[9], 568446438, 5), o = u(o, r, n, i, e[14], 3275163606, 9), i = u(i, o, r, n, e[3], 4107603335, 14), n = u(n, i, o, r, e[8], 1163531501, 20), r = u(r, n, i, o, e[13], 2850285829, 5), o = u(o, r, n, i, e[2], 4243563512, 9), i = u(i, o, r, n, e[7], 1735328473, 14), r = d(r, n = u(n, i, o, r, e[12], 2368359562, 20), i, o, e[5], 4294588738, 4), o = d(o, r, n, i, e[8], 2272392833, 11), i = d(i, o, r, n, e[11], 1839030562, 16), n = d(n, i, o, r, e[14], 4259657740, 23), r = d(r, n, i, o, e[1], 2763975236, 4), o = d(o, r, n, i, e[4], 1272893353, 11), i = d(i, o, r, n, e[7], 4139469664, 16), n = d(n, i, o, r, e[10], 3200236656, 23), r = d(r, n, i, o, e[13], 681279174, 4), o = d(o, r, n, i, e[0], 3936430074, 11), i = d(i, o, r, n, e[3], 3572445317, 16), n = d(n, i, o, r, e[6], 76029189, 23), r = d(r, n, i, o, e[9], 3654602809, 4), o = d(o, r, n, i, e[12], 3873151461, 11), i = d(i, o, r, n, e[15], 530742520, 16), r = h(r, n = d(n, i, o, r, e[2], 3299628645, 23), i, o, e[0], 4096336452, 6), o = h(o, r, n, i, e[7], 1126891415, 10), i = h(i, o, r, n, e[14], 2878612391, 15), n = h(n, i, o, r, e[5], 4237533241, 21), r = h(r, n, i, o, e[12], 1700485571, 6), o = h(o, r, n, i, e[3], 2399980690, 10), i = h(i, o, r, n, e[10], 4293915773, 15), n = h(n, i, o, r, e[1], 2240044497, 21), r = h(r, n, i, o, e[8], 1873313359, 6), o = h(o, r, n, i, e[15], 4264355552, 10), i = h(i, o, r, n, e[6], 2734768916, 15), n = h(n, i, o, r, e[13], 1309151649, 21), r = h(r, n, i, o, e[4], 4149444226, 6), o = h(o, r, n, i, e[11], 3174756917, 10), i = h(i, o, r, n, e[2], 718787259, 15), n = h(n, i, o, r, e[9], 3951481745, 21), this._a = this._a + r | 0, this._b = this._b + n | 0, this._c = this._c + i | 0, this._d = this._d + o | 0; }, s.prototype._digest = function () { this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update(); var e = o.allocUnsafe(16); return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e; }, e.exports = s;
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(7).Buffer, i = r(0), o = r(58), a = new Array(16), s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], f = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], c = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], u = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11], d = [0, 1518500249, 1859775393, 2400959708, 2840853838], h = [1352829926, 1548603684, 1836072691, 2053994217, 0];
                        function l() { o.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520; }
                        function p(e, t) { return e << t | e >>> 32 - t; }
                        function b(e, t, r, n, i, o, a, s) { return p(e + (t ^ r ^ n) + o + a | 0, s) + i | 0; }
                        function g(e, t, r, n, i, o, a, s) { return p(e + (t & r | ~t & n) + o + a | 0, s) + i | 0; }
                        function v(e, t, r, n, i, o, a, s) { return p(e + ((t | ~r) ^ n) + o + a | 0, s) + i | 0; }
                        function y(e, t, r, n, i, o, a, s) { return p(e + (t & n | r & ~n) + o + a | 0, s) + i | 0; }
                        function m(e, t, r, n, i, o, a, s) { return p(e + (t ^ (r | ~n)) + o + a | 0, s) + i | 0; }
                        i(l, o), l.prototype._update = function () { for (var e = a, t = 0; t < 16; ++t)
                            e[t] = this._block.readInt32LE(4 * t); for (var r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, o = 0 | this._d, l = 0 | this._e, _ = 0 | this._a, w = 0 | this._b, E = 0 | this._c, A = 0 | this._d, S = 0 | this._e, x = 0; x < 80; x += 1) {
                            var M, I;
                            x < 16 ? (M = b(r, n, i, o, l, e[s[x]], d[0], c[x]), I = m(_, w, E, A, S, e[f[x]], h[0], u[x])) : x < 32 ? (M = g(r, n, i, o, l, e[s[x]], d[1], c[x]), I = y(_, w, E, A, S, e[f[x]], h[1], u[x])) : x < 48 ? (M = v(r, n, i, o, l, e[s[x]], d[2], c[x]), I = v(_, w, E, A, S, e[f[x]], h[2], u[x])) : x < 64 ? (M = y(r, n, i, o, l, e[s[x]], d[3], c[x]), I = g(_, w, E, A, S, e[f[x]], h[3], u[x])) : (M = m(r, n, i, o, l, e[s[x]], d[4], c[x]), I = b(_, w, E, A, S, e[f[x]], h[4], u[x])), r = l, l = o, o = p(i, 10), i = n, n = M, _ = S, S = A, A = p(E, 10), E = w, w = I;
                        } var k = this._b + i + A | 0; this._b = this._c + o + S | 0, this._c = this._d + l + _ | 0, this._d = this._e + r + w | 0, this._e = this._a + n + E | 0, this._a = k; }, l.prototype._digest = function () { this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update(); var e = n.alloc ? n.alloc(20) : new n(20); return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e.writeInt32LE(this._e, 16), e; }, e.exports = l;
                    }, function (e, t, r) { (t = e.exports = function (e) { e = e.toLowerCase(); var r = t[e]; if (!r)
                        throw new Error(e + " is not supported (we accept pull requests)"); return new r; }).sha = r(125), t.sha1 = r(126), t.sha224 = r(127), t.sha256 = r(59), t.sha384 = r(128), t.sha512 = r(60); }, function (e, t, r) { var n = r(0), i = r(15), o = r(1).Buffer, a = [1518500249, 1859775393, -1894007588, -899497514], s = new Array(80); function f() { this.init(), this._w = s, i.call(this, 64, 56); } function c(e) { return e << 30 | e >>> 2; } function u(e, t, r, n) { return 0 === e ? t & r | ~t & n : 2 === e ? t & r | t & n | r & n : t ^ r ^ n; } n(f, i), f.prototype.init = function () { return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this; }, f.prototype._update = function (e) { for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, f = 0 | this._e, d = 0; d < 16; ++d)
                        r[d] = e.readInt32BE(4 * d); for (; d < 80; ++d)
                        r[d] = r[d - 3] ^ r[d - 8] ^ r[d - 14] ^ r[d - 16]; for (var h = 0; h < 80; ++h) {
                        var l = ~~(h / 20), p = 0 | ((t = n) << 5 | t >>> 27) + u(l, i, o, s) + f + r[h] + a[l];
                        f = s, s = o, o = c(i), i = n, n = p;
                    } this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = f + this._e | 0; }, f.prototype._hash = function () { var e = o.allocUnsafe(20); return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e; }, e.exports = f; }, function (e, t, r) { var n = r(0), i = r(15), o = r(1).Buffer, a = [1518500249, 1859775393, -1894007588, -899497514], s = new Array(80); function f() { this.init(), this._w = s, i.call(this, 64, 56); } function c(e) { return e << 5 | e >>> 27; } function u(e) { return e << 30 | e >>> 2; } function d(e, t, r, n) { return 0 === e ? t & r | ~t & n : 2 === e ? t & r | t & n | r & n : t ^ r ^ n; } n(f, i), f.prototype.init = function () { return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this; }, f.prototype._update = function (e) { for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, f = 0 | this._e, h = 0; h < 16; ++h)
                        r[h] = e.readInt32BE(4 * h); for (; h < 80; ++h)
                        r[h] = (t = r[h - 3] ^ r[h - 8] ^ r[h - 14] ^ r[h - 16]) << 1 | t >>> 31; for (var l = 0; l < 80; ++l) {
                        var p = ~~(l / 20), b = c(n) + d(p, i, o, s) + f + r[l] + a[p] | 0;
                        f = s, s = o, o = u(i), i = n, n = b;
                    } this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = f + this._e | 0; }, f.prototype._hash = function () { var e = o.allocUnsafe(20); return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e; }, e.exports = f; }, function (e, t, r) { var n = r(0), i = r(59), o = r(15), a = r(1).Buffer, s = new Array(64); function f() { this.init(), this._w = s, o.call(this, 64, 56); } n(f, i), f.prototype.init = function () { return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this; }, f.prototype._hash = function () { var e = a.allocUnsafe(28); return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e; }, e.exports = f; }, function (e, t, r) { var n = r(0), i = r(60), o = r(15), a = r(1).Buffer, s = new Array(160); function f() { this.init(), this._w = s, o.call(this, 128, 112); } n(f, i), f.prototype.init = function () { return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this; }, f.prototype._hash = function () { var e = a.allocUnsafe(48); function t(t, r, n) { e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4); } return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e; }, e.exports = f; }, function (e, t, r) { var n = r(1).Buffer, i = r(20).Transform, o = r(30).StringDecoder; function a(e) { i.call(this), this.hashMode = "string" == typeof e, this.hashMode ? this[e] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null; } r(0)(a, i), a.prototype.update = function (e, t, r) { "string" == typeof e && (e = n.from(e, t)); var i = this._update(e); return this.hashMode ? this : (r && (i = this._toString(i, r)), i); }, a.prototype.setAutoPadding = function () { }, a.prototype.getAuthTag = function () { throw new Error("trying to get auth tag in unsupported state"); }, a.prototype.setAuthTag = function () { throw new Error("trying to set auth tag in unsupported state"); }, a.prototype.setAAD = function () { throw new Error("trying to set aad in unsupported state"); }, a.prototype._transform = function (e, t, r) { var n; try {
                        this.hashMode ? this._update(e) : this.push(this._update(e));
                    }
                    catch (e) {
                        n = e;
                    }
                    finally {
                        r(n);
                    } }, a.prototype._flush = function (e) { var t; try {
                        this.push(this.__final());
                    }
                    catch (e) {
                        t = e;
                    } e(t); }, a.prototype._finalOrDigest = function (e) { var t = this.__final() || n.alloc(0); return e && (t = this._toString(t, e, !0)), t; }, a.prototype._toString = function (e, t, r) { if (this._decoder || (this._decoder = new o(t), this._encoding = t), this._encoding !== t)
                        throw new Error("can't switch encodings"); var n = this._decoder.write(e); return r && (n += this._decoder.end()), n; }, e.exports = a; }, function (e, t) { }, function (e) { e.exports = { _args: [["elliptic@6.4.1", "/Users/itay/Workspaces/portis-sdk/packages/portis-web3"]], _from: "elliptic@6.4.1", _id: "elliptic@6.4.1", _inBundle: !1, _integrity: "sha512-BsXLz5sqX8OHcsh7CqBMztyXARmGQ3LWPtGjJi6DiJHq5C/qvi9P3OqgswKSDftbu8+IoI/QDTAm2fFnQ9SZSQ==", _location: "/elliptic", _phantomChildren: {}, _requested: { type: "version", registry: !0, raw: "elliptic@6.4.1", name: "elliptic", escapedName: "elliptic", rawSpec: "6.4.1", saveSpec: null, fetchSpec: "6.4.1" }, _requiredBy: ["/browserify-sign", "/create-ecdh", "/secp256k1"], _resolved: "https://registry.npmjs.org/elliptic/-/elliptic-6.4.1.tgz", _spec: "6.4.1", _where: "/Users/itay/Workspaces/portis-sdk/packages/portis-web3", author: { name: "Fedor Indutny", email: "fedor@indutny.com" }, bugs: { url: "https://github.com/indutny/elliptic/issues" }, dependencies: { "bn.js": "^4.4.0", brorand: "^1.0.1", "hash.js": "^1.0.0", "hmac-drbg": "^1.0.0", inherits: "^2.0.1", "minimalistic-assert": "^1.0.0", "minimalistic-crypto-utils": "^1.0.0" }, description: "EC cryptography", devDependencies: { brfs: "^1.4.3", coveralls: "^2.11.3", grunt: "^0.4.5", "grunt-browserify": "^5.0.0", "grunt-cli": "^1.2.0", "grunt-contrib-connect": "^1.0.0", "grunt-contrib-copy": "^1.0.0", "grunt-contrib-uglify": "^1.0.1", "grunt-mocha-istanbul": "^3.0.1", "grunt-saucelabs": "^8.6.2", istanbul: "^0.4.2", jscs: "^2.9.0", jshint: "^2.6.0", mocha: "^2.1.0" }, files: ["lib"], homepage: "https://github.com/indutny/elliptic", keywords: ["EC", "Elliptic", "curve", "Cryptography"], license: "MIT", main: "lib/elliptic.js", name: "elliptic", repository: { type: "git", url: "git+ssh://git@github.com/indutny/elliptic.git" }, scripts: { jscs: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js", jshint: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js", lint: "npm run jscs && npm run jshint", test: "npm run lint && npm run unit", unit: "istanbul test _mocha --reporter=spec test/index.js", version: "grunt dist && git add dist/" }, version: "6.4.1" }; }, function (e, t, r) {
                        "use strict";
                        var n = t, i = r(2), o = r(11), a = r(61);
                        n.assert = o, n.toArray = a.toArray, n.zero2 = a.zero2, n.toHex = a.toHex, n.encode = a.encode, n.getNAF = function (e, t) { for (var r = [], n = 1 << t + 1, i = e.clone(); i.cmpn(1) >= 0;) {
                            var o;
                            if (i.isOdd()) {
                                var a = i.andln(n - 1);
                                o = a > (n >> 1) - 1 ? (n >> 1) - a : a, i.isubn(o);
                            }
                            else
                                o = 0;
                            r.push(o);
                            for (var s = 0 !== i.cmpn(0) && 0 === i.andln(n - 1) ? t + 1 : 1, f = 1; f < s; f++)
                                r.push(0);
                            i.iushrn(s);
                        } return r; }, n.getJSF = function (e, t) { var r = [[], []]; e = e.clone(), t = t.clone(); for (var n = 0, i = 0; e.cmpn(-n) > 0 || t.cmpn(-i) > 0;) {
                            var o, a, s, f = e.andln(3) + n & 3, c = t.andln(3) + i & 3;
                            3 === f && (f = -1), 3 === c && (c = -1), o = 0 == (1 & f) ? 0 : 3 != (s = e.andln(7) + n & 7) && 5 !== s || 2 !== c ? f : -f, r[0].push(o), a = 0 == (1 & c) ? 0 : 3 != (s = t.andln(7) + i & 7) && 5 !== s || 2 !== f ? c : -c, r[1].push(a), 2 * n === o + 1 && (n = 1 - n), 2 * i === a + 1 && (i = 1 - i), e.iushrn(1), t.iushrn(1);
                        } return r; }, n.cachedProperty = function (e, t, r) { var n = "_" + t; e.prototype[t] = function () { return void 0 !== this[n] ? this[n] : this[n] = r.call(this); }; }, n.parseBytes = function (e) { return "string" == typeof e ? n.toArray(e, "hex") : e; }, n.intFromLE = function (e) { return new i(e, "hex", "le"); };
                    }, function (e, t, r) { var n; function i(e) { this.rand = e; } if (e.exports = function (e) { return n || (n = new i(null)), n.generate(e); }, e.exports.Rand = i, i.prototype.generate = function (e) { return this._rand(e); }, i.prototype._rand = function (e) { if (this.rand.getBytes)
                        return this.rand.getBytes(e); for (var t = new Uint8Array(e), r = 0; r < t.length; r++)
                        t[r] = this.rand.getByte(); return t; }, "object" == typeof self)
                        self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function (e) { var t = new Uint8Array(e); return self.crypto.getRandomValues(t), t; } : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function (e) { var t = new Uint8Array(e); return self.msCrypto.getRandomValues(t), t; } : "object" == typeof window && (i.prototype._rand = function () { throw new Error("Not implemented yet"); });
                    else
                        try {
                            var o = r(134);
                            if ("function" != typeof o.randomBytes)
                                throw new Error("Not supported");
                            i.prototype._rand = function (e) { return o.randomBytes(e); };
                        }
                        catch (e) { } }, function (e, t) { }, function (e, t, r) {
                        "use strict";
                        var n = r(2), i = r(3).utils, o = i.getNAF, a = i.getJSF, s = i.assert;
                        function f(e, t) { this.type = e, this.p = new n(t.p, 16), this.red = t.prime ? n.red(t.prime) : n.mont(this.p), this.zero = new n(0).toRed(this.red), this.one = new n(1).toRed(this.red), this.two = new n(2).toRed(this.red), this.n = t.n && new n(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4); var r = this.n && this.p.div(this.n); !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red)); }
                        function c(e, t) { this.curve = e, this.type = t, this.precomputed = null; }
                        e.exports = f, f.prototype.point = function () { throw new Error("Not implemented"); }, f.prototype.validate = function () { throw new Error("Not implemented"); }, f.prototype._fixedNafMul = function (e, t) { s(e.precomputed); var r = e._getDoubles(), n = o(t, 1), i = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1); i /= 3; for (var a = [], f = 0; f < n.length; f += r.step) {
                            var c = 0;
                            for (t = f + r.step - 1; t >= f; t--)
                                c = (c << 1) + n[t];
                            a.push(c);
                        } for (var u = this.jpoint(null, null, null), d = this.jpoint(null, null, null), h = i; h > 0; h--) {
                            for (f = 0; f < a.length; f++) {
                                (c = a[f]) === h ? d = d.mixedAdd(r.points[f]) : c === -h && (d = d.mixedAdd(r.points[f].neg()));
                            }
                            u = u.add(d);
                        } return u.toP(); }, f.prototype._wnafMul = function (e, t) { var r = 4, n = e._getNAFPoints(r); r = n.wnd; for (var i = n.points, a = o(t, r), f = this.jpoint(null, null, null), c = a.length - 1; c >= 0; c--) {
                            for (t = 0; c >= 0 && 0 === a[c]; c--)
                                t++;
                            if (c >= 0 && t++, f = f.dblp(t), c < 0)
                                break;
                            var u = a[c];
                            s(0 !== u), f = "affine" === e.type ? u > 0 ? f.mixedAdd(i[u - 1 >> 1]) : f.mixedAdd(i[-u - 1 >> 1].neg()) : u > 0 ? f.add(i[u - 1 >> 1]) : f.add(i[-u - 1 >> 1].neg());
                        } return "affine" === e.type ? f.toP() : f; }, f.prototype._wnafMulAdd = function (e, t, r, n, i) { for (var s = this._wnafT1, f = this._wnafT2, c = this._wnafT3, u = 0, d = 0; d < n; d++) {
                            var h = (x = t[d])._getNAFPoints(e);
                            s[d] = h.wnd, f[d] = h.points;
                        } for (d = n - 1; d >= 1; d -= 2) {
                            var l = d - 1, p = d;
                            if (1 === s[l] && 1 === s[p]) {
                                var b = [t[l], null, null, t[p]];
                                0 === t[l].y.cmp(t[p].y) ? (b[1] = t[l].add(t[p]), b[2] = t[l].toJ().mixedAdd(t[p].neg())) : 0 === t[l].y.cmp(t[p].y.redNeg()) ? (b[1] = t[l].toJ().mixedAdd(t[p]), b[2] = t[l].add(t[p].neg())) : (b[1] = t[l].toJ().mixedAdd(t[p]), b[2] = t[l].toJ().mixedAdd(t[p].neg()));
                                var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3], v = a(r[l], r[p]);
                                u = Math.max(v[0].length, u), c[l] = new Array(u), c[p] = new Array(u);
                                for (var y = 0; y < u; y++) {
                                    var m = 0 | v[0][y], _ = 0 | v[1][y];
                                    c[l][y] = g[3 * (m + 1) + (_ + 1)], c[p][y] = 0, f[l] = b;
                                }
                            }
                            else
                                c[l] = o(r[l], s[l]), c[p] = o(r[p], s[p]), u = Math.max(c[l].length, u), u = Math.max(c[p].length, u);
                        } var w = this.jpoint(null, null, null), E = this._wnafT4; for (d = u; d >= 0; d--) {
                            for (var A = 0; d >= 0;) {
                                var S = !0;
                                for (y = 0; y < n; y++)
                                    E[y] = 0 | c[y][d], 0 !== E[y] && (S = !1);
                                if (!S)
                                    break;
                                A++, d--;
                            }
                            if (d >= 0 && A++, w = w.dblp(A), d < 0)
                                break;
                            for (y = 0; y < n; y++) {
                                var x, M = E[y];
                                0 !== M && (M > 0 ? x = f[y][M - 1 >> 1] : M < 0 && (x = f[y][-M - 1 >> 1].neg()), w = "affine" === x.type ? w.mixedAdd(x) : w.add(x));
                            }
                        } for (d = 0; d < n; d++)
                            f[d] = null; return i ? w : w.toP(); }, f.BasePoint = c, c.prototype.eq = function () { throw new Error("Not implemented"); }, c.prototype.validate = function () { return this.curve.validate(this); }, f.prototype.decodePoint = function (e, t) { e = i.toArray(e, t); var r = this.p.byteLength(); if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r)
                            return 6 === e[0] ? s(e[e.length - 1] % 2 == 0) : 7 === e[0] && s(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r)); if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
                            return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]); throw new Error("Unknown point format"); }, c.prototype.encodeCompressed = function (e) { return this.encode(e, !0); }, c.prototype._encode = function (e) { var t = this.curve.p.byteLength(), r = this.getX().toArray("be", t); return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t)); }, c.prototype.encode = function (e, t) { return i.encode(this._encode(t), e); }, c.prototype.precompute = function (e) { if (this.precomputed)
                            return this; var t = { doubles: null, naf: null, beta: null }; return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this; }, c.prototype._hasDoubles = function (e) { if (!this.precomputed)
                            return !1; var t = this.precomputed.doubles; return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step); }, c.prototype._getDoubles = function (e, t) { if (this.precomputed && this.precomputed.doubles)
                            return this.precomputed.doubles; for (var r = [this], n = this, i = 0; i < t; i += e) {
                            for (var o = 0; o < e; o++)
                                n = n.dbl();
                            r.push(n);
                        } return { step: e, points: r }; }, c.prototype._getNAFPoints = function (e) { if (this.precomputed && this.precomputed.naf)
                            return this.precomputed.naf; for (var t = [this], r = (1 << e) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++)
                            t[i] = t[i - 1].add(n); return { wnd: e, points: t }; }, c.prototype._getBeta = function () { return null; }, c.prototype.dblp = function (e) { for (var t = this, r = 0; r < e; r++)
                            t = t.dbl(); return t; };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(24), i = r(3), o = r(2), a = r(0), s = n.base, f = i.utils.assert;
                        function c(e) { s.call(this, "short", e), this.a = new o(e.a, 16).toRed(this.red), this.b = new o(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4); }
                        function u(e, t, r, n) { s.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new o(t, 16), this.y = new o(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1); }
                        function d(e, t, r, n) { s.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new o(0)) : (this.x = new o(t, 16), this.y = new o(r, 16), this.z = new o(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one; }
                        a(c, s), e.exports = c, c.prototype._getEndomorphism = function (e) { if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                            var t, r;
                            if (e.beta)
                                t = new o(e.beta, 16).toRed(this.red);
                            else {
                                var n = this._getEndoRoots(this.p);
                                t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
                            }
                            if (e.lambda)
                                r = new o(e.lambda, 16);
                            else {
                                var i = this._getEndoRoots(this.n);
                                0 === this.g.mul(i[0]).x.cmp(this.g.x.redMul(t)) ? r = i[0] : (r = i[1], f(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
                            }
                            return { beta: t, lambda: r, basis: e.basis ? e.basis.map(function (e) { return { a: new o(e.a, 16), b: new o(e.b, 16) }; }) : this._getEndoBasis(r) };
                        } }, c.prototype._getEndoRoots = function (e) { var t = e === this.p ? this.red : o.mont(e), r = new o(2).toRed(t).redInvm(), n = r.redNeg(), i = new o(3).toRed(t).redNeg().redSqrt().redMul(r); return [n.redAdd(i).fromRed(), n.redSub(i).fromRed()]; }, c.prototype._getEndoBasis = function (e) { for (var t, r, n, i, a, s, f, c, u, d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), h = e, l = this.n.clone(), p = new o(1), b = new o(0), g = new o(0), v = new o(1), y = 0; 0 !== h.cmpn(0);) {
                            var m = l.div(h);
                            c = l.sub(m.mul(h)), u = g.sub(m.mul(p));
                            var _ = v.sub(m.mul(b));
                            if (!n && c.cmp(d) < 0)
                                t = f.neg(), r = p, n = c.neg(), i = u;
                            else if (n && 2 == ++y)
                                break;
                            f = c, l = h, h = c, g = p, p = u, v = b, b = _;
                        } a = c.neg(), s = u; var w = n.sqr().add(i.sqr()); return a.sqr().add(s.sqr()).cmp(w) >= 0 && (a = t, s = r), n.negative && (n = n.neg(), i = i.neg()), a.negative && (a = a.neg(), s = s.neg()), [{ a: n, b: i }, { a: a, b: s }]; }, c.prototype._endoSplit = function (e) { var t = this.endo.basis, r = t[0], n = t[1], i = n.b.mul(e).divRound(this.n), o = r.b.neg().mul(e).divRound(this.n), a = i.mul(r.a), s = o.mul(n.a), f = i.mul(r.b), c = o.mul(n.b); return { k1: e.sub(a).sub(s), k2: f.add(c).neg() }; }, c.prototype.pointFromX = function (e, t) { (e = new o(e, 16)).red || (e = e.toRed(this.red)); var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b), n = r.redSqrt(); if (0 !== n.redSqr().redSub(r).cmp(this.zero))
                            throw new Error("invalid point"); var i = n.fromRed().isOdd(); return (t && !i || !t && i) && (n = n.redNeg()), this.point(e, n); }, c.prototype.validate = function (e) { if (e.inf)
                            return !0; var t = e.x, r = e.y, n = this.a.redMul(t), i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b); return 0 === r.redSqr().redISub(i).cmpn(0); }, c.prototype._endoWnafMulAdd = function (e, t, r) { for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < e.length; o++) {
                            var a = this._endoSplit(t[o]), s = e[o], f = s._getBeta();
                            a.k1.negative && (a.k1.ineg(), s = s.neg(!0)), a.k2.negative && (a.k2.ineg(), f = f.neg(!0)), n[2 * o] = s, n[2 * o + 1] = f, i[2 * o] = a.k1, i[2 * o + 1] = a.k2;
                        } for (var c = this._wnafMulAdd(1, n, i, 2 * o, r), u = 0; u < 2 * o; u++)
                            n[u] = null, i[u] = null; return c; }, a(u, s.BasePoint), c.prototype.point = function (e, t, r) { return new u(this, e, t, r); }, c.prototype.pointFromJSON = function (e, t) { return u.fromJSON(this, e, t); }, u.prototype._getBeta = function () { if (this.curve.endo) {
                            var e = this.precomputed;
                            if (e && e.beta)
                                return e.beta;
                            var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                            if (e) {
                                var r = this.curve, n = function (e) { return r.point(e.x.redMul(r.endo.beta), e.y); };
                                e.beta = t, t.precomputed = { beta: null, naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(n) }, doubles: e.doubles && { step: e.doubles.step, points: e.doubles.points.map(n) } };
                            }
                            return t;
                        } }, u.prototype.toJSON = function () { return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y]; }, u.fromJSON = function (e, t, r) { "string" == typeof t && (t = JSON.parse(t)); var n = e.point(t[0], t[1], r); if (!t[2])
                            return n; function i(t) { return e.point(t[0], t[1], r); } var o = t[2]; return n.precomputed = { beta: null, doubles: o.doubles && { step: o.doubles.step, points: [n].concat(o.doubles.points.map(i)) }, naf: o.naf && { wnd: o.naf.wnd, points: [n].concat(o.naf.points.map(i)) } }, n; }, u.prototype.inspect = function () { return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"; }, u.prototype.isInfinity = function () { return this.inf; }, u.prototype.add = function (e) { if (this.inf)
                            return e; if (e.inf)
                            return this; if (this.eq(e))
                            return this.dbl(); if (this.neg().eq(e))
                            return this.curve.point(null, null); if (0 === this.x.cmp(e.x))
                            return this.curve.point(null, null); var t = this.y.redSub(e.y); 0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm())); var r = t.redSqr().redISub(this.x).redISub(e.x), n = t.redMul(this.x.redSub(r)).redISub(this.y); return this.curve.point(r, n); }, u.prototype.dbl = function () { if (this.inf)
                            return this; var e = this.y.redAdd(this.y); if (0 === e.cmpn(0))
                            return this.curve.point(null, null); var t = this.curve.a, r = this.x.redSqr(), n = e.redInvm(), i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n), o = i.redSqr().redISub(this.x.redAdd(this.x)), a = i.redMul(this.x.redSub(o)).redISub(this.y); return this.curve.point(o, a); }, u.prototype.getX = function () { return this.x.fromRed(); }, u.prototype.getY = function () { return this.y.fromRed(); }, u.prototype.mul = function (e) { return e = new o(e, 16), this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e); }, u.prototype.mulAdd = function (e, t, r) { var n = [this, t], i = [e, r]; return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2); }, u.prototype.jmulAdd = function (e, t, r) { var n = [this, t], i = [e, r]; return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0); }, u.prototype.eq = function (e) { return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y)); }, u.prototype.neg = function (e) { if (this.inf)
                            return this; var t = this.curve.point(this.x, this.y.redNeg()); if (e && this.precomputed) {
                            var r = this.precomputed, n = function (e) { return e.neg(); };
                            t.precomputed = { naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) }, doubles: r.doubles && { step: r.doubles.step, points: r.doubles.points.map(n) } };
                        } return t; }, u.prototype.toJ = function () { return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one); }, a(d, s.BasePoint), c.prototype.jpoint = function (e, t, r) { return new d(this, e, t, r); }, d.prototype.toP = function () { if (this.isInfinity())
                            return this.curve.point(null, null); var e = this.z.redInvm(), t = e.redSqr(), r = this.x.redMul(t), n = this.y.redMul(t).redMul(e); return this.curve.point(r, n); }, d.prototype.neg = function () { return this.curve.jpoint(this.x, this.y.redNeg(), this.z); }, d.prototype.add = function (e) { if (this.isInfinity())
                            return e; if (e.isInfinity())
                            return this; var t = e.z.redSqr(), r = this.z.redSqr(), n = this.x.redMul(t), i = e.x.redMul(r), o = this.y.redMul(t.redMul(e.z)), a = e.y.redMul(r.redMul(this.z)), s = n.redSub(i), f = o.redSub(a); if (0 === s.cmpn(0))
                            return 0 !== f.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl(); var c = s.redSqr(), u = c.redMul(s), d = n.redMul(c), h = f.redSqr().redIAdd(u).redISub(d).redISub(d), l = f.redMul(d.redISub(h)).redISub(o.redMul(u)), p = this.z.redMul(e.z).redMul(s); return this.curve.jpoint(h, l, p); }, d.prototype.mixedAdd = function (e) { if (this.isInfinity())
                            return e.toJ(); if (e.isInfinity())
                            return this; var t = this.z.redSqr(), r = this.x, n = e.x.redMul(t), i = this.y, o = e.y.redMul(t).redMul(this.z), a = r.redSub(n), s = i.redSub(o); if (0 === a.cmpn(0))
                            return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl(); var f = a.redSqr(), c = f.redMul(a), u = r.redMul(f), d = s.redSqr().redIAdd(c).redISub(u).redISub(u), h = s.redMul(u.redISub(d)).redISub(i.redMul(c)), l = this.z.redMul(a); return this.curve.jpoint(d, h, l); }, d.prototype.dblp = function (e) { if (0 === e)
                            return this; if (this.isInfinity())
                            return this; if (!e)
                            return this.dbl(); if (this.curve.zeroA || this.curve.threeA) {
                            for (var t = this, r = 0; r < e; r++)
                                t = t.dbl();
                            return t;
                        } var n = this.curve.a, i = this.curve.tinv, o = this.x, a = this.y, s = this.z, f = s.redSqr().redSqr(), c = a.redAdd(a); for (r = 0; r < e; r++) {
                            var u = o.redSqr(), d = c.redSqr(), h = d.redSqr(), l = u.redAdd(u).redIAdd(u).redIAdd(n.redMul(f)), p = o.redMul(d), b = l.redSqr().redISub(p.redAdd(p)), g = p.redISub(b), v = l.redMul(g);
                            v = v.redIAdd(v).redISub(h);
                            var y = c.redMul(s);
                            r + 1 < e && (f = f.redMul(h)), o = b, s = y, c = v;
                        } return this.curve.jpoint(o, c.redMul(i), s); }, d.prototype.dbl = function () { return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl(); }, d.prototype._zeroDbl = function () { var e, t, r; if (this.zOne) {
                            var n = this.x.redSqr(), i = this.y.redSqr(), o = i.redSqr(), a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                            a = a.redIAdd(a);
                            var s = n.redAdd(n).redIAdd(n), f = s.redSqr().redISub(a).redISub(a), c = o.redIAdd(o);
                            c = (c = c.redIAdd(c)).redIAdd(c), e = f, t = s.redMul(a.redISub(f)).redISub(c), r = this.y.redAdd(this.y);
                        }
                        else {
                            var u = this.x.redSqr(), d = this.y.redSqr(), h = d.redSqr(), l = this.x.redAdd(d).redSqr().redISub(u).redISub(h);
                            l = l.redIAdd(l);
                            var p = u.redAdd(u).redIAdd(u), b = p.redSqr(), g = h.redIAdd(h);
                            g = (g = g.redIAdd(g)).redIAdd(g), e = b.redISub(l).redISub(l), t = p.redMul(l.redISub(e)).redISub(g), r = (r = this.y.redMul(this.z)).redIAdd(r);
                        } return this.curve.jpoint(e, t, r); }, d.prototype._threeDbl = function () { var e, t, r; if (this.zOne) {
                            var n = this.x.redSqr(), i = this.y.redSqr(), o = i.redSqr(), a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                            a = a.redIAdd(a);
                            var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a), f = s.redSqr().redISub(a).redISub(a);
                            e = f;
                            var c = o.redIAdd(o);
                            c = (c = c.redIAdd(c)).redIAdd(c), t = s.redMul(a.redISub(f)).redISub(c), r = this.y.redAdd(this.y);
                        }
                        else {
                            var u = this.z.redSqr(), d = this.y.redSqr(), h = this.x.redMul(d), l = this.x.redSub(u).redMul(this.x.redAdd(u));
                            l = l.redAdd(l).redIAdd(l);
                            var p = h.redIAdd(h), b = (p = p.redIAdd(p)).redAdd(p);
                            e = l.redSqr().redISub(b), r = this.y.redAdd(this.z).redSqr().redISub(d).redISub(u);
                            var g = d.redSqr();
                            g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g), t = l.redMul(p.redISub(e)).redISub(g);
                        } return this.curve.jpoint(e, t, r); }, d.prototype._dbl = function () { var e = this.curve.a, t = this.x, r = this.y, n = this.z, i = n.redSqr().redSqr(), o = t.redSqr(), a = r.redSqr(), s = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)), f = t.redAdd(t), c = (f = f.redIAdd(f)).redMul(a), u = s.redSqr().redISub(c.redAdd(c)), d = c.redISub(u), h = a.redSqr(); h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h); var l = s.redMul(d).redISub(h), p = r.redAdd(r).redMul(n); return this.curve.jpoint(u, l, p); }, d.prototype.trpl = function () { if (!this.curve.zeroA)
                            return this.dbl().add(this); var e = this.x.redSqr(), t = this.y.redSqr(), r = this.z.redSqr(), n = t.redSqr(), i = e.redAdd(e).redIAdd(e), o = i.redSqr(), a = this.x.redAdd(t).redSqr().redISub(e).redISub(n), s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr(), f = n.redIAdd(n); f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f); var c = i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(f), u = t.redMul(c); u = (u = u.redIAdd(u)).redIAdd(u); var d = this.x.redMul(s).redISub(u); d = (d = d.redIAdd(d)).redIAdd(d); var h = this.y.redMul(c.redMul(f.redISub(c)).redISub(a.redMul(s))); h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h); var l = this.z.redAdd(a).redSqr().redISub(r).redISub(s); return this.curve.jpoint(d, h, l); }, d.prototype.mul = function (e, t) { return e = new o(e, t), this.curve._wnafMul(this, e); }, d.prototype.eq = function (e) { if ("affine" === e.type)
                            return this.eq(e.toJ()); if (this === e)
                            return !0; var t = this.z.redSqr(), r = e.z.redSqr(); if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))
                            return !1; var n = t.redMul(this.z), i = r.redMul(e.z); return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0); }, d.prototype.eqXToP = function (e) { var t = this.z.redSqr(), r = e.toRed(this.curve.red).redMul(t); if (0 === this.x.cmp(r))
                            return !0; for (var n = e.clone(), i = this.curve.redN.redMul(t);;) {
                            if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)
                                return !1;
                            if (r.redIAdd(i), 0 === this.x.cmp(r))
                                return !0;
                        } }, d.prototype.inspect = function () { return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"; }, d.prototype.isInfinity = function () { return 0 === this.z.cmpn(0); };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(24), i = r(2), o = r(0), a = n.base, s = r(3).utils;
                        function f(e) { a.call(this, "mont", e), this.a = new i(e.a, 16).toRed(this.red), this.b = new i(e.b, 16).toRed(this.red), this.i4 = new i(4).toRed(this.red).redInvm(), this.two = new i(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two)); }
                        function c(e, t, r) { a.BasePoint.call(this, e, "projective"), null === t && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new i(t, 16), this.z = new i(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red))); }
                        o(f, a), e.exports = f, f.prototype.validate = function (e) { var t = e.normalize().x, r = t.redSqr(), n = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t); return 0 === n.redSqrt().redSqr().cmp(n); }, o(c, a.BasePoint), f.prototype.decodePoint = function (e, t) { return this.point(s.toArray(e, t), 1); }, f.prototype.point = function (e, t) { return new c(this, e, t); }, f.prototype.pointFromJSON = function (e) { return c.fromJSON(this, e); }, c.prototype.precompute = function () { }, c.prototype._encode = function () { return this.getX().toArray("be", this.curve.p.byteLength()); }, c.fromJSON = function (e, t) { return new c(e, t[0], t[1] || e.one); }, c.prototype.inspect = function () { return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"; }, c.prototype.isInfinity = function () { return 0 === this.z.cmpn(0); }, c.prototype.dbl = function () { var e = this.x.redAdd(this.z).redSqr(), t = this.x.redSub(this.z).redSqr(), r = e.redSub(t), n = e.redMul(t), i = r.redMul(t.redAdd(this.curve.a24.redMul(r))); return this.curve.point(n, i); }, c.prototype.add = function () { throw new Error("Not supported on Montgomery curve"); }, c.prototype.diffAdd = function (e, t) { var r = this.x.redAdd(this.z), n = this.x.redSub(this.z), i = e.x.redAdd(e.z), o = e.x.redSub(e.z).redMul(r), a = i.redMul(n), s = t.z.redMul(o.redAdd(a).redSqr()), f = t.x.redMul(o.redISub(a).redSqr()); return this.curve.point(s, f); }, c.prototype.mul = function (e) { for (var t = e.clone(), r = this, n = this.curve.point(null, null), i = []; 0 !== t.cmpn(0); t.iushrn(1))
                            i.push(t.andln(1)); for (var o = i.length - 1; o >= 0; o--)
                            0 === i[o] ? (r = r.diffAdd(n, this), n = n.dbl()) : (n = r.diffAdd(n, this), r = r.dbl()); return n; }, c.prototype.mulAdd = function () { throw new Error("Not supported on Montgomery curve"); }, c.prototype.jumlAdd = function () { throw new Error("Not supported on Montgomery curve"); }, c.prototype.eq = function (e) { return 0 === this.getX().cmp(e.getX()); }, c.prototype.normalize = function () { return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this; }, c.prototype.getX = function () { return this.normalize(), this.x.fromRed(); };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(24), i = r(3), o = r(2), a = r(0), s = n.base, f = i.utils.assert;
                        function c(e) { this.twisted = 1 != (0 | e.a), this.mOneA = this.twisted && -1 == (0 | e.a), this.extended = this.mOneA, s.call(this, "edwards", e), this.a = new o(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new o(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new o(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), f(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | e.c); }
                        function u(e, t, r, n, i) { s.BasePoint.call(this, e, "projective"), null === t && null === r && null === n ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new o(t, 16), this.y = new o(r, 16), this.z = n ? new o(n, 16) : this.curve.one, this.t = i && new o(i, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm())))); }
                        a(c, s), e.exports = c, c.prototype._mulA = function (e) { return this.mOneA ? e.redNeg() : this.a.redMul(e); }, c.prototype._mulC = function (e) { return this.oneC ? e : this.c.redMul(e); }, c.prototype.jpoint = function (e, t, r, n) { return this.point(e, t, r, n); }, c.prototype.pointFromX = function (e, t) { (e = new o(e, 16)).red || (e = e.toRed(this.red)); var r = e.redSqr(), n = this.c2.redSub(this.a.redMul(r)), i = this.one.redSub(this.c2.redMul(this.d).redMul(r)), a = n.redMul(i.redInvm()), s = a.redSqrt(); if (0 !== s.redSqr().redSub(a).cmp(this.zero))
                            throw new Error("invalid point"); var f = s.fromRed().isOdd(); return (t && !f || !t && f) && (s = s.redNeg()), this.point(e, s); }, c.prototype.pointFromY = function (e, t) { (e = new o(e, 16)).red || (e = e.toRed(this.red)); var r = e.redSqr(), n = r.redSub(this.c2), i = r.redMul(this.d).redMul(this.c2).redSub(this.a), a = n.redMul(i.redInvm()); if (0 === a.cmp(this.zero)) {
                            if (t)
                                throw new Error("invalid point");
                            return this.point(this.zero, e);
                        } var s = a.redSqrt(); if (0 !== s.redSqr().redSub(a).cmp(this.zero))
                            throw new Error("invalid point"); return s.fromRed().isOdd() !== t && (s = s.redNeg()), this.point(s, e); }, c.prototype.validate = function (e) { if (e.isInfinity())
                            return !0; e.normalize(); var t = e.x.redSqr(), r = e.y.redSqr(), n = t.redMul(this.a).redAdd(r), i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r))); return 0 === n.cmp(i); }, a(u, s.BasePoint), c.prototype.pointFromJSON = function (e) { return u.fromJSON(this, e); }, c.prototype.point = function (e, t, r, n) { return new u(this, e, t, r, n); }, u.fromJSON = function (e, t) { return new u(e, t[0], t[1], t[2]); }, u.prototype.inspect = function () { return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"; }, u.prototype.isInfinity = function () { return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c)); }, u.prototype._extDbl = function () { var e = this.x.redSqr(), t = this.y.redSqr(), r = this.z.redSqr(); r = r.redIAdd(r); var n = this.curve._mulA(e), i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t), o = n.redAdd(t), a = o.redSub(r), s = n.redSub(t), f = i.redMul(a), c = o.redMul(s), u = i.redMul(s), d = a.redMul(o); return this.curve.point(f, c, d, u); }, u.prototype._projDbl = function () { var e, t, r, n = this.x.redAdd(this.y).redSqr(), i = this.x.redSqr(), o = this.y.redSqr(); if (this.curve.twisted) {
                            var a = (c = this.curve._mulA(i)).redAdd(o);
                            if (this.zOne)
                                e = n.redSub(i).redSub(o).redMul(a.redSub(this.curve.two)), t = a.redMul(c.redSub(o)), r = a.redSqr().redSub(a).redSub(a);
                            else {
                                var s = this.z.redSqr(), f = a.redSub(s).redISub(s);
                                e = n.redSub(i).redISub(o).redMul(f), t = a.redMul(c.redSub(o)), r = a.redMul(f);
                            }
                        }
                        else {
                            var c = i.redAdd(o);
                            s = this.curve._mulC(this.z).redSqr(), f = c.redSub(s).redSub(s);
                            e = this.curve._mulC(n.redISub(c)).redMul(f), t = this.curve._mulC(c).redMul(i.redISub(o)), r = c.redMul(f);
                        } return this.curve.point(e, t, r); }, u.prototype.dbl = function () { return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl(); }, u.prototype._extAdd = function (e) { var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)), r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)), n = this.t.redMul(this.curve.dd).redMul(e.t), i = this.z.redMul(e.z.redAdd(e.z)), o = r.redSub(t), a = i.redSub(n), s = i.redAdd(n), f = r.redAdd(t), c = o.redMul(a), u = s.redMul(f), d = o.redMul(f), h = a.redMul(s); return this.curve.point(c, u, h, d); }, u.prototype._projAdd = function (e) { var t, r, n = this.z.redMul(e.z), i = n.redSqr(), o = this.x.redMul(e.x), a = this.y.redMul(e.y), s = this.curve.d.redMul(o).redMul(a), f = i.redSub(s), c = i.redAdd(s), u = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(o).redISub(a), d = n.redMul(f).redMul(u); return this.curve.twisted ? (t = n.redMul(c).redMul(a.redSub(this.curve._mulA(o))), r = f.redMul(c)) : (t = n.redMul(c).redMul(a.redSub(o)), r = this.curve._mulC(f).redMul(c)), this.curve.point(d, t, r); }, u.prototype.add = function (e) { return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e); }, u.prototype.mul = function (e) { return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e); }, u.prototype.mulAdd = function (e, t, r) { return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1); }, u.prototype.jmulAdd = function (e, t, r) { return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0); }, u.prototype.normalize = function () { if (this.zOne)
                            return this; var e = this.z.redInvm(); return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this; }, u.prototype.neg = function () { return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg()); }, u.prototype.getX = function () { return this.normalize(), this.x.fromRed(); }, u.prototype.getY = function () { return this.normalize(), this.y.fromRed(); }, u.prototype.eq = function (e) { return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY()); }, u.prototype.eqXToP = function (e) { var t = e.toRed(this.curve.red).redMul(this.z); if (0 === this.x.cmp(t))
                            return !0; for (var r = e.clone(), n = this.curve.redN.redMul(this.z);;) {
                            if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)
                                return !1;
                            if (t.redIAdd(n), 0 === this.x.cmp(t))
                                return !0;
                        } }, u.prototype.toP = u.prototype.normalize, u.prototype.mixedAdd = u.prototype.add;
                    }, function (e, t, r) {
                        "use strict";
                        var n, i = t, o = r(32), a = r(3), s = a.utils.assert;
                        function f(e) { "short" === e.type ? this.curve = new a.curve.short(e) : "edwards" === e.type ? this.curve = new a.curve.edwards(e) : this.curve = new a.curve.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, s(this.g.validate(), "Invalid curve"), s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O"); }
                        function c(e, t) { Object.defineProperty(i, e, { configurable: !0, enumerable: !0, get: function () { var r = new f(t); return Object.defineProperty(i, e, { configurable: !0, enumerable: !0, value: r }), r; } }); }
                        i.PresetCurve = f, c("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: o.sha256, gRed: !1, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), c("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: o.sha256, gRed: !1, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), c("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: o.sha256, gRed: !1, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), c("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: o.sha384, gRed: !1, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), c("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: o.sha512, gRed: !1, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), c("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: o.sha256, gRed: !1, g: ["9"] }), c("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: o.sha256, gRed: !1, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] });
                        try {
                            n = r(146);
                        }
                        catch (e) {
                            n = void 0;
                        }
                        c("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: o.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: !1, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", n] });
                    }, function (e, t, r) {
                        "use strict";
                        t.sha1 = r(141), t.sha224 = r(142), t.sha256 = r(63), t.sha384 = r(143), t.sha512 = r(64);
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(5), i = r(17), o = r(62), a = n.rotl32, s = n.sum32, f = n.sum32_5, c = o.ft_1, u = i.BlockHash, d = [1518500249, 1859775393, 2400959708, 3395469782];
                        function h() { if (!(this instanceof h))
                            return new h; u.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80); }
                        n.inherits(h, u), e.exports = h, h.blockSize = 512, h.outSize = 160, h.hmacStrength = 80, h.padLength = 64, h.prototype._update = function (e, t) { for (var r = this.W, n = 0; n < 16; n++)
                            r[n] = e[t + n]; for (; n < r.length; n++)
                            r[n] = a(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1); var i = this.h[0], o = this.h[1], u = this.h[2], h = this.h[3], l = this.h[4]; for (n = 0; n < r.length; n++) {
                            var p = ~~(n / 20), b = f(a(i, 5), c(p, o, u, h), l, r[n], d[p]);
                            l = h, h = u, u = a(o, 30), o = i, i = b;
                        } this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], u), this.h[3] = s(this.h[3], h), this.h[4] = s(this.h[4], l); }, h.prototype._digest = function (e) { return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big"); };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(5), i = r(63);
                        function o() { if (!(this instanceof o))
                            return new o; i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]; }
                        n.inherits(o, i), e.exports = o, o.blockSize = 512, o.outSize = 224, o.hmacStrength = 192, o.padLength = 64, o.prototype._digest = function (e) { return "hex" === e ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big"); };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(5), i = r(64);
                        function o() { if (!(this instanceof o))
                            return new o; i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]; }
                        n.inherits(o, i), e.exports = o, o.blockSize = 1024, o.outSize = 384, o.hmacStrength = 192, o.padLength = 128, o.prototype._digest = function (e) { return "hex" === e ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big"); };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(5), i = r(17), o = n.rotl32, a = n.sum32, s = n.sum32_3, f = n.sum32_4, c = i.BlockHash;
                        function u() { if (!(this instanceof u))
                            return new u; c.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"; }
                        function d(e, t, r, n) { return e <= 15 ? t ^ r ^ n : e <= 31 ? t & r | ~t & n : e <= 47 ? (t | ~r) ^ n : e <= 63 ? t & n | r & ~n : t ^ (r | ~n); }
                        function h(e) { return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838; }
                        function l(e) { return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0; }
                        n.inherits(u, c), t.ripemd160 = u, u.blockSize = 512, u.outSize = 160, u.hmacStrength = 192, u.padLength = 64, u.prototype._update = function (e, t) { for (var r = this.h[0], n = this.h[1], i = this.h[2], c = this.h[3], u = this.h[4], y = r, m = n, _ = i, w = c, E = u, A = 0; A < 80; A++) {
                            var S = a(o(f(r, d(A, n, i, c), e[p[A] + t], h(A)), g[A]), u);
                            r = u, u = c, c = o(i, 10), i = n, n = S, S = a(o(f(y, d(79 - A, m, _, w), e[b[A] + t], l(A)), v[A]), E), y = E, E = w, w = o(_, 10), _ = m, m = S;
                        } S = s(this.h[1], i, w), this.h[1] = s(this.h[2], c, E), this.h[2] = s(this.h[3], u, y), this.h[3] = s(this.h[4], r, m), this.h[4] = s(this.h[0], n, _), this.h[0] = S; }, u.prototype._digest = function (e) { return "hex" === e ? n.toHex32(this.h, "little") : n.split32(this.h, "little"); };
                        var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], b = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], g = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], v = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(5), i = r(11);
                        function o(e, t, r) { if (!(this instanceof o))
                            return new o(e, t, r); this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(t, r)); }
                        e.exports = o, o.prototype._init = function (e) { e.length > this.blockSize && (e = (new this.Hash).update(e).digest()), i(e.length <= this.blockSize); for (var t = e.length; t < this.blockSize; t++)
                            e.push(0); for (t = 0; t < e.length; t++)
                            e[t] ^= 54; for (this.inner = (new this.Hash).update(e), t = 0; t < e.length; t++)
                            e[t] ^= 106; this.outer = (new this.Hash).update(e); }, o.prototype.update = function (e, t) { return this.inner.update(e, t), this; }, o.prototype.digest = function (e) { return this.outer.update(this.inner.digest()), this.outer.digest(e); };
                    }, function (e, t) { e.exports = { doubles: { step: 4, points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]] }, naf: { wnd: 7, points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]] } }; }, function (e, t, r) {
                        "use strict";
                        var n = r(2), i = r(148), o = r(3), a = o.utils.assert, s = r(149), f = r(150);
                        function c(e) { if (!(this instanceof c))
                            return new c(e); "string" == typeof e && (a(o.curves.hasOwnProperty(e), "Unknown curve " + e), e = o.curves[e]), e instanceof o.curves.PresetCurve && (e = { curve: e }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash; }
                        e.exports = c, c.prototype.keyPair = function (e) { return new s(this, e); }, c.prototype.keyFromPrivate = function (e, t) { return s.fromPrivate(this, e, t); }, c.prototype.keyFromPublic = function (e, t) { return s.fromPublic(this, e, t); }, c.prototype.genKeyPair = function (e) { e || (e = {}); for (var t = new i({ hash: this.hash, pers: e.pers, persEnc: e.persEnc || "utf8", entropy: e.entropy || o.rand(this.hash.hmacStrength), entropyEnc: e.entropy && e.entropyEnc || "utf8", nonce: this.n.toArray() }), r = this.n.byteLength(), a = this.n.sub(new n(2));;) {
                            var s = new n(t.generate(r));
                            if (!(s.cmp(a) > 0))
                                return s.iaddn(1), this.keyFromPrivate(s);
                        } }, c.prototype._truncateToN = function (e, t) { var r = 8 * e.byteLength() - this.n.bitLength(); return r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e; }, c.prototype.sign = function (e, t, r, o) { "object" == typeof r && (o = r, r = null), o || (o = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new n(e, 16)); for (var a = this.n.byteLength(), s = t.getPrivate().toArray("be", a), c = e.toArray("be", a), u = new i({ hash: this.hash, entropy: s, nonce: c, pers: o.pers, persEnc: o.persEnc || "utf8" }), d = this.n.sub(new n(1)), h = 0;; h++) {
                            var l = o.k ? o.k(h) : new n(u.generate(this.n.byteLength()));
                            if (!((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(d) >= 0)) {
                                var p = this.g.mul(l);
                                if (!p.isInfinity()) {
                                    var b = p.getX(), g = b.umod(this.n);
                                    if (0 !== g.cmpn(0)) {
                                        var v = l.invm(this.n).mul(g.mul(t.getPrivate()).iadd(e));
                                        if (0 !== (v = v.umod(this.n)).cmpn(0)) {
                                            var y = (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(g) ? 2 : 0);
                                            return o.canonical && v.cmp(this.nh) > 0 && (v = this.n.sub(v), y ^= 1), new f({ r: g, s: v, recoveryParam: y });
                                        }
                                    }
                                }
                            }
                        } }, c.prototype.verify = function (e, t, r, i) { e = this._truncateToN(new n(e, 16)), r = this.keyFromPublic(r, i); var o = (t = new f(t, "hex")).r, a = t.s; if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0)
                            return !1; if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0)
                            return !1; var s, c = a.invm(this.n), u = c.mul(e).umod(this.n), d = c.mul(o).umod(this.n); return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(u, r.getPublic(), d)).isInfinity() && s.eqXToP(o) : !(s = this.g.mulAdd(u, r.getPublic(), d)).isInfinity() && 0 === s.getX().umod(this.n).cmp(o); }, c.prototype.recoverPubKey = function (e, t, r, i) { a((3 & r) === r, "The recovery param is more than two bits"), t = new f(t, i); var o = this.n, s = new n(e), c = t.r, u = t.s, d = 1 & r, h = r >> 1; if (c.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h)
                            throw new Error("Unable to find sencond key candinate"); c = h ? this.curve.pointFromX(c.add(this.curve.n), d) : this.curve.pointFromX(c, d); var l = t.r.invm(o), p = o.sub(s).mul(l).umod(o), b = u.mul(l).umod(o); return this.g.mulAdd(p, c, b); }, c.prototype.getKeyRecoveryParam = function (e, t, r, n) { if (null !== (t = new f(t, n)).recoveryParam)
                            return t.recoveryParam; for (var i = 0; i < 4; i++) {
                            var o;
                            try {
                                o = this.recoverPubKey(e, t, i);
                            }
                            catch (e) {
                                continue;
                            }
                            if (o.eq(r))
                                return i;
                        } throw new Error("Unable to find valid recovery factor"); };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(32), i = r(61), o = r(11);
                        function a(e) { if (!(this instanceof a))
                            return new a(e); this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null; var t = i.toArray(e.entropy, e.entropyEnc || "hex"), r = i.toArray(e.nonce, e.nonceEnc || "hex"), n = i.toArray(e.pers, e.persEnc || "hex"); o(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, n); }
                        e.exports = a, a.prototype._init = function (e, t, r) { var n = e.concat(t).concat(r); this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8); for (var i = 0; i < this.V.length; i++)
                            this.K[i] = 0, this.V[i] = 1; this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656; }, a.prototype._hmac = function () { return new n.hmac(this.hash, this.K); }, a.prototype._update = function (e) { var t = this._hmac().update(this.V).update([0]); e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest()); }, a.prototype.reseed = function (e, t, r, n) { "string" != typeof t && (n = r, r = t, t = null), e = i.toArray(e, t), r = i.toArray(r, n), o(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1; }, a.prototype.generate = function (e, t, r, n) { if (this._reseed > this.reseedInterval)
                            throw new Error("Reseed is required"); "string" != typeof t && (n = r, r = t, t = null), r && (r = i.toArray(r, n || "hex"), this._update(r)); for (var o = []; o.length < e;)
                            this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V); var a = o.slice(0, e); return this._update(r), this._reseed++, i.encode(a, t); };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(2), i = r(3).utils.assert;
                        function o(e, t) { this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc); }
                        e.exports = o, o.fromPublic = function (e, t, r) { return t instanceof o ? t : new o(e, { pub: t, pubEnc: r }); }, o.fromPrivate = function (e, t, r) { return t instanceof o ? t : new o(e, { priv: t, privEnc: r }); }, o.prototype.validate = function () { var e = this.getPublic(); return e.isInfinity() ? { result: !1, reason: "Invalid public key" } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? { result: !0, reason: null } : { result: !1, reason: "Public key * N != O" } : { result: !1, reason: "Public key is not a point" }; }, o.prototype.getPublic = function (e, t) { return "string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub; }, o.prototype.getPrivate = function (e) { return "hex" === e ? this.priv.toString(16, 2) : this.priv; }, o.prototype._importPrivate = function (e, t) { this.priv = new n(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n); }, o.prototype._importPublic = function (e, t) { if (e.x || e.y)
                            return "mont" === this.ec.curve.type ? i(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || i(e.x && e.y, "Need both x and y coordinate"), void (this.pub = this.ec.curve.point(e.x, e.y)); this.pub = this.ec.curve.decodePoint(e, t); }, o.prototype.derive = function (e) { return e.mul(this.priv).getX(); }, o.prototype.sign = function (e, t, r) { return this.ec.sign(e, this, t, r); }, o.prototype.verify = function (e, t) { return this.ec.verify(e, t, this); }, o.prototype.inspect = function () { return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"; };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(2), i = r(3).utils, o = i.assert;
                        function a(e, t) { if (e instanceof a)
                            return e; this._importDER(e, t) || (o(e.r && e.s, "Signature without r or s"), this.r = new n(e.r, 16), this.s = new n(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam); }
                        function s() { this.place = 0; }
                        function f(e, t) { var r = e[t.place++]; if (!(128 & r))
                            return r; for (var n = 15 & r, i = 0, o = 0, a = t.place; o < n; o++, a++)
                            i <<= 8, i |= e[a]; return t.place = a, i; }
                        function c(e) { for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;)
                            t++; return 0 === t ? e : e.slice(t); }
                        function u(e, t) { if (t < 128)
                            e.push(t);
                        else {
                            var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
                            for (e.push(128 | r); --r;)
                                e.push(t >>> (r << 3) & 255);
                            e.push(t);
                        } }
                        e.exports = a, a.prototype._importDER = function (e, t) { e = i.toArray(e, t); var r = new s; if (48 !== e[r.place++])
                            return !1; if (f(e, r) + r.place !== e.length)
                            return !1; if (2 !== e[r.place++])
                            return !1; var o = f(e, r), a = e.slice(r.place, o + r.place); if (r.place += o, 2 !== e[r.place++])
                            return !1; var c = f(e, r); if (e.length !== c + r.place)
                            return !1; var u = e.slice(r.place, c + r.place); return 0 === a[0] && 128 & a[1] && (a = a.slice(1)), 0 === u[0] && 128 & u[1] && (u = u.slice(1)), this.r = new n(a), this.s = new n(u), this.recoveryParam = null, !0; }, a.prototype.toDER = function (e) { var t = this.r.toArray(), r = this.s.toArray(); for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = c(t), r = c(r); !(r[0] || 128 & r[1]);)
                            r = r.slice(1); var n = [2]; u(n, t.length), (n = n.concat(t)).push(2), u(n, r.length); var o = n.concat(r), a = [48]; return u(a, o.length), a = a.concat(o), i.encode(a, e); };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(32), i = r(3), o = i.utils, a = o.assert, s = o.parseBytes, f = r(152), c = r(153);
                        function u(e) { if (a("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof u))
                            return new u(e); e = i.curves[e].curve; this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = n.sha512; }
                        e.exports = u, u.prototype.sign = function (e, t) { e = s(e); var r = this.keyFromSecret(t), n = this.hashInt(r.messagePrefix(), e), i = this.g.mul(n), o = this.encodePoint(i), a = this.hashInt(o, r.pubBytes(), e).mul(r.priv()), f = n.add(a).umod(this.curve.n); return this.makeSignature({ R: i, S: f, Rencoded: o }); }, u.prototype.verify = function (e, t, r) { e = s(e), t = this.makeSignature(t); var n = this.keyFromPublic(r), i = this.hashInt(t.Rencoded(), n.pubBytes(), e), o = this.g.mul(t.S()); return t.R().add(n.pub().mul(i)).eq(o); }, u.prototype.hashInt = function () { for (var e = this.hash(), t = 0; t < arguments.length; t++)
                            e.update(arguments[t]); return o.intFromLE(e.digest()).umod(this.curve.n); }, u.prototype.keyFromPublic = function (e) { return f.fromPublic(this, e); }, u.prototype.keyFromSecret = function (e) { return f.fromSecret(this, e); }, u.prototype.makeSignature = function (e) { return e instanceof c ? e : new c(this, e); }, u.prototype.encodePoint = function (e) { var t = e.getY().toArray("le", this.encodingLength); return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, t; }, u.prototype.decodePoint = function (e) { var t = (e = o.parseBytes(e)).length - 1, r = e.slice(0, t).concat(-129 & e[t]), n = 0 != (128 & e[t]), i = o.intFromLE(r); return this.curve.pointFromY(i, n); }, u.prototype.encodeInt = function (e) { return e.toArray("le", this.encodingLength); }, u.prototype.decodeInt = function (e) { return o.intFromLE(e); }, u.prototype.isPoint = function (e) { return e instanceof this.pointClass; };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(3).utils, i = n.assert, o = n.parseBytes, a = n.cachedProperty;
                        function s(e, t) { this.eddsa = e, this._secret = o(t.secret), e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = o(t.pub); }
                        s.fromPublic = function (e, t) { return t instanceof s ? t : new s(e, { pub: t }); }, s.fromSecret = function (e, t) { return t instanceof s ? t : new s(e, { secret: t }); }, s.prototype.secret = function () { return this._secret; }, a(s, "pubBytes", function () { return this.eddsa.encodePoint(this.pub()); }), a(s, "pub", function () { return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv()); }), a(s, "privBytes", function () { var e = this.eddsa, t = this.hash(), r = e.encodingLength - 1, n = t.slice(0, e.encodingLength); return n[0] &= 248, n[r] &= 127, n[r] |= 64, n; }), a(s, "priv", function () { return this.eddsa.decodeInt(this.privBytes()); }), a(s, "hash", function () { return this.eddsa.hash().update(this.secret()).digest(); }), a(s, "messagePrefix", function () { return this.hash().slice(this.eddsa.encodingLength); }), s.prototype.sign = function (e) { return i(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this); }, s.prototype.verify = function (e, t) { return this.eddsa.verify(e, t, this); }, s.prototype.getSecret = function (e) { return i(this._secret, "KeyPair is public only"), n.encode(this.secret(), e); }, s.prototype.getPublic = function (e) { return n.encode(this.pubBytes(), e); }, e.exports = s;
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(2), i = r(3).utils, o = i.assert, a = i.cachedProperty, s = i.parseBytes;
                        function f(e, t) { this.eddsa = e, "object" != typeof t && (t = s(t)), Array.isArray(t) && (t = { R: t.slice(0, e.encodingLength), S: t.slice(e.encodingLength) }), o(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof n && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded; }
                        a(f, "S", function () { return this.eddsa.decodeInt(this.Sencoded()); }), a(f, "R", function () { return this.eddsa.decodePoint(this.Rencoded()); }), a(f, "Rencoded", function () { return this.eddsa.encodePoint(this.R()); }), a(f, "Sencoded", function () { return this.eddsa.encodeInt(this.S()); }), f.prototype.toBytes = function () { return this.Rencoded().concat(this.Sencoded()); }, f.prototype.toHex = function () { return i.encode(this.toBytes(), "hex").toUpperCase(); }, e.exports = f;
                    }, function (e, t, r) { var n = r(68); e.exports = function (e) { return "string" != typeof e ? e : n(e) ? e.slice(2) : e; }; }, function (e, t, r) { var n = r(33), i = r(156), o = 1e3; function a(e, t) { return new Promise(function (r) { var n = setTimeout(r, e); n.unref && t && n.unref(); }); } e.exports = /** @class */ (function (_super) {
                        __extends(class_3, _super);
                        function class_3(e) {
                            if (e === void 0) { e = {}; }
                            var _this = this;
                            if (!e.provider)
                                throw new Error("PollingBlockTracker - no provider specified.");
                            var t = e.pollingInterval || 20 * o, r = e.retryTimeout || t / 10, n = void 0 === e.keepEventLoopActive || e.keepEventLoopActive, i = e.setSkipCacheFlag || !1;
                            _this = _super.call(this, Object.assign({ blockResetDuration: t }, e)) || this, _this._provider = e.provider, _this._pollingInterval = t, _this._retryTimeout = r, _this._keepEventLoopActive = n, _this._setSkipCacheFlag = i;
                            return _this;
                        }
                        class_3.prototype.checkForLatestBlock = function () {
                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0: return [4 /*yield*/, this._updateLatestBlock()];
                                    case 1:
                                        _j.sent();
                                        return [4 /*yield*/, this.getLatestBlock()];
                                    case 2: return [2 /*return*/, _j.sent()];
                                }
                            }); });
                        };
                        class_3.prototype._start = function () {
                            var _this = this;
                            this._performSync().catch(function (e) { return _this.emit("error", e); });
                        };
                        class_3.prototype._performSync = function () {
                            return __awaiter(this, void 0, void 0, function () { var e_7, t_4; return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0:
                                        if (!this._isRunning) return [3 /*break*/, 7];
                                        _j.label = 1;
                                    case 1:
                                        _j.trys.push([1, 4, , 6]);
                                        return [4 /*yield*/, this._updateLatestBlock()];
                                    case 2:
                                        _j.sent();
                                        return [4 /*yield*/, a(this._pollingInterval, !this._keepEventLoopActive)];
                                    case 3:
                                        _j.sent();
                                        return [3 /*break*/, 6];
                                    case 4:
                                        e_7 = _j.sent();
                                        t_4 = new Error("PollingBlockTracker - encountered an error while attempting to update latest block:\n" + e_7.stack);
                                        try {
                                            this.emit("error", t_4);
                                        }
                                        catch (e) {
                                            console.error(t_4);
                                        }
                                        return [4 /*yield*/, a(this._retryTimeout, !this._keepEventLoopActive)];
                                    case 5:
                                        _j.sent();
                                        return [3 /*break*/, 6];
                                    case 6: return [3 /*break*/, 0];
                                    case 7: return [2 /*return*/];
                                }
                            }); });
                        };
                        class_3.prototype._updateLatestBlock = function () {
                            return __awaiter(this, void 0, void 0, function () { var e; return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0: return [4 /*yield*/, this._fetchLatestBlock()];
                                    case 1:
                                        e = _j.sent();
                                        this._newPotentialLatest(e);
                                        return [2 /*return*/];
                                }
                            }); });
                        };
                        class_3.prototype._fetchLatestBlock = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                var e, t;
                                var _this = this;
                                return __generator(this, function (_j) {
                                    switch (_j.label) {
                                        case 0:
                                            e = { jsonrpc: "2.0", id: 1, method: "eth_blockNumber", params: [] };
                                            this._setSkipCacheFlag && (e.skipCache = !0);
                                            return [4 /*yield*/, n(function (t) { return _this._provider.sendAsync(e, t); })()];
                                        case 1:
                                            t = _j.sent();
                                            if (t.error)
                                                throw new Error("PollingBlockTracker - encountered error fetching block:\n" + t.error);
                                            return [2 /*return*/, t.result];
                                    }
                                });
                            });
                        };
                        return class_3;
                    }(i)); }, function (e, t, r) { r(69), r(33); var n = r(35), i = 1e3, o = function (e, t) { return e + t; }, a = ["sync", "latest"]; function s(e) { return Number.parseInt(e, 16); } e.exports = /** @class */ (function (_super) {
                        __extends(class_4, _super);
                        function class_4(e) {
                            if (e === void 0) { e = {}; }
                            var _this = this;
                            _this = _super.call(this) || this, _this._blockResetDuration = e.blockResetDuration || 20 * i, _this._blockResetTimeout, _this._currentBlock = null, _this._isRunning = !1, _this._onNewListener = _this._onNewListener.bind(_this), _this._onRemoveListener = _this._onRemoveListener.bind(_this), _this._resetCurrentBlock = _this._resetCurrentBlock.bind(_this), _this._setupInternalEvents();
                            return _this;
                        }
                        class_4.prototype.isRunning = function () { return this._isRunning; };
                        class_4.prototype.getCurrentBlock = function () { return this._currentBlock; };
                        class_4.prototype.getLatestBlock = function () {
                            return __awaiter(this, void 0, void 0, function () {
                                var _j;
                                var _this = this;
                                return __generator(this, function (_k) {
                                    switch (_k.label) {
                                        case 0:
                                            if (!this._currentBlock) return [3 /*break*/, 1];
                                            _j = this._currentBlock;
                                            return [3 /*break*/, 3];
                                        case 1: return [4 /*yield*/, new Promise(function (e) { return _this.once("latest", e); })];
                                        case 2:
                                            _j = _k.sent();
                                            _k.label = 3;
                                        case 3: return [2 /*return*/, _j];
                                    }
                                });
                            });
                        };
                        class_4.prototype.removeAllListeners = function (e) { e ? _super.prototype.removeAllListeners.call(this, e) : _super.prototype.removeAllListeners.call(this), this._setupInternalEvents(), this._onRemoveListener(); };
                        class_4.prototype._start = function () { };
                        class_4.prototype._end = function () { };
                        class_4.prototype._setupInternalEvents = function () { this.removeListener("newListener", this._onNewListener), this.removeListener("removeListener", this._onRemoveListener), this.on("newListener", this._onNewListener), this.on("removeListener", this._onRemoveListener); };
                        class_4.prototype._onNewListener = function (e, t) { a.includes(e) && this._maybeStart(); };
                        class_4.prototype._onRemoveListener = function (e, t) { this._getBlockTrackerEventCount() > 0 || this._maybeEnd(); };
                        class_4.prototype._maybeStart = function () { this._isRunning || (this._isRunning = !0, this._cancelBlockResetTimeout(), this._start()); };
                        class_4.prototype._maybeEnd = function () { this._isRunning && (this._isRunning = !1, this._setupBlockResetTimeout(), this._end()); };
                        class_4.prototype._getBlockTrackerEventCount = function () {
                            var _this = this;
                            return a.map(function (e) { return _this.listenerCount(e); }).reduce(o);
                        };
                        class_4.prototype._newPotentialLatest = function (e) { var t = this._currentBlock; t && s(e) <= s(t) || this._setCurrentBlock(e); };
                        class_4.prototype._setCurrentBlock = function (e) { var t = this._currentBlock; this._currentBlock = e, this.emit("latest", e), this.emit("sync", { oldBlock: t, newBlock: e }); };
                        class_4.prototype._setupBlockResetTimeout = function () { this._cancelBlockResetTimeout(), this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration), this._blockResetTimeout.unref && this._blockResetTimeout.unref(); };
                        class_4.prototype._cancelBlockResetTimeout = function () { clearTimeout(this._blockResetTimeout); };
                        class_4.prototype._resetCurrentBlock = function () { this._currentBlock = null; };
                        return class_4;
                    }(n)); }, function (e, t) { e.exports = function (e) { var t = (e = e || {}).max || Number.MAX_SAFE_INTEGER, r = void 0 !== e.start ? e.start : Math.floor(Math.random() * t); return function () { return r %= t, r++; }; }; }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 });
                        var n = o(r(159)), i = o(r(185));
                        function o(e) { return e && e.__esModule ? e : { default: e }; }
                        t.default = (0, n.default)(i.default), e.exports = t.default;
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) { return function (t, r, o) { return e(n.default, t, (0, i.default)(r), o); }; };
                        var n = o(r(70)), i = o(r(12));
                        function o(e) { return e && e.__esModule ? e : { default: e }; }
                        e.exports = t.default;
                    }, function (e, t, r) { var n = r(36), i = r(74), o = "[object AsyncFunction]", a = "[object Function]", s = "[object GeneratorFunction]", f = "[object Proxy]"; e.exports = function (e) { if (!i(e))
                        return !1; var t = n(e); return t == a || t == s || t == o || t == f; }; }, function (e, t, r) { var n = r(71), i = Object.prototype, o = i.hasOwnProperty, a = i.toString, s = n ? n.toStringTag : void 0; e.exports = function (e) { var t = o.call(e, s), r = e[s]; try {
                        e[s] = void 0;
                        var n = !0;
                    }
                    catch (e) { } var i = a.call(e); return n && (t ? e[s] = r : delete e[s]), i; }; }, function (e, t) { var r = Object.prototype.toString; e.exports = function (e) { return r.call(e); }; }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t, r, o) { (0, n.default)(t)(e, (0, i.default)(r), o); };
                        var n = o(r(77)), i = o(r(12));
                        function o(e) { return e && e.__esModule ? e : { default: e }; }
                        e.exports = t.default;
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) { if ((0, n.default)(e))
                            return function (e) { var t = -1, r = e.length; return function () { return ++t < r ? { value: e[t], key: t } : null; }; }(e); var t = (0, i.default)(e); return t ? function (e) { var t = -1; return function () { var r = e.next(); return r.done ? null : (t++, { value: r.value, key: t }); }; }(t) : (r = e, a = (0, o.default)(r), s = -1, f = a.length, function () { var e = a[++s]; return s < f ? { value: r[e], key: e } : null; }); var r, a, s, f; };
                        var n = a(r(25)), i = a(r(165)), o = a(r(166));
                        function a(e) { return e && e.__esModule ? e : { default: e }; }
                        e.exports = t.default;
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) { return n && e[n] && e[n](); };
                        var n = "function" == typeof Symbol && Symbol.iterator;
                        e.exports = t.default;
                    }, function (e, t, r) { var n = r(167), i = r(178), o = r(25); e.exports = function (e) { return o(e) ? n(e) : i(e); }; }, function (e, t, r) { var n = r(168), i = r(169), o = r(78), a = r(171), s = r(173), f = r(174), c = Object.prototype.hasOwnProperty; e.exports = function (e, t) { var r = o(e), u = !r && i(e), d = !r && !u && a(e), h = !r && !u && !d && f(e), l = r || u || d || h, p = l ? n(e.length, String) : [], b = p.length; for (var g in e)
                        !t && !c.call(e, g) || l && ("length" == g || d && ("offset" == g || "parent" == g) || h && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || s(g, b)) || p.push(g); return p; }; }, function (e, t) { e.exports = function (e, t) { for (var r = -1, n = Array(e); ++r < e;)
                        n[r] = t(r); return n; }; }, function (e, t, r) { var n = r(170), i = r(38), o = Object.prototype, a = o.hasOwnProperty, s = o.propertyIsEnumerable, f = n(function () { return arguments; }()) ? n : function (e) { return i(e) && a.call(e, "callee") && !s.call(e, "callee"); }; e.exports = f; }, function (e, t, r) { var n = r(36), i = r(38), o = "[object Arguments]"; e.exports = function (e) { return i(e) && n(e) == o; }; }, function (e, t, r) { (function (e) { var n = r(72), i = r(172), o = t && !t.nodeType && t, a = o && "object" == typeof e && e && !e.nodeType && e, s = a && a.exports === o ? n.Buffer : void 0, f = (s ? s.isBuffer : void 0) || i; e.exports = f; }).call(this, r(23)(e)); }, function (e, t) { e.exports = function () { return !1; }; }, function (e, t) { var r = 9007199254740991, n = /^(?:0|[1-9]\d*)$/; e.exports = function (e, t) { var i = typeof e; return !!(t = null == t ? r : t) && ("number" == i || "symbol" != i && n.test(e)) && e > -1 && e % 1 == 0 && e < t; }; }, function (e, t, r) { var n = r(175), i = r(176), o = r(177), a = o && o.isTypedArray, s = a ? i(a) : n; e.exports = s; }, function (e, t, r) { var n = r(36), i = r(75), o = r(38), a = {}; a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function (e) { return o(e) && i(e.length) && !!a[n(e)]; }; }, function (e, t) { e.exports = function (e) { return function (t) { return e(t); }; }; }, function (e, t, r) { (function (e) { var n = r(73), i = t && !t.nodeType && t, o = i && "object" == typeof e && e && !e.nodeType && e, a = o && o.exports === i && n.process, s = function () { try {
                        var e = o && o.require && o.require("util").types;
                        return e || a && a.binding && a.binding("util");
                    }
                    catch (e) { } }(); e.exports = s; }).call(this, r(23)(e)); }, function (e, t, r) { var n = r(179), i = r(180), o = Object.prototype.hasOwnProperty; e.exports = function (e) { if (!n(e))
                        return i(e); var t = []; for (var r in Object(e))
                        o.call(e, r) && "constructor" != r && t.push(r); return t; }; }, function (e, t) { var r = Object.prototype; e.exports = function (e) { var t = e && e.constructor; return e === ("function" == typeof t && t.prototype || r); }; }, function (e, t, r) { var n = r(181)(Object.keys, Object); e.exports = n; }, function (e, t) { e.exports = function (e, t) { return function (r) { return e(t(r)); }; }; }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) { return (0, i.default)(function (t, r) { var i; try {
                            i = e.apply(this, t);
                        }
                        catch (e) {
                            return r(e);
                        } (0, n.default)(i) && "function" == typeof i.then ? i.then(function (e) { s(r, null, e); }, function (e) { s(r, e.message ? e : new Error(e)); }) : r(null, i); }); };
                        var n = a(r(74)), i = a(r(183)), o = a(r(184));
                        function a(e) { return e && e.__esModule ? e : { default: e }; }
                        function s(e, t, r) { try {
                            e(t, r);
                        }
                        catch (e) {
                            (0, o.default)(f, e);
                        } }
                        function f(e) { throw e; }
                        e.exports = t.default;
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) { return function () { var t = (0, o.default)(arguments), r = t.pop(); e.call(this, t, r); }; };
                        var n, i = r(26), o = (n = i) && n.__esModule ? n : { default: n };
                        e.exports = t.default;
                    }, function (e, t, r) {
                        "use strict";
                        (function (e, n) { Object.defineProperty(t, "__esModule", { value: !0 }), t.hasNextTick = t.hasSetImmediate = void 0, t.fallback = u, t.wrap = d; var i, o = r(26), a = (i = o) && i.__esModule ? i : { default: i }; var s, f = t.hasSetImmediate = "function" == typeof e && e, c = t.hasNextTick = "object" == typeof n && "function" == typeof n.nextTick; function u(e) { setTimeout(e, 0); } function d(e) { return function (t) { var r = (0, a.default)(arguments, 1); e(function () { t.apply(null, r); }); }; } s = f ? e : c ? n.nextTick : u, t.default = d(s); }).call(this, r(22).setImmediate, r(6));
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t, r, o) { o = o || n.default, t = t || []; var a = [], s = 0, f = (0, i.default)(r); e(t, function (e, t, r) { var n = s++; f(e, function (e, t) { a[n] = t, r(e); }); }, function (e) { o(e, a); }); };
                        var n = o(r(18)), i = o(r(12));
                        function o(e) { return e && e.__esModule ? e : { default: e }; }
                        e.exports = t.default;
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 });
                        var n = o(r(187)), i = o(r(79));
                        function o(e) { return e && e.__esModule ? e : { default: e }; }
                        t.default = (0, i.default)(n.default, 1), e.exports = t.default;
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t, r, a) { (0, n.default)(t)(e, (0, i.default)((0, o.default)(r)), a); };
                        var n = a(r(77)), i = a(r(188)), o = a(r(12));
                        function a(e) { return e && e.__esModule ? e : { default: e }; }
                        e.exports = t.default;
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) { return function (t, r, n) { return e(t, n); }; }, e.exports = t.default;
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(13).EventEmitter, i = r(9).inherits;
                        function o() { n.call(this), this.isLocked = !0; }
                        e.exports = o, i(o, n), o.prototype.go = function () { this.isLocked = !1, this.emit("unlock"); }, o.prototype.stop = function () { this.isLocked = !0, this.emit("lock"); }, o.prototype.await = function (e) { this.isLocked ? this.once("unlock", e) : setTimeout(e); };
                    }, function (e, t, r) { t.parse = r(191), t.stringify = r(192); }, function (e, t) { var r, n, i, o, a = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: "\n", r: "\r", t: "\t" }, s = function (e) { throw { name: "SyntaxError", message: e, at: r, text: i }; }, f = function (e) { return e && e !== n && s("Expected '" + e + "' instead of '" + n + "'"), n = i.charAt(r), r += 1, n; }, c = function () { var e, t = ""; for ("-" === n && (t = "-", f("-")); n >= "0" && n <= "9";)
                        t += n, f(); if ("." === n)
                        for (t += "."; f() && n >= "0" && n <= "9";)
                            t += n; if ("e" === n || "E" === n)
                        for (t += n, f(), "-" !== n && "+" !== n || (t += n, f()); n >= "0" && n <= "9";)
                            t += n, f(); if (e = +t, isFinite(e))
                        return e; s("Bad number"); }, u = function () { var e, t, r, i = ""; if ('"' === n)
                        for (; f();) {
                            if ('"' === n)
                                return f(), i;
                            if ("\\" === n)
                                if (f(), "u" === n) {
                                    for (r = 0, t = 0; t < 4 && (e = parseInt(f(), 16), isFinite(e)); t += 1)
                                        r = 16 * r + e;
                                    i += String.fromCharCode(r);
                                }
                                else {
                                    if ("string" != typeof a[n])
                                        break;
                                    i += a[n];
                                }
                            else
                                i += n;
                        } s("Bad string"); }, d = function () { for (; n && n <= " ";)
                        f(); }; o = function () { switch ((d(), n)) {
                        case "{": return function () { var e, t = {}; if ("{" === n) {
                            if (f("{"), d(), "}" === n)
                                return f("}"), t;
                            for (; n;) {
                                if (e = u(), d(), f(":"), Object.hasOwnProperty.call(t, e) && s('Duplicate key "' + e + '"'), t[e] = o(), d(), "}" === n)
                                    return f("}"), t;
                                f(","), d();
                            }
                        } s("Bad object"); }();
                        case "[": return function () { var e = []; if ("[" === n) {
                            if (f("["), d(), "]" === n)
                                return f("]"), e;
                            for (; n;) {
                                if (e.push(o()), d(), "]" === n)
                                    return f("]"), e;
                                f(","), d();
                            }
                        } s("Bad array"); }();
                        case '"': return u();
                        case "-": return c();
                        default: return n >= "0" && n <= "9" ? c() : function () { switch (n) {
                            case "t": return f("t"), f("r"), f("u"), f("e"), !0;
                            case "f": return f("f"), f("a"), f("l"), f("s"), f("e"), !1;
                            case "n": return f("n"), f("u"), f("l"), f("l"), null;
                        } s("Unexpected '" + n + "'"); }();
                    } }, e.exports = function (e, t) { var a; return i = e, r = 0, n = " ", a = o(), d(), n && s("Syntax error"), "function" == typeof t ? function e(r, n) { var i, o, a = r[n]; if (a && "object" == typeof a)
                        for (i in a)
                            Object.prototype.hasOwnProperty.call(a, i) && (void 0 !== (o = e(a, i)) ? a[i] = o : delete a[i]); return t.call(r, n, a); }({ "": a }, "") : a; }; }, function (e, t) { var r, n, i, o = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, a = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }; function s(e) { return o.lastIndex = 0, o.test(e) ? '"' + e.replace(o, function (e) { var t = a[e]; return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4); }) + '"' : '"' + e + '"'; } e.exports = function (e, t, o) { var a; if (r = "", n = "", "number" == typeof o)
                        for (a = 0; a < o; a += 1)
                            n += " ";
                    else
                        "string" == typeof o && (n = o); if (i = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length))
                        throw new Error("JSON.stringify"); return function e(t, o) { var a, f, c, u, d, h = r, l = o[t]; switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof i && (l = i.call(o, t, l)), typeof l) {
                        case "string": return s(l);
                        case "number": return isFinite(l) ? String(l) : "null";
                        case "boolean":
                        case "null": return String(l);
                        case "object":
                            if (!l)
                                return "null";
                            if (r += n, d = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                                for (u = l.length, a = 0; a < u; a += 1)
                                    d[a] = e(a, l) || "null";
                                return c = 0 === d.length ? "[]" : r ? "[\n" + r + d.join(",\n" + r) + "\n" + h + "]" : "[" + d.join(",") + "]", r = h, c;
                            }
                            if (i && "object" == typeof i)
                                for (u = i.length, a = 0; a < u; a += 1)
                                    "string" == typeof (f = i[a]) && (c = e(f, l)) && d.push(s(f) + (r ? ": " : ":") + c);
                            else
                                for (f in l)
                                    Object.prototype.hasOwnProperty.call(l, f) && (c = e(f, l)) && d.push(s(f) + (r ? ": " : ":") + c);
                            return c = 0 === d.length ? "{}" : r ? "{\n" + r + d.join(",\n" + r) + "\n" + h + "}" : "{" + d.join(",") + "}", r = h, c;
                    } }("", { "": e }); }; }, function (e, t, r) {
                        "use strict";
                        var n = 3;
                        e.exports = function () { var e = (new Date).getTime() * Math.pow(10, n), t = Math.floor(Math.random() * Math.pow(10, n)); return e + t; };
                    }, function (e, t, r) { var n = r(195), i = r(42), o = [void 0, null, "<nil>"]; e.exports = function (e) {
                        var _this = this;
                        if (e === void 0) { e = {}; }
                        var t = e.blockTracker;
                        if (!t)
                            throw new Error("createBlockCacheMiddleware - No BlockTracker specified");
                        var r = new a, o = { perma: r, block: r, fork: r };
                        return i(function (e, i, a) { return __awaiter(_this, void 0, void 0, function () { var s, f, c, u, e_8, d, _j; return __generator(this, function (_k) {
                            switch (_k.label) {
                                case 0:
                                    if (e.skipCache)
                                        return [2 /*return*/, a()];
                                    s = n.cacheTypeForPayload(e), f = o[s];
                                    if (!f)
                                        return [2 /*return*/, a()];
                                    if (!f.canCacheRequest(e))
                                        return [2 /*return*/, a()];
                                    u = n.blockTagForPayload(e);
                                    if (!(u || (u = "latest"), "earliest" === u)) return [3 /*break*/, 1];
                                    c = "0x00";
                                    return [3 /*break*/, 4];
                                case 1:
                                    if (!("latest" === u)) return [3 /*break*/, 3];
                                    return [4 /*yield*/, t.getLatestBlock()];
                                case 2:
                                    e_8 = _k.sent();
                                    r.clearBefore(e_8), c = e_8;
                                    return [3 /*break*/, 4];
                                case 3:
                                    c = u;
                                    _k.label = 4;
                                case 4: return [4 /*yield*/, f.get(e, c)];
                                case 5:
                                    d = _k.sent();
                                    if (!(void 0 === d)) return [3 /*break*/, 8];
                                    return [4 /*yield*/, a()];
                                case 6:
                                    _k.sent();
                                    return [4 /*yield*/, f.set(e, c, i.result)];
                                case 7:
                                    _j = (_k.sent());
                                    return [3 /*break*/, 9];
                                case 8:
                                    _j = i.result = d;
                                    _k.label = 9;
                                case 9:
                                    _j;
                                    return [2 /*return*/];
                            }
                        }); }); });
                    };
                        var a = /** @class */ (function () {
                            function a() {
                                this.cache = {};
                            }
                            a.prototype.getBlockCacheForPayload = function (e, t) { var r = Number.parseInt(t, 16); var n = this.cache[r]; if (!n) {
                                var e_9 = {};
                                this.cache[r] = e_9, n = e_9;
                            } return n; };
                            a.prototype.get = function (e, t) {
                                return __awaiter(this, void 0, void 0, function () { var r; return __generator(this, function (_j) {
                                    r = this.getBlockCacheForPayload(e, t);
                                    if (r)
                                        return [2 /*return*/, r[n.cacheIdentifierForPayload(e, !0)]];
                                    return [2 /*return*/];
                                }); });
                            };
                            a.prototype.set = function (e, t, r) {
                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_j) {
                                    this.canCacheResult(e, r) && (this.getBlockCacheForPayload(e, t)[n.cacheIdentifierForPayload(e, !0)] = r);
                                    return [2 /*return*/];
                                }); });
                            };
                            a.prototype.canCacheRequest = function (e) { if (!n.canCache(e))
                                return !1; return "pending" !== n.blockTagForPayload(e); };
                            a.prototype.canCacheResult = function (e, t) { if (!o.includes(t))
                                return !!(!["eth_getTransactionByHash", "eth_getTransactionReceipt"].includes(e.method) || t && t.blockHash && "0x0000000000000000000000000000000000000000000000000000000000000000" !== t.blockHash); };
                            a.prototype.clearBefore = function (e) { var t = this, r = Number.parseInt(e, 16); Object.keys(t.cache).map(Number).filter(function (e) { return e < r; }).forEach(function (e) { return delete t.cache[e]; }); };
                            return a;
                        }());  }, function (e, t, r) { var n = r(81); function i(e) { return "never" !== s(e); } function o(e) { var t = a(e); return t >= e.params.length ? e.params : "eth_getBlockByNumber" === e.method ? e.params.slice(1) : e.params.slice(0, t); } function a(e) { switch (e.method) {
                        case "eth_getStorageAt": return 2;
                        case "eth_getBalance":
                        case "eth_getCode":
                        case "eth_getTransactionCount":
                        case "eth_call": return 1;
                        case "eth_getBlockByNumber": return 0;
                        default: return;
                    } } function s(e) { switch (e.method) {
                        case "web3_clientVersion":
                        case "web3_sha3":
                        case "eth_protocolVersion":
                        case "eth_getBlockTransactionCountByHash":
                        case "eth_getUncleCountByBlockHash":
                        case "eth_getCode":
                        case "eth_getBlockByHash":
                        case "eth_getTransactionByHash":
                        case "eth_getTransactionByBlockHashAndIndex":
                        case "eth_getTransactionReceipt":
                        case "eth_getUncleByBlockHashAndIndex":
                        case "eth_getCompilers":
                        case "eth_compileLLL":
                        case "eth_compileSolidity":
                        case "eth_compileSerpent":
                        case "shh_version":
                        case "test_permaCache": return "perma";
                        case "eth_getBlockByNumber":
                        case "eth_getBlockTransactionCountByNumber":
                        case "eth_getUncleCountByBlockNumber":
                        case "eth_getTransactionByBlockNumberAndIndex":
                        case "eth_getUncleByBlockNumberAndIndex":
                        case "test_forkCache": return "fork";
                        case "eth_gasPrice":
                        case "eth_blockNumber":
                        case "eth_getBalance":
                        case "eth_getStorageAt":
                        case "eth_getTransactionCount":
                        case "eth_call":
                        case "eth_estimateGas":
                        case "eth_getFilterLogs":
                        case "eth_getLogs":
                        case "test_blockCache": return "block";
                        case "net_version":
                        case "net_peerCount":
                        case "net_listening":
                        case "eth_syncing":
                        case "eth_sign":
                        case "eth_coinbase":
                        case "eth_mining":
                        case "eth_hashrate":
                        case "eth_accounts":
                        case "eth_sendTransaction":
                        case "eth_sendRawTransaction":
                        case "eth_newFilter":
                        case "eth_newBlockFilter":
                        case "eth_newPendingTransactionFilter":
                        case "eth_uninstallFilter":
                        case "eth_getFilterChanges":
                        case "eth_getWork":
                        case "eth_submitWork":
                        case "eth_submitHashrate":
                        case "db_putString":
                        case "db_getString":
                        case "db_putHex":
                        case "db_getHex":
                        case "shh_post":
                        case "shh_newIdentity":
                        case "shh_hasIdentity":
                        case "shh_newGroup":
                        case "shh_addToGroup":
                        case "shh_newFilter":
                        case "shh_uninstallFilter":
                        case "shh_getFilterChanges":
                        case "shh_getMessages":
                        case "test_neverCache": return "never";
                    } } e.exports = { cacheIdentifierForPayload: function (e, t) { var r = t ? o(e) : e.params; return i(e) ? e.method + ":" + n(r) : null; }, canCache: i, blockTagForPayload: function (e) { var t = a(e); if (t >= e.params.length)
                            return null; return e.params[t]; }, paramsWithoutBlockTag: o, blockTagParamIndex: a, cacheTypeForPayload: s }; }, function (e, t, r) {
                        "use strict";
                        var n = r(197), i = r(198);
                        e.exports = function (e) { if (!n(e.then))
                            throw new TypeError("Expected a promise"); return function (t) { e.then(function (e) { i(t, null, e); }, function (e) { i(t, e); }); }; };
                    }, function (e, t, r) {
                        "use strict";
                        var n = Object.prototype.toString;
                        e.exports = function (e) { return "[object Function]" === n.call(e); };
                    }, function (e, t, r) {
                        "use strict";
                        (function (t) { e.exports = "function" == typeof t ? t : function () { var e = [].slice.apply(arguments); e.splice(1, 0, 0), setTimeout.apply(null, e); }; }).call(this, r(22).setImmediate);
                    }, function (e, t, r) {
                        "use strict";
                        (function (e, r) { var n = /** @class */ (function () {
                            function n(e) {
                                this.tasks = [], this.count = e;
                            }
                            n.prototype.sched = function () { if (this.count > 0 && this.tasks.length > 0) {
                                this.count--;
                                var e_10 = this.tasks.shift();
                                if (void 0 === e_10)
                                    throw "Unexpected undefined value in tasks list";
                                e_10();
                            } };
                            n.prototype.acquire = function () {
                                var _this = this;
                                return new Promise(function (t, n) { _this.tasks.push(function () { var e = !1; t(function () { e || (e = !0, _this.count++, _this.sched()); }); }), e && e.nextTick ? e.nextTick(_this.sched.bind(_this)) : r(_this.sched.bind(_this)); });
                            };
                            n.prototype.use = function (e) { return this.acquire().then(function (t) { return e().then(function (e) { return (t(), e); }).catch(function (e) { throw t(), e; }); }); };
                            return n;
                        }());  t.Semaphore = n; t.Mutex = /** @class */ (function (_super) {
                            __extends(Mutex, _super);
                            function Mutex() {
                                return _super.call(this, 1) || this;
                            }
                            return Mutex;
                        }(n)); }).call(this, r(6), r(22).setImmediate);
                    }, function (e, t) { e.exports = function (e) { return function (t, r, n, i) { var o = e[t.method]; return void 0 === o ? n() : "function" == typeof o ? o(t, r, n, i) : (r.result = o, void i()); }; }; }, function (e, t, r) { var n = r(69), i = r(33), o = r(202), _j = r(19), a = _j.bnToHex, s = _j.hexToInt, f = _j.incrementHexInt, c = _j.minBlockRef, u = _j.blockRefIsNumber; e.exports = /** @class */ (function (_super) {
                        __extends(class_5, _super);
                        function class_5(_j) {
                            var e = _j.provider, t = _j.params;
                            var _this = this;
                            _this = _super.call(this) || this, _this.type = "log", _this.ethQuery = new n(e), _this.params = Object.assign({ fromBlock: "latest", toBlock: "latest", address: void 0, topics: [] }, t), _this.params.address && (Array.isArray(_this.params.address) || (_this.params.address = [_this.params.address]), _this.params.address = _this.params.address.map(function (e) { return e.toLowerCase(); }));
                            return _this;
                        }
                        class_5.prototype.initialize = function (_j) {
                            var e = _j.currentBlock;
                            return __awaiter(this, void 0, void 0, function () { var t, r, n, i; return __generator(this, function (_k) {
                                switch (_k.label) {
                                    case 0:
                                        t = this.params.fromBlock;
                                        ["latest", "pending"].includes(t) && (t = e), "earliest" === t && (t = "0x0"), this.params.fromBlock = t;
                                        r = c(this.params.toBlock, e), n = Object.assign({}, this.params, { toBlock: r });
                                        return [4 /*yield*/, this._fetchLogs(n)];
                                    case 1:
                                        i = _k.sent();
                                        this.addInitialResults(i);
                                        return [2 /*return*/];
                                }
                            }); });
                        };
                        class_5.prototype.update = function (_j) {
                            var e = _j.oldBlock, t = _j.newBlock;
                            return __awaiter(this, void 0, void 0, function () {
                                var r, n, i, o;
                                var _this = this;
                                return __generator(this, function (_k) {
                                    switch (_k.label) {
                                        case 0:
                                            r = t;
                                            n = e ? f(e) : t;
                                            i = Object.assign({}, this.params, { fromBlock: n, toBlock: r });
                                            return [4 /*yield*/, this._fetchLogs(i)];
                                        case 1:
                                            o = (_k.sent()).filter(function (e) { return _this.matchLog(e); });
                                            this.addResults(o);
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        };
                        class_5.prototype._fetchLogs = function (e) {
                            return __awaiter(this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_j) {
                                    switch (_j.label) {
                                        case 0: return [4 /*yield*/, i(function (t) { return _this.ethQuery.getLogs(e, t); })()];
                                        case 1: return [2 /*return*/, _j.sent()];
                                    }
                                });
                            });
                        };
                        class_5.prototype.matchLog = function (e) { if (s(this.params.fromBlock) >= s(e.blockNumber))
                            return !1; if (u(this.params.toBlock) && s(this.params.toBlock) <= s(e.blockNumber))
                            return !1; var t = e.address && e.address.toLowerCase(); return !(this.params.address && t && !this.params.address.includes(t)) && this.params.topics.every(function (t, r) { var n = e.topics[r]; if (!n)
                            return !1; n = n.toLowerCase(); var i = Array.isArray(t) ? t : [t]; return !!i.includes(null) || (i = i.map(function (e) { return e.toLowerCase(); })).includes(n); }); };
                        return class_5;
                    }(o)); }, function (e, t, r) { var n = r(43); e.exports = /** @class */ (function (_super) {
                        __extends(class_6, _super);
                        function class_6() {
                            var _this = this;
                            _this = _super.call(this) || this, _this.allResults = [];
                            return _this;
                        }
                        class_6.prototype.update = function () {
                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_j) {
                                throw new Error("BaseFilterWithHistory - no update method specified");
                            }); });
                        };
                        class_6.prototype.addResults = function (e) { this.allResults = this.allResults.concat(e), _super.prototype.addResults.call(this, e); };
                        class_6.prototype.addInitialResults = function (e) { this.allResults = this.allResults.concat(e), _super.prototype.addInitialResults.call(this, e); };
                        class_6.prototype.getAllResults = function () { return this.allResults; };
                        return class_6;
                    }(n)); }, function (e, t, r) { var n = r(43), i = r(44), o = r(19).incrementHexInt; e.exports = /** @class */ (function (_super) {
                        __extends(class_7, _super);
                        function class_7(_j) {
                            var e = _j.provider, t = _j.params;
                            var _this = this;
                            _this = _super.call(this) || this, _this.type = "block", _this.provider = e;
                            return _this;
                        }
                        class_7.prototype.update = function (_j) {
                            var e = _j.oldBlock, t = _j.newBlock;
                            return __awaiter(this, void 0, void 0, function () { var r, n, a; return __generator(this, function (_k) {
                                switch (_k.label) {
                                    case 0:
                                        r = t, n = o(e);
                                        return [4 /*yield*/, i({ provider: this.provider, fromBlock: n, toBlock: r })];
                                    case 1:
                                        a = (_k.sent()).map(function (e) { return e.hash; });
                                        this.addResults(a);
                                        return [2 /*return*/];
                                }
                            }); });
                        };
                        return class_7;
                    }(n)); }, function (e, t, r) { var n = r(205), i = r(43), o = r(44), a = r(19).incrementHexInt; e.exports = /** @class */ (function (_super) {
                        __extends(class_8, _super);
                        function class_8(_j) {
                            var e = _j.provider;
                            var _this = this;
                            _this = _super.call(this) || this, _this.type = "tx", _this.provider = e;
                            return _this;
                        }
                        class_8.prototype.update = function (_j) {
                            var e = _j.oldBlock;
                            return __awaiter(this, void 0, void 0, function () { var t, r, i, s; return __generator(this, function (_k) {
                                switch (_k.label) {
                                    case 0:
                                        t = e, r = a(e);
                                        return [4 /*yield*/, o({ provider: this.provider, fromBlock: r, toBlock: t })];
                                    case 1:
                                        i = _k.sent(), s = n(i, function (e) { return e.transactions; });
                                        this.addResults(s);
                                        return [2 /*return*/];
                                }
                            }); });
                        };
                        return class_8;
                    }(i)); }, function (e, t, r) { (function (e, r) { var n = 200, i = "Expected a function", o = "__lodash_hash_undefined__", a = 1, s = 2, f = 1 / 0, c = 9007199254740991, u = "[object Arguments]", d = "[object Array]", h = "[object Boolean]", l = "[object Date]", p = "[object Error]", b = "[object Function]", g = "[object GeneratorFunction]", v = "[object Map]", y = "[object Number]", m = "[object Object]", _ = "[object RegExp]", w = "[object Set]", E = "[object String]", A = "[object Symbol]", S = "[object ArrayBuffer]", x = "[object DataView]", M = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, I = /^\w*$/, k = /^\./, T = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, L = /\\(\\)?/g, P = /^\[object .+?Constructor\]$/, B = /^(?:0|[1-9]\d*)$/, R = {}; R["[object Float32Array]"] = R["[object Float64Array]"] = R["[object Int8Array]"] = R["[object Int16Array]"] = R["[object Int32Array]"] = R["[object Uint8Array]"] = R["[object Uint8ClampedArray]"] = R["[object Uint16Array]"] = R["[object Uint32Array]"] = !0, R[u] = R[d] = R[S] = R[h] = R[x] = R[l] = R[p] = R[b] = R[v] = R[y] = R[m] = R[_] = R[w] = R[E] = R["[object WeakMap]"] = !1; var C = "object" == typeof e && e && e.Object === Object && e, N = "object" == typeof self && self && self.Object === Object && self, O = C || N || Function("return this")(), j = t && !t.nodeType && t, D = j && "object" == typeof r && r && !r.nodeType && r, U = D && D.exports === j && C.process, z = function () { try {
                        return U && U.binding("util");
                    }
                    catch (e) { } }(), q = z && z.isTypedArray; function F(e, t) { for (var r = -1, n = e ? e.length : 0, i = Array(n); ++r < n;)
                        i[r] = t(e[r], r, e); return i; } function H(e, t) { for (var r = -1, n = t.length, i = e.length; ++r < n;)
                        e[i + r] = t[r]; return e; } function K(e, t) { for (var r = -1, n = e ? e.length : 0; ++r < n;)
                        if (t(e[r], r, e))
                            return !0; return !1; } function V(e) { var t = !1; if (null != e && "function" != typeof e.toString)
                        try {
                            t = !!(e + "");
                        }
                        catch (e) { } return t; } function Y(e) { var t = -1, r = Array(e.size); return e.forEach(function (e, n) { r[++t] = [n, e]; }), r; } function G(e) { var t = -1, r = Array(e.size); return e.forEach(function (e) { r[++t] = e; }), r; } var W, Z, J, X = Array.prototype, $ = Function.prototype, Q = Object.prototype, ee = O["__core-js_shared__"], te = (W = /[^.]+$/.exec(ee && ee.keys && ee.keys.IE_PROTO || "")) ? "Symbol(src)_1." + W : "", re = $.toString, ne = Q.hasOwnProperty, ie = Q.toString, oe = RegExp("^" + re.call(ne).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ae = O.Symbol, se = O.Uint8Array, fe = Q.propertyIsEnumerable, ce = X.splice, ue = ae ? ae.isConcatSpreadable : void 0, de = (Z = Object.keys, J = Object, function (e) { return Z(J(e)); }), he = Ge(O, "DataView"), le = Ge(O, "Map"), pe = Ge(O, "Promise"), be = Ge(O, "Set"), ge = Ge(O, "WeakMap"), ve = Ge(Object, "create"), ye = rt(he), me = rt(le), _e = rt(pe), we = rt(be), Ee = rt(ge), Ae = ae ? ae.prototype : void 0, Se = Ae ? Ae.valueOf : void 0, xe = Ae ? Ae.toString : void 0; function Me(e) { var t = -1, r = e ? e.length : 0; for (this.clear(); ++t < r;) {
                        var n = e[t];
                        this.set(n[0], n[1]);
                    } } function Ie(e) { var t = -1, r = e ? e.length : 0; for (this.clear(); ++t < r;) {
                        var n = e[t];
                        this.set(n[0], n[1]);
                    } } function ke(e) { var t = -1, r = e ? e.length : 0; for (this.clear(); ++t < r;) {
                        var n = e[t];
                        this.set(n[0], n[1]);
                    } } function Te(e) { var t = -1, r = e ? e.length : 0; for (this.__data__ = new ke; ++t < r;)
                        this.add(e[t]); } function Le(e) { this.__data__ = new Ie(e); } function Pe(e, t) { var r = at(e) || ot(e) ? function (e, t) { for (var r = -1, n = Array(e); ++r < e;)
                        n[r] = t(r); return n; }(e.length, String) : [], n = r.length, i = !!n; for (var o in e)
                        !t && !ne.call(e, o) || i && ("length" == o || Je(o, n)) || r.push(o); return r; } function Be(e, t) { for (var r = e.length; r--;)
                        if (it(e[r][0], t))
                            return r; return -1; } Me.prototype.clear = function () { this.__data__ = ve ? ve(null) : {}; }, Me.prototype.delete = function (e) { return this.has(e) && delete this.__data__[e]; }, Me.prototype.get = function (e) { var t = this.__data__; if (ve) {
                        var r = t[e];
                        return r === o ? void 0 : r;
                    } return ne.call(t, e) ? t[e] : void 0; }, Me.prototype.has = function (e) { var t = this.__data__; return ve ? void 0 !== t[e] : ne.call(t, e); }, Me.prototype.set = function (e, t) { return this.__data__[e] = ve && void 0 === t ? o : t, this; }, Ie.prototype.clear = function () { this.__data__ = []; }, Ie.prototype.delete = function (e) { var t = this.__data__, r = Be(t, e); return !(r < 0 || (r == t.length - 1 ? t.pop() : ce.call(t, r, 1), 0)); }, Ie.prototype.get = function (e) { var t = this.__data__, r = Be(t, e); return r < 0 ? void 0 : t[r][1]; }, Ie.prototype.has = function (e) { return Be(this.__data__, e) > -1; }, Ie.prototype.set = function (e, t) { var r = this.__data__, n = Be(r, e); return n < 0 ? r.push([e, t]) : r[n][1] = t, this; }, ke.prototype.clear = function () { this.__data__ = { hash: new Me, map: new (le || Ie), string: new Me }; }, ke.prototype.delete = function (e) { return Ye(this, e).delete(e); }, ke.prototype.get = function (e) { return Ye(this, e).get(e); }, ke.prototype.has = function (e) { return Ye(this, e).has(e); }, ke.prototype.set = function (e, t) { return Ye(this, e).set(e, t), this; }, Te.prototype.add = Te.prototype.push = function (e) { return this.__data__.set(e, o), this; }, Te.prototype.has = function (e) { return this.__data__.has(e); }, Le.prototype.clear = function () { this.__data__ = new Ie; }, Le.prototype.delete = function (e) { return this.__data__.delete(e); }, Le.prototype.get = function (e) { return this.__data__.get(e); }, Le.prototype.has = function (e) { return this.__data__.has(e); }, Le.prototype.set = function (e, t) { var r = this.__data__; if (r instanceof Ie) {
                        var i = r.__data__;
                        if (!le || i.length < n - 1)
                            return i.push([e, t]), this;
                        r = this.__data__ = new ke(i);
                    } return r.set(e, t), this; }; var Re, Ce, Ne = (Re = function (e, t) { return e && Oe(e, t, pt); }, function (e, t) { if (null == e)
                        return e; if (!st(e))
                        return Re(e, t); for (var r = e.length, n = Ce ? r : -1, i = Object(e); (Ce ? n-- : ++n < r) && !1 !== t(i[n], n, i);)
                        ; return e; }); var Oe = function (e) { return function (t, r, n) { for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
                        var f = a[e ? s : ++i];
                        if (!1 === r(o[f], f, o))
                            break;
                    } return t; }; }(); function je(e, t) { for (var r = 0, n = (t = Xe(t, e) ? [t] : Ke(t)).length; null != e && r < n;)
                        e = e[tt(t[r++])]; return r && r == n ? e : void 0; } function De(e, t) { return null != e && t in Object(e); } function Ue(e, t, r, n, i) { return e === t || (null == e || null == t || !ut(e) && !dt(t) ? e != e && t != t : function (e, t, r, n, i, o) { var f = at(e), c = at(t), b = d, g = d; f || (b = (b = We(e)) == u ? m : b); c || (g = (g = We(t)) == u ? m : g); var M = b == m && !V(e), I = g == m && !V(t), k = b == g; if (k && !M)
                        return o || (o = new Le), f || lt(e) ? Ve(e, t, r, n, i, o) : function (e, t, r, n, i, o, f) { switch (r) {
                            case x:
                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                                    return !1;
                                e = e.buffer, t = t.buffer;
                            case S: return !(e.byteLength != t.byteLength || !n(new se(e), new se(t)));
                            case h:
                            case l:
                            case y: return it(+e, +t);
                            case p: return e.name == t.name && e.message == t.message;
                            case _:
                            case E: return e == t + "";
                            case v: var c = Y;
                            case w:
                                var u = o & s;
                                if (c || (c = G), e.size != t.size && !u)
                                    return !1;
                                var d = f.get(e);
                                if (d)
                                    return d == t;
                                o |= a, f.set(e, t);
                                var b = Ve(c(e), c(t), n, i, o, f);
                                return f.delete(e), b;
                            case A: if (Se)
                                return Se.call(e) == Se.call(t);
                        } return !1; }(e, t, b, r, n, i, o); if (!(i & s)) {
                        var T = M && ne.call(e, "__wrapped__"), L = I && ne.call(t, "__wrapped__");
                        if (T || L) {
                            var P = T ? e.value() : e, B = L ? t.value() : t;
                            return o || (o = new Le), r(P, B, n, i, o);
                        }
                    } if (!k)
                        return !1; return o || (o = new Le), function (e, t, r, n, i, o) { var a = i & s, f = pt(e), c = f.length, u = pt(t).length; if (c != u && !a)
                        return !1; for (var d = c; d--;) {
                        var h = f[d];
                        if (!(a ? h in t : ne.call(t, h)))
                            return !1;
                    } var l = o.get(e); if (l && o.get(t))
                        return l == t; var p = !0; o.set(e, t), o.set(t, e); for (var b = a; ++d < c;) {
                        h = f[d];
                        var g = e[h], v = t[h];
                        if (n)
                            var y = a ? n(v, g, h, t, e, o) : n(g, v, h, e, t, o);
                        if (!(void 0 === y ? g === v || r(g, v, n, i, o) : y)) {
                            p = !1;
                            break;
                        }
                        b || (b = "constructor" == h);
                    } if (p && !b) {
                        var m = e.constructor, _ = t.constructor;
                        m != _ && "constructor" in e && "constructor" in t && !("function" == typeof m && m instanceof m && "function" == typeof _ && _ instanceof _) && (p = !1);
                    } return o.delete(e), o.delete(t), p; }(e, t, r, n, i, o); }(e, t, Ue, r, n, i)); } function ze(e) { return !(!ut(e) || (t = e, te && te in t)) && (ft(e) || V(e) ? oe : P).test(rt(e)); var t; } function qe(e) { return "function" == typeof e ? e : null == e ? bt : "object" == typeof e ? at(e) ? function (e, t) { if (Xe(e) && $e(t))
                        return Qe(tt(e), t); return function (r) { var n = function (e, t, r) { var n = null == e ? void 0 : je(e, t); return void 0 === n ? r : n; }(r, e); return void 0 === n && n === t ? function (e, t) { return null != e && function (e, t, r) { t = Xe(t, e) ? [t] : Ke(t); var n, i = -1, o = t.length; for (; ++i < o;) {
                        var a = tt(t[i]);
                        if (!(n = null != e && r(e, a)))
                            break;
                        e = e[a];
                    } if (n)
                        return n; return !!(o = e ? e.length : 0) && ct(o) && Je(a, o) && (at(e) || ot(e)); }(e, t, De); }(r, e) : Ue(t, n, void 0, a | s); }; }(e[0], e[1]) : function (e) { var t = function (e) { var t = pt(e), r = t.length; for (; r--;) {
                        var n = t[r], i = e[n];
                        t[r] = [n, i, $e(i)];
                    } return t; }(e); if (1 == t.length && t[0][2])
                        return Qe(t[0][0], t[0][1]); return function (r) { return r === e || function (e, t, r, n) { var i = r.length, o = i, f = !n; if (null == e)
                        return !o; for (e = Object(e); i--;) {
                        var c = r[i];
                        if (f && c[2] ? c[1] !== e[c[0]] : !(c[0] in e))
                            return !1;
                    } for (; ++i < o;) {
                        var u = (c = r[i])[0], d = e[u], h = c[1];
                        if (f && c[2]) {
                            if (void 0 === d && !(u in e))
                                return !1;
                        }
                        else {
                            var l = new Le;
                            if (n)
                                var p = n(d, h, u, e, t, l);
                            if (!(void 0 === p ? Ue(h, d, n, a | s, l) : p))
                                return !1;
                        }
                    } return !0; }(r, e, t); }; }(e) : Xe(t = e) ? (r = tt(t), function (e) { return null == e ? void 0 : e[r]; }) : function (e) { return function (t) { return je(t, e); }; }(t); var t, r; } function Fe(e) { if (r = (t = e) && t.constructor, n = "function" == typeof r && r.prototype || Q, t !== n)
                        return de(e); var t, r, n, i = []; for (var o in Object(e))
                        ne.call(e, o) && "constructor" != o && i.push(o); return i; } function He(e, t) { var r = -1, n = st(e) ? Array(e.length) : []; return Ne(e, function (e, i, o) { n[++r] = t(e, i, o); }), n; } function Ke(e) { return at(e) ? e : et(e); } function Ve(e, t, r, n, i, o) { var f = i & s, c = e.length, u = t.length; if (c != u && !(f && u > c))
                        return !1; var d = o.get(e); if (d && o.get(t))
                        return d == t; var h = -1, l = !0, p = i & a ? new Te : void 0; for (o.set(e, t), o.set(t, e); ++h < c;) {
                        var b = e[h], g = t[h];
                        if (n)
                            var v = f ? n(g, b, h, t, e, o) : n(b, g, h, e, t, o);
                        if (void 0 !== v) {
                            if (v)
                                continue;
                            l = !1;
                            break;
                        }
                        if (p) {
                            if (!K(t, function (e, t) { if (!p.has(t) && (b === e || r(b, e, n, i, o)))
                                return p.add(t); })) {
                                l = !1;
                                break;
                            }
                        }
                        else if (b !== g && !r(b, g, n, i, o)) {
                            l = !1;
                            break;
                        }
                    } return o.delete(e), o.delete(t), l; } function Ye(e, t) { var r, n, i = e.__data__; return ("string" == (n = typeof (r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof t ? "string" : "hash"] : i.map; } function Ge(e, t) { var r = function (e, t) { return null == e ? void 0 : e[t]; }(e, t); return ze(r) ? r : void 0; } var We = function (e) { return ie.call(e); }; function Ze(e) { return at(e) || ot(e) || !!(ue && e && e[ue]); } function Je(e, t) { return !!(t = null == t ? c : t) && ("number" == typeof e || B.test(e)) && e > -1 && e % 1 == 0 && e < t; } function Xe(e, t) { if (at(e))
                        return !1; var r = typeof e; return !("number" != r && "symbol" != r && "boolean" != r && null != e && !ht(e)) || (I.test(e) || !M.test(e) || null != t && e in Object(t)); } function $e(e) { return e == e && !ut(e); } function Qe(e, t) { return function (r) { return null != r && (r[e] === t && (void 0 !== t || e in Object(r))); }; } (he && We(new he(new ArrayBuffer(1))) != x || le && We(new le) != v || pe && "[object Promise]" != We(pe.resolve()) || be && We(new be) != w || ge && "[object WeakMap]" != We(new ge)) && (We = function (e) { var t = ie.call(e), r = t == m ? e.constructor : void 0, n = r ? rt(r) : void 0; if (n)
                        switch (n) {
                            case ye: return x;
                            case me: return v;
                            case _e: return "[object Promise]";
                            case we: return w;
                            case Ee: return "[object WeakMap]";
                        } return t; }); var et = nt(function (e) { var t; e = null == (t = e) ? "" : function (e) { if ("string" == typeof e)
                        return e; if (ht(e))
                        return xe ? xe.call(e) : ""; var t = e + ""; return "0" == t && 1 / e == -f ? "-0" : t; }(t); var r = []; return k.test(e) && r.push(""), e.replace(T, function (e, t, n, i) { r.push(n ? i.replace(L, "$1") : t || e); }), r; }); function tt(e) { if ("string" == typeof e || ht(e))
                        return e; var t = e + ""; return "0" == t && 1 / e == -f ? "-0" : t; } function rt(e) { if (null != e) {
                        try {
                            return re.call(e);
                        }
                        catch (e) { }
                        try {
                            return e + "";
                        }
                        catch (e) { }
                    } return ""; } function nt(e, t) { if ("function" != typeof e || t && "function" != typeof t)
                        throw new TypeError(i); var r = function () { var n = arguments, i = t ? t.apply(this, n) : n[0], o = r.cache; if (o.has(i))
                        return o.get(i); var a = e.apply(this, n); return r.cache = o.set(i, a), a; }; return r.cache = new (nt.Cache || ke), r; } function it(e, t) { return e === t || e != e && t != t; } function ot(e) { return function (e) { return dt(e) && st(e); }(e) && ne.call(e, "callee") && (!fe.call(e, "callee") || ie.call(e) == u); } nt.Cache = ke; var at = Array.isArray; function st(e) { return null != e && ct(e.length) && !ft(e); } function ft(e) { var t = ut(e) ? ie.call(e) : ""; return t == b || t == g; } function ct(e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= c; } function ut(e) { var t = typeof e; return !!e && ("object" == t || "function" == t); } function dt(e) { return !!e && "object" == typeof e; } function ht(e) { return "symbol" == typeof e || dt(e) && ie.call(e) == A; } var lt = q ? function (e) { return function (t) { return e(t); }; }(q) : function (e) { return dt(e) && ct(e.length) && !!R[ie.call(e)]; }; function pt(e) { return st(e) ? Pe(e) : Fe(e); } function bt(e) { return e; } r.exports = function (e, t) { return function e(t, r, n, i, o) { var a = -1, s = t.length; for (n || (n = Ze), o || (o = []); ++a < s;) {
                        var f = t[a];
                        r > 0 && n(f) ? r > 1 ? e(f, r - 1, n, i, o) : H(o, f) : i || (o[o.length] = f);
                    } return o; }(function (e, t) { return (at(e) ? F : He)(e, qe(t)); }(e, t), 1); }; }).call(this, r(8), r(23)(e)); }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t) { if (t = (0, o.default)(t || i.default), !(0, n.default)(e))
                            return t(new Error("First argument to waterfall must be an array of functions")); if (!e.length)
                            return t(); var r = 0; function c(t) { var n = (0, f.default)(e[r++]); t.push((0, s.default)(u)), n.apply(null, t); } function u(n) { if (n || r === e.length)
                            return t.apply(null, arguments); c((0, a.default)(arguments, 1)); } c([]); };
                        var n = c(r(78)), i = c(r(18)), o = c(r(37)), a = c(r(26)), s = c(r(39)), f = c(r(12));
                        function c(e) { return e && e.__esModule ? e : { default: e }; }
                        e.exports = t.default;
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t) { (0, i.default)(n.default, e, t); };
                        var n = o(r(70)), i = o(r(208));
                        function o(e) { return e && e.__esModule ? e : { default: e }; }
                        e.exports = t.default;
                    }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e, t, r) { r = r || n.default; var s = (0, i.default)(t) ? [] : {}; e(t, function (e, t, r) { (0, a.default)(e)(function (e, n) { arguments.length > 2 && (n = (0, o.default)(arguments, 1)), s[t] = n, r(e); }); }, function (e) { r(e, s); }); };
                        var n = s(r(18)), i = s(r(25)), o = s(r(26)), a = s(r(12));
                        function s(e) { return e && e.__esModule ? e : { default: e }; }
                        e.exports = t.default;
                    }, function (e, t, r) { var n = r(14), i = r(210); function o(e) { var t = new Error("Expect argument to be non-empty array"); if ("object" != typeof e || !e.length)
                        throw t; var r = e.map(function (e) { return "bytes" === e.type ? n.toBuffer(e.value) : e.value; }), o = e.map(function (e) { return e.type; }), a = e.map(function (e) { if (!e.name)
                        throw t; return e.type + " " + e.name; }); return i.soliditySHA3(["bytes32", "bytes32"], [i.soliditySHA3(new Array(e.length).fill("string"), a), i.soliditySHA3(o, r)]); } function a(e, t) { var r = n.toBuffer(t), i = n.fromRpcSig(r); return n.ecrecover(e, i.v, i.r, i.s); } function s(e) { var t = n.toBuffer(e.data); return a(n.hashPersonalMessage(t), e.sig); } function f(e, t) { for (var r = "" + e; r.length < t;)
                        r = "0" + r; return r; } e.exports = { concatSig: function (e, t, r) { var i = n.fromSigned(t), o = n.fromSigned(r), a = n.bufferToInt(e), s = f(n.toUnsigned(i).toString("hex"), 64), c = f(n.toUnsigned(o).toString("hex"), 64), u = n.stripHexPrefix(n.intToHex(a)); return n.addHexPrefix(s.concat(c, u)).toString("hex"); }, normalize: function (e) { if (e) {
                            if ("number" == typeof e) {
                                var t_5 = n.toBuffer(e);
                                e = n.bufferToHex(t_5);
                            }
                            if ("string" != typeof e) {
                                var t = "eth-sig-util.normalize() requires hex string or integer input.";
                                throw new Error(t += " received " + typeof e + ": " + e);
                            }
                            return n.addHexPrefix(e.toLowerCase());
                        } }, personalSign: function (e, t) { var r = n.toBuffer(t.data), i = n.hashPersonalMessage(r), o = n.ecsign(i, e); return n.bufferToHex(this.concatSig(o.v, o.r, o.s)); }, recoverPersonalSignature: function (e) { var t = s(e), r = n.publicToAddress(t); return n.bufferToHex(r); }, extractPublicKey: function (e) { return "0x" + s(e).toString("hex"); }, typedSignatureHash: function (e) { var t = o(e); return n.bufferToHex(t); }, signTypedData: function (e, t) { var r = o(t.data), i = n.ecsign(r, e); return n.bufferToHex(this.concatSig(i.v, i.r, i.s)); }, recoverTypedSignature: function (e) { var t = a(o(e.data), e.sig), r = n.publicToAddress(t); return n.bufferToHex(r); } }; }, function (e, t, r) { e.exports = r(211); }, function (e, t, r) { (function (t) { var n = r(212), i = r(2); var o = function () { }; function a(e) { return e.startsWith("int[") ? "int256" + e.slice(3) : "int" === e ? "int256" : e.startsWith("uint[") ? "uint256" + e.slice(4) : "uint" === e ? "uint256" : e.startsWith("fixed[") ? "fixed128x128" + e.slice(5) : "fixed" === e ? "fixed128x128" : e.startsWith("ufixed[") ? "ufixed128x128" + e.slice(6) : "ufixed" === e ? "ufixed128x128" : e; } function s(e) { return parseInt(/^\D+(\d+)$/.exec(e)[1], 10); } function f(e) { var t = /^\D+(\d+)x(\d+)$/.exec(e); return [parseInt(t[1], 10), parseInt(t[2], 10)]; } function c(e) { var t = e.match(/(.*)\[(.*?)\]$/); return t ? "" === t[2] ? "dynamic" : parseInt(t[2], 10) : null; } function u(e) { var t = typeof e; if ("string" === t)
                        return n.isHexPrefixed(e) ? new i(n.stripHexPrefix(e), 16) : new i(e, 10); if ("number" === t)
                        return new i(e); if (e.toArray)
                        return e; throw new Error("Argument is not a number"); } function d(e) { var t = /^(\w+)\((.*)\)$/.exec(e); if (3 !== t.length)
                        throw new Error("Invalid method signature"); var r = /^(.+)\):\((.+)$/.exec(t[2]); if (null !== r && 3 === r.length)
                        return { method: t[1], args: r[1].split(","), retargs: r[2].split(",") }; var n = t[2].split(","); return 1 === n.length && "" === n[0] && (n = []), { method: t[1], args: n }; } function h(e, r) { var o, a, d, l; if ("address" === e)
                        return h("uint160", u(r)); if ("bool" === e)
                        return h("uint8", r ? 1 : 0); if ("string" === e)
                        return h("bytes", t.from(r, "utf8")); if (g(e)) {
                        if (void 0 === r.length)
                            throw new Error("Not an array?");
                        if ("dynamic" !== (o = c(e)) && 0 !== o && r.length > o)
                            throw new Error("Elements exceed array size: " + o);
                        for (l in d = [], e = e.slice(0, e.lastIndexOf("[")), "string" == typeof r && (r = JSON.parse(r)), r)
                            d.push(h(e, r[l]));
                        if ("dynamic" === o) {
                            var p = h("uint256", r.length);
                            d.unshift(p);
                        }
                        return t.concat(d);
                    } if ("bytes" === e)
                        return r = t.from(r), d = t.concat([h("uint256", r.length), r]), r.length % 32 != 0 && (d = t.concat([d, n.zeros(32 - r.length % 32)])), d; if (e.startsWith("bytes")) {
                        if ((o = s(e)) < 1 || o > 32)
                            throw new Error("Invalid bytes<N> width: " + o);
                        return n.setLengthRight(r, 32);
                    } if (e.startsWith("uint")) {
                        if ((o = s(e)) % 8 || o < 8 || o > 256)
                            throw new Error("Invalid uint<N> width: " + o);
                        if ((a = u(r)).bitLength() > o)
                            throw new Error("Supplied uint exceeds width: " + o + " vs " + a.bitLength());
                        if (a < 0)
                            throw new Error("Supplied uint is negative");
                        return a.toArrayLike(t, "be", 32);
                    } if (e.startsWith("int")) {
                        if ((o = s(e)) % 8 || o < 8 || o > 256)
                            throw new Error("Invalid int<N> width: " + o);
                        if ((a = u(r)).bitLength() > o)
                            throw new Error("Supplied int exceeds width: " + o + " vs " + a.bitLength());
                        return a.toTwos(256).toArrayLike(t, "be", 32);
                    } if (e.startsWith("ufixed")) {
                        if (o = f(e), (a = u(r)) < 0)
                            throw new Error("Supplied ufixed is negative");
                        return h("uint256", a.mul(new i(2).pow(new i(o[1]))));
                    } if (e.startsWith("fixed"))
                        return o = f(e), h("int256", u(r).mul(new i(2).pow(new i(o[1])))); throw new Error("Unsupported or invalid type: " + e); } function l(e, r, n) { var o, a, s, f; if ("string" == typeof e && (e = p(e)), "address" === e.name)
                        return l(e.rawType, r, n).toArrayLike(t, "be", 20).toString("hex"); if ("bool" === e.name)
                        return l(e.rawType, r, n).toString() === new i(1).toString(); if ("string" === e.name) {
                        var c = l(e.rawType, r, n);
                        return t.from(c, "utf8").toString();
                    } if (e.isArray) {
                        for (s = [], o = e.size, "dynamic" === e.size && (n = l("uint256", r, n).toNumber(), o = l("uint256", r, n).toNumber(), n += 32), f = 0; f < o; f++) {
                            var u = l(e.subArray, r, n);
                            s.push(u), n += e.subArray.memoryUsage;
                        }
                        return s;
                    } if ("bytes" === e.name)
                        return n = l("uint256", r, n).toNumber(), o = l("uint256", r, n).toNumber(), r.slice(n + 32, n + 32 + o); if (e.name.startsWith("bytes"))
                        return r.slice(n, n + e.size); if (e.name.startsWith("uint")) {
                        if ((a = new i(r.slice(n, n + 32), 16, "be")).bitLength() > e.size)
                            throw new Error("Decoded int exceeds width: " + e.size + " vs " + a.bitLength());
                        return a;
                    } if (e.name.startsWith("int")) {
                        if ((a = new i(r.slice(n, n + 32), 16, "be").fromTwos(256)).bitLength() > e.size)
                            throw new Error("Decoded uint exceeds width: " + e.size + " vs " + a.bitLength());
                        return a;
                    } if (e.name.startsWith("ufixed")) {
                        if (o = new i(2).pow(new i(e.size[1])), !(a = l("uint256", r, n)).mod(o).isZero())
                            throw new Error("Decimals not supported yet");
                        return a.div(o);
                    } if (e.name.startsWith("fixed")) {
                        if (o = new i(2).pow(new i(e.size[1])), !(a = l("int256", r, n)).mod(o).isZero())
                            throw new Error("Decimals not supported yet");
                        return a.div(o);
                    } throw new Error("Unsupported or invalid type: " + e.name); } function p(e) { var t, r, n; if (g(e)) {
                        t = c(e);
                        var i = e.slice(0, e.lastIndexOf("["));
                        return i = p(i), r = { isArray: !0, name: e, size: t, memoryUsage: "dynamic" === t ? 32 : i.memoryUsage * t, subArray: i };
                    } switch (e) {
                        case "address":
                            n = "uint160";
                            break;
                        case "bool":
                            n = "uint8";
                            break;
                        case "string": n = "bytes";
                    } if (r = { rawType: n, name: e, memoryUsage: 32 }, e.startsWith("bytes") && "bytes" !== e || e.startsWith("uint") || e.startsWith("int") ? r.size = s(e) : (e.startsWith("ufixed") || e.startsWith("fixed")) && (r.size = f(e)), e.startsWith("bytes") && "bytes" !== e && (r.size < 1 || r.size > 32))
                        throw new Error("Invalid bytes<N> width: " + r.size); if ((e.startsWith("uint") || e.startsWith("int")) && (r.size % 8 || r.size < 8 || r.size > 256))
                        throw new Error("Invalid int/uint<N> width: " + r.size); return r; } function b(e) { return "string" === e || "bytes" === e || "dynamic" === c(e); } function g(e) { return e.lastIndexOf("]") === e.length - 1; } function v(e, t) { return e.startsWith("address") || e.startsWith("bytes") ? "0x" + t.toString("hex") : t.toString(); } o.eventID = function (e, r) { var i = e + "(" + r.map(a).join(",") + ")"; return n.keccak256(t.from(i)); }, o.methodID = function (e, t) { return o.eventID(e, t).slice(0, 4); }, o.rawEncode = function (e, r) { var n = [], i = [], o = 0; e.forEach(function (e) { if (g(e)) {
                        var t = c(e);
                        o += "dynamic" !== t ? 32 * t : 32;
                    }
                    else
                        o += 32; }); for (var s = 0; s < e.length; s++) {
                        var f = a(e[s]), u = h(f, r[s]);
                        b(f) ? (n.push(h("uint256", o)), i.push(u), o += u.length) : n.push(u);
                    } return t.concat(n.concat(i)); }, o.rawDecode = function (e, r) { var n = []; r = t.from(r); for (var i = 0, o = 0; o < e.length; o++) {
                        var s = p(a(e[o])), f = l(s, r, i);
                        i += s.memoryUsage, n.push(f);
                    } return n; }, o.simpleEncode = function (e) { var r = Array.prototype.slice.call(arguments).slice(1), n = d(e); if (r.length !== n.args.length)
                        throw new Error("Argument count mismatch"); return t.concat([o.methodID(n.method, n.args), o.rawEncode(n.args, r)]); }, o.simpleDecode = function (e, t) { var r = d(e); if (!r.retargs)
                        throw new Error("No return values in method"); return o.rawDecode(r.retargs, t); }, o.stringify = function (e, t) { var r = []; for (var n in e) {
                        var i = e[n], o = t[n];
                        o = /^[^\[]+\[.*\]$/.test(i) ? o.map(function (e) { return v(i, e); }).join(", ") : v(i, o), r.push(o);
                    } return r; }, o.solidityHexValue = function (e, r, i) { var a, f; if (g(e)) {
                        var d = e.replace(/\[.*?\]/, "");
                        if (!g(d)) {
                            var h = c(e);
                            if ("dynamic" !== h && 0 !== h && r.length > h)
                                throw new Error("Elements exceed array size: " + h);
                        }
                        var l = r.map(function (e) { return o.solidityHexValue(d, e, 256); });
                        return t.concat(l);
                    } if ("bytes" === e)
                        return r; if ("string" === e)
                        return t.from(r, "utf8"); if ("bool" === e) {
                        i = i || 8;
                        var p = Array(i / 4).join("0");
                        return t.from(r ? p + "1" : p + "0", "hex");
                    } if ("address" === e) {
                        var b = 20;
                        return i && (b = i / 8), n.setLengthLeft(r, b);
                    } if (e.startsWith("bytes")) {
                        if ((a = s(e)) < 1 || a > 32)
                            throw new Error("Invalid bytes<N> width: " + a);
                        return n.setLengthRight(r, a);
                    } if (e.startsWith("uint")) {
                        if ((a = s(e)) % 8 || a < 8 || a > 256)
                            throw new Error("Invalid uint<N> width: " + a);
                        if ((f = u(r)).bitLength() > a)
                            throw new Error("Supplied uint exceeds width: " + a + " vs " + f.bitLength());
                        return i = i || a, f.toArrayLike(t, "be", i / 8);
                    } if (e.startsWith("int")) {
                        if ((a = s(e)) % 8 || a < 8 || a > 256)
                            throw new Error("Invalid int<N> width: " + a);
                        if ((f = u(r)).bitLength() > a)
                            throw new Error("Supplied int exceeds width: " + a + " vs " + f.bitLength());
                        return i = i || a, f.toTwos(a).toArrayLike(t, "be", i / 8);
                    } throw new Error("Unsupported or invalid type: " + e); }, o.solidityPack = function (e, r) { if (e.length !== r.length)
                        throw new Error("Number of types are not matching the values"); for (var n = [], i = 0; i < e.length; i++) {
                        var s = a(e[i]), f = r[i];
                        n.push(o.solidityHexValue(s, f, null));
                    } return t.concat(n); }, o.soliditySHA3 = function (e, t) { return n.keccak256(o.solidityPack(e, t)); }, o.soliditySHA256 = function (e, t) { return n.sha256(o.solidityPack(e, t)); }, o.solidityRIPEMD160 = function (e, t) { return n.ripemd160(o.solidityPack(e, t), !0); }, o.fromSerpent = function (e) { for (var t, r = [], n = 0; n < e.length; n++) {
                        var i = e[n];
                        if ("s" === i)
                            r.push("bytes");
                        else if ("b" === i) {
                            for (var o = "bytes", a = n + 1; a < e.length && ((t = e[a]) >= "0" && t <= "9");)
                                o += e[a] - "0", a++;
                            n = a - 1, r.push(o);
                        }
                        else if ("i" === i)
                            r.push("int256");
                        else {
                            if ("a" !== i)
                                throw new Error("Unsupported or invalid type: " + i);
                            r.push("int256[]");
                        }
                    } return r; }, o.toSerpent = function (e) { for (var t = [], r = 0; r < e.length; r++) {
                        var n = e[r];
                        if ("bytes" === n)
                            t.push("s");
                        else if (n.startsWith("bytes"))
                            t.push("b" + s(n));
                        else if ("int256" === n)
                            t.push("i");
                        else {
                            if ("int256[]" !== n)
                                throw new Error("Unsupported or invalid type: " + n);
                            t.push("a");
                        }
                    } return t.join(""); }, e.exports = o; }).call(this, r(7).Buffer); }, function (e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 });
                        var n = r(2);
                        t.BN = n;
                        var i = r(66);
                        t.rlp = i;
                        var o = r(51), a = r(56);
                        t.secp256k1 = a;
                        var s = r(65), f = r(31), c = r(1).Buffer, u = r(67);
                        function d(e, t) { return t ? e - (2 * t + 35) : e - 27; }
                        function h(e) { return 0 === e || 1 === e; }
                        Object.assign(t, u), t.MAX_INTEGER = new n("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), t.TWO_POW256 = new n("10000000000000000000000000000000000000000000000000000000000000000", 16), t.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", t.KECCAK256_NULL = c.from(t.KECCAK256_NULL_S, "hex"), t.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", t.KECCAK256_RLP_ARRAY = c.from(t.KECCAK256_RLP_ARRAY_S, "hex"), t.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", t.KECCAK256_RLP = c.from(t.KECCAK256_RLP_S, "hex"), t.zeros = function (e) { return c.allocUnsafe(e).fill(0); }, t.zeroAddress = function () { var e = t.zeros(20); return t.bufferToHex(e); }, t.setLengthLeft = function (e, r, n) { void 0 === n && (n = !1); var i = t.zeros(r); return e = t.toBuffer(e), n ? e.length < r ? (e.copy(i), i) : e.slice(0, r) : e.length < r ? (e.copy(i, r - e.length), i) : e.slice(-r); }, t.setLength = t.setLengthLeft, t.setLengthRight = function (e, r) { return t.setLength(e, r, !0); }, t.unpad = function (e) { for (var t = (e = u.stripHexPrefix(e))[0]; e.length > 0 && "0" === t.toString();)
                            t = (e = e.slice(1))[0]; return e; }, t.stripZeros = t.unpad, t.toBuffer = function (e) { if (!c.isBuffer(e))
                            if (Array.isArray(e))
                                e = c.from(e);
                            else if ("string" == typeof e)
                                e = t.isHexString(e) ? c.from(t.padToEven(t.stripHexPrefix(e)), "hex") : c.from(e);
                            else if ("number" == typeof e)
                                e = t.intToBuffer(e);
                            else if (null == e)
                                e = c.allocUnsafe(0);
                            else if (n.isBN(e))
                                e = e.toArrayLike(c);
                            else {
                                if (!e.toArray)
                                    throw new Error("invalid type");
                                e = c.from(e.toArray());
                            } return e; }, t.bufferToInt = function (e) { return new n(t.toBuffer(e)).toNumber(); }, t.bufferToHex = function (e) { return "0x" + (e = t.toBuffer(e)).toString("hex"); }, t.fromSigned = function (e) { return new n(e).fromTwos(256); }, t.toUnsigned = function (e) { return c.from(e.toTwos(256).toArray()); }, t.keccak = function (e, r) { return void 0 === r && (r = 256), e = t.toBuffer(e), r || (r = 256), o("keccak" + r).update(e).digest(); }, t.keccak256 = function (e) { return t.keccak(e); }, t.sha256 = function (e) { return e = t.toBuffer(e), f("sha256").update(e).digest(); }, t.ripemd160 = function (e, r) { e = t.toBuffer(e); var n = f("rmd160").update(e).digest(); return !0 === r ? t.setLength(n, 32) : n; }, t.rlphash = function (e) { return t.keccak(i.encode(e)); }, t.isValidPrivate = function (e) { return a.privateKeyVerify(e); }, t.isValidPublic = function (e, t) { return void 0 === t && (t = !1), 64 === e.length ? a.publicKeyVerify(c.concat([c.from([4]), e])) : !!t && a.publicKeyVerify(e); }, t.pubToAddress = function (e, r) { return void 0 === r && (r = !1), e = t.toBuffer(e), r && 64 !== e.length && (e = a.publicKeyConvert(e, !1).slice(1)), s(64 === e.length), t.keccak(e).slice(-20); }, t.publicToAddress = t.pubToAddress, t.privateToPublic = function (e) { return e = t.toBuffer(e), a.publicKeyCreate(e, !1).slice(1); }, t.importPublic = function (e) { return 64 !== (e = t.toBuffer(e)).length && (e = a.publicKeyConvert(e, !1).slice(1)), e; }, t.ecsign = function (e, t, r) { var n = a.sign(e, t), i = n.recovery; return { r: n.signature.slice(0, 32), s: n.signature.slice(32, 64), v: r ? i + (2 * r + 35) : i + 27 }; }, t.hashPersonalMessage = function (e) { var r = t.toBuffer("Ethereum Signed Message:\n" + e.length.toString()); return t.keccak(c.concat([r, e])); }, t.ecrecover = function (e, r, n, i, o) { var s = c.concat([t.setLength(n, 32), t.setLength(i, 32)], 64), f = d(r, o); if (!h(f))
                            throw new Error("Invalid signature v value"); var u = a.recover(e, s, f); return a.publicKeyConvert(u, !1).slice(1); }, t.toRpcSig = function (e, r, n, i) { if (!h(d(e, i)))
                            throw new Error("Invalid signature v value"); return t.bufferToHex(c.concat([t.setLengthLeft(r, 32), t.setLengthLeft(n, 32), t.toBuffer(e)])); }, t.fromRpcSig = function (e) { var r = t.toBuffer(e); if (65 !== r.length)
                            throw new Error("Invalid signature length"); var n = r[64]; return n < 27 && (n += 27), { v: n, r: r.slice(0, 32), s: r.slice(32, 64) }; }, t.privateToAddress = function (e) { return t.publicToAddress(t.privateToPublic(e)); }, t.isValidAddress = function (e) { return /^0x[0-9a-fA-F]{40}$/.test(e); }, t.isZeroAddress = function (e) { return t.zeroAddress() === t.addHexPrefix(e); }, t.toChecksumAddress = function (e) { e = u.stripHexPrefix(e).toLowerCase(); for (var r = t.keccak(e).toString("hex"), n = "0x", i = 0; i < e.length; i++)
                            parseInt(r[i], 16) >= 8 ? n += e[i].toUpperCase() : n += e[i]; return n; }, t.isValidChecksumAddress = function (e) { return t.isValidAddress(e) && t.toChecksumAddress(e) === e; }, t.generateAddress = function (e, r) { e = t.toBuffer(e); var i = new n(r); return i.isZero() ? t.rlphash([e, null]).slice(-20) : t.rlphash([e, c.from(i.toArray())]).slice(-20); }, t.generateAddress2 = function (e, r, n) { var i = t.toBuffer(e), o = t.toBuffer(r), a = t.toBuffer(n); return s(20 === i.length), s(32 === o.length), t.keccak256(c.concat([c.from("ff", "hex"), i, o, t.keccak256(a)])).slice(-20); }, t.isPrecompiled = function (e) { var r = t.unpad(e); return 1 === r.length && r[0] >= 1 && r[0] <= 8; }, t.addHexPrefix = function (e) { return "string" != typeof e ? e : u.isHexPrefixed(e) ? e : "0x" + e; }, t.isValidSignature = function (e, t, r, i, o) { void 0 === i && (i = !0); var a = new n("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16), s = new n("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16); if (32 !== t.length || 32 !== r.length)
                            return !1; if (!h(d(e, o)))
                            return !1; var f = new n(t), c = new n(r); return !(f.isZero() || f.gt(s) || c.isZero() || c.gt(s)) && (!i || 1 !== c.cmp(a)); }, t.baToJSON = function (e) { if (c.isBuffer(e))
                            return "0x" + e.toString("hex"); if (e instanceof Array) {
                            for (var r = [], n = 0; n < e.length; n++)
                                r.push(t.baToJSON(e[n]));
                            return r;
                        } }, t.defineProperties = function (e, r, n) { if (e.raw = [], e._fields = [], e.toJSON = function (r) { if (void 0 === r && (r = !1), r) {
                            var n = {};
                            return e._fields.forEach(function (t) { n[t] = "0x" + e[t].toString("hex"); }), n;
                        } return t.baToJSON(e.raw); }, e.serialize = function () { return i.encode(e.raw); }, r.forEach(function (r, n) { function i() { return e.raw[n]; } function o(i) { "00" !== (i = t.toBuffer(i)).toString("hex") || r.allowZero || (i = c.allocUnsafe(0)), r.allowLess && r.length ? (i = t.stripZeros(i), s(r.length >= i.length, "The field " + r.name + " must not have more " + r.length + " bytes")) : r.allowZero && 0 === i.length || !r.length || s(r.length === i.length, "The field " + r.name + " must have byte length of " + r.length), e.raw[n] = i; } e._fields.push(r.name), Object.defineProperty(e, r.name, { enumerable: !0, configurable: !0, get: i, set: o }), r.default && (e[r.name] = r.default), r.alias && Object.defineProperty(e, r.alias, { enumerable: !1, configurable: !0, set: o, get: i }); }), n)
                            if ("string" == typeof n && (n = c.from(u.stripHexPrefix(n), "hex")), c.isBuffer(n) && (n = i.decode(n)), Array.isArray(n)) {
                                if (n.length > e._fields.length)
                                    throw new Error("wrong number of fields in data");
                                n.forEach(function (r, n) { e[e._fields[n]] = t.toBuffer(r); });
                            }
                            else {
                                if ("object" != typeof n)
                                    throw new Error("invalid data");
                                var o = Object.keys(n);
                                r.forEach(function (t) { -1 !== o.indexOf(t.name) && (e[t.name] = n[t.name]), -1 !== o.indexOf(t.alias) && (e[t.alias] = n[t.alias]); });
                            } };
                    }, function (e, t, r) { (function (t) { !function (r) {
                        "use strict";
                        var n = function (e) { setTimeout(e, 0); };
                        void 0 !== t && t && "function" == typeof t.nextTick && (n = t.nextTick), e.exports = function (e) { var t = { capacity: e || 1, current: 0, queue: [], firstHere: !1, take: function () { if (!1 === t.firstHere) {
                                t.current++, t.firstHere = !0;
                                var e = 1;
                            }
                            else
                                e = 0; var r = { n: 1 }; "function" == typeof arguments[0] ? r.task = arguments[0] : r.n = arguments[0], arguments.length >= 2 && ("function" == typeof arguments[1] ? r.task = arguments[1] : r.n = arguments[1]); var n = r.task; if (r.task = function () { n(t.leave); }, t.current + r.n - e > t.capacity)
                                return 1 === e && (t.current--, t.firstHere = !1), t.queue.push(r); t.current += r.n - e, r.task(t.leave), 1 === e && (t.firstHere = !1); }, leave: function (e) { if (e = e || 1, t.current -= e, t.queue.length) {
                                var r = t.queue[0];
                                r.n + t.current > t.capacity || (t.queue.shift(), t.current += r.n, n(r.task));
                            }
                            else if (t.current < 0)
                                throw new Error("leave called too many times."); }, available: function (e) { return e = e || 1, t.current + e <= t.capacity; } }; return t; };
                    }(); }).call(this, r(6)); }, function (e, t, r) {
                        "use strict";
                        var n = r(40);
                        e.exports = function (e, t, r) { e.sendAsync(n({ method: "eth_estimateGas", params: [t] }), function (e, t) { if (e)
                            return "no contract code at given address" === e.message ? r(null, "0xcf08") : r(e); r(null, t.result); }); };
                    }, function (e, t, r) {
                        "use strict";
                        (function (t) { var n = r(14), i = r(216), o = n.BN, a = new o("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16), s = function () { function e(r) { !function (e, t) { if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function"); }(this, e), r = r || {}; var i = [{ name: "nonce", length: 32, allowLess: !0, default: new t([]) }, { name: "gasPrice", length: 32, allowLess: !0, default: new t([]) }, { name: "gasLimit", alias: "gas", length: 32, allowLess: !0, default: new t([]) }, { name: "to", allowZero: !0, length: 20, default: new t([]) }, { name: "value", length: 32, allowLess: !0, default: new t([]) }, { name: "data", alias: "input", allowZero: !0, default: new t([]) }, { name: "v", allowZero: !0, default: new t([28]) }, { name: "r", length: 32, allowZero: !0, allowLess: !0, default: new t([]) }, { name: "s", length: 32, allowZero: !0, allowLess: !0, default: new t([]) }]; n.defineProperties(this, i, r), Object.defineProperty(this, "from", { enumerable: !0, configurable: !0, get: this.getSenderAddress.bind(this) }); var o = n.bufferToInt(this.v), a = Math.floor((o - 35) / 2); a < 0 && (a = 0), this._chainId = a || r.chainId || 0, this._homestead = !0; } return e.prototype.toCreationAddress = function () { return "" === this.to.toString("hex"); }, e.prototype.hash = function (e) { void 0 === e && (e = !0); var t = void 0; if (e)
                            t = this.raw;
                        else if (this._chainId > 0) {
                            var r = this.raw.slice();
                            this.v = this._chainId, this.r = 0, this.s = 0, t = this.raw, this.raw = r;
                        }
                        else
                            t = this.raw.slice(0, 6); return n.rlphash(t); }, e.prototype.getChainId = function () { return this._chainId; }, e.prototype.getSenderAddress = function () { if (this._from)
                            return this._from; var e = this.getSenderPublicKey(); return this._from = n.publicToAddress(e), this._from; }, e.prototype.getSenderPublicKey = function () { if (!(this._senderPubKey && this._senderPubKey.length || this.verifySignature()))
                            throw new Error("Invalid Signature"); return this._senderPubKey; }, e.prototype.verifySignature = function () { var e = this.hash(!1); if (this._homestead && 1 === new o(this.s).cmp(a))
                            return !1; try {
                            var t = n.bufferToInt(this.v);
                            this._chainId > 0 && (t -= 2 * this._chainId + 8), this._senderPubKey = n.ecrecover(e, t, this.r, this.s);
                        }
                        catch (e) {
                            return !1;
                        } return !!this._senderPubKey; }, e.prototype.sign = function (e) { var t = this.hash(!1), r = n.ecsign(t, e); this._chainId > 0 && (r.v += 2 * this._chainId + 8), Object.assign(this, r); }, e.prototype.getDataFee = function () { for (var e = this.raw[5], t = new o(0), r = 0; r < e.length; r++)
                            0 === e[r] ? t.iaddn(i.txDataZeroGas.v) : t.iaddn(i.txDataNonZeroGas.v); return t; }, e.prototype.getBaseFee = function () { var e = this.getDataFee().iaddn(i.txGas.v); return this._homestead && this.toCreationAddress() && e.iaddn(i.txCreation.v), e; }, e.prototype.getUpfrontCost = function () { return new o(this.gasLimit).imul(new o(this.gasPrice)).iadd(new o(this.value)); }, e.prototype.validate = function (e) { var t = []; return this.verifySignature() || t.push("Invalid Signature"), this.getBaseFee().cmp(new o(this.gasLimit)) > 0 && t.push(["gas limit is too low. Need at least " + this.getBaseFee()]), void 0 === e || !1 === e ? 0 === t.length : t.join(" "); }, e; }(); e.exports = s; }).call(this, r(7).Buffer);
                    }, function (e) { e.exports = { genesisGasLimit: { v: 5e3, d: "Gas limit of the Genesis block." }, genesisDifficulty: { v: 17179869184, d: "Difficulty of the Genesis block." }, genesisNonce: { v: "0x0000000000000042", d: "the geneis nonce" }, genesisExtraData: { v: "0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa", d: "extra data " }, genesisHash: { v: "0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3", d: "genesis hash" }, genesisStateRoot: { v: "0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544", d: "the genesis state root" }, minGasLimit: { v: 5e3, d: "Minimum the gas limit may ever be." }, gasLimitBoundDivisor: { v: 1024, d: "The bound divisor of the gas limit, used in update calculations." }, minimumDifficulty: { v: 131072, d: "The minimum that the difficulty may ever be." }, difficultyBoundDivisor: { v: 2048, d: "The bound divisor of the difficulty, used in the update calculations." }, durationLimit: { v: 13, d: "The decision boundary on the blocktime duration used to determine whether difficulty should go up or not." }, maximumExtraDataSize: { v: 32, d: "Maximum size extra data may be after Genesis." }, epochDuration: { v: 3e4, d: "Duration between proof-of-work epochs." }, stackLimit: { v: 1024, d: "Maximum size of VM stack allowed." }, callCreateDepth: { v: 1024, d: "Maximum depth of call/create stack." }, tierStepGas: { v: [0, 2, 3, 5, 8, 10, 20], d: "Once per operation, for a selection of them." }, expGas: { v: 10, d: "Once per EXP instuction." }, expByteGas: { v: 10, d: "Times ceil(log256(exponent)) for the EXP instruction." }, sha3Gas: { v: 30, d: "Once per SHA3 operation." }, sha3WordGas: { v: 6, d: "Once per word of the SHA3 operation's data." }, sloadGas: { v: 50, d: "Once per SLOAD operation." }, sstoreSetGas: { v: 2e4, d: "Once per SSTORE operation if the zeroness changes from zero." }, sstoreResetGas: { v: 5e3, d: "Once per SSTORE operation if the zeroness does not change from zero." }, sstoreRefundGas: { v: 15e3, d: "Once per SSTORE operation if the zeroness changes to zero." }, jumpdestGas: { v: 1, d: "Refunded gas, once per SSTORE operation if the zeroness changes to zero." }, logGas: { v: 375, d: "Per LOG* operation." }, logDataGas: { v: 8, d: "Per byte in a LOG* operation's data." }, logTopicGas: { v: 375, d: "Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas." }, createGas: { v: 32e3, d: "Once per CREATE operation & contract-creation transaction." }, callGas: { v: 40, d: "Once per CALL operation & message call transaction." }, callStipend: { v: 2300, d: "Free gas given at beginning of call." }, callValueTransferGas: { v: 9e3, d: "Paid for CALL when the value transfor is non-zero." }, callNewAccountGas: { v: 25e3, d: "Paid for CALL when the destination address didn't exist prior." }, suicideRefundGas: { v: 24e3, d: "Refunded following a suicide operation." }, memoryGas: { v: 3, d: "Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL." }, quadCoeffDiv: { v: 512, d: "Divisor for the quadratic particle of the memory cost equation." }, createDataGas: { v: 200, d: "" }, txGas: { v: 21e3, d: "Per transaction. NOTE: Not payable on data of calls between transactions." }, txCreation: { v: 32e3, d: "the cost of creating a contract via tx" }, txDataZeroGas: { v: 4, d: "Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions." }, txDataNonZeroGas: { v: 68, d: "Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions." }, copyGas: { v: 3, d: "Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added." }, ecrecoverGas: { v: 3e3, d: "" }, sha256Gas: { v: 60, d: "" }, sha256WordGas: { v: 12, d: "" }, ripemd160Gas: { v: 600, d: "" }, ripemd160WordGas: { v: 120, d: "" }, identityGas: { v: 15, d: "" }, identityWordGas: { v: 3, d: "" }, minerReward: { v: "5000000000000000000", d: "the amount a miner get rewarded for mining a block" }, ommerReward: { v: "625000000000000000", d: "The amount of wei a miner of an uncle block gets for being inculded in the blockchain" }, niblingReward: { v: "156250000000000000", d: "the amount a miner gets for inculding a uncle" }, homeSteadForkNumber: { v: 115e4, d: "the block that the Homestead fork started at" }, homesteadRepriceForkNumber: { v: 2463e3, d: "the block that the Homestead Reprice (EIP150) fork started at" }, timebombPeriod: { v: 1e5, d: "Exponential difficulty timebomb period" }, freeBlockPeriod: { v: 2 } }; }, function (e, t, r) { var n = r(35), i = r(83), o = r(42), a = r(82), _j = r(19), s = _j.unsafeRandomBytes, f = _j.incrementHexInt, c = r(44); function u(e) { return { hash: e.hash, parentHash: e.parentHash, sha3Uncles: e.sha3Uncles, miner: e.miner, stateRoot: e.stateRoot, transactionsRoot: e.transactionsRoot, receiptsRoot: e.receiptsRoot, logsBloom: e.logsBloom, difficulty: e.difficulty, number: e.number, gasLimit: e.gasLimit, gasUsed: e.gasUsed, nonce: e.nonce, mixHash: e.mixHash, timestamp: e.timestamp, extraData: e.extraData }; } e.exports = function (_j) {
                        var e = _j.blockTracker, t = _j.provider;
                        var r = {}, d = a({ blockTracker: e, provider: t });
                        var h = !1;
                        var l = new n, p = i({ eth_subscribe: o(function (n, i) {
                                return __awaiter(this, void 0, void 0, function () { var o, a, l, _j, r_2, i_1; return __generator(this, function (_k) {
                                    switch (_k.label) {
                                        case 0:
                                            if (h)
                                                throw new Error("SubscriptionManager - attempting to use after destroying");
                                            o = n.params[0], a = s(16);
                                            _j = o;
                                            switch (_j) {
                                                case "newHeads": return [3 /*break*/, 1];
                                                case "logs": return [3 /*break*/, 2];
                                            }
                                            return [3 /*break*/, 4];
                                        case 1:
                                            l = function (_j) {
                                                var _this = this;
                                                var r = _j.subId;
                                                var n = { type: o, destroy: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_j) {
                                                        e.removeListener("sync", n.update);
                                                        return [2 /*return*/];
                                                    }); }); }, update: function (_j) {
                                                        var e = _j.oldBlock, n = _j.newBlock;
                                                        return __awaiter(_this, void 0, void 0, function () { var i, o, a, s; return __generator(this, function (_k) {
                                                            switch (_k.label) {
                                                                case 0:
                                                                    i = n, o = f(e);
                                                                    return [4 /*yield*/, c({ provider: t, fromBlock: o, toBlock: i })];
                                                                case 1:
                                                                    a = _k.sent(), s = a.map(u);
                                                                    s.forEach(function (e) { b(r, e); });
                                                                    return [2 /*return*/];
                                                            }
                                                        }); });
                                                    } };
                                                return e.on("sync", n.update), n;
                                            }({ subId: a });
                                            return [3 /*break*/, 5];
                                        case 2:
                                            r_2 = n.params[1];
                                            return [4 /*yield*/, d.newLogFilter(r_2)];
                                        case 3:
                                            i_1 = _k.sent();
                                            l = function (_j) {
                                                var _this = this;
                                                var e = _j.subId, t = _j.filter;
                                                return t.on("update", function (t) { return b(e, t); }), { type: o, destroy: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_j) {
                                                        switch (_j.label) {
                                                            case 0: return [4 /*yield*/, d.uninstallFilter(t.idHex)];
                                                            case 1: return [2 /*return*/, _j.sent()];
                                                        }
                                                    }); }); } };
                                            }({ subId: a, filter: i_1 });
                                            return [3 /*break*/, 5];
                                        case 4: throw new Error("SubscriptionManager - unsupported subscription type \"" + o + "\"");
                                        case 5: return [2 /*return*/, (r[a] = l, void (i.result = a))];
                                    }
                                }); });
                            }), eth_unsubscribe: o(function (e, t) {
                                return __awaiter(this, void 0, void 0, function () { var n, i; return __generator(this, function (_j) {
                                    switch (_j.label) {
                                        case 0:
                                            if (h)
                                                throw new Error("SubscriptionManager - attempting to use after destroying");
                                            n = e.params[0], i = r[n];
                                            if (!i)
                                                return [2 /*return*/, void (t.result = !1)];
                                            delete r[n];
                                            return [4 /*yield*/, i.destroy()];
                                        case 1:
                                            _j.sent(), t.result = !0;
                                            return [2 /*return*/];
                                    }
                                }); });
                            }) });
                        return p.destroy = function () { l.removeAllListeners(); for (var e_11 in r)
                            r[e_11].destroy(), delete r[e_11]; h = !0; }, { events: l, middleware: p };
                        function b(e, t) { l.emit("notification", { jsonrpc: "2.0", method: "eth_subscription", params: { subscription: e, result: t } }); }
                    }; }, function (e, t) { e.exports = { Blockchain: /** @class */ (function () {
                            function Blockchain(e, t) {
                                this.name = e, this.netID = t;
                            }
                            Blockchain.prototype.toJSON = function () { return JSON.parse('{ "name":"' + this.name + '", "netID":"' + this.netID + '"}'); };
                            return Blockchain;
                        }()) }; }, function (e, t, r) { var n = r(45), i = r(90).Node, o = r(47); e.exports = { Dispatch: /** @class */ (function () {
                            function class_9(e) {
                                this.configuration = e, this.axiosInstance = n.create({ baseURL: o.dispatchNodeURL, path: o.dispatchPath, timeout: this.configuration.requestTimeOut, headers: { "Content-Type": "application/json" } });
                            }
                            class_9.prototype.blockchainsJSON = function () { var e = []; return this.configuration.blockchains.forEach(function (t) { e.push(t); }), e; };
                            class_9.prototype.retrieveServiceNodes = function (e) {
                                return __awaiter(this, void 0, void 0, function () { var t, _j, r, t_6; return __generator(this, function (_k) {
                                    switch (_k.label) {
                                        case 0:
                                            _k.trys.push([0, 2, , 3]);
                                            _j = null;
                                            return [4 /*yield*/, this.axiosInstance.post(o.dispatchPath, { DevID: this.configuration.devID, Blockchains: this.blockchainsJSON() })];
                                        case 1:
                                            if (_j != (t = _k.sent()) && 200 == t.status && null != t.data) {
                                                r = this.parseDispatchResponse(t.data);
                                                return [2 /*return*/, e ? void e(r, null) : r];
                                            }
                                            return [2 /*return*/, e ? void e(null, new Error("Failed to retrieve service nodes with error: " + t.data)) : new Error("Failed to retrieve service nodes with error: " + t.data)];
                                        case 2:
                                            t_6 = _k.sent();
                                            return [2 /*return*/, e ? void e(null, new Error("Failed to retrieve service nodes with error: " + t_6)) : new Error("Failed to retrieve service nodes with error: " + t_6)];
                                        case 3: return [2 /*return*/];
                                    }
                                }); });
                            };
                            class_9.prototype.parseDispatchResponse = function (e) { try {
                                var t = [];
                                if (Array.isArray(e))
                                    e.forEach(function (e) { var r = e.name, n = e.netid; e.ips && e.ips.forEach(function (e) { var o = new i(r, n, e); t.push(o); }); });
                                else {
                                    var r = e.name, n = e.netid;
                                    e.ips && e.ips.forEach(function (e) { var o = new i(r, n, e); t.push(o); });
                                }
                                return t;
                            }
                            catch (e) {
                                return new Error("Failed to parsed service nodes with error: " + e);
                            } };
                            return class_9;
                        }()) }; }, function (e, t, r) {
                        "use strict";
                        var n = r(4), i = r(85), o = r(222), a = r(46);
                        function s(e) { var t = new o(e), r = i(o.prototype.request, t); return n.extend(r, o.prototype, t), n.extend(r, t), r; }
                        var f = s(a);
                        f.Axios = o, f.create = function (e) { return s(n.merge(a, e)); }, f.Cancel = r(89), f.CancelToken = r(236), f.isCancel = r(88), f.all = function (e) { return Promise.all(e); }, f.spread = r(237), e.exports = f, e.exports.default = f;
                    }, function (e, t) {
                        function r(e) { return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e); }
                        /*!
                         * Determine if an object is a Buffer
                         *
                         * @author   Feross Aboukhadijeh <https://feross.org>
                         * @license  MIT
                         */
                        e.exports = function (e) { return null != e && (r(e) || function (e) { return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0)); }(e) || !!e._isBuffer); };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(46), i = r(4), o = r(231), a = r(232);
                        function s(e) { this.defaults = e, this.interceptors = { request: new o, response: new o }; }
                        s.prototype.request = function (e) { "string" == typeof e && (e = i.merge({ url: arguments[0] }, arguments[1])), (e = i.merge(n, { method: "get" }, this.defaults, e)).method = e.method.toLowerCase(); var t = [a, void 0], r = Promise.resolve(e); for (this.interceptors.request.forEach(function (e) { t.unshift(e.fulfilled, e.rejected); }), this.interceptors.response.forEach(function (e) { t.push(e.fulfilled, e.rejected); }); t.length;)
                            r = r.then(t.shift(), t.shift()); return r; }, i.forEach(["delete", "get", "head", "options"], function (e) { s.prototype[e] = function (t, r) { return this.request(i.merge(r || {}, { method: e, url: t })); }; }), i.forEach(["post", "put", "patch"], function (e) { s.prototype[e] = function (t, r, n) { return this.request(i.merge(n || {}, { method: e, url: t, data: r })); }; }), e.exports = s;
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(4);
                        e.exports = function (e, t) { n.forEach(e, function (r, n) { n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[n]); }); };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(87);
                        e.exports = function (e, t, r) { var i = r.config.validateStatus; r.status && i && !i(r.status) ? t(n("Request failed with status code " + r.status, r.config, null, r.request, r)) : e(r); };
                    }, function (e, t, r) {
                        "use strict";
                        e.exports = function (e, t, r, n, i) { return e.config = t, r && (e.code = r), e.request = n, e.response = i, e; };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(4);
                        function i(e) { return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]"); }
                        e.exports = function (e, t, r) { if (!t)
                            return e; var o; if (r)
                            o = r(t);
                        else if (n.isURLSearchParams(t))
                            o = t.toString();
                        else {
                            var a = [];
                            n.forEach(t, function (e, t) { null != e && (n.isArray(e) ? t += "[]" : e = [e], n.forEach(e, function (e) { n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), a.push(i(t) + "=" + i(e)); })); }), o = a.join("&");
                        } return o && (e += (-1 === e.indexOf("?") ? "?" : "&") + o), e; };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(4), i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
                        e.exports = function (e) { var t, r, o, a = {}; return e ? (n.forEach(e.split("\n"), function (e) { if (o = e.indexOf(":"), t = n.trim(e.substr(0, o)).toLowerCase(), r = n.trim(e.substr(o + 1)), t) {
                            if (a[t] && i.indexOf(t) >= 0)
                                return;
                            a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([r]) : a[t] ? a[t] + ", " + r : r;
                        } }), a) : a; };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(4);
                        e.exports = n.isStandardBrowserEnv() ? function () { var e, t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a"); function i(e) { var n = e; return t && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), { href: r.href, protocol: r.protocol ? r.protocol.replace(/:$/, "") : "", host: r.host, search: r.search ? r.search.replace(/^\?/, "") : "", hash: r.hash ? r.hash.replace(/^#/, "") : "", hostname: r.hostname, port: r.port, pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname }; } return e = i(window.location.href), function (t) { var r = n.isString(t) ? i(t) : t; return r.protocol === e.protocol && r.host === e.host; }; }() : function () { return !0; };
                    }, function (e, t, r) {
                        "use strict";
                        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        function i() { this.message = "String contains an invalid character"; }
                        i.prototype = new Error, i.prototype.code = 5, i.prototype.name = "InvalidCharacterError", e.exports = function (e) { for (var t, r, o = String(e), a = "", s = 0, f = n; o.charAt(0 | s) || (f = "=", s % 1); a += f.charAt(63 & t >> 8 - s % 1 * 8)) {
                            if ((r = o.charCodeAt(s += .75)) > 255)
                                throw new i;
                            t = t << 8 | r;
                        } return a; };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(4);
                        e.exports = n.isStandardBrowserEnv() ? { write: function (e, t, r, i, o, a) { var s = []; s.push(e + "=" + encodeURIComponent(t)), n.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), n.isString(i) && s.push("path=" + i), n.isString(o) && s.push("domain=" + o), !0 === a && s.push("secure"), document.cookie = s.join("; "); }, read: function (e) { var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null; }, remove: function (e) { this.write(e, "", Date.now() - 864e5); } } : { write: function () { }, read: function () { return null; }, remove: function () { } };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(4);
                        function i() { this.handlers = []; }
                        i.prototype.use = function (e, t) { return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1; }, i.prototype.eject = function (e) { this.handlers[e] && (this.handlers[e] = null); }, i.prototype.forEach = function (e) { n.forEach(this.handlers, function (t) { null !== t && e(t); }); }, e.exports = i;
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(4), i = r(233), o = r(88), a = r(46), s = r(234), f = r(235);
                        function c(e) { e.cancelToken && e.cancelToken.throwIfRequested(); }
                        e.exports = function (e) { return c(e), e.baseURL && !s(e.url) && (e.url = f(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) { delete e.headers[t]; }), (e.adapter || a.adapter)(e).then(function (t) { return c(e), t.data = i(t.data, t.headers, e.transformResponse), t; }, function (t) { return o(t) || (c(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t); }); };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(4);
                        e.exports = function (e, t, r) { return n.forEach(r, function (r) { e = r(e, t); }), e; };
                    }, function (e, t, r) {
                        "use strict";
                        e.exports = function (e) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e); };
                    }, function (e, t, r) {
                        "use strict";
                        e.exports = function (e, t) { return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e; };
                    }, function (e, t, r) {
                        "use strict";
                        var n = r(89);
                        function i(e) { if ("function" != typeof e)
                            throw new TypeError("executor must be a function."); var t; this.promise = new Promise(function (e) { t = e; }); var r = this; e(function (e) { r.reason || (r.reason = new n(e), t(r.reason)); }); }
                        i.prototype.throwIfRequested = function () { if (this.reason)
                            throw this.reason; }, i.source = function () { var e; return { token: new i(function (t) { e = t; }), cancel: e }; }, e.exports = i;
                    }, function (e, t, r) {
                        "use strict";
                        e.exports = function (e) { return function (t) { return e.apply(null, t); }; };
                    }, function (e, t) { e.exports = { Relay: /** @class */ (function () {
                            function Relay(e, t, r, n) {
                                this.blockchain = e, this.netID = t, this.data = r, this.configuration = n;
                            }
                            Relay.prototype.toJSON = function () { return { Blockchain: this.blockchain, NetID: this.netID, Data: this.data, DevID: this.configuration.devID }; };
                            Relay.prototype.isValid = function () { for (var e in this)
                                if (!this.hasOwnProperty(e) || "" == this[e])
                                    return !1; return !0; };
                            return Relay;
                        }()) }; }, function (e, t, r) { var n = r(45), i = r(47); e.exports = { Report: /** @class */ (function () {
                            function class_10(e, t, r) {
                                this.ip = e, this.message = t, this.configuration = r;
                            }
                            class_10.prototype.toJSON = function () { return { IP: this.ip, Message: this.message }; };
                            class_10.prototype.isValid = function () { for (var e in this)
                                if (!this.hasOwnProperty(e) || "" == this[e])
                                    return !1; return !0; };
                            class_10.prototype.send = function (e) {
                                return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_j) {
                                    switch (_j.label) {
                                        case 0:
                                            t = n.create({ baseURL: i.dispatchNodeURL, timeout: this.configuration.requestTimeOut, headers: { "Content-Type": "application/json" } });
                                            return [4 /*yield*/, t.post(i.reportPath, this.toJSON())];
                                        case 1:
                                            r = _j.sent();
                                            return [2 /*return*/, 200 == r.status && null != r.data ? e ? void e(null, r.data) : r.data : e ? void e(new Error("Failed to send report with error: " + r.data)) : new Error("Failed to send report with error: " + r.data)];
                                    }
                                }); });
                            };
                            return class_10;
                        }()) }; }, function (e, t) { e.exports = { Wallet: /** @class */ (function () {
                            function Wallet(e, t, r, n, i) {
                                this.address = e, this.privateKey = t, this.network = r, this.networkID = n, this.data = i;
                            }
                            return Wallet;
                        }()) }; }, function (e, t, r) { var n = r(84), i = n.Blockchain, o = n.Dispatch, a = n.Relay, s = n.Report;
                        var f = /** @class */ (function () {
                            function f(e, t, r, n) {
                                this.devID = e, this.blockchains = t, this.maxNodes = r || 5, this.nodes = [], this.requestTimeOut = n || 1e4, this.dispatch = null;
                            }
                            f.prototype.nodesIsEmpty = function () { return null == this.nodes || 0 == this.nodes.length; };
                            return f;
                        }());  e.exports = /** @class */ (function () {
                        function class_11(e) {
                            var t = [];
                            if (null == e.devID || null == e.networkName || null == e.netIDs)
                                return new Error("Invalid number of arguments");
                            if (Array.isArray(e.netIDs))
                                e.netIDs.forEach(function (r) { var n = new i(e.networkName, r); t.push(n.toJSON()); });
                            else {
                                var r = new i(e.networkName, e.netIDs);
                                t.push(r.toJSON());
                            }
                            this.configuration = new f(e.devID, t, e.maxNodes || 5, e.requestTimeOut || 1e4);
                        }
                        class_11.prototype.createRelay = function (e, t, r) { return new a(e, t, "string" == typeof r ? r : JSON.stringify(r), this.configuration); };
                        class_11.prototype.createReport = function (e, t) { return new s(e, t, this.configuration); };
                        class_11.prototype.getDispatch = function () { return null == this.dispatch && (this.dispatch = new o(this.configuration)), this.dispatch; };
                        class_11.prototype.getNode = function (e, t) {
                            return __awaiter(this, void 0, void 0, function () { var r, n, e_12; return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0:
                                        _j.trys.push([0, 3, , 4]);
                                        r = [];
                                        if (!this.configuration.nodesIsEmpty()) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.retrieveNodes()];
                                    case 1:
                                        n = _j.sent();
                                        if (n instanceof Error == 1)
                                            throw n;
                                        this.configuration.nodes = n;
                                        _j.label = 2;
                                    case 2: return [2 /*return*/, (this.configuration.nodes.forEach(function (n) { n.isEqual(e, t) && r.push(n); }), r.length <= 0 ? null : r[Math.floor(Math.random() * r.length)])];
                                    case 3:
                                        e_12 = _j.sent();
                                        return [2 /*return*/, null];
                                    case 4: return [2 /*return*/];
                                }
                            }); });
                        };
                        class_11.prototype.sendReport = function (e, t) {
                            return __awaiter(this, void 0, void 0, function () { var r, e_13; return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0:
                                        _j.trys.push([0, 2, , 3]);
                                        if (null == e)
                                            throw new Error("Report is null");
                                        if (!e.isValid())
                                            throw new Error("One or more Report properties are empty.");
                                        return [4 /*yield*/, e.send()];
                                    case 1:
                                        r = _j.sent();
                                        return [2 /*return*/, r instanceof Error == 0 ? t ? void t(null, r) : r : t ? void t(r) : r];
                                    case 2:
                                        e_13 = _j.sent();
                                        return [2 /*return*/, t ? void t(e_13) : e_13];
                                    case 3: return [2 /*return*/];
                                }
                            }); });
                        };
                        class_11.prototype.sendRelay = function (e, t) {
                            return __awaiter(this, void 0, void 0, function () { var r, n, e_14; return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0:
                                        _j.trys.push([0, 3, , 4]);
                                        if (null == e || null == e.data)
                                            return [2 /*return*/, t ? void t(new Error("Relay is null or data field is missing")) : new Error("Relay is null or data field is missing")];
                                        if (!e.isValid())
                                            return [2 /*return*/, t ? void t(new Error("Relay is missing a property, please verify all properties.")) : new Error("Relay is missing a property, please verify all properties.")];
                                        return [4 /*yield*/, this.getNode(e.netID, e.blockchain)];
                                    case 1:
                                        r = _j.sent();
                                        if (null == r)
                                            return [2 /*return*/, t ? void t(new Error("Node is empty.")) : new Error("Node is empty.")];
                                        return [4 /*yield*/, r.sendRelay(e)];
                                    case 2:
                                        n = _j.sent();
                                        return [2 /*return*/, n instanceof Error == 0 ? t ? void t(null, n) : n : t ? void t(n) : n];
                                    case 3:
                                        e_14 = _j.sent();
                                        return [2 /*return*/, t ? void t(new Error("Failed to send relay with error: " + e_14)) : new Error("Failed to send relay with error: " + e_14)];
                                    case 4: return [2 /*return*/];
                                }
                            }); });
                        };
                        class_11.prototype.retrieveNodes = function (e) {
                            return __awaiter(this, void 0, void 0, function () { var t, r, t_7; return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0:
                                        _j.trys.push([0, 2, , 3]);
                                        t = this.getDispatch();
                                        return [4 /*yield*/, t.retrieveServiceNodes()];
                                    case 1:
                                        r = _j.sent();
                                        return [2 /*return*/, r instanceof Error == 0 && 0 != r.length ? (this.configuration.nodes = r, e ? void e(null, r) : r) : e ? void e(new Error("Failed to retrieve a list of nodes."), null) : new Error("Failed to retrieve a list of nodes.")];
                                    case 2:
                                        t_7 = _j.sent();
                                        return [2 /*return*/, e ? void e(new Error("Failed to retrieve a list of nodes with error: " + t_7), null) : new Error("Failed to retrieve a list of nodes with error: " + t_7)];
                                    case 3: return [2 /*return*/];
                                }
                            }); });
                        };
                        return class_11;
                    }()); }, function (e, t, r) {
                        "use strict";
                        r.r(t);
                        var n = r(91), i = r.n(n), o = r(48), a = r.n(o), s = r(92), f = r.n(s), c = r(93), u = r.n(c), d = r(94), h = r.n(d), l = r(49), p = r.n(l), b = r(95), g = r.n(b), v = r(96), y = r.n(v);
                        function m(e, t) { var r = "string" == typeof e ? Object.assign({}, _[e]) : e; if ("object" != typeof r)
                            throw new Error("[Portis] illegal 'network' parameter. Read more about it here: https://docs.portis.io/#/configuration?id=network"); if (!r.nodeUrl)
                            throw new Error("[Portis] 'nodeUrl' is required. Read more about it here: https://docs.portis.io/#/configuration?id=network"); if (t && !r.gasRelayHubAddress)
                            throw new Error("[Portis] can't find default gas relay hub for " + e); return "string" != typeof e || t || delete r.gasRelayHubAddress, r; }
                        var _ = { mainnet: { nodeUrl: "https://mainnet.infura.io/v3/faa4639b090f46499f29d894da0551a0", chainId: "1", gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494" }, ropsten: { nodeUrl: "https://ropsten.infura.io/v3/faa4639b090f46499f29d894da0551a0", chainId: "3", gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494" }, rinkeby: { nodeUrl: "https://rinkeby.infura.io/v3/faa4639b090f46499f29d894da0551a0", chainId: "4", gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494" }, goerli: { nodeUrl: "https://goerli.prylabs.net", chainId: "5" }, ubiq: { nodeUrl: "https://rpc1.ubiqscan.io", chainId: "8" }, thundercoreTestnet: { nodeUrl: "https://testnet-rpc.thundercore.com:8544", chainId: "18" }, orchid: { nodeUrl: "https://public-node.rsk.co", chainId: "30" }, orchidTestnet: { nodeUrl: "https://public-node.testnet.rsk.co", chainId: "31" }, kovan: { nodeUrl: "https://kovan.infura.io/v3/faa4639b090f46499f29d894da0551a0", chainId: "42", gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494" }, classic: { nodeUrl: "https://ethereumclassic.network", chainId: "61" }, sokol: { nodeUrl: "https://sokol.poa.network", chainId: "77" }, core: { nodeUrl: "https://core.poa.network", chainId: "99" }, xdai: { nodeUrl: "https://dai.poa.network", chainId: "100", gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494" }, thundercore: { nodeUrl: "https://mainnet-rpc.thundercore.com", chainId: "108" }, fuse: { nodeUrl: "https://rpc.fusenet.io", chainId: "122" }, lightstreams: { nodeUrl: "https://node.mainnet.lightstreams.io", chainId: "163" }, maticAlpha: { nodeUrl: "https://alpha.ethereum.matic.network", chainId: "4626" }, maticTestnet: { nodeUrl: "https://testnet2.matic.network", chainId: "8995" } }, w = function (e, t, r, n) { return new (r || (r = Promise))(function (i, o) { function a(e) { try {
                            f(n.next(e));
                        }
                        catch (e) {
                            o(e);
                        } } function s(e) { try {
                            f(n.throw(e));
                        }
                        catch (e) {
                            o(e);
                        } } function f(e) { e.done ? i(e.value) : new r(function (t) { t(e.value); }).then(a, s); } f((n = n.apply(e, t || [])).next()); }); }, E = function (e, t) { var r, n, i, o, a = { label: 0, sent: function () { if (1 & i[0])
                                throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function s(o) { return function (s) { return function (o) { if (r)
                            throw new TypeError("Generator is already executing."); for (; a;)
                            try {
                                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4: return a.label++, { value: o[1], done: !1 };
                                    case 5:
                                        a.label++, n = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue;
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break;
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break;
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break;
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue;
                                }
                                o = t.call(e, a);
                            }
                            catch (e) {
                                o = [6, e], n = 0;
                            }
                            finally {
                                r = i = 0;
                            } if (5 & o[0])
                            throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, s]); }; } }, A = r(14), S = A.addHexPrefix, x = A.stripHexPrefix, M = A.BN, I = "0x5208";
                        function k(e, t) { return w(this, void 0, void 0, function () { var r, n, i, o, a; return E(this, function (s) { switch (s.label) {
                            case 0: return [4, e.getBlockByNumber("latest", !1)];
                            case 1: return r = s.sent(), [4, T(e, t, r.gasLimit)];
                            case 2:
                                if (n = s.sent(), i = n.safeGas, o = n.simpleSend, a = n.gasLimitSpecified, o || a)
                                    return [2, i];
                                s.label = 3;
                            case 3: return s.trys.push([3, 5, , 6]), [4, L(e, t, r.gasLimit, i)];
                            case 4: return [2, s.sent()];
                            case 5: return s.sent(), [2, i];
                            case 6: return [2];
                        } }); }); }
                        function T(e, t, r) { return w(this, void 0, void 0, function () { var n, i, o; return E(this, function (a) { switch (a.label) {
                            case 0: return Boolean(t.gas) ? [2, { safeGas: t.gas, simpleSend: !1, gasLimitSpecified: !0 }] : (n = t.to, Boolean(n) ? [4, e.getCode(n)] : [3, 2]);
                            case 1:
                                if (i = a.sent(), !i || "0x" === i || "0x0" === i) {
                                    if (t.data)
                                        throw new Error("Trying to call a function on a non-contract address");
                                    return [2, { safeGas: I, simpleSend: !0, gasLimitSpecified: !1 }];
                                }
                                a.label = 2;
                            case 2: return o = B(r), s = o, f = 20, c = new M(19), u = new M(f), [2, { safeGas: R(s.mul(c).div(u)), simpleSend: !1, gasLimitSpecified: !1 }];
                        } var s, f, c, u; }); }); }
                        function L(e, t, r, n) { return w(this, void 0, void 0, function () { var i; return E(this, function (o) { switch (o.label) {
                            case 0: return t.gas = n, i = S, [4, e.estimateGas(t)];
                            case 1: return [2, P(i.apply(void 0, [o.sent()]), r)];
                        } }); }); }
                        function P(e, t) { var r = B(e), n = B(t).muln(.9), i = r.muln(1.5); return r.gt(n) ? R(r) : i.lt(n) ? R(i) : R(n); }
                        function B(e) { return new M(x(e), 16); }
                        function R(e) { return S(e.toString(16)); }
                        var C = function () { function e(e) { this.provider = e; } return e.prototype.getBlockByNumber = function (e, t) { return this.sendAsync("eth_getBlockByNumber", e, t); }, e.prototype.getCode = function (e, t) { return void 0 === t && (t = "latest"), this.sendAsync("eth_getCode", e, t); }, e.prototype.estimateGas = function (e) { return this.sendAsync("eth_estimateGas", e); }, e.prototype.sendAsync = function (e) { for (var t = this, r = [], n = 1; n < arguments.length; n++)
                            r[n - 1] = arguments[n]; return new Promise(function (n, i) { t.provider.sendAsync({ id: 42, jsonrpc: "2.0", method: e, params: r }, function (e, t) { e ? i(e) : n(t.result); }); }); }, e; }(), N = !1;
                        function O() { return new Promise(function (e) { N ? e() : ["loaded", "interactive", "complete"].indexOf(document.readyState) > -1 ? (N = !0, e()) : window.addEventListener("load", function () { N = !0, e(); }, !1); }); }
                        var j = r(50), D = r.n(j), U = function (e, t, r, n) { return new (r || (r = Promise))(function (i, o) { function a(e) { try {
                            f(n.next(e));
                        }
                        catch (e) {
                            o(e);
                        } } function s(e) { try {
                            f(n.throw(e));
                        }
                        catch (e) {
                            o(e);
                        } } function f(e) { e.done ? i(e.value) : new r(function (t) { t(e.value); }).then(a, s); } f((n = n.apply(e, t || [])).next()); }); }, z = function (e, t) { var r, n, i, o, a = { label: 0, sent: function () { if (1 & i[0])
                                throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function s(o) { return function (s) { return function (o) { if (r)
                            throw new TypeError("Generator is already executing."); for (; a;)
                            try {
                                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done)
                                    return i;
                                switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4: return a.label++, { value: o[1], done: !1 };
                                    case 5:
                                        a.label++, n = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue;
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break;
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break;
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break;
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue;
                                }
                                o = t.call(e, a);
                            }
                            catch (e) {
                                o = [6, e], n = 0;
                            }
                            finally {
                                r = i = 0;
                            } if (5 & o[0])
                            throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, s]); }; } }, q = "2.0.0-beta.54", F = "https://widget.portis.io", H = ["email", "reputation"], K = document.createElement("iframe");
                        K.style.width = "0", K.style.height = "0", K.style.border = "none", K.style.position = "absolute", K.style.top = "-999px", K.style.left = "-999px", K.src = F, O().then(function () { document.body.appendChild(K); });
                        var V = function () { function e(e, t, r) { void 0 === r && (r = {}), this._widgetUrl = F, function () { var e = "localhost" === location.hostname || "127.0.0.1" === location.hostname, t = "https:" === location.protocol; if (!e && !t)
                            throw "[Portis] Access to the WebCrypto API is restricted to secure origins.\nIf this is a development environment please use http://localhost:" + location.port + " instead.\nOtherwise, please use an SSL certificate."; }(), this._valiadateParams(e, t, r), this.config = { dappId: e, network: m(t, r.gasRelay), version: q, scope: r.scope, registerPageByDefault: r.registerPageByDefault }, this.widget = this._initWidget(), this.provider = this._initProvider(r); } return e.prototype.changeNetwork = function (e, t) { var r = m(e, t); this.clearSubprovider(p.a), this.clearSubprovider(a.a), this.config.network = r; }, e.prototype.setDefaultEmail = function (e) { this.config.defaultEmail = e; }, e.prototype.showPortis = function () { return U(this, void 0, void 0, function () { return z(this, function (e) { switch (e.label) {
                            case 0: return [4, this.widget];
                            case 1: return [2, e.sent().communication.showPortis(this.config)];
                        } }); }); }, e.prototype.logout = function () { return U(this, void 0, void 0, function () { return z(this, function (e) { switch (e.label) {
                            case 0: return [4, this.widget];
                            case 1: return [2, e.sent().communication.logout()];
                        } }); }); }, e.prototype.onLogin = function (e) { this._onLoginCallback = e; }, e.prototype.onLogout = function (e) { this._onLogoutCallback = e; }, e.prototype.onActiveWalletChanged = function (e) { this._onActiveWalletChangedCallback = e; }, e.prototype.onError = function (e) { this._onErrorCallback = e; }, e.prototype.getExtendedPublicKey = function (e, t) { return void 0 === e && (e = "m/44'/60'/0'/0/0"), void 0 === t && (t = "Ethereum"), U(this, void 0, void 0, function () { return z(this, function (r) { switch (r.label) {
                            case 0: return [4, this.widget];
                            case 1: return [2, r.sent().communication.getExtendedPublicKey(e, t, this.config)];
                        } }); }); }, e.prototype.importWallet = function (e) { return U(this, void 0, void 0, function () { return z(this, function (t) { switch (t.label) {
                            case 0: return [4, this.widget];
                            case 1: return [2, t.sent().communication.importWallet(e, this.config)];
                        } }); }); }, e.prototype.isLoggedIn = function () { return U(this, void 0, void 0, function () { return z(this, function (e) { switch (e.label) {
                            case 0: return [4, this.widget];
                            case 1: return [2, e.sent().communication.isLoggedIn()];
                        } }); }); }, e.prototype.signBitcoinTransaction = function (e) { return U(this, void 0, void 0, function () { return z(this, function (t) { switch (t.label) {
                            case 0: return [4, this.widget];
                            case 1: return [2, t.sent().communication.signBitcoinTransaction(e, this.config)];
                        } }); }); }, e.prototype.showBitcoinWallet = function (e) { return void 0 === e && (e = "m/49'/0'/0'/0/0"), U(this, void 0, void 0, function () { return z(this, function (t) { switch (t.label) {
                            case 0: return [4, this.widget];
                            case 1: return [2, t.sent().communication.showBitcoinWallet(e, this.config)];
                        } }); }); }, e.prototype._valiadateParams = function (e, t, r) { if (!e)
                            throw new Error("[Portis] 'dappId' is required. Get your dappId here: https://dashboard.portis.io"); if (!t)
                            throw new Error("[Portis] 'network' is required. Read more about it here: https://docs.portis.io/#/configuration?id=network"); if (r.scope) {
                            if (!Array.isArray(r.scope))
                                throw new Error("[Portis] 'scope' must be an array. Read more about it here: https://docs.portis.io/#/configuration?id=scope");
                            if (r.scope.filter(function (e) { return H.indexOf(e) < 0; }).length > 0)
                                throw new Error("[Portis] invalid 'scope' parameter. Read more about it here: https://docs.portis.io/#/configuration?id=scope");
                        } if (void 0 !== r.registerPageByDefault && "boolean" != typeof r.registerPageByDefault)
                            throw new Error("[Portis] invalid 'registerPageByDefault' parameter, must be a boolean. Read more about it here: https://docs.portis.io/#/configuration?id=registerPageByDefault"); }, e.prototype._initWidget = function () { return U(this, void 0, void 0, function () { var e, t, r, n, i; return z(this, function (o) { switch (o.label) {
                            case 0: return [4, O()];
                            case 1: return o.sent(), document.body.contains(K) && document.body.removeChild(K), (e = document.createElement("style")).innerHTML = "\n.por_portis-container {\n  position: fixed;\n  width: 0px;\n  height: 0px;\n  top: 0px;\n  right: 0px;\n  z-index: 2147483647;\n}\n\n@media (max-width: 576px) {\n  .por_portis-container {\n    bottom: 0;\n    top: auto;\n  }\n}\n\n.por_portis-widget-frame {\n  position: fixed;\n  width: 375px;\n  height: 0;\n  top: 20px;\n  right: 20px;\n  box-shadow: 0 5px 40px rgba(0,0,0,.16);\n  border-radius: 8px;\n  overflow: hidden;\n  z-index: 2147483000;\n}\n\n@media (max-width: 576px) {\n  .por_portis-widget-frame {\n    bottom: 0;\n    top: auto;\n    width: 100%;\n    right: 0;\n    left: 0;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n}\n", (t = document.createElement("div")).className = "por_portis-container", (r = document.createElement("div")).id = "portis-container-" + Date.now(), r.className = "por_portis-widget-frame", t.appendChild(r), document.body.appendChild(t), document.head.appendChild(e), (n = y.a.connectToChild({ url: this._widgetUrl, appendTo: document.getElementById(r.id), methods: { setHeight: this._setHeight.bind(this), getWindowSize: this._getWindowSize.bind(this), onLogin: this._onLogin.bind(this), onLogout: this._onLogout.bind(this), onActiveWalletChanged: this._onActiveWalletChanged.bind(this), onError: this._onError.bind(this) } })).iframe.style.position = "absolute", n.iframe.style.height = "100%", n.iframe.style.width = "100%", n.iframe.style.border = "0 transparent", [4, n.promise];
                            case 2: return (i = o.sent()).retrieveSession(this.config), [2, { communication: i, iframe: n.iframe, widgetFrame: r }];
                        } }); }); }, e.prototype._initProvider = function (e) { var t = this, r = new i.a, n = new C(r); if (r.send = function (e, n) { if ("string" == typeof e)
                            return new Promise(function (t, i) { r.sendAsync({ jsonrpc: "2.0", id: 42, method: e, params: n || [] }, function (e, r) { e ? i(e) : t(r.result); }); }); if (!n) {
                            var i = null;
                            switch (e.method) {
                                case "eth_accounts":
                                case "eth_coinbase":
                                    i = t._selectedAddress ? [t._selectedAddress] : [];
                                    break;
                                case "net_version":
                                    i = t._network;
                                    break;
                                case "eth_uninstallFilter":
                                    r.sendAsync(e, function (e) { return e; }), i = !0;
                                    break;
                                default:
                                    var o = "The Portis Web3 object does not support synchronous methods like " + e.method + " without a callback parameter.";
                                    throw new Error(o);
                            }
                            return { id: e.id, jsonrpc: e.jsonrpc, result: i };
                        } r.sendAsync(e, n); }, r.addProvider(new f.a({ web3_clientVersion: "Portis/v" + this.config.version + "/javascript", net_listening: !0, eth_hashrate: "0x00", eth_mining: !1, eth_syncing: !0 })), r.addProvider(new a.a), r.addProvider(new g.a), r.addProvider(new u.a), r.addProvider(new p.a), r.addProvider({ setEngine: function (e) { return e; }, handleRequest: function (e, r, n) { return U(t, void 0, void 0, function () { return z(this, function (t) { return e.id || (e.id = 42), r(), [2]; }); }); } }), r.addProvider(new h.a({ getAccounts: function (e) { return U(t, void 0, void 0, function () { var t, r, n; return z(this, function (i) { switch (i.label) {
                                case 0: return [4, this.widget];
                                case 1: return [4, i.sent().communication.getAccounts(this.config)];
                                case 2: return t = i.sent(), r = t.error, n = t.result, !r && n && (this._selectedAddress = n[0]), e(r, n), [2];
                            } }); }); }, signTransaction: function (e, r) { return U(t, void 0, void 0, function () { var t, n, i; return z(this, function (o) { switch (o.label) {
                                case 0: return [4, this.widget];
                                case 1: return [4, o.sent().communication.signTransaction(e, this.config)];
                                case 2: return t = o.sent(), n = t.error, i = t.result, r(n, i), [2];
                            } }); }); }, signMessage: function (e, r) { return U(t, void 0, void 0, function () { var t, n, i, o, a; return z(this, function (s) { switch (s.label) {
                                case 0: return [4, this.widget];
                                case 1: return t = s.sent().communication, n = Object.assign({}, e, { messageStandard: "signMessage" }), [4, t.signMessage(n, this.config)];
                                case 2: return i = s.sent(), o = i.error, a = i.result, r(o, a), [2];
                            } }); }); }, signPersonalMessage: function (e, r) { return U(t, void 0, void 0, function () { var t, n, i, o, a; return z(this, function (s) { switch (s.label) {
                                case 0: return [4, this.widget];
                                case 1: return t = s.sent().communication, n = Object.assign({}, e, { messageStandard: "signPersonalMessage" }), [4, t.signMessage(n, this.config)];
                                case 2: return i = s.sent(), o = i.error, a = i.result, r(o, a), [2];
                            } }); }); }, signTypedMessage: function (e, r) { return U(t, void 0, void 0, function () { var t, n, i, o, a; return z(this, function (s) { switch (s.label) {
                                case 0: return [4, this.widget];
                                case 1: return t = s.sent().communication, n = Object.assign({}, e, { messageStandard: "signTypedMessage" }), [4, t.signMessage(n, this.config)];
                                case 2: return i = s.sent(), o = i.error, a = i.result, r(o, a), [2];
                            } }); }); }, signTypedMessageV3: function (e, r) { return U(t, void 0, void 0, function () { var t, n, i, o, a; return z(this, function (s) { switch (s.label) {
                                case 0: return [4, this.widget];
                                case 1: return t = s.sent().communication, n = Object.assign({}, e, { messageStandard: "signTypedMessageV3" }), [4, t.signMessage(n, this.config)];
                                case 2: return i = s.sent(), o = i.error, a = i.result, r(o, a), [2];
                            } }); }); }, estimateGas: function (e, r) { return U(t, void 0, void 0, function () { var t; return z(this, function (i) { switch (i.label) {
                                case 0: return [4, k(n, e)];
                                case 1: return t = i.sent(), r(null, t), [2];
                            } }); }); }, getGasPrice: function (e) { return U(t, void 0, void 0, function () { return z(this, function (t) { return e(null, ""), [2]; }); }); } })), e.pocketDevId) {
                            var o = new D.a.Pocket({ devID: e.pocketDevId, networkName: "ETH", netIDs: [this.config.network.chainId] });
                            r.addProvider({ setEngine: function (e) { return e; }, handleRequest: function (e, n, i) { return U(t, void 0, void 0, function () { var t, n, a; return z(this, function (s) { switch (s.label) {
                                    case 0: return [4, o.sendRelay(new D.a.Relay("ETH", this.config.network.chainId, JSON.stringify(e), o.configuration))];
                                    case 1:
                                        if ((t = s.sent()) instanceof Error || !t)
                                            a = t || new Error("Unknown error"), n = null;
                                        else
                                            try {
                                                n = JSON.parse(t).result, a = null;
                                            }
                                            catch (e) {
                                                n = null, a = e;
                                            }
                                        return "net_version" === e.method && (this._network = n, r.networkVersion = this._network), i(a, n), [2];
                                } }); }); } });
                        }
                        else
                            r.addProvider({ setEngine: function (e) { return e; }, handleRequest: function (e, n, i) { return U(t, void 0, void 0, function () { var t, n, o; return z(this, function (a) { switch (a.label) {
                                    case 0: return [4, this.widget];
                                    case 1: return [4, a.sent().communication.relay(e, this.config)];
                                    case 2: return t = a.sent(), n = t.error, o = t.result, "net_version" === e.method && (this._network = o, r.networkVersion = this._network), i(n, o), [2];
                                } }); }); } }); return r.enable = function () { return new Promise(function (e, t) { r.sendAsync({ method: "eth_accounts" }, function (r, n) { r ? t(r) : e(n.result); }); }); }, r.isConnected = function () { return !0; }, r.isPortis = !0, r.on("error", function (e) { e && e.message && e.message.includes("PollingBlockTracker") ? console.warn("If you see this warning constantly, there might be an error with your RPC node.") : console.error(e); }), r.start(), r; }, e.prototype._setHeight = function (e) { return U(this, void 0, void 0, function () { return z(this, function (t) { switch (t.label) {
                            case 0: return [4, this.widget];
                            case 1: return t.sent().widgetFrame.style.height = e + "px", [2];
                        } }); }); }, e.prototype._getWindowSize = function () { var e = document.getElementsByTagName("body")[0]; return { width: window.innerWidth || document.documentElement.clientWidth || e.clientWidth, height: window.innerHeight || document.documentElement.clientHeight || e.clientHeight }; }, e.prototype._onLogin = function (e, t, r) { this._onLoginCallback && this._onLoginCallback(e, t, r); }, e.prototype._onLogout = function () { this._selectedAddress = "", this._onLogoutCallback && this._onLogoutCallback(); }, e.prototype._onActiveWalletChanged = function (e) { this._onActiveWalletChangedCallback && this._onActiveWalletChangedCallback(e); }, e.prototype._onError = function (e) { this._onErrorCallback && this._onErrorCallback(e); }, e.prototype.clearSubprovider = function (e) { var t = this.provider._providers.find(function (t) { return t instanceof e; }); this.provider.removeProvider(t), this.provider.addProvider(new e); }, e; }();
                        t.default = V;
                    }]).default;
            });
            /***/ 
        })
    }]);
//# sourceMappingURL=portis-web3-es2015.js.map
//# sourceMappingURL=portis-web3-es5.js.map
//# sourceMappingURL=portis-web3-es5.js.map