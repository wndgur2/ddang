import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'

export function initFCM() {
  console.log('initialize FCM')

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FCM_PUBLIC_KEY,
    authDomain: 'heycheese-6b35b.firebaseapp.com',
    projectId: 'heycheese-6b35b',
    storageBucket: 'heycheese-6b35b.firebasestorage.app',
    messagingSenderId: '634117833334',
    appId: '1:634117833334:web:ec650b274bc76bb9575557',
    measurementId: 'G-68C145RQDG',
  }

  const app = initializeApp(firebaseConfig)

  const messaging = getMessaging(app)

  if (!('Notification' in window)) {
    console.log('This browser does not support notifications.')
    return
  }

  if (Notification.permission === 'granted') {
    return getToken(messaging, {
      vapidKey: import.meta.env.VITE_VAPID_KEY,
    })
  } else {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('Notification permission granted.')
        return getToken(messaging, {
          vapidKey: import.meta.env.VITE_VAPID_KEY,
        })
      }
    })
  }
}
