import { useState, useCallback } from "react";
import { Button, Input, Form } from "antd";
import ChatLine from "./chatline";

function InputMessage({ value, onChange }) {
  const { TextArea } = Input;

  return (
    <div className="" style={{ marginTop: "0" }}>
      <Form layout="vertical">
        <Form.Item>
          <TextArea
            placeholder="输入条件，按回车键提交"
            value={value}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault(); // 阻止默认行为
                onChange("");
              }
            }}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            bordered={false}
            autoSize={{ minRows: 3, maxRows: 6 }}
          />
        </Form.Item>
      </Form>
    </div>
  );
}

function Chat(props) {
  const [input, setInput] = useState("");

  // 记忆化组件内的 onChange 方法，避免不必要的函数重建
  const handleChangeInput = useCallback((value) => {
    setInput(value);
  }, []);

  return (
    <>
      <div className="chatline">
        <ChatLine role="assistant" message="助手发送的消息，助手发送的消息，助手发送的消息，助手发送的消息，助手发送的消息。" />
        <ChatLine role="user" message="我发送的消息" />
        <ChatLine role="system" message="一则系统通知" />
      </div>
      <InputMessage value={input} onChange={handleChangeInput} />
    </>
  );
}

export default Chat;
