;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [94],
  {
    6082: function (t, n, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/blog/[...slug]',
        function () {
          return r(8604)
        },
      ])
    },
    8604: function (t, n, r) {
      'use strict'
      r.r(n),
        r.d(n, {
          __N_SSG: function () {
            return a
          },
          default: function () {
            return c
          },
        })
      var e = r(7320),
        o = r(8215),
        u = r(8620),
        a = !0
      function c(t) {
        var n = t.post,
          r = t.authorDetails,
          a = t.prev,
          c = t.next,
          i = n.mdxSource,
          l = n.toc,
          s = n.frontMatter
        return (0, e.tZ)(e.HY, {
          children:
            !0 !== s.draft
              ? (0, e.tZ)(u.J, {
                  layout: s.layout || 'PostLayout',
                  toc: l,
                  mdxSource: i,
                  frontMatter: s,
                  authorDetails: r,
                  prev: a,
                  next: c,
                })
              : (0, e.tZ)('div', {
                  className: 'mt-24 text-center',
                  children: (0, e.BX)(o.Z, {
                    children: [
                      'Under Construction',
                      ' ',
                      (0, e.tZ)('span', {
                        role: 'img',
                        'aria-label': 'roadwork sign',
                        children: '\ud83d\udea7',
                      }),
                    ],
                  }),
                }),
        })
      }
    },
  },
  function (t) {
    t.O(0, [774, 932, 620, 888, 179], function () {
      return (n = 6082), t((t.s = n))
      var n
    })
    var n = t.O()
    _N_E = n
  },
])
