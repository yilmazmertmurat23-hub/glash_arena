const C='clash-arena-v1';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.open(C).then(c=>fetch(e.request).then(r=>{if(r.ok)c.put(e.request,r.clone());return r}).catch(()=>c.match(e.request))))});
