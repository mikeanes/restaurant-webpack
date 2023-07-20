(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(610),t.b),l=i()(o());l.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Ysabeau+Office);"]);var u=d()(s);l.push([e.id,`html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent}\nbody{line-height:1}\narticle,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}\nnav ul{list-style:none}\nblockquote,q{quotes:none}\nblockquote:before,blockquote:after,q:before,q:after{content:none}\na{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent}\nins{background-color:#ff9;color:#000;text-decoration:none}\nmark{background-color:#ff9;color:#000;font-style:italic;font-weight:bold}\ndel{text-decoration:line-through}\nabbr[title],dfn[title]{border-bottom:1px dotted;cursor:help}\ntable{border-collapse:collapse;border-spacing:0}\nhr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}\ninput,select{vertical-align:middle}\n\nbody{\n    font-family: 'Ysabeau Office', serif;\n    background: url(${u});\n    background-attachment: fixed;\n    background-size: cover;\n    background-position: center;\n}\n.container{\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 70px 1fr;\n}\n\n.mainContent{\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n.currentContentHome{\n    color: wheat;\n    display: grid;\n    place-items: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 50px 2fr;\n    height: 70%;\n    gap: 10px;\n}\n.currentContentHome>button{\n    align-self: start;\n    border: none;\n    margin: 0;\n    padding: 0;\n    padding-bottom: 2px;\n    border-radius: 25px;\n    height: 50px;\n    width: 150px;\n    background: #5c746c;\n    color: #e1d5ce;\n    font: inherit;\n    font-size: 1.5rem;\n    cursor: pointer;\n    transition: transform 0.25s ease;\n}\n.currentContentHome>button:hover{\n    background: #394944;\n}\n.currentContentHome>button:active{\n    transform: scale(0.9);\n}\nh1{\n    color: wheat;\n    font-size: 3rem;\n    padding-left: 4vw;\n    padding-right: 4vw;\n    text-align: center;\n}\n.menu, .contact{\n    justify-items: center;\n    align-items: start;\n}\n.currentContentMenu, .currentContentContact{\n    padding-top: 50px;\n    padding-bottom: 50px;\n    width: 80%;\n    display: grid;\n    gap: 1.7rem;\n    grid-template-rows: 50px 1fr;\n}\n.menuItemContainer{\n    display: grid;\n    gap: 1.7rem;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    grid-template-rows: 250px;\n    grid-auto-rows: 250px;\n}\n.menuItem{\n    background-color: #00000072;\n    border-radius: 10px;\n    color: wheat;\n    padding: 1.5rem;\n    display: grid;\n    grid-template-rows: 1fr 4fr;\n}\n.menuItem>h2{\n    font-size: 1.5rem;\n    text-align: center;\n}\n.menuItem>p{\n    font-size: 1.3rem;\n}\n\n.currentContentContact{\n    place-items: center;\n}\n.map{\n    width: 80%;\n    height: 400px;\n    border-radius: 10px;\n}\n.navbar{\n    color: #e1d5ce;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    padding-left: 15vw;\n    padding-right: 15vw;\n    background-color: #5c746c;\n    align-items: center;\n}\n\n.title{\n    text-align: left;\n    padding: 0;\n    font-size: 3rem;\n}\n\n.navButtonContainer{\n    display: grid;\n    grid-template-columns: repeat(3, 100px);\n    justify-content: right;\n}\n\n.navButtonContainer>button{\n    display: grid;\n    justify-content: left;\n    border: none;\n    margin: 0;\n    padding: 0;\n    background: none;\n    color: #e1d5ce;\n    font: inherit;\n    font-size: 1.2rem;\n    cursor: pointer;\n}\n.navButtonContainer>button.clicked{\n    color: rgb(243, 180, 63);\n}\n\n.infoBubble{\n    font-size: 1.4rem;\n    border-radius: 10px;\n    height: 70%;\n    width: 80%;\n    background: #00000072;\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    place-items: center;\n}\n.infoBubble>div{\n    display: grid;\n    place-items: center;\n    grid-template-columns: 50px 1fr;\n}\n\n@media(max-width: 750px){\n    .container{\n        grid-template-rows: 150px 1fr;\n    }\n    .navbar{\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr 1fr;\n        justify-items: center;\n    }\n}`,""]);const p=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},610:(e,n,t)=>{e.exports=t.p+"f65857e69dab7659371c.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),u=t(589),p=t.n(u),m=t(28),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;function h(){const e=document.querySelector(".mainContent");e.classList.remove("menu"),e.classList.remove("contact"),e.innerHTML=""}!function(){const e=document.getElementById("content");e.classList.add("container");const n=document.createElement("div");n.classList.add("navbar");const t=document.createElement("h1");t.textContent="YeeYeeRos",t.classList.add("title");const r=document.createElement("div");r.classList.add("navButtonContainer");const o=document.createElement("div");o.classList.add("mainContent");const a=document.createElement("button");a.id="homeBtn",a.innerHTML="Home";const i=document.createElement("button");i.id="menuBtn",i.innerHTML="Menu";const c=document.createElement("button");c.id="contactBtn",c.innerHTML="Contact Us",e.appendChild(n),e.appendChild(o),n.appendChild(t),n.appendChild(r),r.appendChild(a),r.appendChild(i),r.appendChild(c)}();const g=document.getElementById("homeBtn");g.addEventListener("click",(()=>{h(),function(){const e=document.querySelector(".mainContent"),n=document.createElement("div");n.classList.add("currentContentHome");const t=document.createElement("h1");t.innerText="The best Greek food in town!";const r=document.createElement("button");r.innerHTML="Order Now";const o=document.createElement("div");o.classList.add("infoBubble");const a=document.createElement("div"),i=document.createElement("i");i.classList.add("fa","fa-location-dot");const c=document.createElement("h2");c.innerText="Kantanou 37, Chania 731 31, Greece";const d=document.createElement("div"),s=document.createElement("i");s.classList.add("fa","fa-clock");const l=document.createElement("h2");l.innerText="Mon - Sun: 11am - 11pm",e.appendChild(n),n.appendChild(t),n.appendChild(r),n.appendChild(o),o.appendChild(a),a.appendChild(i),a.appendChild(c),o.appendChild(d),d.appendChild(s),d.appendChild(l)}()})),document.getElementById("menuBtn").addEventListener("click",(()=>{h(),function(){const e=document.querySelector(".mainContent");e.classList.add("menu");const n=document.createElement("div");n.classList.add("currentContentMenu");const t=document.createElement("h1");t.innerText="Menu";const r=document.createElement("div");r.classList.add("menuItemContainer");const o=document.createElement("div"),a=document.createElement("h2"),i=document.createElement("p");a.innerText="Pork Gyro",i.innerText="A tasty and juicy pork gyro, served with our signature tzatiki and house fries.";const c=document.createElement("div"),d=document.createElement("h2"),s=document.createElement("p");d.innerText="Chicken Gyro",s.innerText="A fresh chicken gyro, served with our homemade secret sauce and house fries.";const l=document.createElement("div"),u=document.createElement("h2"),p=document.createElement("p");u.innerText="Fries",p.innerText="A plate of our freshly homemade potato fries. Secret sauce included on the side.",o.classList.add("menuItem"),c.classList.add("menuItem"),l.classList.add("menuItem"),e.appendChild(n),n.appendChild(t),n.appendChild(r),r.appendChild(o),o.appendChild(a),o.appendChild(i),r.appendChild(c),r.appendChild(l),c.appendChild(d),c.appendChild(s),l.appendChild(u),l.appendChild(p)}()})),document.getElementById("contactBtn").addEventListener("click",(()=>{h(),function(){const e=document.querySelector(".mainContent");e.classList.add("contact");const n=document.createElement("div");n.classList.add("currentContentContact");const t=document.createElement("h1");t.innerText="Contact us";const r=document.createElement("iframe");r.src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3247.798138400841!2d24.00550807534867!3d35.509269339402046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDMwJzMzLjQiTiAyNMKwMDAnMjkuMSJF!5e0!3m2!1sen!2sca!4v1689713270211!5m2!1sen!2sca",r.allowFullscreen=!0,r.classList.add("map"),e.appendChild(n),n.appendChild(t),n.appendChild(r)}()}));const b=document.querySelectorAll(".navButtonContainer>button");function v(e){const n=e.target;!function(){for(let e=0;e<b.length;e++)b[e].classList.remove("clicked")}(),n.classList.add("clicked")}for(let e=0;e<b.length;e++)b[e].addEventListener("click",v);g.click()})()})();