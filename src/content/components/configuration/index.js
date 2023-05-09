import { React, useState } from "react";
import { Button, Input, Form } from "antd";
// import { apiReqs } from '@/api'

function MainModal(props) {
  const [text, setText] = useState(null);

  // 随着Input的输入变化，及时更新text
  const handleIptChange = (e) => {
    setText(e.target.value);
  };

  // 提交
  const submit = () => {
    // apiReqs.submitByBackground({
    //     data: {
    //         text,
    //         option,
    //     },
    //     success: (res) => {
    //         console.log(res)
    //     },
    //     fail: (res) => {
    //         alert(res)
    //     },
    // })
  };

  // 文本域
  const { TextArea } = Input;

  return (
    <div className="configuration">
      <Form layout="vertical" className="key-value">
        {/* Key & Value 表单 */}
        <Form.Item
          label="Key & Value"
          htmlFor="key&value"
          style={{ flexGrow: "1", height: "100%" }}
        >
          <TextArea
            placeholder="粘贴 SQL 的 Key & Value"
            id="key&value"
            value={text}
            onChange={handleIptChange}
            bordered={false}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block={true} htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>

      {/* API Key 表单 */}
      <Form
        layout="vertical"
        size={10}
        style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}
      >
        <Form.Item label="API Key" htmlFor="apiKey" style={{ width: "100%" }}>
          <Input.Password
            id="apiKey"
            bordered={false}
            className="api_key_input"
            visibilityToggle={false}
            placeholder="sk-**********"
          />
        </Form.Item>
        <Form.Item>
          <Button type="default" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default MainModal;
