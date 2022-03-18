
! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function (t) {
    "use strict";

    function m(t) {
        return "string" == typeof t
    }
    var b = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        N = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        A = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        r = /(^[#\.][a-z]|[a-y][a-z])/i,
        B = Math.PI / 180,
        D = Math.sin,
        E = Math.cos,
        k = Math.abs,
        Q = Math.sqrt,
        s = function _isNumber(t) {
            return "number" == typeof t
        },
        h = function _round(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        };

    function reverseSegment(t) {
        var e, n = 0;
        for (t.reverse(); n < t.length; n += 2) e = t[n], t[n] = t[n + 1], t[n + 1] = e;
        t.reversed = !t.reversed
    }
    var R = {
        rect: "rx,ry,x,y,width,height",
        circle: "r,cx,cy",
        ellipse: "rx,ry,cx,cy",
        line: "x1,x2,y1,y2"
    };

    function convertToPath(t, e) {
        var n, r, o, i, a, s, h, l, c, g, f, p, u, d, P, _, m, w, v, y, x, M, T = t.tagName.toLowerCase(),
            b = .552284749831;
        return "path" !== T && t.getBBox ? (s = function _createPath(t, e) {
            var n, r = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                o = [].slice.call(t.attributes),
                i = o.length;
            for (e = "," + e + ","; - 1 < --i;) n = o[i].nodeName.toLowerCase(), e.indexOf("," + n + ",") < 0 && r.setAttributeNS(null, n, o[i].nodeValue);
            return r
        }(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), M = function _attrToObj(t, e) {
            for (var n = e ? e.split(",") : [], r = {}, o = n.length; - 1 < --o;) r[n[o]] = +t.getAttribute(n[o]) || 0;
            return r
        }(t, R[T]), "rect" === T ? (i = M.rx, a = M.ry || i, r = M.x, o = M.y, g = M.width - 2 * i, f = M.height - 2 * a, n = i || a ? "M" + (_ = (d = (u = r + i) + g) + i) + "," + (w = o + a) + " V" + (v = w + f) + " C" + [_, y = v + a * b, P = d + i * b, x = v + a, d, x, d - (d - u) / 3, x, u + (d - u) / 3, x, u, x, p = r + i * (1 - b), x, r, y, r, v, r, v - (v - w) / 3, r, w + (v - w) / 3, r, w, r, m = o + a * (1 - b), p, o, u, o, u + (d - u) / 3, o, d - (d - u) / 3, o, d, o, P, o, _, m, _, w].join(",") + "z" : "M" + (r + g) + "," + o + " v" + f + " h" + -g + " v" + -f + " h" + g + "z") : "circle" === T || "ellipse" === T ? (l = "circle" === T ? (i = a = M.r) * b : (i = M.rx, (a = M.ry) * b), n = "M" + ((r = M.cx) + i) + "," + (o = M.cy) + " C" + [r + i, o + l, r + (h = i * b), o + a, r, o + a, r - h, o + a, r - i, o + l, r - i, o, r - i, o - l, r - h, o - a, r, o - a, r + h, o - a, r + i, o - l, r + i, o].join(",") + "z") : "line" === T ? n = "M" + M.x1 + "," + M.y1 + " L" + M.x2 + "," + M.y2 : "polyline" !== T && "polygon" !== T || (n = "M" + (r = (c = (t.getAttribute("points") + "").match(N) || []).shift()) + "," + (o = c.shift()) + " L" + c.join(","), "polygon" === T && (n += "," + r + "," + o + "z")), s.setAttribute("d", rawPathToString(s._gsRawPath = stringToRawPath(n))), e && t.parentNode && (t.parentNode.insertBefore(s, t), t.parentNode.removeChild(t)), s) : t
    }

    function arcToSegment(t, e, n, r, o, i, a, s, h) {
        if (t !== s || e !== h) {
            n = k(n), r = k(r);
            var l = o % 360 * B,
                c = E(l),
