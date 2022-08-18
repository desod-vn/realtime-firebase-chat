import { FC, useState } from "react";

import Alert from "../Alert";
import { db } from "../../shared/firebase";
import { doc } from "firebase/firestore";
import { useDocumentQuery } from "../../hooks/useDocumentQuery";

interface ReplyBadgeProps {
  messageId: string;
}

const ReplyBadge: FC<ReplyBadgeProps> = ({ messageId }) => {
  const [isAlertOpened, setIsAlertOpened] = useState(false);

  const { data, loading, error } = useDocumentQuery(
    `message-${messageId}`,
    doc(db, "message", messageId as string)
  );

  if (loading || error)
    return <div className="h-10 w-20 rounded-lg bg-[#4E4F50]"></div>;

  return (
    <>
      <div
        onClick={() => {
          const el = document.querySelector(`#message-${messageId}`);
          if (el) el.scrollIntoView({ behavior: "smooth" });
          else setIsAlertOpened(true);
        }}
        className="cursor-pointer rounded-lg bg-[#4E4F50] p-2 opacity-60"
      >
        {data?.data()?.typeMessage === "text" ? (
          <p>{data?.data()?.content}</p>
        ) : data?.data()?.typeMessage === "image" ? (
          "Hình ảnh"
        ) : data?.data()?.tytypeMessagepe === "sticker" ? (
          "Sticker"
        ) : (
          "Tin nhắn đã được thu hồi"
        )}
      </div>
      <Alert
        isOpened={isAlertOpened}
        setIsOpened={setIsAlertOpened}
        text="Không thể tìm thấy tin nhắn. Vui lòng kéo lên để kiểm tra"
      />
    </>
  );
};

export default ReplyBadge;