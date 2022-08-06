import { FC, useState } from "react";

import { ConversationInfo } from "../../shared/types";
import ConversationSettings from "./ConversationSettings";
import { Link } from "react-router-dom";
import ViewMedia from "../Media/ViewMedia";
import { useStore } from "../../store";

interface ChatHeaderProps {
  conversation: ConversationInfo;
}

const ChatHeader: FC<ChatHeaderProps> = ({ conversation }) => {
  const currentUser = useStore((state) => state.currentUser);

  const [isConversationSettingsOpened, setIsConversationSettingsOpened] = useState(false);
  const [isGroupMembersOpened, setIsGroupMembersOpened] = useState(false);
  const [isViewMediaOpened, setIsViewMediaOpened] = useState(false);

  const avatarUrl = conversation.avatarMember.slice(conversation.avatarMember.indexOf('http'), conversation.avatarMember.indexOf(', loai'))

  return (
    <>
      <div className="border-dark-lighten flex h-20 items-center justify-between border-b px-5">
        <div className="flex flex-grow items-center gap-3">
          <Link to="/" className="md:hidden">
            <i className="bx bxs-chevron-left text-primary text-3xl"></i>
          </Link>
          {conversation.idMember.length === 2 ? (
            <img
              className="h-10 w-10 rounded-full"
              src={avatarUrl}
              alt=""
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
          <p>
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
