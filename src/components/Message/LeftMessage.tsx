import { ConversationInfo, MessageItem } from "../../shared/types";
import { FC, Fragment, useState } from "react";
import {
  formatDate,
  splitLinkFromMessage,
} from "../../shared/utils";

import AvatarFromId from "../Chat/AvatarFromId";
import ClickAwayListener from "../ClickAwayListener";
import { EMOJI_REGEX } from "../../shared/constants";
import ImageView from "../ImageView";
import ReactionPopup from "../Chat/ReactionPopup";
import ReactionStatus from "../Chat/ReactionStatus";
import SpriteRenderer from "../SpriteRenderer";
import { useStore } from "../../store";

interface LeftMessageProps {
  message: MessageItem;
  conversation: ConversationInfo;
  index: number;
  docs: any[];
  replyInfo: any;
  setReplyInfo: (value: any) => void;
}

const LeftMessage: FC<LeftMessageProps> = ({
  message,
  conversation,
  index,
  docs,
  setReplyInfo,
}) => {
  const [isSelectReactionOpened, setIsSelectReactionOpened] = useState(false);
  const currentUser = useStore((state) => state.currentUser);

  const [isImageViewOpened, setIsImageViewOpened] = useState(false);

  const formattedDate = formatDate(
    message.timeStamp.seconds ? message.timeStamp.seconds * 1000 : Date.now()
  );

  return (
    <div id={`message-${message.id}`}>
      <div
        className={`group relative flex items-stretch gap-2 px-8 ${
          Object.keys(message?.reactions || {}).length > 0 ? "mb-2" : ""
        }`}
      >
        {conversation.idMember.length > 2 && (
          <div onClick={(e) => e.stopPropagation()} className="h-full py-1">
            <div className="h-[30px] w-[30px]">
              {docs[index - 1]?.data()?.sender !== message.author && (
                <AvatarFromId uid={message.author} />
              )}
            </div>
          </div>
        )}

        {message.typeMessage === "text" ? (
          <>
            {EMOJI_REGEX.test(message.content) ? (
              <div
                onClick={(e) => e.stopPropagation()}
                title={formattedDate}
                className="text-4xl"
              >
                {message.content}
              </div>
            ) : (
              <div
                onClick={(e) => e.stopPropagation()}
                title={formattedDate}
                className={`bg-dark-lighten rounded-lg p-2 text-white ${
                  conversation.idMember.length === 2
                    ? "after:border-dark-lighten relative after:absolute after:right-full after:bottom-[6px] after:border-8 after:border-t-transparent after:border-l-transparent"
                    : ""
                }`}
              >
                {splitLinkFromMessage(message.content).map((item, index) => (
                  <Fragment key={index}>
                    {typeof item === "string" ? (
                      <span>{item}</span>
                    ) : (
                      <a
                        className="mx-1 inline underline"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.link}
                      </a>
                    )}
                  </Fragment>
                ))}
              </div>
            )}
          </>
        ) : message.typeMessage === "image" ? (
          <>
            <img
              onClick={(e) => {
                setIsImageViewOpened(true);
                e.stopPropagation();
              }}
              title={formattedDate}
              className="max-w-[60%] cursor-pointer transition duration-300 hover:brightness-[85%]"
              src={message.content}
              alt=""
            />
            <ImageView
              src={message.content}
              isOpened={isImageViewOpened}
              setIsOpened={setIsImageViewOpened}
            />
          </>
        ) : message.typeMessage === "sticker" ? (
          <SpriteRenderer
            onClick={(e) => e.stopPropagation()}
            title={formattedDate}
            src={message.content}
            size={130}
          />
        ) : (
          <div
            onClick={(e) => e.stopPropagation()}
            title={formattedDate}
            className="border-dark-lighten rounded-lg border p-3 text-gray-400"
          >
            Tin nhắn đã được thu hồi
          </div>
        )}

        {message.typeMessage !== "removed" && (
          <>
            <button
              onClick={() => setIsSelectReactionOpened(true)}
              className="text-lg text-gray-500 opacity-0 transition hover:text-gray-300 group-hover:opacity-100"
            >
              <i className="bx bx-smile"></i>
            </button>

            {isSelectReactionOpened && (
              <ClickAwayListener
                onClickAway={() => setIsSelectReactionOpened(false)}
              >
                {(ref) => (
                  <ReactionPopup
                    position={"left"}
                    forwardedRef={ref}
                    setIsOpened={setIsSelectReactionOpened}
                    messageId={message.id as string}
                    currentReaction={
                      message?.reactions?.[currentUser?.uid as string] || 0
                    }
                  />
                )}
              </ClickAwayListener>
            )}
          </>
        )}
        {Object.keys(message.reactions || {}).length > 0 && (
          <ReactionStatus
            message={message}
            position={conversation.idMember.length > 2 ? "left-tab" : "left"}
          />
        )}
      </div>
    </div>
  );
};

export default LeftMessage;