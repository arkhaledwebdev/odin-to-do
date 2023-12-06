(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>x});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),s=t(667),c=t.n(s),d=new URL(t(950),t.b),l=new URL(t(941),t.b),p=new URL(t(907),t.b),f=new URL(t(229),t.b),u=i()(r()),m=c()(d),g=c()(l),h=c()(p),b=c()(f);u.push([n.id,`/* poppins-regular - latin */\n@font-face {\n    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Poppins';\n    font-style: normal;\n    font-weight: 400;\n    src: url(${m}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n  }\n  /* poppins-italic - latin */\n  @font-face {\n    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Poppins';\n    font-style: italic;\n    font-weight: 400;\n    src: url(${g}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n  }\n  /* poppins-600 - latin */\n  @font-face {\n    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Poppins';\n    font-style: normal;\n    font-weight: 600;\n    src: url(${h}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n  }\n  /* poppins-900 - latin */\n  @font-face {\n    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Poppins';\n    font-style: normal;\n    font-weight: 900;\n    src: url(${b}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n  }\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Prevent font size inflation */\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n}\n\n/* Remove default margin in favour of better control in authored CSS */\nbody, h1, h2, h3, h4, p,\nfigure, blockquote, dl, dd {\n  margin-block-end: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set shorter line heights on headings and interactive elements */\nh1, h2, h3, h4,\nbutton, input, label {\n  line-height: 1.1;\n}\n\n/* Balance text wrapping on headings */\nh1, h2,\nh3, h4 {\n  text-wrap: balance;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n  color: currentColor;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput, button,\ntextarea, select {\n  font: inherit;\n}\n\n/* Make sure text-areas without a rows attribute are not tiny */\ntextarea:not([rows]) {\n  min-height: 10em;\n}\n\n/* Anything that has been anchored to should have extra scroll margin */\n:target {\n  scroll-margin-block: 5ex;\n}\n\n/* Root Element variables */\n\n:root {\n    --background-color: #FBF2F3;\n    --background-color-lite: #F4FBFB;\n    --surface-color:#F6DEE0;\n    --main-color: #CA4653;\n    --secondary-color: #E18992;\n    --accent-color: #DC6773;\n  }\n\n/* Set core body defaults */\nbody {\n    min-height: 100vh;\n    line-height: 1.5;\n    background-color: var(--background-color);\n    margin: 0;\n    padding: 0;\n    width: 100vW;\n    height: 100vh;\n    font-family: 'Poppins','Courier New', Courier, monospace;\n    display: grid;\n    grid-template-columns: 20vw auto;\n    grid-template-rows: 10vh auto;\n}\n\n.icon {\n    width: 40px;\n    padding: 5px;\n    border-radius: 5px;\n}\n\n.primary-filter {\n  filter: brightness(0) saturate(100%) invert(39%) sepia(12%) saturate(4842%) hue-rotate(312deg) brightness(90%) contrast(92%);\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  flex-direction: row;\n  gap: 25px;\n  margin-top: 25px;\n  margin-left: 20px;\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n.header > .title {\n  font-size: 40px;\n  font-weight: 900;\n  color: var(--main-color);\n}\n\n.header > .icon {\n  width: 50px;\n}\n\n.header > .icon:hover{\n  scale: 1.1;\n  cursor: pointer;\n}\n\n\n/* Sidebar */\n\n/* sidebar Top */\n\n.sidebar {\n  grid-area: 2 / 1 / 3 / 2;\n}\n\n.sidebar-top {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 25px;\n  align-items: stretch;\n  justify-content: center;\n}\n\n.sidebar-top-item {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n  border-radius: 5px;\n}\n\n.sidebar-top-item:hover {\n  background-color: var(--surface-color);\n  color: var(--main-color);\n  cursor: pointer;\n}\n\n.sidebar-top-item > .sidebar-title {\n  font-size: 1.5rem;\n  margin-left: 20px;\n  flex: 1;\n}\n\n.selected {\n  background-color: var(--surface-color);\n  color: var(--main-color);\n  font-weight: 600;\n}\n\n/* sidebar bot */\n.sidebar-bot {\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.sidebar-bot-header {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 25px;\n  padding: 5px;\n  align-items: center;\n  justify-content: center;\n}\n\n.sidebar-bot-header > .title {\n  font-size: 2rem;\n  flex: 1;\n}\n\n.hoverable:hover {\n  background-color: var(--secondary-color);\n  cursor: pointer;\n}\n\n.sidebar-content {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.sidebar-content-item {\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  align-items: center;\n  border-radius: 10px;\n}\n\n.sidebar-content-item:hover {\n  background-color: var(--surface-color);\n  cursor: pointer;\n}\n\n.sidebar-content-item > .title {\n  flex: 1;\n  font-size: 1.5rem;\n}\n\n/* Main Content */\n\n.main-content {\n  background-color: var(--background-color-lite);\n  padding: 20px 50px;\n  border-radius: 50px 0px 0px 50px;\n  grid-area: 1 / 2 / 3 / 3;\n}\n\n#main-content-header {\n  font-size: 2rem;\n  color: var(--main-color);\n  font-weight: 600;\n}\n\n.divider {\n  border-top: 2px solid var(--accent-color);\n  margin: 10px 20px;\n}\n\n/* Add task dialog */\n\n#add-task-dialog {\n  background-color: var(--surface-color);\n  border-radius: 6px;\n  padding: 30px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n}\n\n#add-task-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n}\n\n.form-item {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.form-label {\n  width: 100px;\n}\n\n.form-input {\n  width: 350px;\n  flex: 1;\n}\n\n#form-task-description {\n  min-height: 300px;\n}\n\n#priority-radio-group {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n}`,""]);const x=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},91:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),e.hash&&(n+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(n)?'"'.concat(n,'"'):n):n}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var f=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var m=r(u,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},529:(n,e,t)=>{n.exports=t.p+"8ebd00c8afb122dd1de0.js"},344:(n,e,t)=>{n.exports=t.p+"57011448dc08b9372b5e.css"},907:(n,e,t)=>{n.exports=t.p+"91145014c0350c248ed2.woff2"},229:(n,e,t)=>{n.exports=t.p+"7b1a4c85ba657964c6b6.woff2"},941:(n,e,t)=>{n.exports=t.p+"ed357fa1fa06a3e00d46.woff2"},950:(n,e,t)=>{n.exports=t.p+"405055dd680fa1dcdfa2.woff2"},778:(n,e,t)=>{n.exports=t.p+"3cffe9a515498593b872.svg"},324:(n,e,t)=>{n.exports=t.p+"de0bb67a90c508546224.svg"},40:(n,e,t)=>{n.exports=t.p+"da1d4548b671a011dfa4.svg"},284:(n,e,t)=>{n.exports=t.p+"c11ca64583db9195885d.svg"},729:(n,e,t)=>{n.exports=t.p+"615cad230d498ed17879.svg"},301:(n,e,t)=>{n.exports=t.p+"939f2a757e3335be71bb.svg"},342:(n,e,t)=>{n.exports=t.p+"c227bb44af17f938494d.svg"},96:(n,e,t)=>{n.exports=t.p+"3faae0cf01e4ecd160ef.svg"},329:(n,e,t)=>{n.exports=t.p+"18f552623324e58156e6.svg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),f=t.n(p),u=t(426),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;var g=t(91),h=t.n(g),b=new URL(t(344),t.b),x=new URL(t(529),t.b),v=new URL(t(342),t.b),y=new URL(t(778),t.b),w=new URL(t(301),t.b),S=new URL(t(96),t.b),k=new URL(t(329),t.b),C=new URL(t(40),t.b),L=new URL(t(729),t.b),E=new URL(t(324),t.b),U=new URL(t(284),t.b);h()(b),h()(x),h()(v),h()(y),h()(w),h()(S),h()(k),h()(C),h()(L),h()(E),h()(U);var R=t(301);const I=t.p+"3adc5f8a1a6417eaeee6.svg",B=t.p+"233385e32206cd372d69.svg";var j=t(96);const z=t.p+"1514cb89e66edd886067.svg";var F=t(329);const M=document.getElementById("inbox-container"),T=document.getElementById("img-inbox"),O=document.getElementById("today-container"),P=document.getElementById("img-today"),A=document.getElementById("upcoming-container"),$=document.getElementById("img-upcoming"),N=document.getElementById("add-task-button"),_=document.getElementById("add-task-dialog");function W(){M.classList.remove("selected"),T.src=I,O.classList.remove("selected"),P.src=j,A.classList.remove("selected"),$.src=F}N.addEventListener("click",(()=>{_.showModal()})),M.addEventListener("click",(()=>{W(),M.classList.add("selected"),T.src=R,document.getElementById("main-content-header").textContent="Inbox"})),O.addEventListener("click",(()=>{W(),O.classList.add("selected"),P.src=B,document.getElementById("main-content-header").textContent="Today"})),A.addEventListener("click",(()=>{W(),A.classList.add("selected"),$.src=z,document.getElementById("main-content-header").textContent="Upcoming"}))})()})();