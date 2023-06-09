import { createContext, useContext, useState } from "react";
import { defaultConversation } from "../data/conversation";
import { IMessage } from "../types/message";
import { differenceInSeconds } from "date-fns";

export const ChatContext = createContext({
  sortedConversation: defaultConversation || [],
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

  return { sortedConversation };
};
