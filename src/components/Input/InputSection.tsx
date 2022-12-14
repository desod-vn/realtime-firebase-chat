import {
  ChangeEvent,
  ClipboardEventHandler,
  FC,
  FormEvent,
  Suspense,
  lazy,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage, handlePushNotify } from "../../shared/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ConversationInfo } from "../../shared/types";
import Alert from "../Alert";
import ClickAwayListener from "../ClickAwayListener";
import { EMOJI_REPLACEMENT } from "../../shared/constants";
import ReplyIcon from "../Icon/ReplyIcon";
import Spin from "react-cssfx-loading/src/Spin";
import StickerIcon from "../Icon/StickerIcon";
import StickerPicker from "./StickerPicker";
import { formatFileName } from "../../shared/utils";
import { useParams } from "react-router-dom";
import { useStore } from "../../store";

const Picker = lazy(() => import("./EmojiPicker"));

interface InputSectionProps {
  disabled: boolean;
  setInputSectionOffset?: (value: number) => void;
  replyInfo?: any;
  tagUser?: any;
  setReplyInfo?: (value: any) => void;
  setTagShow?: (value: any) => void;
  conversation: ConversationInfo
}

const InputSection: FC<InputSectionProps> = ({
  disabled,
  setInputSectionOffset,
  replyInfo,
  tagUser,
  setReplyInfo,
  setTagShow,
  conversation
}) => {
  const [inputValue, setInputValue] = useState("");
  const [fileUploading, setFileUploading] = useState(false);
  const [previewFiles, setPreviewFiles] = useState<string[]>([]);
  const [isStickerPickerOpened, setIsStickerPickerOpened] = useState(false);
  const [isIconPickerOpened, setIsIconPickerOpened] = useState(false);
  const [isAlertOpened, setIsAlertOpened] = useState(false);
  const [alertText, setAlertText] = useState("");
  const { id: conversationId } = useParams();
  const currentUser = useStore((state) => state.currentUser);
  const textInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [fileDragging, setFileDragging] = useState(false);

 
  const updateTimestamp = () => {
    updateDoc(
      doc(db, "room", conversationId as string),
      {
        seen: ["" + currentUser?.id],
        timestamp: serverTimestamp(),
    });
  };

  useEffect(() => {
    const handler = () => {
      textInputRef.current?.focus();
    };
    window.addEventListener("focus", handler);
    return () => window.removeEventListener("focus", handler);
  }, []);

  useEffect(() => {
    textInputRef.current?.focus();
  }, [conversationId]);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (previewFiles.length > 0) {
      setPreviewFiles([]);
      for (let i = 0; i < previewFiles.length; i++) {
        const url = previewFiles[i];
        const res = await fetch(url);
        const blob = await res.blob();
        const file = new File([blob], "image.png", {
          type: res.headers.get("content-type") as string,
        });
        await uploadFile(file);
      }
    } else {
      if (fileUploading) return;
    }

    if (!inputValue.trim()) return;

    setInputValue("");

    let replacedInputValue = ` ${inputValue} `;

    Object.entries(EMOJI_REPLACEMENT).map(([key, value]) => {
      value.forEach((item) => {
        replacedInputValue = replacedInputValue
          .split(` ${item} `)
          .join(` ${key} `);
      });
    });


    await addDoc(
      collection(db, "message"),
      {
        idRoom: conversationId,
        author: "" + currentUser?.id,
        content: replacedInputValue.trim(),
        typeMessage: "text",
        timestamp: serverTimestamp(),
        nameFile: '',
        replyTo: replyInfo?.id || '',
      }
    );

    setReplyInfo && setReplyInfo(null);

    updateTimestamp();
    if(!!conversation.userPing && conversation.userPing.length) {
      conversation.userPing.map((item : string) => handlePushNotify(currentUser?.ten + ': ' + replacedInputValue.trim(), item, conversationId as string))
    }
  };

  const sendSticker = (url: string) => {
    addDoc(
      collection(db, "message"),
      {
        idRoom: conversationId,
        author: "" + currentUser?.id,
        content: url,
        typeMessage: "sticker",
        timestamp: serverTimestamp(),
        nameFile: ''
      }
    );

    updateTimestamp();
  };

  const uploadFile = async (file: File) => {
    try {
      const TWENTY_MB = 1024 * 1024 * 20;

      if (file.size > TWENTY_MB) {
        setAlertText("K??ch th?????c ???nh t???i ??a l?? 20MB");
        setIsAlertOpened(true);
        return;
      }

      setFileUploading(true);

      const fileReference = ref(storage, formatFileName(file.name));

      await uploadBytes(fileReference, file);

      const downloadURL = await getDownloadURL(fileReference);

      addDoc(
        collection(db, "message"),
        {
          idRoom: conversationId,
          author: "" + currentUser?.id,
          content: downloadURL,
          typeMessage: "image",
          timestamp: serverTimestamp(),
          nameFile: file.name
        },
      );

      setFileUploading(false);
      updateTimestamp();
    } catch (error) {
      console.log(error);
      setFileUploading(false);
    }
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    uploadFile(file);
  };

  const addIconToInput = (value: string) => {
    const start = textInputRef.current?.selectionStart as number;
    const end = textInputRef.current?.selectionEnd as number;
    const splitted = inputValue.split("");
    splitted.splice(start, end - start, value);
    setInputValue(splitted.join(""));
  };

  useEffect(() => {
    if (inputValue.lastIndexOf('@') > - 1 && (inputValue.lastIndexOf('@') == inputValue.length - 1)) {
      setTagShow && setTagShow(true)
    } else {
      setTagShow && setTagShow(false)
    }
  }, [inputValue])

  const handleReplaceEmoji = (e: any) => {
    if (e.key === " ") {
      if (e.target.selectionStart !== e.target.selectionEnd) return;

      const lastWord = inputValue
        .slice(0, e.target.selectionStart)
        .split(" ")
        .slice(-1)[0];

      if (lastWord.length === 0) return;

      Object.entries(EMOJI_REPLACEMENT).map(([key, value]) => {
        value.forEach((item) => {
          if (item === lastWord) {
            const splitted = inputValue.split("");
            splitted.splice(
              e.target.selectionStart - lastWord.length,
              lastWord.length,
              key
            );
            setInputValue(splitted.join(""));
          }
        });
      });
    }
  };

  useEffect(() => {
    if (tagUser.length > 1) {
      setInputValue(inputValue + tagUser.find((__ : string) => __ != '') + ' ')
      setTagShow && setTagShow(false);
    }
  }, [tagUser])

  useEffect(() => {
    if (!setInputSectionOffset) return;
    if (previewFiles.length > 0) return setInputSectionOffset(128);

    if (!!replyInfo) return setInputSectionOffset(76);

    setInputSectionOffset(0);
  }, [previewFiles.length, replyInfo]);

  const handlePaste: ClipboardEventHandler<HTMLInputElement> = (e) => {
    const file = e?.clipboardData?.files?.[0];
    if (!file || !file.type.startsWith("image")) return;

    const url = URL.createObjectURL(file);

    setPreviewFiles([...previewFiles, url]);
  };

  useEffect(() => {
    const dragBlurHandler = (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      setFileDragging(false);
    };

    const dragFocusHandler = (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      setFileDragging(true);
    };

    const dropFileHandler = async (e: any) => {
      e.preventDefault();
      e.stopPropagation();

      setFileDragging(false);

      let items = e.dataTransfer.items;
      let files = e.dataTransfer.files;

      let selectedFiles = [];

      for (let i = 0, item; (item = items[i]); ++i) {
        let entry = item.webkitGetAsEntry();
        if (entry.isFile) {
          selectedFiles.push(files[i]);
        }
      }

      for (let i = 0; i < selectedFiles.length; i++) {
        await uploadFile(selectedFiles[i]);
      }
    };

    addEventListener("dragenter", dragFocusHandler);
    addEventListener("dragover", dragFocusHandler);
    addEventListener("dragleave", dragBlurHandler);
    addEventListener("drop", dropFileHandler);

    return () => {
      removeEventListener("dragenter", dragFocusHandler);
      removeEventListener("dragover", dragFocusHandler);
      removeEventListener("dragleave", dragBlurHandler);
      removeEventListener("drop", dropFileHandler);
    };
  }, []);

  return (
    <>
      {fileDragging && (
        <div className="pointer-events-none fixed top-0 left-0 z-20 flex h-full w-full select-none items-center justify-center backdrop-blur-sm">
          <h1 className="text-3xl">Th??? file ????? g???i</h1>
        </div>
      )}
      {previewFiles.length > 0 && (
        <div className="border-dark-lighten flex h-32 items-center gap-2 border-t px-4">
          {previewFiles.map((preview) => (
            <div key={preview} className="relative">
              <img className="h-28 w-28 object-cover" src={preview} alt="" />
              <button
                onClick={() =>
                  setPreviewFiles(
                    previewFiles.filter((item) => item !== preview)
                  )
                }
                className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-100"
              >
                <i className="bx bx-x text-dark text-lg"></i>
              </button>
            </div>
          ))}
        </div>
      )}
      {previewFiles.length === 0 && !!replyInfo && (
        <div className="border-dark-lighten flex h-[76px] justify-between border-t p-4">
          <div>
            <div className="flex items-center gap-2">
              <ReplyIcon />
              <p>
                Tr??? l???i tin nh???n
                {currentUser?.id === replyInfo.author ? " c???a ch??nh b???n" : ""}
              </p>
            </div>
            {replyInfo.typeMessage === "text" ? (
              <p className="max-w-[calc(100vw-65px)] overflow-hidden text-ellipsis whitespace-nowrap md:max-w-[calc(100vw-420px)]">
                {replyInfo.content}
              </p>
            ) : replyInfo.typeMessage === "image" ? (
              "H??nh ???nh"
            ) : replyInfo.typeMessage === "sticker" ? (
              "Sticker"
            ) : (
              "Tin nh???n ???? ???????c thu h???i"
            )}
          </div>

          <button onClick={() => setReplyInfo && setReplyInfo(null)}>
            <i className="bx bx-x text-3xl"></i>
          </button>
        </div>
      )}
      <div
        className={`border-dark-lighten flex h-16 items-stretch gap-1 border-t px-4 ${
          disabled ? "pointer-events-none select-none" : ""
        }`}
      >
        <button
          onClick={() => imageInputRef.current?.click()}
          className="text-primary flex flex-shrink-0 items-center text-2xl"
        >
          <i className="bx bxs-image-add"></i>
        </button>
        <input
          ref={imageInputRef}
          hidden
          className="hidden"
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
        />
        <div className="relative flex flex-shrink-0 items-center">
          {isStickerPickerOpened && (
            <StickerPicker
              setIsOpened={setIsStickerPickerOpened}
              onSelect={sendSticker}
            />
          )}

          <button
            onClick={() => setIsStickerPickerOpened(true)}
            className="flex items-center"
          >
            <StickerIcon />
          </button>
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="flex flex-grow items-stretch gap-1"
        >
          <div className="relative flex flex-grow items-center">
            <input
              maxLength={1000}
              disabled={disabled}
              ref={textInputRef}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              onKeyDown={handleReplaceEmoji}
              onPaste={handlePaste}
              className="h-9 w-full rounded-full pl-3 pr-10 outline-none"
              type="text"
              placeholder="Message..."
            />
            <button
              type="button"
              onClick={() => setIsIconPickerOpened(true)}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              <i className="bx bxs-smile text-primary text-2xl"></i>
            </button>

            {isIconPickerOpened && (
              <ClickAwayListener
                onClickAway={() => setIsIconPickerOpened(false)}
              >
                {(ref) => (
                  <div ref={ref} className="absolute bottom-full right-0">
                    <Suspense
                      fallback={
                        <div className="flex h-[357px] w-[348px] items-center justify-center rounded-lg border-2 border-[#555453] bg-[#222222]">
                          <Spin />
                        </div>
                      }
                    >
                      <Picker
                        onSelect={(emoji: any) => addIconToInput(emoji.native)}
                      />
                    </Suspense>
                  </div>
                )}
              </ClickAwayListener>
            )}
          </div>
          {fileUploading ? (
            <div className="ml-1 flex items-center">
              <Spin width="24px" height="24px" color="#0D90F3" />
            </div>
          ) : (
            <button className="text-primary flex flex-shrink-0 items-center text-2xl">
              <i className="bx bxs-send"></i>
            </button>
          )}
        </form>
      </div>

      <Alert
        isOpened={isAlertOpened}
        setIsOpened={setIsAlertOpened}
        text={alertText}
        isError
      />
    </>
  );
};

export default InputSection;