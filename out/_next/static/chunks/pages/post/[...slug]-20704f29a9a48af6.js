(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{4454:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[...slug]",function(){return r(7827)}])},6009:function(e,t,r){"use strict";var a=r(7320);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}t.Z=function(e){var t=i({},e);return(0,a.tZ)("img",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},t))}},8215:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(7320);function n(e){var t=e.children;return(0,a.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",children:t})}},2917:function(e,t,r){"use strict";var a=r(7320),n=r(1664),i=r(7836);t.Z=function(e){var t=e.text;return(0,a.tZ)(n.default,{href:"/tags/".concat((0,i.Z)(t)),children:(0,a.tZ)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:t.split(" ").join("-")})})}},6408:function(e,t,r){"use strict";r.r(t);var a=r(7320),n=r(4373),i=r(8215),l=r(1720),c=r(2917),d=r(6009);t.default=function(e){var t=e.title,r=(e.body,e.mainImage,e.publishedAt),s=e.author,o=e.tags,u=e.prev,h=e.next,p=e.children,m=(0,l.useState)(""),x=m[0],f=m[1];return(0,l.useEffect)((function(){s.slug&&fetch("http://localhost:3000/api/avatar?name="+s.slug).then((function(e){return e.json()})).then((function(e){var t=e.data;return f(t)}))}),[s.slug]),(0,a.tZ)("article",{children:(0,a.BX)("div",{className:"xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",children:[(0,a.tZ)("header",{className:"pt-6 xl:pb-6",children:(0,a.BX)("div",{className:"space-y-1 text-center",children:[(0,a.tZ)("dl",{className:"space-y-10",children:(0,a.BX)("div",{children:[(0,a.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,a.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,a.tZ)("time",{dateTime:r,children:new Date(r).toLocaleDateString()})})]})}),(0,a.tZ)("div",{children:(0,a.tZ)(i.Z,{children:t})})]})}),(0,a.BX)("div",{className:"pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6",style:{gridTemplateRows:"auto 1fr"},children:[(0,a.BX)("dl",{className:"pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700",children:[(0,a.tZ)("dt",{className:"sr-only",children:"Authors"}),(0,a.tZ)("dd",{children:(0,a.tZ)("ul",{className:"flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8",children:(0,a.BX)("li",{className:"flex items-center space-x-2",children:[x&&(0,a.tZ)(d.Z,{src:x,width:"38px",height:"38px",alt:"avatar",className:"w-10 h-10 rounded-full"}),(0,a.BX)("dl",{className:"text-sm font-medium leading-5 whitespace-nowrap",children:[(0,a.tZ)("dt",{className:"sr-only",children:"Name"}),(0,a.tZ)("dd",{className:"text-gray-900 dark:text-gray-100",children:s.name}),(0,a.tZ)("dt",{className:"sr-only",children:"Twitter"}),(0,a.tZ)("dd",{children:s.twitter&&(0,a.tZ)(n.Z,{href:s.twitter,className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:s.twitter.replace("https://twitter.com/","@")})})]})]},s.name)})})]}),(0,a.tZ)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2",children:(0,a.tZ)("div",{className:"pt-10 pb-8 prose dark:prose-dark max-w-none",children:p})}),(0,a.BX)("footer",{children:[(0,a.BX)("div",{className:"text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2",children:[o&&(0,a.BX)("div",{className:"py-4 xl:py-8",children:[(0,a.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Tags"}),(0,a.tZ)("div",{className:"flex flex-wrap",children:o.map((function(e){return(0,a.tZ)(c.Z,{text:e},e)}))})]}),(h||u)&&(0,a.BX)("div",{className:"flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",children:[u&&(0,a.BX)("div",{children:[(0,a.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Previous Article"}),(0,a.tZ)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,a.tZ)(n.Z,{href:"/blog/".concat(u.slug),children:u.title})})]}),h&&(0,a.BX)("div",{children:[(0,a.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Next Article"}),(0,a.tZ)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,a.tZ)(n.Z,{href:"/blog/".concat(h.slug),children:h.title})})]})]})]}),(0,a.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,a.tZ)(n.Z,{href:"/post",className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:"\u2190 Back to the post"})})]})]})]})})}},7836:function(e,t,r){"use strict";var a=r(9671);t.Z=function(e){return(0,a.slug)(e)}},7827:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return p},Post:function(){return m}});var a=r(7320),n=r(1720),i=r(6803),l=r.n(i),c=r(8863),d=r.n(c),s=r(6009),o=r(6408);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){u(e,t,r[t])}))}return e}var p=!0,m=function(e){var t=e.post,r=e.author;console.log({post:t,author:r});var i=t.body,c=t.mainImage,u=(0,n.useState)(""),p=u[0],m=u[1];return(0,n.useEffect)((function(){var e=l()({projectId:"dlqkz6u3",dataset:"production"}).image(c);e&&m(e)}),[c]),(0,a.tZ)("div",{children:(0,a.BX)(o.default,h({},t,{children:[p&&(0,a.tZ)(s.Z,{alt:p,src:p}),(0,a.tZ)(d(),{blocks:i})]}))})};t.default=m}},function(e){e.O(0,[346,888,179],(function(){return t=4454,e(e.s=t);var t}));var t=e.O();_N_E=t}]);