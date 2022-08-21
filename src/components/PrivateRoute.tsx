import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import { BACKEND_API } from "../shared/configs";
import { FC } from "react";
import { useStore } from "../store";

const PrivateRoute: FC = ({ children }) => {
  const currentUser = useStore((state) => state.currentUser);
  const location = useLocation();
  const setCurrentUser = useStore((state) => state.setCurrentUser);
  const [searchParams, setSearchParams] = useSearchParams();

  if (searchParams.get("vtech_token")) {
    fetch(BACKEND_API + '/User/my-profile',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + searchParams.get("vtech_token")
        },
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCurrentUser(data.data);
          data.data.token = searchParams.get("vtech_token");
          localStorage.setItem('user', JSON.stringify(data.data));
          var current = new Date();
          var followingDay = new Date(current.getTime() + 86400000);
          localStorage.setItem('expired', JSON.stringify(followingDay.getTime()));
        }
      })
      .catch((error) => console.log(error));
  }

  if (!currentUser)
    return (
      <Navigate
        to={`/sign-in?redirect=${encodeURIComponent(
          location.pathname + location.search
        )}`}
      />
    );

  return <>{children}</>;
};

export default PrivateRoute;
