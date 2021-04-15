!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0);function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(t){return function(t){return Promise.all(t.reduce((function(t,e){return e.complete?t:(t.push(new Promise((function(t){e.onload=t}))),t)}),[]))}("IMG"===t.subject.tagName?[t.subject]:i(t.subject.querySelectorAll("img")))}function o(){return"loaded"===document.fonts.status?Promise.resolve(!0):document.fonts.ready}var a={callback:function(t,e,n,i){t()&&(e(),i.disconnect())},observe:function(t){var e=this,n=t.what,i=t.until,r={attributes:!0,childList:!0,subtree:!0,until:i};return new Promise((function(t,o){i()?t():(e.observer=new MutationObserver(e.callback.bind(e,i,t)),e.observer.observe(n,r))}))}},c=function(t){return t.dataset.viscosity},s=function(t,e){t.dataset.viscosity=e},u=function(t){return parseFloat(t)},l=function(t,e,n){return(1-n)*t+n*e},f=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce((function(t,e){return"auto"===e&&(e=0),t+parseFloat(e)}),0)},d=function(t,e){return window.getComputedStyle(t)[e]},p=["position","top","left","width","height","maxWidth","maxHeight","display","transform","marginTop","marginBottom","marginLeft","marginRight","paddingTop","margin","padding","borderWidth","float"],h=function(t,e){var n=t.getBoundingClientRect();return p.filter((function(t){return"display"!==t})).forEach((function(n){return e[n]=d(t,n)})),e.transform=d(t,"transform").split(/[(,)]+/).filter(Boolean).map(u),e.topPos=n.top+window.pageYOffset-parseFloat(d(t,"marginTop"))-parseFloat(d(t,"paddingTop")),e.leftPos=n.left,e.widthRect=n.width,e.heightRect=n.height,e.bodyMargin=parseFloat(d(document.body,"marginLeft")),t.dataset.viscosity="is-read",e};var m=function(t){return d(t,"display").includes("inline")},g=function(t){return"IMG"===t.tagName},y=function(t){var e=t.firstElementChild;return m(t)||e&&m(e)&&!g(e)},b={_update:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1*window.pageYOffset;t.isRunning&&(requestAnimationFrame((function(){return e._update(t,n)})),n=l(n,-1*window.pageYOffset,t.easing),this._isRelevant(t,n)?(this._setStyle(t,n),t.inView=!0):t.inView&&(this._setStyle(t,100*window.innerHeight),t.inView=!1))},_setStyle:function(t,e){var n=t.originalPlacement.transform||[];n.length>1?t.subject.style.transform="matrix(".concat(n[1],", ").concat(n[2],", ").concat(n[3],", ").concat(n[4],", 0, ").concat(n[6]+e,")"):t.subject.style.transform="translate3d(0, ".concat(e,"px, 0)")},start:function(t){t.isRunning=t.inView=!0,this._update(t)},stop:function(t){t.isRunning=!1,function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];n.forEach((function(e){return t.style.removeProperty(e)})),t.getAttribute("style")||t.removeAttribute("style")}(t.subject,"transform")},isRunning:function(t){return t.isRunning},_isRelevant:function(t,e){var n=.5*t.originalPlacement.heightRect,i=e+t.originalPlacement.heightRect>=-1*t.originalPlacement.topPos-n,r=e<=-1*(t.originalPlacement.topPos-window.innerHeight)+n;return i&&r}};var v={id:0,copycats:[],subscriptions:[],get proxy(){var t=this;return new Proxy(this.copycats,{set:function(e,n,i){return e[n]=i,t.id=e.length,"number"!=typeof i||e.length||t.subscriptions.forEach((function(t){setTimeout(t.cb,100)})),!0}})},create:function(t){var e;t.copycat=document.createElement("div"),this._addRef(t.copycat),t.copycat.innerHTML=String.fromCharCode(160),t.copycat.classList.add("copycat"),t.copycat.dataset.id=t.id=this._getId(t),(e=t.copycat,function(t){t.parentNode.insertBefore(e,t.nextSibling)})(t.subject),this.applyStyles(t)},getId:function(t){return t.id},remove:function(t){t.copycat.remove(),this._removeRef(t.copycat)},subscribe:function(t,e){this.subscriptions.push({viscosity:t,cb:e})},unsubscribe:function(t){var e=this.subscriptions.map((function(t){return t.viscosity})).indexOf(t);this.subscriptions.splice(e,1)},applyStyles:function(t){var e=t.originalPlacement,n=e.position,i=e.display,r=e.leftPos,o=e.topPos,a=e.bodyMargin,c=e.padding,s=e.borderWidth,u=e.widthRect,l=e.heightRect,f=e.float;Object.assign(t.copycat.style,{width:u+"px",height:l+"px",position:this._ifNot("static")(n),display:!g(t.subject)&&this._ifNot("list-item","block")(i)&&"inline"===i&&"inline-block",left:this._ifNot("static","relative")(n)&&("absolute"===n?r-a+"px":r+"px"),top:this._ifNot("static","relative")(n)&&this._accounted(t,o)+"px",margin:this._getMargins(t),padding:"0px"!==c&&"0px"!==s&&parseFloat(c)+parseFloat(s)+"px",float:this._ifNot("none")(f)})},_getMargins:function(t){return"".concat(this._getMargin(t,"Top")," ").concat(this._getMargin(t,"Right")," ").concat(this._getMargin(t,"Bottom")," ").concat(this._getMargin(t,"Left"))},_getMargin:function(t,e){return y(t.subject)?parseFloat(t.originalPlacement["margin".concat(e)]):Math.max(parseFloat(t.originalPlacement["margin".concat(e)]),parseFloat(this._getChildMargin(t.subject,e)))+"px"},_getChildMargin:function(t,e){var n="Top"===e?"firstElementChild":"Bottom"===e?"lastElementChild":null;return n&&t[n]&&t[n][n]?this._getChildMargin(t[n],e):n&&t[n]?parseFloat(d(t[n],"margin".concat(e))):parseFloat(d(t,"margin".concat(e)))},_getId:function(t){return this.copycats.find((function(e){return e.element===t.copycat})).id},_removeRef:function(t){var e=this.copycats.map((function(t){return t.element})).indexOf(t);this.proxy.splice(e,1)},_addRef:function(t){this.proxy.push({element:t,id:this.id})},_accounted:function(t,e){return y(t.subject)?e+t.originalPlacement.bodyMargin:"absolute"===t.originalPlacement.position?parseFloat(t.originalPlacement.top):e+t.originalPlacement.bodyMargin},_ifNot:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.includes(t)?null:t}}},w=function(t){var e=t.originalPlacement,n=e.topPos,i=e.paddingTop,r=e.marginLeft,o=e.leftPos,a=(e.margin,e.widthRect),c=e.heightRect;Object.assign(t.subject.style,{position:"fixed",width:a+"px",height:c+"px",top:f(n,i)+"px",left:o-parseFloat(r)+"px"}),t.subject.firstElementChild&&setTimeout((function(){return t.subject.firstElementChild.style.marginTop=0}))},j=function(t){var e=t.originalPlacement.inlineStyle;setTimeout((function(){e?t.subject.style.cssText=e:t.subject.removeAttribute("style")})),t.subject.firstElementChild&&t.subject.firstElementChild.style.removeProperty("margin-top")};function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function x(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var S=function(){function t(e){var n,i,u,l,f,d=this,p=e.element,h=e.easing,m=e.wacky;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.subject=p,this.easing=m?(n=.1,i=.25,Math.random()*(i-n)+n):h||.3,this.subject)&&(a.observe({what:this.subject.parentElement,until:function(){return"is-bound"===c(d.subject)}}).then((u=this,r(u).then(o)).then(this.init.bind(this))),s(this.subject,"is-bound"),l=this.restart.bind(this),f=null,window.addEventListener("resize",(function(t){clearTimeout(f),f=setTimeout((function(){l()}),250)})))}var e,n,i;return e=t,(n=[{key:"init",value:function(){var t,e=this;(t=this.subject,new Promise((function(e,n){a.observe({what:t,until:function(){return"is-seen"===c(t)}}).then((function(){if(i)a.observe({what:t,until:function(){return"inline-block"===t.style.display}}).then((function(){a.observe({what:t,until:function(){return"is-read"===c(t)}}).then((function(){a.observe({what:t,until:function(){return t.style.cssText===r.inline}}).then((function(){e(n)})),t.style.cssText=r.inline}));var n=h(t,r)})),t.style.display="inline-block";else{a.observe({what:t,until:function(){return"is-read"===c(t)}}).then((function(){e(n)}));var n=h(t,r)}}));var i=m(t),r={};r.inlineStyle=t.style.cssText,r.display=d(t,"display"),s(t,"is-seen")}))).then((function(t){e.originalPlacement=t,function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return!(n===document.body&&i<2)&&(i>1||(n.dataset[e]?t(e,n.parentElement,i+1):t(e,n.parentElement,i)))}("viscosity",e.subject)?s(e.subject,"is-child"):(w(e),v.create(e),b.start(e),s(e.subject,"is-running"))}))}},{key:"destroy",value:function(){j(this),v.remove(this),b.stop(this),s(this.subject,"is-destroyed")}},{key:"restart",value:function(){var t=this;b.isRunning(this)&&(v.subscribe(this,(function(){a.observe({what:t.subject.parentElement,until:function(){return!t.subject.parentElement.querySelector("[data-id='".concat(v.getId(t),"']"))}}).then((function(){v.unsubscribe(t),t.init()}))})),this.destroy())}},{key:"toggle",value:function(){b.isRunning(this)?this.destroy():this.init()}}])&&x(e.prototype,n),i&&x(e,i),t}();var M=n.p+"b4b08e08290995846b760fc3ab49e922.png";function A(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}!function(t,e){if(t){var n=new DocumentFragment;Array(e).fill("").map((function(){return function(t){var e=document.createElement("img"),n=Math.floor(20*Math.random()+25);e.src=M,Object.assign(e.style,{top:Math.random()*(window.innerHeight/(window.innerHeight/100))+"%",left:Math.random()*(window.innerWidth/(window.innerWidth/100))*.9+5+"%",width:n,height:n,transform:"translateX(-50%) ".concat(Math.random()>.5?"scaleX(-1)":"")}),e.classList.add("viscosity"),e.dataset.amount=(1.5*Math.random()+.5)/10,t.appendChild(e)}(n)})),t.appendChild(n)}}(document.querySelector(".swarm"),50),setTimeout((function(){var t=A(document.body.querySelectorAll(".viscosity")).map((function(t){return"string"==typeof(e={element:t,easing:t.dataset.amount,wacky:t.dataset.wacky})?P(document.querySelectorAll(e)).map((function(t){return new S({element:t})})):e.tagName?new S({element:e}):"object"===_(e)?new S(e):void 0;var e}));document.body.addEventListener("click",(function(){document.body.querySelector(".full")&&document.body.querySelector(".full").classList.toggle("hidden")})),function(t){var e=document.querySelector(".toggle-effect");e&&e.addEventListener("change",(function(){return t.forEach((function(t){return t.toggle()}))}))}(t)}),100)}]);