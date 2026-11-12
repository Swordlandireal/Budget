// Service worker de "Budget" : garde une copie des fichiers de l'appli
// pour qu'elle s'ouvre même sans connexion.
// Pense à changer VERSION à chaque mise à jour de l'appli, pour que les téléphones
// récupèrent la nouvelle version.
const VERSION = "mon-budget-v4";
const FICHIERS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
];

// Installation : on met les fichiers en cache
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FICHIERS)));
  self.skipWaiting();
});

// Activation : on supprime les anciennes versions du cache
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cles) => Promise.all(cles.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

// Requêtes : réseau d'abord (pour avoir la dernière version), cache si hors connexion
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((rep) => {
        const copie = rep.clone();
        caches.open(VERSION).then((c) => c.put(e.request, copie));
        return rep;
      })
      .catch(() => caches.match(e.request).then((r) => r || caches.match("./index.html")))
  );
});
