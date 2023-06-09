import { IMessage } from "../types/message";

export const defaultConversation: IMessage[] = [
  {
    message:
      "message1 A significantly longer message to test how multiple line messages may work",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date("06-09-2023 12:00:15"),
  },
  {
    message: "message2 timestamped",
    sender: "654321",
    recipient: "123456",
    timeStamp: new Date("06-09-2023 14:06:30"),
  },

  {
    message: "message1",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date("06-09-2023 14:03:30"),
  },
  {
    message: "message3",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date("06-09-2023 12:00:10"),
  },
  {
    message: "message3 weird that longer messages change this",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date("06-08-2023 17:00"),
  },
];
