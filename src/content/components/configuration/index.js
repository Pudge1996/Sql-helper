
import { useState, useRef, React} from "react";
import { Button, Input, Form } from "antd";
import { apiReqs } from '@/api'


function MainModal(props) {
  const [text, setText] = useState(null);
  const [apiKey, setApiKey] = useState('');
  const apiKeyRef = useRef('apiKeyInput');
  const textAreaRef = useRef('textAreaRef');

  // 随着Input的输入变化，及时更新text
  const handleIptChange = (e) => {
    setText(e.target.value);
  };

  // 提交
  const postInitPrompt = () => {
    // apiReqs.getModalList({ 
    //     headers: {
    //       Authorization: `Bearer ${apiKey}`
    //     },
    //     success: (res) => {
    //         console.log(res)
    //     },
    //     fail: (res) => {
    //         alert(res)
    //     },
    // })
    const text = textAreaRef.current.resizableTextArea.textArea.value;
    console.log("kankan text",apiKey)
    // return
    apiReqs.postChat({
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      data: {
        model: "gpt-3.5-turbo",
        
        // session_id: 'unique-session-id', // 设置 sessionId
        messages: [{
          role: "system",
          content: formatTextPrompt(text),
        }],
        temperature: 0.7, // 0 ~ 1 越接近 1 越具有不确定性
        max_tokens: 2048, // 
        // prompt: formatTextPrompt(text),
      },
      success: (res) => {
          console.log(res)
      },
      fail: (res) => {
          console.log('fail',res)
          alert(res)
      },
    })
  };


  function formatTextPrompt(text) {
    const lines = text.trim().split('\n');
    const keywordMappings = lines.map(line => {
      const [keyword, sql] = line.split('\t');
      return `获取关键字“${keyword}”对应的 SQL 语句为‘${sql}’,`;
    });
    const results = `
      你现在是一个通晓 SQL 和各种 DSL 专业助手，你需要根据自然语言生成 SQL 语句，
      下面会给你一个自定义的SQL规则，SQL规则关键字参考这个链接https://clickhouse.com/docs/zh/sql-reference/functions/arithmetic-functions，
      还有这个链接https://guide.ones.pro/wiki/#/team/LBrdb4wE/space/6XDAYB1a/page/2wHPDuJE中的SQL使用说明，等会我会基于自然语言要求你按照以下关键字对应的SQL语句来给我生成我需要的SQL
      ${keywordMappings.join('\n')}
      之后我需要的SQL语句请按照以上映射规则告诉我，更详细规则参考以下链接：https://clickhouse.com/docs/zh/sql-reference/functions/arithmetic-functions https://guide.ones.pro/wiki/#/team/LBrdb4wE/space/6XDAYB1a/page/2wHPDuJE
    `;

    return results.trim();
  }

  // 保存API Key
  const setCustomApiKey = (e) => {
    setApiKey(apiKeyRef.current.input.value)
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
          className="key-value-form"
          style={{ flexGrow: "1", height: "100%" }}
        >
          <TextArea
            ref={textAreaRef}
            placeholder="粘贴 SQL 的 Key & Value"
            id="key&value"
            value={text}
            onChange={handleIptChange}
            bordered={false}
          />
        </Form.Item>
        <Form.Item>
          <Button onClick={postInitPrompt} type="primary" block={true} htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>

      {/* API Key 表单 */}
      <Form
        layout="vertical"
        size={10}
        style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}
        className="api-key-form"
      >
        <Form.Item label="API Key" htmlFor="apiKey" style={{ width: "100%" }}>
          <Input.Password
            ref={apiKeyRef}
            name="apiKeyInput"
            bordered={false}
            className="api_key_input"
            visibilityToggle={false}
            placeholder="sk-**********"
          />
        </Form.Item>
        <Form.Item>
          <Button type="default" htmlType="submit" onClick={setCustomApiKey}>
            保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default MainModal;
