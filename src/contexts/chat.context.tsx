/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useState } from "react";
import { defaultConversation } from "../data/conversation";
import { IMessage } from "../types/message";
import { differenceInSeconds } from "date-fns";
import { IUser } from "../types/user";
import { defaultUser, contacts } from "../data/contacts";

interface IChatContext {
  sortedConversation: IMessage[] | [];
  sendMessage: (message: IMessage) => void;
  userId: IUser["id"];
  contactId: IUser["id"];
  setUserId: React.Dispatch<React.SetStateAction<string>>;
  setContactId: React.Dispatch<React.SetStateAction<string>>;
}

export const ChatContext = createContext<IChatContext>({
  sortedConversation: defaultConversation || [],
  sendMessage: () => {},
  userId: defaultUser.id,
  contactId: contacts[1].id,
  setUserId: () => {},
  setContactId: () => {},
});

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useChatStore();
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

const useChatStore = () => {
  const sortConversation = (conversation: IMessage[]) =>
    conversation.sort((a, b) => differenceInSeconds(b.timeStamp, a.timeStamp));

  const [sortedConversation, setSortedConversation] = useState<IMessage[] | []>(
    sortConversation(defaultConversation)
  );
  const [userId, setUserId] = useState<IUser["id"]>(defaultUser.id);
  const [contactId, setContactId] = useState<IUser["id"]>(contacts[1].id);

  const sendMessage = (message: IMessage) => {
    const newSortedConversation = sortConversation([
      message,
      ...sortedConversation,
    ]);
    setSortedConversation(newSortedConversation);
  };

  return {
    sortedConversation,
    sendMessage,
    userId,
    contactId,
    setUserId,
    setContactId,
  };
};
