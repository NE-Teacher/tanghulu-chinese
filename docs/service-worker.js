const CACHE_NAME = "tanghulu-chinese-v11";

const PRECACHE_URLS = ["./", "index.html", "style.css", "app.js", "data.js", "manifest.json", "이미지 소스/logo.png", "이미지 소스/banner.png", "이미지 소스/mascot.png", "원본 데이터/이미지/10.png", "원본 데이터/이미지/28.png", "원본 데이터/이미지/29.png", "원본 데이터/이미지/30.png", "원본 데이터/이미지/31.png", "원본 데이터/이미지/32.png", "원본 데이터/이미지/4.png", "원본 데이터/이미지/48.png", "원본 데이터/이미지/49.png", "원본 데이터/이미지/5.png", "원본 데이터/이미지/50.png", "원본 데이터/이미지/51.png", "원본 데이터/이미지/6.png", "원본 데이터/이미지/7.png", "원본 데이터/이미지/8.png", "원본 데이터/이미지/9.png", "원본 데이터/tts/1.mp3", "원본 데이터/tts/10.mp3", "원본 데이터/tts/11.mp3", "원본 데이터/tts/12.mp3", "원본 데이터/tts/13.mp3", "원본 데이터/tts/14.mp3", "원본 데이터/tts/15.mp3", "원본 데이터/tts/16.mp3", "원본 데이터/tts/17.mp3", "원본 데이터/tts/18.mp3", "원본 데이터/tts/19.mp3", "원본 데이터/tts/2.mp3", "원본 데이터/tts/20.mp3", "원본 데이터/tts/21.mp3", "원본 데이터/tts/22.mp3", "원본 데이터/tts/23.mp3", "원본 데이터/tts/24.mp3", "원본 데이터/tts/25.mp3", "원본 데이터/tts/26.mp3", "원본 데이터/tts/27.mp3", "원본 데이터/tts/28.mp3", "원본 데이터/tts/29.mp3", "원본 데이터/tts/3.mp3", "원본 데이터/tts/30.mp3", "원본 데이터/tts/31.mp3", "원본 데이터/tts/32.mp3", "원본 데이터/tts/33.mp3", "원본 데이터/tts/34.mp3", "원본 데이터/tts/35.mp3", "원본 데이터/tts/36.mp3", "원본 데이터/tts/37.mp3", "원본 데이터/tts/38.mp3", "원본 데이터/tts/39.mp3", "원본 데이터/tts/4.mp3", "원본 데이터/tts/40.mp3", "원본 데이터/tts/41.mp3", "원본 데이터/tts/42.mp3", "원본 데이터/tts/43.mp3", "원본 데이터/tts/44.mp3", "원본 데이터/tts/45.mp3", "원본 데이터/tts/46.mp3", "원본 데이터/tts/47.mp3", "원본 데이터/tts/48.mp3", "원본 데이터/tts/49.mp3", "원본 데이터/tts/5.mp3", "원본 데이터/tts/50.mp3", "원본 데이터/tts/51.mp3", "원본 데이터/tts/52.mp3", "원본 데이터/tts/53.mp3", "원본 데이터/tts/54.mp3", "원본 데이터/tts/55.mp3", "원본 데이터/tts/56.mp3", "원본 데이터/tts/57.mp3", "원본 데이터/tts/58.mp3", "원본 데이터/tts/59.mp3", "원본 데이터/tts/6.mp3", "원본 데이터/tts/60.mp3", "원본 데이터/tts/7.mp3", "원본 데이터/tts/8.mp3", "원본 데이터/tts/9.mp3", "원본 데이터/tts/문장_18.mp3", "원본 데이터/tts/문장_19.mp3", "원본 데이터/tts/문장_20.mp3", "원본 데이터/tts/문장_39.mp3", "원본 데이터/tts/문장_40.mp3", "원본 데이터/tts/문장_42.mp3", "원본 데이터/tts/문장_57.mp3", "원본 데이터/tts/문장_58.mp3", "원본 데이터/tts/문장_59.mp3"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) => Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => cached);
    })
  );
});
