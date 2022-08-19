import { FC, useEffect, useState } from "react";

import ChatHeader from "../components/Chat/ChatHeader";
import ChatView from "../components/Chat/ChatView";
import { ConversationInfo } from "../shared/types";
import InputSection from "../components/Input/InputSection";
import SideBar from "../components/Home/SideBar";
import { db } from "../shared/firebase";
import { doc } from "firebase/firestore";
import { useDocumentQuery } from "../hooks/useDocumentQuery";
import { useParams } from "react-router-dom";
import { useStore } from "../store";

const Chat: FC = () => {
  const { id } = useParams();

  const { data, loading, error } = useDocumentQuery(
    `room-${id}`,
    doc(db, "room", id as string)
  );

  const conversation = data?.data() as ConversationInfo;
  const currentUser = useStore((state) => state.currentUser);
  const [inputSectionOffset, setInputSectionOffset] = useState(0);
  const [replyInfo, setReplyInfo] = useState(null);
  const [tagUser, setTagUser] = useState(['']);
  const [tagShow, setTagShow] = useState(null);

  const handleToggle = (uid: string) => {
    if (tagUser.includes(uid)) {
      setTagUser(tagUser.filter((item) => item !== uid));
    } else {
      setTagUser([...tagUser, uid]);
    }
  };

  useEffect(() => {
    if (tagShow == false) {
      setTagUser([''])
    }
  }, [tagShow])

  return (
    <div className="flex">
      <SideBar />
      <div className="flex h-screen flex-grow flex-col items-stretch">
        {loading ? (
          <>
            <div className="border-dark-lighten h-20 border-b"></div>
            <div className="flex-grow"></div>
          </>
        ) : !conversation ||
          error ||
          !conversation.idMember.includes(currentUser?.id.toString()) ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-6">
              <img className="h-32 w-32 object-cover" src="/error.svg" alt="" />
              <p className="text-center text-lg">Không tìm thấy cuộc trò chuyện</p>
            </div>
          ) : (
            <>
              <ChatHeader conversation={conversation} />
              <ChatView
                replyInfo={replyInfo}
                setReplyInfo={setReplyInfo}
                inputSectionOffset={inputSectionOffset}
                conversation={conversation}
              />
              <div style={{visibility: (tagShow ?  'visible' : 'hidden'), height: '160px', overflow: 'auto'}} className="m-2">
                {conversation.nameMember.map((__ : string, key: number) => 
                  <div
                    key={key}
                    onClick={() => handleToggle(__)}
                    className="hover:bg-stone-400 flex cursor-pointer items-center gap-2 px-5 py-2 transition"
                  >
                    <input
                      className="flex-shrink-0 cursor-pointer"
                      type="checkbox"
                      checked={tagUser.includes(__)}
                      readOnly
                    />
                    <p>{__}</p>
                  </div>
                )}
              </div>
              <InputSection
                setInputSectionOffset={setInputSectionOffset}
                replyInfo={replyInfo}
                setTagShow={setTagShow}
                tagUser={tagUser}
                setReplyInfo={setReplyInfo}
                conversation={conversation} 
                disabled={false}
              />
            </>
          )}
      </div>
    </div>
  );
};

export default Chat;
