/* Network-first for pages and app code: no more stale broken layout after updates. */
const CACHE='pesito-shell-v120';
const ASSETS=['./','./index.html','./style.css?v=120','./app.js?v=120','./manifest.webmanifest','./icon-192.png','./icon-512.png','./detective-art.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('pesito-shell-')&&k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener('fetch',event=>{const request=event.request;if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;event.respondWith((async()=>{try{const fresh=await fetch(request,{cache:'no-store'});if(fresh.ok){const cache=await caches.open(CACHE);cache.put(request,fresh.clone())}return fresh}catch{const cached=await caches.match(request);return cached||(request.mode==='navigate'?await caches.match('./index.html'):null)||Response.error()}})())});
