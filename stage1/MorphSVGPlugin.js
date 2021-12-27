
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
        var n, r, o = t.slice(0),
            i = t.length,
            a = i - 2;
        for (e |= 0, n = 0; n < i; n++) r = (n + e) % a, t[n++] = o[r], t[n] = o[1 + r]
    }

    function Y(t, e, n, r, o) {
        var i, a, s, h, l = t.length,
            c = 0,
            g = l - 2;
        for (n *= 6, a = 0; a < l; a += 6) h = t[i = (a + n) % g] - (e[a] - r), s = t[1 + i] - (e[a + 1] - o), c += w(s * s + h * h);
        return c
    }

    function Z(t, e, n) {
        var r, o, i, a = t.length,
            s = S(t),
            h = S(e),
            l = h[0] - s[0],
            c = h[1] - s[1],
            g = Y(t, e, 0, l, c),
            f = 0;
        for (i = 6; i < a; i += 6)(o = Y(t, e, i / 6, l, c)) < g && (g = o, f = i);
        if (n)
            for (reverseSegment(r = t.slice(0)), i = 6; i < a; i += 6)(o = Y(r, e, i / 6, l, c)) < g && (g = o, f = -i);
        return f / 6
    }

    function $(t, e, n) {
        for (var r, o, i, a, s, h, l = t.length, c = 1e20, g = 0, f = 0; - 1 < --l;)
            for (h = (r = t[l]).length, s = 0; s < h; s += 6) o = r[s] - e, i = r[s + 1] - n, (a = w(o * o + i * i)) < c && (c = a, g = r[s], f = r[s + 1]);
        return [g, f]
    }

    function _(t, e, n, r, o, i) {
        var a, s, h, l, c = e.length,
            g = 0,
            f = Math.min(t.size || T(t), e[n].size || T(e[n])) * r,
            p = 1e20,
            u = t.centerX + o,
            d = t.centerY + i;
        for (a = n; a < c && !((e[a].size || T(e[a])) < f); a++) s = e[a].centerX - u, h = e[a].centerY - d, (l = w(s * s + h * h)) < p && (g = a, p = l);
        return l = e[g], e.splice(g, 1), l
    }

    function aa(t, e) {
        var n, r, o, i, a, s, h, l, c, g, f, p, u, d, P = 0,
            _ = t.length,
            m = e / ((_ - 2) / 6);
        for (u = 2; u < _; u += 6)
            for (P += m; .999999 < P;) n = t[u - 2], r = t[u - 1], o = t[u], i = t[u + 1], a = t[u + 2], s = t[u + 3], h = t[u + 4], l = t[u + 5], c = n + (o - n) * (d = 1 / ((Math.floor(P) || 1) + 1)), c += ((f = o + (a - o) * d) - c) * d, f += (a + (h - a) * d - f) * d, g = r + (i - r) * d, g += ((p = i + (s - i) * d) - g) * d, p += (s + (l - s) * d - p) * d, t.splice(u, 4, n + (o - n) * d, r + (i - r) * d, c, g, c + (f - c) * d, g + (p - g) * d, f, p, a + (h - a) * d, s + (l - s) * d), u += 6, _ += 6, P--;
        return t
    }

    function ba(t, e, n, r, o) {
        var i, a, s, h, l, c, g, f = e.length - t.length,
            p = 0 < f ? e : t,
            u = 0 < f ? t : e,
            d = 0,
            P = "complexity" === r ? V : W,
            m = "position" === r ? 0 : "number" == typeof r ? r : .8,
            w = u.length,
            v = "object" == typeof n && n.push ? n.slice(0) : [n],
            y = "reverse" === v[0] || v[0] < 0,
            x = "log" === n;
        if (u[0]) {
            if (1 < p.length && (t.sort(P), e.sort(P), p.size || U(p), u.size || U(u), c = p.centerX - u.centerX, g = p.centerY - u.centerY, P === W))
                for (w = 0; w < u.length; w++) p.splice(w, 0, _(u[w], p, w, m, c, g));
            if (f)
                for (f < 0 && (f = -f), p[0].length > u[0].length && aa(u[0], (p[0].length - u[0].length) / 6 | 0), w = u.length; d < f;) p[w].size || T(p[w]), h = (s = $(u, p[w].centerX, p[w].centerY))[0], l = s[1], u[w++] = [h, l, h, l, h, l, h, l], u.totalPoints += 8, d++;
            for (w = 0; w < t.length; w++) i = e[w], a = t[w], (f = i.length - a.length) < 0 ? aa(i, -f / 6 | 0) : 0 < f && aa(a, f / 6 | 0), y && !1 !== o && !a.reversed && reverseSegment(a), (n = v[w] || 0 === v[w] ? v[w] : "auto") && (a.closed || Math.abs(a[0] - a[a.length - 2]) < .5 && Math.abs(a[1] - a[a.length - 1]) < .5 ? "auto" === n || "log" === n ? (v[w] = n = Z(a, i, !w || !1 === o), n < 0 && (y = !0, reverseSegment(a), n = -n), X(a, 6 * n)) : "reverse" !== n && (w && n < 0 && reverseSegment(a), X(a, 6 * (n < 0 ? -n : n))) : !y && ("auto" === n && Math.abs(i[0] - a[0]) + Math.abs(i[1] - a[1]) + Math.abs(i[i.length - 2] - a[a.length - 2]) + Math.abs(i[i.length - 1] - a[a.length - 1]) > Math.abs(i[0] - a[a.length - 2]) + Math.abs(i[1] - a[a.length - 1]) + Math.abs(i[i.length - 2] - a[0]) + Math.abs(i[i.length - 1] - a[1]) || n % 2) ? (reverseSegment(a), v[w] = -1, y = !0) : "auto" === n ? v[w] = 0 : "reverse" === n && (v[w] = -1), a.closed !== i.closed && (a.closed = i.closed = !1));
            return x && M("shapeIndex:[" + v.join(",") + "]"), t.shapeIndex = v
        }
    }

    function ca(t, e, n, r, o) {
        var i = stringToRawPath(t[0]),
            a = stringToRawPath(t[1]);
        ba(i, a, e || 0 === e ? e : "auto", n, o) && (t[0] = rawPathToString(i), t[1] = rawPathToString(a), "log" !== r && !0 !== r || M('precompile:["' + t[0] + '","' + t[1] + '"]'))
    }

    function ea(t, e) {
        var n, r, o, i, a, s, h, l = 0,
            c = parseFloat(t[0]),
            g = parseFloat(t[1]),
            f = c + "," + g + " ";
        for (n = .5 * e / (.5 * (o = t.length) - 1), r = 0; r < o - 2; r += 2) {
            if (l += n, s = parseFloat(t[r + 2]), h = parseFloat(t[r + 3]), .999999 < l)
                for (a = 1 / (Math.floor(l) + 1), i = 1; .999999 < l;) f += (c + (s - c) * a * i).toFixed(2) + "," + (g + (h - g) * a * i).toFixed(2) + " ", l--, i++;
            f += s + "," + h + " ", c = s, g = h
        }
        return f
    }

    function fa(t) {
        var e = t[0].match(L) || [],
            n = t[1].match(L) || [],
            r = n.length - e.length;
        0 < r ? t[0] = ea(e, r) : t[1] = ea(n, -r)
    }

    function ga(e) {
        return isNaN(e) ? fa : function (t) {
            fa(t), t[1] = function _offsetPoints(t, e) {
                if (!e) return t;
                var n, r, o, i = t.match(L) || [],
                    a = i.length,
                    s = "";
                for (n = "reverse" === e ? (r = a - 1, -2) : (r = (2 * (parseInt(e, 10) || 0) + 1 + 100 * a) % a, 2), o = 0; o < a; o += 2) s += i[r - 1] + "," + i[r] + " ", r = (r + n) % a;
                return s
            }(t[1], parseInt(e, 10))
        }
    }

    function ia(t, e) {
        for (var n, r, o, i, a, s, h, l, c, g, f, p, u = t.length, d = .2 * (e || 1); - 1 < --u;) {
            for (f = (r = t[u]).isSmooth = r.isSmooth || [0, 0, 0, 0], p = r.smoothData = r.smoothData || [0, 0, 0, 0], f.length = 4, l = r.length - 2, h = 6; h < l; h += 6) o = r[h] - r[h - 2], i = r[h + 1] - r[h - 1], a = r[h + 2] - r[h], s = r[h + 3] - r[h + 1], c = v(i, o), g = v(s, a), (n = Math.abs(c - g) < d) && (p[h - 2] = c, p[h + 2] = g, p[h - 1] = w(o * o + i * i), p[h + 3] = w(a * a + s * s)), f.push(n, n, 0, 0, n, n);
            r[l] === r[0] && r[1 + l] === r[1] && (o = r[0] - r[l - 2], i = r[1] - r[l - 1], a = r[2] - r[0], s = r[3] - r[1], c = v(i, o), g = v(s, a), Math.abs(c - g) < d && (p[l - 2] = c, p[2] = g, p[l - 1] = w(o * o + i * i), p[3] = w(a * a + s * s), f[l - 2] = f[l - 1] = !0))
        }
        return t
    }

    function ja(t) {
        var e = t.trim().split(" ");
        return {
            x: (~t.indexOf("left") ? 0 : ~t.indexOf("right") ? 100 : isNaN(parseFloat(e[0])) ? 50 : parseFloat(e[0])) / 100,
            y: (~t.indexOf("top") ? 0 : ~t.indexOf("bottom") ? 100 : isNaN(parseFloat(e[1])) ? 50 : parseFloat(e[1])) / 100
        }
    }

    function ma(t, e, n, r) {
        var o, i, a = this._origin,
            s = this._eOrigin,
            h = t[n] - a.x,
            l = t[n + 1] - a.y,
            c = w(h * h + l * l),
            g = v(l, h);
        return h = e[n] - s.x, l = e[n + 1] - s.y, i = function _shortAngle(t) {
            return t !== t % f ? t + (t < 0 ? p : -p) : t
        }(o = v(l, h) - g), !r && I && Math.abs(i + I.ca) < u && (r = I), this._anchorPT = I = {
            _next: this._anchorPT,
            t: t,
            sa: g,
            ca: r && i * r.ca < 0 && Math.abs(i) > d ? o : i,
            sl: c,
            cl: w(h * h + l * l) - c,
            i: n
        }
    }

    function na(t) {
        o = y(), n = n || o && o.plugins.morphSVG, o && n ? (j = o.utils.toArray, n.prototype._tweenRotation = ma, F = 1) : t && M("Please gsap.registerPlugin(MorphSVGPlugin)")
    }
