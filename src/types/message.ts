import { IContact } from "./contact";
import { IUser } from "./user";

export interface IMessage {
  sender: IUser["id"];
  recipient: IContact["id"];
  timeStamp: Date;
  message: string;
}
