import { FC, useState, useEffect } from "react";
import { DEFAULT_AVATAR, IMAGE_PROXY } from "../../shared/constants";
import { ConversationInfo } from "../../shared/types";
import ConversationSettings from "./ConversationSettings";
import { Link } from "react-router-dom";
import ViewMedia from "../Media/ViewMedia";
import { useStore } from "../../store";
import { BACKEND_API } from "../../shared/configs";



interface ChatHeaderProps {
  conversation: ConversationInfo;
}

const ChatHeader: FC<ChatHeaderProps> = ({ conversation }) => {
  const currentUser = useStore((state) => state.currentUser);

  const [isConversationSettingsOpened, setIsConversationSettingsOpened] = useState(false);
  const [isViewMediaOpened, setIsViewMediaOpened] = useState(false);
  const [avatar, setAvatar] = useState(Object);
  
  useEffect(() => {
    const uid = conversation.idMember.find(__ => __ != currentUser?.id)
    fetch(BACKEND_API + '/User/get-by-id?id=' + uid, 
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + currentUser?.token
      },
      
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success && uid == data.data.id) {
        setAvatar(data.data);
      }
    })
    .catch((error) => console.log(error));
  }, [conversation]);

  return (
    <>
      <div className="border-dark-lighten flex h-20 items-center justify-between border-b px-5">
        <div className="flex flex-grow items-center gap-3">
          <Link to="/" className="md:hidden">
            <i className="bx bxs-chevron-left text-primary text-3xl"></i>
          </Link>
          {conversation.idMember.length === 2 ? (
            <img 
              title={avatar?.ten}
              style={{ width: '40px', height: '40px' }}
              className="rounded-full object-cover"
              src={
                !!avatar?.nguoiDung_AnhDinhKem && avatar?.nguoiDung_AnhDinhKem.length && avatar?.nguoiDung_AnhDinhKem[0].url
                ? IMAGE_PROXY(avatar?.nguoiDung_AnhDinhKem[0].url)
                : DEFAULT_AVATAR
              }
            />
          ) : (
            <>
              {conversation.avatarMember ? (
                <img
                  className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                  src={conversation.avatarMember}
                  alt=""
                />
              ) : (
                <div className="relative h-10 w-10 flex-shrink-0">
                </div>
              )}
            </>
          )}
          <p className="font-bold">
            {conversation.idMember.length > 2 && conversation.nameGroup
              ? conversation.nameGroup
              : conversation.nameMember.find(__ => __ !== currentUser?.ten)}
          </p>
        </div>

        <button onClick={() => setIsConversationSettingsOpened(true)}>
          <i className="bx bxs-group text-primary text-2xl"></i>
        </button>
      </div>

      {isConversationSettingsOpened && (
        <ConversationSettings
          setIsOpened={setIsConversationSettingsOpened}
          conversation={conversation}
          setMediaViewOpened={setIsViewMediaOpened}
        />
      )}
      {isViewMediaOpened && <ViewMedia setIsOpened={setIsViewMediaOpened} />}
    </>
  );
};

export default ChatHeader;
