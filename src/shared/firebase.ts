import { enableIndexedDbPersistence, getFirestore } from "firebase/firestore";
import { getToken, onMessage , getMessaging} from "firebase/messaging";
import { configs, KEY_PUSH_FCM , KEY_APP_FCM} from "./configs";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseApp = initializeApp(JSON.parse(configs.firebaseConfig));
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export const messaging = getMessaging(firebaseApp);

export const getTokenWeb = async () => {
  return await getToken(messaging, {vapidKey: KEY_APP_FCM})
    .then((currentToken : any) => {
      if (currentToken) {
        localStorage.setItem('pingToken', currentToken)
      }
    }).catch((err : any) => {
        return console.log('An error occurred while retrieving token. ', err);
    });
}

export const onMessageListener = () =>
  new Promise((resolve) => {    
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

export const handlePushNotify = (noti: string, to: string, conversationId: string) => {
  const pingUser = localStorage.getItem('pingToken') || null;
  if (to != pingUser) {
    return fetch('https://fcm.googleapis.com/fcm/send',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': KEY_PUSH_FCM
        },
        body: JSON.stringify({
          "notification": {
            "title": "Tin nhắn đến",
            "body" : noti,
            "text": conversationId
          },
          "to": to
        })
      })
      .catch((error) => console.log(error));
  }
};

enableIndexedDbPersistence(db, { forceOwnership: false });
