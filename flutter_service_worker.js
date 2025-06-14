'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b0c142ab3a4104dafd9e0abf8ca92669",
"assets/AssetManifest.bin.json": "e2fd4fc8f413e176cb52a7d2eee0ab35",
"assets/AssetManifest.json": "7e7b239f93dc1815f44642e910bb5f98",
"assets/assets/data/albums.json": "0808b3382866a6d69dab7faa23af7584",
"assets/assets/data/artworks.json": "8621186f92741fe8413599a2d2c801eb",
"assets/assets/images/artworks/Jelena%2520Milatovi%25C4%2587%2520-%2520Bez%2520naziva%2520-%2520Ulje%2520na%2520glinenoj%2520plo%25C4%258Di%2520-%252015,5x14cm%2520-%25202025.png": "49d3cd23f27abf5729fb9126337ff05d",
"assets/assets/images/artworks/Jelena%2520Milatovi%25C4%2587%2520-%2520Bez%2520naziva%2520-%2520Ulje%2520na%2520glinenoj%2520plo%25C4%258Di%2520-%252017x15,5cm%2520-%25202025.png": "b74b1f3c67b1c87dd198b0dda7d3bd6b",
"assets/assets/images/artworks/Jelena%2520Milatovi%25C4%2587%2520-%2520Bez%2520naziva%2520-%2520Ulje%2520na%2520glinenoj%2520plo%25C4%258Di%2520-%252019,5x18cm%2520-%25202025.png": "e703a6aad26e02cb2e1f2b8b5e5d3007",
"assets/assets/images/artworks/Jelena%2520Milatovi%25C4%2587%2520-%2520Pinjata%2520-%2520Ugljen%2520na%2520papiru%2520-%2520200x150cm%2520-%25202021.jpg": "2bd3cf76f0adb312fd5eff5775fe86d2",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520Autoportret%2520-%2520Ugljen%2520na%2520papiru%2520-%2520200x150cm%2520-%25202021.jpg": "6bed231a3b9d2146cccc77ea1cab9127",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520Bez%2520naziva%2520-%2520Ugljen%2520na%2520papiru%2520-%2520200x150cm%2520-%25202025.jpg": "a0f05ed2c642147225041e7d3c16e870",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520Bez%2520naziva%2520-%2520Ugljen%2520na%2520papiru%2520-%2520200x150cm.jpg": "c81691b7215e1af29aa045c6a5f8dfde",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520Bez%2520naziva%2520-%2520Ulje%2520na%2520glinenoj%2520plo%25C4%258Di%2520-%252015,5x14cm%2520-%25202024.jpg": "80c6e461f9547fb1445fe3ae01a7a29b",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520Bez%2520naziva%2520-%2520Ulje%2520na%2520glinenoj%2520plo%25C4%258Di%2520-%252015,5x14cm%2520-%25202024.png": "15dff9f933bfa9f25b368c577d074245",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520Bez%2520naziva%2520-%2520Ulje%2520na%2520glinenoj%2520plo%25C4%258Di%2520-%252016,5x15,5cm%2520-%25202025.jpg": "2c448c21df511f8452073fc18bafb15a",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520Bez%2520naziva%2520-%2520Ulje%2520na%2520glinenoj%2520plo%25C4%258Di%2520-%252016,5x15,5cm%2520-%25202025.png": "6cfbab78ec66389a9e8add2b3cd9c943",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520Bez%2520naziva%2520-%2520Ulje%2520na%2520glinenoj%2520plo%25C4%258Di%2520-%252016x17cm%2520-%25202025.jpg": "91813c497838a38eb35072e8905dfb22",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520Bez%2520naziva%2520-%2520Ulje%2520na%2520glinenoj%2520plo%25C4%258Di%2520-%252016x17cm%2520-%25202025.png": "e9018fd5da23cae03e077cd676b7adee",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520Bez%2520naziva%2520-%2520Ulje%2520na%2520platnu%2520-%2520100x80cm%2520-%25202021.jpg": "0d545efea4f76bd8aedb8bcc3d7d1f19",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520BG-PG%2520-%2520Ugljen%2520na%2520papiru%2520-%2520200x150cm%2520-%25202021.jpg": "93a34a26e53125a4a3c55fd358ee84f4",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520I%2520-%2520Ulje%2520na%2520glinenoj%2520plo%25C4%258Di%2520-%252012x15cm%2520-%25202025.jpg": "f31d1dc1f5cb281e1f511fc6842d91ed",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520I%2520-%2520Ulje%2520na%2520glinenoj%2520plo%25C4%258Di%2520-%252012x15cm%2520-%25202025.png": "4275b47d4ccaffbc301a6db5331ad92e",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520II%2520-%2520Ulje%2520na%2520glinenoj%2520plo%25C4%258Di%2520-%252011,5x15cm%2520-%25202025.jpg": "83b1f9f54f34fbfe4ffe19465c0163c8",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520II%2520-%2520Ulje%2520na%2520glinenoj%2520plo%25C4%258Di%2520-%252011,5x15cm%2520-%25202025.png": "ebcd86889973b9d3a1654c20e14873da",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520III%2520-%2520Ulje%2520na%2520glinenoj%2520plo%25C4%258Di%2520-%252012x15cm%2520-%25202025.png": "a3d68418bef27dfed3b918086b38297d",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520Interferencija%2520-%2520Akril%2520i%2520ulje%2520na%2520platnu%2520-%252050x50cm%2520-%25202024.jpg": "6c8fea78b7ff77c9d16b69b3d3e2030a",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520Posledice%2520-%2520Ulje%2520na%2520platnu%2520-%252050x50cm%2520-%25202024.jpg": "9f394ab8af366209486926122de5a858",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520Rub%2520-%2520Akril%2520i%2520ulje%2520na%2520platnu%2520-%252050x50cm%2520-%25202024.jpg": "e369ceef4287de72f641b4ee42d4c375",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520Tranzicija%2520-%2520Akril%2520i%2520ulje%2520na%2520platnu%2520-%2520155x115cm%2520-%25202024.jpg": "1d39402e4c4aa5d871a54a5c1587d1e9",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520Trenutak%2520pre%2520-%2520Ulje%2520na%2520platnu%2520-%252050x60cm%2520-%25202024.jpg": "2c2ed259ec69e8fd0f0fdec057138b61",
"assets/assets/images/artworks/Jelena%2520Milatovic%25CC%2581%2520-%2520Zaborav%2520-%2520Akril%2520i%2520ulje%2520na%2520platnu%2520-%252050x50cm%2520-%25202024.jpg": "606e2fc6430509bf7c87f411564fb871",
"assets/assets/images/home/home_image%2520-%2520full.jpg": "e1f96a93a4441eef9e031bb43e92dc06",
"assets/assets/images/home/home_image.jpg": "86b06a45ac3c9459d6b5ffc845760e34",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "066eb6051da2641f9dbe35b373400908",
"assets/NOTICES": "d564c783157cdc511aa7b3b113bdc8fb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "43e78351341deb648f1f98711e488307",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "85cbe157eec02fc4c1deef894cff7f59",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "056181b1d04e7b74364cbaa58d0648e6",
"icons/Icon-192.png": "e89960c36c567bea4a67cc4af2ddcbaf",
"icons/Icon-512.png": "d610d6955d2bcad302b49128d1dcd311",
"icons/Icon-maskable-192.png": "e89960c36c567bea4a67cc4af2ddcbaf",
"icons/Icon-maskable-512.png": "d610d6955d2bcad302b49128d1dcd311",
"index.html": "17b8a4a25861f3aa674425ee3e4f7092",
"/": "17b8a4a25861f3aa674425ee3e4f7092",
"main.dart.js": "d825c085f6d5b3cdc2d43a0cd56c87b7",
"manifest.json": "7a8ce4d7ffde3e7fd7fdc6c685968cd3",
"version.json": "b8b6c0c7399e981b54b26fba3661d2f3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
