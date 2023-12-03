(()=>{"use strict";var n,e,t,r,o,a,i,s,c,l,p,d,f,u,h={426:(n,e,t)=>{t.d(e,{Z:()=>v});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(667),c=t.n(s),l=new URL(t(950),t.b),p=new URL(t(941),t.b),d=new URL(t(907),t.b),f=new URL(t(229),t.b),u=i()(o()),h=c()(l),m=c()(p),g=c()(d),b=c()(f);u.push([n.id,`/* poppins-regular - latin */\n@font-face {\n    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Poppins';\n    font-style: normal;\n    font-weight: 400;\n    src: url(${h}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n  }\n  /* poppins-italic - latin */\n  @font-face {\n    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Poppins';\n    font-style: italic;\n    font-weight: 400;\n    src: url(${m}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n  }\n  /* poppins-600 - latin */\n  @font-face {\n    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Poppins';\n    font-style: normal;\n    font-weight: 600;\n    src: url(${g}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n  }\n  /* poppins-900 - latin */\n  @font-face {\n    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Poppins';\n    font-style: normal;\n    font-weight: 900;\n    src: url(${b}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n  }\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Prevent font size inflation */\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n}\n\n/* Remove default margin in favour of better control in authored CSS */\nbody, h1, h2, h3, h4, p,\nfigure, blockquote, dl, dd {\n  margin-block-end: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set shorter line heights on headings and interactive elements */\nh1, h2, h3, h4,\nbutton, input, label {\n  line-height: 1.1;\n}\n\n/* Balance text wrapping on headings */\nh1, h2,\nh3, h4 {\n  text-wrap: balance;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n  color: currentColor;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput, button,\ntextarea, select {\n  font: inherit;\n}\n\n/* Make sure text-areas without a rows attribute are not tiny */\ntextarea:not([rows]) {\n  min-height: 10em;\n}\n\n/* Anything that has been anchored to should have extra scroll margin */\n:target {\n  scroll-margin-block: 5ex;\n}\n\n/* Root Element variables */\n\n:root {\n    --background-color: #FBF2F3;\n    --background-color-lite: #F4FBFB;\n    --surface-color:#F6DEE0;\n    --main-color: #CA4653;\n    --secondary-color: #E18992;\n    --accent-color: #DC6773;\n  }\n\n/* Set core body defaults */\nbody {\n    min-height: 100vh;\n    line-height: 1.5;\n    background-color: var(--background-color);\n    margin: 0;\n    padding: 0;\n    width: 100vW;\n    height: 100vh;\n    font-family: 'Poppins','Courier New', Courier, monospace;\n    display: grid;\n    grid-template-columns: 20vw auto;\n    grid-template-rows: 10vh auto;\n}\n\n.icon {\n    width: 40px;\n    padding: 5px;\n    border-radius: 5px;\n}\n\n.primary-filter {\n  filter: brightness(0) saturate(100%) invert(39%) sepia(12%) saturate(4842%) hue-rotate(312deg) brightness(90%) contrast(92%);\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  flex-direction: row;\n  gap: 25px;\n  margin-top: 25px;\n  margin-left: 20px;\n  grid-area: 1 / 1 / 2 / 3;\n}\n\n.header > .title {\n  font-size: 50px;\n  font-weight: 900;\n  color: var(--main-color);\n}\n\n.header > .icon {\n  width: 50px;\n}\n\n.header > .icon:hover{\n  scale: 1.1;\n  cursor: pointer;\n}\n\n\n/* Sidebar */\n\n/* sidebar Top */\n\n.sidebar {\n  grid-area: 2 / 1 / 3 / 2;\n}\n\n.sidebar-top {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 25px;\n  align-items: stretch;\n  justify-content: center;\n}\n\n.sidebar-top-item {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n  border-radius: 5px;\n}\n\n.sidebar-top-item:hover {\n  background-color: var(--surface-color);\n  color: var(--main-color);\n  cursor: pointer;\n}\n\n.sidebar-top-item > .sidebar-title {\n  font-size: 1.5rem;\n  margin-left: 20px;\n  flex: 1;\n}\n\n/* sidebar bot */\n.sidebar-bot {\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.sidebar-bot-header {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 25px;\n  padding: 5px;\n  align-items: center;\n  justify-content: center;\n}\n\n.sidebar-bot-header > .title {\n  font-size: 2rem;\n  flex: 1;\n}\n\n.hoverable:hover {\n  background-color: var(--secondary-color);\n  cursor: pointer;\n}\n\n.sidebar-content {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.sidebar-content-item {\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  align-items: center;\n  border-radius: 10px;\n}\n\n.sidebar-content-item:hover {\n  background-color: var(--surface-color);\n  cursor: pointer;\n}\n\n.sidebar-content-item > .title {\n  flex: 1;\n  font-size: 1.5rem;\n}\n\n/* Main Content */\n\n.main-content {\n  background-color: var(--background-color-lite);\n  padding: 20px 50px;\n  border-radius: 25px;\n}\n\n#main-content-header {\n  font-size: 2rem;\n  color: var(--main-color);\n}\n\n.divider {\n  border-top: 2px solid var(--accent-color);\n  margin: 10px 20px;\n}`,""]);const v=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],p=a[l]||0,d="".concat(l," ").concat(p);a[l]=p+1;var f=t(d),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var h=o(u,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var p=t(a[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},907:(n,e,t)=>{n.exports=t.p+"91145014c0350c248ed2.woff2"},229:(n,e,t)=>{n.exports=t.p+"7b1a4c85ba657964c6b6.woff2"},941:(n,e,t)=>{n.exports=t.p+"ed357fa1fa06a3e00d46.woff2"},950:(n,e,t)=>{n.exports=t.p+"405055dd680fa1dcdfa2.woff2"}},m={};function g(n){var e=m[n];if(void 0!==e)return e.exports;var t=m[n]={id:n,exports:{}};return h[n](t,t.exports,g),t.exports}g.m=h,g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;g.g.importScripts&&(n=g.g.location+"");var e=g.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=n})(),g.b=document.baseURI||self.location.href,g.nc=void 0,n=g(379),e=g.n(n),t=g(795),r=g.n(t),o=g(569),a=g.n(o),i=g(565),s=g.n(i),c=g(216),l=g.n(c),p=g(589),d=g.n(p),f=g(426),(u={}).styleTagTransform=d(),u.setAttributes=s(),u.insert=a().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=l(),e()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals})();