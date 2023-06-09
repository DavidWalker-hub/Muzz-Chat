import { IContact } from "../types/contact";
import { IUser } from "../types/user";

export const contacts: IContact[] = [
  {
    id: "123456",
    name: "Dave walker",
    avatar: "DW",
  },
  {
    id: "654321",
    name: "Future Mrs Walker",
    avatar: "W",
  },
];

export const defaultUser: IUser = {
  id: "123456",
  name: "Dave Walker",
  profileInformation: {},
};
