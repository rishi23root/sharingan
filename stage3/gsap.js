/*!
 * GSAP 3.9.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";
    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype),
        (t.prototype.constructor = t).__proto__ = e
    }
    function _assertThisInitialized(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function o(t) {
        return "string" == typeof t
    }
    function p(t) {
        return "function" == typeof t
    }
    function q(t) {
        return "number" == typeof t
    }
    function r(t) {
        return void 0 === t
    }
    function s(t) {
        return "object" == typeof t
    }
    function t(t) {
        return !1 !== t
    }
    function u() {
        return "undefined" != typeof window
    }
    function v(t) {
        return p(t) || o(t)
    }
    function M(t) {
        return (h = mt(t, ot)) && oe
    }
    function N(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }
    function O(t, e) {
        return !e && console.warn(t)
    }
    function P(t, e) {
        return t && (ot[t] = e) && h && (h[t] = e) || ot
    }
    function Q() {
        return 0
    }
    function $(t) {
        var e, r, i = t[0];
        if (s(i) || p(i) || (t = [t]),
        !(e = (i._gsap || {}).harness)) {
            for (r = ct.length; r-- && !ct[r].targetTest(i); )
                ;
            e = ct[r]
        }
        for (r = t.length; r--; )
            t[r] && (t[r]._gsap || (t[r]._gsap = new Lt(t[r],e))) || t.splice(r, 1);
        return t
    }
    function _(t) {
        return t._gsap || $(xt(t))[0]._gsap
    }
    function aa(t, e, i) {
        return (i = t[e]) && p(i) ? t[e]() : r(i) && t.getAttribute && t.getAttribute(e) || i
    }
    function ba(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }
    function ca(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }
    function da(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }
    function ea(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
            ;
        return i < r
    }
    function fa() {
        var t, e, r = ht.length, i = ht.slice(0);
        for (lt = {},
        t = ht.length = 0; t < r; t++)
            (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }
    function ga(t, e, r, i) {
        ht.length && fa(),
        t.render(e, r, i),
        ht.length && fa()
    }
    function ha(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(at).length < 2 ? e : o(t) ? t.trim() : t
    }
    function ia(t) {
        return t
    }
    function ja(t, e) {
        for (var r in e)
            r in t || (t[r] = e[r]);
        return t
    }
    function ma(t, e) {
        for (var r in e)
            "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = s(e[r]) ? ma(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }
    function na(t, e) {
        var r, i = {};
        for (r in t)
            r in e || (i[r] = t[r]);
        return i
    }
    function oa(e) {
        var r = e.parent || I
          , i = e.keyframes ? function _setKeyframeDefaults(i) {
            return function(t, e) {
                for (var r in e)
                    r in t || "duration" === r && i || "ease" === r || (t[r] = e[r])
            }
        }(W(e.keyframes)) : ja;
        if (t(e.inherit))
            for (; r; )
                i(e, r.vars.defaults),
                r = r.parent || r._dp;
        return e
    }
    function ra(t, e, r, i) {
        void 0 === r && (r = "_first"),
        void 0 === i && (i = "_last");
        var n = e._prev
          , a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a),
        a ? a._prev = n : t[i] === e && (t[i] = n),
        e._next = e._prev = e.parent = null
    }
    function sa(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t),
        t._act = 0
    }
    function ta(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; )
                r._dirty = 1,
                r = r.parent;
        return t
    }
    function wa(t) {
        return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }
    function ya(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }
    function za(t) {
        return t._end = da(t._start + (t._tDur / Math.abs(t._ts || t._rts || X) || 0))
    }
    function Aa(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = da(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
        za(t),
        r._dirty || ta(r, t)),
        t
    }
    function Ba(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = ya(t.rawTime(), e),
        (!e._dur || Tt(0, e.totalDuration(), r) - e._tTime > X) && e.render(r, !0)),
        ta(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp; )
                    0 <= r.rawTime() && r.totalTime(r._tTime),
                    r = r._dp;
            t._zTime = -X
        }
    }
    function Ca(t, e, r, i) {
        return e.parent && sa(e),
        e._start = da((q(r) ? r : r || t !== I ? bt(t, r, e) : t._time) + e._delay),
        e._end = da(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        function _addLinkedListItem(t, e, r, i, n) {
            void 0 === r && (r = "_first"),
            void 0 === i && (i = "_last");
            var a, s = t[i];
            if (n)
                for (a = e[n]; s && s[n] > a; )
                    s = s._prev;
            s ? (e._next = s._next,
            s._next = e) : (e._next = t[r],
            t[r] = e),
            e._next ? e._next._prev = e : t[i] = e,
            e._prev = s,
            e.parent = e._dp = t
        }(t, e, "_first", "_last", t._sort ? "_start" : 0),
        vt(e) || (t._recent = e),
        i || Ba(t, e),
        t
    }
    function Da(t, e) {
        return (ot.ScrollTrigger || N("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }
    function Ea(t, e, r, i) {
        return jt(t, e),
        t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== St.frame ? (ht.push(t),
        t._lazy = [e, i],
        1) : void 0 : 1
    }
    function Ja(t, e, r, i) {
        var n = t._repeat
          , a = da(e) || 0
          , s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur),
        t._dur = a,
        t._tDur = n ? n < 0 ? 1e10 : da(a * (n + 1) + t._rDelay * n) : a,
        0 < s && !i ? Aa(t, t._tTime = t._tDur * s) : t.parent && za(t),
        r || ta(t.parent, t),
        t
    }
    function Ka(t) {
        return t instanceof Nt ? ta(t) : Ja(t, t._dur)
    }
    function Na(e, r, i) {
        var n, a, s = q(r[1]), o = (s ? 2 : 1) + (e < 2 ? 0 : 1), u = r[o];
        if (s && (u.duration = r[1]),
        u.parent = i,
        e) {
            for (n = u,
            a = i; a && !("immediateRender"in n); )
                n = a.vars.defaults || {},
                a = t(a.vars.inherit) && a.parent;
            u.immediateRender = t(n.immediateRender),
            e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1]
        }
        return new Jt(r[0],u,r[1 + o])
    }
    function Oa(t, e) {
        return t || 0 === t ? e(t) : e
    }
    function Qa(t, e) {
        return o(t) && (e = st.exec(t)) ? t.substr(e.index + e[0].length) : ""
    }
    function Ta(t, e) {
        return t && s(t) && "length"in t && (!e && !t.length || t.length - 1 in t && s(t[0])) && !t.nodeType && t !== i
    }
    function Xa(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }
    function Ya(t) {
        if (p(t))
            return t;
        var c = s(t) ? t : {
            each: t
        }
          , _ = Rt(c.ease)
          , m = c.from || 0
          , g = parseFloat(c.base) || 0
          , v = {}
          , e = 0 < m && m < 1
          , y = isNaN(m) || e
          , b = c.axis
          , T = m
          , w = m;
        return o(m) ? T = w = {
            center: .5,
            edges: .5,
            end: 1
        }[m] || 0 : !e && y && (T = m[0],
        w = m[1]),
        function(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d = (r || c).length, p = v[d];
            if (!p) {
                if (!(f = "auto" === c.grid ? 0 : (c.grid || [1, j])[1])) {
                    for (h = -j; h < (h = r[f++].getBoundingClientRect().left) && f < d; )
                        ;
                    f--
                }
                for (p = v[d] = [],
                i = y ? Math.min(f, d) * T - .5 : m % f,
                n = f === j ? 0 : y ? d * w / f - .5 : m / f | 0,
                l = j,
                u = h = 0; u < d; u++)
                    a = u % f - i,
                    s = n - (u / f | 0),
                    p[u] = o = b ? Math.abs("y" === b ? s : a) : G(a * a + s * s),
                    h < o && (h = o),
                    o < l && (l = o);
                "random" === m && Xa(p),
                p.max = h - l,
                p.min = l,
                p.v = d = (parseFloat(c.amount) || parseFloat(c.each) * (d < f ? d - 1 : b ? "y" === b ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1),
                p.b = d < 0 ? g - d : g,
                p.u = Qa(c.amount || c.each) || 0,
                _ = _ && d < 0 ? Bt(_) : _
            }
            return d = (p[t] - p.min) / p.max || 0,
            da(p.b + (_ ? _(d) : d) * p.v) + p.u
        }
    }
    function Za(r) {
        var i = Math.pow(10, ((r + "").split(".")[1] || "").length);
        return function(t) {
            var e = Math.round(parseFloat(t) / r) * r * i;
            return (e - e % 1) / i + (q(t) ? 0 : Qa(t))
        }
    }
    function $a(u, t) {
        var h, l, e = W(u);
        return !e && s(u) && (h = e = u.radius || j,
        u.values ? (u = xt(u.values),
        (l = !q(u[0])) && (h *= h)) : u = Za(u.increment)),
        Oa(t, e ? p(u) ? function(t) {
            return l = u(t),
            Math.abs(l - t) <= h ? l : t
        }
        : function(t) {
            for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = j, s = 0, o = u.length; o--; )
                (e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e,
                s = o);
            return s = !h || a <= h ? u[s] : t,
            l || s === t || q(t) ? s : s + Qa(t)
        }
        : Za(u))
    }
    function _a(t, e, r, i) {
        return Oa(W(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return W(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }
    function db(e, r, t) {
        return Oa(t, function(t) {
            return e[~~r(t)]
        })
    }
    function gb(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
            i = t.indexOf(")", e),
            n = "[" === t.charAt(e + 7),
            r = t.substr(e + 7, i - e - 7).match(n ? at : tt),
            s += t.substr(a, e - a) + _a(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5),
            a = i + 1;
        return s + t.substr(a, t.length - a)
    }
    function jb(t, e, r) {
        var i, n, a, s = t.labels, o = j;
        for (i in s)
            (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i,
            o = n);
        return a
    }
    function lb(t) {
        return sa(t),
        t.scrollTrigger && t.scrollTrigger.kill(!1),
        t.progress() < 1 && Mt(t, "onInterrupt"),
        t
    }
    function qb(t, e, r) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * kt + .5 | 0
    }
    function rb(t, e, r) {
        var i, n, a, s, o, u, h, l, f, d, p = t ? q(t) ? [t >> 16, t >> 8 & kt, t & kt] : 0 : Ct.black;
        if (!p) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            Ct[t])
                p = Ct[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                9 === t.length)
                    return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & kt, p & kt, parseInt(t.substr(7), 16) / 255];
                p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & kt, t & kt]
            } else if ("hsl" === t.substr(0, 3))
                if (p = d = t.match(tt),
                e) {
                    if (~t.indexOf("="))
                        return p = t.match(et),
                        r && p.length < 4 && (p[3] = 1),
                        p
                } else
                    s = +p[0] % 360 / 360,
                    o = p[1] / 100,
                    i = 2 * (u = p[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o),
                    3 < p.length && (p[3] *= 1),
                    p[0] = qb(s + 1 / 3, i, n),
                    p[1] = qb(s, i, n),
                    p[2] = qb(s - 1 / 3, i, n);
            else
                p = t.match(tt) || Ct.transparent;
            p = p.map(Number)
        }
        return e && !d && (i = p[0] / kt,
        n = p[1] / kt,
        a = p[2] / kt,
        u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2,
        h === l ? s = o = 0 : (f = h - l,
        o = .5 < u ? f / (2 - h - l) : f / (h + l),
        s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4,
        s *= 60),
        p[0] = ~~(s + .5),
        p[1] = ~~(100 * o + .5),
        p[2] = ~~(100 * u + .5)),
        r && p.length < 4 && (p[3] = 1),
        p
    }
    function sb(t) {
        var r = []
          , i = []
          , n = -1;
        return t.split(Pt).forEach(function(t) {
            var e = t.match(rt) || [];
            r.push.apply(r, e),
            i.push(n += e.length + 1)
        }),
        r.c = i,
        r
    }
    function tb(t, e, r) {
        var i, n, a, s, o = "", u = (t + o).match(Pt), h = e ? "hsla(" : "rgba(", l = 0;
        if (!u)
            return t;
        if (u = u.map(function(t) {
            return (t = rb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }),
        r && (a = sb(t),
        (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(Pt, "1").split(rt)).length - 1; l < s; l++)
                o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(Pt)).length - 1; l < s; l++)
                o += n[l] + u[l];
        return o + n[s]
    }
    function wb(t) {
        var e, r = t.join(" ");
        if (Pt.lastIndex = 0,
        Pt.test(r))
            return e = At.test(r),
            t[1] = tb(t[1], e),
            t[0] = tb(t[0], e, sb(t[1])),
            !0
    }
    function Fb(t) {
        var e = (t + "").split("(")
          , r = zt[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++)
                r = a[o],
                e = o !== u - 1 ? r.lastIndexOf(",") : r.length,
                i = r.substr(0, e),
                n[s] = isNaN(i) ? i.replace(Et, "").trim() : +i,
                s = r.substr(e + 1).trim();
            return n
        }(e[1])] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1
              , r = t.indexOf(")")
              , i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(ha)) : zt._CE && Ft.test(t) ? zt._CE("", t) : r
    }
    function Hb(t, e) {
        for (var r, i = t._first; i; )
            i instanceof Nt ? Hb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Hb(i.timeline, e) : (r = i._ease,
            i._ease = i._yEase,
            i._yEase = r,
            i._yoyo = e)),
            i = i._next
    }
    function Jb(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t)
        }
        ),
        void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        }
        );
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return ba(t, function(t) {
            for (var e in zt[t] = ot[t] = a,
            zt[n = t.toLowerCase()] = r,
            a)
                zt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = zt[t + "." + e] = a[e]
        }),
        a
    }
    function Kb(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }
    function Lb(r, t, e) {
        function Sl(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * K((t - a) * n) + 1
        }
        var i = 1 <= t ? t : 1
          , n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1)
          , a = n / U * (Math.asin(1 / i) || 0)
          , s = "out" === r ? Sl : "in" === r ? function(t) {
            return 1 - Sl(1 - t)
        }
        : Kb(Sl);
        return n = U / n,
        s.config = function(t, e) {
            return Lb(r, t, e)
        }
        ,
        s
    }
    function Mb(e, r) {
        function $l(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? $l : "in" === e ? function(t) {
            return 1 - $l(1 - t)
        }
        : Kb($l);
        return t.config = function(t) {
            return Mb(e, t)
        }
        ,
        t
    }
    var R, I, i, n, a, h, l, f, d, c, m, g, y, b, T, w, x, k, C, A, S, D, z, F, E, B, Y = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, L = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, j = 1e8, X = 1 / j, U = 2 * Math.PI, V = U / 4, J = 0, G = Math.sqrt, Z = Math.cos, K = Math.sin, H = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , W = Array.isArray, tt = /(?:-?\.?\d|\.)+/gi, et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, nt = /[+-]=-?[.\d]+/, at = /[^,'"\[\]\s]+/gi, st = /[\d.+\-=]+(?:e[-+]\d*)*/i, ot = {}, ut = {}, ht = [], lt = {}, ft = {}, dt = {}, pt = 30, ct = [], _t = "", mt = function _merge(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }, gt = function _animationCycle(t, e) {
        var r = Math.floor(t /= e);
        return t && r === t ? r - 1 : r
    }, vt = function _isFromOrFromStart(t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e
    }, yt = {
        _start: 0,
        endTime: Q,
        totalDuration: Q
    }, bt = function _parsePosition(t, e, r) {
        var i, n, a, s = t.labels, u = t._recent || yt, h = t.duration() >= j ? u.endTime(!1) : t._dur;
        return o(e) && (isNaN(e) || e in s) ? (n = e.charAt(0),
        a = "%" === e.substr(-1),
        i = e.indexOf("="),
        "<" === n || ">" === n ? (0 <= i && (e = e.replace(/=/, "")),
        ("<" === n ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (a ? (i < 0 ? u : r).totalDuration() / 100 : 1)) : i < 0 ? (e in s || (s[e] = h),
        s[e]) : (n = parseFloat(e.charAt(i - 1) + e.substr(i + 1)),
        a && r && (n = n / 100 * (W(r) ? r[0] : r).totalDuration()),
        1 < i ? _parsePosition(t, e.substr(0, i - 1), r) + n : h + n)) : null == e ? h : +e
    }, Tt = function _clamp(t, e, r) {
        return r < t ? t : e < r ? e : r
    }, wt = [].slice, xt = function toArray(t, e, r) {
        return !o(t) || r || !n && Dt() ? W(t) ? function _flatten(t, e, r) {
            return void 0 === r && (r = []),
            t.forEach(function(t) {
                return o(t) && !e || Ta(t, 1) ? r.push.apply(r, xt(t)) : r.push(t)
            }) || r
        }(t, r) : Ta(t) ? wt.call(t, 0) : t ? [t] : [] : wt.call((e || a).querySelectorAll(t), 0)
    }, Ot = function mapRange(e, t, r, i, n) {
        var a = t - e
          , s = i - r;
        return Oa(n, function(t) {
            return r + ((t - e) / a * s || 0)
        })
    }, Mt = function _callback(t, e, r) {
        var i, n, a = t.vars, s = a[e];
        if (s)
            return i = a[e + "Params"],
            n = a.callbackScope || t,
            r && ht.length && fa(),
            i ? s.apply(n, i) : s.call(n)
    }, kt = 255, Ct = {
        aqua: [0, kt, kt],
        lime: [0, kt, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, kt],
        navy: [0, 0, 128],
        white: [kt, kt, kt],
        olive: [128, 128, 0],
        yellow: [kt, kt, 0],
        orange: [kt, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [kt, 0, 0],
        pink: [kt, 192, 203],
        cyan: [0, kt, kt],
        transparent: [kt, kt, kt, 0]
    }, Pt = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in Ct)
            e += "|" + t + "\\b";
        return new RegExp(e + ")","gi")
    }(), At = /hsl[a]?\(/, St = (x = Date.now,
    k = 500,
    C = 33,
    A = x(),
    S = A,
