if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,r)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let i={};const u=s=>n(s,o),t={module:{uri:o},exports:i,require:u};e[o]=Promise.all(l.map((s=>t[s]||u(s)))).then((s=>(r(...s),i)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AddBoxIcon-CxNDwqU2.js",revision:null},{url:"assets/AddCircleIcon-BswadCEp.js",revision:null},{url:"assets/AddIcon-DFl_FmSn.js",revision:null},{url:"assets/AddListIcon-DyjqU3UL.js",revision:null},{url:"assets/ArchiveIcon-cqCQGZdn.js",revision:null},{url:"assets/ArrowBackIcon-DCVNU51y.js",revision:null},{url:"assets/ArrowForwardIcon-nQRcJ5aO.js",revision:null},{url:"assets/CheckIcon-Czateo2I.js",revision:null},{url:"assets/ChevronIcon-BHvIKnxB.js",revision:null},{url:"assets/ChevronLeftIcon-079xVBTx.js",revision:null},{url:"assets/ChevronRightIcon-CrIIuhbq.js",revision:null},{url:"assets/cleanup-ElK70DA6.js",revision:null},{url:"assets/CloseIcon-D2XgBYV3.js",revision:null},{url:"assets/CrossCircle-BNvD62IC.js",revision:null},{url:"assets/CrossIcon-gUVz1JQt.js",revision:null},{url:"assets/DoneAllIcon-CrfnlkSK.js",revision:null},{url:"assets/EditIcon-Dwn-fAus.js",revision:null},{url:"assets/EventRepeatIcon-C6Q0pNsS.js",revision:null},{url:"assets/EventUpcomingIcon-2fvOvqKN.js",revision:null},{url:"assets/FilterIcon-BnzzHWzt.js",revision:null},{url:"assets/index-BW30Jk9k.css",revision:null},{url:"assets/index-D8eW6nVu.js",revision:null},{url:"assets/ListIcon-DSF4HbN4.js",revision:null},{url:"assets/LoadingIcon-CooY4tD7.js",revision:null},{url:"assets/MenuIcon-WFDpX-b7.js",revision:null},{url:"assets/MoreVertIcon-DHbDYSU2.js",revision:null},{url:"assets/OverviewIcon-DdA6jtx4.js",revision:null},{url:"assets/PersonIcon-BleVkCfP.js",revision:null},{url:"assets/ProgressIcon-CkR6u3AO.js",revision:null},{url:"assets/SettingsIcon-CHFnZf06.js",revision:null},{url:"assets/SortIcon-DMNpuHce.js",revision:null},{url:"assets/StarIcon-COfh8yun.js",revision:null},{url:"assets/TodayIcon-EtmTu5b2.js",revision:null},{url:"assets/TrashIcon-Bcg5WzhA.js",revision:null},{url:"index.html",revision:"ec0876cd1293cba761857ee2f07a5fcd"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"logo-48.png",revision:"266ea5ce34f15d7ce2a2b48b4a13a19c"},{url:"logo-96.png",revision:"444753bdfba286f087123c35f756ea17"},{url:"logo-144.png",revision:"2f047b9f88fc9dffd0b5196945e4dd18"},{url:"logo-120.png",revision:"1d9ae3d7774fa1fd111f4ec880579d65"},{url:"logo-180.png",revision:"0e1407bd396b897aaa8a95033d8f5562"},{url:"logo-192.png",revision:"a0c220c17b3253f776614d5e22fc5a69"},{url:"logo-196.png",revision:"d1b7bbc621304829ba6a1f2efc509b8a"},{url:"logo-512.png",revision:"f7d7dccbec896d74c18d880225665d6b"},{url:"manifest.webmanifest",revision:"05f5f6adaeaad4b3410d13c285b04164"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
