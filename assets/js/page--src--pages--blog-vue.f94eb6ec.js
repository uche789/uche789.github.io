(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"7LCm":function(t,e,n){},"8tYL":function(t,e,n){"use strict";n.r(e);n("2B1R"),n("DQNa");var a={metaInfo:{title:"Blog"},components:{BlogPost:n("nWOk").a},computed:{posts:function(){return this.$page.allPost.edges.map((function(t){return t.node.date=new Date(t.node.date),t.node}))}}},s=n("KHd+"),o=null,i=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",this._l(this.posts,(function(t){return e("BlogPost",{key:t.id,attrs:{post:t}})})),1)}),[],!1,null,null,null);"function"==typeof o&&o(i);e.default=i.exports},D2Hy:function(t,e,n){"use strict";var a=n("7LCm");n.n(a).a},DQNa:function(t,e,n){var a=n("busE"),s=Date.prototype,o=s.toString,i=s.getTime;new Date(NaN)+""!="Invalid Date"&&a(s,"toString",(function(){var t=i.call(this);return t==t?o.call(this):"Invalid Date"}))},OFVW:function(t,e,n){"use strict";n("2B1R"),n("rB9j"),n("EnZy");var a={props:{tags:{type:String,default:""}},computed:{tagList:function(){return(this.tags.split(" ")||[]).map((function(t){return{name:t,class:"tag-bg".concat(Math.ceil(6*Math.random()))}}))}}},s=(n("D2Hy"),n("KHd+")),o=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tags"},t._l(t.tagList,(function(e,a){return n("div",{key:a,staticClass:"tag",class:e.class},[t._v("\n    "+t._s(e.name)+"\n  ")])})),0)}),[],!1,null,null,null);e.a=o.exports},nWOk:function(t,e,n){"use strict";var a={components:{Tags:n("OFVW").a},props:{post:Object},computed:{excerpt:function(){return this.post.excerpt+"..."}}},s=n("KHd+"),o=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:t.post.path}},[n("h3",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.post.title)}})]),n("small",[t._v(t._s(t.post.date.toDateString())+" • "+t._s(t.post.timeToRead)+" min read")]),n("Tags",{attrs:{tags:t.post.tags}}),n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.excerpt)}})],1)}),[],!1,null,null,null);e.a=o.exports}}]);