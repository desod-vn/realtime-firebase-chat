export interface ConversationInfo {
  avatarMember: string;
  fristMessage: string;
  typeRoom: string;
  nameGroup: string;
  timestamp: any;
  listAvatarmembers: string[];
  idMember: string[];
  nameMember: string[];
}


export interface SavedUser {
  uid: string;
  email: string | null;
  displayName: string;
  photoURL: string;
  phoneNumber: string | null;
}

export interface MessageItem {
  id?: string;
  author: string;
  content: string;
  idRoom: string;
  nameFile?: string;
  reactions: string[];
  timeStamp: {
    seconds: number;
    nanoseconds: number;
  };
  typeMessage: "text" | "image" | "file" | "sticker" | "removed";
}

export interface StickerCollection {
  name: string;
  thumbnail: string;
  icon: string;
  id: string;
  stickers: {
    id: string;
    spriteURL: string;
  }[];
}

export type StickerCollections = StickerCollection[];
