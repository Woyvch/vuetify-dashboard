(function(t){function e(e){for(var a,r,u=e[0],i=e[1],l=e[2],c=0,f=[];c<u.length;c++)r=u[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);h&&h(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ccc7de9b","chunk-1a0bfb2e":"3c57cf58","chunk-13597f52":"f9d1d457","chunk-4ab26fb4":"5af948a6","chunk-2af9301d":"4eaa524e","chunk-a7e9a7fc":"32ebd143"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-1a0bfb2e":1,"chunk-4ab26fb4":1,"chunk-2af9301d":1,"chunk-a7e9a7fc":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-1a0bfb2e":"40eb0b4c","chunk-13597f52":"31d6cfe0","chunk-4ab26fb4":"20e995dc","chunk-2af9301d":"126d9359","chunk-a7e9a7fc":"f0d84dca"}[t]+".css",o=i.p+a,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var l=s[u],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===a||c===o))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],c=l.getAttribute("data-href");if(c===a||c===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],h.parentNode.removeChild(h),n(s)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(t);var f=new Error;l=function(e){c.onerror=c.onload=null,clearTimeout(h);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vuetify-dashboard/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var h=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-toolbar-title",[t._v("Vuetify Dashboard")]),n("v-spacer"),t._l(t.links,(function(e){return n("v-btn",{key:e.label+"-header-link",attrs:{text:"",rounded:"",to:e.url}},[t._v(" "+t._s(e.label)+" ")])})),n("v-btn",{attrs:{text:"",rounded:""},on:{click:t.toggleTheme}},[t._v("Toggle Theme")])],2),n("v-main",[n("router-view")],1),n("v-footer",{attrs:{color:"primary lighten-1",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.links,(function(e){return n("v-btn",{key:e.label+"-footer-link",staticClass:"my-2",attrs:{color:"white",text:"",rounded:"",to:e.url}},[t._v(" "+t._s(e.label)+" ")])})),n("v-col",{staticClass:"primary lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Vuetify")])])],2)],1)],1)},o=[],s=(n("18a5"),{name:"App",components:{},data:function(){return{links:[{label:"Home",url:"/"},{label:"Login",url:"/login"},{label:"Dashboard",url:"/dashboard"},{label:"Signup",url:"/signup"}]}},methods:{toggleTheme:function(){this.$vuetify.theme.themes.dark.anchor="#41B883",this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}}),u=s,i=n("2877"),l=n("6544"),c=n.n(l),f=n("7496"),h=n("40dc"),d=n("8336"),p=n("62ad"),m=n("553a"),b=n("f6c4"),v=n("0fd9"),y=n("2fa4"),g=n("2a7f"),k=Object(i["a"])(u,r,o,!1,null,null,null),_=k.exports;c()(k,{VApp:f["a"],VAppBar:h["a"],VBtn:d["a"],VCol:p["a"],VFooter:m["a"],VMain:b["a"],VRow:v["a"],VSpacer:y["a"],VToolbarTitle:g["a"]});n("d3b7"),n("3ca3"),n("ddb0");var w=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},j=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Welcome to Vuetify")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),a("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),a("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),a("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},V=[],E={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},O=E,T=n("a523"),S=n("adda"),A=Object(i["a"])(O,C,V,!1,null,null,null),P=A.exports;c()(A,{VCol:p["a"],VContainer:T["a"],VImg:S["a"],VRow:v["a"]});var L={name:"Home",components:{HelloWorld:P}},D=L,B=Object(i["a"])(D,x,j,!1,null,null,null),H=B.exports;a["a"].use(w["a"]);var N=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("chunk-1a0bfb2e"),n.e("chunk-13597f52")]).then(n.bind(null,"a55b"))}},{path:"/dashboard",name:"Dashboard",component:function(){return Promise.all([n.e("chunk-1a0bfb2e"),n.e("chunk-4ab26fb4"),n.e("chunk-a7e9a7fc")]).then(n.bind(null,"7277"))}},{path:"/signup",name:"Signup",component:function(){return Promise.all([n.e("chunk-1a0bfb2e"),n.e("chunk-4ab26fb4"),n.e("chunk-2af9301d")]).then(n.bind(null,"34c3"))}}],$=new w["a"]({mode:"history",routes:N}),M=$,W=n("2f62");a["a"].use(W["a"]);var q=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}}),F=n("f309");a["a"].use(F["a"]);var I=new F["a"]({theme:{themes:{light:{primary:"#41B883"},dark:{primary:"#34495E"}}}});a["a"].config.productionTip=!1,new a["a"]({router:M,store:q,vuetify:I,render:function(t){return t(_)}}).$mount("#app")},"9b19":function(t,e,n){t.exports=n.p+"img/logo.3cb859f2.svg"}});
//# sourceMappingURL=app.d32ac6ee.js.map