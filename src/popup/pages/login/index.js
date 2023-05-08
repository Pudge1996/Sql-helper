import { useNavigate  } from 'react-router-dom'
import { Button, Input, Select } from 'antd'
import imgLogo from './logo.png'
import './login.styl'

const { Option } = Select
// demo 练手页，后续以此基础改为表单页
export default function Login() {
    // 路由钩子
    const navigate = useNavigate();
    const [option, setOption] = useState('react')

    // 随着Select的选择变化，及时更新option
    const handleSelectChange = (value) => {
        setOption(value)
    }

    // 初始完成后跳到操作界面
    const toChat = () => {
        navigate('/chat')
    }
    return (
        <div className="P-login">
            <img src={imgLogo} alt="" className="logo"/>
            <div className="ipt-con">
                <label>opt-key:</label>
                <Input.Password placeholder="opt-key"/>
            </div>
            <div className="ipt-con">
                <label>session-key:</label>
                <Input.Password placeholder="session-key"/>
            </div>
            <div className="ipt-con">
                <label>Modal-type:</label>
                <Select
                    value={option}
                    onChange={handleSelectChange}
                    style={{ width: '100%' }}
                >
                    {/* TODO: 调取 get modal list 获取可用模型列表 */}
                    <Option value="gpt-3.5-turbo">gpt-3.5-turbo</Option>
                    <Option value="gpt-4-32k">text-davinci-003</Option>
                    <Option value="gpt-4-32k">gpt-4-32k</Option>
                </Select>
            </div>
            <div className="ipt-con">
                <Button type="primary" block={true} onClick={toChat}>初始化</Button>
            </div>
        </div>
    )
}