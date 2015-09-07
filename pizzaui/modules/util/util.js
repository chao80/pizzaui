define(function(require, exports, module) {
	//常用工具集

	//js中的内容是否为空的判断,有一个参数为empty，则返回false
	exports.exist = function() {
		var obj;
		for (var i = 0; i < arguments.length; i++) {
			obj = arguments[i];
			if (typeof(obj) == 'undefined' || obj == null) { //如果为空或未定义返回否
				return false;
			}
			if (typeof(obj) == 'string' && obj.trim().length == 0) { //如果为空字符串
				return false;
			}
			if (typeof(obj) == 'object') { //如是是空对象或空数组， 数组内的对象为空不计算在内容
				var c = false;
				for (var key in obj) {
					c = true;
					break;
				}
				if (!c) {
					return false;
				}
			}
		}
		return true;
	};

	exports.encode = function() {
		native2ascii(JSON.stringify(json));
	};

	exports.decode = function(jsonstr) {
		return JSON.parse(jsonstr);
	};

	exports.md5 = function(e, t, n, r) {
		function i(e, t) {
			var n = (e & 65535) + (t & 65535),
				r = (e >> 16) + (t >> 16) + (n >> 16);
			return r << 16 | n & 65535
		}

		function s(e, t) {
			return e << t | e >>> 32 - t
		}

		function o(e, t, n, r, o, u) {
			return i(s(i(i(t, e), i(r, u)), o), n)
		}

		function u(e, t, n, r, i, s, u) {
			return o(t & n | ~t & r, e, t, i, s, u)
		}

		function a(e, t, n, r, i, s, u) {
			return o(t & r | n & ~r, e, t, i, s, u)
		}

		function f(e, t, n, r, i, s, u) {
			return o(t ^ n ^ r, e, t, i, s, u)
		}

		function l(e, t, n, r, i, s, u) {
			return o(n ^ (t | ~r), e, t, i, s, u)
		}

		function c(e, t) {
			e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
			var n = 1732584193,
				r = -271733879,
				s = -1732584194,
				o = 271733878;
			for (var c = 0; c < e.length; c += 16) {
				var h = n,
					p = r,
					d = s,
					v = o;
				n = u(n, r, s, o, e[c + 0], 7, -680876936), o = u(o, n, r, s, e[c + 1], 12, -389564586), s = u(s, o, n, r, e[c + 2], 17, 606105819), r = u(r, s, o, n, e[c + 3], 22, -1044525330), n = u(n, r, s, o, e[c + 4], 7, -176418897), o = u(o, n, r, s, e[c + 5], 12, 1200080426), s = u(s, o, n, r, e[c + 6], 17, -1473231341), r = u(r, s, o, n, e[c + 7], 22, -45705983), n = u(n, r, s, o, e[c + 8], 7, 1770035416), o = u(o, n, r, s, e[c + 9], 12, -1958414417), s = u(s, o, n, r, e[c + 10], 17, -42063), r = u(r, s, o, n, e[c + 11], 22, -1990404162), n = u(n, r, s, o, e[c + 12], 7, 1804603682), o = u(o, n, r, s, e[c + 13], 12, -40341101), s = u(s, o, n, r, e[c + 14], 17, -1502002290), r = u(r, s, o, n, e[c + 15], 22, 1236535329), n = a(n, r, s, o, e[c + 1], 5, -165796510), o = a(o, n, r, s, e[c + 6], 9, -1069501632), s = a(s, o, n, r, e[c + 11], 14, 643717713), r = a(r, s, o, n, e[c + 0], 20, -373897302), n = a(n, r, s, o, e[c + 5], 5, -701558691), o = a(o, n, r, s, e[c + 10], 9, 38016083), s = a(s, o, n, r, e[c + 15], 14, -660478335), r = a(r, s, o, n, e[c + 4], 20, -405537848), n = a(n, r, s, o, e[c + 9], 5, 568446438), o = a(o, n, r, s, e[c + 14], 9, -1019803690), s = a(s, o, n, r, e[c + 3], 14, -187363961), r = a(r, s, o, n, e[c + 8], 20, 1163531501), n = a(n, r, s, o, e[c + 13], 5, -1444681467), o = a(o, n, r, s, e[c + 2], 9, -51403784), s = a(s, o, n, r, e[c + 7], 14, 1735328473), r = a(r, s, o, n, e[c + 12], 20, -1926607734), n = f(n, r, s, o, e[c + 5], 4, -378558), o = f(o, n, r, s, e[c + 8], 11, -2022574463), s = f(s, o, n, r, e[c + 11], 16, 1839030562), r = f(r, s, o, n, e[c + 14], 23, -35309556), n = f(n, r, s, o, e[c + 1], 4, -1530992060), o = f(o, n, r, s, e[c + 4], 11, 1272893353), s = f(s, o, n, r, e[c + 7], 16, -155497632), r = f(r, s, o, n, e[c + 10], 23, -1094730640), n = f(n, r, s, o, e[c + 13], 4, 681279174), o = f(o, n, r, s, e[c + 0], 11, -358537222), s = f(s, o, n, r, e[c + 3], 16, -722521979), r = f(r, s, o, n, e[c + 6], 23, 76029189), n = f(n, r, s, o, e[c + 9], 4, -640364487), o = f(o, n, r, s, e[c + 12], 11, -421815835), s = f(s, o, n, r, e[c + 15], 16, 530742520), r = f(r, s, o, n, e[c + 2], 23, -995338651), n = l(n, r, s, o, e[c + 0], 6, -198630844), o = l(o, n, r, s, e[c + 7], 10, 1126891415), s = l(s, o, n, r, e[c + 14], 15, -1416354905), r = l(r, s, o, n, e[c + 5], 21, -57434055), n = l(n, r, s, o, e[c + 12], 6, 1700485571), o = l(o, n, r, s, e[c + 3], 10, -1894986606), s = l(s, o, n, r, e[c + 10], 15, -1051523), r = l(r, s, o, n, e[c + 1], 21, -2054922799), n = l(n, r, s, o, e[c + 8], 6, 1873313359), o = l(o, n, r, s, e[c + 15], 10, -30611744), s = l(s, o, n, r, e[c + 6], 15, -1560198380), r = l(r, s, o, n, e[c + 13], 21, 1309151649), n = l(n, r, s, o, e[c + 4], 6, -145523070), o = l(o, n, r, s, e[c + 11], 10, -1120210379), s = l(s, o, n, r, e[c + 2], 15, 718787259), r = l(r, s, o, n, e[c + 9], 21, -343485551), n = i(n, h), r = i(r, p), s = i(s, d), o = i(o, v)
			}
			return [n, r, s, o]
		}

		function h(e) {
			var t = [],
				n = (1 << r) - 1;
			for (var i = 0; i < e.length * r; i += r) t[i >> 5] |= (e.charCodeAt(i / r) & n) << i % 32;
			return t
		}

		function p(e) {
			var t = "",
				n = (1 << r) - 1;
			for (var i = 0; i < e.length * 32; i += r) t += String.fromCharCode(e[i >> 5] >>> i % 32 & n);
			return t
		}

		function d(e) {
			var t = n ? "0123456789ABCDEF" : "0123456789abcdef",
				r = "";
			for (var i = 0; i < e.length * 4; i++) r += t.charAt(e[i >> 2] >> i % 4 * 8 + 4 & 15) + t.charAt(e[i >> 2] >> i % 4 * 8 & 15);
			return r
		}
		return t = t || !1, n = n || !1, r = r || 8, t ? p(c(h(e), e.length * r)) : d(c(h(e), e.length * r))
	};

	exports.native2ascii = function(strNative) {
		var output = "";
		for (var i = 0; i < strNative.length; i++) {
			var c = strNative.charAt(i);
			var cc = strNative.charCodeAt(i);
			if (cc > 0xff)
				output += "\\u" + my.toHex(cc >> 8) + my.toHex(cc & 0xff);
			else
				output += c;
		}
		return output;
	};
});