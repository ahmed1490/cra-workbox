console.log("in sw.js");

//default, new a new sw replaced on a fresh visit of website (and hard reload sometimes)
workbox.skipWaiting(); //activate new sw, when its known on reload
workbox.clientsClaim(); //replace an existing active sw without waiting for reload

//added to precache cache
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

//cache external resources
workbox.routing.registerRoute(
    new RegExp('https?://.*min\.(css|js)'),
    workbox.strategoes.networkFirst() //added to runtime cache
)

//cache json endpoint
workbox.routing.registerRoute(
    new RegExp('https?://.*:4567.*\.json'),
    new RegExp('/.*\.json'),
    workbox.strategoes.networkFirst({
        cacheName: 'json-cache'
    })
)

self.addEventListener('install', event => {
    console.log('sw install...');
    
    const asyncInstall = new Promise(resolve => {
        console.log('waiting to resolve..')

        setTimeout(resolve, 5000);
    });

    //important to resolve/reject else sw wont be activate
    event.waitUntil(asyncInstall);
})

self.addEventListener('activate', event => {
    console.log('sw activate');
})
