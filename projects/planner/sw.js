if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>n(e,l),c={module:{uri:l},exports:o,require:t};s[l]=Promise.all(i.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/CheckIcon-8dba184a.js",revision:null},{url:"assets/ChevronIcon-61bd5eca.js",revision:null},{url:"assets/CrossCircle-d4b00e64.js",revision:null},{url:"assets/CrossIcon-90aa83a3.js",revision:null},{url:"assets/EditIcon-c2d05d74.js",revision:null},{url:"assets/index-7182296e.js",revision:null},{url:"assets/index-e13c8d55.css",revision:null},{url:"assets/StarIcon-30e6ae6a.js",revision:null},{url:"assets/TrashIcon-0ed0bcc8.js",revision:null},{url:"index.html",revision:"f000674ee83c3c169d085ebfaa4f177a"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"512.png",revision:"a13a063ea68d95e5bb7c1902f5efc87b"},{url:"192.png",revision:"f8ae3eb1ce923b291b034b9a69694b10"},{url:"196.png",revision:"58ccfbcf4765d09cf6741836f549b798"},{url:"manifest.webmanifest",revision:"0515e107f7fda48a8d3c18d8e25fa67e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
