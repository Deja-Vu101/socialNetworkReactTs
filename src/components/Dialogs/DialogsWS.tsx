import { useEffect, useState } from "react";
import List from "../List";
import { ChatMessageType, MessageType } from "../../types/types";
import Message from "./Message";

const DialogsWS = () => {

  const [ws, setWs] = useState<WebSocket | null>(null);
  

  const [message, setMessage] = useState<ChatMessageType[]>([]);
  const [intputValue, setInputValue] = useState("");

  useEffect(() => {
    const newWs = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");
    newWs.addEventListener("message", (e) => {
      let newMessages = JSON.parse(e.data);
      setMessage((prevArr) => [...prevArr, ...newMessages]);
    });

    setWs(newWs);

    return () => {
      newWs.close();
    };
  
  }, []);

  const sendMessage = () => {
    ws?.send(intputValue);
    setInputValue("");
  };

  return (
    <>
      <List
        items={message}
        renderItem={(message: ChatMessageType) => <Message message={message} />}
      />
      <input
        type="text"
        value={intputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </>
  );
};

export default DialogsWS;
