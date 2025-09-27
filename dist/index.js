var Ee = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function Fe() {
  if (Le) return ie;
  Le = 1;
  var y = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function C(A, w, R) {
    var O = null;
    if (R !== void 0 && (O = "" + R), w.key !== void 0 && (O = "" + w.key), "key" in w) {
      R = {};
      for (var j in w)
        j !== "key" && (R[j] = w[j]);
    } else R = w;
    return w = R.ref, {
      $$typeof: y,
      type: A,
      key: O,
      ref: w !== void 0 ? w : null,
      props: R
    };
  }
  return ie.Fragment = i, ie.jsx = C, ie.jsxs = C, ie;
}
var ce = {}, he = { exports: {} }, d = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Qe() {
  if (Ye) return d;
  Ye = 1;
  var y = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), O = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), D = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), S = Symbol.iterator;
  function P(t) {
    return t === null || typeof t != "object" ? null : (t = S && t[S] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var z = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Q = Object.assign, G = {};
  function I(t, n, s) {
    this.props = t, this.context = n, this.refs = G, this.updater = s || z;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(t, n) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, t, n, "setState");
  }, I.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function B() {
  }
  B.prototype = I.prototype;
  function ee(t, n, s) {
    this.props = t, this.context = n, this.refs = G, this.updater = s || z;
  }
  var L = ee.prototype = new B();
  L.constructor = ee, Q(L, I.prototype), L.isPureReactComponent = !0;
  var oe = Array.isArray, g = { H: null, A: null, T: null, S: null, V: null }, te = Object.prototype.hasOwnProperty;
  function re(t, n, s, a, f, h) {
    return s = h.ref, {
      $$typeof: y,
      type: t,
      key: n,
      ref: s !== void 0 ? s : null,
      props: h
    };
  }
  function x(t, n) {
    return re(
      t.type,
      n,
      void 0,
      void 0,
      void 0,
      t.props
    );
  }
  function F(t) {
    return typeof t == "object" && t !== null && t.$$typeof === y;
  }
  function se(t) {
    var n = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(s) {
      return n[s];
    });
  }
  var T = /\/+/g;
  function V(t, n) {
    return typeof t == "object" && t !== null && t.key != null ? se("" + t.key) : n.toString(36);
  }
  function X() {
  }
  function U(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(X, X) : (t.status = "pending", t.then(
          function(n) {
            t.status === "pending" && (t.status = "fulfilled", t.value = n);
          },
          function(n) {
            t.status === "pending" && (t.status = "rejected", t.reason = n);
          }
        )), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function N(t, n, s, a, f) {
    var h = typeof t;
    (h === "undefined" || h === "boolean") && (t = null);
    var l = !1;
    if (t === null) l = !0;
    else
      switch (h) {
        case "bigint":
        case "string":
        case "number":
          l = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case y:
            case i:
              l = !0;
              break;
            case k:
              return l = t._init, N(
                l(t._payload),
                n,
                s,
                a,
                f
              );
          }
      }
    if (l)
      return f = f(t), l = a === "" ? "." + V(t, 0) : a, oe(f) ? (s = "", l != null && (s = l.replace(T, "$&/") + "/"), N(f, n, s, "", function($) {
        return $;
      })) : f != null && (F(f) && (f = x(
        f,
        s + (f.key == null || t && t.key === f.key ? "" : ("" + f.key).replace(
          T,
          "$&/"
        ) + "/") + l
      )), n.push(f)), 1;
    l = 0;
    var M = a === "" ? "." : a + ":";
    if (oe(t))
      for (var p = 0; p < t.length; p++)
        a = t[p], h = M + V(a, p), l += N(
          a,
          n,
          s,
          h,
          f
        );
    else if (p = P(t), typeof p == "function")
      for (t = p.call(t), p = 0; !(a = t.next()).done; )
        a = a.value, h = M + V(a, p++), l += N(
          a,
          n,
          s,
          h,
          f
        );
    else if (h === "object") {
      if (typeof t.then == "function")
        return N(
          U(t),
          n,
          s,
          a,
          f
        );
      throw n = String(t), Error(
        "Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return l;
  }
  function H(t, n, s) {
    if (t == null) return t;
    var a = [], f = 0;
    return N(t, a, "", "", function(h) {
      return n.call(s, h, f++);
    }), a;
  }
  function Z(t) {
    if (t._status === -1) {
      var n = t._result;
      n = n(), n.then(
        function(s) {
          (t._status === 0 || t._status === -1) && (t._status = 1, t._result = s);
        },
        function(s) {
          (t._status === 0 || t._status === -1) && (t._status = 2, t._result = s);
        }
      ), t._status === -1 && (t._status = 0, t._result = n);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var K = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function ne() {
  }
  return d.Children = {
    map: H,
    forEach: function(t, n, s) {
      H(
        t,
        function() {
          n.apply(this, arguments);
        },
        s
      );
    },
    count: function(t) {
      var n = 0;
      return H(t, function() {
        n++;
      }), n;
    },
    toArray: function(t) {
      return H(t, function(n) {
        return n;
      }) || [];
    },
    only: function(t) {
      if (!F(t))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return t;
    }
  }, d.Component = I, d.Fragment = C, d.Profiler = w, d.PureComponent = ee, d.StrictMode = A, d.Suspense = W, d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = g, d.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return g.H.useMemoCache(t);
    }
  }, d.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  }, d.cloneElement = function(t, n, s) {
    if (t == null)
      throw Error(
        "The argument must be a React element, but you passed " + t + "."
      );
    var a = Q({}, t.props), f = t.key, h = void 0;
    if (n != null)
      for (l in n.ref !== void 0 && (h = void 0), n.key !== void 0 && (f = "" + n.key), n)
        !te.call(n, l) || l === "key" || l === "__self" || l === "__source" || l === "ref" && n.ref === void 0 || (a[l] = n[l]);
    var l = arguments.length - 2;
    if (l === 1) a.children = s;
    else if (1 < l) {
      for (var M = Array(l), p = 0; p < l; p++)
        M[p] = arguments[p + 2];
      a.children = M;
    }
    return re(t.type, f, void 0, void 0, h, a);
  }, d.createContext = function(t) {
    return t = {
      $$typeof: O,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: R,
      _context: t
    }, t;
  }, d.createElement = function(t, n, s) {
    var a, f = {}, h = null;
    if (n != null)
      for (a in n.key !== void 0 && (h = "" + n.key), n)
        te.call(n, a) && a !== "key" && a !== "__self" && a !== "__source" && (f[a] = n[a]);
    var l = arguments.length - 2;
    if (l === 1) f.children = s;
    else if (1 < l) {
      for (var M = Array(l), p = 0; p < l; p++)
        M[p] = arguments[p + 2];
      f.children = M;
    }
    if (t && t.defaultProps)
      for (a in l = t.defaultProps, l)
        f[a] === void 0 && (f[a] = l[a]);
    return re(t, h, void 0, void 0, null, f);
  }, d.createRef = function() {
    return { current: null };
  }, d.forwardRef = function(t) {
    return { $$typeof: j, render: t };
  }, d.isValidElement = F, d.lazy = function(t) {
    return {
      $$typeof: k,
      _payload: { _status: -1, _result: t },
      _init: Z
    };
  }, d.memo = function(t, n) {
    return {
      $$typeof: D,
      type: t,
      compare: n === void 0 ? null : n
    };
  }, d.startTransition = function(t) {
    var n = g.T, s = {};
    g.T = s;
    try {
      var a = t(), f = g.S;
      f !== null && f(s, a), typeof a == "object" && a !== null && typeof a.then == "function" && a.then(ne, K);
    } catch (h) {
      K(h);
    } finally {
      g.T = n;
    }
  }, d.unstable_useCacheRefresh = function() {
    return g.H.useCacheRefresh();
  }, d.use = function(t) {
    return g.H.use(t);
  }, d.useActionState = function(t, n, s) {
    return g.H.useActionState(t, n, s);
  }, d.useCallback = function(t, n) {
    return g.H.useCallback(t, n);
  }, d.useContext = function(t) {
    return g.H.useContext(t);
  }, d.useDebugValue = function() {
  }, d.useDeferredValue = function(t, n) {
    return g.H.useDeferredValue(t, n);
  }, d.useEffect = function(t, n, s) {
    var a = g.H;
    if (typeof s == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return a.useEffect(t, n);
  }, d.useId = function() {
    return g.H.useId();
  }, d.useImperativeHandle = function(t, n, s) {
    return g.H.useImperativeHandle(t, n, s);
  }, d.useInsertionEffect = function(t, n) {
    return g.H.useInsertionEffect(t, n);
  }, d.useLayoutEffect = function(t, n) {
    return g.H.useLayoutEffect(t, n);
  }, d.useMemo = function(t, n) {
    return g.H.useMemo(t, n);
  }, d.useOptimistic = function(t, n) {
    return g.H.useOptimistic(t, n);
  }, d.useReducer = function(t, n, s) {
    return g.H.useReducer(t, n, s);
  }, d.useRef = function(t) {
    return g.H.useRef(t);
  }, d.useState = function(t) {
    return g.H.useState(t);
  }, d.useSyncExternalStore = function(t, n, s) {
    return g.H.useSyncExternalStore(
      t,
      n,
      s
    );
  }, d.useTransition = function() {
    return g.H.useTransition();
  }, d.version = "19.1.1", d;
}
var fe = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
fe.exports;
var De;
function Xe() {
  return De || (De = 1, (function(y, i) {
    process.env.NODE_ENV !== "production" && (function() {
      function C(e, r) {
        Object.defineProperty(R.prototype, e, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              r[0],
              r[1]
            );
          }
        });
      }
      function A(e) {
        return e === null || typeof e != "object" ? null : (e = le && e[le] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function w(e, r) {
        e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
        var o = e + "." + r;
        be[o] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          r,
          e
        ), be[o] = !0);
      }
      function R(e, r, o) {
        this.props = e, this.context = r, this.refs = ge, this.updater = o || we;
      }
      function O() {
      }
      function j(e, r, o) {
        this.props = e, this.context = r, this.refs = ge, this.updater = o || we;
      }
      function W(e) {
        return "" + e;
      }
      function D(e) {
        try {
          W(e);
          var r = !1;
        } catch {
          r = !0;
        }
        if (r) {
          r = console;
          var o = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return o.call(
            r,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            u
          ), W(e);
        }
      }
      function k(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === qe ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case t:
            return "Fragment";
          case s:
            return "Profiler";
          case n:
            return "StrictMode";
          case l:
            return "Suspense";
          case M:
            return "SuspenseList";
          case ae:
            return "Activity";
        }
        if (typeof e == "object")
          switch (typeof e.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), e.$$typeof) {
            case ne:
              return "Portal";
            case f:
              return (e.displayName || "Context") + ".Provider";
            case a:
              return (e._context.displayName || "Context") + ".Consumer";
            case h:
              var r = e.render;
              return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case p:
              return r = e.displayName || null, r !== null ? r : k(e.type) || "Memo";
            case $:
              r = e._payload, e = e._init;
              try {
                return k(e(r));
              } catch {
              }
          }
        return null;
      }
      function S(e) {
        if (e === t) return "<>";
        if (typeof e == "object" && e !== null && e.$$typeof === $)
          return "<...>";
        try {
          var r = k(e);
          return r ? "<" + r + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function P() {
        var e = v.A;
        return e === null ? null : e.getOwner();
      }
      function z() {
        return Error("react-stack-top-frame");
      }
      function Q(e) {
        if (pe.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning) return !1;
        }
        return e.key !== void 0;
      }
      function G(e, r) {
        function o() {
          Ce || (Ce = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            r
          ));
        }
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
      function I() {
        var e = k(this.type);
        return Ae[e] || (Ae[e] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), e = this.props.ref, e !== void 0 ? e : null;
      }
      function B(e, r, o, u, c, E, m, b) {
        return o = E.ref, e = {
          $$typeof: K,
          type: e,
          key: r,
          props: E,
          _owner: c
        }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
          enumerable: !1,
          get: I
        }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(e, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(e, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: m
        }), Object.defineProperty(e, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: b
        }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
      }
      function ee(e, r) {
        return r = B(
          e.type,
          r,
          void 0,
          void 0,
          e._owner,
          e.props,
          e._debugStack,
          e._debugTask
        ), e._store && (r._store.validated = e._store.validated), r;
      }
      function L(e) {
        return typeof e == "object" && e !== null && e.$$typeof === K;
      }
      function oe(e) {
        var r = { "=": "=0", ":": "=2" };
        return "$" + e.replace(/[=:]/g, function(o) {
          return r[o];
        });
      }
      function g(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (D(e.key), oe("" + e.key)) : r.toString(36);
      }
      function te() {
      }
      function re(e) {
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
          default:
            switch (typeof e.status == "string" ? e.then(te, te) : (e.status = "pending", e.then(
              function(r) {
                e.status === "pending" && (e.status = "fulfilled", e.value = r);
              },
              function(r) {
                e.status === "pending" && (e.status = "rejected", e.reason = r);
              }
            )), e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
            }
        }
        throw e;
      }
      function x(e, r, o, u, c) {
        var E = typeof e;
        (E === "undefined" || E === "boolean") && (e = null);
        var m = !1;
        if (e === null) m = !0;
        else
          switch (E) {
            case "bigint":
            case "string":
            case "number":
              m = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case K:
                case ne:
                  m = !0;
                  break;
                case $:
                  return m = e._init, x(
                    m(e._payload),
                    r,
                    o,
                    u,
                    c
                  );
              }
          }
        if (m) {
          m = e, c = c(m);
          var b = u === "" ? "." + g(m, 0) : u;
          return Oe(c) ? (o = "", b != null && (o = b.replace(Pe, "$&/") + "/"), x(c, r, o, "", function(J) {
            return J;
          })) : c != null && (L(c) && (c.key != null && (m && m.key === c.key || D(c.key)), o = ee(
            c,
            o + (c.key == null || m && m.key === c.key ? "" : ("" + c.key).replace(
              Pe,
              "$&/"
            ) + "/") + b
          ), u !== "" && m != null && L(m) && m.key == null && m._store && !m._store.validated && (o._store.validated = 2), c = o), r.push(c)), 1;
        }
        if (m = 0, b = u === "" ? "." : u + ":", Oe(e))
          for (var _ = 0; _ < e.length; _++)
            u = e[_], E = b + g(u, _), m += x(
              u,
              r,
              o,
              E,
              c
            );
        else if (_ = A(e), typeof _ == "function")
          for (_ === e.entries && (je || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), je = !0), e = _.call(e), _ = 0; !(u = e.next()).done; )
            u = u.value, E = b + g(u, _++), m += x(
              u,
              r,
              o,
              E,
              c
            );
        else if (E === "object") {
          if (typeof e.then == "function")
            return x(
              re(e),
              r,
              o,
              u,
              c
            );
          throw r = String(e), Error(
            "Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return m;
      }
      function F(e, r, o) {
        if (e == null) return e;
        var u = [], c = 0;
        return x(e, u, "", "", function(E) {
          return r.call(o, E, c++);
        }), u;
      }
      function se(e) {
        if (e._status === -1) {
          var r = e._result;
          r = r(), r.then(
            function(o) {
              (e._status === 0 || e._status === -1) && (e._status = 1, e._result = o);
            },
            function(o) {
              (e._status === 0 || e._status === -1) && (e._status = 2, e._result = o);
            }
          ), e._status === -1 && (e._status = 0, e._result = r);
        }
        if (e._status === 1)
          return r = e._result, r === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            r
          ), "default" in r || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            r
          ), r.default;
        throw e._result;
      }
      function T() {
        var e = v.H;
        return e === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), e;
      }
      function V() {
      }
      function X(e) {
        if (me === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7);
            me = (y && y[r]).call(
              y,
              "timers"
            ).setImmediate;
          } catch {
            me = function(u) {
              Me === !1 && (Me = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var c = new MessageChannel();
              c.port1.onmessage = u, c.port2.postMessage(void 0);
            };
          }
        return me(e);
      }
      function U(e) {
        return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
      }
      function N(e, r) {
        r !== _e - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), _e = r;
      }
      function H(e, r, o) {
        var u = v.actQueue;
        if (u !== null)
          if (u.length !== 0)
            try {
              Z(u), X(function() {
                return H(e, r, o);
              });
              return;
            } catch (c) {
              v.thrownErrors.push(c);
            }
          else v.actQueue = null;
        0 < v.thrownErrors.length ? (u = U(v.thrownErrors), v.thrownErrors.length = 0, o(u)) : r(e);
      }
      function Z(e) {
        if (!Re) {
          Re = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var o = e[r];
              do {
                v.didUsePromise = !1;
                var u = o(!1);
                if (u !== null) {
                  if (v.didUsePromise) {
                    e[r] = o, e.splice(0, r);
                    return;
                  }
                  o = u;
                } else break;
              } while (!0);
            }
            e.length = 0;
          } catch (c) {
            e.splice(0, r + 1), v.thrownErrors.push(c);
          } finally {
            Re = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var K = Symbol.for("react.transitional.element"), ne = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), f = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), ae = Symbol.for("react.activity"), le = Symbol.iterator, be = {}, we = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(e) {
          w(e, "forceUpdate");
        },
        enqueueReplaceState: function(e) {
          w(e, "replaceState");
        },
        enqueueSetState: function(e) {
          w(e, "setState");
        }
      }, Te = Object.assign, ge = {};
      Object.freeze(ge), R.prototype.isReactComponent = {}, R.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, r, "setState");
      }, R.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      var Y = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, de;
      for (de in Y)
        Y.hasOwnProperty(de) && C(de, Y[de]);
      O.prototype = R.prototype, Y = j.prototype = new O(), Y.constructor = j, Te(Y, R.prototype), Y.isPureReactComponent = !0;
      var Oe = Array.isArray, qe = Symbol.for("react.client.reference"), v = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, pe = Object.prototype.hasOwnProperty, ke = console.createTask ? console.createTask : function() {
        return null;
      };
      Y = {
        react_stack_bottom_frame: function(e) {
          return e();
        }
      };
      var Ce, Se, Ae = {}, We = Y.react_stack_bottom_frame.bind(
        Y,
        z
      )(), ze = ke(S(z)), je = !1, Pe = /\/+/g, Ne = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var r = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(r)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, Me = !1, me = null, _e = 0, ve = !1, Re = !1, $e = typeof queueMicrotask == "function" ? function(e) {
        queueMicrotask(function() {
          return queueMicrotask(e);
        });
      } : X;
      Y = Object.freeze({
        __proto__: null,
        c: function(e) {
          return T().useMemoCache(e);
        }
      }), i.Children = {
        map: F,
        forEach: function(e, r, o) {
          F(
            e,
            function() {
              r.apply(this, arguments);
            },
            o
          );
        },
        count: function(e) {
          var r = 0;
          return F(e, function() {
            r++;
          }), r;
        },
        toArray: function(e) {
          return F(e, function(r) {
            return r;
          }) || [];
        },
        only: function(e) {
          if (!L(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        }
      }, i.Component = R, i.Fragment = t, i.Profiler = s, i.PureComponent = j, i.StrictMode = n, i.Suspense = l, i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v, i.__COMPILER_RUNTIME = Y, i.act = function(e) {
        var r = v.actQueue, o = _e;
        _e++;
        var u = v.actQueue = r !== null ? r : [], c = !1;
        try {
          var E = e();
        } catch (_) {
          v.thrownErrors.push(_);
        }
        if (0 < v.thrownErrors.length)
          throw N(r, o), e = U(v.thrownErrors), v.thrownErrors.length = 0, e;
        if (E !== null && typeof E == "object" && typeof E.then == "function") {
          var m = E;
          return $e(function() {
            c || ve || (ve = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(_, J) {
              c = !0, m.then(
                function(ue) {
                  if (N(r, o), o === 0) {
                    try {
                      Z(u), X(function() {
                        return H(
                          ue,
                          _,
                          J
                        );
                      });
                    } catch (Be) {
                      v.thrownErrors.push(Be);
                    }
                    if (0 < v.thrownErrors.length) {
                      var Ge = U(
                        v.thrownErrors
                      );
                      v.thrownErrors.length = 0, J(Ge);
                    }
                  } else _(ue);
                },
                function(ue) {
                  N(r, o), 0 < v.thrownErrors.length && (ue = U(
                    v.thrownErrors
                  ), v.thrownErrors.length = 0), J(ue);
                }
              );
            }
          };
        }
        var b = E;
        if (N(r, o), o === 0 && (Z(u), u.length !== 0 && $e(function() {
          c || ve || (ve = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), v.actQueue = null), 0 < v.thrownErrors.length)
          throw e = U(v.thrownErrors), v.thrownErrors.length = 0, e;
        return {
          then: function(_, J) {
            c = !0, o === 0 ? (v.actQueue = u, X(function() {
              return H(
                b,
                _,
                J
              );
            })) : _(b);
          }
        };
      }, i.cache = function(e) {
        return function() {
          return e.apply(null, arguments);
        };
      }, i.captureOwnerStack = function() {
        var e = v.getCurrentStack;
        return e === null ? null : e();
      }, i.cloneElement = function(e, r, o) {
        if (e == null)
          throw Error(
            "The argument must be a React element, but you passed " + e + "."
          );
        var u = Te({}, e.props), c = e.key, E = e._owner;
        if (r != null) {
          var m;
          e: {
            if (pe.call(r, "ref") && (m = Object.getOwnPropertyDescriptor(
              r,
              "ref"
            ).get) && m.isReactWarning) {
              m = !1;
              break e;
            }
            m = r.ref !== void 0;
          }
          m && (E = P()), Q(r) && (D(r.key), c = "" + r.key);
          for (b in r)
            !pe.call(r, b) || b === "key" || b === "__self" || b === "__source" || b === "ref" && r.ref === void 0 || (u[b] = r[b]);
        }
        var b = arguments.length - 2;
        if (b === 1) u.children = o;
        else if (1 < b) {
          m = Array(b);
          for (var _ = 0; _ < b; _++)
            m[_] = arguments[_ + 2];
          u.children = m;
        }
        for (u = B(
          e.type,
          c,
          void 0,
          void 0,
          E,
          u,
          e._debugStack,
          e._debugTask
        ), c = 2; c < arguments.length; c++)
          E = arguments[c], L(E) && E._store && (E._store.validated = 1);
        return u;
      }, i.createContext = function(e) {
        return e = {
          $$typeof: f,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, e.Provider = e, e.Consumer = {
          $$typeof: a,
          _context: e
        }, e._currentRenderer = null, e._currentRenderer2 = null, e;
      }, i.createElement = function(e, r, o) {
        for (var u = 2; u < arguments.length; u++) {
          var c = arguments[u];
          L(c) && c._store && (c._store.validated = 1);
        }
        if (u = {}, c = null, r != null)
          for (_ in Se || !("__self" in r) || "key" in r || (Se = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), Q(r) && (D(r.key), c = "" + r.key), r)
            pe.call(r, _) && _ !== "key" && _ !== "__self" && _ !== "__source" && (u[_] = r[_]);
        var E = arguments.length - 2;
        if (E === 1) u.children = o;
        else if (1 < E) {
          for (var m = Array(E), b = 0; b < E; b++)
            m[b] = arguments[b + 2];
          Object.freeze && Object.freeze(m), u.children = m;
        }
        if (e && e.defaultProps)
          for (_ in E = e.defaultProps, E)
            u[_] === void 0 && (u[_] = E[_]);
        c && G(
          u,
          typeof e == "function" ? e.displayName || e.name || "Unknown" : e
        );
        var _ = 1e4 > v.recentlyCreatedOwnerStacks++;
        return B(
          e,
          c,
          void 0,
          void 0,
          P(),
          u,
          _ ? Error("react-stack-top-frame") : We,
          _ ? ke(S(e)) : ze
        );
      }, i.createRef = function() {
        var e = { current: null };
        return Object.seal(e), e;
      }, i.forwardRef = function(e) {
        e != null && e.$$typeof === p ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof e != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          e === null ? "null" : typeof e
        ) : e.length !== 0 && e.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), e != null && e.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var r = { $$typeof: h, render: e }, o;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return o;
          },
          set: function(u) {
            o = u, e.name || e.displayName || (Object.defineProperty(e, "name", { value: u }), e.displayName = u);
          }
        }), r;
      }, i.isValidElement = L, i.lazy = function(e) {
        return {
          $$typeof: $,
          _payload: { _status: -1, _result: e },
          _init: se
        };
      }, i.memo = function(e, r) {
        e == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          e === null ? "null" : typeof e
        ), r = {
          $$typeof: p,
          type: e,
          compare: r === void 0 ? null : r
        };
        var o;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return o;
          },
          set: function(u) {
            o = u, e.name || e.displayName || (Object.defineProperty(e, "name", { value: u }), e.displayName = u);
          }
        }), r;
      }, i.startTransition = function(e) {
        var r = v.T, o = {};
        v.T = o, o._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var u = e(), c = v.S;
          c !== null && c(o, u), typeof u == "object" && u !== null && typeof u.then == "function" && u.then(V, Ne);
        } catch (E) {
          Ne(E);
        } finally {
          r === null && o._updatedFibers && (e = o._updatedFibers.size, o._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), v.T = r;
        }
      }, i.unstable_useCacheRefresh = function() {
        return T().useCacheRefresh();
      }, i.use = function(e) {
        return T().use(e);
      }, i.useActionState = function(e, r, o) {
        return T().useActionState(
          e,
          r,
          o
        );
      }, i.useCallback = function(e, r) {
        return T().useCallback(e, r);
      }, i.useContext = function(e) {
        var r = T();
        return e.$$typeof === a && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), r.useContext(e);
      }, i.useDebugValue = function(e, r) {
        return T().useDebugValue(e, r);
      }, i.useDeferredValue = function(e, r) {
        return T().useDeferredValue(e, r);
      }, i.useEffect = function(e, r, o) {
        e == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var u = T();
        if (typeof o == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return u.useEffect(e, r);
      }, i.useId = function() {
        return T().useId();
      }, i.useImperativeHandle = function(e, r, o) {
        return T().useImperativeHandle(e, r, o);
      }, i.useInsertionEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), T().useInsertionEffect(e, r);
      }, i.useLayoutEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), T().useLayoutEffect(e, r);
      }, i.useMemo = function(e, r) {
        return T().useMemo(e, r);
      }, i.useOptimistic = function(e, r) {
        return T().useOptimistic(e, r);
      }, i.useReducer = function(e, r, o) {
        return T().useReducer(e, r, o);
      }, i.useRef = function(e) {
        return T().useRef(e);
      }, i.useState = function(e) {
        return T().useState(e);
      }, i.useSyncExternalStore = function(e, r, o) {
        return T().useSyncExternalStore(
          e,
          r,
          o
        );
      }, i.useTransition = function() {
        return T().useTransition();
      }, i.version = "19.1.1", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(fe, fe.exports)), fe.exports;
}
var Ie;
function He() {
  return Ie || (Ie = 1, process.env.NODE_ENV === "production" ? he.exports = Qe() : he.exports = Xe()), he.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function Ke() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && (function() {
    function y(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === se ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case G:
          return "Fragment";
        case B:
          return "Profiler";
        case I:
          return "StrictMode";
        case g:
          return "Suspense";
        case te:
          return "SuspenseList";
        case F:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case Q:
            return "Portal";
          case L:
            return (t.displayName || "Context") + ".Provider";
          case ee:
            return (t._context.displayName || "Context") + ".Consumer";
          case oe:
            var n = t.render;
            return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case re:
            return n = t.displayName || null, n !== null ? n : y(t.type) || "Memo";
          case x:
            n = t._payload, t = t._init;
            try {
              return y(t(n));
            } catch {
            }
        }
      return null;
    }
    function i(t) {
      return "" + t;
    }
    function C(t) {
      try {
        i(t);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var s = n.error, a = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), i(t);
      }
    }
    function A(t) {
      if (t === G) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === x)
        return "<...>";
      try {
        var n = y(t);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function w() {
      var t = T.A;
      return t === null ? null : t.getOwner();
    }
    function R() {
      return Error("react-stack-top-frame");
    }
    function O(t) {
      if (V.call(t, "key")) {
        var n = Object.getOwnPropertyDescriptor(t, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function j(t, n) {
      function s() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: s,
        configurable: !0
      });
    }
    function W() {
      var t = y(this.type);
      return H[t] || (H[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function D(t, n, s, a, f, h, l, M) {
      return s = h.ref, t = {
        $$typeof: z,
        type: t,
        key: n,
        props: h,
        _owner: f
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: W
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: l
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: M
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function k(t, n, s, a, f, h, l, M) {
      var p = n.children;
      if (p !== void 0)
        if (a)
          if (X(p)) {
            for (a = 0; a < p.length; a++)
              S(p[a]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(p);
      if (V.call(n, "key")) {
        p = y(t);
        var $ = Object.keys(n).filter(function(le) {
          return le !== "key";
        });
        a = 0 < $.length ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}", ne[p + a] || ($ = 0 < $.length ? "{" + $.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          p,
          $,
          p
        ), ne[p + a] = !0);
      }
      if (p = null, s !== void 0 && (C(s), p = "" + s), O(n) && (C(n.key), p = "" + n.key), "key" in n) {
        s = {};
        for (var ae in n)
          ae !== "key" && (s[ae] = n[ae]);
      } else s = n;
      return p && j(
        s,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), D(
        t,
        p,
        h,
        f,
        w(),
        s,
        l,
        M
      );
    }
    function S(t) {
      typeof t == "object" && t !== null && t.$$typeof === z && t._store && (t._store.validated = 1);
    }
    var P = He(), z = Symbol.for("react.transitional.element"), Q = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), ee = Symbol.for("react.consumer"), L = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), se = Symbol.for("react.client.reference"), T = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, X = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    P = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var N, H = {}, Z = P.react_stack_bottom_frame.bind(
      P,
      R
    )(), K = U(A(R)), ne = {};
    ce.Fragment = G, ce.jsx = function(t, n, s, a, f) {
      var h = 1e4 > T.recentlyCreatedOwnerStacks++;
      return k(
        t,
        n,
        s,
        !1,
        a,
        f,
        h ? Error("react-stack-top-frame") : Z,
        h ? U(A(t)) : K
      );
    }, ce.jsxs = function(t, n, s, a, f) {
      var h = 1e4 > T.recentlyCreatedOwnerStacks++;
      return k(
        t,
        n,
        s,
        !0,
        a,
        f,
        h ? Error("react-stack-top-frame") : Z,
        h ? U(A(t)) : K
      );
    };
  })()), ce;
}
var Ue;
function Ve() {
  return Ue || (Ue = 1, process.env.NODE_ENV === "production" ? Ee.exports = Fe() : Ee.exports = Ke()), Ee.exports;
}
var q = Ve();
const Ze = {
  default: void 0,
  neutral: "btn-neutral",
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error"
}, Je = {
  default: void 0,
  outline: "btn-outline",
  dash: "btn-dash",
  soft: "btn-soft",
  ghost: "btn-ghost",
  link: "btn-link"
}, et = {
  default: void 0,
  xxs: "size-[15px]",
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
  xl: "btn-xl"
}, tt = {
  default: void 0,
  wide: "btn-wide",
  block: "btn-block",
  square: "btn-square",
  circle: "btn-circle"
}, rt = ({
  color: y = "default",
  style: i = "default",
  active: C = !1,
  disabled: A = !1,
  size: w = "default",
  modifier: R = "default",
  loading: O = !1,
  children: j,
  onClick: W
}) => {
  const k = y ? Ze[y] : void 0, S = i ? Je[i] : void 0, P = C ? "btn-active" : void 0, z = A ? "btn-disabled" : void 0, Q = w ? et[w] : void 0, G = R ? tt[R] : void 0, B = Object.values({
    baseClass: "btn",
    colorClass: k,
    styleClass: S,
    activeClass: P,
    disabledClass: z,
    sizeClass: Q,
    modifierClass: G
  }).join(" ").trim();
  return /* @__PURE__ */ q.jsxs(
    "button",
    {
      className: B,
      disabled: O || A,
      onClick: W,
      children: [
        O ? /* @__PURE__ */ q.jsx("span", { className: "loading loading-spinner" }) : null,
        j
      ]
    }
  );
};
var ye = He();
const nt = ({
  active: y = !1,
  disableEsc: i = !1,
  children: C,
  onClose: A
}) => {
  const w = ye.useRef(null), R = (O) => {
    O.isComposing || O.key === "Escape" && O.preventDefault();
  };
  return ye.useEffect(() => {
    y ? w.current?.showModal() : w.current?.close();
  }, [y, w]), ye.useEffect(() => (i ? document.addEventListener("keydown", R) : document.removeEventListener("keydown", R), () => document.removeEventListener("keydown", R)), [i]), /* @__PURE__ */ q.jsx("dialog", { ref: w, onClose: A, className: "modal", children: /* @__PURE__ */ q.jsx("div", { className: "modal-box", children: C }) });
}, ot = ({
  value: y = [],
  max: i = 5,
  updateValue: C,
  className: A,
  placeholder: w,
  removable: R = !0
}) => {
  const [O, j] = ye.useState(""), W = (k) => {
    const { key: S } = k;
    switch (S) {
      case "Backspace":
        !O.length && y.length && C && C(y.slice(0, -1));
        break;
      case "Enter":
      case " ":
      case ",":
        if (k.preventDefault(), !O.length || y.length >= i || k.nativeEvent.isComposing)
          return;
        y.includes(O) || C([...y, O]), j("");
        break;
    }
  }, D = (k, S) => {
    k.preventDefault();
    const P = [...y];
    P.splice(S, 1), C(P);
  };
  return /* @__PURE__ */ q.jsxs("label", { className: `input ${A}`, children: [
    y.map(
      (k, S) => /* @__PURE__ */ q.jsxs(
        "div",
        {
          className: "badge badge-primary rounded-sm hover:cursor-pointer flex justify-between",
          children: [
            k,
            R ? /* @__PURE__ */ q.jsx(rt, { modifier: "circle", size: "xxs", onClick: (P) => D(P, S), children: /* @__PURE__ */ q.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "size-3", children: /* @__PURE__ */ q.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }) }) }) : void 0
          ]
        },
        S
      )
    ),
    /* @__PURE__ */ q.jsx(
      "input",
      {
        className: "grow",
        value: O,
        placeholder: y.length ? "" : w,
        onChange: (k) => j(k.target.value),
        onKeyDown: W
      }
    ),
    /* @__PURE__ */ q.jsxs("span", { className: "text-xs text-neutral-500", children: [
      y.length,
      "/",
      i
    ] })
  ] });
};
export {
  rt as Button,
  nt as Modal,
  ot as TagInput
};
//# sourceMappingURL=index.js.map
