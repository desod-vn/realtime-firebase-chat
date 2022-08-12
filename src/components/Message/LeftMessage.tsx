import { ConversationInfo, MessageItem } from "../../shared/types";
import { FC, Fragment, useState } from "react";
import {
  formatDate,
  formatFileSize,
  splitLinkFromMessage,
} from "../../shared/utils";

import AvatarFromId from "../Chat/AvatarFromId";
import ClickAwayListener from "../ClickAwayListener";
import { EMOJI_REGEX } from "../../shared/constants";
import FileIcon from "../FileIcon";
import ImageView from "../ImageView";
import ReactionPopup from "../Chat/ReactionPopup";
import ReactionStatus from "../Chat/ReactionStatus";
import ReplyBadge from "../Chat/ReplyBadge";
import ReplyIcon from "../Icon/ReplyIcon";
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
  const [isImageViewOpened, setIsImageViewOpened] = useState(false);

  const formattedDate = formatDate(
    message.timeStamp.seconds ? message.timeStamp.seconds * 1000 : Date.now()
  );

  return (
    <div id={`message-${message.id}`}>
      <div
        className={`group relative flex items-stretch gap-2 px-8`}
      >
        {conversation.idMember.length > 2 && (
          <div onClick={(e) => e.stopPropagation()} className="h-full py-1">
            <div className="h-[30px] w-[30px]">
              {docs[index - 1]?.data()?.author !== message.author && (
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
            Message has been removed
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftMessage;
