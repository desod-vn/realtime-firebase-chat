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
  const [chatNameInputValue, setChatNameInputValue] = useState(conversation?.groupName || "");
  const [isAddMemberOpened, setIsAddMemberOpened] = useState(false);
  const [isAlertOpened, setIsAlertOpened] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [users, setUsers] = useState([]);
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
    fetch('http://103.176.179.201:8013/api/NhanVien/GetAllNguoiDung?PageSize=100000&PageIndex=1', 
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
        setUsers(data.data);
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
      const findUser = users?.data.find((user : any) => user?.idNguoiDung == __)
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
    });
  };

  const handleFileInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image")) {
      setAlertText("File vừa chọn không phải ảnh");
      setIsAlertOpened(true);
      return;
    }
    const FIVE_MB = 1024 * 1024 * 5;
    if (file.size > FIVE_MB) {
      setAlertText("Kích cỡ ảnh tối đa là 5MB");
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
    updateDoc(doc(db, "room", conversationId as string), {
      "idMember": conversation?.idMember.filter((__ : any) => __ != "" + currentUser?.id),
      "nameMember": conversation?.idMember.filter((__ : any) => __ != currentUser?.ten),
      "listAvatarMember": conversation?.idMember.filter((__ : any) => __ != currentUser?.nguoiDung_AnhDinhKem[0].url),
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
        className="bg-dark mx-2 w-full max-w-[500px] rounded-lg"
      >
        <div className="border-dark-lighten flex items-center justify-between border-b py-3 px-3">
          <div className="flex-1"></div>
          <div className="flex flex-1 items-center justify-center">
            <h1 className="whitespace-nowrap text-center text-2xl">
              Cài đăt cuộc trò chuyện
            </h1>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <button
              onClick={() => setIsOpened(false)}
              className="bg-dark-lighten flex h-8 w-8 items-center justify-center rounded-full"
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
                className="bg-dark flex items-center justify-between gap-3 rounded-lg px-3 py-2 transition duration-300 hover:brightness-125"
              >
                <div className="flex items-center gap-3">
                  <i className="bx bx-edit-alt text-2xl"></i>
                  <span>Đổi tên cuộc trò chuyện</span>
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
                      className="border-dark-lighten bg-dark h-full w-full rounded-lg border p-2 outline-none transition duration-300 focus:border-gray-500"
                      type="text"
                      placeholder="Chat name"
                    />
                  </div>
                  <button className="bg-primary flex-shrink-0 rounded px-3 transition duration-300 hover:brightness-110">
                    Thay đổi
                  </button>
                </form>
              )}

              <button
                onClick={() => setIsAddMemberOpened((prev) => !prev)}
                className="bg-dark flex items-center gap-3 rounded-lg px-3 py-2 transition duration-300 hover:brightness-125"
              >
                <i className="bx bxs-group text-2xl"></i>
                <span>Thành viên cuộc trò chuyện</span>
              </button>

              {isAddMemberOpened && (
                <div>
                  <div className="flex justify-between w-full items-center">
                    <input
                      type="text"
                      value={filter}
                      className="p-2 text-dark outline-none rounded m-5"
                      placeholder="Tên người dùng" 
                      onChange={(e) => setFilter(e.target.value)}
                    />
                    <button 
                      disabled={selected.length <= 2}
                      onClick={() => handleChangeMember()}
                      className="bg-dark-lighten rounded-lg py-2 px-3 transition duration-300 hover:brightness-125 disabled:!brightness-[80%]"  
                    >
                      Cập nhật
                    </button>
                  </div>
                  <div className="mx-5 bg-neutral-700 h-40 p-2 overflow-y-auto">
                    {
                      selected.map(__ => {
                        const findUser = users?.data.find((user : any) => user?.idNguoiDung == __);
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
                  {users?.data && users?.data
                    .filter((__ : object) => __.idNguoiDung !== currentUser?.id && __?.tenNguoiDung.toLowerCase().includes(filter.toLowerCase()))
                    .map(((__: object, index : number) => (
                      <div
                        key={index}
                        onClick={() => handleToggle(__?.idNguoiDung)}
                        className="hover:bg-dark-lighten flex cursor-pointer items-center gap-2 px-5 py-2 transition"
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
                className="bg-dark flex items-center gap-3 rounded-lg px-3 py-2 transition duration-300 hover:brightness-125"
              >
                <i className="bx bx-image-alt text-2xl"></i>
                <span>Đổi ảnh nhóm</span>
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
              className="bg-dark flex items-center justify-between gap-3 rounded-lg px-3 py-2 transition duration-300 hover:brightness-125"
            >
              <div className="flex items-center gap-3">
                <i className="bx bx-log-out text-2xl"></i>
                <span>Rời cuộc trò chuyện</span>
              </div>
            </button>
          )}
          {conversation?.hostId == "" + currentUser?.id && (
            <button
              onClick={() => removeGroup()}
              className="bg-dark flex items-center justify-between gap-3 rounded-lg px-3 py-2 transition duration-300 hover:brightness-125"
            >
              <div className="flex items-center gap-3">
                <i className="bx bx-x text-2xl"></i>
                <span>Xóa cuộc trò chuyện</span>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversationSettings;
