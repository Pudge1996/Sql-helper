import { useState, useRef } from "react";
import { Input, Form } from "antd";
import ChatWindow from "./chatWindow";
import { apiReqs } from  "@/api"
/* global chrome */
// TODO: 待抽离
function InputMessage({ value, onChange }) {
  const { TextArea } = Input;

  return (
    <div className="input-message">
      <Form layout="vertical">
        <Form.Item>
          <TextArea
            placeholder="输入条件，按回车键提交"
            value={value}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault(); // 阻止默认行为
                onChange({value: "", status: "enter"});
              }
            }}
            onChange={(e) => {
              onChange({value: e.target.value, status: "input"});
            }}
            bordered={false}
            autoSize={{ minRows: 3, maxRows: 6 }}
          />
        </Form.Item>
      </Form>
    </div>
  );
}

function Chat() {
  const [input, setInput] = useState("");
  const chatWindowRef = useRef();

  // 记忆化组件内的 onChange 方法，避免不必要的函数重建
  const handleChangeInput = (props) => {
    const {value, status} = props;
    console.log('onChange 参数最终', props)
    if( status === "enter" & input !== "") {
      const message = {
        role: 'user',
        content: input
      }
      chatWindowRef.current.addMessage(message)
      // TODO: 调用接口
      handlePostChat()
    }
    setInput(value);
  };

  const handlePostChat = async () => {
    let apiKey =  window.localStorage.getItem('apiKey');
    const currentMessages = chatWindowRef.current.getMessages();
    console.log('看看当前的currentMessages', currentMessages)
    return apiReqs.postChat({
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      data: {
        model: "gpt-3.5-turbo",
        messages: [...currentMessages],
        temperature: 0.7, // 0 ~ 1 越接近 1 越具有不确定性
        max_tokens: 2048, // 
      },
      success: (res) => {
          console.log('看一下请求结果', res);
      },
      fail: (res) => {
          console.log('fail',res)
          alert(res)
      },
    })
  }

  return (
    <div className="chat">
      <ChatWindow ref={chatWindowRef}/>
      <InputMessage value={input} onChange={handleChangeInput} />
    </div>
  );
}

export default Chat;
