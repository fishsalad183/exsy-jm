'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "af33480f033a8cadd1d5fdd1f95966e7",
"assets/AssetManifest.bin.json": "5c84d8a6b0679da565a03a094f1334f2",
"assets/AssetManifest.json": "6d5889c330b174f087003a15c4ba5408",
"assets/assets/data/albums.json": "f0fb118dd1b74f6322c293d2830b0765",
"assets/assets/data/artworks.json": "1c687234e345b324e63d1575c907ce8c",
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
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/fonts/MaterialIcons-Regular.otf": "2902b56e4b535e6da56a69a50316702d",
"assets/NOTICES": "033724dc0ce11c5ef533fd9db627800d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "e5c4e784ee91fa5a54bba05ed11ad707",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "85cbe157eec02fc4c1deef894cff7f59",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "5207728e6f95b00e04005cf70055fedf",
"icons/Icon-192.png": "e89960c36c567bea4a67cc4af2ddcbaf",
"icons/Icon-512.png": "d610d6955d2bcad302b49128d1dcd311",
"icons/Icon-maskable-192.png": "e89960c36c567bea4a67cc4af2ddcbaf",
"icons/Icon-maskable-512.png": "d610d6955d2bcad302b49128d1dcd311",
"index.html": "17b8a4a25861f3aa674425ee3e4f7092",
"/": "17b8a4a25861f3aa674425ee3e4f7092",
"main.dart.js": "5e1e797341f4db6561f8d148d0bc8c53",
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
