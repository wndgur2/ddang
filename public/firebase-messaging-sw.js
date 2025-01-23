// Import the firebase app / messaging packages
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js')

// Initialize app
const app = firebase.initializeApp({
  apiKey: 'AIzaSyA3jZLbjGiFKkW5ziiyLsufgAHyBab-B6Y',
  authDomain: 'heycheese-6b35b.firebaseapp.com',
  projectId: 'heycheese-6b35b',
  storageBucket: 'heycheese-6b35b.firebasestorage.app',
  messagingSenderId: '634117833334',
  appId: '1:634117833334:web:ec650b274bc76bb9575557',
  measurementId: 'G-68C145RQDG',
})

// Initialize messaging
const messaging = firebase.messaging()

messaging.onMessage((payload) => {
  console.log('Received a message: ', payload)
})

// Listen to bg messages
messaging.onBackgroundMessage((payload) => {
  console.log('Received a bg message: ', payload)

  const title = payload.data.title
  const notification = {
    body: 'Notification Body',
    icon: '/icon.png',
  }

  // Show notification when message received
  self.registration.showNotification(title, notification)
})

console.log('Firebase messaging service worker loaded')
