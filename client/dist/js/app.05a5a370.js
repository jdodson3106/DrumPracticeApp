(function(t){function e(e){for(var r,o,i=e[0],l=e[1],c=e[2],p=0,u=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);f&&f(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},n=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var f=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"16b4":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("a026"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],o={name:"app"},i=o,l=a("2877"),c=Object(l["a"])(i,s,n,!1,null,null,null),f=c.exports,p=a("8c4f"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark navbar-static-top",attrs:{role:"navigation"}},[t._m(0),t._m(1),a("div",{staticClass:"collapse navbar-collapse",staticStyle:{height:"0.8px"},attrs:{"aria-expanded":"false",id:"navbarContent"}},[a("ul",{staticClass:"nav navbar-nav ml-auto"},[a("li",{staticClass:"dropdown"},[t._m(2),a("ul",{staticClass:"dropdown-menu"},[t.serverInfo?a("li",{staticClass:"dropdown-item"},[a("a",{attrs:{href:"#"}},[t._v("Environment: "+t._s(t.serverInfo.environment))])]):t._e(),t.serverInfo?a("li",{staticClass:"dropdown-item"},[a("a",{attrs:{href:"#"}},[t._v("App profile: "+t._s(t.serverInfo.appprofile))])]):t._e(),a("li",{staticClass:"divider dropdown-item",attrs:{role:"separator"}}),t.serverInfo?a("li",{staticClass:"dropdown-item"},[a("a",{attrs:{href:"#"}},[t._v("Grails version: "+t._s(t.serverInfo.grailsversion))])]):t._e(),t.serverInfo?a("li",{staticClass:"dropdown-item"},[a("a",{attrs:{href:"#"}},[t._v("Groovy version: "+t._s(t.serverInfo.groovyversion))])]):t._e(),t.serverInfo?a("li",{staticClass:"dropdown-item"},[a("a",{attrs:{href:"#"}},[t._v("JVM version: "+t._s(t.serverInfo.jvmversion))])]):t._e(),a("li",{staticClass:"divider dropdown-item",attrs:{role:"separator"}}),t.serverInfo?a("li",{staticClass:"dropdown-item"},[a("a",{attrs:{href:"#"}},[t._v("Reloading active: "+t._s(t.serverInfo.reloadingagentenabled?"true":"false"))])]):t._e()])]),a("li",{staticClass:"dropdown"},[t._m(3),t.serverInfo?a("ul",{staticClass:"dropdown-menu"},[t.serverInfo.artefacts?a("li",[a("a",{attrs:{href:"#"}},[t._v("Controllers: "+t._s(t.serverInfo.artefacts.controllers))])]):t._e(),t.serverInfo.artefacts?a("li",[a("a",{attrs:{href:"#"}},[t._v("Domains: "+t._s(t.serverInfo.artefacts.domains))])]):t._e(),t.serverInfo.artefacts?a("li",[a("a",{attrs:{href:"#"}},[t._v("Services: "+t._s(t.serverInfo.artefacts.services))])]):t._e()]):t._e()]),a("li",{staticClass:"dropdown"},[t._m(4),t.serverInfo?a("ul",{staticClass:"dropdown-menu"},t._l(t.serverInfo.plugins,(function(e){return a("li",{key:e.name},[a("a",{attrs:{href:"#"}},[t._v(t._s(e.name)+" - "+t._s(e.version))])])})),0):t._e()])])])]),t._m(5),a("div",{attrs:{id:"content",role:"main"}},[a("section",{staticClass:"row colset-2-its"},[a("h1",[t._v("Welcome to Grails")]),a("p",[t._v(" Congratulations, you have successfully started your Grails & Vue.js application! While in development mode, changes will be loaded automatically when you edit your Vue.js app, without even refreshing the page. Below is a list of controllers that are currently deployed in this application, click on each to execute its default action: ")]),a("div",{attrs:{id:"controllers",role:"navigation"}},[a("h2",[t._v("Available Controllers:")]),t.serverInfo&&t.serverInfo.controllers?a("ul",t._l(t.serverInfo.controllers,(function(e){return a("li",{key:e.name},[a("a",{attrs:{href:t.serverURL+"/"+e.logicalPropertyName}},[t._v(t._s(e.name))])])})),0):t._e()])])]),t._m(6)])},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"navbar-brand",attrs:{href:"/#"}},[r("img",{attrs:{src:a("f4f4"),alt:"Grails Logo"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarContent","aria-controls":"navbarContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"true"}},[t._v("Application Status "),a("span",{staticClass:"caret"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"true"}},[t._v("Artefacts"),a("span",{staticClass:"caret"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"true"}},[t._v("Installed Plugins "),a("span",{staticClass:"caret"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"svg",attrs:{role:"presentation"}},[r("div",{staticClass:"grails-logo-container"},[r("img",{staticClass:"grails-logo",attrs:{alt:"Grails Logo",src:a("d9a4")}}),r("span",{staticClass:"plus-logo"},[t._v("+")]),r("img",{staticClass:"hero-log",attrs:{alt:"Vue Logo",src:a("cf05")}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer row",attrs:{role:"contentinfo"}},[r("div",{staticClass:"col-md-4"},[r("a",{attrs:{href:"http://guides.grails.org",target:"_blank"}},[r("img",{staticClass:"float-left",attrs:{src:a("f1f4"),alt:"Grails Guides"}})]),r("strong",{staticClass:"centered"},[r("a",{attrs:{href:"http://guides.grails.org",target:"_blank"}},[t._v("Grails Guides")])]),r("p",[t._v("Building your first Grails app? Looking to add security, or create a Single-Page-App? Check out the "),r("a",{attrs:{href:"http://guides.grails.org",target:"_blank"}},[t._v("Grails Guides")]),t._v(" for step-by-step tutorials.")])]),r("div",{staticClass:"col-md-3"},[r("a",{attrs:{href:"http://docs.grails.org",target:"_blank"}},[r("img",{staticClass:"float-left",attrs:{src:a("6ab5"),alt:"Grails Documentation"}})]),r("strong",{staticClass:"centered"},[r("a",{attrs:{href:"http://docs.grails.org",target:"_blank"}},[t._v("Documentation")])]),r("p",[t._v("Ready to dig in? You can find in-depth documentation for all the features of Grails in the "),r("a",{attrs:{href:"http://docs.grails.org",target:"_blank"}},[t._v("User Guide")]),t._v(".")])]),r("div",{staticClass:"col-md-4"},[r("a",{attrs:{href:"https://grails-slack.cfapps.io",target:"_blank"}},[r("img",{staticClass:"float-left",attrs:{src:a("7935"),alt:"Grails Slack"}})]),r("strong",{staticClass:"centered"},[r("a",{attrs:{href:"https://grails-slack.cfapps.io",target:"_blank"}},[t._v("Join the Community")])]),r("p",[t._v("Get feedback and share your experience with other Grails developers in the community "),r("a",{attrs:{href:"https://grails-slack.cfapps.io",target:"_blank"}},[t._v("Slack channel")]),t._v(".")])])])}],v=(a("d3b7"),{name:"Welcome",data:function(){return{msg:"Welcome to Your Grails & Vue.js App",serverInfo:null,showLinks:!1,serverURL:"http://localhost:8080"}},created:function(){var t=this;fetch("".concat(this.serverURL,"/application")).then((function(t){return t.json()})).then((function(e){return t.serverInfo=e}))}}),g=v,h=(a("afdc"),Object(l["a"])(g,u,d,!1,null,"b08eab6c",null)),_=h.exports;r["a"].use(p["a"]);var m=new p["a"]({routes:[{path:"/",name:"Welcome",component:_}]});a("16b4"),a("86c3"),a("5aea");r["a"].config.productionTip=!1,new r["a"]({el:"#app",router:m,components:{App:f},template:"<App/>"})},"5aea":function(t,e,a){},6270:function(t,e,a){},"6ab5":function(t,e,a){t.exports=a.p+"img/documentation.e1490625.svg"},7935:function(t,e,a){t.exports=a.p+"img/slack.07688f36.svg"},"86c3":function(t,e,a){},afdc:function(t,e,a){"use strict";var r=a("6270"),s=a.n(r);s.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d9a4:function(t,e,a){t.exports=a.p+"img/grails-cupsonly-logo-white.b651640f.svg"},f1f4:function(t,e,a){t.exports=a.p+"img/advancedgrails.06b52862.svg"},f4f4:function(t,e,a){t.exports=a.p+"img/grails.cda5b271.svg"}});
//# sourceMappingURL=app.05a5a370.js.map