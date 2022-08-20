import create from "zustand";
import { UserInfo } from "../shared/types"
interface StoreType {
  currentUser: UserInfo | any | undefined | null;
  setCurrentUser: (user: UserInfo | null | any) => void;
}


export const useStore = create<StoreType>((set: any) => ({
  currentUser: undefined,
  setCurrentUser: (user) => set({ currentUser: user }),
}));
