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
  sender: string;
  content: string;
  replyTo?: string;
  file?: {
    name: string;
    size: number;
  };
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  type: "text" | "image" | "file" | "sticker" | "removed";
  reactions: {
    [key: string]: number;
  };
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
