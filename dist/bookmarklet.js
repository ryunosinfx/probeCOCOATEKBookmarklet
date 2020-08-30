!function(t){var e={};function n(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:0,exports:{}};return t[r].call(s.exports,s,s.exports,n),s.l=1,s.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:1,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:1})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:1,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=65)}({1:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const r="http://www.w3.org/1999/xhtml";document.createElement=(t,e)=>document.createElementNS(r,t,e);const s={v:null};class o{static gi(t=[]){s.v||(s.v=new o);for(let e of t)s.v.r(e);return s.v}constructor(){const t=document;this.d=t,this.w=window,this.x=this.tn("html"),this.b=this.tn("body"),this.h=this.tn("head")}init(){if(this.b){for(let t of this.b.children)this.b.removeChild(t);for(let t of this.b.children)b.removeChild(t)}else{const t=this.d.implementation.createDocumentType("html","",""),e=this.d.implementation.createDocument(r,"html",t),n=e.createElementNS(r,"head"),s=e.createElementNS(r,"body"),o=e.documentElement;this.a(o,n),this.a(o,s),this.d.appendChild(o,1),o.setAttribute("xmlns",r),this.b=this.tn("body"),this.h=this.tn("head")}}c(t){return this.d.createElementNS(r,t)}a(t,e){return t.appendChild(e)}b(t,e,n){t.addEventListener(e,n)}gi(t){return this.d.getElementById(t)}ct(t,e,n){const r=this.c(t);return r.textContent=e,r.className=n||"",r}r(t){const e=this.d.getElementsByTagName(t);if(!e)return e;for(let t of e){(t.parent?t.parent:this.d).removeChild(t)}}tn(t){return this.d.getElementsByTagName(t)[0]}h1(t,e){return this.ct("h1",t,e)}hr(t,e){return this.ct("hr",t,e)}div(t){return this.ct("div","",t)}br(t){return this.ct("br","",t)}an(t,e){return this.ct("a",t,e)}iframe(t,e){const n=this.ct("iframe","",t);return n.setAttribute("src",e),n}}},2:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(1);const s=5e4;class o{from64(t){const e=atob(t),n=new Uint8Array(e.length);for(let t=0;t<n.length;t++)try{n[t]=e.charCodeAt(t)}catch(e){console.log(t),console.log(e)}const r=new Uint16Array(n.buffer),o=r.length,i=Math.ceil(o/s),a=[];for(let t=0;t<i;t++){const e=s*t,n=len-e,o=n>s?s:n>0?n:len,i=r.slice(e,e+o);a.push(String.fromCharCode(...i))}return a.join("")}to64(t){const e=t.length,n=Math.ceil(e/s),r=[];for(let o=0;o<n;o++){const n=s*o,i=e-n,a=i>s?s:i>0?i:e,c=n+a,l=t.substring(n,c),d=new Uint16Array(a);for(let t=0;t<a;t++)d[t]=l.charCodeAt(t);const u=String.fromCharCode(...new Uint8Array(d.buffer));r.push(u)}return btoa(r.join(""))}static u8a2bs(t){const e=[];for(let n of t)e.push(String.fromCharCode(n));return e.join("")}static ab2bs(t){return o.u8a2bs(new Uint8Array(t))}static aToB64(t){const e=t.buffer?t.buffer:t;return btoa(o.ab2bs(e))}static aToB64u(t){const e=o.aToB64(t);return o.toB64u(e)}static dataURI2bs(t){return atob(t.split(",")[1])}static toB64u(t){return t?t.split("+").join("-").split("/").join("_").split("=").join(""):t}static toB64(t){const e=t.length,n=e%4>0?4-e%4:0;let r=t.split("-").join("+").split("_").join("/");for(let t=0;t<n;t++)r+="=";return r}}const i=new TextEncoder("utf-8");new TextDecoder("utf-8");class a{static async sha256(t,e=1){return await a.d(t,"SHA-256",e)}static async sha384(t,e=1){return await a.d(t,"SHA-384",e)}static async sha512(t,e=1){return await a.d(t,"SHA-512",e)}static async sha1(t,e=1){return await a.d(t,"SHA-1",e)}static async d(t,e="SHA-256",n=1){let r=i.encode(t);for(let t=0;t<n;t++)r=await window.crypto.subtle.digest(e,r);return o.aToB64u(r)}}const c=r.a.gi(),l={oM:async()=>{},oL:()=>{},i:null},d="message",u={};class h{static init(){c.w.addEventListener(d,async t=>{const e=t.data;if(e&&"string"==typeof e&&0===e.indexOf("{"))try{const n=JSON.parent(e);if(n.hash){const e=u[n.hash];e?(e(n),delete u[n.hash]):l.oM(t)}}catch(t){console.log(t)}},0)}static buildChild(t,e){c.w.addEventListener(d,async t=>{const e=t.data;if(e&&"string"==typeof e&&0===e.indexOf("{"))try{const n=JSON.parent(e),r=await l.oM(t);if(n.hash){const t={msg:r,hash:n.hash};h.postToChild(JSON.stringify(t))}}catch(t){console.log(t)}},0);const n=c.iframe("fullFrame",t);c.b.appendChild(n),n.onload=t=>{setTimeout(()=>{l.oL(t)},100)},e&&(n.style.height=window.innerHeight+"px",n.style.width="100%",n.style.border="0"),l.i=n}static setOnLoad(t){l.oL=t}static setOnMessageAtChild(t){h.isChildFrame()&&(l.oM=t)}static setOnMessage(t){l.oM=t}static postToChild(t){l.i&&window.parent===window&&l.i.contentWindow.postMessage(t,"*")}static postToParent(t){return new Promise(e=>{console.log("PostMessager postToParent START msg:"+t);const n=a.sha256(Date.now+"#"+Math.random(Date.now),2);console.log("PostMessager postToParent hash:"+n),u[n]=e,window.parent!==window&&window.parent.postMessage(t,"*"),console.log("PostMessager postToParent POST!"),setTimeout(()=>{console.log("PostMessager postToParent TIMEOUT!"),e(null),delete u[n]},6e4)})}static isChildFrame(){return window.parent!==window}}},65:function(t,e,n){"use strict";n.r(e);var r=n(8),s=n(1),o=n(2),i=n(9);const a=s.a.gi(["Error"]);(()=>{a.init(),a.b.style.height="100%",a.b.style.padding="0",a.b.style.margin="0",a.init();o.a.buildChild(r.b,1);o.a.setOnMessage(async t=>{const e=await class{constructor(){}static getFile(t){return new Promise(async e=>{const n=await i.a.l(t),r=new FileReader;r.addEventListener("load",()=>{e(r.result)},0),n?r.readAsDataURL(n):e(null)})}}.getFile(t.data.path);o.a.postToChild(e)}),o.a.setOnLoad(()=>{o.a.postToChild("OK")})})()},8:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return s}));const r="https://ryunosinfx.github.io/probeCOCOATEKBookmarklet/",s="https://covid19radar-jpn-prod.azureedge.net/c19r/440/list.json"},9:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{static async l(t,e="application/json",n){const r={method:"GET",mode:"cors",cache:"no-cache",credentials:"omit",redirect:"follow",referrer:"no-referrer",headers:{"Content-Type":e}},s=await fetch(t,r);return n?await s.text():await s.blob()}}}});