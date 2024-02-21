/*! For license information please see main.a2247de6.js.LICENSE.txt */
!(function () {
  var e = {
      110: function (e, t, n) {
        "use strict";
        var r = n(309),
          i = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          a = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          o = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          l = {};
        function u(e) {
          return r.isMemo(e) ? o : l[e.$$typeof] || i;
        }
        (l[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (l[r.Memo] = o);
        var s = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          d = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          h = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" !== typeof n) {
            if (h) {
              var i = p(n);
              i && i !== h && e(t, i, r);
            }
            var o = c(n);
            f && (o = o.concat(f(n)));
            for (var l = u(t), m = u(n), v = 0; v < o.length; ++v) {
              var g = o[v];
              if (!a[g] && (!r || !r[g]) && (!m || !m[g]) && (!l || !l[g])) {
                var y = d(n, g);
                try {
                  s(t, g, y);
                } catch (b) {}
              }
            }
          }
          return t;
        };
      },
      746: function (e, t) {
        "use strict";
        var n = "function" === typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          i = n ? Symbol.for("react.portal") : 60106,
          a = n ? Symbol.for("react.fragment") : 60107,
          o = n ? Symbol.for("react.strict_mode") : 60108,
          l = n ? Symbol.for("react.profiler") : 60114,
          u = n ? Symbol.for("react.provider") : 60109,
          s = n ? Symbol.for("react.context") : 60110,
          c = n ? Symbol.for("react.async_mode") : 60111,
          f = n ? Symbol.for("react.concurrent_mode") : 60111,
          d = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          h = n ? Symbol.for("react.suspense_list") : 60120,
          m = n ? Symbol.for("react.memo") : 60115,
          v = n ? Symbol.for("react.lazy") : 60116,
          g = n ? Symbol.for("react.block") : 60121,
          y = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          w = n ? Symbol.for("react.scope") : 60119;
        function C(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case c:
                  case f:
                  case a:
                  case l:
                  case o:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case s:
                      case d:
                      case v:
                      case m:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case i:
                return t;
            }
          }
        }
        function x(e) {
          return C(e) === f;
        }
        (t.AsyncMode = c),
          (t.ConcurrentMode = f),
          (t.ContextConsumer = s),
          (t.ContextProvider = u),
          (t.Element = r),
          (t.ForwardRef = d),
          (t.Fragment = a),
          (t.Lazy = v),
          (t.Memo = m),
          (t.Portal = i),
          (t.Profiler = l),
          (t.StrictMode = o),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return x(e) || C(e) === c;
          }),
          (t.isConcurrentMode = x),
          (t.isContextConsumer = function (e) {
            return C(e) === s;
          }),
          (t.isContextProvider = function (e) {
            return C(e) === u;
          }),
          (t.isElement = function (e) {
            return "object" === typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return C(e) === d;
          }),
          (t.isFragment = function (e) {
            return C(e) === a;
          }),
          (t.isLazy = function (e) {
            return C(e) === v;
          }),
          (t.isMemo = function (e) {
            return C(e) === m;
          }),
          (t.isPortal = function (e) {
            return C(e) === i;
          }),
          (t.isProfiler = function (e) {
            return C(e) === l;
          }),
          (t.isStrictMode = function (e) {
            return C(e) === o;
          }),
          (t.isSuspense = function (e) {
            return C(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" === typeof e ||
              "function" === typeof e ||
              e === a ||
              e === f ||
              e === l ||
              e === o ||
              e === p ||
              e === h ||
              ("object" === typeof e &&
                null !== e &&
                (e.$$typeof === v ||
                  e.$$typeof === m ||
                  e.$$typeof === u ||
                  e.$$typeof === s ||
                  e.$$typeof === d ||
                  e.$$typeof === y ||
                  e.$$typeof === b ||
                  e.$$typeof === w ||
                  e.$$typeof === g))
            );
          }),
          (t.typeOf = C);
      },
      309: function (e, t, n) {
        "use strict";
        e.exports = n(746);
      },
      725: function (e) {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function i(e) {
          if (null === e || void 0 === e)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (i) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, a) {
              for (var o, l, u = i(e), s = 1; s < arguments.length; s++) {
                for (var c in (o = Object(arguments[s])))
                  n.call(o, c) && (u[c] = o[c]);
                if (t) {
                  l = t(o);
                  for (var f = 0; f < l.length; f++)
                    r.call(o, l[f]) && (u[l[f]] = o[l[f]]);
                }
              }
              return u;
            };
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          i = n(725),
          a = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
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
        if (!r) throw Error(o(227));
        var l = new Set(),
          u = {};
        function s(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var f = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = Object.prototype.hasOwnProperty,
          h = {},
          m = {};
        function v(e, t, n, r, i, a, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = o);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function w(e, t, n, r) {
          var i = g.hasOwnProperty(t) ? g[t] : null;
          (null !== i
            ? 0 === i.type
            : !r &&
              2 < t.length &&
              ("o" === t[0] || "O" === t[0]) &&
              ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, i, r) && (n = null),
            r || null === i
              ? (function (e) {
                  return (
                    !!p.call(m, e) ||
                    (!p.call(h, e) &&
                      (d.test(e) ? (m[e] = !0) : ((h[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, b);
            g[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, b);
              g[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, b);
            g[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var C = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = 60103,
          E = 60106,
          S = 60107,
          O = 60108,
          j = 60114,
          k = 60109,
          _ = 60110,
          N = 60112,
          T = 60113,
          L = 60120,
          R = 60115,
          I = 60116,
          M = 60121,
          P = 60128,
          A = 60129,
          D = 60130,
          V = 60131;
        if ("function" === typeof Symbol && Symbol.for) {
          var B = Symbol.for;
          (x = B("react.element")),
            (E = B("react.portal")),
            (S = B("react.fragment")),
            (O = B("react.strict_mode")),
            (j = B("react.profiler")),
            (k = B("react.provider")),
            (_ = B("react.context")),
            (N = B("react.forward_ref")),
            (T = B("react.suspense")),
            (L = B("react.suspense_list")),
            (R = B("react.memo")),
            (I = B("react.lazy")),
            (M = B("react.block")),
            B("react.scope"),
            (P = B("react.opaque.id")),
            (A = B("react.debug_trace_mode")),
            (D = B("react.offscreen")),
            (V = B("react.legacy_hidden"));
        }
        var H,
          F = "function" === typeof Symbol && Symbol.iterator;
        function U(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (F && e[F]) || e["@@iterator"])
            ? e
            : null;
        }
        function z(e) {
          if (void 0 === H)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              H = (t && t[1]) || "";
            }
          return "\n" + H + e;
        }
        var G = !1;
        function Z(e, t) {
          if (!e || G) return "";
          G = !0;
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
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var i = u.stack.split("\n"),
                  a = r.stack.split("\n"),
                  o = i.length - 1,
                  l = a.length - 1;
                1 <= o && 0 <= l && i[o] !== a[l];

              )
                l--;
              for (; 1 <= o && 0 <= l; o--, l--)
                if (i[o] !== a[l]) {
                  if (1 !== o || 1 !== l)
                    do {
                      if ((o--, 0 > --l || i[o] !== a[l]))
                        return "\n" + i[o].replace(" at new ", " at ");
                    } while (1 <= o && 0 <= l);
                  break;
                }
            }
          } finally {
            (G = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? z(e) : "";
        }
        function q(e) {
          switch (e.tag) {
            case 5:
              return z(e.type);
            case 16:
              return z("Lazy");
            case 13:
              return z("Suspense");
            case 19:
              return z("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = Z(e.type, !1));
            case 11:
              return (e = Z(e.type.render, !1));
            case 22:
              return (e = Z(e.type._render, !1));
            case 1:
              return (e = Z(e.type, !0));
            default:
              return "";
          }
        }
        function W(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case E:
              return "Portal";
            case j:
              return "Profiler";
            case O:
              return "StrictMode";
            case T:
              return "Suspense";
            case L:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case _:
                return (e.displayName || "Context") + ".Consumer";
              case k:
                return (e._context.displayName || "Context") + ".Provider";
              case N:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName ||
                    ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case R:
                return W(e.type);
              case M:
                return W(e._render);
              case I:
                (t = e._payload), (e = e._init);
                try {
                  return W(e(t));
                } catch (n) {}
            }
          return null;
        }
        function $(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function K(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Y(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = K(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = K(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function X(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return i({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function ee(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = $(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function te(e, t) {
          null != (t = t.checked) && w(e, "checked", t, !1);
        }
        function ne(e, t) {
          te(e, t);
          var n = $(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ie(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ie(e, t.type, $(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ie(e, t, n) {
          ("number" === t && X(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function ae(e, t) {
          return (
            (e = i({ children: void 0 }, t)),
            (t = (function (e) {
              var t = "";
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function oe(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + $(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function le(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return i({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ue(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: $(n) };
        }
        function se(e, t) {
          var n = $(t.value),
            r = $(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ce(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        var fe = "http://www.w3.org/1999/xhtml",
          de = "http://www.w3.org/2000/svg";
        function pe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function he(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? pe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var me,
          ve,
          ge =
            ((ve = function (e, t) {
              if (e.namespaceURI !== de || "innerHTML" in e) e.innerHTML = t;
              else {
                for (
                  (me = me || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = me.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ve(e, t);
                  });
                }
              : ve);
        function ye(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var be = {
            animationIterationCount: !0,
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
          we = ["Webkit", "ms", "Moz", "O"];
        function Ce(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (be.hasOwnProperty(e) && be[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function xe(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                i = Ce(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
            }
        }
        Object.keys(be).forEach(function (e) {
          we.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (be[t] = be[e]);
          });
        });
        var Ee = i(
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
        function Se(e, t) {
          if (t) {
            if (
              Ee[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function Oe(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
        function je(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          _e = null,
          Ne = null;
        function Te(e) {
          if ((e = ri(e))) {
            if ("function" !== typeof ke) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = ai(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Le(e) {
          _e ? (Ne ? Ne.push(e) : (Ne = [e])) : (_e = e);
        }
        function Re() {
          if (_e) {
            var e = _e,
              t = Ne;
            if (((Ne = _e = null), Te(e), t))
              for (e = 0; e < t.length; e++) Te(t[e]);
          }
        }
        function Ie(e, t) {
          return e(t);
        }
        function Me(e, t, n, r, i) {
          return e(t, n, r, i);
        }
        function Pe() {}
        var Ae = Ie,
          De = !1,
          Ve = !1;
        function Be() {
          (null === _e && null === Ne) || (Pe(), Re());
        }
        function He(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ai(n);
          if (null === r) return null;
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
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Fe = !1;
        if (f)
          try {
            var Ue = {};
            Object.defineProperty(Ue, "passive", {
              get: function () {
                Fe = !0;
              },
            }),
              window.addEventListener("test", Ue, Ue),
              window.removeEventListener("test", Ue, Ue);
          } catch (ve) {
            Fe = !1;
          }
        function ze(e, t, n, r, i, a, o, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Ge = !1,
          Ze = null,
          qe = !1,
          We = null,
          $e = {
            onError: function (e) {
              (Ge = !0), (Ze = e);
            },
          };
        function Ke(e, t, n, r, i, a, o, l, u) {
          (Ge = !1), (Ze = null), ze.apply($e, arguments);
        }
        function Ye(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Qe(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Xe(e) {
          if (Ye(e) !== e) throw Error(o(188));
        }
        function Je(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ye(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var a = i.alternate;
                if (null === a) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === a.child) {
                  for (a = i.child; a; ) {
                    if (a === n) return Xe(i), e;
                    if (a === r) return Xe(i), t;
                    a = a.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = i), (r = a);
                else {
                  for (var l = !1, u = i.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = i), (r = a);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = i), (n = a);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = a.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = a), (r = i);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = a), (n = i);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function et(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var tt,
          nt,
          rt,
          it,
          at = !1,
          ot = [],
          lt = null,
          ut = null,
          st = null,
          ct = new Map(),
          ft = new Map(),
          dt = [],
          pt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function ht(e, t, n, r, i) {
          return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: 16 | n,
            nativeEvent: i,
            targetContainers: [r],
          };
        }
        function mt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              lt = null;
              break;
            case "dragenter":
            case "dragleave":
              ut = null;
              break;
            case "mouseover":
            case "mouseout":
              st = null;
              break;
            case "pointerover":
            case "pointerout":
              ct.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              ft.delete(t.pointerId);
          }
        }
        function vt(e, t, n, r, i, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = ht(t, n, r, i, a)),
              null !== t && null !== (t = ri(t)) && nt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function gt(e) {
          var t = ni(e.target);
          if (null !== t) {
            var n = Ye(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Qe(n)))
                  return (
                    (e.blockedOn = t),
                    void it(e.lanePriority, function () {
                      a.unstable_runWithPriority(e.priority, function () {
                        rt(n);
                      });
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function yt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ri(n)) && nt(t), (e.blockedOn = n), !1;
            t.shift();
          }
          return !0;
        }
        function bt(e, t, n) {
          yt(e) && n.delete(t);
        }
        function wt() {
          for (at = !1; 0 < ot.length; ) {
            var e = ot[0];
            if (null !== e.blockedOn) {
              null !== (e = ri(e.blockedOn)) && tt(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var n = Jt(
                e.domEventName,
                e.eventSystemFlags,
                t[0],
                e.nativeEvent
              );
              if (null !== n) {
                e.blockedOn = n;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && ot.shift();
          }
          null !== lt && yt(lt) && (lt = null),
            null !== ut && yt(ut) && (ut = null),
            null !== st && yt(st) && (st = null),
            ct.forEach(bt),
            ft.forEach(bt);
        }
        function Ct(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            at ||
              ((at = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, wt)));
        }
        function xt(e) {
          function t(t) {
            return Ct(t, e);
          }
          if (0 < ot.length) {
            Ct(ot[0], e);
            for (var n = 1; n < ot.length; n++) {
              var r = ot[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== lt && Ct(lt, e),
              null !== ut && Ct(ut, e),
              null !== st && Ct(st, e),
              ct.forEach(t),
              ft.forEach(t),
              n = 0;
            n < dt.length;
            n++
          )
            (r = dt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < dt.length && null === (n = dt[0]).blockedOn; )
            gt(n), null === n.blockedOn && dt.shift();
        }
        function Et(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var St = {
            animationend: Et("Animation", "AnimationEnd"),
            animationiteration: Et("Animation", "AnimationIteration"),
            animationstart: Et("Animation", "AnimationStart"),
            transitionend: Et("Transition", "TransitionEnd"),
          },
          Ot = {},
          jt = {};
        function kt(e) {
          if (Ot[e]) return Ot[e];
          if (!St[e]) return e;
          var t,
            n = St[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in jt) return (Ot[e] = n[t]);
          return e;
        }
        f &&
          ((jt = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete St.animationend.animation,
            delete St.animationiteration.animation,
            delete St.animationstart.animation),
          "TransitionEvent" in window || delete St.transitionend.transition);
        var _t = kt("animationend"),
          Nt = kt("animationiteration"),
          Tt = kt("animationstart"),
          Lt = kt("transitionend"),
          Rt = new Map(),
          It = new Map(),
          Mt = [
            "abort",
            "abort",
            _t,
            "animationEnd",
            Nt,
            "animationIteration",
            Tt,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            Lt,
            "transitionEnd",
            "waiting",
            "waiting",
          ];
        function Pt(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              i = e[n + 1];
            (i = "on" + (i[0].toUpperCase() + i.slice(1))),
              It.set(r, t),
              Rt.set(r, i),
              s(i, [r]);
          }
        }
        (0, a.unstable_now)();
        var At = 8;
        function Dt(e) {
          if (0 !== (1 & e)) return (At = 15), 1;
          if (0 !== (2 & e)) return (At = 14), 2;
          if (0 !== (4 & e)) return (At = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((At = 12), t)
            : 0 !== (32 & e)
            ? ((At = 11), 32)
            : 0 !== (t = 192 & e)
            ? ((At = 10), t)
            : 0 !== (256 & e)
            ? ((At = 9), 256)
            : 0 !== (t = 3584 & e)
            ? ((At = 8), t)
            : 0 !== (4096 & e)
            ? ((At = 7), 4096)
            : 0 !== (t = 4186112 & e)
            ? ((At = 6), t)
            : 0 !== (t = 62914560 & e)
            ? ((At = 5), t)
            : 67108864 & e
            ? ((At = 4), 67108864)
            : 0 !== (134217728 & e)
            ? ((At = 3), 134217728)
            : 0 !== (t = 805306368 & e)
            ? ((At = 2), t)
            : 0 !== (1073741824 & e)
            ? ((At = 1), 1073741824)
            : ((At = 8), e);
        }
        function Vt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (At = 0);
          var r = 0,
            i = 0,
            a = e.expiredLanes,
            o = e.suspendedLanes,
            l = e.pingedLanes;
          if (0 !== a) (r = a), (i = At = 15);
          else if (0 !== (a = 134217727 & n)) {
            var u = a & ~o;
            0 !== u
              ? ((r = Dt(u)), (i = At))
              : 0 !== (l &= a) && ((r = Dt(l)), (i = At));
          } else
            0 !== (a = n & ~o)
              ? ((r = Dt(a)), (i = At))
              : 0 !== l && ((r = Dt(l)), (i = At));
          if (0 === r) return 0;
          if (
            ((r = n & (((0 > (r = 31 - Gt(r)) ? 0 : 1 << r) << 1) - 1)),
            0 !== t && t !== r && 0 === (t & o))
          ) {
            if ((Dt(t), i <= At)) return t;
            At = i;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; )
              (i = 1 << (n = 31 - Gt(t))), (r |= e[n]), (t &= ~i);
          return r;
        }
        function Bt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function Ht(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = Ft(24 & ~t)) ? Ht(10, t) : e;
            case 10:
              return 0 === (e = Ft(192 & ~t)) ? Ht(8, t) : e;
            case 8:
              return (
                0 === (e = Ft(3584 & ~t)) &&
                  0 === (e = Ft(4186112 & ~t)) &&
                  (e = 512),
                e
              );
            case 2:
              return 0 === (t = Ft(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(o(358, e));
        }
        function Ft(e) {
          return e & -e;
        }
        function Ut(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function zt(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r),
            (e.pingedLanes &= r),
            ((e = e.eventTimes)[(t = 31 - Gt(t))] = n);
        }
        var Gt = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - ((Zt(e) / qt) | 0)) | 0;
              },
          Zt = Math.log,
          qt = Math.LN2;
        var Wt = a.unstable_UserBlockingPriority,
          $t = a.unstable_runWithPriority,
          Kt = !0;
        function Yt(e, t, n, r) {
          De || Pe();
          var i = Xt,
            a = De;
          De = !0;
          try {
            Me(i, e, t, n, r);
          } finally {
            (De = a) || Be();
          }
        }
        function Qt(e, t, n, r) {
          $t(Wt, Xt.bind(null, e, t, n, r));
        }
        function Xt(e, t, n, r) {
          var i;
          if (Kt)
            if ((i = 0 === (4 & t)) && 0 < ot.length && -1 < pt.indexOf(e))
              (e = ht(null, e, t, n, r)), ot.push(e);
            else {
              var a = Jt(e, t, n, r);
              if (null === a) i && mt(e, r);
              else {
                if (i) {
                  if (-1 < pt.indexOf(e))
                    return (e = ht(a, e, t, n, r)), void ot.push(e);
                  if (
                    (function (e, t, n, r, i) {
                      switch (t) {
                        case "focusin":
                          return (lt = vt(lt, e, t, n, r, i)), !0;
                        case "dragenter":
                          return (ut = vt(ut, e, t, n, r, i)), !0;
                        case "mouseover":
                          return (st = vt(st, e, t, n, r, i)), !0;
                        case "pointerover":
                          var a = i.pointerId;
                          return (
                            ct.set(a, vt(ct.get(a) || null, e, t, n, r, i)), !0
                          );
                        case "gotpointercapture":
                          return (
                            (a = i.pointerId),
                            ft.set(a, vt(ft.get(a) || null, e, t, n, r, i)),
                            !0
                          );
                      }
                      return !1;
                    })(a, e, t, n, r)
                  )
                    return;
                  mt(e, r);
                }
                Pr(e, t, r, null, n);
              }
            }
        }
        function Jt(e, t, n, r) {
          var i = je(r);
          if (null !== (i = ni(i))) {
            var a = Ye(i);
            if (null === a) i = null;
            else {
              var o = a.tag;
              if (13 === o) {
                if (null !== (i = Qe(a))) return i;
                i = null;
              } else if (3 === o) {
                if (a.stateNode.hydrate)
                  return 3 === a.tag ? a.stateNode.containerInfo : null;
                i = null;
              } else a !== i && (i = null);
            }
          }
          return Pr(e, t, r, i, n), null;
        }
        var en = null,
          tn = null,
          nn = null;
        function rn() {
          if (nn) return nn;
          var e,
            t,
            n = tn,
            r = n.length,
            i = "value" in en ? en.value : en.textContent,
            a = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
          return (nn = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function an(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function on() {
          return !0;
        }
        function ln() {
          return !1;
        }
        function un(e) {
          function t(t, n, r, i, a) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? on
                : ln),
              (this.isPropagationStopped = ln),
              this
            );
          }
          return (
            i(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = on));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = on));
              },
              persist: function () {},
              isPersistent: on,
            }),
            t
          );
        }
        var sn,
          cn,
          fn,
          dn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          pn = un(dn),
          hn = i({}, dn, { view: 0, detail: 0 }),
          mn = un(hn),
          vn = i({}, hn, {
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
            getModifierState: _n,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== fn &&
                    (fn && "mousemove" === e.type
                      ? ((sn = e.screenX - fn.screenX),
                        (cn = e.screenY - fn.screenY))
                      : (cn = sn = 0),
                    (fn = e)),
                  sn);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : cn;
            },
          }),
          gn = un(vn),
          yn = un(i({}, vn, { dataTransfer: 0 })),
          bn = un(i({}, hn, { relatedTarget: 0 })),
          wn = un(
            i({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Cn = i({}, dn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          xn = un(Cn),
          En = un(i({}, dn, { data: 0 })),
          Sn = {
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
          On = {
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
          jn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function kn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = jn[e]) && !!t[e];
        }
        function _n() {
          return kn;
        }
        var Nn = i({}, hn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = an(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? On[e.keyCode] || "Unidentified"
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
            getModifierState: _n,
            charCode: function (e) {
              return "keypress" === e.type ? an(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? an(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Tn = un(Nn),
          Ln = un(
            i({}, vn, {
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
            })
          ),
          Rn = un(
            i({}, hn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: _n,
            })
          ),
          In = un(
            i({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Mn = i({}, vn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
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
          Pn = un(Mn),
          An = [9, 13, 27, 32],
          Dn = f && "CompositionEvent" in window,
          Vn = null;
        f && "documentMode" in document && (Vn = document.documentMode);
        var Bn = f && "TextEvent" in window && !Vn,
          Hn = f && (!Dn || (Vn && 8 < Vn && 11 >= Vn)),
          Fn = String.fromCharCode(32),
          Un = !1;
        function zn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== An.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Gn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Zn = !1;
        var qn = {
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
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!qn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Le(r),
            0 < (t = Dr(t, "onChange")).length &&
              ((n = new pn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Kn = null,
          Yn = null;
        function Qn(e) {
          Nr(e, 0);
        }
        function Xn(e) {
          if (Q(ii(e))) return e;
        }
        function Jn(e, t) {
          if ("change" === e) return t;
        }
        var er = !1;
        if (f) {
          var tr;
          if (f) {
            var nr = "oninput" in document;
            if (!nr) {
              var rr = document.createElement("div");
              rr.setAttribute("oninput", "return;"),
                (nr = "function" === typeof rr.oninput);
            }
            tr = nr;
          } else tr = !1;
          er = tr && (!document.documentMode || 9 < document.documentMode);
        }
        function ir() {
          Kn && (Kn.detachEvent("onpropertychange", ar), (Yn = Kn = null));
        }
        function ar(e) {
          if ("value" === e.propertyName && Xn(Yn)) {
            var t = [];
            if (($n(t, Yn, e, je(e)), (e = Qn), De)) e(t);
            else {
              De = !0;
              try {
                Ie(e, t);
              } finally {
                (De = !1), Be();
              }
            }
          }
        }
        function or(e, t, n) {
          "focusin" === e
            ? (ir(), (Yn = n), (Kn = t).attachEvent("onpropertychange", ar))
            : "focusout" === e && ir();
        }
        function lr(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Xn(Yn);
        }
        function ur(e, t) {
          if ("click" === e) return Xn(t);
        }
        function sr(e, t) {
          if ("input" === e || "change" === e) return Xn(t);
        }
        var cr =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          fr = Object.prototype.hasOwnProperty;
        function dr(e, t) {
          if (cr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++)
            if (!fr.call(t, n[r]) || !cr(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function pr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function hr(e, t) {
          var n,
            r = pr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = pr(r);
          }
        }
        function mr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? mr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function vr() {
          for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = X((e = t.contentWindow).document);
          }
          return t;
        }
        function gr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var yr = f && "documentMode" in document && 11 >= document.documentMode,
          br = null,
          wr = null,
          Cr = null,
          xr = !1;
        function Er(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          xr ||
            null == br ||
            br !== X(r) ||
            ("selectionStart" in (r = br) && gr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (Cr && dr(Cr, r)) ||
              ((Cr = r),
              0 < (r = Dr(wr, "onSelect")).length &&
                ((t = new pn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = br))));
        }
        Pt(
          "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " "
          ),
          0
        ),
          Pt(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " "
            ),
            1
          ),
          Pt(Mt, 2);
        for (
          var Sr =
              "change selectionchange textInput compositionstart compositionend compositionupdate".split(
                " "
              ),
            Or = 0;
          Or < Sr.length;
          Or++
        )
          It.set(Sr[Or], 0);
        c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var jr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          kr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(jr)
          );
        function _r(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, i, a, l, u, s) {
              if ((Ke.apply(this, arguments), Ge)) {
                if (!Ge) throw Error(o(198));
                var c = Ze;
                (Ge = !1), (Ze = null), qe || ((qe = !0), (We = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Nr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var l = r[o],
                    u = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), u !== a && i.isPropagationStopped()))
                    break e;
                  _r(i, l, s), (a = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (l = r[o]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    u !== a && i.isPropagationStopped())
                  )
                    break e;
                  _r(i, l, s), (a = u);
                }
            }
          }
          if (qe) throw ((e = We), (qe = !1), (We = null), e);
        }
        function Tr(e, t) {
          var n = oi(t),
            r = e + "__bubble";
          n.has(r) || (Mr(t, e, 2, !1), n.add(r));
        }
        var Lr = "_reactListening" + Math.random().toString(36).slice(2);
        function Rr(e) {
          e[Lr] ||
            ((e[Lr] = !0),
            l.forEach(function (t) {
              kr.has(t) || Ir(t, !1, e, null), Ir(t, !0, e, null);
            }));
        }
        function Ir(e, t, n, r) {
          var i =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            a = n;
          if (
            ("selectionchange" === e &&
              9 !== n.nodeType &&
              (a = n.ownerDocument),
            null !== r && !t && kr.has(e))
          ) {
            if ("scroll" !== e) return;
            (i |= 2), (a = r);
          }
          var o = oi(a),
            l = e + "__" + (t ? "capture" : "bubble");
          o.has(l) || (t && (i |= 4), Mr(a, e, i, t), o.add(l));
        }
        function Mr(e, t, n, r) {
          var i = It.get(t);
          switch (void 0 === i ? 2 : i) {
            case 0:
              i = Yt;
              break;
            case 1:
              i = Qt;
              break;
            default:
              i = Xt;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !Fe ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function Pr(e, t, n, r, i) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var l = r.stateNode.containerInfo;
                if (l === i || (8 === l.nodeType && l.parentNode === i)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === i ||
                        (8 === u.nodeType && u.parentNode === i))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== l; ) {
                  if (null === (o = ni(l))) return;
                  if (5 === (u = o.tag) || 6 === u) {
                    r = a = o;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          !(function (e, t, n) {
            if (Ve) return e(t, n);
            Ve = !0;
            try {
              Ae(e, t, n);
            } finally {
              (Ve = !1), Be();
            }
          })(function () {
            var r = a,
              i = je(n),
              o = [];
            e: {
              var l = Rt.get(e);
              if (void 0 !== l) {
                var u = pn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === an(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Tn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = bn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = bn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = bn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = gn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = yn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Rn;
                    break;
                  case _t:
                  case Nt:
                  case Tt:
                    u = wn;
                    break;
                  case Lt:
                    u = In;
                    break;
                  case "scroll":
                    u = mn;
                    break;
                  case "wheel":
                    u = Pn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = xn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Ln;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = He(h, d)) &&
                        c.push(Ar(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new u(l, s, null, n, i)),
                  o.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  0 !== (16 & t) ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ni(s) && !s[ei])) &&
                  (u || l) &&
                  ((l =
                    i.window === i
                      ? i
                      : (l = i.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ni(s)
                          : null) &&
                        (s !== (f = Ye(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = gn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Ln),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? l : ii(u)),
                  (p = null == s ? l : ii(s)),
                  ((l = new c(m, h + "leave", u, n, i)).target = f),
                  (l.relatedTarget = p),
                  (m = null),
                  ni(i) === r &&
                    (((c = new c(d, h + "enter", s, n, i)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = Vr(p)) h++;
                    for (p = 0, m = d; m; m = Vr(m)) p++;
                    for (; 0 < h - p; ) (c = Vr(c)), h--;
                    for (; 0 < p - h; ) (d = Vr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Vr(c)), (d = Vr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Br(o, l, u, c, !1),
                  null !== s && null !== f && Br(o, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (l = r ? ii(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var v = Jn;
              else if (Wn(l))
                if (er) v = sr;
                else {
                  v = lr;
                  var g = or;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (v = ur);
              switch (
                (v && (v = v(e, r))
                  ? $n(o, v, n, i)
                  : (g && g(e, l, r),
                    "focusout" === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      "number" === l.type &&
                      ie(l, "number", l.value)),
                (g = r ? ii(r) : window),
                e)
              ) {
                case "focusin":
                  (Wn(g) || "true" === g.contentEditable) &&
                    ((br = g), (wr = r), (Cr = null));
                  break;
                case "focusout":
                  Cr = wr = br = null;
                  break;
                case "mousedown":
                  xr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (xr = !1), Er(o, n, i);
                  break;
                case "selectionchange":
                  if (yr) break;
                case "keydown":
                case "keyup":
                  Er(o, n, i);
              }
              var y;
              if (Dn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Zn
                  ? zn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Hn &&
                  "ko" !== n.locale &&
                  (Zn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Zn && (y = rn())
                    : ((tn = "value" in (en = i) ? en.value : en.textContent),
                      (Zn = !0))),
                0 < (g = Dr(r, b)).length &&
                  ((b = new En(b, e, null, n, i)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Gn(n)) && (b.data = y))),
                (y = Bn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Gn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Un = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && Un ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Zn)
                        return "compositionend" === e || (!Dn && zn(e, t))
                          ? ((e = rn()), (nn = tn = en = null), (Zn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Hn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Dr(r, "onBeforeInput")).length &&
                  ((i = new En("onBeforeInput", "beforeinput", null, n, i)),
                  o.push({ event: i, listeners: r }),
                  (i.data = y));
            }
            Nr(o, t);
          });
        }
        function Ar(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Dr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              a = i.stateNode;
            5 === i.tag &&
              null !== a &&
              ((i = a),
              null != (a = He(e, n)) && r.unshift(Ar(e, a, i)),
              null != (a = He(e, t)) && r.push(Ar(e, a, i))),
              (e = e.return);
          }
          return r;
        }
        function Vr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Br(e, t, n, r, i) {
          for (var a = t._reactName, o = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              i
                ? null != (u = He(n, a)) && o.unshift(Ar(n, u, l))
                : i || (null != (u = He(n, a)) && o.push(Ar(n, u, l)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        function Hr() {}
        var Fr = null,
          Ur = null;
        function zr(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function Gr(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Zr = "function" === typeof setTimeout ? setTimeout : void 0,
          qr = "function" === typeof clearTimeout ? clearTimeout : void 0;
        function Wr(e) {
          1 === e.nodeType
            ? (e.textContent = "")
            : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
        }
        function $r(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Kr(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var Yr = 0;
        var Qr = Math.random().toString(36).slice(2),
          Xr = "__reactFiber$" + Qr,
          Jr = "__reactProps$" + Qr,
          ei = "__reactContainer$" + Qr,
          ti = "__reactEvents$" + Qr;
        function ni(e) {
          var t = e[Xr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ei] || n[Xr])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = Kr(e); null !== e; ) {
                  if ((n = e[Xr])) return n;
                  e = Kr(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ri(e) {
          return !(e = e[Xr] || e[ei]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ii(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function ai(e) {
          return e[Jr] || null;
        }
        function oi(e) {
          var t = e[ti];
          return void 0 === t && (t = e[ti] = new Set()), t;
        }
        var li = [],
          ui = -1;
        function si(e) {
          return { current: e };
        }
        function ci(e) {
          0 > ui || ((e.current = li[ui]), (li[ui] = null), ui--);
        }
        function fi(e, t) {
          ui++, (li[ui] = e.current), (e.current = t);
        }
        var di = {},
          pi = si(di),
          hi = si(!1),
          mi = di;
        function vi(e, t) {
          var n = e.type.contextTypes;
          if (!n) return di;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            a = {};
          for (i in n) a[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function gi(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function yi() {
          ci(hi), ci(pi);
        }
        function bi(e, t, n) {
          if (pi.current !== di) throw Error(o(168));
          fi(pi, t), fi(hi, n);
        }
        function wi(e, t, n) {
          var r = e.stateNode;
          if (
            ((e = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in e)) throw Error(o(108, W(t) || "Unknown", a));
          return i({}, n, r);
        }
        function Ci(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              di),
            (mi = pi.current),
            fi(pi, e),
            fi(hi, hi.current),
            !0
          );
        }
        function xi(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = wi(e, t, mi)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              ci(hi),
              ci(pi),
              fi(pi, e))
            : ci(hi),
            fi(hi, n);
        }
        var Ei = null,
          Si = null,
          Oi = a.unstable_runWithPriority,
          ji = a.unstable_scheduleCallback,
          ki = a.unstable_cancelCallback,
          _i = a.unstable_shouldYield,
          Ni = a.unstable_requestPaint,
          Ti = a.unstable_now,
          Li = a.unstable_getCurrentPriorityLevel,
          Ri = a.unstable_ImmediatePriority,
          Ii = a.unstable_UserBlockingPriority,
          Mi = a.unstable_NormalPriority,
          Pi = a.unstable_LowPriority,
          Ai = a.unstable_IdlePriority,
          Di = {},
          Vi = void 0 !== Ni ? Ni : function () {},
          Bi = null,
          Hi = null,
          Fi = !1,
          Ui = Ti(),
          zi =
            1e4 > Ui
              ? Ti
              : function () {
                  return Ti() - Ui;
                };
        function Gi() {
          switch (Li()) {
            case Ri:
              return 99;
            case Ii:
              return 98;
            case Mi:
              return 97;
            case Pi:
              return 96;
            case Ai:
              return 95;
            default:
              throw Error(o(332));
          }
        }
        function Zi(e) {
          switch (e) {
            case 99:
              return Ri;
            case 98:
              return Ii;
            case 97:
              return Mi;
            case 96:
              return Pi;
            case 95:
              return Ai;
            default:
              throw Error(o(332));
          }
        }
        function qi(e, t) {
          return (e = Zi(e)), Oi(e, t);
        }
        function Wi(e, t, n) {
          return (e = Zi(e)), ji(e, t, n);
        }
        function $i() {
          if (null !== Hi) {
            var e = Hi;
            (Hi = null), ki(e);
          }
          Ki();
        }
        function Ki() {
          if (!Fi && null !== Bi) {
            Fi = !0;
            var e = 0;
            try {
              var t = Bi;
              qi(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (Bi = null);
            } catch (n) {
              throw (null !== Bi && (Bi = Bi.slice(e + 1)), ji(Ri, $i), n);
            } finally {
              Fi = !1;
            }
          }
        }
        var Yi = C.ReactCurrentBatchConfig;
        function Qi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = i({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Xi = si(null),
          Ji = null,
          ea = null,
          ta = null;
        function na() {
          ta = ea = Ji = null;
        }
        function ra(e) {
          var t = Xi.current;
          ci(Xi), (e.type._context._currentValue = t);
        }
        function ia(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function aa(e, t) {
          (Ji = e),
            (ta = ea = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (Do = !0), (e.firstContext = null));
        }
        function oa(e, t) {
          if (ta !== e && !1 !== t && 0 !== t)
            if (
              (("number" === typeof t && 1073741823 !== t) ||
                ((ta = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === ea)
            ) {
              if (null === Ji) throw Error(o(308));
              (ea = t),
                (Ji.dependencies = {
                  lanes: 0,
                  firstContext: t,
                  responders: null,
                });
            } else ea = ea.next = t;
          return e._currentValue;
        }
        var la = !1;
        function ua(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function sa(e, t) {
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
        function ca(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function fa(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (e.pending = t);
          }
        }
        function da(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
              } while (null !== n);
              null === a ? (i = a = t) : (a = a.next = t);
            } else i = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function pa(e, t, n, r) {
          var a = e.updateQueue;
          la = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            u = a.shared.pending;
          if (null !== u) {
            a.shared.pending = null;
            var s = u,
              c = s.next;
            (s.next = null), null === l ? (o = c) : (l.next = c), (l = s);
            var f = e.alternate;
            if (null !== f) {
              var d = (f = f.updateQueue).lastBaseUpdate;
              d !== l &&
                (null === d ? (f.firstBaseUpdate = c) : (d.next = c),
                (f.lastBaseUpdate = s));
            }
          }
          if (null !== o) {
            for (d = a.baseState, l = 0, f = c = s = null; ; ) {
              u = o.lane;
              var p = o.eventTime;
              if ((r & u) === u) {
                null !== f &&
                  (f = f.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = o;
                  switch (((u = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, u);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-4097 & h.flags) | 64;
                    case 0:
                      if (
                        null ===
                          (u =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, u)
                              : h) ||
                        void 0 === u
                      )
                        break e;
                      d = i({}, d, u);
                      break e;
                    case 2:
                      la = !0;
                  }
                }
                null !== o.callback &&
                  ((e.flags |= 32),
                  null === (u = a.effects) ? (a.effects = [o]) : u.push(o));
              } else
                (p = {
                  eventTime: p,
                  lane: u,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === f ? ((c = f = p), (s = d)) : (f = f.next = p),
                  (l |= u);
              if (null === (o = o.next)) {
                if (null === (u = a.shared.pending)) break;
                (o = u.next),
                  (u.next = null),
                  (a.lastBaseUpdate = u),
                  (a.shared.pending = null);
              }
            }
            null === f && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = f),
              (Fl |= l),
              (e.lanes = l),
              (e.memoizedState = d);
          }
        }
        function ha(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), "function" !== typeof i))
                  throw Error(o(191, i));
                i.call(r);
              }
            }
        }
        var ma = new r.Component().refs;
        function va(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : i({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ga = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ye(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = du(),
              i = pu(e),
              a = ca(r, i);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              fa(e, a),
              hu(e, i, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = du(),
              i = pu(e),
              a = ca(r, i);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              fa(e, a),
              hu(e, i, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = du(),
              r = pu(e),
              i = ca(n, r);
            (i.tag = 2),
              void 0 !== t && null !== t && (i.callback = t),
              fa(e, i),
              hu(e, r, n);
          },
        };
        function ya(e, t, n, r, i, a, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !dr(n, r) ||
                !dr(i, a);
        }
        function ba(e, t, n) {
          var r = !1,
            i = di,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = oa(a))
              : ((i = gi(t) ? mi : pi.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? vi(e, i)
                  : di)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ga),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function wa(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ga.enqueueReplaceState(t, t.state, null);
        }
        function Ca(e, t, n, r) {
          var i = e.stateNode;
          (i.props = n), (i.state = e.memoizedState), (i.refs = ma), ua(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (i.context = oa(a))
            : ((a = gi(t) ? mi : pi.current), (i.context = vi(e, a))),
            pa(e, n, i, r),
            (i.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (va(e, t, a, n), (i.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof i.getSnapshotBeforeUpdate ||
              ("function" !== typeof i.UNSAFE_componentWillMount &&
                "function" !== typeof i.componentWillMount) ||
              ((t = i.state),
              "function" === typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" === typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && ga.enqueueReplaceState(i, i.state, null),
              pa(e, n, i, r),
              (i.state = e.memoizedState)),
            "function" === typeof i.componentDidMount && (e.flags |= 4);
        }
        var xa = Array.isArray;
        function Ea(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === ma && (t = r.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Sa(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              o(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t
              )
            );
        }
        function Oa(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r
                ? ((r.nextEffect = n), (t.lastEffect = n))
                : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function i(e, t) {
            return ((e = qu(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags = 2), n)
                    : r
                  : ((t.flags = 2), n)
                : n
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Yu(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = i(t, n.props)).ref = Ea(e, t, n)), (r.return = e), r)
              : (((r = Wu(n.type, n.key, n.props, null, e.mode, r)).ref = Ea(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Qu(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = $u(n, e.mode, r, a)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if ("string" === typeof t || "number" === typeof t)
              return ((t = Yu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Wu(t.type, t.key, t.props, null, e.mode, n)).ref = Ea(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case E:
                  return ((t = Qu(t, e.mode, n)).return = e), t;
              }
              if (xa(t) || U(t))
                return ((t = $u(t, e.mode, n, null)).return = e), t;
              Sa(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if ("string" === typeof n || "number" === typeof n)
              return null !== i ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === i
                    ? n.type === S
                      ? f(e, t, n.props.children, r, i)
                      : s(e, t, n, r)
                    : null;
                case E:
                  return n.key === i ? c(e, t, n, r) : null;
              }
              if (xa(n) || U(n)) return null !== i ? null : f(e, t, n, r, null);
              Sa(e, n);
            }
            return null;
          }
          function h(e, t, n, r, i) {
            if ("string" === typeof r || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === S
                      ? f(t, e, r.props.children, i, r.key)
                      : s(t, e, r, i)
                  );
                case E:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
              }
              if (xa(r) || U(r))
                return f(t, (e = e.get(n) || null), r, i, null);
              Sa(t, r);
            }
            return null;
          }
          function m(i, o, l, u) {
            for (
              var s = null, c = null, f = o, m = (o = 0), v = null;
              null !== f && m < l.length;
              m++
            ) {
              f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
              var g = p(i, f, l[m], u);
              if (null === g) {
                null === f && (f = v);
                break;
              }
              e && f && null === g.alternate && t(i, f),
                (o = a(g, o, m)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (f = v);
            }
            if (m === l.length) return n(i, f), s;
            if (null === f) {
              for (; m < l.length; m++)
                null !== (f = d(i, l[m], u)) &&
                  ((o = a(f, o, m)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return s;
            }
            for (f = r(i, f); m < l.length; m++)
              null !== (v = h(f, i, m, l[m], u)) &&
                (e &&
                  null !== v.alternate &&
                  f.delete(null === v.key ? m : v.key),
                (o = a(v, o, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                f.forEach(function (e) {
                  return t(i, e);
                }),
              s
            );
          }
          function v(i, l, u, s) {
            var c = U(u);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (u = c.call(u))) throw Error(o(151));
            for (
              var f = (c = null), m = l, v = (l = 0), g = null, y = u.next();
              null !== m && !y.done;
              v++, y = u.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(i, m, y.value, s);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(i, m),
                (l = a(b, l, v)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = g);
            }
            if (y.done) return n(i, m), c;
            if (null === m) {
              for (; !y.done; v++, y = u.next())
                null !== (y = d(i, y.value, s)) &&
                  ((l = a(y, l, v)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return c;
            }
            for (m = r(i, m); !y.done; v++, y = u.next())
              null !== (y = h(m, i, v, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? v : y.key),
                (l = a(y, l, v)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(i, e);
                }),
              c
            );
          }
          return function (e, r, a, u) {
            var s =
              "object" === typeof a &&
              null !== a &&
              a.type === S &&
              null === a.key;
            s && (a = a.props.children);
            var c = "object" === typeof a && null !== a;
            if (c)
              switch (a.$$typeof) {
                case x:
                  e: {
                    for (c = a.key, s = r; null !== s; ) {
                      if (s.key === c) {
                        if (7 === s.tag) {
                          if (a.type === S) {
                            n(e, s.sibling),
                              ((r = i(s, a.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                        } else if (s.elementType === a.type) {
                          n(e, s.sibling),
                            ((r = i(s, a.props)).ref = Ea(e, s, a)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                        n(e, s);
                        break;
                      }
                      t(e, s), (s = s.sibling);
                    }
                    a.type === S
                      ? (((r = $u(a.props.children, e.mode, u, a.key)).return =
                          e),
                        (e = r))
                      : (((u = Wu(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          e.mode,
                          u
                        )).ref = Ea(e, r, a)),
                        (u.return = e),
                        (e = u));
                  }
                  return l(e);
                case E:
                  e: {
                    for (s = a.key; null !== r; ) {
                      if (r.key === s) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === a.containerInfo &&
                          r.stateNode.implementation === a.implementation
                        ) {
                          n(e, r.sibling),
                            ((r = i(r, a.children || [])).return = e),
                            (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Qu(a, e.mode, u)).return = e), (e = r);
                  }
                  return l(e);
              }
            if ("string" === typeof a || "number" === typeof a)
              return (
                (a = "" + a),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = i(r, a)).return = e), (e = r))
                  : (n(e, r), ((r = Yu(a, e.mode, u)).return = e), (e = r)),
                l(e)
              );
            if (xa(a)) return m(e, r, a, u);
            if (U(a)) return v(e, r, a, u);
            if ((c && Sa(e, a), "undefined" === typeof a && !s))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(o(152, W(e.type) || "Component"));
              }
            return n(e, r);
          };
        }
        var ja = Oa(!0),
          ka = Oa(!1),
          _a = {},
          Na = si(_a),
          Ta = si(_a),
          La = si(_a);
        function Ra(e) {
          if (e === _a) throw Error(o(174));
          return e;
        }
        function Ia(e, t) {
          switch ((fi(La, t), fi(Ta, e), fi(Na, _a), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : he(null, "");
              break;
            default:
              t = he(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          ci(Na), fi(Na, t);
        }
        function Ma() {
          ci(Na), ci(Ta), ci(La);
        }
        function Pa(e) {
          Ra(La.current);
          var t = Ra(Na.current),
            n = he(t, e.type);
          t !== n && (fi(Ta, e), fi(Na, n));
        }
        function Aa(e) {
          Ta.current === e && (ci(Na), ci(Ta));
        }
        var Da = si(0);
        function Va(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Ba = null,
          Ha = null,
          Fa = !1;
        function Ua(e, t) {
          var n = Gu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function za(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) && ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), !0)
              );
            default:
              return !1;
          }
        }
        function Ga(e) {
          if (Fa) {
            var t = Ha;
            if (t) {
              var n = t;
              if (!za(e, t)) {
                if (!(t = $r(n.nextSibling)) || !za(e, t))
                  return (
                    (e.flags = (-1025 & e.flags) | 2), (Fa = !1), void (Ba = e)
                  );
                Ua(Ba, n);
              }
              (Ba = e), (Ha = $r(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Fa = !1), (Ba = e);
          }
        }
        function Za(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Ba = e;
        }
        function qa(e) {
          if (e !== Ba) return !1;
          if (!Fa) return Za(e), (Fa = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !Gr(t, e.memoizedProps))
          )
            for (t = Ha; t; ) Ua(e, t), (t = $r(t.nextSibling));
          if ((Za(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Ha = $r(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Ha = null;
            }
          } else Ha = Ba ? $r(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Wa() {
          (Ha = Ba = null), (Fa = !1);
        }
        var $a = [];
        function Ka() {
          for (var e = 0; e < $a.length; e++)
            $a[e]._workInProgressVersionPrimary = null;
          $a.length = 0;
        }
        var Ya = C.ReactCurrentDispatcher,
          Qa = C.ReactCurrentBatchConfig,
          Xa = 0,
          Ja = null,
          eo = null,
          to = null,
          no = !1,
          ro = !1;
        function io() {
          throw Error(o(321));
        }
        function ao(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!cr(e[n], t[n])) return !1;
          return !0;
        }
        function oo(e, t, n, r, i, a) {
          if (
            ((Xa = a),
            (Ja = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Ya.current = null === e || null === e.memoizedState ? Io : Mo),
            (e = n(r, i)),
            ro)
          ) {
            a = 0;
            do {
              if (((ro = !1), !(25 > a))) throw Error(o(301));
              (a += 1),
                (to = eo = null),
                (t.updateQueue = null),
                (Ya.current = Po),
                (e = n(r, i));
            } while (ro);
          }
          if (
            ((Ya.current = Ro),
            (t = null !== eo && null !== eo.next),
            (Xa = 0),
            (to = eo = Ja = null),
            (no = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function lo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === to ? (Ja.memoizedState = to = e) : (to = to.next = e), to
          );
        }
        function uo() {
          if (null === eo) {
            var e = Ja.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = eo.next;
          var t = null === to ? Ja.memoizedState : to.next;
          if (null !== t) (to = t), (eo = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (eo = e).memoizedState,
              baseState: eo.baseState,
              baseQueue: eo.baseQueue,
              queue: eo.queue,
              next: null,
            }),
              null === to ? (Ja.memoizedState = to = e) : (to = to.next = e);
          }
          return to;
        }
        function so(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function co(e) {
          var t = uo(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = eo,
            i = r.baseQueue,
            a = n.pending;
          if (null !== a) {
            if (null !== i) {
              var l = i.next;
              (i.next = a.next), (a.next = l);
            }
            (r.baseQueue = i = a), (n.pending = null);
          }
          if (null !== i) {
            (i = i.next), (r = r.baseState);
            var u = (l = a = null),
              s = i;
            do {
              var c = s.lane;
              if ((Xa & c) === c)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: s.action,
                      eagerReducer: s.eagerReducer,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
              else {
                var f = {
                  lane: c,
                  action: s.action,
                  eagerReducer: s.eagerReducer,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === u ? ((l = u = f), (a = r)) : (u = u.next = f),
                  (Ja.lanes |= c),
                  (Fl |= c);
              }
              s = s.next;
            } while (null !== s && s !== i);
            null === u ? (a = r) : (u.next = l),
              cr(r, t.memoizedState) || (Do = !0),
              (t.memoizedState = r),
              (t.baseState = a),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function fo(e) {
          var t = uo(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            a = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var l = (i = i.next);
            do {
              (a = e(a, l.action)), (l = l.next);
            } while (l !== i);
            cr(a, t.memoizedState) || (Do = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function po(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var i = t._workInProgressVersionPrimary;
          if (
            (null !== i
              ? (e = i === r)
              : ((e = e.mutableReadLanes),
                (e = (Xa & e) === e) &&
                  ((t._workInProgressVersionPrimary = r), $a.push(t))),
            e)
          )
            return n(t._source);
          throw ($a.push(t), Error(o(350)));
        }
        function ho(e, t, n, r) {
          var i = Il;
          if (null === i) throw Error(o(349));
          var a = t._getVersion,
            l = a(t._source),
            u = Ya.current,
            s = u.useState(function () {
              return po(i, t, n);
            }),
            c = s[1],
            f = s[0];
          s = to;
          var d = e.memoizedState,
            p = d.refs,
            h = p.getSnapshot,
            m = d.source;
          d = d.subscribe;
          var v = Ja;
          return (
            (e.memoizedState = { refs: p, source: t, subscribe: r }),
            u.useEffect(
              function () {
                (p.getSnapshot = n), (p.setSnapshot = c);
                var e = a(t._source);
                if (!cr(l, e)) {
                  (e = n(t._source)),
                    cr(f, e) ||
                      (c(e),
                      (e = pu(v)),
                      (i.mutableReadLanes |= e & i.pendingLanes)),
                    (e = i.mutableReadLanes),
                    (i.entangledLanes |= e);
                  for (var r = i.entanglements, o = e; 0 < o; ) {
                    var u = 31 - Gt(o),
                      s = 1 << u;
                    (r[u] |= e), (o &= ~s);
                  }
                }
              },
              [n, t, r]
            ),
            u.useEffect(
              function () {
                return r(t._source, function () {
                  var e = p.getSnapshot,
                    n = p.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = pu(v);
                    i.mutableReadLanes |= r & i.pendingLanes;
                  } catch (a) {
                    n(function () {
                      throw a;
                    });
                  }
                });
              },
              [t, r]
            ),
            (cr(h, n) && cr(m, t) && cr(d, r)) ||
              (((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: so,
                lastRenderedState: f,
              }).dispatch = c =
                Lo.bind(null, Ja, e)),
              (s.queue = e),
              (s.baseQueue = null),
              (f = po(i, t, n)),
              (s.memoizedState = s.baseState = f)),
            f
          );
        }
        function mo(e, t, n) {
          return ho(uo(), e, t, n);
        }
        function vo(e) {
          var t = lo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: so,
                lastRenderedState: e,
              }).dispatch =
              Lo.bind(null, Ja, e)),
            [t.memoizedState, e]
          );
        }
        function go(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = Ja.updateQueue)
              ? ((t = { lastEffect: null }),
                (Ja.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function yo(e) {
          return (e = { current: e }), (lo().memoizedState = e);
        }
        function bo() {
          return uo().memoizedState;
        }
        function wo(e, t, n, r) {
          var i = lo();
          (Ja.flags |= e),
            (i.memoizedState = go(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Co(e, t, n, r) {
          var i = uo();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== eo) {
            var o = eo.memoizedState;
            if (((a = o.destroy), null !== r && ao(r, o.deps)))
              return void go(t, n, a, r);
          }
          (Ja.flags |= e), (i.memoizedState = go(1 | t, n, a, r));
        }
        function xo(e, t) {
          return wo(516, 4, e, t);
        }
        function Eo(e, t) {
          return Co(516, 4, e, t);
        }
        function So(e, t) {
          return Co(4, 2, e, t);
        }
        function Oo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function jo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Co(4, 2, Oo.bind(null, t, e), n)
          );
        }
        function ko() {}
        function _o(e, t) {
          var n = uo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ao(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function No(e, t) {
          var n = uo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ao(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function To(e, t) {
          var n = Gi();
          qi(98 > n ? 98 : n, function () {
            e(!0);
          }),
            qi(97 < n ? 97 : n, function () {
              var n = Qa.transition;
              Qa.transition = 1;
              try {
                e(!1), t();
              } finally {
                Qa.transition = n;
              }
            });
        }
        function Lo(e, t, n) {
          var r = du(),
            i = pu(e),
            a = {
              lane: i,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            o = t.pending;
          if (
            (null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
            (t.pending = a),
            (o = e.alternate),
            e === Ja || (null !== o && o === Ja))
          )
            ro = no = !0;
          else {
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  u = o(l, n);
                if (((a.eagerReducer = o), (a.eagerState = u), cr(u, l)))
                  return;
              } catch (s) {}
            hu(e, i, r);
          }
        }
        var Ro = {
            readContext: oa,
            useCallback: io,
            useContext: io,
            useEffect: io,
            useImperativeHandle: io,
            useLayoutEffect: io,
            useMemo: io,
            useReducer: io,
            useRef: io,
            useState: io,
            useDebugValue: io,
            useDeferredValue: io,
            useTransition: io,
            useMutableSource: io,
            useOpaqueIdentifier: io,
            unstable_isNewReconciler: !1,
          },
          Io = {
            readContext: oa,
            useCallback: function (e, t) {
              return (lo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: oa,
            useEffect: xo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                wo(4, 2, Oo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return wo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = lo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = lo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  Lo.bind(null, Ja, e)),
                [r.memoizedState, e]
              );
            },
            useRef: yo,
            useState: vo,
            useDebugValue: ko,
            useDeferredValue: function (e) {
              var t = vo(e),
                n = t[0],
                r = t[1];
              return (
                xo(
                  function () {
                    var t = Qa.transition;
                    Qa.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Qa.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = vo(!1),
                t = e[0];
              return yo((e = To.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = lo();
              return (
                (r.memoizedState = {
                  refs: { getSnapshot: t, setSnapshot: null },
                  source: e,
                  subscribe: n,
                }),
                ho(r, e, t, n)
              );
            },
            useOpaqueIdentifier: function () {
              if (Fa) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: P, toString: e, valueOf: e };
                  })(function () {
                    throw (
                      (e || ((e = !0), n("r:" + (Yr++).toString(36))),
                      Error(o(355)))
                    );
                  }),
                  n = vo(t)[1];
                return (
                  0 === (2 & Ja.mode) &&
                    ((Ja.flags |= 516),
                    go(
                      5,
                      function () {
                        n("r:" + (Yr++).toString(36));
                      },
                      void 0,
                      null
                    )),
                  t
                );
              }
              return vo((t = "r:" + (Yr++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          Mo = {
            readContext: oa,
            useCallback: _o,
            useContext: oa,
            useEffect: Eo,
            useImperativeHandle: jo,
            useLayoutEffect: So,
            useMemo: No,
            useReducer: co,
            useRef: bo,
            useState: function () {
              return co(so);
            },
            useDebugValue: ko,
            useDeferredValue: function (e) {
              var t = co(so),
                n = t[0],
                r = t[1];
              return (
                Eo(
                  function () {
                    var t = Qa.transition;
                    Qa.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Qa.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = co(so)[0];
              return [bo().current, e];
            },
            useMutableSource: mo,
            useOpaqueIdentifier: function () {
              return co(so)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Po = {
            readContext: oa,
            useCallback: _o,
            useContext: oa,
            useEffect: Eo,
            useImperativeHandle: jo,
            useLayoutEffect: So,
            useMemo: No,
            useReducer: fo,
            useRef: bo,
            useState: function () {
              return fo(so);
            },
            useDebugValue: ko,
            useDeferredValue: function (e) {
              var t = fo(so),
                n = t[0],
                r = t[1];
              return (
                Eo(
                  function () {
                    var t = Qa.transition;
                    Qa.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Qa.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = fo(so)[0];
              return [bo().current, e];
            },
            useMutableSource: mo,
            useOpaqueIdentifier: function () {
              return fo(so)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Ao = C.ReactCurrentOwner,
          Do = !1;
        function Vo(e, t, n, r) {
          t.child = null === e ? ka(t, null, n, r) : ja(t, e.child, n, r);
        }
        function Bo(e, t, n, r, i) {
          n = n.render;
          var a = t.ref;
          return (
            aa(t, i),
            (r = oo(e, t, n, r, a, i)),
            null === e || Do
              ? ((t.flags |= 1), Vo(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~i),
                al(e, t, i))
          );
        }
        function Ho(e, t, n, r, i, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Zu(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Wu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Fo(e, t, o, r, i, a));
          }
          return (
            (o = e.child),
            0 === (i & a) &&
            ((i = o.memoizedProps),
            (n = null !== (n = n.compare) ? n : dr)(i, r) && e.ref === t.ref)
              ? al(e, t, a)
              : ((t.flags |= 1),
                ((e = qu(o, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Fo(e, t, n, r, i, a) {
          if (null !== e && dr(e.memoizedProps, r) && e.ref === t.ref) {
            if (((Do = !1), 0 === (a & i)))
              return (t.lanes = e.lanes), al(e, t, a);
            0 !== (16384 & e.flags) && (Do = !0);
          }
          return Go(e, t, n, r, a);
        }
        function Uo(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 === (4 & t.mode))
              (t.memoizedState = { baseLanes: 0 }), xu(t, n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  xu(t, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }),
                xu(t, null !== a ? a.baseLanes : n);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              xu(t, r);
          return Vo(e, t, i, n), t.child;
        }
        function zo(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            (t.flags |= 128);
        }
        function Go(e, t, n, r, i) {
          var a = gi(n) ? mi : pi.current;
          return (
            (a = vi(t, a)),
            aa(t, i),
            (n = oo(e, t, n, r, a, i)),
            null === e || Do
              ? ((t.flags |= 1), Vo(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~i),
                al(e, t, i))
          );
        }
        function Zo(e, t, n, r, i) {
          if (gi(n)) {
            var a = !0;
            Ci(t);
          } else a = !1;
          if ((aa(t, i), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              ba(t, n, r),
              Ca(t, n, r, i),
              (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              l = t.memoizedProps;
            o.props = l;
            var u = o.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = oa(s))
              : (s = vi(t, (s = gi(n) ? mi : pi.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== r || u !== s) && wa(t, o, r, s)),
              (la = !1);
            var d = t.memoizedState;
            (o.state = d),
              pa(t, r, o, i),
              (u = t.memoizedState),
              l !== r || d !== u || hi.current || la
                ? ("function" === typeof c &&
                    (va(t, n, c, r), (u = t.memoizedState)),
                  (l = la || ya(t, n, l, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = l))
                : ("function" === typeof o.componentDidMount && (t.flags |= 4),
                  (r = !1));
          } else {
            (o = t.stateNode),
              sa(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : Qi(t.type, l)),
              (o.props = s),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = oa(u))
                : (u = vi(t, (u = gi(n) ? mi : pi.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== f || d !== u) && wa(t, o, r, u)),
              (la = !1),
              (d = t.memoizedState),
              (o.state = d),
              pa(t, r, o, i);
            var h = t.memoizedState;
            l !== f || d !== h || hi.current || la
              ? ("function" === typeof p &&
                  (va(t, n, p, r), (h = t.memoizedState)),
                (s = la || ya(t, n, s, r, d, h, u))
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, u),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 256))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = u),
                (r = s))
              : ("function" !== typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return qo(e, t, n, r, a, i);
        }
        function qo(e, t, n, r, i, a) {
          zo(e, t);
          var o = 0 !== (64 & t.flags);
          if (!r && !o) return i && xi(t, n, !1), al(e, t, a);
          (r = t.stateNode), (Ao.current = t);
          var l =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = ja(t, e.child, null, a)),
                (t.child = ja(t, null, l, a)))
              : Vo(e, t, l, a),
            (t.memoizedState = r.state),
            i && xi(t, n, !0),
            t.child
          );
        }
        function Wo(e) {
          var t = e.stateNode;
          t.pendingContext
            ? bi(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && bi(0, t.context, !1),
            Ia(e, t.containerInfo);
        }
        var $o,
          Ko,
          Yo,
          Qo = { dehydrated: null, retryLane: 0 };
        function Xo(e, t, n) {
          var r,
            i = t.pendingProps,
            a = Da.current,
            o = !1;
          return (
            (r = 0 !== (64 & t.flags)) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)),
            r
              ? ((o = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === i.fallback ||
                !0 === i.unstable_avoidThisFallback ||
                (a |= 1),
            fi(Da, 1 & a),
            null === e
              ? (void 0 !== i.fallback && Ga(t),
                (e = i.children),
                (a = i.fallback),
                o
                  ? ((e = Jo(t, e, a, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Qo),
                    e)
                  : "number" === typeof i.unstable_expectedLoadTime
                  ? ((e = Jo(t, e, a, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Qo),
                    (t.lanes = 33554432),
                    e)
                  : (((n = Ku(
                      { mode: "visible", children: e },
                      t.mode,
                      n,
                      null
                    )).return = t),
                    (t.child = n)))
              : (e.memoizedState,
                o
                  ? ((i = tl(e, t, i.children, i.fallback, n)),
                    (o = t.child),
                    (a = e.child.memoizedState),
                    (o.memoizedState =
                      null === a
                        ? { baseLanes: n }
                        : { baseLanes: a.baseLanes | n }),
                    (o.childLanes = e.childLanes & ~n),
                    (t.memoizedState = Qo),
                    i)
                  : ((n = el(e, t, i.children, n)),
                    (t.memoizedState = null),
                    n))
          );
        }
        function Jo(e, t, n, r) {
          var i = e.mode,
            a = e.child;
          return (
            (t = { mode: "hidden", children: t }),
            0 === (2 & i) && null !== a
              ? ((a.childLanes = 0), (a.pendingProps = t))
              : (a = Ku(t, i, 0, null)),
            (n = $u(n, i, r, null)),
            (a.return = e),
            (n.return = e),
            (a.sibling = n),
            (e.child = a),
            n
          );
        }
        function el(e, t, n, r) {
          var i = e.child;
          return (
            (e = i.sibling),
            (n = qu(i, { mode: "visible", children: n })),
            0 === (2 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e &&
              ((e.nextEffect = null),
              (e.flags = 8),
              (t.firstEffect = t.lastEffect = e)),
            (t.child = n)
          );
        }
        function tl(e, t, n, r, i) {
          var a = t.mode,
            o = e.child;
          e = o.sibling;
          var l = { mode: "hidden", children: n };
          return (
            0 === (2 & a) && t.child !== o
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = l),
                null !== (o = n.lastEffect)
                  ? ((t.firstEffect = n.firstEffect),
                    (t.lastEffect = o),
                    (o.nextEffect = null))
                  : (t.firstEffect = t.lastEffect = null))
              : (n = qu(o, l)),
            null !== e ? (r = qu(e, r)) : ((r = $u(r, a, i, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function nl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), ia(e.return, t);
        }
        function rl(e, t, n, r, i, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
                lastEffect: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = i),
              (o.lastEffect = a));
        }
        function il(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            a = r.tail;
          if ((Vo(e, t, r.children, n), 0 !== (2 & (r = Da.current))))
            (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 !== (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && nl(e, n);
                else if (19 === e.tag) nl(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((fi(Da, r), 0 === (2 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (n = t.child, i = null; null !== n; )
                  null !== (e = n.alternate) && null === Va(e) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  rl(t, !1, i, n, a, t.lastEffect);
                break;
              case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === Va(e)) {
                    t.child = i;
                    break;
                  }
                  (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                rl(t, !0, n, null, a, t.lastEffect);
                break;
              case "together":
                rl(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function al(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Fl |= t.lanes),
            0 !== (n & t.childLanes))
          ) {
            if (null !== e && t.child !== e.child) throw Error(o(153));
            if (null !== t.child) {
              for (
                n = qu((e = t.child), e.pendingProps),
                  t.child = n,
                  n.return = t;
                null !== e.sibling;

              )
                (e = e.sibling),
                  ((n = n.sibling = qu(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function ol(e, t) {
          if (!Fa)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ll(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
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
              return null;
            case 1:
            case 17:
              return gi(t.type) && yi(), null;
            case 3:
              return (
                Ma(),
                ci(hi),
                ci(pi),
                Ka(),
                (r = t.stateNode).pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (qa(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                null
              );
            case 5:
              Aa(t);
              var a = Ra(La.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ko(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return null;
                }
                if (((e = Ra(Na.current)), qa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (((r[Xr] = t), (r[Jr] = l), n)) {
                    case "dialog":
                      Tr("cancel", r), Tr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Tr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < jr.length; e++) Tr(jr[e], r);
                      break;
                    case "source":
                      Tr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Tr("error", r), Tr("load", r);
                      break;
                    case "details":
                      Tr("toggle", r);
                      break;
                    case "input":
                      ee(r, l), Tr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Tr("invalid", r);
                      break;
                    case "textarea":
                      ue(r, l), Tr("invalid", r);
                  }
                  for (var s in (Se(n, l), (e = null), l))
                    l.hasOwnProperty(s) &&
                      ((a = l[s]),
                      "children" === s
                        ? "string" === typeof a
                          ? r.textContent !== a && (e = ["children", a])
                          : "number" === typeof a &&
                            r.textContent !== "" + a &&
                            (e = ["children", "" + a])
                        : u.hasOwnProperty(s) &&
                          null != a &&
                          "onScroll" === s &&
                          Tr("scroll", r));
                  switch (n) {
                    case "input":
                      Y(r), re(r, l, !0);
                      break;
                    case "textarea":
                      Y(r), ce(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = Hr);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((s = 9 === a.nodeType ? a : a.ownerDocument),
                    e === fe && (e = pe(n)),
                    e === fe
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[Xr] = t),
                    (e[Jr] = r),
                    $o(e, t),
                    (t.stateNode = e),
                    (s = Oe(n, r)),
                    n)
                  ) {
                    case "dialog":
                      Tr("cancel", e), Tr("close", e), (a = r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Tr("load", e), (a = r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < jr.length; a++) Tr(jr[a], e);
                      a = r;
                      break;
                    case "source":
                      Tr("error", e), (a = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Tr("error", e), Tr("load", e), (a = r);
                      break;
                    case "details":
                      Tr("toggle", e), (a = r);
                      break;
                    case "input":
                      ee(e, r), (a = J(e, r)), Tr("invalid", e);
                      break;
                    case "option":
                      a = ae(e, r);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (a = i({}, r, { value: void 0 })),
                        Tr("invalid", e);
                      break;
                    case "textarea":
                      ue(e, r), (a = le(e, r)), Tr("invalid", e);
                      break;
                    default:
                      a = r;
                  }
                  Se(n, a);
                  var c = a;
                  for (l in c)
                    if (c.hasOwnProperty(l)) {
                      var f = c[l];
                      "style" === l
                        ? xe(e, f)
                        : "dangerouslySetInnerHTML" === l
                        ? null != (f = f ? f.__html : void 0) && ge(e, f)
                        : "children" === l
                        ? "string" === typeof f
                          ? ("textarea" !== n || "" !== f) && ye(e, f)
                          : "number" === typeof f && ye(e, "" + f)
                        : "suppressContentEditableWarning" !== l &&
                          "suppressHydrationWarning" !== l &&
                          "autoFocus" !== l &&
                          (u.hasOwnProperty(l)
                            ? null != f && "onScroll" === l && Tr("scroll", e)
                            : null != f && w(e, l, f, s));
                    }
                  switch (n) {
                    case "input":
                      Y(e), re(e, r, !1);
                      break;
                    case "textarea":
                      Y(e), ce(e);
                      break;
                    case "option":
                      null != r.value &&
                        e.setAttribute("value", "" + $(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (l = r.value)
                          ? oe(e, !!r.multiple, l, !1)
                          : null != r.defaultValue &&
                            oe(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" === typeof a.onClick && (e.onclick = Hr);
                  }
                  zr(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) Yo(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                (n = Ra(La.current)),
                  Ra(Na.current),
                  qa(t)
                    ? ((r = t.stateNode),
                      (n = t.memoizedProps),
                      (r[Xr] = t),
                      r.nodeValue !== n && (t.flags |= 4))
                    : (((r = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[Xr] = t),
                      (t.stateNode = r));
              }
              return null;
            case 13:
              return (
                ci(Da),
                (r = t.memoizedState),
                0 !== (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && qa(t)
                      : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 !== (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 !== (1 & Da.current)
                        ? 0 === Vl && (Vl = 3)
                        : ((0 !== Vl && 3 !== Vl) || (Vl = 4),
                          null === Il ||
                            (0 === (134217727 & Fl) &&
                              0 === (134217727 & Ul)) ||
                            yu(Il, Pl))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return Ma(), null === e && Rr(t.stateNode.containerInfo), null;
            case 10:
              return ra(t), null;
            case 19:
              if ((ci(Da), null === (r = t.memoizedState))) return null;
              if (((l = 0 !== (64 & t.flags)), null === (s = r.rendering)))
                if (l) ol(r, !1);
                else {
                  if (0 !== Vl || (null !== e && 0 !== (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = Va(e))) {
                        for (
                          t.flags |= 64,
                            ol(r, !1),
                            null !== (l = s.updateQueue) &&
                              ((t.updateQueue = l), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 2),
                            (l.nextEffect = null),
                            (l.firstEffect = null),
                            (l.lastEffect = null),
                            null === (s = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = s.childLanes),
                                (l.lanes = s.lanes),
                                (l.child = s.child),
                                (l.memoizedProps = s.memoizedProps),
                                (l.memoizedState = s.memoizedState),
                                (l.updateQueue = s.updateQueue),
                                (l.type = s.type),
                                (e = s.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return fi(Da, (1 & Da.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    zi() > ql &&
                    ((t.flags |= 64),
                    (l = !0),
                    ol(r, !1),
                    (t.lanes = 33554432));
                }
              else {
                if (!l)
                  if (null !== (e = Va(s))) {
                    if (
                      ((t.flags |= 64),
                      (l = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      ol(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !s.alternate &&
                        !Fa)
                    )
                      return (
                        null !== (t = t.lastEffect = r.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * zi() - r.renderingStartTime > ql &&
                      1073741824 !== n &&
                      ((t.flags |= 64),
                      (l = !0),
                      ol(r, !1),
                      (t.lanes = 33554432));
                r.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = r.last) ? (n.sibling = s) : (t.child = s),
                    (r.last = s));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = zi()),
                  (n.sibling = null),
                  (t = Da.current),
                  fi(Da, l ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                Eu(),
                null !== e &&
                  (null !== e.memoizedState) !== (null !== t.memoizedState) &&
                  "unstable-defer-without-hiding" !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(o(156, t.tag));
        }
        function ul(e) {
          switch (e.tag) {
            case 1:
              gi(e.type) && yi();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Ma(), ci(hi), ci(pi), Ka(), 0 !== (64 & (t = e.flags))))
                throw Error(o(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Aa(e), null;
            case 13:
              return (
                ci(Da),
                4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
              );
            case 19:
              return ci(Da), null;
            case 4:
              return Ma(), null;
            case 10:
              return ra(e), null;
            case 23:
            case 24:
              return Eu(), null;
            default:
              return null;
          }
        }
        function sl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += q(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (a) {
            i = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: i };
        }
        function cl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        ($o = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ko = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Ra(Na.current);
              var o,
                l = null;
              switch (n) {
                case "input":
                  (a = J(e, a)), (r = J(e, r)), (l = []);
                  break;
                case "option":
                  (a = ae(e, a)), (r = ae(e, r)), (l = []);
                  break;
                case "select":
                  (a = i({}, a, { value: void 0 })),
                    (r = i({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (a = le(e, a)), (r = le(e, r)), (l = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Hr);
              }
              for (f in (Se(n, r), (n = null), a))
                if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && null != a[f])
                  if ("style" === f) {
                    var s = a[f];
                    for (o in s)
                      s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== f &&
                      "children" !== f &&
                      "suppressContentEditableWarning" !== f &&
                      "suppressHydrationWarning" !== f &&
                      "autoFocus" !== f &&
                      (u.hasOwnProperty(f)
                        ? l || (l = [])
                        : (l = l || []).push(f, null));
              for (f in r) {
                var c = r[f];
                if (
                  ((s = null != a ? a[f] : void 0),
                  r.hasOwnProperty(f) && c !== s && (null != c || null != s))
                )
                  if ("style" === f)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (c && c.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in c)
                        c.hasOwnProperty(o) &&
                          s[o] !== c[o] &&
                          (n || (n = {}), (n[o] = c[o]));
                    } else n || (l || (l = []), l.push(f, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === f
                      ? ((c = c ? c.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != c && s !== c && (l = l || []).push(f, c))
                      : "children" === f
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (l = l || []).push(f, "" + c)
                      : "suppressContentEditableWarning" !== f &&
                        "suppressHydrationWarning" !== f &&
                        (u.hasOwnProperty(f)
                          ? (null != c && "onScroll" === f && Tr("scroll", e),
                            l || s === c || (l = []))
                          : "object" === typeof c &&
                            null !== c &&
                            c.$$typeof === P
                          ? c.toString()
                          : (l = l || []).push(f, c));
              }
              n && (l = l || []).push("style", n);
              var f = l;
              (t.updateQueue = f) && (t.flags |= 4);
            }
          }),
          (Yo = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var fl = "function" === typeof WeakMap ? WeakMap : Map;
        function dl(e, t, n) {
          ((n = ca(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Yl || ((Yl = !0), (Ql = r)), cl(0, t);
            }),
            n
          );
        }
        function pl(e, t, n) {
          (n = ca(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var i = t.value;
            n.payload = function () {
              return cl(0, t), r(i);
            };
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                "function" !== typeof r &&
                  (null === Xl ? (Xl = new Set([this])) : Xl.add(this),
                  cl(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        var hl = "function" === typeof WeakSet ? WeakSet : Set;
        function ml(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" === typeof t)
              try {
                t(null);
              } catch (n) {
                Hu(e, n);
              }
            else t.current = null;
        }
        function vl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? n : Qi(t.type, n),
                  r
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && Wr(t.stateNode.containerInfo));
          }
          throw Error(o(163));
        }
        function gl(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  if (3 === (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  var i = e;
                  (r = i.next),
                    0 !== (4 & (i = i.tag)) &&
                      0 !== (1 & i) &&
                      (Du(n, e), Au(n, e)),
                    (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r =
                        n.elementType === n.type
                          ? t.memoizedProps
                          : Qi(n.type, t.memoizedProps)),
                      e.componentDidUpdate(
                        r,
                        t.memoizedState,
                        e.__reactInternalSnapshotBeforeUpdate
                      ))),
                void (null !== (t = n.updateQueue) && ha(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                ha(n, t, e);
              }
              return;
            case 5:
              return (
                (e = n.stateNode),
                void (
                  null === t &&
                  4 & n.flags &&
                  zr(n.type, n.memoizedProps) &&
                  e.focus()
                )
              );
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n &&
                  ((n = n.memoizedState),
                  null !== n && ((n = n.dehydrated), null !== n && xt(n))))
              );
          }
          throw Error(o(163));
        }
        function yl(e, t) {
          for (var n = e; ; ) {
            if (5 === n.tag) {
              var r = n.stateNode;
              if (t)
                "function" === typeof (r = r.style).setProperty
                  ? r.setProperty("display", "none", "important")
                  : (r.display = "none");
              else {
                r = n.stateNode;
                var i = n.memoizedProps.style;
                (i =
                  void 0 !== i && null !== i && i.hasOwnProperty("display")
                    ? i.display
                    : null),
                  (r.style.display = Ce("display", i));
              }
            } else if (6 === n.tag)
              n.stateNode.nodeValue = t ? "" : n.memoizedProps;
            else if (
              ((23 !== n.tag && 24 !== n.tag) ||
                null === n.memoizedState ||
                n === e) &&
              null !== n.child
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }
        function bl(e, t) {
          if (Si && "function" === typeof Si.onCommitFiberUnmount)
            try {
              Si.onCommitFiberUnmount(Ei, t);
            } catch (a) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    i = r.destroy;
                  if (((r = r.tag), void 0 !== i))
                    if (0 !== (4 & r)) Du(t, n);
                    else {
                      r = t;
                      try {
                        i();
                      } catch (a) {
                        Hu(r, a);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if (
                (ml(t),
                "function" === typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (a) {
                  Hu(t, a);
                }
              break;
            case 5:
              ml(t);
              break;
            case 4:
              Ol(e, t);
          }
        }
        function wl(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function Cl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function xl(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (Cl(t)) break e;
              t = t.return;
            }
            throw Error(o(160));
          }
          var n = t;
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(o(161));
          }
          16 & n.flags && (ye(t, ""), (n.flags &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || Cl(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (
              n.sibling.return = n.return, n = n.sibling;
              5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

            ) {
              if (2 & n.flags) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? El(e, n, t) : Sl(e, n, t);
        }
        function El(e, t, n) {
          var r = e.tag,
            i = 5 === r || 6 === r;
          if (i)
            (e = i ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Hr));
          else if (4 !== r && null !== (e = e.child))
            for (El(e, t, n), e = e.sibling; null !== e; )
              El(e, t, n), (e = e.sibling);
        }
        function Sl(e, t, n) {
          var r = e.tag,
            i = 5 === r || 6 === r;
          if (i)
            (e = i ? e.stateNode : e.stateNode.instance),
              t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (Sl(e, t, n), e = e.sibling; null !== e; )
              Sl(e, t, n), (e = e.sibling);
        }
        function Ol(e, t) {
          for (var n, r, i = t, a = !1; ; ) {
            if (!a) {
              a = i.return;
              e: for (;;) {
                if (null === a) throw Error(o(160));
                switch (((n = a.stateNode), a.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                a = a.return;
              }
              a = !0;
            }
            if (5 === i.tag || 6 === i.tag) {
              e: for (var l = e, u = i, s = u; ; )
                if ((bl(l, s), null !== s.child && 4 !== s.tag))
                  (s.child.return = s), (s = s.child);
                else {
                  if (s === u) break e;
                  for (; null === s.sibling; ) {
                    if (null === s.return || s.return === u) break e;
                    s = s.return;
                  }
                  (s.sibling.return = s.return), (s = s.sibling);
                }
              r
                ? ((l = n),
                  (u = i.stateNode),
                  8 === l.nodeType
                    ? l.parentNode.removeChild(u)
                    : l.removeChild(u))
                : n.removeChild(i.stateNode);
            } else if (4 === i.tag) {
              if (null !== i.child) {
                (n = i.stateNode.containerInfo),
                  (r = !0),
                  (i.child.return = i),
                  (i = i.child);
                continue;
              }
            } else if ((bl(e, i), null !== i.child)) {
              (i.child.return = i), (i = i.child);
              continue;
            }
            if (i === t) break;
            for (; null === i.sibling; ) {
              if (null === i.return || i.return === t) return;
              4 === (i = i.return).tag && (a = !1);
            }
            (i.sibling.return = i.return), (i = i.sibling);
          }
        }
        function jl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;
              if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                  3 === (3 & r.tag) &&
                    ((e = r.destroy),
                    (r.destroy = void 0),
                    void 0 !== e && e()),
                    (r = r.next);
                } while (r !== n);
              }
              return;
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var i = null !== e ? e.memoizedProps : r;
                e = t.type;
                var a = t.updateQueue;
                if (((t.updateQueue = null), null !== a)) {
                  for (
                    n[Jr] = r,
                      "input" === e &&
                        "radio" === r.type &&
                        null != r.name &&
                        te(n, r),
                      Oe(e, i),
                      t = Oe(e, r),
                      i = 0;
                    i < a.length;
                    i += 2
                  ) {
                    var l = a[i],
                      u = a[i + 1];
                    "style" === l
                      ? xe(n, u)
                      : "dangerouslySetInnerHTML" === l
                      ? ge(n, u)
                      : "children" === l
                      ? ye(n, u)
                      : w(n, l, u, t);
                  }
                  switch (e) {
                    case "input":
                      ne(n, r);
                      break;
                    case "textarea":
                      se(n, r);
                      break;
                    case "select":
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (a = r.value)
                          ? oe(n, !!r.multiple, a, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? oe(n, !!r.multiple, r.defaultValue, !0)
                              : oe(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(o(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                (n = t.stateNode).hydrate &&
                ((n.hydrate = !1), xt(n.containerInfo))
              );
            case 13:
              return (
                null !== t.memoizedState && ((Zl = zi()), yl(t.child, !0)),
                void kl(t)
              );
            case 19:
              return void kl(t);
            case 23:
            case 24:
              return void yl(t, null !== t.memoizedState);
          }
          throw Error(o(163));
        }
        function kl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new hl()),
              t.forEach(function (t) {
                var r = Uu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function _l(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var Nl = Math.ceil,
          Tl = C.ReactCurrentDispatcher,
          Ll = C.ReactCurrentOwner,
          Rl = 0,
          Il = null,
          Ml = null,
          Pl = 0,
          Al = 0,
          Dl = si(0),
          Vl = 0,
          Bl = null,
          Hl = 0,
          Fl = 0,
          Ul = 0,
          zl = 0,
          Gl = null,
          Zl = 0,
          ql = 1 / 0;
        function Wl() {
          ql = zi() + 500;
        }
        var $l,
          Kl = null,
          Yl = !1,
          Ql = null,
          Xl = null,
          Jl = !1,
          eu = null,
          tu = 90,
          nu = [],
          ru = [],
          iu = null,
          au = 0,
          ou = null,
          lu = -1,
          uu = 0,
          su = 0,
          cu = null,
          fu = !1;
        function du() {
          return 0 !== (48 & Rl) ? zi() : -1 !== lu ? lu : (lu = zi());
        }
        function pu(e) {
          if (0 === (2 & (e = e.mode))) return 1;
          if (0 === (4 & e)) return 99 === Gi() ? 1 : 2;
          if ((0 === uu && (uu = Hl), 0 !== Yi.transition)) {
            0 !== su && (su = null !== Gl ? Gl.pendingLanes : 0), (e = uu);
            var t = 4186112 & ~su;
            return (
              0 === (t &= -t) &&
                0 === (t = (e = 4186112 & ~e) & -e) &&
                (t = 8192),
              t
            );
          }
          return (
            (e = Gi()),
            0 !== (4 & Rl) && 98 === e
              ? (e = Ht(12, uu))
              : (e = Ht(
                  (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
                  uu
                )),
            e
          );
        }
        function hu(e, t, n) {
          if (50 < au) throw ((au = 0), (ou = null), Error(o(185)));
          if (null === (e = mu(e, t))) return null;
          zt(e, t, n), e === Il && ((Ul |= t), 4 === Vl && yu(e, Pl));
          var r = Gi();
          1 === t
            ? 0 !== (8 & Rl) && 0 === (48 & Rl)
              ? bu(e)
              : (vu(e, n), 0 === Rl && (Wl(), $i()))
            : (0 === (4 & Rl) ||
                (98 !== r && 99 !== r) ||
                (null === iu ? (iu = new Set([e])) : iu.add(e)),
              vu(e, n)),
            (Gl = e);
        }
        function mu(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function vu(e, t) {
          for (
            var n = e.callbackNode,
              r = e.suspendedLanes,
              i = e.pingedLanes,
              a = e.expirationTimes,
              l = e.pendingLanes;
            0 < l;

          ) {
            var u = 31 - Gt(l),
              s = 1 << u,
              c = a[u];
            if (-1 === c) {
              if (0 === (s & r) || 0 !== (s & i)) {
                (c = t), Dt(s);
                var f = At;
                a[u] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1;
              }
            } else c <= t && (e.expiredLanes |= s);
            l &= ~s;
          }
          if (((r = Vt(e, e === Il ? Pl : 0)), (t = At), 0 === r))
            null !== n &&
              (n !== Di && ki(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== Di && ki(n);
            }
            15 === t
              ? ((n = bu.bind(null, e)),
                null === Bi ? ((Bi = [n]), (Hi = ji(Ri, Ki))) : Bi.push(n),
                (n = Di))
              : 14 === t
              ? (n = Wi(99, bu.bind(null, e)))
              : ((n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(o(358, e));
                  }
                })(t)),
                (n = Wi(n, gu.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function gu(e) {
          if (((lu = -1), (su = uu = 0), 0 !== (48 & Rl))) throw Error(o(327));
          var t = e.callbackNode;
          if (Pu() && e.callbackNode !== t) return null;
          var n = Vt(e, e === Il ? Pl : 0);
          if (0 === n) return null;
          var r = n,
            i = Rl;
          Rl |= 16;
          var a = ju();
          for ((Il === e && Pl === r) || (Wl(), Su(e, r)); ; )
            try {
              Nu();
              break;
            } catch (u) {
              Ou(e, u);
            }
          if (
            (na(),
            (Tl.current = a),
            (Rl = i),
            null !== Ml ? (r = 0) : ((Il = null), (Pl = 0), (r = Vl)),
            0 !== (Hl & Ul))
          )
            Su(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((Rl |= 64),
                e.hydrate && ((e.hydrate = !1), Wr(e.containerInfo)),
                0 !== (n = Bt(e)) && (r = ku(e, n))),
              1 === r)
            )
              throw ((t = Bl), Su(e, 0), yu(e, n), vu(e, zi()), t);
            switch (
              ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
            ) {
              case 0:
              case 1:
                throw Error(o(345));
              case 2:
              case 5:
                Ru(e);
                break;
              case 3:
                if (
                  (yu(e, n), (62914560 & n) === n && 10 < (r = Zl + 500 - zi()))
                ) {
                  if (0 !== Vt(e, 0)) break;
                  if (((i = e.suspendedLanes) & n) !== n) {
                    du(), (e.pingedLanes |= e.suspendedLanes & i);
                    break;
                  }
                  e.timeoutHandle = Zr(Ru.bind(null, e), r);
                  break;
                }
                Ru(e);
                break;
              case 4:
                if ((yu(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, i = -1; 0 < n; ) {
                  var l = 31 - Gt(n);
                  (a = 1 << l), (l = r[l]) > i && (i = l), (n &= ~a);
                }
                if (
                  ((n = i),
                  10 <
                    (n =
                      (120 > (n = zi() - n)
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * Nl(n / 1960)) - n))
                ) {
                  e.timeoutHandle = Zr(Ru.bind(null, e), n);
                  break;
                }
                Ru(e);
                break;
              default:
                throw Error(o(329));
            }
          }
          return vu(e, zi()), e.callbackNode === t ? gu.bind(null, e) : null;
        }
        function yu(e, t) {
          for (
            t &= ~zl,
              t &= ~Ul,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - Gt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function bu(e) {
          if (0 !== (48 & Rl)) throw Error(o(327));
          if ((Pu(), e === Il && 0 !== (e.expiredLanes & Pl))) {
            var t = Pl,
              n = ku(e, t);
            0 !== (Hl & Ul) && (n = ku(e, (t = Vt(e, t))));
          } else n = ku(e, (t = Vt(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((Rl |= 64),
              e.hydrate && ((e.hydrate = !1), Wr(e.containerInfo)),
              0 !== (t = Bt(e)) && (n = ku(e, t))),
            1 === n)
          )
            throw ((n = Bl), Su(e, 0), yu(e, t), vu(e, zi()), n);
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Ru(e),
            vu(e, zi()),
            null
          );
        }
        function wu(e, t) {
          var n = Rl;
          Rl |= 1;
          try {
            return e(t);
          } finally {
            0 === (Rl = n) && (Wl(), $i());
          }
        }
        function Cu(e, t) {
          var n = Rl;
          (Rl &= -2), (Rl |= 8);
          try {
            return e(t);
          } finally {
            0 === (Rl = n) && (Wl(), $i());
          }
        }
        function xu(e, t) {
          fi(Dl, Al), (Al |= t), (Hl |= t);
        }
        function Eu() {
          (Al = Dl.current), ci(Dl);
        }
        function Su(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), qr(n)), null !== Ml))
            for (n = Ml.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    yi();
                  break;
                case 3:
                  Ma(), ci(hi), ci(pi), Ka();
                  break;
                case 5:
                  Aa(r);
                  break;
                case 4:
                  Ma();
                  break;
                case 13:
                case 19:
                  ci(Da);
                  break;
                case 10:
                  ra(r);
                  break;
                case 23:
                case 24:
                  Eu();
              }
              n = n.return;
            }
          (Il = e),
            (Ml = qu(e.current, null)),
            (Pl = Al = Hl = t),
            (Vl = 0),
            (Bl = null),
            (zl = Ul = Fl = 0);
        }
        function Ou(e, t) {
          for (;;) {
            var n = Ml;
            try {
              if ((na(), (Ya.current = Ro), no)) {
                for (var r = Ja.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                no = !1;
              }
              if (
                ((Xa = 0),
                (to = eo = Ja = null),
                (ro = !1),
                (Ll.current = null),
                null === n || null === n.return)
              ) {
                (Vl = 1), (Bl = t), (Ml = null);
                break;
              }
              e: {
                var a = e,
                  o = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Pl),
                  (l.flags |= 2048),
                  (l.firstEffect = l.lastEffect = null),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var s = u;
                  if (0 === (2 & l.mode)) {
                    var c = l.alternate;
                    c
                      ? ((l.updateQueue = c.updateQueue),
                        (l.memoizedState = c.memoizedState),
                        (l.lanes = c.lanes))
                      : ((l.updateQueue = null), (l.memoizedState = null));
                  }
                  var f = 0 !== (1 & Da.current),
                    d = o;
                  do {
                    var p;
                    if ((p = 13 === d.tag)) {
                      var h = d.memoizedState;
                      if (null !== h) p = null !== h.dehydrated;
                      else {
                        var m = d.memoizedProps;
                        p =
                          void 0 !== m.fallback &&
                          (!0 !== m.unstable_avoidThisFallback || !f);
                      }
                    }
                    if (p) {
                      var v = d.updateQueue;
                      if (null === v) {
                        var g = new Set();
                        g.add(s), (d.updateQueue = g);
                      } else v.add(s);
                      if (0 === (2 & d.mode)) {
                        if (
                          ((d.flags |= 64),
                          (l.flags |= 16384),
                          (l.flags &= -2981),
                          1 === l.tag)
                        )
                          if (null === l.alternate) l.tag = 17;
                          else {
                            var y = ca(-1, 1);
                            (y.tag = 2), fa(l, y);
                          }
                        l.lanes |= 1;
                        break e;
                      }
                      (u = void 0), (l = t);
                      var b = a.pingCache;
                      if (
                        (null === b
                          ? ((b = a.pingCache = new fl()),
                            (u = new Set()),
                            b.set(s, u))
                          : void 0 === (u = b.get(s)) &&
                            ((u = new Set()), b.set(s, u)),
                        !u.has(l))
                      ) {
                        u.add(l);
                        var w = Fu.bind(null, a, s, l);
                        s.then(w, w);
                      }
                      (d.flags |= 4096), (d.lanes = t);
                      break e;
                    }
                    d = d.return;
                  } while (null !== d);
                  u = Error(
                    (W(l.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                  );
                }
                5 !== Vl && (Vl = 2), (u = sl(u, l)), (d = o);
                do {
                  switch (d.tag) {
                    case 3:
                      (a = u),
                        (d.flags |= 4096),
                        (t &= -t),
                        (d.lanes |= t),
                        da(d, dl(0, a, t));
                      break e;
                    case 1:
                      a = u;
                      var C = d.type,
                        x = d.stateNode;
                      if (
                        0 === (64 & d.flags) &&
                        ("function" === typeof C.getDerivedStateFromError ||
                          (null !== x &&
                            "function" === typeof x.componentDidCatch &&
                            (null === Xl || !Xl.has(x))))
                      ) {
                        (d.flags |= 4096),
                          (t &= -t),
                          (d.lanes |= t),
                          da(d, pl(d, a, t));
                        break e;
                      }
                  }
                  d = d.return;
                } while (null !== d);
              }
              Lu(n);
            } catch (E) {
              (t = E), Ml === n && null !== n && (Ml = n = n.return);
              continue;
            }
            break;
          }
        }
        function ju() {
          var e = Tl.current;
          return (Tl.current = Ro), null === e ? Ro : e;
        }
        function ku(e, t) {
          var n = Rl;
          Rl |= 16;
          var r = ju();
          for ((Il === e && Pl === t) || Su(e, t); ; )
            try {
              _u();
              break;
            } catch (i) {
              Ou(e, i);
            }
          if ((na(), (Rl = n), (Tl.current = r), null !== Ml))
            throw Error(o(261));
          return (Il = null), (Pl = 0), Vl;
        }
        function _u() {
          for (; null !== Ml; ) Tu(Ml);
        }
        function Nu() {
          for (; null !== Ml && !_i(); ) Tu(Ml);
        }
        function Tu(e) {
          var t = $l(e.alternate, e, Al);
          (e.memoizedProps = e.pendingProps),
            null === t ? Lu(e) : (Ml = t),
            (Ll.current = null);
        }
        function Lu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (2048 & t.flags))) {
              if (null !== (n = ll(n, t, Al))) return void (Ml = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 !== (1073741824 & Al) ||
                0 === (4 & n.mode)
              ) {
                for (var r = 0, i = n.child; null !== i; )
                  (r |= i.lanes | i.childLanes), (i = i.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 === (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = t.firstEffect),
                  (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = t)
                    : (e.firstEffect = t),
                  (e.lastEffect = t)));
            } else {
              if (null !== (n = ul(t))) return (n.flags &= 2047), void (Ml = n);
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (Ml = t);
            Ml = t = e;
          } while (null !== t);
          0 === Vl && (Vl = 5);
        }
        function Ru(e) {
          var t = Gi();
          return qi(99, Iu.bind(null, e, t)), null;
        }
        function Iu(e, t) {
          do {
            Pu();
          } while (null !== eu);
          if (0 !== (48 & Rl)) throw Error(o(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(o(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            i = r,
            a = e.pendingLanes & ~i;
          (e.pendingLanes = i),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= i),
            (e.mutableReadLanes &= i),
            (e.entangledLanes &= i),
            (i = e.entanglements);
          for (var l = e.eventTimes, u = e.expirationTimes; 0 < a; ) {
            var s = 31 - Gt(a),
              c = 1 << s;
            (i[s] = 0), (l[s] = -1), (u[s] = -1), (a &= ~c);
          }
          if (
            (null !== iu && 0 === (24 & r) && iu.has(e) && iu.delete(e),
            e === Il && ((Ml = Il = null), (Pl = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            if (
              ((i = Rl),
              (Rl |= 32),
              (Ll.current = null),
              (Fr = Kt),
              gr((l = vr())))
            ) {
              if ("selectionStart" in l)
                u = { start: l.selectionStart, end: l.selectionEnd };
              else
                e: if (
                  ((u = ((u = l.ownerDocument) && u.defaultView) || window),
                  (c = u.getSelection && u.getSelection()) &&
                    0 !== c.rangeCount)
                ) {
                  (u = c.anchorNode),
                    (a = c.anchorOffset),
                    (s = c.focusNode),
                    (c = c.focusOffset);
                  try {
                    u.nodeType, s.nodeType;
                  } catch (j) {
                    u = null;
                    break e;
                  }
                  var f = 0,
                    d = -1,
                    p = -1,
                    h = 0,
                    m = 0,
                    v = l,
                    g = null;
                  t: for (;;) {
                    for (
                      var y;
                      v !== u || (0 !== a && 3 !== v.nodeType) || (d = f + a),
                        v !== s || (0 !== c && 3 !== v.nodeType) || (p = f + c),
                        3 === v.nodeType && (f += v.nodeValue.length),
                        null !== (y = v.firstChild);

                    )
                      (g = v), (v = y);
                    for (;;) {
                      if (v === l) break t;
                      if (
                        (g === u && ++h === a && (d = f),
                        g === s && ++m === c && (p = f),
                        null !== (y = v.nextSibling))
                      )
                        break;
                      g = (v = g).parentNode;
                    }
                    v = y;
                  }
                  u = -1 === d || -1 === p ? null : { start: d, end: p };
                } else u = null;
              u = u || { start: 0, end: 0 };
            } else u = null;
            (Ur = { focusedElem: l, selectionRange: u }),
              (Kt = !1),
              (cu = null),
              (fu = !1),
              (Kl = r);
            do {
              try {
                Mu();
              } catch (j) {
                if (null === Kl) throw Error(o(330));
                Hu(Kl, j), (Kl = Kl.nextEffect);
              }
            } while (null !== Kl);
            (cu = null), (Kl = r);
            do {
              try {
                for (l = e; null !== Kl; ) {
                  var b = Kl.flags;
                  if ((16 & b && ye(Kl.stateNode, ""), 128 & b)) {
                    var w = Kl.alternate;
                    if (null !== w) {
                      var C = w.ref;
                      null !== C &&
                        ("function" === typeof C
                          ? C(null)
                          : (C.current = null));
                    }
                  }
                  switch (1038 & b) {
                    case 2:
                      xl(Kl), (Kl.flags &= -3);
                      break;
                    case 6:
                      xl(Kl), (Kl.flags &= -3), jl(Kl.alternate, Kl);
                      break;
                    case 1024:
                      Kl.flags &= -1025;
                      break;
                    case 1028:
                      (Kl.flags &= -1025), jl(Kl.alternate, Kl);
                      break;
                    case 4:
                      jl(Kl.alternate, Kl);
                      break;
                    case 8:
                      Ol(l, (u = Kl));
                      var x = u.alternate;
                      wl(u), null !== x && wl(x);
                  }
                  Kl = Kl.nextEffect;
                }
              } catch (j) {
                if (null === Kl) throw Error(o(330));
                Hu(Kl, j), (Kl = Kl.nextEffect);
              }
            } while (null !== Kl);
            if (
              ((C = Ur),
              (w = vr()),
              (b = C.focusedElem),
              (l = C.selectionRange),
              w !== b &&
                b &&
                b.ownerDocument &&
                mr(b.ownerDocument.documentElement, b))
            ) {
              null !== l &&
                gr(b) &&
                ((w = l.start),
                void 0 === (C = l.end) && (C = w),
                "selectionStart" in b
                  ? ((b.selectionStart = w),
                    (b.selectionEnd = Math.min(C, b.value.length)))
                  : (C =
                      ((w = b.ownerDocument || document) && w.defaultView) ||
                      window).getSelection &&
                    ((C = C.getSelection()),
                    (u = b.textContent.length),
                    (x = Math.min(l.start, u)),
                    (l = void 0 === l.end ? x : Math.min(l.end, u)),
                    !C.extend && x > l && ((u = l), (l = x), (x = u)),
                    (u = hr(b, x)),
                    (a = hr(b, l)),
                    u &&
                      a &&
                      (1 !== C.rangeCount ||
                        C.anchorNode !== u.node ||
                        C.anchorOffset !== u.offset ||
                        C.focusNode !== a.node ||
                        C.focusOffset !== a.offset) &&
                      ((w = w.createRange()).setStart(u.node, u.offset),
                      C.removeAllRanges(),
                      x > l
                        ? (C.addRange(w), C.extend(a.node, a.offset))
                        : (w.setEnd(a.node, a.offset), C.addRange(w))))),
                (w = []);
              for (C = b; (C = C.parentNode); )
                1 === C.nodeType &&
                  w.push({ element: C, left: C.scrollLeft, top: C.scrollTop });
              for (
                "function" === typeof b.focus && b.focus(), b = 0;
                b < w.length;
                b++
              )
                ((C = w[b]).element.scrollLeft = C.left),
                  (C.element.scrollTop = C.top);
            }
            (Kt = !!Fr), (Ur = Fr = null), (e.current = n), (Kl = r);
            do {
              try {
                for (b = e; null !== Kl; ) {
                  var E = Kl.flags;
                  if ((36 & E && gl(b, Kl.alternate, Kl), 128 & E)) {
                    w = void 0;
                    var S = Kl.ref;
                    if (null !== S) {
                      var O = Kl.stateNode;
                      Kl.tag,
                        (w = O),
                        "function" === typeof S ? S(w) : (S.current = w);
                    }
                  }
                  Kl = Kl.nextEffect;
                }
              } catch (j) {
                if (null === Kl) throw Error(o(330));
                Hu(Kl, j), (Kl = Kl.nextEffect);
              }
            } while (null !== Kl);
            (Kl = null), Vi(), (Rl = i);
          } else e.current = n;
          if (Jl) (Jl = !1), (eu = e), (tu = t);
          else
            for (Kl = r; null !== Kl; )
              (t = Kl.nextEffect),
                (Kl.nextEffect = null),
                8 & Kl.flags &&
                  (((E = Kl).sibling = null), (E.stateNode = null)),
                (Kl = t);
          if (
            (0 === (r = e.pendingLanes) && (Xl = null),
            1 === r ? (e === ou ? au++ : ((au = 0), (ou = e))) : (au = 0),
            (n = n.stateNode),
            Si && "function" === typeof Si.onCommitFiberRoot)
          )
            try {
              Si.onCommitFiberRoot(
                Ei,
                n,
                void 0,
                64 === (64 & n.current.flags)
              );
            } catch (j) {}
          if ((vu(e, zi()), Yl)) throw ((Yl = !1), (e = Ql), (Ql = null), e);
          return 0 !== (8 & Rl) || $i(), null;
        }
        function Mu() {
          for (; null !== Kl; ) {
            var e = Kl.alternate;
            fu ||
              null === cu ||
              (0 !== (8 & Kl.flags)
                ? et(Kl, cu) && (fu = !0)
                : 13 === Kl.tag && _l(e, Kl) && et(Kl, cu) && (fu = !0));
            var t = Kl.flags;
            0 !== (256 & t) && vl(e, Kl),
              0 === (512 & t) ||
                Jl ||
                ((Jl = !0),
                Wi(97, function () {
                  return Pu(), null;
                })),
              (Kl = Kl.nextEffect);
          }
        }
        function Pu() {
          if (90 !== tu) {
            var e = 97 < tu ? 97 : tu;
            return (tu = 90), qi(e, Vu);
          }
          return !1;
        }
        function Au(e, t) {
          nu.push(t, e),
            Jl ||
              ((Jl = !0),
              Wi(97, function () {
                return Pu(), null;
              }));
        }
        function Du(e, t) {
          ru.push(t, e),
            Jl ||
              ((Jl = !0),
              Wi(97, function () {
                return Pu(), null;
              }));
        }
        function Vu() {
          if (null === eu) return !1;
          var e = eu;
          if (((eu = null), 0 !== (48 & Rl))) throw Error(o(331));
          var t = Rl;
          Rl |= 32;
          var n = ru;
          ru = [];
          for (var r = 0; r < n.length; r += 2) {
            var i = n[r],
              a = n[r + 1],
              l = i.destroy;
            if (((i.destroy = void 0), "function" === typeof l))
              try {
                l();
              } catch (s) {
                if (null === a) throw Error(o(330));
                Hu(a, s);
              }
          }
          for (n = nu, nu = [], r = 0; r < n.length; r += 2) {
            (i = n[r]), (a = n[r + 1]);
            try {
              var u = i.create;
              i.destroy = u();
            } catch (s) {
              if (null === a) throw Error(o(330));
              Hu(a, s);
            }
          }
          for (u = e.current.firstEffect; null !== u; )
            (e = u.nextEffect),
              (u.nextEffect = null),
              8 & u.flags && ((u.sibling = null), (u.stateNode = null)),
              (u = e);
          return (Rl = t), $i(), !0;
        }
        function Bu(e, t, n) {
          fa(e, (t = dl(0, (t = sl(n, t)), 1))),
            (t = du()),
            null !== (e = mu(e, 1)) && (zt(e, 1, t), vu(e, t));
        }
        function Hu(e, t) {
          if (3 === e.tag) Bu(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                Bu(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" === typeof n.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Xl || !Xl.has(r)))
                ) {
                  var i = pl(n, (e = sl(t, e)), 1);
                  if ((fa(n, i), (i = du()), null !== (n = mu(n, 1))))
                    zt(n, 1, i), vu(n, i);
                  else if (
                    "function" === typeof r.componentDidCatch &&
                    (null === Xl || !Xl.has(r))
                  )
                    try {
                      r.componentDidCatch(t, e);
                    } catch (a) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function Fu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = du()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Il === e &&
              (Pl & n) === n &&
              (4 === Vl ||
              (3 === Vl && (62914560 & Pl) === Pl && 500 > zi() - Zl)
                ? Su(e, 0)
                : (zl |= n)),
            vu(e, t);
        }
        function Uu(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 === (t = 0) &&
              (0 === (2 & (t = e.mode))
                ? (t = 1)
                : 0 === (4 & t)
                ? (t = 99 === Gi() ? 1 : 2)
                : (0 === uu && (uu = Hl),
                  0 === (t = Ft(62914560 & ~uu)) && (t = 4194304))),
            (n = du()),
            null !== (e = mu(e, t)) && (zt(e, t, n), vu(e, n));
        }
        function zu(e, t, n, r) {
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
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Gu(e, t, n, r) {
          return new zu(e, t, n, r);
        }
        function Zu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function qu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Gu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Wu(e, t, n, r, i, a) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Zu(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case S:
                return $u(n.children, i, a, t);
              case A:
                (l = 8), (i |= 16);
                break;
              case O:
                (l = 8), (i |= 1);
                break;
              case j:
                return (
                  ((e = Gu(12, n, t, 8 | i)).elementType = j),
                  (e.type = j),
                  (e.lanes = a),
                  e
                );
              case T:
                return (
                  ((e = Gu(13, n, t, i)).type = T),
                  (e.elementType = T),
                  (e.lanes = a),
                  e
                );
              case L:
                return (
                  ((e = Gu(19, n, t, i)).elementType = L), (e.lanes = a), e
                );
              case D:
                return Ku(n, i, a, t);
              case V:
                return (
                  ((e = Gu(24, n, t, i)).elementType = V), (e.lanes = a), e
                );
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case k:
                      l = 10;
                      break e;
                    case _:
                      l = 9;
                      break e;
                    case N:
                      l = 11;
                      break e;
                    case R:
                      l = 14;
                      break e;
                    case I:
                      (l = 16), (r = null);
                      break e;
                    case M:
                      l = 22;
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Gu(l, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function $u(e, t, n, r) {
          return ((e = Gu(7, e, r, t)).lanes = n), e;
        }
        function Ku(e, t, n, r) {
          return ((e = Gu(23, e, r, t)).elementType = D), (e.lanes = n), e;
        }
        function Yu(e, t, n) {
          return ((e = Gu(6, e, null, t)).lanes = n), e;
        }
        function Qu(e, t, n) {
          return (
            ((t = Gu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Xu(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Ut(0)),
            (this.expirationTimes = Ut(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Ut(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Ju(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: E,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function es(e, t, n, r) {
          var i = t.current,
            a = du(),
            l = pu(i);
          e: if (n) {
            t: {
              if (Ye((n = n._reactInternals)) !== n || 1 !== n.tag)
                throw Error(o(170));
              var u = n;
              do {
                switch (u.tag) {
                  case 3:
                    u = u.stateNode.context;
                    break t;
                  case 1:
                    if (gi(u.type)) {
                      u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                u = u.return;
              } while (null !== u);
              throw Error(o(171));
            }
            if (1 === n.tag) {
              var s = n.type;
              if (gi(s)) {
                n = wi(n, s, u);
                break e;
              }
            }
            n = u;
          } else n = di;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = ca(a, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            fa(i, t),
            hu(i, l, a),
            l
          );
        }
        function ts(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function ns(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function rs(e, t) {
          ns(e, t), (e = e.alternate) && ns(e, t);
        }
        function is(e, t, n) {
          var r =
            (null != n &&
              null != n.hydrationOptions &&
              n.hydrationOptions.mutableSources) ||
            null;
          if (
            ((n = new Xu(e, t, null != n && !0 === n.hydrate)),
            (t = Gu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            ua(t),
            (e[ei] = n.current),
            Rr(8 === e.nodeType ? e.parentNode : e),
            r)
          )
            for (e = 0; e < r.length; e++) {
              var i = (t = r[e])._getVersion;
              (i = i(t._source)),
                null == n.mutableSourceEagerHydrationData
                  ? (n.mutableSourceEagerHydrationData = [t, i])
                  : n.mutableSourceEagerHydrationData.push(t, i);
            }
          this._internalRoot = n;
        }
        function as(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function os(e, t, n, r, i) {
          var a = n._reactRootContainer;
          if (a) {
            var o = a._internalRoot;
            if ("function" === typeof i) {
              var l = i;
              i = function () {
                var e = ts(o);
                l.call(e);
              };
            }
            es(t, o, e, i);
          } else {
            if (
              ((a = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new is(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (o = a._internalRoot),
              "function" === typeof i)
            ) {
              var u = i;
              i = function () {
                var e = ts(o);
                u.call(e);
              };
            }
            Cu(function () {
              es(t, o, e, i);
            });
          }
          return ts(o);
        }
        function ls(e, t) {
          var n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!as(t)) throw Error(o(200));
          return Ju(e, t, null, n);
        }
        ($l = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || hi.current) Do = !0;
            else {
              if (0 === (n & r)) {
                switch (((Do = !1), t.tag)) {
                  case 3:
                    Wo(t), Wa();
                    break;
                  case 5:
                    Pa(t);
                    break;
                  case 1:
                    gi(t.type) && Ci(t);
                    break;
                  case 4:
                    Ia(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    r = t.memoizedProps.value;
                    var i = t.type._context;
                    fi(Xi, i._currentValue), (i._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 !== (n & t.child.childLanes)
                        ? Xo(e, t, n)
                        : (fi(Da, 1 & Da.current),
                          null !== (t = al(e, t, n)) ? t.sibling : null);
                    fi(Da, 1 & Da.current);
                    break;
                  case 19:
                    if (
                      ((r = 0 !== (n & t.childLanes)), 0 !== (64 & e.flags))
                    ) {
                      if (r) return il(e, t, n);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (i = t.memoizedState) &&
                        ((i.rendering = null),
                        (i.tail = null),
                        (i.lastEffect = null)),
                      fi(Da, Da.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Uo(e, t, n);
                }
                return al(e, t, n);
              }
              Do = 0 !== (16384 & e.flags);
            }
          else Do = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (i = vi(t, pi.current)),
                aa(t, n),
                (i = oo(null, t, r, e, i, n)),
                (t.flags |= 1),
                "object" === typeof i &&
                  null !== i &&
                  "function" === typeof i.render &&
                  void 0 === i.$$typeof)
              ) {
                if (
                  ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  gi(r))
                ) {
                  var a = !0;
                  Ci(t);
                } else a = !1;
                (t.memoizedState =
                  null !== i.state && void 0 !== i.state ? i.state : null),
                  ua(t);
                var l = r.getDerivedStateFromProps;
                "function" === typeof l && va(t, r, l, e),
                  (i.updater = ga),
                  (t.stateNode = i),
                  (i._reactInternals = t),
                  Ca(t, r, e, n),
                  (t = qo(null, t, r, !0, a, n));
              } else (t.tag = 0), Vo(null, t, i, n), (t = t.child);
              return t;
            case 16:
              i = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (i = (a = i._init)(i._payload)),
                  (t.type = i),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Zu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === N) return 11;
                        if (e === R) return 14;
                      }
                      return 2;
                    })(i)),
                  (e = Qi(i, e)),
                  a)
                ) {
                  case 0:
                    t = Go(null, t, i, e, n);
                    break e;
                  case 1:
                    t = Zo(null, t, i, e, n);
                    break e;
                  case 11:
                    t = Bo(null, t, i, e, n);
                    break e;
                  case 14:
                    t = Ho(null, t, i, Qi(i.type, e), r, n);
                    break e;
                }
                throw Error(o(306, i, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Go(e, t, r, (i = t.elementType === r ? i : Qi(r, i)), n)
              );
            case 1:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Zo(e, t, r, (i = t.elementType === r ? i : Qi(r, i)), n)
              );
            case 3:
              if ((Wo(t), (r = t.updateQueue), null === e || null === r))
                throw Error(o(282));
              if (
                ((r = t.pendingProps),
                (i = null !== (i = t.memoizedState) ? i.element : null),
                sa(e, t),
                pa(t, r, null, n),
                (r = t.memoizedState.element) === i)
              )
                Wa(), (t = al(e, t, n));
              else {
                if (
                  ((a = (i = t.stateNode).hydrate) &&
                    ((Ha = $r(t.stateNode.containerInfo.firstChild)),
                    (Ba = t),
                    (a = Fa = !0)),
                  a)
                ) {
                  if (null != (e = i.mutableSourceEagerHydrationData))
                    for (i = 0; i < e.length; i += 2)
                      ((a = e[i])._workInProgressVersionPrimary = e[i + 1]),
                        $a.push(a);
                  for (n = ka(t, null, r, n), t.child = n; n; )
                    (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else Vo(e, t, r, n), Wa();
                t = t.child;
              }
              return t;
            case 5:
              return (
                Pa(t),
                null === e && Ga(t),
                (r = t.type),
                (i = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (l = i.children),
                Gr(r, i)
                  ? (l = null)
                  : null !== a && Gr(r, a) && (t.flags |= 16),
                zo(e, t),
                Vo(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && Ga(t), null;
            case 13:
              return Xo(e, t, n);
            case 4:
              return (
                Ia(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = ja(t, null, r, n)) : Vo(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Bo(e, t, r, (i = t.elementType === r ? i : Qi(r, i)), n)
              );
            case 7:
              return Vo(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Vo(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context),
                  (i = t.pendingProps),
                  (l = t.memoizedProps),
                  (a = i.value);
                var u = t.type._context;
                if (
                  (fi(Xi, u._currentValue), (u._currentValue = a), null !== l)
                )
                  if (
                    ((u = l.value),
                    0 ===
                      (a = cr(u, a)
                        ? 0
                        : 0 |
                          ("function" === typeof r._calculateChangedBits
                            ? r._calculateChangedBits(u, a)
                            : 1073741823)))
                  ) {
                    if (l.children === i.children && !hi.current) {
                      t = al(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (u = t.child) && (u.return = t);
                      null !== u;

                    ) {
                      var s = u.dependencies;
                      if (null !== s) {
                        l = u.child;
                        for (var c = s.firstContext; null !== c; ) {
                          if (c.context === r && 0 !== (c.observedBits & a)) {
                            1 === u.tag &&
                              (((c = ca(-1, n & -n)).tag = 2), fa(u, c)),
                              (u.lanes |= n),
                              null !== (c = u.alternate) && (c.lanes |= n),
                              ia(u.return, n),
                              (s.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else
                        l = 10 === u.tag && u.type === t.type ? null : u.child;
                      if (null !== l) l.return = u;
                      else
                        for (l = u; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (u = l.sibling)) {
                            (u.return = l.return), (l = u);
                            break;
                          }
                          l = l.return;
                        }
                      u = l;
                    }
                Vo(e, t, i.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (i = t.type),
                (r = (a = t.pendingProps).children),
                aa(t, n),
                (r = r((i = oa(i, a.unstable_observedBits)))),
                (t.flags |= 1),
                Vo(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = Qi((i = t.type), t.pendingProps)),
                Ho(e, t, i, (a = Qi(i.type, a)), r, n)
              );
            case 15:
              return Fo(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Qi(r, i)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                gi(r) ? ((e = !0), Ci(t)) : (e = !1),
                aa(t, n),
                ba(t, r, i),
                Ca(t, r, i, n),
                qo(null, t, r, !0, e, n)
              );
            case 19:
              return il(e, t, n);
            case 23:
            case 24:
              return Uo(e, t, n);
          }
          throw Error(o(156, t.tag));
        }),
          (is.prototype.render = function (e) {
            es(e, this._internalRoot, null, null);
          }),
          (is.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            es(null, e, null, function () {
              t[ei] = null;
            });
          }),
          (tt = function (e) {
            13 === e.tag && (hu(e, 4, du()), rs(e, 4));
          }),
          (nt = function (e) {
            13 === e.tag && (hu(e, 67108864, du()), rs(e, 67108864));
          }),
          (rt = function (e) {
            if (13 === e.tag) {
              var t = du(),
                n = pu(e);
              hu(e, n, t), rs(e, n);
            }
          }),
          (it = function (e, t) {
            return t();
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
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
                      var i = ai(r);
                      if (!i) throw Error(o(90));
                      Q(r), ne(r, i);
                    }
                  }
                }
                break;
              case "textarea":
                se(e, n);
                break;
              case "select":
                null != (t = n.value) && oe(e, !!n.multiple, t, !1);
            }
          }),
          (Ie = wu),
          (Me = function (e, t, n, r, i) {
            var a = Rl;
            Rl |= 4;
            try {
              return qi(98, e.bind(null, t, n, r, i));
            } finally {
              0 === (Rl = a) && (Wl(), $i());
            }
          }),
          (Pe = function () {
            0 === (49 & Rl) &&
              ((function () {
                if (null !== iu) {
                  var e = iu;
                  (iu = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), vu(e, zi());
                    });
                }
                $i();
              })(),
              Pu());
          }),
          (Ae = function (e, t) {
            var n = Rl;
            Rl |= 2;
            try {
              return e(t);
            } finally {
              0 === (Rl = n) && (Wl(), $i());
            }
          });
        var us = { Events: [ri, ii, ai, Le, Re, Pu, { current: !1 }] },
          ss = {
            findFiberByHostInstance: ni,
            bundleType: 0,
            version: "17.0.2",
            rendererPackageName: "react-dom",
          },
          cs = {
            bundleType: ss.bundleType,
            version: ss.version,
            rendererPackageName: ss.rendererPackageName,
            rendererConfig: ss.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: C.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Je(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              ss.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!fs.isDisabled && fs.supportsFiber)
            try {
              (Ei = fs.inject(cs)), (Si = fs);
            } catch (ve) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = us),
          (t.createPortal = ls),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw Error(o(268, Object.keys(e)));
            }
            return (e = null === (e = Je(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e, t) {
            var n = Rl;
            if (0 !== (48 & n)) return e(t);
            Rl |= 1;
            try {
              if (e) return qi(99, e.bind(null, t));
            } finally {
              (Rl = n), $i();
            }
          }),
          (t.hydrate = function (e, t, n) {
            if (!as(t)) throw Error(o(200));
            return os(null, e, t, !0, n);
          }),
          (t.render = function (e, t, n) {
            if (!as(t)) throw Error(o(200));
            return os(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!as(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (Cu(function () {
                os(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ei] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = wu),
          (t.unstable_createPortal = function (e, t) {
            return ls(
              e,
              t,
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null
            );
          }),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!as(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return os(e, t, n, !1, r);
          }),
          (t.version = "17.0.2");
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      372: function (e, t) {
        "use strict";
        var n = 60103,
          r = 60106,
          i = 60107,
          a = 60108,
          o = 60114,
          l = 60109,
          u = 60110,
          s = 60112,
          c = 60113,
          f = 60120,
          d = 60115,
          p = 60116,
          h = 60121,
          m = 60122,
          v = 60117,
          g = 60129,
          y = 60131;
        if ("function" === typeof Symbol && Symbol.for) {
          var b = Symbol.for;
          (n = b("react.element")),
            (r = b("react.portal")),
            (i = b("react.fragment")),
            (a = b("react.strict_mode")),
            (o = b("react.profiler")),
            (l = b("react.provider")),
            (u = b("react.context")),
            (s = b("react.forward_ref")),
            (c = b("react.suspense")),
            (f = b("react.suspense_list")),
            (d = b("react.memo")),
            (p = b("react.lazy")),
            (h = b("react.block")),
            (m = b("react.server.block")),
            (v = b("react.fundamental")),
            (g = b("react.debug_trace_mode")),
            (y = b("react.legacy_hidden"));
        }
        function w(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case n:
                switch ((e = e.type)) {
                  case i:
                  case o:
                  case a:
                  case c:
                  case f:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case u:
                      case s:
                      case p:
                      case d:
                      case l:
                        return e;
                      default:
                        return t;
                    }
                }
              case r:
                return t;
            }
          }
        }
      },
      441: function (e, t, n) {
        "use strict";
        n(372);
      },
      374: function (e, t, n) {
        "use strict";
        n(725);
        var r = n(791),
          i = 60103;
        if (
          ((t.Fragment = 60107), "function" === typeof Symbol && Symbol.for)
        ) {
          var a = Symbol.for;
          (i = a("react.element")), (t.Fragment = a("react.fragment"));
        }
        var o =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = Object.prototype.hasOwnProperty,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            a = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !u.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: s,
            ref: c,
            props: a,
            _owner: o.current,
          };
        }
        (t.jsx = s), (t.jsxs = s);
      },
      117: function (e, t, n) {
        "use strict";
        var r = n(725),
          i = 60103,
          a = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var o = 60109,
          l = 60110,
          u = 60112;
        t.Suspense = 60113;
        var s = 60115,
          c = 60116;
        if ("function" === typeof Symbol && Symbol.for) {
          var f = Symbol.for;
          (i = f("react.element")),
            (a = f("react.portal")),
            (t.Fragment = f("react.fragment")),
            (t.StrictMode = f("react.strict_mode")),
            (t.Profiler = f("react.profiler")),
            (o = f("react.provider")),
            (l = f("react.context")),
            (u = f("react.forward_ref")),
            (t.Suspense = f("react.suspense")),
            (s = f("react.memo")),
            (c = f("react.lazy"));
        }
        var d = "function" === typeof Symbol && Symbol.iterator;
        function p(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
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
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function g() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(p(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = v.prototype);
        var b = (y.prototype = new g());
        (b.constructor = y), r(b, v.prototype), (b.isPureReactComponent = !0);
        var w = { current: null },
          C = Object.prototype.hasOwnProperty,
          x = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, n) {
          var r,
            a = {},
            o = null,
            l = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              C.call(t, r) && !x.hasOwnProperty(r) && (a[r] = t[r]);
          var u = arguments.length - 2;
          if (1 === u) a.children = n;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            a.children = s;
          }
          if (e && e.defaultProps)
            for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r]);
          return {
            $$typeof: i,
            type: e,
            key: o,
            ref: l,
            props: a,
            _owner: w.current,
          };
        }
        function S(e) {
          return "object" === typeof e && null !== e && e.$$typeof === i;
        }
        var O = /\/+/g;
        function j(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function k(e, t, n, r, o) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case i:
                  case a:
                    u = !0;
                }
            }
          if (u)
            return (
              (o = o((u = e))),
              (e = "" === r ? "." + j(u, 0) : r),
              Array.isArray(o)
                ? ((n = ""),
                  null != e && (n = e.replace(O, "$&/") + "/"),
                  k(o, t, n, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (S(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: i,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      n +
                        (!o.key || (u && u.key === o.key)
                          ? ""
                          : ("" + o.key).replace(O, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((u = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
            for (var s = 0; s < e.length; s++) {
              var c = r + j((l = e[s]), s);
              u += k(l, t, n, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (d && e[d]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(l = e.next()).done; )
              u += k((l = l.value), t, n, (c = r + j(l, s++)), o);
          else if ("object" === l)
            throw (
              ((t = "" + e),
              Error(
                p(
                  31,
                  "[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t
                )
              ))
            );
          return u;
        }
        function _(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            k(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function N(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()),
              (e._status = 0),
              (e._result = t),
              t.then(
                function (t) {
                  0 === e._status &&
                    ((t = t.default), (e._status = 1), (e._result = t));
                },
                function (t) {
                  0 === e._status && ((e._status = 2), (e._result = t));
                }
              );
          }
          if (1 === e._status) return e._result;
          throw e._result;
        }
        var T = { current: null };
        function L() {
          var e = T.current;
          if (null === e) throw Error(p(321));
          return e;
        }
        var R = {
          ReactCurrentDispatcher: T,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: w,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: _,
          forEach: function (e, t, n) {
            _(
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
              _(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              _(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!S(e)) throw Error(p(143));
            return e;
          },
        }),
          (t.Component = v),
          (t.PureComponent = y),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e) throw Error(p(267, e));
            var a = r({}, e.props),
              o = e.key,
              l = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (u = w.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                C.call(t, c) &&
                  !x.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = n;
            else if (1 < c) {
              s = Array(c);
              for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
              a.children = s;
            }
            return {
              $$typeof: i,
              type: e.type,
              key: o,
              ref: l,
              props: a,
              _owner: u,
            };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: l,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = S),
          (t.lazy = function (e) {
            return {
              $$typeof: c,
              _payload: { _status: -1, _result: e },
              _init: N,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return L().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return L().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return L().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return L().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return L().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return L().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return L().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return L().useRef(e);
          }),
          (t.useState = function (e) {
            return L().useState(e);
          }),
          (t.version = "17.0.2");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        var n, r, i, a;
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        if (
          "undefined" === typeof window ||
          "function" !== typeof MessageChannel
        ) {
          var s = null,
            c = null,
            f = function e() {
              if (null !== s)
                try {
                  var n = t.unstable_now();
                  s(!0, n), (s = null);
                } catch (r) {
                  throw (setTimeout(e, 0), r);
                }
            };
          (n = function (e) {
            null !== s ? setTimeout(n, 0, e) : ((s = e), setTimeout(f, 0));
          }),
            (r = function (e, t) {
              c = setTimeout(e, t);
            }),
            (i = function () {
              clearTimeout(c);
            }),
            (t.unstable_shouldYield = function () {
              return !1;
            }),
            (a = t.unstable_forceFrameRate = function () {});
        } else {
          var d = window.setTimeout,
            p = window.clearTimeout;
          if ("undefined" !== typeof console) {
            var h = window.cancelAnimationFrame;
            "function" !== typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              ),
              "function" !== typeof h &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                );
          }
          var m = !1,
            v = null,
            g = -1,
            y = 5,
            b = 0;
          (t.unstable_shouldYield = function () {
            return t.unstable_now() >= b;
          }),
            (a = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (y = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var w = new MessageChannel(),
            C = w.port2;
          (w.port1.onmessage = function () {
            if (null !== v) {
              var e = t.unstable_now();
              b = e + y;
              try {
                v(!0, e) ? C.postMessage(null) : ((m = !1), (v = null));
              } catch (n) {
                throw (C.postMessage(null), n);
              }
            } else m = !1;
          }),
            (n = function (e) {
              (v = e), m || ((m = !0), C.postMessage(null));
            }),
            (r = function (e, n) {
              g = d(function () {
                e(t.unstable_now());
              }, n);
            }),
            (i = function () {
              p(g), (g = -1);
            });
        }
        function x(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(void 0 !== i && 0 < O(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function E(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function S(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, i = e.length; r < i; ) {
                var a = 2 * (r + 1) - 1,
                  o = e[a],
                  l = a + 1,
                  u = e[l];
                if (void 0 !== o && 0 > O(o, n))
                  void 0 !== u && 0 > O(u, o)
                    ? ((e[r] = u), (e[l] = n), (r = l))
                    : ((e[r] = o), (e[a] = n), (r = a));
                else {
                  if (!(void 0 !== u && 0 > O(u, n))) break e;
                  (e[r] = u), (e[l] = n), (r = l);
                }
              }
            }
            return t;
          }
          return null;
        }
        function O(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var j = [],
          k = [],
          _ = 1,
          N = null,
          T = 3,
          L = !1,
          R = !1,
          I = !1;
        function M(e) {
          for (var t = E(k); null !== t; ) {
            if (null === t.callback) S(k);
            else {
              if (!(t.startTime <= e)) break;
              S(k), (t.sortIndex = t.expirationTime), x(j, t);
            }
            t = E(k);
          }
        }
        function P(e) {
          if (((I = !1), M(e), !R))
            if (null !== E(j)) (R = !0), n(A);
            else {
              var t = E(k);
              null !== t && r(P, t.startTime - e);
            }
        }
        function A(e, n) {
          (R = !1), I && ((I = !1), i()), (L = !0);
          var a = T;
          try {
            for (
              M(n), N = E(j);
              null !== N &&
              (!(N.expirationTime > n) || (e && !t.unstable_shouldYield()));

            ) {
              var o = N.callback;
              if ("function" === typeof o) {
                (N.callback = null), (T = N.priorityLevel);
                var l = o(N.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (N.callback = l)
                    : N === E(j) && S(j),
                  M(n);
              } else S(j);
              N = E(j);
            }
            if (null !== N) var u = !0;
            else {
              var s = E(k);
              null !== s && r(P, s.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (N = null), (T = a), (L = !1);
          }
        }
        var D = a;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            R || L || ((R = !0), n(A));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return E(j);
          }),
          (t.unstable_next = function (e) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = T;
            }
            var n = T;
            T = t;
            try {
              return e();
            } finally {
              T = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = D),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = T;
            T = e;
            try {
              return t();
            } finally {
              T = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
              e)
            ) {
              case 1:
                var u = -1;
                break;
              case 2:
                u = 250;
                break;
              case 5:
                u = 1073741823;
                break;
              case 4:
                u = 1e4;
                break;
              default:
                u = 5e3;
            }
            return (
              (e = {
                id: _++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (u = o + u),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  x(k, e),
                  null === E(j) &&
                    e === E(k) &&
                    (I ? i() : (I = !0), r(P, o - l)))
                : ((e.sortIndex = u), x(j, e), R || L || ((R = !0), n(A))),
              e
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = T;
            return function () {
              var n = T;
              T = t;
              try {
                return e.apply(this, arguments);
              } finally {
                T = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      210: function (e, t, n) {
        var r;
        !(function (i, a) {
          "use strict";
          var o = "function",
            l = "undefined",
            u = "object",
            s = "string",
            c = "model",
            f = "name",
            d = "type",
            p = "vendor",
            h = "version",
            m = "architecture",
            v = "console",
            g = "mobile",
            y = "tablet",
            b = "smarttv",
            w = "wearable",
            C = "embedded",
            x = "Amazon",
            E = "Apple",
            S = "ASUS",
            O = "BlackBerry",
            j = "Browser",
            k = "Chrome",
            _ = "Firefox",
            N = "Google",
            T = "Huawei",
            L = "LG",
            R = "Microsoft",
            I = "Motorola",
            M = "Opera",
            P = "Samsung",
            A = "Sharp",
            D = "Sony",
            V = "Xiaomi",
            B = "Zebra",
            H = "Facebook",
            F = function (e) {
              for (var t = {}, n = 0; n < e.length; n++)
                t[e[n].toUpperCase()] = e[n];
              return t;
            },
            U = function (e, t) {
              return typeof e === s && -1 !== z(t).indexOf(z(e));
            },
            z = function (e) {
              return e.toLowerCase();
            },
            G = function (e, t) {
              if (typeof e === s)
                return (
                  (e = e.replace(/^\s\s*/, "")),
                  typeof t === l ? e : e.substring(0, 350)
                );
            },
            Z = function (e, t) {
              for (var n, r, i, l, s, c, f = 0; f < t.length && !s; ) {
                var d = t[f],
                  p = t[f + 1];
                for (n = r = 0; n < d.length && !s; )
                  if ((s = d[n++].exec(e)))
                    for (i = 0; i < p.length; i++)
                      (c = s[++r]),
                        typeof (l = p[i]) === u && l.length > 0
                          ? 2 === l.length
                            ? typeof l[1] == o
                              ? (this[l[0]] = l[1].call(this, c))
                              : (this[l[0]] = l[1])
                            : 3 === l.length
                            ? typeof l[1] !== o || (l[1].exec && l[1].test)
                              ? (this[l[0]] = c ? c.replace(l[1], l[2]) : a)
                              : (this[l[0]] = c ? l[1].call(this, c, l[2]) : a)
                            : 4 === l.length &&
                              (this[l[0]] = c
                                ? l[3].call(this, c.replace(l[1], l[2]))
                                : a)
                          : (this[l] = c || a);
                f += 2;
              }
            },
            q = function (e, t) {
              for (var n in t)
                if (typeof t[n] === u && t[n].length > 0) {
                  for (var r = 0; r < t[n].length; r++)
                    if (U(t[n][r], e)) return "?" === n ? a : n;
                } else if (U(t[n], e)) return "?" === n ? a : n;
              return e;
            },
            W = {
              ME: "4.90",
              "NT 3.11": "NT3.51",
              "NT 4.0": "NT4.0",
              2e3: "NT 5.0",
              XP: ["NT 5.1", "NT 5.2"],
              Vista: "NT 6.0",
              7: "NT 6.1",
              8: "NT 6.2",
              8.1: "NT 6.3",
              10: ["NT 6.4", "NT 10.0"],
              RT: "ARM",
            },
            $ = {
              browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [h, [f, "Chrome"]],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [h, [f, "Edge"]],
                [
                  /(opera mini)\/([-\w\.]+)/i,
                  /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                  /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
                ],
                [f, h],
                [/opios[\/ ]+([\w\.]+)/i],
                [h, [f, M + " Mini"]],
                [/\bopr\/([\w\.]+)/i],
                [h, [f, M]],
                [
                  /(kindle)\/([\w\.]+)/i,
                  /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                  /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                  /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                  /(?:ms|\()(ie) ([\w\.]+)/i,
                  /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                  /(weibo)__([\d\.]+)/i,
                ],
                [f, h],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [h, [f, "UC" + j]],
                [
                  /microm.+\bqbcore\/([\w\.]+)/i,
                  /\bqbcore\/([\w\.]+).+microm/i,
                ],
                [h, [f, "WeChat(Win) Desktop"]],
                [/micromessenger\/([\w\.]+)/i],
                [h, [f, "WeChat"]],
                [/konqueror\/([\w\.]+)/i],
                [h, [f, "Konqueror"]],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [h, [f, "IE"]],
                [/yabrowser\/([\w\.]+)/i],
                [h, [f, "Yandex"]],
                [/(avast|avg)\/([\w\.]+)/i],
                [[f, /(.+)/, "$1 Secure " + j], h],
                [/\bfocus\/([\w\.]+)/i],
                [h, [f, _ + " Focus"]],
                [/\bopt\/([\w\.]+)/i],
                [h, [f, M + " Touch"]],
                [/coc_coc\w+\/([\w\.]+)/i],
                [h, [f, "Coc Coc"]],
                [/dolfin\/([\w\.]+)/i],
                [h, [f, "Dolphin"]],
                [/coast\/([\w\.]+)/i],
                [h, [f, M + " Coast"]],
                [/miuibrowser\/([\w\.]+)/i],
                [h, [f, "MIUI " + j]],
                [/fxios\/([-\w\.]+)/i],
                [h, [f, _]],
                [/\bqihu|(qi?ho?o?|360)browser/i],
                [[f, "360 " + j]],
                [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                [[f, /(.+)/, "$1 " + j], h],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [[f, /_/g, " "], h],
                [
                  /(electron)\/([\w\.]+) safari/i,
                  /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                  /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
                ],
                [f, h],
                [
                  /(metasr)[\/ ]?([\w\.]+)/i,
                  /(lbbrowser)/i,
                  /\[(linkedin)app\]/i,
                ],
                [f],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [[f, H], h],
                [
                  /safari (line)\/([\w\.]+)/i,
                  /\b(line)\/([\w\.]+)\/iab/i,
                  /(chromium|instagram)[\/ ]([-\w\.]+)/i,
                ],
                [f, h],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [h, [f, "GSA"]],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [h, [f, k + " Headless"]],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [[f, k + " WebView"], h],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [h, [f, "Android " + j]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [f, h],
                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                [h, [f, "Mobile Safari"]],
                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                [h, f],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [
                  f,
                  [
                    h,
                    q,
                    {
                      "1.0": "/8",
                      1.2: "/1",
                      1.3: "/3",
                      "2.0": "/412",
                      "2.0.2": "/416",
                      "2.0.3": "/417",
                      "2.0.4": "/419",
                      "?": "/",
                    },
                  ],
                ],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [f, h],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [[f, "Netscape"], h],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [h, [f, _ + " Reality"]],
                [
                  /ekiohf.+(flow)\/([\w\.]+)/i,
                  /(swiftfox)/i,
                  /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                  /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                  /(firefox)\/([\w\.]+)/i,
                  /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                  /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                  /(links) \(([\w\.]+)/i,
                ],
                [f, h],
                [/(cobalt)\/([\w\.]+)/i],
                [f, [h, /master.|lts./, ""]],
              ],
              cpu: [
                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                [[m, "amd64"]],
                [/(ia32(?=;))/i],
                [[m, z]],
                [/((?:i[346]|x)86)[;\)]/i],
                [[m, "ia32"]],
                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                [[m, "arm64"]],
                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                [[m, "armhf"]],
                [/windows (ce|mobile); ppc;/i],
                [[m, "arm"]],
                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                [[m, /ower/, "", z]],
                [/(sun4\w)[;\)]/i],
                [[m, "sparc"]],
                [
                  /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
                ],
                [[m, z]],
              ],
              device: [
                [
                  /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
                ],
                [c, [p, P], [d, y]],
                [
                  /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                  /samsung[- ]([-\w]+)/i,
                  /sec-(sgh\w+)/i,
                ],
                [c, [p, P], [d, g]],
                [/\((ip(?:hone|od)[\w ]*);/i],
                [c, [p, E], [d, g]],
                [
                  /\((ipad);[-\w\),; ]+apple/i,
                  /applecoremedia\/[\w\.]+ \((ipad)/i,
                  /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
                ],
                [c, [p, E], [d, y]],
                [/(macintosh);/i],
                [c, [p, E]],
                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                [c, [p, T], [d, y]],
                [
                  /(?:huawei|honor)([-\w ]+)[;\)]/i,
                  /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
                ],
                [c, [p, T], [d, g]],
                [
                  /\b(poco[\w ]+)(?: bui|\))/i,
                  /\b; (\w+) build\/hm\1/i,
                  /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                  /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                  /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
                ],
                [
                  [c, /_/g, " "],
                  [p, V],
                  [d, g],
                ],
                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                [
                  [c, /_/g, " "],
                  [p, V],
                  [d, y],
                ],
                [
                  /; (\w+) bui.+ oppo/i,
                  /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
                ],
                [c, [p, "OPPO"], [d, g]],
                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [c, [p, "Vivo"], [d, g]],
                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                [c, [p, "Realme"], [d, g]],
                [
                  /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                  /\bmot(?:orola)?[- ](\w*)/i,
                  /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
                ],
                [c, [p, I], [d, g]],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [c, [p, I], [d, y]],
                [
                  /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i,
                ],
                [c, [p, L], [d, y]],
                [
                  /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                  /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                  /\blg-?([\d\w]+) bui/i,
                ],
                [c, [p, L], [d, g]],
                [
                  /(ideatab[-\w ]+)/i,
                  /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
                ],
                [c, [p, "Lenovo"], [d, y]],
                [
                  /(?:maemo|nokia).*(n900|lumia \d+)/i,
                  /nokia[-_ ]?([-\w\.]*)/i,
                ],
                [
                  [c, /_/g, " "],
                  [p, "Nokia"],
                  [d, g],
                ],
                [/(pixel c)\b/i],
                [c, [p, N], [d, y]],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [c, [p, N], [d, g]],
                [
                  /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                ],
                [c, [p, D], [d, g]],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                  [c, "Xperia Tablet"],
                  [p, D],
                  [d, y],
                ],
                [
                  / (kb2005|in20[12]5|be20[12][59])\b/i,
                  /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
                ],
                [c, [p, "OnePlus"], [d, g]],
                [
                  /(alexa)webm/i,
                  /(kf[a-z]{2}wi)( bui|\))/i,
                  /(kf[a-z]+)( bui|\)).+silk\//i,
                ],
                [c, [p, x], [d, y]],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                  [c, /(.+)/g, "Fire Phone $1"],
                  [p, x],
                  [d, g],
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [c, p, [d, y]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                [c, [p, O], [d, g]],
                [
                  /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
                ],
                [c, [p, S], [d, y]],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [c, [p, S], [d, g]],
                [/(nexus 9)/i],
                [c, [p, "HTC"], [d, y]],
                [
                  /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                  /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                  /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i,
                ],
                [p, [c, /_/g, " "], [d, g]],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [c, [p, "Acer"], [d, y]],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [c, [p, "Meizu"], [d, g]],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [c, [p, A], [d, g]],
                [
                  /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                  /(hp) ([\w ]+\w)/i,
                  /(asus)-?(\w+)/i,
                  /(microsoft); (lumia[\w ]+)/i,
                  /(lenovo)[-_ ]?([-\w]+)/i,
                  /(jolla)/i,
                  /(oppo) ?([\w ]+) bui/i,
                ],
                [p, c, [d, g]],
                [
                  /(archos) (gamepad2?)/i,
                  /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                  /(kindle)\/([\w\.]+)/i,
                  /(nook)[\w ]+build\/(\w+)/i,
                  /(dell) (strea[kpr\d ]*[\dko])/i,
                  /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                  /(trinity)[- ]*(t\d{3}) bui/i,
                  /(gigaset)[- ]+(q\w{1,9}) bui/i,
                  /(vodafone) ([\w ]+)(?:\)| bui)/i,
                ],
                [p, c, [d, y]],
                [/(surface duo)/i],
                [c, [p, R], [d, y]],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [c, [p, "Fairphone"], [d, g]],
                [/(u304aa)/i],
                [c, [p, "AT&T"], [d, g]],
                [/\bsie-(\w*)/i],
                [c, [p, "Siemens"], [d, g]],
                [/\b(rct\w+) b/i],
                [c, [p, "RCA"], [d, y]],
                [/\b(venue[\d ]{2,7}) b/i],
                [c, [p, "Dell"], [d, y]],
                [/\b(q(?:mv|ta)\w+) b/i],
                [c, [p, "Verizon"], [d, y]],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [c, [p, "Barnes & Noble"], [d, y]],
                [/\b(tm\d{3}\w+) b/i],
                [c, [p, "NuVision"], [d, y]],
                [/\b(k88) b/i],
                [c, [p, "ZTE"], [d, y]],
                [/\b(nx\d{3}j) b/i],
                [c, [p, "ZTE"], [d, g]],
                [/\b(gen\d{3}) b.+49h/i],
                [c, [p, "Swiss"], [d, g]],
                [/\b(zur\d{3}) b/i],
                [c, [p, "Swiss"], [d, y]],
                [/\b((zeki)?tb.*\b) b/i],
                [c, [p, "Zeki"], [d, y]],
                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                [[p, "Dragon Touch"], c, [d, y]],
                [/\b(ns-?\w{0,9}) b/i],
                [c, [p, "Insignia"], [d, y]],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [c, [p, "NextBook"], [d, y]],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [[p, "Voice"], c, [d, g]],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [[p, "LvTel"], c, [d, g]],
                [/\b(ph-1) /i],
                [c, [p, "Essential"], [d, g]],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [c, [p, "Envizen"], [d, y]],
                [/\b(trio[-\w\. ]+) b/i],
                [c, [p, "MachSpeed"], [d, y]],
                [/\btu_(1491) b/i],
                [c, [p, "Rotor"], [d, y]],
                [/(shield[\w ]+) b/i],
                [c, [p, "Nvidia"], [d, y]],
                [/(sprint) (\w+)/i],
                [p, c, [d, g]],
                [/(kin\.[onetw]{3})/i],
                [
                  [c, /\./g, " "],
                  [p, R],
                  [d, g],
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [c, [p, B], [d, y]],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [c, [p, B], [d, g]],
                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                [p, c, [d, v]],
                [/droid.+; (shield) bui/i],
                [c, [p, "Nvidia"], [d, v]],
                [/(playstation [345portablevi]+)/i],
                [c, [p, D], [d, v]],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [c, [p, R], [d, v]],
                [/smart-tv.+(samsung)/i],
                [p, [d, b]],
                [/hbbtv.+maple;(\d+)/i],
                [
                  [c, /^/, "SmartTV"],
                  [p, P],
                  [d, b],
                ],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                  [p, L],
                  [d, b],
                ],
                [/(apple) ?tv/i],
                [p, [c, E + " TV"], [d, b]],
                [/crkey/i],
                [
                  [c, k + "cast"],
                  [p, N],
                  [d, b],
                ],
                [/droid.+aft(\w)( bui|\))/i],
                [c, [p, x], [d, b]],
                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                [c, [p, A], [d, b]],
                [/(bravia[\w ]+)( bui|\))/i],
                [c, [p, D], [d, b]],
                [/(mitv-\w{5}) bui/i],
                [c, [p, V], [d, b]],
                [
                  /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                  /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
                ],
                [
                  [p, G],
                  [c, G],
                  [d, b],
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [[d, b]],
                [/((pebble))app/i],
                [p, c, [d, w]],
                [/droid.+; (glass) \d/i],
                [c, [p, N], [d, w]],
                [/droid.+; (wt63?0{2,3})\)/i],
                [c, [p, B], [d, w]],
                [/(quest( 2)?)/i],
                [c, [p, H], [d, w]],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [p, [d, C]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                [c, [d, g]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [c, [d, y]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [[d, y]],
                [
                  /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
                ],
                [[d, g]],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [c, [p, "Generic"]],
              ],
              engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [h, [f, "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [h, [f, "Blink"]],
                [
                  /(presto)\/([\w\.]+)/i,
                  /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                  /ekioh(flow)\/([\w\.]+)/i,
                  /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                  /(icab)[\/ ]([23]\.[\d\.]+)/i,
                ],
                [f, h],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [h, f],
              ],
              os: [
                [/microsoft (windows) (vista|xp)/i],
                [f, h],
                [
                  /(windows) nt 6\.2; (arm)/i,
                  /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                  /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                ],
                [f, [h, q, W]],
                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                [
                  [f, "Windows"],
                  [h, q, W],
                ],
                [
                  /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                  /cfnetwork\/.+darwin/i,
                ],
                [
                  [h, /_/g, "."],
                  [f, "iOS"],
                ],
                [
                  /(mac os x) ?([\w\. ]*)/i,
                  /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
                ],
                [
                  [f, "Mac OS"],
                  [h, /_/g, "."],
                ],
                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                [h, f],
                [
                  /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                  /(blackberry)\w*\/([\w\.]*)/i,
                  /(tizen|kaios)[\/ ]([\w\.]+)/i,
                  /\((series40);/i,
                ],
                [f, h],
                [/\(bb(10);/i],
                [h, [f, O]],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [h, [f, "Symbian"]],
                [
                  /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
                ],
                [h, [f, _ + " OS"]],
                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                [h, [f, "webOS"]],
                [/crkey\/([\d\.]+)/i],
                [h, [f, k + "cast"]],
                [/(cros) [\w]+ ([\w\.]+\w)/i],
                [[f, "Chromium OS"], h],
                [
                  /(nintendo|playstation) ([wids345portablevuch]+)/i,
                  /(xbox); +xbox ([^\);]+)/i,
                  /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                  /(mint)[\/\(\) ]?(\w*)/i,
                  /(mageia|vectorlinux)[; ]/i,
                  /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                  /(hurd|linux) ?([\w\.]*)/i,
                  /(gnu) ?([\w\.]*)/i,
                  /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                  /(haiku) (\w+)/i,
                ],
                [f, h],
                [/(sunos) ?([\w\.\d]*)/i],
                [[f, "Solaris"], h],
                [
                  /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                  /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                  /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                  /(unix) ?([\w\.]*)/i,
                ],
                [f, h],
              ],
            },
            K = function e(t, n) {
              if ((typeof t === u && ((n = t), (t = a)), !(this instanceof e)))
                return new e(t, n).getResult();
              var r =
                  t ||
                  (typeof i !== l && i.navigator && i.navigator.userAgent
                    ? i.navigator.userAgent
                    : ""),
                o = n
                  ? (function (e, t) {
                      var n = {};
                      for (var r in e)
                        t[r] && t[r].length % 2 === 0
                          ? (n[r] = t[r].concat(e[r]))
                          : (n[r] = e[r]);
                      return n;
                    })($, n)
                  : $;
              return (
                (this.getBrowser = function () {
                  var e,
                    t = {};
                  return (
                    (t[f] = a),
                    (t[h] = a),
                    Z.call(t, r, o.browser),
                    (t.major =
                      typeof (e = t.version) === s
                        ? e.replace(/[^\d\.]/g, "").split(".")[0]
                        : a),
                    t
                  );
                }),
                (this.getCPU = function () {
                  var e = {};
                  return (e[m] = a), Z.call(e, r, o.cpu), e;
                }),
                (this.getDevice = function () {
                  var e = {};
                  return (
                    (e[p] = a),
                    (e[c] = a),
                    (e[d] = a),
                    Z.call(e, r, o.device),
                    e
                  );
                }),
                (this.getEngine = function () {
                  var e = {};
                  return (e[f] = a), (e[h] = a), Z.call(e, r, o.engine), e;
                }),
                (this.getOS = function () {
                  var e = {};
                  return (e[f] = a), (e[h] = a), Z.call(e, r, o.os), e;
                }),
                (this.getResult = function () {
                  return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU(),
                  };
                }),
                (this.getUA = function () {
                  return r;
                }),
                (this.setUA = function (e) {
                  return (
                    (r = typeof e === s && e.length > 350 ? G(e, 350) : e), this
                  );
                }),
                this.setUA(r),
                this
              );
            };
          (K.VERSION = "1.0.33"),
            (K.BROWSER = F([f, h, "major"])),
            (K.CPU = F([m])),
            (K.DEVICE = F([c, p, d, v, g, b, y, w, C])),
            (K.ENGINE = K.OS = F([f, h])),
            typeof t !== l
              ? (e.exports && (t = e.exports = K), (t.UAParser = K))
              : n.amdO
              ? (r = function () {
                  return K;
                }.call(t, n, t, e)) === a || (e.exports = r)
              : typeof i !== l && (i.UAParser = K);
          var Y = typeof i !== l && (i.jQuery || i.Zepto);
          if (Y && !Y.ua) {
            var Q = new K();
            (Y.ua = Q.getResult()),
              (Y.ua.get = function () {
                return Q.getUA();
              }),
              (Y.ua.set = function (e) {
                Q.setUA(e);
                var t = Q.getResult();
                for (var n in t) Y.ua[n] = t[n];
              });
          }
        })("object" === typeof window ? window : this);
      },
      61: function (e, t, n) {
        var r = n(698).default;
        function i() {
          "use strict";
          (e.exports = i =
            function () {
              return t;
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
          var t = {},
            n = Object.prototype,
            a = n.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            l = o.iterator || "@@iterator",
            u = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function c(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            c({}, "");
          } catch (N) {
            c = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function f(e, t, n, r) {
            var i = t && t.prototype instanceof h ? t : h,
              a = Object.create(i.prototype),
              o = new j(r || []);
            return (
              (a._invoke = (function (e, t, n) {
                var r = "suspendedStart";
                return function (i, a) {
                  if ("executing" === r)
                    throw new Error("Generator is already running");
                  if ("completed" === r) {
                    if ("throw" === i) throw a;
                    return _();
                  }
                  for (n.method = i, n.arg = a; ; ) {
                    var o = n.delegate;
                    if (o) {
                      var l = E(o, n);
                      if (l) {
                        if (l === p) continue;
                        return l;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if ("suspendedStart" === r)
                        throw ((r = "completed"), n.arg);
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = "executing";
                    var u = d(e, t, n);
                    if ("normal" === u.type) {
                      if (
                        ((r = n.done ? "completed" : "suspendedYield"),
                        u.arg === p)
                      )
                        continue;
                      return { value: u.arg, done: n.done };
                    }
                    "throw" === u.type &&
                      ((r = "completed"),
                      (n.method = "throw"),
                      (n.arg = u.arg));
                  }
                };
              })(e, n, o)),
              a
            );
          }
          function d(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (N) {
              return { type: "throw", arg: N };
            }
          }
          t.wrap = f;
          var p = {};
          function h() {}
          function m() {}
          function v() {}
          var g = {};
          c(g, l, function () {
            return this;
          });
          var y = Object.getPrototypeOf,
            b = y && y(y(k([])));
          b && b !== n && a.call(b, l) && (g = b);
          var w = (v.prototype = h.prototype = Object.create(g));
          function C(e) {
            ["next", "throw", "return"].forEach(function (t) {
              c(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function x(e, t) {
            function n(i, o, l, u) {
              var s = d(e[i], e, o);
              if ("throw" !== s.type) {
                var c = s.arg,
                  f = c.value;
                return f && "object" == r(f) && a.call(f, "__await")
                  ? t.resolve(f.__await).then(
                      function (e) {
                        n("next", e, l, u);
                      },
                      function (e) {
                        n("throw", e, l, u);
                      }
                    )
                  : t.resolve(f).then(
                      function (e) {
                        (c.value = e), l(c);
                      },
                      function (e) {
                        return n("throw", e, l, u);
                      }
                    );
              }
              u(s.arg);
            }
            var i;
            this._invoke = function (e, r) {
              function a() {
                return new t(function (t, i) {
                  n(e, r, t, i);
                });
              }
              return (i = i ? i.then(a, a) : a());
            };
          }
          function E(e, t) {
            var n = e.iterator[t.method];
            if (void 0 === n) {
              if (((t.delegate = null), "throw" === t.method)) {
                if (
                  e.iterator.return &&
                  ((t.method = "return"),
                  (t.arg = void 0),
                  E(e, t),
                  "throw" === t.method)
                )
                  return p;
                (t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return p;
            }
            var r = d(n, e.iterator, t.arg);
            if ("throw" === r.type)
              return (
                (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), p
              );
            var i = r.arg;
            return i
              ? i.done
                ? ((t[e.resultName] = i.value),
                  (t.next = e.nextLoc),
                  "return" !== t.method &&
                    ((t.method = "next"), (t.arg = void 0)),
                  (t.delegate = null),
                  p)
                : i
              : ((t.method = "throw"),
                (t.arg = new TypeError("iterator result is not an object")),
                (t.delegate = null),
                p);
          }
          function S(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function O(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function j(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(S, this),
              this.reset(!0);
          }
          function k(e) {
            if (e) {
              var t = e[l];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var n = -1,
                  r = function t() {
                    for (; ++n < e.length; )
                      if (a.call(e, n))
                        return (t.value = e[n]), (t.done = !1), t;
                    return (t.value = void 0), (t.done = !0), t;
                  };
                return (r.next = r);
              }
            }
            return { next: _ };
          }
          function _() {
            return { value: void 0, done: !0 };
          }
          return (
            (m.prototype = v),
            c(w, "constructor", v),
            c(v, "constructor", m),
            (m.displayName = c(v, s, "GeneratorFunction")),
            (t.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === m || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (t.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, v)
                  : ((e.__proto__ = v), c(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(w)),
                e
              );
            }),
            (t.awrap = function (e) {
              return { __await: e };
            }),
            C(x.prototype),
            c(x.prototype, u, function () {
              return this;
            }),
            (t.AsyncIterator = x),
            (t.async = function (e, n, r, i, a) {
              void 0 === a && (a = Promise);
              var o = new x(f(e, n, r, i), a);
              return t.isGeneratorFunction(n)
                ? o
                : o.next().then(function (e) {
                    return e.done ? e.value : o.next();
                  });
            }),
            C(w),
            c(w, s, "Generator"),
            c(w, l, function () {
              return this;
            }),
            c(w, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (e) {
              var t = [];
              for (var n in e) t.push(n);
              return (
                t.reverse(),
                function n() {
                  for (; t.length; ) {
                    var r = t.pop();
                    if (r in e) return (n.value = r), (n.done = !1), n;
                  }
                  return (n.done = !0), n;
                }
              );
            }),
            (t.values = k),
            (j.prototype = {
              constructor: j,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(O),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      a.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;
                function n(n, r) {
                  return (
                    (o.type = "throw"),
                    (o.arg = e),
                    (t.next = n),
                    r && ((t.method = "next"), (t.arg = void 0)),
                    !!r
                  );
                }
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var i = this.tryEntries[r],
                    o = i.completion;
                  if ("root" === i.tryLoc) return n("end");
                  if (i.tryLoc <= this.prev) {
                    var l = a.call(i, "catchLoc"),
                      u = a.call(i, "finallyLoc");
                    if (l && u) {
                      if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                    } else if (l) {
                      if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var r = this.tryEntries[n];
                  if (
                    r.tryLoc <= this.prev &&
                    a.call(r, "finallyLoc") &&
                    this.prev < r.finallyLoc
                  ) {
                    var i = r;
                    break;
                  }
                }
                i &&
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var o = i ? i.completion : {};
                return (
                  (o.type = e),
                  (o.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), p)
                    : this.complete(o)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  p
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), O(n), p;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var i = r.arg;
                      O(n);
                    }
                    return i;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, t, n) {
                return (
                  (this.delegate = {
                    iterator: k(e),
                    resultName: t,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  p
                );
              },
            }),
            t
          );
        }
        (e.exports = i),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      698: function (e) {
        function t(n) {
          return (
            (e.exports = t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(n)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      687: function (e, t, n) {
        var r = n(61)();
        e.exports = r;
        try {
          regeneratorRuntime = r;
        } catch (i) {
          "object" === typeof globalThis
            ? (globalThis.regeneratorRuntime = r)
            : Function("r", "regeneratorRuntime = r")(r);
        }
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var a = (t[r] = { exports: {} });
    return e[r].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.m = e),
    (n.amdO = {}),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return "static/js/" + e + ".4c0364be.chunk.js";
    }),
    (n.miniCssF = function (e) {}),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "oscar-react-v2:";
      n.l = function (r, i, a, o) {
        if (e[r]) e[r].push(i);
        else {
          var l, u;
          if (void 0 !== a)
            for (
              var s = document.getElementsByTagName("script"), c = 0;
              c < s.length;
              c++
            ) {
              var f = s[c];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == t + a
              ) {
                l = f;
                break;
              }
            }
          l ||
            ((u = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + a),
            (l.src = r)),
            (e[r] = [i]);
          var d = function (t, n) {
              (l.onerror = l.onload = null), clearTimeout(p);
              var i = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                i &&
                  i.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = d.bind(null, l.onerror)),
            (l.onload = d.bind(null, l.onload)),
            u && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var i = n.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) r.push(i[2]);
          else {
            var a = new Promise(function (n, r) {
              i = e[t] = [n, r];
            });
            r.push((i[2] = a));
            var o = n.p + n.u(t),
              l = new Error();
            n.l(
              o,
              function (r) {
                if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = a),
                    (l.request = o),
                    i[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, r) {
          var i,
            a,
            o = r[0],
            l = r[1],
            u = r[2],
            s = 0;
          if (
            o.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (i in l) n.o(l, i) && (n.m[i] = l[i]);
            if (u) u(n);
          }
          for (t && t(r); s < o.length; s++)
            (a = o[s]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        r = (self.webpackChunkoscar_react_v2 =
          self.webpackChunkoscar_react_v2 || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (function () {
      "use strict";
      var e = n(791),
        t = n(164),
        r = e.createContext(null);
      var i = function (e) {
          e();
        },
        a = function () {
          return i;
        };
      var o = {
        notify: function () {},
        get: function () {
          return [];
        },
      };
      function l(e, t) {
        var n,
          r = o;
        function i() {
          u.onStateChange && u.onStateChange();
        }
        function l() {
          n ||
            ((n = t ? t.addNestedSub(i) : e.subscribe(i)),
            (r = (function () {
              var e = a(),
                t = null,
                n = null;
              return {
                clear: function () {
                  (t = null), (n = null);
                },
                notify: function () {
                  e(function () {
                    for (var e = t; e; ) e.callback(), (e = e.next);
                  });
                },
                get: function () {
                  for (var e = [], n = t; n; ) e.push(n), (n = n.next);
                  return e;
                },
                subscribe: function (e) {
                  var r = !0,
                    i = (n = { callback: e, next: null, prev: n });
                  return (
                    i.prev ? (i.prev.next = i) : (t = i),
                    function () {
                      r &&
                        null !== t &&
                        ((r = !1),
                        i.next ? (i.next.prev = i.prev) : (n = i.prev),
                        i.prev ? (i.prev.next = i.next) : (t = i.next));
                    }
                  );
                },
              };
            })()));
        }
        var u = {
          addNestedSub: function (e) {
            return l(), r.subscribe(e);
          },
          notifyNestedSubs: function () {
            r.notify();
          },
          handleChangeWrapper: i,
          isSubscribed: function () {
            return Boolean(n);
          },
          trySubscribe: l,
          tryUnsubscribe: function () {
            n && (n(), (n = void 0), r.clear(), (r = o));
          },
          getListeners: function () {
            return r;
          },
        };
        return u;
      }
      var u =
        "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        "undefined" !== typeof window.document.createElement
          ? e.useLayoutEffect
          : e.useEffect;
      var s = function (t) {
        var n = t.store,
          i = t.context,
          a = t.children,
          o = (0, e.useMemo)(
            function () {
              var e = l(n);
              return (
                (e.onStateChange = e.notifyNestedSubs),
                { store: n, subscription: e }
              );
            },
            [n]
          ),
          s = (0, e.useMemo)(
            function () {
              return n.getState();
            },
            [n]
          );
        u(
          function () {
            var e = o.subscription;
            return (
              e.trySubscribe(),
              s !== n.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = null);
              }
            );
          },
          [o, s]
        );
        var c = i || r;
        return e.createElement(c.Provider, { value: o }, a);
      };
      n(110), n(441);
      function c() {
        return (0, e.useContext)(r);
      }
      var f = function (e, t) {
        return e === t;
      };
      function d(t) {
        void 0 === t && (t = r);
        var n =
          t === r
            ? c
            : function () {
                return (0, e.useContext)(t);
              };
        return function (t, r) {
          void 0 === r && (r = f);
          var i = n(),
            a = (function (t, n, r, i) {
              var a,
                o = (0, e.useReducer)(function (e) {
                  return e + 1;
                }, 0)[1],
                s = (0, e.useMemo)(
                  function () {
                    return l(r, i);
                  },
                  [r, i]
                ),
                c = (0, e.useRef)(),
                f = (0, e.useRef)(),
                d = (0, e.useRef)(),
                p = (0, e.useRef)(),
                h = r.getState();
              try {
                if (t !== f.current || h !== d.current || c.current) {
                  var m = t(h);
                  a = void 0 !== p.current && n(m, p.current) ? p.current : m;
                } else a = p.current;
              } catch (v) {
                throw (
                  (c.current &&
                    (v.message +=
                      "\nThe error may be correlated with this previous error:\n" +
                      c.current.stack +
                      "\n\n"),
                  v)
                );
              }
              return (
                u(function () {
                  (f.current = t),
                    (d.current = h),
                    (p.current = a),
                    (c.current = void 0);
                }),
                u(
                  function () {
                    function e() {
                      try {
                        var e = r.getState();
                        if (e === d.current) return;
                        var t = f.current(e);
                        if (n(t, p.current)) return;
                        (p.current = t), (d.current = e);
                      } catch (v) {
                        c.current = v;
                      }
                      o();
                    }
                    return (
                      (s.onStateChange = e),
                      s.trySubscribe(),
                      e(),
                      function () {
                        return s.tryUnsubscribe();
                      }
                    );
                  },
                  [r, s]
                ),
                a
              );
            })(t, r, i.store, i.subscription);
          return (0, e.useDebugValue)(a), a;
        };
      }
      var p,
        h = d();
      (p = t.unstable_batchedUpdates), (i = p);
      var m = n(184);
      var v,
        g,
        y,
        b,
        w,
        C,
        x,
        E,
        S = function () {
          return (0, m.jsxs)("div", {
            className: "loader",
            "data-side": "top",
            children: [
              (0, m.jsx)("div", { className: "loader-left" }),
              (0, m.jsx)("div", { className: "loader-right" }),
            ],
          });
        },
        O = ["title", "titleId"];
      function j() {
        return (
          (j =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          j.apply(this, arguments)
        );
      }
      function k(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function _(t, n) {
        var r = t.title,
          i = t.titleId,
          a = k(t, O);
        return e.createElement(
          "svg",
          j(
            {
              width: 401,
              height: 62,
              viewBox: "0 0 401 62",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          v ||
            (v = e.createElement("path", {
              d: "M88.484 26.2107C84.5 24.0831 79.928 22.4686 79.928 17.1159C79.928 14.5509 81.92 10.1487 88.044 10.1487H88.708C93.208 10.1487 96.308 12.7892 96.676 16.3842C96.896 18.1419 98.224 19.0247 99.624 19.0247C101.024 19.0247 102.28 18.1459 102.28 16.3126C102.28 9.56409 95.936 4.57727 88.852 4.57727H88.112C80.364 4.57727 74.24 10.0055 74.24 17.1199C74.24 26.5089 81.396 28.2667 88.48 32.2315C92.98 34.7249 97.26 36.411 97.26 42.4278C97.26 47.7089 94.752 50.5682 88.924 50.5682H88.184C83.388 50.5682 79.108 47.856 79.108 42.6465C79.108 40.6661 77.708 39.8588 76.304 39.8588C74.9 39.8588 73.5 40.7377 73.5 42.571C73.5 51.447 80.508 56.068 88.108 56.068H88.772C97.7 56.068 102.864 50.934 102.864 42.4994C102.864 32.5257 95.856 30.1795 88.476 26.2147L88.484 26.2107Z",
              fill: "white",
            })),
          g ||
            (g = e.createElement("path", {
              d: "M204.752 6.62524C204.312 5.23338 202.908 4.57324 201.36 4.57324C199.812 4.57324 198.484 5.23338 198.04 6.62524L183.652 52.5446C183.58 52.9104 183.504 53.2047 183.504 53.4234C183.504 54.8908 184.684 56.064 186.38 56.064C187.488 56.064 188.52 55.551 188.964 54.1591L192.284 43.5969H210.508L213.756 54.1591C214.196 55.551 215.304 56.064 216.412 56.064C218.108 56.064 219.288 54.8908 219.288 53.4234C219.288 53.2047 219.216 52.9104 219.14 52.5446L204.752 6.62524ZM194.052 38.0215L201.356 14.5509L208.732 38.0215H194.048H194.052Z",
              fill: "white",
            })),
          y ||
            (y = e.createElement("path", {
              d: "M324.932 4.57324C323.528 4.57324 322.128 5.52766 322.128 7.36093V53.3518C322.128 55.1851 323.532 56.064 324.932 56.064C326.332 56.064 327.736 55.1851 327.736 53.3518V7.36093C327.736 5.52766 326.332 4.57324 324.932 4.57324Z",
              fill: "white",
            })),
          b ||
            (b = e.createElement("path", {
              d: "M140.832 26.7236C138.988 26.7236 138.028 28.1195 138.028 29.5113C138.028 30.9032 138.988 32.299 140.832 32.299H143.564L148.76 32.295L151.492 32.299C153.336 32.299 154.296 30.9032 154.296 29.5113C154.296 28.1195 153.336 26.7236 151.492 26.7236H148.76L143.564 26.7276L140.832 26.7236Z",
              fill: "white",
            })),
          w ||
            (w = e.createElement("path", {
              d: "M157.688 5.01069H134.596C133.12 5.01069 131.792 6.33097 131.792 7.80236V14.4276H131.796V14.9764H131.792V17.6925C131.792 19.5258 133.196 20.4802 134.596 20.4802C135.996 20.4802 137.4 19.5258 137.4 17.6925V14.9764H137.372V14.4276H137.396V10.5861H157.684C159.676 10.5861 160.488 9.19024 160.488 7.79838C160.488 6.40652 159.676 5.00671 157.684 5.00671L157.688 5.01069Z",
              fill: "white",
            })),
          C ||
            (C = e.createElement("path", {
              d: "M157.688 50.1267H137.4V44.6189V44.5275H137.404V41.8114C137.404 39.9781 136 39.0237 134.6 39.0237C133.2 39.0237 131.796 39.9781 131.796 41.8114V44.5275H131.824V44.6189H131.796V52.9104C131.796 54.3778 133.124 55.6981 134.6 55.6981H157.692C159.684 55.6981 160.496 54.3063 160.496 52.9104C160.496 51.5146 159.684 50.1227 157.692 50.1227L157.688 50.1267Z",
              fill: "white",
            })),
          x ||
            (x = e.createElement("path", {
              d: "M284.092 6.62524C283.652 5.23338 282.248 4.57324 280.7 4.57324C279.152 4.57324 277.82 5.23338 277.38 6.62524L262.992 52.5446C262.916 52.9104 262.844 53.2047 262.844 53.4234C262.844 54.8908 264.024 56.064 265.72 56.064C266.828 56.064 267.86 55.551 268.304 54.1591L271.624 43.5969H289.848L293.096 54.1591C293.536 55.551 294.644 56.064 295.752 56.064C297.448 56.064 298.628 54.8908 298.628 53.4234C298.628 53.2047 298.556 52.9104 298.48 52.5446L284.092 6.62524ZM273.392 38.0215L280.696 14.5509L288.072 38.0215H273.388H273.392Z",
              fill: "white",
            })),
          E ||
            (E = e.createElement("path", {
              d: "M239.672 49.4229C238.18 49.4229 236.692 50.4369 236.692 52.3855V54.0995C236.692 56.0481 238.18 57.0622 239.672 57.0622C241.164 57.0622 242.652 56.0481 242.652 54.0995V52.3855C242.652 50.4369 241.164 49.4229 239.672 49.4229Z",
              fill: "white",
            }))
        );
      }
      var N,
        T = e.forwardRef(_),
        L = (n.p, ["title", "titleId"]);
      function R() {
        return (
          (R =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          R.apply(this, arguments)
        );
      }
      function I(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function M(t, n) {
        var r = t.title,
          i = t.titleId,
          a = I(t, L);
        return e.createElement(
          "svg",
          R(
            {
              width: 96,
              height: 96,
              viewBox: "0 0 96 96",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          N ||
            (N = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M48 22.3996C33.8615 22.3996 22.4 33.8611 22.4 47.9996C22.4 62.1381 33.8615 73.5996 48 73.5996C62.1385 73.5996 73.6 62.1381 73.6 47.9996C73.6 33.8611 62.1385 22.3996 48 22.3996ZM17.6 47.9996C17.6 31.2102 31.2105 17.5996 48 17.5996C64.7894 17.5996 78.4 31.2102 78.4 47.9996C78.4 64.7891 64.7894 78.3996 48 78.3996C31.2105 78.3996 17.6 64.7891 17.6 47.9996ZM58.0971 37.9041C59.0344 38.8414 59.0344 40.361 58.0971 41.2982L51.3942 48.0012L58.0971 54.7041C59.0344 55.6414 59.0344 57.161 58.0971 58.0982C57.1599 59.0355 55.6403 59.0355 54.703 58.0982L48.0001 51.3953L41.2971 58.0982C40.3599 59.0355 38.8403 59.0355 37.903 58.0982C36.9658 57.161 36.9658 55.6414 37.903 54.7041L44.606 48.0012L37.903 41.2982C36.9658 40.361 36.9658 38.8414 37.903 37.9041C38.8403 36.9669 40.3599 36.9669 41.2971 37.9041L48.0001 44.6071L54.703 37.9041C55.6403 36.9669 57.1599 36.9669 58.0971 37.9041Z",
              fill: "white",
            }))
        );
      }
      var P,
        A = e.forwardRef(M),
        D = (n.p, ["title", "titleId"]);
      function V() {
        return (
          (V =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          V.apply(this, arguments)
        );
      }
      function B(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function H(t, n) {
        var r = t.title,
          i = t.titleId,
          a = B(t, D);
        return e.createElement(
          "svg",
          V(
            {
              width: 96,
              height: 96,
              viewBox: "0 0 96 96",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          P ||
            (P = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11.2349 36.7399C12.85 36.7399 14.4698 35.6388 14.4698 33.5238V30.3903H14.4375V29.7572H14.4651V25.3254H37.8753C40.1734 25.3254 41.1102 23.7151 41.1102 22.1093C41.1102 20.5036 40.1734 18.8887 37.8753 18.8887H11.2349C9.53207 18.8887 8 20.4118 8 22.1093V29.7526H8.00462V30.3857H8V33.5192C8 35.6342 9.61975 36.7353 11.2349 36.7353V36.7399ZM57.4182 47.2668C57.4182 45.6611 56.3107 44.0508 54.1833 44.0508H51.0315L45.0371 44.0554L41.8852 44.0508C39.7579 44.0508 38.6504 45.6611 38.6504 47.2668C38.6504 48.8726 39.7579 50.4829 41.8852 50.4829H45.0371L51.0315 50.4783L54.1833 50.4829C56.3107 50.4829 57.4182 48.8726 57.4182 47.2668ZM14.4651 70.6978H37.8753V70.6933C40.1734 70.6933 41.1102 72.299 41.1102 73.9093C41.1102 75.5196 40.1734 77.1254 37.8753 77.1254H11.2349C9.53207 77.1254 8 75.6022 8 73.9093V64.3437H8.03231V64.2382H8V61.1047C8 58.9897 9.61975 57.8887 11.2349 57.8887C12.85 57.8887 14.4698 58.9897 14.4698 61.1047V64.2382H14.4651V64.3437V70.6978ZM88.1102 29.7526V22.1093C88.1102 20.4118 86.5781 18.8887 84.8753 18.8887H58.2349C55.9368 18.8887 55 20.499 55 22.1093C55 23.7196 55.9368 25.3254 58.2349 25.3254H81.645V29.7572H81.6727V30.3903H81.6404V33.5238C81.6404 35.6388 83.2602 36.7399 84.8753 36.7399C86.4904 36.7399 88.1102 35.6388 88.1102 33.5238V30.3903H88.1056V29.7572H88.1102V29.7526ZM81.6404 61.1047C81.6404 58.9897 83.2602 57.8887 84.8753 57.8887V57.8933C86.4904 57.8933 88.1102 58.9943 88.1102 61.1093V64.2428H88.0779V64.3483H88.1102V73.9139C88.1102 75.6068 86.5781 77.13 84.8753 77.13H58.2349C55.9368 77.13 55 75.5242 55 73.9139C55 72.3036 55.9368 70.6978 58.2349 70.6978H81.645V64.3437V64.2382H81.6404V61.1047Z",
              fill: "white",
            }))
        );
      }
      var F,
        U = e.forwardRef(H),
        z = (n.p, ["title", "titleId"]);
      function G() {
        return (
          (G =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          G.apply(this, arguments)
        );
      }
      function Z(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function q(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Z(t, z);
        return e.createElement(
          "svg",
          G(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          F ||
            (F = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M13.466 5.08136C12.3742 4.83431 11.2375 4.86788 10.1621 5.17894C9.09133 5.48865 8.11609 6.06339 7.3265 6.84989L5.89998 8.19033V6.45273C5.89998 5.95568 5.49703 5.55273 4.99998 5.55273C4.50292 5.55273 4.09998 5.95568 4.09998 6.45273V10.269V10.2709C4.09998 10.3696 4.11587 10.4646 4.14522 10.5535C4.18505 10.6743 4.25125 10.7885 4.3441 10.8873C4.45645 11.0069 4.59376 11.0889 4.74035 11.1329C4.77779 11.1442 4.81625 11.1531 4.85557 11.1594C4.90771 11.1678 4.96048 11.1717 5.01322 11.1709H8.81816C9.31522 11.1709 9.71816 10.768 9.71816 10.2709C9.71816 9.77386 9.31522 9.37092 8.81816 9.37092H7.27217L8.569 8.15234C8.57586 8.1459 8.58261 8.13935 8.58926 8.1327C9.16572 7.55596 9.87888 7.13464 10.6622 6.90806C11.4455 6.68148 12.2735 6.65703 13.0688 6.83698C13.8641 7.01694 14.6009 7.39543 15.2104 7.93715C15.8199 8.47887 16.2822 9.16616 16.5543 9.93488C16.7201 10.4035 17.2344 10.6489 17.7029 10.4831C18.1715 10.3173 18.417 9.80299 18.2511 9.33441C17.8777 8.27904 17.243 7.33548 16.4062 6.59176C15.5695 5.84805 14.5579 5.32842 13.466 5.08136ZM16.7284 13.716H15.1817C14.6847 13.716 14.2817 13.3131 14.2817 12.816C14.2817 12.319 14.6847 11.916 15.1817 11.916H18.9999C19.471 11.916 19.8575 12.2779 19.8967 12.7388C19.8992 12.768 19.9003 12.7972 19.8999 12.8265V16.6342C19.8999 17.1313 19.497 17.5342 18.9999 17.5342C18.5029 17.5342 18.0999 17.1313 18.0999 16.6342V14.8972L16.6735 16.2376C15.8839 17.0241 14.9086 17.5988 13.8379 17.9085C12.7625 18.2196 11.6258 18.2532 10.5339 18.0061C9.44201 17.7591 8.4305 17.2394 7.59374 16.4957C6.75699 15.752 6.12227 14.8084 5.74881 13.7531C5.58299 13.2845 5.82843 12.7702 6.29701 12.6044C6.7656 12.4386 7.27988 12.684 7.4457 13.1526C7.71772 13.9213 8.18005 14.6086 8.78954 15.1503C9.39902 15.692 10.1358 16.0705 10.9311 16.2505C11.7265 16.4304 12.5544 16.406 13.3378 16.1794C14.1211 15.9528 14.8342 15.5315 15.4107 14.9548C15.4139 14.9516 15.4171 14.9484 15.4204 14.9452C15.4239 14.9418 15.4274 14.9385 15.431 14.9351L16.7284 13.716Z",
              fill: "white",
            }))
        );
      }
      var W,
        $ = e.forwardRef(q),
        K = (n.p, ["title", "titleId"]);
      function Y() {
        return (
          (Y =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Y.apply(this, arguments)
        );
      }
      function Q(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function X(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Q(t, K);
        return e.createElement(
          "svg",
          Y(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          W ||
            (W = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M13.4333 4.99961C13.4333 4.50255 13.8363 4.09961 14.3333 4.09961H17.4445C18.0957 4.09961 18.7203 4.35832 19.1808 4.81883C19.6413 5.27933 19.9 5.90391 19.9 6.55517V17.4441C19.9 18.0953 19.6413 18.7199 19.1808 19.1804C18.7203 19.6409 18.0957 19.8996 17.4445 19.8996H14.3333C13.8363 19.8996 13.4333 19.4967 13.4333 18.9996C13.4333 18.5026 13.8363 18.0996 14.3333 18.0996H17.4445C17.6183 18.0996 17.7851 18.0305 17.908 17.9076C18.0309 17.7847 18.1 17.6179 18.1 17.4441V6.55517C18.1 6.3813 18.0309 6.21456 17.908 6.09162C17.7851 5.96868 17.6183 5.89961 17.4445 5.89961H14.3333C13.8363 5.89961 13.4333 5.49667 13.4333 4.99961ZM9.80804 7.47454C10.1595 7.12307 10.7294 7.12307 11.0808 7.47454L14.9552 11.3489C15.1267 11.5128 15.2334 11.7437 15.2334 11.9996C15.2334 12.1275 15.2068 12.2492 15.1587 12.3594C15.1149 12.4599 15.0519 12.554 14.9697 12.6362L11.0808 16.5251C10.7294 16.8766 10.1595 16.8766 9.80804 16.5251C9.45657 16.1736 9.45657 15.6038 9.80804 15.2523L12.1607 12.8996H5.0001C4.50304 12.8996 4.1001 12.4967 4.1001 11.9996C4.1001 11.5026 4.50304 11.0996 5.0001 11.0996H12.1603L9.80804 8.74733C9.45657 8.39586 9.45657 7.82601 9.80804 7.47454Z",
              fill: "white",
            }))
        );
      }
      var J = e.forwardRef(X);
      n.p;
      function ee(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function te(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? te(Object(n), !0).forEach(function (t) {
                ee(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : te(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function re(e) {
        return (
          "Minified Redux error #" +
          e +
          "; visit https://redux.js.org/Errors?code=" +
          e +
          " for the full message or use the non-minified dev environment for full errors. "
        );
      }
      var ie =
          ("function" === typeof Symbol && Symbol.observable) || "@@observable",
        ae = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        oe = {
          INIT: "@@redux/INIT" + ae(),
          REPLACE: "@@redux/REPLACE" + ae(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + ae();
          },
        };
      function le(e) {
        if ("object" !== typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function ue() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return 0 === t.length
          ? function (e) {
              return e;
            }
          : 1 === t.length
          ? t[0]
          : t.reduce(function (e, t) {
              return function () {
                return e(t.apply(void 0, arguments));
              };
            });
      }
      var se = "CREATE_MAIN_SOCKET",
        ce = "CREATE_UPDATE_SOCKET",
        fe = "PING",
        de = "SET_ALIVE_STATE",
        pe = "CONNECT_WEBSOCKET",
        he = "CONNECT_UPDATESOCKET",
        me = "UPDATE_CONNECTION_LOADING",
        ve = "UPDATE_CONNECTION_SUCCESSFUL",
        ge = "UPDATE_CONNECTION_FAILED",
        ye = "CLOSE_EXISTING_CONNECTION",
        be = "CONNECTION_LOADING",
        we = "CONNECTION_SUCCESSFUL",
        Ce = "CONNECTION_FAILED",
        xe = "CONNECTION_LOST",
        Ee = "CONNECTION_CLOSED",
        Se = "WAITING_CONNECTION",
        Oe = "STREAMS_LOADING",
        je = "STREAMS_CONNECTION_SUCCESSFUL",
        ke = "STREAMS_CONNECTION_FAILED",
        _e = "REFRESH_TARGETS",
        Ne = "REFRESH_CAMERA",
        Te = "REFRESH_DISTANCE_LINES",
        Le = "REFRESH_ALARM_STATE",
        Re = "REFRESH_SETTINGS",
        Ie = "REFRESH_VERSIONS",
        Me = "REFRESH_SETTING",
        Pe = "REFRESH_STATE",
        Ae = "REFRESH_BOATBUS",
        De = "REFRESH_ERROR",
        Ve = "REFRESH_UPDATE",
        Be = "REMOVE_UPDATE_ERROR",
        He = "ACTIVATE_BIG_TERMAL_STREAM",
        Fe = "ACTIVATE_BIG_COLOR_STREAM",
        Ue = "ACTIVATE_BIG_MAP",
        ze = "ACTIVATE_SMALL_TERMAL_STREAM",
        Ge = "ACTIVATE_SMALL_COLOR_STREAM",
        Ze = "ACTIVATE_SMALL_MAP",
        qe = "SET_BIG_STREAM_ZOOM",
        We = "SET_BIG_MAP_ZOOM",
        $e = "SET_SMALL_STREAM_ZOOM",
        Ke = "SET_SMALL_MAP_ZOOM",
        Ye = "SET_VIEW",
        Qe = "GET_SETTINGS",
        Xe = "GET_VERSIONS",
        Je = "GET_STATE",
        et = "START_SUBSCRIPTIONS",
        tt = "SUBSCRIBE_STATUS",
        nt = "SUBSCRIBE_STREAMS",
        rt = "SUBSCRIBE_STATE",
        it = "SUBSCRIBE_BOATBUS",
        at = "SUBSCRIBE_ERROR",
        ot = "SWITCH_ALARM_MODE",
        lt = "ACTIVATE_TARGET_LIST",
        ut = "DEACTIVATE_TARGET_LIST",
        st = "ACTIVATE_SETTINGS",
        ct = "DEACTIVATE_SETTINGS",
        ft = "ACTIVATE_CONTROLS",
        dt = "DEACTIVATE_CONTROLS",
        pt = "SET_CONFIG_SETTING",
        ht = "REQUEST_FAILED",
        mt = "REQUEST_SUCCESS",
        vt = "REQUEST_LOADING",
        gt = "ACKNOWLEDGE_REQUEST_FAILURE",
        yt = "LOAD_CACHE",
        bt = "SET_IP",
        wt = "SET_LANGUAGE",
        Ct = "SET_THEME",
        xt = "SET_HIDE_BOATBUS",
        Et = "SET_DEVELOPER_MODE",
        St = "SET_INSTALLER_MODE",
        Ot = "SET_SETTINGS_LABEL",
        jt = "SET_DISTANCE_METRIC",
        kt = "SET_SPEED_METRIC",
        _t = "SET_TEMPERATURE_METRIC",
        Nt = "SET_ANGLE_METRIC",
        Tt = "TILT_CAMERA",
        Lt = "PAN_CAMERA",
        Rt = "DRAG_AND_DROP",
        It = "ADD_SELECTED_TARGET",
        Mt = "START_UPDATE",
        Pt = "FINISH_UPDATE",
        At = "UPLOAD_MASK",
        Dt = "MASK_SUBMITTED",
        Vt = "SET_TARGET_LIST_IMAGE",
        Bt = "SUBSCRIBE_SYNC_SETTING",
        Ht = "SET_NMEA_GATEWAY",
        Ft = "START_PANORAMA_RECORDING",
        Ut = "START_STREAM_RECORDING",
        zt = "STOP_STREAM_RECORDING",
        Gt = "START_SNAPSHOT_RECORDING",
        Zt = "STOP_SNAPSHOT_RECORDING",
        qt = "START_IMU_RECORDING",
        Wt = "STOP_IMU_RECORDING",
        $t = function (e) {
          return "ws://" + e + ":9002/websocket/app";
        },
        Kt = function (e) {
          return "ws://" + e + ":8080/v1/update-status";
        },
        Yt = "DANGER",
        Qt = "WARNING",
        Xt = "DEFAULT",
        Jt = function (e) {
          if (document.getElementsByClassName("page")[0])
            return getComputedStyle(
              document.getElementsByClassName("page")[0]
            ).getPropertyValue(e);
        },
        en = function (e, t) {
          var n =
              e && e["lv3-collision-certainty-above"]
                ? e["lv3-collision-certainty-above"].value
                : 1,
            r =
              e && e["lv1-collision-certainty-above"]
                ? e["lv1-collision-certainty-above"].value
                : 1;
          return t > n ? Yt : t > r ? Qt : Xt;
        },
        tn = function (e, t) {
          var n = en(e, t);
          return Jt(
            n === Yt ? "--danger" : n === Qt ? "--warning" : "--primary"
          );
        },
        nn = function (e, t) {
          var n = Xt;
          return (
            t.forEach(function (t) {
              var r = en(e, t.alarmCertainty);
              r === Yt ? (n = Yt) : r === Qt && n === Xt && (n = Qt);
            }),
            n
          );
        };
      function rn(e, t, n, r, i, a, o) {
        try {
          var l = e[a](o),
            u = l.value;
        } catch (s) {
          return void n(s);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, i);
      }
      function an(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function on(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function ln(e, t, n) {
        return (
          t && on(e.prototype, t),
          n && on(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      var un = n(687),
        sn = n.n(un),
        cn = (function () {
          function e(t, n) {
            an(this, e),
              (this.resolve = t),
              (this.reject = n),
              (this.triggered = !1);
          }
          return (
            ln(e, [
              {
                key: "trigger",
                value: function (e) {
                  e.success ? this._resolve(e.data) : this._reject(e.data);
                },
              },
              {
                key: "_resolve",
                value: function (e) {
                  this.triggered || ((this.triggered = !0), this.resolve(e));
                },
              },
              {
                key: "_reject",
                value: function (e) {
                  this.triggered || ((this.triggered = !0), this.reject(e));
                },
              },
            ]),
            e
          );
        })(),
        fn = (function () {
          function e(t) {
            var n = this;
            an(this, e),
              (this.refreshMetadataID = function (e) {
                (n.peerConnection.metadataID.wideThermal =
                  e.frame_counter_TwFoV),
                  (n.peerConnection.metadataID.wideColor =
                    e.frame_counter_TnFoV),
                  (n.peerConnection.metadataID.narrowThermal =
                    e.frame_counter_RGBwFoV),
                  (n.peerConnection.metadataID.narrowColor =
                    e.frame_counter_RGBnFoV);
              }),
              (this._onICECandidate = function (e) {
                if (e.candidate)
                  return n.mainSocket.send("WEBRTC", {
                    ice: e.candidate,
                    peer_id: n.mainSocket.peerID,
                  });
              }),
              (this.peerConnection = null),
              (this.mainSocket = t);
            try {
              (this.thermalCanvas = new OffscreenCanvas(640, 512)),
                (this.thermalCtx = this.thermalCanvas.getContext("2d")),
                (this.colorCanvas = new OffscreenCanvas(1200, 960)),
                (this.colorCtx = this.colorCanvas.getContext("2d"));
            } catch (r) {
              console.log("Offscreen canvas not supported");
            }
          }
          return (
            ln(e, [
              {
                key: "connectPeer",
                value: function () {
                  try {
                    (this.peerConnection = new RTCPeerConnection({
                      iceServers: [],
                      iceTransportPolicy: "all",
                    })),
                      (this.peerConnection.metadataID = {
                        wideThermal: null,
                        wideColor: null,
                        narrowThermal: null,
                        narrowColor: null,
                      }),
                      (this.peerConnection.onicecandidate =
                        this._onICECandidate),
                      (this.peerConnection.ontrack = this._onRemoteTrack);
                  } catch (e) {
                    console.log("Error connecting RTC: " + e);
                  }
                },
              },
              {
                key: "onICEMessage",
                value: function (e) {
                  this.peerConnection.addIceCandidate(new RTCIceCandidate(e));
                },
              },
              {
                key: "onSDPMessage",
                value: function (e) {
                  var t = this;
                  if ("offer" !== e.type) return Promise.resolve(null);
                  this.peerConnection
                    .setRemoteDescription(e)
                    .then(function () {
                      return t.peerConnection.createAnswer();
                    })
                    .then(function (e) {
                      return t.peerConnection.setLocalDescription(e);
                    })
                    .then(function () {
                      return t.mainSocket.send("WEBRTC", {
                        sdp: t.peerConnection.localDescription,
                        peer_id: t.mainSocket.peerID,
                      });
                    })
                    .then(function () {
                      return Promise.resolve(null);
                    })
                    .catch(function (e) {
                      console.log("On SDP message error: " + e);
                    });
                },
              },
              {
                key: "_onRemoteTrack",
                value: function (e) {
                  e.track &&
                    "video" === e.track.kind &&
                    (this.wideThermalStream
                      ? this.wideColorStream
                        ? this.narrowThermalStream
                          ? this.narrowColorStream ||
                            ((this.narrowColorStream = new MediaStream([
                              e.track,
                            ])),
                            console.log("narrowColorStream is set"))
                          : ((this.narrowThermalStream = new MediaStream([
                              e.track,
                            ])),
                            console.log("narrowThermalStream is set"))
                        : ((this.wideColorStream = new MediaStream([e.track])),
                          console.log("wideColorStream is set"))
                      : ((this.wideThermalStream = new MediaStream([e.track])),
                        console.log("wideThermalStream is set")));
                },
              },
              {
                key: "closePeerConnection",
                value: function () {
                  null != this.peerConnection && this.peerConnection.close(),
                    (this.peerConnection = null);
                },
              },
            ]),
            e
          );
        })(),
        dn = n(210),
        pn = n.n(dn),
        hn = "SUCCESS",
        mn = "LOADING",
        vn = "CONNECTION_BUSY",
        gn = "LOST",
        yn = "CLOSED",
        bn = "REQUEST_TIMEDOUT",
        wn = "SOCKET_ALREADY_OPEN",
        Cn = "WAITING_CONNECTION",
        xn = (function () {
          function e(t, n) {
            an(this, e),
              (this.socket = null),
              (this.openRequests = {}),
              (this.subscribers = {}),
              (this.connectPromise = null),
              (this.peerPromise = null),
              (this.webRTC = null),
              (this.peerID = null),
              (this.messageID = 1),
              (this.connectionLostAction = t),
              (this.connectionClosedAction = n);
          }
          return (
            ln(e, [
              {
                key: "connect",
                value: function (e) {
                  var t = this;
                  return new Promise(function (n, r) {
                    (t.connectPromise = { resolve: n, reject: r }),
                      null === t.socket
                        ? ((t.socket = new WebSocket(e)),
                          (t.socket.onopen = function (e) {
                            t._onOpen(e);
                          }),
                          (t.socket.onclose = function (e) {
                            t._onClose(e);
                          }),
                          (t.socket.onmessage = function (e) {
                            t._onMessage(e);
                          }),
                          (t.socket.onerror = function (e) {
                            t._onError(e);
                          }),
                          setTimeout(function () {
                            r(bn);
                          }, 5e3))
                        : r(wn);
                  });
                },
              },
              {
                key: "close",
                value: function () {
                  var e = this;
                  return new Promise(function (t, n) {
                    null === e.socket || (e.socket.close(), (e.socket = null)),
                      t();
                  });
                },
              },
              {
                key: "_onOpen",
                value: function () {
                  console.log("Websocket opened");
                },
              },
              {
                key: "_onClose",
                value: function (e) {
                  null !== this.socket &&
                    (console.log("Websocket closed"),
                    e === yn
                      ? this.connectionClosedAction()
                      : this.connectionLostAction(e),
                    this.close());
                },
              },
              {
                key: "_onError",
                value: function (e) {
                  console.log("Websocket error"),
                    this.connectionLostAction(e),
                    this.close();
                },
              },
              {
                key: "send",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null;
                  null !== this.socket &&
                    (null === e
                      ? console.log("Message not supported")
                      : null === n
                      ? this.socket.send(
                          JSON.stringify({
                            topic: e,
                            data: t,
                            peer_id: this.peerID,
                          })
                        )
                      : null === t
                      ? this.socket.send(
                          JSON.stringify({
                            topic: e,
                            id: n,
                            peer_id: this.peerID,
                          })
                        )
                      : this.socket.send(
                          JSON.stringify({
                            topic: e,
                            data: t,
                            id: n,
                            peer_id: this.peerID,
                          })
                        ));
                },
              },
              {
                key: "_connectToPeer",
                value: function (e) {
                  var t = this;
                  if (e) {
                    var n = new (pn().UAParser)(
                      navigator.userAgent
                    ).getResult();
                    this.sendCommandRequest(
                      "REGISTRATION",
                      {
                        user_agent: n.device.vendor + " " + n.device.model,
                        user_name: n.browser.name,
                        timestamp: Date.now(),
                      },
                      function () {},
                      function (e) {
                        t.connectPromise.reject(e);
                      }
                    );
                  } else this.connectPromise.reject("UNKNOWN_PEER_ID");
                },
              },
              {
                key: "sendCommandRequest",
                value: (function () {
                  var e,
                    t =
                      ((e = sn().mark(function e(t, n, r, i) {
                        var a,
                          o = this;
                        return sn().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (a = this.messageID),
                                    this.messageID++,
                                    e.abrupt(
                                      "return",
                                      new Promise(function (e, r) {
                                        o.send(t, n, a);
                                        var i = new cn(e, r);
                                        (o.openRequests[a] = i),
                                          setTimeout(function () {
                                            i.reject(bn);
                                          }, 5e3);
                                      })
                                        .then(function (e) {
                                          r(e);
                                        })
                                        .catch(function (e) {
                                          i(e);
                                        })
                                        .finally(function () {
                                          delete o.openRequests[a];
                                        })
                                    )
                                  );
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })),
                      function () {
                        var t = this,
                          n = arguments;
                        return new Promise(function (r, i) {
                          var a = e.apply(t, n);
                          function o(e) {
                            rn(a, r, i, o, l, "next", e);
                          }
                          function l(e) {
                            rn(a, r, i, o, l, "throw", e);
                          }
                          o(void 0);
                        });
                      });
                  return function (e, n, r, i) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "subscribe",
                value: function (e, t) {
                  void 0 === this.subscribers[e] && (this.subscribers[e] = t);
                },
              },
              {
                key: "unsubscribe",
                value: function (e) {
                  this.subscribers[e] = void 0;
                },
              },
              {
                key: "subscribeStreams",
                value: function () {
                  var e = this;
                  return new Promise(function (t, n) {
                    e.streamsPromise = { resolve: t, reject: n };
                    var r = setInterval(function () {
                      null !== e.webRTC &&
                        null !== e.webRTC.peerConnection &&
                        null !== e.webRTC.peerConnection.wideThermalStream &&
                        null !== e.webRTC.peerConnection.wideColorStream &&
                        null !== e.webRTC.peerConnection.narrowThermalStream &&
                        null !== e.webRTC.peerConnection.narrowColorStream &&
                        (clearInterval(r),
                        t({
                          wideThermal:
                            e.webRTC.peerConnection.wideThermalStream,
                          wideColor: e.webRTC.peerConnection.wideColorStream,
                          narrowThermal:
                            e.webRTC.peerConnection.narrowThermalStream,
                          narrowColor:
                            e.webRTC.peerConnection.narrowColorStream,
                        }));
                    }, 500);
                    setTimeout(function () {
                      clearInterval(r), n(bn);
                    }, 5e3);
                  });
                },
              },
              {
                key: "closeExistingConnection",
                value: function (e) {
                  this.sendCommandRequest(
                    "DISCONNECT_DEVICE",
                    { peer_id: e },
                    function () {},
                    function () {}
                  );
                },
              },
              {
                key: "restartRegistration",
                value: function () {
                  var e = this;
                  return new Promise(function (t, n) {
                    (e.connectPromise = { resolve: t, reject: n }),
                      setTimeout(function () {
                        e._connectToPeer(e.peerID);
                      }, 3e3);
                  });
                },
              },
              {
                key: "_onMessage",
                value: function (e) {
                  var t,
                    n = this;
                  try {
                    switch (
                      ((t = JSON.parse(e.data)).id &&
                        void 0 !== this.openRequests[t.id] &&
                        this.openRequests[t.id].trigger(t),
                      t.topic)
                    ) {
                      case "HELLO":
                        (this.peerID = t.data.peer_id),
                          this._connectToPeer(this.peerID);
                        break;
                      case "CONNECTION_ERROR":
                        this.connectPromise.reject(t.data);
                        break;
                      case "REGISTRATION":
                        "REGISTRATION_OK" === t.data.info
                          ? this.sendCommandRequest(
                              "WEBRTC",
                              { info: "OFFER_REQUEST", peer_id: this.peerID },
                              function () {
                                n.connectPromise.resolve();
                              },
                              function (e) {
                                n.connectPromise.reject(e);
                              }
                            )
                          : "CONNECTION_BUSY" === t.data.info &&
                            this.connectPromise.reject({
                              info: vn,
                              devices: t.data.device_list,
                            });
                        break;
                      case "GOODBYE":
                        this._onClose(yn, { info: yn });
                        break;
                      case "STATUS":
                        void 0 !== this.subscribers.STATUS &&
                          this.subscribers.STATUS(t.data),
                          null !== this.webRTC &&
                            this.webRTC.refreshMetadataID(t.data);
                        break;
                      case "SETTINGS":
                      case "VERSIONS":
                      case "SETTING":
                      case "PTU_DND":
                      case "PTU_CONTROL":
                      case "DISCONNECT_DEVICE":
                      case "RECORDING":
                        break;
                      case "SYNC_SETTING":
                        void 0 !== this.subscribers.SYNC_SETTING &&
                          this.subscribers.SYNC_SETTING(t.data);
                        break;
                      case "STATE":
                        void 0 !== this.subscribers.STATE &&
                          this.subscribers.STATE(t.data);
                        break;
                      case "BOATBUS":
                        void 0 !== this.subscribers.BOATBUS &&
                          this.subscribers.BOATBUS(t.data);
                        break;
                      case "WEBRTC":
                        null === this.webRTC &&
                          ((this.webRTC = new fn(this)),
                          this.webRTC.connectPeer()),
                          null != t.data.sdp
                            ? this.webRTC.onSDPMessage(t.data.sdp)
                            : null != t.data.ice
                            ? this.webRTC.onICEMessage(t.data.ice)
                            : "OFFER_OK" === t.data ||
                              console.log("Unknown message: " + e.data);
                        break;
                      case "ERROR":
                        void 0 !== this.subscribers.ERROR &&
                          this.subscribers.ERROR(t.data);
                        break;
                      default:
                        console.log(t.topic + ": Unsupported message");
                    }
                  } catch (r) {
                    return void console.log("Error parsing response: " + r);
                  }
                },
              },
            ]),
            e
          );
        })(),
        En = xn,
        Sn = (function () {
          function e() {
            an(this, e),
              (this.socket = null),
              (this.subscribeAction = null),
              (this.connectPromise = null);
          }
          return (
            ln(e, [
              {
                key: "connect",
                value: function (e) {
                  var t = this;
                  return new Promise(function (n, r) {
                    (t.connectPromise = { resolve: n, reject: r }),
                      null === t.socket
                        ? ((t.socket = new WebSocket(e)),
                          (t.socket.onopen = function (e) {
                            t._onOpen(e);
                          }),
                          (t.socket.onclose = function (e) {
                            t._onClose(e);
                          }),
                          (t.socket.onmessage = function (e) {
                            t._onMessage(e);
                          }),
                          (t.socket.onerror = function (e) {
                            t._onError(e);
                          }),
                          setTimeout(function () {
                            r(bn);
                          }, 5e3))
                        : r(wn);
                  });
                },
              },
              {
                key: "close",
                value: function () {
                  var e = this;
                  return new Promise(function (t, n) {
                    null === e.socket || (e.socket.close(), (e.socket = null)),
                      t();
                  });
                },
              },
              {
                key: "_onOpen",
                value: function (e) {
                  console.log("Update socket opened"),
                    this.connectPromise.resolve();
                },
              },
              {
                key: "_onClose",
                value: function (e) {
                  console.log("Update socket closed:");
                },
              },
              {
                key: "_onError",
                value: function (e) {
                  console.log("Update socket error"), this.close();
                },
              },
              {
                key: "subscribe",
                value: function (e) {
                  this.subscribeAction = e;
                },
              },
              {
                key: "_onMessage",
                value: function (e) {
                  var t = JSON.parse(e.data);
                  null !== this.subscribeAction &&
                    this.subscribeAction({ type: t.type, data: t.data });
                },
              },
            ]),
            e
          );
        })(),
        On = function () {
          return { type: we };
        },
        jn = function (e) {
          return { type: Ce, payload: e };
        },
        kn = function () {
          return { type: xe };
        },
        _n = function (e) {
          return { type: de, payload: e };
        },
        Nn = function () {
          return { type: et };
        },
        Tn = function (e) {
          return { type: Me, payload: e };
        },
        Ln = function (e) {
          return { type: Pe, payload: e };
        },
        Rn = function () {
          return { type: lt };
        },
        In = function (e) {
          return { type: Ot, payload: e };
        },
        Mn = function (e) {
          return { type: pt, payload: e };
        },
        Pn = function () {
          return { type: vt };
        },
        An = function () {
          return { type: mt };
        },
        Dn = function (e) {
          return { type: ht, payload: e };
        },
        Vn = function (e) {
          return { type: qe, payload: e };
        },
        Bn = function (e) {
          return { type: We, payload: e };
        },
        Hn = function (e) {
          return { type: Ke, payload: e };
        },
        Fn = function (e) {
          return { type: $e, payload: e };
        },
        Un = function (e) {
          return { type: Ye, payload: e };
        },
        zn = function (e) {
          return { type: Tt, payload: e };
        },
        Gn = function (e) {
          return { type: Lt, payload: e };
        },
        Zn = function (e) {
          return { type: bt, payload: e };
        },
        qn = function (e) {
          return { type: Ct, payload: e };
        },
        Wn = function (e) {
          return { type: xt, payload: e };
        },
        $n = function (e) {
          return { type: Et, payload: e };
        },
        Kn = function (e) {
          return { type: St, payload: e };
        },
        Yn = function (e) {
          return { type: jt, payload: e };
        },
        Qn = function (e) {
          return { type: It, payload: e };
        },
        Xn = function () {
          return { type: Pt };
        },
        Jn = function () {
          return { type: Ft };
        },
        er = function (e) {
          return { type: Dt, payload: e };
        },
        tr = function (e) {
          return { type: Rt, payload: e };
        },
        nr = function (e) {
          return { type: Vt, payload: e };
        },
        rr = function (e, t, n, r, i, a) {
          var o =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : 0,
            l = new FormData(),
            u = new XMLHttpRequest();
          e(),
            r && l.append("file", r),
            u.open(i, a, !0),
            u.send(l),
            (u.timeout = o),
            (u.onreadystatechange = function () {
              0 === u.status ||
                (200 === u.status ? 4 === u.readyState && t() : n());
            }),
            (u.onerror = function (e) {
              n(e);
            }),
            (u.ontimeout = function (e) {
              n(e);
            }),
            (u.onabort = function (e) {
              n(e);
            });
        },
        ir = 9002,
        ar = "/webservice/mask/download/panorama-diagnosis.tiff",
        or = "POST",
        lr = 9002,
        ur = "/webservice/mask/upload",
        sr = "POST",
        cr = 8080,
        fr = "/v1/update/upload",
        dr = "POST",
        pr = 8080,
        hr = "/v1/update/finish",
        mr = "GET",
        vr = 9002,
        gr = "/ping",
        yr = n.p + "static/media/danger-alarm.cafb4cc3934d6ab89405.mp3",
        br = n.p + "static/media/warning-alarm.d2e007a26d442bca25f9.mp3",
        wr = new Audio(yr),
        Cr = new Audio(br);
      function xr() {
        var e = ai.getState().socket.alarmState;
        if (!0 === ai.getState().menu.alarm) {
          if (e === Yt) return Er(wr), setTimeout(xr, 1e3);
          if (e === Qt) return Er(Cr), setTimeout(xr, 2e3);
        }
        return setTimeout(xr, 500);
      }
      function Er(e) {
        e.play().catch(function (e) {
          return console.log(e);
        });
      }
      var Sr = function () {
          console.log("Alarm thread started"), xr();
        },
        Or = function (e) {
          return function (t) {
            return function (n) {
              switch (n.type) {
                case pe:
                  if (null === e.getState().socket.mainSocket.socket) {
                    e.dispatch({ type: be });
                    var r = $t(e.getState().settings.IP);
                    e.getState()
                      .socket.mainSocket.connect(r)
                      .then(function () {
                        e.dispatch(On()), e.dispatch(Nn());
                      })
                      .catch(function (t) {
                        e.dispatch(jn(t));
                      });
                  } else console.log("mainSocket connection already opened");
                  break;
                case he:
                  null === e.getState().socket.updateSocket.socket
                    ? (e.dispatch({ type: me }),
                      e
                        .getState()
                        .socket.updateSocket.connect(
                          Kt(e.getState().settings.IP)
                        )
                        .then(function () {
                          e.dispatch({ type: ve }),
                            e
                              .getState()
                              .socket.updateSocket.subscribe(function (t) {
                                e.dispatch(
                                  (function (e) {
                                    return { type: Ve, payload: e };
                                  })(t)
                                );
                              });
                        })
                        .catch(function (t) {
                          e.dispatch(
                            (function (e) {
                              return { type: ge, payload: e };
                            })(t)
                          );
                        }))
                    : console.log("UpdateSocket connection already opened");
                  break;
                case et:
                  e.dispatch({ type: Qe }),
                    e.dispatch({ type: Xe }),
                    e.dispatch({ type: Je }),
                    e.dispatch({ type: tt }),
                    e.dispatch({ type: Oe }),
                    e.dispatch({ type: nt }),
                    e.dispatch({ type: Bt }),
                    e.dispatch({ type: rt }),
                    e.dispatch({ type: it }),
                    e.dispatch({ type: at }),
                    Sr();
                  break;
                case "CLOSE_WEBSOCKET":
                  e.getState().socket.mainSocket &&
                    e.getState().socket.mainSocket.close();
                  break;
                case ye:
                  e.getState().socket.mainSocket &&
                    (e.dispatch({ type: Se }),
                    e
                      .getState()
                      .socket.mainSocket.closeExistingConnection(n.payload),
                    e
                      .getState()
                      .socket.mainSocket.restartRegistration()
                      .then(function () {
                        e.dispatch(On()), e.dispatch(Nn());
                      })
                      .catch(function (t) {
                        e.dispatch(jn(t));
                      }));
                  break;
                case Mt:
                  rr(
                    function () {
                      return e.dispatch(Pn());
                    },
                    function () {
                      return e.dispatch(An());
                    },
                    function (t) {
                      return e.dispatch(Dn(t));
                    },
                    n.payload,
                    sr,
                    "http://" + e.getState().settings.IP + ":" + cr + fr
                  );
                  break;
                case Pt:
                  rr(
                    function () {},
                    function () {
                      return e.dispatch({ type: Be });
                    },
                    function () {},
                    null,
                    dr,
                    "http://" + e.getState().settings.IP + ":" + pr + hr
                  );
                  break;
                case fe:
                  rr(
                    function () {},
                    function () {
                      e.dispatch(_n(!0));
                    },
                    function () {
                      e.dispatch(_n(!1));
                    },
                    null,
                    mr,
                    "http://" + e.getState().settings.IP + ":" + vr + gr,
                    1e4
                  );
              }
              return t(n);
            };
          };
        };
      function jr(e, t, n) {
        var r = ai.getState().socket.connection,
          i = ai.getState().socket.aliveState;
        return (
          !1 === i &&
            r &&
            r.websocket &&
            r.websocket.info !== gn &&
            (n < 4 ? n++ : t()),
          !0 === i &&
            r &&
            r.websocket &&
            r.websocket.info === gn &&
            window.location.reload(!0),
          !0 === i && (n = 1),
          e(),
          setTimeout(function () {
            return jr(e, t, n);
          }, 3e3)
        );
      }
      var kr,
        _r = function (e, t) {
          console.log("Is Alive thread started"), jr(e, t, 1);
        },
        Nr = function (e) {
          return function (t) {
            return function (n) {
              switch (n.type) {
                case Qe:
                  e.getState().socket.mainSocket.sendCommandRequest(
                    "SETTINGS",
                    null,
                    function (t) {
                      e.dispatch(
                        (function (e) {
                          return { type: Re, payload: e };
                        })(t)
                      );
                    },
                    function (t) {
                      e.dispatch(Dn(t));
                    }
                  );
                  break;
                case Xe:
                  e.getState().socket.mainSocket.sendCommandRequest(
                    "VERSIONS",
                    null,
                    function (t) {
                      e.dispatch(
                        (function (e) {
                          return { type: Ie, payload: e };
                        })(t)
                      );
                    },
                    function (t) {
                      e.dispatch(Dn(t));
                    }
                  );
                  break;
                case Je:
                  e.getState().socket.mainSocket.sendCommandRequest(
                    "STATE",
                    null,
                    function (t) {
                      e.dispatch(Ln(t));
                    },
                    function (t) {
                      e.dispatch(Dn(t));
                    }
                  );
                  break;
                case tt:
                  _r(
                    function () {
                      return e.dispatch({ type: fe });
                    },
                    function () {
                      e.dispatch(kn());
                    }
                  ),
                    e
                      .getState()
                      .socket.mainSocket.subscribe("STATUS", function (t) {
                        e.dispatch(
                          (function (e) {
                            return { type: _e, payload: e };
                          })(t.objects)
                        ),
                          e.dispatch(
                            (function (e, t) {
                              return { type: Le, payload: nn(e, t) };
                            })(e.getState().socket.settings, t.objects)
                          ),
                          e.dispatch(
                            (function (e) {
                              return { type: Ne, payload: e };
                            })(t.camera)
                          ),
                          e.dispatch(
                            (function (e) {
                              return { type: Te, payload: e };
                            })(t.worker_beziers)
                          );
                      });
                  break;
                case rt:
                  e.getState().socket.mainSocket.subscribe(
                    "STATE",
                    function (t) {
                      e.dispatch(Ln(t));
                    }
                  );
                  break;
                case at:
                  e.getState().socket.mainSocket.subscribe(
                    "ERROR",
                    function (t) {
                      e.dispatch(
                        (function (e) {
                          return { type: De, payload: e };
                        })(t)
                      );
                    }
                  );
                  break;
                case it:
                  e.getState().socket.mainSocket.subscribe(
                    "BOATBUS",
                    function (t) {
                      e.dispatch(
                        (function (e) {
                          return { type: Ae, payload: e };
                        })(t)
                      );
                    }
                  );
                  break;
                case nt:
                  e.getState()
                    .socket.mainSocket.subscribeStreams()
                    .then(function (t) {
                      e.dispatch(
                        (function (e) {
                          return { type: je, payload: e };
                        })(t)
                      );
                    })
                    .catch(function (t) {
                      e.dispatch(
                        (function (e) {
                          return { type: ke, payload: e };
                        })(t)
                      );
                    });
                  break;
                case Bt:
                  e.getState().socket.mainSocket.subscribe(
                    "SYNC_SETTING",
                    function (t) {
                      e.dispatch(Tn({ name: t.name, data: t.setting }));
                    }
                  );
                  break;
                case pt:
                  e.getState().socket.mainSocket.sendCommandRequest(
                    "SETTING",
                    { name: n.payload.name, value: n.payload.value },
                    function (t) {
                      e.dispatch(Tn({ name: n.payload.name, data: t }));
                    },
                    function (t) {
                      e.dispatch(Dn(t));
                    }
                  );
                  break;
                case Tt:
                  e.getState().socket.mainSocket.sendCommandRequest(
                    "PTU_CONTROL",
                    { direction: "TILT", command: n.payload },
                    function () {},
                    function (t) {
                      e.dispatch(Dn(t));
                    }
                  );
                  break;
                case Lt:
                  e.getState().socket.mainSocket.sendCommandRequest(
                    "PTU_CONTROL",
                    { direction: "PAN", command: n.payload },
                    function () {},
                    function (t) {
                      e.dispatch(Dn(t));
                    }
                  );
                  break;
                case Rt:
                  e.getState().socket.mainSocket.sendCommandRequest(
                    "PTU_DND",
                    n.payload,
                    function () {},
                    function (t) {
                      e.dispatch(Dn(t));
                    }
                  );
                  break;
                case At:
                  rr(
                    function () {
                      return e.dispatch(Pn());
                    },
                    function () {
                      e.dispatch(An()), e.dispatch(er(!0));
                    },
                    function (t) {
                      e.dispatch(Dn(t)), e.dispatch(er(!1));
                    },
                    n.payload,
                    or,
                    "http://" + e.getState().settings.IP + ":" + lr + ur
                  );
                  break;
                case Ht:
                  e.getState().socket.mainSocket.sendCommandRequest(
                    "BOATBUS",
                    {
                      info: "setup",
                      "nmea-gateway-model": n.payload.model,
                      "nmea-gateway-ip-address": n.payload.ip,
                      "nmea-gateway-port": n.payload.port,
                    },
                    function () {},
                    function (t) {
                      e.dispatch(Dn(t));
                    }
                  );
                  break;
                case Ft:
                  e.getState().socket.mainSocket.sendCommandRequest(
                    "PANORAMA",
                    { info: "START_PANORAMA_RECORDING" },
                    function () {
                      e.dispatch(
                        Ln({
                          PANORAMA: {
                            info: "PANORAMA_STATE",
                            progress: 0,
                            state: "RUNNING",
                          },
                        })
                      );
                    },
                    function (t) {
                      e.dispatch(Dn(t));
                    }
                  );
                  break;
                case "STOP_PANORAMA_RECORDING":
                  e.getState().socket.mainSocket.sendCommandRequest(
                    "PANORAMA",
                    { info: "STOP_PANORAMA_RECORDING" },
                    function () {},
                    function (t) {
                      e.dispatch(Dn(t));
                    }
                  );
                  break;
                case Ut:
                  e.getState().socket.mainSocket.sendCommandRequest(
                    "RECORDING",
                    { info: "START_STREAM_RECORDING" },
                    function (t) {
                      t ? e.dispatch(Ln({ RECORDING: !0 })) : e.dispatch(Dn(t));
                    },
                    function (t) {
                      e.dispatch(Dn(t));
                    }
                  );
                  break;
                case zt:
                  e.getState().socket.mainSocket.sendCommandRequest(
                    "RECORDING",
                    { info: "STOP_STREAM_RECORDING" },
                    function (t) {
                      t ? e.dispatch(Ln({ RECORDING: !1 })) : e.dispatch(Dn(t));
                    },
                    function (t) {
                      e.dispatch(Dn(t));
                    }
                  );
                  break;
                case Gt:
                  e.getState().socket.mainSocket.sendCommandRequest(
                    "RECORDING",
                    { info: "START_SNAPSHOT_RECORDING" },
                    function (t) {
                      t
                        ? e.dispatch(Ln({ SNAPSHOT_RECORDING: !0 }))
                        : e.dispatch(Dn(t));
                    },
                    function (t) {
                      e.dispatch(Dn(t));
                    }
                  );
                  break;
                case Zt:
                  e.getState().socket.mainSocket.sendCommandRequest(
                    "RECORDING",
                    { info: "STOP_SNAPSHOT_RECORDING" },
                    function (t) {
                      t
                        ? e.dispatch(Ln({ SNAPSHOT_RECORDING: !1 }))
                        : e.dispatch(Dn(t));
                    },
                    function (t) {
                      e.dispatch(Dn(t));
                    }
                  );
                  break;
                case qt:
                  e.getState().socket.mainSocket.sendCommandRequest(
                    "RECORDING",
                    { info: "START_IMU_RECORDING" },
                    function (t) {
                      t
                        ? e.dispatch(Ln({ IMU_RECORDING: !1 }))
                        : e.dispatch(Dn(t));
                    },
                    function (t) {
                      e.dispatch(Dn(t));
                    }
                  );
                  break;
                case Wt:
                  e.getState().socket.mainSocket.sendCommandRequest(
                    "RECORDING",
                    { info: "STOP_IMU_RECORDING" },
                    function (t) {
                      t
                        ? e.dispatch(Ln({ IMU_RECORDING: !1 }))
                        : e.dispatch(Dn(t));
                    },
                    function (t) {
                      e.dispatch(Dn(t));
                    }
                  );
              }
              return t(n);
            };
          };
        },
        Tr = function () {
          return function (e) {
            return function (t) {
              return e(t);
            };
          };
        },
        Lr = { ENGLISH: "ENGLISH", FRENCH: "FRENCH" },
        Rr = { METERS: "METERS", FEET: "FEET", NM: "NAUTICAL_MILES" },
        Ir = { CELSIUS: "CELSIUS", FAHRENHEIT: "FAHRENHEIT" },
        Mr = {
          M_S: "METERS_PER_SECOND",
          KM_H: "KILOMETERS_PER_HOUR",
          KNOTS: "KNOTS",
        },
        Pr = { RAD: "RADIANT", DEGREE: "DEGREES" },
        Ar = "DARK",
        Dr = "LOW_LIGHT",
        Vr = "LANGUAGE",
        Br = "THEME",
        Hr = "DISTANCE_METRIC",
        Fr = "DEVELOPER_MODE",
        Ur = "INSTALLER_MODE",
        zr = "HIDE_BOATBUS",
        Gr = Lr.ENGLISH,
        Zr = Ar,
        qr = Rr.METERS,
        Wr = Ir.CELSIUS,
        $r = Mr.KM_H,
        Kr = Pr.DEGREE,
        Yr = function (e) {
          return window.localStorage.getItem(e);
        },
        Qr = function (e, t) {
          return window.localStorage.setItem(e, t);
        },
        Xr = function (e) {
          return function (t) {
            return function (n) {
              switch (n.type) {
                case yt:
                  e.dispatch(Zn(Yr("IP") || "192.168.1.91")),
                    e.dispatch(((i = Yr(Vr) || Gr), { type: wt, payload: i })),
                    e.dispatch(qn(Yr(Br) || Zr)),
                    e.dispatch(Yn(Yr(Hr) || qr)),
                    e.dispatch(
                      ((r = Yr("TEMPERATURE_METRIC") || Wr),
                      { type: _t, payload: r })
                    ),
                    e.dispatch(
                      (function (e) {
                        return { type: kt, payload: e };
                      })(Yr("SPEED_METRIC") || $r)
                    ),
                    e.dispatch(
                      (function (e) {
                        return { type: Nt, payload: e };
                      })(Yr("ANGLE_METRIC") || Kr)
                    ),
                    e.dispatch($n("true" === Yr(Fr) || false)),
                    e.dispatch(Wn("true" === Yr(zr) || false)),
                    e.dispatch(Kn("true" === Yr(Ur) || false));
                  break;
                case bt:
                  Qr("IP", n.payload);
                  break;
                case wt:
                  Qr(Vr, n.payload);
                  break;
                case Ct:
                  Qr(Br, n.payload);
                  break;
                case xt:
                  Qr(zr, n.payload);
                  break;
                case Et:
                  Qr(Fr, n.payload);
                  break;
                case St:
                  Qr(Ur, n.payload);
                  break;
                case jt:
                  Qr(Hr, n.payload);
              }
              var r, i;
              return t(n);
            };
          };
        },
        Jr = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case se:
              return e.mainSocket
                ? e
                : ne(ne({}, e), {}, { mainSocket: t.payload });
            case ce:
              return e.updateSocket
                ? e
                : ne(ne({}, e), {}, { updateSocket: t.payload });
            case be:
              return ne(
                ne({}, e),
                {},
                {
                  connection: ne(
                    ne({}, e.connection),
                    {},
                    { websocket: { info: mn } }
                  ),
                }
              );
            case we:
              return ne(
                ne({}, e),
                {},
                {
                  connection: ne(
                    ne({}, e.connection),
                    {},
                    { websocket: { info: hn } }
                  ),
                }
              );
            case Ce:
              return ne(
                ne({}, e),
                {},
                {
                  connection: ne(
                    ne({}, e.connection),
                    {},
                    { websocket: t.payload }
                  ),
                }
              );
            case xe:
              return ne(
                ne({}, e),
                {},
                {
                  connection: ne(
                    ne({}, e.connection),
                    {},
                    { websocket: { info: gn }, streams: { info: gn } }
                  ),
                  aliveState: !1,
                }
              );
            case Ee:
              return ne(
                ne({}, e),
                {},
                {
                  connection: ne(
                    ne({}, e.connection),
                    {},
                    { websocket: { info: yn }, streams: { info: yn } }
                  ),
                }
              );
            case Se:
              return ne(
                ne({}, e),
                {},
                {
                  connection: ne(
                    ne({}, e.connection),
                    {},
                    { websocket: { info: Cn } }
                  ),
                }
              );
            case Oe:
              return ne(
                ne({}, e),
                {},
                {
                  connection: ne(
                    ne({}, e.connection),
                    {},
                    { streams: { info: mn } }
                  ),
                }
              );
            case je:
              return ne(
                ne({}, e),
                {},
                {
                  streamSources: t.payload,
                  connection: ne(
                    ne({}, e.connection),
                    {},
                    { streams: { info: hn } }
                  ),
                }
              );
            case ke:
              return ne(
                ne({}, e),
                {},
                {
                  connection: ne(
                    ne({}, e.connection),
                    {},
                    { streams: t.payload }
                  ),
                }
              );
            case me:
              return ne(
                ne({}, e),
                {},
                {
                  connection: ne(
                    ne({}, e.connection),
                    {},
                    { update: { info: mn } }
                  ),
                }
              );
            case ve:
              return ne(
                ne({}, e),
                {},
                {
                  connection: ne(
                    ne({}, e.connection),
                    {},
                    { update: { info: hn } }
                  ),
                }
              );
            case ge:
              return ne(
                ne({}, e),
                {},
                {
                  connection: ne(
                    ne({}, e.connection),
                    {},
                    { update: { info: t.payload } }
                  ),
                }
              );
            case vt:
              return ne(ne({}, e), {}, { request: { loading: !0 } });
            case mt:
              return ne(
                ne({}, e),
                {},
                { request: { loading: !1, success: !0 } }
              );
            case ht:
              return ne(
                ne({}, e),
                {},
                { request: { loading: !1, success: !1, details: t.payload } }
              );
            case gt:
              return ne(ne({}, e), {}, { request: {} });
            case de:
              return ne(ne({}, e), {}, { aliveState: t.payload });
            case _e:
              var n = [];
              return (
                t.payload.map(function (t) {
                  return (
                    null === t.thermalImage64 &&
                      e.targets &&
                      e.targets[t.id] &&
                      null !== e.targets[t.id].thermalImage64 &&
                      (t.thermalImage64 = e.targets[t.id].thermalImage64),
                    null === t.colorImage64 &&
                      e.targets &&
                      e.targets[t.id] &&
                      null !== e.targets[t.id].colorImage64 &&
                      (t.colorImage64 = e.targets[t.id].colorImage64),
                    (n[t.id] = t)
                  );
                }),
                ne(ne({}, e), {}, { targets: n })
              );
            case Ne:
              return ne(ne({}, e), {}, { camera: t.payload });
            case Te:
              return ne(ne({}, e), {}, { distanceLines: t.payload });
            case Le:
              return ne(ne({}, e), {}, { alarmState: t.payload });
            case Re:
              return ne(ne({}, e), {}, { settings: t.payload });
            case Ie:
              return ne(ne({}, e), {}, { versions: t.payload });
            case Pe:
              return ne(
                ne({}, e),
                {},
                { state: ne(ne({}, e.state), t.payload) }
              );
            case De:
              return ne(ne({}, e), {}, { error: t.payload });
            case Ae:
              return ne(ne({}, e), {}, { boatbus: ne({}, t.payload) });
            case Me:
              return ne(
                ne({}, e),
                {},
                {
                  settings: ne(
                    ne({}, e.settings),
                    {},
                    ee({}, t.payload.name, t.payload.data)
                  ),
                }
              );
            case Be:
              return ne(
                ne({}, e),
                {},
                { update: ne(ne({}, e.update), {}, { ERROR: null }) }
              );
            case Ve:
              return ne(
                ne({}, e),
                {},
                {
                  update: ne(
                    ne({}, e.update),
                    {},
                    ee({}, t.payload.type, t.payload.data)
                  ),
                }
              );
            default:
              return e;
          }
        },
        ei = "DUAL_VIEW",
        ti = "BIG_VIEW",
        ni = "SMALL_VIEW",
        ri = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {
                    bigColorStream: !0,
                    smallMap: !0,
                    view: ei,
                    targetListImage: "thermal",
                  },
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case He:
              return ne(
                ne({}, e),
                {},
                { bigThermalStream: !0, bigColorStream: !1, bigMap: !1 }
              );
            case Fe:
              return ne(
                ne({}, e),
                {},
                { bigThermalStream: !1, bigColorStream: !0, bigMap: !1 }
              );
            case Ue:
              return ne(
                ne({}, e),
                {},
                { bigThermalStream: !1, bigColorStream: !1, bigMap: !0 }
              );
            case qe:
              return ne(ne({}, e), {}, { bigStreamZoom: t.payload });
            case We:
              return ne(ne({}, e), {}, { bigMapZoom: t.payload });
            case ze:
              return ne(
                ne({}, e),
                {},
                { smallThermalStream: !0, smallColorStream: !1, smallMap: !1 }
              );
            case Ge:
              return ne(
                ne({}, e),
                {},
                { smallThermalStream: !1, smallColorStream: !0, smallMap: !1 }
              );
            case Ze:
              return ne(
                ne({}, e),
                {},
                { smallThermalStream: !1, smallColorStream: !1, smallMap: !0 }
              );
            case $e:
              return ne(ne({}, e), {}, { smallStreamZoom: t.payload });
            case Ke:
              return ne(ne({}, e), {}, { smallMapZoom: t.payload });
            case ot:
              return ne(ne({}, e), {}, { alarm: t.payload });
            case lt:
              return ne(
                ne({}, e),
                {},
                { settings: !1, targetList: !0, controls: !1 }
              );
            case ut:
              return ne(ne({}, e), {}, { targetList: !1 });
            case st:
              return ne(
                ne({}, e),
                {},
                { settings: !0, targetList: !1, controls: !1 }
              );
            case ct:
              return ne(ne({}, e), {}, { settings: !1 });
            case ft:
              return ne(
                ne({}, e),
                {},
                { settings: !1, targetList: !1, controls: !0 }
              );
            case dt:
              return ne(ne({}, e), {}, { controls: !1 });
            case Ye:
              return ne(ne({}, e), {}, { view: t.payload });
            case Vt:
              return ne(ne({}, e), {}, { targetListImage: t.payload });
            default:
              return e;
          }
        },
        ii = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case bt:
              return ne(ne({}, e), {}, { IP: t.payload });
            case wt:
              return ne(ne({}, e), {}, { language: t.payload });
            case Ct:
              return ne(ne({}, e), {}, { theme: t.payload });
            case xt:
              return ne(ne({}, e), {}, { hideBoatbus: t.payload });
            case Et:
              return ne(ne({}, e), {}, { developerMode: t.payload });
            case St:
              return ne(ne({}, e), {}, { installerMode: t.payload });
            case Ot:
              return ne(ne({}, e), {}, { label: t.payload });
            case jt:
              return ne(ne({}, e), {}, { distanceMetric: t.payload });
            case kt:
              return ne(ne({}, e), {}, { speedMetric: t.payload });
            case _t:
              return ne(ne({}, e), {}, { temperatureMetric: t.payload });
            case Nt:
              return ne(ne({}, e), {}, { angleMetric: t.payload });
            case It:
              return ne(ne({}, e), {}, { selectedTarget: t.payload });
            case Dt:
              return ne(ne({}, e), {}, { maskSuccess: t.payload });
            default:
              return e;
          }
        },
        ai = (function e(t, n, r) {
          var i;
          if (
            ("function" === typeof n && "function" === typeof r) ||
            ("function" === typeof r && "function" === typeof arguments[3])
          )
            throw new Error(re(0));
          if (
            ("function" === typeof n &&
              "undefined" === typeof r &&
              ((r = n), (n = void 0)),
            "undefined" !== typeof r)
          ) {
            if ("function" !== typeof r) throw new Error(re(1));
            return r(e)(t, n);
          }
          if ("function" !== typeof t) throw new Error(re(2));
          var a = t,
            o = n,
            l = [],
            u = l,
            s = !1;
          function c() {
            u === l && (u = l.slice());
          }
          function f() {
            if (s) throw new Error(re(3));
            return o;
          }
          function d(e) {
            if ("function" !== typeof e) throw new Error(re(4));
            if (s) throw new Error(re(5));
            var t = !0;
            return (
              c(),
              u.push(e),
              function () {
                if (t) {
                  if (s) throw new Error(re(6));
                  (t = !1), c();
                  var n = u.indexOf(e);
                  u.splice(n, 1), (l = null);
                }
              }
            );
          }
          function p(e) {
            if (!le(e)) throw new Error(re(7));
            if ("undefined" === typeof e.type) throw new Error(re(8));
            if (s) throw new Error(re(9));
            try {
              (s = !0), (o = a(o, e));
            } finally {
              s = !1;
            }
            for (var t = (l = u), n = 0; n < t.length; n++) {
              (0, t[n])();
            }
            return e;
          }
          function h(e) {
            if ("function" !== typeof e) throw new Error(re(10));
            (a = e), p({ type: oe.REPLACE });
          }
          function m() {
            var e,
              t = d;
            return (
              ((e = {
                subscribe: function (e) {
                  if ("object" !== typeof e || null === e)
                    throw new Error(re(11));
                  function n() {
                    e.next && e.next(f());
                  }
                  return n(), { unsubscribe: t(n) };
                },
              })[ie] = function () {
                return this;
              }),
              e
            );
          }
          return (
            p({ type: oe.INIT }),
            ((i = {
              dispatch: p,
              subscribe: d,
              getState: f,
              replaceReducer: h,
            })[ie] = m),
            i
          );
        })(
          (function (e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
              var i = t[r];
              0, "function" === typeof e[i] && (n[i] = e[i]);
            }
            var a,
              o = Object.keys(n);
            try {
              !(function (e) {
                Object.keys(e).forEach(function (t) {
                  var n = e[t];
                  if ("undefined" === typeof n(void 0, { type: oe.INIT }))
                    throw new Error(re(12));
                  if (
                    "undefined" ===
                    typeof n(void 0, { type: oe.PROBE_UNKNOWN_ACTION() })
                  )
                    throw new Error(re(13));
                });
              })(n);
            } catch (l) {
              a = l;
            }
            return function (e, t) {
              if ((void 0 === e && (e = {}), a)) throw a;
              for (var r = !1, i = {}, l = 0; l < o.length; l++) {
                var u = o[l],
                  s = n[u],
                  c = e[u],
                  f = s(c, t);
                if ("undefined" === typeof f) {
                  t && t.type;
                  throw new Error(re(14));
                }
                (i[u] = f), (r = r || f !== c);
              }
              return (r = r || o.length !== Object.keys(e).length) ? i : e;
            };
          })({ socket: Jr, menu: ri, settings: ii }),
          {},
          (function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return function (e) {
              return function () {
                var n = e.apply(void 0, arguments),
                  r = function () {
                    throw new Error(re(15));
                  },
                  i = {
                    getState: n.getState,
                    dispatch: function () {
                      return r.apply(void 0, arguments);
                    },
                  },
                  a = t.map(function (e) {
                    return e(i);
                  });
                return (
                  (r = ue.apply(void 0, a)(n.dispatch)),
                  ne(ne({}, n), {}, { dispatch: r })
                );
              };
            };
          })(Or, Nr, Xr, Tr)
        ),
        oi = JSON.parse(
          '{"10":"Narrow","35":"Standard","75":"Wide","COLLISION AVOIDANCE":"COLLISION AVOIDANCE","SURVEILLANCE":"SURVEILLANCE","MANUAL":"MANUAL","ALARM":"ALARM","STREAM":"STREAM","IMU":"IMU","settings":"Settings","controls":"controls","detections":"detections","general":"Personalize","navigation":"Navigation","system":"System","boat bus":"Boat Bus","installation":"Setup","help":"Help","developer":"Developer","switch-theme":"theme","DARK":"Dark mode","LOW_LIGHT":"Low light mode","select-language":"Language selected","select-distance-metric":"Distance unit","select-temperature-metric":"Temperature","select-speed-metric":"Speed","display-boatbus":"Show Heading and Speed","DISPLAY":"Display","LANGUAGE":"Language","UNITS":"Units","NAUTICAL_MILES":"Only nautical miles","METERS":"Meters and nautical miles","FEET":"Feet and nautical miles","CELSIUS":"Celsius","FAHRENHEIT":"Fahrenheit","METERS_PER_SECOND":"Meters per second","KNOTS":"Knots","KILOMETERS_PER_HOUR":"Kilometers per hour","MODES":"Controls","collision-avoidance-mode-scanning-speed":"Collision avoidance panning speed","collision-avoidance-mode-limit":"Collision avoidance panning width","surveillance-mode-scanning-speed":"Surveillance panning speed","ENGLISH":"English","FRENCH":"French","0.015":"Slow","0.03":"Fast","collision-avoidance-mode":"Collision avoidance mode","collision-avoidance-lv1-distance-max":"warning alerts range (yellow)","collision-avoidance-lv3-distance-max":"danger alerts range (red)","surveillance-mode":"Surveillance mode","surveillance-lv1-distance-max":"warning alerts range (yellow)","surveillance-lv3-distance-max":"danger alerts range (red)","manual-mode":"Manual mode","manual-lv1-distance-max":"warning alerts range (yellow)","manual-lv3-distance-max":"danger alerts range (red)","hardware-unit":"Sensor unit","SOFTWARE":"Software","version":"Version: ","last updated":"Last updated:","SYSTEM UPDATE":"System Update","update description":"Update Sentry to the latest version by uploading an update file","select file":"Select file","upload file":"Upload file","update server unavailable":"System update unavailable","invalid update file":"Selected file is incompatible. Please try again.","auth":"Installer login","auth description":"Page dedicated to the installer to perform any setup changes needed to the system.","login as installer":"Login as installer","password":"Password","boatbus model":"NMEA GATEWAY MODEL","boatbus ip":"NMEA GATEWAY IP ADDRESS","boatbus port":"NMEA GATEWAY PORT","boatbus confirm":"Confirm NMEA Gateway changes","boatbus connection info":"Currently, Sentry only supports the ShipModul gateway model for the NMEA\'s setup. More gateway models will be available in the future.","boatbus setup":"NMEA SETUP","boatbus sources":"INSTRUMENTS SOURCE","boatbus-loading":"CONNECTING","boatbus-connected":"CONNECTED","boatbus-failed":"NOT CONNECTED","boatbus-info":"Connect Sentry to your NMEA to maximize the system\'s performance.","boatbus-info-temp":"Sentry only supports the ShipModul gateway model. More gateway models will be available in the future.","system update":"System Update","DIMENSIONS":"Dimensions","mounting-height-input":"Mounting height","mast-to-bow-input":"Sentry to bow distance","CAMERA MASK":"Camera mask","first camera mask step":"1. Run the diagnostic sequence to generate a camera mask file.","second camera mask step":"2. Upload the edited camera mask file to prevent detections originated from the boat obstructions.","run camera mask":"Run camera mask diagnostic","rerun camera mask":"Retry the diagnostic","camera mask running message":"Running camera mask diagnostic, please wait... ","min left":"min left","download mask":"Download mask file","invalid mask file":"Invalid mask file","upload mask success":"Upload successful, system will restart soon","mask upload failed":"Mask upload failed","camera-mask-visualization-mode":"Display camera mask in the image","contacts":"Contact us","phone":"Phone","email":"Email","whatsapp":"Whatsapp","whatsapp link":"Go to Whatsapp","DANGER":"DANGER","WARNING":"WARNING","OTHER":"OTHER","STOP TRACK":"Stop tracking","START TRACK":"Start tracking","SAILING_BOAT":"Sailing boat","SHIP":"Ship","HUMAN":"Human","BUOY":"Buoy","ANIMAL":"Animal","HAZARD":"Hazard","WEBSOCKET LOADING":"Connecting to the system...","CONNECTION BUSY title":"Welcome to Sentry","CONNECTION BUSY":"Connect by replacing one of the connections below","CONNECTION LOST TITLE":"Your connection was lost","CONNECTION LOST SUBTITLE":"Trying to reconnect...","LOADING STREAMS":"Loading streams...","CONNECTION FAILED":"Connection failed","CONNECTION FAILED text":"We are trying to reconnect to the system.","CONNECTION CLOSED TITLE":"Your connection has been replaced","CONNECTION CLOSED SUBTITLE":"Your connection has been replaced by another device. \\n Refresh this page to reestablish connection","WAITING FOR STREAMS":"Waiting for permissions...","WAITING CONNECTION":"Replacing another connection...","replace":"Replace","OK":"OK","refresh":"Refresh page to Reconnect","installer mode":"Service mode","dev mode":"Dev mode","update-failed-title":"Sentry OS failed to update","update-failed-text":"Make sure you\u2019re using the correct update package. Contact SEA.AI if this error continues to appear","update-restart-sentry":"Restart Sentry and try again","update-success-title":"Sentry OS has been updated successfully","update-success-text":"Please restart the system for the update to finish.","restart-sentry":"Restart Sentry","restarting system":"System is restarting...","updating-title":"Sentry OS is updating...","request-failed-title":"Something went wrong","request-failed-text":"Please refresh the page and try again.","request-failed-text2":"If the problem persists try restarting Sentry or contact Customer Service.","request-failed-ok":"OK","request-failed-refreshTryAgain":"Refresh and try again","NAUTICAL_MILES_abbreviation":"nm","METERS_abbreviation":"m","FEET_abbreviation":"ft","KELVIN_abbreviation":"K","PERCENT_abbreviation":"%","PASCAL_abbreviation":"Pa","METER_PER_SECOND_abbreviation":"m/s","RADIANT_abbreviation":"rad","DEGREE_abbreviation":"\xb0","latitude":"Latitude","longitude":"Longitude","heading":"Heading","roll":"Roll","pitch":"Pitch","yaw":"Yaw","sow":"SOW","cog":"COG","sog2":"SOG","sog":"SOG","temperature":"Temperature","humidity":"Humidity","atmosphericpressure":"Atmospheric Pressure","gnss":"GNSS","rate-of-turn":"Rate of turn","attitude":"Attitude","speed":"Speed","cogsog":"COGSOG","outside-environmental":"Outside environmental","no values":"No values available","no source":"No sources found","status-danger-title":"Danger Alert","status-danger-text":"Watch Out","status-warning-title":"Warning Alert","status-warning-text":"Check Course","status-error-title":"Critical Error","CSI_CAMERA_MALFUNCTION":"Camera Malfunction","CSI_CAMERA_MALFUNCTION-text":"Reboot the system","CSI_CAMERA_INTERFERENCE":"EM Interference","CSI_CAMERA_INTERFERENCE-text":"Contact SEA.AI support"}'
        ),
        li = JSON.parse(
          '{"hello world":"Bonjour!","settings":"Param\xe8tres","not working yet":"Ne fonctionne pas encore!","theme-light":"L\xe9ger","theme-dark":"Sombre","sentry":"Sentry OS","general":"General","boatbust":"Boat Bus Info","help":"Aider & Support","installation":"Installation","developer":"D\xe9veloppateur","about":"\xc0 propos","version":"Version:","last updated":"Derni\xe8re mise \xe0 jour:","system update":"Mise \xe0 jour du syst\xe8me","update sentry description":"Mettez \xe0 jour Sentry vers la version actuelle en t\xe9l\xe9chargeant un fichier de mise \xe0 jour","update system":"Syst\xe8me de mise \xe0 jour","display":"Affichage","full screen video":"Vid\xe9o Plein \xc9cran","mode panning":"Modo Panoramique","collision speed title":"Vitesse de panoramique d\'\xe9vitement de collision","collision range title":"Plage de panoramique d\'\xe9vitement de collision","surveillance speed title":"Vitesse de panoramique de surveillance","ca_slow":"Lent","ca_fast":"Rapide","narrow":"\xc9troit","wide":"Large","s_slow":"Lent","s_fast":"Rapide","dimensions":"Dimensions","mounting height":"Hauteur de Montage","mast to bow":"M\xe2t \xe0 Proue","camera mask":"Masque de Cam\xe9ra","first camera mask step":"1. Premi\xe8re, ex\xe9cutez la s\xe9quence de diagnostic pour g\xe9n\xe9rer un fichier de masque de cam\xe9ra.","second camera mask step":"2. T\xe9l\xe9chargez le fichier de masque de cam\xe9ra pour emp\xeacher les d\xe9tections provenant du bateau.","upload system":"Upload System","display camera mask":"Afficher le masque de la cam\xe9ra \xe0 l\'\xe9cran.","run camera mask":"Ex\xe9cuter le Diagnostic","please contact us":"Contactez nous","by phone":"Par Mobile:","by email":"Par Email:","auth":"Installer Login","login as tech":"Login comme Technicien","collision avoidance":"\xc9vitement de Collision","surveillance":"Surveillance","manual":"Manual","en":"Anglais","fr":"Fran\xe7ais","pt":"Portugais"}'
        ),
        ui = (ee((kr = {}), Lr.ENGLISH, oi), ee(kr, Lr.FRENCH, li), kr);
      function si(e) {
        var t = e.tid,
          n =
            h(function (e) {
              return e.settings.language;
            }) || Lr.ENGLISH;
        return ui[n][t] || t;
      }
      var ci,
        fi = function () {
          var e = h(function (e) {
            return e.socket.connection;
          });
          return (
            e &&
              e.websocket &&
              e.websocket === bn &&
              setTimeout(function () {
                window.location.reload(!0);
              }, 3e4),
            (0, m.jsx)(m.Fragment, {
              children: e
                ? e.websocket.info === mn
                  ? (0, m.jsxs)("div", {
                      className: "initialLoader",
                      children: [
                        (0, m.jsx)(S, {}),
                        (0, m.jsx)("div", {
                          className: "initialLoader-iconDiv",
                          children: (0, m.jsx)(T, {}),
                        }),
                        (0, m.jsx)("p", {
                          children: (0, m.jsx)(si, {
                            tid: "WEBSOCKET LOADING",
                          }),
                        }),
                      ],
                    })
                  : e.websocket.info === vn
                  ? (0, m.jsx)("div", {
                      className: "initialLoader",
                      children: (0, m.jsxs)("div", {
                        className: "initialLoader-connectionBusy",
                        children: [
                          (0, m.jsx)(U, {
                            className: "initialLoader-seaaiIcon",
                          }),
                          (0, m.jsxs)("div", {
                            className: "initialLoader-connectionBusy-header",
                            children: [
                              (0, m.jsx)("p", {
                                className: "initialLoader-connectionBusy-title",
                                children: (0, m.jsx)(si, {
                                  tid: "CONNECTION BUSY title",
                                }),
                              }),
                              (0, m.jsx)("p", {
                                className:
                                  "initialLoader-connectionBusy-subtitle",
                                children: (0, m.jsx)(si, {
                                  tid: "CONNECTION BUSY",
                                }),
                              }),
                            ],
                          }),
                          e.websocket.device_list.map(function (e, t) {
                            return (0, m.jsxs)(
                              "div",
                              {
                                className:
                                  "initialLoader-connectionBusy-device",
                                children: [
                                  (0, m.jsxs)("div", {
                                    children: [
                                      (0, m.jsx)("p", {
                                        children:
                                          "UNKNOWN" === e.user_agent
                                            ? "UNKNOWN DEVICE"
                                            : e.user_agent,
                                      }),
                                      (0, m.jsx)("p", {
                                        className:
                                          "initialLoader-connectionBusy-device-grey",
                                        children:
                                          "UNKNOWN" === e.user_name
                                            ? "PRIVATE"
                                            : e.user_name,
                                      }),
                                    ],
                                  }),
                                  (0, m.jsxs)("button", {
                                    className:
                                      "initialLoader-connectionBusy-device-button",
                                    onClick: function () {
                                      ai.dispatch(
                                        (function (e) {
                                          return { type: ye, payload: e };
                                        })(e.peer_id)
                                      );
                                    },
                                    children: [
                                      (0, m.jsx)(J, {}),
                                      (0, m.jsx)(si, { tid: "replace" }),
                                    ],
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                        ],
                      }),
                    })
                  : e.websocket.info === Cn
                  ? (0, m.jsxs)("div", {
                      className: "initialLoader",
                      children: [
                        (0, m.jsx)(S, {}),
                        (0, m.jsx)("div", {
                          className: "initialLoader-iconDiv",
                          children: (0, m.jsx)(T, {}),
                        }),
                        (0, m.jsx)("p", {
                          children: (0, m.jsx)(si, {
                            tid: "WAITING CONNECTION",
                          }),
                        }),
                      ],
                    })
                  : e.websocket.info === gn
                  ? (0, m.jsxs)("div", {
                      className: "initialLoader",
                      children: [
                        (0, m.jsx)(A, { className: "initialLoader-errorIcon" }),
                        (0, m.jsxs)("div", {
                          className: "initialLoader-connectionBusy-header",
                          children: [
                            (0, m.jsx)("p", {
                              className: "initialLoader-connectionBusy-title",
                              children: (0, m.jsx)(si, {
                                tid: "CONNECTION LOST TITLE",
                              }),
                            }),
                            (0, m.jsx)("p", {
                              className:
                                "initialLoader-connectionBusy-subtitle",
                              children: (0, m.jsx)(si, {
                                tid: "CONNECTION LOST SUBTITLE",
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : e.websocket.info === yn
                  ? (0, m.jsxs)("div", {
                      className: "initialLoader",
                      children: [
                        (0, m.jsx)(A, { className: "initialLoader-errorIcon" }),
                        (0, m.jsxs)("div", {
                          className: "initialLoader-connectionBusy-header",
                          children: [
                            (0, m.jsx)("p", {
                              className: "initialLoader-connectionBusy-title",
                              children: (0, m.jsx)(si, {
                                tid: "CONNECTION CLOSED TITLE",
                              }),
                            }),
                            (0, m.jsx)("p", {
                              className:
                                "initialLoader-connectionBusy-subtitle",
                              children: (0, m.jsx)(si, {
                                tid: "CONNECTION CLOSED SUBTITLE",
                              }),
                            }),
                          ],
                        }),
                        (0, m.jsxs)("button", {
                          className: "initialLoader-refreshButton",
                          onClick: function () {
                            window.location.reload();
                          },
                          children: [
                            (0, m.jsx)($, {}),
                            (0, m.jsx)(si, { tid: "refresh" }),
                          ],
                        }),
                      ],
                    })
                  : e.websocket.info === hn
                  ? e.streams
                    ? e.streams.info === mn
                      ? (0, m.jsxs)("div", {
                          className: "initialLoader",
                          children: [
                            (0, m.jsx)(S, {}),
                            (0, m.jsx)("div", {
                              className: "initialLoader-iconDiv",
                              children: (0, m.jsx)(T, {}),
                            }),
                            (0, m.jsx)("p", {
                              children: (0, m.jsx)(si, {
                                tid: "LOADING STREAMS",
                              }),
                            }),
                          ],
                        })
                      : e.streams.info === hn
                      ? (0, m.jsx)(m.Fragment, {})
                      : (0, m.jsxs)("div", {
                          className: "initialLoader",
                          children: [
                            (0, m.jsx)(A, {
                              className: "initialLoader-errorIcon",
                            }),
                            (0, m.jsx)("p", {
                              children: (0, m.jsx)(si, {
                                tid: "CONNECTION FAILED",
                              }),
                            }),
                          ],
                        })
                    : (0, m.jsxs)("div", {
                        className: "initialLoader",
                        children: [
                          (0, m.jsx)(S, {}),
                          (0, m.jsx)("div", {
                            className: "initialLoader-iconDiv",
                            children: (0, m.jsx)(T, {}),
                          }),
                          (0, m.jsx)("p", {
                            children: (0, m.jsx)(si, {
                              tid: "WAITING FOR STREAMS",
                            }),
                          }),
                        ],
                      })
                  : (0, m.jsxs)("div", {
                      className: "initialLoader",
                      children: [
                        (0, m.jsx)(A, { className: "initialLoader-errorIcon" }),
                        (0, m.jsx)("div", {
                          children: (0, m.jsx)("p", {
                            className: "initialLoader-connectionFailed-title",
                            children: (0, m.jsx)(si, {
                              tid: "CONNECTION FAILED",
                            }),
                          }),
                        }),
                        (0, m.jsx)("div", {
                          children: (0, m.jsx)("p", {
                            children: (0, m.jsx)(si, {
                              tid: "CONNECTION FAILED text",
                            }),
                          }),
                        }),
                        (0, m.jsxs)("button", {
                          className: "initialLoader-refreshButton",
                          onClick: function () {
                            window.location.reload();
                          },
                          children: [
                            (0, m.jsx)($, {}),
                            (0, m.jsx)(si, { tid: "refresh" }),
                          ],
                        }),
                      ],
                    })
                : (0, m.jsxs)("div", {
                    className: "initialLoader",
                    children: [
                      (0, m.jsx)(S, {}),
                      (0, m.jsx)("div", {
                        className: "initialLoader-iconDiv",
                        children: (0, m.jsx)(T, {}),
                      }),
                      (0, m.jsx)("p", {
                        children: (0, m.jsx)(si, { tid: "WEBSOCKET LOADING" }),
                      }),
                    ],
                  }),
            })
          );
        },
        di = ["title", "titleId"];
      function pi() {
        return (
          (pi =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          pi.apply(this, arguments)
        );
      }
      function hi(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function mi(t, n) {
        var r = t.title,
          i = t.titleId,
          a = hi(t, di);
        return e.createElement(
          "svg",
          pi(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          ci ||
            (ci = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12 5.89961C8.63106 5.89961 5.9 8.63067 5.9 11.9996C5.9 15.3685 8.63106 18.0996 12 18.0996C15.3689 18.0996 18.1 15.3685 18.1 11.9996C18.1 8.63067 15.3689 5.89961 12 5.89961ZM4.1 11.9996C4.1 7.63656 7.63695 4.09961 12 4.09961C16.363 4.09961 19.9 7.63656 19.9 11.9996C19.9 16.3627 16.363 19.8996 12 19.8996C7.63695 19.8996 4.1 16.3627 4.1 11.9996ZM14.7364 9.2636C15.0879 9.61508 15.0879 10.1849 14.7364 10.5364L13.2728 12L14.7364 13.4636C15.0879 13.8151 15.0879 14.3849 14.7364 14.7364C14.3849 15.0879 13.8151 15.0879 13.4636 14.7364L12 13.2728L10.5364 14.7364C10.1849 15.0879 9.61508 15.0879 9.2636 14.7364C8.91213 14.3849 8.91213 13.8151 9.2636 13.4636L10.7272 12L9.2636 10.5364C8.91213 10.1849 8.91213 9.61508 9.2636 9.2636C9.61508 8.91213 10.1849 8.91213 10.5364 9.2636L12 10.7272L13.4636 9.2636C13.8151 8.91213 14.3849 8.91213 14.7364 9.2636Z",
              fill: "white",
            }))
        );
      }
      var vi,
        gi = e.forwardRef(mi),
        yi = (n.p, ["title", "titleId"]);
      function bi() {
        return (
          (bi =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          bi.apply(this, arguments)
        );
      }
      function wi(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Ci(t, n) {
        var r = t.title,
          i = t.titleId,
          a = wi(t, yi);
        return e.createElement(
          "svg",
          bi(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          vi ||
            (vi = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10.8605 6.05605C12.1988 5.75367 13.599 5.89201 14.8523 6.45044L16.1937 8.51819L12.2624 12.4535L10.7203 10.9114C10.3688 10.5599 9.79896 10.5599 9.44749 10.9114C9.09602 11.2629 9.09602 11.8327 9.44749 12.1842L11.6263 14.363C11.7951 14.5318 12.0241 14.6267 12.2629 14.6266C12.5017 14.6265 12.7307 14.5316 12.8994 14.3627L17.1955 10.0623L18.6254 12.2665C18.6245 13.6383 18.1802 14.9732 17.3588 16.072C16.5373 17.1709 15.3825 17.9749 14.0668 18.3639C12.751 18.7529 11.3447 18.7062 10.0577 18.2307C8.77065 17.7552 7.6718 16.8764 6.92501 15.7254C6.17823 14.5744 5.82352 13.2128 5.9138 11.8437C6.00408 10.4746 6.5345 9.17134 7.42596 8.12833C8.31742 7.08533 9.52215 6.35843 10.8605 6.05605ZM17.1956 10.0622L18.6254 12.2659L18.6254 11.5983C18.6254 11.1012 19.0283 10.6983 19.5254 10.6983C20.0225 10.6983 20.4254 11.1012 20.4254 11.5983V12.2665V12.267C20.4244 14.0272 19.8544 15.7399 18.8005 17.1498C17.7465 18.5596 16.2651 19.5909 14.5771 20.09C12.8891 20.5891 11.085 20.5292 9.4339 19.9192C7.78275 19.3092 6.37303 18.1817 5.41498 16.7051C4.45693 15.2284 4.00188 13.4816 4.1177 11.7252C4.23352 9.96882 4.914 8.29691 6.05765 6.95884C7.2013 5.62076 8.74685 4.68823 10.4638 4.30031C12.1807 3.91238 13.9771 4.08986 15.5849 4.80627C16.0389 5.00858 16.243 5.54063 16.0407 5.99466C15.8384 6.44868 15.3063 6.65275 14.8523 6.45044L16.1938 8.51811L18.8887 5.82056C19.24 5.46892 19.8098 5.46863 20.1615 5.81993C20.5131 6.17122 20.5134 6.74107 20.1621 7.09272L17.1956 10.0622Z",
              fill: "white",
            }))
        );
      }
      var xi = e.forwardRef(Ci);
      n.p;
      var Ei = function () {
        var e = h(function (e) {
          return e.socket.update;
        });
        return (0, m.jsx)(m.Fragment, {
          children: e
            ? e.ERROR
              ? (0, m.jsxs)("div", {
                  className: "updatePopup",
                  children: [
                    (0, m.jsx)(gi, { className: "initialLoader-errorIcon" }),
                    (0, m.jsxs)("div", {
                      className: "updatePopup-header",
                      children: [
                        (0, m.jsx)("p", {
                          className: "updatePopup-title",
                          children: (0, m.jsx)(si, {
                            tid: "update-failed-title",
                          }),
                        }),
                        (0, m.jsx)("p", {
                          className: "updatePopup-subtitle",
                          children: (0, m.jsx)(si, {
                            tid: "update-failed-text",
                          }),
                        }),
                      ],
                    }),
                    (0, m.jsx)("button", {
                      className: "updatePopup-btn",
                      onClick: function () {
                        ai.dispatch(Xn());
                      },
                      children: (0, m.jsx)(si, {
                        tid: "update-restart-sentry",
                      }),
                    }),
                  ],
                })
              : "manage_update_finished" === e.INFO
              ? (0, m.jsxs)("div", {
                  className: "updatePopup",
                  children: [
                    (0, m.jsx)(xi, { className: "updatePopup-successIcon" }),
                    (0, m.jsxs)("div", {
                      className: "updatePopup-header",
                      children: [
                        (0, m.jsx)("p", {
                          className: "updatePopup-title",
                          children: (0, m.jsx)(si, {
                            tid: "update-success-title",
                          }),
                        }),
                        (0, m.jsx)("p", {
                          className: "updatePopup-subtitle",
                          children: (0, m.jsx)(si, {
                            tid: "update-success-text",
                          }),
                        }),
                      ],
                    }),
                    (0, m.jsx)("button", {
                      className: "updatePopup-btn",
                      onClick: function () {
                        ai.dispatch(Xn());
                      },
                      children: (0, m.jsx)(si, { tid: "restart-sentry" }),
                    }),
                  ],
                })
              : "update_finished" === e.INFO
              ? (0, m.jsxs)("div", {
                  className: "updatePopup",
                  children: [
                    (0, m.jsx)(S, {}),
                    (0, m.jsx)("div", {
                      className: "updatePopup-iconDiv",
                      children: (0, m.jsx)(T, {}),
                    }),
                    (0, m.jsx)("p", {
                      className: "updatePopup-subtitle",
                      children: (0, m.jsx)(si, { tid: "restarting system" }),
                    }),
                  ],
                })
              : e.PROGRESS > 0
              ? (0, m.jsxs)("div", {
                  className: "updatePopup",
                  children: [
                    (0, m.jsx)("div", {
                      className: "updatePopup-progressBar",
                      children: (0, m.jsx)("div", {
                        className: "updatePopup-progressBar-progress",
                        children: (0, m.jsx)("span", {
                          style: { width: e.PROGRESS + "%" },
                        }),
                      }),
                    }),
                    (0, m.jsx)("p", {
                      className: "updatePopup-title",
                      children: (0, m.jsx)(si, { tid: "updating-title" }),
                    }),
                    (0, m.jsx)("p", {
                      className: "updatePopup-subtitle",
                      children:
                        e.INFO.replace(/_/g, " ").charAt(0).toUpperCase() +
                        e.INFO.replace(/_/g, " ").slice(1),
                    }),
                  ],
                })
              : (0, m.jsx)(m.Fragment, {})
            : (0, m.jsx)(m.Fragment, {}),
        });
      };
      var Si = function () {
        var e = h(function (e) {
          return e.socket.request;
        });
        return (0, m.jsx)(m.Fragment, {
          children:
            e &&
            e.loading &&
            (0, m.jsx)("div", {
              className: "requestLoader",
              children: (0, m.jsx)(S, {}),
            }),
        });
      };
      var Oi,
        ji,
        ki,
        _i = function () {
          var e = h(function (e) {
            return e.socket.request;
          });
          return (0, m.jsx)(m.Fragment, {
            children:
              e &&
              !1 === e.success &&
              (0, m.jsx)("div", {
                className: "requestFailed",
                children: (0, m.jsxs)("div", {
                  className: "requestFailed-popup",
                  children: [
                    (0, m.jsx)(A, {}),
                    (0, m.jsxs)("div", {
                      className: "requestFailed-popup-wrapper",
                      children: [
                        (0, m.jsx)("p", {
                          className: "requestFailed-popup-title",
                          children: (0, m.jsx)(si, {
                            tid: "request-failed-title",
                          }),
                        }),
                        (0, m.jsxs)("div", {
                          className: "requestFailed-popup-content",
                          children: [
                            (0, m.jsx)("p", {
                              className: "requestFailed-popup-text",
                              children: (0, m.jsx)(si, {
                                tid: "request-failed-text",
                              }),
                            }),
                            (0, m.jsx)("p", {
                              className: "requestFailed-popup-text",
                              children: (0, m.jsx)(si, {
                                tid: "request-failed-text2",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, m.jsx)("span", {
                      onClick: function () {
                        return ai.dispatch({ type: gt });
                      },
                      children: (0, m.jsx)(si, {
                        tid: "request-failed-refreshTryAgain",
                      }),
                    }),
                  ],
                }),
              }),
          });
        };
      function Ni(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Ti(e, t) {
        if (e) {
          if ("string" === typeof e) return Ni(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Ni(e, t)
              : void 0
          );
        }
      }
      function Li(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                i,
                a = [],
                o = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (a.push(r.value), !t || a.length !== t);
                  o = !0
                );
              } catch (u) {
                (l = !0), (i = u);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (l) throw i;
                }
              }
              return a;
            }
          })(e, t) ||
          Ti(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var Ri = ["title", "titleId"];
      function Ii() {
        return (
          (Ii =
            Object.assign ||
            function (e) {
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
      function Mi(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Pi(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Mi(t, Ri);
        return e.createElement(
          "svg",
          Ii(
            {
              width: 30,
              height: 62,
              viewBox: "0 0 30 62",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Oi ||
            (Oi = e.createElement("path", {
              d: "M9.61675 50.2597C9.61675 50.2597 7 47.2254 7 34.9943C7 22.7632 13.8338 7 15.0833 7L15.1225 7.00471C16.4688 7.31491 23.1667 22.8855 23.1667 34.9943C23.1667 47.2254 20.5499 50.2597 20.5499 50.2597C20.5499 50.2597 19.7283 51.4583 15.0833 51.4583C10.4384 51.4583 9.61675 50.2597 9.61675 50.2597Z",
              fill: "white",
            })),
          ji ||
            (ji = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.17023 37.3715C9.96074 35.9445 19.8637 35.9445 21.0279 37.3715C21.5626 38.027 20.1619 48.8137 19.2108 49.7471C17.3085 50.6804 12.5527 50.6804 10.6505 49.7471C9.69931 48.8137 8.61981 38.365 9.17023 37.3715Z",
              fill: "url(#paint0_linear_3852_10900)",
            })),
          ki ||
            (ki = e.createElement(
              "defs",
              null,
              e.createElement(
                "filter",
                {
                  id: "filter0_f_3852_10900",
                  x: 0.75,
                  y: 0.75,
                  width: 28.6667,
                  height: 61,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB",
                },
                e.createElement("feFlood", {
                  floodOpacity: 0,
                  result: "BackgroundImageFix",
                }),
                e.createElement("feBlend", {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape",
                }),
                e.createElement("feGaussianBlur", {
                  stdDeviation: 3.125,
                  result: "effect1_foregroundBlur_3852_10900",
                })
              ),
              e.createElement(
                "linearGradient",
                {
                  id: "paint0_linear_3852_10900",
                  x1: 14.9306,
                  y1: 36.2134,
                  x2: 14.9306,
                  y2: 50.6804,
                  gradientUnits: "userSpaceOnUse",
                },
                e.createElement("stop", { stopOpacity: 0.14 }),
                e.createElement("stop", { offset: 1, stopOpacity: 0.03 })
              )
            ))
        );
      }
      var Ai,
        Di,
        Vi,
        Bi = e.forwardRef(Pi),
        Hi = (n.p, 100),
        Fi = function (e, t) {
          return e && t
            ? Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2))
            : e
            ? Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2))
            : void 0;
        },
        Ui = function (e, t) {
          return e && t
            ? Math.atan2(-t, e)
            : e
            ? 0 === e[1] && 0 === e[0]
              ? 0
              : Math.atan2(-e[1], e[0])
            : void 0;
        },
        zi = 0.12,
        Gi = function (e, t) {
          return Math.min((0.73 * e) / t, 0.85);
        },
        Zi = function (e, t, n, r) {
          var i = Gi(t, n[n.length - 1]),
            a = Math.min(1.5 * e.center.x, e.center.y),
            o = Gi(n[n.length - 1] - n[0], n[n.length - 1]);
          return t < n[0]
            ? a *
                (Gi(n[0], n[n.length - 1]) * (t / n[0]) +
                  (o * r * (t / n[0])) / Hi +
                  zi)
            : a * (i + (o * r) / Hi + zi);
        },
        qi = function (e) {
          return 0 === e ? 1 : Math.floor(e / 25) + 1;
        },
        Wi = ["title", "titleId"];
      function $i() {
        return (
          ($i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          $i.apply(this, arguments)
        );
      }
      function Ki(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Yi(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Ki(t, Wi);
        return e.createElement(
          "svg",
          $i(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Ai ||
            (Ai = e.createElement("path", {
              d: "M12.1337 4.13373L5.59344 15.4101C5.55343 15.4791 5.6063 15.5649 5.68591 15.5601L13.8904 15.0698C13.9492 15.0663 13.9922 15.013 13.9833 14.9548L12.3191 4.16866C12.3047 4.07543 12.1811 4.05213 12.1337 4.13373Z",
              fill: "white",
            })),
          Di ||
            (Di = e.createElement("path", {
              d: "M19.6199 15.9497L4.60838 17.0128C4.57324 17.0153 4.54201 17.0361 4.52615 17.0675L4.07313 17.9659C4.0396 18.0324 4.08794 18.1109 4.16242 18.1109L16.6596 18.1108C16.6792 18.1108 16.6984 18.1051 16.7147 18.0943L19.6822 16.1329C19.768 16.0762 19.7225 15.9424 19.6199 15.9497Z",
              fill: "white",
            })),
          Vi ||
            (Vi = e.createElement("path", {
              d: "M14.2306 9.23157L18.9942 14.6749C19.0491 14.7375 19.0078 14.8358 18.9247 14.8406L15.0898 15.0582C15.0387 15.0611 14.9937 15.025 14.9854 14.9745L14.0567 9.31362C14.0404 9.21436 14.1644 9.15588 14.2306 9.23157Z",
              fill: "white",
            }))
        );
      }
      var Qi,
        Xi = e.forwardRef(Yi),
        Ji = (n.p, ["title", "titleId"]);
      function ea() {
        return (
          (ea =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          ea.apply(this, arguments)
        );
      }
      function ta(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function na(t, n) {
        var r = t.title,
          i = t.titleId,
          a = ta(t, Ji);
        return e.createElement(
          "svg",
          ea(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Qi ||
            (Qi = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9 10L9.5 8H11L14 9.5L9 10ZM2 11.9999L23.5 9.49992L20.5 13.4999L9.5 14.4999H4L2 11.9999Z",
              fill: "white",
            }))
        );
      }
      var ra,
        ia = e.forwardRef(na),
        aa = (n.p, ["title", "titleId"]);
      function oa() {
        return (
          (oa =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          oa.apply(this, arguments)
        );
      }
      function la(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function ua(t, n) {
        var r = t.title,
          i = t.titleId,
          a = la(t, aa);
        return e.createElement(
          "svg",
          oa(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          ra ||
            (ra = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M2.99988 18.5002L12 4L21.0001 18.5002H2.99988ZM13 8.00018H11L11.5 14.0003H12.5L13 8.00018ZM12 15.0002L13 16.0002L12 17.0003L11 16.0002L12 15.0002Z",
              fill: "white",
            }))
        );
      }
      var sa,
        ca = e.forwardRef(ua),
        fa = (n.p, ["title", "titleId"]);
      function da() {
        return (
          (da =
            Object.assign ||
            function (e) {
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
      function pa(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function ha(t, n) {
        var r = t.title,
          i = t.titleId,
          a = pa(t, fa);
        return e.createElement(
          "svg",
          da(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          sa ||
            (sa = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15 7L14 8V12V14V23H13L12 14.2L11 23H10V14V12V11L9 15H8L9 9L10 8L14 5L15 2H16L15 7ZM10 6V4.5L11.5 4L12 6L10.5 7L10 6Z",
              fill: "white",
            }))
        );
      }
      var ma,
        va = e.forwardRef(ha),
        ga = (n.p, ["title", "titleId"]);
      function ya() {
        return (
          (ya =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          ya.apply(this, arguments)
        );
      }
      function ba(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function wa(t, n) {
        var r = t.title,
          i = t.titleId,
          a = ba(t, ga);
        return e.createElement(
          "svg",
          ya(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          ma ||
            (ma = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11 4H11.5L11.5485 5.01762L17 7L11.734 8.91489L11.9769 14.0154L12 14L18 18L12 22L6 18L11.4923 14.3385L11 4Z",
              fill: "white",
            }))
        );
      }
      var Ca = e.forwardRef(wa);
      n.p;
      function xa(e, t, n, r) {
        return e.includes("SAILING_BOAT")
          ? (0, m.jsx)(Xi, { width: t, height: t, x: n, y: r })
          : e.includes("MOTORBOAT") ||
            e.includes("BOAT") ||
            e.includes("LEISURE_VEHICLE") ||
            e.includes("SHIP")
          ? (0, m.jsx)(ia, { width: t, height: t, x: n, y: r })
          : e.includes("HUMAN")
          ? (0, m.jsx)(va, { width: t, height: t, x: n, y: r })
          : e.includes("BUOY")
          ? (0, m.jsx)(Ca, { width: t, height: t, x: n, y: r })
          : (0, m.jsx)(ca, { width: t, height: t, x: n, y: r });
      }
      var Ea = function (e) {
          var t = e.center,
            n = e.name,
            r = e.size;
          return xa(n, r, t.width - r / 2, t.height - r / 2);
        },
        Sa = function (e) {
          return (e * Math.PI) / 180;
        },
        Oa = function (e) {
          return (180 * e) / Math.PI;
        };
      var ja = function (e) {
        var t = e.target,
          n = e.angle,
          r = e.color,
          i = e.map,
          a = e.opacity,
          o = e.menuViewSizes,
          l = e.collisionAvoidanceOffset,
          u = 0,
          s = 0,
          c = Math.atan(i.height / i.width),
          f = Math.tan(Math.PI / 2 - n);
        return (
          n <= -Math.PI / 2 - c
            ? ((u = -i.height / (2 * f)),
              (s = -i.height / 2 + 24),
              i.center.x + u < o.bottomLeft.width && (s += o.bottomLeft.height))
            : n <= -Math.PI / 2 + c
            ? ((u = -i.width / 2 + 24),
              (s = (-i.width * f) / 2) > 0 &&
              i.center.y - s - l < o.topLeft.height
                ? (u += o.topLeft.width)
                : s < 0 &&
                  i.center.y + s > i.height - o.bottomLeft.height &&
                  (u += o.bottomLeft.height))
            : n <= Math.PI / 2 - c
            ? ((s = i.height / 2 - 24),
              (u = i.height / (2 * f)),
              i.center.x + u < o.topLeft.width
                ? (s -= o.topLeft.height)
                : i.center.x + u > i.width - o.topRight.width &&
                  (s -= o.topRight.height))
            : n < Math.PI / 2 + c
            ? ((u = i.width / 2 - 24),
              (s = (i.width * f) / 2) > 0 &&
              i.center.y - s - l < o.topRight.height
                ? (u -= o.topRight.width)
                : s < 0 &&
                  i.center.y - s > i.height - o.bottomRight.height &&
                  (u -= o.bottomRight.width))
            : ((u = -i.height / (2 * f)),
              (s = -i.height / 2 + 24),
              i.center.x + u > i.width - o.bottomRight.width &&
                (s += o.bottomRight.height)),
          (0, m.jsxs)("g", {
            className: "mapTargetFar",
            children: [
              (0, m.jsx)("circle", {
                cx: i.center.x + u,
                cy: i.center.y - s - l,
                r: 12,
                fill: r,
                opacity: a,
              }),
              (0, m.jsx)(Ea, {
                center: { width: i.center.x + u, height: i.center.y - s - l },
                name: t.name,
                size: 20,
              }),
              (0, m.jsx)("polyline", {
                points: "0,20 8,14 -8,14",
                transform:
                  "translate(" +
                  [i.center.x + u, i.center.y - s - l] +
                  ")rotate(" +
                  Oa(Math.PI + n) +
                  ")",
                fill: r,
                opacity: a,
              }),
            ],
          })
        );
      };
      var ka = function (e) {
        var t = e.id,
          n = e.center,
          r = e.radius,
          i = e.distance,
          a = e.angle,
          o = e.color,
          l = e.threat,
          u = e.opacity,
          s = e.animate,
          c = void 0 === s || s;
        return (0, m.jsx)("circle", {
          id: t,
          cx: n.width,
          cy: n.height,
          r: r,
          transform: "translate(" + [i.x, i.y] + ")rotate(" + a + ")",
          fill: o,
          fillOpacity: u,
          children:
            c &&
            (0, m.jsxs)(m.Fragment, {
              children: [
                (0, m.jsx)("animate", {
                  attributeName: "opacity",
                  repeatCount: "indefinite",
                  dur: l === Yt ? "1.0s" : o === Qt ? "2.0s" : "3.0s",
                  values: "1;0",
                  keyTimes: "0;1",
                  keySplines: "0.3 0 0.3 0",
                  calcMode: "spline",
                  begin: "0s",
                }),
                (0, m.jsx)("animate", {
                  attributeName: "r",
                  values: r + ";" + 2 * r,
                  begin: "0s",
                  dur: l === Yt ? "1.0s" : o === Qt ? "2.0s" : "3.0s",
                  repeatCount: "indefinite",
                  calcMode: "spline",
                  keySplines: "0 0.33 0.66 1",
                }),
              ],
            }),
        });
      };
      var _a = function (e) {
        var t = e.pinCenter,
          n = e.mapDistance,
          r = e.angle,
          i = e.threat,
          a = e.color,
          o = e.id,
          l = Oa(r) + 180;
        return (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsx)(ka, {
              id: o + "_main_circle",
              center: t,
              radius: 16,
              distance: n,
              angle: l,
              color: a,
              threat: i,
              opacity: 1,
              animate: !1,
            }),
            (0, m.jsx)(ka, {
              id: o + "_circle1",
              center: t,
              radius: 16,
              distance: n,
              angle: l,
              color: a,
              threat: i,
              opacity: 0.6,
            }),
            (0, m.jsx)(ka, {
              id: o + "_circle2",
              center: t,
              radius: 24,
              distance: n,
              angle: l,
              color: a,
              threat: i,
              opacity: 0.2,
            }),
          ],
        });
      };
      var Na = function (e) {
        var t = e.target,
          n = e.angle,
          r = e.center,
          i = e.mapDistance,
          a = e.pos,
          o = e.color,
          l = e.threat,
          u = e.handleClick,
          s = h(function (e) {
            return e.settings.selectedTarget;
          });
        return (0, m.jsxs)("g", {
          className: "mapTargetClose",
          onClick: function () {
            u(t.id);
          },
          children: [
            (0, m.jsx)(_a, {
              pinCenter: { width: 0, height: r },
              mapDistance: i,
              angle: n,
              color: o,
              threat: l,
              id: t.name,
            }),
            (0, m.jsx)(Ea, {
              center: { width: a.x, height: a.y },
              name: t.name,
              size: 24,
            }),
            s === t.id &&
              (0, m.jsx)("circle", { cx: a.x, cy: a.y - 24, r: 3, fill: o }),
          ],
        });
      };
      var Ta = function (e) {
          var t = e.map,
            n = e.target,
            r = e.zoom,
            i = e.menuViewSizes,
            a = e.collisionAvoidanceOffset,
            o = h(function (e) {
              return e.socket.settings;
            }),
            l = h(function (e) {
              return e.settings.selectedTarget;
            }),
            u = o ? o["map-distance-ranges"].value : [],
            s = Fi(n.pos),
            c = Ui(n.pos),
            f = Zi(t, s, u, r),
            d = (function (e, t, n) {
              var r = t[t.length - 1] - ((t[t.length - 1] - t[0]) * n) / Hi;
              return Zi(e, r, t, n);
            })(t, u, r),
            p = tn(o, n.alarmCertainty),
            v = en(o, n.alarmCertainty);
          return (0, m.jsx)(m.Fragment, {
            children:
              f <= d
                ? (0, m.jsx)(Na, {
                    target: n,
                    angle: c,
                    center: f,
                    mapDistance: t.center,
                    pos: {
                      x: t.center.x + f * Math.sin(c),
                      y: t.center.y - f * Math.cos(c),
                    },
                    color: p,
                    threat: v,
                    handleClick: function (e) {
                      l === e
                        ? ai.dispatch(Qn(null))
                        : (ai.dispatch(Qn(e)), ai.dispatch(Rn()));
                    },
                  })
                : (0, m.jsx)(ja, {
                    target: n,
                    angle: c,
                    map: t,
                    color: p,
                    menuViewSizes: i,
                    collisionAvoidanceOffset: a,
                  }),
          });
        },
        La = function (e, t, n) {
          return (t === Mr.KM_H && n === Mr.KM_H) ||
            (t === Mr.M_S && n === Mr.M_S) ||
            (t === Mr.KNOTS && n === Mr.KNOTS)
            ? e
            : t === Mr.KM_H && n === Mr.M_S
            ? (function (e) {
                return e / 3.6;
              })(e)
            : t === Mr.M_S && n === Mr.KM_H
            ? (function (e) {
                return 3.6 * e;
              })(e)
            : t === Mr.M_S && n === Mr.KNOTS
            ? (function (e) {
                return 1.9438452 * e;
              })(e)
            : t === Mr.KNOTS && n === Mr.M_S
            ? (function (e) {
                return e / 1.9438452;
              })(e)
            : t === Mr.KNOTS && n === Mr.KM_H
            ? (function (e) {
                return e / 0.539956803;
              })(e)
            : t === Mr.KM_H && n === Mr.KNOTS
            ? (function (e) {
                return 0.539956803 * e;
              })(e)
            : null;
        },
        Ra = function (e, t, n) {
          return (t === Pr.DEGREE && n === Pr.DEGREE) ||
            (t === Pr.RAD && n === Pr.RAD)
            ? e
            : t === Pr.DEGREE && n === Pr.RAD
            ? Sa(e)
            : t === Pr.RAD && n === Pr.DEGREE
            ? Oa(e)
            : void 0;
        };
      var Ia = function (e) {
        var t = e.value,
          n = e.unit,
          r = e.outputUnit,
          i = void 0 === r ? null : r,
          a = h(function (e) {
            return e.settings.distanceMetric;
          }),
          o = h(function (e) {
            return e.settings.temperatureMetric;
          }),
          l = h(function (e) {
            return e.settings.speedMetric;
          }),
          u = h(function (e) {
            return e.settings.angleMetric;
          }),
          s = (function (e) {
            return e === Rr.METERS || e === Rr.NM || e === Rr.FEET
              ? Rr
              : e === Ir.CELSIUS || e === Ir.FAHRENHEIT
              ? Ir
              : e === Mr.KM_H || e === Mr.KNOTS || e === Mr.M_S
              ? Mr
              : e === Pr.DEGREE || e === Pr.RAD
              ? Pr
              : void 0;
          })(n),
          c = { value: null, unit: null };
        if (s === Rr)
          null === i && (c.unit = n === Rr.METERS && t >= 1852 ? Rr.NM : a),
            (c.value = (function (e, t, n) {
              return t === Rr.METERS && n === Rr.METERS
                ? e
                : t === Rr.METERS && n === Rr.NM
                ? (function (e) {
                    return e / 1852;
                  })(e)
                : t === Rr.METERS && n === Rr.FEET
                ? (function (e) {
                    return 3.2804 * e;
                  })(e)
                : t === Rr.NM && n === Rr.METERS
                ? null
                : t === Rr.NM && n === Rr.NM
                ? e
                : (t === Rr.NM && n === Rr.FEET) ||
                  (t === Rr.FEET && n === Rr.METERS) ||
                  (t === Rr.FEET && n === Rr.NM)
                ? null
                : t === Rr.FEET && n === Rr.FEET
                ? e
                : null;
            })(t, n, c.unit));
        else if (s === Ir)
          null === i && (c.unit = o),
            (c.value = (function (e, t, n) {
              return t === Ir.CELSIUS && n === Ir.CELSIUS
                ? e
                : t === Ir.CELSIUS && n === Ir.FAHRENHEIT
                ? (function (e) {
                    return (9 * e) / 5 + 32;
                  })(e)
                : void 0;
            })(t, n, c.unit));
        else if (s === Mr)
          null === i && (c.unit = l), (c.value = La(t, n, c.unit));
        else {
          if (s !== Pr) return "ERROR DURING CONVERSION";
          null === i && (c.unit = u), (c.value = Ra(t, n, c.unit));
        }
        return (
          c.unit === Rr.NM
            ? (c.value = Math.round(10 * c.value) / 10)
            : (c.unit === Rr.METERS || c.unit === Rr.FEET) &&
              (c.value = Math.round(c.value)),
          (0, m.jsxs)(m.Fragment, {
            children: [
              c.value,
              " ",
              (0, m.jsx)(si, { tid: c.unit + "_abbreviation" }),
            ],
          })
        );
      };
      var Ma = function (e) {
        var t = e.radius,
          n = e.distance,
          r = e.center;
        return (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsx)("circle", {
              cx: r.x,
              cy: r.y,
              r: t,
              stroke: Jt("--overLight2"),
              strokeDasharray: "1, 5",
              fillOpacity: 0,
            }),
            (0, m.jsx)("rect", {
              x: r.x - 20,
              y: r.y - t - 10,
              width: 40,
              height: 20,
              rx: 12,
              fill: Jt("--surface1"),
            }),
            (0, m.jsx)("text", {
              x: r.x,
              y: r.y - t + 6 - 1,
              fontSize: 12,
              fill: Jt("--onSurface1"),
              fontFamily: "Saira-Bold",
              textAnchor: "middle",
              children: (0, m.jsx)(Ia, { value: n, unit: Rr.METERS }),
            }),
          ],
        });
      };
      function Pa() {}
      function Aa(e) {
        return null == e
          ? Pa
          : function () {
              return this.querySelector(e);
            };
      }
      function Da(e) {
        return null == e ? [] : Array.isArray(e) ? e : Array.from(e);
      }
      function Va() {
        return [];
      }
      function Ba(e) {
        return null == e
          ? Va
          : function () {
              return this.querySelectorAll(e);
            };
      }
      function Ha(e) {
        return function () {
          return this.matches(e);
        };
      }
      function Fa(e) {
        return function (t) {
          return t.matches(e);
        };
      }
      var Ua = Array.prototype.find;
      function za() {
        return this.firstElementChild;
      }
      var Ga = Array.prototype.filter;
      function Za() {
        return Array.from(this.children);
      }
      function qa(e) {
        return new Array(e.length);
      }
      function Wa(e, t) {
        (this.ownerDocument = e.ownerDocument),
          (this.namespaceURI = e.namespaceURI),
          (this._next = null),
          (this._parent = e),
          (this.__data__ = t);
      }
      function $a(e) {
        return function () {
          return e;
        };
      }
      function Ka(e, t, n, r, i, a) {
        for (var o, l = 0, u = t.length, s = a.length; l < s; ++l)
          (o = t[l])
            ? ((o.__data__ = a[l]), (r[l] = o))
            : (n[l] = new Wa(e, a[l]));
        for (; l < u; ++l) (o = t[l]) && (i[l] = o);
      }
      function Ya(e, t, n, r, i, a, o) {
        var l,
          u,
          s,
          c = new Map(),
          f = t.length,
          d = a.length,
          p = new Array(f);
        for (l = 0; l < f; ++l)
          (u = t[l]) &&
            ((p[l] = s = o.call(u, u.__data__, l, t) + ""),
            c.has(s) ? (i[l] = u) : c.set(s, u));
        for (l = 0; l < d; ++l)
          (s = o.call(e, a[l], l, a) + ""),
            (u = c.get(s))
              ? ((r[l] = u), (u.__data__ = a[l]), c.delete(s))
              : (n[l] = new Wa(e, a[l]));
        for (l = 0; l < f; ++l) (u = t[l]) && c.get(p[l]) === u && (i[l] = u);
      }
      function Qa(e) {
        return e.__data__;
      }
      function Xa(e) {
        return "object" === typeof e && "length" in e ? e : Array.from(e);
      }
      function Ja(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
      }
      Wa.prototype = {
        constructor: Wa,
        appendChild: function (e) {
          return this._parent.insertBefore(e, this._next);
        },
        insertBefore: function (e, t) {
          return this._parent.insertBefore(e, t);
        },
        querySelector: function (e) {
          return this._parent.querySelector(e);
        },
        querySelectorAll: function (e) {
          return this._parent.querySelectorAll(e);
        },
      };
      var eo = "http://www.w3.org/1999/xhtml",
        to = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: eo,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        };
      function no(e) {
        var t = (e += ""),
          n = t.indexOf(":");
        return (
          n >= 0 && "xmlns" !== (t = e.slice(0, n)) && (e = e.slice(n + 1)),
          to.hasOwnProperty(t) ? { space: to[t], local: e } : e
        );
      }
      function ro(e) {
        return function () {
          this.removeAttribute(e);
        };
      }
      function io(e) {
        return function () {
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function ao(e, t) {
        return function () {
          this.setAttribute(e, t);
        };
      }
      function oo(e, t) {
        return function () {
          this.setAttributeNS(e.space, e.local, t);
        };
      }
      function lo(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n ? this.removeAttribute(e) : this.setAttribute(e, n);
        };
      }
      function uo(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n
            ? this.removeAttributeNS(e.space, e.local)
            : this.setAttributeNS(e.space, e.local, n);
        };
      }
      function so(e) {
        return (
          (e.ownerDocument && e.ownerDocument.defaultView) ||
          (e.document && e) ||
          e.defaultView
        );
      }
      function co(e) {
        return function () {
          this.style.removeProperty(e);
        };
      }
      function fo(e, t, n) {
        return function () {
          this.style.setProperty(e, t, n);
        };
      }
      function po(e, t, n) {
        return function () {
          var r = t.apply(this, arguments);
          null == r
            ? this.style.removeProperty(e)
            : this.style.setProperty(e, r, n);
        };
      }
      function ho(e, t) {
        return (
          e.style.getPropertyValue(t) ||
          so(e).getComputedStyle(e, null).getPropertyValue(t)
        );
      }
      function mo(e) {
        return function () {
          delete this[e];
        };
      }
      function vo(e, t) {
        return function () {
          this[e] = t;
        };
      }
      function go(e, t) {
        return function () {
          var n = t.apply(this, arguments);
          null == n ? delete this[e] : (this[e] = n);
        };
      }
      function yo(e) {
        return e.trim().split(/^|\s+/);
      }
      function bo(e) {
        return e.classList || new wo(e);
      }
      function wo(e) {
        (this._node = e), (this._names = yo(e.getAttribute("class") || ""));
      }
      function Co(e, t) {
        for (var n = bo(e), r = -1, i = t.length; ++r < i; ) n.add(t[r]);
      }
      function xo(e, t) {
        for (var n = bo(e), r = -1, i = t.length; ++r < i; ) n.remove(t[r]);
      }
      function Eo(e) {
        return function () {
          Co(this, e);
        };
      }
      function So(e) {
        return function () {
          xo(this, e);
        };
      }
      function Oo(e, t) {
        return function () {
          (t.apply(this, arguments) ? Co : xo)(this, e);
        };
      }
      function jo() {
        this.textContent = "";
      }
      function ko(e) {
        return function () {
          this.textContent = e;
        };
      }
      function _o(e) {
        return function () {
          var t = e.apply(this, arguments);
          this.textContent = null == t ? "" : t;
        };
      }
      function No() {
        this.innerHTML = "";
      }
      function To(e) {
        return function () {
          this.innerHTML = e;
        };
      }
      function Lo(e) {
        return function () {
          var t = e.apply(this, arguments);
          this.innerHTML = null == t ? "" : t;
        };
      }
      function Ro() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function Io() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function Mo(e) {
        return function () {
          var t = this.ownerDocument,
            n = this.namespaceURI;
          return n === eo && t.documentElement.namespaceURI === eo
            ? t.createElement(e)
            : t.createElementNS(n, e);
        };
      }
      function Po(e) {
        return function () {
          return this.ownerDocument.createElementNS(e.space, e.local);
        };
      }
      function Ao(e) {
        var t = no(e);
        return (t.local ? Po : Mo)(t);
      }
      function Do() {
        return null;
      }
      function Vo() {
        var e = this.parentNode;
        e && e.removeChild(this);
      }
      function Bo() {
        var e = this.cloneNode(!1),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function Ho() {
        var e = this.cloneNode(!0),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function Fo(e) {
        return e
          .trim()
          .split(/^|\s+/)
          .map(function (e) {
            var t = "",
              n = e.indexOf(".");
            return (
              n >= 0 && ((t = e.slice(n + 1)), (e = e.slice(0, n))),
              { type: e, name: t }
            );
          });
      }
      function Uo(e) {
        return function () {
          var t = this.__on;
          if (t) {
            for (var n, r = 0, i = -1, a = t.length; r < a; ++r)
              (n = t[r]),
                (e.type && n.type !== e.type) || n.name !== e.name
                  ? (t[++i] = n)
                  : this.removeEventListener(n.type, n.listener, n.options);
            ++i ? (t.length = i) : delete this.__on;
          }
        };
      }
      function zo(e, t, n) {
        return function () {
          var r,
            i = this.__on,
            a = (function (e) {
              return function (t) {
                e.call(this, t, this.__data__);
              };
            })(t);
          if (i)
            for (var o = 0, l = i.length; o < l; ++o)
              if ((r = i[o]).type === e.type && r.name === e.name)
                return (
                  this.removeEventListener(r.type, r.listener, r.options),
                  this.addEventListener(
                    r.type,
                    (r.listener = a),
                    (r.options = n)
                  ),
                  void (r.value = t)
                );
          this.addEventListener(e.type, a, n),
            (r = {
              type: e.type,
              name: e.name,
              value: t,
              listener: a,
              options: n,
            }),
            i ? i.push(r) : (this.__on = [r]);
        };
      }
      function Go(e, t, n) {
        var r = so(e),
          i = r.CustomEvent;
        "function" === typeof i
          ? (i = new i(t, n))
          : ((i = r.document.createEvent("Event")),
            n
              ? (i.initEvent(t, n.bubbles, n.cancelable), (i.detail = n.detail))
              : i.initEvent(t, !1, !1)),
          e.dispatchEvent(i);
      }
      function Zo(e, t) {
        return function () {
          return Go(this, e, t);
        };
      }
      function qo(e, t) {
        return function () {
          return Go(this, e, t.apply(this, arguments));
        };
      }
      wo.prototype = {
        add: function (e) {
          this._names.indexOf(e) < 0 &&
            (this._names.push(e),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function (e) {
          var t = this._names.indexOf(e);
          t >= 0 &&
            (this._names.splice(t, 1),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function (e) {
          return this._names.indexOf(e) >= 0;
        },
      };
      var Wo = un.mark($o);
      function $o() {
        var e, t, n, r, i, a, o;
        return un.wrap(
          function (l) {
            for (;;)
              switch ((l.prev = l.next)) {
                case 0:
                  (e = this._groups), (t = 0), (n = e.length);
                case 1:
                  if (!(t < n)) {
                    l.next = 13;
                    break;
                  }
                  (r = e[t]), (i = 0), (a = r.length);
                case 3:
                  if (!(i < a)) {
                    l.next = 10;
                    break;
                  }
                  if (!(o = r[i])) {
                    l.next = 7;
                    break;
                  }
                  return (l.next = 7), o;
                case 7:
                  ++i, (l.next = 3);
                  break;
                case 10:
                  ++t, (l.next = 1);
                  break;
                case 13:
                case "end":
                  return l.stop();
              }
          },
          Wo,
          this
        );
      }
      var Ko = [null];
      function Yo(e, t) {
        (this._groups = e), (this._parents = t);
      }
      function Qo() {
        return new Yo([[document.documentElement]], Ko);
      }
      Yo.prototype = Qo.prototype = ee(
        {
          constructor: Yo,
          select: function (e) {
            "function" !== typeof e && (e = Aa(e));
            for (
              var t = this._groups, n = t.length, r = new Array(n), i = 0;
              i < n;
              ++i
            )
              for (
                var a,
                  o,
                  l = t[i],
                  u = l.length,
                  s = (r[i] = new Array(u)),
                  c = 0;
                c < u;
                ++c
              )
                (a = l[c]) &&
                  (o = e.call(a, a.__data__, c, l)) &&
                  ("__data__" in a && (o.__data__ = a.__data__), (s[c] = o));
            return new Yo(r, this._parents);
          },
          selectAll: function (e) {
            e =
              "function" === typeof e
                ? (function (e) {
                    return function () {
                      return Da(e.apply(this, arguments));
                    };
                  })(e)
                : Ba(e);
            for (
              var t = this._groups, n = t.length, r = [], i = [], a = 0;
              a < n;
              ++a
            )
              for (var o, l = t[a], u = l.length, s = 0; s < u; ++s)
                (o = l[s]) && (r.push(e.call(o, o.__data__, s, l)), i.push(o));
            return new Yo(r, i);
          },
          selectChild: function (e) {
            return this.select(
              null == e
                ? za
                : (function (e) {
                    return function () {
                      return Ua.call(this.children, e);
                    };
                  })("function" === typeof e ? e : Fa(e))
            );
          },
          selectChildren: function (e) {
            return this.selectAll(
              null == e
                ? Za
                : (function (e) {
                    return function () {
                      return Ga.call(this.children, e);
                    };
                  })("function" === typeof e ? e : Fa(e))
            );
          },
          filter: function (e) {
            "function" !== typeof e && (e = Ha(e));
            for (
              var t = this._groups, n = t.length, r = new Array(n), i = 0;
              i < n;
              ++i
            )
              for (
                var a, o = t[i], l = o.length, u = (r[i] = []), s = 0;
                s < l;
                ++s
              )
                (a = o[s]) && e.call(a, a.__data__, s, o) && u.push(a);
            return new Yo(r, this._parents);
          },
          data: function (e, t) {
            if (!arguments.length) return Array.from(this, Qa);
            var n = t ? Ya : Ka,
              r = this._parents,
              i = this._groups;
            "function" !== typeof e && (e = $a(e));
            for (
              var a = i.length,
                o = new Array(a),
                l = new Array(a),
                u = new Array(a),
                s = 0;
              s < a;
              ++s
            ) {
              var c = r[s],
                f = i[s],
                d = f.length,
                p = Xa(e.call(c, c && c.__data__, s, r)),
                h = p.length,
                m = (l[s] = new Array(h)),
                v = (o[s] = new Array(h)),
                g = (u[s] = new Array(d));
              n(c, f, m, v, g, p, t);
              for (var y, b, w = 0, C = 0; w < h; ++w)
                if ((y = m[w])) {
                  for (w >= C && (C = w + 1); !(b = v[C]) && ++C < h; );
                  y._next = b || null;
                }
            }
            return ((o = new Yo(o, r))._enter = l), (o._exit = u), o;
          },
          enter: function () {
            return new Yo(this._enter || this._groups.map(qa), this._parents);
          },
          exit: function () {
            return new Yo(this._exit || this._groups.map(qa), this._parents);
          },
          join: function (e, t, n) {
            var r = this.enter(),
              i = this,
              a = this.exit();
            return (
              "function" === typeof e
                ? (r = e(r)) && (r = r.selection())
                : (r = r.append(e + "")),
              null != t && (i = t(i)) && (i = i.selection()),
              null == n ? a.remove() : n(a),
              r && i ? r.merge(i).order() : i
            );
          },
          merge: function (e) {
            for (
              var t = e.selection ? e.selection() : e,
                n = this._groups,
                r = t._groups,
                i = n.length,
                a = r.length,
                o = Math.min(i, a),
                l = new Array(i),
                u = 0;
              u < o;
              ++u
            )
              for (
                var s,
                  c = n[u],
                  f = r[u],
                  d = c.length,
                  p = (l[u] = new Array(d)),
                  h = 0;
                h < d;
                ++h
              )
                (s = c[h] || f[h]) && (p[h] = s);
            for (; u < i; ++u) l[u] = n[u];
            return new Yo(l, this._parents);
          },
          selection: function () {
            return this;
          },
          order: function () {
            for (var e = this._groups, t = -1, n = e.length; ++t < n; )
              for (var r, i = e[t], a = i.length - 1, o = i[a]; --a >= 0; )
                (r = i[a]) &&
                  (o &&
                    4 ^ r.compareDocumentPosition(o) &&
                    o.parentNode.insertBefore(r, o),
                  (o = r));
            return this;
          },
          sort: function (e) {
            function t(t, n) {
              return t && n ? e(t.__data__, n.__data__) : !t - !n;
            }
            e || (e = Ja);
            for (
              var n = this._groups, r = n.length, i = new Array(r), a = 0;
              a < r;
              ++a
            ) {
              for (
                var o, l = n[a], u = l.length, s = (i[a] = new Array(u)), c = 0;
                c < u;
                ++c
              )
                (o = l[c]) && (s[c] = o);
              s.sort(t);
            }
            return new Yo(i, this._parents).order();
          },
          call: function () {
            var e = arguments[0];
            return (arguments[0] = this), e.apply(null, arguments), this;
          },
          nodes: function () {
            return Array.from(this);
          },
          node: function () {
            for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
              for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
                var o = r[i];
                if (o) return o;
              }
            return null;
          },
          size: function () {
            var e,
              t = 0,
              n = (function (e, t) {
                var n =
                  ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
                if (!n) {
                  if (
                    Array.isArray(e) ||
                    (n = Ti(e)) ||
                    (t && e && "number" === typeof e.length)
                  ) {
                    n && (e = n);
                    var r = 0,
                      i = function () {};
                    return {
                      s: i,
                      n: function () {
                        return r >= e.length
                          ? { done: !0 }
                          : { done: !1, value: e[r++] };
                      },
                      e: function (e) {
                        throw e;
                      },
                      f: i,
                    };
                  }
                  throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                }
                var a,
                  o = !0,
                  l = !1;
                return {
                  s: function () {
                    n = n.call(e);
                  },
                  n: function () {
                    var e = n.next();
                    return (o = e.done), e;
                  },
                  e: function (e) {
                    (l = !0), (a = e);
                  },
                  f: function () {
                    try {
                      o || null == n.return || n.return();
                    } finally {
                      if (l) throw a;
                    }
                  },
                };
              })(this);
            try {
              for (n.s(); !(e = n.n()).done; ) {
                e.value;
                ++t;
              }
            } catch (r) {
              n.e(r);
            } finally {
              n.f();
            }
            return t;
          },
          empty: function () {
            return !this.node();
          },
          each: function (e) {
            for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
              for (var i, a = t[n], o = 0, l = a.length; o < l; ++o)
                (i = a[o]) && e.call(i, i.__data__, o, a);
            return this;
          },
          attr: function (e, t) {
            var n = no(e);
            if (arguments.length < 2) {
              var r = this.node();
              return n.local
                ? r.getAttributeNS(n.space, n.local)
                : r.getAttribute(n);
            }
            return this.each(
              (null == t
                ? n.local
                  ? io
                  : ro
                : "function" === typeof t
                ? n.local
                  ? uo
                  : lo
                : n.local
                ? oo
                : ao)(n, t)
            );
          },
          style: function (e, t, n) {
            return arguments.length > 1
              ? this.each(
                  (null == t ? co : "function" === typeof t ? po : fo)(
                    e,
                    t,
                    null == n ? "" : n
                  )
                )
              : ho(this.node(), e);
          },
          property: function (e, t) {
            return arguments.length > 1
              ? this.each(
                  (null == t ? mo : "function" === typeof t ? go : vo)(e, t)
                )
              : this.node()[e];
          },
          classed: function (e, t) {
            var n = yo(e + "");
            if (arguments.length < 2) {
              for (var r = bo(this.node()), i = -1, a = n.length; ++i < a; )
                if (!r.contains(n[i])) return !1;
              return !0;
            }
            return this.each(
              ("function" === typeof t ? Oo : t ? Eo : So)(n, t)
            );
          },
          text: function (e) {
            return arguments.length
              ? this.each(
                  null == e ? jo : ("function" === typeof e ? _o : ko)(e)
                )
              : this.node().textContent;
          },
          html: function (e) {
            return arguments.length
              ? this.each(
                  null == e ? No : ("function" === typeof e ? Lo : To)(e)
                )
              : this.node().innerHTML;
          },
          raise: function () {
            return this.each(Ro);
          },
          lower: function () {
            return this.each(Io);
          },
          append: function (e) {
            var t = "function" === typeof e ? e : Ao(e);
            return this.select(function () {
              return this.appendChild(t.apply(this, arguments));
            });
          },
          insert: function (e, t) {
            var n = "function" === typeof e ? e : Ao(e),
              r = null == t ? Do : "function" === typeof t ? t : Aa(t);
            return this.select(function () {
              return this.insertBefore(
                n.apply(this, arguments),
                r.apply(this, arguments) || null
              );
            });
          },
          remove: function () {
            return this.each(Vo);
          },
          clone: function (e) {
            return this.select(e ? Ho : Bo);
          },
          datum: function (e) {
            return arguments.length
              ? this.property("__data__", e)
              : this.node().__data__;
          },
          on: function (e, t, n) {
            var r,
              i,
              a = Fo(e + ""),
              o = a.length;
            if (!(arguments.length < 2)) {
              for (l = t ? zo : Uo, r = 0; r < o; ++r) this.each(l(a[r], t, n));
              return this;
            }
            var l = this.node().__on;
            if (l)
              for (var u, s = 0, c = l.length; s < c; ++s)
                for (r = 0, u = l[s]; r < o; ++r)
                  if ((i = a[r]).type === u.type && i.name === u.name)
                    return u.value;
          },
          dispatch: function (e, t) {
            return this.each(("function" === typeof t ? qo : Zo)(e, t));
          },
        },
        Symbol.iterator,
        $o
      );
      var Xo = Qo,
        Jo = { value: function () {} };
      function el() {
        for (var e, t = 0, n = arguments.length, r = {}; t < n; ++t) {
          if (!(e = arguments[t] + "") || e in r || /[\s.]/.test(e))
            throw new Error("illegal type: " + e);
          r[e] = [];
        }
        return new tl(r);
      }
      function tl(e) {
        this._ = e;
      }
      function nl(e, t) {
        return e
          .trim()
          .split(/^|\s+/)
          .map(function (e) {
            var n = "",
              r = e.indexOf(".");
            if (
              (r >= 0 && ((n = e.slice(r + 1)), (e = e.slice(0, r))),
              e && !t.hasOwnProperty(e))
            )
              throw new Error("unknown type: " + e);
            return { type: e, name: n };
          });
      }
      function rl(e, t) {
        for (var n, r = 0, i = e.length; r < i; ++r)
          if ((n = e[r]).name === t) return n.value;
      }
      function il(e, t, n) {
        for (var r = 0, i = e.length; r < i; ++r)
          if (e[r].name === t) {
            (e[r] = Jo), (e = e.slice(0, r).concat(e.slice(r + 1)));
            break;
          }
        return null != n && e.push({ name: t, value: n }), e;
      }
      tl.prototype = el.prototype = {
        constructor: tl,
        on: function (e, t) {
          var n,
            r = this._,
            i = nl(e + "", r),
            a = -1,
            o = i.length;
          if (!(arguments.length < 2)) {
            if (null != t && "function" !== typeof t)
              throw new Error("invalid callback: " + t);
            for (; ++a < o; )
              if ((n = (e = i[a]).type)) r[n] = il(r[n], e.name, t);
              else if (null == t) for (n in r) r[n] = il(r[n], e.name, null);
            return this;
          }
          for (; ++a < o; )
            if ((n = (e = i[a]).type) && (n = rl(r[n], e.name))) return n;
        },
        copy: function () {
          var e = {},
            t = this._;
          for (var n in t) e[n] = t[n].slice();
          return new tl(e);
        },
        call: function (e, t) {
          if ((n = arguments.length - 2) > 0)
            for (var n, r, i = new Array(n), a = 0; a < n; ++a)
              i[a] = arguments[a + 2];
          if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
          for (a = 0, n = (r = this._[e]).length; a < n; ++a)
            r[a].value.apply(t, i);
        },
        apply: function (e, t, n) {
          if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
          for (var r = this._[e], i = 0, a = r.length; i < a; ++i)
            r[i].value.apply(t, n);
        },
      };
      var al,
        ol,
        ll = el,
        ul = 0,
        sl = 0,
        cl = 0,
        fl = 0,
        dl = 0,
        pl = 0,
        hl =
          "object" === typeof performance && performance.now
            ? performance
            : Date,
        ml =
          "object" === typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (e) {
                setTimeout(e, 17);
              };
      function vl() {
        return dl || (ml(gl), (dl = hl.now() + pl));
      }
      function gl() {
        dl = 0;
      }
      function yl() {
        this._call = this._time = this._next = null;
      }
      function bl(e, t, n) {
        var r = new yl();
        return r.restart(e, t, n), r;
      }
      function wl() {
        (dl = (fl = hl.now()) + pl), (ul = sl = 0);
        try {
          !(function () {
            vl(), ++ul;
            for (var e, t = al; t; )
              (e = dl - t._time) >= 0 && t._call.call(void 0, e), (t = t._next);
            --ul;
          })();
        } finally {
          (ul = 0),
            (function () {
              var e,
                t,
                n = al,
                r = 1 / 0;
              for (; n; )
                n._call
                  ? (r > n._time && (r = n._time), (e = n), (n = n._next))
                  : ((t = n._next),
                    (n._next = null),
                    (n = e ? (e._next = t) : (al = t)));
              (ol = e), xl(r);
            })(),
            (dl = 0);
        }
      }
      function Cl() {
        var e = hl.now(),
          t = e - fl;
        t > 1e3 && ((pl -= t), (fl = e));
      }
      function xl(e) {
        ul ||
          (sl && (sl = clearTimeout(sl)),
          e - dl > 24
            ? (e < 1 / 0 && (sl = setTimeout(wl, e - hl.now() - pl)),
              cl && (cl = clearInterval(cl)))
            : (cl || ((fl = hl.now()), (cl = setInterval(Cl, 1e3))),
              (ul = 1),
              ml(wl)));
      }
      function El(e, t, n) {
        var r = new yl();
        return (
          (t = null == t ? 0 : +t),
          r.restart(
            function (n) {
              r.stop(), e(n + t);
            },
            t,
            n
          ),
          r
        );
      }
      yl.prototype = bl.prototype = {
        constructor: yl,
        restart: function (e, t, n) {
          if ("function" !== typeof e)
            throw new TypeError("callback is not a function");
          (n = (null == n ? vl() : +n) + (null == t ? 0 : +t)),
            this._next ||
              ol === this ||
              (ol ? (ol._next = this) : (al = this), (ol = this)),
            (this._call = e),
            (this._time = n),
            xl();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), xl());
        },
      };
      var Sl = ll("start", "end", "cancel", "interrupt"),
        Ol = [];
      function jl(e, t, n, r, i, a) {
        var o = e.__transition;
        if (o) {
          if (n in o) return;
        } else e.__transition = {};
        !(function (e, t, n) {
          var r,
            i = e.__transition;
          function a(e) {
            (n.state = 1),
              n.timer.restart(o, n.delay, n.time),
              n.delay <= e && o(e - n.delay);
          }
          function o(a) {
            var s, c, f, d;
            if (1 !== n.state) return u();
            for (s in i)
              if ((d = i[s]).name === n.name) {
                if (3 === d.state) return El(o);
                4 === d.state
                  ? ((d.state = 6),
                    d.timer.stop(),
                    d.on.call("interrupt", e, e.__data__, d.index, d.group),
                    delete i[s])
                  : +s < t &&
                    ((d.state = 6),
                    d.timer.stop(),
                    d.on.call("cancel", e, e.__data__, d.index, d.group),
                    delete i[s]);
              }
            if (
              (El(function () {
                3 === n.state &&
                  ((n.state = 4), n.timer.restart(l, n.delay, n.time), l(a));
              }),
              (n.state = 2),
              n.on.call("start", e, e.__data__, n.index, n.group),
              2 === n.state)
            ) {
              for (
                n.state = 3, r = new Array((f = n.tween.length)), s = 0, c = -1;
                s < f;
                ++s
              )
                (d = n.tween[s].value.call(e, e.__data__, n.index, n.group)) &&
                  (r[++c] = d);
              r.length = c + 1;
            }
          }
          function l(t) {
            for (
              var i =
                  t < n.duration
                    ? n.ease.call(null, t / n.duration)
                    : (n.timer.restart(u), (n.state = 5), 1),
                a = -1,
                o = r.length;
              ++a < o;

            )
              r[a].call(e, i);
            5 === n.state &&
              (n.on.call("end", e, e.__data__, n.index, n.group), u());
          }
          function u() {
            for (var r in ((n.state = 6), n.timer.stop(), delete i[t], i))
              return;
            delete e.__transition;
          }
          (i[t] = n), (n.timer = bl(a, 0, n.time));
        })(e, n, {
          name: t,
          index: r,
          group: i,
          on: Sl,
          tween: Ol,
          time: a.time,
          delay: a.delay,
          duration: a.duration,
          ease: a.ease,
          timer: null,
          state: 0,
        });
      }
      function kl(e, t) {
        var n = Nl(e, t);
        if (n.state > 0) throw new Error("too late; already scheduled");
        return n;
      }
      function _l(e, t) {
        var n = Nl(e, t);
        if (n.state > 3) throw new Error("too late; already running");
        return n;
      }
      function Nl(e, t) {
        var n = e.__transition;
        if (!n || !(n = n[t])) throw new Error("transition not found");
        return n;
      }
      function Tl(e, t) {
        return (
          (e = +e),
          (t = +t),
          function (n) {
            return e * (1 - n) + t * n;
          }
        );
      }
      var Ll,
        Rl = 180 / Math.PI,
        Il = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        };
      function Ml(e, t, n, r, i, a) {
        var o, l, u;
        return (
          (o = Math.sqrt(e * e + t * t)) && ((e /= o), (t /= o)),
          (u = e * n + t * r) && ((n -= e * u), (r -= t * u)),
          (l = Math.sqrt(n * n + r * r)) && ((n /= l), (r /= l), (u /= l)),
          e * r < t * n && ((e = -e), (t = -t), (u = -u), (o = -o)),
          {
            translateX: i,
            translateY: a,
            rotate: Math.atan2(t, e) * Rl,
            skewX: Math.atan(u) * Rl,
            scaleX: o,
            scaleY: l,
          }
        );
      }
      function Pl(e, t, n, r) {
        function i(e) {
          return e.length ? e.pop() + " " : "";
        }
        return function (a, o) {
          var l = [],
            u = [];
          return (
            (a = e(a)),
            (o = e(o)),
            (function (e, r, i, a, o, l) {
              if (e !== i || r !== a) {
                var u = o.push("translate(", null, t, null, n);
                l.push({ i: u - 4, x: Tl(e, i) }, { i: u - 2, x: Tl(r, a) });
              } else (i || a) && o.push("translate(" + i + t + a + n);
            })(a.translateX, a.translateY, o.translateX, o.translateY, l, u),
            (function (e, t, n, a) {
              e !== t
                ? (e - t > 180 ? (t += 360) : t - e > 180 && (e += 360),
                  a.push({
                    i: n.push(i(n) + "rotate(", null, r) - 2,
                    x: Tl(e, t),
                  }))
                : t && n.push(i(n) + "rotate(" + t + r);
            })(a.rotate, o.rotate, l, u),
            (function (e, t, n, a) {
              e !== t
                ? a.push({
                    i: n.push(i(n) + "skewX(", null, r) - 2,
                    x: Tl(e, t),
                  })
                : t && n.push(i(n) + "skewX(" + t + r);
            })(a.skewX, o.skewX, l, u),
            (function (e, t, n, r, a, o) {
              if (e !== n || t !== r) {
                var l = a.push(i(a) + "scale(", null, ",", null, ")");
                o.push({ i: l - 4, x: Tl(e, n) }, { i: l - 2, x: Tl(t, r) });
              } else
                (1 === n && 1 === r) ||
                  a.push(i(a) + "scale(" + n + "," + r + ")");
            })(a.scaleX, a.scaleY, o.scaleX, o.scaleY, l, u),
            (a = o = null),
            function (e) {
              for (var t, n = -1, r = u.length; ++n < r; )
                l[(t = u[n]).i] = t.x(e);
              return l.join("");
            }
          );
        };
      }
      var Al = Pl(
          function (e) {
            var t = new (
              "function" === typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
            )(e + "");
            return t.isIdentity ? Il : Ml(t.a, t.b, t.c, t.d, t.e, t.f);
          },
          "px, ",
          "px)",
          "deg)"
        ),
        Dl = Pl(
          function (e) {
            return null == e
              ? Il
              : (Ll ||
                  (Ll = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "g"
                  )),
                Ll.setAttribute("transform", e),
                (e = Ll.transform.baseVal.consolidate())
                  ? Ml((e = e.matrix).a, e.b, e.c, e.d, e.e, e.f)
                  : Il);
          },
          ", ",
          ")",
          ")"
        );
      function Vl(e, t) {
        var n, r;
        return function () {
          var i = _l(this, e),
            a = i.tween;
          if (a !== n)
            for (var o = 0, l = (r = n = a).length; o < l; ++o)
              if (r[o].name === t) {
                (r = r.slice()).splice(o, 1);
                break;
              }
          i.tween = r;
        };
      }
      function Bl(e, t, n) {
        var r, i;
        if ("function" !== typeof n) throw new Error();
        return function () {
          var a = _l(this, e),
            o = a.tween;
          if (o !== r) {
            i = (r = o).slice();
            for (var l = { name: t, value: n }, u = 0, s = i.length; u < s; ++u)
              if (i[u].name === t) {
                i[u] = l;
                break;
              }
            u === s && i.push(l);
          }
          a.tween = i;
        };
      }
      function Hl(e, t, n) {
        var r = e._id;
        return (
          e.each(function () {
            var e = _l(this, r);
            (e.value || (e.value = {}))[t] = n.apply(this, arguments);
          }),
          function (e) {
            return Nl(e, r).value[t];
          }
        );
      }
      function Fl(e, t, n) {
        (e.prototype = t.prototype = n), (n.constructor = e);
      }
      function Ul(e, t) {
        var n = Object.create(e.prototype);
        for (var r in t) n[r] = t[r];
        return n;
      }
      function zl() {}
      var Gl = 0.7,
        Zl = 1 / Gl,
        ql = "\\s*([+-]?\\d+)\\s*",
        Wl = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        $l = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        Kl = /^#([0-9a-f]{3,8})$/,
        Yl = new RegExp(
          "^rgb\\(".concat(ql, ",").concat(ql, ",").concat(ql, "\\)$")
        ),
        Ql = new RegExp(
          "^rgb\\(".concat($l, ",").concat($l, ",").concat($l, "\\)$")
        ),
        Xl = new RegExp(
          "^rgba\\("
            .concat(ql, ",")
            .concat(ql, ",")
            .concat(ql, ",")
            .concat(Wl, "\\)$")
        ),
        Jl = new RegExp(
          "^rgba\\("
            .concat($l, ",")
            .concat($l, ",")
            .concat($l, ",")
            .concat(Wl, "\\)$")
        ),
        eu = new RegExp(
          "^hsl\\(".concat(Wl, ",").concat($l, ",").concat($l, "\\)$")
        ),
        tu = new RegExp(
          "^hsla\\("
            .concat(Wl, ",")
            .concat($l, ",")
            .concat($l, ",")
            .concat(Wl, "\\)$")
        ),
        nu = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function ru() {
        return this.rgb().formatHex();
      }
      function iu() {
        return this.rgb().formatRgb();
      }
      function au(e) {
        var t, n;
        return (
          (e = (e + "").trim().toLowerCase()),
          (t = Kl.exec(e))
            ? ((n = t[1].length),
              (t = parseInt(t[1], 16)),
              6 === n
                ? ou(t)
                : 3 === n
                ? new cu(
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (240 & t),
                    ((15 & t) << 4) | (15 & t),
                    1
                  )
                : 8 === n
                ? lu(
                    (t >> 24) & 255,
                    (t >> 16) & 255,
                    (t >> 8) & 255,
                    (255 & t) / 255
                  )
                : 4 === n
                ? lu(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (240 & t),
                    (((15 & t) << 4) | (15 & t)) / 255
                  )
                : null)
            : (t = Yl.exec(e))
            ? new cu(t[1], t[2], t[3], 1)
            : (t = Ql.exec(e))
            ? new cu(
                (255 * t[1]) / 100,
                (255 * t[2]) / 100,
                (255 * t[3]) / 100,
                1
              )
            : (t = Xl.exec(e))
            ? lu(t[1], t[2], t[3], t[4])
            : (t = Jl.exec(e))
            ? lu(
                (255 * t[1]) / 100,
                (255 * t[2]) / 100,
                (255 * t[3]) / 100,
                t[4]
              )
            : (t = eu.exec(e))
            ? vu(t[1], t[2] / 100, t[3] / 100, 1)
            : (t = tu.exec(e))
            ? vu(t[1], t[2] / 100, t[3] / 100, t[4])
            : nu.hasOwnProperty(e)
            ? ou(nu[e])
            : "transparent" === e
            ? new cu(NaN, NaN, NaN, 0)
            : null
        );
      }
      function ou(e) {
        return new cu((e >> 16) & 255, (e >> 8) & 255, 255 & e, 1);
      }
      function lu(e, t, n, r) {
        return r <= 0 && (e = t = n = NaN), new cu(e, t, n, r);
      }
      function uu(e) {
        return (
          e instanceof zl || (e = au(e)),
          e ? new cu((e = e.rgb()).r, e.g, e.b, e.opacity) : new cu()
        );
      }
      function su(e, t, n, r) {
        return 1 === arguments.length
          ? uu(e)
          : new cu(e, t, n, null == r ? 1 : r);
      }
      function cu(e, t, n, r) {
        (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
      }
      function fu() {
        return "#".concat(mu(this.r)).concat(mu(this.g)).concat(mu(this.b));
      }
      function du() {
        var e = pu(this.opacity);
        return ""
          .concat(1 === e ? "rgb(" : "rgba(")
          .concat(hu(this.r), ", ")
          .concat(hu(this.g), ", ")
          .concat(hu(this.b))
          .concat(1 === e ? ")" : ", ".concat(e, ")"));
      }
      function pu(e) {
        return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
      }
      function hu(e) {
        return Math.max(0, Math.min(255, Math.round(e) || 0));
      }
      function mu(e) {
        return ((e = hu(e)) < 16 ? "0" : "") + e.toString(16);
      }
      function vu(e, t, n, r) {
        return (
          r <= 0
            ? (e = t = n = NaN)
            : n <= 0 || n >= 1
            ? (e = t = NaN)
            : t <= 0 && (e = NaN),
          new yu(e, t, n, r)
        );
      }
      function gu(e) {
        if (e instanceof yu) return new yu(e.h, e.s, e.l, e.opacity);
        if ((e instanceof zl || (e = au(e)), !e)) return new yu();
        if (e instanceof yu) return e;
        var t = (e = e.rgb()).r / 255,
          n = e.g / 255,
          r = e.b / 255,
          i = Math.min(t, n, r),
          a = Math.max(t, n, r),
          o = NaN,
          l = a - i,
          u = (a + i) / 2;
        return (
          l
            ? ((o =
                t === a
                  ? (n - r) / l + 6 * (n < r)
                  : n === a
                  ? (r - t) / l + 2
                  : (t - n) / l + 4),
              (l /= u < 0.5 ? a + i : 2 - a - i),
              (o *= 60))
            : (l = u > 0 && u < 1 ? 0 : o),
          new yu(o, l, u, e.opacity)
        );
      }
      function yu(e, t, n, r) {
        (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
      }
      function bu(e) {
        return (e = (e || 0) % 360) < 0 ? e + 360 : e;
      }
      function wu(e) {
        return Math.max(0, Math.min(1, e || 0));
      }
      function Cu(e, t, n) {
        return (
          255 *
          (e < 60
            ? t + ((n - t) * e) / 60
            : e < 180
            ? n
            : e < 240
            ? t + ((n - t) * (240 - e)) / 60
            : t)
        );
      }
      function xu(e, t, n, r, i) {
        var a = e * e,
          o = a * e;
        return (
          ((1 - 3 * e + 3 * a - o) * t +
            (4 - 6 * a + 3 * o) * n +
            (1 + 3 * e + 3 * a - 3 * o) * r +
            o * i) /
          6
        );
      }
      Fl(zl, au, {
        copy: function (e) {
          return Object.assign(new this.constructor(), this, e);
        },
        displayable: function () {
          return this.rgb().displayable();
        },
        hex: ru,
        formatHex: ru,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return gu(this).formatHsl();
        },
        formatRgb: iu,
        toString: iu,
      }),
        Fl(
          cu,
          su,
          Ul(zl, {
            brighter: function (e) {
              return (
                (e = null == e ? Zl : Math.pow(Zl, e)),
                new cu(this.r * e, this.g * e, this.b * e, this.opacity)
              );
            },
            darker: function (e) {
              return (
                (e = null == e ? Gl : Math.pow(Gl, e)),
                new cu(this.r * e, this.g * e, this.b * e, this.opacity)
              );
            },
            rgb: function () {
              return this;
            },
            clamp: function () {
              return new cu(
                hu(this.r),
                hu(this.g),
                hu(this.b),
                pu(this.opacity)
              );
            },
            displayable: function () {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: fu,
            formatHex: fu,
            formatHex8: function () {
              return "#"
                .concat(mu(this.r))
                .concat(mu(this.g))
                .concat(mu(this.b))
                .concat(mu(255 * (isNaN(this.opacity) ? 1 : this.opacity)));
            },
            formatRgb: du,
            toString: du,
          })
        ),
        Fl(
          yu,
          function (e, t, n, r) {
            return 1 === arguments.length
              ? gu(e)
              : new yu(e, t, n, null == r ? 1 : r);
          },
          Ul(zl, {
            brighter: function (e) {
              return (
                (e = null == e ? Zl : Math.pow(Zl, e)),
                new yu(this.h, this.s, this.l * e, this.opacity)
              );
            },
            darker: function (e) {
              return (
                (e = null == e ? Gl : Math.pow(Gl, e)),
                new yu(this.h, this.s, this.l * e, this.opacity)
              );
            },
            rgb: function () {
              var e = (this.h % 360) + 360 * (this.h < 0),
                t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < 0.5 ? n : 1 - n) * t,
                i = 2 * n - r;
              return new cu(
                Cu(e >= 240 ? e - 240 : e + 120, i, r),
                Cu(e, i, r),
                Cu(e < 120 ? e + 240 : e - 120, i, r),
                this.opacity
              );
            },
            clamp: function () {
              return new yu(
                bu(this.h),
                wu(this.s),
                wu(this.l),
                pu(this.opacity)
              );
            },
            displayable: function () {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl: function () {
              var e = pu(this.opacity);
              return ""
                .concat(1 === e ? "hsl(" : "hsla(")
                .concat(bu(this.h), ", ")
                .concat(100 * wu(this.s), "%, ")
                .concat(100 * wu(this.l), "%")
                .concat(1 === e ? ")" : ", ".concat(e, ")"));
            },
          })
        );
      var Eu = function (e) {
        return function () {
          return e;
        };
      };
      function Su(e, t) {
        return function (n) {
          return e + n * t;
        };
      }
      function Ou(e) {
        return 1 === (e = +e)
          ? ju
          : function (t, n) {
              return n - t
                ? (function (e, t, n) {
                    return (
                      (e = Math.pow(e, n)),
                      (t = Math.pow(t, n) - e),
                      (n = 1 / n),
                      function (r) {
                        return Math.pow(e + r * t, n);
                      }
                    );
                  })(t, n, e)
                : Eu(isNaN(t) ? n : t);
            };
      }
      function ju(e, t) {
        var n = t - e;
        return n ? Su(e, n) : Eu(isNaN(e) ? t : e);
      }
      var ku = (function e(t) {
        var n = Ou(t);
        function r(e, t) {
          var r = n((e = su(e)).r, (t = su(t)).r),
            i = n(e.g, t.g),
            a = n(e.b, t.b),
            o = ju(e.opacity, t.opacity);
          return function (t) {
            return (
              (e.r = r(t)),
              (e.g = i(t)),
              (e.b = a(t)),
              (e.opacity = o(t)),
              e + ""
            );
          };
        }
        return (r.gamma = e), r;
      })(1);
      function _u(e) {
        return function (t) {
          var n,
            r,
            i = t.length,
            a = new Array(i),
            o = new Array(i),
            l = new Array(i);
          for (n = 0; n < i; ++n)
            (r = su(t[n])),
              (a[n] = r.r || 0),
              (o[n] = r.g || 0),
              (l[n] = r.b || 0);
          return (
            (a = e(a)),
            (o = e(o)),
            (l = e(l)),
            (r.opacity = 1),
            function (e) {
              return (r.r = a(e)), (r.g = o(e)), (r.b = l(e)), r + "";
            }
          );
        };
      }
      _u(function (e) {
        var t = e.length - 1;
        return function (n) {
          var r =
              n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), t - 1) : Math.floor(n * t),
            i = e[r],
            a = e[r + 1],
            o = r > 0 ? e[r - 1] : 2 * i - a,
            l = r < t - 1 ? e[r + 2] : 2 * a - i;
          return xu((n - r / t) * t, o, i, a, l);
        };
      }),
        _u(function (e) {
          var t = e.length;
          return function (n) {
            var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t),
              i = e[(r + t - 1) % t],
              a = e[r % t],
              o = e[(r + 1) % t],
              l = e[(r + 2) % t];
            return xu((n - r / t) * t, i, a, o, l);
          };
        });
      var Nu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        Tu = new RegExp(Nu.source, "g");
      function Lu(e, t) {
        var n,
          r,
          i,
          a = (Nu.lastIndex = Tu.lastIndex = 0),
          o = -1,
          l = [],
          u = [];
        for (e += "", t += ""; (n = Nu.exec(e)) && (r = Tu.exec(t)); )
          (i = r.index) > a &&
            ((i = t.slice(a, i)), l[o] ? (l[o] += i) : (l[++o] = i)),
            (n = n[0]) === (r = r[0])
              ? l[o]
                ? (l[o] += r)
                : (l[++o] = r)
              : ((l[++o] = null), u.push({ i: o, x: Tl(n, r) })),
            (a = Tu.lastIndex);
        return (
          a < t.length && ((i = t.slice(a)), l[o] ? (l[o] += i) : (l[++o] = i)),
          l.length < 2
            ? u[0]
              ? (function (e) {
                  return function (t) {
                    return e(t) + "";
                  };
                })(u[0].x)
              : (function (e) {
                  return function () {
                    return e;
                  };
                })(t)
            : ((t = u.length),
              function (e) {
                for (var n, r = 0; r < t; ++r) l[(n = u[r]).i] = n.x(e);
                return l.join("");
              })
        );
      }
      function Ru(e, t) {
        var n;
        return (
          "number" === typeof t
            ? Tl
            : t instanceof au
            ? ku
            : (n = au(t))
            ? ((t = n), ku)
            : Lu
        )(e, t);
      }
      function Iu(e) {
        return function () {
          this.removeAttribute(e);
        };
      }
      function Mu(e) {
        return function () {
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function Pu(e, t, n) {
        var r,
          i,
          a = n + "";
        return function () {
          var o = this.getAttribute(e);
          return o === a ? null : o === r ? i : (i = t((r = o), n));
        };
      }
      function Au(e, t, n) {
        var r,
          i,
          a = n + "";
        return function () {
          var o = this.getAttributeNS(e.space, e.local);
          return o === a ? null : o === r ? i : (i = t((r = o), n));
        };
      }
      function Du(e, t, n) {
        var r, i, a;
        return function () {
          var o,
            l,
            u = n(this);
          if (null != u)
            return (o = this.getAttribute(e)) === (l = u + "")
              ? null
              : o === r && l === i
              ? a
              : ((i = l), (a = t((r = o), u)));
          this.removeAttribute(e);
        };
      }
      function Vu(e, t, n) {
        var r, i, a;
        return function () {
          var o,
            l,
            u = n(this);
          if (null != u)
            return (o = this.getAttributeNS(e.space, e.local)) === (l = u + "")
              ? null
              : o === r && l === i
              ? a
              : ((i = l), (a = t((r = o), u)));
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function Bu(e, t) {
        return function (n) {
          this.setAttribute(e, t.call(this, n));
        };
      }
      function Hu(e, t) {
        return function (n) {
          this.setAttributeNS(e.space, e.local, t.call(this, n));
        };
      }
      function Fu(e, t) {
        var n, r;
        function i() {
          var i = t.apply(this, arguments);
          return i !== r && (n = (r = i) && Hu(e, i)), n;
        }
        return (i._value = t), i;
      }
      function Uu(e, t) {
        var n, r;
        function i() {
          var i = t.apply(this, arguments);
          return i !== r && (n = (r = i) && Bu(e, i)), n;
        }
        return (i._value = t), i;
      }
      function zu(e, t) {
        return function () {
          kl(this, e).delay = +t.apply(this, arguments);
        };
      }
      function Gu(e, t) {
        return (
          (t = +t),
          function () {
            kl(this, e).delay = t;
          }
        );
      }
      function Zu(e, t) {
        return function () {
          _l(this, e).duration = +t.apply(this, arguments);
        };
      }
      function qu(e, t) {
        return (
          (t = +t),
          function () {
            _l(this, e).duration = t;
          }
        );
      }
      function Wu(e, t) {
        if ("function" !== typeof t) throw new Error();
        return function () {
          _l(this, e).ease = t;
        };
      }
      function $u(e, t, n) {
        var r,
          i,
          a = (function (e) {
            return (e + "")
              .trim()
              .split(/^|\s+/)
              .every(function (e) {
                var t = e.indexOf(".");
                return t >= 0 && (e = e.slice(0, t)), !e || "start" === e;
              });
          })(t)
            ? kl
            : _l;
        return function () {
          var o = a(this, e),
            l = o.on;
          l !== r && (i = (r = l).copy()).on(t, n), (o.on = i);
        };
      }
      var Ku = Xo.prototype.constructor;
      function Yu(e) {
        return function () {
          this.style.removeProperty(e);
        };
      }
      function Qu(e, t, n) {
        return function (r) {
          this.style.setProperty(e, t.call(this, r), n);
        };
      }
      function Xu(e, t, n) {
        var r, i;
        function a() {
          var a = t.apply(this, arguments);
          return a !== i && (r = (i = a) && Qu(e, a, n)), r;
        }
        return (a._value = t), a;
      }
      function Ju(e) {
        return function (t) {
          this.textContent = e.call(this, t);
        };
      }
      function es(e) {
        var t, n;
        function r() {
          var r = e.apply(this, arguments);
          return r !== n && (t = (n = r) && Ju(r)), t;
        }
        return (r._value = e), r;
      }
      var ts = 0;
      function ns(e, t, n, r) {
        (this._groups = e),
          (this._parents = t),
          (this._name = n),
          (this._id = r);
      }
      function rs() {
        return ++ts;
      }
      var is = Xo.prototype;
      ns.prototype = function (e) {
        return Xo().transition(e);
      }.prototype = ee(
        {
          constructor: ns,
          select: function (e) {
            var t = this._name,
              n = this._id;
            "function" !== typeof e && (e = Aa(e));
            for (
              var r = this._groups, i = r.length, a = new Array(i), o = 0;
              o < i;
              ++o
            )
              for (
                var l,
                  u,
                  s = r[o],
                  c = s.length,
                  f = (a[o] = new Array(c)),
                  d = 0;
                d < c;
                ++d
              )
                (l = s[d]) &&
                  (u = e.call(l, l.__data__, d, s)) &&
                  ("__data__" in l && (u.__data__ = l.__data__),
                  (f[d] = u),
                  jl(f[d], t, n, d, f, Nl(l, n)));
            return new ns(a, this._parents, t, n);
          },
          selectAll: function (e) {
            var t = this._name,
              n = this._id;
            "function" !== typeof e && (e = Ba(e));
            for (
              var r = this._groups, i = r.length, a = [], o = [], l = 0;
              l < i;
              ++l
            )
              for (var u, s = r[l], c = s.length, f = 0; f < c; ++f)
                if ((u = s[f])) {
                  for (
                    var d,
                      p = e.call(u, u.__data__, f, s),
                      h = Nl(u, n),
                      m = 0,
                      v = p.length;
                    m < v;
                    ++m
                  )
                    (d = p[m]) && jl(d, t, n, m, p, h);
                  a.push(p), o.push(u);
                }
            return new ns(a, o, t, n);
          },
          selectChild: is.selectChild,
          selectChildren: is.selectChildren,
          filter: function (e) {
            "function" !== typeof e && (e = Ha(e));
            for (
              var t = this._groups, n = t.length, r = new Array(n), i = 0;
              i < n;
              ++i
            )
              for (
                var a, o = t[i], l = o.length, u = (r[i] = []), s = 0;
                s < l;
                ++s
              )
                (a = o[s]) && e.call(a, a.__data__, s, o) && u.push(a);
            return new ns(r, this._parents, this._name, this._id);
          },
          merge: function (e) {
            if (e._id !== this._id) throw new Error();
            for (
              var t = this._groups,
                n = e._groups,
                r = t.length,
                i = n.length,
                a = Math.min(r, i),
                o = new Array(r),
                l = 0;
              l < a;
              ++l
            )
              for (
                var u,
                  s = t[l],
                  c = n[l],
                  f = s.length,
                  d = (o[l] = new Array(f)),
                  p = 0;
                p < f;
                ++p
              )
                (u = s[p] || c[p]) && (d[p] = u);
            for (; l < r; ++l) o[l] = t[l];
            return new ns(o, this._parents, this._name, this._id);
          },
          selection: function () {
            return new Ku(this._groups, this._parents);
          },
          transition: function () {
            for (
              var e = this._name,
                t = this._id,
                n = rs(),
                r = this._groups,
                i = r.length,
                a = 0;
              a < i;
              ++a
            )
              for (var o, l = r[a], u = l.length, s = 0; s < u; ++s)
                if ((o = l[s])) {
                  var c = Nl(o, t);
                  jl(o, e, n, s, l, {
                    time: c.time + c.delay + c.duration,
                    delay: 0,
                    duration: c.duration,
                    ease: c.ease,
                  });
                }
            return new ns(r, this._parents, e, n);
          },
          call: is.call,
          nodes: is.nodes,
          node: is.node,
          size: is.size,
          empty: is.empty,
          each: is.each,
          on: function (e, t) {
            var n = this._id;
            return arguments.length < 2
              ? Nl(this.node(), n).on.on(e)
              : this.each($u(n, e, t));
          },
          attr: function (e, t) {
            var n = no(e),
              r = "transform" === n ? Dl : Ru;
            return this.attrTween(
              e,
              "function" === typeof t
                ? (n.local ? Vu : Du)(n, r, Hl(this, "attr." + e, t))
                : null == t
                ? (n.local ? Mu : Iu)(n)
                : (n.local ? Au : Pu)(n, r, t)
            );
          },
          attrTween: function (e, t) {
            var n = "attr." + e;
            if (arguments.length < 2) return (n = this.tween(n)) && n._value;
            if (null == t) return this.tween(n, null);
            if ("function" !== typeof t) throw new Error();
            var r = no(e);
            return this.tween(n, (r.local ? Fu : Uu)(r, t));
          },
          style: function (e, t, n) {
            var r = "transform" === (e += "") ? Al : Ru;
            return null == t
              ? this.styleTween(
                  e,
                  (function (e, t) {
                    var n, r, i;
                    return function () {
                      var a = ho(this, e),
                        o = (this.style.removeProperty(e), ho(this, e));
                      return a === o
                        ? null
                        : a === n && o === r
                        ? i
                        : (i = t((n = a), (r = o)));
                    };
                  })(e, r)
                ).on("end.style." + e, Yu(e))
              : "function" === typeof t
              ? this.styleTween(
                  e,
                  (function (e, t, n) {
                    var r, i, a;
                    return function () {
                      var o = ho(this, e),
                        l = n(this),
                        u = l + "";
                      return (
                        null == l &&
                          (this.style.removeProperty(e), (u = l = ho(this, e))),
                        o === u
                          ? null
                          : o === r && u === i
                          ? a
                          : ((i = u), (a = t((r = o), l)))
                      );
                    };
                  })(e, r, Hl(this, "style." + e, t))
                ).each(
                  (function (e, t) {
                    var n,
                      r,
                      i,
                      a,
                      o = "style." + t,
                      l = "end." + o;
                    return function () {
                      var u = _l(this, e),
                        s = u.on,
                        c = null == u.value[o] ? a || (a = Yu(t)) : void 0;
                      (s === n && i === c) ||
                        (r = (n = s).copy()).on(l, (i = c)),
                        (u.on = r);
                    };
                  })(this._id, e)
                )
              : this.styleTween(
                  e,
                  (function (e, t, n) {
                    var r,
                      i,
                      a = n + "";
                    return function () {
                      var o = ho(this, e);
                      return o === a ? null : o === r ? i : (i = t((r = o), n));
                    };
                  })(e, r, t),
                  n
                ).on("end.style." + e, null);
          },
          styleTween: function (e, t, n) {
            var r = "style." + (e += "");
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == t) return this.tween(r, null);
            if ("function" !== typeof t) throw new Error();
            return this.tween(r, Xu(e, t, null == n ? "" : n));
          },
          text: function (e) {
            return this.tween(
              "text",
              "function" === typeof e
                ? (function (e) {
                    return function () {
                      var t = e(this);
                      this.textContent = null == t ? "" : t;
                    };
                  })(Hl(this, "text", e))
                : (function (e) {
                    return function () {
                      this.textContent = e;
                    };
                  })(null == e ? "" : e + "")
            );
          },
          textTween: function (e) {
            var t = "text";
            if (arguments.length < 1) return (t = this.tween(t)) && t._value;
            if (null == e) return this.tween(t, null);
            if ("function" !== typeof e) throw new Error();
            return this.tween(t, es(e));
          },
          remove: function () {
            return this.on(
              "end.remove",
              (function (e) {
                return function () {
                  var t = this.parentNode;
                  for (var n in this.__transition) if (+n !== e) return;
                  t && t.removeChild(this);
                };
              })(this._id)
            );
          },
          tween: function (e, t) {
            var n = this._id;
            if (((e += ""), arguments.length < 2)) {
              for (
                var r, i = Nl(this.node(), n).tween, a = 0, o = i.length;
                a < o;
                ++a
              )
                if ((r = i[a]).name === e) return r.value;
              return null;
            }
            return this.each((null == t ? Vl : Bl)(n, e, t));
          },
          delay: function (e) {
            var t = this._id;
            return arguments.length
              ? this.each(("function" === typeof e ? zu : Gu)(t, e))
              : Nl(this.node(), t).delay;
          },
          duration: function (e) {
            var t = this._id;
            return arguments.length
              ? this.each(("function" === typeof e ? Zu : qu)(t, e))
              : Nl(this.node(), t).duration;
          },
          ease: function (e) {
            var t = this._id;
            return arguments.length
              ? this.each(Wu(t, e))
              : Nl(this.node(), t).ease;
          },
          easeVarying: function (e) {
            if ("function" !== typeof e) throw new Error();
            return this.each(
              (function (e, t) {
                return function () {
                  var n = t.apply(this, arguments);
                  if ("function" !== typeof n) throw new Error();
                  _l(this, e).ease = n;
                };
              })(this._id, e)
            );
          },
          end: function () {
            var e,
              t,
              n = this,
              r = n._id,
              i = n.size();
            return new Promise(function (a, o) {
              var l = { value: o },
                u = {
                  value: function () {
                    0 === --i && a();
                  },
                };
              n.each(function () {
                var n = _l(this, r),
                  i = n.on;
                i !== e &&
                  ((t = (e = i).copy())._.cancel.push(l),
                  t._.interrupt.push(l),
                  t._.end.push(u)),
                  (n.on = t);
              }),
                0 === i && a();
            });
          },
        },
        Symbol.iterator,
        is[Symbol.iterator]
      );
      var as = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function (e) {
          return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
        },
      };
      function os(e, t) {
        for (var n; !(n = e.__transition) || !(n = n[t]); )
          if (!(e = e.parentNode))
            throw new Error("transition ".concat(t, " not found"));
        return n;
      }
      (Xo.prototype.interrupt = function (e) {
        return this.each(function () {
          !(function (e, t) {
            var n,
              r,
              i,
              a = e.__transition,
              o = !0;
            if (a) {
              for (i in ((t = null == t ? null : t + ""), a))
                (n = a[i]).name === t
                  ? ((r = n.state > 2 && n.state < 5),
                    (n.state = 6),
                    n.timer.stop(),
                    n.on.call(
                      r ? "interrupt" : "cancel",
                      e,
                      e.__data__,
                      n.index,
                      n.group
                    ),
                    delete a[i])
                  : (o = !1);
              o && delete e.__transition;
            }
          })(this, e);
        });
      }),
        (Xo.prototype.transition = function (e) {
          var t, n;
          e instanceof ns
            ? ((t = e._id), (e = e._name))
            : ((t = rs()),
              ((n = as).time = vl()),
              (e = null == e ? null : e + ""));
          for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
            for (var o, l = r[a], u = l.length, s = 0; s < u; ++s)
              (o = l[s]) && jl(o, e, t, s, l, n || os(o, t));
          return new ns(r, this._parents, e, t);
        });
      Math.abs, Math.max, Math.min;
      function ls(e) {
        return [+e[0], +e[1]];
      }
      function us(e) {
        return [ls(e[0]), ls(e[1])];
      }
      ["w", "e"].map(ss),
        ["n", "s"].map(ss),
        ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(ss);
      function ss(e) {
        return { type: e };
      }
      var cs = Math.PI,
        fs = 2 * cs,
        ds = 1e-6,
        ps = fs - ds;
      function hs() {
        (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
      }
      function ms() {
        return new hs();
      }
      hs.prototype = ms.prototype = {
        constructor: hs,
        moveTo: function (e, t) {
          this._ +=
            "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
        },
        closePath: function () {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
        },
        lineTo: function (e, t) {
          this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
        },
        quadraticCurveTo: function (e, t, n, r) {
          this._ +=
            "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r);
        },
        bezierCurveTo: function (e, t, n, r, i, a) {
          this._ +=
            "C" +
            +e +
            "," +
            +t +
            "," +
            +n +
            "," +
            +r +
            "," +
            (this._x1 = +i) +
            "," +
            (this._y1 = +a);
        },
        arcTo: function (e, t, n, r, i) {
          (e = +e), (t = +t), (n = +n), (r = +r), (i = +i);
          var a = this._x1,
            o = this._y1,
            l = n - e,
            u = r - t,
            s = a - e,
            c = o - t,
            f = s * s + c * c;
          if (i < 0) throw new Error("negative radius: " + i);
          if (null === this._x1)
            this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
          else if (f > ds)
            if (Math.abs(c * l - u * s) > ds && i) {
              var d = n - a,
                p = r - o,
                h = l * l + u * u,
                m = d * d + p * p,
                v = Math.sqrt(h),
                g = Math.sqrt(f),
                y =
                  i * Math.tan((cs - Math.acos((h + f - m) / (2 * v * g))) / 2),
                b = y / g,
                w = y / v;
              Math.abs(b - 1) > ds &&
                (this._ += "L" + (e + b * s) + "," + (t + b * c)),
                (this._ +=
                  "A" +
                  i +
                  "," +
                  i +
                  ",0,0," +
                  +(c * d > s * p) +
                  "," +
                  (this._x1 = e + w * l) +
                  "," +
                  (this._y1 = t + w * u));
            } else this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
          else;
        },
        arc: function (e, t, n, r, i, a) {
          (e = +e), (t = +t), (a = !!a);
          var o = (n = +n) * Math.cos(r),
            l = n * Math.sin(r),
            u = e + o,
            s = t + l,
            c = 1 ^ a,
            f = a ? r - i : i - r;
          if (n < 0) throw new Error("negative radius: " + n);
          null === this._x1
            ? (this._ += "M" + u + "," + s)
            : (Math.abs(this._x1 - u) > ds || Math.abs(this._y1 - s) > ds) &&
              (this._ += "L" + u + "," + s),
            n &&
              (f < 0 && (f = (f % fs) + fs),
              f > ps
                ? (this._ +=
                    "A" +
                    n +
                    "," +
                    n +
                    ",0,1," +
                    c +
                    "," +
                    (e - o) +
                    "," +
                    (t - l) +
                    "A" +
                    n +
                    "," +
                    n +
                    ",0,1," +
                    c +
                    "," +
                    (this._x1 = u) +
                    "," +
                    (this._y1 = s))
                : f > ds &&
                  (this._ +=
                    "A" +
                    n +
                    "," +
                    n +
                    ",0," +
                    +(f >= cs) +
                    "," +
                    c +
                    "," +
                    (this._x1 = e + n * Math.cos(i)) +
                    "," +
                    (this._y1 = t + n * Math.sin(i))));
        },
        rect: function (e, t, n, r) {
          this._ +=
            "M" +
            (this._x0 = this._x1 = +e) +
            "," +
            (this._y0 = this._y1 = +t) +
            "h" +
            +n +
            "v" +
            +r +
            "h" +
            -n +
            "Z";
        },
        toString: function () {
          return this._;
        },
      };
      var vs = ms;
      function gs(e) {
        return function () {
          return e;
        };
      }
      var ys = Math.abs,
        bs = Math.atan2,
        ws = Math.cos,
        Cs = Math.max,
        xs = Math.min,
        Es = Math.sin,
        Ss = Math.sqrt,
        Os = 1e-12,
        js = Math.PI,
        ks = js / 2,
        _s = 2 * js;
      function Ns(e) {
        return e > 1 ? 0 : e < -1 ? js : Math.acos(e);
      }
      function Ts(e) {
        return e >= 1 ? ks : e <= -1 ? -ks : Math.asin(e);
      }
      function Ls(e) {
        return e.innerRadius;
      }
      function Rs(e) {
        return e.outerRadius;
      }
      function Is(e) {
        return e.startAngle;
      }
      function Ms(e) {
        return e.endAngle;
      }
      function Ps(e) {
        return e && e.padAngle;
      }
      function As(e, t, n, r, i, a, o, l) {
        var u = n - e,
          s = r - t,
          c = o - i,
          f = l - a,
          d = f * u - c * s;
        if (!(d * d < Os))
          return [e + (d = (c * (t - a) - f * (e - i)) / d) * u, t + d * s];
      }
      function Ds(e, t, n, r, i, a, o) {
        var l = e - n,
          u = t - r,
          s = (o ? a : -a) / Ss(l * l + u * u),
          c = s * u,
          f = -s * l,
          d = e + c,
          p = t + f,
          h = n + c,
          m = r + f,
          v = (d + h) / 2,
          g = (p + m) / 2,
          y = h - d,
          b = m - p,
          w = y * y + b * b,
          C = i - a,
          x = d * m - h * p,
          E = (b < 0 ? -1 : 1) * Ss(Cs(0, C * C * w - x * x)),
          S = (x * b - y * E) / w,
          O = (-x * y - b * E) / w,
          j = (x * b + y * E) / w,
          k = (-x * y + b * E) / w,
          _ = S - v,
          N = O - g,
          T = j - v,
          L = k - g;
        return (
          _ * _ + N * N > T * T + L * L && ((S = j), (O = k)),
          {
            cx: S,
            cy: O,
            x01: -c,
            y01: -f,
            x11: S * (i / C - 1),
            y11: O * (i / C - 1),
          }
        );
      }
      function Vs() {
        var e = Ls,
          t = Rs,
          n = gs(0),
          r = null,
          i = Is,
          a = Ms,
          o = Ps,
          l = null;
        function u() {
          var u,
            s,
            c = +e.apply(this, arguments),
            f = +t.apply(this, arguments),
            d = i.apply(this, arguments) - ks,
            p = a.apply(this, arguments) - ks,
            h = ys(p - d),
            m = p > d;
          if (
            (l || (l = u = vs()), f < c && ((s = f), (f = c), (c = s)), f > Os)
          )
            if (h > _s - Os)
              l.moveTo(f * ws(d), f * Es(d)),
                l.arc(0, 0, f, d, p, !m),
                c > Os &&
                  (l.moveTo(c * ws(p), c * Es(p)), l.arc(0, 0, c, p, d, m));
            else {
              var v,
                g,
                y = d,
                b = p,
                w = d,
                C = p,
                x = h,
                E = h,
                S = o.apply(this, arguments) / 2,
                O =
                  S > Os && (r ? +r.apply(this, arguments) : Ss(c * c + f * f)),
                j = xs(ys(f - c) / 2, +n.apply(this, arguments)),
                k = j,
                _ = j;
              if (O > Os) {
                var N = Ts((O / c) * Es(S)),
                  T = Ts((O / f) * Es(S));
                (x -= 2 * N) > Os
                  ? ((w += N *= m ? 1 : -1), (C -= N))
                  : ((x = 0), (w = C = (d + p) / 2)),
                  (E -= 2 * T) > Os
                    ? ((y += T *= m ? 1 : -1), (b -= T))
                    : ((E = 0), (y = b = (d + p) / 2));
              }
              var L = f * ws(y),
                R = f * Es(y),
                I = c * ws(C),
                M = c * Es(C);
              if (j > Os) {
                var P,
                  A = f * ws(b),
                  D = f * Es(b),
                  V = c * ws(w),
                  B = c * Es(w);
                if (h < js && (P = As(L, R, V, B, A, D, I, M))) {
                  var H = L - P[0],
                    F = R - P[1],
                    U = A - P[0],
                    z = D - P[1],
                    G =
                      1 /
                      Es(
                        Ns(
                          (H * U + F * z) /
                            (Ss(H * H + F * F) * Ss(U * U + z * z))
                        ) / 2
                      ),
                    Z = Ss(P[0] * P[0] + P[1] * P[1]);
                  (k = xs(j, (c - Z) / (G - 1))),
                    (_ = xs(j, (f - Z) / (G + 1)));
                }
              }
              E > Os
                ? _ > Os
                  ? ((v = Ds(V, B, L, R, f, _, m)),
                    (g = Ds(A, D, I, M, f, _, m)),
                    l.moveTo(v.cx + v.x01, v.cy + v.y01),
                    _ < j
                      ? l.arc(
                          v.cx,
                          v.cy,
                          _,
                          bs(v.y01, v.x01),
                          bs(g.y01, g.x01),
                          !m
                        )
                      : (l.arc(
                          v.cx,
                          v.cy,
                          _,
                          bs(v.y01, v.x01),
                          bs(v.y11, v.x11),
                          !m
                        ),
                        l.arc(
                          0,
                          0,
                          f,
                          bs(v.cy + v.y11, v.cx + v.x11),
                          bs(g.cy + g.y11, g.cx + g.x11),
                          !m
                        ),
                        l.arc(
                          g.cx,
                          g.cy,
                          _,
                          bs(g.y11, g.x11),
                          bs(g.y01, g.x01),
                          !m
                        )))
                  : (l.moveTo(L, R), l.arc(0, 0, f, y, b, !m))
                : l.moveTo(L, R),
                c > Os && x > Os
                  ? k > Os
                    ? ((v = Ds(I, M, A, D, c, -k, m)),
                      (g = Ds(L, R, V, B, c, -k, m)),
                      l.lineTo(v.cx + v.x01, v.cy + v.y01),
                      k < j
                        ? l.arc(
                            v.cx,
                            v.cy,
                            k,
                            bs(v.y01, v.x01),
                            bs(g.y01, g.x01),
                            !m
                          )
                        : (l.arc(
                            v.cx,
                            v.cy,
                            k,
                            bs(v.y01, v.x01),
                            bs(v.y11, v.x11),
                            !m
                          ),
                          l.arc(
                            0,
                            0,
                            c,
                            bs(v.cy + v.y11, v.cx + v.x11),
                            bs(g.cy + g.y11, g.cx + g.x11),
                            m
                          ),
                          l.arc(
                            g.cx,
                            g.cy,
                            k,
                            bs(g.y11, g.x11),
                            bs(g.y01, g.x01),
                            !m
                          )))
                    : l.arc(0, 0, c, C, w, m)
                  : l.lineTo(I, M);
            }
          else l.moveTo(0, 0);
          if ((l.closePath(), u)) return (l = null), u + "" || null;
        }
        return (
          (u.centroid = function () {
            var n = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2,
              r =
                (+i.apply(this, arguments) + +a.apply(this, arguments)) / 2 -
                js / 2;
            return [ws(r) * n, Es(r) * n];
          }),
          (u.innerRadius = function (t) {
            return arguments.length
              ? ((e = "function" === typeof t ? t : gs(+t)), u)
              : e;
          }),
          (u.outerRadius = function (e) {
            return arguments.length
              ? ((t = "function" === typeof e ? e : gs(+e)), u)
              : t;
          }),
          (u.cornerRadius = function (e) {
            return arguments.length
              ? ((n = "function" === typeof e ? e : gs(+e)), u)
              : n;
          }),
          (u.padRadius = function (e) {
            return arguments.length
              ? ((r = null == e ? null : "function" === typeof e ? e : gs(+e)),
                u)
              : r;
          }),
          (u.startAngle = function (e) {
            return arguments.length
              ? ((i = "function" === typeof e ? e : gs(+e)), u)
              : i;
          }),
          (u.endAngle = function (e) {
            return arguments.length
              ? ((a = "function" === typeof e ? e : gs(+e)), u)
              : a;
          }),
          (u.padAngle = function (e) {
            return arguments.length
              ? ((o = "function" === typeof e ? e : gs(+e)), u)
              : o;
          }),
          (u.context = function (e) {
            return arguments.length ? ((l = null == e ? null : e), u) : l;
          }),
          u
        );
      }
      function Bs(e, t, n) {
        (this.k = e), (this.x = t), (this.y = n);
      }
      Bs.prototype = {
        constructor: Bs,
        scale: function (e) {
          return 1 === e ? this : new Bs(this.k * e, this.x, this.y);
        },
        translate: function (e, t) {
          return (0 === e) & (0 === t)
            ? this
            : new Bs(this.k, this.x + this.k * e, this.y + this.k * t);
        },
        apply: function (e) {
          return [e[0] * this.k + this.x, e[1] * this.k + this.y];
        },
        applyX: function (e) {
          return e * this.k + this.x;
        },
        applyY: function (e) {
          return e * this.k + this.y;
        },
        invert: function (e) {
          return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
        },
        invertX: function (e) {
          return (e - this.x) / this.k;
        },
        invertY: function (e) {
          return (e - this.y) / this.k;
        },
        rescaleX: function (e) {
          return e
            .copy()
            .domain(e.range().map(this.invertX, this).map(e.invert, e));
        },
        rescaleY: function (e) {
          return e
            .copy()
            .domain(e.range().map(this.invertY, this).map(e.invert, e));
        },
        toString: function () {
          return (
            "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
          );
        },
      };
      new Bs(1, 0, 0);
      Bs.prototype;
      var Hs = function (e) {
          var t = e.center,
            n = e.innerRadius,
            r = e.radius,
            i = e.angle,
            a = e.rotation,
            o = e.color,
            l = e.opacity,
            u = void 0 === l ? 1 : l;
          return (0, m.jsx)("path", {
            d: Vs()
              .innerRadius(n)
              .outerRadius(r)
              .startAngle(-i + a)
              .endAngle(i + a)(),
            transform: "translate(" + [t.x, t.y] + ")",
            opacity: u,
            fill: o,
          });
        },
        Fs = Sa(32),
        Us = (Sa(0.5), Sa(1), Sa(20), Sa(20), 1.25),
        zs = [0.015, 0.03],
        Gs = [10, 35, 75];
      var Zs = function (e) {
        var t,
          n = e.size,
          r = e.mapZoom,
          i = e.menuViewSizes,
          a = h(function (e) {
            return e.socket.targets;
          }),
          o = h(function (e) {
            return e.socket.camera;
          }),
          l = h(function (e) {
            return e.socket.settings;
          }),
          u = {
            width: n.width,
            height: n.height,
            center: { x: n.width / 2, y: n.height / 2 },
          },
          s = 0.1 * r;
        return (
          l &&
          l["system-mode"] &&
          "collision-avoidance" === l["system-mode"].value
            ? ((t = u.height / 3),
              (u.center = { x: u.width / 2, y: u.height / 2 + t }))
            : (t = 0),
          (0, m.jsx)("div", {
            className: "map",
            style: { width: u.width, height: u.height },
            children: (0, m.jsxs)("svg", {
              width: "100%",
              height: "100%",
              children: [
                (0, m.jsx)("g", {
                  className: "map-fieldOfView",
                  children: (0, m.jsx)(Hs, {
                    center: u.center,
                    innerRadius: 0,
                    radius: Math.max(u.width, u.height),
                    angle: Fs / 2,
                    rotation: o ? Sa(o.pan) : 0,
                    opacity: 1,
                    color: Jt("--overlay3"),
                  }),
                }),
                l &&
                  l["collision-avoidance-mode-limit"].value &&
                  l["system-mode"] &&
                  "collision-avoidance" === l["system-mode"].value &&
                  (0, m.jsx)("g", {
                    className: "map-viewRange",
                    children: (0, m.jsx)(Hs, {
                      center: u.center,
                      innerRadius: 0,
                      radius: Math.max(u.width, u.height),
                      angle:
                        Sa(l["collision-avoidance-mode-limit"].value) + Fs / 2,
                      rotation: 0,
                      opacity: 1,
                      color: Jt("--overlay2"),
                    }),
                  }),
                (0, m.jsx)("g", {
                  className: "map-backgroundLines",
                  children:
                    l &&
                    l["map-distance-ranges"] &&
                    l["map-distance-ranges"].value.map(function (e) {
                      return (0,
                      m.jsx)(Ma, { radius: Zi(u, e, l["map-distance-ranges"].value, r), distance: e, center: u.center }, "distance-circle-" + e);
                    }),
                }),
                (0, m.jsx)("g", {
                  className: "map-detections",
                  children:
                    a &&
                    a.map(function (e) {
                      return (0,
                      m.jsx)(Ta, { map: u, target: e, zoom: r, menuViewSizes: i, collisionAvoidanceOffset: t }, e.name);
                    }),
                }),
                (0, m.jsx)("g", {
                  className: "map-sourceBoat",
                  children: (0, m.jsx)(Bi, {
                    width: Math.min(u.height, u.width) / 30 + s,
                    height: Math.min(u.height, u.width) / 15 + s,
                    x:
                      u.center.x -
                      (1 * (Math.min(u.height, u.width) / 30 + s)) / 2,
                    y:
                      u.center.y -
                      (1 * (Math.min(u.height, u.width) / 15 + s)) / 2,
                  }),
                }),
              ],
            }),
          })
        );
      };
      var qs,
        Ws,
        $s = function (t) {
          var n = t.id,
            r = t.stream,
            i = t.zoom,
            a = t.size,
            o = (0, e.useRef)(),
            l = (0, e.useRef)();
          (0, e.useEffect)(function () {
            o.current.srcObject = r;
          }, []);
          var u = {
            height: a.height,
            width: a.width,
            transform: "scale(" + (1 + i) + ")",
          };
          return (0, m.jsx)("div", {
            className: "video",
            ref: l,
            children: (0, m.jsx)("video", {
              id: n,
              ref: o,
              autoPlay: !0,
              playsInline: !0,
              muted: !0,
              style: u,
              children: "Your browser doesn't support video",
            }),
          });
        },
        Ks = ["title", "titleId"];
      function Ys() {
        return (
          (Ys =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Ys.apply(this, arguments)
        );
      }
      function Qs(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Xs(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Qs(t, Ks);
        return e.createElement(
          "svg",
          Ys(
            {
              width: 32,
              height: 38,
              viewBox: "0 0 32 38",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          qs ||
            (qs = e.createElement("path", {
              opacity: 0.7,
              d: "M21.3337 32H10.667L16.0013 37.3333L21.3337 32Z",
              fill: "current",
            })),
          Ws ||
            (Ws = e.createElement("path", {
              opacity: 0.9,
              d: "M0 9.6C0 6.23969 0 4.55953 0.653961 3.27606C1.2292 2.14708 2.14708 1.2292 3.27606 0.653961C4.55953 0 6.23969 0 9.6 0H22.4C25.7603 0 27.4405 0 28.7239 0.653961C29.8529 1.2292 30.7708 2.14708 31.346 3.27606C32 4.55953 32 6.23969 32 9.6V22.4C32 25.7603 32 27.4405 31.346 28.7239C30.7708 29.8529 29.8529 30.7708 28.7239 31.346C27.4405 32 25.7603 32 22.4 32H9.6C6.23969 32 4.55953 32 3.27606 31.346C2.14708 30.7708 1.2292 29.8529 0.653961 28.7239C0 27.4405 0 25.7603 0 22.4V9.6Z",
              fill: "current",
            }))
        );
      }
      var Js = e.forwardRef(Xs);
      n.p;
      var ec = function (e) {
        var t = e.position,
          n = e.size,
          r = e.id,
          i = e.color,
          a = h(function (e) {
            return e.settings.selectedTarget;
          });
        return (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsx)(Js, {
              width: n,
              height: n,
              x: t.x - n / 2,
              y: t.y - n,
              fill: i,
            }),
            a === r &&
              (0, m.jsx)("circle", {
                cx: t.x,
                cy: t.y - n - 10,
                r: 3,
                fill: i,
              }),
          ],
        });
      };
      var tc = function (e) {
        var t = e.pos,
          n = e.width,
          r = e.height,
          i = e.opacity,
          a = e.stroke,
          o = e.color,
          l = e.scale,
          u = Math.max(n / 3, 1),
          s = Math.min(u / 2, r / 3),
          c = [
            { x1: t.x - 1 / l, y1: t.y, x2: t.x + u, y2: t.y },
            { x1: t.x + n + 1 / l, y1: t.y, x2: t.x + n - u, y2: t.y },
            { x1: t.x - 1 / l, y1: t.y + r, x2: t.x + u, y2: t.y + r },
            { x1: t.x + n + 1 / l, y1: t.y + r, x2: t.x + n - u, y2: t.y + r },
            { x1: t.x, y1: t.y, x2: t.x, y2: t.y + s },
            { x1: t.x, y1: t.y + r, x2: t.x, y2: t.y + r - s },
            { x1: t.x + n, y1: t.y, x2: t.x + n, y2: t.y + s },
            { x1: t.x + n, y1: t.y + r, x2: t.x + n, y2: t.y + r - s },
          ];
        return (0, m.jsx)(m.Fragment, {
          children:
            c &&
            c.map(function (e, t) {
              return (0,
              m.jsx)("line", { x1: e.x1, y1: e.y1, x2: e.x2, y2: e.y2, strokeWidth: a / l, strokeOpacity: i, stroke: o }, t);
            }),
        });
      };
      var nc = function (e) {
        var t = e.name,
          n = e.position,
          r = e.size;
        return xa(t, r, n.x - r / 2, n.y - r);
      };
      var rc = function (e) {
        var t = e.id,
          n = e.pos,
          r = e.color,
          i = e.distance,
          a = e.size,
          o = e.cameraSource,
          l = h(function (e) {
            return e.settings.developerMode;
          });
        return (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsx)("text", {
              x: n.x,
              y: n.y + a,
              fontSize: a,
              fill: r,
              textAnchor: "middle",
              children: (0, m.jsx)(Ia, { value: i, unit: Rr.METERS }),
            }),
            l &&
              (0, m.jsxs)(m.Fragment, {
                children: [
                  (0, m.jsx)("text", {
                    x: n.x,
                    y: n.y + 2 * a,
                    fontSize: a,
                    fill: r,
                    textAnchor: "middle",
                    children: t,
                  }),
                  (0, m.jsx)("text", {
                    x: n.x,
                    y: n.y + 3 * a,
                    fontSize: a,
                    fill: r,
                    textAnchor: "middle",
                    children: o,
                  }),
                ],
              }),
          ],
        });
      };
      var ic,
        ac,
        oc = function (e) {
          var t = e.id,
            n = e.name,
            r = e.threat,
            i = e.position,
            a = e.width,
            o = e.height,
            l = e.distance,
            u = e.scale,
            s = e.predicted,
            c = e.cameraSource,
            f = h(function (e) {
              return e.socket.settings;
            }),
            d = tn(f, r),
            p = h(function (e) {
              return e.settings.developerMode;
            });
          return (0, m.jsxs)("svg", {
            className: "streamTargetClose",
            children: [
              (0, m.jsx)(ec, {
                position: { x: i.x + a / 2, y: i.y },
                id: t,
                size: 32 / u,
                color: s && p ? Jt("--surface1") : d,
              }),
              (0, m.jsx)(nc, {
                name: n,
                position: { x: i.x + a / 2, y: i.y - 6 / u },
                size: 24 / u,
                color: d,
              }),
              (0, m.jsx)(tc, {
                pos: i,
                width: a,
                height: o,
                opacity: 1,
                color: d,
                stroke: 2,
                scale: u,
              }),
              (0, m.jsx)(rc, {
                id: t,
                pos: { x: i.x + a / 2, y: i.y + o },
                color: d,
                distance: l,
                size: 12 / u,
                cameraSource: c,
              }),
            ],
          });
        },
        lc = ["title", "titleId"];
      function uc() {
        return (
          (uc =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          uc.apply(this, arguments)
        );
      }
      function sc(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function cc(t, n) {
        var r = t.title,
          i = t.titleId,
          a = sc(t, lc);
        return e.createElement(
          "svg",
          uc(
            {
              width: 49,
              height: 33,
              viewBox: "0 0 49 33",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          ic ||
            (ic = e.createElement("path", {
              d: "M8.78461 28.2812L8.78461 4.28129L0.784606 16.2835L8.78461 28.2812Z",
              fill: "current",
            })),
          ac ||
            (ac = e.createElement("path", {
              d: "M16.7846 9.88125C16.7846 6.52094 16.7846 4.84078 17.4386 3.55731C18.0138 2.42833 18.9317 1.51045 20.0607 0.935211C21.3441 0.28125 23.0243 0.28125 26.3846 0.28125H39.1846C42.5449 0.28125 44.2251 0.28125 45.5086 0.935211C46.6375 1.51045 47.5554 2.42833 48.1306 3.55731C48.7846 4.84078 48.7846 6.52094 48.7846 9.88125V22.6812C48.7846 26.0416 48.7846 27.7217 48.1306 29.0052C47.5554 30.1342 46.6375 31.052 45.5086 31.6273C44.2251 32.2812 42.5449 32.2812 39.1846 32.2812H26.3846C23.0243 32.2812 21.3441 32.2812 20.0607 31.6273C18.9317 31.052 18.0138 30.1342 17.4386 29.0052C16.7846 27.7217 16.7846 26.0416 16.7846 22.6812V9.88125Z",
              fill: "current",
            }))
        );
      }
      var fc,
        dc,
        pc = e.forwardRef(cc),
        hc = (n.p, ["title", "titleId"]);
      function mc() {
        return (
          (mc =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          mc.apply(this, arguments)
        );
      }
      function vc(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function gc(t, n) {
        var r = t.title,
          i = t.titleId,
          a = vc(t, hc);
        return e.createElement(
          "svg",
          mc(
            {
              width: 32,
              height: 49,
              viewBox: "0 0 32 49",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          fc ||
            (fc = e.createElement("path", {
              d: "M4 8.28125L28 8.28125L15.9977 0.281249L4 8.28125Z",
              fill: "current",
            })),
          dc ||
            (dc = e.createElement("path", {
              d: "M0 25.8813C0 22.5209 0 20.8408 0.653961 19.5573C1.2292 18.4283 2.14708 17.5105 3.27606 16.9352C4.55953 16.2812 6.23969 16.2812 9.6 16.2812H22.4C25.7603 16.2812 27.4405 16.2812 28.7239 16.9352C29.8529 17.5105 30.7708 18.4283 31.346 19.5573C32 20.8408 32 22.5209 32 25.8813V38.6812C32 42.0416 32 43.7217 31.346 45.0052C30.7708 46.1342 29.8529 47.052 28.7239 47.6273C27.4405 48.2812 25.7603 48.2812 22.4 48.2812H9.6C6.23969 48.2812 4.55953 48.2812 3.27606 47.6273C2.14708 47.052 1.2292 46.1342 0.653961 45.0052C0 43.7217 0 42.0416 0 38.6812V25.8813Z",
              fill: "current",
            }))
        );
      }
      var yc = e.forwardRef(gc);
      n.p;
      var bc = function (e) {
        var t = e.position,
          n = e.size,
          r = e.color,
          i = e.opacity,
          a = e.visibleTarget,
          o = e.vertical,
          l = e.left;
        return (0, m.jsx)(m.Fragment, {
          children: o
            ? (0, m.jsx)(yc, {
                className: a.visibleBottom ? "" : "bottomOutOfBound",
                width: n,
                height: n,
                x: t.x - n / 2,
                y: t.y - n,
                fill: r,
                opacity: i,
              })
            : (0, m.jsx)(pc, {
                className: l ? "" : "rightOutOfBound",
                width: n,
                height: n,
                x: t.x - n / 2,
                y: t.y - n / 2,
                fill: r,
                opacity: i,
              }),
        });
      };
      var wc = function (e) {
        var t,
          n,
          r = e.id,
          i = e.name,
          a = e.position,
          o = e.threat,
          l = e.scale,
          u = e.targetAngle,
          s = e.cameraAngle,
          c = e.visibleTarget,
          f = e.safeArea,
          d = e.menuViewSizes,
          p = e.width,
          v = e.height,
          g = h(function (e) {
            return e.socket.settings;
          }),
          y = tn(g, o),
          b = p / 2,
          w = v / 2,
          C = 4 / l,
          x = 20 / l,
          E = 12 / l,
          S = 2 * C,
          O = 8 / l,
          j = 5 / l,
          k = 11 / l,
          _ =
            (!c.visibleTop || !c.visibleBottom) &&
            c.visibleLeft &&
            c.visibleRight;
        return (
          (s < -Math.PI / 2 && s > Math.PI / 2) ||
            (s > Math.PI / 2
              ? u < -Math.PI / 2 && (u += 2 * Math.PI)
              : s < -Math.PI / 2 && u > Math.PI / 2 && (u -= 2 * Math.PI)),
          s - Math.PI / 2 < u &&
            u < s + Math.PI / 2 &&
            ((t = (function () {
              var e = a.x,
                t = a.y;
              if (c.visibleRight && c.visibleLeft)
                if (c.visibleTop)
                  c.visibleBottom ||
                    (a.x + b < f.left + d.bottomLeft.width + S
                      ? ((e = a.x + b),
                        (t = f.bottom - S - d.bottomLeft.height))
                      : a.x + b > f.right - d.bottomRight.width - S
                      ? ((e = a.x + b),
                        (t = f.bottom - S - d.bottomRight.height))
                      : ((e = a.x + b), (t = f.bottom - C)));
                else {
                  var n = 40 / l;
                  a.x + b < f.left + d.topLeft.width + S
                    ? ((e = a.x + b), (t = f.top + S + d.topLeft.height + n))
                    : a.x + b > f.right - d.topRight.width - S
                    ? ((e = a.x + b), (t = f.top + S + d.topRight.height + n))
                    : ((e = a.x + b), (t = f.top + C + n));
                }
              else
                u < s
                  ? a.y + w + j < f.top + d.topLeft.height + S &&
                    a.y + w + j > f.top
                    ? ((e = f.left + x + d.topLeft.width + S), (t = a.y + w))
                    : a.y + w - j > f.bottom - d.bottomLeft.height - S &&
                      a.y + w - j < f.bottom
                    ? ((e = f.left + x + d.bottomLeft.width + S), (t = a.y + w))
                    : a.y - x + w < f.top
                    ? ((e = f.left + x + d.topLeft.width + S),
                      (t = f.top + 31 / l))
                    : a.y + x + w > f.bottom
                    ? ((e = f.left + x + d.bottomLeft.width + S),
                      (t = f.bottom - 30 / l))
                    : ((e = f.left + x + C), (t = a.y + w))
                  : a.y + w + j < f.top + d.topRight.height + S &&
                    a.y + w + j > f.top
                  ? ((e = f.right - d.topRight.width - x - S), (t = a.y + w))
                  : a.y + w - j > f.bottom - d.bottomRight.height - S &&
                    a.y + w - j < f.bottom
                  ? ((e = f.right - x - d.bottomRight.width - S), (t = a.y + w))
                  : a.y - x + w < f.top
                  ? ((e = f.right - x - d.topRight.width - S),
                    (t = f.top + 31 / l))
                  : a.y + x + w > f.bottom
                  ? ((e = f.right - x - d.bottomRight.width - S),
                    (t = f.bottom - 30 / l))
                  : ((e = f.right - x - C), (t = a.y + w));
              return { x: e, y: t };
            })()),
            (n = (function () {
              var e = a.x,
                t = a.y,
                n = 27 / l;
              if (c.visibleRight && c.visibleLeft)
                if (c.visibleBottom) {
                  if (!c.visibleTop) {
                    var r = 39 / l;
                    a.x + b < f.left + d.topLeft.width + S
                      ? ((e = a.x + b), (t = f.top + S + d.topLeft.height + r))
                      : a.x + b > f.right - d.topRight.width - S
                      ? ((e = a.x + b), (t = f.top + S + d.topRight.height + r))
                      : ((e = a.x + b), (t = f.top + C + r));
                  }
                } else {
                  var i = 15 / l;
                  a.x + b < f.left + d.bottomLeft.width + S
                    ? ((e = a.x + b),
                      (t = f.bottom - S - d.bottomLeft.height - i))
                    : a.x + b > f.right - d.bottomRight.width - S
                    ? ((e = a.x + b),
                      (t = f.bottom - S - d.bottomRight.height - i))
                    : ((e = a.x + b), (t = f.bottom - C - i));
                }
              else
                u < s
                  ? a.y + w + j < f.top + d.topLeft.height + S &&
                    a.y + w + j > f.top
                    ? ((e = f.left + S + d.topLeft.width + n),
                      (t = a.y + w + E))
                    : a.y + w - j > f.bottom - d.bottomLeft.height - S &&
                      a.y + w - j < f.bottom
                    ? ((e = f.left + S + d.bottomLeft.width + n),
                      (t = a.y + E + w))
                    : a.y - x + w < f.top
                    ? ((e = f.left + S + d.topLeft.width + n),
                      (t = f.top + x + E + k))
                    : a.y + x + w > f.bottom
                    ? ((e = f.left + S + d.bottomLeft.width + n),
                      (t = f.bottom - O - k))
                    : ((e = f.left + C + n), (t = a.y - O + w + x))
                  : a.y + w + j < f.top + d.topRight.height + S &&
                    a.y + w + j > f.top
                  ? ((e = f.right - S - d.topRight.width - n),
                    (t = a.y + w + E))
                  : a.y + w - j > f.bottom - d.bottomRight.height - S &&
                    a.y + w - j < f.bottom
                  ? ((e = f.right - S - d.bottomRight.width - n),
                    (t = a.y + w + E))
                  : a.y - x + w < f.top
                  ? ((e = f.right - S - d.topRight.width - n),
                    (t = f.top + x + E + k))
                  : a.y + x + w > f.bottom
                  ? ((e = f.right - S - d.bottomRight.width - n),
                    (t = f.bottom - O - k))
                  : ((e = f.right - C - n), (t = a.y - O + w + x));
              return { x: e, y: t };
            })())),
          (0, m.jsx)("svg", {
            className: "streamTargetFar",
            children:
              s - Math.PI / 2 < u &&
              u < s + Math.PI / 2 &&
              (0, m.jsxs)(m.Fragment, {
                children: [
                  (0, m.jsx)(bc, {
                    id: r,
                    position: { x: t.x, y: t.y },
                    size: 40 / l,
                    color: y,
                    vertical: _,
                    left: u < s,
                    visibleTarget: c,
                    opacity: 0.7,
                  }),
                  (0, m.jsx)(nc, {
                    id: r,
                    name: i,
                    position: { x: n.x, y: n.y },
                    size: 24 / l,
                    color: y,
                  }),
                ],
              }),
          })
        );
      };
      var Cc = function (e) {
        var t = e.canvas,
          n = e.id,
          r = e.name,
          i = e.insideFoV,
          a = e.threat,
          o = e.rect,
          l = e.distance,
          u = e.scale,
          s = e.safeArea,
          c = e.targetAngle,
          f = e.cameraAngle,
          d = e.menuViewSizes,
          p = e.predicted,
          h = e.cameraSource,
          v = o ? Math.min(o[0], o[2]) * t.width : 0,
          g = o ? Math.min(o[1], o[3]) * t.height : 0,
          y = o ? Math.abs(o[2] - o[0]) * t.width : 0,
          b = o ? Math.abs(o[1] - o[3]) * t.height : 0,
          w = t.width / 2,
          C = (function () {
            var e = y / 2,
              t = b / 2;
            return {
              visibleTop: !!i && g + t > s.top,
              visibleRight: i ? v + e < s.right : !(v > w),
              visibleBottom: !!i && g + t < s.bottom,
              visibleLeft: i ? v + e > s.left : !(v < w),
            };
          })(),
          x =
            C.visibleTop && C.visibleRight && C.visibleBottom && C.visibleLeft;
        return (0, m.jsx)(m.Fragment, {
          children: x
            ? (0, m.jsx)(oc, {
                id: n,
                name: r,
                position: { x: v, y: g },
                width: y,
                height: b,
                distance: l,
                threat: a,
                scale: u,
                predicted: p,
                cameraSource: h,
              })
            : (0, m.jsx)(wc, {
                id: n,
                name: r,
                position: { x: v, y: g },
                width: y,
                height: b,
                threat: a,
                scale: u,
                targetAngle: c,
                cameraAngle: f,
                visibleTarget: C,
                safeArea: s,
                menuViewSizes: d,
              }),
        });
      };
      var xc = function (e) {
          var t = e.streamZoom,
            n = e.thermalStream,
            r = e.colorStream,
            i = e.safeArea,
            a = e.canvas,
            o = e.scale,
            l = e.menuViewSizes,
            u = h(function (e) {
              return e.socket.targets;
            }),
            s = h(function (e) {
              return e.socket.camera;
            }),
            c = h(function (e) {
              return e.socket.settings;
            }),
            f = a.width,
            d = a.height;
          return (0, m.jsx)(m.Fragment, {
            children:
              u &&
              u.map(function (e) {
                if (
                  !e.predicted ||
                  !e.inside_fov ||
                  (c && c["display-tracked-predictions"].value)
                )
                  return (0, m.jsx)(
                    Cc,
                    {
                      canvas: { width: f, height: d },
                      id: e.id,
                      name: e.name,
                      insideFoV: e.inside_fov,
                      rect: r
                        ? t < 3
                          ? e.rects.RGBwFoV
                          : e.rects.RGBnFoV
                        : n
                        ? t < 3
                          ? e.rects.TwFoV
                          : e.rects.TnFoV
                        : null,
                      threat: e.alarmCertainty,
                      distance: Fi(e.pos),
                      scale: o,
                      safeArea: i,
                      targetAngle: Ui(e.pos),
                      cameraAngle: s ? Sa(s.pan) : 0,
                      menuViewSizes: l,
                      predicted: e.predicted,
                      cameraSource: e.dominant_sensor,
                    },
                    e.name
                  );
              }),
          });
        },
        Ec = !1,
        Sc = !1,
        Oc = null,
        jc = null,
        kc = 0;
      function _c(e) {
        Ec = e;
      }
      function Nc() {
        return Ec;
      }
      function Tc(e) {
        Sc = e;
      }
      function Lc() {
        return Sc;
      }
      function Rc(e) {
        Oc = e;
      }
      function Ic() {
        return Oc;
      }
      function Mc() {
        return jc;
      }
      function Pc(e) {
        kc = e;
      }
      var Ac = function (t) {
          var n = t.thermalStream,
            r = t.colorStream,
            i = t.zoomAction,
            a = t.style,
            o = t.zoom,
            l =
              (h(function (e) {
                return e.socket.settings;
              }),
              Li((0, e.useState)(0), 2)),
            u = l[0],
            s = l[1],
            c = Li((0, e.useState)(0), 2),
            f = c[0],
            d = c[1],
            p = Li((0, e.useState)(0), 2),
            v = p[0],
            g = p[1],
            y = Li((0, e.useState)(0), 2),
            b = y[0],
            w = y[1],
            C = (0, e.useRef)(null),
            x = o >= 3 ? o - 2 : o + 1,
            E = document.getElementsByClassName("menuView-top"),
            S = document.getElementsByClassName("menuView-bottom"),
            O = function (e, t) {
              var n = 0,
                r = 0;
              return (
                "left" === t
                  ? ((n = e[0].children[0].clientWidth / x),
                    (r = e[0].children[0].clientHeight / x))
                  : "right" === t &&
                    ((n = e[0].children[1].clientWidth / x),
                    (r = e[0].children[1].clientHeight / x)),
                { width: n, height: r }
              );
            },
            j = {
              topLeft: O(E, "left"),
              topRight: O(E, "right"),
              bottomLeft: O(S, "left"),
              bottomRight: O(S, "right"),
            };
          function k() {
            C.current &&
              (s(C.current.clientHeight),
              d(C.current.clientWidth),
              g(C.current.parentElement.getBoundingClientRect().y),
              w(C.current.parentElement.getBoundingClientRect().x));
          }
          (0, e.useEffect)(function () {
            return k();
          }),
            (0, e.useEffect)(function () {
              window.addEventListener("resize", k);
            }, []);
          var _ = {
              height: a.height,
              width: a.width,
              marginLeft: a.marginLeft,
              marginTop: a.marginTop,
              transform: "scale(" + x + ")",
            },
            N = (function (e, t, n, r, i) {
              var a = t.height / 2,
                o = a / e,
                l = n / e,
                u = r / e,
                s = 1 === e,
                c = s ? u : n - l + u;
              return {
                top: a - o + i / e,
                right: s ? t.width - u : n + l - u,
                bottom: a + o,
                left: c,
              };
            })(
              x,
              { width: f, height: u },
              f / 2,
              Math.abs(a.marginLeft),
              Math.abs(a.marginTop)
            );
          function T(e, t) {
            var n = Math.round(((e - b) / f) * 1e3) / 1e3,
              r = Math.round(((t + v) / u) * 1e3) / 1e3;
            jc = {
              x: n >= 0 ? (n <= 1 ? n : 1) / (o + 1) : 0,
              y: r >= 0 ? (r <= 1 ? r : 1) / (o + 1) : 0,
            };
          }
          function L(e, t, n, r) {
            return Math.hypot((e - n) / f, (t - r) / u);
          }
          function R(e, t, n, r, a) {
            if (1 === a) !0 === Lc() && T(e, t);
            else if (2 === a) {
              var l = L(e, t, n, r),
                u = Math.min(Math.max(o + 5 * (l - kc), 0), 1e3);
              Pc(l), i(Math.min(u, 4));
            }
          }
          return (0, m.jsx)("svg", {
            className: "streamOverlay",
            style: _,
            ref: C,
            onTouchStart: function (e) {
              var t, n, r, i, a;
              (t = e.targetTouches[0].clientX),
                (n = e.targetTouches[0].clientY),
                (r =
                  2 === e.targetTouches.length
                    ? e.targetTouches[1].clientX
                    : null),
                (i =
                  2 === e.targetTouches.length
                    ? e.targetTouches[1].clientY
                    : null),
                1 === (a = e.targetTouches.length)
                  ? setTimeout(function () {
                      Nc()
                        ? console.log("Pinch started before 100ms passed")
                        : (Tc(!0),
                          T(t, n),
                          ai.dispatch(
                            tr(ne(ne({}, Mc()), {}, { state: "start" }))
                          ),
                          null !== Ic() && (clearInterval(Ic()), Rc(null)),
                          Rc(
                            setInterval(function () {
                              Nc() ||
                                ai.dispatch(
                                  tr(ne(ne({}, Mc()), {}, { state: null }))
                                );
                            }, 200)
                          ));
                    }, 100)
                  : 2 === a && (_c(!0), Pc(L(t, n, r, i)));
            },
            onTouchMove: function (e) {
              R(
                e.touches[0].clientX,
                e.touches[0].clientY,
                2 === e.touches.length ? e.touches[1].clientX : null,
                2 === e.touches.length ? e.touches[1].clientY : null,
                e.touches.length
              );
            },
            onTouchEnd: function (e) {
              var t, n, r;
              (t = e.changedTouches[0].clientX),
                (n = e.changedTouches[0].clientY),
                (r = e.targetTouches.length),
                (null === Ic() && !0 !== Lc()) ||
                  (T(t, n),
                  ai.dispatch(tr(ne(ne({}, Mc()), {}, { state: "end" }))),
                  clearInterval(Ic()),
                  Rc(null),
                  Tc(!1)),
                0 === r && _c(!1);
            },
            children: (0, m.jsx)(xc, {
              streamZoom: o,
              thermalStream: n,
              colorStream: r,
              safeArea: N,
              canvas: { width: f, height: u },
              scale: x,
              menuViewSizes: j,
            }),
          });
        },
        Dc = function (e) {
          var t = e.style,
            n = {
              height: t.height,
              width: t.width,
              marginLeft: t.marginLeft,
              marginTop: t.marginTop,
            };
          return (0, m.jsx)("svg", {
            className: "streamLowLightOverlay",
            style: n,
            children: (0, m.jsx)("rect", { x: 0, y: 0, style: n }),
          });
        };
      var Vc,
        Bc = function (e) {
          var t = e.thermalStream,
            n = e.colorStream,
            r = e.style,
            i = e.streamZoom,
            a = e.zoomAction,
            o = h(function (e) {
              return e.socket.streamSources;
            }),
            l =
              h(function (e) {
                return e.settings.theme;
              }) || Ar;
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsxs)("div", {
                className: "stream",
                style: r,
                children: [
                  i < 3 &&
                    o &&
                    n &&
                    (0, m.jsx)($s, { stream: o.wideColor, zoom: i, size: r }),
                  i >= 3 &&
                    o &&
                    n &&
                    (0, m.jsx)($s, {
                      stream: o.narrowColor,
                      zoom: i - 3,
                      size: r,
                    }),
                  i < 3 &&
                    o &&
                    t &&
                    (0, m.jsx)($s, { stream: o.wideThermal, zoom: i, size: r }),
                  i >= 3 &&
                    o &&
                    t &&
                    (0, m.jsx)($s, {
                      stream: o.narrowThermal,
                      zoom: i - 3,
                      size: r,
                    }),
                ],
              }),
              l === Dr && t && (0, m.jsx)(Dc, { style: r }),
              o &&
                (0, m.jsx)(Ac, {
                  thermalStream: t,
                  colorStream: n,
                  zoomAction: a,
                  zoom: i,
                  style: r,
                }),
            ],
          });
        },
        Hc = ["title", "titleId"];
      function Fc() {
        return (
          (Fc =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Fc.apply(this, arguments)
        );
      }
      function Uc(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function zc(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Uc(t, Hc);
        return e.createElement(
          "svg",
          Fc(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Vc ||
            (Vc = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.0459 3.55775C12.2201 3.86679 12.1965 4.24932 11.9856 4.53459C11.2281 5.55938 10.8636 6.82202 10.9584 8.09285C11.0532 9.36367 11.6009 10.5583 12.502 11.4594C13.4031 12.3605 14.5977 12.9082 15.8686 13.003C17.1394 13.0978 18.402 12.7333 19.4268 11.9758C19.7121 11.7649 20.0946 11.7413 20.4037 11.9155C20.7127 12.0897 20.8906 12.4291 20.858 12.7824C20.7025 14.4652 20.0709 16.069 19.0371 17.4061C18.0034 18.7431 16.6102 19.7581 15.0207 20.3322C13.4311 20.9064 11.7109 21.016 10.0614 20.6482C8.41184 20.2804 6.90116 19.4504 5.7061 18.2553C4.51105 17.0603 3.68106 15.5496 3.31325 13.9C2.94544 12.2505 3.05502 10.5303 3.62918 8.94074C4.20333 7.3512 5.21831 5.95805 6.55534 4.9243C7.89238 3.89055 9.49617 3.25896 11.1791 3.10344C11.5323 3.0708 11.8718 3.2487 12.0459 3.55775ZM9.56024 5.29739C8.87876 5.54659 8.23611 5.90005 7.65634 6.34831C6.58978 7.17293 5.78013 8.28426 5.32212 9.55225C4.86412 10.8202 4.7767 12.1924 5.07011 13.5083C5.36351 14.8241 6.0256 16.0292 6.9789 16.9825C7.9322 17.9358 9.13727 18.5979 10.4531 18.8913C11.769 19.1847 13.1412 19.0973 14.4092 18.6393C15.6772 18.1813 16.7885 17.3716 17.6131 16.3051C18.0614 15.7253 18.4148 15.0827 18.664 14.4012C17.7332 14.7344 16.7358 14.8727 15.7347 14.798C14.0339 14.6712 12.4352 13.9381 11.2292 12.7322C10.0233 11.5262 9.29022 9.92747 9.16339 8.2267C9.08873 7.22557 9.22705 6.22824 9.56024 5.29739Z",
              fill: "white",
            }))
        );
      }
      var Gc,
        Zc = e.forwardRef(zc),
        qc = (n.p, ["title", "titleId"]);
      function Wc() {
        return (
          (Wc =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Wc.apply(this, arguments)
        );
      }
      function $c(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Kc(t, n) {
        var r = t.title,
          i = t.titleId,
          a = $c(t, qc);
        return e.createElement(
          "svg",
          Wc(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Gc ||
            (Gc = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11.9998 1.82031C12.4968 1.82031 12.8998 2.22326 12.8998 2.72031V4.40738C12.8998 4.90443 12.4968 5.30737 11.9998 5.30737C11.5027 5.30737 11.0998 4.90443 11.0998 4.40738V2.72031C11.0998 2.22326 11.5027 1.82031 11.9998 1.82031ZM12 8.68131C10.1677 8.68131 8.6823 10.1667 8.6823 11.999C8.6823 13.8313 10.1677 15.3166 12 15.3166C13.8322 15.3166 15.3176 13.8313 15.3176 11.999C15.3176 10.1667 13.8322 8.68131 12 8.68131ZM6.8823 11.999C6.8823 9.17257 9.17356 6.88131 12 6.88131C14.8264 6.88131 17.1176 9.17257 17.1176 11.999C17.1176 14.8254 14.8264 17.1166 12 17.1166C9.17356 17.1166 6.8823 14.8254 6.8823 11.999ZM12.8998 19.5907C12.8998 19.0936 12.4968 18.6907 11.9998 18.6907C11.5027 18.6907 11.0998 19.0936 11.0998 19.5907V21.2777C11.0998 21.7748 11.5027 22.1777 11.9998 22.1777C12.4968 22.1777 12.8998 21.7748 12.8998 21.2777V19.5907ZM4.80096 4.80051C5.15243 4.44904 5.72228 4.44904 6.07375 4.80051L7.27157 5.99833C7.62304 6.3498 7.62304 6.91965 7.27157 7.27112C6.9201 7.62259 6.35025 7.62259 5.99878 7.27112L4.80096 6.07331C4.44949 5.72184 4.44949 5.15199 4.80096 4.80051ZM18.0009 16.7271C17.6494 16.3756 17.0795 16.3756 16.7281 16.7271C16.3766 17.0785 16.3766 17.6484 16.7281 17.9999L17.9259 19.1977C18.2773 19.5491 18.8472 19.5491 19.1987 19.1977C19.5501 18.8462 19.5501 18.2764 19.1987 17.9249L18.0009 16.7271ZM1.82117 11.9992C1.82117 11.5021 2.22411 11.0992 2.72117 11.0992H4.40823C4.90529 11.0992 5.30823 11.5021 5.30823 11.9992C5.30823 12.4962 4.90529 12.8992 4.40823 12.8992H2.72117C2.22411 12.8992 1.82117 12.4962 1.82117 11.9992ZM19.5913 11.0992C19.0942 11.0992 18.6913 11.5021 18.6913 11.9992C18.6913 12.4962 19.0942 12.8992 19.5913 12.8992H21.2783C21.7754 12.8992 22.1783 12.4962 22.1783 11.9992C22.1783 11.5021 21.7754 11.0992 21.2783 11.0992H19.5913ZM7.27157 16.7271C7.62304 17.0785 7.62304 17.6484 7.27157 17.9999L6.07375 19.1977C5.72228 19.5491 5.15243 19.5491 4.80096 19.1977C4.44949 18.8462 4.44949 18.2764 4.80096 17.9249L5.99878 16.7271C6.35025 16.3756 6.9201 16.3756 7.27157 16.7271ZM19.1987 6.07331C19.5501 5.72184 19.5501 5.15199 19.1987 4.80051C18.8472 4.44904 18.2773 4.44904 17.9259 4.80051L16.7281 5.99833C16.3766 6.3498 16.3766 6.91965 16.7281 7.27112C17.0795 7.62259 17.6494 7.62259 18.0009 7.27112L19.1987 6.07331Z",
              fill: "white",
            }))
        );
      }
      var Yc,
        Qc = e.forwardRef(Kc),
        Xc = (n.p, ["title", "titleId"]);
      function Jc() {
        return (
          (Jc =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Jc.apply(this, arguments)
        );
      }
      function ef(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function tf(t, n) {
        var r = t.title,
          i = t.titleId,
          a = ef(t, Xc);
        return e.createElement(
          "svg",
          Jc(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Yc ||
            (Yc = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.32484 4.74414C9.15592 4.74414 8.99787 4.79068 8.86281 4.87163L4.19713 7.53773C3.91671 7.69797 3.74365 7.99618 3.74365 8.31915V19.0192C3.74365 19.34 3.91443 19.6366 4.19192 19.7976C4.4694 19.9586 4.81162 19.9598 5.09018 19.8006L9.35324 17.3646L14.2548 19.8154C14.3802 19.8817 14.5232 19.9193 14.675 19.9193C14.8451 19.9193 15.0041 19.8721 15.1397 19.7902L19.8027 17.1256C20.0831 16.9654 20.2562 16.6671 20.2562 16.3442V5.64414C20.2562 5.32332 20.0854 5.02675 19.8079 4.86572C19.5305 4.70469 19.1882 4.70355 18.9097 4.86272L14.6466 7.29876L9.7419 4.8464C9.62076 4.78294 9.48337 4.74626 9.33761 4.74423L9.32484 4.74414ZM15.575 17.4683L18.4562 15.8219V7.195L15.575 8.84139V17.4683ZM13.775 8.87542L10.2248 7.10033V15.7879L13.775 17.563V8.87542ZM5.54365 8.84144L8.42484 7.19505V15.8219L5.54365 17.4683V8.84144Z",
              fill: "white",
            }))
        );
      }
      var nf,
        rf = e.forwardRef(tf),
        af = (n.p, ["title", "titleId"]);
      function of() {
        return (
          (of =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          of.apply(this, arguments)
        );
      }
      function lf(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function uf(t, n) {
        var r = t.title,
          i = t.titleId,
          a = lf(t, af);
        return e.createElement(
          "svg",
          of(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          nf ||
            (nf = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.9 4.99961C12.9 4.50255 12.497 4.09961 12 4.09961C11.5029 4.09961 11.1 4.50255 11.1 4.99961V11.0996H4.99998C4.50292 11.0996 4.09998 11.5026 4.09998 11.9996C4.09998 12.4967 4.50292 12.8996 4.99998 12.8996H11.1V18.9996C11.1 19.4967 11.5029 19.8996 12 19.8996C12.497 19.8996 12.9 19.4967 12.9 18.9996V12.8996H19C19.497 12.8996 19.9 12.4967 19.9 11.9996C19.9 11.5026 19.497 11.0996 19 11.0996H12.9V4.99961Z",
              fill: "white",
            }))
        );
      }
      var sf,
        cf = e.forwardRef(uf),
        ff = (n.p, ["title", "titleId"]);
      function df() {
        return (
          (df =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          df.apply(this, arguments)
        );
      }
      function pf(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function hf(t, n) {
        var r = t.title,
          i = t.titleId,
          a = pf(t, ff);
        return e.createElement(
          "svg",
          df(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          sf ||
            (sf = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M4.09998 11.9996C4.09998 11.5026 4.50292 11.0996 4.99998 11.0996H19C19.497 11.0996 19.9 11.5026 19.9 11.9996C19.9 12.4967 19.497 12.8996 19 12.8996H4.99998C4.50292 12.8996 4.09998 12.4967 4.09998 11.9996Z",
              fill: "white",
            }))
        );
      }
      var mf,
        vf = e.forwardRef(hf),
        gf = (n.p, ["title", "titleId"]);
      function yf() {
        return (
          (yf =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          yf.apply(this, arguments)
        );
      }
      function bf(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function wf(t, n) {
        var r = t.title,
          i = t.titleId,
          a = bf(t, gf);
        return e.createElement(
          "svg",
          yf(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          mf ||
            (mf = e.createElement("path", {
              d: "M4.5 7.6C4.5 7.03995 4.5 6.75992 4.60899 6.54601C4.70487 6.35785 4.85785 6.20487 5.04601 6.10899C5.25992 6 5.53995 6 6.1 6H17.9C18.4601 6 18.7401 6 18.954 6.10899C19.1422 6.20487 19.2951 6.35785 19.391 6.54601C19.5 6.75992 19.5 7.03995 19.5 7.6V16.4C19.5 16.9601 19.5 17.2401 19.391 17.454C19.2951 17.6422 19.1422 17.7951 18.954 17.891C18.7401 18 18.4601 18 17.9 18H6.1C5.53995 18 5.25992 18 5.04601 17.891C4.85785 17.7951 4.70487 17.6422 4.60899 17.454C4.5 17.2401 4.5 16.9601 4.5 16.4V7.6Z",
              fill: "white",
            }))
        );
      }
      var Cf,
        xf = e.forwardRef(wf),
        Ef = (n.p, ["title", "titleId"]);
      function Sf() {
        return (
          (Sf =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Sf.apply(this, arguments)
        );
      }
      function Of(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function jf(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Of(t, Ef);
        return e.createElement(
          "svg",
          Sf(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Cf ||
            (Cf = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M4.60899 6.54601C4.5 6.75992 4.5 7.03995 4.5 7.6V16.4C4.5 16.9601 4.5 17.2401 4.60899 17.454C4.70487 17.6422 4.85785 17.7951 5.04601 17.891C5.25992 18 5.53995 18 6.1 18H11.9C12.4601 18 12.7401 18 12.954 17.891C13.1422 17.7951 13.2951 17.6422 13.391 17.454C13.5 17.2401 13.5 16.9601 13.5 16.4V7.6C13.5 7.03995 13.5 6.75992 13.391 6.54601C13.2951 6.35785 13.1422 6.20487 12.954 6.10899C12.7401 6 12.4601 6 11.9 6H6.1C5.53995 6 5.25992 6 5.04601 6.10899C4.85785 6.20487 4.70487 6.35785 4.60899 6.54601ZM15.109 6.54601C15 6.75992 15 7.03995 15 7.6V10.4C15 10.9601 15 11.2401 15.109 11.454C15.2049 11.6422 15.3578 11.7951 15.546 11.891C15.7599 12 16.0399 12 16.6 12H17.9C18.4601 12 18.7401 12 18.954 11.891C19.1422 11.7951 19.2951 11.6422 19.391 11.454C19.5 11.2401 19.5 10.9601 19.5 10.4V7.6C19.5 7.03995 19.5 6.75992 19.391 6.54601C19.2951 6.35785 19.1422 6.20487 18.954 6.10899C18.7401 6 18.4601 6 17.9 6H16.6C16.0399 6 15.7599 6 15.546 6.10899C15.3578 6.20487 15.2049 6.35785 15.109 6.54601Z",
              fill: "white",
            }))
        );
      }
      var kf,
        _f = e.forwardRef(jf),
        Nf = (n.p, ["title", "titleId"]);
      function Tf() {
        return (
          (Tf =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Tf.apply(this, arguments)
        );
      }
      function Lf(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Rf(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Lf(t, Nf);
        return e.createElement(
          "svg",
          Tf(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          kf ||
            (kf = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.6363 2.27239C12.2849 1.92092 11.715 1.92092 11.3636 2.27239L8.63628 4.99967C8.28481 5.35114 8.28481 5.92099 8.63628 6.27246C8.98776 6.62393 9.5576 6.62393 9.90908 6.27246L11.1 5.08153V11.1H5.08152L6.2727 9.90882C6.62417 9.55735 6.62417 8.9875 6.2727 8.63603C5.92123 8.28456 5.35138 8.28456 4.99991 8.63603L2.27264 11.3633C2.08658 11.5494 1.99901 11.7966 2.00994 12.0403C2.02048 12.2795 2.12439 12.4944 2.28612 12.6496L4.99991 15.3634C5.35138 15.7148 5.92123 15.7148 6.2727 15.3634C6.62417 15.0119 6.62417 14.442 6.2727 14.0906L5.08213 12.9H11.1V18.9179L9.90907 17.7269C9.55759 17.3755 8.98775 17.3755 8.63627 17.7269C8.2848 18.0784 8.2848 18.6483 8.63627 18.9997L11.3492 21.7126C11.5131 21.8842 11.7441 21.991 12 21.991C12.2571 21.991 12.4891 21.8832 12.6531 21.7102L15.3636 18.9997C15.7151 18.6483 15.7151 18.0784 15.3636 17.7269C15.0121 17.3755 14.4423 17.3755 14.0908 17.7269L12.9 18.9178V12.9H18.9177L17.7271 14.0906C17.3757 14.4421 17.3757 15.0119 17.7271 15.3634C18.0786 15.7149 18.6484 15.7149 18.9999 15.3634L21.7123 12.6511C21.8839 12.4872 21.9909 12.2561 21.9909 12C21.9909 11.8886 21.9706 11.7819 21.9336 11.6834C21.8899 11.5667 21.8211 11.4572 21.7272 11.3633L18.9999 8.63607C18.6484 8.28459 18.0786 8.28459 17.7271 8.63607C17.3757 8.98754 17.3757 9.55738 17.7271 9.90886L18.9183 11.1H12.9V5.08163L14.0908 6.27246C14.4423 6.62393 15.0122 6.62393 15.3636 6.27246C15.7151 5.92099 15.7151 5.35114 15.3636 4.99967L12.6363 2.27239Z",
              fill: "white",
            }))
        );
      }
      var If = e.forwardRef(Rf);
      n.p;
      var Mf = function (e) {
        var t = e.handleClick,
          n = e.extraClass,
          r = e.active,
          i = e.children;
        return (0, m.jsx)("button", {
          className:
            "menuViewButton" + (r ? " active" : "") + (n ? " " + n : ""),
          onClick: t,
          children: i,
        });
      };
      var Pf,
        Af = function (e) {
          var t = e.map,
            n = e.isBigView,
            r = e.extraClass,
            i = e.active,
            a =
              h(function (e) {
                return e.menu.bigStreamZoom;
              }) || 0,
            o =
              h(function (e) {
                return e.menu.bigMapZoom;
              }) || 0,
            l =
              h(function (e) {
                return e.menu.smallStreamZoom;
              }) || 0,
            u =
              h(function (e) {
                return e.menu.smallMapZoom;
              }) || 0;
          return (0, m.jsxs)("div", {
            className:
              "menuViewZoomDisplay" + (i ? " active" : "") + (r ? " " + r : ""),
            children: [
              t && n ? "x" + qi(Math.min(o, Hi)) : "",
              !t && n ? "x" + Math.round(Math.min(a, 4) + 1) : "",
              t && !n ? "x" + qi(Math.min(u, Hi)) : "",
              t || n ? "" : "x" + Math.round(Math.min(l, 4) + 1),
            ],
          });
        },
        Df = ["title", "titleId"];
      function Vf() {
        return (
          (Vf =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Vf.apply(this, arguments)
        );
      }
      function Bf(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Hf(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Bf(t, Df);
        return e.createElement(
          "svg",
          Vf(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Pf ||
            (Pf = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.6364 6.63601C12.9878 6.28453 12.9878 5.71469 12.6364 5.36321C12.2849 5.01174 11.7151 5.01174 11.3636 5.36321L5.3643 11.3625C5.3621 11.3647 5.35991 11.3669 5.35773 11.3691C5.1983 11.5315 5.09998 11.7541 5.09998 11.9996C5.09998 12.1216 5.12426 12.238 5.16827 12.3441C5.21219 12.4503 5.27729 12.5497 5.36358 12.636L11.3636 18.636C11.7151 18.9875 12.2849 18.9875 12.6364 18.636C12.9878 18.2845 12.9878 17.7147 12.6364 17.3632L8.17277 12.8996H18C18.497 12.8996 18.9 12.4967 18.9 11.9996C18.9 11.5026 18.497 11.0996 18 11.0996H8.17277L12.6364 6.63601Z",
              fill: "white",
            }))
        );
      }
      var Ff,
        Uf = e.forwardRef(Hf),
        zf = (n.p, ["title", "titleId"]);
      function Gf() {
        return (
          (Gf =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Gf.apply(this, arguments)
        );
      }
      function Zf(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function qf(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Zf(t, zf);
        return e.createElement(
          "svg",
          Gf(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Ff ||
            (Ff = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.3445 5.1679C12.2384 5.1239 12.122 5.09961 12 5.09961C11.7544 5.09961 11.5319 5.19794 11.3695 5.35737C11.3673 5.35954 11.3651 5.36173 11.3629 5.36393L5.36358 11.3632C5.01211 11.7147 5.01211 12.2845 5.36358 12.636C5.71505 12.9875 6.2849 12.9875 6.63637 12.636L11.1 8.1724V17.9996C11.1 18.4967 11.5029 18.8996 12 18.8996C12.497 18.8996 12.9 18.4967 12.9 17.9996V8.1724L17.3636 12.636C17.7151 12.9875 18.2849 12.9875 18.6364 12.636C18.9878 12.2845 18.9878 11.7147 18.6364 11.3632L12.6364 5.36321C12.5501 5.27692 12.4506 5.21182 12.3445 5.1679Z",
              fill: "white",
            }))
        );
      }
      var Wf,
        $f = e.forwardRef(qf),
        Kf = (n.p, ["title", "titleId"]);
      function Yf() {
        return (
          (Yf =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Yf.apply(this, arguments)
        );
      }
      function Qf(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Xf(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Qf(t, Kf);
        return e.createElement(
          "svg",
          Yf(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Wf ||
            (Wf = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.9 5.99961C12.9 5.50255 12.497 5.09961 12 5.09961C11.5029 5.09961 11.1 5.50255 11.1 5.99961V15.8268L6.63637 11.3632C6.2849 11.0117 5.71505 11.0117 5.36358 11.3632C5.01211 11.7147 5.01211 12.2845 5.36358 12.636L11.363 18.6354C11.3651 18.6376 11.3673 18.6397 11.3695 18.6419C11.4544 18.7252 11.5517 18.7884 11.6555 18.8313C11.7592 18.8743 11.8727 18.8985 11.9917 18.8996C11.9944 18.8996 11.9972 18.8996 12 18.8996C12.0027 18.8996 12.0055 18.8996 12.0083 18.8996C12.1273 18.8985 12.2408 18.8743 12.3445 18.8313C12.4506 18.7874 12.5501 18.7223 12.6364 18.636L18.6364 12.636C18.9878 12.2845 18.9878 11.7147 18.6364 11.3632C18.2849 11.0117 17.7151 11.0117 17.3636 11.3632L12.9 15.8268V5.99961Z",
              fill: "white",
            }))
        );
      }
      var Jf,
        ed = e.forwardRef(Xf),
        td = (n.p, ["title", "titleId"]);
      function nd() {
        return (
          (nd =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          nd.apply(this, arguments)
        );
      }
      function rd(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function id(t, n) {
        var r = t.title,
          i = t.titleId,
          a = rd(t, td);
        return e.createElement(
          "svg",
          nd(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Jf ||
            (Jf = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.6364 5.36321C12.2849 5.01174 11.7151 5.01174 11.3636 5.36321C11.0121 5.71468 11.0121 6.28453 11.3636 6.63601L15.8272 11.0996H5.99998C5.50292 11.0996 5.09998 11.5026 5.09998 11.9996C5.09998 12.4967 5.50292 12.8996 5.99998 12.8996H15.8272L11.3636 17.3632C11.0121 17.7147 11.0121 18.2845 11.3636 18.636C11.7151 18.9875 12.2849 18.9875 12.6364 18.636L18.6364 12.636C18.81 12.4624 18.8979 12.2355 18.8999 12.0079C18.9 12.0052 18.9 12.0024 18.9 11.9996C18.9 11.9968 18.9 11.9941 18.8999 11.9913C18.8989 11.8723 18.8747 11.7588 18.8317 11.6551C18.7888 11.5514 18.7256 11.454 18.6422 11.3691C18.6401 11.3669 18.6379 11.3648 18.6358 11.3626L12.6364 5.36321Z",
              fill: "white",
            }))
        );
      }
      var ad = e.forwardRef(id);
      n.p;
      var od = function (t) {
        var n = t.extraClass,
          r = t.holdAction,
          i = t.holdEndAction,
          a = t.clickAction,
          o = t.children,
          l = Li((0, e.useState)(!1), 2),
          u = l[0],
          s = l[1];
        return (0, m.jsx)("button", {
          className: n ? "panTiltButton " + n : "panTiltButton",
          onMouseDown: function () {
            r(), s(!0);
          },
          onMouseLeave: function () {
            u && i();
          },
          onMouseUp: function () {
            i(), s(!1);
          },
          onTouchStart: function () {
            r(), s(!0);
          },
          onTouchEnd: function () {
            i(), s(!1);
          },
          onClick: function () {
            a();
          },
          children: o,
        });
      };
      var ld,
        ud = function (e) {
          var t = e.map,
            n = h(function (e) {
              return e.socket.camera;
            });
          return (0, m.jsx)("div", {
            className: t ? "panTiltPanel withMap" : "panTiltPanel",
            children: (0, m.jsxs)(m.Fragment, {
              children: [
                (0, m.jsx)(od, {
                  holdAction: function () {
                    return ai.dispatch(Gn("NEG"));
                  },
                  holdEndAction: function () {
                    return ai.dispatch(Gn("STOP"));
                  },
                  clickAction: function () {
                    return null;
                  },
                  extraClass: "left",
                  children: (0, m.jsx)(Uf, {}),
                }),
                !t &&
                  (0, m.jsx)(od, {
                    holdAction: function () {
                      return ai.dispatch(zn("POS"));
                    },
                    holdEndAction: function () {
                      return ai.dispatch(zn("STOP"));
                    },
                    clickAction: function () {
                      return null;
                    },
                    extraClass: "up",
                    children: (0, m.jsx)($f, {}),
                  }),
                (0, m.jsx)(od, {
                  holdAction: function () {
                    return null;
                  },
                  holdEndAction: function () {
                    return null;
                  },
                  clickAction: function () {
                    var e = n ? n.pan - 30 : 0;
                    ai.dispatch(Gn(e < -180 ? e + 360 : e));
                  },
                  children: "-30",
                }),
                (0, m.jsx)(od, {
                  holdAction: function () {
                    return ai.dispatch(Gn(0));
                  },
                  holdEndAction: function () {
                    return null;
                  },
                  clickAction: function () {
                    return ai.dispatch(Gn(0));
                  },
                  children: "0",
                }),
                (0, m.jsx)(od, {
                  holdAction: function () {
                    return null;
                  },
                  holdEndAction: function () {
                    return null;
                  },
                  clickAction: function () {
                    var e = n ? n.pan + 30 : 0;
                    ai.dispatch(Gn(e > 180 ? e - 360 : e));
                  },
                  children: "+30",
                }),
                !t &&
                  (0, m.jsx)(od, {
                    holdAction: function () {
                      return ai.dispatch(zn("NEG"));
                    },
                    holdEndAction: function () {
                      return ai.dispatch(zn("STOP"));
                    },
                    clickAction: function () {
                      return null;
                    },
                    extraClass: "down",
                    children: (0, m.jsx)(ed, {}),
                  }),
                (0, m.jsx)(
                  od,
                  ee(
                    {
                      holdAction: function () {
                        return ai.dispatch(Gn("POS"));
                      },
                      holdEndAction: function () {
                        return ai.dispatch(Gn("STOP"));
                      },
                      clickAction: function () {
                        return null;
                      },
                      extraClass: "right",
                      children: "",
                    },
                    "children",
                    (0, m.jsx)(ad, {})
                  )
                ),
              ],
            }),
          });
        },
        sd = ["title", "titleId"];
      function cd() {
        return (
          (cd =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          cd.apply(this, arguments)
        );
      }
      function fd(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function dd(t, n) {
        var r = t.title,
          i = t.titleId,
          a = fd(t, sd);
        return e.createElement(
          "svg",
          cd(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          ld ||
            (ld = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10.6586 4.40828C11.018 4.20592 11.4235 4.09961 11.836 4.09961C12.2485 4.09961 12.654 4.20592 13.0134 4.40828C13.3729 4.61065 13.6741 4.90223 13.888 5.2549L13.8906 5.25918L13.8906 5.25918L20.2431 15.8642L20.2504 15.8766C20.4599 16.2395 20.5708 16.651 20.572 17.07C20.5732 17.4891 20.4646 17.9012 20.2571 18.2652C20.0495 18.6293 19.7503 18.9327 19.3891 19.1452C19.028 19.3578 18.6174 19.472 18.1984 19.4766L18.1885 19.4767V19.4767H5.48349H5.4736L5.4736 19.4766C5.05455 19.472 4.64402 19.3578 4.28285 19.1452C3.92167 18.9327 3.62243 18.6293 3.41491 18.2652C3.20739 17.9012 3.09881 17.4891 3.09999 17.07C3.10116 16.651 3.21204 16.2395 3.4216 15.8766L3.42891 15.8642L9.78141 5.25918L9.78398 5.2549L9.78399 5.2549C9.99792 4.90223 10.2991 4.61065 10.6586 4.40828ZM11.836 5.89961C11.7329 5.89961 11.6315 5.92619 11.5416 5.97678C11.4523 6.02705 11.3774 6.09935 11.324 6.18678L11.323 6.18843L4.9776 16.7816C4.92701 16.8711 4.90027 16.9722 4.89998 17.0751C4.89968 17.1798 4.92683 17.2829 4.97871 17.3739C5.03059 17.4649 5.1054 17.5407 5.19569 17.5939C5.28489 17.6464 5.38612 17.6749 5.48955 17.6767H18.1824C18.2859 17.6749 18.3871 17.6464 18.4763 17.5939C18.5666 17.5407 18.6414 17.4649 18.6933 17.3739C18.7452 17.2829 18.7723 17.1798 18.772 17.0751C18.7717 16.9722 18.745 16.8711 18.6944 16.7816L12.349 6.18843L12.348 6.18678C12.2946 6.09935 12.2196 6.02705 12.1303 5.97678C12.0405 5.92619 11.9391 5.89961 11.836 5.89961ZM11.836 8.67676C12.333 8.67676 12.736 9.0797 12.736 9.57676V12.5768C12.736 13.0738 12.333 13.4768 11.836 13.4768C11.3389 13.4768 10.936 13.0738 10.936 12.5768V9.57676C10.936 9.0797 11.3389 8.67676 11.836 8.67676ZM11.836 14.6768C11.3389 14.6768 10.936 15.0797 10.936 15.5768C10.936 16.0738 11.3389 16.4768 11.836 16.4768H11.8435C12.3405 16.4768 12.7435 16.0738 12.7435 15.5768C12.7435 15.0797 12.3405 14.6768 11.8435 14.6768H11.836Z",
              fill: "white",
            }))
        );
      }
      var pd,
        hd = e.forwardRef(dd),
        md = (n.p, ["title", "titleId"]);
      function vd() {
        return (
          (vd =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          vd.apply(this, arguments)
        );
      }
      function gd(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function yd(t, n) {
        var r = t.title,
          i = t.titleId,
          a = gd(t, md);
        return e.createElement(
          "svg",
          vd(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          pd ||
            (pd = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.1997 4.09961C10.8648 4.09961 9.58461 4.62988 8.64072 5.57378C7.69682 6.51767 7.16655 7.79787 7.16655 9.13274C7.16655 11.4111 6.67955 12.8098 6.24316 13.6099C6.02372 14.0122 5.81213 14.2723 5.66953 14.4228C5.59799 14.4984 5.54319 14.5469 5.51262 14.5724C5.4992 14.5836 5.49042 14.5903 5.48692 14.593C5.16667 14.8151 5.02529 15.219 5.1386 15.5932C5.25353 15.9728 5.60338 16.2324 5.99998 16.2324H18.3994C18.796 16.2324 19.1458 15.9728 19.2608 15.5932C19.3741 15.219 19.2327 14.8151 18.9124 14.593C18.9089 14.5903 18.9002 14.5836 18.8867 14.5724C18.8562 14.5469 18.8014 14.4984 18.7298 14.4228C18.5872 14.2723 18.3756 14.0122 18.1562 13.6099C17.7198 12.8098 17.2328 11.4111 17.2328 9.13274C17.2328 7.79787 16.7025 6.51767 15.7586 5.57378C14.8147 4.62988 13.5345 4.09961 12.1997 4.09961ZM15.4328 9.13274C15.4328 11.646 15.9661 13.3368 16.5547 14.4324H7.84468C8.43321 13.3368 8.96655 11.646 8.96655 9.13274C8.96655 8.27526 9.30718 7.4529 9.91351 6.84657C10.5198 6.24024 11.3422 5.89961 12.1997 5.89961C13.0572 5.89961 13.8795 6.24024 14.4858 6.84657C15.0922 7.4529 15.4328 8.27526 15.4328 9.13274ZM11.7865 17.6359C11.5371 17.206 10.9863 17.0596 10.5564 17.309C10.1264 17.5584 9.98007 18.1091 10.2295 18.5391C10.4297 18.8843 10.7171 19.1708 11.0629 19.3699C11.4086 19.5691 11.8007 19.6739 12.1997 19.6739C12.5987 19.6739 12.9908 19.5691 13.3365 19.3699C13.6823 19.1708 13.9697 18.8843 14.1699 18.5391C14.4193 18.1091 14.273 17.5584 13.843 17.309C13.4131 17.0596 12.8623 17.206 12.6129 17.6359C12.5709 17.7083 12.5106 17.7684 12.4381 17.8102C12.3656 17.8519 12.2834 17.8739 12.1997 17.8739C12.116 17.8739 12.0338 17.8519 11.9613 17.8102C11.8887 17.7684 11.8285 17.7083 11.7865 17.6359Z",
              fill: "white",
            }))
        );
      }
      var bd = e.forwardRef(yd);
      n.p;
      var wd = function () {
        var e = h(function (e) {
            return e.socket.alarmState;
          }),
          t = h(function (e) {
            return e.socket.error;
          });
        return (0, m.jsx)(m.Fragment, {
          children:
            (e === Yt || e === Qt || t) &&
            (0, m.jsxs)("div", {
              className: "alertStatus",
              children: [
                e === Yt
                  ? (0, m.jsxs)("div", {
                      className: "alertStatus-danger",
                      children: [
                        (0, m.jsx)(hd, {}),
                        (0, m.jsxs)("div", {
                          children: [
                            (0, m.jsx)("p", {
                              className: "alertStatus-title",
                              children: (0, m.jsx)(si, {
                                tid: "status-danger-title",
                              }),
                            }),
                            (0, m.jsx)("p", {
                              className: "alertStatus-text",
                              children: (0, m.jsx)(si, {
                                tid: "status-danger-text",
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : e === Qt
                  ? (0, m.jsxs)("div", {
                      className: "alertStatus-warning",
                      children: [
                        (0, m.jsx)(hd, {}),
                        (0, m.jsxs)("div", {
                          children: [
                            (0, m.jsx)("p", {
                              className: "alertStatus-title",
                              children: (0, m.jsx)(si, {
                                tid: "status-warning-title",
                              }),
                            }),
                            (0, m.jsx)("p", {
                              className: "alertStatus-text",
                              children: (0, m.jsx)(si, {
                                tid: "status-warning-text",
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, m.jsx)(m.Fragment, {}),
                t &&
                  (0, m.jsxs)("div", {
                    className: "alertStatus-notifications",
                    children: [
                      (0, m.jsx)(bd, {}),
                      (0, m.jsxs)("div", {
                        children: [
                          (0, m.jsx)("p", {
                            className: "alertStatus-title",
                            children: (0, m.jsx)(si, { tid: t.message }),
                          }),
                          (0, m.jsx)("p", {
                            className: "alertStatus-text",
                            children: (0, m.jsx)(si, {
                              tid: t.message + "-text",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
        });
      };
      var Cd = function (t) {
        var n = t.map,
          r = t.colorStream,
          i = t.thermalStream,
          a = t.handleMap,
          o = t.handleColorStream,
          l = t.handleThermalStream,
          u = t.handleZoomIn,
          s = t.handleZoomOut,
          c = t.handleView,
          f = t.dualView,
          d = t.isBigView,
          p = h(function (e) {
            return e.socket.settings;
          }),
          v = Li((0, e.useState)(!1), 2),
          g = v[0],
          y = v[1];
        return (
          (0, e.useEffect)(
            function () {
              p &&
                p["system-mode"] &&
                "manual" !== p["system-mode"].value &&
                y(!1);
            },
            [p]
          ),
          (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsxs)("div", {
                className:
                  "menuView-top " +
                  "".concat(
                    d ? "menuView-top-bigView" : "menuView-top-smallView"
                  ),
                children: [
                  (0, m.jsxs)("div", {
                    className: "menuView-groupHorizontal",
                    children: [
                      (0, m.jsx)(Mf, {
                        handleClick: o,
                        active: r,
                        children: (0, m.jsx)(Qc, {}),
                      }),
                      (0, m.jsx)(Mf, {
                        handleClick: l,
                        active: i,
                        children: (0, m.jsx)(Zc, {}),
                      }),
                      (0, m.jsx)(Mf, {
                        extraClass: "",
                        handleClick: a,
                        active: n,
                        children: (0, m.jsx)(rf, {}),
                      }),
                    ],
                  }),
                  (0, m.jsxs)("div", {
                    className:
                      "menuView-groupHorizontal menuView-dualViewFullScreen",
                    children: [
                      (0, m.jsx)(Mf, {
                        handleClick: function () {
                          return c(ei);
                        },
                        active: f,
                        children: (0, m.jsx)(_f, {}),
                      }),
                      (0, m.jsx)(Mf, {
                        handleClick: function () {
                          return c(d ? ti : ni);
                        },
                        active: !f,
                        children: (0, m.jsx)(xf, {}),
                      }),
                    ],
                  }),
                ],
              }),
              (0, m.jsxs)("div", {
                className:
                  "menuView-bottom " +
                  "".concat(
                    d ? "menuView-bottom-bigView" : "menuView-bottom-smallView"
                  ),
                children: [
                  (0, m.jsxs)("div", {
                    className: "menuView-groupHorizontal",
                    children: [
                      g &&
                        p &&
                        p["system-mode"] &&
                        "manual" === p["system-mode"].value &&
                        (0, m.jsx)(ud, { map: n }),
                      (0, m.jsx)(Mf, {
                        extraClass:
                          (g ? "controlPanelOpen" : "") +
                          "".concat(
                            p &&
                              p["system-mode"] &&
                              "manual" !== p["system-mode"].value
                              ? "buttonDisable"
                              : ""
                          ),
                        handleClick: function () {
                          y(!g);
                        },
                        active: "",
                        children: (0, m.jsx)(If, {}),
                      }),
                    ],
                  }),
                  (0, m.jsxs)("div", {
                    className: "menuView-groupVertical",
                    children: [
                      (0, m.jsx)(Mf, {
                        extraClass: "menuViewButtonZoom",
                        handleClick: u,
                        children: (0, m.jsx)(cf, {}),
                      }),
                      (0, m.jsx)(Af, { map: n, isBigView: d }),
                      (0, m.jsx)(Mf, {
                        extraClass: "menuViewButtonZoom",
                        handleClick: s,
                        children: (0, m.jsx)(vf, {}),
                      }),
                    ],
                  }),
                ],
              }),
              (d || !f) && (0, m.jsx)(wd, {}),
            ],
          })
        );
      };
      var xd = function () {
        var t = h(function (e) {
            return e.menu.bigMap;
          }),
          n = h(function (e) {
            return e.menu.bigColorStream;
          }),
          r = h(function (e) {
            return e.menu.bigThermalStream;
          }),
          i =
            h(function (e) {
              return e.menu.bigStreamZoom;
            }) || 0,
          a =
            h(function (e) {
              return e.menu.bigMapZoom;
            }) || 0,
          o = h(function (e) {
            return e.menu.targetList;
          }),
          l =
            h(function (e) {
              return e.menu.view;
            }) || ei,
          u =
            h(function (e) {
              return e.menu.settings;
            }) || !1,
          s =
            h(function (e) {
              return e.menu.controls;
            }) || !1,
          c = Li((0, e.useState)(0), 2),
          f = c[0],
          d = c[1],
          p = Li((0, e.useState)(0), 2),
          v = p[0],
          g = p[1],
          y = (0, e.useRef)(null),
          b = document.getElementsByClassName("menuView-top-bigView"),
          w = document.getElementsByClassName("menuView-bottom-bigView"),
          C = function (e, t) {
            var n = 0,
              r = 0;
            return (
              0 !== e.length &&
                ("left" === t
                  ? ((n = e[0].children[0].clientWidth),
                    (r = e[0].children[0].clientHeight))
                  : "right" === t &&
                    ((n = e[0].children[1].clientWidth),
                    (r = e[0].children[1].clientHeight))),
              { width: n, height: r }
            );
          },
          x = {
            topLeft: C(b, "left"),
            topRight: C(b, "right"),
            bottomLeft: C(w, "left"),
            bottomRight: C(w, "right"),
          };
        function E() {
          y.current && (d(y.current.clientHeight), g(y.current.clientWidth));
        }
        return (
          (0, e.useEffect)(function () {
            return E();
          }),
          (0, e.useEffect)(function () {
            window.addEventListener("resize", E);
          }, []),
          (0, m.jsxs)("div", {
            className:
              "bigView primary grid-element" +
              (l === ti ? " fullscreen" : "") +
              (o ? " withTargetList" : "") +
              (u ? " withSettingsMenu" : "") +
              (s ? " withControlsMenu" : ""),
            ref: y,
            children: [
              t &&
                (0, m.jsx)(Zs, {
                  size: { width: v, height: f },
                  mapZoom: a,
                  menuViewSizes: x,
                }),
              (r || n) &&
                (0, m.jsx)(Bc, {
                  style: {
                    width: Us > v / f ? Us * f : v,
                    height: Us > v / f ? f : v / Us,
                    marginLeft: Us > v / f ? (v - Us * f) / 2 : 0,
                    marginTop: Us > v / f ? 0 : f - v / Us,
                  },
                  streamZoom: i,
                  zoomAction: function (e) {
                    return ai.dispatch(Vn(e));
                  },
                  thermalStream: r,
                  colorStream: n,
                }),
              (0, m.jsx)(Cd, {
                map: t,
                colorStream: n,
                thermalStream: r,
                handleMap: function () {
                  return ai.dispatch({ type: Ue });
                },
                handleColorStream: function () {
                  return ai.dispatch({ type: Fe });
                },
                handleThermalStream: function () {
                  return ai.dispatch({ type: He });
                },
                handleZoomIn: function () {
                  t
                    ? ai.dispatch(Bn(Math.min(a + 25, Hi)))
                    : ai.dispatch(Vn(Math.min(i + 1, 4)));
                },
                handleZoomOut: function () {
                  t
                    ? ai.dispatch(Bn(Math.max(a - 25, 0)))
                    : ai.dispatch(Vn(Math.max(i - 1, 0)));
                },
                dualView: l === ei,
                handleView: function (e) {
                  return ai.dispatch(Un(e));
                },
                isBigView: !0,
              }),
            ],
          })
        );
      };
      var Ed = function () {
          var t = h(function (e) {
              return e.menu.smallMap;
            }),
            n = h(function (e) {
              return e.menu.smallColorStream;
            }),
            r = h(function (e) {
              return e.menu.smallThermalStream;
            }),
            i =
              h(function (e) {
                return e.settings.hideBoatbus;
              }) || !1,
            a =
              h(function (e) {
                return e.menu.smallStreamZoom;
              }) || 0,
            o =
              h(function (e) {
                return e.menu.smallMapZoom;
              }) || 0,
            l = h(function (e) {
              return e.menu.targetList;
            }),
            u =
              h(function (e) {
                return e.menu.view;
              }) || ei,
            s =
              h(function (e) {
                return e.menu.settings;
              }) || !1,
            c =
              h(function (e) {
                return e.menu.controls;
              }) || !1,
            f = Li((0, e.useState)(0), 2),
            d = f[0],
            p = f[1],
            v = Li((0, e.useState)(0), 2),
            g = v[0],
            y = v[1],
            b = (0, e.useRef)(null),
            w = document.getElementsByClassName("menuView-top-smallView"),
            C = document.getElementsByClassName("menuView-bottom-smallView"),
            x = function (e, t) {
              var n = 0,
                r = 0;
              return (
                0 !== e.length &&
                  ("left" === t
                    ? ((n = e[0].children[0].clientWidth),
                      (r = e[0].children[0].clientHeight))
                    : "right" === t &&
                      ((n = e[0].children[1].clientWidth),
                      (r = e[0].children[1].clientHeight))),
                { width: n, height: r }
              );
            },
            E = {
              topLeft: x(w, "left"),
              topRight: x(w, "right"),
              bottomLeft: x(C, "left"),
              bottomRight: x(C, "right"),
            };
          function S() {
            b.current && (p(b.current.clientHeight), y(b.current.clientWidth));
          }
          return (
            (0, e.useEffect)(function () {
              return S();
            }),
            (0, e.useEffect)(function () {
              window.addEventListener("resize", S);
            }, []),
            (0, m.jsxs)("div", {
              className:
                "smallView grid-element" +
                (u === ni ? " fullscreen" : "") +
                (l ? " withTargetList" : "") +
                (s ? " withSettingsMenu" : "") +
                (c ? " withControlsMenu" : "") +
                (i ? " hideBoatbus" : ""),
              ref: b,
              children: [
                t &&
                  (0, m.jsx)(Zs, {
                    size: { width: g, height: d },
                    mapZoom: o,
                    menuViewSizes: E,
                  }),
                (r || n) &&
                  (0, m.jsx)(Bc, {
                    style: {
                      width: Us > g / d ? Us * d : g,
                      height: Us > g / d ? d : g / Us,
                      marginLeft: Us > g / d ? (g - Us * d) / 2 : 0,
                      marginTop: Us > g / d ? 0 : d - g / Us,
                    },
                    streamZoom: a,
                    zoomAction: function (e) {
                      return ai.dispatch(Fn(e));
                    },
                    thermalStream: r,
                    colorStream: n,
                  }),
                (0, m.jsx)(Cd, {
                  map: t,
                  colorStream: n,
                  thermalStream: r,
                  handleMap: function () {
                    return ai.dispatch({ type: Ze });
                  },
                  handleColorStream: function () {
                    return ai.dispatch({ type: Ge });
                  },
                  handleThermalStream: function () {
                    return ai.dispatch({ type: ze });
                  },
                  handleZoomIn: function () {
                    t
                      ? ai.dispatch(Hn(Math.min(o + 25, Hi)))
                      : ai.dispatch(Fn(Math.min(a + 1, 4)));
                  },
                  handleZoomOut: function () {
                    t
                      ? ai.dispatch(Hn(Math.max(o - 25, 0)))
                      : ai.dispatch(Fn(Math.max(a - 1, 0)));
                  },
                  dualView: u === ei,
                  handleView: function (e) {
                    return ai.dispatch(Un(e));
                  },
                  isBigView: !1,
                }),
              ],
            })
          );
        },
        Sd = function (t) {
          var n = t.name,
            r = t.value,
            i = t.unit,
            a = Li((0, e.useState)(0), 2),
            o = a[0],
            l = a[1],
            u = Li((0, e.useState)(0), 2),
            s = u[0],
            c = u[1],
            f = (0, e.useRef)(null);
          function d() {
            f.current && (l(f.current.clientWidth), c(f.current.clientHeight));
          }
          return (
            (0, e.useEffect)(function () {
              return d();
            }),
            (0, e.useEffect)(function () {
              window.addEventListener("resize", d);
            }, []),
            (0, m.jsxs)("div", {
              ref: f,
              className: "boatBusParameter",
              children: [
                (0, m.jsx)("div", {
                  className: "boatBusParameter-name",
                  children: (0, m.jsx)("p", {
                    children: (0, m.jsx)(si, { tid: n }),
                  }),
                }),
                (0, m.jsx)("div", {
                  className:
                    "boatBusParameter-value" +
                    (o < 160 || s < 150
                      ? " smallFont"
                      : o < 270 || s < 260
                      ? " mediumFont"
                      : ""),
                  children: (0, m.jsx)("p", { children: r }),
                }),
                (0, m.jsx)("div", {
                  className: "boatBusParameter-unit",
                  children:
                    i &&
                    (0, m.jsx)("p", { children: (0, m.jsx)(si, { tid: i }) }),
                }),
              ],
            })
          );
        },
        Od = { PGN: "heading", SETTING: "heading-src", NAME: "heading" },
        jd = { PGN: "cogsog", SETTING: "cogsog-src", NAME: "sog2" },
        kd = function (e, t, n) {
          return e[n.PGN] &&
            t &&
            t[n.SETTING] &&
            e[n.PGN][t[n.SETTING].value] &&
            e[n.PGN][t[n.SETTING].value][n.NAME]
            ? {
                value: e[n.PGN][t[n.SETTING].value][n.NAME].value,
                unit: e[n.PGN][t[n.SETTING].value][n.NAME].unit,
              }
            : { value: "--", unit: "" };
        };
      var _d,
        Nd = function () {
          var e = h(function (e) {
              return e.socket.settings;
            }),
            t =
              h(function (e) {
                return e.menu.settings;
              }) || !1,
            n =
              h(function (e) {
                return e.menu.controls;
              }) || !1,
            r =
              h(function (e) {
                return e.socket.boatbus;
              }) || {},
            i =
              h(function (e) {
                return e.settings.hideBoatbus;
              }) || !1,
            a = (function (e, t) {
              var n = kd(e, t, Od);
              return "--" === n.value
                ? { value: "--", unit: Pr.DEGREE }
                : {
                    value: Math.round(Ra(n.value, n.unit, Pr.DEGREE)),
                    unit: Pr.DEGREE,
                  };
            })(r, e),
            o = (function (e, t) {
              var n = kd(e, t, jd);
              return "--" === n.value
                ? { value: "--", unit: Mr.KNOTS }
                : {
                    value: Math.round(10 * La(n.value, n.unit, Mr.KNOTS)) / 10,
                    unit: Mr.KNOTS,
                  };
            })(r, e);
          return (0, m.jsxs)("div", {
            className:
              "instruments grid-element" +
              (t ? " withSettingsMenu" : "") +
              (n ? " withControlsMenu" : "") +
              (i ? " hideBoatbus" : ""),
            children: [
              (0, m.jsx)(Sd, { name: "heading", value: a.value, unit: a.unit }),
              (0, m.jsx)(Sd, { name: "speed", value: o.value, unit: o.unit }),
            ],
          });
        },
        Td = ["title", "titleId"];
      function Ld() {
        return (
          (Ld =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Ld.apply(this, arguments)
        );
      }
      function Rd(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Id(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Rd(t, Td);
        return e.createElement(
          "svg",
          Ld(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          _d ||
            (_d = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9 10L9.5 8H11L14 9.5L9 10ZM2 11.9999L23.5 9.49992L20.5 13.4999L9.5 14.4999H4L2 11.9999Z",
              fill: "white",
            }))
        );
      }
      var Md,
        Pd = e.forwardRef(Id),
        Ad = (n.p, ["title", "titleId"]);
      function Dd() {
        return (
          (Dd =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Dd.apply(this, arguments)
        );
      }
      function Vd(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Bd(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Vd(t, Ad);
        return e.createElement(
          "svg",
          Dd(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Md ||
            (Md = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M16.1167 3.9266C15.6889 3.87936 15.254 3.89393 14.8257 3.97196C13.9324 4.13473 13.1099 4.56589 12.4678 5.20797C11.8257 5.85006 11.3945 6.67258 11.2318 7.56591C11.069 8.45925 11.1824 9.38098 11.5567 10.2083C11.7112 10.5496 11.638 10.9508 11.3732 11.2157L5.19214 17.3967C5.00507 17.5838 4.89998 17.8375 4.89998 18.1021C4.89998 18.3666 5.00507 18.6204 5.19214 18.8074C5.37922 18.9945 5.63294 19.0996 5.8975 19.0996C6.16206 19.0996 6.41579 18.9945 6.60286 18.8074L12.7839 12.6264C13.0488 12.3615 13.45 12.2884 13.7913 12.4429C14.6186 12.8172 15.5403 12.9306 16.4337 12.7678C17.327 12.605 18.1495 12.1739 18.7916 11.5318C19.4337 10.8897 19.8649 10.0672 20.0276 9.17386C20.1057 8.74555 20.1202 8.31072 20.073 7.8829L17.7867 10.1691L17.7804 10.1755L17.7804 10.1755C17.4449 10.5043 16.9939 10.6884 16.5242 10.6884C16.0545 10.6884 15.6035 10.5043 15.268 10.1755L15.2616 10.1692L15.2617 10.1691L13.8304 8.73793L13.8241 8.73157L13.8241 8.73154C13.4953 8.39609 13.3111 7.9451 13.3111 7.47538C13.3111 7.00567 13.4953 6.55468 13.8241 6.21923L13.8304 6.2128L13.8304 6.21284L13.8394 6.20389L16.1167 3.9266ZM14.5031 2.20112C15.7564 1.97276 17.0495 2.13179 18.2102 2.657C18.4793 2.77881 18.6716 3.02496 18.7245 3.31563C18.7775 3.60629 18.6844 3.90444 18.4755 4.11335L15.1135 7.47538L16.5242 8.8861L19.8862 5.52407C20.0951 5.31515 20.3933 5.22208 20.684 5.27504C20.9746 5.328 21.2208 5.52025 21.3426 5.78942C21.8678 6.95006 22.0268 8.2432 21.7985 9.49651C21.5701 10.7498 20.9652 11.9038 20.0644 12.8046C19.1636 13.7054 18.0096 14.3103 16.7563 14.5387C15.7122 14.7289 14.6405 14.6503 13.6408 14.3151L7.87565 20.0802C7.35102 20.6049 6.63945 20.8996 5.8975 20.8996C5.15555 20.8996 4.44399 20.6049 3.91935 20.0802C3.39471 19.5556 3.09998 18.844 3.09998 18.1021C3.09998 17.3601 3.39471 16.6486 3.91935 16.1239L9.68449 10.3588C9.3493 9.35907 9.2707 8.28734 9.46093 7.24326C9.68929 5.98995 10.2942 4.836 11.195 3.93518C12.0958 3.03437 13.2498 2.42947 14.5031 2.20112Z",
              fill: "white",
            }))
        );
      }
      var Hd = e.forwardRef(Bd);
      n.p;
      var Fd = function (e) {
        var t = e.handleClick,
          n = e.active,
          r = e.children;
        return (0, m.jsx)("button", {
          onClick: t,
          className: "menuButton2" + (n ? " active" : ""),
          children: r,
        });
      };
      var Ud,
        zd = function (e) {
          var t = e.width,
            n =
              h(function (e) {
                return e.menu.targetList;
              }) || !1,
            r =
              h(function (e) {
                return e.menu.settings;
              }) || !1,
            i =
              h(function (e) {
                return e.menu.controls;
              }) || !1;
          function a() {
            return t > 910;
          }
          return (0, m.jsxs)("div", {
            className:
              "menuSettings primary" +
              (r ? " withSettingsMenu" : "") +
              (i ? " withControlsMenu" : ""),
            children: [
              (0, m.jsxs)(Fd, {
                handleClick: function () {
                  ai.dispatch(Qn(null)),
                    n ? ai.dispatch({ type: ut }) : ai.dispatch(Rn());
                },
                active: n,
                children: [
                  (0, m.jsx)(Pd, {}),
                  a() && (0, m.jsx)("p", { children: "DETECTIONS" }),
                ],
              }),
              (0, m.jsxs)(Fd, {
                handleClick: function () {
                  r ? ai.dispatch({ type: ct }) : ai.dispatch({ type: st });
                },
                active: r,
                children: [
                  (0, m.jsx)(Hd, {}),
                  a() && (0, m.jsx)("p", { children: "SETTINGS" }),
                ],
              }),
            ],
          });
        },
        Gd = ["title", "titleId"];
      function Zd() {
        return (
          (Zd =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Zd.apply(this, arguments)
        );
      }
      function qd(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Wd(t, n) {
        var r = t.title,
          i = t.titleId,
          a = qd(t, Gd);
        return e.createElement(
          "svg",
          Zd(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Ud ||
            (Ud = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11.6839 3.65691C11.8877 3.58051 12.1122 3.58051 12.316 3.65691L18.3159 5.9069C18.6672 6.03863 18.8999 6.37444 18.8999 6.7496V11.9996C18.8999 14.6514 17.1464 16.7548 15.5926 18.1144C14.7968 18.8107 14.0053 19.3544 13.4144 19.7237C13.1181 19.9089 12.8699 20.0517 12.6936 20.1493C12.6055 20.1981 12.5352 20.2356 12.4857 20.2616C12.4609 20.2746 12.4414 20.2847 12.4274 20.2919L12.4106 20.3004L12.4054 20.303L12.4037 20.3039L12.403 20.3043C12.4027 20.3044 12.4024 20.3045 12 19.4995C11.5975 20.3045 11.5972 20.3044 11.5969 20.3043L11.5962 20.3039L11.5945 20.303L11.5893 20.3004L11.5725 20.2919C11.5585 20.2847 11.539 20.2746 11.5142 20.2616C11.4647 20.2356 11.3944 20.1981 11.3063 20.1493C11.13 20.0517 10.8818 19.9089 10.5855 19.7237C9.99465 19.3544 9.2031 18.8107 8.40731 18.1144C6.85354 16.7548 5.09998 14.6514 5.09998 11.9996V6.7496C5.09998 6.37444 5.33269 6.03863 5.68396 5.9069L11.6839 3.65691ZM12 19.4995L11.5975 20.3045C11.8508 20.4312 12.1491 20.4312 12.4024 20.3045L12 19.4995ZM11.9999 18.4739C12.1292 18.3995 12.2849 18.307 12.4604 18.1973C12.9946 17.8634 13.7031 17.3759 14.4073 16.7597C15.8535 15.4943 17.0999 13.8478 17.0999 11.9996V7.3733L12 5.46081L6.89998 7.3733V11.9996C6.89998 13.8478 8.1464 15.4943 9.59262 16.7597C10.2968 17.3759 11.0053 17.8634 11.5395 18.1973C11.715 18.307 11.8707 18.3995 11.9999 18.4739Z",
              fill: "white",
            }))
        );
      }
      var $d,
        Kd = e.forwardRef(Wd),
        Yd = (n.p, ["title", "titleId"]);
      function Qd() {
        return (
          (Qd =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Qd.apply(this, arguments)
        );
      }
      function Xd(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Jd(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Xd(t, Yd);
        return e.createElement(
          "svg",
          Qd(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          $d ||
            ($d = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M4.89998 11.9996C4.89998 8.07839 8.07875 4.89961 12 4.89961C15.9212 4.89961 19.1 8.07839 19.1 11.9996C19.1 15.9208 15.9212 19.0996 12 19.0996C8.07875 19.0996 4.89998 15.9208 4.89998 11.9996ZM12 3.09961C7.08464 3.09961 3.09998 7.08428 3.09998 11.9996C3.09998 16.9149 7.08464 20.8996 12 20.8996C16.9153 20.8996 20.9 16.9149 20.9 11.9996C20.9 7.08428 16.9153 3.09961 12 3.09961ZM16.2458 8.89164C16.3536 8.56823 16.2695 8.21168 16.0284 7.97064C15.7874 7.72959 15.4308 7.64542 15.1074 7.75322L10.0194 9.44922C9.75066 9.5388 9.53977 9.74968 9.45019 10.0184L7.75419 15.1064C7.64639 15.4298 7.73056 15.7864 7.97161 16.0274C8.21266 16.2685 8.56921 16.3526 8.89261 16.2448L13.9806 14.5488C14.2494 14.4593 14.4602 14.2484 14.5498 13.9796L16.2458 8.89164ZM10.031 13.968L11.0155 11.0145L13.969 10.0301L12.9845 12.9835L10.031 13.968Z",
              fill: "white",
            }))
        );
      }
      var ep,
        tp = e.forwardRef(Jd),
        np = (n.p, ["title", "titleId"]);
      function rp() {
        return (
          (rp =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          rp.apply(this, arguments)
        );
      }
      function ip(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function ap(t, n) {
        var r = t.title,
          i = t.titleId,
          a = ip(t, np);
        return e.createElement(
          "svg",
          rp(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          ep ||
            (ep = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11.989 21.1655C11.9896 21.1655 11.9903 21.1655 11.9909 21.1655C17.0497 21.1655 21.1508 17.0651 21.1518 12.0066V12.0046C21.1518 6.94521 17.0504 2.84375 11.9909 2.84375C6.93154 2.84375 2.83008 6.94521 2.83008 12.0046C2.83008 17.0634 6.93047 21.1644 11.989 21.1655ZM11.0909 19.311C7.74515 18.9031 5.09242 16.2504 4.68455 12.9046H7.03443C7.53148 12.9046 7.93443 12.5017 7.93443 12.0046C7.93443 11.5076 7.53148 11.1046 7.03443 11.1046H4.68455C5.09242 7.75882 7.74515 5.1061 11.0909 4.69822V7.0481C11.0909 7.54515 11.4939 7.9481 11.9909 7.9481C12.488 7.9481 12.8909 7.54515 12.8909 7.0481V4.69822C16.2367 5.1061 18.8895 7.75882 19.2973 11.1046H16.9475C16.4504 11.1046 16.0475 11.5076 16.0475 12.0046C16.0475 12.5017 16.4504 12.9046 16.9475 12.9046H19.2973C18.8895 16.2504 16.2367 18.9031 12.8909 19.311V16.9611C12.8909 16.4641 12.488 16.0611 11.9909 16.0611C11.4939 16.0611 11.0909 16.4641 11.0909 16.9611V19.311Z",
              fill: "white",
            }))
        );
      }
      var op,
        lp = e.forwardRef(ap),
        up = (n.p, ["title", "titleId"]);
      function sp() {
        return (
          (sp =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          sp.apply(this, arguments)
        );
      }
      function cp(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function fp(t, n) {
        var r = t.title,
          i = t.titleId,
          a = cp(t, up);
        return e.createElement(
          "svg",
          sp(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          op ||
            (op = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18.294 5.36331C17.9425 5.01178 17.3727 5.0117 17.0212 5.36312C16.6696 5.71454 16.6696 6.28438 17.021 6.63591C18.3522 7.96751 19.1 9.77331 19.1 11.6562C19.1 13.5391 18.3522 15.3449 17.021 16.6765C16.6696 17.028 16.6696 17.5979 17.0212 17.9493C17.3727 18.3007 17.9425 18.3006 18.294 17.9491C19.9626 16.2799 20.9 14.0164 20.9 11.6562C20.9 9.29602 19.9626 7.03246 18.294 5.36331ZM15.4697 8.18761C15.1182 7.83608 14.5484 7.83599 14.1969 8.18741C13.8453 8.53883 13.8453 9.10868 14.1967 9.46021C14.7779 10.0416 15.1044 10.8301 15.1044 11.6522C15.1044 12.4743 14.7779 13.2628 14.1967 13.8442C13.8453 14.1957 13.8453 14.7656 14.1969 15.117C14.5484 15.4684 15.1182 15.4683 15.4697 15.1168C16.3883 14.1978 16.9044 12.9516 16.9044 11.6522C16.9044 10.3528 16.3883 9.10657 15.4697 8.18761ZM10.2566 6.99961C10.2566 6.63892 10.0412 6.31308 9.70942 6.17167C9.37761 6.03025 8.99342 6.10059 8.73324 6.35039L6.01857 8.95675H3.99998C3.50292 8.95675 3.09998 9.3597 3.09998 9.85675V14.1425C3.09998 14.6395 3.50292 15.0425 3.99998 15.0425H6.01857L8.73324 17.6488C8.99342 17.8986 9.37761 17.969 9.70942 17.8276C10.0412 17.6861 10.2566 17.3603 10.2566 16.9996V6.99961ZM7.00399 10.506L8.45656 9.11136V14.8879L7.00399 13.4933C6.83638 13.3323 6.61303 13.2425 6.38068 13.2425H4.89998V10.7568H6.38068C6.61303 10.7568 6.83638 10.6669 7.00399 10.506Z",
              fill: "white",
            }))
        );
      }
      var dp,
        pp = e.forwardRef(fp),
        hp = (n.p, ["title", "titleId"]);
      function mp() {
        return (
          (mp =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          mp.apply(this, arguments)
        );
      }
      function vp(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function gp(t, n) {
        var r = t.title,
          i = t.titleId,
          a = vp(t, hp);
        return e.createElement(
          "svg",
          mp(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          dp ||
            (dp = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M4.9 8.42818C4.9 8.15148 5.13292 7.89961 5.45454 7.89961H13.4545C13.7762 7.89961 14.0091 8.15148 14.0091 8.42818V15.571C14.0091 15.8477 13.7762 16.0996 13.4545 16.0996H5.45454C5.13292 16.0996 4.9 15.8477 4.9 15.571V8.42818ZM5.45454 6.09961C4.16952 6.09961 3.1 7.12693 3.1 8.42818V15.571C3.1 16.8723 4.16952 17.8996 5.45454 17.8996H13.4545C14.7396 17.8996 15.8091 16.8723 15.8091 15.571V13.7305L19.4831 16.308C19.758 16.5008 20.1173 16.5246 20.4152 16.3697C20.7131 16.2148 20.9 15.9069 20.9 15.5712V8.42832C20.9 8.09257 20.7131 7.78473 20.4152 7.62983C20.1173 7.47492 19.758 7.49872 19.4831 7.69154L15.8091 10.269V8.42818C15.8091 7.12693 14.7396 6.09961 13.4545 6.09961H5.45454ZM19.1 13.8404L16.4762 11.9997L19.1 10.1591V13.8404Z",
              fill: "white",
            }))
        );
      }
      var yp,
        bp = e.forwardRef(gp),
        wp = (n.p, ["title", "titleId"]);
      function Cp() {
        return (
          (Cp =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Cp.apply(this, arguments)
        );
      }
      function xp(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Ep(t, n) {
        var r = t.title,
          i = t.titleId,
          a = xp(t, wp);
        return e.createElement(
          "svg",
          Cp(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          yp ||
            (yp = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.0001 4.89961C12.0645 4.89961 12.2336 4.9312 12.4944 5.22535C12.7543 5.51847 13.0294 5.99395 13.2787 6.65877C13.4448 7.10177 13.5918 7.60814 13.7138 8.16573C13.1582 8.12222 12.5849 8.09961 12.0001 8.09961C11.4153 8.09961 10.842 8.12222 10.2864 8.16573C10.4084 7.60814 10.5553 7.10177 10.7215 6.65877C10.9708 5.99395 11.2459 5.51847 11.5058 5.22535C11.7666 4.9312 11.9357 4.89961 12.0001 4.89961ZM8.4044 8.40391C8.56118 7.52661 8.77473 6.72369 9.03608 6.02674C9.32967 5.24384 9.70097 4.54776 10.1589 4.03122C10.616 3.51574 11.2361 3.09961 12.0001 3.09961C12.7641 3.09961 13.3842 3.51574 13.8413 4.03122C14.2992 4.54776 14.6705 5.24384 14.9641 6.02674C15.2255 6.72369 15.439 7.52661 15.5958 8.40391C16.4731 8.56069 17.276 8.77424 17.973 9.03559C18.7559 9.32918 19.452 9.70048 19.9685 10.1584C20.484 10.6155 20.9001 11.2356 20.9001 11.9996C20.9001 12.7636 20.484 13.3837 19.9685 13.8408C19.452 14.2987 18.7559 14.67 17.973 14.9636C17.276 15.225 16.4731 15.4385 15.5958 15.5953C15.439 16.4726 15.2255 17.2755 14.9641 17.9725C14.6705 18.7554 14.2992 19.4515 13.8413 19.968C13.3842 20.4835 12.7641 20.8996 12.0001 20.8996C11.2361 20.8996 10.616 20.4835 10.1589 19.968C9.70097 19.4515 9.32967 18.7554 9.03608 17.9725C8.77473 17.2755 8.56118 16.4726 8.4044 15.5953C7.5271 15.4385 6.72418 15.225 6.02723 14.9636C5.24433 14.67 4.54824 14.2987 4.03171 13.8408C3.51623 13.3837 3.1001 12.7636 3.1001 11.9996C3.1001 11.2356 3.51623 10.6155 4.03171 10.1584C4.54824 9.70048 5.24433 9.32918 6.02723 9.03559C6.72418 8.77424 7.5271 8.56069 8.4044 8.40391ZM8.16622 13.7133C7.60863 13.5913 7.10226 13.4444 6.65925 13.2782C5.99444 13.0289 5.51895 12.7538 5.22584 12.4939C4.93168 12.2331 4.9001 12.064 4.9001 11.9996C4.9001 11.9352 4.93168 11.7661 5.22584 11.5053C5.51895 11.2454 5.99444 10.9703 6.65925 10.721C7.10226 10.5549 7.60863 10.4079 8.16622 10.2859C8.12271 10.8416 8.1001 11.4148 8.1001 11.9996C8.1001 12.5844 8.12271 13.1577 8.16622 13.7133ZM9.99909 14.0006C9.9349 13.367 9.9001 12.6962 9.9001 11.9996C9.9001 11.303 9.9349 10.6322 9.99909 9.9986C10.6327 9.93441 11.3035 9.89961 12.0001 9.89961C12.6967 9.89961 13.3675 9.93441 14.0011 9.99861C14.0653 10.6322 14.1001 11.303 14.1001 11.9996C14.1001 12.6962 14.0653 13.367 14.0011 14.0006C13.3675 14.0648 12.6967 14.0996 12.0001 14.0996C11.3035 14.0996 10.6327 14.0648 9.99909 14.0006ZM10.2864 15.8335C10.4084 16.3911 10.5553 16.8974 10.7215 17.3405C10.9708 18.0053 11.2459 18.4808 11.5058 18.7739C11.7666 19.068 11.9357 19.0996 12.0001 19.0996C12.0645 19.0996 12.2336 19.068 12.4944 18.7739C12.7543 18.4808 13.0294 18.0053 13.2787 17.3405C13.4448 16.8974 13.5918 16.3911 13.7138 15.8335C13.1582 15.877 12.5849 15.8996 12.0001 15.8996C11.4153 15.8996 10.842 15.877 10.2864 15.8335ZM15.834 13.7133C16.3916 13.5913 16.8979 13.4444 17.3409 13.2782C18.0058 13.0289 18.4812 12.7538 18.7744 12.4939C19.0685 12.2331 19.1001 12.064 19.1001 11.9996C19.1001 11.9352 19.0685 11.7661 18.7744 11.5053C18.4812 11.2454 18.0058 10.9703 17.3409 10.721C16.8979 10.5549 16.3916 10.4079 15.834 10.2859C15.8775 10.8416 15.9001 11.4148 15.9001 11.9996C15.9001 12.5844 15.8775 13.1577 15.834 13.7133Z",
              fill: "white",
            }))
        );
      }
      var Sp = e.forwardRef(Ep),
        Op = (n.p, n.p + "static/media/turn-on-alarm.1faae8d6621f64942dba.mp3");
      var jp = function (e) {
        var t = e.handleClick,
          n = e.active,
          r = e.children;
        return (0, m.jsx)("button", {
          onClick: t,
          className: "menuButton" + (n ? " active" : ""),
          children: r,
        });
      };
      var kp = function (e) {
        var t = e.width,
          n = h(function (e) {
            return e.socket.settings;
          }),
          r =
            h(function (e) {
              return e.menu.settings;
            }) || !1,
          i =
            h(function (e) {
              return e.menu.controls;
            }) || !1,
          a =
            h(function (e) {
              return e.menu.alarm;
            }) || !1,
          o = h(function (e) {
            return e.menu.targetList;
          }),
          l = h(function (e) {
            return e.settings.developerMode;
          }),
          u = h(function (e) {
            return e.socket.state;
          });
        function s(e) {
          ai.dispatch(Mn({ name: "system-mode", value: e }));
        }
        function c(e) {
          return t > 910 || !!(t > 560 && e);
        }
        function f(e) {
          return !(!n || !n["system-mode"] || n["system-mode"].value !== e);
        }
        return (0, m.jsxs)("div", {
          className:
            "menuModes primary" +
            (o ? " withTargetList" : "") +
            (r ? " withSettingsMenu" : "") +
            (i ? " withControlsMenu" : ""),
          children: [
            (0, m.jsxs)("div", {
              className: "menuModes-modes",
              children: [
                (0, m.jsxs)(jp, {
                  handleClick: function () {
                    return s("collision-avoidance");
                  },
                  active: f("collision-avoidance"),
                  children: [
                    (0, m.jsx)(tp, {}),
                    c(f("collision-avoidance")) &&
                      (0, m.jsx)("p", {
                        children: (0, m.jsx)(si, {
                          tid: "COLLISION AVOIDANCE",
                        }),
                      }),
                  ],
                }),
                (0, m.jsxs)(jp, {
                  handleClick: function () {
                    return s("surveillance");
                  },
                  active: f("surveillance"),
                  children: [
                    (0, m.jsx)(Kd, {}),
                    c(f("surveillance")) &&
                      (0, m.jsx)("p", {
                        children: (0, m.jsx)(si, { tid: "SURVEILLANCE" }),
                      }),
                  ],
                }),
                (0, m.jsxs)(jp, {
                  handleClick: function () {
                    return s("manual");
                  },
                  active: f("manual"),
                  children: [
                    (0, m.jsx)(lp, {}),
                    c(f("manual")) &&
                      (0, m.jsx)("p", {
                        children: (0, m.jsx)(si, { tid: "MANUAL" }),
                      }),
                  ],
                }),
              ],
            }),
            (0, m.jsxs)("div", {
              className: "menuModes-alarm",
              children: [
                l &&
                  (0, m.jsxs)(m.Fragment, {
                    children: [
                      (0, m.jsxs)(Fd, {
                        handleClick: function () {
                          u &&
                            (u.SNAPSHOT_RECORDING
                              ? ai.dispatch({ type: Zt })
                              : ai.dispatch({ type: Gt }));
                        },
                        active: u && !0 === u.SNAPSHOT_RECORDING,
                        children: [
                          (0, m.jsx)(bp, {}),
                          c(!1) &&
                            (0, m.jsx)("p", {
                              children: (0, m.jsx)(si, { tid: "SNAPSHOT" }),
                            }),
                        ],
                      }),
                      (0, m.jsxs)(Fd, {
                        handleClick: function () {
                          u &&
                            (u.IMU_RECORDING
                              ? ai.dispatch({ type: Wt })
                              : ai.dispatch({ type: qt }));
                        },
                        active: u && !0 === u.IMU_RECORDING,
                        children: [
                          (0, m.jsx)(Sp, {}),
                          c(!1) &&
                            (0, m.jsx)("p", {
                              children: (0, m.jsx)(si, { tid: "IMU" }),
                            }),
                        ],
                      }),
                      (0, m.jsxs)(Fd, {
                        handleClick: function () {
                          u &&
                            (u.RECORDING
                              ? ai.dispatch({ type: zt })
                              : ai.dispatch({ type: Ut }));
                        },
                        active: u && !0 === u.RECORDING,
                        children: [
                          (0, m.jsx)(bp, {}),
                          c(!1) &&
                            (0, m.jsx)("p", {
                              children: (0, m.jsx)(si, { tid: "STREAM" }),
                            }),
                        ],
                      }),
                    ],
                  }),
                (0, m.jsxs)(Fd, {
                  handleClick: function () {
                    var e = new Audio(Op);
                    !0 !== a &&
                      e.play().catch(function (e) {
                        return console.log(e);
                      }),
                      ai.dispatch(
                        (function (e) {
                          return { type: ot, payload: e };
                        })(!a)
                      );
                  },
                  active: a,
                  children: [
                    (0, m.jsx)(pp, {}),
                    c(!1) &&
                      (0, m.jsx)("p", {
                        children: (0, m.jsx)(si, { tid: "ALARM" }),
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var _p = function () {
          var t = Li((0, e.useState)(0), 2),
            n = t[0],
            r = t[1],
            i = (0, e.useRef)(null);
          function a() {
            i.current && r(i.current.clientWidth);
          }
          return (
            (0, e.useEffect)(function () {
              return a();
            }),
            (0, e.useEffect)(function () {
              window.addEventListener("resize", a);
            }, []),
            (0, m.jsxs)("div", {
              ref: i,
              className: "menu grid-element",
              children: [
                (0, m.jsx)(kp, { width: n }),
                (0, m.jsx)(zd, { width: n }),
              ],
            })
          );
        },
        Np = function (e) {
          var t = e.children;
          return (0, m.jsx)("div", { className: "settingsGroup", children: t });
        },
        Tp = function (e) {
          var t = e.title;
          return (0, m.jsx)("p", {
            className: "title",
            children: (0, m.jsx)(si, { tid: t }),
          });
        },
        Lp = function (e) {
          var t = e.description;
          return (0, m.jsx)("p", {
            className: "description",
            children: (0, m.jsx)(si, { tid: t }),
          });
        },
        Rp = function (e) {
          var t = e.state,
            n = e.onChange;
          return (0, m.jsxs)("label", {
            className: "toggleSwitch",
            children: [
              (0, m.jsx)("input", {
                className: "toggleSwitch-input",
                type: "checkbox",
                defaultChecked: t,
                onChange: n,
              }),
              (0, m.jsx)("span", { className: "toggleSwitch-slider" }),
            ],
          });
        };
      var Ip = function (e) {
          var t = e.values,
            n = e.value,
            r = e.unit,
            i = void 0 === r ? null : r,
            a = e.handleClick,
            o = e.locker;
          return (0, m.jsx)("div", {
            className: "selectButtons",
            children: t.map(function (e) {
              return (0, m.jsx)(
                "button",
                {
                  href: "!#",
                  className:
                    o && o(e)
                      ? "selectButtons-button locked"
                      : e === n
                      ? "selectButtons-button active"
                      : "selectButtons-button",
                  onClick:
                    o && o(e)
                      ? null
                      : function () {
                          return a(e);
                        },
                  children:
                    null === i
                      ? (0, m.jsx)(si, { tid: e })
                      : (0, m.jsx)(Ia, { value: e, unit: i }),
                },
                e
              );
            }),
          });
        },
        Mp = function (e) {
          var t = e.children;
          return (0, m.jsx)("div", {
            className: "settingsContent",
            children: t,
          });
        },
        Pp = function (t) {
          var n = t.value,
            r = t.unit,
            i = t.action,
            a = t.type,
            o = Li((0, e.useState)(n), 2),
            l = o[0],
            u = o[1];
          return (0, m.jsxs)("div", {
            className: "metricInput",
            children: [
              (0, m.jsx)("input", {
                type: "number" === typeof n ? "number" : "text",
                value: Array.isArray(l) ? l.toString() : l,
                onBlur: function (e) {
                  if ("number" === typeof n)
                    i(parseFloat(e.currentTarget.value));
                  else if ("list" === a) {
                    var t = e.currentTarget.value.split(",").map(function (e) {
                      return parseFloat(e);
                    });
                    i(t);
                  } else i(e.currentTarget.value);
                },
                onChange: function (e) {
                  u(e.currentTarget.value);
                },
              }),
              (0, m.jsxs)("div", {
                className: "metricInput-metric",
                children: [" ", r, " "],
              }),
            ],
          });
        },
        Ap = function (t) {
          var n = t.value,
            r = t.values,
            i = t.action,
            a = t.type,
            o = Li((0, e.useState)(n), 2),
            l = o[0],
            u = o[1];
          return (0, m.jsx)("select", {
            value: l,
            onChange: function (e) {
              u(e.currentTarget.value),
                i(
                  "int" === a
                    ? parseInt(e.currentTarget.value)
                    : "double" === a
                    ? parseFloat(e.currentTarget.value)
                    : e.currentTarget.value
                );
            },
            children: r.map(function (e) {
              return (0, m.jsx)("option", { value: e, children: e }, e);
            }),
          });
        },
        Dp = "INPUT",
        Vp = "LIST_INPUT",
        Bp = "SELECT",
        Hp = "DEFAULT_INT_SELECT",
        Fp = "DEFAULT_DOUBLE_SELECT",
        Up = "DEFAULT_STRING_SELECT",
        zp = "TOGGLE",
        Gp = function (e) {
          var t = e.children;
          return (0, m.jsx)("div", {
            className: "settingsElement",
            children: t,
          });
        },
        Zp = function (e) {
          var t = e.title;
          return (0, m.jsx)("p", {
            className: "subtitle",
            children: (0, m.jsx)(si, { tid: t }),
          });
        },
        qp = function (t) {
          var n = t.name,
            r = t.type,
            i = t.value,
            a = t.values,
            o = void 0 === a ? null : a,
            l = t.unit,
            u = void 0 === l ? null : l,
            s = t.description,
            c = void 0 === s ? "" : s,
            f = t.handleChange,
            d = t.locker,
            p = void 0 === d ? null : d,
            h = Li((0, e.useState)(!1), 2),
            v = h[0];
          h[1];
          return (0, m.jsx)(m.Fragment, {
            children: (0, m.jsxs)(Gp, {
              children: [
                (0, m.jsxs)(Mp, {
                  children: [
                    (0, m.jsx)("div", {
                      className: "setting-title",
                      children: (0, m.jsx)(Zp, { title: n }),
                    }),
                    r === zp &&
                      (0, m.jsx)(Rp, {
                        state: i,
                        onChange: function (e) {
                          return f(e.target.checked);
                        },
                      }),
                    r === Dp &&
                      (0, m.jsx)(Pp, {
                        value: i,
                        unit: u,
                        action: f,
                        type: null,
                      }),
                    r === Vp &&
                      (0, m.jsx)(Pp, {
                        value: i,
                        unit: u,
                        action: f,
                        type: "list",
                      }),
                    r === Hp &&
                      (0, m.jsx)(Ap, {
                        type: "int",
                        value: i,
                        values: o,
                        action: f,
                      }),
                    r === Fp &&
                      (0, m.jsx)(Ap, {
                        type: "double",
                        value: i,
                        values: o,
                        action: f,
                      }),
                    r === Up &&
                      (0, m.jsx)(Ap, {
                        type: "string",
                        value: i,
                        values: o,
                        action: f,
                      }),
                  ],
                }),
                r === Bp &&
                  (0, m.jsx)(Ip, {
                    values: o,
                    value: i,
                    unit: u,
                    locker: p,
                    handleClick: function (e) {
                      f(e);
                    },
                  }),
                v && (0, m.jsx)(Lp, { description: c }),
              ],
            }),
          });
        };
      var Wp = function () {
        var e = h(function (e) {
            return e.socket.settings;
          }),
          t =
            h(function (e) {
              return e.settings.theme;
            }) || Ar,
          n =
            h(function (e) {
              return e.settings.hideBoatbus;
            }) || !1,
          r = h(function (e) {
            return e.settings.distanceMetric;
          });
        return (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsxs)(Np, {
              children: [
                (0, m.jsx)(Tp, { title: "DISPLAY" }),
                (0, m.jsx)(qp, {
                  name: "switch-theme",
                  type: Bp,
                  value: t,
                  values: [Ar, Dr],
                  description: "Set low-light mode help text",
                  handleChange: function (e) {
                    ai.dispatch(qn(e));
                  },
                }),
                (0, m.jsx)(qp, {
                  name: "display-boatbus",
                  type: zp,
                  value: !n,
                  description: "no description",
                  handleChange: function (e) {
                    ai.dispatch(Wn(!e));
                  },
                }),
                (0, m.jsx)(qp, {
                  name: "select-distance-metric",
                  type: Bp,
                  value: r,
                  values: Object.values(Rr).filter(function (e) {
                    return e !== Rr.NM;
                  }),
                  description: "Select app distance metric",
                  handleChange: function (e) {
                    return ai.dispatch(Yn(e));
                  },
                }),
              ],
            }),
            (0, m.jsxs)(Np, {
              children: [
                (0, m.jsx)(Tp, { title: "MODES" }),
                e &&
                  e["collision-avoidance-mode-scanning-speed"] &&
                  (0, m.jsx)(qp, {
                    name: "collision-avoidance-mode-scanning-speed",
                    type: Bp,
                    value: e["collision-avoidance-mode-scanning-speed"].value,
                    values: zs,
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    handleChange: function (e) {
                      return ai.dispatch(
                        Mn({
                          name: "collision-avoidance-mode-scanning-speed",
                          value: e,
                        })
                      );
                    },
                  }),
                e &&
                  e["collision-avoidance-mode-limit"] &&
                  (0, m.jsx)(qp, {
                    name: "collision-avoidance-mode-limit",
                    type: Bp,
                    value: e["collision-avoidance-mode-limit"].value,
                    values: Gs,
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    handleChange: function (e) {
                      return ai.dispatch(
                        Mn({ name: "collision-avoidance-mode-limit", value: e })
                      );
                    },
                  }),
                e &&
                  e["surveillance-mode-scanning-speed"] &&
                  (0, m.jsx)(qp, {
                    name: "surveillance-mode-scanning-speed",
                    type: Bp,
                    value: e["surveillance-mode-scanning-speed"].value,
                    values: zs,
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    handleChange: function (e) {
                      return ai.dispatch(
                        Mn({
                          name: "surveillance-mode-scanning-speed",
                          value: e,
                        })
                      );
                    },
                  }),
              ],
            }),
          ],
        });
      };
      var $p,
        Kp = function () {
          var e = h(function (e) {
            return e.socket.settings;
          });
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsxs)(Np, {
                children: [
                  (0, m.jsx)(Tp, { title: "collision-avoidance-mode" }),
                  e &&
                    e["collision-avoidance-lv3-distance-max"] &&
                    (0, m.jsx)(qp, {
                      name: "collision-avoidance-lv3-distance-max",
                      type: Bp,
                      value: e["collision-avoidance-lv3-distance-max"].value,
                      values: e["collision-avoidance-lv3-distance-max"].values,
                      unit: Rr.METERS,
                      locker: function (t) {
                        return (
                          t >= e["collision-avoidance-lv1-distance-max"].value
                        );
                      },
                      description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      handleChange: function (e) {
                        return ai.dispatch(
                          Mn({
                            name: "collision-avoidance-lv3-distance-max",
                            value: e,
                          })
                        );
                      },
                    }),
                  e &&
                    e["collision-avoidance-lv1-distance-max"] &&
                    (0, m.jsx)(qp, {
                      name: "collision-avoidance-lv1-distance-max",
                      type: Bp,
                      value: e["collision-avoidance-lv1-distance-max"].value,
                      values: e["collision-avoidance-lv1-distance-max"].values,
                      unit: Rr.METERS,
                      locker: function (t) {
                        return (
                          t <= e["collision-avoidance-lv3-distance-max"].value
                        );
                      },
                      description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      handleChange: function (e) {
                        return ai.dispatch(
                          Mn({
                            name: "collision-avoidance-lv1-distance-max",
                            value: e,
                          })
                        );
                      },
                    }),
                ],
              }),
              (0, m.jsxs)(Np, {
                children: [
                  (0, m.jsx)(Tp, { title: "surveillance-mode" }),
                  e &&
                    e["surveillance-lv3-distance-max"] &&
                    (0, m.jsx)(qp, {
                      name: "surveillance-lv3-distance-max",
                      type: Bp,
                      value: e["surveillance-lv3-distance-max"].value,
                      values: e["surveillance-lv3-distance-max"].values,
                      unit: Rr.METERS,
                      locker: function (t) {
                        return t >= e["surveillance-lv1-distance-max"].value;
                      },
                      description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      handleChange: function (e) {
                        return ai.dispatch(
                          Mn({
                            name: "surveillance-lv3-distance-max",
                            value: e,
                          })
                        );
                      },
                    }),
                  e &&
                    e["surveillance-lv1-distance-max"] &&
                    (0, m.jsx)(qp, {
                      name: "surveillance-lv1-distance-max",
                      type: Bp,
                      value: e["surveillance-lv1-distance-max"].value,
                      values: e["surveillance-lv1-distance-max"].values,
                      unit: Rr.METERS,
                      locker: function (t) {
                        return t <= e["surveillance-lv3-distance-max"].value;
                      },
                      description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      handleChange: function (e) {
                        return ai.dispatch(
                          Mn({
                            name: "surveillance-lv1-distance-max",
                            value: e,
                          })
                        );
                      },
                    }),
                ],
              }),
              (0, m.jsxs)(Np, {
                children: [
                  (0, m.jsx)(Tp, { title: "manual-mode" }),
                  e &&
                    e["manual-lv3-distance-max"] &&
                    (0, m.jsx)(qp, {
                      name: "manual-lv3-distance-max",
                      type: Bp,
                      value: e["manual-lv3-distance-max"].value,
                      values: e["manual-lv3-distance-max"].values,
                      unit: Rr.METERS,
                      locker: function (t) {
                        return t >= e["manual-lv1-distance-max"].value;
                      },
                      description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      handleChange: function (e) {
                        return ai.dispatch(
                          Mn({ name: "manual-lv3-distance-max", value: e })
                        );
                      },
                    }),
                  e &&
                    e["manual-lv1-distance-max"] &&
                    (0, m.jsx)(qp, {
                      name: "manual-lv1-distance-max",
                      type: Bp,
                      value: e["manual-lv1-distance-max"].value,
                      values: e["manual-lv1-distance-max"].values,
                      unit: Rr.METERS,
                      locker: function (t) {
                        return t <= e["manual-lv3-distance-max"].value;
                      },
                      description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      handleChange: function (e) {
                        return ai.dispatch(
                          Mn({ name: "manual-lv1-distance-max", value: e })
                        );
                      },
                    }),
                ],
              }),
            ],
          });
        },
        Yp = ["title", "titleId"];
      function Qp() {
        return (
          (Qp =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Qp.apply(this, arguments)
        );
      }
      function Xp(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Jp(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Xp(t, Yp);
        return e.createElement(
          "svg",
          Qp(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          $p ||
            ($p = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.343 4.16729C12.2373 4.12367 12.1215 4.09961 12 4.09961C11.7585 4.09961 11.5392 4.19474 11.3776 4.34956C11.3723 4.35456 11.3672 4.35963 11.3621 4.36475L7.47472 8.2521C7.12325 8.60357 7.12325 9.17342 7.47472 9.52489C7.8262 9.87637 8.39604 9.87637 8.74752 9.52489L11.1 7.17241V14.3329C11.1 14.83 11.5029 15.2329 12 15.2329C12.4971 15.2329 12.9 14.83 12.9 14.3329V7.1724L15.2525 9.52489C15.604 9.87637 16.1738 9.87637 16.5253 9.52489C16.8768 9.17342 16.8768 8.60357 16.5253 8.2521L12.6364 4.36321C12.5497 4.27653 12.4497 4.21122 12.343 4.16729ZM5.00001 13.4326C5.49706 13.4326 5.90001 13.8356 5.90001 14.3326V17.4437C5.90001 17.6176 5.96907 17.7843 6.09201 17.9073C6.21495 18.0302 6.3817 18.0993 6.55556 18.0993H17.4445C17.6183 18.0993 17.7851 18.0302 17.908 17.9073C18.0309 17.7843 18.1 17.6176 18.1 17.4437V14.3326C18.1 13.8356 18.503 13.4326 19 13.4326C19.4971 13.4326 19.9 13.8356 19.9 14.3326V17.4437C19.9 18.095 19.6413 18.7196 19.1808 19.1801C18.7203 19.6406 18.0957 19.8993 17.4445 19.8993H6.55556C5.90431 19.8993 5.27973 19.6406 4.81922 19.1801C4.35872 18.7196 4.10001 18.095 4.10001 17.4437V14.3326C4.10001 13.8356 4.50295 13.4326 5.00001 13.4326Z",
              fill: "white",
            }))
        );
      }
      var eh = e.forwardRef(Jp);
      n.p;
      var th = function (e) {
          var t = e.handleInput,
            n = e.handleFile,
            r = e.inputText,
            i = e.buttonText,
            a = e.enable;
          return (0, m.jsxs)("div", {
            className: "upload",
            children: [
              (0, m.jsx)("form", {
                className: "upload-form",
                children: (0, m.jsxs)("label", {
                  children: [
                    (0, m.jsx)("input", { type: "file", onInput: t }),
                    (0, m.jsx)(si, { tid: r }),
                  ],
                }),
              }),
              (0, m.jsxs)("span", {
                className: a ? "upload-button" : "upload-button disabled",
                onClick: n,
                children: [(0, m.jsx)(eh, {}), (0, m.jsx)(si, { tid: i })],
              }),
            ],
          });
        },
        nh = function (e) {
          var t = e.text;
          return (0, m.jsx)("p", { className: "importantText", children: t });
        },
        rh = function (e) {
          var t = e.info;
          return (0, m.jsx)("p", {
            className: "information",
            children: (0, m.jsx)(si, { tid: t }),
          });
        },
        ih = n.p + "static/media/hardware-unit.f6aa5f6507e0ea753592.png",
        ah = function (e) {
          var t = e.children;
          return (0, m.jsx)("div", {
            className: "settingsHardwareGroup",
            children: t,
          });
        },
        oh = function (e) {
          var t = e.children;
          return (0, m.jsx)("div", { className: "settingsLine", children: t });
        },
        lh = function (e) {
          var t = e.children;
          return (0, m.jsx)("div", {
            className: "settingsLineSpaceBetween",
            children: t,
          });
        };
      var uh,
        sh = function () {
          var t = h(function (e) {
              return e.socket.versions;
            }),
            n = Li((0, e.useState)(null), 2),
            r = n[0],
            i = n[1],
            a = Li((0, e.useState)(!1), 2),
            o = a[0],
            l = a[1],
            u = Li((0, e.useState)(null), 2),
            s = u[0],
            c = u[1],
            f = Li((0, e.useState)(!1), 2),
            d = f[0],
            p = f[1],
            v = h(function (e) {
              return e.socket.connection.update;
            }),
            g = h(function (e) {
              return e.settings.developerMode;
            });
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsxs)(ah, {
                children: [
                  (0, m.jsx)(oh, {
                    children: (0, m.jsx)(rh, { info: "hardware-unit" }),
                  }),
                  (0, m.jsx)("img", { src: ih, alt: "hardware-unit" }),
                  (0, m.jsx)(Tp, { title: "SENTRY" }),
                ],
              }),
              (0, m.jsxs)(Np, {
                children: [
                  (0, m.jsx)(Gp, {
                    children: (0, m.jsx)(Tp, { title: "SOFTWARE" }),
                  }),
                  t &&
                    (0, m.jsxs)(Gp, {
                      children: [
                        g
                          ? Object.keys(t).map(function (e) {
                              return (0,
                              m.jsxs)(lh, { children: [(0, m.jsx)(rh, { info: e + ":" }), (0, m.jsx)(Lp, { description: t[e].version })] }, e);
                            })
                          : (0, m.jsxs)(lh, {
                              children: [
                                (0, m.jsx)(rh, { info: "version:" }),
                                (0, m.jsx)(Lp, {
                                  description: t.Package.version,
                                }),
                              ],
                            }),
                        (0, m.jsxs)(lh, {
                          children: [
                            (0, m.jsx)(rh, { info: "last updated:" }),
                            (0, m.jsx)(Lp, {
                              description: new Date(
                                1e3 * t.Package.installDate
                              ).toLocaleDateString("en-us", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              (0, m.jsxs)(Np, {
                children: [
                  (0, m.jsx)(Gp, {
                    children: (0, m.jsx)(Tp, { title: "SYSTEM UPDATE" }),
                  }),
                  (0, m.jsxs)(Gp, {
                    children: [
                      (0, m.jsx)(Lp, { description: "update description" }),
                      (0, m.jsx)(th, {
                        handleInput: function (e) {
                          e.target.files &&
                            e.target.files[0] &&
                            (i(e.target.files[0].name),
                            c(e.target.files[0]),
                            l(
                              v &&
                                v.info === hn &&
                                e.target.files[0].name.endsWith(".oscar")
                            ),
                            p(
                              v &&
                                v.info === hn &&
                                !e.target.files[0].name.endsWith(".oscar")
                            ));
                        },
                        handleFile: function () {
                          return ai.dispatch(
                            (function (e) {
                              return { type: Mt, payload: e };
                            })(s)
                          );
                        },
                        inputText: r || "select file",
                        buttonText: "upload file",
                        enable: o,
                      }),
                      v &&
                        v.info !== hn &&
                        (0, m.jsx)(nh, { text: "update server unavailable" }),
                      d &&
                        (0, m.jsx)(nh, {
                          text: (0, m.jsx)(si, { tid: "invalid update file" }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ch = function (e) {
          var t = e.description;
          return (0, m.jsx)("p", {
            className: "description-white",
            children: (0, m.jsx)(si, { tid: t }),
          });
        },
        fh = ["title", "titleId"];
      function dh() {
        return (
          (dh =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          dh.apply(this, arguments)
        );
      }
      function ph(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function hh(t, n) {
        var r = t.title,
          i = t.titleId,
          a = ph(t, fh);
        return e.createElement(
          "svg",
          dh(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          uh ||
            (uh = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.71818 4C9.4075 4 9.11878 4.16024 8.95443 4.42389L7.76413 6.33333H5.35455C4.70984 6.33333 4.10483 6.60778 3.66864 7.07425C3.23438 7.53868 3 8.15641 3 8.78889V17.3444C3 17.9769 3.23438 18.5947 3.66864 19.0591C4.10482 19.5256 4.70984 19.8 5.35455 19.8H18.4455C19.0902 19.8 19.6952 19.5256 20.1314 19.0591C20.5656 18.5947 20.8 17.9769 20.8 17.3444V8.78889C20.8 8.1564 20.5656 7.53868 20.1314 7.07425C19.6952 6.60778 19.0902 6.33333 18.4455 6.33333H16.0359L14.8456 4.42389C14.6812 4.16024 14.3925 4 14.0818 4H9.71818ZM9.02739 7.70944L10.2177 5.8H13.5823L14.7726 7.70944C14.937 7.97309 15.2257 8.13333 15.5364 8.13333H18.4455C18.5723 8.13333 18.7072 8.18666 18.8166 8.30364C18.9279 8.42266 19 8.59626 19 8.78889V17.3444C19 17.5371 18.9279 17.7107 18.8166 17.8297C18.7072 17.9467 18.5723 18 18.4455 18H5.35455C5.22771 18 5.09279 17.9467 4.98341 17.8297C4.87212 17.7107 4.8 17.5371 4.8 17.3444V8.78889C4.8 8.59625 4.87212 8.42266 4.98341 8.30364C5.09279 8.18666 5.22771 8.13333 5.35455 8.13333H8.26364C8.57432 8.13333 8.86304 7.97309 9.02739 7.70944ZM9.8 12.9C9.8 11.7402 10.7402 10.8 11.9 10.8C13.0598 10.8 14 11.7402 14 12.9C14 14.0598 13.0598 15 11.9 15C10.7402 15 9.8 14.0598 9.8 12.9ZM11.9 9C9.74609 9 8 10.7461 8 12.9C8 15.0539 9.74609 16.8 11.9 16.8C14.0539 16.8 15.8 15.0539 15.8 12.9C15.8 10.7461 14.0539 9 11.9 9Z",
              fill: "white",
            }))
        );
      }
      var mh,
        vh = e.forwardRef(hh),
        gh = (n.p, ["title", "titleId"]);
      function yh() {
        return (
          (yh =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          yh.apply(this, arguments)
        );
      }
      function bh(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function wh(t, n) {
        var r = t.title,
          i = t.titleId,
          a = bh(t, gh);
        return e.createElement(
          "svg",
          yh(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          mh ||
            (mh = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.9 4.99961C12.9 4.50255 12.4971 4.09961 12 4.09961C11.5029 4.09961 11.1 4.50255 11.1 4.99961V12.1601L8.7475 9.80755C8.39603 9.45608 7.82618 9.45608 7.47471 9.80755C7.12324 10.159 7.12324 10.7289 7.47471 11.0803L11.3552 14.9609C11.5187 15.1287 11.7472 15.233 12 15.233C12.253 15.233 12.4817 15.1285 12.6452 14.9604L16.5253 11.0803C16.8768 10.7289 16.8768 10.159 16.5253 9.80755C16.1738 9.45608 15.604 9.45608 15.2525 9.80755L12.9 12.16V4.99961ZM4.99999 13.4326C5.49705 13.4326 5.89999 13.8356 5.89999 14.3326V17.4437C5.89999 17.6176 5.96906 17.7843 6.092 17.9073C6.21494 18.0302 6.38168 18.0993 6.55555 18.0993H17.4445C17.6183 18.0993 17.7851 18.0302 17.908 17.9073C18.0309 17.7843 18.1 17.6176 18.1 17.4437V14.3326C18.1 13.8356 18.503 13.4326 19 13.4326C19.4971 13.4326 19.9 13.8356 19.9 14.3326V17.4437C19.9 18.095 19.6413 18.7196 19.1808 19.1801C18.7203 19.6406 18.0957 19.8993 17.4445 19.8993H6.55555C5.90429 19.8993 5.27971 19.6406 4.81921 19.1801C4.3587 18.7196 4.09999 18.095 4.09999 17.4437V14.3326C4.09999 13.8356 4.50293 13.4326 4.99999 13.4326Z",
              fill: "white",
            }))
        );
      }
      var Ch,
        xh = e.forwardRef(wh),
        Eh = (n.p, ["title", "titleId"]);
      function Sh() {
        return (
          (Sh =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Sh.apply(this, arguments)
        );
      }
      function Oh(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function jh(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Oh(t, Eh);
        return e.createElement(
          "svg",
          Sh(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Ch ||
            (Ch = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M16.0045 5.2319C14.5357 4.41993 12.8428 4.10731 11.1809 4.34113C9.5236 4.5743 7.98664 5.33829 6.80026 6.51838L4.79927 8.39862V5.91907C4.79927 5.42201 4.39633 5.01907 3.89927 5.01907C3.40221 5.01907 2.99927 5.42201 2.99927 5.91907V10.3797C2.99927 10.3969 2.9997 10.414 3.00056 10.431C2.98788 10.6678 3.06821 10.9092 3.24339 11.0956C3.43145 11.2957 3.68946 11.3907 3.94382 11.3782C3.96217 11.3792 3.98066 11.3797 3.99927 11.3797H8.45992C8.95698 11.3797 9.35992 10.9768 9.35992 10.4797C9.35992 9.98267 8.95698 9.57972 8.45992 9.57972H6.17091L8.04247 7.8211L8.0524 7.81178L8.06203 7.80216C8.97359 6.89214 10.1562 6.30303 11.4317 6.12358C12.7072 5.94412 14.0064 6.18405 15.1337 6.80722C16.2609 7.43038 17.1551 8.40302 17.6815 9.57858C18.208 10.7541 18.3381 12.0689 18.0523 13.3249C17.7665 14.5808 17.0802 15.7098 16.097 16.5418C15.1137 17.3738 13.8867 17.8638 12.6008 17.9378C11.3148 18.0118 10.0397 17.6659 8.96747 16.9522C7.89525 16.2385 7.08401 15.1956 6.656 13.9808C6.49083 13.512 5.97689 13.2658 5.50808 13.431C5.03927 13.5962 4.79312 14.1101 4.95829 14.5789C5.51597 16.1618 6.573 17.5206 7.97009 18.4506C9.36718 19.3805 11.0287 19.8312 12.7042 19.7348C14.3797 19.6384 15.9785 19 17.2597 17.9159C18.5408 16.8318 19.435 15.3607 19.8074 13.7243C20.1798 12.0878 20.0103 10.3747 19.3244 8.84293C18.6385 7.3112 17.4733 6.04387 16.0045 5.2319Z",
              fill: "white",
            }))
        );
      }
      var kh,
        _h = e.forwardRef(jh),
        Nh = (n.p, ["title", "titleId"]);
      function Th() {
        return (
          (Th =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Th.apply(this, arguments)
        );
      }
      function Lh(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Rh(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Lh(t, Nh);
        return e.createElement(
          "svg",
          Th(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          kh ||
            (kh = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M3 6.56515C3 6.485 3.00344 6.40512 3.01027 6.32571C3.05184 5.8419 3.21885 5.37575 3.49667 4.97414C3.82009 4.50661 4.27831 4.14875 4.81027 3.94824L4.81027 5.88283L4.81027 6.42246V6.43332C4.81149 6.55531 4.86049 6.67197 4.94676 6.75824C5.03303 6.84451 5.14969 6.89352 5.27169 6.89474L6.32636 6.89474C6.44836 6.89352 6.56501 6.84451 6.65128 6.75824C6.73755 6.67197 6.78656 6.55531 6.78778 6.43332V6.42246V5.88283L6.78778 3.94824C7.31974 4.14875 7.77796 4.50661 8.10138 4.97414C8.3792 5.37575 8.54621 5.84191 8.58778 6.32572C8.5946 6.40512 8.59805 6.485 8.59805 6.56515C8.59805 7.13364 8.42479 7.68863 8.10138 8.15616C7.77796 8.62369 7.31974 8.98155 6.78778 9.18206L6.78778 13.7369C6.78778 13.9992 6.68361 14.2507 6.49818 14.4361C6.31275 14.6215 6.06126 14.7257 5.79902 14.7257C5.53679 14.7257 5.28529 14.6215 5.09987 14.4361C4.91444 14.2507 4.81027 13.9992 4.81027 13.7369L4.81027 9.18206C4.27831 8.98155 3.82009 8.62369 3.49667 8.15616C3.17325 7.68863 3 7.13364 3 6.56515ZM14.6315 8.42637C13.6461 8.42637 12.8473 9.22519 12.8473 10.2106C12.8473 11.196 13.6461 11.9948 14.6315 11.9948C15.6169 11.9948 16.4157 11.196 16.4157 10.2106C16.4157 9.22519 15.6169 8.42637 14.6315 8.42637ZM11.0473 10.2106C11.0473 8.23107 12.652 6.62637 14.6315 6.62637C16.611 6.62637 18.2157 8.23107 18.2157 10.2106C18.2157 12.1901 16.611 13.7948 14.6315 13.7948C12.652 13.7948 11.0473 12.1901 11.0473 10.2106ZM9.38041 15.8506C10.0435 15.1138 10.9644 14.6791 11.9474 14.6791H17.3158C18.2988 14.6791 19.2197 15.1138 19.8828 15.8506C20.5431 16.5842 20.9 17.5607 20.9 18.5616V20.0528C20.9 20.5498 20.4971 20.9528 20 20.9528C19.503 20.9528 19.1 20.5498 19.1 20.0528V18.5616C19.1 17.9804 18.8914 17.4397 18.5449 17.0547C18.2012 16.6728 17.7566 16.4791 17.3158 16.4791H11.9474C11.5066 16.4791 11.062 16.6728 10.7183 17.0547C10.3718 17.4397 10.1632 17.9804 10.1632 18.5616V20.0528C10.1632 20.5498 9.76024 20.9528 9.26318 20.9528C8.76613 20.9528 8.36318 20.5498 8.36318 20.0528V18.5616C8.36318 17.5607 8.72015 16.5842 9.38041 15.8506Z",
              fill: "white",
            }))
        );
      }
      var Ih,
        Mh = e.forwardRef(Rh),
        Ph =
          (n.p,
          function (t) {
            var n = t.buttonText,
              r = t.handleSubmit,
              i = Li((0, e.useState)(null), 2),
              a = i[0],
              o = i[1];
            return (0, m.jsxs)("div", {
              className: "passwordInput",
              children: [
                (0, m.jsx)("form", {
                  autoComplete: "off",
                  children: (0, m.jsx)("input", {
                    className: "passwordInput-input",
                    type: "password",
                    placeholder: "Password",
                    autoComplete: "false",
                    onChange: function (e) {
                      o(e.currentTarget.value);
                    },
                    onKeyDown: function (e) {
                      "Enter" === e.key && (e.preventDefault(), r(a));
                    },
                  }),
                }),
                (0, m.jsxs)("button", {
                  className: "passwordInput-button",
                  onClick: function () {
                    return r(a);
                  },
                  children: [(0, m.jsx)(Mh, {}), (0, m.jsx)(si, { tid: n })],
                }),
              ],
            });
          }),
        Ah = function (e) {
          var t = e.text;
          return (0, m.jsx)("p", {
            className: "importantTextSuccess",
            children: t,
          });
        },
        Dh = function (e) {
          var t = e.progress;
          return (0, m.jsxs)("div", {
            className: "progressBar",
            children: [
              (0, m.jsx)("div", {
                className: "progressBar-bar",
                style: { width: "".concat(t, "%") },
              }),
              (0, m.jsx)("span", {
                className: "progressBar-bar-progress",
                children: "".concat(t, "%"),
              }),
            ],
          });
        },
        Vh = ["title", "titleId"];
      function Bh() {
        return (
          (Bh =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Bh.apply(this, arguments)
        );
      }
      function Hh(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Fh(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Hh(t, Vh);
        return e.createElement(
          "svg",
          Bh(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Ih ||
            (Ih = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12 4.89961C8.07878 4.89961 4.9 8.07839 4.9 11.9996C4.9 15.9208 8.07878 19.0996 12 19.0996C15.9212 19.0996 19.1 15.9208 19.1 11.9996C19.1 8.07839 15.9212 4.89961 12 4.89961ZM3.1 11.9996C3.1 7.08428 7.08466 3.09961 12 3.09961C16.9153 3.09961 20.9 7.08428 20.9 11.9996C20.9 16.9149 16.9153 20.8996 12 20.8996C7.08466 20.8996 3.1 16.9149 3.1 11.9996ZM12 11.0996C12.4971 11.0996 12.9 11.5026 12.9 11.9996V15.1996C12.9 15.6967 12.4971 16.0996 12 16.0996C11.5029 16.0996 11.1 15.6967 11.1 15.1996V11.9996C11.1 11.5026 11.5029 11.0996 12 11.0996ZM12 7.89941C11.5029 7.89941 11.1 8.30236 11.1 8.79941C11.1 9.29647 11.5029 9.69941 12 9.69941H12.008C12.5051 9.69941 12.908 9.29647 12.908 8.79941C12.908 8.30236 12.5051 7.89941 12.008 7.89941H12Z",
              fill: "white",
            }))
        );
      }
      var Uh,
        zh = e.forwardRef(Fh),
        Gh = (n.p, ["title", "titleId"]);
      function Zh() {
        return (
          (Zh =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Zh.apply(this, arguments)
        );
      }
      function qh(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Wh(t, n) {
        var r = t.title,
          i = t.titleId,
          a = qh(t, Gh);
        return e.createElement(
          "svg",
          Zh(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Uh ||
            (Uh = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M5.36358 8.36321C5.71505 8.01174 6.2849 8.01174 6.63637 8.36321L12 13.7268L17.3636 8.36321C17.7151 8.01174 18.2849 8.01174 18.6364 8.36321C18.9878 8.71469 18.9878 9.28453 18.6364 9.63601L12.6364 15.636C12.2849 15.9875 11.7151 15.9875 11.3636 15.636L5.36358 9.63601C5.01211 9.28453 5.01211 8.71469 5.36358 8.36321Z",
              fill: "white",
            }))
        );
      }
      var $h,
        Kh = e.forwardRef(Wh),
        Yh = (n.p, ["title", "titleId"]);
      function Qh() {
        return (
          (Qh =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Qh.apply(this, arguments)
        );
      }
      function Xh(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Jh(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Xh(t, Yh);
        return e.createElement(
          "svg",
          Qh(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          $h ||
            ($h = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11.3636 8.36321C11.7151 8.01174 12.2849 8.01174 12.6364 8.36321L18.6364 14.3632C18.9878 14.7147 18.9878 15.2845 18.6364 15.636C18.2849 15.9875 17.7151 15.9875 17.3636 15.636L12 10.2724L6.63637 15.636C6.2849 15.9875 5.71505 15.9875 5.36358 15.636C5.01211 15.2845 5.01211 14.7147 5.36358 14.3632L11.3636 8.36321Z",
              fill: "white",
            }))
        );
      }
      var em,
        tm = e.forwardRef(Jh),
        nm =
          (n.p,
          function (t) {
            var n = t.selected,
              r = t.options,
              i = t.onChange,
              a = t.locked,
              o = void 0 !== a && a,
              l = t.nmeaProperty,
              u = void 0 !== l && l,
              s = Li((0, e.useState)(!1), 2),
              c = s[0],
              f = s[1],
              d = Li((0, e.useState)(n), 2),
              p = d[0],
              h = d[1],
              v = (0, e.useRef)();
            return (0, m.jsxs)("div", {
              className: "dropdown",
              children: [
                (0, m.jsxs)("div", {
                  ref: v,
                  onClick: function () {
                    o || Object.keys(r).length <= 1 || f(!c);
                  },
                  className:
                    Object.keys(r).length <= 1 || o
                      ? "dropdown-input locked"
                      : "dropdown-input",
                  children: [
                    (0, m.jsx)("div", {
                      className: "dropdown-selected-value",
                      children:
                        -1 === p
                          ? (0, m.jsx)(si, { tid: "no source" })
                          : r[p]
                          ? "[" + p + "] " + r[p]["src-name"]
                          : p,
                    }),
                    (0, m.jsx)("div", {
                      className: "dropdown-tools",
                      children: (0, m.jsx)("div", {
                        className: "dropdown-tool",
                        children: c ? (0, m.jsx)(tm, {}) : (0, m.jsx)(Kh, {}),
                      }),
                    }),
                  ],
                }),
                c &&
                  (0, m.jsx)("div", {
                    className: "dropdown-menu",
                    children: u
                      ? Object.keys(r).map(function (e) {
                          return (0, m.jsxs)(
                            "div",
                            {
                              onClick: function () {
                                h(e), f(!1), i(e);
                              },
                              className:
                                parseInt(p) === parseInt(e)
                                  ? "dropdown-menu-option selected"
                                  : "dropdown-menu-option",
                              children: [
                                (0, m.jsx)("div", {
                                  className: "dropdown-menu-option-source",
                                  children: "[" + e + "] " + r[e]["src-name"],
                                }),
                                (0, m.jsx)("div", {
                                  className: "dropdown-menu-option-values",
                                  children: Object.keys(r[e]).map(function (t) {
                                    if ("src-name" !== t)
                                      return (0, m.jsxs)(
                                        "div",
                                        {
                                          className:
                                            "dropdown-menu-option-values-value",
                                          children: [
                                            r[e][t].value,
                                            (0, m.jsx)(si, {
                                              tid:
                                                r[e][t].unit + "_abbreviation",
                                            }),
                                          ],
                                        },
                                        t
                                      );
                                  }),
                                }),
                              ],
                            },
                            e
                          );
                        })
                      : r.map(function (e) {
                          return (0, m.jsx)(
                            "div",
                            {
                              onClick: function () {
                                h(e), f(!1), i(e);
                              },
                              className:
                                p === e
                                  ? "dropdown-menu-option selected"
                                  : "dropdown-menu-option",
                              children: (0, m.jsx)("div", {
                                className: "dropdown-menu-option-source",
                                children: e,
                              }),
                            },
                            e
                          );
                        }),
                  }),
              ],
            });
          }),
        rm = ["title", "titleId"];
      function im() {
        return (
          (im =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          im.apply(this, arguments)
        );
      }
      function am(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function om(t, n) {
        var r = t.title,
          i = t.titleId,
          a = am(t, rm);
        return e.createElement(
          "svg",
          im(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          em ||
            (em = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M20.6081 5.33618C20.9745 5.67205 20.9993 6.24136 20.6634 6.60777L9.66342 18.6078C9.49295 18.7937 9.25226 18.8996 8.99998 18.8996C8.7477 18.8996 8.50701 18.7937 8.33654 18.6078L3.33654 13.1532C3.00067 12.7868 3.02542 12.2175 3.39183 11.8816C3.75824 11.5458 4.32755 11.5705 4.66342 11.9369L8.99998 16.6677L19.3365 5.39146C19.6724 5.02506 20.2417 5.0003 20.6081 5.33618Z",
              fill: "white",
            }))
        );
      }
      var lm = e.forwardRef(om),
        um = (n.p, "GREEN"),
        sm = "YELLOW",
        cm = function (e) {
          var t = e.state,
            n = e.text;
          return (0, m.jsxs)("div", {
            className: "statePill " + t,
            children: [
              "RED" === t
                ? (0, m.jsx)(zh, {})
                : t === sm
                ? (0, m.jsx)($, {})
                : t === um
                ? (0, m.jsx)(lm, {})
                : (0, m.jsx)(m.Fragment, {}),
              (0, m.jsx)("p", { children: (0, m.jsx)(si, { tid: n }) }),
            ],
          });
        },
        fm = function (t) {
          var n = t.settings,
            r = t.state,
            i = h(function (e) {
              return e.settings.developerMode;
            }),
            a = Li((0, e.useState)(n && n["nmea-gateway-model"].value), 2),
            o = a[0],
            l = a[1],
            u = Li((0, e.useState)(n && n["nmea-gateway-ip-address"].value), 2),
            s = u[0],
            c = u[1],
            f = Li((0, e.useState)(n && n["nmea-gateway-port"].value), 2),
            d = f[0],
            p = f[1];
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsxs)("div", {
                className: "boatBusConfiguration-info",
                children: [
                  (0, m.jsx)("div", { children: (0, m.jsx)(zh, {}) }),
                  (0, m.jsx)("p", {
                    children: (0, m.jsx)(si, { tid: "boatbus-info-temp" }),
                  }),
                ],
              }),
              r && "DISCONNECTED" === r.BOATBUS
                ? (0, m.jsx)(cm, { state: "RED", text: "boatbus-failed" })
                : r && "CONNECTING" === r.BOATBUS
                ? (0, m.jsx)(cm, { state: sm, text: "boatbus-loading" })
                : r && "CONNECTED" === r.BOATBUS
                ? (0, m.jsx)(cm, { state: um, text: "boatbus-connected" })
                : (0, m.jsx)(m.Fragment, {}),
              (0, m.jsxs)("div", {
                className: "boatBusConfiguration",
                children: [
                  (0, m.jsxs)("form", {
                    autoComplete: "off",
                    children: [
                      (0, m.jsxs)("div", {
                        children: [
                          (0, m.jsx)(si, { tid: "boatbus model" }),
                          (0, m.jsx)(nm, {
                            locked: !i,
                            selected: o,
                            options: n["nmea-gateway-model"].values,
                            onChange: function (e) {
                              l(e);
                            },
                          }),
                        ],
                      }),
                      (0, m.jsxs)("div", {
                        children: [
                          (0, m.jsx)(si, { tid: "boatbus ip" }),
                          (0, m.jsx)("input", {
                            className: "boatBusConfiguration-input",
                            value: s,
                            onChange: function (e) {
                              c(e.currentTarget.value);
                            },
                          }),
                        ],
                      }),
                      (0, m.jsxs)("div", {
                        children: [
                          (0, m.jsx)(si, { tid: "boatbus port" }),
                          (0, m.jsx)("input", {
                            className: "boatBusConfiguration-input",
                            value: d,
                            onChange: function (e) {
                              p(e.currentTarget.value);
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, m.jsx)("button", {
                    disabled:
                      !/^[0-9]{1,5}$/.test(d) ||
                      !/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/.test(s),
                    onClick: function () {
                      var e;
                      ai.dispatch(
                        ((e = { model: o, ip: s, port: parseInt(d) }),
                        { type: Ht, payload: e })
                      );
                    },
                    children: (0, m.jsx)(si, { tid: "boatbus confirm" }),
                  }),
                ],
              }),
            ],
          });
        };
      var dm = function (t) {
        var n = t.settings,
          r = t.boatbus;
        return (0, m.jsx)(m.Fragment, {
          children:
            r &&
            n &&
            Object.keys(r).map(function (t) {
              var i = n[t + "-src"] ? n[t + "-src"].value : null;
              return (0, m.jsxs)(
                "div",
                {
                  className: "boatBusGroup",
                  children: [
                    (0, m.jsx)(Tp, { title: t }),
                    (0, m.jsx)(nm, {
                      selected: i,
                      options: r[t],
                      nmeaProperty: !0,
                      onChange: function (e) {
                        ai.dispatch(
                          Mn({ name: t + "-src", value: parseInt(e) })
                        );
                      },
                    }),
                    (0, m.jsx)("div", {
                      className: "boatBusGroup-select",
                      children: (0, m.jsx)("div", {
                        className: "boatBusGroup-select-properties",
                        children: r[t].hasOwnProperty(i)
                          ? (0, m.jsx)(m.Fragment, {
                              children: Object.keys(r[t]).map(function (i) {
                                return 0 === Object.keys(r[t][i]).length &&
                                  n[t + "-src"].value === parseInt(i)
                                  ? (0, m.jsx)(
                                      "p",
                                      {
                                        children: (0, m.jsx)(si, {
                                          tid: "no values",
                                        }),
                                      },
                                      i
                                    )
                                  : (0, m.jsx)(
                                      e.Fragment,
                                      {
                                        children: Object.keys(r[t][i]).map(
                                          function (e) {
                                            if (
                                              n[t + "-src"].value ===
                                                parseInt(i) &&
                                              "src-name" !== e
                                            )
                                              return (0, m.jsxs)(
                                                "div",
                                                {
                                                  className:
                                                    "boatBusGroup-select-properties-property",
                                                  children: [
                                                    (0, m.jsx)("p", {
                                                      children: (0, m.jsx)(si, {
                                                        tid: e,
                                                      }),
                                                    }),
                                                    (0, m.jsxs)("p", {
                                                      className:
                                                        "boatBusGroup-select-properties-property-value",
                                                      children: [
                                                        r[t][i][e].value,
                                                        (0, m.jsx)(si, {
                                                          tid:
                                                            r[t][i][e].unit +
                                                            "_abbreviation",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                e
                                              );
                                          }
                                        ),
                                      },
                                      i
                                    );
                              }),
                            })
                          : (0, m.jsx)("p", {
                              children: (0, m.jsx)(si, { tid: "no values" }),
                            }),
                      }),
                    }),
                  ],
                },
                t
              );
            }),
        });
      };
      var pm,
        hm = function () {
          var t = h(function (e) {
              return e.socket.settings;
            }),
            n = h(function (e) {
              return e.settings.maskSuccess;
            }),
            r = h(function (e) {
              return e.settings.installerMode;
            }),
            i = h(function (e) {
              return e.settings.developerMode;
            }),
            a =
              h(function (e) {
                return e.socket.boatbus;
              }) || {},
            o = h(function (e) {
              return e.socket.state;
            }),
            l = h(function (e) {
              return e.settings.IP;
            }),
            u = Li((0, e.useState)(null), 2),
            s = u[0],
            c = u[1],
            f = Li((0, e.useState)(!1), 2),
            d = f[0],
            p = f[1],
            v = Li((0, e.useState)(null), 2),
            g = v[0],
            y = v[1],
            b = Li((0, e.useState)(!1), 2),
            w = b[0],
            C = b[1];
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsxs)(Np, {
                children: [
                  (0, m.jsx)(Tp, { title: "boatbus setup" }),
                  (0, m.jsx)(fm, { settings: t, state: o }),
                  o &&
                    "CONNECTED" === o.BOATBUS &&
                    (0, m.jsxs)(m.Fragment, {
                      children: [
                        (0, m.jsx)("hr", { className: "installation-dash" }),
                        (0, m.jsx)(Tp, { title: "boatbus sources" }),
                        (0, m.jsx)(dm, { settings: t, boatbus: a }),
                      ],
                    }),
                ],
              }),
              (r || i) &&
                (0, m.jsxs)(Np, {
                  children: [
                    (0, m.jsx)(Tp, { title: "Vessel Parameters" }),
                    t &&
                      t["mounting-height"] &&
                      (0, m.jsx)(qp, {
                        name: "mounting-height-input",
                        type: Dp,
                        value: t["mounting-height"].value,
                        unit: "m",
                        description:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        handleChange: function (e) {
                          return ai.dispatch(
                            Mn({ name: "mounting-height", value: e })
                          );
                        },
                      }),
                    t &&
                      t["mast-to-bow-length"] &&
                      (0, m.jsx)(qp, {
                        name: "mast-to-bow-input",
                        type: Dp,
                        value: t["mast-to-bow-length"].value,
                        unit: "m",
                        description:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        handleChange: function (e) {
                          return ai.dispatch(
                            Mn({ name: "mast-to-bow-length", value: e })
                          );
                        },
                      }),
                  ],
                }),
              (r || i) &&
                (0, m.jsxs)(Np, {
                  children: [
                    (0, m.jsx)(Tp, { title: "CAMERA Obstruction Mask" }),
                    (0, m.jsxs)(Gp, {
                      children: [
                        (0, m.jsx)(Lp, {
                          description: "first camera mask step",
                        }),
                        o &&
                          o.PANORAMA &&
                          null === o.PANORAMA.state &&
                          (0, m.jsxs)("span", {
                            className: "installation-maskButton",
                            onClick: function () {
                              ai.dispatch(Jn());
                            },
                            children: [
                              (0, m.jsx)(vh, {}),
                              (0, m.jsx)(ch, {
                                description: "run camera mask",
                              }),
                            ],
                          }),
                        o &&
                          o.PANORAMA &&
                          "RUNNING" === o.PANORAMA.state &&
                          (0, m.jsx)(Dh, { progress: o.PANORAMA.progress }),
                        o &&
                          o.PANORAMA &&
                          "FINISHED" === o.PANORAMA.state &&
                          (0, m.jsxs)(oh, {
                            children: [
                              (0, m.jsxs)("a", {
                                className: "installation-maskButton",
                                href: "http://" + l + ":" + ir + ar,
                                download: "panorama-diagnosis.tiff",
                                children: [
                                  (0, m.jsx)(xh, {}),
                                  (0, m.jsx)(ch, {
                                    description: "download mask",
                                  }),
                                ],
                              }),
                              (0, m.jsxs)("span", {
                                className: "installation-maskButton retry",
                                onClick: function () {
                                  ai.dispatch(Jn());
                                },
                                children: [
                                  (0, m.jsx)(_h, {}),
                                  (0, m.jsx)(ch, {
                                    description: "rerun camera mask",
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, m.jsxs)(Gp, {
                      children: [
                        (0, m.jsx)(Lp, {
                          description: "second camera mask step",
                        }),
                        (0, m.jsx)(th, {
                          handleInput: function (e) {
                            e.target.files &&
                              e.target.files[0] &&
                              (c(e.target.files[0].name),
                              y(e.target.files[0]),
                              ai.dispatch(er("")),
                              e.target.files[0].name.endsWith(".oscar") ||
                              e.target.files[0].name.endsWith(".tiff")
                                ? (p(!0), C(!1))
                                : (p(!1), C(!0)));
                          },
                          handleFile: function () {
                            return ai.dispatch(
                              (function (e) {
                                return { type: At, payload: e };
                              })(g)
                            );
                          },
                          inputText: s || "select file",
                          buttonText: "upload file",
                          enable: d,
                        }),
                        w
                          ? (0, m.jsx)(Gp, {
                              children: (0, m.jsx)(nh, {
                                text: "Selected file is incompatible. Please try again.",
                              }),
                            })
                          : !0 === n
                          ? (0, m.jsx)(Gp, {
                              children: (0, m.jsx)(Ah, {
                                text: "Upload completed! You can now turn on the Camera Mask below.",
                              }),
                            })
                          : !1 === n
                          ? (0, m.jsx)(Gp, {
                              children: (0, m.jsx)(nh, {
                                text: "Mask upload failed. Please try again.",
                              }),
                            })
                          : (0, m.jsx)(m.Fragment, {}),
                      ],
                    }),
                    t &&
                      t["streaming-src"] &&
                      (0, m.jsx)(qp, {
                        name: "camera-mask-visualization-mode",
                        type: zp,
                        value:
                          "processing-pipeline" === t["streaming-src"].value,
                        description:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        handleChange: function (e) {
                          ai.dispatch(
                            Mn({ name: "debug-processing-pipeline", value: e })
                          ),
                            ai.dispatch(
                              Mn({ name: "trigger-worker-restart", value: !0 })
                            );
                        },
                      }),
                  ],
                }),
              !r &&
                !i &&
                (0, m.jsxs)(Np, {
                  children: [
                    (0, m.jsx)(Gp, {
                      children: (0, m.jsx)(Tp, { title: "auth" }),
                    }),
                    (0, m.jsxs)(Gp, {
                      children: [
                        (0, m.jsx)(Lp, { description: "auth description" }),
                        (0, m.jsx)(Ph, {
                          buttonText: "login as installer",
                          handleSubmit: function (e) {
                            "sentryinstaller" === e
                              ? ai.dispatch(Kn(!0))
                              : "powerdev123" === e && ai.dispatch($n(!0));
                          },
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        },
        mm = function (e) {
          var t = e.info;
          return (0, m.jsx)("p", {
            className: "informationXL",
            children: (0, m.jsx)(si, { tid: t }),
          });
        },
        vm = n.p + "static/media/qrcode.9cc498842f033edde08b.jpg",
        gm = ["title", "titleId"];
      function ym() {
        return (
          (ym =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          ym.apply(this, arguments)
        );
      }
      function bm(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function wm(t, n) {
        var r = t.title,
          i = t.titleId,
          a = bm(t, gm);
        return e.createElement(
          "svg",
          ym(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          pm ||
            (pm = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M20.7999 3.91337C20.8034 3.6786 20.7155 3.44274 20.5364 3.2636C20.3539 3.0811 20.1125 2.99336 19.8734 3.00039H14.8999C14.4028 3.00039 13.9999 3.40333 13.9999 3.90039C13.9999 4.39745 14.4028 4.80039 14.8999 4.80039H17.7268L9.2636 13.2636C8.91213 13.6151 8.91213 14.1849 9.2636 14.5364C9.61508 14.8879 10.1849 14.8879 10.5364 14.5364L18.9999 6.07289V8.90039C18.9999 9.39745 19.4028 9.80039 19.8999 9.80039C20.397 9.80039 20.7999 9.39745 20.7999 8.90039V3.91337ZM5.63333 7.8C5.41232 7.8 5.20036 7.8878 5.04408 8.04408C4.8878 8.20036 4.8 8.41232 4.8 8.63333V18.1667C4.8 18.3877 4.8878 18.5996 5.04408 18.7559C5.20036 18.9122 5.41232 19 5.63333 19H15.1667C15.3877 19 15.5996 18.9122 15.7559 18.7559C15.9122 18.5996 16 18.3877 16 18.1667V12.9667C16 12.4696 16.4029 12.0667 16.9 12.0667C17.3971 12.0667 17.8 12.4696 17.8 12.9667V18.1667C17.8 18.8651 17.5226 19.5349 17.0287 20.0287C16.5349 20.5226 15.8651 20.8 15.1667 20.8H5.63333C4.93493 20.8 4.26513 20.5226 3.77129 20.0287C3.27744 19.5349 3 18.8651 3 18.1667V8.63333C3 7.93493 3.27744 7.26513 3.77129 6.77129C4.26513 6.27744 4.93493 6 5.63333 6H10.8333C11.3304 6 11.7333 6.40294 11.7333 6.9C11.7333 7.39706 11.3304 7.8 10.8333 7.8H5.63333Z",
              fill: "white",
            }))
        );
      }
      var Cm = e.forwardRef(wm);
      n.p;
      var xm = function () {
        return (0, m.jsx)(m.Fragment, {
          children: (0, m.jsxs)("div", {
            className: "helpContentGroup",
            children: [
              (0, m.jsx)(Gp, {
                children: (0, m.jsx)("p", {
                  className: "helpContentGroup-title",
                  children: (0, m.jsx)(si, { tid: "contacts" }),
                }),
              }),
              (0, m.jsxs)(Gp, {
                children: [
                  (0, m.jsx)("p", {
                    className: "helpContentGroup-information",
                    children: "Phone",
                  }),
                  (0, m.jsx)(mm, { info: "+33 699 726 241" }),
                ],
              }),
              (0, m.jsxs)(Gp, {
                children: [
                  (0, m.jsx)("p", {
                    className: "helpContentGroup-information",
                    children: "Email",
                  }),
                  (0, m.jsx)(mm, { info: "service@sea.ai" }),
                ],
              }),
              (0, m.jsxs)(Gp, {
                children: [
                  (0, m.jsx)("p", {
                    className: "helpContentGroup-information",
                    children: "Whatsapp",
                  }),
                  (0, m.jsx)("img", {
                    className: "helpContentGroup-image",
                    src: vm,
                    alt: "qr-code",
                  }),
                  (0, m.jsxs)("a", {
                    className: "helpContentGroup-button",
                    href: "https://wa.me/message/PIQQ7M4CTKGHP1",
                    target: "_blank",
                    children: [
                      (0, m.jsx)(Cm, {}),
                      (0, m.jsx)(ch, { description: "whatsapp link" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var Em = function () {
        var e = h(function (e) {
            return e.socket.settings;
          }),
          t = h(function (e) {
            return e.settings.developerMode;
          });
        return (0, m.jsx)(m.Fragment, {
          children:
            t &&
            Object.keys(
              (function (e) {
                var t = {};
                return (
                  e &&
                    Object.keys(e).forEach(function (n) {
                      e[n].group &&
                        ((t[e[n].group] = t[e[n].group] || {}),
                        (t[e[n].group][n] = e[n]));
                    }),
                  t
                );
              })(e)
            ).map(function (t) {
              return (0, m.jsxs)(
                Np,
                {
                  children: [
                    (0, m.jsx)(Gp, { children: (0, m.jsx)(Tp, { title: t }) }),
                    Object.keys(e).map(function (n) {
                      if (e[n].group === t)
                        return (0, m.jsx)(
                          qp,
                          {
                            name: n,
                            type:
                              "boolean" === e[n].type
                                ? zp
                                : null !== e[n].values
                                ? "int" === e[n].type
                                  ? Hp
                                  : "double" === e[n].type
                                  ? Fp
                                  : Up
                                : "list_int" === e[n].type
                                ? Vp
                                : Dp,
                            value: e[n].value,
                            values: e[n].values,
                            unit: e[n].unit,
                            description: e[n].description,
                            handleChange: function (e) {
                              ai.dispatch(Mn({ name: n, value: e }));
                            },
                          },
                          n
                        );
                    }),
                  ],
                },
                t
              );
            }),
        });
      };
      var Sm = function () {
        var t =
            h(function (e) {
              return e.settings.label;
            }) || "general",
          n = h(function (e) {
            return e.settings.developerMode;
          }),
          r =
            h(function (e) {
              return e.menu.view;
            }) || ei,
          i = (0, e.useRef)(null),
          a = [
            { name: "general", content: (0, m.jsx)(Wp, {}, "general") },
            { name: "navigation", content: (0, m.jsx)(Kp, {}, "navigation") },
            { name: "system", content: (0, m.jsx)(sh, {}, "system") },
            {
              name: "installation",
              content: (0, m.jsx)(hm, {}, "installation"),
            },
            { name: "help", content: (0, m.jsx)(xm, {}, "help") },
            { name: "developer", content: (0, m.jsx)(Em, {}, "developer") },
          ];
        return (
          (0, e.useEffect)(function () {
            i.current.scroll({ top: 0 });
          }),
          (0, m.jsxs)("div", {
            className:
              "settings sidePanel grid-element " +
              (r !== ei ? " fullscreen" : ""),
            children: [
              (0, m.jsx)("div", {
                className: "settings-labelList",
                children: a.map(function (e) {
                  var r = e.name;
                  return (
                    ("developer" !== r || n) &&
                    (0, m.jsx)(
                      "p",
                      {
                        "data-key": r,
                        className:
                          t === r
                            ? "settings-labelList-label active"
                            : "settings-labelList-label",
                        onClick: function (e) {
                          ai.dispatch(In(e.target.dataset.key));
                        },
                        children: (0, m.jsx)(si, { tid: r }),
                      },
                      r
                    )
                  );
                }),
              }),
              (0, m.jsx)("div", {
                ref: i,
                className: "settings-content",
                children: a.map(function (e) {
                  var n = e.name,
                    r = e.content;
                  return n === t ? r : null;
                }),
              }),
            ],
          })
        );
      };
      var Om,
        jm = function (e) {
          return xa(e.name, 24, 0, 0);
        },
        km = ["title", "titleId"];
      function _m() {
        return (
          (_m =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          _m.apply(this, arguments)
        );
      }
      function Nm(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Tm(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Nm(t, km);
        return e.createElement(
          "svg",
          _m(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Om ||
            (Om = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18.6421 11.3701C18.7255 11.455 18.7886 11.5523 18.8316 11.6561L18.6421 11.3701ZM18.6357 11.3636L13.6362 6.36419C13.2848 6.01272 12.7149 6.01272 12.3635 6.36419C12.012 6.71566 12.012 7.28551 12.3635 7.63698L15.8271 11.1006L5.99985 11.1006C5.5028 11.1006 5.09985 11.5035 5.09985 12.0006C5.09985 12.4976 5.5028 12.9006 5.99985 12.9006L15.8271 12.9006L12.3635 16.3642C12.012 16.7157 12.012 17.2855 12.3635 17.637C12.7149 17.9885 13.2848 17.9885 13.6362 17.637L18.6359 12.6373L18.6362 12.637M18.6382 12.6351C18.7235 12.5492 18.788 12.4505 18.8316 12.3451C18.8756 12.239 18.8999 12.1226 18.8999 12.0006C18.8999 11.8786 18.8756 11.7622 18.8316 11.6561",
              fill: "white",
            }))
        );
      }
      var Lm,
        Rm = e.forwardRef(Tm),
        Im = (n.p, ["title", "titleId"]);
      function Mm() {
        return (
          (Mm =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Mm.apply(this, arguments)
        );
      }
      function Pm(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Am(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Pm(t, Im);
        return e.createElement(
          "svg",
          Mm(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Lm ||
            (Lm = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M5.35414 11.8935C5.32327 12.155 5.40694 12.4274 5.60515 12.6296L10.5058 17.6296C10.8537 17.9846 11.4235 17.9903 11.7785 17.6424C12.1335 17.2944 12.1392 16.7246 11.7913 16.3696L8.38984 12.8992L18.0095 12.8992C18.5065 12.8992 18.9095 12.4963 18.9095 11.9992C18.9095 11.5022 18.5065 11.0992 18.0095 11.0992H8.3906L11.7913 7.62959C12.1392 7.2746 12.1335 6.70478 11.7785 6.35686C11.4235 6.00893 10.8537 6.01465 10.5058 6.36963L5.61879 11.3557C5.4754 11.4959 5.37869 11.6837 5.35414 11.8935Z",
              fill: "white",
            }))
        );
      }
      var Dm,
        Vm = e.forwardRef(Am),
        Bm = (n.p, ["title", "titleId"]);
      function Hm() {
        return (
          (Hm =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Hm.apply(this, arguments)
        );
      }
      function Fm(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Um(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Fm(t, Bm);
        return e.createElement(
          "svg",
          Hm(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Dm ||
            (Dm = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11.6556 18.8313C11.7617 18.8753 11.8781 18.8996 12.0001 18.8996C12.2456 18.8996 12.4682 18.8013 12.6306 18.6419C12.6328 18.6397 12.6349 18.6376 12.637 18.6355L17.6365 13.636C17.988 13.2845 17.988 12.7147 17.6365 12.3632C17.285 12.0117 16.7152 12.0117 16.3637 12.3632L12.9001 15.8268L12.9001 5.99961C12.9001 5.50255 12.4972 5.09961 12.0001 5.09961C11.503 5.09961 11.1001 5.50255 11.1001 5.99961L11.1001 15.8268L7.63649 12.3632C7.28502 12.0117 6.71517 12.0117 6.3637 12.3632C6.01223 12.7147 6.01223 13.2845 6.3637 13.636L11.363 18.6353L11.3637 18.636C11.3657 18.638 11.3676 18.6399 11.3696 18.6419",
              fill: "white",
            }))
        );
      }
      var zm,
        Gm = e.forwardRef(Um),
        Zm = (n.p, ["title", "titleId"]);
      function qm() {
        return (
          (qm =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          qm.apply(this, arguments)
        );
      }
      function Wm(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function $m(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Wm(t, Zm);
        return e.createElement(
          "svg",
          qm(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          zm ||
            (zm = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.3446 5.1679C12.2385 5.1239 12.1221 5.09961 12.0001 5.09961C11.7546 5.09961 11.532 5.19794 11.3696 5.35737C11.3674 5.35954 11.3652 5.36173 11.363 5.36393L6.3637 10.3632C6.01223 10.7147 6.01223 11.2845 6.3637 11.636C6.71517 11.9875 7.28502 11.9875 7.63649 11.636L11.1001 8.1724V17.9996C11.1001 18.4967 11.503 18.8996 12.0001 18.8996C12.4972 18.8996 12.9001 18.4967 12.9001 17.9996V8.1724L16.3637 11.636C16.7152 11.9875 17.285 11.9875 17.6365 11.636C17.988 11.2845 17.988 10.7147 17.6365 10.3632L12.6365 5.36321C12.5502 5.27692 12.4508 5.21182 12.3446 5.1679Z",
              fill: "white",
            }))
        );
      }
      var Km,
        Ym = e.forwardRef($m),
        Qm = (n.p, ["title", "titleId"]);
      function Xm() {
        return (
          (Xm =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Xm.apply(this, arguments)
        );
      }
      function Jm(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function ev(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Jm(t, Qm);
        return e.createElement(
          "svg",
          Xm(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Km ||
            (Km = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M17.0221 16.6922C16.8665 16.9611 16.5757 17.1421 16.2426 17.1421H9.1715C8.67445 17.1421 8.2715 16.7392 8.2715 16.2421C8.2715 15.745 8.67444 15.3421 9.1715 15.3421L14.0703 15.3421L7.12103 8.39284C6.76955 8.04137 6.76955 7.47152 7.12103 7.12005C7.4725 6.76858 8.04235 6.76858 8.39382 7.12005L15.3426 14.0688L15.3426 9.17104C15.3426 8.67398 15.7455 8.27104 16.2426 8.27104C16.7396 8.27104 17.1426 8.67398 17.1426 9.17104L17.1426 16.2261C17.1435 16.2814 17.1394 16.3367 17.1303 16.3913C17.1149 16.4826 17.0855 16.572 17.042 16.656C17.0356 16.6682 17.029 16.6802 17.0221 16.6922Z",
              fill: "white",
            }))
        );
      }
      var tv,
        nv = e.forwardRef(ev),
        rv = (n.p, ["title", "titleId"]);
      function iv() {
        return (
          (iv =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          iv.apply(this, arguments)
        );
      }
      function av(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function ov(t, n) {
        var r = t.title,
          i = t.titleId,
          a = av(t, rv);
        return e.createElement(
          "svg",
          iv(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          tv ||
            (tv = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.92961 15.3423L14.8286 15.3423C15.3257 15.3423 15.7286 15.7453 15.7286 16.2423C15.7286 16.7394 15.3257 17.1423 14.8286 17.1423L7.75753 17.1423C7.51884 17.1423 7.28992 17.0475 7.12114 16.8787C7.06765 16.8252 7.02159 16.7657 6.98363 16.7018C6.897 16.5563 6.85497 16.3917 6.85753 16.2276L6.85753 9.17126C6.85753 8.6742 7.26048 8.27126 7.75753 8.27126C8.25459 8.27126 8.65753 8.6742 8.65753 9.17126L8.65753 14.0688L15.6063 7.12005C15.9578 6.76858 16.5276 6.76858 16.8791 7.12005C17.2306 7.47152 17.2306 8.04137 16.8791 8.39284L9.92961 15.3423Z",
              fill: "white",
            }))
        );
      }
      var lv,
        uv = e.forwardRef(ov),
        sv = (n.p, ["title", "titleId"]);
      function cv() {
        return (
          (cv =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          cv.apply(this, arguments)
        );
      }
      function fv(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function dv(t, n) {
        var r = t.title,
          i = t.titleId,
          a = fv(t, sv);
        return e.createElement(
          "svg",
          cv(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          lv ||
            (lv = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M17.1371 7.65768C17.0875 7.20756 16.7059 6.85742 16.2426 6.85742H9.17152C8.67447 6.85742 8.27152 7.26037 8.27152 7.75742C8.27152 8.25448 8.67447 8.65742 9.17152 8.65742L14.0705 8.65742L7.12103 15.6069C6.76955 15.9584 6.76955 16.5282 7.12103 16.8797C7.4725 17.2312 8.04235 17.2312 8.39382 16.8797L15.3426 9.93092V14.8285C15.3426 15.3255 15.7455 15.7285 16.2426 15.7285C16.7396 15.7285 17.1426 15.3255 17.1426 14.8285V7.77216C17.1432 7.73395 17.1414 7.69571 17.1371 7.65768Z",
              fill: "white",
            }))
        );
      }
      var pv,
        hv = e.forwardRef(dv),
        mv = (n.p, ["title", "titleId"]);
      function vv() {
        return (
          (vv =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          vv.apply(this, arguments)
        );
      }
      function gv(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function yv(t, n) {
        var r = t.title,
          i = t.titleId,
          a = gv(t, mv);
        return e.createElement(
          "svg",
          vv(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          pv ||
            (pv = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.75756 6.85742C7.51886 6.85742 7.28994 6.95224 7.12116 7.12103C7.08944 7.15274 7.06034 7.18658 7.03399 7.22221C6.91304 7.38515 6.85423 7.57969 6.85756 7.77335L6.85756 14.8285C6.85756 15.3255 7.2605 15.7285 7.75756 15.7285C8.25461 15.7285 8.65756 15.3255 8.65756 14.8285L8.65756 9.93073L15.6063 16.8795C15.9578 17.2309 16.5276 17.2309 16.8791 16.8795C17.2306 16.528 17.2306 15.9582 16.8791 15.6067L9.92984 8.65742L14.8286 8.65742C15.3257 8.65742 15.7286 8.25448 15.7286 7.75742C15.7286 7.26037 15.3257 6.85742 14.8286 6.85742H7.75756Z",
              fill: "white",
            }))
        );
      }
      var bv = e.forwardRef(yv);
      n.p;
      var wv = function (e) {
        var t = e.image,
          n = e.alt;
        return (0, m.jsx)("div", {
          className: "targetListImage",
          children: (0, m.jsx)("img", {
            className: "targetListImage",
            src: t,
            alt: n,
          }),
        });
      };
      var Cv,
        xv = function (e) {
          var t = e.action,
            n = e.state;
          return (0, m.jsxs)("button", {
            className: n
              ? "targetListTrackButton active"
              : "targetListTrackButton",
            onClick: t,
            children: [
              (0, m.jsx)(lp, {}),
              (0, m.jsx)(si, { tid: n ? "STOP TRACK" : "START TRACK" }),
            ],
          });
        },
        Ev = ["title", "titleId"];
      function Sv() {
        return (
          (Sv =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Sv.apply(this, arguments)
        );
      }
      function Ov(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function jv(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Ov(t, Ev);
        return e.createElement(
          "svg",
          Sv(
            {
              width: 8,
              height: 8,
              viewBox: "0 0 8 8",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Cv ||
            (Cv = e.createElement("circle", {
              cx: 4,
              cy: 4,
              r: 4,
              fill: "current",
            }))
        );
      }
      var kv = e.forwardRef(jv);
      n.p;
      var _v = function (e) {
        var t,
          n = e.target,
          r = e.selected,
          i = e.threatColor,
          a = h(function (e) {
            return e.socket.settings;
          }),
          o = h(function (e) {
            return e.menu.targetListImage;
          }),
          l = Ui(n.pos),
          u = Fi(n.pos),
          s = h(function (e) {
            return e.settings.developerMode;
          });
        return (0, m.jsx)(m.Fragment, {
          children: (0, m.jsxs)("div", {
            className:
              "targetListTarget " +
              "".concat(r === n.id ? "targetListTarget-selected" : ""),
            children: [
              (0, m.jsx)("button", {
                className: "targetListTarget-button",
                onClick: function () {
                  r === n.id ? ai.dispatch(Qn(null)) : ai.dispatch(Qn(n.id));
                },
                children: (0, m.jsxs)("div", {
                  className: "targetListTarget-row",
                  children: [
                    (0, m.jsxs)("div", {
                      className:
                        "targetListTarget-row-content targetListTarget-targetIcon",
                      children: [
                        (0, m.jsx)(jm, { name: n.name }),
                        (0, m.jsxs)("div", {
                          className: "targetListTarget-row-content-column",
                          children: [
                            (0, m.jsx)("p", {
                              children: (0, m.jsx)(si, {
                                tid:
                                  ((t = n.name),
                                  t.includes("SAILING_BOAT")
                                    ? "SAILING_BOAT"
                                    : t.includes("MOTORBOAT") ||
                                      t.includes("BOAT") ||
                                      t.includes("LEISURE_VEHICLE") ||
                                      t.includes("SHIP")
                                    ? "SHIP"
                                    : t.includes("HUMAN")
                                    ? "HUMAN"
                                    : t.includes("BUOY")
                                    ? "BUOY"
                                    : t.includes("ANIMAL")
                                    ? "ANIMAL"
                                    : "HAZARD"),
                              }),
                            }),
                            r === n.id &&
                              (0, m.jsx)("p", {
                                className:
                                  "targetListTarget-row-content-column-info",
                                children: (0, m.jsx)(Ia, {
                                  value: u,
                                  unit: Rr.METERS,
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, m.jsxs)("div", {
                      className:
                        "targetListTarget-row-content targetListTarget-directionIcon",
                      children: [
                        (0, m.jsx)(kv, { fill: i }),
                        l >= -Math.PI / 8 &&
                          l < Math.PI / 8 &&
                          (0, m.jsx)(Ym, {}),
                        l >= Math.PI / 8 &&
                          l < (3 * Math.PI) / 8 &&
                          (0, m.jsx)(hv, {}),
                        l >= (3 * Math.PI) / 8 &&
                          l < (5 * Math.PI) / 8 &&
                          (0, m.jsx)(Rm, {}),
                        l >= (5 * Math.PI) / 8 &&
                          l < (7 * Math.PI) / 8 &&
                          (0, m.jsx)(nv, {}),
                        (l >= (7 * Math.PI) / 8 || l < (-7 * Math.PI) / 8) &&
                          (0, m.jsx)(Gm, {}),
                        l >= (-7 * Math.PI) / 8 &&
                          l < (-5 * Math.PI) / 8 &&
                          (0, m.jsx)(uv, {}),
                        l >= (-5 * Math.PI) / 8 &&
                          l < (-3 * Math.PI) / 8 &&
                          (0, m.jsx)(Vm, {}),
                        l >= (-3 * Math.PI) / 8 &&
                          l < -Math.PI / 8 &&
                          (0, m.jsx)(bv, {}),
                      ],
                    }),
                  ],
                }),
              }),
              r === n.id &&
                (0, m.jsx)("button", {
                  className: "targetListTarget-buttonStreamImage",
                  onClick: function () {
                    "thermal" === o
                      ? ai.dispatch(nr("color"))
                      : ai.dispatch(nr("thermal"));
                  },
                  children: (0, m.jsx)(wv, {
                    thermalImage: n.thermalImage64,
                    colorImage: n.colorImage64,
                    image: "thermal" === o ? n.thermalImage64 : n.colorImage64,
                  }),
                }),
              r === n.id &&
                s &&
                (0, m.jsx)("div", {
                  className: "targetListTarget-row",
                  children: (0, m.jsx)(xv, {
                    state: !!a && a["track-center-object"].value,
                    action: function () {
                      a &&
                        ai.dispatch(
                          Mn({
                            name: "track-center-object",
                            value: !a["track-center-object"].value,
                          })
                        );
                    },
                  }),
                }),
            ],
          }),
        });
      };
      var Nv,
        Tv = function () {
          var t = h(function (e) {
              return e.socket.targets;
            }),
            n = h(function (e) {
              return e.socket.settings;
            }),
            r = h(function (e) {
              return e.settings.selectedTarget;
            }),
            i =
              h(function (e) {
                return e.menu.view;
              }) || ei;
          return (0, m.jsxs)("div", {
            className:
              "targetList sidePanel grid-element " +
              (i !== ei ? " fullscreen" : ""),
            children: [
              (0, m.jsxs)("div", {
                className: "targetList-content-group",
                children: [
                  (0, m.jsxs)("div", {
                    className: "targetList-content-group-title",
                    children: [
                      (0, m.jsx)(kv, { fill: Jt("--danger") }),
                      (0, m.jsx)("p", {
                        className: "subtitle",
                        children: (0, m.jsx)(si, { tid: "DANGER" }),
                      }),
                    ],
                  }),
                  t &&
                    t.map(function (t) {
                      var i = en(n, t.alarmCertainty);
                      return i === Yt
                        ? (0, m.jsx)(
                            _v,
                            {
                              target: t,
                              selected: r,
                              threatColor: Jt("--danger"),
                            },
                            t.name
                          )
                        : (0, m.jsx)(
                            e.Fragment,
                            {
                              children:
                                i === Yt &&
                                (0, m.jsx)(_v, {
                                  threatColor: Jt("--danger"),
                                  target: t,
                                  selected: r,
                                }),
                            },
                            Xt + "_" + t.name
                          );
                    }),
                ],
              }),
              (0, m.jsxs)("div", {
                className: "targetList-content-group",
                children: [
                  (0, m.jsxs)("div", {
                    className: "targetList-content-group-title",
                    children: [
                      (0, m.jsx)(kv, { fill: Jt("--warning") }),
                      (0, m.jsx)("p", {
                        className: "subtitle",
                        children: (0, m.jsx)(si, { tid: "WARNING" }),
                      }),
                    ],
                  }),
                  t &&
                    t.map(function (t) {
                      var i = en(n, t.alarmCertainty);
                      return (0,
                      m.jsx)(e.Fragment, { children: i === Qt && (0, m.jsx)(_v, { threatColor: Jt("--warning"), target: t, selected: r }) }, Xt + "_" + t.name);
                    }),
                ],
              }),
              (0, m.jsxs)("div", {
                className: "targetList-content-group",
                children: [
                  (0, m.jsxs)("div", {
                    className: "targetList-content-group-title",
                    children: [
                      (0, m.jsx)(kv, { fill: Jt("--primary") }),
                      (0, m.jsx)("p", {
                        className: "subtitle",
                        children: (0, m.jsx)(si, { tid: "OTHER" }),
                      }),
                    ],
                  }),
                  t &&
                    t.map(function (t) {
                      var i = en(n, t.alarmCertainty);
                      return (0,
                      m.jsx)(e.Fragment, { children: i === Xt && (0, m.jsx)(_v, { threatColor: Jt("--primary"), target: t, selected: r }) }, Xt + "_" + t.name);
                    }),
                ],
              }),
            ],
          });
        },
        Lv = function () {
          var e =
            h(function (e) {
              return e.menu.view;
            }) || ei;
          return (0, m.jsx)("div", {
            className:
              "controls sidePanel grid-element " +
              (e !== ei ? " fullscreen" : ""),
          });
        },
        Rv = ["title", "titleId"];
      function Iv() {
        return (
          (Iv =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Iv.apply(this, arguments)
        );
      }
      function Mv(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function Pv(t, n) {
        var r = t.title,
          i = t.titleId,
          a = Mv(t, Rv);
        return e.createElement(
          "svg",
          Iv(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": i,
            },
            a
          ),
          r ? e.createElement("title", { id: i }, r) : null,
          Nv ||
            (Nv = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M6.55565 5.89961C6.38179 5.89961 6.21505 5.96868 6.09211 6.09162C5.96917 6.21456 5.9001 6.3813 5.9001 6.55517V17.4441C5.9001 17.6179 5.96916 17.7847 6.09211 17.9076C6.21505 18.0305 6.38179 18.0996 6.55565 18.0996H9.66676C10.1638 18.0996 10.5668 18.5026 10.5668 18.9996C10.5668 19.4967 10.1638 19.8996 9.66676 19.8996H6.55565C5.9044 19.8996 5.27982 19.6409 4.81931 19.1804C4.35881 18.7199 4.1001 18.0953 4.1001 17.4441V6.55517C4.1001 5.90391 4.35881 5.27933 4.81931 4.81882C5.27982 4.35832 5.9044 4.09961 6.55565 4.09961H9.66676C10.1638 4.09961 10.5668 4.50255 10.5668 4.99961C10.5668 5.49667 10.1638 5.89961 9.66676 5.89961H6.55565ZM14.475 7.47454C14.8265 7.12307 15.3963 7.12307 15.7478 7.47454L19.6367 11.3634C19.9882 11.7149 19.9882 12.2848 19.6367 12.6362L15.7478 16.5251C15.3963 16.8766 14.8265 16.8766 14.475 16.5251C14.1236 16.1736 14.1236 15.6038 14.475 15.2523L16.8277 12.8996H9.6666C9.16955 12.8996 8.7666 12.4967 8.7666 11.9996C8.7666 11.5026 9.16955 11.0996 9.6666 11.0996H16.8273L14.475 8.74733C14.1236 8.39586 14.1236 7.82601 14.475 7.47454Z",
              fill: "white",
            }))
        );
      }
      var Av = e.forwardRef(Pv);
      n.p;
      var Dv = function (e) {
        var t = e.installerMode,
          n = e.developerMode;
        return (0, m.jsxs)("div", {
          className:
            "installerMode" + (t ? " installer" : "") + (n ? " developer" : ""),
          children: [
            (0, m.jsx)(Mh, {}),
            n
              ? (0, m.jsx)("p", {
                  children: (0, m.jsx)(si, { tid: "dev mode" }),
                })
              : t
              ? (0, m.jsx)("p", {
                  children: (0, m.jsx)(si, { tid: "installer mode" }),
                })
              : (0, m.jsx)(m.Fragment, {}),
            (0, m.jsx)("button", {
              className: "installerMode-close",
              onClick: function () {
                !0 === t && ai.dispatch(Kn(!1)),
                  !0 === n && ai.dispatch($n(!1)),
                  ai.dispatch(In(null));
              },
              children: (0, m.jsx)(Av, {}),
            }),
          ],
        });
      };
      window.addEventListener("contextmenu", function (e) {
        e.preventDefault();
      });
      var Vv = function () {
        var e =
            h(function (e) {
              return e.settings.theme;
            }) || Ar,
          t =
            h(function (e) {
              return e.menu.settings;
            }) || !1,
          n =
            h(function (e) {
              return e.menu.controls;
            }) || !1,
          r = h(function (e) {
            return e.menu.targetList;
          }),
          i = h(function (e) {
            return e.menu.view;
          }),
          a = h(function (e) {
            return e.settings.installerMode;
          }),
          o = h(function (e) {
            return e.settings.developerMode;
          });
        return (0, m.jsxs)("div", {
          className: "page",
          "data-theme": e,
          children: [
            (0, m.jsxs)("div", {
              className:
                "grid" +
                (i ? "" : " fullscreen") +
                (o ? " withDeveloperMode" : "") +
                (a ? " withInstallerMode" : ""),
              children: [
                i !== ni && (0, m.jsx)(xd, {}),
                i !== ti && (0, m.jsx)(Ed, {}),
                i === ei && (0, m.jsx)(Nd, {}),
                (0, m.jsx)(_p, {}),
                r && (0, m.jsx)(Tv, {}),
                t && (0, m.jsx)(Sm, {}),
                n && (0, m.jsx)(Lv, {}),
              ],
            }),
            (a || o) && (0, m.jsx)(Dv, { installerMode: a, developerMode: o }),
            (0, m.jsx)(fi, {}),
            (0, m.jsx)(Ei, {}),
            (0, m.jsx)(Si, {}),
            (0, m.jsx)(_i, {}),
          ],
        });
      };
      var Bv = function () {
          return (
            ai.dispatch({ type: yt }),
            ai.dispatch(Zn(window.location.hostname)),
            setTimeout(function () {
              ai.dispatch({
                type: se,
                payload: new En(
                  function () {
                    return ai.dispatch(kn());
                  },
                  function () {
                    return ai.dispatch({ type: Ee });
                  }
                ),
              }),
                ai.dispatch({ type: ce, payload: new Sn() }),
                ai.dispatch({ type: pe, payload: $t() }),
                ai.dispatch({ type: he, payload: Kt() });
            }, 500),
            (0, m.jsx)(s, { store: ai, children: (0, m.jsx)(Vv, {}) })
          );
        },
        Hv = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  i = t.getFCP,
                  a = t.getLCP,
                  o = t.getTTFB;
                n(e), r(e), i(e), a(e), o(e);
              });
        };
      t.render(
        (0, m.jsx)(e.StrictMode, { children: (0, m.jsx)(Bv, {}) }),
        document.getElementById("root")
      ),
        Hv();
    })();
})();
//# sourceMappingURL=main.a2247de6.js.map
