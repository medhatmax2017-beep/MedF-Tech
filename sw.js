const C="workshop-v2",A=["./","index.html","manifest.webmanifest","firebase-config.js","cloud.js","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!="GET")return;
const same=new URL(r.url).origin==location.origin,keep=n=>{if(n&&(n.ok||n.type=="opaque")){const cp=n.clone();caches.open(C).then(c=>c.put(same&&r.mode=="navigate"?"index.html":r,cp))}return n};
if(same){e.respondWith(fetch(r).then(keep).catch(()=>caches.match(r).then(h=>h||caches.match("index.html"))))}
else e.respondWith(caches.match(r).then(h=>h||fetch(r).then(keep)))});
