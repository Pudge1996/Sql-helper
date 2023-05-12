import { Input, Form } from "antd";
import { useEffect } from "react";
function ChatInputMessage({loading, value, onChange }) {
  const { TextArea } = Input;
  useEffect(() => {
    console.log('chatInputMessage useEffect', loading)
  }, [loading]);
  return (
    <div className="input-message">

      {
        loading &&
        (
        <div className="message-loading">
          <div className="message-loading-spin">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3C16.9706 3 21 7.02944 21 12H19C19 8.13401 15.866 5 12 5V3Z"></path></svg>
          </div>
          <span>加载中，请稍候...</span>
        </div>
        )
      } 
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
          />
        </Form.Item>
      </Form>
    </div>
  );
}

export default ChatInputMessage