var he = { exports: {} }, ce = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function Fe() {
  if (xe) return ce;
  xe = 1;
  var y = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function k(S, g, b) {
    var O = null;
    if (b !== void 0 && (O = "" + b), g.key !== void 0 && (O = "" + g.key), "key" in g) {
      b = {};
      for (var j in g)
        j !== "key" && (b[j] = g[j]);
    } else b = g;
    return g = b.ref, {
      $$typeof: y,
      type: S,
      key: O,
      ref: g !== void 0 ? g : null,
      props: b
    };
  }
  return ce.Fragment = i, ce.jsx = k, ce.jsxs = k, ce;
}
var fe = {}, ye = { exports: {} }, d = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function Qe() {
  if (Le) return d;
  Le = 1;
  var y = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), O = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), D = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), P = Symbol.iterator;
  function N(t) {
    return t === null || typeof t != "object" ? null : (t = P && t[P] || t["@@iterator"], typeof t == "function" ? t : null);
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
  function U(t, n, u) {
    this.props = t, this.context = n, this.refs = G, this.updater = u || z;
  }
  U.prototype.isReactComponent = {}, U.prototype.setState = function(t, n) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, t, n, "setState");
  }, U.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function B() {
  }
  B.prototype = U.prototype;
  function ee(t, n, u) {
    this.props = t, this.context = n, this.refs = G, this.updater = u || z;
  }
  var Y = ee.prototype = new B();
  Y.constructor = ee, Q(Y, U.prototype), Y.isPureReactComponent = !0;
  var oe = Array.isArray, R = { H: null, A: null, T: null, S: null, V: null }, te = Object.prototype.hasOwnProperty;
  function re(t, n, u, a, f, h) {
    return u = h.ref, {
      $$typeof: y,
      type: t,
      key: n,
      ref: u !== void 0 ? u : null,
      props: h
    };
  }
  function H(t, n) {
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
  function ae(t) {
    var n = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(u) {
      return n[u];
    });
  }
  var T = /\/+/g;
  function V(t, n) {
    return typeof t == "object" && t !== null && t.key != null ? ae("" + t.key) : n.toString(36);
  }
  function K() {
  }
  function q(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(K, K) : (t.status = "pending", t.then(
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
  function M(t, n, u, a, f) {
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
            case C:
              return l = t._init, M(
                l(t._payload),
                n,
                u,
                a,
                f
              );
          }
      }
    if (l)
      return f = f(t), l = a === "" ? "." + V(t, 0) : a, oe(f) ? (u = "", l != null && (u = l.replace(T, "$&/") + "/"), M(f, n, u, "", function(L) {
        return L;
      })) : f != null && (F(f) && (f = H(
        f,
        u + (f.key == null || t && t.key === f.key ? "" : ("" + f.key).replace(
          T,
          "$&/"
        ) + "/") + l
      )), n.push(f)), 1;
    l = 0;
    var $ = a === "" ? "." : a + ":";
    if (oe(t))
      for (var p = 0; p < t.length; p++)
        a = t[p], h = $ + V(a, p), l += M(
          a,
          n,
          u,
          h,
          f
        );
    else if (p = N(t), typeof p == "function")
      for (t = p.call(t), p = 0; !(a = t.next()).done; )
        a = a.value, h = $ + V(a, p++), l += M(
          a,
          n,
          u,
          h,
          f
        );
    else if (h === "object") {
      if (typeof t.then == "function")
        return M(
          q(t),
          n,
          u,
          a,
          f
        );
      throw n = String(t), Error(
        "Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return l;
  }
  function W(t, n, u) {
    if (t == null) return t;
    var a = [], f = 0;
    return M(t, a, "", "", function(h) {
      return n.call(u, h, f++);
    }), a;
  }
  function Z(t) {
    if (t._status === -1) {
      var n = t._result;
      n = n(), n.then(
        function(u) {
          (t._status === 0 || t._status === -1) && (t._status = 1, t._result = u);
        },
        function(u) {
          (t._status === 0 || t._status === -1) && (t._status = 2, t._result = u);
        }
      ), t._status === -1 && (t._status = 0, t._result = n);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var X = typeof reportError == "function" ? reportError : function(t) {
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
    map: W,
    forEach: function(t, n, u) {
      W(
        t,
        function() {
          n.apply(this, arguments);
        },
        u
      );
    },
    count: function(t) {
      var n = 0;
      return W(t, function() {
        n++;
      }), n;
    },
    toArray: function(t) {
      return W(t, function(n) {
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
  }, d.Component = U, d.Fragment = k, d.Profiler = g, d.PureComponent = ee, d.StrictMode = S, d.Suspense = x, d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R, d.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return R.H.useMemoCache(t);
    }
  }, d.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  }, d.cloneElement = function(t, n, u) {
    if (t == null)
      throw Error(
        "The argument must be a React element, but you passed " + t + "."
      );
    var a = Q({}, t.props), f = t.key, h = void 0;
    if (n != null)
      for (l in n.ref !== void 0 && (h = void 0), n.key !== void 0 && (f = "" + n.key), n)
        !te.call(n, l) || l === "key" || l === "__self" || l === "__source" || l === "ref" && n.ref === void 0 || (a[l] = n[l]);
    var l = arguments.length - 2;
    if (l === 1) a.children = u;
    else if (1 < l) {
      for (var $ = Array(l), p = 0; p < l; p++)
        $[p] = arguments[p + 2];
      a.children = $;
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
      $$typeof: b,
      _context: t
    }, t;
  }, d.createElement = function(t, n, u) {
    var a, f = {}, h = null;
    if (n != null)
      for (a in n.key !== void 0 && (h = "" + n.key), n)
        te.call(n, a) && a !== "key" && a !== "__self" && a !== "__source" && (f[a] = n[a]);
    var l = arguments.length - 2;
    if (l === 1) f.children = u;
    else if (1 < l) {
      for (var $ = Array(l), p = 0; p < l; p++)
        $[p] = arguments[p + 2];
      f.children = $;
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
      $$typeof: C,
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
    var n = R.T, u = {};
    R.T = u;
    try {
      var a = t(), f = R.S;
      f !== null && f(u, a), typeof a == "object" && a !== null && typeof a.then == "function" && a.then(ne, X);
    } catch (h) {
      X(h);
    } finally {
      R.T = n;
    }
  }, d.unstable_useCacheRefresh = function() {
    return R.H.useCacheRefresh();
  }, d.use = function(t) {
    return R.H.use(t);
  }, d.useActionState = function(t, n, u) {
    return R.H.useActionState(t, n, u);
  }, d.useCallback = function(t, n) {
    return R.H.useCallback(t, n);
  }, d.useContext = function(t) {
    return R.H.useContext(t);
  }, d.useDebugValue = function() {
  }, d.useDeferredValue = function(t, n) {
    return R.H.useDeferredValue(t, n);
  }, d.useEffect = function(t, n, u) {
    var a = R.H;
    if (typeof u == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return a.useEffect(t, n);
  }, d.useId = function() {
    return R.H.useId();
  }, d.useImperativeHandle = function(t, n, u) {
    return R.H.useImperativeHandle(t, n, u);
  }, d.useInsertionEffect = function(t, n) {
    return R.H.useInsertionEffect(t, n);
  }, d.useLayoutEffect = function(t, n) {
    return R.H.useLayoutEffect(t, n);
  }, d.useMemo = function(t, n) {
    return R.H.useMemo(t, n);
  }, d.useOptimistic = function(t, n) {
    return R.H.useOptimistic(t, n);
  }, d.useReducer = function(t, n, u) {
    return R.H.useReducer(t, n, u);
  }, d.useRef = function(t) {
    return R.H.useRef(t);
  }, d.useState = function(t) {
    return R.H.useState(t);
  }, d.useSyncExternalStore = function(t, n, u) {
    return R.H.useSyncExternalStore(
      t,
      n,
      u
    );
  }, d.useTransition = function() {
    return R.H.useTransition();
  }, d.version = "19.1.1", d;
}
var le = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
le.exports;
var De;
function Ke() {
  return De || (De = 1, (function(y, i) {
    process.env.NODE_ENV !== "production" && (function() {
      function k(e, r) {
        Object.defineProperty(b.prototype, e, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              r[0],
              r[1]
            );
          }
        });
      }
      function S(e) {
        return e === null || typeof e != "object" ? null : (e = de && e[de] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function g(e, r) {
        e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
        var o = e + "." + r;
        Re[o] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          r,
          e
        ), Re[o] = !0);
      }
      function b(e, r, o) {
        this.props = e, this.context = r, this.refs = ge, this.updater = o || we;
      }
      function O() {
      }
      function j(e, r, o) {
        this.props = e, this.context = r, this.refs = ge, this.updater = o || we;
      }
      function x(e) {
        return "" + e;
      }
      function D(e) {
        try {
          x(e);
          var r = !1;
        } catch {
          r = !0;
        }
        if (r) {
          r = console;
          var o = r.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return o.call(
            r,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            s
          ), x(e);
        }
      }
      function C(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === qe ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case t:
            return "Fragment";
          case u:
            return "Profiler";
          case n:
            return "StrictMode";
          case l:
            return "Suspense";
          case $:
            return "SuspenseList";
          case ie:
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
              return r = e.displayName || null, r !== null ? r : C(e.type) || "Memo";
            case L:
              r = e._payload, e = e._init;
              try {
                return C(e(r));
              } catch {
              }
          }
        return null;
      }
      function P(e) {
        if (e === t) return "<>";
        if (typeof e == "object" && e !== null && e.$$typeof === L)
          return "<...>";
        try {
          var r = C(e);
          return r ? "<" + r + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function N() {
        var e = v.A;
        return e === null ? null : e.getOwner();
      }
      function z() {
        return Error("react-stack-top-frame");
      }
      function Q(e) {
        if (me.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning) return !1;
        }
        return e.key !== void 0;
      }
      function G(e, r) {
        function o() {
          ke || (ke = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            r
          ));
        }
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
      function U() {
        var e = C(this.type);
        return Se[e] || (Se[e] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), e = this.props.ref, e !== void 0 ? e : null;
      }
      function B(e, r, o, s, c, E, m, w) {
        return o = E.ref, e = {
          $$typeof: X,
          type: e,
          key: r,
          props: E,
          _owner: c
        }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
          enumerable: !1,
          get: U
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
          value: w
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
      function Y(e) {
        return typeof e == "object" && e !== null && e.$$typeof === X;
      }
      function oe(e) {
        var r = { "=": "=0", ":": "=2" };
        return "$" + e.replace(/[=:]/g, function(o) {
          return r[o];
        });
      }
      function R(e, r) {
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
      function H(e, r, o, s, c) {
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
                case X:
                case ne:
                  m = !0;
                  break;
                case L:
                  return m = e._init, H(
                    m(e._payload),
                    r,
                    o,
                    s,
                    c
                  );
              }
          }
        if (m) {
          m = e, c = c(m);
          var w = s === "" ? "." + R(m, 0) : s;
          return Oe(c) ? (o = "", w != null && (o = w.replace(Pe, "$&/") + "/"), H(c, r, o, "", function(J) {
            return J;
          })) : c != null && (Y(c) && (c.key != null && (m && m.key === c.key || D(c.key)), o = ee(
            c,
            o + (c.key == null || m && m.key === c.key ? "" : ("" + c.key).replace(
              Pe,
              "$&/"
            ) + "/") + w
          ), s !== "" && m != null && Y(m) && m.key == null && m._store && !m._store.validated && (o._store.validated = 2), c = o), r.push(c)), 1;
        }
        if (m = 0, w = s === "" ? "." : s + ":", Oe(e))
          for (var _ = 0; _ < e.length; _++)
            s = e[_], E = w + R(s, _), m += H(
              s,
              r,
              o,
              E,
              c
            );
        else if (_ = S(e), typeof _ == "function")
          for (_ === e.entries && (je || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), je = !0), e = _.call(e), _ = 0; !(s = e.next()).done; )
            s = s.value, E = w + R(s, _++), m += H(
              s,
              r,
              o,
              E,
              c
            );
        else if (E === "object") {
          if (typeof e.then == "function")
            return H(
              re(e),
              r,
              o,
              s,
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
        var s = [], c = 0;
        return H(e, s, "", "", function(E) {
          return r.call(o, E, c++);
        }), s;
      }
      function ae(e) {
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
      function K(e) {
        if (_e === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7);
            _e = (y && y[r]).call(
              y,
              "timers"
            ).setImmediate;
          } catch {
            _e = function(s) {
              Me === !1 && (Me = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var c = new MessageChannel();
              c.port1.onmessage = s, c.port2.postMessage(void 0);
            };
          }
        return _e(e);
      }
      function q(e) {
        return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
      }
      function M(e, r) {
        r !== ve - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), ve = r;
      }
      function W(e, r, o) {
        var s = v.actQueue;
        if (s !== null)
          if (s.length !== 0)
            try {
              Z(s), K(function() {
                return W(e, r, o);
              });
              return;
            } catch (c) {
              v.thrownErrors.push(c);
            }
          else v.actQueue = null;
        0 < v.thrownErrors.length ? (s = q(v.thrownErrors), v.thrownErrors.length = 0, o(s)) : r(e);
      }
      function Z(e) {
        if (!be) {
          be = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var o = e[r];
              do {
                v.didUsePromise = !1;
                var s = o(!1);
                if (s !== null) {
                  if (v.didUsePromise) {
                    e[r] = o, e.splice(0, r);
                    return;
                  }
                  o = s;
                } else break;
              } while (!0);
            }
            e.length = 0;
          } catch (c) {
            e.splice(0, r + 1), v.thrownErrors.push(c);
          } finally {
            be = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var X = Symbol.for("react.transitional.element"), ne = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), f = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), ie = Symbol.for("react.activity"), de = Symbol.iterator, Re = {}, we = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(e) {
          g(e, "forceUpdate");
        },
        enqueueReplaceState: function(e) {
          g(e, "replaceState");
        },
        enqueueSetState: function(e) {
          g(e, "setState");
        }
      }, Te = Object.assign, ge = {};
      Object.freeze(ge), b.prototype.isReactComponent = {}, b.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, r, "setState");
      }, b.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      var I = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, pe;
      for (pe in I)
        I.hasOwnProperty(pe) && k(pe, I[pe]);
      O.prototype = b.prototype, I = j.prototype = new O(), I.constructor = j, Te(I, b.prototype), I.isPureReactComponent = !0;
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
      }, me = Object.prototype.hasOwnProperty, Ce = console.createTask ? console.createTask : function() {
        return null;
      };
      I = {
        react_stack_bottom_frame: function(e) {
          return e();
        }
      };
      var ke, Ae, Se = {}, We = I.react_stack_bottom_frame.bind(
        I,
        z
      )(), ze = Ce(P(z)), je = !1, Pe = /\/+/g, Ne = typeof reportError == "function" ? reportError : function(e) {
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
      }, Me = !1, _e = null, ve = 0, Ee = !1, be = !1, $e = typeof queueMicrotask == "function" ? function(e) {
        queueMicrotask(function() {
          return queueMicrotask(e);
        });
      } : K;
      I = Object.freeze({
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
          if (!Y(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        }
      }, i.Component = b, i.Fragment = t, i.Profiler = u, i.PureComponent = j, i.StrictMode = n, i.Suspense = l, i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v, i.__COMPILER_RUNTIME = I, i.act = function(e) {
        var r = v.actQueue, o = ve;
        ve++;
        var s = v.actQueue = r !== null ? r : [], c = !1;
        try {
          var E = e();
        } catch (_) {
          v.thrownErrors.push(_);
        }
        if (0 < v.thrownErrors.length)
          throw M(r, o), e = q(v.thrownErrors), v.thrownErrors.length = 0, e;
        if (E !== null && typeof E == "object" && typeof E.then == "function") {
          var m = E;
          return $e(function() {
            c || Ee || (Ee = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(_, J) {
              c = !0, m.then(
                function(se) {
                  if (M(r, o), o === 0) {
                    try {
                      Z(s), K(function() {
                        return W(
                          se,
                          _,
                          J
                        );
                      });
                    } catch (Be) {
                      v.thrownErrors.push(Be);
                    }
                    if (0 < v.thrownErrors.length) {
                      var Ge = q(
                        v.thrownErrors
                      );
                      v.thrownErrors.length = 0, J(Ge);
                    }
                  } else _(se);
                },
                function(se) {
                  M(r, o), 0 < v.thrownErrors.length && (se = q(
                    v.thrownErrors
                  ), v.thrownErrors.length = 0), J(se);
                }
              );
            }
          };
        }
        var w = E;
        if (M(r, o), o === 0 && (Z(s), s.length !== 0 && $e(function() {
          c || Ee || (Ee = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), v.actQueue = null), 0 < v.thrownErrors.length)
          throw e = q(v.thrownErrors), v.thrownErrors.length = 0, e;
        return {
          then: function(_, J) {
            c = !0, o === 0 ? (v.actQueue = s, K(function() {
              return W(
                w,
                _,
                J
              );
            })) : _(w);
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
        var s = Te({}, e.props), c = e.key, E = e._owner;
        if (r != null) {
          var m;
          e: {
            if (me.call(r, "ref") && (m = Object.getOwnPropertyDescriptor(
              r,
              "ref"
            ).get) && m.isReactWarning) {
              m = !1;
              break e;
            }
            m = r.ref !== void 0;
          }
          m && (E = N()), Q(r) && (D(r.key), c = "" + r.key);
          for (w in r)
            !me.call(r, w) || w === "key" || w === "__self" || w === "__source" || w === "ref" && r.ref === void 0 || (s[w] = r[w]);
        }
        var w = arguments.length - 2;
        if (w === 1) s.children = o;
        else if (1 < w) {
          m = Array(w);
          for (var _ = 0; _ < w; _++)
            m[_] = arguments[_ + 2];
          s.children = m;
        }
        for (s = B(
          e.type,
          c,
          void 0,
          void 0,
          E,
          s,
          e._debugStack,
          e._debugTask
        ), c = 2; c < arguments.length; c++)
          E = arguments[c], Y(E) && E._store && (E._store.validated = 1);
        return s;
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
        for (var s = 2; s < arguments.length; s++) {
          var c = arguments[s];
          Y(c) && c._store && (c._store.validated = 1);
        }
        if (s = {}, c = null, r != null)
          for (_ in Ae || !("__self" in r) || "key" in r || (Ae = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), Q(r) && (D(r.key), c = "" + r.key), r)
            me.call(r, _) && _ !== "key" && _ !== "__self" && _ !== "__source" && (s[_] = r[_]);
        var E = arguments.length - 2;
        if (E === 1) s.children = o;
        else if (1 < E) {
          for (var m = Array(E), w = 0; w < E; w++)
            m[w] = arguments[w + 2];
          Object.freeze && Object.freeze(m), s.children = m;
        }
        if (e && e.defaultProps)
          for (_ in E = e.defaultProps, E)
            s[_] === void 0 && (s[_] = E[_]);
        c && G(
          s,
          typeof e == "function" ? e.displayName || e.name || "Unknown" : e
        );
        var _ = 1e4 > v.recentlyCreatedOwnerStacks++;
        return B(
          e,
          c,
          void 0,
          void 0,
          N(),
          s,
          _ ? Error("react-stack-top-frame") : We,
          _ ? Ce(P(e)) : ze
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
          set: function(s) {
            o = s, e.name || e.displayName || (Object.defineProperty(e, "name", { value: s }), e.displayName = s);
          }
        }), r;
      }, i.isValidElement = Y, i.lazy = function(e) {
        return {
          $$typeof: L,
          _payload: { _status: -1, _result: e },
          _init: ae
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
          set: function(s) {
            o = s, e.name || e.displayName || (Object.defineProperty(e, "name", { value: s }), e.displayName = s);
          }
        }), r;
      }, i.startTransition = function(e) {
        var r = v.T, o = {};
        v.T = o, o._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var s = e(), c = v.S;
          c !== null && c(o, s), typeof s == "object" && s !== null && typeof s.then == "function" && s.then(V, Ne);
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
        var s = T();
        if (typeof o == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return s.useEffect(e, r);
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
  })(le, le.exports)), le.exports;
}
var Ye;
function He() {
  return Ye || (Ye = 1, process.env.NODE_ENV === "production" ? ye.exports = Qe() : ye.exports = Ke()), ye.exports;
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
var Ie;
function Xe() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && (function() {
    function y(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === ae ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case G:
          return "Fragment";
        case B:
          return "Profiler";
        case U:
          return "StrictMode";
        case R:
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
          case Y:
            return (t.displayName || "Context") + ".Provider";
          case ee:
            return (t._context.displayName || "Context") + ".Consumer";
          case oe:
            var n = t.render;
            return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case re:
            return n = t.displayName || null, n !== null ? n : y(t.type) || "Memo";
          case H:
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
    function k(t) {
      try {
        i(t);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var u = n.error, a = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return u.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), i(t);
      }
    }
    function S(t) {
      if (t === G) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === H)
        return "<...>";
      try {
        var n = y(t);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function g() {
      var t = T.A;
      return t === null ? null : t.getOwner();
    }
    function b() {
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
      function u() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: u,
        configurable: !0
      });
    }
    function x() {
      var t = y(this.type);
      return W[t] || (W[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function D(t, n, u, a, f, h, l, $) {
      return u = h.ref, t = {
        $$typeof: z,
        type: t,
        key: n,
        props: h,
        _owner: f
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: x
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
        value: $
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function C(t, n, u, a, f, h, l, $) {
      var p = n.children;
      if (p !== void 0)
        if (a)
          if (K(p)) {
            for (a = 0; a < p.length; a++)
              P(p[a]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(p);
      if (V.call(n, "key")) {
        p = y(t);
        var L = Object.keys(n).filter(function(de) {
          return de !== "key";
        });
        a = 0 < L.length ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}", ne[p + a] || (L = 0 < L.length ? "{" + L.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          p,
          L,
          p
        ), ne[p + a] = !0);
      }
      if (p = null, u !== void 0 && (k(u), p = "" + u), O(n) && (k(n.key), p = "" + n.key), "key" in n) {
        u = {};
        for (var ie in n)
          ie !== "key" && (u[ie] = n[ie]);
      } else u = n;
      return p && j(
        u,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), D(
        t,
        p,
        h,
        f,
        g(),
        u,
        l,
        $
      );
    }
    function P(t) {
      typeof t == "object" && t !== null && t.$$typeof === z && t._store && (t._store.validated = 1);
    }
    var N = He(), z = Symbol.for("react.transitional.element"), Q = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), ee = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), ae = Symbol.for("react.client.reference"), T = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, K = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    N = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var M, W = {}, Z = N.react_stack_bottom_frame.bind(
      N,
      b
    )(), X = q(S(b)), ne = {};
    fe.Fragment = G, fe.jsx = function(t, n, u, a, f) {
      var h = 1e4 > T.recentlyCreatedOwnerStacks++;
      return C(
        t,
        n,
        u,
        !1,
        a,
        f,
        h ? Error("react-stack-top-frame") : Z,
        h ? q(S(t)) : X
      );
    }, fe.jsxs = function(t, n, u, a, f) {
      var h = 1e4 > T.recentlyCreatedOwnerStacks++;
      return C(
        t,
        n,
        u,
        !0,
        a,
        f,
        h ? Error("react-stack-top-frame") : Z,
        h ? q(S(t)) : X
      );
    };
  })()), fe;
}
var Ue;
function Ve() {
  return Ue || (Ue = 1, process.env.NODE_ENV === "production" ? he.exports = Fe() : he.exports = Xe()), he.exports;
}
var A = Ve();
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
  active: k = !1,
  disabled: S = !1,
  size: g = "default",
  modifier: b = "default",
  loading: O = !1,
  children: j,
  onClick: x
}) => {
  const C = y ? Ze[y] : void 0, P = i ? Je[i] : void 0, N = k ? "btn-active" : void 0, z = S ? "btn-disabled" : void 0, Q = g ? et[g] : void 0, G = b ? tt[b] : void 0, B = Object.values({
    baseClass: "btn",
    colorClass: C,
    styleClass: P,
    activeClass: N,
    disabledClass: z,
    sizeClass: Q,
    modifierClass: G
  }).join(" ").trim();
  return /* @__PURE__ */ A.jsxs(
    "button",
    {
      className: B,
      disabled: O || S,
      onClick: x,
      children: [
        O ? /* @__PURE__ */ A.jsx("span", { className: "loading loading-spinner" }) : null,
        j
      ]
    }
  );
};
var ue = He();
const nt = ({
  active: y = !1,
  disableEsc: i = !1,
  children: k,
  onClose: S
}) => {
  const g = ue.useRef(null), b = (O) => {
    O.isComposing || O.key === "Escape" && O.preventDefault();
  };
  return ue.useEffect(() => {
    y ? g.current?.showModal() : g.current?.close();
  }, [y, g]), ue.useEffect(() => (i ? document.addEventListener("keydown", b) : document.removeEventListener("keydown", b), () => document.removeEventListener("keydown", b)), [i]), /* @__PURE__ */ A.jsx("dialog", { ref: g, onClose: S, className: "modal", children: /* @__PURE__ */ A.jsx("div", { className: "modal-box", children: k }) });
}, ot = ({
  value: y = [],
  max: i = 5,
  updateValue: k,
  className: S,
  placeholder: g,
  removable: b = !0
}) => {
  const [O, j] = ue.useState(""), x = (C) => {
    const { key: P } = C;
    switch (P) {
      case "Backspace":
        !O.length && y.length && k && k(y.slice(0, -1));
        break;
      case "Enter":
      case " ":
      case ",":
        if (C.preventDefault(), !O.length || y.length >= i || C.nativeEvent.isComposing)
          return;
        y.includes(O) || k([...y, O]), j("");
        break;
    }
  }, D = (C, P) => {
    C.preventDefault();
    const N = [...y];
    N.splice(P, 1), k(N);
  };
  return /* @__PURE__ */ A.jsxs("label", { className: `input ${S}`, children: [
    y.map(
      (C, P) => /* @__PURE__ */ A.jsxs(
        "div",
        {
          className: "badge badge-primary rounded-sm hover:cursor-pointer flex justify-between",
          children: [
            C,
            b ? /* @__PURE__ */ A.jsx(rt, { modifier: "circle", size: "xxs", onClick: (N) => D(N, P), children: /* @__PURE__ */ A.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "size-3", children: /* @__PURE__ */ A.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }) }) }) : void 0
          ]
        },
        P
      )
    ),
    /* @__PURE__ */ A.jsx(
      "input",
      {
        className: "grow",
        value: O,
        placeholder: y.length ? "" : g,
        onChange: (C) => j(C.target.value),
        onKeyDown: x
      }
    ),
    /* @__PURE__ */ A.jsxs("span", { className: "text-xs text-neutral-500", children: [
      y.length,
      "/",
      i
    ] })
  ] });
};
function st({
  title: y,
  content: i,
  okLabel: k = "OK",
  cancelLabel: S = "CANCEL"
}) {
  const g = ue.useRef(null), [b, O] = ue.useState(!1), j = () => (O(!0), new Promise((C) => {
    g.current = C;
  })), x = (C) => {
    g.current && (O(!1), g.current(C));
  };
  return {
    showConfirm: j,
    ConfirmDialog: () => /* @__PURE__ */ A.jsx(
      nt,
      {
        active: b,
        disableEsc: !0,
        children: /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
          /* @__PURE__ */ A.jsx("h3", { className: "font-bold text-lg", children: y }),
          /* @__PURE__ */ A.jsx("p", { className: "py-4", children: i }),
          /* @__PURE__ */ A.jsxs("div", { className: "modal-action", children: [
            /* @__PURE__ */ A.jsx("button", { className: "btn btn-success", onClick: () => x(!0), children: k }),
            /* @__PURE__ */ A.jsx("button", { className: "btn btn-warning", onClick: () => x(!1), children: S })
          ] })
        ] })
      }
    )
  };
}
export {
  rt as Button,
  nt as Modal,
  ot as TagInput,
  st as useConfirmDialog
};
//# sourceMappingURL=index.js.map
