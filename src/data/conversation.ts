import { IMessage } from "../types/message";

export const defaultConversation: IMessage[] = [
  {
    message: "fingers crosssed!",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date("06-09-2023 12:00:15"),
  },
  {
    message: "Well good luck, I'd hire you!",
    sender: "654321",
    recipient: "123456",
    timeStamp: new Date("06-09-2023 12:06:30"),
  },

  {
    message:
      "A prospective employee only I'm afraid, have to see what they think of my work",
    sender: "123456",
    recipient: "654321",
    timeStamp: new Date("06-09-2023 12:00:10"),
  },
  {
    message: "Hi there, so you work at Muzz? That's amazing",
    recipient: "123456",
    sender: "654321",
    timeStamp: new Date("06-08-2023 17:00"),
  },
];
