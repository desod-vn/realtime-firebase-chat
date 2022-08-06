import { Link, useParams } from "react-router-dom";
import { ConversationInfo } from "../../shared/types";
import { FC } from "react";
import { useStore } from "../../store";
import { DEFAULT_AVATAR, IMAGE_PROXY } from "../../shared/constants";

interface SelectConversationProps {
  conversation: ConversationInfo;
  conversationId: string;
}

const SelectConversation: FC<SelectConversationProps> = ({
  conversation,
  conversationId,
}) => {
  const currentUser = useStore((state) => state.currentUser);
  const { id } = useParams();


  if (conversation.nameMember.length === 2) {
    const avatarUrl = conversation.avatarMember.slice(conversation.avatarMember.indexOf('http'), conversation.avatarMember.indexOf(', loai'))
    
    return (
      <Link
        to={`/${conversationId}`}
        className={`hover:bg-dark-lighten relative flex items-stretch gap-2 py-2 px-5 transition duration-300 ${
          conversationId === id ? "!bg-[#263342]" : ""
        }`}
      >
        <img
          className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
          src={IMAGE_PROXY(avatarUrl)}
          alt=""
        />
        <div className="flex flex-grow flex-col justify-center gap-1 py-1">
          <p className="max-w-[240px] flex-grow overflow-hidden text-ellipsis whitespace-nowrap">
            {conversation.nameMember.find(__ => __ !== currentUser?.ten)}
          </p>
        </div>
      </Link>
    );
  }
    
  return (
    <Link
      to={`/${conversationId}`}
      className={`hover:bg-dark-lighten relative flex items-stretch gap-2 py-2 px-5 transition duration-300 ${
        conversationId === id ? "!bg-[#263342]" : ""
      }`}
    >
      <img
        className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
        src={conversation.avatarMember}
        alt=""
      />
      <div className="flex flex-grow flex-col justify-center gap-1 py-1">
        <p className="max-w-[240px] flex-grow overflow-hidden text-ellipsis whitespace-nowrap">
          {conversation.nameGroup}
        </p>
      </div>
    </Link>
  );
};

export default SelectConversation;
