import { useState, useRef } from "react";
import { Input, Form } from "antd";

import ChatWindow from "./chatWindow";


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
    if( status === "enter") {
      const message = {
        user: 'user',
        content: input
      }
      chatWindowRef.current.addMessage(message)
      // TODO: 调用接口
    }
    setInput(value);

  };

  return (
    <div className="chat">
      <ChatWindow ref={chatWindowRef}/>
      <InputMessage value={input} onChange={handleChangeInput} />
    </div>
  );
}

export default Chat;
