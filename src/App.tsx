import { FC, useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import BarWave from "react-cssfx-loading/src/BarWave";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./pages/SignIn";
import { useStore } from "./store";
import { getTokenWeb, onMessageListener } from './shared/firebase'
import Alert from "./components/Alert";

const App: FC = () => {
  const currentUser = useStore((state) => state.currentUser);
  const setCurrentUser = useStore((state) => state.setCurrentUser);
  const [notification, setNotification] = useState({title: '', body: ''})
  const [isAlertOpened, setIsAlertOpened] = useState(false);

  getTokenWeb();

  useEffect(() => {
    const expired = localStorage.getItem('expired') || '0';
    const current = new Date();
    if (current.getTime() > parseInt(expired)) {
      localStorage.clear();
    }
  }, [])

  window.onbeforeunload = function(event)
  {
    return <Navigate to="/" replace />
  };

  onMessageListener()
  .then((payload : any) => {
    setIsAlertOpened(true);
    setNotification({title: payload?.notification?.title, body: payload?.notification?.body});     
  })
  .catch((err) => console.log('failed: ', err));

  useEffect(() => {
    const user = localStorage.getItem('user') || null;
    if (user) {
      const parserUser = JSON.parse(user)
      setCurrentUser(parserUser);
    } else setCurrentUser(null);
  }, []);

  if (typeof currentUser === "undefined")
    return (
      <div className="flex min-h-screen items-center justify-center">
        <BarWave />
      </div>
    );

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="sign-in" element={<SignIn />} />
        <Route
          path=":id"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
      <Alert
        isOpened={isAlertOpened}
        setIsOpened={setIsAlertOpened}
        text={notification.body}
        title={notification.title}
      />
    </>
  );
};

export default App;
