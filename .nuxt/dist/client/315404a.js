(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{165:function(t,e,n){"use strict";e.a={endpoint:"https://jsonplaceholder.typicode.com"}},192:function(t,e,n){"use strict";n.r(e);var o,r=n(4),c=(n(34),n(166)),l=n.n(c),d=n(165),v={name:"PostCard",props:{post:Object}},_=n(32),m={name:"IndexPage",components:{PostCard:Object(_.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box column is-full py-4"},[n("h1",{staticClass:"title"},[t._v(t._s(t.post.title))]),t._v(" "),n("p",[t._v(t._s(t.post.body))]),t._v(" "),n("br"),t._v(" "),n("nuxt-link",{staticClass:"button is-primary",attrs:{to:"/posts/"+t.post.id}},[t._v("Read more...")])],1)}),[],!1,null,null,null).exports},data:function(){return{posts:[]}},created:(o=Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("".concat(d.a.endpoint,"/posts"));case 2:e=t.sent,this.posts=e.data;case 4:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},f=Object(_.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-5"},[n("title",[t._v("Nuxt Post Website")]),t._v(" "),n("h1",{staticClass:"title"},[t._v("Nuxt Post Website")]),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v("Recent Posts")]),t._v(" "),n("h3",{staticClass:"link"}),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"columns is-multiline"},t._l(t.posts,(function(t){return n("PostCard",{key:t.id,attrs:{post:t}})})),1)])}),[],!1,null,"06cb0163",null);e.default=f.exports}}]);