import { useNavigate  } from 'react-router-dom'
import { Button, Input } from 'antd'
import imgLogo from './logo.png'
import './login.styl'

// demo 练手页，后续以此基础改为表单页
export default function Login() {
    // 路由钩子
    const navigate = useNavigate();

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
                <Button type="primary" block={true} onClick={toChat}>初始化</Button>
            </div>
        </div>
    )
}