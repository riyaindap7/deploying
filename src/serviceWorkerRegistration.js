export function register() {
  // Service worker registration is disabled to avoid caching issues on GitHub Pages deployment
  console.log('Service Worker registration is disabled.');
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister().then(() => {
          console.log('Service Worker unregistered successfully.');
        });
      })
      .catch((error) => {
        console.error('Service Worker unregistration failed:', error);
      });
  }
}

// Automatically unregister the service worker to prevent caching issues
unregister();
