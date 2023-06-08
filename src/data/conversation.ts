import { IMessage } from "../types/message";

export const defaultConversation: IMessage[] = [
  {
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date(),
    message: "hi",
  },
];
