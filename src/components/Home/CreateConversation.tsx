import { ChangeEvent, FC, useState, useEffect, useRef } from "react";
import { DEFAULT_AVATAR } from "../../shared/constants";
import Alert from "../Alert";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Spin from "react-cssfx-loading/src/Spin";
import { db, storage } from "../../shared/firebase";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store";
import { formatFileName } from "../../shared/utils";
import { BACKEND_API } from "../../shared/configs";

interface CreateConversationProps {
  setIsOpened: (value: boolean) => void;
}

const CreateConversation: FC<CreateConversationProps> = ({ setIsOpened }) => {
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
  
  const [users, setUsers] = useState<any[]>([]);
  const currentUser = useStore((state) => state.currentUser);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [isAlertOpened, setIsAlertOpened] = useState(false);
  const [alertText, setAlertText] = useState("");
  const navigate = useNavigate();
  const [image, setImage] = useState('');

  const handleToggle = (uid: string) => {
    if (selected.includes(uid)) {
      setSelected(selected.filter((item) => item !== uid));
    } else {
      setSelected([...selected, uid]);
    }
    setFilter('');
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
    setImage(downloadURL);
  };

  const handleCreateConversation = async () => {
    setIsCreating(true);

    const sorted = [...selected, currentUser?.id].sort();
    const sortedUser = sorted.map(__ => {
      const findUser = users.find((user : any) => user?.idNguoiDung == __)
      return {
        id: "" + findUser?.idNguoiDung,
        name: findUser?.tenNguoiDung,
        avatar: findUser?.strNguoiDungAnhDinhKem || null
      }
    })
    const q = query(
      collection(db, "room"),
      where("idMember", "==", sortedUser.map(__ => __.id))
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      const created = await addDoc(collection(db, "room"), {
        firstMessage: "",
        idMember: sortedUser.map(__ => __.id),
        nameMember: sortedUser.map(__ => __.name),
        listAvatarMember: [],
        timeStamp: serverTimestamp(),
        userPing: [],
        typeRoom: sortedUser.length == 2 ? 'private' : 'group',
        hostId: "" + currentUser?.id,
        nameGroup: sortedUser.length > 2 ? name : sortedUser.filter(__ => __.id !== currentUser?.id)[0].name,
        avatarMember: sortedUser.length > 2 ? image : '',
      });
      setIsCreating(false);
      setIsOpened(false);
      navigate(`/${created.id}`);
    } else {
      setIsOpened(false);
      navigate(`/${querySnapshot.docs[0].id}`);
      setIsCreating(false);
    }
  };

  return (
    <div
      onClick={() => setIsOpened(false)}
      className="fixed top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-[#00000080]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-neutral-300 mx-3 w-full max-w-[500px] overflow-hidden rounded-lg"
      >
        <div className="border-dark-lighten flex items-center justify-between border-b py-3 px-3">
          <div className="flex-1"></div>
          <div className="flex flex-1 items-center justify-center">
            <h1 className="whitespace-nowrap text-center text-2xl">
              Tạo cuộc trò chuyện
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
        <div className="flex">
          <input
            type="text"
            value={filter}
            className="p-2 text-dark outline-none rounded m-5 w-full"
            placeholder="Tên người dùng" 
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div>
          <div className="mx-5 bg-neutral-400 p-2 h-40 overflow-y-auto">
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
        </div>
        <>
          {isCreating && (
            <div className="absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-[#00000080]">
              <Spin color="#0D90F3" />
            </div>
          )}
          <div className="flex h-96 flex-col items-stretch gap-2 overflow-y-auto py-2">
            {users && users
              .filter((__ : any) => __.idNguoiDung !== currentUser?.id && __?.tenNguoiDung.toLowerCase().includes(filter.toLowerCase()))
              .map(((__: any, index : number) => (
                <div
                  key={index + Math.random()}
                  onClick={() => handleToggle(__?.idNguoiDung)}
                  className="hover:bg-stone-400 flex cursor-pointer items-center gap-2 px-5 py-2 transition"
                >
                  <input
                    className="flex-shrink-0 cursor-pointer"
                    type="checkbox"
                    checked={selected.includes(__?.idNguoiDung)}
                    readOnly
                  />
                  <img
                    className="h-8 w-8 flex-shrink-0 rounded-full object-cover"
                    src={__?.strNguoiDungAnhDinhKem || DEFAULT_AVATAR}
                    alt=""
                  />
                  <p>{__?.tenNguoiDung}</p>
                </div>
              )))}
          </div>
          <div className="border-dark-lighten border-t p-3">
            {selected.length > 1 && (
              <div className="flex justify-between items-center mb-3">
                <input
                  type="text"
                  value={name}
                  className="p-2 text-dark outline-none rounded"
                  placeholder="Tên cuộc trò chuyện" 
                  onChange={(e) => setName(e.target.value)}
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-dark flex items-center gap-3 rounded-lg px-3 py-2 bg-blue-400 transition duration-300 hover:brightness-125"
                >
                  {!image ? 'Vui lòng chọn ảnh' : 'Đã chọn ảnh'}
                </button>
                <input
                  hidden
                  className="hidden"
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileInputChange}
                />
              </div>
            )}

            <div className="flex justify-center items-center">
              <button
                disabled={selected.length === 0 || (selected.length > 1 && !name) || (selected.length > 1 && !image)}
                onClick={handleCreateConversation}
                className="bg-green-300 rounded-lg py-2 px-3 transition duration-300 hover:brightness-125 disabled:!brightness-[80%]"
              >
                Tạo cuộc trò chuyện
              </button>
            </div>
          </div>
        </>
        <Alert
          isOpened={isAlertOpened}
          setIsOpened={setIsAlertOpened}
          text={alertText}
          isError
        />
      </div>
    </div>
  );
};

export default CreateConversation;
