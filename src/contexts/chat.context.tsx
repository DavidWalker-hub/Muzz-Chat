import { createContext, useContext } from "react";
import { defaultConversation } from "../data/conversation";

export const ChatContext = createContext(defaultConversation);

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useChatStore();
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

const useChatStore = () => {
  return [...defaultConversation];
};
