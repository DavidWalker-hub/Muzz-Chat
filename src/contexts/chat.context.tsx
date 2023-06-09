/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useState } from "react";
import { defaultConversation } from "../data/conversation";
import { IMessage } from "../types/message";
import { differenceInSeconds } from "date-fns";

interface IChatContext {
  sortedConversation: IMessage[] | [];
  sendMessage: (message: IMessage) => void;
}

export const ChatContext = createContext<IChatContext>({
  sortedConversation: defaultConversation || [],
  sendMessage: () => {},
});

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useChatStore();
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

const useChatStore = () => {
  const sortConversation = (conversation: IMessage[]) => {
    return conversation.sort((a, b) =>
      differenceInSeconds(b.timeStamp, a.timeStamp)
    );
  };
  const [sortedConversation, setSortedConversation] = useState<IMessage[] | []>(
    sortConversation(defaultConversation)
  );

  const sendMessage = (message: IMessage) => {
    const newSortedConversation = sortConversation([
      message,
      ...sortedConversation,
    ]);
    setSortedConversation(newSortedConversation);
  };

  return { sortedConversation, sendMessage };
};
