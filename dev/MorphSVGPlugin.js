
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
                g = D(l),
                f = Math.PI,
                p = 2 * f,
                u = (t - s) / 2,
                d = (e - h) / 2,
                P = c * u + g * d,
                _ = -g * u + c * d,
                m = P * P,
                w = _ * _,
                v = m / (n * n) + w / (r * r);
            1 < v && (n = Q(v) * n, r = Q(v) * r);
            var y = n * n,
                x = r * r,
                M = (y * x - y * w - x * m) / (y * w + x * m);
            M < 0 && (M = 0);
            var T = (i === a ? -1 : 1) * Q(M),
                b = n * _ / r * T,
                S = -r * P / n * T,
                N = c * b - g * S + (t + s) / 2,
                z = g * b + c * S + (e + h) / 2,
                A = (P - b) / n,
                R = (_ - S) / r,
                O = (-P - b) / n,
                C = (-_ - S) / r,
                j = A * A + R * R,
                Y = (R < 0 ? -1 : 1) * Math.acos(A / Q(j)),
                V = (A * C - R * O < 0 ? -1 : 1) * Math.acos((A * O + R * C) / Q(j * (O * O + C * C)));
            isNaN(V) && (V = f), !a && 0 < V ? V -= p : a && V < 0 && (V += p), Y %= p, V %= p;
            var I, F = Math.ceil(k(V) / (p / 4)),
                U = [],
                X = V / F,
                L = 4 / 3 * D(X / 2) / (1 + E(X / 2)),
                G = c * n,
                W = g * n,
                q = g * -r,
                H = c * r;
            for (I = 0; I < F; I++) P = E(o = Y + I * X), _ = D(o), A = E(o += X), R = D(o), U.push(P - L * _, _ + L * P, A + L * R, R - L * A, A, R);
            for (I = 0; I < U.length; I += 2) P = U[I], _ = U[I + 1], U[I] = P * G + _ * q + N, U[I + 1] = P * W + _ * H + z;
            return U[I - 2] = s, U[I - 1] = h, U
        }
    }

    function stringToRawPath(t) {
        function yc(t, e, n, r) {
            c = (n - t) / 3, g = (r - e) / 3, s.push(t + c, e + g, n - c, r - g, n, r)
        }
        var e, n, r, o, i, a, s, h, l, c, g, f, p, u, d, P = (t + "").replace(A, function (t) {
            var e = +t;
            return e < 1e-4 && -1e-4 < e ? 0 : e
        }).match(b) || [],
            _ = [],
            m = 0,
            w = 0,
            v = P.length,
            y = 0,
            x = "ERROR: malformed path: " + t;
        if (!t || !isNaN(P[0]) || isNaN(P[1])) return console.log(x), _;
        for (e = 0; e < v; e++)
            if (p = i, isNaN(P[e]) ? a = (i = P[e].toUpperCase()) !== P[e] : e--, r = +P[e + 1], o = +P[e + 2], a && (r += m, o += w), e || (h = r, l = o), "M" === i) s && (s.length < 8 ? --_.length : y += s.length), m = h = r, w = l = o, s = [r, o], _.push(s), e += 2, i = "L";
            else if ("C" === i) a || (m = w = 0), (s = s || [0, 0]).push(r, o, m + 1 * P[e + 3], w + 1 * P[e + 4], m += 1 * P[e + 5], w += 1 * P[e + 6]), e += 6;
            else if ("S" === i) c = m, g = w, "C" !== p && "S" !== p || (c += m - s[s.length - 4], g += w - s[s.length - 3]), a || (m = w = 0), s.push(c, g, r, o, m += 1 * P[e + 3], w += 1 * P[e + 4]), e += 4;
            else if ("Q" === i) c = m + 2 / 3 * (r - m), g = w + 2 / 3 * (o - w), a || (m = w = 0), m += 1 * P[e + 3], w += 1 * P[e + 4], s.push(c, g, m + 2 / 3 * (r - m), w + 2 / 3 * (o - w), m, w), e += 4;
            else if ("T" === i) c = m - s[s.length - 4], g = w - s[s.length - 3], s.push(m + c, w + g, r + 2 / 3 * (m + 1.5 * c - r), o + 2 / 3 * (w + 1.5 * g - o), m = r, w = o), e += 2;
            else if ("H" === i) yc(m, w, m = r, w), e += 1;
            else if ("V" === i) yc(m, w, m, w = r + (a ? w - m : 0)), e += 1;
            else if ("L" === i || "Z" === i) "Z" === i && (r = h, o = l, s.closed = !0), ("L" === i || .5 < k(m - r) || .5 < k(w - o)) && (yc(m, w, r, o), "L" === i && (e += 2)), m = r, w = o;
            else if ("A" === i) {
                if (u = P[e + 4], d = P[e + 5], c = P[e + 6], g = P[e + 7], n = 7, 1 < u.length && (u.length < 3 ? (g = c, c = d, n--) : (g = d, c = u.substr(2), n -= 2), d = u.charAt(1), u = u.charAt(0)), f = arcToSegment(m, w, +P[e + 1], +P[e + 2], +P[e + 3], +u, +d, (a ? m : 0) + 1 * c, (a ? w : 0) + 1 * g), e += n, f)
                    for (n = 0; n < f.length; n++) s.push(f[n]);
                m = s[s.length - 2], w = s[s.length - 1]
            } else console.log(x);
        return (e = s.length) < 6 ? (_.pop(), e = 0) : s[0] === s[e - 2] && s[1] === s[e - 1] && (s.closed = !0), _.totalPoints = y + e, _
    }

    function rawPathToString(t) {
        s(t[0]) && (t = [t]);
        var e, n, r, o, i = "",
            a = t.length;
        for (n = 0; n < a; n++) {
            for (o = t[n], i += "M" + h(o[0]) + "," + h(o[1]) + " C", e = o.length, r = 2; r < e; r++) i += h(o[r++]) + "," + h(o[r++]) + " " + h(o[r++]) + "," + h(o[r++]) + " " + h(o[r++]) + "," + h(o[r]) + " ";
            o.closed && (i += "z")
        }
        return i
    }

    function y() {
        return o || "undefined" != typeof window && (o = window.gsap) && o.registerPlugin && o
    }

    function z(t) {
        return "function" == typeof t
    }

    function M(t) {
        return console && console.warn(t)
    }

    function P() {
        return String.fromCharCode.apply(null, arguments)
    }

    function S(t) {
        var e, n = t.length,
            r = 0,
            o = 0;
        for (e = 0; e < n; e++) r += t[e++], o += t[e];
        return [r / (n / 2), o / (n / 2)]
    }

    function T(t) {
        var e, n, r, o = t.length,
            i = t[0],
            a = i,
            s = t[1],
            h = s;
        for (r = 6; r < o; r += 6) i < (e = t[r]) ? i = e : e < a && (a = e), s < (n = t[r + 1]) ? s = n : n < h && (h = n);
        return t.centerX = (i + a) / 2, t.centerY = (s + h) / 2, t.size = (i - a) * (s - h)
    }

    function U(t, e) {
        void 0 === e && (e = 3);
        for (var n, r, o, i, a, s, h, l, c, g, f, p, u, d, P, _, m = t.length, w = t[0][0], v = w, y = t[0][1], x = y, M = 1 / e; - 1 < --m;)
            for (n = (a = t[m]).length, i = 6; i < n; i += 6)
                for (c = a[i], g = a[i + 1], f = a[i + 2] - c, d = a[i + 3] - g, p = a[i + 4] - c, P = a[i + 5] - g, u = a[i + 6] - c, _ = a[i + 7] - g, s = e; - 1 < --s;) w < (r = ((h = M * s) * h * u + 3 * (l = 1 - h) * (h * p + l * f)) * h + c) ? w = r : r < v && (v = r), y < (o = (h * h * _ + 3 * l * (h * P + l * d)) * h + g) ? y = o : o < x && (x = o);
        return t.centerX = (w + v) / 2, t.centerY = (y + x) / 2, t.left = v, t.width = w - v, t.top = x, t.height = y - x, t.size = (w - v) * (y - x)
    }

    function V(t, e) {
        return e.length - t.length
    }

    function W(t, e) {
        var n = t.size || T(t),
            r = e.size || T(e);
        return Math.abs(r - n) < (n + r) / 20 ? e.centerX - t.centerX || e.centerY - t.centerY : r - n
    }

    function X(t, e) {
