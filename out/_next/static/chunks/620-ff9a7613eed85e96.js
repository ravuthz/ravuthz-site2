;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [620],
  {
    9618: function (e, t, r) {
      var a = {
        './AuthorLayout': 4152,
        './AuthorLayout.js': 4152,
        './ListLayout': 9795,
        './ListLayout.js': 9795,
        './PostLayout': 5105,
        './PostLayout.js': 5105,
        './PostSimple': 3259,
        './PostSimple.js': 3259,
        './SanityListLayout': 4860,
        './SanityListLayout.js': 4860,
        './SanityPostLayout': 6408,
        './SanityPostLayout.js': 6408,
      }
      function n(e) {
        var t = i(e)
        return r(t)
      }
      function i(e) {
        if (!r.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = 'MODULE_NOT_FOUND'), t)
        }
        return a[e]
      }
      ;(n.keys = function () {
        return Object.keys(a)
      }),
        (n.resolve = i),
        (e.exports = n),
        (n.id = 9618)
    },
    6009: function (e, t, r) {
      'use strict'
      var a = r(7320)
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
            }
            return e
          }).apply(this, arguments)
      }
      t.Z = function (e) {
        var t = i({}, e)
        return (0, a.tZ)(
          'img',
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                a = Object.keys(r)
              'function' === typeof Object.getOwnPropertySymbols &&
                (a = a.concat(
                  Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                  })
                )),
                a.forEach(function (t) {
                  n(e, t, r[t])
                })
            }
            return e
          })({}, t)
        )
      }
    },
    8620: function (e, t, r) {
      'use strict'
      r.d(t, {
        J: function () {
          return g
        },
      })
      var a = r(7320),
        n = r(1720),
        i = r(3194),
        l = r(6009),
        c = r(4373),
        o = function (e) {
          var t = e.toc,
            r = e.indentDepth,
            n = void 0 === r ? 3 : r,
            i = e.fromHeading,
            l = void 0 === i ? 1 : i,
            c = e.toHeading,
            o = void 0 === c ? 6 : c,
            s = e.asDisclosure,
            d = void 0 !== s && s,
            u = e.exclude,
            m = void 0 === u ? '' : u,
            h = Array.isArray(m)
              ? new RegExp('^(' + m.join('|') + ')$', 'i')
              : new RegExp('^(' + m + ')$', 'i'),
            p = t.filter(function (e) {
              return e.depth >= l && e.depth <= o && !h.test(e.value)
            }),
            g = (0, a.tZ)('ul', {
              children: p.map(function (e) {
                return (0,
                a.tZ)('li', { className: ''.concat(e.depth >= n && 'ml-6'), children: (0, a.tZ)('a', { href: e.url, children: e.value }) }, e.value)
              }),
            })
          return (0, a.tZ)(a.HY, {
            children: d
              ? (0, a.BX)('details', {
                  open: !0,
                  children: [
                    (0, a.tZ)('summary', {
                      className: 'pt-2 pb-2 ml-6 text-xl font-bold',
                      children: 'Table of Contents',
                    }),
                    (0, a.tZ)('div', { className: 'ml-6', children: g }),
                  ],
                })
              : g,
          })
        },
        s = function (e) {
          var t = (0, n.useRef)(null),
            r = (0, n.useState)(!1),
            i = r[0],
            l = r[1],
            c = (0, n.useState)(!1),
            o = c[0],
            s = c[1]
          return (0, a.BX)('div', {
            ref: t,
            onMouseEnter: function () {
              l(!0)
            },
            onMouseLeave: function () {
              l(!1), s(!1)
            },
            className: 'relative',
            children: [
              i &&
                (0, a.tZ)('button', {
                  'aria-label': 'Copy code',
                  type: 'button',
                  className: 'absolute right-2 top-2 w-8 h-8 p-1 rounded border-2 bg-gray-700 dark:bg-gray-800 '.concat(
                    o
                      ? 'focus:outline-none focus:border-green-400 border-green-400'
                      : 'border-gray-300'
                  ),
                  onClick: function () {
                    s(!0),
                      navigator.clipboard.writeText(t.current.textContent),
                      setTimeout(function () {
                        s(!1)
                      }, 2e3)
                  },
                  children: (0, a.tZ)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 24 24',
                    stroke: 'currentColor',
                    fill: 'none',
                    className: o ? 'text-green-400' : 'text-gray-300',
                    children: o
                      ? (0, a.tZ)(a.HY, {
                          children: (0, a.tZ)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d:
                              'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
                          }),
                        })
                      : (0, a.tZ)(a.HY, {
                          children: (0, a.tZ)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d:
                              'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
                          }),
                        }),
                  }),
                }),
              (0, a.tZ)('pre', { children: e.children }),
            ],
          })
        },
        d = r(8968)
      function u(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(r)
          'function' === typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              })
            )),
            a.forEach(function (t) {
              u(e, t, r[t])
            })
        }
        return e
      }
      function h(e, t) {
        if (null == e) return {}
        var r,
          a,
          n = (function (e, t) {
            if (null == e) return {}
            var r,
              a,
              n = {},
              i = Object.keys(e)
            for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r])
            return n
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (a = 0; a < i.length; a++)
            (r = i[a]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]))
        }
        return n
      }
      var p = {
          Image: l.Z,
          TOCInline: o,
          a: c.Z,
          pre: s,
          BlogNewsletterForm: d.w,
          wrapper: function (e) {
            e.components
            var t = e.layout,
              n = h(e, ['components', 'layout']),
              i = r(9618)('./'.concat(t)).default
            return (0, a.tZ)(i, m({}, n))
          },
        },
        g = function (e) {
          var t = e.layout,
            r = e.mdxSource,
            l = h(e, ['layout', 'mdxSource']),
            c = (0, n.useMemo)(
              function () {
                return (0, i.getMDXComponent)(r)
              },
              [r]
            )
          return (0, a.tZ)(c, m({ layout: t, components: p }, l))
        }
    },
    8968: function (e, t, r) {
      'use strict'
      r.d(t, {
        w: function () {
          return u
        },
      })
      var a = r(8520),
        n = r.n(a),
        i = r(7320),
        l = r(1720),
        c = r(7059),
        o = r.n(c)
      function s(e, t, r, a, n, i, l) {
        try {
          var c = e[i](l),
            o = c.value
        } catch (s) {
          return void r(s)
        }
        c.done ? t(o) : Promise.resolve(o).then(a, n)
      }
      var d = function (e) {
        var t,
          r = e.title,
          a = void 0 === r ? 'Subscribe to the newsletter' : r,
          c = (0, l.useRef)(null),
          d = (0, l.useState)(!1),
          u = d[0],
          m = d[1],
          h = (0, l.useState)(''),
          p = h[0],
          g = h[1],
          y = (0, l.useState)(!1),
          x = y[0],
          f = y[1],
          v =
            ((t = n().mark(function e(t) {
              var r
              return n().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        t.preventDefault(),
                        (e.next = 3),
                        fetch('/api/'.concat(o().newsletter.provider), {
                          body: JSON.stringify({ email: c.current.value }),
                          headers: { 'Content-Type': 'application/json' },
                          method: 'POST',
                        })
                      )
                    case 3:
                      return (r = e.sent), (e.next = 6), r.json()
                    case 6:
                      if (!e.sent.error) {
                        e.next = 11
                        break
                      }
                      return (
                        m(!0),
                        g('Your e-mail address is invalid or you are already subscribed!'),
                        e.abrupt('return')
                      )
                    case 11:
                      ;(c.current.value = ''),
                        m(!1),
                        f(!0),
                        g('Successfully! \ud83c\udf89 You are now subscribed.')
                    case 15:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })),
            function () {
              var e = this,
                r = arguments
              return new Promise(function (a, n) {
                var i = t.apply(e, r)
                function l(e) {
                  s(i, a, n, l, c, 'next', e)
                }
                function c(e) {
                  s(i, a, n, l, c, 'throw', e)
                }
                l(void 0)
              })
            })
        return (0, i.BX)('div', {
          children: [
            (0, i.tZ)('div', {
              className: 'pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100',
              children: a,
            }),
            (0, i.BX)('form', {
              className: 'flex flex-col sm:flex-row',
              onSubmit: v,
              children: [
                (0, i.BX)('div', {
                  children: [
                    (0, i.tZ)('label', {
                      className: 'sr-only',
                      htmlFor: 'email-input',
                      children: 'Email address',
                    }),
                    (0, i.tZ)('input', {
                      autoComplete: 'email',
                      className:
                        'px-4 rounded-md w-72 dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary-600',
                      id: 'email-input',
                      name: 'email',
                      placeholder: x ? "You're subscribed !  \ud83c\udf89" : 'Enter your email',
                      ref: c,
                      required: !0,
                      type: 'email',
                      disabled: x,
                    }),
                  ],
                }),
                (0, i.tZ)('div', {
                  className: 'flex w-full mt-2 rounded-md shadow-sm sm:mt-0 sm:ml-3',
                  children: (0, i.tZ)('button', {
                    className: 'py-2 sm:py-0 w-full bg-primary-500 px-4 rounded-md font-medium text-white '.concat(
                      x ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-primary-400',
                      ' focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 dark:ring-offset-black'
                    ),
                    type: 'submit',
                    disabled: x,
                    children: x ? 'Thank you!' : 'Sign up',
                  }),
                }),
              ],
            }),
            u &&
              (0, i.tZ)('div', {
                className: 'pt-2 text-sm text-red-500 w-72 sm:w-96 dark:text-red-400',
                children: p,
              }),
          ],
        })
      }
      t.Z = d
      var u = function (e) {
        var t = e.title
        return (0, i.tZ)('div', {
          className: 'flex items-center justify-center',
          children: (0, i.tZ)('div', {
            className: 'p-6 bg-gray-100 dark:bg-gray-800 sm:px-14 sm:py-8',
            children: (0, i.tZ)(d, { title: t }),
          }),
        })
      }
    },
    8215: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return n
        },
      })
      var a = r(7320)
      function n(e) {
        var t = e.children
        return (0, a.tZ)('h1', {
          className:
            'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14',
          children: t,
        })
      }
    },
    8590: function (e, t, r) {
      'use strict'
      r.d(t, {
        TQ: function () {
          return s
        },
        $t: function () {
          return d
        },
        Uy: function () {
          return u
        },
      })
      var a = r(7320),
        n = r(9008),
        i = r(1163),
        l = r(7059),
        c = r.n(l),
        o = function (e) {
          var t = e.title,
            r = e.description,
            l = e.ogType,
            o = e.ogImage,
            s = e.twImage,
            d = (0, i.useRouter)()
          return (0, a.BX)(n.default, {
            children: [
              (0, a.tZ)('title', { children: t }),
              (0, a.tZ)('meta', { name: 'robots', content: 'follow, index' }),
              (0, a.tZ)('meta', { name: 'description', content: r }),
              (0, a.tZ)('meta', {
                property: 'og:url',
                content: ''.concat(c().siteUrl).concat(d.asPath),
              }),
              (0, a.tZ)('meta', { property: 'og:type', content: l }),
              (0, a.tZ)('meta', { property: 'og:site_name', content: c().title }),
              (0, a.tZ)('meta', { property: 'og:description', content: r }),
              (0, a.tZ)('meta', { property: 'og:title', content: t }),
              'Array' === o.constructor.name
                ? o.map(function (e) {
                    var t = e.url
                    return (0, a.tZ)('meta', { property: 'og:image', content: t }, t)
                  })
                : (0, a.tZ)('meta', { property: 'og:image', content: o }, o),
              (0, a.tZ)('meta', { name: 'twitter:card', content: 'summary_large_image' }),
              (0, a.tZ)('meta', { name: 'twitter:site', content: c().twitter }),
              (0, a.tZ)('meta', { name: 'twitter:title', content: t }),
              (0, a.tZ)('meta', { name: 'twitter:description', content: r }),
              (0, a.tZ)('meta', { name: 'twitter:image', content: s }),
            ],
          })
        },
        s = function (e) {
          var t = e.title,
            r = e.description,
            n = c().siteUrl + c().socialBanner,
            i = c().siteUrl + c().socialBanner
          return (0, a.tZ)(o, {
            title: t,
            description: r,
            ogType: 'website',
            ogImage: n,
            twImage: i,
          })
        },
        d = function (e) {
          var t = e.title,
            r = e.description,
            l = c().siteUrl + c().socialBanner,
            s = c().siteUrl + c().socialBanner,
            d = (0, i.useRouter)()
          return (0, a.BX)(a.HY, {
            children: [
              (0, a.tZ)(o, { title: t, description: r, ogType: 'website', ogImage: l, twImage: s }),
              (0, a.tZ)(n.default, {
                children: (0, a.tZ)('link', {
                  rel: 'alternate',
                  type: 'application/rss+xml',
                  title: ''.concat(r, ' - RSS feed'),
                  href: ''.concat(c().siteUrl).concat(d.asPath, '/feed.xml'),
                }),
              }),
            ],
          })
        },
        u = function (e) {
          var t = e.authorDetails,
            r = e.title,
            l = e.summary,
            s = e.date,
            d = e.lastmod,
            u = e.url,
            m = e.images,
            h = void 0 === m ? [] : m,
            p = (0, i.useRouter)(),
            g = new Date(s).toISOString(),
            y = new Date(d || s).toISOString(),
            x = (0 === h.length ? [c().socialBanner] : 'string' === typeof h ? [h] : h).map(
              function (e) {
                return { '@type': 'ImageObject', url: ''.concat(c().siteUrl).concat(e) }
              }
            ),
            f = {
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: { '@type': 'WebPage', '@id': u },
              headline: r,
              image: x,
              datePublished: g,
              dateModified: y,
              author: t
                ? t.map(function (e) {
                    return { '@type': 'Person', name: e.name }
                  })
                : { '@type': 'Person', name: c().author },
              publisher: {
                '@type': 'Organization',
                name: c().author,
                logo: { '@type': 'ImageObject', url: ''.concat(c().siteUrl).concat(c().siteLogo) },
              },
              description: l,
            },
            v = x[0].url
          return (0, a.BX)(a.HY, {
            children: [
              (0, a.tZ)(o, { title: r, description: l, ogType: 'article', ogImage: x, twImage: v }),
              (0, a.BX)(n.default, {
                children: [
                  s && (0, a.tZ)('meta', { property: 'article:published_time', content: g }),
                  d && (0, a.tZ)('meta', { property: 'article:modified_time', content: y }),
                  (0, a.tZ)('link', {
                    rel: 'canonical',
                    href: ''.concat(c().siteUrl).concat(p.asPath),
                  }),
                  (0, a.tZ)('script', {
                    type: 'application/ld+json',
                    dangerouslySetInnerHTML: { __html: JSON.stringify(f, null, 2) },
                  }),
                ],
              }),
            ],
          })
        }
    },
    2540: function (e, t, r) {
      'use strict'
      var a = r(7320),
        n = r(1720),
        i = r(523),
        l = r.n(i)
      t.Z = function () {
        var e = (0, n.useState)(!1),
          t = e[0],
          r = e[1]
        ;(0, n.useEffect)(function () {
          l().polyfill()
          var e = function () {
            window.scrollY > 50 ? r(!0) : r(!1)
          }
          return (
            window.addEventListener('scroll', e),
            function () {
              return window.removeEventListener('scroll', e)
            }
          )
        }, [])
        return (0, a.BX)('div', {
          className: 'fixed flex-col hidden gap-3 right-8 bottom-8 md:flex',
          children: [
            (0, a.tZ)('button', {
              'aria-label': 'Scroll To Comment',
              type: 'button',
              onClick: function () {
                document.getElementById('comment').scrollIntoView()
              },
              style: { opacity: t ? 1 : 0 },
              className:
                'p-2 text-gray-500 transition-all bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300',
              children: (0, a.tZ)('svg', {
                className: 'w-5 h-5',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                children: (0, a.tZ)('path', {
                  fillRule: 'evenodd',
                  d:
                    'M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z',
                  clipRule: 'evenodd',
                }),
              }),
            }),
            (0, a.tZ)('button', {
              'aria-label': 'Scroll To Top',
              type: 'button',
              onClick: function () {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              },
              style: { opacity: t ? 1 : 0 },
              className:
                'p-2 text-gray-500 transition-all bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300',
              children: (0, a.tZ)('svg', {
                className: 'w-5 h-5',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                children: (0, a.tZ)('path', {
                  fillRule: 'evenodd',
                  d:
                    'M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z',
                  clipRule: 'evenodd',
                }),
              }),
            }),
          ],
        })
      }
    },
    2917: function (e, t, r) {
      'use strict'
      var a = r(7320),
        n = r(1664),
        i = r(7836)
      t.Z = function (e) {
        var t = e.text
        return (0, a.tZ)(n.default, {
          href: '/tags/'.concat((0, i.Z)(t)),
          children: (0, a.tZ)('a', {
            className:
              'mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
            children: t.split(' ').join('-'),
          }),
        })
      }
    },
    9367: function (e, t, r) {
      'use strict'
      var a = r(7320),
        n = r(7059),
        i = r.n(n),
        l = r(5152),
        c = (0, l.default)(
          function () {
            return r.e(369).then(r.bind(r, 369))
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [369]
              },
              modules: ['..\\components\\comments\\index.js -> @/components/comments/Utterances'],
            },
            ssr: !1,
          }
        ),
        o = (0, l.default)(
          function () {
            return r.e(13).then(r.bind(r, 6013))
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [6013]
              },
              modules: ['..\\components\\comments\\index.js -> @/components/comments/Giscus'],
            },
            ssr: !1,
          }
        ),
        s = (0, l.default)(
          function () {
            return r.e(970).then(r.bind(r, 9970))
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [9970]
              },
              modules: ['..\\components\\comments\\index.js -> @/components/comments/Disqus'],
            },
            ssr: !1,
          }
        )
      t.Z = function (e) {
        var t,
          r = e.frontMatter
        switch (i().comment.giscusConfig.mapping || i().comment.utterancesConfig.issueTerm) {
          case 'pathname':
            t = r.slug
            break
          case 'url':
            t = window.location.href
            break
          case 'title':
            t = r.title
        }
        return (0, a.BX)('div', {
          id: 'comment',
          children: [
            i().comment && 'giscus' === i().comment.provider && (0, a.tZ)(o, { mapping: t }),
            i().comment && 'utterances' === i().comment.provider && (0, a.tZ)(c, { issueTerm: t }),
            i().comment && 'disqus' === i().comment.provider && (0, a.tZ)(s, { frontMatter: r }),
          ],
        })
      }
    },
    4152: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return c
          },
        })
      var a = r(7320),
        n = r(4642),
        i = r(6009),
        l = r(8590)
      function c(e) {
        var t = e.children,
          r = e.frontMatter,
          c = r.name,
          o = r.avatar,
          s = r.occupation,
          d = r.company,
          u = r.email,
          m = r.twitter,
          h = r.linkedin,
          p = r.github
        return (0, a.BX)(a.HY, {
          children: [
            (0, a.tZ)(l.TQ, { title: 'About - '.concat(c), description: 'About me - '.concat(c) }),
            (0, a.BX)('div', {
              className: 'divide-y',
              children: [
                (0, a.tZ)('div', {
                  className: 'pt-6 pb-8 space-y-2 md:space-y-5',
                  children: (0, a.tZ)('h1', {
                    className:
                      'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                    children: 'About',
                  }),
                }),
                (0, a.BX)('div', {
                  className: 'items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0',
                  children: [
                    (0, a.BX)('div', {
                      className: 'flex flex-col items-center pt-8 space-x-2',
                      children: [
                        (0, a.tZ)(i.Z, {
                          src: o,
                          alt: 'avatar',
                          width: '192px',
                          height: '192px',
                          className: 'w-48 h-48 rounded-full',
                        }),
                        (0, a.tZ)('h3', {
                          className: 'pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight',
                          children: c,
                        }),
                        (0, a.tZ)('div', {
                          className: 'text-gray-500 dark:text-gray-400',
                          children: s,
                        }),
                        (0, a.tZ)('div', {
                          className: 'text-gray-500 dark:text-gray-400',
                          children: d,
                        }),
                        (0, a.BX)('div', {
                          className: 'flex pt-6 space-x-3',
                          children: [
                            (0, a.tZ)(n.Z, { kind: 'mail', href: 'mailto:'.concat(u) }),
                            (0, a.tZ)(n.Z, { kind: 'github', href: p }),
                            (0, a.tZ)(n.Z, { kind: 'linkedin', href: h }),
                            (0, a.tZ)(n.Z, { kind: 'twitter', href: m }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.tZ)('div', {
                      className: 'pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2',
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
    },
    9795: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return s
          },
        })
      var a = r(7320),
        n = r(4373),
        i = r(2917),
        l = (r(7059), r(1720))
      function c(e) {
        var t = e.totalPages,
          r = e.currentPage,
          i = parseInt(r) - 1 > 0,
          l = parseInt(r) + 1 <= parseInt(t)
        return (0, a.tZ)('div', {
          className: 'pt-6 pb-8 space-y-2 md:space-y-5',
          children: (0, a.BX)('nav', {
            className: 'flex justify-between',
            children: [
              !i &&
                (0, a.tZ)('button', {
                  rel: 'previous',
                  className: 'cursor-auto disabled:opacity-50',
                  disabled: !i,
                  children: 'Previous',
                }),
              i &&
                (0, a.tZ)(n.Z, {
                  href: r - 1 === 1 ? '/blog/' : '/blog/page/'.concat(r - 1),
                  children: (0, a.tZ)('button', { rel: 'previous', children: 'Previous' }),
                }),
              (0, a.BX)('span', { children: [r, ' of ', t] }),
              !l &&
                (0, a.tZ)('button', {
                  rel: 'next',
                  className: 'cursor-auto disabled:opacity-50',
                  disabled: !l,
                  children: 'Next',
                }),
              l &&
                (0, a.tZ)(n.Z, {
                  href: '/blog/page/'.concat(r + 1),
                  children: (0, a.tZ)('button', { rel: 'next', children: 'Next' }),
                }),
            ],
          }),
        })
      }
      var o = r(811)
      function s(e) {
        var t = e.posts,
          r = e.title,
          s = e.initialDisplayPosts,
          d = void 0 === s ? [] : s,
          u = e.pagination,
          m = (0, l.useState)(''),
          h = m[0],
          p = m[1],
          g = t.filter(function (e) {
            return (e.title + e.summary + e.tags.join(' ')).toLowerCase().includes(h.toLowerCase())
          }),
          y = d.length > 0 && !h ? d : g
        return (0, a.BX)(a.HY, {
          children: [
            (0, a.BX)('div', {
              className: 'divide-y',
              children: [
                (0, a.BX)('div', {
                  className: 'pt-6 pb-8 space-y-2 md:space-y-5',
                  children: [
                    (0, a.tZ)('h1', {
                      className:
                        'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                      children: r,
                    }),
                    (0, a.BX)('div', {
                      className: 'relative max-w-lg',
                      children: [
                        (0, a.tZ)('input', {
                          'aria-label': 'Search articles',
                          type: 'text',
                          onChange: function (e) {
                            return p(e.target.value)
                          },
                          placeholder: 'Search articles',
                          className:
                            'block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100',
                        }),
                        (0, a.tZ)('svg', {
                          className:
                            'absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300',
                          xmlns: 'http://www.w3.org/2000/svg',
                          fill: 'none',
                          viewBox: '0 0 24 24',
                          stroke: 'currentColor',
                          children: (0, a.tZ)('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.BX)('ul', {
                  children: [
                    !g.length && 'No posts found.',
                    y.map(function (e) {
                      var t = e.slug,
                        r = e.date,
                        l = e.title,
                        c = e.summary,
                        s = e.tags
                      return (0, a.tZ)(
                        'li',
                        {
                          className: 'py-4',
                          children: (0, a.BX)('article', {
                            className:
                              'space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline',
                            children: [
                              (0, a.BX)('dl', {
                                children: [
                                  (0, a.tZ)('dt', {
                                    className: 'sr-only',
                                    children: 'Published on',
                                  }),
                                  (0, a.tZ)('dd', {
                                    className:
                                      'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                    children: (0, a.tZ)('time', {
                                      dateTime: r,
                                      children: (0, o.Z)(r),
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.BX)('div', {
                                className: 'space-y-3 xl:col-span-3',
                                children: [
                                  (0, a.BX)('div', {
                                    children: [
                                      (0, a.tZ)('h3', {
                                        className: 'text-2xl font-bold leading-8 tracking-tight',
                                        children: (0, a.tZ)(n.Z, {
                                          href: '/blog/'.concat(t),
                                          className: 'text-gray-900 dark:text-gray-100',
                                          children: l,
                                        }),
                                      }),
                                      (0, a.tZ)('div', {
                                        className: 'flex flex-wrap',
                                        children: s.map(function (e) {
                                          return (0, a.tZ)(i.Z, { text: e }, e)
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.tZ)('div', {
                                    className: 'prose text-gray-500 max-w-none dark:text-gray-400',
                                    children: c,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        t
                      )
                    }),
                  ],
                }),
              ],
            }),
            u &&
              u.totalPages > 1 &&
              !h &&
              (0, a.tZ)(c, { currentPage: u.currentPage, totalPages: u.totalPages }),
          ],
        })
      }
    },
    5105: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return b
          },
        })
      var a = r(7320),
        n = r(4373),
        i = r(8215),
        l = r(9072),
        c = r(8590),
        o = r(6009),
        s = r(2917),
        d = r(7059),
        u = r.n(d),
        m = r(9367),
        h = r(2540),
        p = r(1818)
      function g(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(r)
          'function' === typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              })
            )),
            a.forEach(function (t) {
              g(e, t, r[t])
            })
        }
        return e
      }
      var x = function (e) {
          return ''.concat(u().siteRepo, '/blob/master/').concat(e)
        },
        f = function (e) {
          return 'https://mobile.twitter.com/search?q='.concat(
            encodeURIComponent(''.concat(u().siteUrl, '/blog/').concat(e))
          )
        },
        v = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      function b(e) {
        var t = e.frontMatter,
          r = e.authorDetails,
          d = e.next,
          g = e.prev,
          b = e.children,
          Z = t.slug,
          w = t.fileName,
          N = t.date,
          k = t.title,
          B = t.tags,
          X = ''.concat(u().siteUrl, '/blog/').concat(Z)
        return (0, a.BX)(l.Z, {
          children: [
            (0, a.tZ)(
              c.Uy,
              y({ url: ''.concat(u().siteUrl, '/blog/').concat(Z), authorDetails: r }, t)
            ),
            (0, a.tZ)(h.Z, {}),
            (0, a.tZ)('article', {
              children: (0, a.BX)('div', {
                className: 'xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700',
                children: [
                  (0, a.tZ)('header', {
                    className: 'pt-6 xl:pb-6',
                    children: (0, a.BX)('div', {
                      className: 'space-y-1 text-center',
                      children: [
                        (0, a.tZ)('dl', {
                          className: 'space-y-10',
                          children: (0, a.BX)('div', {
                            children: [
                              (0, a.tZ)('dt', { className: 'sr-only', children: 'Published on' }),
                              (0, a.tZ)('dd', {
                                className:
                                  'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                children: (0, a.tZ)('time', {
                                  dateTime: N,
                                  children: new Date(N).toLocaleDateString(u().locale, v),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, a.tZ)('div', { children: (0, a.tZ)(i.Z, { children: k }) }),
                      ],
                    }),
                  }),
                  (0, a.BX)('div', {
                    className:
                      'pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6',
                    style: { gridTemplateRows: 'auto 1fr' },
                    children: [
                      (0, a.BX)('dl', {
                        className:
                          'pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700',
                        children: [
                          (0, a.tZ)('dt', { className: 'sr-only', children: 'Authors' }),
                          (0, a.tZ)('dd', {
                            children: (0, a.tZ)('ul', {
                              className:
                                'flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8',
                              children: r.map(function (e) {
                                return (0,
                                a.BX)('li', { className: 'flex items-center space-x-2', children: [e.avatar && (0, a.tZ)(o.Z, { src: e.avatar, width: '38px', height: '38px', alt: 'avatar', className: 'w-10 h-10 rounded-full' }), (0, a.BX)('dl', { className: 'text-sm font-medium leading-5 whitespace-nowrap', children: [(0, a.tZ)('dt', { className: 'sr-only', children: 'Name' }), (0, a.tZ)('dd', { className: 'text-gray-900 dark:text-gray-100', children: e.name }), (0, a.tZ)('dt', { className: 'sr-only', children: 'Twitter' }), (0, a.tZ)('dd', { children: e.twitter && (0, a.tZ)(n.Z, { href: e.twitter, className: 'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400', children: e.twitter.replace('https://twitter.com/', '@') }) })] })] }, e.name)
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, a.BX)('div', {
                        className:
                          'divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2',
                        children: [
                          (0, a.tZ)('div', {
                            className: 'pt-10 pb-8 prose dark:prose-dark max-w-none',
                            children: b,
                          }),
                          (0, a.BX)('div', {
                            className: 'pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300',
                            children: [
                              (0, a.tZ)(n.Z, {
                                href: f(Z),
                                rel: 'nofollow',
                                children: 'Discuss on Twitter',
                              }),
                              ' \u2022 ',
                              (0, a.tZ)(n.Z, { href: x(w), children: 'View on GitHub' }),
                            ],
                          }),
                          (0, a.tZ)(m.Z, { frontMatter: t }),
                        ],
                      }),
                      (0, a.BX)('footer', {
                        children: [
                          (0, a.BX)('div', {
                            className:
                              'text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2',
                            children: [
                              B &&
                                (0, a.BX)('div', {
                                  className: 'py-4 xl:py-8',
                                  children: [
                                    (0, a.tZ)('h2', {
                                      className:
                                        'text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400',
                                      children: 'Tags',
                                    }),
                                    (0, a.tZ)('div', {
                                      className: 'flex flex-wrap',
                                      children: B.map(function (e) {
                                        return (0, a.tZ)(s.Z, { text: e }, e)
                                      }),
                                    }),
                                  ],
                                }),
                              (d || g) &&
                                (0, a.BX)('div', {
                                  className:
                                    'flex justify-between py-4 xl:block xl:space-y-8 xl:py-8',
                                  children: [
                                    g &&
                                      (0, a.BX)('div', {
                                        children: [
                                          (0, a.tZ)('h2', {
                                            className:
                                              'text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400',
                                            children: 'Previous Article',
                                          }),
                                          (0, a.tZ)('div', {
                                            className:
                                              'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                            children: (0, a.tZ)(n.Z, {
                                              href: '/blog/'.concat(g.slug),
                                              children: g.title,
                                            }),
                                          }),
                                        ],
                                      }),
                                    d &&
                                      (0, a.BX)('div', {
                                        children: [
                                          (0, a.tZ)('h2', {
                                            className:
                                              'text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400',
                                            children: 'Next Article',
                                          }),
                                          (0, a.tZ)('div', {
                                            className:
                                              'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                            children: (0, a.tZ)(n.Z, {
                                              href: '/blog/'.concat(d.slug),
                                              children: d.title,
                                            }),
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                            ],
                          }),
                          (0, a.BX)('div', {
                            className: 'pt-4 xl:pt-8 post-share-buttons',
                            children: [
                              (0, a.tZ)(p.Dk, {
                                url: X,
                                children: (0, a.tZ)(p.Vq, { size: 32, round: !0 }),
                              }),
                              (0, a.tZ)(p.r2, {
                                url: X,
                                children: (0, a.tZ)(p.pA, { size: 32, round: !0 }),
                              }),
                              (0, a.tZ)(p.MC, {
                                url: X,
                                children: (0, a.tZ)(p.cH, { size: 32, round: !0 }),
                              }),
                              (0, a.tZ)(p.N0, {
                                url: X,
                                children: (0, a.tZ)(p.ud, { size: 32, round: !0 }),
                              }),
                              (0, a.tZ)(p.tq, {
                                url: X,
                                children: (0, a.tZ)(p.YG, { size: 32, round: !0 }),
                              }),
                            ],
                          }),
                          (0, a.tZ)('div', {
                            className: 'pt-4 xl:pt-8',
                            children: (0, a.tZ)(n.Z, {
                              href: '/blog',
                              className:
                                'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                              children: '\u2190 Back to the blog',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
      }
    },
    3259: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return g
          },
        })
      var a = r(7320),
        n = r(4373),
        i = r(8215),
        l = r(9072),
        c = r(8590),
        o = r(7059),
        s = r.n(o),
        d = r(811),
        u = r(9367),
        m = r(2540)
      function h(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(r)
          'function' === typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              })
            )),
            a.forEach(function (t) {
              h(e, t, r[t])
            })
        }
        return e
      }
      function g(e) {
        var t = e.frontMatter,
          r = (e.authorDetails, e.next),
          o = e.prev,
          h = e.children,
          g = t.date,
          y = t.title
        return (0, a.BX)(l.Z, {
          children: [
            (0, a.tZ)(c.Uy, p({ url: ''.concat(s().siteUrl, '/blog/').concat(t.slug) }, t)),
            (0, a.tZ)(m.Z, {}),
            (0, a.tZ)('article', {
              children: (0, a.BX)('div', {
                children: [
                  (0, a.tZ)('header', {
                    children: (0, a.BX)('div', {
                      className:
                        'pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700',
                      children: [
                        (0, a.tZ)('dl', {
                          children: (0, a.BX)('div', {
                            children: [
                              (0, a.tZ)('dt', { className: 'sr-only', children: 'Published on' }),
                              (0, a.tZ)('dd', {
                                className:
                                  'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                children: (0, a.tZ)('time', { dateTime: g, children: (0, d.Z)(g) }),
                              }),
                            ],
                          }),
                        }),
                        (0, a.tZ)('div', { children: (0, a.tZ)(i.Z, { children: y }) }),
                      ],
                    }),
                  }),
                  (0, a.BX)('div', {
                    className: 'pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 ',
                    style: { gridTemplateRows: 'auto 1fr' },
                    children: [
                      (0, a.tZ)('div', {
                        className:
                          'divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2',
                        children: (0, a.tZ)('div', {
                          className: 'pt-10 pb-8 prose dark:prose-dark max-w-none',
                          children: h,
                        }),
                      }),
                      (0, a.tZ)(u.Z, { frontMatter: t }),
                      (0, a.tZ)('footer', {
                        children: (0, a.BX)('div', {
                          className:
                            'flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base',
                          children: [
                            o &&
                              (0, a.tZ)('div', {
                                className: 'pt-4 xl:pt-8',
                                children: (0, a.BX)(n.Z, {
                                  href: '/blog/'.concat(o.slug),
                                  className:
                                    'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                  children: ['\u2190 ', o.title],
                                }),
                              }),
                            r &&
                              (0, a.tZ)('div', {
                                className: 'pt-4 xl:pt-8',
                                children: (0, a.BX)(n.Z, {
                                  href: '/blog/'.concat(r.slug),
                                  className:
                                    'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                  children: [r.title, ' \u2192'],
                                }),
                              }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
      }
    },
    4860: function (e, t, r) {
      'use strict'
      r.r(t)
      var a = r(7320),
        n = r(4373),
        i = r(2917),
        l = r(1720),
        c = r(811)
      t.default = function (e) {
        var t = e.posts,
          r = e.title,
          o = e.initialDisplayPosts,
          s = void 0 === o ? [] : o,
          d = (0, l.useState)(''),
          u = d[0],
          m = d[1],
          h = t.filter(function (e) {
            var t = [e.title, e.summary || '', e.tags || ''].join(' ')
            return console.log('text: ', t), t.toLowerCase().includes(u.toLowerCase())
          }),
          p = !u && s.length > 0 ? s : h
        return (0, a.tZ)(a.HY, {
          children: (0, a.BX)('div', {
            className: 'divide-y',
            children: [
              (0, a.BX)('div', {
                className: 'pt-6 pb-8 space-y-2 md:space-y-5',
                children: [
                  (0, a.tZ)('h1', {
                    className:
                      'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                    children: r,
                  }),
                  (0, a.BX)('div', {
                    className: 'relative max-w-lg',
                    children: [
                      (0, a.tZ)('input', {
                        'aria-label': 'Search articles',
                        type: 'text',
                        onChange: function (e) {
                          return m(e.target.value)
                        },
                        placeholder: 'Search articles',
                        className:
                          'block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100',
                      }),
                      (0, a.tZ)('svg', {
                        className:
                          'absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300',
                        xmlns: 'http://www.w3.org/2000/svg',
                        fill: 'none',
                        viewBox: '0 0 24 24',
                        stroke: 'currentColor',
                        children: (0, a.tZ)('path', {
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          strokeWidth: 2,
                          d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.BX)('ul', {
                children: [
                  !p.length && 'No posts found.',
                  p.map(function (e) {
                    var t = e.slug,
                      r = e.title,
                      l = (e.mainImage, e.summary),
                      o = e.publishedAt,
                      s = (e.author, e.tags)
                    return (0, a.tZ)(
                      'li',
                      {
                        className: 'py-4',
                        children: (0, a.BX)('article', {
                          className:
                            'space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline',
                          children: [
                            (0, a.BX)('dl', {
                              children: [
                                (0, a.tZ)('dt', { className: 'sr-only', children: 'Published on' }),
                                (0, a.tZ)('dd', {
                                  className:
                                    'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                                  children: (0, a.tZ)('time', {
                                    dateTime: o,
                                    children: (0, c.Z)(o),
                                  }),
                                }),
                              ],
                            }),
                            (0, a.BX)('div', {
                              className: 'space-y-3 xl:col-span-3',
                              children: [
                                (0, a.BX)('div', {
                                  children: [
                                    (0, a.tZ)('h3', {
                                      className: 'text-2xl font-bold leading-8 tracking-tight',
                                      children: (0, a.tZ)(n.Z, {
                                        href: '/post/'.concat(t),
                                        className: 'text-gray-900 dark:text-gray-100',
                                        children: r,
                                      }),
                                    }),
                                    (0, a.tZ)('div', {
                                      className: 'flex flex-wrap',
                                      children:
                                        s &&
                                        s.map(function (e) {
                                          return (0, a.tZ)(i.Z, { text: e }, e)
                                        }),
                                    }),
                                  ],
                                }),
                                (0, a.tZ)('div', {
                                  className: 'prose text-gray-500 max-w-none dark:text-gray-400',
                                  children: l,
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      t
                    )
                  }),
                ],
              }),
            ],
          }),
        })
      }
    },
    6408: function (e, t, r) {
      'use strict'
      r.r(t)
      var a = r(7320),
        n = r(4373),
        i = r(8215),
        l = r(1720),
        c = r(2917),
        o = r(6009)
      t.default = function (e) {
        var t = e.title,
          r = (e.body, e.mainImage, e.publishedAt),
          s = e.author,
          d = e.tags,
          u = e.prev,
          m = e.next,
          h = e.children,
          p = (0, l.useState)(''),
          g = p[0],
          y = p[1]
        return (
          (0, l.useEffect)(
            function () {
              s.slug &&
                fetch('http://localhost:3000/api/avatar?name=' + s.slug)
                  .then(function (e) {
                    return e.json()
                  })
                  .then(function (e) {
                    var t = e.data
                    return y(t)
                  })
            },
            [s.slug]
          ),
          (0, a.tZ)('article', {
            children: (0, a.BX)('div', {
              className: 'xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700',
              children: [
                (0, a.tZ)('header', {
                  className: 'pt-6 xl:pb-6',
                  children: (0, a.BX)('div', {
                    className: 'space-y-1 text-center',
                    children: [
                      (0, a.tZ)('dl', {
                        className: 'space-y-10',
                        children: (0, a.BX)('div', {
                          children: [
                            (0, a.tZ)('dt', { className: 'sr-only', children: 'Published on' }),
                            (0, a.tZ)('dd', {
                              className:
                                'text-base font-medium leading-6 text-gray-500 dark:text-gray-400',
                              children: (0, a.tZ)('time', {
                                dateTime: r,
                                children: new Date(r).toLocaleDateString(),
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.tZ)('div', { children: (0, a.tZ)(i.Z, { children: t }) }),
                    ],
                  }),
                }),
                (0, a.BX)('div', {
                  className:
                    'pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6',
                  style: { gridTemplateRows: 'auto 1fr' },
                  children: [
                    (0, a.BX)('dl', {
                      className:
                        'pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700',
                      children: [
                        (0, a.tZ)('dt', { className: 'sr-only', children: 'Authors' }),
                        (0, a.tZ)('dd', {
                          children: (0, a.tZ)('ul', {
                            className:
                              'flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8',
                            children: (0, a.BX)(
                              'li',
                              {
                                className: 'flex items-center space-x-2',
                                children: [
                                  g &&
                                    (0, a.tZ)(o.Z, {
                                      src: g,
                                      width: '38px',
                                      height: '38px',
                                      alt: 'avatar',
                                      className: 'w-10 h-10 rounded-full',
                                    }),
                                  (0, a.BX)('dl', {
                                    className: 'text-sm font-medium leading-5 whitespace-nowrap',
                                    children: [
                                      (0, a.tZ)('dt', { className: 'sr-only', children: 'Name' }),
                                      (0, a.tZ)('dd', {
                                        className: 'text-gray-900 dark:text-gray-100',
                                        children: s.name,
                                      }),
                                      (0, a.tZ)('dt', {
                                        className: 'sr-only',
                                        children: 'Twitter',
                                      }),
                                      (0, a.tZ)('dd', {
                                        children:
                                          s.twitter &&
                                          (0, a.tZ)(n.Z, {
                                            href: s.twitter,
                                            className:
                                              'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                            children: s.twitter.replace(
                                              'https://twitter.com/',
                                              '@'
                                            ),
                                          }),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              s.name
                            ),
                          }),
                        }),
                      ],
                    }),
                    (0, a.tZ)('div', {
                      className:
                        'divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2',
                      children: (0, a.tZ)('div', {
                        className: 'pt-10 pb-8 prose dark:prose-dark max-w-none',
                        children: h,
                      }),
                    }),
                    (0, a.BX)('footer', {
                      children: [
                        (0, a.BX)('div', {
                          className:
                            'text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2',
                          children: [
                            d &&
                              (0, a.BX)('div', {
                                className: 'py-4 xl:py-8',
                                children: [
                                  (0, a.tZ)('h2', {
                                    className:
                                      'text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400',
                                    children: 'Tags',
                                  }),
                                  (0, a.tZ)('div', {
                                    className: 'flex flex-wrap',
                                    children: d.map(function (e) {
                                      return (0, a.tZ)(c.Z, { text: e }, e)
                                    }),
                                  }),
                                ],
                              }),
                            (m || u) &&
                              (0, a.BX)('div', {
                                className:
                                  'flex justify-between py-4 xl:block xl:space-y-8 xl:py-8',
                                children: [
                                  u &&
                                    (0, a.BX)('div', {
                                      children: [
                                        (0, a.tZ)('h2', {
                                          className:
                                            'text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400',
                                          children: 'Previous Article',
                                        }),
                                        (0, a.tZ)('div', {
                                          className:
                                            'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                          children: (0, a.tZ)(n.Z, {
                                            href: '/blog/'.concat(u.slug),
                                            children: u.title,
                                          }),
                                        }),
                                      ],
                                    }),
                                  m &&
                                    (0, a.BX)('div', {
                                      children: [
                                        (0, a.tZ)('h2', {
                                          className:
                                            'text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400',
                                          children: 'Next Article',
                                        }),
                                        (0, a.tZ)('div', {
                                          className:
                                            'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                                          children: (0, a.tZ)(n.Z, {
                                            href: '/blog/'.concat(m.slug),
                                            children: m.title,
                                          }),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                          ],
                        }),
                        (0, a.tZ)('div', {
                          className: 'pt-4 xl:pt-8',
                          children: (0, a.tZ)(n.Z, {
                            href: '/post',
                            className:
                              'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                            children: '\u2190 Back to the post',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        )
      }
    },
    811: function (e, t, r) {
      'use strict'
      var a = r(7059),
        n = r.n(a)
      t.Z = function (e) {
        return new Date(e).toLocaleDateString(n().locale, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }
    },
    7836: function (e, t, r) {
      'use strict'
      var a = r(9671)
      t.Z = function (e) {
        return (0, a.slug)(e)
      }
    },
  },
])
