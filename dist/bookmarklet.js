!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:0,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=1,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:1,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:1})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:1,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=66)}({0:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));const o="http://www.w3.org/1999/xhtml";document.createElement=(t,e)=>document.createElementNS(o,t,e);const r={v:null};class s{static gi(t=[]){r.v||(r.v=new s);for(let e of t)r.v.r(e);return r.v}constructor(){const t=document;this.d=t,this.w=window,this.x=this.tn("html"),this.b=this.tn("body"),this.h=this.tn("head")}init(){if(this.b){for(let t of this.b.children)this.b.removeChild(t);for(let t of this.b.children)b.removeChild(t)}else{const t=this.d.implementation.createDocumentType("html","",""),e=this.d.implementation.createDocument(o,"html",t),n=e.createElementNS(o,"head"),r=e.createElementNS(o,"body"),s=e.documentElement;this.a(s,n),this.a(s,r),this.d.appendChild(s,1),s.setAttribute("xmlns",o),this.b=this.tn("body"),this.h=this.tn("head")}}c(t){return this.d.createElementNS(o,t)}a(t,e){return t.appendChild(e)}b(t,e,n){t.addEventListener(e,n)}gid(t){return this.d.getElementById(t)}ct(t,e,n){const o=this.c(t);return o.textContent=e,o.className=n||"",o}r(t){const e=this.d.getElementsByTagName(t);if(!e)return e;for(let t of e)this.re(t)}re(t){(t.parent?t.parent:this.d).removeChild(t)}tn(t){return this.d.getElementsByTagName(t)[0]}h1(t,e){return this.ct("h1",t,e)}hr(t,e){return this.ct("hr",t,e)}pre(t,e){return this.ct("pre",t,e)}div(t){return this.ct("div","",t)}br(t){return this.ct("br","",t)}an(t,e){return this.ct("a",t,e)}iframe(t,e){const n=this.ct("iframe","",t);return n.setAttribute("src",e),n}}},10:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));class o{static async l(t,e="application/json",n){const o={method:"GET",mode:"cors",cache:"no-cache",credentials:"omit",redirect:"follow",referrer:"no-referrer",headers:{"Content-Type":e}},r=await fetch(t,o);return n?await r.text():await r.blob()}}},2:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const o=5e4;class r{from64(t){const e=atob(t),n=new Uint8Array(e.length);for(let t=0;t<n.length;t++)try{n[t]=e.charCodeAt(t)}catch(e){console.log(t),console.log(e)}const r=new Uint16Array(n.buffer),s=r.length,i=Math.ceil(s/o),a=[];for(let t=0;t<i;t++){const e=o*t,n=len-e,s=n>o?o:n>0?n:len,i=r.slice(e,e+s);a.push(String.fromCharCode(...i))}return a.join("")}to64(t){const e=t.length,n=Math.ceil(e/o),r=[];for(let s=0;s<n;s++){const n=o*s,i=e-n,a=i>o?o:i>0?i:e,c=n+a,l=t.substring(n,c),u=new Uint16Array(a);for(let t=0;t<a;t++)u[t]=l.charCodeAt(t);const d=String.fromCharCode(...new Uint8Array(u.buffer));r.push(d)}return btoa(r.join(""))}static u8a2bs(t){const e=[];for(let n of t)e.push(String.fromCharCode(n));return e.join("")}static ab2bs(t){return r.u8a2bs(new Uint8Array(t))}static aToB64(t){const e=t.buffer?t.buffer:t;return btoa(r.ab2bs(e))}static aToB64u(t){const e=r.aToB64(t);return r.toB64u(e)}static bs2u8a(t){const e=t.length,n=new Uint8Array(new ArrayBuffer(e));for(let o=0;o<e;o++)n[o]=t.charCodeAt(o);return n}static s2u(t){const e=[],n=t.match(/\\u.{4}/gi);if(!n)return"";const o=n.length;console.log(n);for(let t=0;t<o;t++)e.push(String.fromCharCode(n[t].replace("\\u","0x")));return e.join("")}static dataURI2bs(t){return atob(t.split(",")[1])}static toB64u(t){return t?t.split("+").join("-").split("/").join("_").split("=").join(""):t}static toB64(t){const e=t.length,n=e%4>0?4-e%4:0;let o=t.split("-").join("+").split("_").join("/");for(let t=0;t<n;t++)o+="=";return o}}},3:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var o=n(0),r=n(2);const s=new TextEncoder("utf-8");new TextDecoder("utf-8");class i{static async sha256(t,e=1){return await i.d(t,"SHA-256",e)}static async sha384(t,e=1){return await i.d(t,"SHA-384",e)}static async sha512(t,e=1){return await i.d(t,"SHA-512",e)}static async sha1(t,e=1){return await i.d(t,"SHA-1",e)}static async d(t,e="SHA-256",n=1){let o=s.encode(t);for(let t=0;t<n;t++)o=await window.crypto.subtle.digest(e,o);return r.a.aToB64u(o)}}const a=o.a.gi(),c={oM:async()=>{},oL:()=>{},i:null},l="message",u={};class d{static init(){console.log("PostMessager.init"),a.w.addEventListener(l,async t=>{const e=t.data;if(e&&"string"==typeof e&&0===e.indexOf("{"))try{const n=JSON.parse(e);if(n.hash){const e=u[n.hash];e?(e(n.msg),delete u[n.hash]):c.oM(t)}}catch(t){console.log(t)}},0)}static buildChild(t,e){a.w.addEventListener(l,async t=>{const e=t.data;if(e&&"string"==typeof e&&0===e.indexOf("{"))try{const t=JSON.parse(e),n=t.hash;console.log("f.oN a o.hash:"+n);const o=await c.oM({data:t});if(console.log("f.oN b h:"+n),n){const t={msg:o,hash:n};d.postToChild(JSON.stringify(t))}}catch(t){console.log(t)}},0);const n=a.iframe("fullFrame",t);a.b.appendChild(n),n.onload=t=>{setTimeout(()=>{c.oL(t)},100)},e&&(n.style.height=window.innerHeight+"px",n.style.width="100%",n.style.border="0"),c.i=n}static setOnLoad(t){c.oL=t}static setOnMessageAtChild(t){d.isChildFrame()&&(c.oM=t)}static setOnMessage(t){c.oM=t}static postToChild(t){c.i&&window.parent===window&&(console.log("PostMessager postToChild f.i"),console.log(c.i),c.i.contentWindow.postMessage(t,"*"))}static postToParent(t){return new Promise(async e=>{console.log("PostMessager postToParent START msg:"+t+" /"+typeof t);const n=await i.sha256(Date.now+"#"+Math.random(Date.now),2);console.log("PostMessager postToParent hash:"+n),u[n]=e,t.hash=n,window.parent!==window&&window.parent.postMessage(JSON.stringify(t),"*"),console.log("PostMessager postToParent POST!"),setTimeout(()=>{u[n]&&(console.log("PostMessager postToParent TIMEOUT!"),e(null),delete u[n])},6e4)})}static isChildFrame(){return window.parent!==window}}},66:function(t,e,n){"use strict";n.r(e);var o=n(9),r=n(0),s=n(3),i=n(10);const a=r.a.gi(["Error"]);(()=>{a.init(),a.b.style.height="100%",a.b.style.padding="0",a.b.style.margin="0",a.init();s.a.buildChild(o.b,1);s.a.setOnMessage(async t=>{console.log("main e:"+t+" /"+typeof t),console.log(t);const e=!!t.data.isText,n=await class{constructor(){}static getFile(t,e){return new Promise(async n=>{const o=await i.a.l(t,void 0,e),r=new FileReader;r.addEventListener("load",()=>{console.log("FileLoadService a");const t=r.result;n(t),console.log(t)},0),e&&o?(console.log("FileLoadService b isText:"+e),n(o)):!e&&o?(console.log("FileLoadService c isText:"+e),r.readAsDataURL(o)):(console.log("FileLoadService null"),n(null))})}}.getFile(t.data.path,e);return console.log("main data:"+n+" /"+typeof n),console.log(n),n}),s.a.setOnLoad(()=>{s.a.postToChild("OK")})})()},9:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r}));const o="https://ryunosinfx.github.io/probeCOCOATEKBookmarklet/",r="https://covid19radar-jpn-prod.azureedge.net/c19r/440/list.json"}});