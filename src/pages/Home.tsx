import { FC } from "react";
import SideBar from "../components/Home/SideBar";

const Home: FC = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="hidden flex-grow flex-col items-center justify-center gap-3 md:!flex">
        <h1 className="text-center">Chọn một cuộc trò chuyện để bắt đầu</h1>
      </div>
    </div>
  );
};

export default Home;
