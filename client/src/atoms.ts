import { atom } from "recoil";
import { Room } from "types";

export const isUserInRoomState = atom<boolean>({
  key: "isUserInRoom",
  default: false,
});

export const roomListState = atom<Room[]>({
  key: "roomList",
  default: [],
});
