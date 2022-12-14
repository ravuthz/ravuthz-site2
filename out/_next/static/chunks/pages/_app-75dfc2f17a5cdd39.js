;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    425: function (e, t, n) {
      'use strict'
      n.d(t, {
        f: function () {
          return s
        },
        F: function () {
          return i
        },
      })
      var r = n(1720),
        a = n(9008),
        o = (0, r.createContext)({ setTheme: function (e) {}, themes: [] }),
        i = function () {
          return (0, r.useContext)(o)
        },
        l = ['light', 'dark'],
        c = '(prefers-color-scheme: dark)',
        s = function (e) {
          var t = e.forcedTheme,
            n = e.disableTransitionOnChange,
            a = void 0 !== n && n,
            i = e.enableSystem,
            s = void 0 === i || i,
            m = e.enableColorScheme,
            v = void 0 === m || m,
            p = e.storageKey,
            g = void 0 === p ? 'theme' : p,
            y = e.themes,
            w = void 0 === y ? ['light', 'dark'] : y,
            b = e.defaultTheme,
            x = void 0 === b ? (s ? 'system' : 'light') : b,
            k = e.attribute,
            _ = void 0 === k ? 'data-theme' : k,
            Z = e.value,
            O = e.children,
            E = (0, r.useState)(function () {
              return d(g, x)
            }),
            z = E[0],
            j = E[1],
            C = (0, r.useState)(function () {
              return d(g)
            }),
            M = C[0],
            T = C[1],
            N = Z ? Object.values(Z) : w,
            S = (0, r.useCallback)(
              function (e) {
                var n = h(e)
                T(n), 'system' !== z || t || B(n, !1)
              },
              [z, t]
            ),
            L = (0, r.useRef)(S)
          L.current = S
          var B = (0, r.useCallback)(function (e, t, n) {
            void 0 === t && (t = !0), void 0 === n && (n = !0)
            var r = (null == Z ? void 0 : Z[e]) || e,
              o = a && n ? f() : null
            if (t)
              try {
                localStorage.setItem(g, e)
              } catch (e) {}
            if ('system' === e && s) {
              var i = h()
              r = (null == Z ? void 0 : Z[i]) || i
            }
            if (n) {
              var l,
                c = document.documentElement
              'class' === _
                ? ((l = c.classList).remove.apply(l, N), c.classList.add(r))
                : c.setAttribute(_, r),
                null == o || o()
            }
          }, [])
          ;(0, r.useEffect)(function () {
            var e = function () {
                return L.current.apply(L, [].slice.call(arguments))
              },
              t = window.matchMedia(c)
            return (
              t.addListener(e),
              e(t),
              function () {
                return t.removeListener(e)
              }
            )
          }, [])
          var P = (0, r.useCallback)(
            function (e) {
              t ? B(e, !0, !1) : B(e), j(e)
            },
            [t]
          )
          return (
            (0, r.useEffect)(
              function () {
                var e = function (e) {
                  e.key === g && P(e.newValue)
                }
                return (
                  window.addEventListener('storage', e),
                  function () {
                    return window.removeEventListener('storage', e)
                  }
                )
              },
              [P]
            ),
            (0, r.useEffect)(
              function () {
                if (v) {
                  var e =
                    t && l.includes(t) ? t : z && l.includes(z) ? z : ('system' === z && M) || null
                  document.documentElement.style.setProperty('color-scheme', e)
                }
              },
              [v, z, M, t]
            ),
            r.default.createElement(
              o.Provider,
              {
                value: {
                  theme: z,
                  setTheme: P,
                  forcedTheme: t,
                  resolvedTheme: 'system' === z ? M : z,
                  themes: s ? [].concat(w, ['system']) : w,
                  systemTheme: s ? M : void 0,
                },
              },
              r.default.createElement(u, {
                forcedTheme: t,
                storageKey: g,
                attribute: _,
                value: Z,
                enableSystem: s,
                defaultTheme: x,
                attrs: N,
              }),
              O
            )
          )
        },
        u = (0, r.memo)(
          function (e) {
            var t = e.forcedTheme,
              n = e.storageKey,
              o = e.attribute,
              i = e.enableSystem,
              l = e.defaultTheme,
              s = e.value,
              u =
                'class' === o
                  ? 'var d=document.documentElement.classList;d.remove(' +
                    e.attrs
                      .map(function (e) {
                        return "'" + e + "'"
                      })
                      .join(',') +
                    ');'
                  : 'var d=document.documentElement;',
              d = function (e, t) {
                e = (null == s ? void 0 : s[e]) || e
                var n = t ? e : "'" + e + "'"
                return 'class' === o ? 'd.add(' + n + ')' : "d.setAttribute('" + o + "', " + n + ')'
              },
              f = 'system' === l
            return r.default.createElement(
              a.default,
              null,
              r.default.createElement(
                'script',
                t
                  ? {
                      key: 'next-themes-script',
                      dangerouslySetInnerHTML: { __html: '!function(){' + u + d(t) + '}()' },
                    }
                  : i
                  ? {
                      key: 'next-themes-script',
                      dangerouslySetInnerHTML: {
                        __html:
                          '!function(){try {' +
                          u +
                          "var e=localStorage.getItem('" +
                          n +
                          "');" +
                          (f ? '' : d(l) + ';') +
                          'if("system"===e||(!e&&' +
                          f +
                          ')){var t="' +
                          c +
                          '",m=window.matchMedia(t);m.media!==t||m.matches?' +
                          d('dark') +
                          ':' +
                          d('light') +
                          '}else if(e) ' +
                          (s ? 'var x=' + JSON.stringify(s) + ';' : '') +
                          d(s ? 'x[e]' : 'e', !0) +
                          '}catch(e){}}()',
                      },
                    }
                  : {
                      key: 'next-themes-script',
                      dangerouslySetInnerHTML: {
                        __html:
                          '!function(){try{' +
                          u +
                          'var e=localStorage.getItem("' +
                          n +
                          '");if(e){' +
                          (s ? 'var x=' + JSON.stringify(s) + ';' : '') +
                          d(s ? 'x[e]' : 'e', !0) +
                          '}else{' +
                          d(l) +
                          ';}}catch(t){}}();',
                      },
                    }
              )
            )
          },
          function (e, t) {
            return e.forcedTheme === t.forcedTheme
          }
        ),
        d = function (e, t) {
          if ('undefined' != typeof window) {
            var n
            try {
              n = localStorage.getItem(e) || void 0
            } catch (e) {}
            return n || t
          }
        },
        f = function () {
          var e = document.createElement('style')
          return (
            e.appendChild(
              document.createTextNode(
                '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
              )
            ),
            document.head.appendChild(e),
            function () {
              window.getComputedStyle(document.body),
                setTimeout(function () {
                  document.head.removeChild(e)
                }, 1)
            }
          )
        },
        h = function (e) {
          return e || (e = window.matchMedia(c)), e.matches ? 'dark' : 'light'
        }
    },
    1780: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n(9829)
        },
      ])
    },
    4373: function (e, t, n) {
      'use strict'
      var r = n(7320),
        a = n(1664)
      function o(e, t, n) {
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
        )
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n)
          'function' === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              })
            )),
            r.forEach(function (t) {
              o(e, t, n[t])
            })
        }
        return e
      }
      function l(e, t) {
        if (null == e) return {}
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              a = {},
              o = Object.keys(e)
            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
            return a
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]))
        }
        return a
      }
      t.Z = function (e) {
        var t = e.href,
          n = l(e, ['href']),
          o = t && t.startsWith('/'),
          c = t && t.startsWith('#')
        return o
          ? (0, r.tZ)(a.default, { href: t, children: (0, r.tZ)('a', i({}, n)) })
          : c
          ? (0, r.tZ)('a', i({ href: t }, n))
          : (0, r.tZ)('a', i({ target: '_blank', rel: 'noopener noreferrer', href: t }, n))
      }
    },
    9072: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return a
        },
      })
      var r = n(7320)
      function a(e) {
        var t = e.children
        return (0, r.tZ)('div', {
          className: 'max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0',
          children: t,
        })
      }
    },
    4642: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return w
        },
      })
      var r,
        a,
        o = n(7320),
        i = n(1720)
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      var c
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      var u
      function d() {
        return (d =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      var f
      function h() {
        return (h =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      var m
      function v() {
        return (v =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      var p
      function g() {
        return (g =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      var y = {
          mail: function (e) {
            return i.createElement(
              'svg',
              l({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, e),
              r ||
                (r = i.createElement('path', {
                  d: 'M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z',
                })),
              a ||
                (a = i.createElement('path', {
                  d: 'm18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z',
                }))
            )
          },
          github: function (e) {
            return i.createElement(
              'svg',
              s({ viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, e),
              c ||
                (c = i.createElement('path', {
                  d:
                    'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
                }))
            )
          },
          facebook: function (e) {
            return i.createElement(
              'svg',
              d({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
              u ||
                (u = i.createElement('path', {
                  d:
                    'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
                }))
            )
          },
          youtube: function (e) {
            return i.createElement(
              'svg',
              h({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
              f ||
                (f = i.createElement('path', {
                  d:
                    'M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z',
                }))
            )
          },
          linkedin: function (e) {
            return i.createElement(
              'svg',
              v({ viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, e),
              m ||
                (m = i.createElement('path', {
                  d:
                    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                }))
            )
          },
          twitter: function (e) {
            return i.createElement(
              'svg',
              g({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
              p ||
                (p = i.createElement('path', {
                  d:
                    'M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z',
                }))
            )
          },
        },
        w = function (e) {
          var t = e.kind,
            n = e.href,
            r = e.size,
            a = void 0 === r ? 8 : r
          if (!n || ('mail' === t && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(n)))
            return null
          var i = y[t]
          return (0, o.BX)('a', {
            className: 'text-sm text-gray-500 transition hover:text-gray-600',
            target: '_blank',
            rel: 'noopener noreferrer',
            href: n,
            children: [
              (0, o.tZ)('span', { className: 'sr-only', children: t }),
              (0, o.tZ)(i, {
                className: 'fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-'
                  .concat(a, ' w-')
                  .concat(a),
              }),
            ],
          })
        }
    },
    7059: function (e) {
      'use strict'
      e.exports = {
        title: 'Ravuthz Blog',
        author: 'Ravuthz',
        headerTitle: 'RavuthzBlog',
        description: 'A blog created with Next.js and Tailwind.css',
        language: 'en-us',
        theme: 'dark',
        siteUrl: 'https://ravuthz.github.io',
        siteRepo: 'https://github.com/ravuthz/blog',
        siteLogo: '/static/images/logo.png',
        image: '/static/images/ravuthz.jpg',
        socialBanner: '/static/images/twitter-card.png',
        email: 'ravuthz@gmail.com',
        github: 'https://github.com/ravuthz',
        twitter: 'https://twitter.com/Vutyo',
        facebook: 'https://www.facebook.com/ravuthz',
        youtube: 'https://www.youtube.com/user/MrRavuthz/videos',
        linkedin: 'https://www.linkedin.com/in/vannaravuth-yo',
        locale: 'en-US',
        analytics: { plausibleDataDomain: '', simpleAnalytics: !1, googleAnalyticsId: '' },
        newsletter: { provider: '' },
        comment: {
          provider: 'giscus',
          giscusConfig: {
            repo: 'ravuthz/blog',
            repositoryId: 'R_kgDOGk6xNA',
            category: 'General',
            categoryId: 'DIC_kwDOGk6xNM4CAeDA',
            mapping: 'pathname',
            reactions: '1',
            metadata: '0',
            theme: 'dark_dimmed',
            darkTheme: 'transparent_dark',
            themeURL: '',
          },
          utterancesConfig: { repo: '', issueTerm: '', label: '', theme: '', darkTheme: '' },
          disqusConfig: { shortname: '' },
        },
      }
    },
    8418: function (e, t, n) {
      'use strict'
      function r(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, t) {
            var n = [],
              r = !0,
              a = !1,
              o = void 0
            try {
              for (
                var i, l = e[Symbol.iterator]();
                !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (c) {
              ;(a = !0), (o = c)
            } finally {
              try {
                r || null == l.return || l.return()
              } finally {
                if (a) throw o
              }
            }
            return n
          })(e, t) ||
          (function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance')
          })()
        )
      }
      t.default = void 0
      var a,
        o = (a = n(1720)) && a.__esModule ? a : { default: a },
        i = n(6273),
        l = n(387),
        c = n(7190)
      var s = {}
      function u(e, t, n, r) {
        if (e && i.isLocalURL(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0
          })
          var a = r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale
          s[t + '%' + n + (a ? '%' + a : '')] = !0
        }
      }
      var d = function (e) {
        var t,
          n = !1 !== e.prefetch,
          a = l.useRouter(),
          d = o.default.useMemo(
            function () {
              var t = r(i.resolveHref(a, e.href, !0), 2),
                n = t[0],
                o = t[1]
              return { href: n, as: e.as ? i.resolveHref(a, e.as) : o || n }
            },
            [a, e.href, e.as]
          ),
          f = d.href,
          h = d.as,
          m = e.children,
          v = e.replace,
          p = e.shallow,
          g = e.scroll,
          y = e.locale
        'string' === typeof m && (m = o.default.createElement('a', null, m))
        var w = (t = o.default.Children.only(m)) && 'object' === typeof t && t.ref,
          b = r(c.useIntersection({ rootMargin: '200px' }), 2),
          x = b[0],
          k = b[1],
          _ = o.default.useCallback(
            function (e) {
              x(e), w && ('function' === typeof w ? w(e) : 'object' === typeof w && (w.current = e))
            },
            [w, x]
          )
        o.default.useEffect(
          function () {
            var e = k && n && i.isLocalURL(f),
              t = 'undefined' !== typeof y ? y : a && a.locale,
              r = s[f + '%' + h + (t ? '%' + t : '')]
            e && !r && u(a, f, h, { locale: t })
          },
          [h, f, k, y, n, a]
        )
        var Z = {
          ref: _,
          onClick: function (e) {
            t.props && 'function' === typeof t.props.onClick && t.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, a, o, l, c) {
                  ;('A' !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target
                      return (
                        (t && '_self' !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      )
                    })(e) &&
                      i.isLocalURL(n))) &&
                    (e.preventDefault(),
                    null == l && r.indexOf('#') >= 0 && (l = !1),
                    t[a ? 'replace' : 'push'](n, r, { shallow: o, locale: c, scroll: l }))
                })(e, a, f, h, v, p, g, y)
          },
          onMouseEnter: function (e) {
            t.props && 'function' === typeof t.props.onMouseEnter && t.props.onMouseEnter(e),
              i.isLocalURL(f) && u(a, f, h, { priority: !0 })
          },
        }
        if (e.passHref || ('a' === t.type && !('href' in t.props))) {
          var O = 'undefined' !== typeof y ? y : a && a.locale,
            E =
              a && a.isLocaleDomain && i.getDomainLocale(h, O, a && a.locales, a && a.domainLocales)
          Z.href = E || i.addBasePath(i.addLocale(h, O, a && a.defaultLocale))
        }
        return o.default.cloneElement(t, Z)
      }
      t.default = d
    },
    7190: function (e, t, n) {
      'use strict'
      function r(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, t) {
            var n = [],
              r = !0,
              a = !1,
              o = void 0
            try {
              for (
                var i, l = e[Symbol.iterator]();
                !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (c) {
              ;(a = !0), (o = c)
            } finally {
              try {
                r || null == l.return || l.return()
              } finally {
                if (a) throw o
              }
            }
            return n
          })(e, t) ||
          (function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance')
          })()
        )
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            n = e.disabled || !i,
            c = a.useRef(),
            s = r(a.useState(!1), 2),
            u = s[0],
            d = s[1],
            f = a.useCallback(
              function (e) {
                c.current && (c.current(), (c.current = void 0)),
                  n ||
                    u ||
                    (e &&
                      e.tagName &&
                      (c.current = (function (e, t, n) {
                        var r = (function (e) {
                            var t = e.rootMargin || '',
                              n = l.get(t)
                            if (n) return n
                            var r = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = r.get(e.target),
                                    n = e.isIntersecting || e.intersectionRatio > 0
                                  t && n && t(n)
                                })
                              }, e)
                            return l.set(t, (n = { id: t, observer: a, elements: r })), n
                          })(n),
                          a = r.id,
                          o = r.observer,
                          i = r.elements
                        return (
                          i.set(e, t),
                          o.observe(e),
                          function () {
                            i.delete(e),
                              o.unobserve(e),
                              0 === i.size && (o.disconnect(), l.delete(a))
                          }
                        )
                      })(
                        e,
                        function (e) {
                          return e && d(e)
                        },
                        { rootMargin: t }
                      )))
              },
              [n, t, u]
            )
          return (
            a.useEffect(
              function () {
                if (!i && !u) {
                  var e = o.requestIdleCallback(function () {
                    return d(!0)
                  })
                  return function () {
                    return o.cancelIdleCallback(e)
                  }
                }
              },
              [u]
            ),
            [f, u]
          )
        })
      var a = n(1720),
        o = n(9311),
        i = 'undefined' !== typeof IntersectionObserver
      var l = new Map()
    },
    9829: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function () {
            return T
          },
        })
      var r = n(7320),
        a = (n(7762), n(6870), n(425)),
        o = n(9008),
        i = n(7059),
        l = n.n(i),
        c = n(4298),
        s = function () {
          return (0, r.BX)(r.HY, {
            children: [
              (0, r.tZ)(c.default, {
                strategy: 'lazyOnload',
                src: 'https://www.googletagmanager.com/gtag/js?id='.concat(
                  l().analytics.googleAnalyticsId
                ),
              }),
              (0, r.tZ)(c.default, {
                strategy: 'lazyOnload',
                id: 'ga-script',
                children: "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(
                  l().analytics.googleAnalyticsId,
                  "', {\n              page_path: window.location.pathname,\n            });\n        "
                ),
              }),
            ],
          })
        }
      var u,
        d,
        f,
        h,
        m = function () {
          return (0, r.BX)(r.HY, {
            children: [
              (0, r.tZ)(c.default, {
                strategy: 'lazyOnload',
                'data-domain': l().analytics.plausibleDataDomain,
                src: 'https://plausible.io/js/plausible.js',
              }),
              (0, r.tZ)(c.default, {
                strategy: 'lazyOnload',
                id: 'plausible-script',
                children:
                  '\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }\n        ',
              }),
            ],
          })
        },
        v = function () {
          return (0, r.BX)(r.HY, {
            children: [
              (0, r.tZ)(c.default, {
                strategy: 'lazyOnload',
                id: 'sa-script',
                children:
                  '\n            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};\n        ',
              }),
              (0, r.tZ)(c.default, {
                strategy: 'lazyOnload',
                src: 'https://scripts.simpleanalyticscdn.com/latest.js',
              }),
            ],
          })
        },
        p = function () {
          return (0, r.BX)(r.HY, {
            children: [
              l().analytics.plausibleDataDomain && (0, r.tZ)(m, {}),
              l().analytics.simpleAnalytics && (0, r.tZ)(v, {}),
              l().analytics.googleAnalyticsId && (0, r.tZ)(s, {}),
            ],
          })
        },
        g = [
          { href: '/blog', title: 'Blog' },
          { href: '/tags', title: 'Tags' },
          { href: '/about', title: 'About' },
        ],
        y = n(1720)
      function w() {
        return (w =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      var b = function (e) {
          return y.createElement(
            'svg',
            w(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                xmlnsXlink: 'http://www.w3.org/1999/xlink',
                viewBox: '344.564 330.278 111.737 91.218',
                width: 53.87,
                height: 43.61,
              },
              e
            ),
            y.createElement(
              'defs',
              null,
              y.createElement(
                'linearGradient',
                {
                  id: 'logo_svg__b',
                  gradientUnits: 'userSpaceOnUse',
                  x1: 420.97,
                  y1: 331.28,
                  x2: 420.97,
                  y2: 418.5,
                },
                y.createElement('stop', {
                  style: { stopColor: '#06b6d4', stopOpacity: 1 },
                  offset: '0%',
                }),
                y.createElement('stop', {
                  style: { stopColor: '#67e8f9', stopOpacity: 1 },
                  offset: '100%',
                })
              ),
              y.createElement(
                'linearGradient',
                {
                  id: 'logo_svg__d',
                  gradientUnits: 'userSpaceOnUse',
                  x1: 377.89,
                  y1: 331.28,
                  x2: 377.89,
                  y2: 418.5,
                },
                y.createElement('stop', {
                  style: { stopColor: '#06b6d4', stopOpacity: 1 },
                  offset: '0%',
                }),
                y.createElement('stop', {
                  style: { stopColor: '#67e8f9', stopOpacity: 1 },
                  offset: '100%',
                })
              ),
              u ||
                (u = y.createElement('path', {
                  d: 'M453.3 331.28v28.57l-64.66 58.65v-30.08l64.66-57.14Z',
                  id: 'logo_svg__a',
                })),
              d ||
                (d = y.createElement('path', {
                  d: 'M410.23 331.28v28.57l-64.67 58.65v-30.08l64.67-57.14Z',
                  id: 'logo_svg__c',
                }))
            ),
            f ||
              (f = y.createElement('use', {
                xlinkHref: '#logo_svg__a',
                fill: 'url(#logo_svg__b)',
              })),
            h ||
              (h = y.createElement('use', { xlinkHref: '#logo_svg__c', fill: 'url(#logo_svg__d)' }))
          )
        },
        x = n(4373),
        k = n(9072),
        _ = n(4642)
      function Z() {
        return (0, r.tZ)('footer', {
          children: (0, r.BX)('div', {
            className: 'flex flex-col items-center mt-16',
            children: [
              (0, r.BX)('div', {
                className: 'flex mb-3 space-x-4',
                children: [
                  (0, r.tZ)(_.Z, { kind: 'mail', href: 'mailto:'.concat(l().email), size: '6' }),
                  (0, r.tZ)(_.Z, { kind: 'github', href: l().github, size: '6' }),
                  (0, r.tZ)(_.Z, { kind: 'facebook', href: l().facebook, size: '6' }),
                  (0, r.tZ)(_.Z, { kind: 'youtube', href: l().youtube, size: '6' }),
                  (0, r.tZ)(_.Z, { kind: 'linkedin', href: l().linkedin, size: '6' }),
                  (0, r.tZ)(_.Z, { kind: 'twitter', href: l().twitter, size: '6' }),
                ],
              }),
              (0, r.BX)('div', {
                className: 'flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400',
                children: [
                  (0, r.tZ)('div', { children: l().author }),
                  (0, r.tZ)('div', { children: ' \u2022 ' }),
                  (0, r.tZ)('div', { children: '\xa9 '.concat(new Date().getFullYear()) }),
                  (0, r.tZ)('div', { children: ' \u2022 ' }),
                  (0, r.tZ)(x.Z, { href: '/', children: l().title }),
                ],
              }),
              (0, r.tZ)('div', {
                className: 'mb-8 text-sm text-gray-500 dark:text-gray-400',
                children: (0, r.tZ)(x.Z, {
                  href: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
                  children: 'Tailwind Nextjs Theme',
                }),
              }),
            ],
          }),
        })
      }
      var O = function () {
          var e = (0, y.useState)(!1),
            t = e[0],
            n = e[1],
            a = function () {
              n(function (e) {
                return (document.body.style.overflow = e ? 'auto' : 'hidden'), !e
              })
            }
          return (0, r.BX)('div', {
            className: 'sm:hidden',
            children: [
              (0, r.tZ)('button', {
                type: 'button',
                className: 'w-8 h-8 py-1 ml-1 mr-1 rounded',
                'aria-label': 'Toggle Menu',
                onClick: a,
                children: (0, r.tZ)('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 20 20',
                  fill: 'currentColor',
                  className: 'text-gray-900 dark:text-gray-100',
                  children: t
                    ? (0, r.tZ)('path', {
                        fillRule: 'evenodd',
                        d:
                          'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                        clipRule: 'evenodd',
                      })
                    : (0, r.tZ)('path', {
                        fillRule: 'evenodd',
                        d:
                          'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z',
                        clipRule: 'evenodd',
                      }),
                }),
              }),
              (0, r.BX)('div', {
                className: 'fixed w-full h-full top-24 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 '.concat(
                  t ? 'translate-x-0' : 'translate-x-full'
                ),
                children: [
                  (0, r.tZ)('button', {
                    type: 'button',
                    'aria-label': 'toggle modal',
                    className: 'fixed w-full h-full cursor-auto focus:outline-none',
                    onClick: a,
                  }),
                  (0, r.tZ)('nav', {
                    className: 'fixed h-full mt-8',
                    children: g.map(function (e) {
                      return (0,
                      r.tZ)('div', { className: 'px-12 py-4', children: (0, r.tZ)(x.Z, { href: e.href, className: 'text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100', onClick: a, children: e.title }) }, e.title)
                    }),
                  }),
                ],
              }),
            ],
          })
        },
        E = function () {
          var e = (0, y.useState)(!1),
            t = e[0],
            n = e[1],
            o = (0, a.F)(),
            i = o.theme,
            l = o.setTheme,
            c = o.resolvedTheme
          return (
            (0, y.useEffect)(function () {
              return n(!0)
            }, []),
            (0, r.tZ)('button', {
              'aria-label': 'Toggle Dark Mode',
              type: 'button',
              className: 'w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4',
              onClick: function () {
                return l('dark' === i || 'dark' === c ? 'light' : 'dark')
              },
              children: (0, r.tZ)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                className: 'text-gray-900 dark:text-gray-100',
                children:
                  !t || ('dark' !== i && 'dark' !== c)
                    ? (0, r.tZ)('path', {
                        d: 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z',
                      })
                    : (0, r.tZ)('path', {
                        fillRule: 'evenodd',
                        d:
                          'M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z',
                        clipRule: 'evenodd',
                      }),
              }),
            })
          )
        },
        z = function (e) {
          var t = e.children
          return (0, r.tZ)(k.Z, {
            children: (0, r.BX)('div', {
              className: 'flex flex-col justify-between h-screen',
              children: [
                (0, r.BX)('header', {
                  className: 'flex items-center justify-between py-10',
                  children: [
                    (0, r.tZ)('div', {
                      children: (0, r.tZ)(x.Z, {
                        href: '/',
                        'aria-label': 'Tailwind CSS Blog',
                        children: (0, r.BX)('div', {
                          className: 'flex items-center justify-between',
                          children: [
                            (0, r.tZ)('div', { className: 'mr-3', children: (0, r.tZ)(b, {}) }),
                            'string' === typeof l().headerTitle
                              ? (0, r.tZ)('div', {
                                  className: 'hidden h-6 text-2xl font-semibold sm:block',
                                  children: l().headerTitle,
                                })
                              : l().headerTitle,
                          ],
                        }),
                      }),
                    }),
                    (0, r.BX)('div', {
                      className: 'flex items-center text-base leading-5',
                      children: [
                        (0, r.tZ)('div', {
                          className: 'hidden sm:block',
                          children: g.map(function (e) {
                            return (0,
                            r.tZ)(x.Z, { href: e.href, className: 'p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100', children: e.title }, e.title)
                          }),
                        }),
                        (0, r.tZ)(E, {}),
                        (0, r.tZ)(O, {}),
                      ],
                    }),
                  ],
                }),
                (0, r.tZ)('main', { className: 'mb-auto', children: t }),
                (0, r.tZ)(Z, {}),
              ],
            }),
          })
        },
        j = (n(1163), n(4155))
      function C(e, t, n) {
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
        )
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n)
          'function' === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              })
            )),
            r.forEach(function (t) {
              C(e, t, n[t])
            })
        }
        return e
      }
      j.env.SOCKET
      function T(e) {
        var t = e.Component,
          n = e.pageProps
        return (0, r.BX)(a.f, {
          attribute: 'class',
          defaultTheme: l().theme,
          children: [
            (0, r.tZ)(o.default, {
              children: (0, r.tZ)('meta', {
                content: 'width=device-width, initial-scale=1',
                name: 'viewport',
              }),
            }),
            false,
            (0, r.tZ)(p, {}),
            (0, r.tZ)(z, { children: (0, r.tZ)(t, M({}, n)) }),
          ],
        })
      }
    },
    6870: function () {},
    7762: function () {},
    9008: function (e, t, n) {
      e.exports = n(5443)
    },
    1664: function (e, t, n) {
      e.exports = n(8418)
    },
    1163: function (e, t, n) {
      e.exports = n(387)
    },
    4298: function (e, t, n) {
      e.exports = n(699)
    },
    6584: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          Fragment: function () {
            return r.HY
          },
          jsx: function () {
            return o
          },
          jsxs: function () {
            return o
          },
          jsxDEV: function () {
            return o
          },
        })
      var r = n(6400),
        a = 0
      function o(e, t, n, o, i) {
        var l,
          c,
          s = {}
        for (c in t) 'ref' == c ? (l = t[c]) : (s[c] = t[c])
        var u = {
          type: e,
          props: s,
          key: n,
          ref: l,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          __h: null,
          constructor: void 0,
          __v: --a,
          __source: o,
          __self: i,
        }
        if ('function' == typeof e && (l = e.defaultProps))
          for (c in l) void 0 === s[c] && (s[c] = l[c])
        return r.YM.vnode && r.YM.vnode(u), u
      }
    },
    7320: function (e, t, n) {
      'use strict'
      n.d(t, {
        HY: function () {
          return r.Fragment
        },
        tZ: function () {
          return r.jsx
        },
        BX: function () {
          return r.jsxs
        },
      })
      var r = n(6584)
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t))
    }
    e.O(0, [179], function () {
      return t(1780), t(387)
    })
    var n = e.O()
    _N_E = n
  },
])
