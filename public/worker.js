let CACHE_NAME = 'Wamble!';


// Install servoce worker

self.addEventListener('install', e => {
    // install steps
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(['/'])
        })
    )
})

// cache and return events
self.addEventListener('fetch', e => {
    e.respondWith (
        caches.match(e.request)
        .then(res => {
            if (res) return res
            return fetch(e.request)
        })

    )
})

// update service worker 
self.addEventListener('activate', e => {
    const cacheWhiteList = ['Wamble!']
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(name => {
                    if (cacheWhiteList.indexOf(name) === -1) {
                        return caches.delete(name);
                    }
                })
            )
        })
    )
})