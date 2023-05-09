import { useState } from "react";
import { Button, Input, Form, Space } from "antd";
// import { apiReqs } from '@/api'
// import "./configuration.styl";

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
    <>
      <Space
        direction="vertical"
        size={20}
        style={{ display: "flex" }}
        className="main-content-con"
      >
        <Form layout="vertical">
          <Space direction="vertical" size={10} style={{ display: "flex" }}>
            <Form.Item label="Key & Value" htmlFor="key&value">
              <TextArea
                placeholder="粘贴 SQL 的 Key & Value"
                id="key&value"
                value={text}
                onChange={handleIptChange}
                bordered={false}
                autoSize={{ minRows: 10, maxRows: 10 }}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" block={true} htmlType="submit">
                保存
              </Button>
            </Form.Item>
          </Space>
        </Form>

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
              placeholder="填入 API Key"
            />
          </Form.Item>
          <Form.Item>
            <Button type="default" htmlType="submit">
              保存
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </>
  );
}

export default MainModal;
