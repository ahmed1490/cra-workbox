console.log("in sw.js");

//default, new a new sw replaced on a fresh visit of website (and hard reload sometimes)
workbox.skipWaiting(); //activate new sw, when its known on reload
workbox.clientsClaim(); //replace an existing active sw without waiting for reload

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);


self.addEventListener('install', event => {
    console.log('sw install');
})

self.addEventListener('activate', event => {
    console.log('sw activate');
})