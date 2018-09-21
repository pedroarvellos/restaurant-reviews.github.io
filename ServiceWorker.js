//This file is responsible to save the info in the browser
const staticName = "20-09-2018-reviews"

const filesToBeSaved = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg",
    "./img/5.jpg",
    "./img/6.jpg",
    "./img/7.jpg",
    "./img/8.jpg",
    "./img/9.jpg",
    "./img/10.jpg",
    "./js/dbhelper.js",
    "./js/main.js",
    "./js/restaurant_info.js",
    "./index.html",
    "./restaurant.html",
    "./css/styles.css",
    "./css/media-query/index-media-query.css",
    "./css/media-query/restaurant-media-query.css",
    "./data/restaurants.json"
];

//Installing
this.addEventListener('install', event => {
  this.skipWaiting();

  event.waitUntil(
    caches.open(staticName)
    .then(cache => {
      return cache.addAll(filesToBeSaved);
    })
    .catch(err => {
      console.log('Error while caching files: ', err);
    })
  );
});

//Clear cache on activate
this.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => (cacheName.startsWith('20-09-2018')))
          .filter(cacheName => (cacheName !== staticName))
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

//Every request this method is called
this.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if(response) {
          return response;
        }

        return fetch(event.request)
      })
      .catch((err) => {
        console.log("Error while fetching " + err);
      })
  )
});