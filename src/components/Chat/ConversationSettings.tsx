import { ChangeEvent, FC, FormEvent, useRef, useState, useEffect } from "react";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db, storage } from "../../shared/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useNavigate, useParams } from "react-router-dom";
import Alert from "../Alert";
import { DEFAULT_AVATAR } from "../../shared/constants";
import { ConversationInfo } from "../../shared/types";
import { formatFileName } from "../../shared/utils";
import { useStore } from "../../store";
import { BACKEND_API } from "../../shared/configs";

interface ConversationConfigProps {
  conversation: ConversationInfo;
  setIsOpened: (value: boolean) => void;
  setMediaViewOpened: (value: boolean) => void;
}

const ConversationSettings: FC<ConversationConfigProps> = ({
  conversation,
  setIsOpened,
  setMediaViewOpened,
}) => {
  const { id: conversationId } = useParams();
  const currentUser = useStore((state) => state.currentUser);
  const navigate = useNavigate();
  const [isChangeChatNameOpened, setIsChangeChatNameOpened] = useState(false);
  const [chatNameInputValue, setChatNameInputValue] = useState(conversation?.nameGroup || "");
  const [isAddMemberOpened, setIsAddMemberOpened] = useState(false);
  const [isAlertOpened, setIsAlertOpened] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selected, setSelected] = useState(conversation?.idMember.map(__ => parseInt(__)));
  const [filter, setFilter] = useState('');

  const handleToggle = (uid: number) => {
    if (selected.includes(uid)) {
      setSelected(selected.filter((item) => item !== uid));
    } else {
      setSelected([...selected, uid]);
    }
    setFilter('');
  };

  useEffect(() => {
    fetch(BACKEND_API + '/NhanVien/GetAllNguoiDung?PageSize=100000&PageIndex=1', 
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + currentUser?.token
      },
      
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        setUsers(data.data.data);
      }
    })
    .catch((error) => console.log(error));
  }, []);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!chatNameInputValue.trim()) return;
    setIsOpened(false);
    updateDoc(doc(db, "room", conversationId as string), {
      "nameGroup": chatNameInputValue.trim(),
    });
  };

  const handleChangeMember = () => {
    const sorted = [...selected, currentUser?.id].sort();
    const uniqueSort = new Set(sorted);
    const sortedUser = [...uniqueSort].map(__ => {
      const findUser = users?.find((user : any) => user?.idNguoiDung == __)
        return {
          id: "" + findUser?.idNguoiDung,
          name: findUser?.tenNguoiDung,
          avatar: findUser?.strNguoiDungAnhDinhKem || null
        }
    })
    setIsOpened(false);
    updateDoc(doc(db, "room", conversationId as string), {
      "idMember": sortedUser.map((__ : any) => "" + __.id),
      "nameMember": sortedUser.map((__ : any) => __.name),
      "listAvatarMember": sortedUser.map((__ : any) => __.avatar),
      "userPing": []
    });
  };

  const handleFileInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image")) {
      setAlertText("File v???a ch???n kh??ng ph???i ???nh");
      setIsAlertOpened(true);
      return;
    }
    const FIVE_MB = 1024 * 1024 * 5;
    if (file.size > FIVE_MB) {
      setAlertText("K??ch c??? ???nh t???i ??a l?? 5MB");
      setIsAlertOpened(true);
      return;
    }
    const fileReference = ref(storage, formatFileName(file.name));
    await uploadBytes(fileReference, file);
    const downloadURL = await getDownloadURL(fileReference);
    setIsOpened(false);
    updateDoc(doc(db, "room", conversationId as string), {
      "avatarMember": downloadURL,
    });
  };

  const removeGroup = () => {
    if (conversation?.hostId == "" + currentUser?.id) {
      deleteDoc(doc(db, "room", conversationId as string));
      navigate("/");
    }
  };

  const leaveGroup = () => {
    const pingUser = localStorage.getItem('pingToken') || null;

    updateDoc(doc(db, "room", conversationId as string), {
      "idMember": conversation?.idMember.filter((__ : any) => __ != "" + currentUser?.id),
      "nameMember": conversation?.idMember.filter((__ : any) => __ != currentUser?.ten),
      "listAvatarMember": conversation?.idMember.filter((__ : any) => __ != currentUser?.nguoiDung_AnhDinhKem[0].url),
      "userPing": !!pingUser ? conversation?.userPing?.filter((__ : any) => __ != pingUser) : conversation.userPing,
    });
    navigate("/");
  };

  return (
    <div
      onClick={() => setIsOpened(false)}
      className={`animate-fade-in fixed top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-[#00000080] transition-all duration-300`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-stone-300 mx-2 w-full max-w-[500px] rounded-lg"
      >
        <div className="border-dark-lighten flex items-center justify-between border-b py-3 px-3">
          <div className="flex-1"></div>
          <div className="flex flex-1 items-center justify-center">
            <h1 className="whitespace-nowrap text-center text-2xl">
              C??i ?????t cu???c tr?? chuy???n
            </h1>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <button
              onClick={() => setIsOpened(false)}
              className="bg-stone-400 flex h-8 w-8 items-center justify-center rounded-full"
            >
              <i className="bx bx-x text-2xl"></i>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-stretch p-3">
          {conversation?.idMember.length > 2 && (
            <>
              <button
                onClick={() => setIsChangeChatNameOpened((prev) => !prev)}
                className="bg-stone-300 flex items-center justify-between gap-3 rounded-lg px-3 py-2 transition duration-300 hover:brightness-125"
              >
                <div className="flex items-center gap-3">
                  <i className="bx bx-edit-alt text-2xl"></i>
                  <span>?????i t??n cu???c tr?? chuy???n</span>
                </div>

                <i
                  className={`bx bx-chevron-down text-3xl ${
                    isChangeChatNameOpened ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              {isChangeChatNameOpened && (
                <form onSubmit={handleFormSubmit} className="my-2 flex gap-3">
                  <div className="flex-grow">
                    <input
                      value={chatNameInputValue}
                      onChange={(e) => setChatNameInputValue(e.target.value)}
                      className="border-dark-lighten bg-stone-300 h-full w-full rounded-lg border p-2 outline-none transition duration-300 focus:border-gray-500"
                      type="text"
                      placeholder="T??n cu???c tr?? chuy???n"
                    />
                  </div>
                  <button className="bg-primary flex-shrink-0 rounded px-3 transition duration-300 hover:brightness-110">
                    Thay ?????i
                  </button>
                </form>
              )}

              <button
                onClick={() => setIsAddMemberOpened((prev) => !prev)}
                className="bg-stone-300 flex items-center gap-3 rounded-lg px-3 py-2 transition duration-300 hover:brightness-125"
              >
                <i className="bx bxs-group text-2xl"></i>
                <span>Th??nh vi??n cu???c tr?? chuy???n</span>
              </button>

              {isAddMemberOpened && (
                <div>
                  <div className="flex justify-between w-full items-center">
                    <input
                      type="text"
                      value={filter}
                      className="p-2 text-dark outline-none rounded m-5"
                      placeholder="T??n ng?????i d??ng" 
                      onChange={(e) => setFilter(e.target.value)}
                    />
                    <button 
                      disabled={selected.length <= 2}
                      onClick={() => handleChangeMember()}
                      className="bg-stone-400 rounded-lg py-2 px-3 transition duration-300 hover:brightness-125 disabled:!brightness-[80%]"  
                    >
                      C???p nh???t
                    </button>
                  </div>
                  <div className="mx-5 bg-neutral-400 h-40 p-2 overflow-y-auto">
                    {
                      selected.map(__ => {
                        const findUser = users.find((user : any) => user?.idNguoiDung == __);
                        return (<div className="flex items-center mb-2">
                          <img
                            className="h-8 w-8 flex-shrink-0 rounded-full object-cover mr-2"
                            src={findUser?.strNguoiDungAnhDinhKem || DEFAULT_AVATAR}
                            alt=""
                            />
                            { findUser.tenNguoiDung }
                        </div>
                      )})
                    }
                  </div>
                <div className="flex h-72 w-full flex-col items-stretch gap-2 overflow-y-auto py-2">
                  {users && users
                    .filter((__ : any) => __.idNguoiDung !== currentUser?.id && __?.tenNguoiDung.toLowerCase().includes(filter.toLowerCase()))
                    .map(((__: any, index : number) => (
                      <div
                        key={index}
                        onClick={() => handleToggle(__?.idNguoiDung)}
                        className="hover:bg-stone-400 flex cursor-pointer items-center gap-2 px-5 py-2 transition"
                      >
                        <input
                          className="flex-shrink-0 cursor-pointer"
                          type="checkbox"
                          checked={selected.includes( __?.idNguoiDung)}
                          readOnly
                        />
                        <img
                          className="h-8 w-8 flex-shrink-0 rounded-full object-cover"
                          src={__?.strNguoiDungAnhDinhKem || DEFAULT_AVATAR}
                          alt=""
                        />
                        <p>{__?.tenNguoiDung}</p>
                      </div>)
                    ))}
                </div>
              </div>)}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-stone-300 flex items-center gap-3 rounded-lg px-3 py-2 transition duration-300 hover:brightness-125"
              >
                <i className="bx bx-image-alt text-2xl"></i>
                <span>?????i ???nh nh??m</span>
              </button>

              <input
                hidden
                className="hidden"
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
              />

              <Alert
                isOpened={isAlertOpened}
                setIsOpened={setIsAlertOpened}
                text={alertText}
                isError
              />
            </>
          )}

          {conversation?.idMember.length > 2 && (
            <button
              onClick={() => leaveGroup()}
              className="bg-stone-300 flex items-center justify-between gap-3 rounded-lg px-3 py-2 transition duration-300 hover:brightness-125"
            >
              <div className="flex items-center gap-3">
                <i className="bx bx-log-out text-2xl"></i>
                <span>R???i cu???c tr?? chuy???n</span>
              </div>
            </button>
          )}
          {conversation?.hostId == "" + currentUser?.id && (
            <button
              onClick={() => removeGroup()}
              className="bg-stone-300 flex items-center justify-between gap-3 rounded-lg px-3 py-2 transition duration-300 hover:brightness-125"
            >
              <div className="flex items-center gap-3">
                <i className="bx bx-x text-2xl"></i>
                <span>X??a cu???c tr?? chuy???n</span>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversationSettings;
