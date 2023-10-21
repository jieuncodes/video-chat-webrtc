export type Room = {
  id: number;
  payload: string;
};

export type SocketMsg = {
  id: number;
  name: {
    payload: string;
  };
};
interface HeaderProps {
  title: string;
  chatNum?: string;
