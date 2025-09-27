import se, { useRef as B, useEffect as q, useState as V } from "react";
var j = { exports: {} }, k = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function oe() {
  if (U) return k;
  U = 1;
  var t = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function i(m, n, o) {
    var a = null;
    if (o !== void 0 && (a = "" + o), n.key !== void 0 && (a = "" + n.key), "key" in n) {
      o = {};
      for (var b in n)
        b !== "key" && (o[b] = n[b]);
    } else o = n;
    return n = o.ref, {
      $$typeof: t,
      type: m,
      key: a,
      ref: n !== void 0 ? n : null,
      props: o
    };
  }
  return k.Fragment = d, k.jsx = i, k.jsxs = i, k;
}
var T = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J;
function ae() {
  return J || (J = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === re ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case g:
          return "Fragment";
        case y:
          return "Profiler";
        case Y:
          return "StrictMode";
        case Z:
          return "Suspense";
        case K:
          return "SuspenseList";
        case ee:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case C:
            return "Portal";
          case X:
            return (e.displayName || "Context") + ".Provider";
          case N:
            return (e._context.displayName || "Context") + ".Consumer";
          case H:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case M:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function i(e) {
      try {
        d(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var s = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), d(e);
      }
    }
    function m(e) {
      if (e === g) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === M)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function a(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function b(e, r) {
      function s() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: s,
        configurable: !0
      });
    }
    function x() {
      var e = t(this.type);
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function h(e, r, s, u, R, E, S, P) {
      return s = E.ref, e = {
        $$typeof: w,
        type: e,
        key: r,
        props: E,
        _owner: R
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: x
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
        value: S
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function c(e, r, s, u, R, E, S, P) {
      var f = r.children;
      if (f !== void 0)
        if (u)
          if (te(f)) {
            for (u = 0; u < f.length; u++)
              v(f[u]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(f);
      if (I.call(r, "key")) {
        f = t(e);
        var _ = Object.keys(r).filter(function(ne) {
          return ne !== "key";
        });
        u = 0 < _.length ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}", z[f + u] || (_ = 0 < _.length ? "{" + _.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          f,
          _,
          f
        ), z[f + u] = !0);
      }
      if (f = null, s !== void 0 && (i(s), f = "" + s), a(r) && (i(r.key), f = "" + r.key), "key" in r) {
        s = {};
        for (var D in r)
          D !== "key" && (s[D] = r[D]);
      } else s = r;
      return f && b(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), h(
        e,
        f,
        E,
        R,
        n(),
        s,
        S,
        P
      );
    }
    function v(e) {
      typeof e == "object" && e !== null && e.$$typeof === w && e._store && (e._store.validated = 1);
    }
    var p = se, w = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), Y = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"), X = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), O = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, te = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var L, $ = {}, F = p.react_stack_bottom_frame.bind(
      p,
      o
    )(), W = A(m(o)), z = {};
    T.Fragment = g, T.jsx = function(e, r, s, u, R) {
      var E = 1e4 > O.recentlyCreatedOwnerStacks++;
      return c(
        e,
        r,
        s,
        !1,
        u,
        R,
        E ? Error("react-stack-top-frame") : F,
        E ? A(m(e)) : W
      );
    }, T.jsxs = function(e, r, s, u, R) {
      var E = 1e4 > O.recentlyCreatedOwnerStacks++;
      return c(
        e,
        r,
        s,
        !0,
        u,
        R,
        E ? Error("react-stack-top-frame") : F,
        E ? A(m(e)) : W
      );
    };
  })()), T;
}
var G;
function le() {
  return G || (G = 1, process.env.NODE_ENV === "production" ? j.exports = oe() : j.exports = ae()), j.exports;
}
var l = le();
const ce = {
  default: void 0,
  neutral: "btn-neutral",
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error"
}, ie = {
  default: void 0,
  outline: "btn-outline",
  dash: "btn-dash",
  soft: "btn-soft",
  ghost: "btn-ghost",
  link: "btn-link"
}, ue = {
  default: void 0,
  xxs: "size-[15px]",
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
  xl: "btn-xl"
}, fe = {
  default: void 0,
  wide: "btn-wide",
  block: "btn-block",
  square: "btn-square",
  circle: "btn-circle"
}, de = ({
  color: t = "default",
  style: d = "default",
  active: i = !1,
  disabled: m = !1,
  size: n = "default",
  modifier: o = "default",
  loading: a = !1,
  children: b,
  onClick: x
}) => {
  const c = t ? ce[t] : void 0, v = d ? ie[d] : void 0, p = i ? "btn-active" : void 0, w = m ? "btn-disabled" : void 0, C = n ? ue[n] : void 0, g = o ? fe[o] : void 0, y = Object.values({
    baseClass: "btn",
    colorClass: c,
    styleClass: v,
    activeClass: p,
    disabledClass: w,
    sizeClass: C,
    modifierClass: g
  }).filter((N) => !!N).join(" ").trim();
  return /* @__PURE__ */ l.jsxs(
    "button",
    {
      className: y,
      disabled: a || m,
      onClick: x,
      children: [
        a ? /* @__PURE__ */ l.jsx("span", { className: "loading loading-spinner" }) : null,
        b
      ]
    }
  );
}, me = ({
  active: t = !1,
  disableEsc: d = !1,
  children: i,
  onClose: m
}) => {
  const n = B(null), o = (a) => {
    a.isComposing || a.key === "Escape" && a.preventDefault();
  };
  return q(() => {
    t ? n.current?.showModal() : n.current?.close();
  }, [t, n]), q(() => (d ? document.addEventListener("keydown", o) : document.removeEventListener("keydown", o), () => document.removeEventListener("keydown", o)), [d]), /* @__PURE__ */ l.jsx("dialog", { ref: n, onClose: m, className: "modal", children: /* @__PURE__ */ l.jsx("div", { className: "modal-box", children: i }) });
}, ve = ({
  value: t = [],
  max: d = 5,
  updateValue: i,
  className: m,
  placeholder: n,
  removable: o = !0
}) => {
  const [a, b] = V(""), x = (c) => {
    const { key: v } = c;
    switch (v) {
      case "Backspace":
        !a.length && t.length && i && i(t.slice(0, -1));
        break;
      case "Enter":
      case " ":
      case ",":
        if (c.preventDefault(), !a.length || t.length >= d || c.nativeEvent.isComposing)
          return;
        t.includes(a) || i([...t, a]), b("");
        break;
    }
  }, h = (c, v) => {
    c.preventDefault();
    const p = [...t];
    p.splice(v, 1), i(p);
  };
  return /* @__PURE__ */ l.jsxs("label", { className: `input ${m}`, children: [
    t.map(
      (c, v) => /* @__PURE__ */ l.jsxs(
        "div",
        {
          className: "badge badge-primary rounded-sm hover:cursor-pointer flex justify-between",
          children: [
            c,
            o ? /* @__PURE__ */ l.jsx(de, { modifier: "circle", size: "xxs", onClick: (p) => h(p, v), children: /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "size-3", children: /* @__PURE__ */ l.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }) }) }) : void 0
          ]
        },
        v
      )
    ),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        className: "grow",
        value: a,
        placeholder: t.length ? "" : n,
        onChange: (c) => b(c.target.value),
        onKeyDown: x
      }
    ),
    /* @__PURE__ */ l.jsxs("span", { className: "text-xs text-neutral-500", children: [
      t.length,
      "/",
      d
    ] })
  ] });
};
function pe({
  title: t,
  content: d,
  okLabel: i = "OK",
  cancelLabel: m = "CANCEL"
}) {
  const n = B(null), [o, a] = V(!1), b = () => (a(!0), new Promise((c) => {
    n.current = c;
  })), x = (c) => {
    n.current && (a(!1), n.current(c));
  };
  return {
    showConfirm: b,
    ConfirmDialog: () => /* @__PURE__ */ l.jsx(
      me,
      {
        active: o,
        disableEsc: !0,
        children: /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx("h3", { className: "font-bold text-lg", children: t }),
          /* @__PURE__ */ l.jsx("p", { className: "py-4", children: d }),
          /* @__PURE__ */ l.jsxs("div", { className: "modal-action", children: [
            /* @__PURE__ */ l.jsx("button", { className: "btn btn-success", onClick: () => x(!0), children: i }),
            /* @__PURE__ */ l.jsx("button", { className: "btn btn-warning", onClick: () => x(!1), children: m })
          ] })
        ] })
      }
    )
  };
}
export {
  de as Button,
  me as Modal,
  ve as TagInput,
  pe as useConfirmDialog
};
//# sourceMappingURL=index.js.map
