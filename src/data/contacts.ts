import { IContact } from "../types/contact";
import { IUser } from "../types/user";

export const contacts: IContact[] = [
  {
    id: "9876",
    name: "contact 1",
    avatar: "c1",
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
