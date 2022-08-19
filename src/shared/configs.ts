export const configs = {
  firebaseConfig: import.meta.env.VITE_FIREBASE_CONFIG as string,
  giphyAPIKey: import.meta.env.VITE_GIPHY_API_KEY as string,
};
export const BACKEND_API = import.meta.env.VITE_BACKEND_API as string;
export const KEY_PUSH_FCM = import.meta.env.VITE_KEY_SEND_FCM as string;
export const KEY_APP_FCM = import.meta.env.VITE_KEY_APP_FCM as string;
export const FRONTEND = import.meta.env.VITE_FRONTEND as string;
