import { Link, useParams } from "react-router-dom";
import { ConversationInfo } from "../../shared/types";
import { FC } from "react";
import { useStore } from "../../store";
import { DEFAULT_AVATAR, IMAGE_PROXY } from "../../shared/constants";
import { useLastMessage } from "../../hooks/useLastMessage";

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

  const {data: lastMessage} = useLastMessage(conversationId);

  if (conversation.nameMember.length === 2) {
    // const avatarUrl = conversation.avatarMember.slice(conversation.avatarMember.indexOf('http'), conversation.avatarMember.indexOf(', loai'))
    const avatarUrl = ''
    return (
      <Link
        to={`/${conversationId}`}
        className={`hover:bg-stone-400 relative flex items-stretch gap-2 py-2 px-5 transition duration-300 ${
          conversationId === id ? "bg-stone-500" : ""
        }  ${
          conversation?.seen && !conversation?.seen.includes("" + currentUser?.id) ? "bg-blue-500" : ""
        }`}
      >
        <img
          className="h-12 w-12 flex-shrink-0 rounded-full object-cover"
          src={!!avatarUrl ? IMAGE_PROXY(avatarUrl) : DEFAULT_AVATAR}
          alt=""
        />
        <div className="flex flex-grow flex-col justify-center gap-1 py-1">
          <p className="max-w-[240px] flex-grow overflow-hidden text-ellipsis whitespace-nowrap">
            {conversation.nameMember.find(__ => __ !== currentUser?.ten)}
          </p>
          <p className="max-w-[240px] flex-grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-600">
            {lastMessage?.message}
          </p>
        </div>
        <div>
          {conversation?.seen && !conversation?.seen.includes("" + currentUser?.id) ? (
            <i className='bx bxs-bullseye'></i>
          ) : ""}
      </div>
      </Link>
    );
  }
    
  return (
    <Link
      to={`/${conversationId}`}
      className={`hover:bg-stone-400 relative flex items-stretch gap-2 py-2 px-5 transition duration-300 ${
        conversationId === id ? "bg-stone-500" : ""
      } ${
        conversation?.seen && !conversation?.seen.includes("" + currentUser?.id) ? "bg-blue-500" : ""
      }`}
    >
      <img
        className="h-12 w-12 flex-shrink-0 rounded-full object-cover"
        src={conversation.avatarMember}
        alt=""
      />
      <div className="flex flex-grow flex-col justify-center gap-1 py-1">
        <p className="max-w-[240px] flex-grow overflow-hidden text-ellipsis whitespace-nowrap">
          {conversation.nameGroup}
        </p>
        <p className="max-w-[240px] flex-grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-600">
          {lastMessage?.message}
        </p>
      </div>
      <div>
        {conversation?.seen && !conversation?.seen.includes("" + currentUser?.id) ? (
          <i className='bx bxs-bullseye'></i>
        ) : ""}
      </div>
    </Link>
  );
};

export default SelectConversation;
