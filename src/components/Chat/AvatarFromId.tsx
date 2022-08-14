import { DEFAULT_AVATAR, IMAGE_PROXY } from "../../shared/constants";

import { FC, useEffect, useState } from "react";
import { useStore } from "../../store";

interface AvatarFromIdProps {
  uid: string;
  size?: number;
}

const AvatarFromId: FC<AvatarFromIdProps> = ({ uid, size = 30 }) => {

  const [avatar, setAvatar] = useState('');
  const currentUser = useStore((state) => state.currentUser);

  useEffect(() => {
    fetch('http://103.176.179.201:8013/api/User/get-by-id?id=' + uid, 
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + currentUser?.token
      },
      
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        setAvatar(data.data);
      }
    })
    .catch((error) => console.log(error));
  }, []);
  

  return (
    <img
      title={avatar?.ten}
      style={{ width: size, height: size }}
      className="rounded-full object-cover"
      src={
        !!avatar?.nguoiDung_AnhDinhKem && avatar?.nguoiDung_AnhDinhKem.length && avatar?.nguoiDung_AnhDinhKem[0].url
        ? IMAGE_PROXY(avatar?.nguoiDung_AnhDinhKem[0].url)
        : DEFAULT_AVATAR
      }
    />
  );
};

export default AvatarFromId;
