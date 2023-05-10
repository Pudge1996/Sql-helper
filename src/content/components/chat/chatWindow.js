import { useState, useImperativeHandle, forwardRef, useEffect, useRef } from 'react'
import ChatLine from "./chatline";

function ChatWindow(props, ref) {
  const chatSelfRef = useRef(null);
  const testData = [
    {
      user: 'assistant',
      content: '助手发送的消息，助手发送的消息，助手发送的消息，助手发送的消息，助手发送的消息。助手发送的消息，助手发送的消息，助手发送的消息，助手发送的消息，助手发送的消息。助手发送的消息，'
    },
    {
      user: 'user',
      content: '我发送的消息'
    },
    {
      user: 'system',
      content: '这是一则系统消息'
    }
  ]
  const [messages, setMessages] = useState([...testData]);

    useImperativeHandle(ref, () => ({
        addMessage: (message) => {
          console.log('看看 addM', message)
            setMessages([...messages, message]);
        }
    }))
    useEffect(()=>{
        console.log(messages)
        chatSelfRef.current.scrollTop = chatSelfRef.current.scrollHeight;

    },[messages])
  return (
    <div className="chatline" ref={chatSelfRef}>
      {messages.map((item, index) => (
        <ChatLine key={`${index}-${Math.random(100)}`} role={item.user} message={item.content} />
      ))}
    </div>
  );
}
export default forwardRef(ChatWindow)