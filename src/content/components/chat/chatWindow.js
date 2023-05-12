import { useState, useImperativeHandle, forwardRef, useEffect, useRef } from 'react'
import ChatLine from "./chatline";

function ChatWindow(props, ref) {
  const chatSelfRef = useRef(null);

  const [messages, setMessages] = useState([]);

    useImperativeHandle(ref, () => ({
        addMessage: (message) => {
          setMessages([...messages, message]);
        },
        initMessages: (messages) => {
          setMessages([messages]);
        },
        getMessages: () => messages
    }))
    useEffect(()=>{
        console.log('聊天窗口中的_____message ',messages)
        chatSelfRef.current.scrollTop = chatSelfRef.current.scrollHeight;
    },[messages])
    return (
        <div className="chatline" ref={chatSelfRef}>
        {messages.length === 0 && <ChatLine role="assistant" message='欢迎使用 ONES Sql-helper 在使用前请在配置页初始化prompt,以便更好生成相应内容'/>}
        {messages.map((item, index) => (
          <ChatLine key={`${index}-${Math.random(100)}`} role={item.role} message={item.content} />
        ))}
      </div>
    );
}
export default forwardRef(ChatWindow)