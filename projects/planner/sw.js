if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,r)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let i={};const u=s=>n(s,o),t={module:{uri:o},exports:i,require:u};e[o]=Promise.all(l.map((s=>t[s]||u(s)))).then((s=>(r(...s),i)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AddBoxIcon-AEzVrIcN.js",revision:null},{url:"assets/AddCircleIcon-Coq7foZs.js",revision:null},{url:"assets/AddIcon-2_icJ1_t.js",revision:null},{url:"assets/AddListIcon-DrS-a08a.js",revision:null},{url:"assets/ArchiveIcon-CxmC-auZ.js",revision:null},{url:"assets/ArrowBackIcon-DllwtuYH.js",revision:null},{url:"assets/ArrowForwardIcon-BIeZTgN3.js",revision:null},{url:"assets/CheckIcon-DeNArHyP.js",revision:null},{url:"assets/ChevronIcon-Di4noCWq.js",revision:null},{url:"assets/ChevronLeftIcon-BhG2Nj0r.js",revision:null},{url:"assets/ChevronRightIcon-C15aGzMI.js",revision:null},{url:"assets/cleanup-Dz1Ww4HL.js",revision:null},{url:"assets/CloseIcon-CXVJW_XD.js",revision:null},{url:"assets/CrossCircle-BRt0yjsc.js",revision:null},{url:"assets/CrossIcon-BG0H5dsv.js",revision:null},{url:"assets/DoneAllIcon-DgAXxVDB.js",revision:null},{url:"assets/EditIcon-CthHp4GF.js",revision:null},{url:"assets/EventRepeatIcon-CitH4zoE.js",revision:null},{url:"assets/EventUpcomingIcon-DKdF3MtR.js",revision:null},{url:"assets/FilterIcon-CUIyDqXC.js",revision:null},{url:"assets/index-BW30Jk9k.css",revision:null},{url:"assets/index-GZcjy_mO.js",revision:null},{url:"assets/ListIcon-CbCjon7q.js",revision:null},{url:"assets/LoadingIcon-DUMPaxyr.js",revision:null},{url:"assets/MenuIcon-NDcZy7hN.js",revision:null},{url:"assets/MoreVertIcon-Bed_URIy.js",revision:null},{url:"assets/OverviewIcon-BHgb2MO6.js",revision:null},{url:"assets/PersonIcon-DeK5r4LX.js",revision:null},{url:"assets/ProgressIcon-DoYYmLvc.js",revision:null},{url:"assets/SettingsIcon-DzSFpSeY.js",revision:null},{url:"assets/SortIcon-DOvu8aS3.js",revision:null},{url:"assets/StarIcon-BPiOSI25.js",revision:null},{url:"assets/TodayIcon-D0R61uwU.js",revision:null},{url:"assets/TrashIcon-CvVRhZKr.js",revision:null},{url:"index.html",revision:"9148c782a6f3018f0114f88bf3a68105"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"logo-48.png",revision:"266ea5ce34f15d7ce2a2b48b4a13a19c"},{url:"logo-96.png",revision:"444753bdfba286f087123c35f756ea17"},{url:"logo-144.png",revision:"2f047b9f88fc9dffd0b5196945e4dd18"},{url:"logo-120.png",revision:"1d9ae3d7774fa1fd111f4ec880579d65"},{url:"logo-180.png",revision:"0e1407bd396b897aaa8a95033d8f5562"},{url:"logo-192.png",revision:"a0c220c17b3253f776614d5e22fc5a69"},{url:"logo-196.png",revision:"d1b7bbc621304829ba6a1f2efc509b8a"},{url:"logo-512.png",revision:"f7d7dccbec896d74c18d880225665d6b"},{url:"manifest.webmanifest",revision:"05f5f6adaeaad4b3410d13c285b04164"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
