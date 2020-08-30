!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:0,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=1,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:1,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:1})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:1,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=65)}({1:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));const r="http://www.w3.org/1999/xhtml";document.createElement=(t,e)=>document.createElementNS(r,t,e);const i={v:null};class s{static gi(t=[]){i.v||(i.v=new s);for(let e of t)i.v.r(e);return i.v}constructor(){const t=document;this.d=t,this.w=window,this.x=this.tn("html"),this.b=this.tn("body"),this.h=this.tn("head")}init(){if(this.b){for(let t of this.b.children)this.b.removeChild(t);for(let t of this.b.children)b.removeChild(t)}else{const t=this.d.implementation.createDocumentType("html","",""),e=this.d.implementation.createDocument(r,"html",t),n=e.createElementNS(r,"head"),i=e.createElementNS(r,"body"),s=e.documentElement;this.a(s,n),this.a(s,i),this.d.appendChild(s,1),s.setAttribute("xmlns",r),this.b=this.tn("body"),this.h=this.tn("head")}}c(t){return this.d.createElementNS(r,t)}a(t,e){return t.appendChild(e)}b(t,e,n){t.addEventListener(e,n)}gi(t){return this.d.getElementById(t)}ct(t,e,n){const r=this.c(t);return r.textContent=e,r.className=n||"",r}r(t){const e=this.d.getElementsByTagName(t);if(!e)return e;for(let t of e){(t.parent?t.parent:this.d).removeChild(t)}}tn(t){return this.d.getElementsByTagName(t)[0]}h1(t,e){return this.ct("h1",t,e)}hr(t,e){return this.ct("hr",t,e)}div(t){return this.ct("div","",t)}br(t){return this.ct("br","",t)}an(t,e){return this.ct("a",t,e)}iframe(t,e){const n=this.ct("iframe","",t);return n.setAttribute("src",e),n}}},2:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(1);const i=5e4;class s{from64(t){const e=atob(t),n=new Uint8Array(e.length);for(let t=0;t<n.length;t++)try{n[t]=e.charCodeAt(t)}catch(e){console.log(t),console.log(e)}const r=new Uint16Array(n.buffer),s=r.length,o=Math.ceil(s/i),a=[];for(let t=0;t<o;t++){const e=i*t,n=len-e,s=n>i?i:n>0?n:len,o=r.slice(e,e+s);a.push(String.fromCharCode(...o))}return a.join("")}to64(t){const e=t.length,n=Math.ceil(e/i),r=[];for(let s=0;s<n;s++){const n=i*s,o=e-n,a=o>i?i:o>0?o:e,c=n+a,l=t.substring(n,c),d=new Uint16Array(a);for(let t=0;t<a;t++)d[t]=l.charCodeAt(t);const u=String.fromCharCode(...new Uint8Array(d.buffer));r.push(u)}return btoa(r.join(""))}static u8a2bs(t){const e=[];for(let n of t)e.push(String.fromCharCode(n));return e.join("")}static ab2bs(t){return s.u8a2bs(new Uint8Array(t))}static aToB64(t){const e=t.buffer?t.buffer:t;return btoa(s.ab2bs(e))}static aToB64u(t){const e=s.aToB64(t);return s.toB64u(e)}static dataURI2bs(t){return atob(t.split(",")[1])}static toB64u(t){return t?t.split("+").join("-").split("/").join("_").split("=").join(""):t}static toB64(t){const e=t.length,n=e%4>0?4-e%4:0;let r=t.split("-").join("+").split("_").join("/");for(let t=0;t<n;t++)r+="=";return r}}const o=new TextEncoder("utf-8");new TextDecoder("utf-8");class a{static async sha256(t,e=1){return await a.d(t,"SHA-256",e)}static async sha384(t,e=1){return await a.d(t,"SHA-384",e)}static async sha512(t,e=1){return await a.d(t,"SHA-512",e)}static async sha1(t,e=1){return await a.d(t,"SHA-1",e)}static async d(t,e="SHA-256",n=1){let r=o.encode(t);for(let t=0;t<n;t++)r=await window.crypto.subtle.digest(e,r);return s.aToB64u(r)}}const c=r.a.gi(),l={oM:async()=>{},oL:()=>{},i:null},d="message",u={};class h{static init(){c.w.addEventListener(d,async t=>{const e=t.data;if(e&&"string"==typeof e&&0===e.indexOf("{"))try{const n=JSON.parent(e);if(n.hash){const e=u[n.hash];e?(e(n),delete u[n.hash]):l.oM(t)}}catch(t){console.log(t)}},0)}static buildChild(t,e){c.w.addEventListener(d,async t=>{const e=t.data;if(e&&"string"==typeof e&&0===e.indexOf("{"))try{const n=JSON.parent(e),r=await l.oM(t);if(n.hash){const t={msg:r,hash:n.hash};h.postToChild(JSON.stringify(t))}}catch(t){console.log(t)}},0);const n=c.iframe("fullFrame",t);c.b.appendChild(n),n.onload=t=>{setTimeout(()=>{l.oL(t)},100)},e&&(n.style.height=window.innerHeight+"px",n.style.width="100%",n.style.border="0"),l.i=n}static setOnLoad(t){l.oL=t}static setOnMessageAtChild(t){h.isChildFrame()&&(l.oM=t)}static setOnMessage(t){l.oM=t}static postToChild(t){l.i&&window.parent===window&&l.i.contentWindow.postMessage(t,"*")}static postToParent(t){return new Promise(e=>{const n=a.sha256(Date.now+"#"+Math.random(Date.now),2);u[n]=e,window.parent!==window&&window.parent.postMessage(t,"*"),setTimeout(()=>{e(null),delete u[n]},6e4)})}static isChildFrame(){return window.parent!==window}}},65:function(t,e,n){"use strict";n.r(e);var r=n(8),i=n(1),s=n(2),o=n(9);const a=i.a.gi(["Error"]);(()=>{a.init(),a.b.style.height="100%",a.b.style.padding="0",a.b.style.margin="0",a.init();s.a.buildChild(r.b,1);s.a.setOnMessage(async t=>{const e=await class{constructor(){}static getFile(t){return new Promise(async e=>{const n=await o.a.l(t),r=new FileReader;r.addEventListener("load",()=>{e(r.result)},0),n?r.readAsDataURL(n):e(null)})}}.getFile(t.data.path);s.a.postToChild(e)}),s.a.setOnLoad(()=>{s.a.postToChild("OK")})})()},8:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));const r="https://ryunosinfx.github.io/probeCOCOATEKBookmarklet/",i="https://covid19radar-jpn-prod.azureedge.net/c19r/440/list.json"},9:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{static async l(t,e="application/json",n){const r={method:"GET",mode:"cors",cache:"no-cache",credentials:"omit",redirect:"follow",referrer:"no-referrer",headers:{"Content-Type":e}},i=await fetch(t,r);return n?await i.text():await i.blob()}}}});