import { FC, Fragment, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import {
  formatDate,
  splitLinkFromMessage,
} from "../../shared/utils";

import { EMOJI_REGEX } from "../../shared/constants";
import FileIcon from "../FileIcon";
import ImageView from "../ImageView";
import { MessageItem } from "../../shared/types";
import SpriteRenderer from "../SpriteRenderer";
import { db } from "../../shared/firebase";
import { useParams } from "react-router-dom";

interface RightMessageProps {
  message: MessageItem;
  replyInfo: any;
  setReplyInfo: (value: any) => void;
}

const RightMessage: FC<RightMessageProps> = ({ message, setReplyInfo }) => {
  const [isSelectReactionOpened, setIsSelectReactionOpened] = useState(false);

  const { id: conversationId } = useParams();

  const [isImageViewOpened, setIsImageViewOpened] = useState(false);

  const removeMessage = (messageId: string) => {
    updateDoc(
      doc(db, "message", conversationId as string, "messages", messageId),
      {
        type: "removed",
        file: null,
        content: "",
        reactions: [],
      }
    );
  };

  const formattedDate = formatDate(
    message.timeStamp?.seconds ? message.timeStamp?.seconds * 1000 : Date.now()
  );

  return (
    <div id={`message-${message.id}`}>
      <div
        onClick={(e) => {
          if (e.detail === 2 && message.typeMessage !== "removed") {
            setReplyInfo(message);
          }
        }}
        className={`group relative flex flex-row-reverse items-stretch gap-2 px-8`}
      >
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
                className={`bg-primary after:border-primary relative rounded-lg p-2 text-white after:absolute after:left-full after:bottom-[6px] after:border-8 after:border-t-transparent after:border-r-transparent`}
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
        ) : message.typeMessage === "file" ? (
          <div
            onClick={(e) => e.stopPropagation()}
            title={formattedDate}
            className="bg-dark-lighten flex items-center gap-2 overflow-hidden rounded-lg py-3 px-5"
          >
            <FileIcon
              className="h-4 w-4 object-cover"
              extension={message.nameFile?.split(".").slice(-1)[0] as string}
            />
            <div>
              <p className="max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                {message.nameFile}
              </p>

            </div>

            <a
              href={message.content}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxs-download text-2xl"></i>
            </a>
          </div>
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

        {message.typeMessage !== "removed" && (
          <>
            <button
              onClick={(e) => {
                removeMessage(message.id as string);
                e.stopPropagation();
              }}
              className="text-lg text-gray-500 opacity-0 transition hover:text-gray-300 group-hover:opacity-100"
            >
              <i className="bx bxs-trash"></i>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default RightMessage;
