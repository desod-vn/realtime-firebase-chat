// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDLpPZpQVytGoGlcuyUGFPTICgMO0IaYbA",
    authDomain: "vtech-notification.firebaseapp.com",
    databaseURL: "https://vtech-notification-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vtech-notification",
    storageBucket: "vtech-notification.appspot.com",
    messagingSenderId: "573354208754",
    appId: "1:573354208754:web:fe30e15d16364a53d34f6b",
    measurementId: "G-W8Z6BMNVF9"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = { body: payload.notification.body };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', function(event) {
  let url = 'https://vsofh.vn:8443';
  event.notification.close();
  event.waitUntil(
      clients.matchAll({type: 'window'}).then( windowClients => {
          for (var i = 0; i < windowClients.length; i++) {
              var client = windowClients[i];
              if (client.url === url && 'focus' in client) {
                return client.focus();
              }
          }
          if (clients.openWindow) {
            return clients.openWindow(url);
          }
      })
  );
});