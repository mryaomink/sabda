'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0beb0911c49063c70710c3c1363ccf48",
".git/config": "2b0d3917d277b2e682ec3334ab3093af",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "142d8b54c04f5404269181c33de5dad3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a48901c5b4c4576e5efe147454b092aa",
".git/logs/refs/heads/main": "45ffb01c3fd1d056ff4245b37a8ef124",
".git/logs/refs/remotes/origin/main": "2ed46e63a6e1a2ffe30fca95e2f5ee57",
".git/objects/14/b8be57b675da4c8a52ccb024b09af2bd76beda": "f3833eff90cd143ab494de1ee033c473",
".git/objects/20/028ede6e1d550cd729419a2215a89f536ac3b2": "cd743780a041bea7c948a0ab304faab3",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/2230bb228b5f57efd0686977299ccdcad774a0": "aaeae1c87ebb5f5cdfbdfc8b4eab3fc9",
".git/objects/28/da7b26d03f28b3276fbf2c6202fc986f1e3981": "66bfcdcaf9dce92f20c0e4d103909b5a",
".git/objects/31/1a5fee8aa9aec92282e270f227f9ebe6bae6fc": "d09088fc916472a7236009e76d4f4b1b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3f/c5f5e4212afcdcb10805dee5fc29110ecd517e": "48bc78b2d63c00d55475667d34fc2c4e",
".git/objects/45/0300d538778dc930ad33cdf06a2ece669b962f": "dcf23fa063d100f3f0905d0b029ec3b6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5e/7aa21720c5b58f318b696b622c8c27f8f3da91": "1622ce56446b2bd5a0b9615608a28000",
".git/objects/66/b396074e65b42f0680f407bc4c674c8b8f5c75": "858b8420d6f99bf387d0513aa937b89e",
".git/objects/70/2be05599a86d42324e1d302db7eb42ee0d78a9": "046b1f9aa1169c02b55db0b4e00b927b",
".git/objects/72/b75181c879691fe6870c496825fa68589350ae": "35b13f3db83b39e4754c23b9148fb504",
".git/objects/78/8ff20f77aff40055753f0534d47b3d7e781a7c": "23342d33df264de4e3d2b7ceeeb3da37",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/f85359226c100992e1a16883c5068e80f96c23": "5b0c5b291e8943792f66e670e0aa8e72",
".git/objects/84/82e8a9097b4a984f20f5ba8938a587e4df63b3": "6e11125cd1962ae862195f1cb86a0718",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/db8c7e501f2dc1b30ce7fc3bfdb43aabca8e61": "4b2d0c432ab7ac682e34f0c92035f2a0",
".git/objects/a9/af8c129a080cf09d2885d340c1bed81bf2047b": "b352c48b7ddfa6d4ccc69e89b318ca72",
".git/objects/a9/fa915f8ee7766ac3d9328cf4a5a3cebcd456d5": "9b0cb55ad494e8210543807bab42aa3a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/45c9682f46fa9a59c7b3842be4b8801c076c13": "6d0e41422b6036857c978d2471273ec9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/66a48fb0fb9f8f6897c2c4fbab0e1aef46832a": "9b58965a6db0552cac48bcc86fe7874c",
".git/objects/ca/8a9742c5104451dffbe6782c5af7e0c30cb8bd": "85186de68fe622f35f004e52c8c12d38",
".git/objects/d1/fcb2fa374784eb1b1d52062353c808c507b2f3": "35afd2bddc2197f11eb94f224e60b921",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ec/f7eeb24e067400a491416bb9fce77c462e49c8": "23a9dd16281a3563ac520b4d7024490c",
".git/objects/f4/84adddcfbc5881bb3793aeafe6274d88c6c9ba": "b7fd900db5f73e1de12785911d5df33a",
".git/objects/f9/eddeb55680f44bf4910a6246835be19c1df7ed": "1ba897f8c9c0f96b3b1d978fe81f81ff",
".git/refs/heads/main": "1eb65904dc1bf49935441c760dcdab13",
".git/refs/remotes/origin/main": "1eb65904dc1bf49935441c760dcdab13",
"assets/AssetManifest.json": "1388b86093e28d91d60bb4eff82c08e6",
"assets/assets/images/kedua.svg": "028b6f204520df3d81897bdba983955a",
"assets/assets/images/ketiga.svg": "c293d30fd62932ac30e84402dd7f3d46",
"assets/assets/images/pertama.svg": "0fab6bb6a665f33a515d1d8fe2c26dff",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b2023d428426891fdef2b619911abc95",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0feaa5ccff64a12d3fc610a08fead028",
"/": "0feaa5ccff64a12d3fc610a08fead028",
"main.dart.js": "b5d3a4131781f9070ca76d9d114dd5e7",
"manifest.json": "7bba3f47b4f94d840baf8eb8bd45c564",
"version.json": "e691e1b0ca1cb70b02b73063d7202461"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
