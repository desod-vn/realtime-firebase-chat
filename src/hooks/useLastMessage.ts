import {
  collection,
  limitToLast,
  onSnapshot,
  orderBy,
  where,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../shared/firebase";
import { formatDate } from "../shared/utils";

let cache: { [key: string]: any } = {};

export const useLastMessage = (conversationId: string) => {
  const [data, setData] = useState<{
    lastMessageId: string | null;
    message: string;
  } | null>(cache[conversationId] || null);
  const [loading, setLoading] = useState(!data);
  const [error, setError] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "message"),
        where("idRoom", "==", conversationId),
        orderBy("timeStamp"),
        limitToLast(1)
      ),
      (snapshot) => {
        if (snapshot.empty) {
          setData({
            lastMessageId: null,
            message: "No message recently",
          });
          setLoading(false);
          setError(false);
          return;
        }
        const type = snapshot.docs?.[0]?.data()?.typeMessage;
        let response =
          type === "image"
            ? "An image"
            : type === "sticker"
            ? "A sticker"
            : type === "removed"
            ? "Message removed"
            : (snapshot.docs[0].data().content as string);

        const seconds = snapshot.docs[0]?.data()?.timeStamp?.seconds;
        const formattedDate = formatDate(seconds ? seconds * 1000 : Date.now());

        response =
          response.length > 30 - formattedDate.length
            ? `${response.slice(0, 30 - formattedDate.length)}...`
            : response;

        const result = `${response} • ${formattedDate}`;
        setData({
          lastMessageId: snapshot.docs?.[0]?.id,
          message: result,
        });
        cache[conversationId] = {
          lastMessageId: snapshot.docs?.[0]?.id,
          message: result,
        };
        setLoading(false);
        setError(false);
      },
      (err) => {
        console.log(err);
        setData(null);
        setLoading(false);
        setError(true);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [conversationId]);

  return { data, loading, error };
};
