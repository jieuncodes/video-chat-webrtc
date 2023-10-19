import { atom } from "recoil";
import { Room } from "types";

export const roomListState = atom<Room[]>({
  key: "roomList",
  default: [],
});
