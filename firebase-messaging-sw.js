importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAQfpDbzBtwthel8EIGeQHCG20Rtx8WIco",
  authDomain: "amagumo-alert.firebaseapp.com",
  projectId: "amagumo-alert",
  storageBucket: "amagumo-alert.firebasestorage.app",
  messagingSenderId: "712564051019",
  appId: "1:712564051019:web:95bf9c36bd08dfff8b11ce"
};

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png" // 任意のアイコン
  });
});
