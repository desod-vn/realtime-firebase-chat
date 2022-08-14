import { FC, useState } from "react";
import { IMAGE_PROXY, REACTIONS_UI } from "../../shared/constants";

import { MessageItem } from "../../shared/types";
import Spin from "react-cssfx-loading/src/Spin";

interface ReactionStatusProps {
  position: "left" | "right" | "left-tab";
  message: MessageItem;
}

const ReactionStatus: FC<ReactionStatusProps> = ({ message, position }) => {

  return (
    <>
      <div
        className={`bg-white border-white absolute top-full flex -translate-y-1/2 cursor-pointer items-center gap-[2px] rounded-lg border px-2 text-sm ${
          position === "right"
            ? "right-8"
            : position === "left-tab"
            ? "left-[70px]"
            : "left-8"
        }`}
      >
        {Object.entries(
          Object.entries(message?.reactions).reduce((acc : any, [key, value]) => {
            if (value) acc[value] = (acc[value] || 0) + 1;
            return acc;
          }, {} as { [key: number]: number })
        )
          .sort(([key1, value1], [key2, value2]) => value1 - value2)
          .slice(0, 3)
          .map(([key, value]) => (
            <img
              key={key}
              className="h-3 w-3"
              src={Object.entries(REACTIONS_UI)[Number(key) - 1][1].icon}
              alt=""
            />
          ))}

        <span>
          {
            Object.entries(message.reactions).filter(([key, value]) => value)
              .length
          }
        </span>
      </div>
    </>
  );
};

export default ReactionStatus;
