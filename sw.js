const CACHE='ciudadania-practica-v4-20261112';
const APP_SHELL=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('ciudadania-practica-')&&k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()]));
});
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
 if(request.mode==='navigate'){
  event.respondWith(fetch(request).then(response=>{
   if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put('./index.html',copy)));}
   return response;
  }).catch(()=>caches.match('./index.html')));
  return;
 }
 event.respondWith(caches.match(request).then(hit=>hit||fetch(request)));
});
