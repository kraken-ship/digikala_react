function Ah(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var qt =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Xl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Z0 = { exports: {} },
  pa = {},
  X0 = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ri = Symbol.for("react.element"),
  Mh = Symbol.for("react.portal"),
  Ih = Symbol.for("react.fragment"),
  Oh = Symbol.for("react.strict_mode"),
  _h = Symbol.for("react.profiler"),
  Rh = Symbol.for("react.provider"),
  zh = Symbol.for("react.context"),
  Dh = Symbol.for("react.forward_ref"),
  Bh = Symbol.for("react.suspense"),
  Fh = Symbol.for("react.memo"),
  Vh = Symbol.for("react.lazy"),
  rd = Symbol.iterator;
function Hh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (rd && e[rd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  K0 = Object.assign,
  J0 = {};
function Ar(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = J0),
    (this.updater = n || Y0);
}
Ar.prototype.isReactComponent = {};
Ar.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ar.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ef() {}
ef.prototype = Ar.prototype;
function Yl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = J0),
    (this.updater = n || Y0);
}
var Kl = (Yl.prototype = new ef());
Kl.constructor = Yl;
K0(Kl, Ar.prototype);
Kl.isPureReactComponent = !0;
var id = Array.isArray,
  tf = Object.prototype.hasOwnProperty,
  Jl = { current: null },
  nf = { key: !0, ref: !0, __self: !0, __source: !0 };
function rf(e, t, n) {
  var r,
    i = {},
    s = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      tf.call(t, r) && !nf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var u = Array(l), m = 0; m < l; m++) u[m] = arguments[m + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Ri,
    type: e,
    key: s,
    ref: a,
    props: i,
    _owner: Jl.current,
  };
}
function Uh(e, t) {
  return {
    $$typeof: Ri,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function eu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ri;
}
function Gh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var sd = /\/+/g;
function Ja(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Gh("" + e.key)
    : t.toString(36);
}
function xs(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (s) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ri:
          case Mh:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === "" ? "." + Ja(a, 0) : r),
      id(i)
        ? ((n = ""),
          e != null && (n = e.replace(sd, "$&/") + "/"),
          xs(i, t, n, "", function (m) {
            return m;
          }))
        : i != null &&
          (eu(i) &&
            (i = Uh(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(sd, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), id(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var u = r + Ja(s, l);
      a += xs(s, t, n, u, i);
    }
  else if (((u = Hh(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (u = r + Ja(s, l++)), (a += xs(s, t, n, u, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Ji(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    xs(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Wh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var De = { current: null },
  ws = { transition: null },
  $h = {
    ReactCurrentDispatcher: De,
    ReactCurrentBatchConfig: ws,
    ReactCurrentOwner: Jl,
  };
function sf() {
  throw Error("act(...) is not supported in production builds of React.");
}
Q.Children = {
  map: Ji,
  forEach: function (e, t, n) {
    Ji(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ji(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ji(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!eu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Q.Component = Ar;
Q.Fragment = Ih;
Q.Profiler = _h;
Q.PureComponent = Yl;
Q.StrictMode = Oh;
Q.Suspense = Bh;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $h;
Q.act = sf;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = K0({}, e.props),
    i = e.key,
    s = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (a = Jl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      tf.call(t, u) &&
        !nf.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var m = 0; m < u; m++) l[m] = arguments[m + 2];
    r.children = l;
  }
  return { $$typeof: Ri, type: e.type, key: i, ref: s, props: r, _owner: a };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: zh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Rh, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = rf;
Q.createFactory = function (e) {
  var t = rf.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: Dh, render: e };
};
Q.isValidElement = eu;
Q.lazy = function (e) {
  return { $$typeof: Vh, _payload: { _status: -1, _result: e }, _init: Wh };
};
Q.memo = function (e, t) {
  return { $$typeof: Fh, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = ws.transition;
  ws.transition = {};
  try {
    e();
  } finally {
    ws.transition = t;
  }
};
Q.unstable_act = sf;
Q.useCallback = function (e, t) {
  return De.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return De.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return De.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return De.current.useEffect(e, t);
};
Q.useId = function () {
  return De.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return De.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return De.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return De.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return De.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return De.current.useRef(e);
};
Q.useState = function (e) {
  return De.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return De.current.useTransition();
};
Q.version = "18.3.1";
X0.exports = Q;
var T = X0.exports;
const ge = Xl(T),
  qh = Ah({ __proto__: null, default: ge }, [T]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qh = T,
  Zh = Symbol.for("react.element"),
  Xh = Symbol.for("react.fragment"),
  Yh = Object.prototype.hasOwnProperty,
  Kh = Qh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Jh = { key: !0, ref: !0, __self: !0, __source: !0 };
function af(e, t, n) {
  var r,
    i = {},
    s = null,
    a = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) Yh.call(t, r) && !Jh.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Zh,
    type: e,
    key: s,
    ref: a,
    props: i,
    _owner: Kh.current,
  };
}
pa.Fragment = Xh;
pa.jsx = af;
pa.jsxs = af;
Z0.exports = pa;
var d = Z0.exports,
  Zo = {},
  of = { exports: {} },
  rt = {},
  lf = { exports: {} },
  uf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(H, O) {
    var W = H.length;
    H.push(O);
    e: for (; 0 < W; ) {
      var ie = (W - 1) >>> 1,
        le = H[ie];
      if (0 < i(le, O)) (H[ie] = O), (H[W] = le), (W = ie);
      else break e;
    }
  }
  function n(H) {
    return H.length === 0 ? null : H[0];
  }
  function r(H) {
    if (H.length === 0) return null;
    var O = H[0],
      W = H.pop();
    if (W !== O) {
      H[0] = W;
      e: for (var ie = 0, le = H.length, $n = le >>> 1; ie < $n; ) {
        var L = 2 * (ie + 1) - 1,
          Dr = H[L],
          at = L + 1,
          Sn = H[at];
        if (0 > i(Dr, W))
          at < le && 0 > i(Sn, Dr)
            ? ((H[ie] = Sn), (H[at] = W), (ie = at))
            : ((H[ie] = Dr), (H[L] = W), (ie = L));
        else if (at < le && 0 > i(Sn, W)) (H[ie] = Sn), (H[at] = W), (ie = at);
        else break e;
      }
    }
    return O;
  }
  function i(H, O) {
    var W = H.sortIndex - O.sortIndex;
    return W !== 0 ? W : H.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var u = [],
    m = [],
    v = 1,
    g = null,
    w = 3,
    C = !1,
    b = !1,
    E = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    x = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(H) {
    for (var O = n(m); O !== null; ) {
      if (O.callback === null) r(m);
      else if (O.startTime <= H)
        r(m), (O.sortIndex = O.expirationTime), t(u, O);
      else break;
      O = n(m);
    }
  }
  function k(H) {
    if (((E = !1), y(H), !b))
      if (n(u) !== null) (b = !0), Z(j);
      else {
        var O = n(m);
        O !== null && mt(k, O.startTime - H);
      }
  }
  function j(H, O) {
    (b = !1), E && ((E = !1), h(M), (M = -1)), (C = !0);
    var W = w;
    try {
      for (
        y(O), g = n(u);
        g !== null && (!(g.expirationTime > O) || (H && !V()));

      ) {
        var ie = g.callback;
        if (typeof ie == "function") {
          (g.callback = null), (w = g.priorityLevel);
          var le = ie(g.expirationTime <= O);
          (O = e.unstable_now()),
            typeof le == "function" ? (g.callback = le) : g === n(u) && r(u),
            y(O);
        } else r(u);
        g = n(u);
      }
      if (g !== null) var $n = !0;
      else {
        var L = n(m);
        L !== null && mt(k, L.startTime - O), ($n = !1);
      }
      return $n;
    } finally {
      (g = null), (w = W), (C = !1);
    }
  }
  var I = !1,
    z = null,
    M = -1,
    R = 5,
    A = -1;
  function V() {
    return !(e.unstable_now() - A < R);
  }
  function D() {
    if (z !== null) {
      var H = e.unstable_now();
      A = H;
      var O = !0;
      try {
        O = z(!0, H);
      } finally {
        O ? B() : ((I = !1), (z = null));
      }
    } else I = !1;
  }
  var B;
  if (typeof x == "function")
    B = function () {
      x(D);
    };
  else if (typeof MessageChannel < "u") {
    var G = new MessageChannel(),
      K = G.port2;
    (G.port1.onmessage = D),
      (B = function () {
        K.postMessage(null);
      });
  } else
    B = function () {
      P(D, 0);
    };
  function Z(H) {
    (z = H), I || ((I = !0), B());
  }
  function mt(H, O) {
    M = P(function () {
      H(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (H) {
      H.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || C || ((b = !0), Z(j));
    }),
    (e.unstable_forceFrameRate = function (H) {
      0 > H || 125 < H
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < H ? Math.floor(1e3 / H) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return w;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (H) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = w;
      }
      var W = w;
      w = O;
      try {
        return H();
      } finally {
        w = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (H, O) {
      switch (H) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          H = 3;
      }
      var W = w;
      w = H;
      try {
        return O();
      } finally {
        w = W;
      }
    }),
    (e.unstable_scheduleCallback = function (H, O, W) {
      var ie = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? ie + W : ie))
          : (W = ie),
        H)
      ) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return (
        (le = W + le),
        (H = {
          id: v++,
          callback: O,
          priorityLevel: H,
          startTime: W,
          expirationTime: le,
          sortIndex: -1,
        }),
        W > ie
          ? ((H.sortIndex = W),
            t(m, H),
            n(u) === null &&
              H === n(m) &&
              (E ? (h(M), (M = -1)) : (E = !0), mt(k, W - ie)))
          : ((H.sortIndex = le), t(u, H), b || C || ((b = !0), Z(j))),
        H
      );
    }),
    (e.unstable_shouldYield = V),
    (e.unstable_wrapCallback = function (H) {
      var O = w;
      return function () {
        var W = w;
        w = O;
        try {
          return H.apply(this, arguments);
        } finally {
          w = W;
        }
      };
    });
})(uf);
lf.exports = uf;
var eg = lf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tg = T,
  nt = eg;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var cf = new Set(),
  gi = {};
function Vn(e, t) {
  Cr(e, t), Cr(e + "Capture", t);
}
function Cr(e, t) {
  for (gi[e] = t, e = 0; e < t.length; e++) cf.add(t[e]);
}
var Bt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Xo = Object.prototype.hasOwnProperty,
  ng =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ad = {},
  od = {};
function rg(e) {
  return Xo.call(od, e)
    ? !0
    : Xo.call(ad, e)
    ? !1
    : ng.test(e)
    ? (od[e] = !0)
    : ((ad[e] = !0), !1);
}
function ig(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function sg(e, t, n, r) {
  if (t === null || typeof t > "u" || ig(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Be(e, t, n, r, i, s, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = a);
}
var Le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Le[e] = new Be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Le[t] = new Be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Le[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Le[e] = new Be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Le[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Le[e] = new Be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Le[e] = new Be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Le[e] = new Be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Le[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var tu = /[\-:]([a-z])/g;
function nu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(tu, nu);
    Le[t] = new Be(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(tu, nu);
    Le[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(tu, nu);
  Le[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Le[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Le.xlinkHref = new Be(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Le[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ru(e, t, n, r) {
  var i = Le.hasOwnProperty(t) ? Le[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (sg(t, n, i, r) && (n = null),
    r || i === null
      ? rg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Gt = tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  es = Symbol.for("react.element"),
  rr = Symbol.for("react.portal"),
  ir = Symbol.for("react.fragment"),
  iu = Symbol.for("react.strict_mode"),
  Yo = Symbol.for("react.profiler"),
  df = Symbol.for("react.provider"),
  ff = Symbol.for("react.context"),
  su = Symbol.for("react.forward_ref"),
  Ko = Symbol.for("react.suspense"),
  Jo = Symbol.for("react.suspense_list"),
  au = Symbol.for("react.memo"),
  Zt = Symbol.for("react.lazy"),
  pf = Symbol.for("react.offscreen"),
  ld = Symbol.iterator;
function qr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ld && e[ld]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var de = Object.assign,
  eo;
function ni(e) {
  if (eo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      eo = (t && t[1]) || "";
    }
  return (
    `
` +
    eo +
    e
  );
}
var to = !1;
function no(e, t) {
  if (!e || to) return "";
  to = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (m) {
          var r = m;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (m) {
          r = m;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (m) {
        r = m;
      }
      e();
    }
  } catch (m) {
    if (m && r && typeof m.stack == "string") {
      for (
        var i = m.stack.split(`
`),
          s = r.stack.split(`
`),
          a = i.length - 1,
          l = s.length - 1;
        1 <= a && 0 <= l && i[a] !== s[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (i[a] !== s[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || i[a] !== s[l])) {
                var u =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (to = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ni(e) : "";
}
function ag(e) {
  switch (e.tag) {
    case 5:
      return ni(e.type);
    case 16:
      return ni("Lazy");
    case 13:
      return ni("Suspense");
    case 19:
      return ni("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = no(e.type, !1)), e;
    case 11:
      return (e = no(e.type.render, !1)), e;
    case 1:
      return (e = no(e.type, !0)), e;
    default:
      return "";
  }
}
function el(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ir:
      return "Fragment";
    case rr:
      return "Portal";
    case Yo:
      return "Profiler";
    case iu:
      return "StrictMode";
    case Ko:
      return "Suspense";
    case Jo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ff:
        return (e.displayName || "Context") + ".Consumer";
      case df:
        return (e._context.displayName || "Context") + ".Provider";
      case su:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case au:
        return (
          (t = e.displayName || null), t !== null ? t : el(e.type) || "Memo"
        );
      case Zt:
        (t = e._payload), (e = e._init);
        try {
          return el(e(t));
        } catch {}
    }
  return null;
}
function og(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return el(t);
    case 8:
      return t === iu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function mn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function mf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function lg(e) {
  var t = mf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (r = "" + a), s.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ts(e) {
  e._valueTracker || (e._valueTracker = lg(e));
}
function hf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = mf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Is(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function tl(e, t) {
  var n = t.checked;
  return de({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ud(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = mn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function gf(e, t) {
  (t = t.checked), t != null && ru(e, "checked", t, !1);
}
function nl(e, t) {
  gf(e, t);
  var n = mn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? rl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && rl(e, t.type, mn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function cd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function rl(e, t, n) {
  (t !== "number" || Is(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ri = Array.isArray;
function hr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function il(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return de({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function dd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (ri(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: mn(n) };
}
function vf(e, t) {
  var n = mn(t.value),
    r = mn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function fd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function sl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? xf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ns,
  wf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ns = ns || document.createElement("div"),
          ns.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ns.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function vi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ai = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ug = ["Webkit", "ms", "Moz", "O"];
Object.keys(ai).forEach(function (e) {
  ug.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ai[t] = ai[e]);
  });
});
function yf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ai.hasOwnProperty(e) && ai[e])
    ? ("" + t).trim()
    : t + "px";
}
function Sf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = yf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var cg = de(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function al(e, t) {
  if (t) {
    if (cg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function ol(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ll = null;
function ou(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ul = null,
  gr = null,
  vr = null;
function pd(e) {
  if ((e = Bi(e))) {
    if (typeof ul != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = xa(t)), ul(e.stateNode, e.type, t));
  }
}
function Cf(e) {
  gr ? (vr ? vr.push(e) : (vr = [e])) : (gr = e);
}
function bf() {
  if (gr) {
    var e = gr,
      t = vr;
    if (((vr = gr = null), pd(e), t)) for (e = 0; e < t.length; e++) pd(t[e]);
  }
}
function Ef(e, t) {
  return e(t);
}
function kf() {}
var ro = !1;
function jf(e, t, n) {
  if (ro) return e(t, n);
  ro = !0;
  try {
    return Ef(e, t, n);
  } finally {
    (ro = !1), (gr !== null || vr !== null) && (kf(), bf());
  }
}
function xi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xa(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var cl = !1;
if (Bt)
  try {
    var Qr = {};
    Object.defineProperty(Qr, "passive", {
      get: function () {
        cl = !0;
      },
    }),
      window.addEventListener("test", Qr, Qr),
      window.removeEventListener("test", Qr, Qr);
  } catch {
    cl = !1;
  }
function dg(e, t, n, r, i, s, a, l, u) {
  var m = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, m);
  } catch (v) {
    this.onError(v);
  }
}
var oi = !1,
  Os = null,
  _s = !1,
  dl = null,
  fg = {
    onError: function (e) {
      (oi = !0), (Os = e);
    },
  };
function pg(e, t, n, r, i, s, a, l, u) {
  (oi = !1), (Os = null), dg.apply(fg, arguments);
}
function mg(e, t, n, r, i, s, a, l, u) {
  if ((pg.apply(this, arguments), oi)) {
    if (oi) {
      var m = Os;
      (oi = !1), (Os = null);
    } else throw Error(_(198));
    _s || ((_s = !0), (dl = m));
  }
}
function Hn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Tf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function md(e) {
  if (Hn(e) !== e) throw Error(_(188));
}
function hg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Hn(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return md(i), e;
        if (s === r) return md(i), t;
        s = s.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var a = !1, l = i.child; l; ) {
        if (l === n) {
          (a = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (a = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = s.child; l; ) {
          if (l === n) {
            (a = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (a = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function Pf(e) {
  return (e = hg(e)), e !== null ? Lf(e) : null;
}
function Lf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Lf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Nf = nt.unstable_scheduleCallback,
  hd = nt.unstable_cancelCallback,
  gg = nt.unstable_shouldYield,
  vg = nt.unstable_requestPaint,
  ve = nt.unstable_now,
  xg = nt.unstable_getCurrentPriorityLevel,
  lu = nt.unstable_ImmediatePriority,
  Af = nt.unstable_UserBlockingPriority,
  Rs = nt.unstable_NormalPriority,
  wg = nt.unstable_LowPriority,
  Mf = nt.unstable_IdlePriority,
  ma = null,
  Nt = null;
function yg(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function")
    try {
      Nt.onCommitFiberRoot(ma, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var yt = Math.clz32 ? Math.clz32 : bg,
  Sg = Math.log,
  Cg = Math.LN2;
function bg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Sg(e) / Cg) | 0)) | 0;
}
var rs = 64,
  is = 4194304;
function ii(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function zs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~i;
    l !== 0 ? (r = ii(l)) : ((s &= a), s !== 0 && (r = ii(s)));
  } else (a = n & ~i), a !== 0 ? (r = ii(a)) : s !== 0 && (r = ii(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - yt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Eg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function kg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var a = 31 - yt(s),
      l = 1 << a,
      u = i[a];
    u === -1
      ? (!(l & n) || l & r) && (i[a] = Eg(l, t))
      : u <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function fl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function If() {
  var e = rs;
  return (rs <<= 1), !(rs & 4194240) && (rs = 64), e;
}
function io(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - yt(t)),
    (e[t] = n);
}
function jg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - yt(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function uu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - yt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ee = 0;
function Of(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var _f,
  cu,
  Rf,
  zf,
  Df,
  pl = !1,
  ss = [],
  sn = null,
  an = null,
  on = null,
  wi = new Map(),
  yi = new Map(),
  Kt = [],
  Tg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function gd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      sn = null;
      break;
    case "dragenter":
    case "dragleave":
      an = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      wi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      yi.delete(t.pointerId);
  }
}
function Zr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Bi(t)), t !== null && cu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Pg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (sn = Zr(sn, e, t, n, r, i)), !0;
    case "dragenter":
      return (an = Zr(an, e, t, n, r, i)), !0;
    case "mouseover":
      return (on = Zr(on, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return wi.set(s, Zr(wi.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), yi.set(s, Zr(yi.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Bf(e) {
  var t = Nn(e.target);
  if (t !== null) {
    var n = Hn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Tf(n)), t !== null)) {
          (e.blockedOn = t),
            Df(e.priority, function () {
              Rf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ys(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ml(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ll = r), n.target.dispatchEvent(r), (ll = null);
    } else return (t = Bi(n)), t !== null && cu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function vd(e, t, n) {
  ys(e) && n.delete(t);
}
function Lg() {
  (pl = !1),
    sn !== null && ys(sn) && (sn = null),
    an !== null && ys(an) && (an = null),
    on !== null && ys(on) && (on = null),
    wi.forEach(vd),
    yi.forEach(vd);
}
function Xr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pl ||
      ((pl = !0),
      nt.unstable_scheduleCallback(nt.unstable_NormalPriority, Lg)));
}
function Si(e) {
  function t(i) {
    return Xr(i, e);
  }
  if (0 < ss.length) {
    Xr(ss[0], e);
    for (var n = 1; n < ss.length; n++) {
      var r = ss[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    sn !== null && Xr(sn, e),
      an !== null && Xr(an, e),
      on !== null && Xr(on, e),
      wi.forEach(t),
      yi.forEach(t),
      n = 0;
    n < Kt.length;
    n++
  )
    (r = Kt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && ((n = Kt[0]), n.blockedOn === null); )
    Bf(n), n.blockedOn === null && Kt.shift();
}
var xr = Gt.ReactCurrentBatchConfig,
  Ds = !0;
function Ng(e, t, n, r) {
  var i = ee,
    s = xr.transition;
  xr.transition = null;
  try {
    (ee = 1), du(e, t, n, r);
  } finally {
    (ee = i), (xr.transition = s);
  }
}
function Ag(e, t, n, r) {
  var i = ee,
    s = xr.transition;
  xr.transition = null;
  try {
    (ee = 4), du(e, t, n, r);
  } finally {
    (ee = i), (xr.transition = s);
  }
}
function du(e, t, n, r) {
  if (Ds) {
    var i = ml(e, t, n, r);
    if (i === null) ho(e, t, r, Bs, n), gd(e, r);
    else if (Pg(i, e, t, n, r)) r.stopPropagation();
    else if ((gd(e, r), t & 4 && -1 < Tg.indexOf(e))) {
      for (; i !== null; ) {
        var s = Bi(i);
        if (
          (s !== null && _f(s),
          (s = ml(e, t, n, r)),
          s === null && ho(e, t, r, Bs, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else ho(e, t, r, null, n);
  }
}
var Bs = null;
function ml(e, t, n, r) {
  if (((Bs = null), (e = ou(r)), (e = Nn(e)), e !== null))
    if (((t = Hn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Tf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Bs = e), null;
}
function Ff(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (xg()) {
        case lu:
          return 1;
        case Af:
          return 4;
        case Rs:
        case wg:
          return 16;
        case Mf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null,
  fu = null,
  Ss = null;
function Vf() {
  if (Ss) return Ss;
  var e,
    t = fu,
    n = t.length,
    r,
    i = "value" in en ? en.value : en.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[s - r]; r++);
  return (Ss = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Cs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function as() {
  return !0;
}
function xd() {
  return !1;
}
function it(e) {
  function t(n, r, i, s, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? as
        : xd),
      (this.isPropagationStopped = xd),
      this
    );
  }
  return (
    de(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = as));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = as));
      },
      persist: function () {},
      isPersistent: as,
    }),
    t
  );
}
var Mr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pu = it(Mr),
  Di = de({}, Mr, { view: 0, detail: 0 }),
  Mg = it(Di),
  so,
  ao,
  Yr,
  ha = de({}, Di, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: mu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Yr &&
            (Yr && e.type === "mousemove"
              ? ((so = e.screenX - Yr.screenX), (ao = e.screenY - Yr.screenY))
              : (ao = so = 0),
            (Yr = e)),
          so);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ao;
    },
  }),
  wd = it(ha),
  Ig = de({}, ha, { dataTransfer: 0 }),
  Og = it(Ig),
  _g = de({}, Di, { relatedTarget: 0 }),
  oo = it(_g),
  Rg = de({}, Mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zg = it(Rg),
  Dg = de({}, Mr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Bg = it(Dg),
  Fg = de({}, Mr, { data: 0 }),
  yd = it(Fg),
  Vg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Hg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ug = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Gg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ug[e]) ? !!t[e] : !1;
}
function mu() {
  return Gg;
}
var Wg = de({}, Di, {
    key: function (e) {
      if (e.key) {
        var t = Vg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Cs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Hg[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mu,
    charCode: function (e) {
      return e.type === "keypress" ? Cs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Cs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  $g = it(Wg),
  qg = de({}, ha, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Sd = it(qg),
  Qg = de({}, Di, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mu,
  }),
  Zg = it(Qg),
  Xg = de({}, Mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yg = it(Xg),
  Kg = de({}, ha, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Jg = it(Kg),
  ev = [9, 13, 27, 32],
  hu = Bt && "CompositionEvent" in window,
  li = null;
Bt && "documentMode" in document && (li = document.documentMode);
var tv = Bt && "TextEvent" in window && !li,
  Hf = Bt && (!hu || (li && 8 < li && 11 >= li)),
  Cd = " ",
  bd = !1;
function Uf(e, t) {
  switch (e) {
    case "keyup":
      return ev.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Gf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var sr = !1;
function nv(e, t) {
  switch (e) {
    case "compositionend":
      return Gf(t);
    case "keypress":
      return t.which !== 32 ? null : ((bd = !0), Cd);
    case "textInput":
      return (e = t.data), e === Cd && bd ? null : e;
    default:
      return null;
  }
}
function rv(e, t) {
  if (sr)
    return e === "compositionend" || (!hu && Uf(e, t))
      ? ((e = Vf()), (Ss = fu = en = null), (sr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Hf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var iv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ed(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!iv[e.type] : t === "textarea";
}
function Wf(e, t, n, r) {
  Cf(r),
    (t = Fs(t, "onChange")),
    0 < t.length &&
      ((n = new pu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ui = null,
  Ci = null;
function sv(e) {
  np(e, 0);
}
function ga(e) {
  var t = lr(e);
  if (hf(t)) return e;
}
function av(e, t) {
  if (e === "change") return t;
}
var $f = !1;
if (Bt) {
  var lo;
  if (Bt) {
    var uo = "oninput" in document;
    if (!uo) {
      var kd = document.createElement("div");
      kd.setAttribute("oninput", "return;"),
        (uo = typeof kd.oninput == "function");
    }
    lo = uo;
  } else lo = !1;
  $f = lo && (!document.documentMode || 9 < document.documentMode);
}
function jd() {
  ui && (ui.detachEvent("onpropertychange", qf), (Ci = ui = null));
}
function qf(e) {
  if (e.propertyName === "value" && ga(Ci)) {
    var t = [];
    Wf(t, Ci, e, ou(e)), jf(sv, t);
  }
}
function ov(e, t, n) {
  e === "focusin"
    ? (jd(), (ui = t), (Ci = n), ui.attachEvent("onpropertychange", qf))
    : e === "focusout" && jd();
}
function lv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ga(Ci);
}
function uv(e, t) {
  if (e === "click") return ga(t);
}
function cv(e, t) {
  if (e === "input" || e === "change") return ga(t);
}
function dv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ct = typeof Object.is == "function" ? Object.is : dv;
function bi(e, t) {
  if (Ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Xo.call(t, i) || !Ct(e[i], t[i])) return !1;
  }
  return !0;
}
function Td(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Pd(e, t) {
  var n = Td(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Td(n);
  }
}
function Qf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Qf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Zf() {
  for (var e = window, t = Is(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Is(e.document);
  }
  return t;
}
function gu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function fv(e) {
  var t = Zf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Qf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && gu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Pd(n, s));
        var a = Pd(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var pv = Bt && "documentMode" in document && 11 >= document.documentMode,
  ar = null,
  hl = null,
  ci = null,
  gl = !1;
function Ld(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  gl ||
    ar == null ||
    ar !== Is(r) ||
    ((r = ar),
    "selectionStart" in r && gu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ci && bi(ci, r)) ||
      ((ci = r),
      (r = Fs(hl, "onSelect")),
      0 < r.length &&
        ((t = new pu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ar))));
}
function os(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var or = {
    animationend: os("Animation", "AnimationEnd"),
    animationiteration: os("Animation", "AnimationIteration"),
    animationstart: os("Animation", "AnimationStart"),
    transitionend: os("Transition", "TransitionEnd"),
  },
  co = {},
  Xf = {};
Bt &&
  ((Xf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete or.animationend.animation,
    delete or.animationiteration.animation,
    delete or.animationstart.animation),
  "TransitionEvent" in window || delete or.transitionend.transition);
function va(e) {
  if (co[e]) return co[e];
  if (!or[e]) return e;
  var t = or[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Xf) return (co[e] = t[n]);
  return e;
}
var Yf = va("animationend"),
  Kf = va("animationiteration"),
  Jf = va("animationstart"),
  ep = va("transitionend"),
  tp = new Map(),
  Nd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function gn(e, t) {
  tp.set(e, t), Vn(t, [e]);
}
for (var fo = 0; fo < Nd.length; fo++) {
  var po = Nd[fo],
    mv = po.toLowerCase(),
    hv = po[0].toUpperCase() + po.slice(1);
  gn(mv, "on" + hv);
}
gn(Yf, "onAnimationEnd");
gn(Kf, "onAnimationIteration");
gn(Jf, "onAnimationStart");
gn("dblclick", "onDoubleClick");
gn("focusin", "onFocus");
gn("focusout", "onBlur");
gn(ep, "onTransitionEnd");
Cr("onMouseEnter", ["mouseout", "mouseover"]);
Cr("onMouseLeave", ["mouseout", "mouseover"]);
Cr("onPointerEnter", ["pointerout", "pointerover"]);
Cr("onPointerLeave", ["pointerout", "pointerover"]);
Vn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Vn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Vn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Vn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var si =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  gv = new Set("cancel close invalid load scroll toggle".split(" ").concat(si));
function Ad(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), mg(r, t, void 0, e), (e.currentTarget = null);
}
function np(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            u = l.instance,
            m = l.currentTarget;
          if (((l = l.listener), u !== s && i.isPropagationStopped())) break e;
          Ad(i, l, m), (s = u);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (u = l.instance),
            (m = l.currentTarget),
            (l = l.listener),
            u !== s && i.isPropagationStopped())
          )
            break e;
          Ad(i, l, m), (s = u);
        }
    }
  }
  if (_s) throw ((e = dl), (_s = !1), (dl = null), e);
}
function se(e, t) {
  var n = t[Sl];
  n === void 0 && (n = t[Sl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (rp(t, e, 2, !1), n.add(r));
}
function mo(e, t, n) {
  var r = 0;
  t && (r |= 4), rp(n, e, r, t);
}
var ls = "_reactListening" + Math.random().toString(36).slice(2);
function Ei(e) {
  if (!e[ls]) {
    (e[ls] = !0),
      cf.forEach(function (n) {
        n !== "selectionchange" && (gv.has(n) || mo(n, !1, e), mo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ls] || ((t[ls] = !0), mo("selectionchange", !1, t));
  }
}
function rp(e, t, n, r) {
  switch (Ff(t)) {
    case 1:
      var i = Ng;
      break;
    case 4:
      i = Ag;
      break;
    default:
      i = du;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !cl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function ho(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var u = a.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = a.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = Nn(l)), a === null)) return;
          if (((u = a.tag), u === 5 || u === 6)) {
            r = s = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  jf(function () {
    var m = s,
      v = ou(n),
      g = [];
    e: {
      var w = tp.get(e);
      if (w !== void 0) {
        var C = pu,
          b = e;
        switch (e) {
          case "keypress":
            if (Cs(n) === 0) break e;
          case "keydown":
          case "keyup":
            C = $g;
            break;
          case "focusin":
            (b = "focus"), (C = oo);
            break;
          case "focusout":
            (b = "blur"), (C = oo);
            break;
          case "beforeblur":
          case "afterblur":
            C = oo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            C = wd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = Og;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = Zg;
            break;
          case Yf:
          case Kf:
          case Jf:
            C = zg;
            break;
          case ep:
            C = Yg;
            break;
          case "scroll":
            C = Mg;
            break;
          case "wheel":
            C = Jg;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = Bg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = Sd;
        }
        var E = (t & 4) !== 0,
          P = !E && e === "scroll",
          h = E ? (w !== null ? w + "Capture" : null) : w;
        E = [];
        for (var x = m, y; x !== null; ) {
          y = x;
          var k = y.stateNode;
          if (
            (y.tag === 5 &&
              k !== null &&
              ((y = k),
              h !== null && ((k = xi(x, h)), k != null && E.push(ki(x, k, y)))),
            P)
          )
            break;
          x = x.return;
        }
        0 < E.length &&
          ((w = new C(w, b, null, n, v)), g.push({ event: w, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((w = e === "mouseover" || e === "pointerover"),
          (C = e === "mouseout" || e === "pointerout"),
          w &&
            n !== ll &&
            (b = n.relatedTarget || n.fromElement) &&
            (Nn(b) || b[Ft]))
        )
          break e;
        if (
          (C || w) &&
          ((w =
            v.window === v
              ? v
              : (w = v.ownerDocument)
              ? w.defaultView || w.parentWindow
              : window),
          C
            ? ((b = n.relatedTarget || n.toElement),
              (C = m),
              (b = b ? Nn(b) : null),
              b !== null &&
                ((P = Hn(b)), b !== P || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((C = null), (b = m)),
          C !== b)
        ) {
          if (
            ((E = wd),
            (k = "onMouseLeave"),
            (h = "onMouseEnter"),
            (x = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((E = Sd),
              (k = "onPointerLeave"),
              (h = "onPointerEnter"),
              (x = "pointer")),
            (P = C == null ? w : lr(C)),
            (y = b == null ? w : lr(b)),
            (w = new E(k, x + "leave", C, n, v)),
            (w.target = P),
            (w.relatedTarget = y),
            (k = null),
            Nn(v) === m &&
              ((E = new E(h, x + "enter", b, n, v)),
              (E.target = y),
              (E.relatedTarget = P),
              (k = E)),
            (P = k),
            C && b)
          )
            t: {
              for (E = C, h = b, x = 0, y = E; y; y = er(y)) x++;
              for (y = 0, k = h; k; k = er(k)) y++;
              for (; 0 < x - y; ) (E = er(E)), x--;
              for (; 0 < y - x; ) (h = er(h)), y--;
              for (; x--; ) {
                if (E === h || (h !== null && E === h.alternate)) break t;
                (E = er(E)), (h = er(h));
              }
              E = null;
            }
          else E = null;
          C !== null && Md(g, w, C, E, !1),
            b !== null && P !== null && Md(g, P, b, E, !0);
        }
      }
      e: {
        if (
          ((w = m ? lr(m) : window),
          (C = w.nodeName && w.nodeName.toLowerCase()),
          C === "select" || (C === "input" && w.type === "file"))
        )
          var j = av;
        else if (Ed(w))
          if ($f) j = cv;
          else {
            j = lv;
            var I = ov;
          }
        else
          (C = w.nodeName) &&
            C.toLowerCase() === "input" &&
            (w.type === "checkbox" || w.type === "radio") &&
            (j = uv);
        if (j && (j = j(e, m))) {
          Wf(g, j, n, v);
          break e;
        }
        I && I(e, w, m),
          e === "focusout" &&
            (I = w._wrapperState) &&
            I.controlled &&
            w.type === "number" &&
            rl(w, "number", w.value);
      }
      switch (((I = m ? lr(m) : window), e)) {
        case "focusin":
          (Ed(I) || I.contentEditable === "true") &&
            ((ar = I), (hl = m), (ci = null));
          break;
        case "focusout":
          ci = hl = ar = null;
          break;
        case "mousedown":
          gl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (gl = !1), Ld(g, n, v);
          break;
        case "selectionchange":
          if (pv) break;
        case "keydown":
        case "keyup":
          Ld(g, n, v);
      }
      var z;
      if (hu)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        sr
          ? Uf(e, n) && (M = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M &&
        (Hf &&
          n.locale !== "ko" &&
          (sr || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && sr && (z = Vf())
            : ((en = v),
              (fu = "value" in en ? en.value : en.textContent),
              (sr = !0))),
        (I = Fs(m, M)),
        0 < I.length &&
          ((M = new yd(M, e, null, n, v)),
          g.push({ event: M, listeners: I }),
          z ? (M.data = z) : ((z = Gf(n)), z !== null && (M.data = z)))),
        (z = tv ? nv(e, n) : rv(e, n)) &&
          ((m = Fs(m, "onBeforeInput")),
          0 < m.length &&
            ((v = new yd("onBeforeInput", "beforeinput", null, n, v)),
            g.push({ event: v, listeners: m }),
            (v.data = z)));
    }
    np(g, t);
  });
}
function ki(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Fs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = xi(e, n)),
      s != null && r.unshift(ki(e, s, i)),
      (s = xi(e, t)),
      s != null && r.push(ki(e, s, i))),
      (e = e.return);
  }
  return r;
}
function er(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Md(e, t, n, r, i) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      m = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      m !== null &&
      ((l = m),
      i
        ? ((u = xi(n, s)), u != null && a.unshift(ki(n, u, l)))
        : i || ((u = xi(n, s)), u != null && a.push(ki(n, u, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var vv = /\r\n?/g,
  xv = /\u0000|\uFFFD/g;
function Id(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      vv,
      `
`
    )
    .replace(xv, "");
}
function us(e, t, n) {
  if (((t = Id(t)), Id(e) !== t && n)) throw Error(_(425));
}
function Vs() {}
var vl = null,
  xl = null;
function wl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var yl = typeof setTimeout == "function" ? setTimeout : void 0,
  wv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Od = typeof Promise == "function" ? Promise : void 0,
  yv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Od < "u"
      ? function (e) {
          return Od.resolve(null).then(e).catch(Sv);
        }
      : yl;
function Sv(e) {
  setTimeout(function () {
    throw e;
  });
}
function go(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Si(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Si(t);
}
function ln(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function _d(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ir = Math.random().toString(36).slice(2),
  Pt = "__reactFiber$" + Ir,
  ji = "__reactProps$" + Ir,
  Ft = "__reactContainer$" + Ir,
  Sl = "__reactEvents$" + Ir,
  Cv = "__reactListeners$" + Ir,
  bv = "__reactHandles$" + Ir;
function Nn(e) {
  var t = e[Pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ft] || n[Pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = _d(e); e !== null; ) {
          if ((n = e[Pt])) return n;
          e = _d(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Bi(e) {
  return (
    (e = e[Pt] || e[Ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function lr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function xa(e) {
  return e[ji] || null;
}
var Cl = [],
  ur = -1;
function vn(e) {
  return { current: e };
}
function ae(e) {
  0 > ur || ((e.current = Cl[ur]), (Cl[ur] = null), ur--);
}
function re(e, t) {
  ur++, (Cl[ur] = e.current), (e.current = t);
}
var hn = {},
  _e = vn(hn),
  We = vn(!1),
  _n = hn;
function br(e, t) {
  var n = e.type.contextTypes;
  if (!n) return hn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function $e(e) {
  return (e = e.childContextTypes), e != null;
}
function Hs() {
  ae(We), ae(_e);
}
function Rd(e, t, n) {
  if (_e.current !== hn) throw Error(_(168));
  re(_e, t), re(We, n);
}
function ip(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(_(108, og(e) || "Unknown", i));
  return de({}, n, r);
}
function Us(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || hn),
    (_n = _e.current),
    re(_e, e),
    re(We, We.current),
    !0
  );
}
function zd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = ip(e, t, _n)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(We),
      ae(_e),
      re(_e, e))
    : ae(We),
    re(We, n);
}
var _t = null,
  wa = !1,
  vo = !1;
function sp(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
function Ev(e) {
  (wa = !0), sp(e);
}
function xn() {
  if (!vo && _t !== null) {
    vo = !0;
    var e = 0,
      t = ee;
    try {
      var n = _t;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (_t = null), (wa = !1);
    } catch (i) {
      throw (_t !== null && (_t = _t.slice(e + 1)), Nf(lu, xn), i);
    } finally {
      (ee = t), (vo = !1);
    }
  }
  return null;
}
var cr = [],
  dr = 0,
  Gs = null,
  Ws = 0,
  lt = [],
  ut = 0,
  Rn = null,
  Rt = 1,
  zt = "";
function Pn(e, t) {
  (cr[dr++] = Ws), (cr[dr++] = Gs), (Gs = e), (Ws = t);
}
function ap(e, t, n) {
  (lt[ut++] = Rt), (lt[ut++] = zt), (lt[ut++] = Rn), (Rn = e);
  var r = Rt;
  e = zt;
  var i = 32 - yt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - yt(t) + i;
  if (30 < s) {
    var a = i - (i % 5);
    (s = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (Rt = (1 << (32 - yt(t) + i)) | (n << i) | r),
      (zt = s + e);
  } else (Rt = (1 << s) | (n << i) | r), (zt = e);
}
function vu(e) {
  e.return !== null && (Pn(e, 1), ap(e, 1, 0));
}
function xu(e) {
  for (; e === Gs; )
    (Gs = cr[--dr]), (cr[dr] = null), (Ws = cr[--dr]), (cr[dr] = null);
  for (; e === Rn; )
    (Rn = lt[--ut]),
      (lt[ut] = null),
      (zt = lt[--ut]),
      (lt[ut] = null),
      (Rt = lt[--ut]),
      (lt[ut] = null);
}
var tt = null,
  et = null,
  oe = !1,
  wt = null;
function op(e, t) {
  var n = ct(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Dd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (tt = e), (et = ln(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (tt = e), (et = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Rn !== null ? { id: Rt, overflow: zt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ct(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (tt = e),
            (et = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function bl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function El(e) {
  if (oe) {
    var t = et;
    if (t) {
      var n = t;
      if (!Dd(e, t)) {
        if (bl(e)) throw Error(_(418));
        t = ln(n.nextSibling);
        var r = tt;
        t && Dd(e, t)
          ? op(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (oe = !1), (tt = e));
      }
    } else {
      if (bl(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (oe = !1), (tt = e);
    }
  }
}
function Bd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  tt = e;
}
function cs(e) {
  if (e !== tt) return !1;
  if (!oe) return Bd(e), (oe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !wl(e.type, e.memoizedProps))),
    t && (t = et))
  ) {
    if (bl(e)) throw (lp(), Error(_(418)));
    for (; t; ) op(e, t), (t = ln(t.nextSibling));
  }
  if ((Bd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              et = ln(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      et = null;
    }
  } else et = tt ? ln(e.stateNode.nextSibling) : null;
  return !0;
}
function lp() {
  for (var e = et; e; ) e = ln(e.nextSibling);
}
function Er() {
  (et = tt = null), (oe = !1);
}
function wu(e) {
  wt === null ? (wt = [e]) : wt.push(e);
}
var kv = Gt.ReactCurrentBatchConfig;
function Kr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (a) {
            var l = i.refs;
            a === null ? delete l[s] : (l[s] = a);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function ds(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Fd(e) {
  var t = e._init;
  return t(e._payload);
}
function up(e) {
  function t(h, x) {
    if (e) {
      var y = h.deletions;
      y === null ? ((h.deletions = [x]), (h.flags |= 16)) : y.push(x);
    }
  }
  function n(h, x) {
    if (!e) return null;
    for (; x !== null; ) t(h, x), (x = x.sibling);
    return null;
  }
  function r(h, x) {
    for (h = new Map(); x !== null; )
      x.key !== null ? h.set(x.key, x) : h.set(x.index, x), (x = x.sibling);
    return h;
  }
  function i(h, x) {
    return (h = fn(h, x)), (h.index = 0), (h.sibling = null), h;
  }
  function s(h, x, y) {
    return (
      (h.index = y),
      e
        ? ((y = h.alternate),
          y !== null
            ? ((y = y.index), y < x ? ((h.flags |= 2), x) : y)
            : ((h.flags |= 2), x))
        : ((h.flags |= 1048576), x)
    );
  }
  function a(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, x, y, k) {
    return x === null || x.tag !== 6
      ? ((x = Eo(y, h.mode, k)), (x.return = h), x)
      : ((x = i(x, y)), (x.return = h), x);
  }
  function u(h, x, y, k) {
    var j = y.type;
    return j === ir
      ? v(h, x, y.props.children, k, y.key)
      : x !== null &&
        (x.elementType === j ||
          (typeof j == "object" &&
            j !== null &&
            j.$$typeof === Zt &&
            Fd(j) === x.type))
      ? ((k = i(x, y.props)), (k.ref = Kr(h, x, y)), (k.return = h), k)
      : ((k = Ls(y.type, y.key, y.props, null, h.mode, k)),
        (k.ref = Kr(h, x, y)),
        (k.return = h),
        k);
  }
  function m(h, x, y, k) {
    return x === null ||
      x.tag !== 4 ||
      x.stateNode.containerInfo !== y.containerInfo ||
      x.stateNode.implementation !== y.implementation
      ? ((x = ko(y, h.mode, k)), (x.return = h), x)
      : ((x = i(x, y.children || [])), (x.return = h), x);
  }
  function v(h, x, y, k, j) {
    return x === null || x.tag !== 7
      ? ((x = On(y, h.mode, k, j)), (x.return = h), x)
      : ((x = i(x, y)), (x.return = h), x);
  }
  function g(h, x, y) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (x = Eo("" + x, h.mode, y)), (x.return = h), x;
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case es:
          return (
            (y = Ls(x.type, x.key, x.props, null, h.mode, y)),
            (y.ref = Kr(h, null, x)),
            (y.return = h),
            y
          );
        case rr:
          return (x = ko(x, h.mode, y)), (x.return = h), x;
        case Zt:
          var k = x._init;
          return g(h, k(x._payload), y);
      }
      if (ri(x) || qr(x))
        return (x = On(x, h.mode, y, null)), (x.return = h), x;
      ds(h, x);
    }
    return null;
  }
  function w(h, x, y, k) {
    var j = x !== null ? x.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return j !== null ? null : l(h, x, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case es:
          return y.key === j ? u(h, x, y, k) : null;
        case rr:
          return y.key === j ? m(h, x, y, k) : null;
        case Zt:
          return (j = y._init), w(h, x, j(y._payload), k);
      }
      if (ri(y) || qr(y)) return j !== null ? null : v(h, x, y, k, null);
      ds(h, y);
    }
    return null;
  }
  function C(h, x, y, k, j) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (h = h.get(y) || null), l(x, h, "" + k, j);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case es:
          return (h = h.get(k.key === null ? y : k.key) || null), u(x, h, k, j);
        case rr:
          return (h = h.get(k.key === null ? y : k.key) || null), m(x, h, k, j);
        case Zt:
          var I = k._init;
          return C(h, x, y, I(k._payload), j);
      }
      if (ri(k) || qr(k)) return (h = h.get(y) || null), v(x, h, k, j, null);
      ds(x, k);
    }
    return null;
  }
  function b(h, x, y, k) {
    for (
      var j = null, I = null, z = x, M = (x = 0), R = null;
      z !== null && M < y.length;
      M++
    ) {
      z.index > M ? ((R = z), (z = null)) : (R = z.sibling);
      var A = w(h, z, y[M], k);
      if (A === null) {
        z === null && (z = R);
        break;
      }
      e && z && A.alternate === null && t(h, z),
        (x = s(A, x, M)),
        I === null ? (j = A) : (I.sibling = A),
        (I = A),
        (z = R);
    }
    if (M === y.length) return n(h, z), oe && Pn(h, M), j;
    if (z === null) {
      for (; M < y.length; M++)
        (z = g(h, y[M], k)),
          z !== null &&
            ((x = s(z, x, M)), I === null ? (j = z) : (I.sibling = z), (I = z));
      return oe && Pn(h, M), j;
    }
    for (z = r(h, z); M < y.length; M++)
      (R = C(z, h, M, y[M], k)),
        R !== null &&
          (e && R.alternate !== null && z.delete(R.key === null ? M : R.key),
          (x = s(R, x, M)),
          I === null ? (j = R) : (I.sibling = R),
          (I = R));
    return (
      e &&
        z.forEach(function (V) {
          return t(h, V);
        }),
      oe && Pn(h, M),
      j
    );
  }
  function E(h, x, y, k) {
    var j = qr(y);
    if (typeof j != "function") throw Error(_(150));
    if (((y = j.call(y)), y == null)) throw Error(_(151));
    for (
      var I = (j = null), z = x, M = (x = 0), R = null, A = y.next();
      z !== null && !A.done;
      M++, A = y.next()
    ) {
      z.index > M ? ((R = z), (z = null)) : (R = z.sibling);
      var V = w(h, z, A.value, k);
      if (V === null) {
        z === null && (z = R);
        break;
      }
      e && z && V.alternate === null && t(h, z),
        (x = s(V, x, M)),
        I === null ? (j = V) : (I.sibling = V),
        (I = V),
        (z = R);
    }
    if (A.done) return n(h, z), oe && Pn(h, M), j;
    if (z === null) {
      for (; !A.done; M++, A = y.next())
        (A = g(h, A.value, k)),
          A !== null &&
            ((x = s(A, x, M)), I === null ? (j = A) : (I.sibling = A), (I = A));
      return oe && Pn(h, M), j;
    }
    for (z = r(h, z); !A.done; M++, A = y.next())
      (A = C(z, h, M, A.value, k)),
        A !== null &&
          (e && A.alternate !== null && z.delete(A.key === null ? M : A.key),
          (x = s(A, x, M)),
          I === null ? (j = A) : (I.sibling = A),
          (I = A));
    return (
      e &&
        z.forEach(function (D) {
          return t(h, D);
        }),
      oe && Pn(h, M),
      j
    );
  }
  function P(h, x, y, k) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === ir &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case es:
          e: {
            for (var j = y.key, I = x; I !== null; ) {
              if (I.key === j) {
                if (((j = y.type), j === ir)) {
                  if (I.tag === 7) {
                    n(h, I.sibling),
                      (x = i(I, y.props.children)),
                      (x.return = h),
                      (h = x);
                    break e;
                  }
                } else if (
                  I.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === Zt &&
                    Fd(j) === I.type)
                ) {
                  n(h, I.sibling),
                    (x = i(I, y.props)),
                    (x.ref = Kr(h, I, y)),
                    (x.return = h),
                    (h = x);
                  break e;
                }
                n(h, I);
                break;
              } else t(h, I);
              I = I.sibling;
            }
            y.type === ir
              ? ((x = On(y.props.children, h.mode, k, y.key)),
                (x.return = h),
                (h = x))
              : ((k = Ls(y.type, y.key, y.props, null, h.mode, k)),
                (k.ref = Kr(h, x, y)),
                (k.return = h),
                (h = k));
          }
          return a(h);
        case rr:
          e: {
            for (I = y.key; x !== null; ) {
              if (x.key === I)
                if (
                  x.tag === 4 &&
                  x.stateNode.containerInfo === y.containerInfo &&
                  x.stateNode.implementation === y.implementation
                ) {
                  n(h, x.sibling),
                    (x = i(x, y.children || [])),
                    (x.return = h),
                    (h = x);
                  break e;
                } else {
                  n(h, x);
                  break;
                }
              else t(h, x);
              x = x.sibling;
            }
            (x = ko(y, h.mode, k)), (x.return = h), (h = x);
          }
          return a(h);
        case Zt:
          return (I = y._init), P(h, x, I(y._payload), k);
      }
      if (ri(y)) return b(h, x, y, k);
      if (qr(y)) return E(h, x, y, k);
      ds(h, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        x !== null && x.tag === 6
          ? (n(h, x.sibling), (x = i(x, y)), (x.return = h), (h = x))
          : (n(h, x), (x = Eo(y, h.mode, k)), (x.return = h), (h = x)),
        a(h))
      : n(h, x);
  }
  return P;
}
var kr = up(!0),
  cp = up(!1),
  $s = vn(null),
  qs = null,
  fr = null,
  yu = null;
function Su() {
  yu = fr = qs = null;
}
function Cu(e) {
  var t = $s.current;
  ae($s), (e._currentValue = t);
}
function kl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function wr(e, t) {
  (qs = e),
    (yu = fr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ge = !0), (e.firstContext = null));
}
function ft(e) {
  var t = e._currentValue;
  if (yu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), fr === null)) {
      if (qs === null) throw Error(_(308));
      (fr = e), (qs.dependencies = { lanes: 0, firstContext: e });
    } else fr = fr.next = e;
  return t;
}
var An = null;
function bu(e) {
  An === null ? (An = [e]) : An.push(e);
}
function dp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), bu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Vt(e, r)
  );
}
function Vt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Xt = !1;
function Eu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function fp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Dt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Y & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Vt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), bu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Vt(e, n)
  );
}
function bs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), uu(e, n);
  }
}
function Vd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = a) : (s = s.next = a), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Qs(e, t, n, r) {
  var i = e.updateQueue;
  Xt = !1;
  var s = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      m = u.next;
    (u.next = null), a === null ? (s = m) : (a.next = m), (a = u);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (l = v.lastBaseUpdate),
      l !== a &&
        (l === null ? (v.firstBaseUpdate = m) : (l.next = m),
        (v.lastBaseUpdate = u)));
  }
  if (s !== null) {
    var g = i.baseState;
    (a = 0), (v = m = u = null), (l = s);
    do {
      var w = l.lane,
        C = l.eventTime;
      if ((r & w) === w) {
        v !== null &&
          (v = v.next =
            {
              eventTime: C,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var b = e,
            E = l;
          switch (((w = t), (C = n), E.tag)) {
            case 1:
              if (((b = E.payload), typeof b == "function")) {
                g = b.call(C, g, w);
                break e;
              }
              g = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = E.payload),
                (w = typeof b == "function" ? b.call(C, g, w) : b),
                w == null)
              )
                break e;
              g = de({}, g, w);
              break e;
            case 2:
              Xt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (w = i.effects),
          w === null ? (i.effects = [l]) : w.push(l));
      } else
        (C = {
          eventTime: C,
          lane: w,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          v === null ? ((m = v = C), (u = g)) : (v = v.next = C),
          (a |= w);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (w = l),
          (l = w.next),
          (w.next = null),
          (i.lastBaseUpdate = w),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (u = g),
      (i.baseState = u),
      (i.firstBaseUpdate = m),
      (i.lastBaseUpdate = v),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Dn |= a), (e.lanes = a), (e.memoizedState = g);
  }
}
function Hd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(_(191, i));
        i.call(r);
      }
    }
}
var Fi = {},
  At = vn(Fi),
  Ti = vn(Fi),
  Pi = vn(Fi);
function Mn(e) {
  if (e === Fi) throw Error(_(174));
  return e;
}
function ku(e, t) {
  switch ((re(Pi, t), re(Ti, e), re(At, Fi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : sl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = sl(t, e));
  }
  ae(At), re(At, t);
}
function jr() {
  ae(At), ae(Ti), ae(Pi);
}
function pp(e) {
  Mn(Pi.current);
  var t = Mn(At.current),
    n = sl(t, e.type);
  t !== n && (re(Ti, e), re(At, n));
}
function ju(e) {
  Ti.current === e && (ae(At), ae(Ti));
}
var ue = vn(0);
function Zs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var xo = [];
function Tu() {
  for (var e = 0; e < xo.length; e++)
    xo[e]._workInProgressVersionPrimary = null;
  xo.length = 0;
}
var Es = Gt.ReactCurrentDispatcher,
  wo = Gt.ReactCurrentBatchConfig,
  zn = 0,
  ce = null,
  ye = null,
  ke = null,
  Xs = !1,
  di = !1,
  Li = 0,
  jv = 0;
function Me() {
  throw Error(_(321));
}
function Pu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ct(e[n], t[n])) return !1;
  return !0;
}
function Lu(e, t, n, r, i, s) {
  if (
    ((zn = s),
    (ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Es.current = e === null || e.memoizedState === null ? Nv : Av),
    (e = n(r, i)),
    di)
  ) {
    s = 0;
    do {
      if (((di = !1), (Li = 0), 25 <= s)) throw Error(_(301));
      (s += 1),
        (ke = ye = null),
        (t.updateQueue = null),
        (Es.current = Mv),
        (e = n(r, i));
    } while (di);
  }
  if (
    ((Es.current = Ys),
    (t = ye !== null && ye.next !== null),
    (zn = 0),
    (ke = ye = ce = null),
    (Xs = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function Nu() {
  var e = Li !== 0;
  return (Li = 0), e;
}
function Tt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (ce.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function pt() {
  if (ye === null) {
    var e = ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ye.next;
  var t = ke === null ? ce.memoizedState : ke.next;
  if (t !== null) (ke = t), (ye = e);
  else {
    if (e === null) throw Error(_(310));
    (ye = e),
      (e = {
        memoizedState: ye.memoizedState,
        baseState: ye.baseState,
        baseQueue: ye.baseQueue,
        queue: ye.queue,
        next: null,
      }),
      ke === null ? (ce.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function Ni(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yo(e) {
  var t = pt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = ye,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = s.next), (s.next = a);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (a = null),
      u = null,
      m = s;
    do {
      var v = m.lane;
      if ((zn & v) === v)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
          (r = m.hasEagerState ? m.eagerState : e(r, m.action));
      else {
        var g = {
          lane: v,
          action: m.action,
          hasEagerState: m.hasEagerState,
          eagerState: m.eagerState,
          next: null,
        };
        u === null ? ((l = u = g), (a = r)) : (u = u.next = g),
          (ce.lanes |= v),
          (Dn |= v);
      }
      m = m.next;
    } while (m !== null && m !== s);
    u === null ? (a = r) : (u.next = l),
      Ct(r, t.memoizedState) || (Ge = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (ce.lanes |= s), (Dn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function So(e) {
  var t = pt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (s = e(s, a.action)), (a = a.next);
    while (a !== i);
    Ct(s, t.memoizedState) || (Ge = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function mp() {}
function hp(e, t) {
  var n = ce,
    r = pt(),
    i = t(),
    s = !Ct(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ge = !0)),
    (r = r.queue),
    Au(xp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ai(9, vp.bind(null, n, r, i, t), void 0, null),
      je === null)
    )
      throw Error(_(349));
    zn & 30 || gp(n, t, i);
  }
  return i;
}
function gp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function vp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), wp(t) && yp(e);
}
function xp(e, t, n) {
  return n(function () {
    wp(t) && yp(e);
  });
}
function wp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ct(e, n);
  } catch {
    return !0;
  }
}
function yp(e) {
  var t = Vt(e, 1);
  t !== null && St(t, e, 1, -1);
}
function Ud(e) {
  var t = Tt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ni,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Lv.bind(null, ce, e)),
    [t.memoizedState, e]
  );
}
function Ai(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Sp() {
  return pt().memoizedState;
}
function ks(e, t, n, r) {
  var i = Tt();
  (ce.flags |= e),
    (i.memoizedState = Ai(1 | t, n, void 0, r === void 0 ? null : r));
}
function ya(e, t, n, r) {
  var i = pt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ye !== null) {
    var a = ye.memoizedState;
    if (((s = a.destroy), r !== null && Pu(r, a.deps))) {
      i.memoizedState = Ai(t, n, s, r);
      return;
    }
  }
  (ce.flags |= e), (i.memoizedState = Ai(1 | t, n, s, r));
}
function Gd(e, t) {
  return ks(8390656, 8, e, t);
}
function Au(e, t) {
  return ya(2048, 8, e, t);
}
function Cp(e, t) {
  return ya(4, 2, e, t);
}
function bp(e, t) {
  return ya(4, 4, e, t);
}
function Ep(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function kp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ya(4, 4, Ep.bind(null, t, e), n)
  );
}
function Mu() {}
function jp(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Tp(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Pp(e, t, n) {
  return zn & 21
    ? (Ct(n, t) || ((n = If()), (ce.lanes |= n), (Dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ge = !0)), (e.memoizedState = n));
}
function Tv(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = wo.transition;
  wo.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (wo.transition = r);
  }
}
function Lp() {
  return pt().memoizedState;
}
function Pv(e, t, n) {
  var r = dn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Np(e))
  )
    Ap(t, n);
  else if (((n = dp(e, t, n, r)), n !== null)) {
    var i = ze();
    St(n, e, r, i), Mp(n, t, r);
  }
}
function Lv(e, t, n) {
  var r = dn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Np(e)) Ap(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = s(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Ct(l, a))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), bu(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = dp(e, t, i, r)),
      n !== null && ((i = ze()), St(n, e, r, i), Mp(n, t, r));
  }
}
function Np(e) {
  var t = e.alternate;
  return e === ce || (t !== null && t === ce);
}
function Ap(e, t) {
  di = Xs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Mp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), uu(e, n);
  }
}
var Ys = {
    readContext: ft,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1,
  },
  Nv = {
    readContext: ft,
    useCallback: function (e, t) {
      return (Tt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ft,
    useEffect: Gd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ks(4194308, 4, Ep.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ks(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ks(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Tt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Tt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Pv.bind(null, ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Tt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ud,
    useDebugValue: Mu,
    useDeferredValue: function (e) {
      return (Tt().memoizedState = e);
    },
    useTransition: function () {
      var e = Ud(!1),
        t = e[0];
      return (e = Tv.bind(null, e[1])), (Tt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ce,
        i = Tt();
      if (oe) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), je === null)) throw Error(_(349));
        zn & 30 || gp(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Gd(xp.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Ai(9, vp.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Tt(),
        t = je.identifierPrefix;
      if (oe) {
        var n = zt,
          r = Rt;
        (n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Li++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = jv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Av = {
    readContext: ft,
    useCallback: jp,
    useContext: ft,
    useEffect: Au,
    useImperativeHandle: kp,
    useInsertionEffect: Cp,
    useLayoutEffect: bp,
    useMemo: Tp,
    useReducer: yo,
    useRef: Sp,
    useState: function () {
      return yo(Ni);
    },
    useDebugValue: Mu,
    useDeferredValue: function (e) {
      var t = pt();
      return Pp(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = yo(Ni)[0],
        t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: mp,
    useSyncExternalStore: hp,
    useId: Lp,
    unstable_isNewReconciler: !1,
  },
  Mv = {
    readContext: ft,
    useCallback: jp,
    useContext: ft,
    useEffect: Au,
    useImperativeHandle: kp,
    useInsertionEffect: Cp,
    useLayoutEffect: bp,
    useMemo: Tp,
    useReducer: So,
    useRef: Sp,
    useState: function () {
      return So(Ni);
    },
    useDebugValue: Mu,
    useDeferredValue: function (e) {
      var t = pt();
      return ye === null ? (t.memoizedState = e) : Pp(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = So(Ni)[0],
        t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: mp,
    useSyncExternalStore: hp,
    useId: Lp,
    unstable_isNewReconciler: !1,
  };
function vt(e, t) {
  if (e && e.defaultProps) {
    (t = de({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function jl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : de({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Sa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Hn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      i = dn(e),
      s = Dt(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = un(e, s, i)),
      t !== null && (St(t, e, i, r), bs(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      i = dn(e),
      s = Dt(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = un(e, s, i)),
      t !== null && (St(t, e, i, r), bs(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ze(),
      r = dn(e),
      i = Dt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = un(e, i, r)),
      t !== null && (St(t, e, r, n), bs(t, e, r));
  },
};
function Wd(e, t, n, r, i, s, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bi(n, r) || !bi(i, s)
      : !0
  );
}
function Ip(e, t, n) {
  var r = !1,
    i = hn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = ft(s))
      : ((i = $e(t) ? _n : _e.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? br(e, i) : hn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Sa),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function $d(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Sa.enqueueReplaceState(t, t.state, null);
}
function Tl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Eu(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = ft(s))
    : ((s = $e(t) ? _n : _e.current), (i.context = br(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (jl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Sa.enqueueReplaceState(i, i.state, null),
      Qs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Tr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += ag(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Co(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Pl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Iv = typeof WeakMap == "function" ? WeakMap : Map;
function Op(e, t, n) {
  (n = Dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Js || ((Js = !0), (Dl = r)), Pl(e, t);
    }),
    n
  );
}
function _p(e, t, n) {
  (n = Dt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Pl(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Pl(e, t),
          typeof r != "function" &&
            (cn === null ? (cn = new Set([this])) : cn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function qd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Iv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = qv.bind(null, e, t, n)), t.then(e, e));
}
function Qd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Zd(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Dt(-1, 1)), (t.tag = 2), un(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ov = Gt.ReactCurrentOwner,
  Ge = !1;
function Re(e, t, n, r) {
  t.child = e === null ? cp(t, null, n, r) : kr(t, e.child, n, r);
}
function Xd(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    wr(t, i),
    (r = Lu(e, t, n, r, s, i)),
    (n = Nu()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ht(e, t, i))
      : (oe && n && vu(t), (t.flags |= 1), Re(e, t, r, i), t.child)
  );
}
function Yd(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Fu(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Rp(e, t, s, r, i))
      : ((e = Ls(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var a = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bi), n(a, r) && e.ref === t.ref)
    )
      return Ht(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = fn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Rp(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (bi(s, r) && e.ref === t.ref)
      if (((Ge = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ge = !0);
      else return (t.lanes = e.lanes), Ht(e, t, i);
  }
  return Ll(e, t, n, r, i);
}
function zp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        re(mr, Ke),
        (Ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          re(mr, Ke),
          (Ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        re(mr, Ke),
        (Ke |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      re(mr, Ke),
      (Ke |= r);
  return Re(e, t, i, n), t.child;
}
function Dp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ll(e, t, n, r, i) {
  var s = $e(n) ? _n : _e.current;
  return (
    (s = br(t, s)),
    wr(t, i),
    (n = Lu(e, t, n, r, s, i)),
    (r = Nu()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ht(e, t, i))
      : (oe && r && vu(t), (t.flags |= 1), Re(e, t, n, i), t.child)
  );
}
function Kd(e, t, n, r, i) {
  if ($e(n)) {
    var s = !0;
    Us(t);
  } else s = !1;
  if ((wr(t, i), t.stateNode === null))
    js(e, t), Ip(t, n, r), Tl(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var u = a.context,
      m = n.contextType;
    typeof m == "object" && m !== null
      ? (m = ft(m))
      : ((m = $e(n) ? _n : _e.current), (m = br(t, m)));
    var v = n.getDerivedStateFromProps,
      g =
        typeof v == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== r || u !== m) && $d(t, a, r, m)),
      (Xt = !1);
    var w = t.memoizedState;
    (a.state = w),
      Qs(t, r, a, i),
      (u = t.memoizedState),
      l !== r || w !== u || We.current || Xt
        ? (typeof v == "function" && (jl(t, n, v, r), (u = t.memoizedState)),
          (l = Xt || Wd(t, n, l, r, w, u, m))
            ? (g ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (a.props = r),
          (a.state = u),
          (a.context = m),
          (r = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      fp(e, t),
      (l = t.memoizedProps),
      (m = t.type === t.elementType ? l : vt(t.type, l)),
      (a.props = m),
      (g = t.pendingProps),
      (w = a.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = ft(u))
        : ((u = $e(n) ? _n : _e.current), (u = br(t, u)));
    var C = n.getDerivedStateFromProps;
    (v =
      typeof C == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== g || w !== u) && $d(t, a, r, u)),
      (Xt = !1),
      (w = t.memoizedState),
      (a.state = w),
      Qs(t, r, a, i);
    var b = t.memoizedState;
    l !== g || w !== b || We.current || Xt
      ? (typeof C == "function" && (jl(t, n, C, r), (b = t.memoizedState)),
        (m = Xt || Wd(t, n, m, r, w, b, u) || !1)
          ? (v ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, b, u),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, b, u)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && w === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && w === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = b)),
        (a.props = r),
        (a.state = b),
        (a.context = u),
        (r = m))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && w === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && w === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Nl(e, t, n, r, s, i);
}
function Nl(e, t, n, r, i, s) {
  Dp(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && zd(t, n, !1), Ht(e, t, s);
  (r = t.stateNode), (Ov.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = kr(t, e.child, null, s)), (t.child = kr(t, null, l, s)))
      : Re(e, t, l, s),
    (t.memoizedState = r.state),
    i && zd(t, n, !0),
    t.child
  );
}
function Bp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Rd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Rd(e, t.context, !1),
    ku(e, t.containerInfo);
}
function Jd(e, t, n, r, i) {
  return Er(), wu(i), (t.flags |= 256), Re(e, t, n, r), t.child;
}
var Al = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ml(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Fp(e, t, n) {
  var r = t.pendingProps,
    i = ue.current,
    s = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    re(ue, i & 1),
    e === null)
  )
    return (
      El(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = Ea(a, r, 0, null)),
              (e = On(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Ml(n)),
              (t.memoizedState = Al),
              e)
            : Iu(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return _v(e, t, a, r, l, i, n);
  if (s) {
    (s = r.fallback), (a = t.mode), (i = e.child), (l = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = fn(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = fn(l, s)) : ((s = On(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Ml(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Al),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = fn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Iu(e, t) {
  return (
    (t = Ea({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function fs(e, t, n, r) {
  return (
    r !== null && wu(r),
    kr(t, e.child, null, n),
    (e = Iu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function _v(e, t, n, r, i, s, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Co(Error(_(422)))), fs(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Ea({ mode: "visible", children: r.children }, i, 0, null)),
        (s = On(s, i, a, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && kr(t, e.child, null, a),
        (t.child.memoizedState = Ml(a)),
        (t.memoizedState = Al),
        s);
  if (!(t.mode & 1)) return fs(e, t, a, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(_(419))), (r = Co(s, r, void 0)), fs(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), Ge || l)) {
    if (((r = je), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Vt(e, i), St(r, e, i, -1));
    }
    return Bu(), (r = Co(Error(_(421)))), fs(e, t, a, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Qv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (et = ln(i.nextSibling)),
      (tt = t),
      (oe = !0),
      (wt = null),
      e !== null &&
        ((lt[ut++] = Rt),
        (lt[ut++] = zt),
        (lt[ut++] = Rn),
        (Rt = e.id),
        (zt = e.overflow),
        (Rn = t)),
      (t = Iu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function e0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), kl(e.return, t, n);
}
function bo(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Vp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Re(e, t, r.children, n), (r = ue.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && e0(e, n, t);
        else if (e.tag === 19) e0(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((re(ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Zs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          bo(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Zs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        bo(t, !0, n, null, s);
        break;
      case "together":
        bo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function js(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ht(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = fn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Rv(e, t, n) {
  switch (t.tag) {
    case 3:
      Bp(t), Er();
      break;
    case 5:
      pp(t);
      break;
    case 1:
      $e(t.type) && Us(t);
      break;
    case 4:
      ku(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      re($s, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Fp(e, t, n)
          : (re(ue, ue.current & 1),
            (e = Ht(e, t, n)),
            e !== null ? e.sibling : null);
      re(ue, ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Vp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        re(ue, ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), zp(e, t, n);
  }
  return Ht(e, t, n);
}
var Hp, Il, Up, Gp;
Hp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Il = function () {};
Up = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Mn(At.current);
    var s = null;
    switch (n) {
      case "input":
        (i = tl(e, i)), (r = tl(e, r)), (s = []);
        break;
      case "select":
        (i = de({}, i, { value: void 0 })),
          (r = de({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = il(e, i)), (r = il(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Vs);
    }
    al(n, r);
    var a;
    n = null;
    for (m in i)
      if (!r.hasOwnProperty(m) && i.hasOwnProperty(m) && i[m] != null)
        if (m === "style") {
          var l = i[m];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          m !== "dangerouslySetInnerHTML" &&
            m !== "children" &&
            m !== "suppressContentEditableWarning" &&
            m !== "suppressHydrationWarning" &&
            m !== "autoFocus" &&
            (gi.hasOwnProperty(m)
              ? s || (s = [])
              : (s = s || []).push(m, null));
    for (m in r) {
      var u = r[m];
      if (
        ((l = i != null ? i[m] : void 0),
        r.hasOwnProperty(m) && u !== l && (u != null || l != null))
      )
        if (m === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (u && u.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in u)
              u.hasOwnProperty(a) &&
                l[a] !== u[a] &&
                (n || (n = {}), (n[a] = u[a]));
          } else n || (s || (s = []), s.push(m, n)), (n = u);
        else
          m === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (s = s || []).push(m, u))
            : m === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (s = s || []).push(m, "" + u)
            : m !== "suppressContentEditableWarning" &&
              m !== "suppressHydrationWarning" &&
              (gi.hasOwnProperty(m)
                ? (u != null && m === "onScroll" && se("scroll", e),
                  s || l === u || (s = []))
                : (s = s || []).push(m, u));
    }
    n && (s = s || []).push("style", n);
    var m = s;
    (t.updateQueue = m) && (t.flags |= 4);
  }
};
Gp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Jr(e, t) {
  if (!oe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function zv(e, t, n) {
  var r = t.pendingProps;
  switch ((xu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ie(t), null;
    case 1:
      return $e(t.type) && Hs(), Ie(t), null;
    case 3:
      return (
        (r = t.stateNode),
        jr(),
        ae(We),
        ae(_e),
        Tu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (cs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), wt !== null && (Vl(wt), (wt = null)))),
        Il(e, t),
        Ie(t),
        null
      );
    case 5:
      ju(t);
      var i = Mn(Pi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Up(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return Ie(t), null;
        }
        if (((e = Mn(At.current)), cs(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Pt] = t), (r[ji] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < si.length; i++) se(si[i], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se("error", r), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              ud(r, s), se("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                se("invalid", r);
              break;
            case "textarea":
              dd(r, s), se("invalid", r);
          }
          al(n, s), (i = null);
          for (var a in s)
            if (s.hasOwnProperty(a)) {
              var l = s[a];
              a === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      us(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      us(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : gi.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  se("scroll", r);
            }
          switch (n) {
            case "input":
              ts(r), cd(r, s, !0);
              break;
            case "textarea":
              ts(r), fd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Vs);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = xf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Pt] = t),
            (e[ji] = r),
            Hp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = ol(n, r)), n)) {
              case "dialog":
                se("cancel", e), se("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < si.length; i++) se(si[i], e);
                i = r;
                break;
              case "source":
                se("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                se("error", e), se("load", e), (i = r);
                break;
              case "details":
                se("toggle", e), (i = r);
                break;
              case "input":
                ud(e, r), (i = tl(e, r)), se("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = de({}, r, { value: void 0 })),
                  se("invalid", e);
                break;
              case "textarea":
                dd(e, r), (i = il(e, r)), se("invalid", e);
                break;
              default:
                i = r;
            }
            al(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var u = l[s];
                s === "style"
                  ? Sf(e, u)
                  : s === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && wf(e, u))
                  : s === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && vi(e, u)
                    : typeof u == "number" && vi(e, "" + u)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (gi.hasOwnProperty(s)
                      ? u != null && s === "onScroll" && se("scroll", e)
                      : u != null && ru(e, s, u, a));
              }
            switch (n) {
              case "input":
                ts(e), cd(e, r, !1);
                break;
              case "textarea":
                ts(e), fd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? hr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      hr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Vs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ie(t), null;
    case 6:
      if (e && t.stateNode != null) Gp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = Mn(Pi.current)), Mn(At.current), cs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Pt] = t),
            (s = r.nodeValue !== n) && ((e = tt), e !== null))
          )
            switch (e.tag) {
              case 3:
                us(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  us(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Pt] = t),
            (t.stateNode = r);
      }
      return Ie(t), null;
    case 13:
      if (
        (ae(ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (oe && et !== null && t.mode & 1 && !(t.flags & 128))
          lp(), Er(), (t.flags |= 98560), (s = !1);
        else if (((s = cs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(_(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(_(317));
            s[Pt] = t;
          } else
            Er(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ie(t), (s = !1);
        } else wt !== null && (Vl(wt), (wt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? Se === 0 && (Se = 3) : Bu())),
          t.updateQueue !== null && (t.flags |= 4),
          Ie(t),
          null);
    case 4:
      return (
        jr(), Il(e, t), e === null && Ei(t.stateNode.containerInfo), Ie(t), null
      );
    case 10:
      return Cu(t.type._context), Ie(t), null;
    case 17:
      return $e(t.type) && Hs(), Ie(t), null;
    case 19:
      if ((ae(ue), (s = t.memoizedState), s === null)) return Ie(t), null;
      if (((r = (t.flags & 128) !== 0), (a = s.rendering), a === null))
        if (r) Jr(s, !1);
        else {
          if (Se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Zs(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Jr(s, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (a = s.alternate),
                    a === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = a.childLanes),
                        (s.lanes = a.lanes),
                        (s.child = a.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = a.memoizedProps),
                        (s.memoizedState = a.memoizedState),
                        (s.updateQueue = a.updateQueue),
                        (s.type = a.type),
                        (e = a.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return re(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ve() > Pr &&
            ((t.flags |= 128), (r = !0), Jr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Zs(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Jr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !a.alternate && !oe)
            )
              return Ie(t), null;
          } else
            2 * ve() - s.renderingStartTime > Pr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Jr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = s.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (s.last = a));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = ve()),
          (t.sibling = null),
          (n = ue.current),
          re(ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ie(t), null);
    case 22:
    case 23:
      return (
        Du(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ke & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function Dv(e, t) {
  switch ((xu(t), t.tag)) {
    case 1:
      return (
        $e(t.type) && Hs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        jr(),
        ae(We),
        ae(_e),
        Tu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ju(t), null;
    case 13:
      if (
        (ae(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340));
        Er();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ae(ue), null;
    case 4:
      return jr(), null;
    case 10:
      return Cu(t.type._context), null;
    case 22:
    case 23:
      return Du(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ps = !1,
  Oe = !1,
  Bv = typeof WeakSet == "function" ? WeakSet : Set,
  U = null;
function pr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        pe(e, t, r);
      }
    else n.current = null;
}
function Ol(e, t, n) {
  try {
    n();
  } catch (r) {
    pe(e, t, r);
  }
}
var t0 = !1;
function Fv(e, t) {
  if (((vl = Ds), (e = Zf()), gu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            u = -1,
            m = 0,
            v = 0,
            g = e,
            w = null;
          t: for (;;) {
            for (
              var C;
              g !== n || (i !== 0 && g.nodeType !== 3) || (l = a + i),
                g !== s || (r !== 0 && g.nodeType !== 3) || (u = a + r),
                g.nodeType === 3 && (a += g.nodeValue.length),
                (C = g.firstChild) !== null;

            )
              (w = g), (g = C);
            for (;;) {
              if (g === e) break t;
              if (
                (w === n && ++m === i && (l = a),
                w === s && ++v === r && (u = a),
                (C = g.nextSibling) !== null)
              )
                break;
              (g = w), (w = g.parentNode);
            }
            g = C;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xl = { focusedElem: e, selectionRange: n }, Ds = !1, U = t; U !== null; )
    if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (U = e);
    else
      for (; U !== null; ) {
        t = U;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var E = b.memoizedProps,
                    P = b.memoizedState,
                    h = t.stateNode,
                    x = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? E : vt(t.type, E),
                      P
                    );
                  h.__reactInternalSnapshotBeforeUpdate = x;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (k) {
          pe(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (U = e);
          break;
        }
        U = t.return;
      }
  return (b = t0), (t0 = !1), b;
}
function fi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Ol(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ca(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function _l(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Wp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Wp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Pt], delete t[ji], delete t[Sl], delete t[Cv], delete t[bv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function $p(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function n0(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || $p(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Rl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Vs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Rl(e, t, n), e = e.sibling; e !== null; ) Rl(e, t, n), (e = e.sibling);
}
function zl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zl(e, t, n), e = e.sibling; e !== null; ) zl(e, t, n), (e = e.sibling);
}
var Te = null,
  xt = !1;
function Qt(e, t, n) {
  for (n = n.child; n !== null; ) qp(e, t, n), (n = n.sibling);
}
function qp(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function")
    try {
      Nt.onCommitFiberUnmount(ma, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Oe || pr(n, t);
    case 6:
      var r = Te,
        i = xt;
      (Te = null),
        Qt(e, t, n),
        (Te = r),
        (xt = i),
        Te !== null &&
          (xt
            ? ((e = Te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Te.removeChild(n.stateNode));
      break;
    case 18:
      Te !== null &&
        (xt
          ? ((e = Te),
            (n = n.stateNode),
            e.nodeType === 8
              ? go(e.parentNode, n)
              : e.nodeType === 1 && go(e, n),
            Si(e))
          : go(Te, n.stateNode));
      break;
    case 4:
      (r = Te),
        (i = xt),
        (Te = n.stateNode.containerInfo),
        (xt = !0),
        Qt(e, t, n),
        (Te = r),
        (xt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            a = s.destroy;
          (s = s.tag),
            a !== void 0 && (s & 2 || s & 4) && Ol(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      Qt(e, t, n);
      break;
    case 1:
      if (
        !Oe &&
        (pr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          pe(n, t, l);
        }
      Qt(e, t, n);
      break;
    case 21:
      Qt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Oe = (r = Oe) || n.memoizedState !== null), Qt(e, t, n), (Oe = r))
        : Qt(e, t, n);
      break;
    default:
      Qt(e, t, n);
  }
}
function r0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Bv()),
      t.forEach(function (r) {
        var i = Zv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ht(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Te = l.stateNode), (xt = !1);
              break e;
            case 3:
              (Te = l.stateNode.containerInfo), (xt = !0);
              break e;
            case 4:
              (Te = l.stateNode.containerInfo), (xt = !0);
              break e;
          }
          l = l.return;
        }
        if (Te === null) throw Error(_(160));
        qp(s, a, i), (Te = null), (xt = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (m) {
        pe(i, t, m);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Qp(t, e), (t = t.sibling);
}
function Qp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ht(t, e), jt(e), r & 4)) {
        try {
          fi(3, e, e.return), Ca(3, e);
        } catch (E) {
          pe(e, e.return, E);
        }
        try {
          fi(5, e, e.return);
        } catch (E) {
          pe(e, e.return, E);
        }
      }
      break;
    case 1:
      ht(t, e), jt(e), r & 512 && n !== null && pr(n, n.return);
      break;
    case 5:
      if (
        (ht(t, e),
        jt(e),
        r & 512 && n !== null && pr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          vi(i, "");
        } catch (E) {
          pe(e, e.return, E);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          a = n !== null ? n.memoizedProps : s,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && gf(i, s),
              ol(l, a);
            var m = ol(l, s);
            for (a = 0; a < u.length; a += 2) {
              var v = u[a],
                g = u[a + 1];
              v === "style"
                ? Sf(i, g)
                : v === "dangerouslySetInnerHTML"
                ? wf(i, g)
                : v === "children"
                ? vi(i, g)
                : ru(i, v, g, m);
            }
            switch (l) {
              case "input":
                nl(i, s);
                break;
              case "textarea":
                vf(i, s);
                break;
              case "select":
                var w = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var C = s.value;
                C != null
                  ? hr(i, !!s.multiple, C, !1)
                  : w !== !!s.multiple &&
                    (s.defaultValue != null
                      ? hr(i, !!s.multiple, s.defaultValue, !0)
                      : hr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[ji] = s;
          } catch (E) {
            pe(e, e.return, E);
          }
      }
      break;
    case 6:
      if ((ht(t, e), jt(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (E) {
          pe(e, e.return, E);
        }
      }
      break;
    case 3:
      if (
        (ht(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Si(t.containerInfo);
        } catch (E) {
          pe(e, e.return, E);
        }
      break;
    case 4:
      ht(t, e), jt(e);
      break;
    case 13:
      ht(t, e),
        jt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ru = ve())),
        r & 4 && r0(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Oe = (m = Oe) || v), ht(t, e), (Oe = m)) : ht(t, e),
        jt(e),
        r & 8192)
      ) {
        if (
          ((m = e.memoizedState !== null),
          (e.stateNode.isHidden = m) && !v && e.mode & 1)
        )
          for (U = e, v = e.child; v !== null; ) {
            for (g = U = v; U !== null; ) {
              switch (((w = U), (C = w.child), w.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  fi(4, w, w.return);
                  break;
                case 1:
                  pr(w, w.return);
                  var b = w.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    (r = w), (n = w.return);
                    try {
                      (t = r),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount();
                    } catch (E) {
                      pe(r, n, E);
                    }
                  }
                  break;
                case 5:
                  pr(w, w.return);
                  break;
                case 22:
                  if (w.memoizedState !== null) {
                    s0(g);
                    continue;
                  }
              }
              C !== null ? ((C.return = w), (U = C)) : s0(g);
            }
            v = v.sibling;
          }
        e: for (v = null, g = e; ; ) {
          if (g.tag === 5) {
            if (v === null) {
              v = g;
              try {
                (i = g.stateNode),
                  m
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = g.stateNode),
                      (u = g.memoizedProps.style),
                      (a =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = yf("display", a)));
              } catch (E) {
                pe(e, e.return, E);
              }
            }
          } else if (g.tag === 6) {
            if (v === null)
              try {
                g.stateNode.nodeValue = m ? "" : g.memoizedProps;
              } catch (E) {
                pe(e, e.return, E);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            (g.child.return = g), (g = g.child);
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            v === g && (v = null), (g = g.return);
          }
          v === g && (v = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      ht(t, e), jt(e), r & 4 && r0(e);
      break;
    case 21:
      break;
    default:
      ht(t, e), jt(e);
  }
}
function jt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($p(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (vi(i, ""), (r.flags &= -33));
          var s = n0(e);
          zl(e, s, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = n0(e);
          Rl(e, l, a);
          break;
        default:
          throw Error(_(161));
      }
    } catch (u) {
      pe(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Vv(e, t, n) {
  (U = e), Zp(e);
}
function Zp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; U !== null; ) {
    var i = U,
      s = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || ps;
      if (!a) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || Oe;
        l = ps;
        var m = Oe;
        if (((ps = a), (Oe = u) && !m))
          for (U = i; U !== null; )
            (a = U),
              (u = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? a0(i)
                : u !== null
                ? ((u.return = a), (U = u))
                : a0(i);
        for (; s !== null; ) (U = s), Zp(s), (s = s.sibling);
        (U = i), (ps = l), (Oe = m);
      }
      i0(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (U = s)) : i0(e);
  }
}
function i0(e) {
  for (; U !== null; ) {
    var t = U;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Oe || Ca(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Oe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : vt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Hd(t, s, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Hd(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var m = t.alternate;
                if (m !== null) {
                  var v = m.memoizedState;
                  if (v !== null) {
                    var g = v.dehydrated;
                    g !== null && Si(g);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
        Oe || (t.flags & 512 && _l(t));
      } catch (w) {
        pe(t, t.return, w);
      }
    }
    if (t === e) {
      U = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (U = n);
      break;
    }
    U = t.return;
  }
}
function s0(e) {
  for (; U !== null; ) {
    var t = U;
    if (t === e) {
      U = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (U = n);
      break;
    }
    U = t.return;
  }
}
function a0(e) {
  for (; U !== null; ) {
    var t = U;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ca(4, t);
          } catch (u) {
            pe(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              pe(t, i, u);
            }
          }
          var s = t.return;
          try {
            _l(t);
          } catch (u) {
            pe(t, s, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            _l(t);
          } catch (u) {
            pe(t, a, u);
          }
      }
    } catch (u) {
      pe(t, t.return, u);
    }
    if (t === e) {
      U = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (U = l);
      break;
    }
    U = t.return;
  }
}
var Hv = Math.ceil,
  Ks = Gt.ReactCurrentDispatcher,
  Ou = Gt.ReactCurrentOwner,
  dt = Gt.ReactCurrentBatchConfig,
  Y = 0,
  je = null,
  xe = null,
  Pe = 0,
  Ke = 0,
  mr = vn(0),
  Se = 0,
  Mi = null,
  Dn = 0,
  ba = 0,
  _u = 0,
  pi = null,
  Ue = null,
  Ru = 0,
  Pr = 1 / 0,
  Ot = null,
  Js = !1,
  Dl = null,
  cn = null,
  ms = !1,
  tn = null,
  ea = 0,
  mi = 0,
  Bl = null,
  Ts = -1,
  Ps = 0;
function ze() {
  return Y & 6 ? ve() : Ts !== -1 ? Ts : (Ts = ve());
}
function dn(e) {
  return e.mode & 1
    ? Y & 2 && Pe !== 0
      ? Pe & -Pe
      : kv.transition !== null
      ? (Ps === 0 && (Ps = If()), Ps)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ff(e.type))),
        e)
    : 1;
}
function St(e, t, n, r) {
  if (50 < mi) throw ((mi = 0), (Bl = null), Error(_(185)));
  zi(e, n, r),
    (!(Y & 2) || e !== je) &&
      (e === je && (!(Y & 2) && (ba |= n), Se === 4 && Jt(e, Pe)),
      qe(e, r),
      n === 1 && Y === 0 && !(t.mode & 1) && ((Pr = ve() + 500), wa && xn()));
}
function qe(e, t) {
  var n = e.callbackNode;
  kg(e, t);
  var r = zs(e, e === je ? Pe : 0);
  if (r === 0)
    n !== null && hd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && hd(n), t === 1))
      e.tag === 0 ? Ev(o0.bind(null, e)) : sp(o0.bind(null, e)),
        yv(function () {
          !(Y & 6) && xn();
        }),
        (n = null);
    else {
      switch (Of(r)) {
        case 1:
          n = lu;
          break;
        case 4:
          n = Af;
          break;
        case 16:
          n = Rs;
          break;
        case 536870912:
          n = Mf;
          break;
        default:
          n = Rs;
      }
      n = r2(n, Xp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Xp(e, t) {
  if (((Ts = -1), (Ps = 0), Y & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (yr() && e.callbackNode !== n) return null;
  var r = zs(e, e === je ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ta(e, r);
  else {
    t = r;
    var i = Y;
    Y |= 2;
    var s = Kp();
    (je !== e || Pe !== t) && ((Ot = null), (Pr = ve() + 500), In(e, t));
    do
      try {
        Wv();
        break;
      } catch (l) {
        Yp(e, l);
      }
    while (!0);
    Su(),
      (Ks.current = s),
      (Y = i),
      xe !== null ? (t = 0) : ((je = null), (Pe = 0), (t = Se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = fl(e)), i !== 0 && ((r = i), (t = Fl(e, i)))), t === 1)
    )
      throw ((n = Mi), In(e, 0), Jt(e, r), qe(e, ve()), n);
    if (t === 6) Jt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Uv(i) &&
          ((t = ta(e, r)),
          t === 2 && ((s = fl(e)), s !== 0 && ((r = s), (t = Fl(e, s)))),
          t === 1))
      )
        throw ((n = Mi), In(e, 0), Jt(e, r), qe(e, ve()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          Ln(e, Ue, Ot);
          break;
        case 3:
          if (
            (Jt(e, r), (r & 130023424) === r && ((t = Ru + 500 - ve()), 10 < t))
          ) {
            if (zs(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ze(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = yl(Ln.bind(null, e, Ue, Ot), t);
            break;
          }
          Ln(e, Ue, Ot);
          break;
        case 4:
          if ((Jt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - yt(r);
            (s = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~s);
          }
          if (
            ((r = i),
            (r = ve() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Hv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = yl(Ln.bind(null, e, Ue, Ot), r);
            break;
          }
          Ln(e, Ue, Ot);
          break;
        case 5:
          Ln(e, Ue, Ot);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return qe(e, ve()), e.callbackNode === n ? Xp.bind(null, e) : null;
}
function Fl(e, t) {
  var n = pi;
  return (
    e.current.memoizedState.isDehydrated && (In(e, t).flags |= 256),
    (e = ta(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && Vl(t)),
    e
  );
}
function Vl(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
}
function Uv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Ct(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Jt(e, t) {
  for (
    t &= ~_u,
      t &= ~ba,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - yt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function o0(e) {
  if (Y & 6) throw Error(_(327));
  yr();
  var t = zs(e, 0);
  if (!(t & 1)) return qe(e, ve()), null;
  var n = ta(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fl(e);
    r !== 0 && ((t = r), (n = Fl(e, r)));
  }
  if (n === 1) throw ((n = Mi), In(e, 0), Jt(e, t), qe(e, ve()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ln(e, Ue, Ot),
    qe(e, ve()),
    null
  );
}
function zu(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    (Y = n), Y === 0 && ((Pr = ve() + 500), wa && xn());
  }
}
function Bn(e) {
  tn !== null && tn.tag === 0 && !(Y & 6) && yr();
  var t = Y;
  Y |= 1;
  var n = dt.transition,
    r = ee;
  try {
    if (((dt.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (dt.transition = n), (Y = t), !(Y & 6) && xn();
  }
}
function Du() {
  (Ke = mr.current), ae(mr);
}
function In(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), wv(n)), xe !== null))
    for (n = xe.return; n !== null; ) {
      var r = n;
      switch ((xu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Hs();
          break;
        case 3:
          jr(), ae(We), ae(_e), Tu();
          break;
        case 5:
          ju(r);
          break;
        case 4:
          jr();
          break;
        case 13:
          ae(ue);
          break;
        case 19:
          ae(ue);
          break;
        case 10:
          Cu(r.type._context);
          break;
        case 22:
        case 23:
          Du();
      }
      n = n.return;
    }
  if (
    ((je = e),
    (xe = e = fn(e.current, null)),
    (Pe = Ke = t),
    (Se = 0),
    (Mi = null),
    (_u = ba = Dn = 0),
    (Ue = pi = null),
    An !== null)
  ) {
    for (t = 0; t < An.length; t++)
      if (((n = An[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var a = s.next;
          (s.next = i), (r.next = a);
        }
        n.pending = r;
      }
    An = null;
  }
  return e;
}
function Yp(e, t) {
  do {
    var n = xe;
    try {
      if ((Su(), (Es.current = Ys), Xs)) {
        for (var r = ce.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Xs = !1;
      }
      if (
        ((zn = 0),
        (ke = ye = ce = null),
        (di = !1),
        (Li = 0),
        (Ou.current = null),
        n === null || n.return === null)
      ) {
        (Se = 1), (Mi = t), (xe = null);
        break;
      }
      e: {
        var s = e,
          a = n.return,
          l = n,
          u = t;
        if (
          ((t = Pe),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var m = u,
            v = l,
            g = v.tag;
          if (!(v.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var w = v.alternate;
            w
              ? ((v.updateQueue = w.updateQueue),
                (v.memoizedState = w.memoizedState),
                (v.lanes = w.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var C = Qd(a);
          if (C !== null) {
            (C.flags &= -257),
              Zd(C, a, l, s, t),
              C.mode & 1 && qd(s, m, t),
              (t = C),
              (u = m);
            var b = t.updateQueue;
            if (b === null) {
              var E = new Set();
              E.add(u), (t.updateQueue = E);
            } else b.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              qd(s, m, t), Bu();
              break e;
            }
            u = Error(_(426));
          }
        } else if (oe && l.mode & 1) {
          var P = Qd(a);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              Zd(P, a, l, s, t),
              wu(Tr(u, l));
            break e;
          }
        }
        (s = u = Tr(u, l)),
          Se !== 4 && (Se = 2),
          pi === null ? (pi = [s]) : pi.push(s),
          (s = a);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var h = Op(s, u, t);
              Vd(s, h);
              break e;
            case 1:
              l = u;
              var x = s.type,
                y = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof x.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (cn === null || !cn.has(y))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var k = _p(s, l, t);
                Vd(s, k);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      e2(n);
    } catch (j) {
      (t = j), xe === n && n !== null && (xe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Kp() {
  var e = Ks.current;
  return (Ks.current = Ys), e === null ? Ys : e;
}
function Bu() {
  (Se === 0 || Se === 3 || Se === 2) && (Se = 4),
    je === null || (!(Dn & 268435455) && !(ba & 268435455)) || Jt(je, Pe);
}
function ta(e, t) {
  var n = Y;
  Y |= 2;
  var r = Kp();
  (je !== e || Pe !== t) && ((Ot = null), In(e, t));
  do
    try {
      Gv();
      break;
    } catch (i) {
      Yp(e, i);
    }
  while (!0);
  if ((Su(), (Y = n), (Ks.current = r), xe !== null)) throw Error(_(261));
  return (je = null), (Pe = 0), Se;
}
function Gv() {
  for (; xe !== null; ) Jp(xe);
}
function Wv() {
  for (; xe !== null && !gg(); ) Jp(xe);
}
function Jp(e) {
  var t = n2(e.alternate, e, Ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? e2(e) : (xe = t),
    (Ou.current = null);
}
function e2(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Dv(n, t)), n !== null)) {
        (n.flags &= 32767), (xe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Se = 6), (xe = null);
        return;
      }
    } else if (((n = zv(n, t, Ke)), n !== null)) {
      xe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      xe = t;
      return;
    }
    xe = t = e;
  } while (t !== null);
  Se === 0 && (Se = 5);
}
function Ln(e, t, n) {
  var r = ee,
    i = dt.transition;
  try {
    (dt.transition = null), (ee = 1), $v(e, t, n, r);
  } finally {
    (dt.transition = i), (ee = r);
  }
  return null;
}
function $v(e, t, n, r) {
  do yr();
  while (tn !== null);
  if (Y & 6) throw Error(_(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (jg(e, s),
    e === je && ((xe = je = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ms ||
      ((ms = !0),
      r2(Rs, function () {
        return yr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = dt.transition), (dt.transition = null);
    var a = ee;
    ee = 1;
    var l = Y;
    (Y |= 4),
      (Ou.current = null),
      Fv(e, n),
      Qp(n, e),
      fv(xl),
      (Ds = !!vl),
      (xl = vl = null),
      (e.current = n),
      Vv(n),
      vg(),
      (Y = l),
      (ee = a),
      (dt.transition = s);
  } else e.current = n;
  if (
    (ms && ((ms = !1), (tn = e), (ea = i)),
    (s = e.pendingLanes),
    s === 0 && (cn = null),
    yg(n.stateNode),
    qe(e, ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Js) throw ((Js = !1), (e = Dl), (Dl = null), e);
  return (
    ea & 1 && e.tag !== 0 && yr(),
    (s = e.pendingLanes),
    s & 1 ? (e === Bl ? mi++ : ((mi = 0), (Bl = e))) : (mi = 0),
    xn(),
    null
  );
}
function yr() {
  if (tn !== null) {
    var e = Of(ea),
      t = dt.transition,
      n = ee;
    try {
      if (((dt.transition = null), (ee = 16 > e ? 16 : e), tn === null))
        var r = !1;
      else {
        if (((e = tn), (tn = null), (ea = 0), Y & 6)) throw Error(_(331));
        var i = Y;
        for (Y |= 4, U = e.current; U !== null; ) {
          var s = U,
            a = s.child;
          if (U.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var m = l[u];
                for (U = m; U !== null; ) {
                  var v = U;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fi(8, v, s);
                  }
                  var g = v.child;
                  if (g !== null) (g.return = v), (U = g);
                  else
                    for (; U !== null; ) {
                      v = U;
                      var w = v.sibling,
                        C = v.return;
                      if ((Wp(v), v === m)) {
                        U = null;
                        break;
                      }
                      if (w !== null) {
                        (w.return = C), (U = w);
                        break;
                      }
                      U = C;
                    }
                }
              }
              var b = s.alternate;
              if (b !== null) {
                var E = b.child;
                if (E !== null) {
                  b.child = null;
                  do {
                    var P = E.sibling;
                    (E.sibling = null), (E = P);
                  } while (E !== null);
                }
              }
              U = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) (a.return = s), (U = a);
          else
            e: for (; U !== null; ) {
              if (((s = U), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fi(9, s, s.return);
                }
              var h = s.sibling;
              if (h !== null) {
                (h.return = s.return), (U = h);
                break e;
              }
              U = s.return;
            }
        }
        var x = e.current;
        for (U = x; U !== null; ) {
          a = U;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null) (y.return = a), (U = y);
          else
            e: for (a = x; U !== null; ) {
              if (((l = U), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ca(9, l);
                  }
                } catch (j) {
                  pe(l, l.return, j);
                }
              if (l === a) {
                U = null;
                break e;
              }
              var k = l.sibling;
              if (k !== null) {
                (k.return = l.return), (U = k);
                break e;
              }
              U = l.return;
            }
        }
        if (
          ((Y = i), xn(), Nt && typeof Nt.onPostCommitFiberRoot == "function")
        )
          try {
            Nt.onPostCommitFiberRoot(ma, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (dt.transition = t);
    }
  }
  return !1;
}
function l0(e, t, n) {
  (t = Tr(n, t)),
    (t = Op(e, t, 1)),
    (e = un(e, t, 1)),
    (t = ze()),
    e !== null && (zi(e, 1, t), qe(e, t));
}
function pe(e, t, n) {
  if (e.tag === 3) l0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        l0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cn === null || !cn.has(r)))
        ) {
          (e = Tr(n, e)),
            (e = _p(t, e, 1)),
            (t = un(t, e, 1)),
            (e = ze()),
            t !== null && (zi(t, 1, e), qe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function qv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ze()),
    (e.pingedLanes |= e.suspendedLanes & n),
    je === e &&
      (Pe & n) === n &&
      (Se === 4 || (Se === 3 && (Pe & 130023424) === Pe && 500 > ve() - Ru)
        ? In(e, 0)
        : (_u |= n)),
    qe(e, t);
}
function t2(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = is), (is <<= 1), !(is & 130023424) && (is = 4194304))
      : (t = 1));
  var n = ze();
  (e = Vt(e, t)), e !== null && (zi(e, t, n), qe(e, n));
}
function Qv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), t2(e, n);
}
function Zv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), t2(e, n);
}
var n2;
n2 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || We.current) Ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ge = !1), Rv(e, t, n);
      Ge = !!(e.flags & 131072);
    }
  else (Ge = !1), oe && t.flags & 1048576 && ap(t, Ws, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      js(e, t), (e = t.pendingProps);
      var i = br(t, _e.current);
      wr(t, n), (i = Lu(null, t, r, e, i, n));
      var s = Nu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $e(r) ? ((s = !0), Us(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Eu(t),
            (i.updater = Sa),
            (t.stateNode = i),
            (i._reactInternals = t),
            Tl(t, r, e, n),
            (t = Nl(null, t, r, !0, s, n)))
          : ((t.tag = 0), oe && s && vu(t), Re(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (js(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Yv(r)),
          (e = vt(r, e)),
          i)
        ) {
          case 0:
            t = Ll(null, t, r, e, n);
            break e;
          case 1:
            t = Kd(null, t, r, e, n);
            break e;
          case 11:
            t = Xd(null, t, r, e, n);
            break e;
          case 14:
            t = Yd(null, t, r, vt(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : vt(r, i)),
        Ll(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : vt(r, i)),
        Kd(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Bp(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          fp(e, t),
          Qs(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Tr(Error(_(423)), t)), (t = Jd(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Tr(Error(_(424)), t)), (t = Jd(e, t, r, n, i));
            break e;
          } else
            for (
              et = ln(t.stateNode.containerInfo.firstChild),
                tt = t,
                oe = !0,
                wt = null,
                n = cp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Er(), r === i)) {
            t = Ht(e, t, n);
            break e;
          }
          Re(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        pp(t),
        e === null && El(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = i.children),
        wl(r, i) ? (a = null) : s !== null && wl(r, s) && (t.flags |= 32),
        Dp(e, t),
        Re(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && El(t), null;
    case 13:
      return Fp(e, t, n);
    case 4:
      return (
        ku(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = kr(t, null, r, n)) : Re(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : vt(r, i)),
        Xd(e, t, r, i, n)
      );
    case 7:
      return Re(e, t, t.pendingProps, n), t.child;
    case 8:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (a = i.value),
          re($s, r._currentValue),
          (r._currentValue = a),
          s !== null)
        )
          if (Ct(s.value, a)) {
            if (s.children === i.children && !We.current) {
              t = Ht(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                a = s.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (s.tag === 1) {
                      (u = Dt(-1, n & -n)), (u.tag = 2);
                      var m = s.updateQueue;
                      if (m !== null) {
                        m = m.shared;
                        var v = m.pending;
                        v === null
                          ? (u.next = u)
                          : ((u.next = v.next), (v.next = u)),
                          (m.pending = u);
                      }
                    }
                    (s.lanes |= n),
                      (u = s.alternate),
                      u !== null && (u.lanes |= n),
                      kl(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((a = s.return), a === null)) throw Error(_(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  kl(a, n, t),
                  (a = s.sibling);
              } else a = s.child;
              if (a !== null) a.return = s;
              else
                for (a = s; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((s = a.sibling), s !== null)) {
                    (s.return = a.return), (a = s);
                    break;
                  }
                  a = a.return;
                }
              s = a;
            }
        Re(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        wr(t, n),
        (i = ft(i)),
        (r = r(i)),
        (t.flags |= 1),
        Re(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = vt(r, t.pendingProps)),
        (i = vt(r.type, i)),
        Yd(e, t, r, i, n)
      );
    case 15:
      return Rp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : vt(r, i)),
        js(e, t),
        (t.tag = 1),
        $e(r) ? ((e = !0), Us(t)) : (e = !1),
        wr(t, n),
        Ip(t, r, i),
        Tl(t, r, i, n),
        Nl(null, t, r, !0, e, n)
      );
    case 19:
      return Vp(e, t, n);
    case 22:
      return zp(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function r2(e, t) {
  return Nf(e, t);
}
function Xv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ct(e, t, n, r) {
  return new Xv(e, t, n, r);
}
function Fu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Yv(e) {
  if (typeof e == "function") return Fu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === su)) return 11;
    if (e === au) return 14;
  }
  return 2;
}
function fn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ct(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ls(e, t, n, r, i, s) {
  var a = 2;
  if (((r = e), typeof e == "function")) Fu(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case ir:
        return On(n.children, i, s, t);
      case iu:
        (a = 8), (i |= 8);
        break;
      case Yo:
        return (
          (e = ct(12, n, t, i | 2)), (e.elementType = Yo), (e.lanes = s), e
        );
      case Ko:
        return (e = ct(13, n, t, i)), (e.elementType = Ko), (e.lanes = s), e;
      case Jo:
        return (e = ct(19, n, t, i)), (e.elementType = Jo), (e.lanes = s), e;
      case pf:
        return Ea(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case df:
              a = 10;
              break e;
            case ff:
              a = 9;
              break e;
            case su:
              a = 11;
              break e;
            case au:
              a = 14;
              break e;
            case Zt:
              (a = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ct(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function On(e, t, n, r) {
  return (e = ct(7, e, r, t)), (e.lanes = n), e;
}
function Ea(e, t, n, r) {
  return (
    (e = ct(22, e, r, t)),
    (e.elementType = pf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Eo(e, t, n) {
  return (e = ct(6, e, null, t)), (e.lanes = n), e;
}
function ko(e, t, n) {
  return (
    (t = ct(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Kv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = io(0)),
    (this.expirationTimes = io(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = io(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Vu(e, t, n, r, i, s, a, l, u) {
  return (
    (e = new Kv(e, t, n, l, u)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = ct(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Eu(s),
    e
  );
}
function Jv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: rr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function i2(e) {
  if (!e) return hn;
  e = e._reactInternals;
  e: {
    if (Hn(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($e(n)) return ip(e, n, t);
  }
  return t;
}
function s2(e, t, n, r, i, s, a, l, u) {
  return (
    (e = Vu(n, r, !0, e, i, s, a, l, u)),
    (e.context = i2(null)),
    (n = e.current),
    (r = ze()),
    (i = dn(n)),
    (s = Dt(r, i)),
    (s.callback = t ?? null),
    un(n, s, i),
    (e.current.lanes = i),
    zi(e, i, r),
    qe(e, r),
    e
  );
}
function ka(e, t, n, r) {
  var i = t.current,
    s = ze(),
    a = dn(i);
  return (
    (n = i2(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Dt(s, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = un(i, t, a)),
    e !== null && (St(e, i, a, s), bs(e, i, a)),
    a
  );
}
function na(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function u0(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Hu(e, t) {
  u0(e, t), (e = e.alternate) && u0(e, t);
}
function ex() {
  return null;
}
var a2 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Uu(e) {
  this._internalRoot = e;
}
ja.prototype.render = Uu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  ka(e, t, null, null);
};
ja.prototype.unmount = Uu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bn(function () {
      ka(null, e, null, null);
    }),
      (t[Ft] = null);
  }
};
function ja(e) {
  this._internalRoot = e;
}
ja.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = zf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++);
    Kt.splice(n, 0, e), n === 0 && Bf(e);
  }
};
function Gu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ta(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function c0() {}
function tx(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var m = na(a);
        s.call(m);
      };
    }
    var a = s2(t, r, e, 0, null, !1, !1, "", c0);
    return (
      (e._reactRootContainer = a),
      (e[Ft] = a.current),
      Ei(e.nodeType === 8 ? e.parentNode : e),
      Bn(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var m = na(u);
      l.call(m);
    };
  }
  var u = Vu(e, 0, !1, null, null, !1, !1, "", c0);
  return (
    (e._reactRootContainer = u),
    (e[Ft] = u.current),
    Ei(e.nodeType === 8 ? e.parentNode : e),
    Bn(function () {
      ka(t, u, n, r);
    }),
    u
  );
}
function Pa(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var u = na(a);
        l.call(u);
      };
    }
    ka(t, a, e, i);
  } else a = tx(n, t, e, i, r);
  return na(a);
}
_f = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ii(t.pendingLanes);
        n !== 0 &&
          (uu(t, n | 1), qe(t, ve()), !(Y & 6) && ((Pr = ve() + 500), xn()));
      }
      break;
    case 13:
      Bn(function () {
        var r = Vt(e, 1);
        if (r !== null) {
          var i = ze();
          St(r, e, 1, i);
        }
      }),
        Hu(e, 1);
  }
};
cu = function (e) {
  if (e.tag === 13) {
    var t = Vt(e, 134217728);
    if (t !== null) {
      var n = ze();
      St(t, e, 134217728, n);
    }
    Hu(e, 134217728);
  }
};
Rf = function (e) {
  if (e.tag === 13) {
    var t = dn(e),
      n = Vt(e, t);
    if (n !== null) {
      var r = ze();
      St(n, e, t, r);
    }
    Hu(e, t);
  }
};
zf = function () {
  return ee;
};
Df = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
ul = function (e, t, n) {
  switch (t) {
    case "input":
      if ((nl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = xa(r);
            if (!i) throw Error(_(90));
            hf(r), nl(r, i);
          }
        }
      }
      break;
    case "textarea":
      vf(e, n);
      break;
    case "select":
      (t = n.value), t != null && hr(e, !!n.multiple, t, !1);
  }
};
Ef = zu;
kf = Bn;
var nx = { usingClientEntryPoint: !1, Events: [Bi, lr, xa, Cf, bf, zu] },
  ei = {
    findFiberByHostInstance: Nn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  rx = {
    bundleType: ei.bundleType,
    version: ei.version,
    rendererPackageName: ei.rendererPackageName,
    rendererConfig: ei.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Pf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ei.findFiberByHostInstance || ex,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var hs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!hs.isDisabled && hs.supportsFiber)
    try {
      (ma = hs.inject(rx)), (Nt = hs);
    } catch {}
}
rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nx;
rt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Gu(t)) throw Error(_(200));
  return Jv(e, t, null, n);
};
rt.createRoot = function (e, t) {
  if (!Gu(e)) throw Error(_(299));
  var n = !1,
    r = "",
    i = a2;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Vu(e, 1, !1, null, null, n, !1, r, i)),
    (e[Ft] = t.current),
    Ei(e.nodeType === 8 ? e.parentNode : e),
    new Uu(t)
  );
};
rt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = Pf(t)), (e = e === null ? null : e.stateNode), e;
};
rt.flushSync = function (e) {
  return Bn(e);
};
rt.hydrate = function (e, t, n) {
  if (!Ta(t)) throw Error(_(200));
  return Pa(null, e, t, !0, n);
};
rt.hydrateRoot = function (e, t, n) {
  if (!Gu(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    a = a2;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = s2(t, null, e, 1, n ?? null, i, !1, s, a)),
    (e[Ft] = t.current),
    Ei(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new ja(t);
};
rt.render = function (e, t, n) {
  if (!Ta(t)) throw Error(_(200));
  return Pa(null, e, t, !1, n);
};
rt.unmountComponentAtNode = function (e) {
  if (!Ta(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (Bn(function () {
        Pa(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ft] = null);
        });
      }),
      !0)
    : !1;
};
rt.unstable_batchedUpdates = zu;
rt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ta(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Pa(e, t, n, !1, r);
};
rt.version = "18.3.1-next-f1338f8080-20240426";
function o2() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o2);
    } catch (e) {
      console.error(e);
    }
}
o2(), (of.exports = rt);
var ix = of.exports,
  d0 = ix;
(Zo.createRoot = d0.createRoot), (Zo.hydrateRoot = d0.hydrateRoot);
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ii() {
  return (
    (Ii = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ii.apply(this, arguments)
  );
}
var nn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(nn || (nn = {}));
const f0 = "popstate";
function sx(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: a, hash: l } = r.location;
    return Hl(
      "",
      { pathname: s, search: a, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : ra(i);
  }
  return ox(t, n, null, e);
}
function we(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function l2(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ax() {
  return Math.random().toString(36).substr(2, 8);
}
function p0(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Hl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ii(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Or(t) : t,
      { state: n, key: (t && t.key) || r || ax() }
    )
  );
}
function ra(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Or(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function ox(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    a = i.history,
    l = nn.Pop,
    u = null,
    m = v();
  m == null && ((m = 0), a.replaceState(Ii({}, a.state, { idx: m }), ""));
  function v() {
    return (a.state || { idx: null }).idx;
  }
  function g() {
    l = nn.Pop;
    let P = v(),
      h = P == null ? null : P - m;
    (m = P), u && u({ action: l, location: E.location, delta: h });
  }
  function w(P, h) {
    l = nn.Push;
    let x = Hl(E.location, P, h);
    m = v() + 1;
    let y = p0(x, m),
      k = E.createHref(x);
    try {
      a.pushState(y, "", k);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      i.location.assign(k);
    }
    s && u && u({ action: l, location: E.location, delta: 1 });
  }
  function C(P, h) {
    l = nn.Replace;
    let x = Hl(E.location, P, h);
    m = v();
    let y = p0(x, m),
      k = E.createHref(x);
    a.replaceState(y, "", k),
      s && u && u({ action: l, location: E.location, delta: 0 });
  }
  function b(P) {
    let h = i.location.origin !== "null" ? i.location.origin : i.location.href,
      x = typeof P == "string" ? P : ra(P);
    return (
      (x = x.replace(/ $/, "%20")),
      we(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          x
      ),
      new URL(x, h)
    );
  }
  let E = {
    get action() {
      return l;
    },
    get location() {
      return e(i, a);
    },
    listen(P) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(f0, g),
        (u = P),
        () => {
          i.removeEventListener(f0, g), (u = null);
        }
      );
    },
    createHref(P) {
      return t(i, P);
    },
    createURL: b,
    encodeLocation(P) {
      let h = b(P);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: w,
    replace: C,
    go(P) {
      return a.go(P);
    },
  };
  return E;
}
var m0;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(m0 || (m0 = {}));
function lx(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Or(t) : t,
    i = Wu(r.pathname || "/", n);
  if (i == null) return null;
  let s = u2(e);
  ux(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = Sx(i);
    a = xx(s[l], u);
  }
  return a;
}
function u2(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, a, l) => {
    let u = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: a,
      route: s,
    };
    u.relativePath.startsWith("/") &&
      (we(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let m = pn([r, u.relativePath]),
      v = n.concat(u);
    s.children &&
      s.children.length > 0 &&
      (we(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + m + '".')
      ),
      u2(s.children, t, v, m)),
      !(s.path == null && !s.index) &&
        t.push({ path: m, score: gx(m, s.index), routesMeta: v });
  };
  return (
    e.forEach((s, a) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) i(s, a);
      else for (let u of c2(s.path)) i(s, a, u);
    }),
    t
  );
}
function c2(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let a = c2(r.join("/")),
    l = [];
  return (
    l.push(...a.map((u) => (u === "" ? s : [s, u].join("/")))),
    i && l.push(...a),
    l.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function ux(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : vx(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const cx = /^:[\w-]+$/,
  dx = 3,
  fx = 2,
  px = 1,
  mx = 10,
  hx = -2,
  h0 = (e) => e === "*";
function gx(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(h0) && (r += hx),
    t && (r += fx),
    n
      .filter((i) => !h0(i))
      .reduce((i, s) => i + (cx.test(s) ? dx : s === "" ? px : mx), r)
  );
}
function vx(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function xx(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    s = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      u = a === n.length - 1,
      m = i === "/" ? t : t.slice(i.length) || "/",
      v = wx(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        m
      );
    if (!v) return null;
    Object.assign(r, v.params);
    let g = l.route;
    s.push({
      params: r,
      pathname: pn([i, v.pathname]),
      pathnameBase: kx(pn([i, v.pathnameBase])),
      route: g,
    }),
      v.pathnameBase !== "/" && (i = pn([i, v.pathnameBase]));
  }
  return s;
}
function wx(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = yx(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    a = s.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((m, v, g) => {
      let { paramName: w, isOptional: C } = v;
      if (w === "*") {
        let E = l[g] || "";
        a = s.slice(0, s.length - E.length).replace(/(.)\/+$/, "$1");
      }
      const b = l[g];
      return (
        C && !b ? (m[w] = void 0) : (m[w] = (b || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: s,
    pathnameBase: a,
    pattern: e,
  };
}
function yx(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    l2(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, l, u) => (
            r.push({ paramName: l, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Sx(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      l2(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Wu(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Cx(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Or(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : bx(n, t)) : t,
    search: jx(r),
    hash: Tx(i),
  };
}
function bx(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function jo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ex(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function d2(e, t) {
  let n = Ex(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function f2(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Or(e))
    : ((i = Ii({}, e)),
      we(
        !i.pathname || !i.pathname.includes("?"),
        jo("?", "pathname", "search", i)
      ),
      we(
        !i.pathname || !i.pathname.includes("#"),
        jo("#", "pathname", "hash", i)
      ),
      we(!i.search || !i.search.includes("#"), jo("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    a = s ? "/" : i.pathname,
    l;
  if (a == null) l = n;
  else {
    let g = t.length - 1;
    if (!r && a.startsWith("..")) {
      let w = a.split("/");
      for (; w[0] === ".."; ) w.shift(), (g -= 1);
      i.pathname = w.join("/");
    }
    l = g >= 0 ? t[g] : "/";
  }
  let u = Cx(i, l),
    m = a && a !== "/" && a.endsWith("/"),
    v = (s || a === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (m || v) && (u.pathname += "/"), u;
}
const pn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  kx = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  jx = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Tx = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Px(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const p2 = ["post", "put", "patch", "delete"];
new Set(p2);
const Lx = ["get", ...p2];
new Set(Lx);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Oi() {
  return (
    (Oi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Oi.apply(this, arguments)
  );
}
const $u = T.createContext(null),
  Nx = T.createContext(null),
  Un = T.createContext(null),
  La = T.createContext(null),
  wn = T.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  m2 = T.createContext(null);
function Ax(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Vi() || we(!1);
  let { basename: r, navigator: i } = T.useContext(Un),
    { hash: s, pathname: a, search: l } = v2(e, { relative: n }),
    u = a;
  return (
    r !== "/" && (u = a === "/" ? r : pn([r, a])),
    i.createHref({ pathname: u, search: l, hash: s })
  );
}
function Vi() {
  return T.useContext(La) != null;
}
function Na() {
  return Vi() || we(!1), T.useContext(La).location;
}
function h2(e) {
  T.useContext(Un).static || T.useLayoutEffect(e);
}
function g2() {
  let { isDataRoute: e } = T.useContext(wn);
  return e ? Wx() : Mx();
}
function Mx() {
  Vi() || we(!1);
  let e = T.useContext($u),
    { basename: t, future: n, navigator: r } = T.useContext(Un),
    { matches: i } = T.useContext(wn),
    { pathname: s } = Na(),
    a = JSON.stringify(d2(i, n.v7_relativeSplatPath)),
    l = T.useRef(!1);
  return (
    h2(() => {
      l.current = !0;
    }),
    T.useCallback(
      function (m, v) {
        if ((v === void 0 && (v = {}), !l.current)) return;
        if (typeof m == "number") {
          r.go(m);
          return;
        }
        let g = f2(m, JSON.parse(a), s, v.relative === "path");
        e == null &&
          t !== "/" &&
          (g.pathname = g.pathname === "/" ? t : pn([t, g.pathname])),
          (v.replace ? r.replace : r.push)(g, v.state, v);
      },
      [t, r, a, s, e]
    )
  );
}
function Ix() {
  let { matches: e } = T.useContext(wn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function v2(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = T.useContext(Un),
    { matches: i } = T.useContext(wn),
    { pathname: s } = Na(),
    a = JSON.stringify(d2(i, r.v7_relativeSplatPath));
  return T.useMemo(() => f2(e, JSON.parse(a), s, n === "path"), [e, a, s, n]);
}
function Ox(e, t) {
  return _x(e, t);
}
function _x(e, t, n, r) {
  Vi() || we(!1);
  let { navigator: i } = T.useContext(Un),
    { matches: s } = T.useContext(wn),
    a = s[s.length - 1],
    l = a ? a.params : {};
  a && a.pathname;
  let u = a ? a.pathnameBase : "/";
  a && a.route;
  let m = Na(),
    v;
  if (t) {
    var g;
    let P = typeof t == "string" ? Or(t) : t;
    u === "/" || ((g = P.pathname) != null && g.startsWith(u)) || we(!1),
      (v = P);
  } else v = m;
  let w = v.pathname || "/",
    C = w;
  if (u !== "/") {
    let P = u.replace(/^\//, "").split("/");
    C = "/" + w.replace(/^\//, "").split("/").slice(P.length).join("/");
  }
  let b = lx(e, { pathname: C }),
    E = Fx(
      b &&
        b.map((P) =>
          Object.assign({}, P, {
            params: Object.assign({}, l, P.params),
            pathname: pn([
              u,
              i.encodeLocation
                ? i.encodeLocation(P.pathname).pathname
                : P.pathname,
            ]),
            pathnameBase:
              P.pathnameBase === "/"
                ? u
                : pn([
                    u,
                    i.encodeLocation
                      ? i.encodeLocation(P.pathnameBase).pathname
                      : P.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && E
    ? T.createElement(
        La.Provider,
        {
          value: {
            location: Oi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              v
            ),
            navigationType: nn.Pop,
          },
        },
        E
      )
    : E;
}
function Rx() {
  let e = Gx(),
    t = Px(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return T.createElement(
    T.Fragment,
    null,
    T.createElement("h2", null, "Unexpected Application Error!"),
    T.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? T.createElement("pre", { style: i }, n) : null,
    null
  );
}
const zx = T.createElement(Rx, null);
class Dx extends T.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? T.createElement(
          wn.Provider,
          { value: this.props.routeContext },
          T.createElement(m2.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Bx(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = T.useContext($u);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    T.createElement(wn.Provider, { value: t }, r)
  );
}
function Fx(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if ((s = n) != null && s.errors) e = n.matches;
    else return null;
  }
  let a = e,
    l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let v = a.findIndex(
      (g) => g.route.id && (l == null ? void 0 : l[g.route.id]) !== void 0
    );
    v >= 0 || we(!1), (a = a.slice(0, Math.min(a.length, v + 1)));
  }
  let u = !1,
    m = -1;
  if (n && r && r.v7_partialHydration)
    for (let v = 0; v < a.length; v++) {
      let g = a[v];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (m = v),
        g.route.id)
      ) {
        let { loaderData: w, errors: C } = n,
          b =
            g.route.loader &&
            w[g.route.id] === void 0 &&
            (!C || C[g.route.id] === void 0);
        if (g.route.lazy || b) {
          (u = !0), m >= 0 ? (a = a.slice(0, m + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((v, g, w) => {
    let C,
      b = !1,
      E = null,
      P = null;
    n &&
      ((C = l && g.route.id ? l[g.route.id] : void 0),
      (E = g.route.errorElement || zx),
      u &&
        (m < 0 && w === 0
          ? ((b = !0), (P = null))
          : m === w &&
            ((b = !0), (P = g.route.hydrateFallbackElement || null))));
    let h = t.concat(a.slice(0, w + 1)),
      x = () => {
        let y;
        return (
          C
            ? (y = E)
            : b
            ? (y = P)
            : g.route.Component
            ? (y = T.createElement(g.route.Component, null))
            : g.route.element
            ? (y = g.route.element)
            : (y = v),
          T.createElement(Bx, {
            match: g,
            routeContext: { outlet: v, matches: h, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (g.route.ErrorBoundary || g.route.errorElement || w === 0)
      ? T.createElement(Dx, {
          location: n.location,
          revalidation: n.revalidation,
          component: E,
          error: C,
          children: x(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : x();
  }, null);
}
var x2 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(x2 || {}),
  ia = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ia || {});
function Vx(e) {
  let t = T.useContext($u);
  return t || we(!1), t;
}
function Hx(e) {
  let t = T.useContext(Nx);
  return t || we(!1), t;
}
function Ux(e) {
  let t = T.useContext(wn);
  return t || we(!1), t;
}
function w2(e) {
  let t = Ux(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || we(!1), n.route.id;
}
function Gx() {
  var e;
  let t = T.useContext(m2),
    n = Hx(ia.UseRouteError),
    r = w2(ia.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Wx() {
  let { router: e } = Vx(x2.UseNavigateStable),
    t = w2(ia.UseNavigateStable),
    n = T.useRef(!1);
  return (
    h2(() => {
      n.current = !0;
    }),
    T.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Oi({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
function _i(e) {
  we(!1);
}
function $x(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = nn.Pop,
    navigator: s,
    static: a = !1,
    future: l,
  } = e;
  Vi() && we(!1);
  let u = t.replace(/^\/*/, "/"),
    m = T.useMemo(
      () => ({
        basename: u,
        navigator: s,
        static: a,
        future: Oi({ v7_relativeSplatPath: !1 }, l),
      }),
      [u, l, s, a]
    );
  typeof r == "string" && (r = Or(r));
  let {
      pathname: v = "/",
      search: g = "",
      hash: w = "",
      state: C = null,
      key: b = "default",
    } = r,
    E = T.useMemo(() => {
      let P = Wu(v, u);
      return P == null
        ? null
        : {
            location: { pathname: P, search: g, hash: w, state: C, key: b },
            navigationType: i,
          };
    }, [u, v, g, w, C, b, i]);
  return E == null
    ? null
    : T.createElement(
        Un.Provider,
        { value: m },
        T.createElement(La.Provider, { children: n, value: E })
      );
}
function y2(e) {
  let { children: t, location: n } = e;
  return Ox(Ul(t), n);
}
new Promise(() => {});
function Ul(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    T.Children.forEach(e, (r, i) => {
      if (!T.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === T.Fragment) {
        n.push.apply(n, Ul(r.props.children, s));
        return;
      }
      r.type !== _i && we(!1), !r.props.index || !r.props.children || we(!1);
      let a = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (a.children = Ul(r.props.children, s)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Gl() {
  return (
    (Gl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gl.apply(this, arguments)
  );
}
function qx(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Qx(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Zx(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Qx(e);
}
const Xx = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Yx = "6";
try {
  window.__reactRouterVersion = Yx;
} catch {}
const Kx = "startTransition",
  g0 = qh[Kx];
function Jx(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = T.useRef();
  s.current == null && (s.current = sx({ window: i, v5Compat: !0 }));
  let a = s.current,
    [l, u] = T.useState({ action: a.action, location: a.location }),
    { v7_startTransition: m } = r || {},
    v = T.useCallback(
      (g) => {
        m && g0 ? g0(() => u(g)) : u(g);
      },
      [u, m]
    );
  return (
    T.useLayoutEffect(() => a.listen(v), [a, v]),
    T.createElement($x, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: a,
      future: r,
    })
  );
}
const ew =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  tw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  sa = T.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: a,
        state: l,
        target: u,
        to: m,
        preventScrollReset: v,
        unstable_viewTransition: g,
      } = t,
      w = qx(t, Xx),
      { basename: C } = T.useContext(Un),
      b,
      E = !1;
    if (typeof m == "string" && tw.test(m) && ((b = m), ew))
      try {
        let y = new URL(window.location.href),
          k = m.startsWith("//") ? new URL(y.protocol + m) : new URL(m),
          j = Wu(k.pathname, C);
        k.origin === y.origin && j != null
          ? (m = j + k.search + k.hash)
          : (E = !0);
      } catch {}
    let P = Ax(m, { relative: i }),
      h = nw(m, {
        replace: a,
        state: l,
        target: u,
        preventScrollReset: v,
        relative: i,
        unstable_viewTransition: g,
      });
    function x(y) {
      r && r(y), y.defaultPrevented || h(y);
    }
    return T.createElement(
      "a",
      Gl({}, w, { href: b || P, onClick: E || s ? r : x, ref: n, target: u })
    );
  });
var v0;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(v0 || (v0 = {}));
var x0;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(x0 || (x0 = {}));
function nw(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: a,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    u = g2(),
    m = Na(),
    v = v2(e, { relative: a });
  return T.useCallback(
    (g) => {
      if (Zx(g, n)) {
        g.preventDefault();
        let w = r !== void 0 ? r : ra(m) === ra(v);
        u(e, {
          replace: w,
          state: i,
          preventScrollReset: s,
          relative: a,
          unstable_viewTransition: l,
        });
      }
    },
    [m, u, v, r, i, n, e, s, a, l]
  );
}
var qu = { exports: {} },
  S2 = function (t, n) {
    return function () {
      for (var i = new Array(arguments.length), s = 0; s < i.length; s++)
        i[s] = arguments[s];
      return t.apply(n, i);
    };
  },
  rw = S2,
  Qu = Object.prototype.toString,
  Zu = (function (e) {
    return function (t) {
      var n = Qu.call(t);
      return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    };
  })(Object.create(null));
function Gn(e) {
  return (
    (e = e.toLowerCase()),
    function (n) {
      return Zu(n) === e;
    }
  );
}
function Xu(e) {
  return Array.isArray(e);
}
function aa(e) {
  return typeof e > "u";
}
function iw(e) {
  return (
    e !== null &&
    !aa(e) &&
    e.constructor !== null &&
    !aa(e.constructor) &&
    typeof e.constructor.isBuffer == "function" &&
    e.constructor.isBuffer(e)
  );
}
var C2 = Gn("ArrayBuffer");
function sw(e) {
  var t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && C2(e.buffer)),
    t
  );
}
function aw(e) {
  return typeof e == "string";
}
function ow(e) {
  return typeof e == "number";
}
function b2(e) {
  return e !== null && typeof e == "object";
}
function Ns(e) {
  if (Zu(e) !== "object") return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
var lw = Gn("Date"),
  uw = Gn("File"),
  cw = Gn("Blob"),
  dw = Gn("FileList");
function Yu(e) {
  return Qu.call(e) === "[object Function]";
}
function fw(e) {
  return b2(e) && Yu(e.pipe);
}
function pw(e) {
  var t = "[object FormData]";
  return (
    e &&
    ((typeof FormData == "function" && e instanceof FormData) ||
      Qu.call(e) === t ||
      (Yu(e.toString) && e.toString() === t))
  );
}
var mw = Gn("URLSearchParams");
function hw(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function gw() {
  return typeof navigator < "u" &&
    (navigator.product === "ReactNative" ||
      navigator.product === "NativeScript" ||
      navigator.product === "NS")
    ? !1
    : typeof window < "u" && typeof document < "u";
}
function Ku(e, t) {
  if (!(e === null || typeof e > "u"))
    if ((typeof e != "object" && (e = [e]), Xu(e)))
      for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
    else
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
}
function Wl() {
  var e = {};
  function t(i, s) {
    Ns(e[s]) && Ns(i)
      ? (e[s] = Wl(e[s], i))
      : Ns(i)
      ? (e[s] = Wl({}, i))
      : Xu(i)
      ? (e[s] = i.slice())
      : (e[s] = i);
  }
  for (var n = 0, r = arguments.length; n < r; n++) Ku(arguments[n], t);
  return e;
}
function vw(e, t, n) {
  return (
    Ku(t, function (i, s) {
      n && typeof i == "function" ? (e[s] = rw(i, n)) : (e[s] = i);
    }),
    e
  );
}
function xw(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function ww(e, t, n, r) {
  (e.prototype = Object.create(t.prototype, r)),
    (e.prototype.constructor = e),
    n && Object.assign(e.prototype, n);
}
function yw(e, t, n) {
  var r,
    i,
    s,
    a = {};
  t = t || {};
  do {
    for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0; )
      (s = r[i]), a[s] || ((t[s] = e[s]), (a[s] = !0));
    e = Object.getPrototypeOf(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}
function Sw(e, t, n) {
  (e = String(e)),
    (n === void 0 || n > e.length) && (n = e.length),
    (n -= t.length);
  var r = e.indexOf(t, n);
  return r !== -1 && r === n;
}
function Cw(e) {
  if (!e) return null;
  var t = e.length;
  if (aa(t)) return null;
  for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
  return n;
}
var bw = (function (e) {
    return function (t) {
      return e && t instanceof e;
    };
  })(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)),
  Ne = {
    isArray: Xu,
    isArrayBuffer: C2,
    isBuffer: iw,
    isFormData: pw,
    isArrayBufferView: sw,
    isString: aw,
    isNumber: ow,
    isObject: b2,
    isPlainObject: Ns,
    isUndefined: aa,
    isDate: lw,
    isFile: uw,
    isBlob: cw,
    isFunction: Yu,
    isStream: fw,
    isURLSearchParams: mw,
    isStandardBrowserEnv: gw,
    forEach: Ku,
    merge: Wl,
    extend: vw,
    trim: hw,
    stripBOM: xw,
    inherits: ww,
    toFlatObject: yw,
    kindOf: Zu,
    kindOfTest: Gn,
    endsWith: Sw,
    toArray: Cw,
    isTypedArray: bw,
    isFileList: dw,
  },
  tr = Ne;
function w0(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
var E2 = function (t, n, r) {
    if (!n) return t;
    var i;
    if (r) i = r(n);
    else if (tr.isURLSearchParams(n)) i = n.toString();
    else {
      var s = [];
      tr.forEach(n, function (u, m) {
        u === null ||
          typeof u > "u" ||
          (tr.isArray(u) ? (m = m + "[]") : (u = [u]),
          tr.forEach(u, function (g) {
            tr.isDate(g)
              ? (g = g.toISOString())
              : tr.isObject(g) && (g = JSON.stringify(g)),
              s.push(w0(m) + "=" + w0(g));
          }));
      }),
        (i = s.join("&"));
    }
    if (i) {
      var a = t.indexOf("#");
      a !== -1 && (t = t.slice(0, a)),
        (t += (t.indexOf("?") === -1 ? "?" : "&") + i);
    }
    return t;
  },
  Ew = Ne;
function Aa() {
  this.handlers = [];
}
Aa.prototype.use = function (t, n, r) {
  return (
    this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null,
    }),
    this.handlers.length - 1
  );
};
Aa.prototype.eject = function (t) {
  this.handlers[t] && (this.handlers[t] = null);
};
Aa.prototype.forEach = function (t) {
  Ew.forEach(this.handlers, function (r) {
    r !== null && t(r);
  });
};
var kw = Aa,
  jw = Ne,
  Tw = function (t, n) {
    jw.forEach(t, function (i, s) {
      s !== n &&
        s.toUpperCase() === n.toUpperCase() &&
        ((t[n] = i), delete t[s]);
    });
  },
  k2 = Ne;
function Lr(e, t, n, r, i) {
  Error.call(this),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
k2.inherits(Lr, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
var j2 = Lr.prototype,
  T2 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
].forEach(function (e) {
  T2[e] = { value: e };
});
Object.defineProperties(Lr, T2);
Object.defineProperty(j2, "isAxiosError", { value: !0 });
Lr.from = function (e, t, n, r, i, s) {
  var a = Object.create(j2);
  return (
    k2.toFlatObject(e, a, function (u) {
      return u !== Error.prototype;
    }),
    Lr.call(a, e.message, t, n, r, i),
    (a.name = e.name),
    s && Object.assign(a, s),
    a
  );
};
var _r = Lr,
  P2 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  gt = Ne;
function Pw(e, t) {
  t = t || new FormData();
  var n = [];
  function r(s) {
    return s === null
      ? ""
      : gt.isDate(s)
      ? s.toISOString()
      : gt.isArrayBuffer(s) || gt.isTypedArray(s)
      ? typeof Blob == "function"
        ? new Blob([s])
        : Buffer.from(s)
      : s;
  }
  function i(s, a) {
    if (gt.isPlainObject(s) || gt.isArray(s)) {
      if (n.indexOf(s) !== -1)
        throw Error("Circular reference detected in " + a);
      n.push(s),
        gt.forEach(s, function (u, m) {
          if (!gt.isUndefined(u)) {
            var v = a ? a + "." + m : m,
              g;
            if (u && !a && typeof u == "object") {
              if (gt.endsWith(m, "{}")) u = JSON.stringify(u);
              else if (gt.endsWith(m, "[]") && (g = gt.toArray(u))) {
                g.forEach(function (w) {
                  !gt.isUndefined(w) && t.append(v, r(w));
                });
                return;
              }
            }
            i(u, v);
          }
        }),
        n.pop();
    } else t.append(a, r(s));
  }
  return i(e), t;
}
var L2 = Pw,
  To,
  y0;
function Lw() {
  if (y0) return To;
  y0 = 1;
  var e = _r;
  return (
    (To = function (n, r, i) {
      var s = i.config.validateStatus;
      !i.status || !s || s(i.status)
        ? n(i)
        : r(
            new e(
              "Request failed with status code " + i.status,
              [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][
                Math.floor(i.status / 100) - 4
              ],
              i.config,
              i.request,
              i
            )
          );
    }),
    To
  );
}
var Po, S0;
function Nw() {
  if (S0) return Po;
  S0 = 1;
  var e = Ne;
  return (
    (Po = e.isStandardBrowserEnv()
      ? (function () {
          return {
            write: function (r, i, s, a, l, u) {
              var m = [];
              m.push(r + "=" + encodeURIComponent(i)),
                e.isNumber(s) && m.push("expires=" + new Date(s).toGMTString()),
                e.isString(a) && m.push("path=" + a),
                e.isString(l) && m.push("domain=" + l),
                u === !0 && m.push("secure"),
                (document.cookie = m.join("; "));
            },
            read: function (r) {
              var i = document.cookie.match(
                new RegExp("(^|;\\s*)(" + r + ")=([^;]*)")
              );
              return i ? decodeURIComponent(i[3]) : null;
            },
            remove: function (r) {
              this.write(r, "", Date.now() - 864e5);
            },
          };
        })()
      : (function () {
          return {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
        })()),
    Po
  );
}
var Aw = function (t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
  },
  Mw = function (t, n) {
    return n ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t;
  },
  Iw = Aw,
  Ow = Mw,
  N2 = function (t, n) {
    return t && !Iw(n) ? Ow(t, n) : n;
  },
  Lo,
  C0;
function _w() {
  if (C0) return Lo;
  C0 = 1;
  var e = Ne,
    t = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ];
  return (
    (Lo = function (r) {
      var i = {},
        s,
        a,
        l;
      return (
        r &&
          e.forEach(
            r.split(`
`),
            function (m) {
              if (
                ((l = m.indexOf(":")),
                (s = e.trim(m.substr(0, l)).toLowerCase()),
                (a = e.trim(m.substr(l + 1))),
                s)
              ) {
                if (i[s] && t.indexOf(s) >= 0) return;
                s === "set-cookie"
                  ? (i[s] = (i[s] ? i[s] : []).concat([a]))
                  : (i[s] = i[s] ? i[s] + ", " + a : a);
              }
            }
          ),
        i
      );
    }),
    Lo
  );
}
var No, b0;
function Rw() {
  if (b0) return No;
  b0 = 1;
  var e = Ne;
  return (
    (No = e.isStandardBrowserEnv()
      ? (function () {
          var n = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a"),
            i;
          function s(a) {
            var l = a;
            return (
              n && (r.setAttribute("href", l), (l = r.href)),
              r.setAttribute("href", l),
              {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname:
                  r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname,
              }
            );
          }
          return (
            (i = s(window.location.href)),
            function (l) {
              var u = e.isString(l) ? s(l) : l;
              return u.protocol === i.protocol && u.host === i.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })()),
    No
  );
}
var Ao, E0;
function Ma() {
  if (E0) return Ao;
  E0 = 1;
  var e = _r,
    t = Ne;
  function n(r) {
    e.call(this, r ?? "canceled", e.ERR_CANCELED),
      (this.name = "CanceledError");
  }
  return t.inherits(n, e, { __CANCEL__: !0 }), (Ao = n), Ao;
}
var Mo, k0;
function zw() {
  return (
    k0 ||
      ((k0 = 1),
      (Mo = function (t) {
        var n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
        return (n && n[1]) || "";
      })),
    Mo
  );
}
var Io, j0;
function T0() {
  if (j0) return Io;
  j0 = 1;
  var e = Ne,
    t = Lw(),
    n = Nw(),
    r = E2,
    i = N2,
    s = _w(),
    a = Rw(),
    l = P2,
    u = _r,
    m = Ma(),
    v = zw();
  return (
    (Io = function (w) {
      return new Promise(function (b, E) {
        var P = w.data,
          h = w.headers,
          x = w.responseType,
          y;
        function k() {
          w.cancelToken && w.cancelToken.unsubscribe(y),
            w.signal && w.signal.removeEventListener("abort", y);
        }
        e.isFormData(P) && e.isStandardBrowserEnv() && delete h["Content-Type"];
        var j = new XMLHttpRequest();
        if (w.auth) {
          var I = w.auth.username || "",
            z = w.auth.password
              ? unescape(encodeURIComponent(w.auth.password))
              : "";
          h.Authorization = "Basic " + btoa(I + ":" + z);
        }
        var M = i(w.baseURL, w.url);
        j.open(w.method.toUpperCase(), r(M, w.params, w.paramsSerializer), !0),
          (j.timeout = w.timeout);
        function R() {
          if (j) {
            var D =
                "getAllResponseHeaders" in j
                  ? s(j.getAllResponseHeaders())
                  : null,
              B =
                !x || x === "text" || x === "json"
                  ? j.responseText
                  : j.response,
              G = {
                data: B,
                status: j.status,
                statusText: j.statusText,
                headers: D,
                config: w,
                request: j,
              };
            t(
              function (Z) {
                b(Z), k();
              },
              function (Z) {
                E(Z), k();
              },
              G
            ),
              (j = null);
          }
        }
        if (
          ("onloadend" in j
            ? (j.onloadend = R)
            : (j.onreadystatechange = function () {
                !j ||
                  j.readyState !== 4 ||
                  (j.status === 0 &&
                    !(j.responseURL && j.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(R);
              }),
          (j.onabort = function () {
            j &&
              (E(new u("Request aborted", u.ECONNABORTED, w, j)), (j = null));
          }),
          (j.onerror = function () {
            E(new u("Network Error", u.ERR_NETWORK, w, j, j)), (j = null);
          }),
          (j.ontimeout = function () {
            var B = w.timeout
                ? "timeout of " + w.timeout + "ms exceeded"
                : "timeout exceeded",
              G = w.transitional || l;
            w.timeoutErrorMessage && (B = w.timeoutErrorMessage),
              E(
                new u(
                  B,
                  G.clarifyTimeoutError ? u.ETIMEDOUT : u.ECONNABORTED,
                  w,
                  j
                )
              ),
              (j = null);
          }),
          e.isStandardBrowserEnv())
        ) {
          var A =
            (w.withCredentials || a(M)) && w.xsrfCookieName
              ? n.read(w.xsrfCookieName)
              : void 0;
          A && (h[w.xsrfHeaderName] = A);
        }
        "setRequestHeader" in j &&
          e.forEach(h, function (B, G) {
            typeof P > "u" && G.toLowerCase() === "content-type"
              ? delete h[G]
              : j.setRequestHeader(G, B);
          }),
          e.isUndefined(w.withCredentials) ||
            (j.withCredentials = !!w.withCredentials),
          x && x !== "json" && (j.responseType = w.responseType),
          typeof w.onDownloadProgress == "function" &&
            j.addEventListener("progress", w.onDownloadProgress),
          typeof w.onUploadProgress == "function" &&
            j.upload &&
            j.upload.addEventListener("progress", w.onUploadProgress),
          (w.cancelToken || w.signal) &&
            ((y = function (D) {
              j &&
                (E(!D || (D && D.type) ? new m() : D), j.abort(), (j = null));
            }),
            w.cancelToken && w.cancelToken.subscribe(y),
            w.signal &&
              (w.signal.aborted ? y() : w.signal.addEventListener("abort", y))),
          P || (P = null);
        var V = v(M);
        if (V && ["http", "https", "file"].indexOf(V) === -1) {
          E(new u("Unsupported protocol " + V + ":", u.ERR_BAD_REQUEST, w));
          return;
        }
        j.send(P);
      });
    }),
    Io
  );
}
var Oo, P0;
function Dw() {
  return P0 || ((P0 = 1), (Oo = null)), Oo;
}
var be = Ne,
  L0 = Tw,
  N0 = _r,
  Bw = P2,
  Fw = L2,
  Vw = { "Content-Type": "application/x-www-form-urlencoded" };
function A0(e, t) {
  !be.isUndefined(e) &&
    be.isUndefined(e["Content-Type"]) &&
    (e["Content-Type"] = t);
}
function Hw() {
  var e;
  return (
    (typeof XMLHttpRequest < "u" ||
      (typeof process < "u" &&
        Object.prototype.toString.call(process) === "[object process]")) &&
      (e = T0()),
    e
  );
}
function Uw(e, t, n) {
  if (be.isString(e))
    try {
      return (t || JSON.parse)(e), be.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
var Ia = {
  transitional: Bw,
  adapter: Hw(),
  transformRequest: [
    function (t, n) {
      if (
        (L0(n, "Accept"),
        L0(n, "Content-Type"),
        be.isFormData(t) ||
          be.isArrayBuffer(t) ||
          be.isBuffer(t) ||
          be.isStream(t) ||
          be.isFile(t) ||
          be.isBlob(t))
      )
        return t;
      if (be.isArrayBufferView(t)) return t.buffer;
      if (be.isURLSearchParams(t))
        return (
          A0(n, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()
        );
      var r = be.isObject(t),
        i = n && n["Content-Type"],
        s;
      if ((s = be.isFileList(t)) || (r && i === "multipart/form-data")) {
        var a = this.env && this.env.FormData;
        return Fw(s ? { "files[]": t } : t, a && new a());
      } else if (r || i === "application/json")
        return A0(n, "application/json"), Uw(t);
      return t;
    },
  ],
  transformResponse: [
    function (t) {
      var n = this.transitional || Ia.transitional,
        r = n && n.silentJSONParsing,
        i = n && n.forcedJSONParsing,
        s = !r && this.responseType === "json";
      if (s || (i && be.isString(t) && t.length))
        try {
          return JSON.parse(t);
        } catch (a) {
          if (s)
            throw a.name === "SyntaxError"
              ? N0.from(a, N0.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Dw() },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
be.forEach(["delete", "get", "head"], function (t) {
  Ia.headers[t] = {};
});
be.forEach(["post", "put", "patch"], function (t) {
  Ia.headers[t] = be.merge(Vw);
});
var Ju = Ia,
  Gw = Ne,
  Ww = Ju,
  $w = function (t, n, r) {
    var i = this || Ww;
    return (
      Gw.forEach(r, function (a) {
        t = a.call(i, t, n);
      }),
      t
    );
  },
  _o,
  M0;
function A2() {
  return (
    M0 ||
      ((M0 = 1),
      (_o = function (t) {
        return !!(t && t.__CANCEL__);
      })),
    _o
  );
}
var I0 = Ne,
  Ro = $w,
  qw = A2(),
  Qw = Ju,
  Zw = Ma();
function zo(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Zw();
}
var Xw = function (t) {
    zo(t),
      (t.headers = t.headers || {}),
      (t.data = Ro.call(t, t.data, t.headers, t.transformRequest)),
      (t.headers = I0.merge(
        t.headers.common || {},
        t.headers[t.method] || {},
        t.headers
      )),
      I0.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (i) {
          delete t.headers[i];
        }
      );
    var n = t.adapter || Qw.adapter;
    return n(t).then(
      function (i) {
        return (
          zo(t),
          (i.data = Ro.call(t, i.data, i.headers, t.transformResponse)),
          i
        );
      },
      function (i) {
        return (
          qw(i) ||
            (zo(t),
            i &&
              i.response &&
              (i.response.data = Ro.call(
                t,
                i.response.data,
                i.response.headers,
                t.transformResponse
              ))),
          Promise.reject(i)
        );
      }
    );
  },
  Ye = Ne,
  M2 = function (t, n) {
    n = n || {};
    var r = {};
    function i(v, g) {
      return Ye.isPlainObject(v) && Ye.isPlainObject(g)
        ? Ye.merge(v, g)
        : Ye.isPlainObject(g)
        ? Ye.merge({}, g)
        : Ye.isArray(g)
        ? g.slice()
        : g;
    }
    function s(v) {
      if (Ye.isUndefined(n[v])) {
        if (!Ye.isUndefined(t[v])) return i(void 0, t[v]);
      } else return i(t[v], n[v]);
    }
    function a(v) {
      if (!Ye.isUndefined(n[v])) return i(void 0, n[v]);
    }
    function l(v) {
      if (Ye.isUndefined(n[v])) {
        if (!Ye.isUndefined(t[v])) return i(void 0, t[v]);
      } else return i(void 0, n[v]);
    }
    function u(v) {
      if (v in n) return i(t[v], n[v]);
      if (v in t) return i(void 0, t[v]);
    }
    var m = {
      url: a,
      method: a,
      data: a,
      baseURL: l,
      transformRequest: l,
      transformResponse: l,
      paramsSerializer: l,
      timeout: l,
      timeoutMessage: l,
      withCredentials: l,
      adapter: l,
      responseType: l,
      xsrfCookieName: l,
      xsrfHeaderName: l,
      onUploadProgress: l,
      onDownloadProgress: l,
      decompress: l,
      maxContentLength: l,
      maxBodyLength: l,
      beforeRedirect: l,
      transport: l,
      httpAgent: l,
      httpsAgent: l,
      cancelToken: l,
      socketPath: l,
      responseEncoding: l,
      validateStatus: u,
    };
    return (
      Ye.forEach(Object.keys(t).concat(Object.keys(n)), function (g) {
        var w = m[g] || s,
          C = w(g);
        (Ye.isUndefined(C) && w !== u) || (r[g] = C);
      }),
      r
    );
  },
  Do,
  O0;
function I2() {
  return O0 || ((O0 = 1), (Do = { version: "0.27.2" })), Do;
}
var Yw = I2().version,
  Yt = _r,
  ec = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  function (e, t) {
    ec[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
var _0 = {};
ec.transitional = function (t, n, r) {
  function i(s, a) {
    return (
      "[Axios v" +
      Yw +
      "] Transitional option '" +
      s +
      "'" +
      a +
      (r ? ". " + r : "")
    );
  }
  return function (s, a, l) {
    if (t === !1)
      throw new Yt(
        i(a, " has been removed" + (n ? " in " + n : "")),
        Yt.ERR_DEPRECATED
      );
    return (
      n &&
        !_0[a] &&
        ((_0[a] = !0),
        console.warn(
          i(
            a,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, a, l) : !0
    );
  };
};
function Kw(e, t, n) {
  if (typeof e != "object")
    throw new Yt("options must be an object", Yt.ERR_BAD_OPTION_VALUE);
  for (var r = Object.keys(e), i = r.length; i-- > 0; ) {
    var s = r[i],
      a = t[s];
    if (a) {
      var l = e[s],
        u = l === void 0 || a(l, s, e);
      if (u !== !0)
        throw new Yt("option " + s + " must be " + u, Yt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new Yt("Unknown option " + s, Yt.ERR_BAD_OPTION);
  }
}
var Jw = { assertOptions: Kw, validators: ec },
  O2 = Ne,
  ey = E2,
  R0 = kw,
  z0 = Xw,
  Oa = M2,
  ty = N2,
  _2 = Jw,
  nr = _2.validators;
function Nr(e) {
  (this.defaults = e),
    (this.interceptors = { request: new R0(), response: new R0() });
}
Nr.prototype.request = function (t, n) {
  typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
    (n = Oa(this.defaults, n)),
    n.method
      ? (n.method = n.method.toLowerCase())
      : this.defaults.method
      ? (n.method = this.defaults.method.toLowerCase())
      : (n.method = "get");
  var r = n.transitional;
  r !== void 0 &&
    _2.assertOptions(
      r,
      {
        silentJSONParsing: nr.transitional(nr.boolean),
        forcedJSONParsing: nr.transitional(nr.boolean),
        clarifyTimeoutError: nr.transitional(nr.boolean),
      },
      !1
    );
  var i = [],
    s = !0;
  this.interceptors.request.forEach(function (C) {
    (typeof C.runWhen == "function" && C.runWhen(n) === !1) ||
      ((s = s && C.synchronous), i.unshift(C.fulfilled, C.rejected));
  });
  var a = [];
  this.interceptors.response.forEach(function (C) {
    a.push(C.fulfilled, C.rejected);
  });
  var l;
  if (!s) {
    var u = [z0, void 0];
    for (
      Array.prototype.unshift.apply(u, i),
        u = u.concat(a),
        l = Promise.resolve(n);
      u.length;

    )
      l = l.then(u.shift(), u.shift());
    return l;
  }
  for (var m = n; i.length; ) {
    var v = i.shift(),
      g = i.shift();
    try {
      m = v(m);
    } catch (w) {
      g(w);
      break;
    }
  }
  try {
    l = z0(m);
  } catch (w) {
    return Promise.reject(w);
  }
  for (; a.length; ) l = l.then(a.shift(), a.shift());
  return l;
};
Nr.prototype.getUri = function (t) {
  t = Oa(this.defaults, t);
  var n = ty(t.baseURL, t.url);
  return ey(n, t.params, t.paramsSerializer);
};
O2.forEach(["delete", "get", "head", "options"], function (t) {
  Nr.prototype[t] = function (n, r) {
    return this.request(
      Oa(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
O2.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, a, l) {
      return this.request(
        Oa(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: a,
        })
      );
    };
  }
  (Nr.prototype[t] = n()), (Nr.prototype[t + "Form"] = n(!0));
});
var ny = Nr,
  Bo,
  D0;
function ry() {
  if (D0) return Bo;
  D0 = 1;
  var e = Ma();
  function t(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    var r;
    this.promise = new Promise(function (a) {
      r = a;
    });
    var i = this;
    this.promise.then(function (s) {
      if (i._listeners) {
        var a,
          l = i._listeners.length;
        for (a = 0; a < l; a++) i._listeners[a](s);
        i._listeners = null;
      }
    }),
      (this.promise.then = function (s) {
        var a,
          l = new Promise(function (u) {
            i.subscribe(u), (a = u);
          }).then(s);
        return (
          (l.cancel = function () {
            i.unsubscribe(a);
          }),
          l
        );
      }),
      n(function (a) {
        i.reason || ((i.reason = new e(a)), r(i.reason));
      });
  }
  return (
    (t.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
    (t.prototype.subscribe = function (r) {
      if (this.reason) {
        r(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(r) : (this._listeners = [r]);
    }),
    (t.prototype.unsubscribe = function (r) {
      if (this._listeners) {
        var i = this._listeners.indexOf(r);
        i !== -1 && this._listeners.splice(i, 1);
      }
    }),
    (t.source = function () {
      var r,
        i = new t(function (a) {
          r = a;
        });
      return { token: i, cancel: r };
    }),
    (Bo = t),
    Bo
  );
}
var Fo, B0;
function iy() {
  return (
    B0 ||
      ((B0 = 1),
      (Fo = function (t) {
        return function (r) {
          return t.apply(null, r);
        };
      })),
    Fo
  );
}
var Vo, F0;
function sy() {
  if (F0) return Vo;
  F0 = 1;
  var e = Ne;
  return (
    (Vo = function (n) {
      return e.isObject(n) && n.isAxiosError === !0;
    }),
    Vo
  );
}
var V0 = Ne,
  ay = S2,
  As = ny,
  oy = M2,
  ly = Ju;
function R2(e) {
  var t = new As(e),
    n = ay(As.prototype.request, t);
  return (
    V0.extend(n, As.prototype, t),
    V0.extend(n, t),
    (n.create = function (i) {
      return R2(oy(e, i));
    }),
    n
  );
}
var Qe = R2(ly);
Qe.Axios = As;
Qe.CanceledError = Ma();
Qe.CancelToken = ry();
Qe.isCancel = A2();
Qe.VERSION = I2().version;
Qe.toFormData = L2;
Qe.AxiosError = _r;
Qe.Cancel = Qe.CanceledError;
Qe.all = function (t) {
  return Promise.all(t);
};
Qe.spread = iy();
Qe.isAxiosError = sy();
qu.exports = Qe;
qu.exports.default = Qe;
var uy = qu.exports,
  cy = uy;
const te = Xl(cy);
function H0(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function tc(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : H0(t[n]) &&
          H0(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          tc(e[n], t[n]);
    });
}
const z2 = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function Rr() {
  const e = typeof document < "u" ? document : {};
  return tc(e, z2), e;
}
const dy = {
  document: z2,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function st() {
  const e = typeof window < "u" ? window : {};
  return tc(e, dy), e;
}
function fy(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function py(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function $l(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function oa() {
  return Date.now();
}
function my(e) {
  const t = st();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function hy(e, t) {
  t === void 0 && (t = "x");
  const n = st();
  let r, i, s;
  const a = my(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = a.transform || a.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (s = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((s =
          a.MozTransform ||
          a.OTransform ||
          a.MsTransform ||
          a.msTransform ||
          a.transform ||
          a
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = s.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = s.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = s.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function gs(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function gy(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Je() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !gy(r)) {
      const i = Object.keys(Object(r)).filter((s) => t.indexOf(s) < 0);
      for (let s = 0, a = i.length; s < a; s += 1) {
        const l = i[s],
          u = Object.getOwnPropertyDescriptor(r, l);
        u !== void 0 &&
          u.enumerable &&
          (gs(e[l]) && gs(r[l])
            ? r[l].__swiper__
              ? (e[l] = r[l])
              : Je(e[l], r[l])
            : !gs(e[l]) && gs(r[l])
            ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : Je(e[l], r[l]))
            : (e[l] = r[l]));
      }
    }
  }
  return e;
}
function vs(e, t, n) {
  e.style.setProperty(t, n);
}
function D2(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = st(),
    s = -t.translate;
  let a = null,
    l;
  const u = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const m = n > s ? "next" : "prev",
    v = (w, C) => (m === "next" && w >= C) || (m === "prev" && w <= C),
    g = () => {
      (l = new Date().getTime()), a === null && (a = l);
      const w = Math.max(Math.min((l - a) / u, 1), 0),
        C = 0.5 - Math.cos(w * Math.PI) / 2;
      let b = s + C * (n - s);
      if ((v(b, n) && (b = n), t.wrapperEl.scrollTo({ [r]: b }), v(b, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: b });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(g);
    };
  g();
}
function Lt(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function la(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function ua(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : fy(t))), n;
}
function vy(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function xy(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function rn(e, t) {
  return st().getComputedStyle(e, null).getPropertyValue(t);
}
function ca(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function B2(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function ql(e, t, n) {
  const r = st();
  return (
    e[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
    )
  );
}
function Ee(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
let Ho;
function wy() {
  const e = st(),
    t = Rr();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function F2() {
  return Ho || (Ho = wy()), Ho;
}
let Uo;
function yy(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = F2(),
    r = st(),
    i = r.navigator.platform,
    s = t || r.navigator.userAgent,
    a = { ios: !1, android: !1 },
    l = r.screen.width,
    u = r.screen.height,
    m = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let v = s.match(/(iPad).*OS\s([\d_]+)/);
  const g = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    w = !v && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    C = i === "Win32";
  let b = i === "MacIntel";
  const E = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !v &&
      b &&
      n.touch &&
      E.indexOf(`${l}x${u}`) >= 0 &&
      ((v = s.match(/(Version)\/([\d.]+)/)),
      v || (v = [0, 1, "13_0_0"]),
      (b = !1)),
    m && !C && ((a.os = "android"), (a.android = !0)),
    (v || w || g) && ((a.os = "ios"), (a.ios = !0)),
    a
  );
}
function V2(e) {
  return e === void 0 && (e = {}), Uo || (Uo = yy(e)), Uo;
}
let Go;
function Sy() {
  const e = st(),
    t = V2();
  let n = !1;
  function r() {
    const l = e.navigator.userAgent.toLowerCase();
    return (
      l.indexOf("safari") >= 0 &&
      l.indexOf("chrome") < 0 &&
      l.indexOf("android") < 0
    );
  }
  if (r()) {
    const l = String(e.navigator.userAgent);
    if (l.includes("Version/")) {
      const [u, m] = l
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((v) => Number(v));
      n = u < 16 || (u === 16 && m < 2);
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
    s = r(),
    a = s || (i && t.ios);
  return {
    isSafari: n || s,
    needPerspectiveFix: n,
    need3dFix: a,
    isWebView: i,
  };
}
function Cy() {
  return Go || (Go = Sy()), Go;
}
function by(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = st();
  let s = null,
    a = null;
  const l = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    u = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((s = new ResizeObserver((g) => {
          a = i.requestAnimationFrame(() => {
            const { width: w, height: C } = t;
            let b = w,
              E = C;
            g.forEach((P) => {
              let { contentBoxSize: h, contentRect: x, target: y } = P;
              (y && y !== t.el) ||
                ((b = x ? x.width : (h[0] || h).inlineSize),
                (E = x ? x.height : (h[0] || h).blockSize));
            }),
              (b !== w || E !== C) && l();
          });
        })),
        s.observe(t.el));
    },
    m = () => {
      a && i.cancelAnimationFrame(a),
        s && s.unobserve && t.el && (s.unobserve(t.el), (s = null));
    },
    v = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      u();
      return;
    }
    i.addEventListener("resize", l), i.addEventListener("orientationchange", v);
  }),
    n("destroy", () => {
      m(),
        i.removeEventListener("resize", l),
        i.removeEventListener("orientationchange", v);
    });
}
function Ey(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = [],
    a = st(),
    l = function (v, g) {
      g === void 0 && (g = {});
      const w = a.MutationObserver || a.WebkitMutationObserver,
        C = new w((b) => {
          if (t.__preventObserver__) return;
          if (b.length === 1) {
            i("observerUpdate", b[0]);
            return;
          }
          const E = function () {
            i("observerUpdate", b[0]);
          };
          a.requestAnimationFrame
            ? a.requestAnimationFrame(E)
            : a.setTimeout(E, 0);
        });
      C.observe(v, {
        attributes: typeof g.attributes > "u" ? !0 : g.attributes,
        childList: typeof g.childList > "u" ? !0 : g.childList,
        characterData: typeof g.characterData > "u" ? !0 : g.characterData,
      }),
        s.push(C);
    },
    u = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const v = B2(t.hostEl);
          for (let g = 0; g < v.length; g += 1) l(v[g]);
        }
        l(t.hostEl, { childList: t.params.observeSlideChildren }),
          l(t.wrapperEl, { attributes: !1 });
      }
    },
    m = () => {
      s.forEach((v) => {
        v.disconnect();
      }),
        s.splice(0, s.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", u),
    r("destroy", m);
}
var ky = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((s) => {
        r.eventsListeners[s] || (r.eventsListeners[s] = []),
          r.eventsListeners[s][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++)
        a[l] = arguments[l];
      t.apply(r, a);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, s) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(s, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++)
      s[a] = arguments[a];
    return (
      typeof s[0] == "string" || Array.isArray(s[0])
        ? ((t = s[0]), (n = s.slice(1, s.length)), (r = e))
        : ((t = s[0].events), (n = s[0].data), (r = s[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((u) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((m) => {
            m.apply(r, [u, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[u] &&
            e.eventsListeners[u].forEach((m) => {
              m.apply(r, n);
            });
      }),
      e
    );
  },
};
function jy() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(rn(r, "padding-left") || 0, 10) -
        parseInt(rn(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(rn(r, "padding-top") || 0, 10) -
        parseInt(rn(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function Ty() {
  const e = this;
  function t(A, V) {
    return parseFloat(A.getPropertyValue(e.getDirectionLabel(V)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: s, rtlTranslate: a, wrongRTL: l } = e,
    u = e.virtual && n.virtual.enabled,
    m = u ? e.virtual.slides.length : e.slides.length,
    v = Lt(i, `.${e.params.slideClass}, swiper-slide`),
    g = u ? e.virtual.slides.length : v.length;
  let w = [];
  const C = [],
    b = [];
  let E = n.slidesOffsetBefore;
  typeof E == "function" && (E = n.slidesOffsetBefore.call(e));
  let P = n.slidesOffsetAfter;
  typeof P == "function" && (P = n.slidesOffsetAfter.call(e));
  const h = e.snapGrid.length,
    x = e.slidesGrid.length;
  let y = n.spaceBetween,
    k = -E,
    j = 0,
    I = 0;
  if (typeof s > "u") return;
  typeof y == "string" && y.indexOf("%") >= 0
    ? (y = (parseFloat(y.replace("%", "")) / 100) * s)
    : typeof y == "string" && (y = parseFloat(y)),
    (e.virtualSize = -y),
    v.forEach((A) => {
      a ? (A.style.marginLeft = "") : (A.style.marginRight = ""),
        (A.style.marginBottom = ""),
        (A.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (vs(r, "--swiper-centered-offset-before", ""),
      vs(r, "--swiper-centered-offset-after", ""));
  const z = n.grid && n.grid.rows > 1 && e.grid;
  z ? e.grid.initSlides(v) : e.grid && e.grid.unsetSlides();
  let M;
  const R =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (A) => typeof n.breakpoints[A].slidesPerView < "u"
    ).length > 0;
  for (let A = 0; A < g; A += 1) {
    M = 0;
    let V;
    if (
      (v[A] && (V = v[A]),
      z && e.grid.updateSlide(A, V, v),
      !(v[A] && rn(V, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        R && (v[A].style[e.getDirectionLabel("width")] = "");
        const D = getComputedStyle(V),
          B = V.style.transform,
          G = V.style.webkitTransform;
        if (
          (B && (V.style.transform = "none"),
          G && (V.style.webkitTransform = "none"),
          n.roundLengths)
        )
          M = e.isHorizontal() ? ql(V, "width") : ql(V, "height");
        else {
          const K = t(D, "width"),
            Z = t(D, "padding-left"),
            mt = t(D, "padding-right"),
            H = t(D, "margin-left"),
            O = t(D, "margin-right"),
            W = D.getPropertyValue("box-sizing");
          if (W && W === "border-box") M = K + H + O;
          else {
            const { clientWidth: ie, offsetWidth: le } = V;
            M = K + Z + mt + H + O + (le - ie);
          }
        }
        B && (V.style.transform = B),
          G && (V.style.webkitTransform = G),
          n.roundLengths && (M = Math.floor(M));
      } else
        (M = (s - (n.slidesPerView - 1) * y) / n.slidesPerView),
          n.roundLengths && (M = Math.floor(M)),
          v[A] && (v[A].style[e.getDirectionLabel("width")] = `${M}px`);
      v[A] && (v[A].swiperSlideSize = M),
        b.push(M),
        n.centeredSlides
          ? ((k = k + M / 2 + j / 2 + y),
            j === 0 && A !== 0 && (k = k - s / 2 - y),
            A === 0 && (k = k - s / 2 - y),
            Math.abs(k) < 1 / 1e3 && (k = 0),
            n.roundLengths && (k = Math.floor(k)),
            I % n.slidesPerGroup === 0 && w.push(k),
            C.push(k))
          : (n.roundLengths && (k = Math.floor(k)),
            (I - Math.min(e.params.slidesPerGroupSkip, I)) %
              e.params.slidesPerGroup ===
              0 && w.push(k),
            C.push(k),
            (k = k + M + y)),
        (e.virtualSize += M + y),
        (j = M),
        (I += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, s) + P),
    a &&
      l &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (r.style.width = `${e.virtualSize + y}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + y}px`),
    z && e.grid.updateWrapperSize(M, w),
    !n.centeredSlides)
  ) {
    const A = [];
    for (let V = 0; V < w.length; V += 1) {
      let D = w[V];
      n.roundLengths && (D = Math.floor(D)),
        w[V] <= e.virtualSize - s && A.push(D);
    }
    (w = A),
      Math.floor(e.virtualSize - s) - Math.floor(w[w.length - 1]) > 1 &&
        w.push(e.virtualSize - s);
  }
  if (u && n.loop) {
    const A = b[0] + y;
    if (n.slidesPerGroup > 1) {
      const V = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        D = A * n.slidesPerGroup;
      for (let B = 0; B < V; B += 1) w.push(w[w.length - 1] + D);
    }
    for (let V = 0; V < e.virtual.slidesBefore + e.virtual.slidesAfter; V += 1)
      n.slidesPerGroup === 1 && w.push(w[w.length - 1] + A),
        C.push(C[C.length - 1] + A),
        (e.virtualSize += A);
  }
  if ((w.length === 0 && (w = [0]), y !== 0)) {
    const A =
      e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight");
    v.filter((V, D) =>
      !n.cssMode || n.loop ? !0 : D !== v.length - 1
    ).forEach((V) => {
      V.style[A] = `${y}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let A = 0;
    b.forEach((D) => {
      A += D + (y || 0);
    }),
      (A -= y);
    const V = A - s;
    w = w.map((D) => (D <= 0 ? -E : D > V ? V + P : D));
  }
  if (n.centerInsufficientSlides) {
    let A = 0;
    b.forEach((D) => {
      A += D + (y || 0);
    }),
      (A -= y);
    const V = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
    if (A + V < s) {
      const D = (s - A - V) / 2;
      w.forEach((B, G) => {
        w[G] = B - D;
      }),
        C.forEach((B, G) => {
          C[G] = B + D;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: v,
      snapGrid: w,
      slidesGrid: C,
      slidesSizesGrid: b,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    vs(r, "--swiper-centered-offset-before", `${-w[0]}px`),
      vs(
        r,
        "--swiper-centered-offset-after",
        `${e.size / 2 - b[b.length - 1] / 2}px`
      );
    const A = -e.snapGrid[0],
      V = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((D) => D + A)),
      (e.slidesGrid = e.slidesGrid.map((D) => D + V));
  }
  if (
    (g !== m && e.emit("slidesLengthChange"),
    w.length !== h &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    C.length !== x && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !u && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const A = `${n.containerModifierClass}backface-hidden`,
      V = e.el.classList.contains(A);
    g <= n.maxBackfaceHiddenSlides
      ? V || e.el.classList.add(A)
      : V && e.el.classList.remove(A);
  }
}
function Py(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    s;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const a = (l) => (r ? t.slides[t.getSlideIndexByData(l)] : t.slides[l]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        n.push(l);
      });
    else
      for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
        const l = t.activeIndex + s;
        if (l > t.slides.length && !r) break;
        n.push(a(l));
      }
  else n.push(a(t.activeIndex));
  for (s = 0; s < n.length; s += 1)
    if (typeof n[s] < "u") {
      const l = n[s].offsetHeight;
      i = l > i ? l : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function Ly() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
const U0 = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function Ny(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: s } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let a = -e;
  i && (a = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
  let l = n.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0
    ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
    : typeof l == "string" && (l = parseFloat(l));
  for (let u = 0; u < r.length; u += 1) {
    const m = r[u];
    let v = m.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (v -= r[0].swiperSlideOffset);
    const g =
        (a + (n.centeredSlides ? t.minTranslate() : 0) - v) /
        (m.swiperSlideSize + l),
      w =
        (a - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - v) /
        (m.swiperSlideSize + l),
      C = -(a - v),
      b = C + t.slidesSizesGrid[u],
      E = C >= 0 && C <= t.size - t.slidesSizesGrid[u],
      P =
        (C >= 0 && C < t.size - 1) ||
        (b > 1 && b <= t.size) ||
        (C <= 0 && b >= t.size);
    P && (t.visibleSlides.push(m), t.visibleSlidesIndexes.push(u)),
      U0(m, P, n.slideVisibleClass),
      U0(m, E, n.slideFullyVisibleClass),
      (m.progress = i ? -g : g),
      (m.originalProgress = i ? -w : w);
  }
}
function Ay(e) {
  const t = this;
  if (typeof e > "u") {
    const v = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * v) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: s, isEnd: a, progressLoop: l } = t;
  const u = s,
    m = a;
  if (r === 0) (i = 0), (s = !0), (a = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const v = Math.abs(e - t.minTranslate()) < 1,
      g = Math.abs(e - t.maxTranslate()) < 1;
    (s = v || i <= 0), (a = g || i >= 1), v && (i = 0), g && (i = 1);
  }
  if (n.loop) {
    const v = t.getSlideIndexByData(0),
      g = t.getSlideIndexByData(t.slides.length - 1),
      w = t.slidesGrid[v],
      C = t.slidesGrid[g],
      b = t.slidesGrid[t.slidesGrid.length - 1],
      E = Math.abs(e);
    E >= w ? (l = (E - w) / b) : (l = (E + b - C) / b), l > 1 && (l -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: l, isBeginning: s, isEnd: a }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    s && !u && t.emit("reachBeginning toEdge"),
    a && !m && t.emit("reachEnd toEdge"),
    ((u && !s) || (m && !a)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
const Wo = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function My() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    s = e.virtual && n.virtual.enabled,
    a = e.grid && n.grid && n.grid.rows > 1,
    l = (g) => Lt(r, `.${n.slideClass}${g}, swiper-slide${g}`)[0];
  let u, m, v;
  if (s)
    if (n.loop) {
      let g = i - e.virtual.slidesBefore;
      g < 0 && (g = e.virtual.slides.length + g),
        g >= e.virtual.slides.length && (g -= e.virtual.slides.length),
        (u = l(`[data-swiper-slide-index="${g}"]`));
    } else u = l(`[data-swiper-slide-index="${i}"]`);
  else
    a
      ? ((u = t.filter((g) => g.column === i)[0]),
        (v = t.filter((g) => g.column === i + 1)[0]),
        (m = t.filter((g) => g.column === i - 1)[0]))
      : (u = t[i]);
  u &&
    (a ||
      ((v = xy(u, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !v && (v = t[0]),
      (m = vy(u, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !m === 0 && (m = t[t.length - 1]))),
    t.forEach((g) => {
      Wo(g, g === u, n.slideActiveClass),
        Wo(g, g === v, n.slideNextClass),
        Wo(g, g === m, n.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const Ms = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  $o = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  Ql = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const a = i,
        l = [a - t];
      l.push(...Array.from({ length: t }).map((u, m) => a + r + m)),
        e.slides.forEach((u, m) => {
          l.includes(u.column) && $o(e, m);
        });
      return;
    }
    const s = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let a = i - t; a <= s + t; a += 1) {
        const l = ((a % n) + n) % n;
        (l < i || l > s) && $o(e, l);
      }
    else
      for (let a = Math.max(i - t, 0); a <= Math.min(s + t, n - 1); a += 1)
        a !== i && (a > s || a < i) && $o(e, a);
  };
function Iy(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let s = 0; s < t.length; s += 1)
    typeof t[s + 1] < "u"
      ? r >= t[s] && r < t[s + 1] - (t[s + 1] - t[s]) / 2
        ? (i = s)
        : r >= t[s] && r < t[s + 1] && (i = s + 1)
      : r >= t[s] && (i = s);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function Oy(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: s, realIndex: a, snapIndex: l } = t;
  let u = e,
    m;
  const v = (C) => {
    let b = C - t.virtual.slidesBefore;
    return (
      b < 0 && (b = t.virtual.slides.length + b),
      b >= t.virtual.slides.length && (b -= t.virtual.slides.length),
      b
    );
  };
  if ((typeof u > "u" && (u = Iy(t)), r.indexOf(n) >= 0)) m = r.indexOf(n);
  else {
    const C = Math.min(i.slidesPerGroupSkip, u);
    m = C + Math.floor((u - C) / i.slidesPerGroup);
  }
  if ((m >= r.length && (m = r.length - 1), u === s && !t.params.loop)) {
    m !== l && ((t.snapIndex = m), t.emit("snapIndexChange"));
    return;
  }
  if (u === s && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = v(u);
    return;
  }
  const g = t.grid && i.grid && i.grid.rows > 1;
  let w;
  if (t.virtual && i.virtual.enabled && i.loop) w = v(u);
  else if (g) {
    const C = t.slides.filter((E) => E.column === u)[0];
    let b = parseInt(C.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(b) && (b = Math.max(t.slides.indexOf(C), 0)),
      (w = Math.floor(b / i.grid.rows));
  } else if (t.slides[u]) {
    const C = t.slides[u].getAttribute("data-swiper-slide-index");
    C ? (w = parseInt(C, 10)) : (w = u);
  } else w = u;
  Object.assign(t, {
    previousSnapIndex: l,
    snapIndex: m,
    previousRealIndex: a,
    realIndex: w,
    previousIndex: s,
    activeIndex: u,
  }),
    t.initialized && Ql(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (a !== w && t.emit("realIndexChange"), t.emit("slideChange"));
}
function _y(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((l) => {
      !i && l.matches && l.matches(`.${r.slideClass}, swiper-slide`) && (i = l);
    });
  let s = !1,
    a;
  if (i) {
    for (let l = 0; l < n.slides.length; l += 1)
      if (n.slides[l] === i) {
        (s = !0), (a = l);
        break;
      }
  }
  if (i && s)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = a);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var Ry = {
  updateSize: jy,
  updateSlides: Ty,
  updateAutoHeight: Py,
  updateSlidesOffset: Ly,
  updateSlidesProgress: Ny,
  updateProgress: Ay,
  updateSlidesClasses: My,
  updateActiveIndex: Oy,
  updateClickedSlide: _y,
};
function zy(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: s } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let a = hy(s, e);
  return (a += t.cssOverflowAdjustment()), r && (a = -a), a || 0;
}
function Dy(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: s, progress: a } = n;
  let l = 0,
    u = 0;
  const m = 0;
  n.isHorizontal() ? (l = r ? -e : e) : (u = e),
    i.roundLengths && ((l = Math.floor(l)), (u = Math.floor(u))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? l : u),
    i.cssMode
      ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -l
          : -u)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (l -= n.cssOverflowAdjustment())
          : (u -= n.cssOverflowAdjustment()),
        (s.style.transform = `translate3d(${l}px, ${u}px, ${m}px)`));
  let v;
  const g = n.maxTranslate() - n.minTranslate();
  g === 0 ? (v = 0) : (v = (e - n.minTranslate()) / g),
    v !== a && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function By() {
  return -this.snapGrid[0];
}
function Fy() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Vy(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const s = this,
    { params: a, wrapperEl: l } = s;
  if (s.animating && a.preventInteractionOnTransition) return !1;
  const u = s.minTranslate(),
    m = s.maxTranslate();
  let v;
  if (
    (r && e > u ? (v = u) : r && e < m ? (v = m) : (v = e),
    s.updateProgress(v),
    a.cssMode)
  ) {
    const g = s.isHorizontal();
    if (t === 0) l[g ? "scrollLeft" : "scrollTop"] = -v;
    else {
      if (!s.support.smoothScroll)
        return (
          D2({ swiper: s, targetPosition: -v, side: g ? "left" : "top" }), !0
        );
      l.scrollTo({ [g ? "left" : "top"]: -v, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (s.setTransition(0),
        s.setTranslate(v),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd")))
      : (s.setTransition(t),
        s.setTranslate(v),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (w) {
              !s ||
                s.destroyed ||
                (w.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  (s.animating = !1),
                  n && s.emit("transitionEnd")));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var Hy = {
  getTranslate: zy,
  setTranslate: Dy,
  minTranslate: By,
  maxTranslate: Fy,
  translateTo: Vy,
};
function Uy(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function H2(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: s, previousIndex: a } = t;
  let l = r;
  if (
    (l || (s > a ? (l = "next") : s < a ? (l = "prev") : (l = "reset")),
    t.emit(`transition${i}`),
    n && s !== a)
  ) {
    if (l === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      l === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function Gy(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    H2({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function Wy(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      H2({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var $y = { setTransition: Uy, transitionStart: Gy, transitionEnd: Wy };
function qy(e, t, n, r, i) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const s = this;
  let a = e;
  a < 0 && (a = 0);
  const {
    params: l,
    snapGrid: u,
    slidesGrid: m,
    previousIndex: v,
    activeIndex: g,
    rtlTranslate: w,
    wrapperEl: C,
    enabled: b,
  } = s;
  if (
    (!b && !r && !i) ||
    s.destroyed ||
    (s.animating && l.preventInteractionOnTransition)
  )
    return !1;
  typeof t > "u" && (t = s.params.speed);
  const E = Math.min(s.params.slidesPerGroupSkip, a);
  let P = E + Math.floor((a - E) / s.params.slidesPerGroup);
  P >= u.length && (P = u.length - 1);
  const h = -u[P];
  if (l.normalizeSlideIndex)
    for (let y = 0; y < m.length; y += 1) {
      const k = -Math.floor(h * 100),
        j = Math.floor(m[y] * 100),
        I = Math.floor(m[y + 1] * 100);
      typeof m[y + 1] < "u"
        ? k >= j && k < I - (I - j) / 2
          ? (a = y)
          : k >= j && k < I && (a = y + 1)
        : k >= j && (a = y);
    }
  if (
    s.initialized &&
    a !== g &&
    ((!s.allowSlideNext &&
      (w
        ? h > s.translate && h > s.minTranslate()
        : h < s.translate && h < s.minTranslate())) ||
      (!s.allowSlidePrev &&
        h > s.translate &&
        h > s.maxTranslate() &&
        (g || 0) !== a))
  )
    return !1;
  a !== (v || 0) && n && s.emit("beforeSlideChangeStart"), s.updateProgress(h);
  let x;
  if (
    (a > g ? (x = "next") : a < g ? (x = "prev") : (x = "reset"),
    (w && -h === s.translate) || (!w && h === s.translate))
  )
    return (
      s.updateActiveIndex(a),
      l.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      l.effect !== "slide" && s.setTranslate(h),
      x !== "reset" && (s.transitionStart(n, x), s.transitionEnd(n, x)),
      !1
    );
  if (l.cssMode) {
    const y = s.isHorizontal(),
      k = w ? h : -h;
    if (t === 0) {
      const j = s.virtual && s.params.virtual.enabled;
      j &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        j && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              C[y ? "scrollLeft" : "scrollTop"] = k;
            }))
          : (C[y ? "scrollLeft" : "scrollTop"] = k),
        j &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""), (s._immediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          D2({ swiper: s, targetPosition: k, side: y ? "left" : "top" }), !0
        );
      C.scrollTo({ [y ? "left" : "top"]: k, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s.setTransition(t),
    s.setTranslate(h),
    s.updateActiveIndex(a),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", t, r),
    s.transitionStart(n, x),
    t === 0
      ? s.transitionEnd(n, x)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (k) {
            !s ||
              s.destroyed ||
              (k.target === this &&
                (s.wrapperEl.removeEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(n, x)));
          }),
        s.wrapperEl.addEventListener(
          "transitionend",
          s.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function Qy(e, t, n, r) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > "u" && (t = i.params.speed);
  const s = i.grid && i.params.grid && i.params.grid.rows > 1;
  let a = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) a = a + i.virtual.slidesBefore;
    else {
      let l;
      if (s) {
        const w = a * i.params.grid.rows;
        l = i.slides.filter(
          (C) => C.getAttribute("data-swiper-slide-index") * 1 === w
        )[0].column;
      } else l = i.getSlideIndexByData(a);
      const u = s
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: m } = i.params;
      let v = i.params.slidesPerView;
      v === "auto"
        ? (v = i.slidesPerViewDynamic())
        : ((v = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          m && v % 2 === 0 && (v = v + 1));
      let g = u - l < v;
      if (
        (m && (g = g || l < Math.ceil(v / 2)),
        r && m && i.params.slidesPerView !== "auto" && !s && (g = !1),
        g)
      ) {
        const w = m
          ? l < i.activeIndex
            ? "prev"
            : "next"
          : l - i.activeIndex - 1 < i.params.slidesPerView
          ? "next"
          : "prev";
        i.loopFix({
          direction: w,
          slideTo: !0,
          activeSlideIndex: w === "next" ? l + 1 : l - u + 1,
          slideRealIndex: w === "next" ? i.realIndex : void 0,
        });
      }
      if (s) {
        const w = a * i.params.grid.rows;
        a = i.slides.filter(
          (C) => C.getAttribute("data-swiper-slide-index") * 1 === w
        )[0].column;
      } else a = i.getSlideIndexByData(a);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(a, t, n, r);
    }),
    i
  );
}
function Zy(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: s, animating: a } = r;
  if (!i || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  let l = s.slidesPerGroup;
  s.slidesPerView === "auto" &&
    s.slidesPerGroup === 1 &&
    s.slidesPerGroupAuto &&
    (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const u = r.activeIndex < s.slidesPerGroupSkip ? 1 : l,
    m = r.virtual && s.virtual.enabled;
  if (s.loop) {
    if (a && !m && s.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && s.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + u, e, t, n);
        }),
        !0
      );
  }
  return s.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + u, e, t, n);
}
function Xy(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: s,
      slidesGrid: a,
      rtlTranslate: l,
      enabled: u,
      animating: m,
    } = r;
  if (!u || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  const v = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (m && !v && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const g = l ? r.translate : -r.translate;
  function w(h) {
    return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h);
  }
  const C = w(g),
    b = s.map((h) => w(h));
  let E = s[b.indexOf(C) - 1];
  if (typeof E > "u" && i.cssMode) {
    let h;
    s.forEach((x, y) => {
      C >= x && (h = y);
    }),
      typeof h < "u" && (E = s[h > 0 ? h - 1 : h]);
  }
  let P = 0;
  if (
    (typeof E < "u" &&
      ((P = a.indexOf(E)),
      P < 0 && (P = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((P = P - r.slidesPerViewDynamic("previous", !0) + 1),
        (P = Math.max(P, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const h =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(h, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(P, e, t, n);
      }),
      !0
    );
  return r.slideTo(P, e, t, n);
}
function Yy(e, t, n) {
  t === void 0 && (t = !0);
  const r = this;
  if (!r.destroyed)
    return (
      typeof e > "u" && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
    );
}
function Ky(e, t, n, r) {
  t === void 0 && (t = !0), r === void 0 && (r = 0.5);
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  let s = i.activeIndex;
  const a = Math.min(i.params.slidesPerGroupSkip, s),
    l = a + Math.floor((s - a) / i.params.slidesPerGroup),
    u = i.rtlTranslate ? i.translate : -i.translate;
  if (u >= i.snapGrid[l]) {
    const m = i.snapGrid[l],
      v = i.snapGrid[l + 1];
    u - m > (v - m) * r && (s += i.params.slidesPerGroup);
  } else {
    const m = i.snapGrid[l - 1],
      v = i.snapGrid[l];
    u - m <= (v - m) * r && (s -= i.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, i.slidesGrid.length - 1)),
    i.slideTo(s, e, t, n)
  );
}
function Jy() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    s;
  const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (s = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              Lt(n, `${a}[data-swiper-slide-index="${s}"]`)[0]
            )),
            $l(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            Lt(n, `${a}[data-swiper-slide-index="${s}"]`)[0]
          )),
          $l(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var e3 = {
  slideTo: qy,
  slideToLoop: Qy,
  slideNext: Zy,
  slidePrev: Xy,
  slideReset: Yy,
  slideToClosest: Ky,
  slideToClickedSlide: Jy,
};
function t3(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      Lt(r, `.${n.slideClass}, swiper-slide`).forEach((g, w) => {
        g.setAttribute("data-swiper-slide-index", w);
      });
    },
    s = t.grid && n.grid && n.grid.rows > 1,
    a = n.slidesPerGroup * (s ? n.grid.rows : 1),
    l = t.slides.length % a !== 0,
    u = s && t.slides.length % n.grid.rows !== 0,
    m = (v) => {
      for (let g = 0; g < v; g += 1) {
        const w = t.isElement
          ? ua("swiper-slide", [n.slideBlankClass])
          : ua("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(w);
      }
    };
  if (l) {
    if (n.loopAddBlankSlides) {
      const v = a - (t.slides.length % a);
      m(v), t.recalcSlides(), t.updateSlides();
    } else
      la(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else if (u) {
    if (n.loopAddBlankSlides) {
      const v = n.grid.rows - (t.slides.length % n.grid.rows);
      m(v), t.recalcSlides(), t.updateSlides();
    } else
      la(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else i();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function n3(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: s,
    byController: a,
    byMousewheel: l,
  } = e === void 0 ? {} : e;
  const u = this;
  if (!u.params.loop) return;
  u.emit("beforeLoopFix");
  const {
      slides: m,
      allowSlidePrev: v,
      allowSlideNext: g,
      slidesEl: w,
      params: C,
    } = u,
    { centeredSlides: b } = C;
  if (
    ((u.allowSlidePrev = !0),
    (u.allowSlideNext = !0),
    u.virtual && C.virtual.enabled)
  ) {
    n &&
      (!C.centeredSlides && u.snapIndex === 0
        ? u.slideTo(u.virtual.slides.length, 0, !1, !0)
        : C.centeredSlides && u.snapIndex < C.slidesPerView
        ? u.slideTo(u.virtual.slides.length + u.snapIndex, 0, !1, !0)
        : u.snapIndex === u.snapGrid.length - 1 &&
          u.slideTo(u.virtual.slidesBefore, 0, !1, !0)),
      (u.allowSlidePrev = v),
      (u.allowSlideNext = g),
      u.emit("loopFix");
    return;
  }
  let E = C.slidesPerView;
  E === "auto"
    ? (E = u.slidesPerViewDynamic())
    : ((E = Math.ceil(parseFloat(C.slidesPerView, 10))),
      b && E % 2 === 0 && (E = E + 1));
  const P = C.slidesPerGroupAuto ? E : C.slidesPerGroup;
  let h = P;
  h % P !== 0 && (h += P - (h % P)),
    (h += C.loopAdditionalSlides),
    (u.loopedSlides = h);
  const x = u.grid && C.grid && C.grid.rows > 1;
  m.length < E + h
    ? la(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : x &&
      C.grid.fill === "row" &&
      la(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const y = [],
    k = [];
  let j = u.activeIndex;
  typeof s > "u"
    ? (s = u.getSlideIndex(
        m.filter((B) => B.classList.contains(C.slideActiveClass))[0]
      ))
    : (j = s);
  const I = r === "next" || !r,
    z = r === "prev" || !r;
  let M = 0,
    R = 0;
  const A = x ? Math.ceil(m.length / C.grid.rows) : m.length,
    D = (x ? m[s].column : s) + (b && typeof i > "u" ? -E / 2 + 0.5 : 0);
  if (D < h) {
    M = Math.max(h - D, P);
    for (let B = 0; B < h - D; B += 1) {
      const G = B - Math.floor(B / A) * A;
      if (x) {
        const K = A - G - 1;
        for (let Z = m.length - 1; Z >= 0; Z -= 1)
          m[Z].column === K && y.push(Z);
      } else y.push(A - G - 1);
    }
  } else if (D + E > A - h) {
    R = Math.max(D - (A - h * 2), P);
    for (let B = 0; B < R; B += 1) {
      const G = B - Math.floor(B / A) * A;
      x
        ? m.forEach((K, Z) => {
            K.column === G && k.push(Z);
          })
        : k.push(G);
    }
  }
  if (
    ((u.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      u.__preventObserver__ = !1;
    }),
    z &&
      y.forEach((B) => {
        (m[B].swiperLoopMoveDOM = !0),
          w.prepend(m[B]),
          (m[B].swiperLoopMoveDOM = !1);
      }),
    I &&
      k.forEach((B) => {
        (m[B].swiperLoopMoveDOM = !0),
          w.append(m[B]),
          (m[B].swiperLoopMoveDOM = !1);
      }),
    u.recalcSlides(),
    C.slidesPerView === "auto"
      ? u.updateSlides()
      : x &&
        ((y.length > 0 && z) || (k.length > 0 && I)) &&
        u.slides.forEach((B, G) => {
          u.grid.updateSlide(G, B, u.slides);
        }),
    C.watchSlidesProgress && u.updateSlidesOffset(),
    n)
  ) {
    if (y.length > 0 && z) {
      if (typeof t > "u") {
        const B = u.slidesGrid[j],
          K = u.slidesGrid[j + M] - B;
        l
          ? u.setTranslate(u.translate - K)
          : (u.slideTo(j + Math.ceil(M), 0, !1, !0),
            i &&
              ((u.touchEventsData.startTranslate =
                u.touchEventsData.startTranslate - K),
              (u.touchEventsData.currentTranslate =
                u.touchEventsData.currentTranslate - K)));
      } else if (i) {
        const B = x ? y.length / C.grid.rows : y.length;
        u.slideTo(u.activeIndex + B, 0, !1, !0),
          (u.touchEventsData.currentTranslate = u.translate);
      }
    } else if (k.length > 0 && I)
      if (typeof t > "u") {
        const B = u.slidesGrid[j],
          K = u.slidesGrid[j - R] - B;
        l
          ? u.setTranslate(u.translate - K)
          : (u.slideTo(j - R, 0, !1, !0),
            i &&
              ((u.touchEventsData.startTranslate =
                u.touchEventsData.startTranslate - K),
              (u.touchEventsData.currentTranslate =
                u.touchEventsData.currentTranslate - K)));
      } else {
        const B = x ? k.length / C.grid.rows : k.length;
        u.slideTo(u.activeIndex - B, 0, !1, !0);
      }
  }
  if (
    ((u.allowSlidePrev = v),
    (u.allowSlideNext = g),
    u.controller && u.controller.control && !a)
  ) {
    const B = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: s,
      byController: !0,
    };
    Array.isArray(u.controller.control)
      ? u.controller.control.forEach((G) => {
          !G.destroyed &&
            G.params.loop &&
            G.loopFix({
              ...B,
              slideTo: G.params.slidesPerView === C.slidesPerView ? n : !1,
            });
        })
      : u.controller.control instanceof u.constructor &&
        u.controller.control.params.loop &&
        u.controller.control.loopFix({
          ...B,
          slideTo:
            u.controller.control.params.slidesPerView === C.slidesPerView
              ? n
              : !1,
        });
  }
  u.emit("loopFix");
}
function r3() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const s =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[s] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var i3 = { loopCreate: t3, loopFix: n3, loopDestroy: r3 };
function s3(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function a3() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var o3 = { setGrabCursor: s3, unsetGrabCursor: a3 };
function l3(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === Rr() || r === st()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function G0(e, t, n) {
  const r = st(),
    { params: i } = e,
    s = i.edgeSwipeDetection,
    a = i.edgeSwipeThreshold;
  return s && (n <= a || n >= r.innerWidth - a)
    ? s === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function u3(e) {
  const t = this,
    n = Rr();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    G0(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: s, touches: a, enabled: l } = t;
  if (
    !l ||
    (!s.simulateTouch && r.pointerType === "mouse") ||
    (t.animating && s.preventInteractionOnTransition)
  )
    return;
  !t.animating && s.cssMode && s.loop && t.loopFix();
  let u = r.target;
  if (
    (s.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(u)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const m = !!s.noSwipingClass && s.noSwipingClass !== "",
    v = r.composedPath ? r.composedPath() : r.path;
  m && r.target && r.target.shadowRoot && v && (u = v[0]);
  const g = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    w = !!(r.target && r.target.shadowRoot);
  if (s.noSwiping && (w ? l3(g, u) : u.closest(g))) {
    t.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !u.closest(s.swipeHandler)) return;
  (a.currentX = r.pageX), (a.currentY = r.pageY);
  const C = a.currentX,
    b = a.currentY;
  if (!G0(t, r, C)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (a.startX = C),
    (a.startY = b),
    (i.touchStartTime = oa()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    s.threshold > 0 && (i.allowThresholdMove = !1);
  let E = !0;
  u.matches(i.focusableElements) &&
    ((E = !1), u.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== u &&
      n.activeElement.blur();
  const P = E && t.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || P) &&
    !u.isContentEditable &&
    r.preventDefault(),
    s.freeMode &&
      s.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !s.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", r);
}
function c3(e) {
  const t = Rr(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: s, rtlTranslate: a, enabled: l } = n;
  if (!l || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let u = e;
  if (
    (u.originalEvent && (u = u.originalEvent),
    u.type === "pointermove" &&
      (r.touchId !== null || u.pointerId !== r.pointerId))
  )
    return;
  let m;
  if (u.type === "touchmove") {
    if (
      ((m = [...u.changedTouches].filter((I) => I.identifier === r.touchId)[0]),
      !m || m.identifier !== r.touchId)
    )
      return;
  } else m = u;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", u);
    return;
  }
  const v = m.pageX,
    g = m.pageY;
  if (u.preventedByNestedSwiper) {
    (s.startX = v), (s.startY = g);
    return;
  }
  if (!n.allowTouchMove) {
    u.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(s, { startX: v, startY: g, currentX: v, currentY: g }),
        (r.touchStartTime = oa()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (g < s.startY && n.translate <= n.maxTranslate()) ||
        (g > s.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (v < s.startX && n.translate <= n.maxTranslate()) ||
      (v > s.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    u.target === t.activeElement &&
    u.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit("touchMove", u),
    (s.previousX = s.currentX),
    (s.previousY = s.currentY),
    (s.currentX = v),
    (s.currentY = g);
  const w = s.currentX - s.startX,
    C = s.currentY - s.startY;
  if (n.params.threshold && Math.sqrt(w ** 2 + C ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let I;
    (n.isHorizontal() && s.currentY === s.startY) ||
    (n.isVertical() && s.currentX === s.startX)
      ? (r.isScrolling = !1)
      : w * w + C * C >= 25 &&
        ((I = (Math.atan2(Math.abs(C), Math.abs(w)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? I > i.touchAngle
          : 90 - I > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", u),
    typeof r.startMoving > "u" &&
      (s.currentX !== s.startX || s.currentY !== s.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (u.type === "touchmove" && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && u.cancelable && u.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && u.stopPropagation();
  let b = n.isHorizontal() ? w : C,
    E = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  i.oneWayMovement &&
    ((b = Math.abs(b) * (a ? 1 : -1)), (E = Math.abs(E) * (a ? 1 : -1))),
    (s.diff = b),
    (b *= i.touchRatio),
    a && ((b = -b), (E = -E));
  const P = n.touchesDirection;
  (n.swipeDirection = b > 0 ? "prev" : "next"),
    (n.touchesDirection = E > 0 ? "prev" : "next");
  const h = n.params.loop && !i.cssMode,
    x =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (h && x && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const I = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      n.wrapperEl.dispatchEvent(I);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", u);
  }
  let y;
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      P !== n.touchesDirection &&
      h &&
      x &&
      Math.abs(b) >= 1)
  ) {
    Object.assign(s, {
      startX: v,
      startY: g,
      currentX: v,
      currentY: g,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit("sliderMove", u),
    (r.isMoved = !0),
    (r.currentTranslate = b + r.startTranslate);
  let k = !0,
    j = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (j = 0),
    b > 0
      ? (h &&
          x &&
          !y &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((k = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + b) ** j)))
      : b < 0 &&
        (h &&
          x &&
          !y &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((k = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - b) ** j))),
    k && (u.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(b) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (r.currentTranslate = r.startTranslate),
          (s.diff = n.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function d3(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((i = [...r.changedTouches].filter((j) => j.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: a,
    touches: l,
    rtlTranslate: u,
    slidesGrid: m,
    enabled: v,
  } = t;
  if (!v || (!a.simulateTouch && r.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && a.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  a.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const g = oa(),
    w = g - n.touchStartTime;
  if (t.allowClick) {
    const j = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((j && j[0]) || r.target, j),
      t.emit("tap click", r),
      w < 300 &&
        g - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", r);
  }
  if (
    ((n.lastClickTime = oa()),
    $l(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (l.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let C;
  if (
    (a.followFinger
      ? (C = u ? t.translate : -t.translate)
      : (C = -n.currentTranslate),
    a.cssMode)
  )
    return;
  if (a.freeMode && a.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: C });
    return;
  }
  const b = C >= -t.maxTranslate() && !t.params.loop;
  let E = 0,
    P = t.slidesSizesGrid[0];
  for (
    let j = 0;
    j < m.length;
    j += j < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
  ) {
    const I = j < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    typeof m[j + I] < "u"
      ? (b || (C >= m[j] && C < m[j + I])) && ((E = j), (P = m[j + I] - m[j]))
      : (b || C >= m[j]) && ((E = j), (P = m[m.length - 1] - m[m.length - 2]));
  }
  let h = null,
    x = null;
  a.rewind &&
    (t.isBeginning
      ? (x =
          a.virtual && a.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (h = 0));
  const y = (C - m[E]) / P,
    k = E < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
  if (w > a.longSwipesMs) {
    if (!a.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (y >= a.longSwipesRatio
        ? t.slideTo(a.rewind && t.isEnd ? h : E + k)
        : t.slideTo(E)),
      t.swipeDirection === "prev" &&
        (y > 1 - a.longSwipesRatio
          ? t.slideTo(E + k)
          : x !== null && y < 0 && Math.abs(y) > a.longSwipesRatio
          ? t.slideTo(x)
          : t.slideTo(E));
  } else {
    if (!a.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(E + k)
        : t.slideTo(E)
      : (t.swipeDirection === "next" && t.slideTo(h !== null ? h : E + k),
        t.swipeDirection === "prev" && t.slideTo(x !== null ? x : E));
  }
}
function W0() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e,
    a = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const l = a && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !l
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !a
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
}
function f3(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function p3() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const s = e.maxTranslate() - e.minTranslate();
  s === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / s),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function m3(e) {
  const t = this;
  Ms(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function h3() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const U2 = (e, t) => {
  const n = Rr(),
    { params: r, el: i, wrapperEl: s, device: a } = e,
    l = !!r.nested,
    u = t === "on" ? "addEventListener" : "removeEventListener",
    m = t;
  !i ||
    typeof i == "string" ||
    (n[u]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: l }),
    i[u]("touchstart", e.onTouchStart, { passive: !1 }),
    i[u]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[u]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
    n[u]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
    n[u]("touchend", e.onTouchEnd, { passive: !0 }),
    n[u]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[u]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[u]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[u]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[u]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[u]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[u]("click", e.onClick, !0),
    r.cssMode && s[u]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[m](
          a.ios || a.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          W0,
          !0
        )
      : e[m]("observerUpdate", W0, !0),
    i[u]("load", e.onLoad, { capture: !0 }));
};
function g3() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = u3.bind(e)),
    (e.onTouchMove = c3.bind(e)),
    (e.onTouchEnd = d3.bind(e)),
    (e.onDocumentTouchStart = h3.bind(e)),
    t.cssMode && (e.onScroll = p3.bind(e)),
    (e.onClick = f3.bind(e)),
    (e.onLoad = m3.bind(e)),
    U2(e, "on");
}
function v3() {
  U2(this, "off");
}
var x3 = { attachEvents: g3, detachEvents: v3 };
const $0 = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function w3() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    s = r.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const a = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
  if (!a || e.currentBreakpoint === a) return;
  const u = (a in s ? s[a] : void 0) || e.originalParams,
    m = $0(e, r),
    v = $0(e, u),
    g = e.params.grabCursor,
    w = u.grabCursor,
    C = r.enabled;
  m && !v
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !m &&
      v &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((u.grid.fill && u.grid.fill === "column") ||
        (!u.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    g && !w ? e.unsetGrabCursor() : !g && w && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((y) => {
      if (typeof u[y] > "u") return;
      const k = r[y] && r[y].enabled,
        j = u[y] && u[y].enabled;
      k && !j && e[y].disable(), !k && j && e[y].enable();
    });
  const b = u.direction && u.direction !== r.direction,
    E = r.loop && (u.slidesPerView !== r.slidesPerView || b),
    P = r.loop;
  b && n && e.changeDirection(), Je(e.params, u);
  const h = e.params.enabled,
    x = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    C && !h ? e.disable() : !C && h && e.enable(),
    (e.currentBreakpoint = a),
    e.emit("_beforeBreakpoint", u),
    n &&
      (E
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !P && x
        ? (e.loopCreate(t), e.updateSlides())
        : P && !x && e.loopDestroy()),
    e.emit("breakpoint", u);
}
function y3(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = st(),
    s = t === "window" ? i.innerHeight : n.clientHeight,
    a = Object.keys(e).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const u = parseFloat(l.substr(1));
        return { value: s * u, point: l };
      }
      return { value: l, point: l };
    });
  a.sort((l, u) => parseInt(l.value, 10) - parseInt(u.value, 10));
  for (let l = 0; l < a.length; l += 1) {
    const { point: u, value: m } = a[l];
    t === "window"
      ? i.matchMedia(`(min-width: ${m}px)`).matches && (r = u)
      : m <= n.clientWidth && (r = u);
  }
  return r || "max";
}
var S3 = { setBreakpoint: w3, getBreakpoint: y3 };
function C3(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function b3() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: s } = e,
    a = C3(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: s.android },
        { ios: s.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...a), i.classList.add(...t), e.emitContainerClasses();
}
function E3() {
  const e = this,
    { el: t, classNames: n } = e;
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...n), e.emitContainerClasses());
}
var k3 = { addClasses: b3, removeClasses: E3 };
function j3() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      s = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > s;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var T3 = { checkOverflow: j3 },
  Zl = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function P3(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      s = r[i];
    if (typeof s != "object" || s === null) {
      Je(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in s))
    ) {
      Je(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      Je(t, r);
  };
}
const qo = {
    eventsEmitter: ky,
    update: Ry,
    translate: Hy,
    transition: $y,
    slide: e3,
    loop: i3,
    grabCursor: o3,
    events: x3,
    breakpoints: S3,
    checkOverflow: T3,
    classes: k3,
  },
  Qo = {};
let nc = class It {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = Je({}, n)),
      t && !n.el && (n.el = t);
    const a = Rr();
    if (
      n.el &&
      typeof n.el == "string" &&
      a.querySelectorAll(n.el).length > 1
    ) {
      const v = [];
      return (
        a.querySelectorAll(n.el).forEach((g) => {
          const w = Je({}, n, { el: g });
          v.push(new It(w));
        }),
        v
      );
    }
    const l = this;
    (l.__swiper__ = !0),
      (l.support = F2()),
      (l.device = V2({ userAgent: n.userAgent })),
      (l.browser = Cy()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules);
    const u = {};
    l.modules.forEach((v) => {
      v({
        params: n,
        swiper: l,
        extendParams: P3(n, u),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      });
    });
    const m = Je({}, Zl, u);
    return (
      (l.params = Je({}, m, Qo, n)),
      (l.originalParams = Je({}, l.params)),
      (l.passedParams = Je({}, n)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((v) => {
          l.on(v, l.params.on[v]);
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = Lt(n, `.${r.slideClass}, swiper-slide`),
      s = ca(i[0]);
    return ca(t) - s;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = Lt(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      a = (r.maxTranslate() - i) * t + i;
    r.translateTo(a, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: s,
        slidesGrid: a,
        slidesSizesGrid: l,
        size: u,
        activeIndex: m,
      } = r;
    let v = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let g = s[m] ? Math.ceil(s[m].swiperSlideSize) : 0,
        w;
      for (let C = m + 1; C < s.length; C += 1)
        s[C] &&
          !w &&
          ((g += Math.ceil(s[C].swiperSlideSize)), (v += 1), g > u && (w = !0));
      for (let C = m - 1; C >= 0; C -= 1)
        s[C] &&
          !w &&
          ((g += s[C].swiperSlideSize), (v += 1), g > u && (w = !0));
    } else if (t === "current")
      for (let g = m + 1; g < s.length; g += 1)
        (n ? a[g] + l[g] - a[m] < u : a[g] - a[m] < u) && (v += 1);
    else for (let g = m - 1; g >= 0; g -= 1) a[m] - a[g] < u && (v += 1);
    return v;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
        a.complete && Ms(t, a);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const a = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(a, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let s;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const a = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        s = t.slideTo(a.length - 1, 0, !1, !0);
      } else s = t.slideTo(t.activeIndex, 0, !1, !0);
      s || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((s) => {
          t === "vertical" ? (s.style.width = "") : (s.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let a =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : Lt(r, i())[0];
    return (
      !a &&
        n.params.createElements &&
        ((a = ua("div", n.params.wrapperClass)),
        r.append(a),
        Lt(r, `.${n.params.slideClass}`).forEach((l) => {
          a.append(l);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: a,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : a,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || rn(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || rn(r, "direction") === "rtl"),
        wrongRTL: rn(a, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((s) => {
        s.complete
          ? Ms(n, s)
          : s.addEventListener("load", (a) => {
              Ms(n, a.target);
            });
      }),
      Ql(n),
      (n.initialized = !0),
      Ql(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: s, wrapperEl: a, slides: l } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          s && typeof s != "string" && s.removeAttribute("style"),
          a && a.removeAttribute("style"),
          l &&
            l.length &&
            l.forEach((u) => {
              u.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                u.removeAttribute("style"),
                u.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((u) => {
          r.off(u);
        }),
        t !== !1 &&
          (r.el && typeof r.el != "string" && (r.el.swiper = null), py(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Je(Qo, t);
  }
  static get extendedDefaults() {
    return Qo;
  }
  static get defaults() {
    return Zl;
  }
  static installModule(t) {
    It.prototype.__modules__ || (It.prototype.__modules__ = []);
    const n = It.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => It.installModule(n)), It)
      : (It.installModule(t), It);
  }
};
Object.keys(qo).forEach((e) => {
  Object.keys(qo[e]).forEach((t) => {
    nc.prototype[t] = qo[e][t];
  });
});
nc.use([by, Ey]);
const G2 = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function Fn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function Sr(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Fn(t[r]) && Fn(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : Sr(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function W2(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function $2(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function q2(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function Q2(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function L3(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function N3(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: s,
    prevEl: a,
    scrollbarEl: l,
    paginationEl: u,
  } = e;
  const m = i.filter(
      (R) => R !== "children" && R !== "direction" && R !== "wrapperClass"
    ),
    {
      params: v,
      pagination: g,
      navigation: w,
      scrollbar: C,
      virtual: b,
      thumbs: E,
    } = t;
  let P, h, x, y, k, j, I, z;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    v.thumbs &&
    !v.thumbs.swiper &&
    (P = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      v.controller &&
      !v.controller.control &&
      (h = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || u) &&
      (v.pagination || v.pagination === !1) &&
      g &&
      !g.el &&
      (x = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || l) &&
      (v.scrollbar || v.scrollbar === !1) &&
      C &&
      !C.el &&
      (y = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || a) &&
      (r.navigation.nextEl || s) &&
      (v.navigation || v.navigation === !1) &&
      w &&
      !w.prevEl &&
      !w.nextEl &&
      (k = !0);
  const M = (R) => {
    t[R] &&
      (t[R].destroy(),
      R === "navigation"
        ? (t.isElement && (t[R].prevEl.remove(), t[R].nextEl.remove()),
          (v[R].prevEl = void 0),
          (v[R].nextEl = void 0),
          (t[R].prevEl = void 0),
          (t[R].nextEl = void 0))
        : (t.isElement && t[R].el.remove(),
          (v[R].el = void 0),
          (t[R].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (v.loop && !r.loop ? (j = !0) : !v.loop && r.loop ? (I = !0) : (z = !0)),
    m.forEach((R) => {
      if (Fn(v[R]) && Fn(r[R]))
        Object.assign(v[R], r[R]),
          (R === "navigation" || R === "pagination" || R === "scrollbar") &&
            "enabled" in r[R] &&
            !r[R].enabled &&
            M(R);
      else {
        const A = r[R];
        (A === !0 || A === !1) &&
        (R === "navigation" || R === "pagination" || R === "scrollbar")
          ? A === !1 && M(R)
          : (v[R] = r[R]);
      }
    }),
    m.includes("controller") &&
      !h &&
      t.controller &&
      t.controller.control &&
      v.controller &&
      v.controller.control &&
      (t.controller.control = v.controller.control),
    i.includes("children") && n && b && v.virtual.enabled
      ? ((b.slides = n), b.update(!0))
      : i.includes("virtual") &&
        b &&
        v.virtual.enabled &&
        (n && (b.slides = n), b.update(!0)),
    i.includes("children") && n && v.loop && (z = !0),
    P && E.init() && E.update(!0),
    h && (t.controller.control = v.controller.control),
    x &&
      (t.isElement &&
        (!u || typeof u == "string") &&
        ((u = document.createElement("div")),
        u.classList.add("swiper-pagination"),
        u.part.add("pagination"),
        t.el.appendChild(u)),
      u && (v.pagination.el = u),
      g.init(),
      g.render(),
      g.update()),
    y &&
      (t.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-scrollbar"),
        l.part.add("scrollbar"),
        t.el.appendChild(l)),
      l && (v.scrollbar.el = l),
      C.init(),
      C.updateSize(),
      C.setTranslate()),
    k &&
      (t.isElement &&
        ((!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-next"),
          (s.innerHTML = t.hostEl.constructor.nextButtonSvg),
          s.part.add("button-next"),
          t.el.appendChild(s)),
        (!a || typeof a == "string") &&
          ((a = document.createElement("div")),
          a.classList.add("swiper-button-prev"),
          (a.innerHTML = t.hostEl.constructor.prevButtonSvg),
          a.part.add("button-prev"),
          t.el.appendChild(a))),
      s && (v.navigation.nextEl = s),
      a && (v.navigation.prevEl = a),
      w.init(),
      w.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (j || z) && t.loopDestroy(),
    (I || z) && t.loopCreate(),
    t.update();
}
function A3(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  Sr(n, Zl), (n._emitClasses = !0), (n.init = !1);
  const s = {},
    a = G2.map((u) => u.replace(/_/, "")),
    l = Object.assign({}, e);
  return (
    Object.keys(l).forEach((u) => {
      typeof e[u] > "u" ||
        (a.indexOf(u) >= 0
          ? Fn(e[u])
            ? ((n[u] = {}), (i[u] = {}), Sr(n[u], e[u]), Sr(i[u], e[u]))
            : ((n[u] = e[u]), (i[u] = e[u]))
          : u.search(/on[A-Z]/) === 0 && typeof e[u] == "function"
          ? t
            ? (r[`${u[2].toLowerCase()}${u.substr(3)}`] = e[u])
            : (n.on[`${u[2].toLowerCase()}${u.substr(3)}`] = e[u])
          : (s[u] = e[u]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((u) => {
      n[u] === !0 && (n[u] = {}), n[u] === !1 && delete n[u];
    }),
    { params: n, passedParams: i, rest: s, events: r }
  );
}
function M3(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: s,
    scrollbarEl: a,
    swiper: l,
  } = e;
  W2(t) &&
    r &&
    i &&
    ((l.params.navigation.nextEl = r),
    (l.originalParams.navigation.nextEl = r),
    (l.params.navigation.prevEl = i),
    (l.originalParams.navigation.prevEl = i)),
    $2(t) &&
      s &&
      ((l.params.pagination.el = s), (l.originalParams.pagination.el = s)),
    q2(t) &&
      a &&
      ((l.params.scrollbar.el = a), (l.originalParams.scrollbar.el = a)),
    l.init(n);
}
function I3(e, t, n, r, i) {
  const s = [];
  if (!t) return s;
  const a = (u) => {
    s.indexOf(u) < 0 && s.push(u);
  };
  if (n && r) {
    const u = r.map(i),
      m = n.map(i);
    u.join("") !== m.join("") && a("children"),
      r.length !== n.length && a("children");
  }
  return (
    G2.filter((u) => u[0] === "_")
      .map((u) => u.replace(/_/, ""))
      .forEach((u) => {
        if (u in e && u in t)
          if (Fn(e[u]) && Fn(t[u])) {
            const m = Object.keys(e[u]),
              v = Object.keys(t[u]);
            m.length !== v.length
              ? a(u)
              : (m.forEach((g) => {
                  e[u][g] !== t[u][g] && a(u);
                }),
                v.forEach((g) => {
                  e[u][g] !== t[u][g] && a(u);
                }));
          } else e[u] !== t[u] && a(u);
      }),
    s
  );
}
const O3 = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function da() {
  return (
    (da = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    da.apply(this, arguments)
  );
}
function Z2(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function X2(e) {
  const t = [];
  return (
    ge.Children.toArray(e).forEach((n) => {
      Z2(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          X2(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function _3(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    ge.Children.toArray(e).forEach((r) => {
      if (Z2(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = X2(r.props.children);
        i.length > 0 ? i.forEach((s) => t.push(s)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function R3(e, t, n) {
  if (!n) return null;
  const r = (v) => {
      let g = v;
      return (
        v < 0 ? (g = t.length + v) : g >= t.length && (g = g - t.length), g
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: s, to: a } = n,
    l = e.params.loop ? -t.length : 0,
    u = e.params.loop ? t.length * 2 : t.length,
    m = [];
  for (let v = l; v < u; v += 1) v >= s && v <= a && m.push(t[r(v)]);
  return m.map((v, g) =>
    ge.cloneElement(v, {
      swiper: e,
      style: i,
      key: v.props.virtualIndex || v.key || `slide-${g}`,
    })
  );
}
function hi(e, t) {
  return typeof window > "u" ? T.useEffect(e, t) : T.useLayoutEffect(e, t);
}
const q0 = T.createContext(null),
  z3 = T.createContext(null),
  yn = T.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: s,
        onSwiper: a,
        ...l
      } = e === void 0 ? {} : e,
      u = !1;
    const [m, v] = T.useState("swiper"),
      [g, w] = T.useState(null),
      [C, b] = T.useState(!1),
      E = T.useRef(!1),
      P = T.useRef(null),
      h = T.useRef(null),
      x = T.useRef(null),
      y = T.useRef(null),
      k = T.useRef(null),
      j = T.useRef(null),
      I = T.useRef(null),
      z = T.useRef(null),
      { params: M, passedParams: R, rest: A, events: V } = A3(l),
      { slides: D, slots: B } = _3(s),
      G = () => {
        b(!C);
      };
    Object.assign(M.on, {
      _containerClasses(O, W) {
        v(W);
      },
    });
    const K = () => {
      Object.assign(M.on, V), (u = !0);
      const O = { ...M };
      if (
        (delete O.wrapperClass,
        (h.current = new nc(O)),
        h.current.virtual && h.current.params.virtual.enabled)
      ) {
        h.current.virtual.slides = D;
        const W = {
          cache: !1,
          slides: D,
          renderExternal: w,
          renderExternalUpdate: !1,
        };
        Sr(h.current.params.virtual, W),
          Sr(h.current.originalParams.virtual, W);
      }
    };
    P.current || K(), h.current && h.current.on("_beforeBreakpoint", G);
    const Z = () => {
        u ||
          !V ||
          !h.current ||
          Object.keys(V).forEach((O) => {
            h.current.on(O, V[O]);
          });
      },
      mt = () => {
        !V ||
          !h.current ||
          Object.keys(V).forEach((O) => {
            h.current.off(O, V[O]);
          });
      };
    T.useEffect(() => () => {
      h.current && h.current.off("_beforeBreakpoint", G);
    }),
      T.useEffect(() => {
        !E.current &&
          h.current &&
          (h.current.emitSlidesClasses(), (E.current = !0));
      }),
      hi(() => {
        if ((t && (t.current = P.current), !!P.current))
          return (
            h.current.destroyed && K(),
            M3(
              {
                el: P.current,
                nextEl: k.current,
                prevEl: j.current,
                paginationEl: I.current,
                scrollbarEl: z.current,
                swiper: h.current,
              },
              M
            ),
            a && !h.current.destroyed && a(h.current),
            () => {
              h.current && !h.current.destroyed && h.current.destroy(!0, !1);
            }
          );
      }, []),
      hi(() => {
        Z();
        const O = I3(R, x.current, D, y.current, (W) => W.key);
        return (
          (x.current = R),
          (y.current = D),
          O.length &&
            h.current &&
            !h.current.destroyed &&
            N3({
              swiper: h.current,
              slides: D,
              passedParams: R,
              changedParams: O,
              nextEl: k.current,
              prevEl: j.current,
              scrollbarEl: z.current,
              paginationEl: I.current,
            }),
          () => {
            mt();
          }
        );
      }),
      hi(() => {
        O3(h.current);
      }, [g]);
    function H() {
      return M.virtual
        ? R3(h.current, D, g)
        : D.map((O, W) =>
            ge.cloneElement(O, { swiper: h.current, swiperSlideIndex: W })
          );
    }
    return ge.createElement(
      r,
      da({ ref: P, className: Q2(`${m}${n ? ` ${n}` : ""}`) }, A),
      ge.createElement(
        z3.Provider,
        { value: h.current },
        B["container-start"],
        ge.createElement(
          i,
          { className: L3(M.wrapperClass) },
          B["wrapper-start"],
          H(),
          B["wrapper-end"]
        ),
        W2(M) &&
          ge.createElement(
            ge.Fragment,
            null,
            ge.createElement("div", {
              ref: j,
              className: "swiper-button-prev",
            }),
            ge.createElement("div", { ref: k, className: "swiper-button-next" })
          ),
        q2(M) &&
          ge.createElement("div", { ref: z, className: "swiper-scrollbar" }),
        $2(M) &&
          ge.createElement("div", { ref: I, className: "swiper-pagination" }),
        B["container-end"]
      )
    );
  });
yn.displayName = "Swiper";
const Ut = T.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: s,
    zoom: a,
    lazy: l,
    virtualIndex: u,
    swiperSlideIndex: m,
    ...v
  } = e === void 0 ? {} : e;
  const g = T.useRef(null),
    [w, C] = T.useState("swiper-slide"),
    [b, E] = T.useState(!1);
  function P(k, j, I) {
    j === g.current && C(I);
  }
  hi(() => {
    if (
      (typeof m < "u" && (g.current.swiperSlideIndex = m),
      t && (t.current = g.current),
      !(!g.current || !s))
    ) {
      if (s.destroyed) {
        w !== "swiper-slide" && C("swiper-slide");
        return;
      }
      return (
        s.on("_slideClass", P),
        () => {
          s && s.off("_slideClass", P);
        }
      );
    }
  }),
    hi(() => {
      s && g.current && !s.destroyed && C(s.getSlideClasses(g.current));
    }, [s]);
  const h = {
      isActive: w.indexOf("swiper-slide-active") >= 0,
      isVisible: w.indexOf("swiper-slide-visible") >= 0,
      isPrev: w.indexOf("swiper-slide-prev") >= 0,
      isNext: w.indexOf("swiper-slide-next") >= 0,
    },
    x = () => (typeof r == "function" ? r(h) : r),
    y = () => {
      E(!0);
    };
  return ge.createElement(
    n,
    da(
      {
        ref: g,
        className: Q2(`${w}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": u,
        onLoad: y,
      },
      v
    ),
    a &&
      ge.createElement(
        q0.Provider,
        { value: h },
        ge.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof a == "number" ? a : void 0,
          },
          x(),
          l &&
            !b &&
            ge.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !a &&
      ge.createElement(
        q0.Provider,
        { value: h },
        x(),
        l &&
          !b &&
          ge.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
Ut.displayName = "SwiperSlide";
const rc =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNDQzLjYsMzg3LjFMMzEyLjQsMjU1LjRsMTMxLjUtMTMwYzUuNC01LjQsNS40LTE0LjIsMC0xOS42bC0zNy40LTM3LjZjLTIuNi0yLjYtNi4xLTQtOS44LTRjLTMuNywwLTcuMiwxLjUtOS44LDQgIEwyNTYsMTk3LjhMMTI0LjksNjguM2MtMi42LTIuNi02LjEtNC05LjgtNGMtMy43LDAtNy4yLDEuNS05LjgsNEw2OCwxMDUuOWMtNS40LDUuNC01LjQsMTQuMiwwLDE5LjZsMTMxLjUsMTMwTDY4LjQsMzg3LjEgIGMtMi42LDIuNi00LjEsNi4xLTQuMSw5LjhjMCwzLjcsMS40LDcuMiw0LjEsOS44bDM3LjQsMzcuNmMyLjcsMi43LDYuMiw0LjEsOS44LDQuMWMzLjUsMCw3LjEtMS4zLDkuOC00LjFMMjU2LDMxMy4xbDEzMC43LDEzMS4xICBjMi43LDIuNyw2LjIsNC4xLDkuOCw0LjFjMy41LDAsNy4xLTEuMyw5LjgtNC4xbDM3LjQtMzcuNmMyLjYtMi42LDQuMS02LjEsNC4xLTkuOEM0NDcuNywzOTMuMiw0NDYuMiwzODkuNyw0NDMuNiwzODcuMXoiLz48L3N2Zz4=",
  D3 = "/assets/video-Bephn_B7.mp4";
function Y2(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let s = Lt(e.el, `.${r[i]}`)[0];
          s || ((s = ua("div", r[i])), (s.className = r[i]), e.el.append(s)),
            (n[i] = s),
            (t[i] = s);
        }
      }),
    n
  );
}
function Wn(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (t.navigation = { nextEl: null, prevEl: null });
  function s(b) {
    let E;
    return b &&
      typeof b == "string" &&
      t.isElement &&
      ((E = t.el.querySelector(b)), E)
      ? E
      : (b &&
          (typeof b == "string" && (E = [...document.querySelectorAll(b)]),
          t.params.uniqueNavElements &&
          typeof b == "string" &&
          E &&
          E.length > 1 &&
          t.el.querySelectorAll(b).length === 1
            ? (E = t.el.querySelector(b))
            : E && E.length === 1 && (E = E[0])),
        b && !E ? b : E);
  }
  function a(b, E) {
    const P = t.params.navigation;
    (b = Ee(b)),
      b.forEach((h) => {
        h &&
          (h.classList[E ? "add" : "remove"](...P.disabledClass.split(" ")),
          h.tagName === "BUTTON" && (h.disabled = E),
          t.params.watchOverflow &&
            t.enabled &&
            h.classList[t.isLocked ? "add" : "remove"](P.lockClass));
      });
  }
  function l() {
    const { nextEl: b, prevEl: E } = t.navigation;
    if (t.params.loop) {
      a(E, !1), a(b, !1);
      return;
    }
    a(E, t.isBeginning && !t.params.rewind), a(b, t.isEnd && !t.params.rewind);
  }
  function u(b) {
    b.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), i("navigationPrev"));
  }
  function m(b) {
    b.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), i("navigationNext"));
  }
  function v() {
    const b = t.params.navigation;
    if (
      ((t.params.navigation = Y2(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(b.nextEl || b.prevEl))
    )
      return;
    let E = s(b.nextEl),
      P = s(b.prevEl);
    Object.assign(t.navigation, { nextEl: E, prevEl: P }),
      (E = Ee(E)),
      (P = Ee(P));
    const h = (x, y) => {
      x && x.addEventListener("click", y === "next" ? m : u),
        !t.enabled && x && x.classList.add(...b.lockClass.split(" "));
    };
    E.forEach((x) => h(x, "next")), P.forEach((x) => h(x, "prev"));
  }
  function g() {
    let { nextEl: b, prevEl: E } = t.navigation;
    (b = Ee(b)), (E = Ee(E));
    const P = (h, x) => {
      h.removeEventListener("click", x === "next" ? m : u),
        h.classList.remove(...t.params.navigation.disabledClass.split(" "));
    };
    b.forEach((h) => P(h, "next")), E.forEach((h) => P(h, "prev"));
  }
  r("init", () => {
    t.params.navigation.enabled === !1 ? C() : (v(), l());
  }),
    r("toEdge fromEdge lock unlock", () => {
      l();
    }),
    r("destroy", () => {
      g();
    }),
    r("enable disable", () => {
      let { nextEl: b, prevEl: E } = t.navigation;
      if (((b = Ee(b)), (E = Ee(E)), t.enabled)) {
        l();
        return;
      }
      [...b, ...E]
        .filter((P) => !!P)
        .forEach((P) => P.classList.add(t.params.navigation.lockClass));
    }),
    r("click", (b, E) => {
      let { nextEl: P, prevEl: h } = t.navigation;
      (P = Ee(P)), (h = Ee(h));
      const x = E.target;
      let y = h.includes(x) || P.includes(x);
      if (t.isElement && !y) {
        const k = E.path || (E.composedPath && E.composedPath());
        k && (y = k.find((j) => P.includes(j) || h.includes(j)));
      }
      if (t.params.navigation.hideOnClick && !y) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === x || t.pagination.el.contains(x))
        )
          return;
        let k;
        P.length
          ? (k = P[0].classList.contains(t.params.navigation.hiddenClass))
          : h.length &&
            (k = h[0].classList.contains(t.params.navigation.hiddenClass)),
          i(k === !0 ? "navigationShow" : "navigationHide"),
          [...P, ...h]
            .filter((j) => !!j)
            .forEach((j) =>
              j.classList.toggle(t.params.navigation.hiddenClass)
            );
      }
    });
  const w = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" ")
      ),
        v(),
        l();
    },
    C = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" ")
      ),
        g();
    };
  Object.assign(t.navigation, {
    enable: w,
    disable: C,
    update: l,
    init: v,
    destroy: g,
  });
}
function ti(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function zr(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = "swiper-pagination";
  n({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (h) => h,
      formatFractionTotal: (h) => h,
      bulletClass: `${s}-bullet`,
      bulletActiveClass: `${s}-bullet-active`,
      modifierClass: `${s}-`,
      currentClass: `${s}-current`,
      totalClass: `${s}-total`,
      hiddenClass: `${s}-hidden`,
      progressbarFillClass: `${s}-progressbar-fill`,
      progressbarOppositeClass: `${s}-progressbar-opposite`,
      clickableClass: `${s}-clickable`,
      lockClass: `${s}-lock`,
      horizontalClass: `${s}-horizontal`,
      verticalClass: `${s}-vertical`,
      paginationDisabledClass: `${s}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] });
  let a,
    l = 0;
  function u() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    );
  }
  function m(h, x) {
    const { bulletActiveClass: y } = t.params.pagination;
    h &&
      ((h = h[`${x === "prev" ? "previous" : "next"}ElementSibling`]),
      h &&
        (h.classList.add(`${y}-${x}`),
        (h = h[`${x === "prev" ? "previous" : "next"}ElementSibling`]),
        h && h.classList.add(`${y}-${x}-${x}`)));
  }
  function v(h) {
    const x = h.target.closest(ti(t.params.pagination.bulletClass));
    if (!x) return;
    h.preventDefault();
    const y = ca(x) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === y) return;
      t.slideToLoop(y);
    } else t.slideTo(y);
  }
  function g() {
    const h = t.rtl,
      x = t.params.pagination;
    if (u()) return;
    let y = t.pagination.el;
    y = Ee(y);
    let k, j;
    const I =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      z = t.params.loop
        ? Math.ceil(I / t.params.slidesPerGroup)
        : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((j = t.previousRealIndex || 0),
          (k =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
        ? ((k = t.snapIndex), (j = t.previousSnapIndex))
        : ((j = t.previousIndex || 0), (k = t.activeIndex || 0)),
      x.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const M = t.pagination.bullets;
      let R, A, V;
      if (
        (x.dynamicBullets &&
          ((a = ql(M[0], t.isHorizontal() ? "width" : "height")),
          y.forEach((D) => {
            D.style[t.isHorizontal() ? "width" : "height"] = `${
              a * (x.dynamicMainBullets + 4)
            }px`;
          }),
          x.dynamicMainBullets > 1 &&
            j !== void 0 &&
            ((l += k - (j || 0)),
            l > x.dynamicMainBullets - 1
              ? (l = x.dynamicMainBullets - 1)
              : l < 0 && (l = 0)),
          (R = Math.max(k - l, 0)),
          (A = R + (Math.min(M.length, x.dynamicMainBullets) - 1)),
          (V = (A + R) / 2)),
        M.forEach((D) => {
          const B = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (G) => `${x.bulletActiveClass}${G}`
            ),
          ]
            .map((G) =>
              typeof G == "string" && G.includes(" ") ? G.split(" ") : G
            )
            .flat();
          D.classList.remove(...B);
        }),
        y.length > 1)
      )
        M.forEach((D) => {
          const B = ca(D);
          B === k
            ? D.classList.add(...x.bulletActiveClass.split(" "))
            : t.isElement && D.setAttribute("part", "bullet"),
            x.dynamicBullets &&
              (B >= R &&
                B <= A &&
                D.classList.add(...`${x.bulletActiveClass}-main`.split(" ")),
              B === R && m(D, "prev"),
              B === A && m(D, "next"));
        });
      else {
        const D = M[k];
        if (
          (D && D.classList.add(...x.bulletActiveClass.split(" ")),
          t.isElement &&
            M.forEach((B, G) => {
              B.setAttribute("part", G === k ? "bullet-active" : "bullet");
            }),
          x.dynamicBullets)
        ) {
          const B = M[R],
            G = M[A];
          for (let K = R; K <= A; K += 1)
            M[K] &&
              M[K].classList.add(...`${x.bulletActiveClass}-main`.split(" "));
          m(B, "prev"), m(G, "next");
        }
      }
      if (x.dynamicBullets) {
        const D = Math.min(M.length, x.dynamicMainBullets + 4),
          B = (a * D - a) / 2 - V * a,
          G = h ? "right" : "left";
        M.forEach((K) => {
          K.style[t.isHorizontal() ? G : "top"] = `${B}px`;
        });
      }
    }
    y.forEach((M, R) => {
      if (
        (x.type === "fraction" &&
          (M.querySelectorAll(ti(x.currentClass)).forEach((A) => {
            A.textContent = x.formatFractionCurrent(k + 1);
          }),
          M.querySelectorAll(ti(x.totalClass)).forEach((A) => {
            A.textContent = x.formatFractionTotal(z);
          })),
        x.type === "progressbar")
      ) {
        let A;
        x.progressbarOpposite
          ? (A = t.isHorizontal() ? "vertical" : "horizontal")
          : (A = t.isHorizontal() ? "horizontal" : "vertical");
        const V = (k + 1) / z;
        let D = 1,
          B = 1;
        A === "horizontal" ? (D = V) : (B = V),
          M.querySelectorAll(ti(x.progressbarFillClass)).forEach((G) => {
            (G.style.transform = `translate3d(0,0,0) scaleX(${D}) scaleY(${B})`),
              (G.style.transitionDuration = `${t.params.speed}ms`);
          });
      }
      x.type === "custom" && x.renderCustom
        ? ((M.innerHTML = x.renderCustom(t, k + 1, z)),
          R === 0 && i("paginationRender", M))
        : (R === 0 && i("paginationRender", M), i("paginationUpdate", M)),
        t.params.watchOverflow &&
          t.enabled &&
          M.classList[t.isLocked ? "add" : "remove"](x.lockClass);
    });
  }
  function w() {
    const h = t.params.pagination;
    if (u()) return;
    const x =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.grid && t.params.grid.rows > 1
        ? t.slides.length / Math.ceil(t.params.grid.rows)
        : t.slides.length;
    let y = t.pagination.el;
    y = Ee(y);
    let k = "";
    if (h.type === "bullets") {
      let j = t.params.loop
        ? Math.ceil(x / t.params.slidesPerGroup)
        : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && j > x && (j = x);
      for (let I = 0; I < j; I += 1)
        h.renderBullet
          ? (k += h.renderBullet.call(t, I, h.bulletClass))
          : (k += `<${h.bulletElement} ${
              t.isElement ? 'part="bullet"' : ""
            } class="${h.bulletClass}"></${h.bulletElement}>`);
    }
    h.type === "fraction" &&
      (h.renderFraction
        ? (k = h.renderFraction.call(t, h.currentClass, h.totalClass))
        : (k = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`)),
      h.type === "progressbar" &&
        (h.renderProgressbar
          ? (k = h.renderProgressbar.call(t, h.progressbarFillClass))
          : (k = `<span class="${h.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      y.forEach((j) => {
        h.type !== "custom" && (j.innerHTML = k || ""),
          h.type === "bullets" &&
            t.pagination.bullets.push(...j.querySelectorAll(ti(h.bulletClass)));
      }),
      h.type !== "custom" && i("paginationRender", y[0]);
  }
  function C() {
    t.params.pagination = Y2(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" }
    );
    const h = t.params.pagination;
    if (!h.el) return;
    let x;
    typeof h.el == "string" && t.isElement && (x = t.el.querySelector(h.el)),
      !x &&
        typeof h.el == "string" &&
        (x = [...document.querySelectorAll(h.el)]),
      x || (x = h.el),
      !(!x || x.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof h.el == "string" &&
          Array.isArray(x) &&
          x.length > 1 &&
          ((x = [...t.el.querySelectorAll(h.el)]),
          x.length > 1 &&
            (x = x.filter((y) => B2(y, ".swiper")[0] === t.el)[0])),
        Array.isArray(x) && x.length === 1 && (x = x[0]),
        Object.assign(t.pagination, { el: x }),
        (x = Ee(x)),
        x.forEach((y) => {
          h.type === "bullets" &&
            h.clickable &&
            y.classList.add(...(h.clickableClass || "").split(" ")),
            y.classList.add(h.modifierClass + h.type),
            y.classList.add(
              t.isHorizontal() ? h.horizontalClass : h.verticalClass
            ),
            h.type === "bullets" &&
              h.dynamicBullets &&
              (y.classList.add(`${h.modifierClass}${h.type}-dynamic`),
              (l = 0),
              h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)),
            h.type === "progressbar" &&
              h.progressbarOpposite &&
              y.classList.add(h.progressbarOppositeClass),
            h.clickable && y.addEventListener("click", v),
            t.enabled || y.classList.add(h.lockClass);
        }));
  }
  function b() {
    const h = t.params.pagination;
    if (u()) return;
    let x = t.pagination.el;
    x &&
      ((x = Ee(x)),
      x.forEach((y) => {
        y.classList.remove(h.hiddenClass),
          y.classList.remove(h.modifierClass + h.type),
          y.classList.remove(
            t.isHorizontal() ? h.horizontalClass : h.verticalClass
          ),
          h.clickable &&
            (y.classList.remove(...(h.clickableClass || "").split(" ")),
            y.removeEventListener("click", v));
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((y) =>
          y.classList.remove(...h.bulletActiveClass.split(" "))
        );
  }
  r("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return;
    const h = t.params.pagination;
    let { el: x } = t.pagination;
    (x = Ee(x)),
      x.forEach((y) => {
        y.classList.remove(h.horizontalClass, h.verticalClass),
          y.classList.add(
            t.isHorizontal() ? h.horizontalClass : h.verticalClass
          );
      });
  }),
    r("init", () => {
      t.params.pagination.enabled === !1 ? P() : (C(), w(), g());
    }),
    r("activeIndexChange", () => {
      typeof t.snapIndex > "u" && g();
    }),
    r("snapIndexChange", () => {
      g();
    }),
    r("snapGridLengthChange", () => {
      w(), g();
    }),
    r("destroy", () => {
      b();
    }),
    r("enable disable", () => {
      let { el: h } = t.pagination;
      h &&
        ((h = Ee(h)),
        h.forEach((x) =>
          x.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass
          )
        ));
    }),
    r("lock unlock", () => {
      g();
    }),
    r("click", (h, x) => {
      const y = x.target,
        k = Ee(t.pagination.el);
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        k &&
        k.length > 0 &&
        !y.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && y === t.navigation.nextEl) ||
            (t.navigation.prevEl && y === t.navigation.prevEl))
        )
          return;
        const j = k[0].classList.contains(t.params.pagination.hiddenClass);
        i(j === !0 ? "paginationShow" : "paginationHide"),
          k.forEach((I) => I.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
  const E = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let { el: h } = t.pagination;
      h &&
        ((h = Ee(h)),
        h.forEach((x) =>
          x.classList.remove(t.params.pagination.paginationDisabledClass)
        )),
        C(),
        w(),
        g();
    },
    P = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let { el: h } = t.pagination;
      h &&
        ((h = Ee(h)),
        h.forEach((x) =>
          x.classList.add(t.params.pagination.paginationDisabledClass)
        )),
        b();
    };
  Object.assign(t.pagination, {
    enable: E,
    disable: P,
    render: w,
    update: g,
    init: C,
    destroy: b,
  });
}
const B3 = () => {
    const [e, t] = T.useState([]),
      n = async () => {
        try {
          let a = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          t(a.data.insta);
        } catch (a) {
          console.log(a.message);
        }
      };
    T.useEffect(() => {
      n();
    }, []);
    const r = T.useRef(null);
    T.useEffect(() => {
      r.current.addEventListener("click", function () {
        document.querySelectorAll("div.inside_insta").forEach((l) => {
          l.classList.remove("closeinsta"), l.classList.add("active1");
        });
      });
    }, []);
    const i = T.useRef(null);
    T.useEffect(() => {
      i.current.addEventListener("click", function () {
        document.querySelectorAll("div.inside_insta").forEach((l) => {
          l.classList.remove("active1"), l.classList.add("closeinsta");
        });
      });
    }, []);
    const s = T.useRef(null);
    return (
      T.useEffect(() => {
        s.current.addEventListener("click", function () {
          document.querySelectorAll("div.inside_insta").forEach((l) => {
            l.classList.remove("closeinsta"), l.classList.add("active1");
          });
        });
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsxs("div", {
          className:
            "w-[100%]   pr-[100px] pl-[100px] pt-[10px] pb[10px] max-lg:pl-[40px] max-lg:pr-[40px] max-md:pr-[40px] max-md:pl-[40px] max-sm:pr-[10px] max-sm:pl-[10px] relative",
          children: [
            d.jsx("div", {
              className: "slider",
              children: d.jsxs(yn, {
                slidesPerView: 1,
                navigation: !0,
                modules: [Wn],
                className: "mySwiper55",
                centeredSlides: !1,
                children: [
                  d.jsx(Ut, {
                    ref: r,
                    children:
                      e == null
                        ? void 0
                        : e.map((a) =>
                            d.jsx(d.Fragment, {
                              children: d.jsx(
                                "div",
                                {
                                  className: "insta",
                                  children: d.jsx("img", {
                                    src: a.image,
                                    alt: "",
                                  }),
                                },
                                a.id
                              ),
                            })
                          ),
                  }),
                  d.jsx(Ut, {
                    ref: s,
                    children:
                      e == null
                        ? void 0
                        : e.map((a) =>
                            d.jsx(d.Fragment, {
                              children: d.jsx(
                                "div",
                                {
                                  className: "insta",
                                  children: d.jsx("img", {
                                    src: a.image,
                                    alt: "",
                                  }),
                                },
                                a.id
                              ),
                            })
                          ),
                  }),
                ],
              }),
            }),
            d.jsxs("div", {
              className: "inside_insta",
              children: [
                d.jsx("div", {
                  className: "close_insta",
                  ref: i,
                  children: d.jsx("img", {
                    className: "w-[20px]",
                    src: rc,
                    alt: "",
                  }),
                }),
                d.jsx("div", {
                  className: "video",
                  children: d.jsx("video", {
                    src: D3,
                    controls: !0,
                    width: "100%",
                  }),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  F3 = () => {
    const [e, t] = T.useState([]),
      n = async () => {
        try {
          let r = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          t(r.data.main_slider);
        } catch (r) {
          console.log(r.message);
        }
      };
    return (
      T.useEffect(() => {
        n();
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsx("div", {
          className: "w-[100%] bg-[red] ",
          children: d.jsx(yn, {
            pagination: !0,
            navigation: !0,
            modules: [zr, Wn],
            className: "mySwiper5",
            children:
              e == null
                ? void 0
                : e.map((r, i) => {
                    if (i < 8)
                      return d.jsx(d.Fragment, {
                        children: d.jsx(
                          Ut,
                          { children: d.jsx("img", { src: r.image, alt: "" }) },
                          r.id
                        ),
                      });
                  }),
          }),
        }),
      })
    );
  },
  K2 =
    "data:image/svg+xml,%3csvg%20width='36'%20height='36'%20id='e302pyQgejw1'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20shape-rendering='geometricPrecision'%20text-rendering='geometricPrecision'%3e%3cpath%20class='styles_Loading__circle1__K7HNJ'%20d='M0,3C0,1.343146,1.343146,0,3,0C4.656854,0,6,1.343146,6,3C6,4.656854,4.656854,6,3,6C1.343146,6,0,4.656854,0,3Z'%20transform='matrix(1%200%200%201%2017%209)'%20opacity='0.9'%20fill='%2381858b'%20stroke='none'%20stroke-width='1'%3e%3c/path%3e%3crect%20class='styles_Loading__circle2__jpl_q'%20width='6'%20height='6'%20rx='3'%20ry='3'%20transform='matrix(1%200%200%201%209%209)'%20opacity='0.6'%20fill='%2381858b'%20stroke='none'%20stroke-width='1'%3e%3c/rect%3e%3crect%20class='styles_Loading__circle3__otcH4'%20width='6'%20height='6'%20rx='3'%20ry='3'%20transform='matrix(1%200%200%201%200.94007500000000%209)'%20opacity='0.3'%20fill='%2381858b'%20stroke='none'%20stroke-width='1'%3e%3c/rect%3e%3c/svg%3e",
  V3 = () => {
    const [e, t] = T.useState([]),
      [n, r] = T.useState([]),
      i = async () => {
        try {
          let l = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          t(l.data.more);
          let u = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          r(u.data.more2);
        } catch (l) {
          console.log(l.message);
        }
      };
    T.useEffect(() => {
      i();
    }, []);
    let s = T.useRef(null);
    T.useEffect(() => {
      s.current.addEventListener("click", function () {
        document.querySelector(".more_inside").classList.add("activemore");
      });
    }, []);
    let a = T.useRef(null);
    return (
      T.useEffect(() => {
        a.current.addEventListener("click", function () {
          document.querySelector(".more_inside").classList.remove("activemore");
        });
      }, []),
      d.jsxs(d.Fragment, {
        children: [
          d.jsxs("div", {
            className:
              "w-[100%]   flex flex-row gap-x-[30px] justify-start items-center pr-[100px] pl-[100px] pt-[40px] pb-[40px] max-lg:pr-[40px] max-lg:pl-[40px] max-lg:pb-[20px] max-lg:pt-[20px] max-md:pr-[20px] max-md:pl-[20px] max-md:pb-[10px] max-md:pt-[10px] max-sm:pt-[5px] max-sm:pb-[5px] max-sm:pl-[5px] max-sm:pr-[5px] max-sm:gap-x-[5px]",
            children: [
              e == null
                ? void 0
                : e.map((l) =>
                    d.jsx(d.Fragment, {
                      children: d.jsxs(
                        "div",
                        {
                          className:
                            "w-[10%] h-[100%]  flex flex-col gap-y-[10px] justify-center items-center insidemore12 max-sm:w-[30%]",
                          children: [
                            d.jsx("img", {
                              className: "w-[50px] h-[50px]",
                              src: l.image,
                              alt: "",
                            }),
                            d.jsx("p", {
                              className:
                                "text-[12px] font-[yekanm] text-center font-normal w-[50%] max-lg:text-[10px] max-lg:w-[100%] max-md:text-[10px] max-md:w-[100%]",
                              children: l.name,
                            }),
                          ],
                        },
                        l.id
                      ),
                    })
                  ),
              d.jsxs("div", {
                className: "more_button",
                ref: s,
                children: [
                  d.jsx("img", {
                    className:
                      "w-[50px] h-[50px] bg-[#F0F0F1] rounded-[100px] p-[15px]",
                    src: K2,
                    alt: "",
                  }),
                  d.jsx("p", {
                    className:
                      "text-[12px] font-[yekanm] text-center font-normal w-[50%]",
                    children: "بیشتر",
                  }),
                ],
              }),
            ],
          }),
          d.jsxs("div", {
            className: "more_inside",
            children: [
              d.jsxs("div", {
                className:
                  "w-[100%] h-[50px] flex flex-row justify-between items-center gap-x-[15px]  rounded-t-[15px] p-[15px] border-solid border-[1px] border-[grey]",
                children: [
                  d.jsx("p", {
                    className: "text-[15px] font-[yekanm]",
                    children: "خدمات دیجی کالا",
                  }),
                  d.jsx("div", {
                    className: "close_mbutton",
                    ref: a,
                    children: d.jsx("img", {
                      className: "w-[20px] h-[20px]",
                      src: rc,
                      alt: "",
                    }),
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "w-[100%] h-[500px] overflow-scroll",
                children: [
                  d.jsx("div", {
                    className:
                      "w-[100%] flex flex-row justify-start items-center gap-x-[50px] gap-y-[20px]  p-[15px] max-sm:gap-x-[14px]  max-sm:gap-y-[14px]  flex-wrap",
                    children:
                      e == null
                        ? void 0
                        : e.map((l) =>
                            d.jsx(d.Fragment, {
                              children: d.jsxs(
                                "div",
                                {
                                  className:
                                    "w-[10%] h-[100%]  flex flex-col gap-y-[10px] justify-center items-center max-md:w-[17%] max-sm:w-[45%] ",
                                  children: [
                                    d.jsx("img", {
                                      className: "w-[50px] h-[50px]",
                                      src: l.image,
                                      alt: "",
                                    }),
                                    d.jsx("p", {
                                      className:
                                        "text-[12px] font-[yekanm] text-center font-normal w-[50%] max-md:w-[100%]",
                                      children: l.name,
                                    }),
                                  ],
                                },
                                l.id
                              ),
                            })
                          ),
                  }),
                  d.jsx("div", {
                    className: "w-[100%]  p-[15px]",
                    children: d.jsx("p", {
                      className: "text-[14px] font-[yekanm] font-bold",
                      children: "سرویس‌های گروه دیجی‌کالا",
                    }),
                  }),
                  d.jsx("div", {
                    className:
                      "w-[100%]   p-[15px] max-sm:flex max-sm:flex-col max-sm:justify-start max-sm:items-center max-sm:gap-y-[10px] grid_inside",
                    children:
                      n == null
                        ? void 0
                        : n.map((l) =>
                            d.jsx(d.Fragment, {
                              children: d.jsxs(
                                "div",
                                {
                                  className:
                                    "w-[100%] h-[100px] border-solid border-[0.4px] border-[grey]  rounded-[15px] p-[15px] flex justify-start items-start flex-row gap-x-[15px] max-md:h-[70px]",
                                  children: [
                                    d.jsx("img", {
                                      className:
                                        "w-[55px] h-[55px] max-md:w-[40px] max-md:h-[40px] max-sm:w-[40px] max-sm:h-[40px]",
                                      src: l.image1,
                                      alt: "",
                                    }),
                                    d.jsxs("div", {
                                      className: "flex flex-col gap-y-[3px]",
                                      children: [
                                        d.jsx("p", {
                                          className:
                                            "text-[16px] font-bold font-[yekanm] max-md:text-[8px]",
                                          children: l.title,
                                        }),
                                        " ",
                                        d.jsx("p", {
                                          className:
                                            "text-[12px] font-normal font-[yekanm] text-[grey] max-md:text-[7px]",
                                          children: l.name,
                                        }),
                                      ],
                                    }),
                                    d.jsx("img", {
                                      className: "mr-[15%] w-[20px] h-[20px]",
                                      src: l.image2,
                                      alt: "",
                                    }),
                                  ],
                                },
                                l.id
                              ),
                            })
                          ),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  H3 = "/assets/Amazings1-Cvpr_zOv.svg",
  U3 =
    "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40.2086%2066.6112C34.1483%2066.6112%2028.286%2065.382%2022.7825%2062.9582C17.4681%2060.6184%2012.7435%2057.282%208.73926%2053.0422L13.1577%2048.8699C20.2611%2056.392%2029.8679%2060.5343%2040.2086%2060.5343C50.5493%2060.5343%2059.8545%2056.5166%2066.9249%2049.2211L71.2893%2053.4504C63.0632%2061.9376%2052.0246%2066.6112%2040.2086%2066.6112Z'%20fill='%23FAFAFA'/%3e%3cpath%20d='M53.1453%2050.1636C49.6664%2050.1636%2046.3841%2048.037%2045.0874%2044.5941C43.4169%2040.1561%2045.6682%2035.1869%2050.1046%2033.5164C54.5426%2031.846%2059.5118%2034.0973%2061.1837%2038.5352C62.8542%2042.9732%2060.6029%2047.9424%2056.1665%2049.6128C55.1714%2049.988%2054.1509%2050.1636%2053.1453%2050.1636ZM52.2463%2039.2016C50.9451%2039.6923%2050.2832%2041.1496%2050.774%2042.4524C51.2648%2043.7551%2052.7221%2044.4155%2054.0248%2043.9247C55.326%2043.4339%2055.9879%2041.9766%2055.4971%2040.6754C55.0063%2039.3727%2053.549%2038.7108%2052.2463%2039.2016Z'%20fill='%23FAFAFA'/%3e%3cpath%20d='M49.4717%2013.3898L25.5627%2048.4129L30.5815%2051.8391L54.4906%2016.816L49.4717%2013.3898Z'%20fill='%23FAFAFA'/%3e%3cpath%20d='M26.9147%2032.271C25.7065%2032.271%2024.5029%2032.0128%2023.3712%2031.501C21.2791%2030.5525%2019.6807%2028.8476%2018.8718%2026.6969C18.0628%2024.5477%2018.1379%2022.2109%2019.0864%2020.1188C20.0349%2018.0266%2021.7398%2016.4282%2023.8905%2015.6193C26.0397%2014.8103%2028.3765%2014.8854%2030.4687%2015.8339C32.5608%2016.7824%2034.1592%2018.4874%2034.9681%2020.638C36.6386%2025.076%2034.3873%2030.0452%2029.9494%2031.7172C28.9633%2032.0879%2027.9383%2032.274%2026.9147%2032.274V32.271ZM26.9207%2021.1423C26.6205%2021.1423%2026.3204%2021.1963%2026.0307%2021.3059C25.4004%2021.543%2024.8991%2022.0128%2024.6214%2022.6266C24.3438%2023.2405%2024.3213%2023.9264%2024.5584%2024.5567C24.7955%2025.187%2025.2653%2025.6883%2025.8791%2025.966C26.493%2026.2436%2027.1788%2026.2661%2027.8092%2026.029C29.1119%2025.5382%2029.7723%2024.0809%2029.2815%2022.7782C29.0444%2022.1479%2028.5746%2021.6466%2027.9608%2021.3689C27.6291%2021.2189%2027.2749%2021.1423%2026.9207%2021.1423Z'%20fill='%23FAFAFA'/%3e%3c/svg%3e",
  G3 =
    "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20height='64px'%20width='64px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20407.436%20407.436'%20xml:space='preserve'%20transform='rotate(180)'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpolygon%20points='112.814,0%2091.566,21.178%20273.512,203.718%2091.566,386.258%20112.814,407.436%20315.869,203.718%20'/%3e%3c/g%3e%3c/svg%3e",
  W3 = () => {
    const [e, t] = T.useState([]),
      n = async () => {
        try {
          let r = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          t(r.data.amazing_slider);
        } catch (r) {
          console.log(r.message);
        }
      };
    return (
      T.useEffect(() => {
        n();
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsx("div", {
          className:
            "w-[100%]  pr-[100px] pl-[100px] pt-[20px] pb-[20px] max-lg:pl-[40px] max-lg:pr-[40px] max-sm:pl-[10px] max-sm:pr-[10px] max-sm:pt-[5px] max-sm:pb-[5px] ",
          children: d.jsxs("div", {
            className:
              "w-[100%]  rounded-[15px] flex flex-row gap-x-[15px] bg-[red] justify-start items-center  pr-0 pl-0",
            children: [
              d.jsxs("div", {
                className:
                  "w-[15%] flex flex-col justify-start items-center gap-y-[40px] bg-[red] p-[10px] rounded-[15px] happy",
                children: [
                  d.jsx("img", { className: "w-[80px]", src: H3, alt: "" }),
                  d.jsx("img", { className: "w-[60px]", src: U3, alt: "" }),
                  d.jsxs("a", {
                    href: "#",
                    className:
                      "flex flex-row justify-start items-center gap-x-[5px]",
                    children: [
                      d.jsx("p", {
                        className:
                          "text-[12px] font-normal font-[yekanm] max-md:text-[7px]",
                        children: "مشاهده همه",
                      }),
                      d.jsx("img", {
                        className:
                          "w-[20px] h-[10px] max-md:w-[10px] max-md:h-[10px]",
                        src: G3,
                        alt: "",
                      }),
                    ],
                  }),
                ],
              }),
              d.jsx("div", {
                className: "amazing_slider",
                children: d.jsx(yn, {
                  slidesPerView: 5,
                  navigation: !0,
                  centeredSlides: !1,
                  modules: [zr, Wn],
                  spaceBetween: 15,
                  className: "mySwiper56",
                  children:
                    e == null
                      ? void 0
                      : e.map((r) =>
                          d.jsx(d.Fragment, {
                            children: d.jsx(
                              Ut,
                              {
                                children: d.jsxs("div", {
                                  className:
                                    "w-[100%]  p-[10px] justify-start items-center flex flex-col gap-y-[30px] border-solid border-[1px]",
                                  children: [
                                    d.jsx("img", {
                                      className: "w-[100px]",
                                      src: r.image,
                                      alt: "",
                                    }),
                                    d.jsx("p", {
                                      className:
                                        "text-[12px] font-normal font-[yekanm] text-[grey] text-right max-md:text-[8px]",
                                      children: r.title,
                                    }),
                                    d.jsxs("div", {
                                      className:
                                        "w-[100%] flex flex-row justify-start items-center gap-x-[18px] max-lg:gap-x-[10px] max-md:gap-x-[5px] ",
                                      children: [
                                        d.jsx("p", {
                                          className:
                                            "w-[43px] bg-[red] font-normal font-[yekanm] text-[15px] p-[8px] rounded-[100px] text-[white] max-lg:w-[25px] max-lg:p-[4px] max-lg:text-[10px] max-md:w-[15px] max-md:p-[2px] max-md:text-[7px]",
                                          children: r.name1,
                                        }),
                                        d.jsx("p", {
                                          className:
                                            "text-[15px] font-[yekanm] font-bold max-lg:text-[12px] max-md:text-[7px] ",
                                          children: r.name2,
                                        }),
                                        d.jsx("p", {
                                          className:
                                            "text-[15px] font-[yekanm] font-normal ml-[15px] max-lg:text-[12px] max-md:text-[7px]",
                                          children: r.name3,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              r.id
                            ),
                          })
                        ),
                }),
              }),
            ],
          }),
        }),
      })
    );
  },
  $3 = "/assets/fresh-CrXKD5_7.png",
  q3 = "/assets/fresh-incredible-offer-Bxj2eQbQ.svg",
  Q3 =
    "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='64px'%20height='64px'%20viewBox='0%20-6.5%2036%2036'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='&%239;%23808080'%20stroke='&%239;%23808080'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3eleft-arrow%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cg%20id='icons'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='ui-gambling-website-lined-icnos-casinoshunter'%20transform='translate(-342.000000,%20-159.000000)'%20fill='&%239;%23808080'%20fill-rule='nonzero'%3e%3cg%20id='square-filled'%20transform='translate(50.000000,%20120.000000)'%3e%3cpath%20d='M317.108012,39.2902857%20L327.649804,49.7417043%20L327.708994,49.7959169%20C327.889141,49.9745543%20327.986143,50.2044182%20328,50.4382227%20L328,50.5617773%20C327.986143,50.7955818%20327.889141,51.0254457%20327.708994,51.2040831%20L327.6571,51.2479803%20L317.108012,61.7097143%20C316.717694,62.0967619%20316.084865,62.0967619%20315.694547,61.7097143%20C315.30423,61.3226668%20315.30423,60.6951387%20315.694547,60.3080911%20L324.702666,51.3738496%20L292.99947,51.3746291%20C292.447478,51.3746291%20292,50.9308997%20292,50.3835318%20C292,49.8361639%20292.447478,49.3924345%20292.99947,49.3924345%20L324.46779,49.3916551%20L315.694547,40.6919089%20C315.30423,40.3048613%20315.30423,39.6773332%20315.694547,39.2902857%20C316.084865,38.9032381%20316.717694,38.9032381%20317.108012,39.2902857%20Z%20M327.115357,50.382693%20L316.401279,61.0089027%20L327.002151,50.5002046%20L327.002252,50.4963719%20L326.943142,50.442585%20L326.882737,50.382693%20L327.115357,50.382693%20Z'%20id='left-arrow'%20transform='translate(310.000000,%2050.500000)%20scale(-1,%201)%20translate(-310.000000,%20-50.500000)%20'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
  Z3 = () => {
    const [e, t] = T.useState([]),
      n = async () => {
        try {
          let r = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          t(r.data.amazing_super);
        } catch (r) {
          console.log(r.message);
        }
      };
    return (
      T.useEffect(() => {
        n();
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsx("div", {
          className:
            " w-[100%] max-xl:pr-[40px] max-xl:pl-[40px] max-sm:pr-[10px] max-sm:pl-[10px]   pr-[100px] pl-[100px] pt-[20px] pb-[25px]",
          children: d.jsxs("div", {
            className:
              " w-[100%] bg-[#ECEEEE]  flex flex-row justify-between items-center p-[20px] rounded-[15px] max-xl:flex max-xl:flex-col max-xl:justify-start max-xl:items-center max-xl:gap-y-[30px] max-sm:p-[10px] ",
            children: [
              d.jsxs("div", {
                className:
                  " w-[40%] flex flex-row gap-x-[15px] justify-start items-center max-xl:w-[100%] max-xl:justify-center ",
                children: [
                  d.jsx("img", {
                    className: "max-sm:hidden",
                    src: $3,
                    alt: "",
                  }),
                  d.jsx("img", { src: q3, alt: "" }),
                  d.jsx("p", {
                    className:
                      "w-[100px] bg-[green] text-center p-[5px] text-[12px] font-normal font-[yekanm] text-[white] rounded-[100px] max-sm:hidden",
                    children: "تا 49% تخفیف",
                  }),
                ],
              }),
              d.jsxs("div", {
                className:
                  " w-[60%] flex flex-row gap-x-[10px] justify-start items-center relative max-xl:w-[100%] max-xl:justify-center amazing max-sm:w-[100%] max-sm:flex-col max-sm:gap-y-[20px]",
                children: [
                  e == null
                    ? void 0
                    : e.map((r) =>
                        d.jsx(d.Fragment, {
                          children: d.jsxs(
                            "div",
                            {
                              className: "amazingprice",
                              children: [
                                d.jsx("img", {
                                  className: "w-[100px] rounded-[100px]",
                                  src: r.image,
                                  alt: "",
                                }),
                                d.jsx("p", {
                                  className:
                                    "w-[50px] rounded-[100px] p-[5px] bg-[red] text-[12px] font-[yekanm] text-[white] font-normal text-center absolute top-[70px] ",
                                  children: r.name,
                                }),
                              ],
                            },
                            r.id
                          ),
                        })
                      ),
                  d.jsxs("a", {
                    className:
                      "flex flex-row gap-x-[8px] justify-start items-center w-[17%] max-sm:w-[50%] max-sm:justify-center bg-[white] rounded-[40px] p-[15px]",
                    href: "#",
                    children: [
                      d.jsx("p", {
                        className:
                          "text-[11px] font-normal font-[yekanm] text-[green]",
                        children: "بیش از 40 کالا",
                      }),
                      d.jsx("img", {
                        className: "w-[20px] h-[20px]",
                        src: Q3,
                        alt: "",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  },
  X3 = () => {
    const [e, t] = T.useState([]),
      n = async () => {
        try {
          let r = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          t(r.data.amazing_box);
        } catch (r) {
          console.log(r.message);
        }
      };
    return (
      T.useEffect(() => {
        n();
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsx("div", {
          className:
            "w-[100%]  pt-[20px] pb-[20px] pr-[100px] pl-[100px] flex flex-row gap-x-[15px] justify-start items-center max-lg:pr-[40px] max-lg:pl-[40px] max-md:pr-[40px] max-md:pl-[40px] max-sm:pr-[10px] max-sm:pl-[10px] max-sm:flex-col max-sm:gap-y-[20px]",
          children:
            e == null
              ? void 0
              : e.map((r) =>
                  d.jsx(d.Fragment, {
                    children: d.jsx(
                      "div",
                      {
                        className: "w-[100%] rounded-[15px]",
                        children: d.jsx("img", {
                          className: "w-[100%] rounded-[15px]",
                          src: r.image,
                          alt: "",
                        }),
                      },
                      r.id
                    ),
                  })
                ),
        }),
      })
    );
  },
  Y3 = () => {
    const [e, t] = T.useState([]),
      n = async () => {
        try {
          let r = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          t(r.data.shopping);
        } catch (r) {
          console.log(r.message);
        }
      };
    return (
      T.useEffect(() => {
        n();
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsxs("div", {
          className:
            "w-[100%]   pr-[100px] pl-[100px] pt-[40px] pb-[40px] flex flex-col gap-y-[40px] justify-start items-center max-sm:pr-[10px] max-sm:pl-[10px]",
          children: [
            d.jsx("p", {
              className: "text-[22px] font-[400] font-[yekanm]",
              children: "خرید بر اساس دسته بندی",
            }),
            d.jsx("div", {
              className: "w-[100%]  inside",
              children:
                e == null
                  ? void 0
                  : e.map((r) =>
                      d.jsx(d.Fragment, {
                        children: d.jsxs(
                          "div",
                          {
                            className:
                              "w-[100%]   flex flex-col justify-start items-center gap-y-[10px]",
                            children: [
                              d.jsx("img", {
                                className: "w-[100px]",
                                src: r.image,
                                alt: "",
                              }),
                              d.jsx("p", {
                                className:
                                  "text-[12px] text-center w-[100px]  font-normal font-[yekanm]",
                                children: r.name,
                              }),
                            ],
                          },
                          r.id
                        ),
                      })
                    ),
            }),
          ],
        }),
      })
    );
  },
  K3 = () => {
    const [e, t] = T.useState([]),
      n = async () => {
        try {
          let r = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          t(r.data.main_slider);
        } catch (r) {
          console.log(r.message);
        }
      };
    return (
      T.useEffect(() => {
        n();
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsx("div", {
          className:
            "w-[100%]   pr-[100px] pl-[100px] pt-[40px] pb-[40px] flex flex-row justify-center items-center gap-x-[20px] max-md:pr-[40px] max-md:pl-[40px] max-sm:pr-[10px] max-sm:pl-[10px] max-sm:flex-col max-sm:justify-start max-sm:gap-y-[20px]",
          children:
            e == null
              ? void 0
              : e.map((r, i) => {
                  if (i > 8)
                    return d.jsx(d.Fragment, {
                      children: d.jsx("div", {
                        className: "w-[100%] rounded-[15px]",
                        children: d.jsx("img", {
                          className: " w-[100%] rounded-[15px]",
                          src: r.image,
                          alt: "",
                        }),
                      }),
                    });
                }),
        }),
      })
    );
  },
  J2 = "/assets/star-shine-svgrepo-com-rMRfcNLv.svg",
  J3 = () => {
    const [e, t] = T.useState([]),
      n = async () => {
        try {
          let r = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          t(r.data.favorite_slider);
        } catch (r) {
          console.log(r.message);
        }
      };
    return (
      T.useEffect(() => {
        n();
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsx("div", {
          className:
            "w-[100%]   pr-[100px] pl-[100px] pt-[40px] pb-[40px] max-md:pr-[40px] max-md:pl-[40px] max-sm:pr-[10px] max-sm:pl-[10px]",
          children: d.jsxs("div", {
            className:
              "w-[100%]   flex flex-col gap-y-[15px] justify-start items-center rounded-[15px] border-solid border-[1px] border-[grey]",
            children: [
              d.jsxs("div", {
                className:
                  "w-[100%]  flex flex-row justify-center items-center gap-x-[10px] p-[30px]",
                children: [
                  d.jsx("img", { className: "w-[30px]", src: J2, alt: "" }),
                  d.jsx("p", {
                    className: "text-[20px] font-[300] font-[yekanm]",
                    children: "محبوب ترین برندها",
                  }),
                ],
              }),
              d.jsx("div", {
                className: "favslider",
                children: d.jsx(yn, {
                  slidesPerView: 10,
                  centeredSlides: !1,
                  navigation: !0,
                  modules: [zr, Wn],
                  className: "mySwiper59",
                  children:
                    e == null
                      ? void 0
                      : e.map((r) =>
                          d.jsx(d.Fragment, {
                            children: d.jsx(
                              Ut,
                              {
                                children: d.jsx("div", {
                                  className:
                                    "p-[15px] border-l-[1px] max-lg:p-[5px] max-md:p-[5px] max-sm:p-[5px] border-[solid] inside_favorite",
                                  children: d.jsx("img", {
                                    className:
                                      "w-[80px] max-lg:w-[100px] max-md:w-[100px] image123",
                                    src: r.image,
                                    alt: "",
                                  }),
                                }),
                              },
                              r.id
                            ),
                          })
                        ),
                }),
              }),
            ],
          }),
        }),
      })
    );
  },
  e5 = () => {
    const [e, t] = T.useState([]),
      [n, r] = T.useState([]),
      i = async () => {
        try {
          let s = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          t(s.data.hygiene);
          let a = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          r(a.data.hygiene_grid);
        } catch (s) {
          console.log(s.message);
        }
      };
    return (
      T.useEffect(() => {
        i();
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsx("div", {
          className:
            "w-[100%]   pr-[100px] pl-[100px] pt-[40px] pb-[40px] max-md:pl-[40px] max-md:pr-[40px] max-lg:pr-[40px] max-lg:pl-[40px] max-sm:pl-[10px] max-sm:pr-[10px] ",
          children: d.jsx("div", {
            className:
              "w-[100%]    flex flex-row justify-start items-center border-[1px] border-[solid] border-[grey] rounded-[15px] max-sm:flex-col max-sm:justify-start max-sm:items-center hello",
            children:
              e == null
                ? void 0
                : e.map((s, a) => {
                    for (let l = a; l < 4; l++)
                      return d.jsx(d.Fragment, {
                        children: d.jsxs(
                          "div",
                          {
                            className:
                              "w-[100%]   p-[20px] rounded-r-[15px] flex flex-col justify-start items-start gap-y-[10px] max-sm:items-center",
                            children: [
                              d.jsx("p", {
                                className:
                                  "text-[15px] font-[300] font-[yekanm]",
                                children: s.title,
                              }),
                              d.jsx("p", {
                                className:
                                  "text-[12px] text-[grey] font-[100] font-[yekanm]",
                                children: s.name1,
                              }),
                              d.jsx("div", {
                                className: "grid_h",
                                children:
                                  n == null
                                    ? void 0
                                    : n.map((u, m) => {
                                        for (let v = m; v < 4; v++)
                                          return d.jsx(d.Fragment, {
                                            children: d.jsx(
                                              "div",
                                              {
                                                className:
                                                  "w-[100%] p-[10px] border-l-[1px] border-solid border-[grey]",
                                                children: d.jsx("img", {
                                                  className: "w-[100px]",
                                                  src: u.image,
                                                  alt: "",
                                                }),
                                              },
                                              u.id
                                            ),
                                          });
                                      }),
                              }),
                              d.jsxs("a", {
                                className:
                                  "w-[100%]  flex flex-row justify-center items-center gap-x-[5px]",
                                href: "#",
                                children: [
                                  d.jsx("p", {
                                    className:
                                      "text-[12px] text-[aqua] font-[100] font-[yekanm]",
                                    children: s.name2,
                                  }),
                                  " ",
                                  d.jsx("img", {
                                    className: "w-[15px] ",
                                    src: s.image,
                                    alt: "",
                                  }),
                                ],
                              }),
                            ],
                          },
                          s.id
                        ),
                      });
                  }),
          }),
        }),
      })
    );
  },
  t5 = "/assets/digiclub-logo-white-DS64bAay.svg",
  n5 =
    "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.5%209C16.5%2013.1425%2013.1425%2016.5%209%2016.5C4.85748%2016.5%201.5%2013.1425%201.5%209C1.5%204.85748%204.85748%201.5%209%201.5C13.1425%201.5%2016.5%204.85748%2016.5%209Z'%20fill='%23FFDF4E'/%3e%3cpath%20d='M6.30327%2016.0007C5.74308%2015.7848%205.21534%2015.5036%204.72939%2015.1664L15.1368%204.68697C15.48%205.17449%2015.7666%205.70476%2015.9871%206.26823L6.30327%2016.0007Z'%20fill='%23FFF077'/%3e%3cpath%20d='M14.0449%203.44998L3.47817%2014.0757C3.08895%2013.6525%202.74777%2013.1844%202.46326%2012.6801L12.635%202.43799C13.1443%202.72068%2013.6172%203.06094%2014.0449%203.44998Z'%20fill='%23FFF077'/%3e%3cpath%20d='M13.2426%2013.2426C10.8991%2015.5862%207.10091%2015.5862%204.75736%2013.2426C2.41381%2010.8991%202.41381%207.10091%204.75736%204.75736C7.10091%202.41381%2010.8991%202.41381%2013.2426%204.75736C15.5862%207.10091%2015.5862%2010.8991%2013.2426%2013.2426Z'%20fill='%23FFCB05'/%3e%3cpath%20d='M4.75736%2013.2427C7.10091%2015.5862%2010.8991%2015.5862%2013.2426%2013.2427C15.5862%2010.8991%2015.5862%207.10094%2013.2426%204.75739L4.75736%2013.2427Z'%20fill='%23FCA400'/%3e%3cpath%20d='M10.1916%2010.1495L9.76402%2010.5701C9.73598%2010.5981%209.72196%2010.6332%209.72897%2010.6752L9.8271%2011.264C9.84112%2011.3622%209.74299%2011.4323%209.65888%2011.3902L9.12617%2011.1098C9.09112%2011.0888%209.04906%2011.0888%209.02103%2011.1098L8.48832%2011.3902C8.4042%2011.4323%208.30607%2011.3622%208.32009%2011.264L8.41822%2010.6752C8.42523%2010.6402%208.41121%2010.5981%208.38318%2010.5701L7.95561%2010.1495C7.88551%2010.0794%207.92757%209.9673%208.01869%209.95328L8.61448%209.86917C8.64953%209.86216%208.68458%209.84113%208.70561%209.80608L8.97196%209.26637C9.01402%209.18225%209.14019%209.18225%209.18224%209.26637L9.4486%209.80608C9.46262%209.84113%209.49766%209.86216%209.53972%209.86917L10.1285%209.95328C10.2196%209.9673%2010.2617%2010.0865%2010.1916%2010.1495ZM12.715%207.80842L12.0701%207.16356C11.965%207.05842%2011.7897%207.06543%2011.6916%207.17758C11.0537%207.91356%2010.1075%208.36917%209.06308%208.36917C8.01869%208.36917%207.08645%207.91356%206.4486%207.1916C6.35047%207.07945%206.17523%207.07244%206.07009%207.17758L5.43224%207.81543C5.33411%207.91356%205.3271%208.06777%205.42523%208.17291C5.89486%208.68459%206.47663%209.09814%207.12149%209.37851V12.007C7.12149%2012.3785%207.4229%2012.6799%207.79439%2012.6799H10.3528C10.7243%2012.6799%2011.0257%2012.3785%2011.0257%2012.007V9.37851C11.6776%209.09814%2012.2523%208.68459%2012.722%208.17291C12.8201%208.06076%2012.8131%207.90655%2012.715%207.80842Z'%20fill='%23FFF077'/%3e%3cpath%20d='M9.0771%207.17758C9.60981%207.17758%2010.0374%206.75001%2010.0374%206.2173C10.0374%205.68459%209.60981%205.25702%209.0771%205.25702C8.54439%205.25702%208.11682%205.6916%208.11682%206.2173C8.10981%206.75001%208.54439%207.17758%209.0771%207.17758Z'%20fill='%23FFF077'/%3e%3c/svg%3e",
  r5 = "/assets/wheelspinner-CA3vhVHi.jpg",
  i5 =
    "data:image/jpeg;base64,UklGRrQOAABXRUJQVlA4WAoAAAAQAAAA9wAAfQAAQUxQSBUAAAABD3DQ/4iIICQg/D8tWyCi/8khWwEAVlA4IHgOAAAQSwCdASr4AH4APhkKhEGhBVoZSwQAYSm7dX3Xon0T8o+0oyb2L8SP2j/1Xy5WV+1/er9lP87zD5g+rD7f+UX+I///1E/1P+A/Ir5cfnf/Qe4F+lv99/Jz+zf//5svXh+139g9gv8n/pf+Z/xPup/5P/a/3T3QegB/Jf7V6T3sf/0P/tewd/HP6X/5PWn/73+N+FT9pf+x/rfc//tP/H1jTzf/bPxE8P/859XfV0ew+774E/438luXP1D+Tf+8/lJ+XOc1/Vf9D9vXlSejveb/nX+W/NL4J8dD636gf8d/pv+u+4j49/9X7ived+Z/5D/tf5L4D/5V/TP9x+aXGNnHxll4m+LcQx2QoHp50E9UkPPjoUPHuPt1ivM80qNMPYgqoX50E9UkPPaX4jz5y/sk2gQGQA1Kb5koDrPbziNKMd1yRZT1SP3Ko2YH/gwMn2Z04LvhC8MC4bRb33N5twVleH8cDbuGi6vQmTdFDBQEqy9M7yQ6SbMLz7oK+zZcAYpma6MWJ3MnbusQx2cbbXY24/ociBxp5UeC1B4/I/boaL1+Kv/jMRHNyHzCMrMfI7qe8k7PZxZL3kQ8aHPY9PtE2xyl7ZdTQmQvHpZB3iN74vjJIAF9/ulLT3Abxsk7h+Mzerhq2nVaibQYmwbgfKEioScLoai0N4vg1ChKoJ0X6XSWEGoH1AJ1UjbSD8Lw8zk2FFf1SIeIzslTjc1+tXOksYMZl/gET3cRK48aAtVnHoRFEYtR+Y46RbR4594zJ6Li1To1u2Wx7yRrPWJnEw0//OfgKJlAiuMzLJfNXl8D3gAA/v+j3hS3j/o60mw0b9DIK+ySwc5ALzNZvXop2phiQwUbRPj4+gpCrhsjHYcsjXsvOpXMcfqsH9H4aKH/kCV7GJJD3nLPVJxBtGmKA9IL4+xN4c/QEelfWGb9b+021/jpRWHDyMV+Il3LeLdCnvlhlLVl/rv+cAR0XPvSgTt5ET4U7xqbH0RL3Z2/CSSrfx08WEgOevhe+xLaVjl+RbA4sIoAADIlu+3vcpYo8K2dtft8CzutL+zat/mL2IIXfxhwizLvGotmtiQMbcZmLsYejhR0bDpbiRHrQH+dxC9M3tD9KnUnNWUwE1bchoB98XtOC3pQNwHU+0TsJBZ/BPuAllCOQWqwhx+a4v8BbSzLVLKexFOGXZXqv/eu2q6Ihe1Is64UnXWzUy8O7TFL0VCHdWGDk4A2og0mgF/OnL592OBJRDyc1kv1D3AO69mRoeijP9ojUTOjFDlb1MgefTkmB82noi2j1KOdMimqzGZI1qKNcBS998u8RjsN339S11P8TVL1yjQJpBNjMOR1PWWsNJP5/6+OEJDTVNGlXadMR+u1e63zsa+bRW9b4eJIxiwMNpCC/8SgXDVOfVirH4gdcNG6iij2fAaQag0q7rD5gtLnBACONfsn3384lFbZ90F2veGoruhzC8vXupzXbddzR0y6BMb0fD0t0Z66CuBprn3OkroK9eGVvtOicBw7tF8zFuaM/DKmeSfjffjzxmtDhg5Jk043P+ZQWdH/cS4OTLgO99P1w/gx8nu41X6V7VLqBzjP+lQ9D29usK/YdeO7KtcQqUaPV+SQVmCB8Mr0lfJ8iKohfm8i4CjRpfwEdUnb1pGMmQ7hPASRhAfEhTu2MXFu5zl5PMv9z8kaM6/2IZMoCv1dQAxA3NP/A+5YQBtbuo1clkFFp9v2/ygUqLZOD9hi11qKvmZu/aBMNAaSg5v4yGRRmkUdyV5XMsgP/yKu8bcCx4o0GJo9H67LUGBZCLgxZZU366jFqHYs4R/wiUUFbBValla/8lbQkDqEWRjU2AODhVqGr5ipVbia8KwDK3B6u2XhGFesHH3Ci3rrAV3goOXgcrpUgDFVuOf3dz123FGLGhlx5UtBHnuk4PTA6Szomut2RzNbci6+638dMdlsLdVyNh2mi3duoQnKuix/5tG1OALyUZXHcvG1Qpq13ILhiIRjNUozKCZeeTyOtgC0A5Mrm5sqo+rMcAWIb0MzjjhbyW9NB81pC0WsPBV/b6ZPb+R96/WP4n9FvzRUUyOD3uwNk7ibZbTLswY17cRb+5K21FljjXIAUoySDYoNdIk+/AXzwuWGWLeEr74mcuHeUehV/NBXyW1eE5rOrikH/rXJl+ZoCYyuHUhYh+wekItQ9yp/MzEeRCra1WNh+VWzvvChxhhhQZPiKVIreggLfCtZEMqBf/Nl/2jlamoGTa/43blWHxXmMt5zcdBb1rvnLy9pGrUPm59oRg16YEKphTy64zoMXfn2cliJK7EezD2jdQ5R2PAk827heTfCD9Xe2vz25bVDT1CJryU7stzHJpq8RmuyQiGhfYypNvJlcid7oXPdyQ/HAxQssumX8MGEyNZWDa5mLtJi6j4VC7Wkk7L9d9o9H26EsALZAZRYTiwsR83/XgYCAj1LS6ZBJ2/Vksxv+6B9xUc8r90o1V697m+gtiky3gvtLOXRF7OWp3VBswpq8MYEDKW0Mrv/B/NmEGXBtBt+l62fQdi5nQY3ZN9/DDM0rxoY1oyG9YiaV8/EX+noJgyQJPBMUBdhoMpUKHdvDNzrEnxueB449f+D5GnRCXXjaoyHQJV60GvrUk1z++dB8sUfz/skaXG2rA7PzidXXMlp+qK3vS8lMmp3d4sKYWCmboYFLN2XPsflat9ULCVcF+u+TdPie+v/J+vE/nZftt3XZiiHSKGwGp+gsp4wCr9i958YC1PGjnd9yzpHVxUN5upJS97DAgGYAVDfxEGGh88ORGuPoSU6CZq7Luz6NT9UDJXuOPNwJkIkKr607RE7FZJoxy1O+Ept43VadJwtvUIM5wjfUjV8U9piybfZ77m9Y1ke+0mSE25XKSDx77DvY2nKPis6LgUi9o0uPsAh4Oze9c7y8hMN0s25UbXWnr/2iUzGya1jiBQrg0hpAssaco/xREKv81HLstFkXddG65Z+CiFWSGmd5e7DjiiXjlrHJPKJlR3Bub771ABgw2/91Fn6Og3SuCoSWbXcFNLPlX/iuhyKVrSm4v17TN4BHNz13ao0XJ/wPoQfyuoaJPrp8k6c715LMSQ7tMcxwz/eUjOMPUPEReb8J3G9v6V6WvFfupf77LfFbY5XIfSeq0UO2dXX52pXA4oOQYD+789PK0Z0ZXklt0tWYAeZsOOuaVVhaZWwUO7tKR7gy1gUWeYHyod1olXpcuidqPrDAWiDfArlruZtoEjedbBYxeW4re2WMTZew8oeFSUzT39dw5CbvvwiOYDyhfFN0pPfcBd00byvL7gYQQAbUuyvySiGHlG4wf8+NZGr5idOR7FHlQyV8R6rueksMMKlrFXFUpkAeOa/1hz4UOS30IsBqJ+CP3LD3G81sB6VKq5mOEDZJ/XA5q9JTpnXf/eZBG2lDLMHVtdsm9xfn3640qlYT+XqC6mev4LgHSF86mlFuNV90PC+QI5g5kr92g8pP9UEnm38o0QPNYzuYz7aMRKuUYa5BXr3igA8cj1LNzKJb2zxTbKX1DoqVipvAWtq2x3//OYpXiKsGL3h2ZrshnAUq/3uYCFNcDGQx4mrIZkv3UnM2ww8Z6zm3jdM8+FY3zEfRsYLtzZEQr2Grb8uQ/bYx4PNigbXR6uCR5/Glb1P3+L8bcCbjJeh1VGJVjMJ/s6zk69kTAS0owdrAU3PRhRsj1rcyKNMjoUO8N+lHbqijA/5Q6KW+QZYz+9mX779dBrR98Zq3d4+7dKJoaP3GyVvttyYkPDzUWQLJmaHZbMlYGdeSmeQm6Ez/xtNAGnK8K6ENC91JcNtZGDaP0P+HRwVhpzFh+unIa8u13y0pmOzFEZ9oHgYg6QeGMsAPct71dVZnvi5Dx3APJFcvnbYwAZ8niDsbtPqAqxwzCzUS5uoFVlPgdkpJ3Ud5vqqKRLQmNrYD0aclJ2+qauKdW0CJZDfwJJN48t24f2rUiU8uHkxYycs/Uqrc+Squj+SUyPSZvDxg/GQS8lDbN2pSeZb2NQC0WOjcD1hKSFwr9NjffxBjhe1GWFuBIj95u5AJ12HdxsJZgB6AAgvuKGYogg/lQuAXkx1b4vA9OHZ4DaMUdByRunI4g6/p8yoVmU8oTq9iemFwbTKDHJn2G+8xRDfLsqo6LnOwTXmDvykEkJQecH40XWDnOPyU+jZfAB8xalaE+78DaucO9Kvt/Vu7Q8dTL3/9ffZdFKK8zE/6OQLAJT8xxHuQXetr0UgnmL+H+OZBtTjY4z3VgqpZDSbC1Ojk0KbEJSyUdJ9e1+XuAfs0stHTtovWE0HlwkIGR7N5SYwRSp47DWGAWlvl+n+mjm+6MMeK+ED4pzsrdAcl13RTb6n/1Z5BWORhVTcvVxmZKVV+wo7+dX+Oike57sD0hRnQl08bYw2DkbOmmkBqROgY8xrzEQIXzHWWFtfACu6I+X1jgaQZCsXnbBIvjhFDxm6WIeYM6a/LauHG4+Lfrb1BQYNy0oe2vjaitbtCrtlCYm40F3NQnzgWuHygrJLfu7/liOmPkJEztQKlWeLkHdFaw0EB8FD+3QSApVfAh1Y1KGR8UpEaLnYD6sph+/wNFzmdEe+Peg9dRXHE8WQv858DxjCDSRAwoQkGy/FApugxTOTh3n0NwOCzoIUT+dhc1KpfHtibNSzW2jgXdhiGHZXMZQvDud7kz6AmjdPVcXv0PTwsI2ny74U/f3OV8G6bafIUtMmxKZVqRLd/1qxMe5DsuH3wr4qgcuvh8n/+DiMDctd+8TdnizYAqEpghtGLcH5KIItEY5zhfAQytMdDPSV5pqPfDk4r+S9xec+Z0UasofBMiWQxUERJbI70zhBpGNKDIKKBE6slPwz/aDKCN0vphMs8AqNByV304i/rOsFcZ4hoJznFpidtxR645ASelarVbTCp3p/GMOJNPViYvQwqHBB/Niv0sAAAA==",
  s5 = "/assets/awards-Cm331mX5.jpg",
  a5 = () =>
    d.jsx(d.Fragment, {
      children: d.jsx("div", {
        className:
          "w-[100%]   pl-[100px] pr-[100px] pt-[20px] pb-[20px] max-lg:pr-[40px] max-lg:pl-[40px] max-md:pr-[40px] max-md:pl-[40px] max-sm:pr-[10px] max-sm:pl-[10px]",
        children: d.jsxs("div", {
          className:
            "w-[100%]  bg-[#007295] rounded-[15px] p-[15px] flex flex-row justify-between items-center gap-x-[15px] max-lg:flex-col max-lg:justify-start max-lg:items-center max-lg:gap-y-[40px]   max-md:flex-col max-md:justify-start max-md:items-center max-md:gap-y-[40px]",
          children: [
            d.jsxs("div", {
              className:
                "w-[40%] flex flex-row  justify-between items-center max-lg:w-[100%] max-lg:justify-center max-lg:gap-x-[40px] max-sm:gap-x-[10px]",
              children: [
                d.jsx("img", { className: "w-[150px]", src: t5, alt: "" }),
                d.jsxs("div", {
                  className:
                    "w-[150px] flex flex-row justify-start items-center gap-x-[7px] ",
                  children: [
                    d.jsx("p", {
                      className:
                        "text-[12px] text-[white] font-normal font-[yekanm]",
                      children: "امتیاز شما",
                    }),
                    d.jsx("p", {
                      className:
                        "text-[18px] text-[white] font-bold font-[yekanm]",
                      children: "11",
                    }),
                    d.jsx("img", { className: "w-[40px]", src: n5, alt: "" }),
                  ],
                }),
              ],
            }),
            d.jsxs("div", {
              className:
                "w-[50%]  flex flex-row justify-end items-center  gap-x-[5px] relative max-lg:w-[100%] max-lg:justify-center max-lg:items-center max-sm:flex-col max-sm:justify-start max-sm:items-center max-sm:gap-y-[20px] ",
              children: [
                d.jsxs("div", {
                  className:
                    "w-[100%] flex flex-row  pr-[20px] bg-white rounded-r-[8px]",
                  children: [
                    d.jsxs("div", {
                      className:
                        "flex flex-row gap-x-[6px] justify-start items-center  w-[100%] ",
                      children: [
                        d.jsx("svg", {
                          className: "w-[22px] h-[22px] fill-[aqua]",
                          children: d.jsx("path", {
                            "fill-rule": "evenodd",
                            d: "M15.9 4.888C15.492 3.22 13.888 2 12 2c-1.894 0-3.504 1.228-3.904 2.906l-.006-.014-.27.136a9 9 0 108.08-.14zm-.174 2.305l.034-.099a7 7 0 11-7.523 0c.11.312.253.617.43.916a6 6 0 106.667 0c.157-.267.289-.54.392-.817zm-1.645 2.39l.137-.137-.136.137h-.001zm0 0a4 4 0 11-4.162.001 9.608 9.608 0 001.544 1.26l.537.341.537-.341a9.612 9.612 0 001.545-1.26zM10 5.723C10 4.792 10.873 4 12 4s2 .792 2 1.722c0 .725-.444 1.533-1.218 2.331a8.16 8.16 0 01-.515.487L12 8.762l-.267-.222a8.16 8.16 0 01-.515-.487C10.444 7.255 10 6.447 10 5.723z",
                            "clip-rule": "evenodd",
                          }),
                        }),
                        d.jsx("p", {
                          className:
                            "text-[8px] text-[black] font-bold font-[yekanm]",
                          children: "چرخ و بخت",
                        }),
                      ],
                    }),
                    d.jsx("img", {
                      className: "w-[168px] h-[60px]",
                      src: r5,
                      alt: "",
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "w-[100%] flex flex-row  pr-[20px] bg-white ",
                  children: [
                    d.jsxs("div", {
                      className:
                        "flex flex-row gap-x-[6px] justify-start items-center  w-[100%] ",
                      children: [
                        d.jsx("svg", {
                          className: "w-[22px] h-[22px] fill-[aqua]",
                          children: d.jsx("path", {
                            "fill-rule": "evenodd",
                            d: "M15.9 4.888C15.492 3.22 13.888 2 12 2c-1.894 0-3.504 1.228-3.904 2.906l-.006-.014-.27.136a9 9 0 108.08-.14zm-.174 2.305l.034-.099a7 7 0 11-7.523 0c.11.312.253.617.43.916a6 6 0 106.667 0c.157-.267.289-.54.392-.817zm-1.645 2.39l.137-.137-.136.137h-.001zm0 0a4 4 0 11-4.162.001 9.608 9.608 0 001.544 1.26l.537.341.537-.341a9.612 9.612 0 001.545-1.26zM10 5.723C10 4.792 10.873 4 12 4s2 .792 2 1.722c0 .725-.444 1.533-1.218 2.331a8.16 8.16 0 01-.515.487L12 8.762l-.267-.222a8.16 8.16 0 01-.515-.487C10.444 7.255 10 6.447 10 5.723z",
                            "clip-rule": "evenodd",
                          }),
                        }),
                        d.jsx("p", {
                          className:
                            "text-[8px] text-[black] font-bold font-[yekanm]",
                          children: "ماموریت ها",
                        }),
                      ],
                    }),
                    d.jsx("img", {
                      className: "w-[168px] h-[60px]",
                      src: i5,
                      alt: "",
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className:
                    "w-[100%] flex flex-row  pr-[20px] bg-white rounded-l-[8px]",
                  children: [
                    d.jsxs("div", {
                      className:
                        "flex flex-row gap-x-[6px] justify-start items-center  w-[100%] ",
                      children: [
                        d.jsx("svg", {
                          className: "w-[22px] h-[22px] fill-[aqua]",
                          children: d.jsx("path", {
                            "fill-rule": "evenodd",
                            d: "M15.9 4.888C15.492 3.22 13.888 2 12 2c-1.894 0-3.504 1.228-3.904 2.906l-.006-.014-.27.136a9 9 0 108.08-.14zm-.174 2.305l.034-.099a7 7 0 11-7.523 0c.11.312.253.617.43.916a6 6 0 106.667 0c.157-.267.289-.54.392-.817zm-1.645 2.39l.137-.137-.136.137h-.001zm0 0a4 4 0 11-4.162.001 9.608 9.608 0 001.544 1.26l.537.341.537-.341a9.612 9.612 0 001.545-1.26zM10 5.723C10 4.792 10.873 4 12 4s2 .792 2 1.722c0 .725-.444 1.533-1.218 2.331a8.16 8.16 0 01-.515.487L12 8.762l-.267-.222a8.16 8.16 0 01-.515-.487C10.444 7.255 10 6.447 10 5.723z",
                            "clip-rule": "evenodd",
                          }),
                        }),
                        d.jsx("p", {
                          className:
                            "text-[8px] text-[black] font-bold font-[yekanm]",
                          children: "جایزه ها",
                        }),
                      ],
                    }),
                    d.jsx("img", {
                      className: "w-[168px] h-[60px] rounded-l-[8px]",
                      src: s5,
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  o5 = () => {
    const [e, t] = T.useState([]),
      n = async () => {
        try {
          let r = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          t(r.data.profit);
        } catch (r) {
          console.log(r.message);
        }
      };
    return (
      T.useEffect(() => {
        n();
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsx("div", {
          className:
            "w-[100%]   pr-[100px] pl-[100px] pt-[40px] pb-[40px] max-lg:pl-[40px] max-lg:pr-[40px] max-sm:pl-[10px] max-sm:pr-[10px]",
          children: d.jsxs("div", {
            className:
              "w-[100%]   flex flex-col  justify-start items-center rounded-[15px] border-solid border-[1px] border-[grey]",
            children: [
              d.jsxs("div", {
                className:
                  "w-[100%]  flex flex-row justify-center items-center gap-x-[10px] p-[30px]",
                children: [
                  d.jsx("img", { className: "w-[30px]", src: J2, alt: "" }),
                  d.jsx("p", {
                    className: "text-[20px] font-[300] font-[yekanm]",
                    children: "محبوب ترین برندها",
                  }),
                ],
              }),
              d.jsx("div", {
                className: "favslider2",
                children: d.jsx(yn, {
                  centeredSlides: !1,
                  slidesPerView: 4,
                  navigation: !0,
                  modules: [zr, Wn],
                  className: "mySwiper60",
                  children:
                    e == null
                      ? void 0
                      : e.map((r, i) => {
                          if (i < 10)
                            return d.jsx(d.Fragment, {
                              children: d.jsx(
                                Ut,
                                {
                                  children: d.jsxs("div", {
                                    className:
                                      "p-[15px]  flex flex-col gap-y-[10px] justify-start items-start border-[solid] inside_favorite",
                                    children: [
                                      d.jsxs("div", {
                                        className:
                                          "w-[100%] flex flex-row gap-x-[10px] justify-start items-center ",
                                        children: [
                                          d.jsx("img", {
                                            src: r.image,
                                            alt: "",
                                          }),
                                          d.jsx("p", {
                                            className:
                                              "text-[40px] text-[aqua] font-bold font-[yekanm]",
                                            children: r.title1,
                                          }),
                                          d.jsx("p", {
                                            className:
                                              "text-[12px] text-[grey] text-right font-normal font-[yekanm]",
                                            children: r.name1,
                                          }),
                                        ],
                                      }),
                                      d.jsxs("div", {
                                        className:
                                          "w-[100%] flex flex-row gap-x-[10px] justify-start items-center ",
                                        children: [
                                          d.jsx("img", {
                                            src: r.image,
                                            alt: "",
                                          }),
                                          d.jsx("p", {
                                            className:
                                              "text-[40px] text-[aqua] font-bold font-[yekanm]",
                                            children: r.title2,
                                          }),
                                          d.jsx("p", {
                                            className:
                                              "text-[12px] text-[grey] text-right font-normal font-[yekanm]",
                                            children: r.name1,
                                          }),
                                        ],
                                      }),
                                      d.jsxs("div", {
                                        className:
                                          "w-[100%] flex flex-row gap-x-[10px] justify-start items-center ",
                                        children: [
                                          d.jsx("img", {
                                            src: r.image,
                                            alt: "",
                                          }),
                                          d.jsx("p", {
                                            className:
                                              "text-[40px] text-[aqua] font-bold font-[yekanm]",
                                            children: r.title3,
                                          }),
                                          d.jsx("p", {
                                            className:
                                              "text-[12px] text-[grey] text-right font-normal font-[yekanm]",
                                            children: r.name1,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                r.id
                              ),
                            });
                        }),
                }),
              }),
            ],
          }),
        }),
      })
    );
  },
  l5 = () => {
    const [e, t] = T.useState([]),
      [n, r] = T.useState([]),
      i = async () => {
        try {
          let s = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          t(s.data.hygiene);
          let a = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          r(a.data.hygiene_grid);
        } catch (s) {
          console.log(s.message);
        }
      };
    return (
      T.useEffect(() => {
        i();
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsx("div", {
          className:
            "w-[100%]   pr-[100px] pl-[100px] pt-[40px] pb-[40px] max-lg:pr-[40px] max-lg:pl-[40px] max-md:pr-[40px] max-md:pl-[40px] max-sm:pl-[10px] max-sm:pr-[10px]",
          children: d.jsx("div", {
            className:
              "w-[100%]    flex flex-row justify-start items-center border-[1px] border-[solid] border-[grey] rounded-[15px] max-sm:flex-col max-sm:justify-start max-sm:items-center max-sm:gap-y-[15px] hello",
            children:
              e == null
                ? void 0
                : e.map((s, a) => {
                    for (let l = a; l > 3; l++)
                      return d.jsx(d.Fragment, {
                        children: d.jsxs(
                          "div",
                          {
                            className:
                              "w-[100%]   p-[20px] rounded-r-[15px] flex flex-col justify-start items-start gap-y-[10px] max-sm:items-center",
                            children: [
                              d.jsx("p", {
                                className:
                                  "text-[15px] font-[300] font-[yekanm]",
                                children: s.title,
                              }),
                              d.jsx("p", {
                                className:
                                  "text-[12px] text-[grey] font-[100] font-[yekanm]",
                                children: s.name1,
                              }),
                              d.jsx("div", {
                                className: "grid_h",
                                children:
                                  n == null
                                    ? void 0
                                    : n.map((u, m) => {
                                        for (let v = m; v > 3; v++)
                                          return d.jsx(d.Fragment, {
                                            children: d.jsx(
                                              "div",
                                              {
                                                className:
                                                  "w-[100%] p-[10px] border-l-[1px] border-solid border-[grey]",
                                                children: d.jsx("img", {
                                                  className: "w-[100px]",
                                                  src: u.image,
                                                  alt: "",
                                                }),
                                              },
                                              s.id
                                            ),
                                          });
                                      }),
                              }),
                              d.jsxs("a", {
                                className:
                                  "w-[100%]  flex flex-row justify-center items-center gap-x-[5px]",
                                href: "#",
                                children: [
                                  d.jsx("p", {
                                    className:
                                      "text-[12px] text-[aqua] font-[100] font-[yekanm]",
                                    children: s.name2,
                                  }),
                                  " ",
                                  d.jsx("img", {
                                    className: "w-[15px] ",
                                    src: s.image,
                                    alt: "",
                                  }),
                                ],
                              }),
                            ],
                          },
                          s.id
                        ),
                      });
                  }),
          }),
        }),
      })
    );
  },
  u5 =
    "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23EF4056'%20width='87px'%20height='87px'%20viewBox='0%200%2064%2064'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%20id='a'/%3e%3cg%20id='b'%3e%3cpath%20d='M55.8325,17.7085c-.458-.4585-1.0679-.7109-1.7158-.7109,0,0-29.3912-.0083-29.4048-.0083h-.0015c-.006,0-.0109,.0032-.0168,.0034l-15.2341,.0044c-.6484,.0005-1.2578,.2529-1.7163,.7114-.458,.459-.7104,1.0684-.71,1.7163l.0015,7.0127c0,.1562,.0728,.3032,.1968,.3979,.124,.0942,.2847,.1255,.436,.084,.3438-.0947,.6836-.1426,1.0088-.1426h.0015c1.1689,0,2.2729,.5342,3.1079,1.5044,.854,.9922,1.3247,2.3159,1.3252,3.7275,.0005,1.4121-.4692,2.7368-1.3228,3.729-.835,.9712-1.939,1.5063-3.1089,1.5063h-.0044c-.3247,0-.6626-.0479-1.0034-.1421-.1523-.043-.3125-.0103-.436,.084-.1245,.0947-.1973,.2417-.1973,.3979l.002,7.0005c0,.6484,.2524,1.2578,.7114,1.7163,.458,.458,1.0669,.71,1.7148,.71h.001l44.6494-.0083c.6479,0,1.2578-.2524,1.7158-.7109,.4585-.459,.7109-1.0684,.7104-1.7163V19.4248c.0005-.6479-.252-1.2573-.7104-1.7163Zm-.2896,26.8667c0,.3813-.1479,.7397-.4175,1.0093s-.6279,.418-1.0088,.418l-25.6577,.0083h-.0005c-.646,0-1.2041-.4277-1.3745-1.0459l-.0845-3.4868c-.0073-.2764-.2324-.5103-.5122-.4878-.2759,.0068-.4941,.2358-.4878,.5122l.0841,3.4685c-.1555,.5779-.6484,.9778-1.2363,1.0349l-15.38,.0049h-.001c-.3809,0-.7388-.1484-1.0083-.4175-.2695-.2695-.418-.6274-.418-1.0088l-.002-6.3857c.2144,.0303,.4272,.0454,.6362,.0454h.0054c1.4658-.0005,2.8389-.6587,3.8667-1.8545,1.0093-1.1738,1.5649-2.7295,1.5645-4.3809s-.5571-3.2065-1.5674-4.3799c-1.0278-1.1943-2.4009-1.8521-3.8652-1.8521h-.002c-.2109,0-.4253,.0156-.6416,.0464l-.0015-6.3984c0-.3813,.1479-.7397,.4175-1.0093s.6279-.4185,1.0088-.4185l15.2725-.0044c.6393,.0092,1.185,.4374,1.3513,1.053l-.0837,3.4518c-.0063,.2764,.2119,.5054,.4878,.5122,.3013,.02,.5054-.2119,.5122-.4878l.084-3.467c.0233-.0889,.0668-.1663,.1052-.2468,.0287-.0601,.0474-.1265,.0837-.1813,.0511-.0772,.1201-.1378,.1844-.2029,.0438-.0443,.0789-.0971,.128-.1351,.0798-.0618,.1737-.102,.2654-.1458,.0479-.0229,.0891-.057,.1396-.0745,.1475-.051,.3051-.0793,.4687-.0793h.001l25.6572,.0083c.3809,0,.7393,.1484,1.0088,.418s.4175,.6279,.4175,1.0093v25.1504Zm-28.5439-11.0752l.001,4c0,.2759-.2236,.5-.5,.5-.2759,0-.5-.2236-.5-.5l-.001-4c0-.2759,.2236-.5,.5-.5,.2759,0,.5,.2236,.5,.5Zm0-7l.001,4c0,.2759-.2236,.5-.5,.5-.2759,0-.5-.2236-.5-.5l-.001-4c0-.2759,.2236-.5,.5-.5,.2759,0,.5,.2236,.5,.5Zm12.3521,.9873l-6.6577,9.5996c-.0967,.1396-.2529,.2148-.4111,.2148-.0981,0-.1978-.0288-.2847-.0894-.2266-.1572-.2832-.4688-.1255-.6958l6.6577-9.5996c.1572-.2261,.4688-.2832,.6958-.1255,.2266,.1572,.2832,.4688,.1255,.6958Zm-6.7393,2.5146c-.8271,0-1.5-.6729-1.5-1.4995-.0005-.4004,.1553-.7773,.439-1.0605,.2832-.2837,.6597-.4399,1.0605-.4399,.8267,0,1.5,.6724,1.5005,1.499v.0005c0,.8271-.6729,1.5005-1.5,1.5005Zm7.5,5.499v.0005c0,.8271-.6729,1.5005-1.5,1.5005s-1.5-.6729-1.5-1.4995c-.0005-.4004,.1553-.7773,.439-1.0605,.2832-.2837,.6597-.4399,1.0605-.4399,.8267,0,1.5,.6724,1.5005,1.499Zm12.8882-10.0039c0,.2759-.2236,.5-.5,.5l-9,.0029c-.2759,0-.5-.2236-.5-.5,0-.2759,.2236-.5,.5-.5l9-.0029c.2759,0,.5,.2236,.5,.5Zm0,6.5015c0,.2759-.2236,.5-.5,.5l-9,.0029c-.2759,0-.5-.2236-.5-.5,0-.2759,.2236-.5,.5-.5l9-.0029c.2759,0,.5,.2236,.5,.5Zm0,6.4985c0,.2759-.2236,.5-.5,.5l-9,.0029c-.2759,0-.5-.2236-.5-.5,0-.2759,.2236-.5,.5-.5l9-.0029c.2759,0,.5,.2236,.5,.5Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
  c5 = () => {
    const [e, t] = T.useState([]),
      n = async () => {
        try {
          let r = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          t(r.data.shopping2);
        } catch (r) {
          console.log(r.message);
        }
      };
    return (
      T.useEffect(() => {
        n();
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsx("div", {
          className:
            "w-[100%]    pr-[100px] pl-[100px] pt-[40px] pb-[40px] max-lg:pr-[40px] max-lg:pl-[40px] max-md:pr-[40px] max-md:pl-[40px] max-sm:pr-[10px] max-sm:pl-[10px] ",
          children: d.jsxs("div", {
            className:
              "border-[1px] border-solid border-[grey] rounded-[15px] flex flex-col gap-y-[40px] justify-start items-center",
            children: [
              d.jsxs("div", {
                className:
                  "w-[100%] flex flex-row justify-center items-center gap-x-[10px]",
                children: [
                  d.jsx("img", { className: "w-[55px]", src: u5, alt: "" }),
                  d.jsx("p", {
                    className:
                      "text-[22px] font-[400] font-[yekanm] max-sm:text-[15px]",
                    children: "منتخب محصولات تخفیف و حراج",
                  }),
                ],
              }),
              d.jsx("div", {
                className: "inside2",
                children:
                  e == null
                    ? void 0
                    : e.map((r) =>
                        d.jsx(d.Fragment, {
                          children: d.jsxs(
                            "div",
                            {
                              className:
                                "w-[100%]     border-solid border-[grey] flex flex-col justify-start items-center gap-y-[10px] inside_div ",
                              children: [
                                d.jsx("img", {
                                  className: "w-[140px]",
                                  src: r.image,
                                  alt: "",
                                }),
                                d.jsxs("div", {
                                  className:
                                    "w-[100%] flex flex-row justify-between items-center ",
                                  children: [
                                    d.jsx("p", {
                                      className:
                                        "text-[12px] p-[5px] text-white text-center w-[42px] bg-[red] rounded-[100px]  font-normal font-[yekanm]",
                                      children: r.name1,
                                    }),
                                    d.jsxs("div", {
                                      className:
                                        "w-[40%] flex flex-row justify-start items-center gap-x-[5px]",
                                      children: [
                                        d.jsx("p", {
                                          className:
                                            "text-[12px] text-center w-[100px]  font-normal font-[yekanm]",
                                          children: r.name2,
                                        }),
                                        d.jsx("p", {
                                          className:
                                            "text-[12px]  w-[100px] text-right  font-normal font-[yekanm]",
                                          children: r.name3,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                d.jsx("p", {
                                  className:
                                    "text-[12px] text-[#C1CDDC] pl-[50px] line-through text-left w-[100%]  font-normal font-[yekanm] pb-[10px]",
                                  children: r.name4,
                                }),
                              ],
                            },
                            r.id
                          ),
                        })
                      ),
              }),
            ],
          }),
        }),
      })
    );
  },
  d5 =
    "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='64px'%20height='64px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0)matrix(-1,%200,%200,%201,%200,%200)'%20stroke='%23F9A825'%20stroke-width='0.00024000000000000003'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.144'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.8202%201.17444L12.7809%202.37532C13.9186%203.7975%2014.3379%205.20075%2014.299%206.54704C14.2612%207.85605%2013.7915%209.02304%2013.3225%209.98619C13.1649%2010.3098%2012.9946%2010.6349%2012.8386%2010.9327C12.7663%2011.0708%2012.697%2011.203%2012.6335%2011.3265C12.4214%2011.739%2012.2593%2012.0804%2012.1563%2012.3799C12.0528%2012.6806%2012.0336%2012.8708%2012.0468%2012.991C12.0567%2013.0817%2012.0872%2013.173%2012.2071%2013.2929C12.4054%2013.4912%2012.5517%2013.5469%2012.6404%2013.5639C12.731%2013.5814%2012.8515%2013.5757%2013.0239%2013.5049C13.4095%2013.3463%2013.8803%2012.9334%2014.3743%2012.314C14.8488%2011.719%2015.2631%2011.0384%2015.5634%2010.4938C15.712%2010.2242%2015.8295%209.99387%2015.9091%209.83234C15.9488%209.75168%2015.979%209.6885%2015.9988%209.64651L16.0205%209.59999L16.0252%209.58959L16.0259%209.58824L16.026%209.5879L16.0261%209.58776L16.0261%209.58771L16.6117%208.29169L17.6332%209.28206C19.946%2011.5244%2020.6617%2014.7623%2019.1415%2017.7019C17.8195%2020.2583%2015.1123%2022%2012%2022C7.60499%2022%204%2018.5172%204%2014.1697C4%2011.8793%205.26687%2010.2404%206.64671%208.62914C6.82673%208.41894%207.0107%208.20711%207.19757%207.99194C8.47882%206.5167%209.89649%204.88437%2011.1122%202.5397L11.8202%201.17444ZM17.1269%2011.7924C16.8148%2012.3321%2016.4089%2012.9705%2015.9379%2013.561C15.3851%2014.2542%2014.6528%2014.9975%2013.7846%2015.3546C13.33%2015.5415%2012.8109%2015.6335%2012.2624%2015.5279C11.7119%2015.4219%2011.2196%2015.1338%2010.7929%2014.7071C10.3617%2014.2759%2010.1196%2013.7664%2010.0586%2013.2082C10.0008%2012.6794%2010.1126%2012.1723%2010.2651%2011.729C10.4181%2011.2846%2010.6372%2010.8353%2010.8549%2010.412C10.9327%2010.2606%2011.0095%2010.114%2011.0856%209.96886C11.2338%209.68618%2011.3792%209.40866%2011.5243%209.11064C11.9559%208.22433%2012.2745%207.36712%2012.2998%206.48929C12.3134%206.01847%2012.2432%205.51449%2012.0273%204.9728C10.9109%206.77097%209.71215%208.14915%208.69763%209.31555C8.51377%209.52693%208.33596%209.73135%208.16579%209.93006C6.7748%2011.5543%206%2012.6877%206%2014.1697C6%2017.3667%208.66302%2020%2012%2020C14.3543%2020%2016.3818%2018.6846%2017.365%2016.7832C18.2267%2015.1169%2018.1049%2013.3127%2017.1269%2011.7924Z'%20fill='%23F9A825'/%3e%3c/g%3e%3c/svg%3e",
  f5 = () => {
    const [e, t] = T.useState([]),
      n = async () => {
        try {
          let r = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          t(r.data.profit);
        } catch (r) {
          console.log(r.message);
        }
      };
    return (
      T.useEffect(() => {
        n();
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsx("div", {
          className:
            "w-[100%]   pr-[100px] pl-[100px] pt-[40px] pb-[40px] max-lg:pl-[40px] max-lg:pr-[40px] max-sm:pl-[10px] max-sm:pr-[10px]",
          children: d.jsxs("div", {
            className:
              "w-[100%]   flex flex-col  justify-start items-center rounded-[15px] border-solid border-[1px] border-[grey]",
            children: [
              d.jsxs("div", {
                className:
                  "w-[100%]  flex flex-row justify-center items-center gap-x-[10px] p-[30px]",
                children: [
                  d.jsx("img", { className: "w-[30px]", src: d5, alt: "" }),
                  d.jsx("p", {
                    className: "text-[20px] font-[300] font-[yekanm]",
                    children: "داغ ترین چند ساعت گذشته",
                  }),
                ],
              }),
              d.jsx("div", {
                className: "favslider3",
                children: d.jsx(yn, {
                  centeredSlides: !1,
                  slidesPerView: 4,
                  navigation: !0,
                  modules: [zr, Wn],
                  className: "mySwiper63",
                  children:
                    e == null
                      ? void 0
                      : e.map((r, i) => {
                          if (i > 10)
                            return d.jsx(d.Fragment, {
                              children: d.jsx(
                                Ut,
                                {
                                  children: d.jsxs("div", {
                                    className:
                                      "p-[15px]  flex flex-col gap-y-[10px] justify-start items-start border-[solid] inside_favorite",
                                    children: [
                                      d.jsxs("div", {
                                        className:
                                          "w-[100%] flex flex-row gap-x-[10px] justify-start items-center ",
                                        children: [
                                          d.jsx("img", {
                                            src: r.image,
                                            alt: "",
                                          }),
                                          d.jsx("p", {
                                            className:
                                              "text-[40px] text-[aqua] font-bold font-[yekanm]",
                                            children: r.title1,
                                          }),
                                          d.jsx("p", {
                                            className:
                                              "text-[12px] text-[grey] text-right font-normal font-[yekanm]",
                                            children: r.name1,
                                          }),
                                        ],
                                      }),
                                      d.jsxs("div", {
                                        className:
                                          "w-[100%] flex flex-row gap-x-[10px] justify-start items-center ",
                                        children: [
                                          d.jsx("img", {
                                            src: r.image,
                                            alt: "",
                                          }),
                                          d.jsx("p", {
                                            className:
                                              "text-[40px] text-[aqua] font-bold font-[yekanm]",
                                            children: r.title2,
                                          }),
                                          d.jsx("p", {
                                            className:
                                              "text-[12px] text-[grey] text-right font-normal font-[yekanm]",
                                            children: r.name1,
                                          }),
                                        ],
                                      }),
                                      d.jsxs("div", {
                                        className:
                                          "w-[100%] flex flex-row gap-x-[10px] justify-start items-center ",
                                        children: [
                                          d.jsx("img", {
                                            src: r.image,
                                            alt: "",
                                          }),
                                          d.jsx("p", {
                                            className:
                                              "text-[40px] text-[aqua] font-bold font-[yekanm]",
                                            children: r.title3,
                                          }),
                                          d.jsx("p", {
                                            className:
                                              "text-[12px] text-[grey] text-right font-normal font-[yekanm]",
                                            children: r.name1,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                r.id
                              ),
                            });
                        }),
                }),
              }),
            ],
          }),
        }),
      })
    );
  },
  p5 =
    "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='64px'%20height='64px'%20viewBox='0%200%2024.00%2024.00'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20transform='matrix(-1,%200,%200,%201,%200,%200)'%20stroke='%23000000'%20stroke-width='0.00024000000000000003'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.192'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.29289%204.29289C8.68342%203.90237%209.31658%203.90237%209.70711%204.29289L16.7071%2011.2929C17.0976%2011.6834%2017.0976%2012.3166%2016.7071%2012.7071L9.70711%2019.7071C9.31658%2020.0976%208.68342%2020.0976%208.29289%2019.7071C7.90237%2019.3166%207.90237%2018.6834%208.29289%2018.2929L14.5858%2012L8.29289%205.70711C7.90237%205.31658%207.90237%204.68342%208.29289%204.29289Z'%20fill='%2300FFFF'/%3e%3c/g%3e%3c/svg%3e",
  m5 = () => {
    const [e, t] = T.useState([]),
      n = async () => {
        try {
          let r = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          t(r.data.reading);
        } catch (r) {
          console.log(r.message);
        }
      };
    return (
      T.useEffect(() => {
        n();
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsxs("div", {
          className:
            "w-[100%]   pr-[100px] pl-[100px] pt-[20px] pb-[40px] flex flex-col justify-start items-center gap-y-[20px] max-lg:pl-[40px] max-lg:pr-[40px] max-sm:pl-[10px] max-sm:pr-[10px] ",
          children: [
            d.jsxs("div", {
              className:
                "w-[100%]  pl-[10px] pr-[10px]  flex flex-row justify-between items-center",
              children: [
                d.jsx("p", {
                  className: "text-[18px] font-[500] font-[yekanm]",
                  children: "خواندنی ها",
                }),
                d.jsxs("a", {
                  href: "#",
                  className:
                    "flex flex-row justify-start items-center gap-x-[5px]",
                  children: [
                    d.jsx("p", {
                      className:
                        "text-[12px] text-[aqua] font-[500] font-[yekanm]",
                      children: "مطالب بیشتر در دیجی‌کالا مگ",
                    }),
                    " ",
                    d.jsx("img", { className: "w-[20px]", src: p5, alt: "" }),
                  ],
                }),
              ],
            }),
            d.jsx("div", {
              className:
                "w-[100%]  flex flex-row gap-x-[15px] max-sm:flex-col max-sm:justify-start max-sm:items-start max-sm:gap-y-[15px]",
              children:
                e == null
                  ? void 0
                  : e.map((r) =>
                      d.jsx(d.Fragment, {
                        children: d.jsxs(
                          "div",
                          {
                            className:
                              "w-[100%]  rounded-[15px] border-[1px] border-[solid] border-[grey] flex flex-col justify-start items-center gap-y-[15px] pb-[15px]",
                            children: [
                              d.jsx("img", {
                                className: "w-[100%] rounded-t-[15px]",
                                src: r.image,
                                alt: "",
                              }),
                              d.jsx("p", {
                                className:
                                  "text-[12px] text-[grey] font-normal font-[yekanm] text-right",
                                children: r.name,
                              }),
                            ],
                          },
                          r.id
                        ),
                      })
                    ),
            }),
          ],
        }),
      })
    );
  },
  h5 =
    "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20height='64px'%20width='64px'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20442%20442'%20xml:space='preserve'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M431.706,232.827h-1.108c-3.863-17.348-17.544-31.03-34.892-34.892v-23.229C395.706,78.373,317.333,0,221,0%20S46.294,78.373,46.294,174.706v23.229c-17.348,3.863-31.03,17.544-34.892,34.892h-1.108c-5.523,0-10,4.478-10,10s4.477,10,10,10%20h1.108c3.962,17.796,18.257,31.735,36.242,35.173c4.159,17.647,20.027,30.827,38.926,30.827c22.056,0,40-17.944,40-40v-72%20c0-22.056-17.944-39.999-40-39.999c-7.384,0-14.303,2.019-20.246,5.523C67.589,88.128,136.482,20,221,20%20c84.464,0,153.325,68.042,154.674,152.191c-5.881-3.404-12.698-5.363-19.968-5.363c-22.056,0-40,17.943-40,39.999v72%20c0,22.056,17.944,40,40,40c18.918,0,34.799-13.205,38.938-30.879c6.229-1.232,12.007-3.724,17.062-7.201v44.167%20c0,18.786-9.134,36.63-25.72,50.244C368.827,389.243,345.999,397,321.706,397h-64.907c-2.082-15.648-9.245-25-19.726-25h-37.5%20c-19.299,0-35,15.701-35,35s15.701,35,35,35h37.5c10.482,0,17.645-9.352,19.726-25h64.907c60.654,0,110-41.31,110-92.086v-72.087%20c5.523,0,10-4.478,10-10S437.229,232.827,431.706,232.827z%20M66.57,206.827c0-11.027,8.972-19.999,20-19.999%20c11.028,0,20,8.972,20,19.999v72c0,11.028-8.972,20-20,20c-11.028,0-20-8.972-20-20c0-5.522-4.477-10-10-10%20c-0.047,0-0.092,0.006-0.138,0.007c-0.047,0-0.092-0.007-0.138-0.007c-14.336,0-26-11.663-26-26c0-10.9,6.744-20.248,16.276-24.106%20v25.996c0,5.522,4.477,10,10,10s10-4.478,10-10V206.827z%20M234.938,422h-35.366c-8.271,0-15-6.729-15-15s6.729-15,15-15h35.366%20c1.049,2.163,2.489,7.271,2.489,15S235.987,419.837,234.938,422z%20M385.706,268.827c-5.523,0-10,4.478-10,10c0,11.028-8.972,20-20,20%20s-20-8.972-20-20v-72c0-11.027,8.972-19.999,20-19.999s20,8.972,20,19.999v37.89c0,5.522,4.477,10,10,10s10-4.478,10-10V218.83%20c9.387,3.926,16,13.203,16,23.997C411.706,257.164,400.042,268.827,385.706,268.827z'/%3e%3c/g%3e%3c/svg%3e",
  g5 =
    "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffff'%20height='64px'%20width='64px'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20460.775%20460.775'%20xml:space='preserve'%20stroke='%23ffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55%20c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55%20c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505%20c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55%20l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719%20c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z'/%3e%3c/g%3e%3c/svg%3e";
function v5(e) {
  return d.jsxs("div", {
    className: "border rounded-[10px]  mb-1",
    children: [
      d.jsxs("button", {
        className: `w-full p-4 text-left bg-[white] 
                transition duration-300 flex flex-row justify-between items-center rounded-[10px] ${
                  e.isOpen && "rounded-b-none"
                }`,
        onClick: e.toggleAccordion,
        children: [
          d.jsxs("div", {
            className: `text-[16px] font-[yekanm] font-normal text-[black] ${
              e.isOpen && "text-[#DF8602]"
            } max-sm:text-[10px]`,
            children: [e.title, " "],
          }),
          d.jsx("span", {
            className: `float-right transform ${
              e.isOpen ? "rotate-45" : "rotate-0"
            }  
                                 transition-transform duration-300 text-[24px] text-[#DF8602]`,
            children: "+",
          }),
        ],
      }),
      e.isOpen &&
        d.jsx("div", {
          className:
            " rounded-[10px] rounded-t-none bg-[white] text-[#ABABAB] font-[yekanm] font-normal text-[15px] pl-[10px] pr-[10px] pb-[15px]",
          children: e.data,
        }),
    ],
  });
}
const x5 = () => {
    const e = (i) => {
        const s = t.map((a) =>
          a.key === i ? { ...a, isOpen: !a.isOpen } : { ...a, isOpen: !1 }
        );
        n(s);
      },
      [t, n] = T.useState([]),
      r = async () => {
        try {
          let i = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          n(i.data.ask);
        } catch (i) {
          console.log(i.message);
        }
      };
    return (
      T.useEffect(() => {
        r();
      }, []),
      d.jsxs("div", {
        className:
          "   flex flex-col  justify-start items-start  sm:max-lg:p-[20px] max-sm:p-[10px] rounded-[15px] bg-[red]",
        children: [
          d.jsx("h1", {
            className:
              " w-[100%] p-[15px] font-sans1 font-bold text-[#FFFFFF] text-[20px] border-solid border-b-[0.3px] border-[white]",
            children: "پشتیبانی آنلاین",
          }),
          d.jsxs("div", {
            className: " w-[100%] bg-white p-[10px]  rounded-b-[15px]",
            children: [
              d.jsx("p", {
                className:
                  " font-[yekanm] font-normal text-[black] text-[17px] pb-[5px] ",
                children: "سلام👋👋",
              }),
              d.jsx("p", {
                className:
                  " font-[yekanm] font-normal text-[black] text-[15px] pb-[5px]",
                children: "جواب سوال‌هاتون رو می‌تونید در زیر پیدا کنید.",
              }),
              d.jsx("p", {
                className:
                  " font-[yekanm] font-normal text-[black] text-[15px] pb-[5px]",
                children:
                  " در غیر اینصورت از ما بپرسید، ما همیشه به سوالاتتون جواب می‌دیم.😊",
              }),
              t == null
                ? void 0
                : t.map((i) =>
                    d.jsx(
                      v5,
                      {
                        title: i.title,
                        data: i.data,
                        isOpen: i.isOpen,
                        toggleAccordion: () => e(i.key),
                      },
                      i.key
                    )
                  ),
            ],
          }),
        ],
      })
    );
  },
  w5 = () => {
    const e = T.useRef(null);
    T.useEffect(() => {
      e.current.addEventListener("click", function () {
        document.querySelector(".open").classList.remove("active22"),
          document.querySelector(".open").classList.add("none"),
          document.querySelector(".close22").classList.add("active22"),
          document.querySelector(".whatsmenu").classList.add("active23"),
          document.querySelector(".whatsmenu").classList.remove("none");
      });
    }, []);
    const t = T.useRef(null);
    return (
      T.useEffect(() => {
        t.current.addEventListener("click", function () {
          document.querySelector(".close22").classList.remove("active22"),
            document.querySelector(".whatsmenu").classList.remove("active23"),
            document.querySelector(".whatsmenu").classList.add("none"),
            document.querySelector(".open").classList.add("active22");
        });
      }, []),
      d.jsxs(d.Fragment, {
        children: [
          d.jsxs("div", {
            className:
              "p-[17px] bg-[red] fixed bottom-[10%] right-[5%] z-50 rounded-[100px] max-lg:bottom-[5%]",
            children: [
              d.jsx("div", {
                className: "open",
                ref: e,
                children: d.jsx("img", {
                  className: "w-[20px]",
                  src: h5,
                  alt: "",
                }),
              }),
              d.jsx("div", {
                className: "close22",
                ref: t,
                children: d.jsx("img", {
                  className: "w-[20px]",
                  src: g5,
                  alt: "",
                }),
              }),
            ],
          }),
          d.jsx("div", {
            className: "whatsmenu none",
            children: d.jsx(x5, {}),
          }),
        ],
      })
    );
  },
  y5 = () =>
    d.jsxs(d.Fragment, {
      children: [
        d.jsx(B3, {}),
        d.jsx(F3, {}),
        d.jsx(V3, {}),
        d.jsx(W3, {}),
        d.jsx(Z3, {}),
        d.jsx(X3, {}),
        d.jsx(Y3, {}),
        d.jsx(K3, {}),
        d.jsx(J3, {}),
        d.jsx(e5, {}),
        d.jsx(a5, {}),
        d.jsx(o5, {}),
        d.jsx(l5, {}),
        d.jsx(c5, {}),
        d.jsx(f5, {}),
        d.jsx(m5, {}),
        d.jsx(w5, {}),
      ],
    }),
  S5 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='115'%20height='30'%20viewBox='0%200%20115%2030'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3cg%20fill='%23EE384E'%3e%3cg%3e%3cg%3e%3cpath%20d='M76.916%2019.024h6.72v-8.78h-6.72c-1.16%200-2.24%201.061-2.24%202.195v4.39c0%201.134%201.08%202.195%202.24%202.195zm26.883%200h6.72v-8.78h-6.72c-1.16%200-2.24%201.061-2.24%202.195v4.39c0%201.134%201.08%202.195%202.24%202.195zM88.117%206.951v15.366c0%20.484-.625%201.098-1.12%201.098l-2.24.023c-.496%200-1.12-.637-1.12-1.12v-.733l-1.017%201.196c-.31.413-1.074.634-1.597.634h-4.107c-3.604%200-6.721-3.063-6.721-6.586v-4.39c0-3.523%203.117-6.585%206.72-6.585h10.082c.495%200%201.12.613%201.12%201.097zm26.883%200v15.366c0%20.484-.624%201.098-1.12%201.098l-2.24.023c-.496%200-1.12-.637-1.12-1.12v-.733l-1.017%201.196c-.31.413-1.074.634-1.597.634h-4.107c-3.604%200-6.721-3.063-6.721-6.586v-4.39c0-3.523%203.117-6.585%206.72-6.585h10.082c.495%200%201.12.613%201.12%201.097zm-74.675%203.293h-6.721c-1.16%200-2.24%201.061-2.24%202.195v4.39c0%201.134%201.08%202.195%202.24%202.195h6.72v-8.78zm4.48-3.293V23.78c0%203.523-3.117%206.22-6.72%206.22H34.62c-.515%200-1-.236-1.311-.638l-1.972-2.55c-.327-.424-.144-1.202.399-1.202h6.347c1.16%200%202.24-.696%202.24-1.83v-.365h-6.72c-3.604%200-6.72-3.063-6.72-6.586v-4.39c0-3.523%203.116-6.585%206.72-6.585h4.107c.514%200%201.074.405%201.437.731l1.177%201.098V6.95c0-.483.625-1.097%201.12-1.097h2.24c.496%200%201.12.613%201.12%201.097zM4.481%2016.83c0%201.134%201.08%202.195%202.24%202.195h6.72v-8.78h-6.72c-1.16%200-2.24%201.061-2.24%202.195v4.39zM16.8%200c.497%200%201.121.613%201.121%201.098v21.22c0%20.483-.624%201.097-1.12%201.097h-2.24c-.496%200-1.12-.613-1.12-1.098v-.732l-1.175%201.232c-.318.346-.932.598-1.44.598H6.722C3.117%2023.415%200%2020.352%200%2016.829v-4.356c0-3.523%203.117-6.62%206.72-6.62h6.722V1.099c0-.485.624-1.098%201.12-1.098h2.24zm46.3%2014.634L69.336%206.9c.347-.421.04-1.048-.513-1.048h-3.566c-.27%200-.525.119-.696.323l-6.314%207.727V1.098c0-.485-.625-1.098-1.12-1.098h-2.24c-.496%200-1.12.613-1.12%201.098v21.22c0%20.483.624%201.097%201.12%201.097h2.24c.495%200%201.12-.614%201.12-1.098v-6.951l6.317%207.744c.17.207.428.328.7.328h3.562c.554%200%20.86-.627.514-1.048l-6.24-7.756zM48.166%200c-.496%200-1.12.613-1.12%201.098v2.195c0%20.484.624%201.097%201.12%201.097h2.24c.495%200%201.12-.613%201.12-1.097V1.098c0-.485-.625-1.098-1.12-1.098h-2.24zm0%205.854c-.496%200-1.12.613-1.12%201.097v15.366c0%20.484.8%201.12%201.295%201.12l2.065-.022c.495%200%201.12-.614%201.12-1.098V6.951c0-.484-.625-1.097-1.12-1.097h-2.24zM21.282%200c-.495%200-1.12.613-1.12%201.098v2.195c0%20.484.625%201.097%201.12%201.097h2.24c.496%200%201.12-.613%201.12-1.097V1.098c0-.485-.624-1.098-1.12-1.098h-2.24zm0%205.854c-.495%200-1.12.613-1.12%201.097v15.366c0%20.484.625%201.098%201.12%201.098h2.24c.496%200%201.12-.614%201.12-1.098V6.951c0-.484-.624-1.097-1.12-1.097h-2.24zm73.556-4.756v21.22c0%20.483-.625%201.097-1.12%201.097h-2.24c-.496%200-1.12-.614-1.12-1.098V1.097c0-.484.624-1.097%201.12-1.097h2.24c.495%200%201.12.613%201.12%201.098z'%20transform='translate(-1235%20-19)%20translate(-238)%20translate(1473%2019)'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
  C5 =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15_82)'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3cg%20filter='url(%23filter0_d_15_82)'%3e%3cpath%20d='M14.3365%2012.3466L14.0765%2011.9195C13.9082%2012.022%2013.8158%2012.2137%2013.8405%2012.4092C13.8651%2012.6046%2014.0022%2012.7674%2014.1907%2012.8249L14.3365%2012.3466ZM9.6634%2012.3466L9.80923%2012.8249C9.99769%2012.7674%2010.1348%2012.6046%2010.1595%2012.4092C10.1841%2012.2137%2010.0917%2012.022%209.92339%2011.9195L9.6634%2012.3466ZM4.06161%2019.002L3.56544%2018.9402L4.06161%2019.002ZM19.9383%2019.002L20.4345%2018.9402L19.9383%2019.002ZM16%208.5C16%209.94799%2015.2309%2011.2168%2014.0765%2011.9195L14.5965%2012.7737C16.0365%2011.8971%2017%2010.3113%2017%208.5H16ZM12%204.5C14.2091%204.5%2016%206.29086%2016%208.5H17C17%205.73858%2014.7614%203.5%2012%203.5V4.5ZM7.99996%208.5C7.99996%206.29086%209.79082%204.5%2012%204.5V3.5C9.23854%203.5%206.99996%205.73858%206.99996%208.5H7.99996ZM9.92339%2011.9195C8.76904%2011.2168%207.99996%209.948%207.99996%208.5H6.99996C6.99996%2010.3113%207.96342%2011.8971%209.40342%2012.7737L9.92339%2011.9195ZM9.51758%2011.8683C6.36083%2012.8309%203.98356%2015.5804%203.56544%2018.9402L4.55778%2019.0637C4.92638%2016.1018%207.02381%2013.6742%209.80923%2012.8249L9.51758%2011.8683ZM3.56544%2018.9402C3.45493%2019.8282%204.19055%2020.5%204.99996%2020.5V19.5C4.70481%2019.5%204.53188%2019.2719%204.55778%2019.0637L3.56544%2018.9402ZM4.99996%2020.5H19V19.5H4.99996V20.5ZM19%2020.5C19.8094%2020.5%2020.545%2019.8282%2020.4345%2018.9402L19.4421%2019.0637C19.468%2019.2719%2019.2951%2019.5%2019%2019.5V20.5ZM20.4345%2018.9402C20.0164%2015.5804%2017.6391%2012.8309%2014.4823%2011.8683L14.1907%2012.8249C16.9761%2013.6742%2019.0735%2016.1018%2019.4421%2019.0637L20.4345%2018.9402Z'%20fill='%23000000'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_15_82'%20x='2.55444'%20y='3.5'%20width='18.8911'%20height='19'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='0.5'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_15_82'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_15_82'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_15_82'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  b5 =
    "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%20fill='%23424750'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3crect%20x='0'%20fill='none'%20width='24'%20height='24'/%3e%3cg%3e%3cpath%20d='M7%2010l5%205%205-5'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
  E5 =
    "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='198px'%20height='198px'%20viewBox='0%200%2017.00%2017.00'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='%23000000'%20stroke='%23000000'%20stroke-width='0.00017'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.034'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M2.75%2012.5c-0.965%200-1.75%200.785-1.75%201.75s0.785%201.75%201.75%201.75%201.75-0.785%201.75-1.75-0.785-1.75-1.75-1.75zM2.75%2015c-0.414%200-0.75-0.337-0.75-0.75s0.336-0.75%200.75-0.75%200.75%200.337%200.75%200.75-0.336%200.75-0.75%200.75zM11.25%2012.5c-0.965%200-1.75%200.785-1.75%201.75s0.785%201.75%201.75%201.75%201.75-0.785%201.75-1.75-0.785-1.75-1.75-1.75zM11.25%2015c-0.414%200-0.75-0.337-0.75-0.75s0.336-0.75%200.75-0.75%200.75%200.337%200.75%200.75-0.336%200.75-0.75%200.75zM13.371%202l-0.302%202h-13.143l1.118%208.036h11.913l1.038-7.463%200.236-1.573h2.769v-1h-3.629zM12.926%205l-0.139%201h-11.574l-0.139-1h11.852zM1.914%2011.036l-0.561-4.036h11.295l-0.561%204.036h-10.173z'%20fill='%23000000'/%3e%3c/g%3e%3c/svg%3e",
  k5 =
    "/assets/7851a38f451a016ed843c1cd01e16018493949e21719406307-C-wk5l7d.gif",
  j5 =
    "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='100px'%20height='100px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20transform='rotate(0)matrix(-1,%200,%200,%201,%200,%200)'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.8202%201.17444L12.7809%202.37532C13.9186%203.7975%2014.3379%205.20075%2014.299%206.54704C14.2612%207.85605%2013.7915%209.02304%2013.3225%209.98619C13.1649%2010.3098%2012.9946%2010.6349%2012.8386%2010.9327C12.7663%2011.0708%2012.697%2011.203%2012.6335%2011.3265C12.4214%2011.739%2012.2593%2012.0804%2012.1563%2012.3799C12.0528%2012.6806%2012.0336%2012.8708%2012.0468%2012.991C12.0567%2013.0817%2012.0872%2013.173%2012.2071%2013.2929C12.4054%2013.4912%2012.5517%2013.5469%2012.6404%2013.5639C12.731%2013.5814%2012.8515%2013.5757%2013.0239%2013.5049C13.4095%2013.3463%2013.8803%2012.9334%2014.3743%2012.314C14.8488%2011.719%2015.2631%2011.0384%2015.5634%2010.4938C15.712%2010.2242%2015.8295%209.99387%2015.9091%209.83234C15.9488%209.75168%2015.979%209.6885%2015.9988%209.64651L16.0205%209.59999L16.0252%209.58959L16.0259%209.58824L16.026%209.5879L16.0261%209.58776L16.0261%209.58771L16.6117%208.29169L17.6332%209.28206C19.946%2011.5244%2020.6617%2014.7623%2019.1415%2017.7019C17.8195%2020.2583%2015.1123%2022%2012%2022C7.60499%2022%204%2018.5172%204%2014.1697C4%2011.8793%205.26687%2010.2404%206.64671%208.62914C6.82673%208.41894%207.0107%208.20711%207.19757%207.99194C8.47882%206.5167%209.89649%204.88437%2011.1122%202.5397L11.8202%201.17444ZM17.1269%2011.7924C16.8148%2012.3321%2016.4089%2012.9705%2015.9379%2013.561C15.3851%2014.2542%2014.6528%2014.9975%2013.7846%2015.3546C13.33%2015.5415%2012.8109%2015.6335%2012.2624%2015.5279C11.7119%2015.4219%2011.2196%2015.1338%2010.7929%2014.7071C10.3617%2014.2759%2010.1196%2013.7664%2010.0586%2013.2082C10.0008%2012.6794%2010.1126%2012.1723%2010.2651%2011.729C10.4181%2011.2846%2010.6372%2010.8353%2010.8549%2010.412C10.9327%2010.2606%2011.0095%2010.114%2011.0856%209.96886C11.2338%209.68618%2011.3792%209.40866%2011.5243%209.11064C11.9559%208.22433%2012.2745%207.36712%2012.2998%206.48929C12.3134%206.01847%2012.2432%205.51449%2012.0273%204.9728C10.9109%206.77097%209.71215%208.14915%208.69763%209.31555C8.51377%209.52693%208.33596%209.73135%208.16579%209.93006C6.7748%2011.5543%206%2012.6877%206%2014.1697C6%2017.3667%208.66302%2020%2012%2020C14.3543%2020%2016.3818%2018.6846%2017.365%2016.7832C18.2267%2015.1169%2018.1049%2013.3127%2017.1269%2011.7924Z'%20fill='%23A1A3A8'/%3e%3c/g%3e%3c/svg%3e",
  T5 =
    "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='64px'%20height='64px'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%20fill='%23A4A4A4'%20stroke='%23A4A4A4'%20stroke-width='0.00016'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.096'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill='%23A4A4A4'%20d='M12.2426025,1.7573595%20C14.5858025,4.1004995%2014.5858025,7.8994895%2012.2426025,10.2425995%20L8.4852825,14%20L11,14%20C11.5523025,14%2012,14.4476995%2012,15%20C12,15.5522995%2011.5523025,16%2011,16%20L5,16%20C4.4477225,16%204,15.5522995%204,15%20C4,14.4476995%204.4477225,14%205,14%20L7.5147225,14%20L3.7573625,10.2425995%20C1.4142125,7.8994895%201.4142125,4.1004995%203.7573625,1.7573595%20C6.1005025,-0.5857865%209.8994925,-0.5857865%2012.2426025,1.7573595%20Z%20M5.1715725,3.1715695%20C3.6094825,4.7336695%203.6094825,7.2663295%205.1715725,8.8284295%20L8.000005,11.6568995%20L10.8284025,8.8284295%20C12.3905025,7.2663295%2012.3905025,4.7336695%2010.8284025,3.1715695%20C9.2663325,1.6094795%206.7336725,1.6094795%205.1715725,3.1715695%20Z%20M8.0000025,3.9999995%20C9.1045725,3.9999995%2010.0000025,4.8954295%2010.0000025,5.9999995%20C10.0000025,7.1045695%209.1045725,7.9999995%208.0000025,7.9999995%20C6.8954325,7.9999995%206.0000025,7.1045695%206.0000025,5.9999995%20C6.0000025,4.8954295%206.8954325,3.9999995%208.0000025,3.9999995%20Z'/%3e%3c/g%3e%3c/svg%3e",
  P5 = () => {
    const [e, t] = T.useState([]),
      [n, r] = T.useState([]),
      [i, s] = T.useState([]),
      a = async () => {
        try {
          let l = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          t(l.data.menu_bottom);
          let u = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          r(u.data.menu_sort);
          let m = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          s(m.data.menu_sortinside);
        } catch (l) {
          console.log(l.message);
        }
      };
    return (
      T.useEffect(() => {
        a();
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsx("div", {
          class: "w-[100%]  bg-[white] pr-[2px]",
          children: d.jsxs("nav", {
            className:
              " w-[100%] flex flex-row justify-between items-center max-lg:justify-start max-lg:gap-x-[20px]",
            children: [
              d.jsx("div", {
                class: "menu",
                children:
                  e == null
                    ? void 0
                    : e.map((l, u) =>
                        u === 0
                          ? d.jsx(d.Fragment, {
                              children: d.jsxs(
                                "div",
                                {
                                  class: "submenu",
                                  children: [
                                    d.jsxs("a", {
                                      href: "#",
                                      children: [
                                        d.jsx("img", { src: l.image, alt: "" }),
                                        l.name,
                                      ],
                                    }),
                                    d.jsx("div", {
                                      class: l.class,
                                      children: d.jsx("div", {
                                        children:
                                          n == null
                                            ? void 0
                                            : n.map((m, v) =>
                                                v === 0
                                                  ? d.jsx(d.Fragment, {
                                                      children: d.jsxs("div", {
                                                        class: "sort",
                                                        children: [
                                                          d.jsx("div", {
                                                            class: "name",
                                                            children: d.jsxs(
                                                              "a",
                                                              {
                                                                href: "#",
                                                                children: [
                                                                  d.jsx("img", {
                                                                    className:
                                                                      "w-[20px]",
                                                                    src: m.image,
                                                                    alt: "",
                                                                  }),
                                                                  m.title,
                                                                ],
                                                              }
                                                            ),
                                                          }),
                                                          d.jsxs("div", {
                                                            class: "content",
                                                            children: [
                                                              d.jsx("div", {
                                                                class: "title",
                                                                children:
                                                                  d.jsxs("a", {
                                                                    href: "#",
                                                                    children: [
                                                                      "همه محصولات موبایل",
                                                                      d.jsx(
                                                                        "i",
                                                                        {
                                                                          class:
                                                                            "fa-solid fa-chevron-left",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }),
                                                              }),
                                                              d.jsx("div", {
                                                                class:
                                                                  "sub-content",
                                                                children:
                                                                  i == null
                                                                    ? void 0
                                                                    : i.map(
                                                                        (g) =>
                                                                          d.jsx(
                                                                            d.Fragment,
                                                                            {
                                                                              children:
                                                                                d.jsxs(
                                                                                  "div",
                                                                                  {
                                                                                    class:
                                                                                      "inside-sub",
                                                                                    children:
                                                                                      [
                                                                                        d.jsxs(
                                                                                          "a",
                                                                                          {
                                                                                            href: "#",
                                                                                            children:
                                                                                              [
                                                                                                d.jsx(
                                                                                                  "i",
                                                                                                  {
                                                                                                    class:
                                                                                                      "fa-solid fa-pipe",
                                                                                                  }
                                                                                                ),
                                                                                                g.title,
                                                                                              ],
                                                                                          }
                                                                                        ),
                                                                                        d.jsxs(
                                                                                          "ul",
                                                                                          {
                                                                                            children:
                                                                                              [
                                                                                                d.jsx(
                                                                                                  "li",
                                                                                                  {
                                                                                                    children:
                                                                                                      g.name1,
                                                                                                  }
                                                                                                ),
                                                                                                d.jsx(
                                                                                                  "li",
                                                                                                  {
                                                                                                    children:
                                                                                                      g.name2,
                                                                                                  }
                                                                                                ),
                                                                                                d.jsx(
                                                                                                  "li",
                                                                                                  {
                                                                                                    children:
                                                                                                      g.name3,
                                                                                                  }
                                                                                                ),
                                                                                                d.jsx(
                                                                                                  "li",
                                                                                                  {
                                                                                                    children:
                                                                                                      g.name4,
                                                                                                  }
                                                                                                ),
                                                                                                d.jsx(
                                                                                                  "li",
                                                                                                  {
                                                                                                    children:
                                                                                                      g.name5,
                                                                                                  }
                                                                                                ),
                                                                                                d.jsx(
                                                                                                  "li",
                                                                                                  {
                                                                                                    children:
                                                                                                      g.name6,
                                                                                                  }
                                                                                                ),
                                                                                                d.jsx(
                                                                                                  "li",
                                                                                                  {
                                                                                                    children:
                                                                                                      g.name7,
                                                                                                  }
                                                                                                ),
                                                                                                d.jsx(
                                                                                                  "li",
                                                                                                  {
                                                                                                    children:
                                                                                                      g.name8,
                                                                                                  }
                                                                                                ),
                                                                                                d.jsx(
                                                                                                  "li",
                                                                                                  {
                                                                                                    children:
                                                                                                      g.name9,
                                                                                                  }
                                                                                                ),
                                                                                                d.jsx(
                                                                                                  "li",
                                                                                                  {
                                                                                                    children:
                                                                                                      g.name10,
                                                                                                  }
                                                                                                ),
                                                                                                d.jsx(
                                                                                                  "li",
                                                                                                  {
                                                                                                    children:
                                                                                                      g.name11,
                                                                                                  }
                                                                                                ),
                                                                                                d.jsx(
                                                                                                  "li",
                                                                                                  {
                                                                                                    children:
                                                                                                      g.name12,
                                                                                                  }
                                                                                                ),
                                                                                                d.jsx(
                                                                                                  "li",
                                                                                                  {
                                                                                                    children:
                                                                                                      g.name13,
                                                                                                  }
                                                                                                ),
                                                                                              ],
                                                                                          }
                                                                                        ),
                                                                                      ],
                                                                                  }
                                                                                ),
                                                                            }
                                                                          )
                                                                      ),
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    })
                                                  : d.jsx(d.Fragment, {
                                                      children: d.jsx("div", {
                                                        class: "sort",
                                                        children: d.jsx("div", {
                                                          class: "name",
                                                          children: d.jsxs(
                                                            "a",
                                                            {
                                                              href: "#",
                                                              children: [
                                                                d.jsx("img", {
                                                                  className:
                                                                    "w-[20px]",
                                                                  src: m.image,
                                                                  alt: "",
                                                                }),
                                                                m.title,
                                                              ],
                                                            }
                                                          ),
                                                        }),
                                                      }),
                                                    })
                                              ),
                                      }),
                                    }),
                                  ],
                                },
                                l.id
                              ),
                            })
                          : d.jsx(d.Fragment, {
                              children: d.jsx(
                                "div",
                                {
                                  class: "submenu",
                                  children: d.jsxs("a", {
                                    href: "#",
                                    children: [
                                      d.jsx("img", { src: l.image, alt: "" }),
                                      l.name,
                                    ],
                                  }),
                                },
                                l.id
                              ),
                            })
                      ),
              }),
              d.jsxs("div", {
                class: "location",
                children: [
                  d.jsxs("label", {
                    for: "open-location",
                    children: [
                      d.jsx("img", { src: T5, alt: "" }),
                      "لطفا شهر خود را انتخاب کنید",
                    ],
                  }),
                  d.jsx("p", { children: "لطفا شهر خودرا انتخاب کنید" }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  },
  L5 = () => {
    const [e, t] = T.useState([]),
      n = async () => {
        try {
          let s = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          t(s.data.menu_slider);
        } catch (s) {
          console.log(s.message);
        }
      };
    T.useEffect(() => {
      n();
    }, []);
    const r = T.useRef(null);
    T.useEffect(() => {
      r.current.addEventListener("click", function () {
        document.querySelector(".search").classList.add("active"),
          document.querySelector(".close").classList.add("active");
      });
    }, []);
    const i = T.useRef(null);
    return (
      T.useEffect(() => {
        i.current.addEventListener("click", function () {
          document.querySelector(".search").classList.remove("active"),
            document.querySelector(".close").classList.remove("active");
        });
      }, []),
      d.jsxs(d.Fragment, {
        children: [
          d.jsxs("div", {
            className:
              "w-[100%] pr-[20px] pl-[20px] pb-[10px] pt-[10px]  flex flex-row justify-between items-center  relative max-sm:pr-[10px] max-sm:pl-[10px] max-sm:justify-center max-sm:gap-x-[40px]",
            children: [
              d.jsxs("div", {
                className:
                  "w-[50%]   flex flex-row justify-start items-center gap-x-[20px] max-sm:w-[50%] max-sm:justify-end  max-sm:gap-x-[10px]",
                children: [
                  d.jsx(sa, {
                    className:
                      "pr-[15px] w-[100px] max-md:w-[150px] max-sm:w-[400px] ",
                    to: "/digikala_react",
                    children: d.jsx("img", {
                      className: "w-[100px] max-md:w-[150px] max-sm:w-[400px] ",
                      src: S5,
                      alt: "",
                    }),
                  }),
                  d.jsxs("div", {
                    className: "search",
                    ref: r,
                    children: [
                      d.jsx("div", {
                        className:
                          "w-[100%] flex flex-row justify-between items-center",
                        children: d.jsx("p", {
                          className: "p_search",
                          children: "جستجو",
                        }),
                      }),
                      d.jsx("div", {
                        className: "gif",
                        children: d.jsx("img", { src: k5, alt: "" }),
                      }),
                      d.jsxs("div", {
                        className: "search_title",
                        children: [
                          d.jsx("img", { src: j5, alt: "" }),
                          d.jsx("p", { children: "جستجوهای پرطرفدار" }),
                        ],
                      }),
                      d.jsx("div", {
                        className: "slider1",
                        children: d.jsx(yn, {
                          navigation: !0,
                          modules: [zr, Wn],
                          slidesPerView: 4,
                          className: "mySwiper",
                          children:
                            e == null
                              ? void 0
                              : e.map((s) =>
                                  d.jsx(d.Fragment, {
                                    children: d.jsxs(
                                      Ut,
                                      {
                                        children: [
                                          d.jsx("p", { children: s.name }),
                                          d.jsx("img", {
                                            src: s.image,
                                            alt: "",
                                          }),
                                        ],
                                      },
                                      s.id
                                    ),
                                  })
                                ),
                        }),
                      }),
                    ],
                  }),
                  d.jsx("div", {
                    ref: i,
                    children: d.jsx("img", {
                      className: "w-[15px] h-[15px] bg-[red] close",
                      src: rc,
                      alt: "",
                    }),
                  }),
                ],
              }),
              d.jsxs("div", {
                className:
                  "w-[20%]   flex flex-row gap-x-[10px]  justify-start items-center max-sm:w-[50%]",
                children: [
                  d.jsxs("div", {
                    className:
                      "w-[50%] flex flex-row justify-start items-center   border-solid border-l-[1px] border-[lightgrey]",
                    children: [
                      d.jsx("img", { className: "w-[35px]", src: C5, alt: "" }),
                      d.jsx("img", { className: "w-[35px]", src: b5, alt: "" }),
                    ],
                  }),
                  d.jsx(sa, {
                    className:
                      "w-[50%] flex flex-row  justify-start items-center ",
                    to: "/Routerdesign/Productdesign",
                    children: d.jsx("img", {
                      className: "w-[35px]",
                      src: E5,
                      alt: "",
                    }),
                  }),
                ],
              }),
            ],
          }),
          d.jsx(P5, {}),
        ],
      })
    );
  },
  N5 =
    "data:image/svg+xml,%3csvg%20width='136'%20height='36'%20viewBox='0%200%20136%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M112.005%2013C111.423%2013%20111.005%2013.418%20111.005%2014V21C111.005%2022.3628%20110.368%2023%20109.005%2023H100.007V15.5C100.007%2011.2647%2096.7428%208%2092.5083%208H86.0096C85.4045%208%2084.3749%208.01669%2084.01%208.5L82.0104%2011.5C81.6256%2012.0092%2081.8723%2013%2082.5103%2013H92.5083C93.8711%2013%2095.0079%2014.137%2095.0079%2015.5V23H74.0119C73.4294%2023%2073.0121%2023.4176%2073.0121%2024V27C73.0121%2027.5826%2073.4294%2028%2074.0119%2028H78.0111C78.0111%2029.363%2076.3745%2031%2075.0117%2031H66.0134C64.6509%2031%2064.0138%2030.363%2064.0138%2029V19C64.0138%2018.4182%2063.5959%2018%2063.014%2018H60.0146C59.4327%2018%2059.0148%2018.4182%2059.0148%2019V29C59.0148%2033.5%2061.5143%2036%2066.0134%2036H75.0117C79.2462%2036%2083.0102%2032.2353%2083.0102%2028H99.0071C99.588%2028%20100.007%2027.5808%20100.007%2027V26L101.098%2027.3892C101.463%2027.8724%20101.901%2028%20102.506%2028H109.005C113.24%2028%20116.004%2025.2353%20116.004%2021V14C116.004%2013.418%20115.586%2013%20115.004%2013H112.005ZM105.006%2031C104.424%2031%20104.006%2031.4176%20104.006%2032V35C104.006%2035.5826%20104.424%2036%20105.006%2036H113.004C113.587%2036%20114.004%2035.5826%20114.004%2035V32C114.004%2031.4176%20113.587%2031%20113.004%2031H105.006ZM87.0094%2031C86.4271%2031%2086.0096%2031.4176%2086.0096%2032V35C86.0096%2035.5826%2086.4271%2036%2087.0094%2036H90.5087C91.091%2036%2091.5085%2035.5826%2091.5085%2035V32C91.5085%2031.4176%2091.091%2031%2090.5087%2031H87.0094ZM120.003%208C119.421%208%20119.003%208.41803%20119.003%209V12C119.003%2012.5818%20119.421%2013%20120.003%2013H129.001C130.364%2013%20131.001%2013.637%20131.001%2015V21C131.001%2022.3628%20130.364%2023%20129.001%2023H120.003C119.421%2023%20119.003%2023.4178%20119.003%2024V27C119.003%2027.582%20119.421%2028%20120.003%2028H129.001C133.236%2028%20136%2025.2353%20136%2021V15C136%2010.7647%20133.236%208%20129.001%208H120.003ZM42.5179%208L47.5664%201.49549C48.0588%200.9%2047.6354%200%2046.8626%200H43.0217C42.41%200%2041.83%200.273083%2041.44%200.744663L33.0198%2011.5C32.4465%2012.1935%2032.6198%2013%2033.5197%2013H45.0175C47.8788%2013%2050.0165%2015.1381%2050.0165%2018V23H30.0203C28.7378%2023%2028.0207%2022.3453%2028.0207%2021V5C28.0207%204.41823%2027.6026%204%2027.0209%204H24.0215C23.4396%204%2023.0217%204.41823%2023.0217%205V21C23.0217%2025.5%2026.521%2028%2031.0201%2028H54.0157C54.5966%2028%2055.0155%2027.5808%2055.0155%2027V18C55.0155%2012.2657%2050.7505%208%2045.0175%208H42.5179ZM16.023%204C15.4414%204%2015.0232%204.41823%2015.0232%205V21C15.0232%2022.3632%2014.3866%2023%2013.0236%2023H2.02571C1.44386%2023%201.0259%2023.4182%201.0259%2024V27C1.0259%2027.5822%201.44386%2028%202.02571%2028H13.0236C17.5227%2028%2020.0223%2025.5%2020.0223%2021V5C20.0223%204.41823%2019.6043%204%2019.0224%204H16.023ZM3.84313%2018.7288L0.026095%205C-0.130803%204.44289%200.44723%204%201.0259%204H3.68383C4.21517%204%204.7962%204.23056%204.94037%204.74232L9.04094%2018.6329C9.19664%2019.1859%208.84274%2019.6112%208.26844%2019.6112H5.00863C4.46615%2019.6112%203.99009%2019.2507%203.84313%2018.7288Z'%20fill='%23EF394E'/%3e%3c/svg%3e",
  A5 =
    "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='64px'%20height='64px'%20viewBox='0%200%2024.00%2024.00'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20transform='matrix(-1,%200,%200,%201,%200,%200)rotate(270)'%20stroke='%23000000'%20stroke-width='0.00024000000000000003'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.624'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.29289%204.29289C8.68342%203.90237%209.31658%203.90237%209.70711%204.29289L16.7071%2011.2929C17.0976%2011.6834%2017.0976%2012.3166%2016.7071%2012.7071L9.70711%2019.7071C9.31658%2020.0976%208.68342%2020.0976%208.29289%2019.7071C7.90237%2019.3166%207.90237%2018.6834%208.29289%2018.2929L14.5858%2012L8.29289%205.70711C7.90237%205.31658%207.90237%204.68342%208.29289%204.29289Z'%20fill='%23A1A3A8'/%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.29289%204.29289C8.68342%203.90237%209.31658%203.90237%209.70711%204.29289L16.7071%2011.2929C17.0976%2011.6834%2017.0976%2012.3166%2016.7071%2012.7071L9.70711%2019.7071C9.31658%2020.0976%208.68342%2020.0976%208.29289%2019.7071C7.90237%2019.3166%207.90237%2018.6834%208.29289%2018.2929L14.5858%2012L8.29289%205.70711C7.90237%205.31658%207.90237%204.68342%208.29289%204.29289Z'%20fill='%23A1A3A8'/%3e%3c/g%3e%3c/svg%3e",
  M5 =
    "data:image/jpeg;base64,UklGRroLAABXRUJQVlA4WAoAAAAQAAAA/wAA/wAAQUxQSKABAAABkFDbttw2F8KD8KAIwofwGUQM/BlYDCQGDgNBkBlcCA/CS1sPkjLczoqICcDWVvpxJvNLHss8ts7wjq0MTAE5Fnsf3SVSx7Hszk6RYrL6nuwUKShP+6lMUVn34XMKe/EdvERKG3UrO6e85238mgIvvoEzJaav5kyR6Ss5U2b6Ks4Umr7GNaVe7Llzin1+qqbc/RMeeoU/dknB54dqSl4foWa0e6cUvd1xqhZ2q6bs7RZ1ixslhe9+mJS7ALBUPgwo0mUBJu0GgNoRluJbp15p6vWTeuOs3ryox5AvD/8f/j/8f/j/8P/h/8P/h/8P/x/+P/z/N0GqF/Its3rzpN7Yq9eKep2pZ6B2BAbtRqBoVwAL6QzAq3IjAHTKlR8QuhE3m271loVq9FtoqjXcNWpGPFg1q49gVuyChz30Cn8MvV4Vzw5qDXjaFq2uWNGpFH0NOHWiY12nSnSs7dSIjvV9Uejq2HTQZzBsXEOb6LG9vyozO3ZZqQordtuoSDTDjr1SjWiGvZdJiLh0eJdWJirAoRjesXVtnJf4mpHz2BfD1lZQOCD0CQAAsDYAnQEqAAEAAT4ZDIVBoQSKiQUEAGEsrdwuqiECA/sX5O+ExJ3lX4ofsl/weiS017b/r1/gPdA8Vo83oj6s/Z/yG/sHaA8wD+AfwX+l/1j9eP7J3D/MB/Lv6F/fP9D78/oR/0nqAf17+4etV/kfYA9AD9e/Sk/2f+S+B79k/+1/gPgF/jX84+8T9////4gHoAepf1o/tnaT/PfyAtRP1o/Cf0XcOfQH/iv9u/Jn8kOPE4h/Kv8v+XtyCnRf3r/h/4D8t/Zf+Of3H/i/4j4BP41/Nf9n/ce1r6F364BRdZtGqXg3BuDbbzkM8rpSyxM5AC6fE+J8T4l6WYRNXZOydk7J2TsnZOydk7J2TsnZOydk7J2TsnZOydk7J2TsnZOydir76GyPIJTeJ0ARpQWxpm3B8DYP2p9lwr0TWrZOjQyWHeVep3NLOHdk/FfRA+YM2VBHx7+HES7ThJ2oQ22gQLo1ecVLr5oLqmxVb7SxCfX3jRk3Jt/0vlEvFabh1fdcyUvWPLb0be4vtk7J2TsnZOydk7J2TsnZOydk7J2TsnZMZKfE+J8T4mKCEuQ8/dIahB4UBAuydkxYFgtQDsAA/v/rWkv/Dj0kPkv0GWtVG1sZ7yaUG+g8o44iVj/O//jiaR3H56DJ1AIno4skESASdYj0goMZf/mIRO5ngyqDTIWq8edW06nW9tumHSLgBwW638/wkk1j4as+hXIQi2ax4zLopxsm/QstlWazFpMamzFFReyMWuTyf9nXjUm/CB29yoQKAEUulOg/Lyt1QyuTLw0+/8rVM8J/5h5wXMBfrJ69f//09LM/mN/+DcBHVIE/JEcVFSUnNnst9o9LvH8gBkABsRabBTzJPI2+Y1fi8zXhZ1XI+6Jc/c3MeVI52jqtY/iR/FTQoAAAAAAAxfpWLe9ho+JE2GzCL8wRE2CnozEt+yl42Qg/Cevfzp7mkmCjEJzUpl27RFC+17i7P7poXdXxlBnj9PGr9nJ9TdIN90T1/yiSjTc0O63OsVkq1Qdrn5xZo+TLusXwebb9Kq9+8lRXjSrIfQu9TecBYrXkK9/LsdeRfIBoO42J+IJEvMNTm1gWy+rMa4OgcEK7zpzEdg/+rU3ZjizzsNNNXWFjDczhIj/NUEZt1Vih2xY5Hi+EcxT5XJ2Mks3/EO7sI3JbkjqMZHDUm/Seg+prUSngqWXSlVqdu+UKUKyTnWBpZfbyhfvCbkEbl/jq1KWOgjumyrph8aAHOZQlM/yTf9Db+UVJ/x+bPIWkki8Ji/jiTetB3zjbyrsHg3YGfS0AuNioNHyW8cW2j7Yy1bhx9Fv+rdL+g1Utu9IOpIHe+Mj/zngnjzxZDp+e88jsX0pdf2dbef/NxmftfD2OnydoCnIhabKNmyUIOZMNq2XT3pTvTTe+vfJgVqkPaiwtWhdH7Y57FddTm57vSaJjFyxcIU8yX++QcMM5C8QW2lPxZ1i1mISwjsKPi4yYO6HrJHERNtWFsQWVHHjRfe+048Q36y4oWSpTWGQpYQTJrCZR9E15NVNmLkhtAIUUP/iXr986v/lyf/vjA5AIUl1nf6VrL7Si/MtQhrtbnJ+mg1aiIDW99QI4YaJppN9meI5zy0Reajw8sBFVn2txhZ9Uk796cwm8i2GgL9aNNuf/73HFEZIO9OSVDRhd6fOEUy/xqBauGBzGZnz6RC8aLTKRTVAKjAaJLTbNPEeODcIa95+1C/Jts2N1zofK65sJsnJCRoKLZzuz1P7Ce/NTVogc1cOVJ5nWoIdx4jsW/tFl8PNv/+QOhYvEp0QASXwiz00fgkV+rfwkCO7acW3rq1Jp9HJvfNldXL4IEWhtVUS3B+lpnhQr4EPcivLiEnCRcgYfzC93hrSv3i+9O0T7/rEiNBH6xG4H9TYsXdtH/mzJicGHMPMZ9brtooq8ICxKBAOFN/SqK+DpnHbXvh73qo2bMs6V/4hZTnCTnobvgS7oAtbWn6jTO7ZgYsfO1CdOF2nV2DzyA6jC/4v5UL7Id4r3Xl3MWfbsv/53WlcuTyNxzQ/sBaMTK6kz1IKQl94nJ1pjXIvdNbVBb+IN6PzisgbKzheOppZ2Sa2QMkS/5F9m8L5HTeJ+fwdz+Zl6aV+mKHJgoMI+8ImFm+48uwhVNiXM0LZ5An4LePQ+y6g8EPmdEKv0+AJiYlKpr4d9//+aZblc5O/ZUylGTcqWRxvfkXvQ6qEGRr7W/VDYK0QAYVAkpbkE/kCp/Lg+d3yGcTs3vtIE+BoGfVTu7Jq4D/1DCCZIZ1RJrqDG9mkuZuNxn15xCHIItSUHH1sPjaZMIfAJoxtakVSkmLtWDV0uofG5K3joIDyjKGsGYh9MZ3Nb7n6mVyL5epRBdbXOXfkIePSLRiNX+cJxFEosvrHWoGBaldb/EhIfABmlzAnpLheARhSUK5BHwCv2bWIIdXmoc5X9qTqhsxYlBLyRhac/AmdP6pqNkF2F6J5X53zb3gjAbWK7x9NiLgSNIGpAoRub3yhEW0PX9ujATW3sSaACE9Yo3296SlAgKlRYKhQwEKVwwCfPkfBmhvmjmZ0HyjDdKsCZjW6pzRg0PMn2w1xhgYPfiVk/A+ElxhEZ2RCrBkwx84UjV/4v9Vw6KH48haXq8fR+bxKNQQFBr/c1CpUZgSGp3YgGLJdInyL2i1Z2qzmecXI+SoS/KePnsOHXgUzgVQj1thT+aihIDiMVvPiNrJ/b/fB+22CNaKAD+0oCKk8vzuuAdM8JmwN0i7qW1kLZ/fbCem58UFL6W8/N3H8Xp+s88QUlOVP3gkawqzZEkwGv8wxmo5ZzabO8amnljh+yPfYREhNf7C1jHXPc+Bl0d3r4igsIf17tK4OifBoi//863sSitBrthgIhn766IUtqTJQb7biQY5nX97RAZ27c/tMvdGTYJidt2rD9Wt92Yai8V3HtGz3iRlCRCAtxQSRb1ErM/BrNeEXsdN8g+jTLUGzeWNG9R+KS7FopYv3A7Yev3aXuP72UcX64kcv1f7/iOu/bBJIxy7nXCR1FKBqcKcQyAEcSPw+Wq0ZngkuVTXM3nHvLOGveqnK2p5eEBq2Xq2s6us8zFb5iMDoMR65Tcwk1br/Ip7HAAAAAAF7lKUoGThu70J2rDxdEinYIhyP34mpDxa0bSBvfa4f+W4WIg2IN+6ZU8uDnLHHOcWnOSPpPdVIBf03wtYaOlnRF1rij+pO30O1kkzh//QNY0Ewtt8Px/ccYmSE/ar3avledLvUDspJuVJdg2+Ii5vHtYc8jsLJejCXCRTonSpWerEbfl7uM9UazHQqT/lYEKjp4/vndqDub9QYBfw3ZbhFfjwbbRJpOhDQwdowBxAibvgXqZ98CwXKbJSh4Zy51wrx3dtSID/fgp3lBWH0q+K/i70AAAA==",
  I5 = "/assets/coffe-bazzar-BBOIT5oM.svg",
  O5 = "/assets/myket-BrSQh8Y_.svg",
  _5 = "/assets/sib-app-DiBb1ISk.svg",
  Q0 = "/assets/rezi%20(1)-BG59RS7I.jpg",
  R5 = "/assets/kasbokar-2kIXV0i8.jpg",
  z5 = () => {
    const [e, t] = T.useState([]),
      [n, r] = T.useState([]),
      [i, s] = T.useState([]),
      [a, l] = T.useState([]),
      u = async () => {
        try {
          let g = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          t(g.data.footer1);
          let w = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          r(w.data.footer2);
          let C = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          s(C.data.footer3);
          let b = await te(
            "https://raw.githubusercontent.com/kraken-ship/digikala_react/main/assets/db.json"
          );
          l(b.data.footer4);
        } catch (g) {
          console.log(g.message);
        }
      };
    T.useEffect(() => {
      u();
    }, []);
    const m = T.useRef(null);
    T.useEffect(() => {
      m.current.addEventListener("click", function () {
        document.querySelector(".moref").classList.add("nonef"),
          document.querySelector(".more_buttonf").classList.add("activefooter"),
          document.querySelector(".lessf").classList.remove("nonef");
      });
    }, []);
    const v = T.useRef(null);
    return (
      T.useEffect(() => {
        v.current.addEventListener("click", function () {
          document.querySelector(".lessf").classList.add("nonef"),
            document
              .querySelector(".more_buttonf")
              .classList.remove("activefooter"),
            document.querySelector(".moref").classList.remove("nonef");
        });
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsxs("footer", {
          className:
            "w-[100%]   border-solid border-t-[#bbb8b85a] border-[0.1px]",
          children: [
            d.jsxs("div", {
              className:
                "w-[100%]  pr-[20px] p-[20px] pt-[40px] flex flex-col justify-start items-center gap-y-[40px]",
              children: [
                d.jsxs("div", {
                  className:
                    "w-[100%]   flex flex-row justify-between items-start",
                  children: [
                    d.jsxs("div", {
                      className:
                        "flex flex-col justify-start items-start gap-y-[20px]",
                      children: [
                        d.jsx("img", {
                          className: "max-sm:w-[100px]",
                          src: N5,
                          alt: "",
                        }),
                        d.jsxs("div", {
                          className:
                            "flex flex-row gap-x-[20px] justify-start items-center max-sm:gap-x-[0px]",
                          children: [
                            d.jsx("p", {
                              className:
                                "text-[12px] text-[grey] font-normal font-[yekanm] border-[solid] border-l-[0.3px] pl-[23px] border-l-[#bbb8b85a] max-sm:text-[5px]",
                              children: "تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱",
                            }),
                            d.jsx("p", {
                              className:
                                "text-[12px] text-[grey] font-normal font-[yekanm] border-[solid] border-l-[0.3px] pl-[23px] border-l-[#bbb8b85a] max-sm:text-[5px]",
                              children: "۰۲۱-۹۱۰۰۰۱۰۰",
                            }),
                            d.jsx("p", {
                              className:
                                "text-[12px] text-[grey] font-normal font-[yekanm] max-sm:text-[5px]",
                              children:
                                "۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم",
                            }),
                          ],
                        }),
                      ],
                    }),
                    d.jsxs("a", {
                      className:
                        "p-[10px] pl-[15px] pr-[15px] border-[#bbb8b85a] border-solid border-[0.3px] rounded-[10px] flex flex-row justify-start items-center gap-x-[10px] max-sm:p-[0px] max-sm:pr-[10px] max-sm:pl-[10px]",
                      href: "#",
                      children: [
                        d.jsx("p", {
                          className:
                            "text-[12px] text-[grey] font-normal font-[yekanm] max-sm:text-[8px]",
                          children: "بازگشت به بالا",
                        }),
                        d.jsx("img", {
                          className: "w-[20px] max-sm:w-[10px]",
                          src: A5,
                          alt: "",
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsx("div", {
                  className:
                    "w-[100%]  pl-[120px] pr-[120px]   gap-x-[120px] flex flex-row justify-start items-start max-md:pl-[50px] max-md:pr-[50px] max-md:gap-x-[50px] max-md:lg-[50px] max-lg:pr-[50px] max-lg:gap-x-[50px] max-sm:pr-[10px] max-sm:pl-[10px] max-sm:flex-col max-sm:gap-y-[20px]",
                  children:
                    e == null
                      ? void 0
                      : e.map((g) =>
                          d.jsx(d.Fragment, {
                            children: d.jsxs(
                              "div",
                              {
                                className:
                                  "w-[100%]  gap-y-[10px] flex flex-col justify-start items-center",
                                children: [
                                  d.jsx("img", { src: g.image, alt: "" }),
                                  d.jsx("p", {
                                    className:
                                      "text-[12px] text-[grey] font-normal font-[yekanm] max-md:text-center max-lg:text-center",
                                    children: g.name,
                                  }),
                                ],
                              },
                              g.id
                            ),
                          })
                        ),
                }),
                d.jsxs("div", {
                  className:
                    "w-[100%]   gap-x-[80px] flex flex-row justify-start items-start max-md:gap-x-[20px] max-sm:flex-col max-sm:items-center max-sm:gap-y-[20px]",
                  children: [
                    n == null
                      ? void 0
                      : n.map((g, w) =>
                          w === 0
                            ? d.jsx(d.Fragment, {
                                children: d.jsxs(
                                  "div",
                                  {
                                    className:
                                      "w-[100%]  flex flex-col justify-start items-start gap-y-[15px] max-sm:items-center",
                                    children: [
                                      d.jsx("p", {
                                        className:
                                          "text-[18px] text-[black] font-normal font-[yekanm] max-md:text-[12px] max-lg:text-[12px]",
                                        children: g.title,
                                      }),
                                      d.jsx("a", {
                                        href: "#",
                                        children: d.jsx("p", {
                                          className:
                                            "text-[14px] text-[grey] font-normal font-[yekanm] max-md:text-[10px] max-lg:text-[10px]",
                                          children: g.name1,
                                        }),
                                      }),
                                      d.jsx("a", {
                                        href: "#",
                                        children: d.jsx("p", {
                                          className:
                                            "text-[14px] text-[grey] font-normal font-[yekanm] max-md:text-[10px] max-lg:text-[10px]",
                                          children: g.name2,
                                        }),
                                      }),
                                      d.jsx("a", {
                                        href: "#",
                                        children: d.jsx("p", {
                                          className:
                                            "text-[14px] text-[grey] font-normal font-[yekanm] max-md:text-[10px] max-lg:text-[10px]",
                                          children: g.name3,
                                        }),
                                      }),
                                      d.jsx("a", {
                                        href: "#",
                                        children: d.jsx("p", {
                                          className:
                                            "text-[14px] text-[grey] font-normal font-[yekanm] max-md:text-[10px] max-lg:text-[10px]",
                                          children: g.name4,
                                        }),
                                      }),
                                      d.jsx("a", {
                                        href: "#",
                                        children: d.jsx("p", {
                                          className:
                                            "text-[14px] text-[grey] font-normal font-[yekanm] max-md:text-[10px] max-lg:text-[10px]",
                                          children: g.name5,
                                        }),
                                      }),
                                      d.jsx("a", {
                                        href: "#",
                                        children: d.jsx("p", {
                                          className:
                                            "text-[14px] text-[grey] font-normal font-[yekanm] max-md:text-[10px] max-lg:text-[10px]",
                                          children: g.name6,
                                        }),
                                      }),
                                    ],
                                  },
                                  g.id
                                ),
                              })
                            : w === 1
                            ? d.jsx(d.Fragment, {
                                children: d.jsxs(
                                  "div",
                                  {
                                    className:
                                      "w-[100%]  flex flex-col justify-start items-start gap-y-[15px] max-sm:items-center",
                                    children: [
                                      d.jsx("p", {
                                        className:
                                          "text-[18px] text-[black] font-normal font-[yekanm] max-md:text-[12px] max-lg:text-[12px]",
                                        children: g.title,
                                      }),
                                      d.jsx("a", {
                                        href: "#",
                                        children: d.jsx("p", {
                                          className:
                                            "text-[14px] text-[grey] font-normal font-[yekanm] max-md:text-[10px] max-lg:text-[10px]",
                                          children: g.name1,
                                        }),
                                      }),
                                      d.jsx("a", {
                                        href: "#",
                                        children: d.jsx("p", {
                                          className:
                                            "text-[14px] text-[grey] font-normal font-[yekanm] max-md:text-[10px] max-lg:text-[10px]",
                                          children: g.name2,
                                        }),
                                      }),
                                      d.jsx("a", {
                                        href: "#",
                                        children: d.jsx("p", {
                                          className:
                                            "text-[14px] text-[grey] font-normal font-[yekanm] max-md:text-[10px] max-lg:text-[10px]",
                                          children: g.name3,
                                        }),
                                      }),
                                      d.jsx("a", {
                                        href: "#",
                                        children: d.jsx("p", {
                                          className:
                                            "text-[14px] text-[grey] font-normal font-[yekanm] max-md:text-[10px] max-lg:text-[10px]",
                                          children: g.name4,
                                        }),
                                      }),
                                      d.jsx("a", {
                                        href: "#",
                                        children: d.jsx("p", {
                                          className:
                                            "text-[14px] text-[grey] font-normal font-[yekanm] max-md:text-[10px] max-lg:text-[10px]",
                                          children: g.name5,
                                        }),
                                      }),
                                    ],
                                  },
                                  g.id
                                ),
                              })
                            : d.jsx(d.Fragment, {
                                children: d.jsxs(
                                  "div",
                                  {
                                    className:
                                      "w-[100%]  flex flex-col justify-start items-start gap-y-[15px] max-sm:items-center",
                                    children: [
                                      d.jsx("p", {
                                        className:
                                          "text-[18px] text-[black] font-normal font-[yekanm] max-md:text-[12px] max-lg:text-[12px]",
                                        children: g.title,
                                      }),
                                      d.jsx("a", {
                                        href: "#",
                                        children: d.jsx("p", {
                                          className:
                                            "text-[14px] text-[grey] font-normal font-[yekanm] max-md:text-[10px] max-lg:text-[10px]",
                                          children: g.name1,
                                        }),
                                      }),
                                      d.jsx("a", {
                                        href: "#",
                                        children: d.jsx("p", {
                                          className:
                                            "text-[14px] text-[grey] font-normal font-[yekanm] max-md:text-[10px] max-lg:text-[10px]",
                                          children: g.name2,
                                        }),
                                      }),
                                      d.jsx("a", {
                                        href: "#",
                                        children: d.jsx("p", {
                                          className:
                                            "text-[14px] text-[grey] font-normal font-[yekanm] max-md:text-[10px] max-lg:text-[10px]",
                                          children: g.name3,
                                        }),
                                      }),
                                    ],
                                  },
                                  g.id
                                ),
                              })
                        ),
                    d.jsxs("div", {
                      className:
                        "w-[100%]   flex flex-col justify-start items-start gap-y-[15px] max-sm:items-center",
                      children: [
                        d.jsx("p", {
                          className:
                            "text-[16px] text-[black] font-normal font-[yekanm] max-md:text-[12px] max-lg:text-[12px]",
                          children: "همراه ما باشید!",
                        }),
                        d.jsx("div", {
                          className:
                            "w-[100%] flex flex-row justify-start items-center gap-x-[24px] max-sm:justify-center",
                          children:
                            i == null
                              ? void 0
                              : i.map((g) =>
                                  d.jsx(d.Fragment, {
                                    children: d.jsx(
                                      "a",
                                      {
                                        className:
                                          "w-[50px] max-md:w-[25px] max-lg:w-[25px]",
                                        href: "#",
                                        children: d.jsx("img", {
                                          src: g.image,
                                          alt: "",
                                        }),
                                      },
                                      g.id
                                    ),
                                  })
                                ),
                        }),
                        d.jsx("a", {
                          href: "#",
                          children: d.jsx("p", {
                            className:
                              "text-[16px] text-[black] font-normal font-[yekanm] max-md:text-[10px] max-lg:text-[10px]",
                            children: "با ثبت ایمیل، از تخفیف‌ها با‌خبر شوید",
                          }),
                        }),
                        d.jsxs("div", {
                          className:
                            "w-[100%]   flex flex-row pl-[20px]  justify-between items-center ",
                          children: [
                            d.jsx("input", {
                              className:
                                "w-[70%] bg-[#F0F0F1] p-[15px] text-[15px] font-normal text-[grey] font-[yekanm] rounded-[8px] max-md:p-[10px] max-md:text-[10px] max-lg:p-[10px] max-lg:text-[10px]",
                              type: "text",
                              placeholder: "ایمیل شما",
                            }),
                            d.jsx("button", {
                              className:
                                "w-[25%] bg-[#F0F0F1] p-[15px]  rounded-[8px] max-md:p-[10px] max-lg:p-[10px] ",
                              type: "text",
                              placeholder: "ایمیل شما",
                              children: d.jsx("p", {
                                className:
                                  "text-[15px] font-normal text-[white] font-[yekanm] max-md:text-[10px] max-lg:text-[10px]",
                                children: "ثبت",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className:
                    "w-[100%]  bg-[#3C4B6D] p-[20px] flex flex-row justify-between items-center rounded-[10px] max-sm:flex-col max-sm:justify-start max-sm:items-center max-sm:gap-y-[20px]",
                  children: [
                    d.jsxs("div", {
                      className:
                        "w-[20%] flex flex-row justify-start items-center gap-x-[10px] max-lg:w-[40%] max-sm:w-[100%] max-sm:justify-center",
                      children: [
                        d.jsx("img", {
                          className: "w-[50px]",
                          src: M5,
                          alt: "",
                        }),
                        d.jsx("p", {
                          className:
                            "text-[18px] text-white font-normal font-[yekanm] max-lg:text-[14px]",
                          children: " دانلود اپلیکیشن دیجی‌کالا",
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className:
                        "w-[40%] flex flex-row justify-start items-center gap-x-[30px] max-lg:w-[55%] max-md:gap-x-[15px] max-sm:w-[100%] max-sm:justify-center",
                      children: [
                        d.jsx("img", {
                          className: "w-[25%] rounded-[5px]",
                          src: I5,
                          alt: "",
                        }),
                        d.jsx("img", {
                          className: "w-[25%] rounded-[5px]",
                          src: O5,
                          alt: "",
                        }),
                        d.jsx("img", {
                          className: "w-[25%] rounded-[5px]",
                          src: _5,
                          alt: "",
                        }),
                        d.jsx("button", {
                          className:
                            "w-[7.5%] bg-[#F0F0F1] p-[5px]  rounded-[5px] flex justify-center ",
                          type: "text",
                          children: d.jsx("img", { src: K2, alt: "" }),
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className:
                    "w-[100%]  pt-[40px] pb-[40px] border-solid border-t-[#bbb8b85a] border-b-[#bbb8b85a] border-t-[0.1px] border-b-[0.1px] flex flex-row justify-start items-start gap-x-[40px] max-sm:flex-col max-sm:justify-start max-sm:items-center max-sm:gap-y-[20px] ",
                  children: [
                    d.jsxs("div", {
                      className:
                        "w-[70%]   flex flex-col justify-start items-start gap-y-[20px] max-sm:w-[100%] max-sm:items-center",
                      children: [
                        d.jsx("p", {
                          className:
                            "text-[18px] text-[grey] font-normal font-[yekanm] max-sm:text-center max-sm:text-[12px]",
                          children:
                            "فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین",
                        }),
                        d.jsx("p", {
                          className:
                            "text-[12px] text-[grey] font-normal font-[yekanm] max-sm:text-center max-sm:text-[8px]",
                          children:
                            "یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد. یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌ اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به دستشان می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده کالا،‌ مقصد کالا",
                        }),
                        d.jsx("button", {
                          ref: m,
                          className: "moref",
                          children: d.jsx("p", {
                            className:
                              "text-[12px] text-[aqua] font-normal font-[yekanm] max-sm:text-center max-sm:text-[8px]",
                            children: "بیشتر",
                          }),
                        }),
                        d.jsx("p", {
                          className: "more_buttonf",
                          children:
                            "و همچنین نوع کالا در اختیار کاربران خود قرار می‌دهد. هر یک از روش های ارسال دیجی کالا شرایط و ویژگی‌های خاص خود را دارند که ممکن است گاهی برای کاربران جدید، مبهم و پیچیده به نظر برسند. برای آگاهی بیشتر مشتریان از خدمات دیجی‌کالا، این فروشگاه اینترنتی در بخشی از وب‌سایت خود راهنمای کاملی از شیوه‌‌های ارسال را به صورت ساده و به دور از پیچیدگی، قرار داده است که شامل 8 نوع ارسال کالا به روش‌های زیر است: ارسال امروز، دریافت حضوری، دریافت از گنجه، ارسال توسط فروشنده، ارسال عادی، ارسال کالاهای بزرگ، سنگین و فوق سنگین، ارسال سریع سوپرمارکتی، ارسال با پست کدام محصولات در دیجی‌کالا قابل سفارش هستند؟ تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته و تمامی شبانه روز دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم که امکان ارسال امروز برای آن ها وجود دارد. کالای دیجیتال انواع گوشی موبایل از برندهای مختلفی مثل آیفون،  گوشی سامسونگ، گوشی نوکیا، گوشی شیائومی، گوشی هواوی، و...، انواع کنسول بازی ps4 و ps5، انواع تبلت‌های پرطرفدار مثل تبلت سامسونگ نوت 10، انواع هندزفری مثل هندزفری بی سیم، تلوزیون از برندهای مختلف مثل تلویزیون سامسونگ، سونی و...، انواع مانیتور، کیس، کیبورد، مودم از برندهای مختلف مثل مودم ایرانسل، آنتن و ... تنها بخشی از محصولاتی هستند که زیر مجموعه کالای دیجیتال در دیجی‌کالا قرار دارند. خودرو، ابزار و تجهیزات صنعتی انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا، کیا و...، موتور سیکلت از برندهایی مثل کویر موتور و...، لوازم جانبی خودرو مثل سیستم صوتی تصویر، ضبط و...، لوازم یدکی مثل دیسک و صفحه کلاج و... و لوازم مصرفی خودرو مثل کفپوش سانا در این گروه قرار می‌گیرند. مد و پوشاک محصولاتی مثل انواع لباس مثل لباس مجلسی زنانه و مردانه، لباس راحتی، لباس ورزشی، اکسسوری، کیف، کفش، عینک آفتابی، لباس زیر، شال و روسری و... جزو مواردی هستند که می‌توانید آن‌ها را از برندهای مطرح ایرانی و خارجی موجود در دیجی کالا مثل آدیداس، نایکی، دبنهامز، آلدو، درسا و... خریداری کنید. اسباب بازی کودک و نوزاد در این دسته از کالاهای دیجی‌کالا، انواع لوازم بهداشتی و حمام کودک و نوزاد، انواع پوشاک و کفش، تبلت، اسباب‌بازی، لوازم اتاق خواب کودک، لوازم ایمنی، لوازم شخصی و غذا خوری و ... قرار می‌گیرد تا خرید را برای پدر و مادرها به کاری سریع و آسان تبدیل کند. کالاهای سوپر مارکتی هر چیزی از مواد خوراکی که به آن نیاز دارید، در سوپرمارکت دیجی‌کالا پیدا می‌شود، محصولات پرطرفداری مثل کره بادام‌زمینی، عسل، سس، قهوه، زعفران، شکلات، انواع نان و ... از برندهای معتبر و معروفی مثل نستله، نوتلا، استارباکس، مزمز، چی توز و ... همگی در اختیار شما هستند و تا رسیدن به آشپزخانه شما تنها چند کلیک فاصله دارند. زیبایی و سلامت انواع لوازم آرایش مثل لاک، رنگ مو، لوازم آرایش لب، چشم، صورت و... همگی در دیجی‌کالا موجود هستند. همچنین محصولات بهداشتی مثل انواع شامپو، کرم، ماسک صورت، ضد تعریق، ماسک مو  و...، انواع لوازم شخصی برقی، ست هدیه، بهترین انواع عطر و اسپری، انواع زیورآلات طلا و نقره مثل سرویس طلا، سرویس نقره و... به همراه وسایل مراقبت شخصی طبی در گروه زیبایی و سلامت دیجی‌کالا قرار می‌گیرد. در این بخش برندهای مطرحی مثل اسنس، پنبه ریز، سینره و... حضور دارند. خانه و آشپزخانه یکی از متنوع‌ترین بخش‌های دیجی‌کالا، بخش لوازم خانه و آشپزخانه است که از محصولاتی مثل صندلی گیمینگ در بخش صندلی‌ها گرفته تا انواع مبل راحتی، انواع آبگرمکن مثل آبگرمکن بوتان، لباسشویی‌های متنوع مثل انواع لباسشویی اسنوا، شیرآلات مختلف مثل شیرآلات قهرمان و...، ظروف و همچنین لوازم برقی آشپزخانه مثل توستر و... را شامل می‌شود و امکان خریدی عالی را برای مشتریان فراهم کرده است. در بخش لوازم خانگی دیجی‌کالا، برندهای معتبری مثل تفال، اخوان، فیلیپس، ال جی، اسنوا، جی پلاس و... حضور دارند. کتاب، لوازم تحریر و هنر بخش هنر، کتاب، رمان و لوازم تحریر دیجی‌کالا نیز یکی از متنوع‌ترین بخش‌های این فروشگاه اینترنتی است. انواع کتاب و مجله، کتاب زبان، بازی، لوازم تحریر با طرح‌های مختلف مانند دختر کفشدوزکی، سازهایی مثل پیانو، سنتور، هنگ درام  و... با بهترین قیمت‌ها و از بهترین برندها در دسترس شما قرار دارند. ورزش و سفر هر نوع وسیله و لباس ورزشی که فکرش را کنید، انواع وسایل کمپینگ و کوهنوردی، ساک و قمقمه ورزشی و... در این بخش قرار می‌گیرند. همچنین شما می‌توانید وسایل مد نظر خود را بر اساس نوع ورزش (آبی، هوازی، بدنسازی و...) در دسته‌بندی‌های دیجی‌کالا پیدا کنید. محصولات بومی و محلی و در آخر دیجی‌کالا از طریق به فروش رساندن محصولات بومی و سنتی متفاوتی مثل انواع خوراکی، گلیم و گبه، ابزار و ... تلاش کرده تا بین هنر ایرانی و متقاضیان آن کوتاه‌ترین راه را پیدا کند. در این بخش شما می‌توانید انواع محصولات از جمله ظروف زیبای مخصوص به سفره هفت‌سین  و پذیرایی از مهمانان در روزهای نوروز، انواع آیینه و شمعدان و هر آن چیزی را که برای خلق زیبایی در روزهای بهاری به آن نیاز دارید، با قیمت مناسب و تنوع بسیار بالا انتخاب کنید. همچنین در صفحه برچسب ها، امکان مشاهده و خرید انواع محصولات با طرح های بومی وجود دارد.  دیجی‌کالا همچنین برای اینکه حال و هوای عید را به اعضای خود هدیه کند، تقویم ۱۴۰۱، انواع ایده عکس پروفایل عید نوروز، آهنگ‌های عید نوروز و موزیک‌های شاد بهاری، وسایل مربوط به خانه‌تکانی و انواع لباس های عید  را برای شما فراهم کرده است تا بتوانید در کنار خرید خود، از این حال و هوای تازه نهایت لذت را ببرید.",
                        }),
                        d.jsx("button", {
                          ref: v,
                          className: "lessf nonef",
                          children: d.jsx("p", {
                            className:
                              "text-[12px] text-[aqua] font-normal font-[yekanm]",
                            children: "بستن",
                          }),
                        }),
                      ],
                    }),
                    d.jsxs("div", {
                      className:
                        "w-[30%]  flex flex-row justify-start items-center gap-x-[20px] max-sm:w-[100%]",
                      children: [
                        d.jsx("a", {
                          className:
                            "w-[100%] p-[10px] border-solid border-[1px] border-[grey] rounded-[5px]",
                          href: "#",
                          children: d.jsx("img", { src: Q0, alt: "" }),
                        }),
                        d.jsx("a", {
                          className:
                            "w-[100%] p-[10px] border-solid border-[1px] border-[grey] rounded-[5px]",
                          href: "#",
                          children: d.jsx("img", {
                            className:
                              "w-[100px] h-[110px] max-md:h-[33px] max-lg:h-[58px] max-sm:h-[80px]",
                            src: R5,
                            alt: "",
                          }),
                        }),
                        d.jsx("a", {
                          className:
                            "w-[100%] p-[10px] border-solid border-[1px] border-[grey] rounded-[5px]",
                          href: "#",
                          children: d.jsx("img", { src: Q0, alt: "" }),
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsx("div", {
                  className:
                    "w-[100%]  pr-[200px] pl-[200px] max-md:pr-[50px] max-md:pl-[50px] max-sm:pl-[10px] max-sm:pr-[10px] ",
                  children: d.jsx("p", {
                    className:
                      "text-[12px] text-center text-[grey] font-normal font-[yekanm] max-sm:text-[8px]",
                    children:
                      "برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.",
                  }),
                }),
              ],
            }),
            d.jsx("div", {
              className: "w-[100%]   flex flex-col justify-start items-start ",
              children:
                a == null
                  ? void 0
                  : a.map((g) =>
                      d.jsx(d.Fragment, {
                        children: d.jsxs(
                          "div",
                          {
                            className:
                              "w-[100%]   flex flex-row justify-start items-center",
                            children: [
                              d.jsx("a", {
                                className:
                                  "w-[100%] p-[40px] max-lg:p-[20px] max-md:p-[15px] max-sm:p-[8px] bg-[grey] border-l-[0.3px] border-b-[0.3px] border-solid border-[black] justify-center flex",
                                href: "#",
                                children: d.jsx("img", {
                                  className: "w-[100%]",
                                  src: g.image1,
                                  alt: "",
                                }),
                              }),
                              d.jsx("a", {
                                className:
                                  "w-[100%] p-[40px] max-lg:p-[20px] max-md:p-[15px] max-sm:p-[8px] bg-[grey] border-l-[0.3px] border-b-[0.3px] border-solid border-[black] justify-center flex",
                                href: "#",
                                children: d.jsx("img", {
                                  className: "w-[100%]",
                                  src: g.image2,
                                  alt: "",
                                }),
                              }),
                              d.jsx("a", {
                                className:
                                  "w-[100%] p-[40px] max-lg:p-[20px] max-md:p-[15px] max-sm:p-[8px] bg-[grey] border-l-[0.3px] border-b-[0.3px] border-solid border-[black] justify-center flex",
                                href: "#",
                                children: d.jsx("img", {
                                  className: "w-[100%]",
                                  src: g.image3,
                                  alt: "",
                                }),
                              }),
                              d.jsx("a", {
                                className:
                                  "w-[100%] p-[40px] max-lg:p-[20px] max-md:p-[15px] max-sm:p-[8px] bg-[grey] border-l-[0.3px] border-b-[0.3px] border-solid border-[black] justify-center flex",
                                href: "#",
                                children: d.jsx("img", {
                                  className: "w-[100%]",
                                  src: g.image4,
                                  alt: "",
                                }),
                              }),
                              d.jsx("a", {
                                className:
                                  "w-[100%] p-[40px] max-lg:p-[20px] max-md:p-[15px] max-sm:p-[8px] bg-[grey] border-l-[0.3px] border-b-[0.3px] border-solid border-[black] justify-center flex",
                                href: "#",
                                children: d.jsx("img", {
                                  className: "w-[100%]",
                                  src: g.image5,
                                  alt: "",
                                }),
                              }),
                              d.jsx("a", {
                                className:
                                  "w-[100%] p-[40px] max-lg:p-[20px] max-md:p-[15px] max-sm:p-[8px] bg-[grey] border-l-[0.3px] border-b-[0.3px] border-solid border-[black] justify-center flex",
                                href: "#",
                                children: d.jsx("img", {
                                  className: "w-[100%]",
                                  src: g.image6,
                                  alt: "",
                                }),
                              }),
                              d.jsx("a", {
                                className:
                                  "w-[100%] p-[40px] max-lg:p-[20px] max-md:p-[15px] max-sm:p-[8px] bg-[grey] border-l-[0.3px] border-b-[0.3px] border-solid border-[black] justify-center flex",
                                href: "#",
                                children: d.jsx("img", {
                                  className: "w-[100%]",
                                  src: g.image7,
                                  alt: "",
                                }),
                              }),
                              d.jsx("a", {
                                className:
                                  "w-[100%] p-[40px] max-lg:p-[20px] max-md:p-[15px] max-sm:p-[8px] bg-[grey] border-l-[0.3px] border-b-[0.3px] border-solid border-[black] justify-center flex",
                                href: "#",
                                children: d.jsx("img", {
                                  className: "w-[100%]",
                                  src: g.image8,
                                  alt: "",
                                }),
                              }),
                            ],
                          },
                          g.id
                        ),
                      })
                    ),
            }),
          ],
        }),
      })
    );
  };
var em = { exports: {} };
/*!
 * sweetalert2 v11.12.2
 * Released under the MIT License.
 */ (function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(qt, function () {
    function n(p, o) {
      (o == null || o > p.length) && (o = p.length);
      for (var c = 0, f = Array(o); c < o; c++) f[c] = p[c];
      return f;
    }
    function r(p) {
      if (Array.isArray(p)) return p;
    }
    function i(p) {
      if (Array.isArray(p)) return n(p);
    }
    function s(p, o, c) {
      if (typeof p == "function" ? p === o : p.has(o))
        return arguments.length < 3 ? o : c;
      throw new TypeError("Private element is not present on this object");
    }
    function a(p) {
      if (p === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return p;
    }
    function l(p, o, c) {
      return (
        (o = x(o)),
        R(
          p,
          k() ? Reflect.construct(o, c || [], x(p).constructor) : o.apply(p, c)
        )
      );
    }
    function u(p, o) {
      if (o.has(p))
        throw new TypeError(
          "Cannot initialize the same private elements twice on an object"
        );
    }
    function m(p, o) {
      if (!(p instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    function v(p, o) {
      return p.get(s(p, o));
    }
    function g(p, o, c) {
      u(p, o), o.set(p, c);
    }
    function w(p, o, c) {
      return p.set(s(p, o), c), c;
    }
    function C(p, o, c) {
      if (k()) return Reflect.construct.apply(null, arguments);
      var f = [null];
      f.push.apply(f, o);
      var S = new (p.bind.apply(p, f))();
      return S;
    }
    function b(p, o) {
      for (var c = 0; c < o.length; c++) {
        var f = o[c];
        (f.enumerable = f.enumerable || !1),
          (f.configurable = !0),
          "value" in f && (f.writable = !0),
          Object.defineProperty(p, K(f.key), f);
      }
    }
    function E(p, o, c) {
      return (
        o && b(p.prototype, o),
        Object.defineProperty(p, "prototype", { writable: !1 }),
        p
      );
    }
    function P(p, o) {
      var c = (typeof Symbol < "u" && p[Symbol.iterator]) || p["@@iterator"];
      if (!c) {
        if (Array.isArray(p) || (c = mt(p)) || o) {
          c && (p = c);
          var f = 0,
            S = function () {};
          return {
            s: S,
            n: function () {
              return f >= p.length ? { done: !0 } : { done: !1, value: p[f++] };
            },
            e: function ($) {
              throw $;
            },
            f: S,
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var N,
        F = !0,
        q = !1;
      return {
        s: function () {
          c = c.call(p);
        },
        n: function () {
          var $ = c.next();
          return (F = $.done), $;
        },
        e: function ($) {
          (q = !0), (N = $);
        },
        f: function () {
          try {
            F || c.return == null || c.return();
          } finally {
            if (q) throw N;
          }
        },
      };
    }
    function h() {
      return (
        (h =
          typeof Reflect < "u" && Reflect.get
            ? Reflect.get.bind()
            : function (p, o, c) {
                var f = D(p, o);
                if (f) {
                  var S = Object.getOwnPropertyDescriptor(f, o);
                  return S.get
                    ? S.get.call(arguments.length < 3 ? p : c)
                    : S.value;
                }
              }),
        h.apply(null, arguments)
      );
    }
    function x(p) {
      return (
        (x = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            }),
        x(p)
      );
    }
    function y(p, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (p.prototype = Object.create(o && o.prototype, {
        constructor: { value: p, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(p, "prototype", { writable: !1 }),
        o && A(p, o);
    }
    function k() {
      try {
        var p = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch {}
      return (k = function () {
        return !!p;
      })();
    }
    function j(p) {
      if (
        (typeof Symbol < "u" && p[Symbol.iterator] != null) ||
        p["@@iterator"] != null
      )
        return Array.from(p);
    }
    function I(p, o) {
      var c =
        p == null
          ? null
          : (typeof Symbol < "u" && p[Symbol.iterator]) || p["@@iterator"];
      if (c != null) {
        var f,
          S,
          N,
          F,
          q = [],
          $ = !0,
          fe = !1;
        try {
          if (((N = (c = c.call(p)).next), o !== 0))
            for (
              ;
              !($ = (f = N.call(c)).done) && (q.push(f.value), q.length !== o);
              $ = !0
            );
        } catch ($r) {
          (fe = !0), (S = $r);
        } finally {
          try {
            if (!$ && c.return != null && ((F = c.return()), Object(F) !== F))
              return;
          } finally {
            if (fe) throw S;
          }
        }
        return q;
      }
    }
    function z() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function M() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function R(p, o) {
      if (o && (typeof o == "object" || typeof o == "function")) return o;
      if (o !== void 0)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return a(p);
    }
    function A(p, o) {
      return (
        (A = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (c, f) {
              return (c.__proto__ = f), c;
            }),
        A(p, o)
      );
    }
    function V(p, o) {
      return r(p) || I(p, o) || mt(p, o) || z();
    }
    function D(p, o) {
      for (; !{}.hasOwnProperty.call(p, o) && (p = x(p)) !== null; );
      return p;
    }
    function B(p) {
      return i(p) || j(p) || mt(p) || M();
    }
    function G(p, o) {
      if (typeof p != "object" || !p) return p;
      var c = p[Symbol.toPrimitive];
      if (c !== void 0) {
        var f = c.call(p, o);
        if (typeof f != "object") return f;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(p);
    }
    function K(p) {
      var o = G(p, "string");
      return typeof o == "symbol" ? o : o + "";
    }
    function Z(p) {
      "@babel/helpers - typeof";
      return (
        (Z =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (o) {
                return typeof o;
              }
            : function (o) {
                return o &&
                  typeof Symbol == "function" &&
                  o.constructor === Symbol &&
                  o !== Symbol.prototype
                  ? "symbol"
                  : typeof o;
              }),
        Z(p)
      );
    }
    function mt(p, o) {
      if (p) {
        if (typeof p == "string") return n(p, o);
        var c = {}.toString.call(p).slice(8, -1);
        return (
          c === "Object" && p.constructor && (c = p.constructor.name),
          c === "Map" || c === "Set"
            ? Array.from(p)
            : c === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
            ? n(p, o)
            : void 0
        );
      }
    }
    var H = 100,
      O = {},
      W = function () {
        O.previousActiveElement instanceof HTMLElement
          ? (O.previousActiveElement.focus(), (O.previousActiveElement = null))
          : document.body && document.body.focus();
      },
      ie = function (o) {
        return new Promise(function (c) {
          if (!o) return c();
          var f = window.scrollX,
            S = window.scrollY;
          (O.restoreFocusTimeout = setTimeout(function () {
            W(), c();
          }, H)),
            window.scrollTo(f, S);
        });
      },
      le = "swal2-",
      $n = [
        "container",
        "shown",
        "height-auto",
        "iosfix",
        "popup",
        "modal",
        "no-backdrop",
        "no-transition",
        "toast",
        "toast-shown",
        "show",
        "hide",
        "close",
        "title",
        "html-container",
        "actions",
        "confirm",
        "deny",
        "cancel",
        "default-outline",
        "footer",
        "icon",
        "icon-content",
        "image",
        "input",
        "file",
        "range",
        "select",
        "radio",
        "checkbox",
        "label",
        "textarea",
        "inputerror",
        "input-label",
        "validation-message",
        "progress-steps",
        "active-progress-step",
        "progress-step",
        "progress-step-line",
        "loader",
        "loading",
        "styled",
        "top",
        "top-start",
        "top-end",
        "top-left",
        "top-right",
        "center",
        "center-start",
        "center-end",
        "center-left",
        "center-right",
        "bottom",
        "bottom-start",
        "bottom-end",
        "bottom-left",
        "bottom-right",
        "grow-row",
        "grow-column",
        "grow-fullscreen",
        "rtl",
        "timer-progress-bar",
        "timer-progress-bar-container",
        "scrollbar-measure",
        "icon-success",
        "icon-warning",
        "icon-info",
        "icon-question",
        "icon-error",
      ],
      L = $n.reduce(function (p, o) {
        return (p[o] = le + o), p;
      }, {}),
      Dr = ["success", "warning", "info", "question", "error"],
      at = Dr.reduce(function (p, o) {
        return (p[o] = le + o), p;
      }, {}),
      Sn = "SweetAlert2:",
      _a = function (o) {
        return o.charAt(0).toUpperCase() + o.slice(1);
      },
      Fe = function (o) {
        console.warn(
          "".concat(Sn, " ").concat(Z(o) === "object" ? o.join(" ") : o)
        );
      },
      Cn = function (o) {
        console.error("".concat(Sn, " ").concat(o));
      },
      ic = [],
      tm = function (o) {
        ic.includes(o) || (ic.push(o), Fe(o));
      },
      sc = function (o) {
        var c =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        tm(
          '"'
            .concat(
              o,
              '" is deprecated and will be removed in the next major release.'
            )
            .concat(c ? ' Use "'.concat(c, '" instead.') : "")
        );
      },
      Hi = function (o) {
        return typeof o == "function" ? o() : o;
      },
      Ra = function (o) {
        return o && typeof o.toPromise == "function";
      },
      Br = function (o) {
        return Ra(o) ? o.toPromise() : Promise.resolve(o);
      },
      za = function (o) {
        return o && Promise.resolve(o) === o;
      },
      Ve = function () {
        return document.body.querySelector(".".concat(L.container));
      },
      Fr = function (o) {
        var c = Ve();
        return c ? c.querySelector(o) : null;
      },
      Ze = function (o) {
        return Fr(".".concat(o));
      },
      J = function () {
        return Ze(L.popup);
      },
      Vr = function () {
        return Ze(L.icon);
      },
      nm = function () {
        return Ze(L["icon-content"]);
      },
      ac = function () {
        return Ze(L.title);
      },
      Da = function () {
        return Ze(L["html-container"]);
      },
      oc = function () {
        return Ze(L.image);
      },
      Ba = function () {
        return Ze(L["progress-steps"]);
      },
      Ui = function () {
        return Ze(L["validation-message"]);
      },
      bt = function () {
        return Fr(".".concat(L.actions, " .").concat(L.confirm));
      },
      qn = function () {
        return Fr(".".concat(L.actions, " .").concat(L.cancel));
      },
      bn = function () {
        return Fr(".".concat(L.actions, " .").concat(L.deny));
      },
      rm = function () {
        return Ze(L["input-label"]);
      },
      Qn = function () {
        return Fr(".".concat(L.loader));
      },
      Hr = function () {
        return Ze(L.actions);
      },
      lc = function () {
        return Ze(L.footer);
      },
      Gi = function () {
        return Ze(L["timer-progress-bar"]);
      },
      Fa = function () {
        return Ze(L.close);
      },
      im = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
      Va = function () {
        var o = J();
        if (!o) return [];
        var c = o.querySelectorAll(
            '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
          ),
          f = Array.from(c).sort(function (F, q) {
            var $ = parseInt(F.getAttribute("tabindex") || "0"),
              fe = parseInt(q.getAttribute("tabindex") || "0");
            return $ > fe ? 1 : $ < fe ? -1 : 0;
          }),
          S = o.querySelectorAll(im),
          N = Array.from(S).filter(function (F) {
            return F.getAttribute("tabindex") !== "-1";
          });
        return B(new Set(f.concat(N))).filter(function (F) {
          return He(F);
        });
      },
      Ha = function () {
        return (
          Mt(document.body, L.shown) &&
          !Mt(document.body, L["toast-shown"]) &&
          !Mt(document.body, L["no-backdrop"])
        );
      },
      Wi = function () {
        var o = J();
        return o ? Mt(o, L.toast) : !1;
      },
      sm = function () {
        var o = J();
        return o ? o.hasAttribute("data-loading") : !1;
      },
      Xe = function (o, c) {
        if (((o.textContent = ""), c)) {
          var f = new DOMParser(),
            S = f.parseFromString(c, "text/html"),
            N = S.querySelector("head");
          N &&
            Array.from(N.childNodes).forEach(function (q) {
              o.appendChild(q);
            });
          var F = S.querySelector("body");
          F &&
            Array.from(F.childNodes).forEach(function (q) {
              q instanceof HTMLVideoElement || q instanceof HTMLAudioElement
                ? o.appendChild(q.cloneNode(!0))
                : o.appendChild(q);
            });
        }
      },
      Mt = function (o, c) {
        if (!c) return !1;
        for (var f = c.split(/\s+/), S = 0; S < f.length; S++)
          if (!o.classList.contains(f[S])) return !1;
        return !0;
      },
      am = function (o, c) {
        Array.from(o.classList).forEach(function (f) {
          !Object.values(L).includes(f) &&
            !Object.values(at).includes(f) &&
            !Object.values(c.showClass || {}).includes(f) &&
            o.classList.remove(f);
        });
      },
      ot = function (o, c, f) {
        if ((am(o, c), !!c.customClass)) {
          var S = c.customClass[f];
          if (S) {
            if (typeof S != "string" && !S.forEach) {
              Fe(
                "Invalid type of customClass."
                  .concat(f, '! Expected string or iterable object, got "')
                  .concat(Z(S), '"')
              );
              return;
            }
            X(o, S);
          }
        }
      },
      $i = function (o, c) {
        if (!c) return null;
        switch (c) {
          case "select":
          case "textarea":
          case "file":
            return o.querySelector(".".concat(L.popup, " > .").concat(L[c]));
          case "checkbox":
            return o.querySelector(
              ".".concat(L.popup, " > .").concat(L.checkbox, " input")
            );
          case "radio":
            return (
              o.querySelector(
                ".".concat(L.popup, " > .").concat(L.radio, " input:checked")
              ) ||
              o.querySelector(
                "."
                  .concat(L.popup, " > .")
                  .concat(L.radio, " input:first-child")
              )
            );
          case "range":
            return o.querySelector(
              ".".concat(L.popup, " > .").concat(L.range, " input")
            );
          default:
            return o.querySelector(".".concat(L.popup, " > .").concat(L.input));
        }
      },
      uc = function (o) {
        if ((o.focus(), o.type !== "file")) {
          var c = o.value;
          (o.value = ""), (o.value = c);
        }
      },
      cc = function (o, c, f) {
        !o ||
          !c ||
          (typeof c == "string" && (c = c.split(/\s+/).filter(Boolean)),
          c.forEach(function (S) {
            Array.isArray(o)
              ? o.forEach(function (N) {
                  f ? N.classList.add(S) : N.classList.remove(S);
                })
              : f
              ? o.classList.add(S)
              : o.classList.remove(S);
          }));
      },
      X = function (o, c) {
        cc(o, c, !0);
      },
      Et = function (o, c) {
        cc(o, c, !1);
      },
      Wt = function (o, c) {
        for (var f = Array.from(o.children), S = 0; S < f.length; S++) {
          var N = f[S];
          if (N instanceof HTMLElement && Mt(N, c)) return N;
        }
      },
      En = function (o, c, f) {
        f === "".concat(parseInt(f)) && (f = parseInt(f)),
          f || parseInt(f) === 0
            ? o.style.setProperty(
                c,
                typeof f == "number" ? "".concat(f, "px") : f
              )
            : o.style.removeProperty(c);
      },
      Ce = function (o) {
        var c =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : "flex";
        o && (o.style.display = c);
      },
      Ae = function (o) {
        o && (o.style.display = "none");
      },
      Ua = function (o) {
        var c =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : "block";
        o &&
          new MutationObserver(function () {
            Ur(o, o.innerHTML, c);
          }).observe(o, { childList: !0, subtree: !0 });
      },
      dc = function (o, c, f, S) {
        var N = o.querySelector(c);
        N && N.style.setProperty(f, S);
      },
      Ur = function (o, c) {
        var f =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : "flex";
        c ? Ce(o, f) : Ae(o);
      },
      He = function (o) {
        return !!(
          o &&
          (o.offsetWidth || o.offsetHeight || o.getClientRects().length)
        );
      },
      om = function () {
        return !He(bt()) && !He(bn()) && !He(qn());
      },
      fc = function (o) {
        return o.scrollHeight > o.clientHeight;
      },
      pc = function (o) {
        var c = window.getComputedStyle(o),
          f = parseFloat(c.getPropertyValue("animation-duration") || "0"),
          S = parseFloat(c.getPropertyValue("transition-duration") || "0");
        return f > 0 || S > 0;
      },
      Ga = function (o) {
        var c =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          f = Gi();
        f &&
          He(f) &&
          (c && ((f.style.transition = "none"), (f.style.width = "100%")),
          setTimeout(function () {
            (f.style.transition = "width ".concat(o / 1e3, "s linear")),
              (f.style.width = "0%");
          }, 10));
      },
      lm = function () {
        var o = Gi();
        if (o) {
          var c = parseInt(window.getComputedStyle(o).width);
          o.style.removeProperty("transition"), (o.style.width = "100%");
          var f = parseInt(window.getComputedStyle(o).width),
            S = (c / f) * 100;
          o.style.width = "".concat(S, "%");
        }
      },
      mc = function () {
        return typeof window > "u" || typeof document > "u";
      },
      um = `
 <div aria-labelledby="`
        .concat(L.title, '" aria-describedby="')
        .concat(L["html-container"], '" class="')
        .concat(
          L.popup,
          `" tabindex="-1">
   <button type="button" class="`
        )
        .concat(
          L.close,
          `"></button>
   <ul class="`
        )
        .concat(
          L["progress-steps"],
          `"></ul>
   <div class="`
        )
        .concat(
          L.icon,
          `"></div>
   <img class="`
        )
        .concat(
          L.image,
          `" />
   <h2 class="`
        )
        .concat(L.title, '" id="')
        .concat(
          L.title,
          `"></h2>
   <div class="`
        )
        .concat(L["html-container"], '" id="')
        .concat(
          L["html-container"],
          `"></div>
   <input class="`
        )
        .concat(L.input, '" id="')
        .concat(
          L.input,
          `" />
   <input type="file" class="`
        )
        .concat(
          L.file,
          `" />
   <div class="`
        )
        .concat(
          L.range,
          `">
     <input type="range" />
     <output></output>
   </div>
   <select class="`
        )
        .concat(L.select, '" id="')
        .concat(
          L.select,
          `"></select>
   <div class="`
        )
        .concat(
          L.radio,
          `"></div>
   <label class="`
        )
        .concat(
          L.checkbox,
          `">
     <input type="checkbox" id="`
        )
        .concat(
          L.checkbox,
          `" />
     <span class="`
        )
        .concat(
          L.label,
          `"></span>
   </label>
   <textarea class="`
        )
        .concat(L.textarea, '" id="')
        .concat(
          L.textarea,
          `"></textarea>
   <div class="`
        )
        .concat(L["validation-message"], '" id="')
        .concat(
          L["validation-message"],
          `"></div>
   <div class="`
        )
        .concat(
          L.actions,
          `">
     <div class="`
        )
        .concat(
          L.loader,
          `"></div>
     <button type="button" class="`
        )
        .concat(
          L.confirm,
          `"></button>
     <button type="button" class="`
        )
        .concat(
          L.deny,
          `"></button>
     <button type="button" class="`
        )
        .concat(
          L.cancel,
          `"></button>
   </div>
   <div class="`
        )
        .concat(
          L.footer,
          `"></div>
   <div class="`
        )
        .concat(
          L["timer-progress-bar-container"],
          `">
     <div class="`
        )
        .concat(
          L["timer-progress-bar"],
          `"></div>
   </div>
 </div>
`
        )
        .replace(/(^|\n)\s*/g, ""),
      cm = function () {
        var o = Ve();
        return o
          ? (o.remove(),
            Et(
              [document.documentElement, document.body],
              [L["no-backdrop"], L["toast-shown"], L["has-column"]]
            ),
            !0)
          : !1;
      },
      kn = function () {
        O.currentInstance.resetValidationMessage();
      },
      dm = function () {
        var o = J(),
          c = Wt(o, L.input),
          f = Wt(o, L.file),
          S = o.querySelector(".".concat(L.range, " input")),
          N = o.querySelector(".".concat(L.range, " output")),
          F = Wt(o, L.select),
          q = o.querySelector(".".concat(L.checkbox, " input")),
          $ = Wt(o, L.textarea);
        (c.oninput = kn),
          (f.onchange = kn),
          (F.onchange = kn),
          (q.onchange = kn),
          ($.oninput = kn),
          (S.oninput = function () {
            kn(), (N.value = S.value);
          }),
          (S.onchange = function () {
            kn(), (N.value = S.value);
          });
      },
      fm = function (o) {
        return typeof o == "string" ? document.querySelector(o) : o;
      },
      pm = function (o) {
        var c = J();
        c.setAttribute("role", o.toast ? "alert" : "dialog"),
          c.setAttribute("aria-live", o.toast ? "polite" : "assertive"),
          o.toast || c.setAttribute("aria-modal", "true");
      },
      mm = function (o) {
        window.getComputedStyle(o).direction === "rtl" && X(Ve(), L.rtl);
      },
      hm = function (o) {
        var c = cm();
        if (mc()) {
          Cn("SweetAlert2 requires document to initialize");
          return;
        }
        var f = document.createElement("div");
        (f.className = L.container), c && X(f, L["no-transition"]), Xe(f, um);
        var S = fm(o.target);
        S.appendChild(f), pm(o), mm(S), dm();
      },
      Wa = function (o, c) {
        o instanceof HTMLElement
          ? c.appendChild(o)
          : Z(o) === "object"
          ? gm(o, c)
          : o && Xe(c, o);
      },
      gm = function (o, c) {
        o.jquery ? vm(c, o) : Xe(c, o.toString());
      },
      vm = function (o, c) {
        if (((o.textContent = ""), 0 in c))
          for (var f = 0; f in c; f++) o.appendChild(c[f].cloneNode(!0));
        else o.appendChild(c.cloneNode(!0));
      },
      jn = (function () {
        if (mc()) return !1;
        var p = document.createElement("div");
        return typeof p.style.webkitAnimation < "u"
          ? "webkitAnimationEnd"
          : typeof p.style.animation < "u"
          ? "animationend"
          : !1;
      })(),
      xm = function (o, c) {
        var f = Hr(),
          S = Qn();
        !f ||
          !S ||
          (!c.showConfirmButton && !c.showDenyButton && !c.showCancelButton
            ? Ae(f)
            : Ce(f),
          ot(f, c, "actions"),
          wm(f, S, c),
          Xe(S, c.loaderHtml || ""),
          ot(S, c, "loader"));
      };
    function wm(p, o, c) {
      var f = bt(),
        S = bn(),
        N = qn();
      !f ||
        !S ||
        !N ||
        ($a(f, "confirm", c),
        $a(S, "deny", c),
        $a(N, "cancel", c),
        ym(f, S, N, c),
        c.reverseButtons &&
          (c.toast
            ? (p.insertBefore(N, f), p.insertBefore(S, f))
            : (p.insertBefore(N, o),
              p.insertBefore(S, o),
              p.insertBefore(f, o))));
    }
    function ym(p, o, c, f) {
      if (!f.buttonsStyling) {
        Et([p, o, c], L.styled);
        return;
      }
      X([p, o, c], L.styled),
        f.confirmButtonColor &&
          ((p.style.backgroundColor = f.confirmButtonColor),
          X(p, L["default-outline"])),
        f.denyButtonColor &&
          ((o.style.backgroundColor = f.denyButtonColor),
          X(o, L["default-outline"])),
        f.cancelButtonColor &&
          ((c.style.backgroundColor = f.cancelButtonColor),
          X(c, L["default-outline"]));
    }
    function $a(p, o, c) {
      var f = _a(o);
      Ur(p, c["show".concat(f, "Button")], "inline-block"),
        Xe(p, c["".concat(o, "ButtonText")] || ""),
        p.setAttribute("aria-label", c["".concat(o, "ButtonAriaLabel")] || ""),
        (p.className = L[o]),
        ot(p, c, "".concat(o, "Button"));
    }
    var Sm = function (o, c) {
        var f = Fa();
        f &&
          (Xe(f, c.closeButtonHtml || ""),
          ot(f, c, "closeButton"),
          Ur(f, c.showCloseButton),
          f.setAttribute("aria-label", c.closeButtonAriaLabel || ""));
      },
      Cm = function (o, c) {
        var f = Ve();
        f &&
          (bm(f, c.backdrop),
          Em(f, c.position),
          km(f, c.grow),
          ot(f, c, "container"));
      };
    function bm(p, o) {
      typeof o == "string"
        ? (p.style.background = o)
        : o || X([document.documentElement, document.body], L["no-backdrop"]);
    }
    function Em(p, o) {
      o &&
        (o in L
          ? X(p, L[o])
          : (Fe(
              'The "position" parameter is not valid, defaulting to "center"'
            ),
            X(p, L.center)));
    }
    function km(p, o) {
      o && X(p, L["grow-".concat(o)]);
    }
    var ne = { innerParams: new WeakMap(), domCache: new WeakMap() },
      jm = [
        "input",
        "file",
        "range",
        "select",
        "radio",
        "checkbox",
        "textarea",
      ],
      Tm = function (o, c) {
        var f = J();
        if (f) {
          var S = ne.innerParams.get(o),
            N = !S || c.input !== S.input;
          jm.forEach(function (F) {
            var q = Wt(f, L[F]);
            q && (Nm(F, c.inputAttributes), (q.className = L[F]), N && Ae(q));
          }),
            c.input && (N && Pm(c), Am(c));
        }
      },
      Pm = function (o) {
        if (o.input) {
          if (!me[o.input]) {
            Cn(
              "Unexpected type of input! Expected "
                .concat(Object.keys(me).join(" | "), ', got "')
                .concat(o.input, '"')
            );
            return;
          }
          var c = hc(o.input),
            f = me[o.input](c, o);
          Ce(c),
            o.inputAutoFocus &&
              setTimeout(function () {
                uc(f);
              });
        }
      },
      Lm = function (o) {
        for (var c = 0; c < o.attributes.length; c++) {
          var f = o.attributes[c].name;
          ["id", "type", "value", "style"].includes(f) || o.removeAttribute(f);
        }
      },
      Nm = function (o, c) {
        var f = $i(J(), o);
        if (f) {
          Lm(f);
          for (var S in c) f.setAttribute(S, c[S]);
        }
      },
      Am = function (o) {
        var c = hc(o.input);
        Z(o.customClass) === "object" && X(c, o.customClass.input);
      },
      qa = function (o, c) {
        (!o.placeholder || c.inputPlaceholder) &&
          (o.placeholder = c.inputPlaceholder);
      },
      Gr = function (o, c, f) {
        if (f.inputLabel) {
          var S = document.createElement("label"),
            N = L["input-label"];
          S.setAttribute("for", o.id),
            (S.className = N),
            Z(f.customClass) === "object" && X(S, f.customClass.inputLabel),
            (S.innerText = f.inputLabel),
            c.insertAdjacentElement("beforebegin", S);
        }
      },
      hc = function (o) {
        return Wt(J(), L[o] || L.input);
      },
      qi = function (o, c) {
        ["string", "number"].includes(Z(c))
          ? (o.value = "".concat(c))
          : za(c) ||
            Fe(
              'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                Z(c),
                '"'
              )
            );
      },
      me = {};
    (me.text =
      me.email =
      me.password =
      me.number =
      me.tel =
      me.url =
      me.search =
      me.date =
      me["datetime-local"] =
      me.time =
      me.week =
      me.month =
        function (p, o) {
          return (
            qi(p, o.inputValue), Gr(p, p, o), qa(p, o), (p.type = o.input), p
          );
        }),
      (me.file = function (p, o) {
        return Gr(p, p, o), qa(p, o), p;
      }),
      (me.range = function (p, o) {
        var c = p.querySelector("input"),
          f = p.querySelector("output");
        return (
          qi(c, o.inputValue),
          (c.type = o.input),
          qi(f, o.inputValue),
          Gr(c, p, o),
          p
        );
      }),
      (me.select = function (p, o) {
        if (((p.textContent = ""), o.inputPlaceholder)) {
          var c = document.createElement("option");
          Xe(c, o.inputPlaceholder),
            (c.value = ""),
            (c.disabled = !0),
            (c.selected = !0),
            p.appendChild(c);
        }
        return Gr(p, p, o), p;
      }),
      (me.radio = function (p) {
        return (p.textContent = ""), p;
      }),
      (me.checkbox = function (p, o) {
        var c = $i(J(), "checkbox");
        (c.value = "1"), (c.checked = !!o.inputValue);
        var f = p.querySelector("span");
        return Xe(f, o.inputPlaceholder), c;
      }),
      (me.textarea = function (p, o) {
        qi(p, o.inputValue), qa(p, o), Gr(p, p, o);
        var c = function (S) {
          return (
            parseInt(window.getComputedStyle(S).marginLeft) +
            parseInt(window.getComputedStyle(S).marginRight)
          );
        };
        return (
          setTimeout(function () {
            if ("MutationObserver" in window) {
              var f = parseInt(window.getComputedStyle(J()).width),
                S = function () {
                  if (document.body.contains(p)) {
                    var F = p.offsetWidth + c(p);
                    F > f
                      ? (J().style.width = "".concat(F, "px"))
                      : En(J(), "width", o.width);
                  }
                };
              new MutationObserver(S).observe(p, {
                attributes: !0,
                attributeFilter: ["style"],
              });
            }
          }),
          p
        );
      });
    var Mm = function (o, c) {
        var f = Da();
        f &&
          (Ua(f),
          ot(f, c, "htmlContainer"),
          c.html
            ? (Wa(c.html, f), Ce(f, "block"))
            : c.text
            ? ((f.textContent = c.text), Ce(f, "block"))
            : Ae(f),
          Tm(o, c));
      },
      Im = function (o, c) {
        var f = lc();
        f &&
          (Ua(f),
          Ur(f, c.footer, "block"),
          c.footer && Wa(c.footer, f),
          ot(f, c, "footer"));
      },
      Om = function (o, c) {
        var f = ne.innerParams.get(o),
          S = Vr();
        if (S) {
          if (f && c.icon === f.icon) {
            vc(S, c), gc(S, c);
            return;
          }
          if (!c.icon && !c.iconHtml) {
            Ae(S);
            return;
          }
          if (c.icon && Object.keys(at).indexOf(c.icon) === -1) {
            Cn(
              'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                c.icon,
                '"'
              )
            ),
              Ae(S);
            return;
          }
          Ce(S), vc(S, c), gc(S, c), X(S, c.showClass && c.showClass.icon);
        }
      },
      gc = function (o, c) {
        for (var f = 0, S = Object.entries(at); f < S.length; f++) {
          var N = V(S[f], 2),
            F = N[0],
            q = N[1];
          c.icon !== F && Et(o, q);
        }
        X(o, c.icon && at[c.icon]), Dm(o, c), _m(), ot(o, c, "icon");
      },
      _m = function () {
        var o = J();
        if (o)
          for (
            var c = window
                .getComputedStyle(o)
                .getPropertyValue("background-color"),
              f = o.querySelectorAll(
                "[class^=swal2-success-circular-line], .swal2-success-fix"
              ),
              S = 0;
            S < f.length;
            S++
          )
            f[S].style.backgroundColor = c;
      },
      Rm = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
      zm = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
      vc = function (o, c) {
        if (!(!c.icon && !c.iconHtml)) {
          var f = o.innerHTML,
            S = "";
          if (c.iconHtml) S = xc(c.iconHtml);
          else if (c.icon === "success")
            (S = Rm), (f = f.replace(/ style=".*?"/g, ""));
          else if (c.icon === "error") S = zm;
          else if (c.icon) {
            var N = { question: "?", warning: "!", info: "i" };
            S = xc(N[c.icon]);
          }
          f.trim() !== S.trim() && Xe(o, S);
        }
      },
      Dm = function (o, c) {
        if (c.iconColor) {
          (o.style.color = c.iconColor), (o.style.borderColor = c.iconColor);
          for (
            var f = 0,
              S = [
                ".swal2-success-line-tip",
                ".swal2-success-line-long",
                ".swal2-x-mark-line-left",
                ".swal2-x-mark-line-right",
              ];
            f < S.length;
            f++
          ) {
            var N = S[f];
            dc(o, N, "background-color", c.iconColor);
          }
          dc(o, ".swal2-success-ring", "border-color", c.iconColor);
        }
      },
      xc = function (o) {
        return '<div class="'
          .concat(L["icon-content"], '">')
          .concat(o, "</div>");
      },
      Bm = function (o, c) {
        var f = oc();
        if (f) {
          if (!c.imageUrl) {
            Ae(f);
            return;
          }
          Ce(f, ""),
            f.setAttribute("src", c.imageUrl),
            f.setAttribute("alt", c.imageAlt || ""),
            En(f, "width", c.imageWidth),
            En(f, "height", c.imageHeight),
            (f.className = L.image),
            ot(f, c, "image");
        }
      },
      Fm = function (o, c) {
        var f = Ve(),
          S = J();
        if (!(!f || !S)) {
          if (c.toast) {
            En(f, "width", c.width), (S.style.width = "100%");
            var N = Qn();
            N && S.insertBefore(N, Vr());
          } else En(S, "width", c.width);
          En(S, "padding", c.padding),
            c.color && (S.style.color = c.color),
            c.background && (S.style.background = c.background),
            Ae(Ui()),
            Vm(S, c);
        }
      },
      Vm = function (o, c) {
        var f = c.showClass || {};
        (o.className = "".concat(L.popup, " ").concat(He(o) ? f.popup : "")),
          c.toast
            ? (X([document.documentElement, document.body], L["toast-shown"]),
              X(o, L.toast))
            : X(o, L.modal),
          ot(o, c, "popup"),
          typeof c.customClass == "string" && X(o, c.customClass),
          c.icon && X(o, L["icon-".concat(c.icon)]);
      },
      Hm = function (o, c) {
        var f = Ba();
        if (f) {
          var S = c.progressSteps,
            N = c.currentProgressStep;
          if (!S || S.length === 0 || N === void 0) {
            Ae(f);
            return;
          }
          Ce(f),
            (f.textContent = ""),
            N >= S.length &&
              Fe(
                "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
              ),
            S.forEach(function (F, q) {
              var $ = Um(F);
              if (
                (f.appendChild($),
                q === N && X($, L["active-progress-step"]),
                q !== S.length - 1)
              ) {
                var fe = Gm(c);
                f.appendChild(fe);
              }
            });
        }
      },
      Um = function (o) {
        var c = document.createElement("li");
        return X(c, L["progress-step"]), Xe(c, o), c;
      },
      Gm = function (o) {
        var c = document.createElement("li");
        return (
          X(c, L["progress-step-line"]),
          o.progressStepsDistance && En(c, "width", o.progressStepsDistance),
          c
        );
      },
      Wm = function (o, c) {
        var f = ac();
        f &&
          (Ua(f),
          Ur(f, c.title || c.titleText, "block"),
          c.title && Wa(c.title, f),
          c.titleText && (f.innerText = c.titleText),
          ot(f, c, "title"));
      },
      wc = function (o, c) {
        Fm(o, c),
          Cm(o, c),
          Hm(o, c),
          Om(o, c),
          Bm(o, c),
          Wm(o, c),
          Sm(o, c),
          Mm(o, c),
          xm(o, c),
          Im(o, c);
        var f = J();
        typeof c.didRender == "function" && f && c.didRender(f);
      },
      $m = function () {
        return He(J());
      },
      yc = function () {
        var o;
        return (o = bt()) === null || o === void 0 ? void 0 : o.click();
      },
      qm = function () {
        var o;
        return (o = bn()) === null || o === void 0 ? void 0 : o.click();
      },
      Qm = function () {
        var o;
        return (o = qn()) === null || o === void 0 ? void 0 : o.click();
      },
      Zn = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer",
      }),
      Sc = function (o) {
        o.keydownTarget &&
          o.keydownHandlerAdded &&
          (o.keydownTarget.removeEventListener("keydown", o.keydownHandler, {
            capture: o.keydownListenerCapture,
          }),
          (o.keydownHandlerAdded = !1));
      },
      Zm = function (o, c, f) {
        Sc(o),
          c.toast ||
            ((o.keydownHandler = function (S) {
              return Ym(c, S, f);
            }),
            (o.keydownTarget = c.keydownListenerCapture ? window : J()),
            (o.keydownListenerCapture = c.keydownListenerCapture),
            o.keydownTarget.addEventListener("keydown", o.keydownHandler, {
              capture: o.keydownListenerCapture,
            }),
            (o.keydownHandlerAdded = !0));
      },
      Qa = function (o, c) {
        var f,
          S = Va();
        if (S.length) {
          (o = o + c),
            o === S.length ? (o = 0) : o === -1 && (o = S.length - 1),
            S[o].focus();
          return;
        }
        (f = J()) === null || f === void 0 || f.focus();
      },
      Cc = ["ArrowRight", "ArrowDown"],
      Xm = ["ArrowLeft", "ArrowUp"],
      Ym = function (o, c, f) {
        o &&
          (c.isComposing ||
            c.keyCode === 229 ||
            (o.stopKeydownPropagation && c.stopPropagation(),
            c.key === "Enter"
              ? Km(c, o)
              : c.key === "Tab"
              ? Jm(c)
              : [].concat(Cc, Xm).includes(c.key)
              ? e1(c.key)
              : c.key === "Escape" && t1(c, o, f)));
      },
      Km = function (o, c) {
        if (Hi(c.allowEnterKey)) {
          var f = $i(J(), c.input);
          if (
            o.target &&
            f &&
            o.target instanceof HTMLElement &&
            o.target.outerHTML === f.outerHTML
          ) {
            if (["textarea", "file"].includes(c.input)) return;
            yc(), o.preventDefault();
          }
        }
      },
      Jm = function (o) {
        for (var c = o.target, f = Va(), S = -1, N = 0; N < f.length; N++)
          if (c === f[N]) {
            S = N;
            break;
          }
        o.shiftKey ? Qa(S, -1) : Qa(S, 1),
          o.stopPropagation(),
          o.preventDefault();
      },
      e1 = function (o) {
        var c = Hr(),
          f = bt(),
          S = bn(),
          N = qn();
        if (!(!c || !f || !S || !N)) {
          var F = [f, S, N];
          if (
            !(
              document.activeElement instanceof HTMLElement &&
              !F.includes(document.activeElement)
            )
          ) {
            var q = Cc.includes(o)
                ? "nextElementSibling"
                : "previousElementSibling",
              $ = document.activeElement;
            if ($) {
              for (var fe = 0; fe < c.children.length; fe++) {
                if ((($ = $[q]), !$)) return;
                if ($ instanceof HTMLButtonElement && He($)) break;
              }
              $ instanceof HTMLButtonElement && $.focus();
            }
          }
        }
      },
      t1 = function (o, c, f) {
        Hi(c.allowEscapeKey) && (o.preventDefault(), f(Zn.esc));
      },
      Xn = {
        swalPromiseResolve: new WeakMap(),
        swalPromiseReject: new WeakMap(),
      },
      n1 = function () {
        var o = Ve(),
          c = Array.from(document.body.children);
        c.forEach(function (f) {
          f.contains(o) ||
            (f.hasAttribute("aria-hidden") &&
              f.setAttribute(
                "data-previous-aria-hidden",
                f.getAttribute("aria-hidden") || ""
              ),
            f.setAttribute("aria-hidden", "true"));
        });
      },
      bc = function () {
        var o = Array.from(document.body.children);
        o.forEach(function (c) {
          c.hasAttribute("data-previous-aria-hidden")
            ? (c.setAttribute(
                "aria-hidden",
                c.getAttribute("data-previous-aria-hidden") || ""
              ),
              c.removeAttribute("data-previous-aria-hidden"))
            : c.removeAttribute("aria-hidden");
        });
      },
      Ec = typeof window < "u" && !!window.GestureEvent,
      r1 = function () {
        if (Ec && !Mt(document.body, L.iosfix)) {
          var o = document.body.scrollTop;
          (document.body.style.top = "".concat(o * -1, "px")),
            X(document.body, L.iosfix),
            i1();
        }
      },
      i1 = function () {
        var o = Ve();
        if (o) {
          var c;
          (o.ontouchstart = function (f) {
            c = s1(f);
          }),
            (o.ontouchmove = function (f) {
              c && (f.preventDefault(), f.stopPropagation());
            });
        }
      },
      s1 = function (o) {
        var c = o.target,
          f = Ve(),
          S = Da();
        return !f || !S || a1(o) || o1(o)
          ? !1
          : c === f ||
              (!fc(f) &&
                c instanceof HTMLElement &&
                c.tagName !== "INPUT" &&
                c.tagName !== "TEXTAREA" &&
                !(fc(S) && S.contains(c)));
      },
      a1 = function (o) {
        return (
          o.touches && o.touches.length && o.touches[0].touchType === "stylus"
        );
      },
      o1 = function (o) {
        return o.touches && o.touches.length > 1;
      },
      l1 = function () {
        if (Mt(document.body, L.iosfix)) {
          var o = parseInt(document.body.style.top, 10);
          Et(document.body, L.iosfix),
            (document.body.style.top = ""),
            (document.body.scrollTop = o * -1);
        }
      },
      u1 = function () {
        var o = document.createElement("div");
        (o.className = L["scrollbar-measure"]), document.body.appendChild(o);
        var c = o.getBoundingClientRect().width - o.clientWidth;
        return document.body.removeChild(o), c;
      },
      Yn = null,
      c1 = function (o) {
        Yn === null &&
          (document.body.scrollHeight > window.innerHeight || o === "scroll") &&
          ((Yn = parseInt(
            window
              .getComputedStyle(document.body)
              .getPropertyValue("padding-right")
          )),
          (document.body.style.paddingRight = "".concat(Yn + u1(), "px")));
      },
      d1 = function () {
        Yn !== null &&
          ((document.body.style.paddingRight = "".concat(Yn, "px")),
          (Yn = null));
      };
    function kc(p, o, c, f) {
      Wi()
        ? Tc(p, f)
        : (ie(c).then(function () {
            return Tc(p, f);
          }),
          Sc(O)),
        Ec
          ? (o.setAttribute("style", "display:none !important"),
            o.removeAttribute("class"),
            (o.innerHTML = ""))
          : o.remove(),
        Ha() && (d1(), l1(), bc()),
        f1();
    }
    function f1() {
      Et(
        [document.documentElement, document.body],
        [L.shown, L["height-auto"], L["no-backdrop"], L["toast-shown"]]
      );
    }
    function $t(p) {
      p = m1(p);
      var o = Xn.swalPromiseResolve.get(this),
        c = p1(this);
      this.isAwaitingPromise ? p.isDismissed || (Wr(this), o(p)) : c && o(p);
    }
    var p1 = function (o) {
      var c = J();
      if (!c) return !1;
      var f = ne.innerParams.get(o);
      if (!f || Mt(c, f.hideClass.popup)) return !1;
      Et(c, f.showClass.popup), X(c, f.hideClass.popup);
      var S = Ve();
      return (
        Et(S, f.showClass.backdrop), X(S, f.hideClass.backdrop), h1(o, c, f), !0
      );
    };
    function jc(p) {
      var o = Xn.swalPromiseReject.get(this);
      Wr(this), o && o(p);
    }
    var Wr = function (o) {
        o.isAwaitingPromise &&
          (delete o.isAwaitingPromise, ne.innerParams.get(o) || o._destroy());
      },
      m1 = function (o) {
        return typeof o > "u"
          ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
          : Object.assign(
              { isConfirmed: !1, isDenied: !1, isDismissed: !1 },
              o
            );
      },
      h1 = function (o, c, f) {
        var S = Ve(),
          N = jn && pc(c);
        typeof f.willClose == "function" && f.willClose(c),
          N
            ? g1(o, c, S, f.returnFocus, f.didClose)
            : kc(o, S, f.returnFocus, f.didClose);
      },
      g1 = function (o, c, f, S, N) {
        jn &&
          ((O.swalCloseEventFinishedCallback = kc.bind(null, o, f, S, N)),
          c.addEventListener(jn, function (F) {
            F.target === c &&
              (O.swalCloseEventFinishedCallback(),
              delete O.swalCloseEventFinishedCallback);
          }));
      },
      Tc = function (o, c) {
        setTimeout(function () {
          typeof c == "function" && c.bind(o.params)(),
            o._destroy && o._destroy();
        });
      },
      Kn = function (o) {
        var c = J();
        if ((c || new Ki(), (c = J()), !!c)) {
          var f = Qn();
          Wi() ? Ae(Vr()) : v1(c, o),
            Ce(f),
            c.setAttribute("data-loading", "true"),
            c.setAttribute("aria-busy", "true"),
            c.focus();
        }
      },
      v1 = function (o, c) {
        var f = Hr(),
          S = Qn();
        !f ||
          !S ||
          (!c && He(bt()) && (c = bt()),
          Ce(f),
          c &&
            (Ae(c),
            S.setAttribute("data-button-to-replace", c.className),
            f.insertBefore(S, c)),
          X([o, f], L.loading));
      },
      x1 = function (o, c) {
        c.input === "select" || c.input === "radio"
          ? b1(o, c)
          : ["text", "email", "number", "tel", "textarea"].some(function (f) {
              return f === c.input;
            }) &&
            (Ra(c.inputValue) || za(c.inputValue)) &&
            (Kn(bt()), E1(o, c));
      },
      w1 = function (o, c) {
        var f = o.getInput();
        if (!f) return null;
        switch (c.input) {
          case "checkbox":
            return y1(f);
          case "radio":
            return S1(f);
          case "file":
            return C1(f);
          default:
            return c.inputAutoTrim ? f.value.trim() : f.value;
        }
      },
      y1 = function (o) {
        return o.checked ? 1 : 0;
      },
      S1 = function (o) {
        return o.checked ? o.value : null;
      },
      C1 = function (o) {
        return o.files && o.files.length
          ? o.getAttribute("multiple") !== null
            ? o.files
            : o.files[0]
          : null;
      },
      b1 = function (o, c) {
        var f = J();
        if (f) {
          var S = function (F) {
            c.input === "select"
              ? k1(f, Pc(F), c)
              : c.input === "radio" && j1(f, Pc(F), c);
          };
          Ra(c.inputOptions) || za(c.inputOptions)
            ? (Kn(bt()),
              Br(c.inputOptions).then(function (N) {
                o.hideLoading(), S(N);
              }))
            : Z(c.inputOptions) === "object"
            ? S(c.inputOptions)
            : Cn(
                "Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(
                  Z(c.inputOptions)
                )
              );
        }
      },
      E1 = function (o, c) {
        var f = o.getInput();
        f &&
          (Ae(f),
          Br(c.inputValue)
            .then(function (S) {
              (f.value =
                c.input === "number"
                  ? "".concat(parseFloat(S) || 0)
                  : "".concat(S)),
                Ce(f),
                f.focus(),
                o.hideLoading();
            })
            .catch(function (S) {
              Cn("Error in inputValue promise: ".concat(S)),
                (f.value = ""),
                Ce(f),
                f.focus(),
                o.hideLoading();
            }));
      };
    function k1(p, o, c) {
      var f = Wt(p, L.select);
      if (f) {
        var S = function (F, q, $) {
          var fe = document.createElement("option");
          (fe.value = $),
            Xe(fe, q),
            (fe.selected = Lc($, c.inputValue)),
            F.appendChild(fe);
        };
        o.forEach(function (N) {
          var F = N[0],
            q = N[1];
          if (Array.isArray(q)) {
            var $ = document.createElement("optgroup");
            ($.label = F),
              ($.disabled = !1),
              f.appendChild($),
              q.forEach(function (fe) {
                return S($, fe[1], fe[0]);
              });
          } else S(f, q, F);
        }),
          f.focus();
      }
    }
    function j1(p, o, c) {
      var f = Wt(p, L.radio);
      if (f) {
        o.forEach(function (N) {
          var F = N[0],
            q = N[1],
            $ = document.createElement("input"),
            fe = document.createElement("label");
          ($.type = "radio"),
            ($.name = L.radio),
            ($.value = F),
            Lc(F, c.inputValue) && ($.checked = !0);
          var $r = document.createElement("span");
          Xe($r, q),
            ($r.className = L.label),
            fe.appendChild($),
            fe.appendChild($r),
            f.appendChild(fe);
        });
        var S = f.querySelectorAll("input");
        S.length && S[0].focus();
      }
    }
    var Pc = function p(o) {
        var c = [];
        return (
          o instanceof Map
            ? o.forEach(function (f, S) {
                var N = f;
                Z(N) === "object" && (N = p(N)), c.push([S, N]);
              })
            : Object.keys(o).forEach(function (f) {
                var S = o[f];
                Z(S) === "object" && (S = p(S)), c.push([f, S]);
              }),
          c
        );
      },
      Lc = function (o, c) {
        return !!c && c.toString() === o.toString();
      },
      Qi = void 0,
      T1 = function (o) {
        var c = ne.innerParams.get(o);
        o.disableButtons(), c.input ? Nc(o, "confirm") : Xa(o, !0);
      },
      P1 = function (o) {
        var c = ne.innerParams.get(o);
        o.disableButtons(),
          c.returnInputValueOnDeny ? Nc(o, "deny") : Za(o, !1);
      },
      L1 = function (o, c) {
        o.disableButtons(), c(Zn.cancel);
      },
      Nc = function (o, c) {
        var f = ne.innerParams.get(o);
        if (!f.input) {
          Cn(
            'The "input" parameter is needed to be set when using returnInputValueOn'.concat(
              _a(c)
            )
          );
          return;
        }
        var S = o.getInput(),
          N = w1(o, f);
        f.inputValidator
          ? N1(o, N, c)
          : S && !S.checkValidity()
          ? (o.enableButtons(),
            o.showValidationMessage(f.validationMessage || S.validationMessage))
          : c === "deny"
          ? Za(o, N)
          : Xa(o, N);
      },
      N1 = function (o, c, f) {
        var S = ne.innerParams.get(o);
        o.disableInput();
        var N = Promise.resolve().then(function () {
          return Br(S.inputValidator(c, S.validationMessage));
        });
        N.then(function (F) {
          o.enableButtons(),
            o.enableInput(),
            F ? o.showValidationMessage(F) : f === "deny" ? Za(o, c) : Xa(o, c);
        });
      },
      Za = function (o, c) {
        var f = ne.innerParams.get(o || Qi);
        if ((f.showLoaderOnDeny && Kn(bn()), f.preDeny)) {
          o.isAwaitingPromise = !0;
          var S = Promise.resolve().then(function () {
            return Br(f.preDeny(c, f.validationMessage));
          });
          S.then(function (N) {
            N === !1
              ? (o.hideLoading(), Wr(o))
              : o.close({ isDenied: !0, value: typeof N > "u" ? c : N });
          }).catch(function (N) {
            return Mc(o || Qi, N);
          });
        } else o.close({ isDenied: !0, value: c });
      },
      Ac = function (o, c) {
        o.close({ isConfirmed: !0, value: c });
      },
      Mc = function (o, c) {
        o.rejectPromise(c);
      },
      Xa = function (o, c) {
        var f = ne.innerParams.get(o || Qi);
        if ((f.showLoaderOnConfirm && Kn(), f.preConfirm)) {
          o.resetValidationMessage(), (o.isAwaitingPromise = !0);
          var S = Promise.resolve().then(function () {
            return Br(f.preConfirm(c, f.validationMessage));
          });
          S.then(function (N) {
            He(Ui()) || N === !1
              ? (o.hideLoading(), Wr(o))
              : Ac(o, typeof N > "u" ? c : N);
          }).catch(function (N) {
            return Mc(o || Qi, N);
          });
        } else Ac(o, c);
      };
    function Zi() {
      var p = ne.innerParams.get(this);
      if (p) {
        var o = ne.domCache.get(this);
        Ae(o.loader),
          Wi() ? p.icon && Ce(Vr()) : A1(o),
          Et([o.popup, o.actions], L.loading),
          o.popup.removeAttribute("aria-busy"),
          o.popup.removeAttribute("data-loading"),
          (o.confirmButton.disabled = !1),
          (o.denyButton.disabled = !1),
          (o.cancelButton.disabled = !1);
      }
    }
    var A1 = function (o) {
      var c = o.popup.getElementsByClassName(
        o.loader.getAttribute("data-button-to-replace")
      );
      c.length ? Ce(c[0], "inline-block") : om() && Ae(o.actions);
    };
    function Ic() {
      var p = ne.innerParams.get(this),
        o = ne.domCache.get(this);
      return o ? $i(o.popup, p.input) : null;
    }
    function Oc(p, o, c) {
      var f = ne.domCache.get(p);
      o.forEach(function (S) {
        f[S].disabled = c;
      });
    }
    function _c(p, o) {
      var c = J();
      if (!(!c || !p))
        if (p.type === "radio")
          for (
            var f = c.querySelectorAll('[name="'.concat(L.radio, '"]')), S = 0;
            S < f.length;
            S++
          )
            f[S].disabled = o;
        else p.disabled = o;
    }
    function Rc() {
      Oc(this, ["confirmButton", "denyButton", "cancelButton"], !1);
    }
    function zc() {
      Oc(this, ["confirmButton", "denyButton", "cancelButton"], !0);
    }
    function Dc() {
      _c(this.getInput(), !1);
    }
    function Bc() {
      _c(this.getInput(), !0);
    }
    function Fc(p) {
      var o = ne.domCache.get(this),
        c = ne.innerParams.get(this);
      Xe(o.validationMessage, p),
        (o.validationMessage.className = L["validation-message"]),
        c.customClass &&
          c.customClass.validationMessage &&
          X(o.validationMessage, c.customClass.validationMessage),
        Ce(o.validationMessage);
      var f = this.getInput();
      f &&
        (f.setAttribute("aria-invalid", "true"),
        f.setAttribute("aria-describedby", L["validation-message"]),
        uc(f),
        X(f, L.inputerror));
    }
    function Vc() {
      var p = ne.domCache.get(this);
      p.validationMessage && Ae(p.validationMessage);
      var o = this.getInput();
      o &&
        (o.removeAttribute("aria-invalid"),
        o.removeAttribute("aria-describedby"),
        Et(o, L.inputerror));
    }
    var Jn = {
        title: "",
        titleText: "",
        text: "",
        html: "",
        footer: "",
        icon: void 0,
        iconColor: void 0,
        iconHtml: void 0,
        template: void 0,
        toast: !1,
        animation: !0,
        showClass: {
          popup: "swal2-show",
          backdrop: "swal2-backdrop-show",
          icon: "swal2-icon-show",
        },
        hideClass: {
          popup: "swal2-hide",
          backdrop: "swal2-backdrop-hide",
          icon: "swal2-icon-hide",
        },
        customClass: {},
        target: "body",
        color: void 0,
        backdrop: !0,
        heightAuto: !0,
        allowOutsideClick: !0,
        allowEscapeKey: !0,
        allowEnterKey: !0,
        stopKeydownPropagation: !0,
        keydownListenerCapture: !1,
        showConfirmButton: !0,
        showDenyButton: !1,
        showCancelButton: !1,
        preConfirm: void 0,
        preDeny: void 0,
        confirmButtonText: "OK",
        confirmButtonAriaLabel: "",
        confirmButtonColor: void 0,
        denyButtonText: "No",
        denyButtonAriaLabel: "",
        denyButtonColor: void 0,
        cancelButtonText: "Cancel",
        cancelButtonAriaLabel: "",
        cancelButtonColor: void 0,
        buttonsStyling: !0,
        reverseButtons: !1,
        focusConfirm: !0,
        focusDeny: !1,
        focusCancel: !1,
        returnFocus: !0,
        showCloseButton: !1,
        closeButtonHtml: "&times;",
        closeButtonAriaLabel: "Close this dialog",
        loaderHtml: "",
        showLoaderOnConfirm: !1,
        showLoaderOnDeny: !1,
        imageUrl: void 0,
        imageWidth: void 0,
        imageHeight: void 0,
        imageAlt: "",
        timer: void 0,
        timerProgressBar: !1,
        width: void 0,
        padding: void 0,
        background: void 0,
        input: void 0,
        inputPlaceholder: "",
        inputLabel: "",
        inputValue: "",
        inputOptions: {},
        inputAutoFocus: !0,
        inputAutoTrim: !0,
        inputAttributes: {},
        inputValidator: void 0,
        returnInputValueOnDeny: !1,
        validationMessage: void 0,
        grow: !1,
        position: "center",
        progressSteps: [],
        currentProgressStep: void 0,
        progressStepsDistance: void 0,
        willOpen: void 0,
        didOpen: void 0,
        didRender: void 0,
        willClose: void 0,
        didClose: void 0,
        didDestroy: void 0,
        scrollbarPadding: !0,
      },
      M1 = [
        "allowEscapeKey",
        "allowOutsideClick",
        "background",
        "buttonsStyling",
        "cancelButtonAriaLabel",
        "cancelButtonColor",
        "cancelButtonText",
        "closeButtonAriaLabel",
        "closeButtonHtml",
        "color",
        "confirmButtonAriaLabel",
        "confirmButtonColor",
        "confirmButtonText",
        "currentProgressStep",
        "customClass",
        "denyButtonAriaLabel",
        "denyButtonColor",
        "denyButtonText",
        "didClose",
        "didDestroy",
        "footer",
        "hideClass",
        "html",
        "icon",
        "iconColor",
        "iconHtml",
        "imageAlt",
        "imageHeight",
        "imageUrl",
        "imageWidth",
        "preConfirm",
        "preDeny",
        "progressSteps",
        "returnFocus",
        "reverseButtons",
        "showCancelButton",
        "showCloseButton",
        "showConfirmButton",
        "showDenyButton",
        "text",
        "title",
        "titleText",
        "willClose",
      ],
      I1 = { allowEnterKey: void 0 },
      O1 = [
        "allowOutsideClick",
        "allowEnterKey",
        "backdrop",
        "focusConfirm",
        "focusDeny",
        "focusCancel",
        "returnFocus",
        "heightAuto",
        "keydownListenerCapture",
      ],
      Hc = function (o) {
        return Object.prototype.hasOwnProperty.call(Jn, o);
      },
      Uc = function (o) {
        return M1.indexOf(o) !== -1;
      },
      Gc = function (o) {
        return I1[o];
      },
      _1 = function (o) {
        Hc(o) || Fe('Unknown parameter "'.concat(o, '"'));
      },
      R1 = function (o) {
        O1.includes(o) &&
          Fe('The parameter "'.concat(o, '" is incompatible with toasts'));
      },
      z1 = function (o) {
        var c = Gc(o);
        c && sc(o, c);
      },
      D1 = function (o) {
        o.backdrop === !1 &&
          o.allowOutsideClick &&
          Fe(
            '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
          );
        for (var c in o) _1(c), o.toast && R1(c), z1(c);
      };
    function Wc(p) {
      var o = J(),
        c = ne.innerParams.get(this);
      if (!o || Mt(o, c.hideClass.popup)) {
        Fe(
          "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
        );
        return;
      }
      var f = B1(p),
        S = Object.assign({}, c, f);
      wc(this, S),
        ne.innerParams.set(this, S),
        Object.defineProperties(this, {
          params: {
            value: Object.assign({}, this.params, p),
            writable: !1,
            enumerable: !0,
          },
        });
    }
    var B1 = function (o) {
      var c = {};
      return (
        Object.keys(o).forEach(function (f) {
          Uc(f) ? (c[f] = o[f]) : Fe("Invalid parameter to update: ".concat(f));
        }),
        c
      );
    };
    function $c() {
      var p = ne.domCache.get(this),
        o = ne.innerParams.get(this);
      if (!o) {
        qc(this);
        return;
      }
      p.popup &&
        O.swalCloseEventFinishedCallback &&
        (O.swalCloseEventFinishedCallback(),
        delete O.swalCloseEventFinishedCallback),
        typeof o.didDestroy == "function" && o.didDestroy(),
        F1(this);
    }
    var F1 = function (o) {
        qc(o),
          delete o.params,
          delete O.keydownHandler,
          delete O.keydownTarget,
          delete O.currentInstance;
      },
      qc = function (o) {
        o.isAwaitingPromise
          ? (Ya(ne, o), (o.isAwaitingPromise = !0))
          : (Ya(Xn, o),
            Ya(ne, o),
            delete o.isAwaitingPromise,
            delete o.disableButtons,
            delete o.enableButtons,
            delete o.getInput,
            delete o.disableInput,
            delete o.enableInput,
            delete o.hideLoading,
            delete o.disableLoading,
            delete o.showValidationMessage,
            delete o.resetValidationMessage,
            delete o.close,
            delete o.closePopup,
            delete o.closeModal,
            delete o.closeToast,
            delete o.rejectPromise,
            delete o.update,
            delete o._destroy);
      },
      Ya = function (o, c) {
        for (var f in o) o[f].delete(c);
      },
      V1 = Object.freeze({
        __proto__: null,
        _destroy: $c,
        close: $t,
        closeModal: $t,
        closePopup: $t,
        closeToast: $t,
        disableButtons: zc,
        disableInput: Bc,
        disableLoading: Zi,
        enableButtons: Rc,
        enableInput: Dc,
        getInput: Ic,
        handleAwaitingPromise: Wr,
        hideLoading: Zi,
        rejectPromise: jc,
        resetValidationMessage: Vc,
        showValidationMessage: Fc,
        update: Wc,
      }),
      H1 = function (o, c, f) {
        o.toast ? U1(o, c, f) : (W1(c), $1(c), q1(o, c, f));
      },
      U1 = function (o, c, f) {
        c.popup.onclick = function () {
          (o && (G1(o) || o.timer || o.input)) || f(Zn.close);
        };
      },
      G1 = function (o) {
        return !!(
          o.showConfirmButton ||
          o.showDenyButton ||
          o.showCancelButton ||
          o.showCloseButton
        );
      },
      Xi = !1,
      W1 = function (o) {
        o.popup.onmousedown = function () {
          o.container.onmouseup = function (c) {
            (o.container.onmouseup = function () {}),
              c.target === o.container && (Xi = !0);
          };
        };
      },
      $1 = function (o) {
        o.container.onmousedown = function (c) {
          c.target === o.container && c.preventDefault(),
            (o.popup.onmouseup = function (f) {
              (o.popup.onmouseup = function () {}),
                (f.target === o.popup ||
                  (f.target instanceof HTMLElement &&
                    o.popup.contains(f.target))) &&
                  (Xi = !0);
            });
        };
      },
      q1 = function (o, c, f) {
        c.container.onclick = function (S) {
          if (Xi) {
            Xi = !1;
            return;
          }
          S.target === c.container && Hi(o.allowOutsideClick) && f(Zn.backdrop);
        };
      },
      Q1 = function (o) {
        return Z(o) === "object" && o.jquery;
      },
      Qc = function (o) {
        return o instanceof Element || Q1(o);
      },
      Z1 = function (o) {
        var c = {};
        return (
          Z(o[0]) === "object" && !Qc(o[0])
            ? Object.assign(c, o[0])
            : ["title", "html", "icon"].forEach(function (f, S) {
                var N = o[S];
                typeof N == "string" || Qc(N)
                  ? (c[f] = N)
                  : N !== void 0 &&
                    Cn(
                      "Unexpected type of "
                        .concat(f, '! Expected "string" or "Element", got ')
                        .concat(Z(N))
                    );
              }),
          c
        );
      };
    function X1() {
      for (
        var p = this, o = arguments.length, c = new Array(o), f = 0;
        f < o;
        f++
      )
        c[f] = arguments[f];
      return C(p, c);
    }
    function Y1(p) {
      var o = (function (c) {
        function f() {
          return m(this, f), l(this, f, arguments);
        }
        return (
          y(f, c),
          E(f, [
            {
              key: "_main",
              value: function (N, F) {
                return h(x(f.prototype), "_main", this).call(
                  this,
                  N,
                  Object.assign({}, p, F)
                );
              },
            },
          ])
        );
      })(this);
      return o;
    }
    var K1 = function () {
        return O.timeout && O.timeout.getTimerLeft();
      },
      Zc = function () {
        if (O.timeout) return lm(), O.timeout.stop();
      },
      Xc = function () {
        if (O.timeout) {
          var o = O.timeout.start();
          return Ga(o), o;
        }
      },
      J1 = function () {
        var o = O.timeout;
        return o && (o.running ? Zc() : Xc());
      },
      eh = function (o) {
        if (O.timeout) {
          var c = O.timeout.increase(o);
          return Ga(c, !0), c;
        }
      },
      th = function () {
        return !!(O.timeout && O.timeout.isRunning());
      },
      Yc = !1,
      Ka = {};
    function nh() {
      var p =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : "data-swal-template";
      (Ka[p] = this),
        Yc || (document.body.addEventListener("click", rh), (Yc = !0));
    }
    var rh = function (o) {
        for (var c = o.target; c && c !== document; c = c.parentNode)
          for (var f in Ka) {
            var S = c.getAttribute(f);
            if (S) {
              Ka[f].fire({ template: S });
              return;
            }
          }
      },
      ih = Object.freeze({
        __proto__: null,
        argsToParams: Z1,
        bindClickHandler: nh,
        clickCancel: Qm,
        clickConfirm: yc,
        clickDeny: qm,
        enableLoading: Kn,
        fire: X1,
        getActions: Hr,
        getCancelButton: qn,
        getCloseButton: Fa,
        getConfirmButton: bt,
        getContainer: Ve,
        getDenyButton: bn,
        getFocusableElements: Va,
        getFooter: lc,
        getHtmlContainer: Da,
        getIcon: Vr,
        getIconContent: nm,
        getImage: oc,
        getInputLabel: rm,
        getLoader: Qn,
        getPopup: J,
        getProgressSteps: Ba,
        getTimerLeft: K1,
        getTimerProgressBar: Gi,
        getTitle: ac,
        getValidationMessage: Ui,
        increaseTimer: eh,
        isDeprecatedParameter: Gc,
        isLoading: sm,
        isTimerRunning: th,
        isUpdatableParameter: Uc,
        isValidParameter: Hc,
        isVisible: $m,
        mixin: Y1,
        resumeTimer: Xc,
        showLoading: Kn,
        stopTimer: Zc,
        toggleTimer: J1,
      }),
      sh = (function () {
        function p(o, c) {
          m(this, p),
            (this.callback = o),
            (this.remaining = c),
            (this.running = !1),
            this.start();
        }
        return E(p, [
          {
            key: "start",
            value: function () {
              return (
                this.running ||
                  ((this.running = !0),
                  (this.started = new Date()),
                  (this.id = setTimeout(this.callback, this.remaining))),
                this.remaining
              );
            },
          },
          {
            key: "stop",
            value: function () {
              return (
                this.started &&
                  this.running &&
                  ((this.running = !1),
                  clearTimeout(this.id),
                  (this.remaining -=
                    new Date().getTime() - this.started.getTime())),
                this.remaining
              );
            },
          },
          {
            key: "increase",
            value: function (c) {
              var f = this.running;
              return (
                f && this.stop(),
                (this.remaining += c),
                f && this.start(),
                this.remaining
              );
            },
          },
          {
            key: "getTimerLeft",
            value: function () {
              return (
                this.running && (this.stop(), this.start()), this.remaining
              );
            },
          },
          {
            key: "isRunning",
            value: function () {
              return this.running;
            },
          },
        ]);
      })(),
      Kc = ["swal-title", "swal-html", "swal-footer"],
      ah = function (o) {
        var c =
          typeof o.template == "string"
            ? document.querySelector(o.template)
            : o.template;
        if (!c) return {};
        var f = c.content;
        mh(f);
        var S = Object.assign(
          oh(f),
          lh(f),
          uh(f),
          ch(f),
          dh(f),
          fh(f),
          ph(f, Kc)
        );
        return S;
      },
      oh = function (o) {
        var c = {},
          f = Array.from(o.querySelectorAll("swal-param"));
        return (
          f.forEach(function (S) {
            Tn(S, ["name", "value"]);
            var N = S.getAttribute("name"),
              F = S.getAttribute("value");
            typeof Jn[N] == "boolean"
              ? (c[N] = F !== "false")
              : Z(Jn[N]) === "object"
              ? (c[N] = JSON.parse(F))
              : (c[N] = F);
          }),
          c
        );
      },
      lh = function (o) {
        var c = {},
          f = Array.from(o.querySelectorAll("swal-function-param"));
        return (
          f.forEach(function (S) {
            var N = S.getAttribute("name"),
              F = S.getAttribute("value");
            c[N] = new Function("return ".concat(F))();
          }),
          c
        );
      },
      uh = function (o) {
        var c = {},
          f = Array.from(o.querySelectorAll("swal-button"));
        return (
          f.forEach(function (S) {
            Tn(S, ["type", "color", "aria-label"]);
            var N = S.getAttribute("type");
            (c["".concat(N, "ButtonText")] = S.innerHTML),
              (c["show".concat(_a(N), "Button")] = !0),
              S.hasAttribute("color") &&
                (c["".concat(N, "ButtonColor")] = S.getAttribute("color")),
              S.hasAttribute("aria-label") &&
                (c["".concat(N, "ButtonAriaLabel")] =
                  S.getAttribute("aria-label"));
          }),
          c
        );
      },
      ch = function (o) {
        var c = {},
          f = o.querySelector("swal-image");
        return (
          f &&
            (Tn(f, ["src", "width", "height", "alt"]),
            f.hasAttribute("src") &&
              (c.imageUrl = f.getAttribute("src") || void 0),
            f.hasAttribute("width") &&
              (c.imageWidth = f.getAttribute("width") || void 0),
            f.hasAttribute("height") &&
              (c.imageHeight = f.getAttribute("height") || void 0),
            f.hasAttribute("alt") &&
              (c.imageAlt = f.getAttribute("alt") || void 0)),
          c
        );
      },
      dh = function (o) {
        var c = {},
          f = o.querySelector("swal-icon");
        return (
          f &&
            (Tn(f, ["type", "color"]),
            f.hasAttribute("type") && (c.icon = f.getAttribute("type")),
            f.hasAttribute("color") && (c.iconColor = f.getAttribute("color")),
            (c.iconHtml = f.innerHTML)),
          c
        );
      },
      fh = function (o) {
        var c = {},
          f = o.querySelector("swal-input");
        f &&
          (Tn(f, ["type", "label", "placeholder", "value"]),
          (c.input = f.getAttribute("type") || "text"),
          f.hasAttribute("label") && (c.inputLabel = f.getAttribute("label")),
          f.hasAttribute("placeholder") &&
            (c.inputPlaceholder = f.getAttribute("placeholder")),
          f.hasAttribute("value") && (c.inputValue = f.getAttribute("value")));
        var S = Array.from(o.querySelectorAll("swal-input-option"));
        return (
          S.length &&
            ((c.inputOptions = {}),
            S.forEach(function (N) {
              Tn(N, ["value"]);
              var F = N.getAttribute("value"),
                q = N.innerHTML;
              c.inputOptions[F] = q;
            })),
          c
        );
      },
      ph = function (o, c) {
        var f = {};
        for (var S in c) {
          var N = c[S],
            F = o.querySelector(N);
          F && (Tn(F, []), (f[N.replace(/^swal-/, "")] = F.innerHTML.trim()));
        }
        return f;
      },
      mh = function (o) {
        var c = Kc.concat([
          "swal-param",
          "swal-function-param",
          "swal-button",
          "swal-image",
          "swal-icon",
          "swal-input",
          "swal-input-option",
        ]);
        Array.from(o.children).forEach(function (f) {
          var S = f.tagName.toLowerCase();
          c.includes(S) || Fe("Unrecognized element <".concat(S, ">"));
        });
      },
      Tn = function (o, c) {
        Array.from(o.attributes).forEach(function (f) {
          c.indexOf(f.name) === -1 &&
            Fe([
              'Unrecognized attribute "'
                .concat(f.name, '" on <')
                .concat(o.tagName.toLowerCase(), ">."),
              "".concat(
                c.length
                  ? "Allowed attributes are: ".concat(c.join(", "))
                  : "To set the value, use HTML within the element."
              ),
            ]);
        });
      },
      Jc = 10,
      hh = function (o) {
        var c = Ve(),
          f = J();
        typeof o.willOpen == "function" && o.willOpen(f);
        var S = window.getComputedStyle(document.body),
          N = S.overflowY;
        wh(c, f, o),
          setTimeout(function () {
            vh(c, f);
          }, Jc),
          Ha() && (xh(c, o.scrollbarPadding, N), n1()),
          !Wi() &&
            !O.previousActiveElement &&
            (O.previousActiveElement = document.activeElement),
          typeof o.didOpen == "function" &&
            setTimeout(function () {
              return o.didOpen(f);
            }),
          Et(c, L["no-transition"]);
      },
      gh = function p(o) {
        var c = J();
        if (!(o.target !== c || !jn)) {
          var f = Ve();
          c.removeEventListener(jn, p), (f.style.overflowY = "auto");
        }
      },
      vh = function (o, c) {
        jn && pc(c)
          ? ((o.style.overflowY = "hidden"), c.addEventListener(jn, gh))
          : (o.style.overflowY = "auto");
      },
      xh = function (o, c, f) {
        r1(),
          c && f !== "hidden" && c1(f),
          setTimeout(function () {
            o.scrollTop = 0;
          });
      },
      wh = function (o, c, f) {
        X(o, f.showClass.backdrop),
          f.animation
            ? (c.style.setProperty("opacity", "0", "important"),
              Ce(c, "grid"),
              setTimeout(function () {
                X(c, f.showClass.popup), c.style.removeProperty("opacity");
              }, Jc))
            : Ce(c, "grid"),
          X([document.documentElement, document.body], L.shown),
          f.heightAuto &&
            f.backdrop &&
            !f.toast &&
            X([document.documentElement, document.body], L["height-auto"]);
      },
      ed = {
        email: function (o, c) {
          return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(o)
            ? Promise.resolve()
            : Promise.resolve(c || "Invalid email address");
        },
        url: function (o, c) {
          return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
            o
          )
            ? Promise.resolve()
            : Promise.resolve(c || "Invalid URL");
        },
      };
    function yh(p) {
      p.inputValidator ||
        (p.input === "email" && (p.inputValidator = ed.email),
        p.input === "url" && (p.inputValidator = ed.url));
    }
    function Sh(p) {
      (!p.target ||
        (typeof p.target == "string" && !document.querySelector(p.target)) ||
        (typeof p.target != "string" && !p.target.appendChild)) &&
        (Fe('Target parameter is not valid, defaulting to "body"'),
        (p.target = "body"));
    }
    function Ch(p) {
      yh(p),
        p.showLoaderOnConfirm &&
          !p.preConfirm &&
          Fe(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
        Sh(p),
        typeof p.title == "string" &&
          (p.title = p.title
            .split(
              `
`
            )
            .join("<br />")),
        hm(p);
    }
    var kt,
      Yi = new WeakMap(),
      he = (function () {
        function p() {
          if ((m(this, p), g(this, Yi, void 0), !(typeof window > "u"))) {
            kt = this;
            for (var o = arguments.length, c = new Array(o), f = 0; f < o; f++)
              c[f] = arguments[f];
            var S = Object.freeze(this.constructor.argsToParams(c));
            (this.params = S),
              (this.isAwaitingPromise = !1),
              w(Yi, this, this._main(kt.params));
          }
        }
        return E(p, [
          {
            key: "_main",
            value: function (c) {
              var f =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
              if ((D1(Object.assign({}, f, c)), O.currentInstance)) {
                var S = Xn.swalPromiseResolve.get(O.currentInstance),
                  N = O.currentInstance.isAwaitingPromise;
                O.currentInstance._destroy(),
                  N || S({ isDismissed: !0 }),
                  Ha() && bc();
              }
              O.currentInstance = kt;
              var F = Eh(c, f);
              Ch(F),
                Object.freeze(F),
                O.timeout && (O.timeout.stop(), delete O.timeout),
                clearTimeout(O.restoreFocusTimeout);
              var q = kh(kt);
              return wc(kt, F), ne.innerParams.set(kt, F), bh(kt, q, F);
            },
          },
          {
            key: "then",
            value: function (c) {
              return v(Yi, this).then(c);
            },
          },
          {
            key: "finally",
            value: function (c) {
              return v(Yi, this).finally(c);
            },
          },
        ]);
      })(),
      bh = function (o, c, f) {
        return new Promise(function (S, N) {
          var F = function ($) {
            o.close({ isDismissed: !0, dismiss: $ });
          };
          Xn.swalPromiseResolve.set(o, S),
            Xn.swalPromiseReject.set(o, N),
            (c.confirmButton.onclick = function () {
              T1(o);
            }),
            (c.denyButton.onclick = function () {
              P1(o);
            }),
            (c.cancelButton.onclick = function () {
              L1(o, F);
            }),
            (c.closeButton.onclick = function () {
              F(Zn.close);
            }),
            H1(f, c, F),
            Zm(O, f, F),
            x1(o, f),
            hh(f),
            jh(O, f, F),
            Th(c, f),
            setTimeout(function () {
              c.container.scrollTop = 0;
            });
        });
      },
      Eh = function (o, c) {
        var f = ah(o),
          S = Object.assign({}, Jn, c, f, o);
        return (
          (S.showClass = Object.assign({}, Jn.showClass, S.showClass)),
          (S.hideClass = Object.assign({}, Jn.hideClass, S.hideClass)),
          S.animation === !1 &&
            ((S.showClass = { backdrop: "swal2-noanimation" }),
            (S.hideClass = {})),
          S
        );
      },
      kh = function (o) {
        var c = {
          popup: J(),
          container: Ve(),
          actions: Hr(),
          confirmButton: bt(),
          denyButton: bn(),
          cancelButton: qn(),
          loader: Qn(),
          closeButton: Fa(),
          validationMessage: Ui(),
          progressSteps: Ba(),
        };
        return ne.domCache.set(o, c), c;
      },
      jh = function (o, c, f) {
        var S = Gi();
        Ae(S),
          c.timer &&
            ((o.timeout = new sh(function () {
              f("timer"), delete o.timeout;
            }, c.timer)),
            c.timerProgressBar &&
              (Ce(S),
              ot(S, c, "timerProgressBar"),
              setTimeout(function () {
                o.timeout && o.timeout.running && Ga(c.timer);
              })));
      },
      Th = function (o, c) {
        if (!c.toast) {
          if (!Hi(c.allowEnterKey)) {
            sc("allowEnterKey"), Nh();
            return;
          }
          Ph(o) || Lh(o, c) || Qa(-1, 1);
        }
      },
      Ph = function (o) {
        var c = o.popup.querySelectorAll("[autofocus]"),
          f = P(c),
          S;
        try {
          for (f.s(); !(S = f.n()).done; ) {
            var N = S.value;
            if (N instanceof HTMLElement && He(N)) return N.focus(), !0;
          }
        } catch (F) {
          f.e(F);
        } finally {
          f.f();
        }
        return !1;
      },
      Lh = function (o, c) {
        return c.focusDeny && He(o.denyButton)
          ? (o.denyButton.focus(), !0)
          : c.focusCancel && He(o.cancelButton)
          ? (o.cancelButton.focus(), !0)
          : c.focusConfirm && He(o.confirmButton)
          ? (o.confirmButton.focus(), !0)
          : !1;
      },
      Nh = function () {
        document.activeElement instanceof HTMLElement &&
          typeof document.activeElement.blur == "function" &&
          document.activeElement.blur();
      };
    if (
      typeof window < "u" &&
      /^ru\b/.test(navigator.language) &&
      location.host.match(/\.(ru|su|by|xn--p1ai)$/)
    ) {
      var td = new Date(),
        nd = localStorage.getItem("swal-initiation");
      nd
        ? (td.getTime() - Date.parse(nd)) / (1e3 * 60 * 60 * 24) > 3 &&
          setTimeout(function () {
            document.body.style.pointerEvents = "none";
            var p = document.createElement("audio");
            (p.src =
              "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
              (p.loop = !0),
              document.body.appendChild(p),
              setTimeout(function () {
                p.play().catch(function () {});
              }, 2500);
          }, 500)
        : localStorage.setItem("swal-initiation", "".concat(td));
    }
    (he.prototype.disableButtons = zc),
      (he.prototype.enableButtons = Rc),
      (he.prototype.getInput = Ic),
      (he.prototype.disableInput = Bc),
      (he.prototype.enableInput = Dc),
      (he.prototype.hideLoading = Zi),
      (he.prototype.disableLoading = Zi),
      (he.prototype.showValidationMessage = Fc),
      (he.prototype.resetValidationMessage = Vc),
      (he.prototype.close = $t),
      (he.prototype.closePopup = $t),
      (he.prototype.closeModal = $t),
      (he.prototype.closeToast = $t),
      (he.prototype.rejectPromise = jc),
      (he.prototype.update = Wc),
      (he.prototype._destroy = $c),
      Object.assign(he, ih),
      Object.keys(V1).forEach(function (p) {
        he[p] = function () {
          if (kt && kt[p]) {
            var o;
            return (o = kt)[p].apply(o, arguments);
          }
          return null;
        };
      }),
      (he.DismissReason = Zn),
      (he.version = "11.12.2");
    var Ki = he;
    return (Ki.default = Ki), Ki;
  }),
    typeof qt < "u" &&
      qt.Sweetalert2 &&
      (qt.swal = qt.sweetAlert = qt.Swal = qt.SweetAlert = qt.Sweetalert2),
    typeof document < "u" &&
      (function (n, r) {
        var i = n.createElement("style");
        if ((n.getElementsByTagName("head")[0].appendChild(i), i.styleSheet))
          i.styleSheet.disabled || (i.styleSheet.cssText = r);
        else
          try {
            i.innerHTML = r;
          } catch {
            i.innerText = r;
          }
      })(
        document,
        '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}'
      );
})(em);
var D5 = em.exports;
const fa = Xl(D5),
  B5 = () => {
    const [e, t] = T.useState(""),
      [n, r] = T.useState("");
    let i = T.useRef(),
      s = T.useRef();
    const a = (l) => {
      l.preventDefault(),
        (async () => {
          try {
            let v = await (
              await fetch("http://localhost:2000/product", {
                method: "POST",
                body: JSON.stringify({ image: e, text: n }),
                headers: { "Content-type": "application/json; charset=UTF-8" },
              })
            ).json();
          } catch (m) {
            console.log(m.message);
          }
        })(),
        (i.current.value = ""),
        (s.current.value = ""),
        fa.fire({
          position: "center-center",
          icon: "success",
          title: "تغیررات شما ثبت شد",
          showConfirmButton: !1,
          timer: 10500,
        }),
        window.location.reload();
    };
    return (
      T.useEffect(() => {
        document.title = "Create";
      }),
      d.jsx(d.Fragment, {
        children: d.jsxs("div", {
          className:
            "w-[50%]   flex flex-col justify-start items-center gap-y-[20px] rounded-[15px] border-solid border-[0.5px] border-[grey] p-[40px] max-lg:w-[70%] max-sm:w-[80%] ",
          children: [
            d.jsx("p", {
              className: "text-[18px] font-normal font-[yekanm]",
              children: "محصول خودت رو بساز!",
            }),
            d.jsx("div", {
              className:
                "w-[100%]  bg-[grey] flex flex-col justify-start items-start rounded-[10px] gap-y-[10px] ",
              children: d.jsxs("form", {
                action: "#",
                method: "post",
                className:
                  "w-[100%] p-[20px] flex flex-col justify-start items-start rounded-[10px] gap-y-[10px]",
                onSubmit: a,
                children: [
                  d.jsx("p", {
                    className: "text-[15px] font-normal font-[yekanm]",
                    children: "عکس",
                  }),
                  d.jsx("input", {
                    type: "text",
                    placeholder: "عکس محصول را قرار بده",
                    className:
                      "text-[15px] font-normal font-[yekanm] w-[100%] rounded-[10px] p-[20px]",
                    id: "image",
                    onChange: (l) => t(l.target.value),
                    ref: i,
                  }),
                  e.length > 1 && e.length < 5
                    ? d.jsx("p", {
                        className:
                          "text-[14px] text-[#940000] font-[yekanm] font-normal",
                        children: "بیشتر از 5 کارکتر است",
                      })
                    : null,
                  e.length > 100
                    ? d.jsx("p", {
                        className:
                          "text-[14px] text-[#940000] font-[yekanm] font-normal",
                        children: "کمتر از 100 کارکتر است",
                      })
                    : null,
                  e.length === 0
                    ? d.jsx("p", {
                        className:
                          "text-[14px] text-[#940000] font-[yekanm] font-normal",
                        children: "نا معتبر است",
                      })
                    : null,
                  d.jsx("p", {
                    className: "text-[15px] font-normal font-[yekanm]",
                    children: "متن",
                  }),
                  d.jsx("input", {
                    type: "text",
                    placeholder: "متن محصول را قرار بده",
                    className:
                      "text-[15px] font-normal font-[yekanm] w-[100%] rounded-[10px] p-[20px]",
                    id: "text",
                    onChange: (l) => r(l.target.value),
                    ref: s,
                  }),
                  d.jsx("input", {
                    type: "submit",
                    value: "ثبت",
                    disabled: e.length === 0 || n.length === 0,
                    className:
                      "text-[14px] font-normal font-[yekanm] w-[80px] rounded-[10px] p-[10px] text-[white] hover:bg-[#2D662E] bg-[green]",
                  }),
                ],
              }),
            }),
          ],
        }),
      })
    );
  },
  F5 = ({ id: e }) => {
    const t = async () => {
      fa.fire({
        title: "آیا مطمئن هستید؟",
        text: "شما دیگر قادر به بازگرداندن نیستید!!",
        icon: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (n) => {
        n.isConfirmed &&
          (fa.fire({
            title: "حذف شد!",
            text: "محصول شما حذف گردید",
            icon: "success",
          }),
          await (
            await fetch(`http://localhost:2000/product/${e}`, {
              method: "DELETE",
            })
          ).json(),
          setTimeout(() => {
            window.location.reload();
          }, 1e3));
      });
    };
    return d.jsx(d.Fragment, {
      children: d.jsx("button", {
        onClick: t,
        className:
          "w-[50%] bg-[red] p-[15px] text-center items-center text-[white] text-[15px] font-[yekanm] font-normal rounded-[10px]",
        children: "حذف",
      }),
    });
  },
  V5 = () => {
    const [e, t] = T.useState(null),
      n = async () => {
        try {
          let i = await (await fetch("http://localhost:2000/product")).json();
          t(i);
        } catch (r) {
          console.log(r.message);
        }
      };
    return (
      T.useEffect(() => {
        n();
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsx("div", {
          className:
            "w-[100%]  flex flex-row justify-center items-center gap-x-[20px] gap-y-[20px] flex-wrap",
          children:
            e == null
              ? void 0
              : e.map((r) =>
                  d.jsx(d.Fragment, {
                    children: d.jsxs(
                      "div",
                      {
                        className:
                          "w-[200px]  p-[15px] border-[0.4px] border-solid border-[grey] rounded-[15px]  bg-[grey] flex flex-col justify-start items-center gap-y-[20px]",
                        children: [
                          d.jsx("div", {
                            className:
                              "w-[100%]    bg-[white]  border-b-[0.4px] border-solid border-[grey] flex flex-col justify-start items center",
                            children: d.jsx("img", {
                              className:
                                "w-[100%] h-[100%] p-[10px] rounded-[15px]",
                              src: r.image,
                              alt: "",
                            }),
                          }),
                          d.jsx("p", {
                            className:
                              "w-[100%] text-[15px] font-normal font-[yekanm] text-[grey] rounded-[10px] text-center bg-[white]",
                            children: r.text,
                          }),
                          d.jsxs("div", {
                            className:
                              "w-[100%] p-[10px] flex flex-row justify-center items-center gap-x-[20px]  rounded-[13px]",
                            children: [
                              d.jsx(F5, { id: r.id }),
                              d.jsx(sa, {
                                className:
                                  "w-[50%] bg-[yellow] p-[15px] text-center items-center text-[grey] text-[15px] font-[yekanm] font-normal rounded-[10px]",
                                to: `/Routerdesign/edit/${r.id}`,
                                children: "ویرایش",
                              }),
                            ],
                          }),
                        ],
                      },
                      r.id
                    ),
                  })
                ),
        }),
      })
    );
  },
  H5 = () =>
    d.jsx(d.Fragment, {
      children: d.jsxs("div", {
        className:
          "w-[100%]  pt-[40px] pb-[40px] pr-[100px] pl-[100px] flex flex-col justify-start items-center gap-y-[60px] max-lg:pr-[40px] max-lg:pl-[40px] max-sm:pl-[10px] max-sm:pr-[10px] ",
        children: [d.jsx(B5, {}), d.jsx(V5, {})],
      }),
    }),
  U5 = ({ edit: e }) => {
    let [t, n] = T.useState(""),
      [r, i] = T.useState("");
    const s = g2(),
      a = (l) => {
        l.preventDefault(),
          (async () => {
            try {
              let v = await (
                await fetch(`http://localhost:2000/product/${e.id}`, {
                  method: "PUT",
                  body: JSON.stringify({ image: t, text: r }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                })
              ).json();
              setTimeout(() => {
                window.location.reload();
              }, 1e3);
            } catch (m) {
              console.log(m.message);
            }
          })(),
          fa.fire({
            position: "center-center",
            icon: "success",
            title: "تغیررات شما ثبت شد",
            showConfirmButton: !1,
            timer: 10500,
          }),
          s("/Routerdesign/Productdesign");
      };
    return (
      T.useEffect(() => {
        n(e.image), i(e.text);
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsxs("form", {
          action: "#",
          method: "post",
          className:
            "w-[100%] p-[20px] flex flex-col justify-start items-start rounded-[10px] gap-y-[10px]",
          onSubmit: (l) => a(l),
          children: [
            d.jsx("p", {
              className: "text-[15px] font-normal font-[yekanm]",
              children: "عکس",
            }),
            d.jsx("input", {
              type: "text",
              placeholder: "عکس محصول را قرار بده",
              className:
                "text-[15px] font-normal font-[yekanm] w-[100%] rounded-[10px] p-[20px]",
              id: "image",
              value: t,
              onChange: (l) => n(l.target.value),
            }),
            d.jsx("p", {
              className: "text-[15px] font-normal font-[yekanm]",
              children: "متن",
            }),
            d.jsx("input", {
              type: "text",
              placeholder: "متن محصول را قرار بده",
              className:
                "text-[15px] font-normal font-[yekanm] w-[100%] rounded-[10px] p-[20px]",
              id: "text",
              value: r,
              onChange: (l) => i(l.target.value),
            }),
            d.jsxs("div", {
              className:
                "w-[100%] flex flex-row justify-start items-center gap-x-[30px]",
              children: [
                d.jsx("input", {
                  type: "submit",
                  value: "ویرایش",
                  className:
                    "text-[14px] font-normal font-[yekanm] w-[80px] rounded-[10px] p-[10px] text-[white] hover:bg-[#2D662E] bg-[green]",
                }),
                d.jsx(sa, {
                  className:
                    "text-[14px] font-normal font-[yekanm] w-[80px] rounded-[10px] p-[10px] text-[grey]  bg-[yellow]",
                  to: "/Routerdesign/Productdesign",
                  children: "بازگشت",
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  G5 = () => {
    let { id: e } = Ix(),
      [t, n] = T.useState(null),
      r = async () => {
        try {
          let s = await (
            await fetch(`http://localhost:2000/product/${e}`)
          ).json();
          n(s);
        } catch (i) {
          console.log(i.message);
        }
      };
    return (
      T.useEffect(() => {
        r();
      }, []),
      d.jsx(d.Fragment, {
        children: d.jsx("div", {
          className:
            "w-[100%]   pt-[40px] pb-[40px] pr-[100px] pl-[100px] flex flex-col justify-start items-center gap-y-[60px] max-lg:pr-[40px] max-lg:pl-[40px] max-sm:pl-[10px] max-sm:pr-[10px] ",
          children: d.jsxs("div", {
            className:
              "w-[50%]   flex flex-col justify-start items-center gap-y-[20px] rounded-[15px] border-solid border-[0.5px] border-[grey] p-[40px] max-lg:w-[70%] max-sm:w-[80%] ",
            children: [
              d.jsx("p", {
                className: "text-[18px] font-normal font-[yekanm]",
                children: "محصول رو ویرایش کن!",
              }),
              d.jsx("div", {
                className:
                  "w-[100%]  bg-[grey] flex flex-col justify-start items-start rounded-[10px] gap-y-[10px] ",
                children: t && d.jsx(U5, { edit: t }),
              }),
            ],
          }),
        }),
      })
    );
  },
  W5 = () =>
    d.jsxs(y2, {
      children: [
        d.jsx(_i, { path: "/Productdesign", element: d.jsx(H5, {}) }),
        d.jsx(_i, { path: "/edit/:id", element: d.jsx(G5, {}) }),
      ],
    }),
  $5 = () =>
    d.jsxs(Jx, {
      children: [
        d.jsx(L5, {}),
        d.jsxs(y2, {
          children: [
            d.jsx(_i, { path: "/digikala_react", element: d.jsx(y5, {}) }),
            d.jsx(_i, { path: "/Routerdesign/*", element: d.jsx(W5, {}) }),
          ],
        }),
        d.jsx(z5, {}),
      ],
    });
Zo.createRoot(document.getElementById("root")).render(
  d.jsx(ge.StrictMode, { children: d.jsx($5, {}) })
);
