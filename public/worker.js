const CACHE_NAME = 'Wamble!';
const CACHE_FILES = ['index.html', '']

const self = this;

// Install service worker

self.addEventListener('install', (e) => {
    // install steps
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(['index.html'])
        })
    )
})

// cache and handle requests
self.addEventListener('fetch', (e) => {
    e.respondWith (
        caches.match(e.request)
        .then(() => {
            return fetch(e.request)
                .catch(err => {})
        })

    )
})

// update service worker 
self.addEventListener('activate', (e) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);

    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((name) => {
                    if (!cacheWhiteList.includes(name)) {
                        return caches.delete(name);
                    }
                })
            )
        })
    )
})