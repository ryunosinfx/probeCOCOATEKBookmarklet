!function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:0,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=1,s.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:1,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:1})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:1,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=65)}({0:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const o="http://www.w3.org/1999/xhtml";document.createElement=(t,e)=>document.createElementNS(o,t,e);const s={v:null};class r{static gi(t=[]){s.v||(s.v=new r);for(let e of t)s.v.r(e);return s.v}constructor(){const t=document;this.d=t,this.w=window,this.x=this.tn("html"),this.b=this.tn("body"),this.h=this.tn("head")}init(){if(this.b){for(let t of this.b.children)this.b.removeChild(t);for(let t of this.b.children)b.removeChild(t)}else{const t=this.d.implementation.createDocumentType("html","",""),e=this.d.implementation.createDocument(o,"html",t),n=e.createElementNS(o,"head"),s=e.createElementNS(o,"body"),r=e.documentElement;this.a(r,n),this.a(r,s),this.d.appendChild(r,1),r.setAttribute("xmlns",o),this.b=this.tn("body"),this.h=this.tn("head")}}c(t){return this.d.createElementNS(o,t)}a(t,e){return t.appendChild(e)}b(t,e,n){t.addEventListener(e,n)}gid(t){return this.d.getElementById(t)}ct(t,e,n){const o=this.c(t);return o.textContent=e,o.className=n||"",o}r(t){const e=this.d.getElementsByTagName(t);if(!e)return e;for(let t of e)this.re(t)}re(t){(t.parent?t.parent:this.d).removeChild(t)}tn(t){return this.d.getElementsByTagName(t)[0]}h1(t,e){return this.ct("h1",t,e)}hr(t,e){return this.ct("hr",t,e)}pre(t,e){return this.ct("pre",t,e)}div(t){return this.ct("div","",t)}br(t){return this.ct("br","",t)}an(t,e){return this.ct("a",t,e)}iframe(t,e){const n=this.ct("iframe","",t);return n.setAttribute("src",e),n}}},2:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var o=n(0);const s=5e4;class r{from64(t){const e=atob(t),n=new Uint8Array(e.length);for(let t=0;t<n.length;t++)try{n[t]=e.charCodeAt(t)}catch(e){console.log(t),console.log(e)}const o=new Uint16Array(n.buffer),r=o.length,i=Math.ceil(r/s),a=[];for(let t=0;t<i;t++){const e=s*t,n=len-e,r=n>s?s:n>0?n:len,i=o.slice(e,e+r);a.push(String.fromCharCode(...i))}return a.join("")}to64(t){const e=t.length,n=Math.ceil(e/s),o=[];for(let r=0;r<n;r++){const n=s*r,i=e-n,a=i>s?s:i>0?i:e,c=n+a,l=t.substring(n,c),d=new Uint16Array(a);for(let t=0;t<a;t++)d[t]=l.charCodeAt(t);const u=String.fromCharCode(...new Uint8Array(d.buffer));o.push(u)}return btoa(o.join(""))}static u8a2bs(t){const e=[];for(let n of t)e.push(String.fromCharCode(n));return e.join("")}static ab2bs(t){return r.u8a2bs(new Uint8Array(t))}static aToB64(t){const e=t.buffer?t.buffer:t;return btoa(r.ab2bs(e))}static aToB64u(t){const e=r.aToB64(t);return r.toB64u(e)}static dataURI2bs(t){return atob(t.split(",")[1])}static toB64u(t){return t?t.split("+").join("-").split("/").join("_").split("=").join(""):t}static toB64(t){const e=t.length,n=e%4>0?4-e%4:0;let o=t.split("-").join("+").split("_").join("/");for(let t=0;t<n;t++)o+="=";return o}}const i=new TextEncoder("utf-8");new TextDecoder("utf-8");class a{static async sha256(t,e=1){return await a.d(t,"SHA-256",e)}static async sha384(t,e=1){return await a.d(t,"SHA-384",e)}static async sha512(t,e=1){return await a.d(t,"SHA-512",e)}static async sha1(t,e=1){return await a.d(t,"SHA-1",e)}static async d(t,e="SHA-256",n=1){let o=i.encode(t);for(let t=0;t<n;t++)o=await window.crypto.subtle.digest(e,o);return r.aToB64u(o)}}const c=o.a.gi(),l={oM:async()=>{},oL:()=>{},i:null},d="message",u={};class h{static init(){console.log("PostMessager.init"),c.w.addEventListener(d,async t=>{const e=t.data;if(e&&"string"==typeof e&&0===e.indexOf("{"))try{const n=JSON.parse(e);if(n.hash){const e=u[n.hash];e?(e(n.msg),delete u[n.hash]):l.oM(t)}}catch(t){console.log(t)}},0)}static buildChild(t,e){c.w.addEventListener(d,async t=>{const e=t.data;if(e&&"string"==typeof e&&0===e.indexOf("{"))try{const t=JSON.parse(e),n=t.hash;console.log("f.oN a o.hash:"+n);const o=await l.oM({data:t});if(console.log("f.oN b h:"+n),n){const t={msg:o,hash:n};h.postToChild(JSON.stringify(t))}}catch(t){console.log(t)}},0);const n=c.iframe("fullFrame",t);c.b.appendChild(n),n.onload=t=>{setTimeout(()=>{l.oL(t)},100)},e&&(n.style.height=window.innerHeight+"px",n.style.width="100%",n.style.border="0"),l.i=n}static setOnLoad(t){l.oL=t}static setOnMessageAtChild(t){h.isChildFrame()&&(l.oM=t)}static setOnMessage(t){l.oM=t}static postToChild(t){l.i&&window.parent===window&&(console.log("PostMessager postToChild f.i"),console.log(l.i),l.i.contentWindow.postMessage(t,"*"))}static postToParent(t){return new Promise(async e=>{console.log("PostMessager postToParent START msg:"+t+" /"+typeof t);const n=await a.sha256(Date.now+"#"+Math.random(Date.now),2);console.log("PostMessager postToParent hash:"+n),u[n]=e,t.hash=n,window.parent!==window&&window.parent.postMessage(JSON.stringify(t),"*"),console.log("PostMessager postToParent POST!"),setTimeout(()=>{u[n]&&(console.log("PostMessager postToParent TIMEOUT!"),e(null),delete u[n])},6e4)})}static isChildFrame(){return window.parent!==window}}},65:function(t,e,n){"use strict";n.r(e);var o=n(8),s=n(0),r=n(2),i=n(9);const a=s.a.gi(["Error"]);(()=>{a.init(),a.b.style.height="100%",a.b.style.padding="0",a.b.style.margin="0",a.init();r.a.buildChild(o.b,1);r.a.setOnMessage(async t=>{console.log("main e:"+t+" /"+typeof t),console.log(t);const e=!!t.data.isText,n=await class{constructor(){}static getFile(t,e){return new Promise(async n=>{const o=await i.a.l(t,void 0,e),s=new FileReader;s.addEventListener("load",()=>{console.log("FileLoadService a");const t=s.result;n(t),console.log(t)},0),e&&o?(console.log("FileLoadService b isText:"+e),n(o)):!e&&o?(console.log("FileLoadService c isText:"+e),s.readAsDataURL(o)):(console.log("FileLoadService null"),n(null))})}}.getFile(t.data.path,e);return console.log("main data:"+n+" /"+typeof n),console.log(n),n}),r.a.setOnLoad(()=>{r.a.postToChild("OK")})})()},8:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return s}));const o="https://ryunosinfx.github.io/probeCOCOATEKBookmarklet/",s="https://covid19radar-jpn-prod.azureedge.net/c19r/440/list.json"},9:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));class o{static async l(t,e="application/json",n){const o={method:"GET",mode:"cors",cache:"no-cache",credentials:"omit",redirect:"follow",referrer:"no-referrer",headers:{"Content-Type":e}},s=await fetch(t,o);return n?await s.text():await s.blob()}}}});