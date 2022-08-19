import { FC, useState } from "react";
import Alert from "../components/Alert";
import { Navigate } from "react-router-dom";
import { useQueryParams } from "../hooks/useQueryParams";
import { useStore } from "../store";
import { BACKEND_API } from "../shared/configs";

const SignIn: FC = () => {
  const { redirect } = useQueryParams();

  const currentUser = useStore((state) => state.currentUser);
  const setCurrentUser = useStore((state) => state.setCurrentUser);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAlertOpened, setIsAlertOpened] = useState(false);

  const handleSignIn = () => {
    setLoading(true);
    fetch(BACKEND_API + '/User/authenticate',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "matKhau": password,
          "taiKhoan": username,
        })
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem('user', JSON.stringify(data.data));
          var current = new Date();
          var followingDay = new Date(current.getTime() + 86400000);
          localStorage.setItem('expired', JSON.stringify(followingDay.getTime()));

          return setCurrentUser(data.data);
        } else {
          setError(data.message);
          setIsAlertOpened(true);
        }
      })
      .catch((error) => console.log(error));
      setLoading(false);
  };

  if (currentUser) return <Navigate to={redirect || "/"} />;

  return (
    <>
      <div className="mx-[5vw] my-5 flex justify-center lg:my-10">
        <div className="w-full max-w-[1100px]">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <img className="w-40" src="/logo.png" alt="" />
            </div>
          </div>

          <div className="flex flex-col-reverse gap-10 md:mt-5 md:flex-row md:gap-5 lg:mt-10">
            <div className="flex-1">
              <img className="h-auto w-full" src="/illustration.svg" alt="" />
            </div>

            <div className="mt-12 flex flex-1 flex-col items-center gap-4 md:items-start lg:mt-24">
              <input
                type="text"
                value={username}
                className="p-2 text-dark outline-none rounded"
                placeholder="Username" 
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                value={password}
                className="p-2 text-dark outline-none rounded"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                disabled={loading}
                onClick={handleSignIn}
                className="flex px-10 cursor-pointer items-center gap-3 rounded-md bg-blue-300 p-3 text-black transition duration-300 hover:brightness-90 disabled:!cursor-default disabled:!brightness-75"
              >
                <span>Đăng nhập</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Alert
        isOpened={isAlertOpened}
        setIsOpened={setIsAlertOpened}
        text={error}
        isError
      />
    </>
  );
};

export default SignIn;
