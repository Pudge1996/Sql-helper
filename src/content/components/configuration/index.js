import { useState } from "react";
import { Button, Input, Select, Form, Space, ConfigProvider, Tabs } from "antd";
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
    <ConfigProvider
      autoInsertSpaceInButton={false}
      theme={{
        token: {
          colorPrimary: "#0064ff",
          colorPrimaryHover: "#226AFF",
          colorPrimaryActive: "#0032BE",
          colorSuccess: "#00be5e",
          colorWarning: "#ffaa33",
          colorError: "#ff4433",
          colorInfo: "#0064ff",
          colorText: "#303030",
          colorTextSecondary: "#606060",
          colorTextTertiary: "#909090",
          colorBorder: "#c7c7c7",
          colorBgMask: "rgba(48, 48, 48, 0.5)",
          borderRadius: 3,
          sizeStep: 5,
          sizeUnit: 5,
          wireframe: false,
        },
      }}
    >
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
    </ConfigProvider>
  );
}

export default MainModal;
