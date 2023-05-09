
import { useState, useRef, React} from "react";
import { Button, Input, Form } from "antd";
import { apiReqs } from '@/api'


function MainModal(props) {
  const [text, setText] = useState(null);
  const [apiKey, setApiKey] = useState('');
  const [form] = Form.useForm();
  const refForm = useRef('form');

  // 随着Input的输入变化，及时更新text
  const handleIptChange = (e) => {
    setText(e.target.value);
  };

  // 提交
  const getModalList = () => {
    apiReqs.getModalList({
        headers: {
          Authorization: `Bearer ${apiKey}`
        },
        success: (res) => {
            console.log(res)
        },
        fail: (res) => {
            alert(res)
        },
    })
  };

  // 保存API Key
  const setCustomApiKey = (e) => {

    console.log('保存API Key 1', e);
    console.log('ref value', refForm.current.input.value);
    setApiKey(refForm.current.input.value)
    console.log("保存API Key form",form );
  };
  const onFinishFailed = (e) => {
    console.log('数据获取失败',e)
  }

  const setCustomApiKeyOnsubmit = (e) => {
    console.log('保存API Key 2', e);
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
          <Button onClick={getModalList} type="primary" block={true} htmlType="submit">
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
            ref={refForm}
            name="apiKey"
            bordered={false}
            className="api_key_input"
            visibilityToggle={false}
            placeholder="sk-**********"
          />
        </Form.Item>
        <Form.Item>
          <Button type="default" htmlType="submit" onSubmit={setCustomApiKeyOnsubmit}>
            保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default MainModal;
