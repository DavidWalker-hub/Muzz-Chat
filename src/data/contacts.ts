import { IContact } from "../types/contact";
import { IUser } from "../types/user";

export const contacts: IContact[] = [
  {
    id: "123456",
    name: "contact 1",
    avatar: "c1",
  },
  {
    id: "654321",
    name: "contact 2",
    avatar: "c2",
  },
];

export const defaultUser: IUser = {
  id: "123456",
  name: "Dave Walker",
  profileInformation: {},
};
