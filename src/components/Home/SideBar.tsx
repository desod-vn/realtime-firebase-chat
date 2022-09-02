import { DEFAULT_AVATAR, IMAGE_PROXY } from "../../shared/constants";
import { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { collection, orderBy, query, where, updateDoc, doc } from "firebase/firestore";
import ClickAwayListener from "../ClickAwayListener";
import { ConversationInfo } from "../../shared/types";
import CreateConversation from "./CreateConversation";
import SelectConversation from "./SelectConversation";
import Spin from "react-cssfx-loading/src/Spin";
import { db } from "../../shared/firebase";
import { useCollectionQuery } from "../../hooks/useCollectionQuery";
import { useStore } from "../../store";

const SideBar: FC = () => {
  const currentUser = useStore((state) => state.currentUser);
  const [filter, setFilter] = useState('');
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [createConversationOpened, setCreateConversationOpened] =
    useState(false);

  const { data, error, loading } = useCollectionQuery(
    "conversations",
    query(
      collection(db, "room"),
      where("idMember", "array-contains", currentUser?.id.toString()),
    )
  );

  const handlePing = () => {
    const pingUser = localStorage.getItem('pingToken') || null;
    if (!!pingUser) {
      data?.docs.map(item => {
        if(!Array.isArray(item.data()?.userPing)){
          updateDoc(doc(db, "room", item.id), {
            "userPing": [pingUser],
          });
        }
        if (Array.isArray(item.data()?.userPing) && !item.data().userPing.includes(pingUser)) {
          updateDoc(doc(db, "room", item.id), {
            "userPing": [...item.data()?.userPing, pingUser],
          });
        }
      })
    }
  }

  handlePing()

  const signOut = () => {
    const pingUser = localStorage.getItem('pingToken') || null;
    if (!!pingUser) {
      data?.docs.map(item => {
        if(Array.isArray(item.data()?.userPing) && item.data().userPing.includes(pingUser)) {
          updateDoc(doc(db, "room", item.id), {
            "userPing": item.data()?.userPing.filter((__ : any) => __ != pingUser),
          });
        }
      })
    }
    localStorage.clear();
    window.location.reload();
  }
  const location = useLocation();

  return (
    <>
      <div
        className={`border-dark-lighten h-screen flex-shrink-0 overflow-y-auto overflow-x-hidden border-r ${
          location.pathname !== "/"
            ? "hidden w-[350px] md:!block"
            : "w-full md:!w-[350px]"
        }`}
      >
        <div className="border-dark-lighten flex h-20 items-center justify-between border-b px-6">
          <Link to="/" className="flex items-center gap-1">
            <img className="w-40" src="/logo.png" alt="" />
          </Link>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setCreateConversationOpened(true)}
              className="h-8 w-8 rounded-full"
            >
              <i className="bx bxs-edit text-xl"></i>
            </button>

            <ClickAwayListener onClickAway={() => setIsDropdownOpened(false)}>
              {(ref) => (
                <div ref={ref} className="relative z-10">
                  <img
                    onClick={() => setIsDropdownOpened((prev) => !prev)}
                    className="h-8 w-8 cursor-pointer rounded-full object-cover"
                    src={
                      !!currentUser?.nguoiDung_AnhDinhKem && currentUser?.nguoiDung_AnhDinhKem.length && currentUser?.nguoiDung_AnhDinhKem[0].url
                        ? IMAGE_PROXY(currentUser?.nguoiDung_AnhDinhKem[0].url)
                        : DEFAULT_AVATAR
                    }
                    alt=""
                  />

                  <div
                    className={`border-dark-lighten bg-white absolute top-full right-0 flex w-max origin-top-right flex-col items-stretch overflow-hidden rounded-md border py-1 shadow-lg transition-all duration-200 ${
                      isDropdownOpened
                        ? "visible scale-100 opacity-100"
                        : "invisible scale-0 opacity-0"
                    }`}
                  >
                    <p className="p-2">
                      Tên:
                      { currentUser?.ten }
                    </p>
                    <p className="p-2">
                      Email:
                      { currentUser?.email }
                    </p>
                    <p className="p-2">
                      TK:
                      { currentUser?.taiKhoan }
                    </p>

                    
                    <button
                      onClick={() => signOut()}
                      className="hover:bg-dark-lighten flex items-center gap-1 px-3 py-1 transition duration-300"
                    >
                      <i className="bx bx-log-out text-xl"></i>
                      <span className="whitespace-nowrap">Đăng xuất</span>
                    </button>
                  </div>
                </div>
              )}
            </ClickAwayListener>
          </div>
        </div>

        {loading ? (
          <div className="my-6 flex justify-center">
            <Spin />
          </div>
        ) : error ? (
          <div className="my-6 flex justify-center">
            <p className="text-center">Có lỗi xảy ra</p>
          </div>
        ) : data?.empty ? (
          <div className="my-6 flex flex-col items-center justify-center">
            <p className="text-center">Không có cuộc trò chuyện nào</p>
            <button
              onClick={() => setCreateConversationOpened(true)}
              className="text-primary text-center"
            >
              Tạo cuộc trò chuyện mới
            </button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              value={filter}
              className="p-2 text-dark outline-none rounded m-5"
              placeholder="Tìm kiếm" 
              onChange={(e) => setFilter(e.target.value)}
            />
            {data?.docs
              .filter((__ : any) => {
                if (__.data().idMember > 2) {
                  return __.data().nameGroup.includes(filter.toLowerCase())
                }
                return __.data().nameMember
                  .filter((__ : string) => __ != currentUser.ten)[0]
                  .toLowerCase()
                  .includes(filter.toLowerCase())
              })
              .sort((a : any, b : any) => {
                return new Date(b.data().timestamp?.seconds * 1000 ).getTime() - new Date(a.data().timestamp?.seconds * 1000).getTime();
              })
              .map((item) => (
                <SelectConversation
                  key={item.id}
                  conversation={item.data() as ConversationInfo}
                  conversationId={item.id}
                  />
              ))}
          </div>
        )}
      </div>

      {createConversationOpened && (
        <CreateConversation setIsOpened={setCreateConversationOpened} />
      )}
    </>
  );
};

export default SideBar;
