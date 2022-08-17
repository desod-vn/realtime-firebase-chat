import { enableIndexedDbPersistence, getFirestore } from "firebase/firestore";
import { getToken, onMessage , getMessaging} from "firebase/messaging";
import configs from "./configs";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseApp = initializeApp(JSON.parse(configs.firebaseConfig));
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export const messaging = getMessaging(firebaseApp);

export const getTokenWeb = async () => {
  return await getToken(messaging, {vapidKey: 'BPgaE03VcrkPyW5282zoqBPsrFyC6_oGHPZrfb5yhpLBSuuTnzeDpUXgCDeIHsP3Xc01Mv-5GWc9b_n21JHaCYk'})
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


enableIndexedDbPersistence(db, { forceOwnership: false });
