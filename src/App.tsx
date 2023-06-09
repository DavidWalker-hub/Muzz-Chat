import { Chat } from "./components/Chat";
import { Layout } from "./components/Layout";
import { ChatProvider } from "./contexts/chat.context";

function App() {
  return (
    <>
      <ChatProvider>
        <Layout>
          <Chat />
        </Layout>
      </ChatProvider>
    </>
  );
}

export default App;
